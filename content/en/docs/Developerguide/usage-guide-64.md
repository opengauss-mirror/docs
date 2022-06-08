# Usage Guide<a name="EN-US_TOPIC_0289900703"></a>

## Prerequisites<a name="en-us_topic_0283137132_en-us_topic_0059779027_s7c2e433674384463a42b1e562a499257"></a>

-   You have obtained training data.
-   If you use the provided tool to collect training data, you need to enable the WDR function. The involved parameters are  **track\_stmt\_stat\_level**  and  **log\_min\_duration\_statement**. For details, see the following sections.
-   To ensure the prediction accuracy, the historical statement logs provided by users should be as comprehensive and representative as possible.

## Collecting SQL Statements<a name="section11673554164710"></a>

This tool requires users to prepare data in advance. Each sample is separated by a newline character. The training data format is as follows: 

```
SQL,EXECUTION_TIME
```

The prediction data format is as follows:

```
SQL
```

**SQL**  indicates the text of an SQL statement, and  **EXECUTION\_TIME**  indicates the execution time of the SQL statement. For details about the sample data, see  **train.csv**  and  **predict.csv**  in  **sample\_data**.

You can collect training data in the required format. The tool also provides the  **load\_sql\_from\_rd**  script for automatic collection. The script obtains SQL information based on the WDR report. The involved parameters are  **log\_min\_duration\_statement**  and  **track\_stmt\_stat\_level**:

-   **log\_min\_duration\_statement**  indicates the slow SQL threshold. If the value is  **0**, full collection is performed. The unit is millisecond.
-   **track\_stmt\_stat\_level**  indicates the information capture level. You are advised to set it to  **'L0,L0'**.

After this parameter is set, a certain amount of system resources may be occupied but the usage is generally low. In continuous high-concurrency scenarios, this may cause a performance loss less than 5%. If the database concurrency is low, the performance loss can be ignored. The following script is stored in the sqldiag root directory \(_$GAUSSHOME_**/bin/components/sqldiag**\).

```
Use a script to obtain the training set:
load_sql_from_wdr.py [-h] --port PORT --start_time START_TIME
                            --finish_time FINISH_TIME [--save_path SAVE_PATH]
Example:
    python load_sql_from_wdr.py --start_time "2021-04-25 00:00:00" --finish_time "2021-04-26 14:00:00" --port 5432  --save_path ./data.csv
```

## Procedure<a name="en-us_topic_0283137132_section43562171391"></a>

1.  Provide historical logs for model training.
2.  Perform training and prediction.

    ```
    Template-based training and prediction:
       gs_dbmind component sqldiag [train, predict] -f FILE --model template --model-path template_model_path 
    DNN-based training and prediction:
       gs_dbmind component sqldiag [train, predict] -f FILE --model dnn --model-path dnn_model_path
    ```


## Examples<a name="en-us_topic_0283137132_section1835821733910"></a>

Use the provided test data to perform template-based training:

```
gs_dbmind component sqldiag train -f ./sample_data/train.csv --model template --model-path ./template 
```

Use the provided test data for template-based prediction:

```
gs_dbmind component sqldiag predict -f ./sample_data/predict.csv --model template --model-path ./template --predicted-file ./result/t_result
```

Use the provided test data to update the template-based model:

```
gs_dbmind component sqldiag finetune -f ./sample_data/train.csv --model template --model-path ./template 
```

Use the provided test data to perform DNN-based training:

```
gs_dbmind component sqldiag train -f ./sample_data/train.csv --model dnn --model-path ./dnn_model 
```

Use the provided test data for DNN-based prediction:

```
gs_dbmind component sqldiag predict -f ./sample_data/predict.csv --model dnn --model-path ./dnn_model --predicted-file 
```

Use the provided test data to update the DNN-based model:

```
gs_dbmind component sqldiag finetune -f ./sample_data/train.csv --model dnn --model-path ./dnn_model
```

