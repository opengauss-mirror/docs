# Usage Guide<a name="EN-US_TOPIC_0253059673"></a>

## Prerequisites<a name="en-us_topic_0059779027_s7c2e433674384463a42b1e562a499257"></a>

The format of historical logs and to-be-predicted load meets the requirements. In addition, the historical statement logs provided by users are comprehensive and typical to ensure prediction accuracy.

## Background<a name="en-us_topic_0059779027_sec8c9233ebad4d6da06846cb31af1f44"></a>

The tool directory provides sample datasets and demo code. For details about dependencies of the tool, see the  **Readme**  file in the tool root directory.

## Procedure<a name="section43562171391"></a>

1.  If this is the first time you use this tool, you need to provide historical logs for model training.

    ```
    Execution start time    |   Execution end time   |   Lock time   |   Execution waiting time   |   Statement text
    ```

    The format of each line in a historical log is as follows. The separator between two columns is '\\t|\\t'. If a column cannot contain any separator, set the column to  **0**.

2.  Run the following command to perform training:

    ```
    python src/main.py train [--train LOG_FILE] [--model MODEL_DIR] 
    ```

    -   **LOG\_FILE**: path for storing historical logs used for training.

    -   **MODEL\_DIR**: path for storing the model and intermediate file generated during training.

3.  Before performing prediction, ensure that the training process is complete. The to-be-predicted load must be in a file format. Each line in the file is a statement.

    Run the following command to perform prediction:

    ```
    python src/main.py predict [--model MODEL_DIR] [--predict WORKLOAD_FILE] [--ratio RETRAIN_RATIO] 
    ```

    -   **MODEL\_DIR**: model path, which must be the same as the value specified during training.

    -   **WORKLOAD\_FILE**: path of the load file to be predicted.

    -   **RETRAIN\_RATIO**: recommended model retraining threshold. The default value is  **0.5**, indicating that if the number of untrained elements reaches 0.5 times of the number of trained elements, the tool prompts you to train the model again to make your prediction result more accurate. This prompt does not affect the prediction.

    -   The prediction result is a list of  **FLOAT**  data. The  _n_th value indicates the prediction execution duration of the statement in the  _n_th line of the to-be-predicted load file. The result is returned and displayed on your screen.



![](public_sys-resources/icon-note.gif) **NOTE:**     
If you want to train and predict at the same time, the tool provides the following quick startup command:    
```    
python src/main.py all [--train LOG_FILE] [--model MODEL_DIR] [--predict WORKLOAD_FILE] [--ratio RETRAIN_RATIO]     
```    
The meaning of each parameter is the same as that during execution.    

## Example<a name="section1835821733910"></a>

Use the demo data provided by the tool for training.

```
python src/main.py train --train test/data/train.csv --model test/data/
```

Use the demo data provided by the tool for prediction.

```
python src/main.py predict --model test/data/ --predict test/data/test.csv --ratio 0.2
```

Quick boot:

```
python src/main.py all --train test/data/train.csv --model test/data/ --predict test/data/test.csv --ratio 0.2
```

