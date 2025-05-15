# 获取帮助<a name="ZH-CN_TOPIC_0000002259861262"></a>

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

