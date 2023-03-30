# Predictor: AI Query Time Forecasting<a name="EN-US_TOPIC_0000001151995065"></a>

## Availability<a name="section56086982"></a>

This feature is available since openGauss 1.0.0.

## Introduction<a name="section35020791"></a>

Predictor is a query time forecasting tool that leverages machine learning and has online learning capability. Predictor can predict the execution time of a plan in the database kernel by continuously learning the historical execution information collected in the database.

## Benefits<a name="section46751668"></a>

This feature predicts the SQL statement execution time based on the AI model before the SQL statement is executed. Based on the estimated SQL time, you can detect possible abnormal SQL statements and optimize or schedule them in advance to prevent system running from being affected.

## Description<a name="section18111828"></a>

The prediction of AI query time depends on the collection of local query plans.  During query execution, you need to collect the actual query plan \(including the plan structure, operator type, related data source, and filter criteria\), actual execution time of each operator node, cost estimated by the optimizer, number of rows returned by the optimizer, number of rows estimated by the optimizer, and number of parallel rows. These records are stored in data tables and managed persistently, and expired data will be cleared periodically.

After the database kernel automatically collects historical data, the administrator encodes the data and sends a request to Python through the CURL API to configure the model, send data, and trigger training. You can call the TensorBoard API to monitor the training process. The model returns the prediction accuracy of each project and saves the final model. The database updates the system tables related to the model information based on the result returned by the AI engine.

This feature is triggered when  **explain \(analyze on, predictor <model\_name\>\) SELECT... "**  is executed and the model is converged. The database determines whether the current model meets the requirements based on the plan encoding. If the model meets the requirements, the model loading request is sent to Python \(the model needs to be loaded only once after the model training is complete\). After the model is loaded, the plan encoding file is inferred and the prediction result of each node is returned.

## Enhancements<a name="section28788730"></a>

None.

## Constraints<a name="section06531946143616"></a>

-   The database system is normal. The user successfully logs in to the database through identity authentication and accesses the authorized data.
-   The SQL syntax is correct and no error is reported.
-   SQL statements executed by users do not cause database exceptions.
-   In the historical performance data window, the cluster concurrency is stable, the cluster scale, table structure, and table quantity remain unchanged, the data volume does not change abruptly, and the GUC parameters related to query performance remain unchanged. If the preceding conditions are damaged, the model becomes invalid. In this case, you need to invalidate all historical performance data, collect data again, and retrain the model.
-   When a model is loaded, the structure, parameters, and training information of the original model are completely saved. If the original model information is lost, the model cannot be loaded and needs to be trained again.
-   Historical performance data can be properly collected and encoded, and no error is reported when the encoded data is properly parsed.
-   You can install the following software by using the provided installation scripts or by yourself: Python=3.6.4, configparser==3.8.1, Flask==0.12.2, Keras==2.2.4, numpy==1.16.4, scikit-learn==0.19.1, pandas==0.25.1, tensorboard==1.14.0, and tensorflow-gpu==1.14.0 or tensorflow==1.14.0.
-   OpenSSL has been installed in the user environment, and the certificate has been generated using a script or based on the usage description.
-   Currently, administrators need to manually synchronize models across database namespaces. Automatic synchronization is not supported.

## Dependencies<a name="section57771982"></a>

None.

