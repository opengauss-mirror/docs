# SQLdiag<a name="ZH-CN_TOPIC_0000002259758156"></a>

SQLdiag是openGauss中SQL语句执行时长预测工具。现有的预测技术主要基于执行计划的预测方法，但这些预测方案仅适用于分析型场景且可以获取执行计划的任务，对于OLTP或者HTAP这样的快速、简单查询是没有太多使用价值的。与上述方案不同，SQLdiag着眼于数据库的历史SQL语句，通过对历史SQL语句的执行表现进行总结归纳，将之再用于推断新的未知业务上。由于短时间内数据库SQL语句执行时长不会有太大的差距，SQLdiag可以从历史数据中检测出与已执行SQL语句相似的语句结果集，并基于SQL向量化技术通过SQL模板化和深度学习这两种方法来预测SQL语句执行时长。本工具有如下优点：

- 不需要SQL语句的执行计划，对数据库性能不会有任何的影响。
- 使用场景广泛，目前业内的很多算法局限性比较高，比如只适用于OLTP或者其他场景，而SQLdiag使用场景广泛。
- 该工具容易理解，只需要简单的操作，就可以训练出自己的预测模型。

本工具的典型应用场景是对一批即将上线的SQL语句进行透视，提前识别风险。

## 概述<a name="ZH-CN_TOPIC_0000002294398305"></a>

SQLdiag是一个SQL语句执行时间预测工具。

通过模板化方法或者深度学习方法，实现在不获取SQL语句执行计划的前提下，依据语句逻辑相似度与历史执行记录，预测SQL语句的执行时间并以此发现异常SQL。

## 使用指导<a name="ZH-CN_TOPIC_0000002294471373"></a>

### 前提条件与使用事项<a name="zh-cn_topic_0000001714949001_zh-cn_topic_0283137132_zh-cn_topic_0059779027_s7c2e433674384463a42b1e562a499257"></a>

- 需要保证用户提供训练数据。
- 如果用户通过提供的工具收集训练数据，则需要启用WDR功能，涉及到的参数为track\_stmt\_stat\_level和log\_min\_duration\_statement，具体情况见下面小结。
- 为保证预测准确率，用户提供的历史语句日志应尽可能全面并具有代表性。

### SQL流水采集方法<a name="zh-cn_topic_0000001714949001_section11673554164710"></a>

本工具需要用户提前准备数据，训练数据格式如下，每个样本通过换行符分隔：

```
SQL,EXECUTION_TIME
```

预测数据格式如下：

```
SQL
```

其中SQL表示SQL语句的文本，EXECUTION\_TIME表示SQL语句的执行时间，样例数据见sample\_data中的train.csv和predict.csv。

用户可以按照要求格式自己收集训练数据，工具也提供了脚本自动采集（load\_sql\_from\_rd），该脚本基于WDR报告获取SQL信息，涉及到的参数有log\_min\_duration\_statement和track\_stmt\_stat\_level：

- 其中log\_min\_duration\_statement表示慢SQL阈值，如果为0则全量收集，时间单位为毫秒；
- track\_stmt\_stat\_level表示信息捕获的级别，建议设置为track\_stmt\_stat\_level='L0,L0'

参数开启后，可能占用一定的系统资源，但一般不大。持续的高并发场景可能产生5%以内的损耗，数据库并发较低的场景，性能损耗可忽略。下述脚本存在于sqldiag根目录（$DBMINDPATH/dbmind/components/sqldiag）中。

```
使用脚本获取训练集方式：
usage: load_sql_from_wdr.py [-h] --port PORT --start-time START_TIME --finish-time FINISH_TIME [--save-path SAVE_PATH]

Fetch SQL information based on WDR.

optional arguments:
  -h, --help            show this help message and exit
  --port PORT, --db-port PORT
                        Port of database service.
  --start-time START_TIME
                        Start time of query
  --finish-time FINISH_TIME, --end-time FINISH_TIME
                        Finish time of query
  --save-path SAVE_PATH
                        Path to save result

例如：
    python load_sql_from_wdr.py --start-time "2021-04-25 00:00:00" --finish-time "2021-04-26 14:00:00" --port 5432  --save-path ./data.csv
```

