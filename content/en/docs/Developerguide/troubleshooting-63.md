# Troubleshooting<a name="EN-US_TOPIC_0000001240471119"></a>

-   Considering the actual service and model prediction effect, you are advised to set the trend prediction duration to a value greater than 3600 seconds. \(If the metric collection period is 15 seconds, the number of data records collected is 240.\) Otherwise, the prediction effect will deteriorate, and the service will be abnormal when the data volume is extremely small. The default value is 3600 seconds.
-   After the parameters in the configuration file are reset, you need to restart the service process for the settings to take effect.

