# Usage Guide<a name="EN-US_TOPIC_0289900703"></a>

## Prerequisites<a name="en-us_topic_0283137132_en-us_topic_0059779027_s7c2e433674384463a42b1e562a499257"></a>

-   Ensure that the historical logs and the format of the workload to be predicted meet the requirements. You can use the GUC parameter of the database to enable the collection or use the monitoring tool to collect logs.
-   To ensure the prediction accuracy, the historical statement logs provided by users should be as comprehensive and representative as possible.
-   The Python environment has been configured as required.

## File Structure<a name="en-us_topic_0283137132_en-us_topic_0059779027_sec8c9233ebad4d6da06846cb31af1f44"></a>

```
Sqldiag
├── data --Test dataset
├── src --Source code file
├── README.md --Description document
└── main.py --Program entry
```

## Environment Configuration<a name="section14906112131913"></a>

```
python 3.6+
sqlparse
sklearn
gensim
```

## Collecting SQL Statements<a name="section11673554164710"></a>

Use the GUC parameters  **log\_statement **and  **log\_statement\_stats **to enable log collection. The parameter settings are as follows:

-   log\_statement = all
-   log\_statement\_stats=on

If this parameter is enabled, a certain amount of system resources may be occupied but the usage is generally low. Continuous high-concurrency scenarios may generate less than 5% performance loss. If the database concurrency is low, the performance loss can be ignored. After the parameter is enabled, the execution statement and its cost are recorded in the database log file.

## Procedure<a name="en-us_topic_0283137132_section43562171391"></a>

1.  Provide historical logs for model training.

    The training data format is as follows:

    ```
    SQL statement execution duration,SQL statement text
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   Columns are separated by commas \(,\).

    The test data format is as follows:

    ```
    SQL statement text
    ```

2.  Perform training and prediction.

    ```
    python main.py -m {train, predict} -f FILE
    ```

    -   **train**: training mode

    -   **predict**: prediction mode

    -   **FILE**: file path


## Examples<a name="en-us_topic_0283137132_section1835821733910"></a>

Use the provided training data for training.

```
python main.py -m train -f data/train.csv
```

Use the provided test data for prediction.

```
python main.py -m predict -f data/predict.csv
```

Analyze prediction results.

```
status: prediction status
data: 
    time: SQL statement execution time
    point: spatial point coordinate of an SQL statement
    clister: SQL type ID
    background: template-based model summary
        stmts: SQL statement sample of the corresponding type
        center: central point coordinate of the SQL statement of the corresponding type
        points: spatial point coordinate of the sample SQL statement
        avg_time: average execution time of the corresponding type
```