### 操作步骤<a name="zh-cn_topic_0000001714949001_zh-cn_topic_0283137132_section43562171391"></a>

1. 提供历史日志以供模型训练。
2. 进行训练与预测操作。
    - 基于模板法的训练与预测：

        ```
        gs_dbmind component sqldiag [train, predict] -f FILE --model template --model-path template_model_path --config-file config_path
        ```

    - 基于DNN的训练与预测：

        ```
        gs_dbmind component sqldiag [train, predict] -f FILE --model dnn --model-path dnn_model_path --config-file config_path
        ```

### 使用方法示例<a name="zh-cn_topic_0000001714949001_zh-cn_topic_0283137132_section1835821733910"></a>

- 使用提供的测试数据进行模板化训练：

    ```
    gs_dbmind component sqldiag train -f DBMINDPATH/dbmind/components/sqldiag/sample_data/train.csv --model template --model-path ./template --config-file config_path
    ```

- 使用提供的测试数据进行模板化预测：

    ```
    gs_dbmind component sqldiag predict -f DBMINDPATH/dbmind/components/sqldiag/sample_data/predict.csv --model template --model-path ./template --predicted-file ./result/t_result --config-file config_path
    ```

- 使用提供的测试数据进行模板化模型更新：

    ```
    gs_dbmind component sqldiag finetune -f DBMINDPATH/dbmind/components/sqldiag/sample_data/train.csv --model template --model-path ./template --config-file config_path
    ```

- 使用提供的测试数据进行DNN训练：

    ```
    gs_dbmind component sqldiag train -f DBMINDPATH/dbmind/components/sqldiag/sample_data/train.csv --model dnn --model-path ./dnn_model --config-file config_path
    ```

- 使用提供的测试数据进行DNN预测：

    ```
    gs_dbmind component sqldiag predict -f DBMINDPATH/dbmind/components/sqldiag/sample_data/predict.csv --model dnn --model-path ./dnn_model --predicted-file --config-file config_path
    ```

- 使用提供的测试数据进行DNN模型更新：

    ```
    gs_dbmind component sqldiag finetune -f DBMINDPATH/dbmind/components/sqldiag/sample_data/train.csv --model dnn --model-path ./dnn_model --config-file config_path
    ```

## 获取帮助<a name="ZH-CN_TOPIC_0000002259861262"></a>

使用SQLdiag工具前，您可以通过以下指令获取帮助。

```
gs_dbmind component sqldiag --help 
```

显示如下帮助信息：

```
usage:   [-h] [-f CSV_FILE] [--predicted-file PREDICTED_FILE]
               [--model {template,dnn}] [--query QUERY] [--threshold THRESHOLD] --model-file MODEL_FILE
               [--config-file CONFIG_FILE]
               {train,predict,finetune}

SQLdiag integrated by DBMind.

positional arguments:
  {train,predict,finetune}
                        The training mode is to perform feature extraction and
                        model training based on historical SQL statements. The
                        prediction mode is to predict the execution time of a
                        new SQL statement through the trained model.

optional arguments:
  -h, --help            show this help message and exit
  -f CSV_FILE, --csv-file CSV_FILE
                        The data set for training or prediction. The file
                        format is CSV. If it is two columns, the format is
                        (SQL statement, duration time). If it is three
                        columns, the format is (timestamp of SQL statement
                        execution time, SQL statement, duration time).
  --predicted-file PREDICTED_FILE
                        The file path to save the predicted result.
  --model {template,dnn}
                        Choose the model model to use.
  --query QUERY         Input the queries to predict.
  --threshold THRESHOLD 
                        Slow SQL threshold.
  --model-file MODEL_FILE, --model-path MODEL_FILE
                        The storage path of the model file, used to read or
                        save the model file.
  --config-file CONFIG_FILE, --config CONFIG_FILE
```

