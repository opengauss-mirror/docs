# 使用指导<a name="ZH-CN_TOPIC_0000002294471373"></a>

## 前提条件与使用事项<a name="zh-cn_topic_0000001714949001_zh-cn_topic_0283137132_zh-cn_topic_0059779027_s7c2e433674384463a42b1e562a499257"></a>

-   需要保证用户提供训练数据。
-   如果用户通过提供的工具收集训练数据，则需要启用WDR功能，涉及到的参数为track\_stmt\_stat\_level和log\_min\_duration\_statement，具体情况见下面小结。
-   为保证预测准确率，用户提供的历史语句日志应尽可能全面并具有代表性。

## SQL流水采集方法<a name="zh-cn_topic_0000001714949001_section11673554164710"></a>

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

-   其中log\_min\_duration\_statement表示慢SQL阈值，如果为0则全量收集，时间单位为毫秒；
-   track\_stmt\_stat\_level表示信息捕获的级别，建议设置为track\_stmt\_stat\_level='L0,L0'

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

## 操作步骤<a name="zh-cn_topic_0000001714949001_zh-cn_topic_0283137132_section43562171391"></a>

1.  提供历史日志以供模型训练。
2.  进行训练与预测操作。
    -   基于模板法的训练与预测：

        ```
        gs_dbmind component sqldiag [train, predict] -f FILE --model template --model-path template_model_path --config-file config_path
        ```

    -   基于DNN的训练与预测：

        ```
        gs_dbmind component sqldiag [train, predict] -f FILE --model dnn --model-path dnn_model_path --config-file config_path
        ```

## 使用方法示例<a name="zh-cn_topic_0000001714949001_zh-cn_topic_0283137132_section1835821733910"></a>

-   使用提供的测试数据进行模板化训练：

    ```
    gs_dbmind component sqldiag train -f DBMINDPATH/dbmind/components/sqldiag/sample_data/train.csv --model template --model-path ./template --config-file config_path
    ```

-   使用提供的测试数据进行模板化预测：

    ```
    gs_dbmind component sqldiag predict -f DBMINDPATH/dbmind/components/sqldiag/sample_data/predict.csv --model template --model-path ./template --predicted-file ./result/t_result --config-file config_path
    ```

-   使用提供的测试数据进行模板化模型更新：

    ```
    gs_dbmind component sqldiag finetune -f DBMINDPATH/dbmind/components/sqldiag/sample_data/train.csv --model template --model-path ./template --config-file config_path
    ```

-   使用提供的测试数据进行DNN训练：

    ```
    gs_dbmind component sqldiag train -f DBMINDPATH/dbmind/components/sqldiag/sample_data/train.csv --model dnn --model-path ./dnn_model --config-file config_path
    ```

-   使用提供的测试数据进行DNN预测：

    ```
    gs_dbmind component sqldiag predict -f DBMINDPATH/dbmind/components/sqldiag/sample_data/predict.csv --model dnn --model-path ./dnn_model --predicted-file --config-file config_path
    ```

-   使用提供的测试数据进行DNN模型更新：

    ```
    gs_dbmind component sqldiag finetune -f DBMINDPATH/dbmind/components/sqldiag/sample_data/train.csv --model dnn --model-path ./dnn_model --config-file config_path
    ```

