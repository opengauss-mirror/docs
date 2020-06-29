# FAQs<a name="EN-US_TOPIC_0243595908"></a>

## AI Engine Configuration<a name="section1880210558527"></a>

-   **AI Engine failed to be started**: Check whether the IP address and port are available and whether the CA certificate path exists.
-   **AI Engine does not respond**: Check whether the CA certificates of the two communication parties are consistent.
-   **Training and test failure**: Check whether the path for saving the model files exists and whether the training prediction file is correctly downloaded.
-   **Changing the AI Engine IP address**: Regenerate the certificate by following the steps in  [Generating Certificates](environment-deployment.md#section2571634396). Enter the new IP address in  [Generate a certificate and private key](environment-deployment.md#li1783847165213).

## Database Internal Errors<a name="section11328131115316"></a>

Problem: AI Engine connection failed.

```
ERROR:  AI engine connection failed.
CONTEXT:  referenced column: model_train_opt
```

Solution: Check whether the AI Engine is started or restarted properly. Check whether the CA certificates of the communication parties are consistent. Check whether the IP address and port number in the model configuration match.

Problem: The model does not exist.

```
ERROR:  OPT_Model not found for model name XXX
CONTEXT:  referenced column: track_model_train_opt
```

Solution: Check whether  [GS\_OPT\_MODEL](gs_opt_model.md)  contains the model specified in the  **model\_name**  column in the statement. If the error is reported when the prediction function is used, check whether the model has been trained.

