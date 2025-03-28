# 使用VectorDBBench工具性能测试
VectorDBBench 是一款开源向量数据库基准测试工具，主要通过测量关键指标来衡量向量数据库的性能。
本文介绍如何使用VectorDBBench工具对openGauss中Datavec向量引擎进行性能测试。

### 安装python3
推荐安装Python3.11以上版本
```bash
wget --no-check-certificate https://www.python.org/ftp/python/3.11.0/Python-3.11.0.tar.xz
tar -xvf Python-3.11.0.tar.xz
cd Python-3.11.0

# <YOUR_PYTHON_INSTALL_PATH> 为用户自定义的python安装路径
./configure --prefix=<YOUR_PYTHON_INSTALL_PATH> --enable-optimizations
make -j; make install
```
设置python3环境变量
```bash
vim ~/.bashrc
export PATH=<YOUR_PYTHON_INSTALL_PATH>/bin:$PATH
source ~/.bashrc
```
### 安装vectordb-bench
```bash
pip3 install vectordb-bench[all]
```
替换适配opengauss的vectordb-bench文件夹
```bash
# 下载适配opengauss的vectordb-bench：https://github.com/wlff123/VectorDBBench.git
cp -r vectordb_bench <YOUR_PYTHON_INSTALL_PATH>/lib/python3.11/site-packages/
```
### 数据集下载
VectorDBBench工具执行测试时，会根据选择的数据集自行从网络下载，也可以手动下载。
```bash
# cohere1m数据集下载示例
wget https://assets.zilliz.com/benchmark/cohere_medium_1m/test.parquet --no-check-certificate
wget https://assets.zilliz.com/benchmark/cohere_medium_1m/neighbors.parquet --no-check-certificate
wget https://assets.zilliz.com/benchmark/cohere_medium_1m/shuffle_train.parquet --no-check-certificate
```
### 配置openGauss数据库参数
按照测试需求对数据库节点目录下postgresql.conf文件中影响性能的关键参数配置：
```bash
max_connections = 1000 # 多并发测试时此值应大于并发连接数
shared_buffers = 16GB # 机器内存足够时，建议此值大于数据集大小
enable_indexscan = on # 开启索引扫描
enable_seqscan = off # 关闭全表扫描
```
### 性能测试
建议使用vectordbbench命令行执行测试，可以根据测试需求灵活调整测试参数。
```bash
# 修改数据集路径
# vi <YOUR_PYTHON_INSTALL_PATH>/lib/python3.11/site-packages/vectordb_bench/__init__.py
DATASET_LOCAL_DIR = '<YOUR_DATASET_PATH>'

# 本地机器如果不能从网络下载数据集，执行测试可能会报错，此时可以屏蔽掉下载数据集的相关代码
# vi <YOUR_PYTHON_INSTALL_PATH>/lib/python3.11/site-packages/vectordb_bench/backend/data_source.py
class AwsS3Reader(DatasetReader):
    # ...
    def read(self, dataset: str, files: list[str], local_ds_root: pathlib.Path):
        downloads = []
        # ...
        else:
            for file in files:
                remote_file = pathlib.PurePosixPath(self.remote_root, dataset, file)
                local_file = local_ds_root.joinpath(file)
                # 此处屏蔽下载数据集的代码
                # if (not local_file.exists()) or (not self.validate_file(remote_file, local_file)):
                #     log.info(f"local file: {local_file} not match with remote: {remote_file}; add to downloading list")
                #     downloads.append(remote_file)
```
测试命令示例
```bash
# vectordbbench opengausshnsw --case-type <DATASET> --k <TOPK> --concurrency-duration <DURATION> --num-concurrency <CONCURRENCY_NUM> --user-name <USERNAME> --password <PASSWORD> --host <HOST> --port <PORT> --db-name <DB_NAME> -m <M> --ef-construction <EF_CONSTRUCTION> --ef-search <EF_SEARCH>
# ALGORITHM 测试用例类型
# DATASET 测试用例数据集
# TOPK 查询最近邻结果数量
# DURATION 查询持续时间(秒)
# CONCURRENCY_NUM 并发数量
# USERNAME 数据库用户名
# PASSWORD 数据库密码
# HOST 数据库ip地址
# PORT 数据库端口
# M hnsw索引构建参数
# EF_CONSTRUCTION hnsw索引构建参数
# EF_SEARCH hnsw索引搜索参数

# 详细参数说明可以执行命令查看帮助
vectordbbench opengausshnsw --help
vectordbbench opengausshnswpq --help

# hnsw索引测试命令
vectordbbench opengausshnsw --case-type Performance768D1M --k 10 --concurrency-duration 60 --num-concurrency 1 --user-name gaussdb --password YourPassword --host 127.0.0.1 --port 5432 --db-name postgres -m 16 --ef-construction 200 --ef-search 200
# hnswpq索引测试命令
vectordbbench opengausshnswpq --pq_m 96 --hnsw_earlystop_threshold 160 --case-type Performance768D1M --k 10 --concurrency-duration 60 --num-concurrency 1 --user-name gaussdb --password YourPassword --host 127.0.0.1 --port 5432 --db-name postgres -m 16 --ef-construction 200 --ef-search 200
```
执行测试命令后，会在当前终端中打印测试执行过程和结果
```bash
# 测试结果示例说明
... INFO: Performance case got result: Metric(max_load_count=0, load_duration=xxx, qps=xxx, serial_latency_p99=xxx, recall=xxx, ndcg=xxx, conc_num_list=xxx, conc_qps_list=xxx, conc_latency_p99_list=xxx, conc_latency_avg_list=xxx)...
# load_duration 导入数据和构建索引的总时间
# qps 吞吐量
# serial_latency_p99 单并发查询p99时延
# recall 召回率
# conc_latency_p99_list 多并发查询p99时延
```
