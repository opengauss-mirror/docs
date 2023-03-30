# Obtaining Help Information<a name="EN-US_TOPIC_0289900136"></a>

Before using the SQLdiag tool, run the following command to obtain help information:

```
gs_dbmind component sqldiag --help 
```

The command output is as follows:

```
usage:   [-h] [-f CSV_FILE] [--predicted-file PREDICTED_FILE]
               [--model {template,dnn}] --model-path MODEL_PATH
               [--config-file CONFIG_FILE]
               {train,predict,finetune}

SQLdiag integrated by openGauss.

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
                        Choose the model to use.
  --model-path MODEL_PATH
                        The storage path of the model file, used to read or
                        save the model file.
  --config-file CONFIG_FILE
```