## 命令参考<a name="ZH-CN_TOPIC_0000002259758164"></a>

**表 1**  命令行参数说明

<a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_table628178124515"></a>
<table><thead align="left"><tr id="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_row162968174512"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p1129138144517"><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p1129138144517"></a><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p1129138144517"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p2029181454"><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p2029181454"></a><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p2029181454"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p6291382451"><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p6291382451"></a><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p6291382451"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_row162915844513"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p132968134510"><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p132968134510"></a><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p132968134510"></a>-f</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p152474092416"><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p152474092416"></a><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p152474092416"></a>训练或预测文件位置。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p94668717174"><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p94668717174"></a><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p94668717174"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_row19291888452"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p16296874513"><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p16296874513"></a><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p16296874513"></a>--predicted-file</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001667029528_p565320418232"><a name="zh-cn_topic_0000001667029528_p565320418232"></a><a name="zh-cn_topic_0000001667029528_p565320418232"></a>预测结果存储位置。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p132968124510"><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p132968124510"></a><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p132968124510"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_row18298818455"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p82912864518"><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p82912864518"></a><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p82912864518"></a>--model</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p22917874513"><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p22917874513"></a><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p22917874513"></a>模型选择。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p142948194511"><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p142948194511"></a><a name="zh-cn_topic_0000001667029528_zh-cn_topic_0283137337_p142948194511"></a>template、dnn</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029528_row1050373018258"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001667029528_p9503143018254"><a name="zh-cn_topic_0000001667029528_p9503143018254"></a><a name="zh-cn_topic_0000001667029528_p9503143018254"></a>--model-path</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001667029528_p18503730132514"><a name="zh-cn_topic_0000001667029528_p18503730132514"></a><a name="zh-cn_topic_0000001667029528_p18503730132514"></a>训练模型存储位置。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001667029528_p15503113032510"><a name="zh-cn_topic_0000001667029528_p15503113032510"></a><a name="zh-cn_topic_0000001667029528_p15503113032510"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029528_row268917281884"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001667029528_p9690192819818"><a name="zh-cn_topic_0000001667029528_p9690192819818"></a><a name="zh-cn_topic_0000001667029528_p9690192819818"></a>--query</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001667029528_p669092818816"><a name="zh-cn_topic_0000001667029528_p669092818816"></a><a name="zh-cn_topic_0000001667029528_p669092818816"></a>SQL语句。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001667029528_p16901028287"><a name="zh-cn_topic_0000001667029528_p16901028287"></a><a name="zh-cn_topic_0000001667029528_p16901028287"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029528_row201258381085"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001667029528_p1912515389811"><a name="zh-cn_topic_0000001667029528_p1912515389811"></a><a name="zh-cn_topic_0000001667029528_p1912515389811"></a>--threshold</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001667029528_p20125838385"><a name="zh-cn_topic_0000001667029528_p20125838385"></a><a name="zh-cn_topic_0000001667029528_p20125838385"></a>慢SQL阈值。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001667029528_p14125938586"><a name="zh-cn_topic_0000001667029528_p14125938586"></a><a name="zh-cn_topic_0000001667029528_p14125938586"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0000001667029528_row148320431782"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001667029528_p8832184312820"><a name="zh-cn_topic_0000001667029528_p8832184312820"></a><a name="zh-cn_topic_0000001667029528_p8832184312820"></a>--config-file</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001667029528_p383244314816"><a name="zh-cn_topic_0000001667029528_p383244314816"></a><a name="zh-cn_topic_0000001667029528_p383244314816"></a>配置文件位置。</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001667029528_p883254315816"><a name="zh-cn_topic_0000001667029528_p883254315816"></a><a name="zh-cn_topic_0000001667029528_p883254315816"></a>-</p>
</td>
</tr>
</tbody>
</table>

## 常见问题处理<a name="ZH-CN_TOPIC_0000002294398313"></a>

- 训练场景失败：请检查历史日志文件路径是否正确，且文件格式符合上文规定。

- 预测场景失败：请检查模型路径是否正确。确保待预测负载文件格式正确。
