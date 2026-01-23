# SQLdiag: Slow SQL Discovery<a name="EN-US_TOPIC_0289900849"></a>

SQLdiag is a framework for predicting the execution duration of SQL statements in openGauss. The existing prediction technologies are mainly based on model prediction of execution plans. These prediction solutions are applicable only to jobs whose execution plans can be obtained in the OLAP scenarios, and are not useful for quick query such as OLTP or HTAP. Different from the preceding solutions, SQLdiag focuses on the historical SQL statements of databases. Because the execution duration of the database SQL statements in a short time does not vary greatly, SQLdiag can detect instruction sets similar to the entered instructions from the historical data, and predict the SQL statement execution duration based on the SQL vectorization technology and the time series prediction algorithm. This framework has the following benefits:

1. Execution plans do not require instructions. This has no impact on database performance.
2. The framework is widely used, unlike many other well-targeted algorithms in the industry, for example, they may applicable only to OLTP or OLAP.
3. The framework is robust and easy to understand. Users can design their own prediction models by simply modifying the framework.

## Overview<a name="EN-US_TOPIC_0289900425"></a>

SQLdiag is an SQL statement execution time prediction tool. It predicts the execution time of SQL statements based on the statement logic similarity and historical execution records without obtaining the SQL statement execution plan using a template or deep learning. Abnormal SQL statements can also be detected with this tool.

## Usage Guide<a name="EN-US_TOPIC_0289900703"></a>

### Prerequisites<a name="en-us_topic_0283137132_en-us_topic_0059779027_s7c2e433674384463a42b1e562a499257"></a>

- You have obtained training data.
- If you use the provided tool to collect training data, you need to enable the WDR function. The involved parameters are  **track\_stmt\_stat\_level**  and  **log\_min\_duration\_statement**. For details, see the following sections.
- To ensure the prediction accuracy, the historical statement logs provided by users should be as comprehensive and representative as possible.

### Collecting SQL Statements<a name="section11673554164710"></a>

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

- **log\_min\_duration\_statement**  indicates the slow SQL threshold. If the value is  **0**, full collection is performed. The unit is millisecond.
- **track\_stmt\_stat\_level**  indicates the information capture level. You are advised to set it to  **'L0,L0'**.

After this parameter is set, a certain amount of system resources may be occupied but the usage is generally low. In continuous high-concurrency scenarios, this may cause a performance loss less than 5%. If the database concurrency is low, the performance loss can be ignored. The following script is stored in the sqldiag root directory \(_$GAUSSHOME_**/bin/components/sqldiag**\).

```
Use a script to obtain the training set:
load_sql_from_wdr.py [-h] --port PORT --start_time START_TIME
                            --finish_time FINISH_TIME [--save_path SAVE_PATH]
Example:
    python load_sql_from_wdr.py --start_time "2021-04-25 00:00:00" --finish_time "2021-04-26 14:00:00" --port 5432  --save_path ./data.csv
```

### Procedure<a name="en-us_topic_0283137132_section43562171391"></a>

1. Provide historical logs for model training.
2. Perform training and prediction.

    ```
    Template-based training and prediction:
       gs_dbmind component sqldiag [train, predict] -f FILE --model template --model-path template_model_path 
    DNN-based training and prediction:
       gs_dbmind component sqldiag [train, predict] -f FILE --model dnn --model-path dnn_model_path
    ```

### Examples<a name="en-us_topic_0283137132_section1835821733910"></a>

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

## Obtaining Help Information<a name="EN-US_TOPIC_0289900136"></a>

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

## Command Reference<a name="EN-US_TOPIC_0289900536"></a>

**Table  1**  Command-line options

<a name="en-us_topic_0283137337_table628178124515"></a>
<table><thead align="left"><tr id="en-us_topic_0283137337_row162968174512"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137337_p1129138144517"><a name="en-us_topic_0283137337_p1129138144517"></a><a name="en-us_topic_0283137337_p1129138144517"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137337_p2029181454"><a name="en-us_topic_0283137337_p2029181454"></a><a name="en-us_topic_0283137337_p2029181454"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137337_p6291382451"><a name="en-us_topic_0283137337_p6291382451"></a><a name="en-us_topic_0283137337_p6291382451"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137337_row162915844513"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137337_p132968134510"><a name="en-us_topic_0283137337_p132968134510"></a><a name="en-us_topic_0283137337_p132968134510"></a>-f</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137337_p152474092416"><a name="en-us_topic_0283137337_p152474092416"></a><a name="en-us_topic_0283137337_p152474092416"></a>Training or prediction file location</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137337_p94668717174"><a name="en-us_topic_0283137337_p94668717174"></a><a name="en-us_topic_0283137337_p94668717174"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283137337_row19291888452"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137337_p16296874513"><a name="en-us_topic_0283137337_p16296874513"></a><a name="en-us_topic_0283137337_p16296874513"></a>--predicted-file</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p565320418232"><a name="p565320418232"></a><a name="p565320418232"></a>Prediction result location</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137337_p132968124510"><a name="en-us_topic_0283137337_p132968124510"></a><a name="en-us_topic_0283137337_p132968124510"></a>N/A</p>
</td>
</tr>
<tr id="en-us_topic_0283137337_row18298818455"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137337_p82912864518"><a name="en-us_topic_0283137337_p82912864518"></a><a name="en-us_topic_0283137337_p82912864518"></a>--model</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137337_p22917874513"><a name="en-us_topic_0283137337_p22917874513"></a><a name="en-us_topic_0283137337_p22917874513"></a>Model selection</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137337_p142948194511"><a name="en-us_topic_0283137337_p142948194511"></a><a name="en-us_topic_0283137337_p142948194511"></a>template, dnn</p>
</td>
</tr>
<tr id="row1050373018258"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9503143018254"><a name="p9503143018254"></a><a name="p9503143018254"></a>--model-path</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18503730132514"><a name="p18503730132514"></a><a name="p18503730132514"></a>Location of the training model</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p15503113032510"><a name="p15503113032510"></a><a name="p15503113032510"></a>N/A</p>
</td>
</tr>
</tbody>
</table>

## Troubleshooting<a name="EN-US_TOPIC_0289900845"></a>

- Failure in the training scenario: Check whether the file path of historical logs is correct and whether the file format meets the requirements.

- Failure in the prediction scenario: Check whether the model path is correct. Ensure that the format of the load file to be predicted is correct.
