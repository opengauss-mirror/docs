# Environment Deployment <a name="EN-US_TOPIC_0289900720"></a>

## Prerequisites<a name="en-us_topic_0283136738_section7996611818"></a>

openGauss is in the normal state. The user has logged in to openGauss with an authenticated identity. The executed SQL syntax is correct and no error is reported. In the historical performance data window, the number of openGauss concurrent tasks is stable, the structure and number of tables remain unchanged, the data volume changes smoothly, and the GUC parameters related to query performance remain unchanged. During prediction, the model has been trained and converged. The running environment of the AIEngine is stable.

## Request Example<a name="en-us_topic_0283136738_section109638494418"></a>

The AIEngine process communicates with the kernel process using HTTPS. An example request is as follows:

```
curl -X POST -d '{"modelName":"modelname"}' -H 'Content-Type: application/json' 'https://IP-address:port/request-API'
```

**Table  1**  AIEngine external APIs

<a name="en-us_topic_0283136738_table15974824134314"></a>
<table><thead align="left"><tr id="en-us_topic_0283136738_row997552414312"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136738_p159759249430"><a name="en-us_topic_0283136738_p159759249430"></a><a name="en-us_topic_0283136738_p159759249430"></a>Request API</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136738_p1097592415436"><a name="en-us_topic_0283136738_p1097592415436"></a><a name="en-us_topic_0283136738_p1097592415436"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136738_row39751524164316"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136738_p4107425155310"><a name="en-us_topic_0283136738_p4107425155310"></a><a name="en-us_topic_0283136738_p4107425155310"></a>/check</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136738_p16975142413431"><a name="en-us_topic_0283136738_p16975142413431"></a><a name="en-us_topic_0283136738_p16975142413431"></a>Checks whether a model is properly started.</p>
</td>
</tr>
<tr id="en-us_topic_0283136738_row99751524114317"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136738_p11975112484312"><a name="en-us_topic_0283136738_p11975112484312"></a><a name="en-us_topic_0283136738_p11975112484312"></a>/configure</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136738_p15975124174319"><a name="en-us_topic_0283136738_p15975124174319"></a><a name="en-us_topic_0283136738_p15975124174319"></a>Sets model parameters.</p>
</td>
</tr>
<tr id="en-us_topic_0283136738_row14975724104316"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136738_p13975152484316"><a name="en-us_topic_0283136738_p13975152484316"></a><a name="en-us_topic_0283136738_p13975152484316"></a>/train</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136738_p29751824134316"><a name="en-us_topic_0283136738_p29751824134316"></a><a name="en-us_topic_0283136738_p29751824134316"></a>Trains a model.</p>
</td>
</tr>
<tr id="en-us_topic_0283136738_row497562411434"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136738_p179757241430"><a name="en-us_topic_0283136738_p179757241430"></a><a name="en-us_topic_0283136738_p179757241430"></a>/track_process</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136738_p1397522464314"><a name="en-us_topic_0283136738_p1397522464314"></a><a name="en-us_topic_0283136738_p1397522464314"></a>Views model training logs.</p>
</td>
</tr>
<tr id="en-us_topic_0283136738_row610002618543"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136738_p137421399544"><a name="en-us_topic_0283136738_p137421399544"></a><a name="en-us_topic_0283136738_p137421399544"></a>/setup</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136738_p18101122615543"><a name="en-us_topic_0283136738_p18101122615543"></a><a name="en-us_topic_0283136738_p18101122615543"></a>Loads historical models.</p>
</td>
</tr>
<tr id="en-us_topic_0283136738_row45603521543"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136738_p1456035295414"><a name="en-us_topic_0283136738_p1456035295414"></a><a name="en-us_topic_0283136738_p1456035295414"></a>/predict</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136738_p12560175285415"><a name="en-us_topic_0283136738_p12560175285415"></a><a name="en-us_topic_0283136738_p12560175285415"></a>Predicts a model.</p>
</td>
</tr>
</tbody>
</table>

## Generating Certificates<a name="en-us_topic_0283136738_section2571634396"></a>

Before using the prediction function, you need to use OpenSSL to generate certificates required for authentication between the communication parties, ensuring communication security.

1.  Set up a certificate generation environment. The certificate file is stored in  **$GAUSSHOME/CA**.

    -- Copy the certificate generation script and related files.

    ```
    cp path_to_predictor/install/ssl.sh $GAUSSHOME/
    cp path_to_predictor/install/ca_ext.txt $GAUSSHOME/
    ```

    -- Copy the configuration file  **openssl.cnf**  to  **$GAUSSHOME**.

    ```
     cp $GAUSSHOME/share/om/openssl.cnf  $GAUSSHOME/
    ```

    -- Modify the configuration parameters in  **openssl.conf**.

    ```
    dir  = $GAUSSHOME/CA/demoCA
    default_md      = sha256
    ```

    -- The certificate generation environment is ready.

2.  Generate a certificate and private key.

    ```
    cd $GAUSSHOME
    sh ssl.sh
    ```

    -- Set the password as prompted, for example,  **Test@123**.

    -- The password must contain at least eight characters of at least three different types.

    ```
    Please enter your password: 
    ```

    -- Set the options as prompted.

    ```
    Certificate Details:
            Serial Number: 1 (0x1)
            Validity
                Not Before: May 15 08:32:44 2020 GMT
                Not After : May 15 08:32:44 2021 GMT
            Subject:
                countryName               = CN
                stateOrProvinceName       = SZ
                organizationName          = HW
                organizationalUnitName    = GS
                commonName                = CA
            X509v3 extensions:
                X509v3 Basic Constraints:
                    CA:TRUE
    Certificate is to be certified until May 15 08:32:44 2021 GMT (365 days)
    Sign the certificate? [y/n]:y
    1 out of 1 certificate requests certified, commit? [y/n]y
    ```

    -- Enter the IP address for starting the AIEngine, for example,  **127.0.0.1**.

    ```
    Please enter your aiEngine IP: 127.0.0.1
    ```

    -- Set the options as prompted.

    ```
    Certificate Details:
            Serial Number: 2 (0x2)
            Validity
                Not Before: May 15 08:38:07 2020 GMT
                Not After : May 13 08:38:07 2030 GMT
            Subject:
                countryName               = CN
                stateOrProvinceName       = SZ
                organizationName          = HW
                organizationalUnitName    = GS
                commonName                = 127.0.0.1
            X509v3 extensions:
                X509v3 Basic Constraints:
                    CA:FALSE
    Certificate is to be certified until May 13 08:38:07 2030 GMT (3650 days)
    Sign the certificate? [y/n]:y
    1 out of 1 certificate requests certified, commit? [y/n]y
    ```

    -- Enter the IP address for starting openGauss, for example,  **127.0.0.1**.

    ```
    Please enter your gaussdb IP: 127.0.0.1
    ```

    -- Set the options as prompted.

    ```
    Certificate Details:
            Serial Number: 3 (0x3)
            Validity
                Not Before: May 15 08:41:46 2020 GMT
                Not After : May 13 08:41:46 2030 GMT
            Subject:
                countryName               = CN
                stateOrProvinceName       = SZ
                organizationName          = HW
                organizationalUnitName    = GS
                commonName                = 127.0.0.1
            X509v3 extensions:
                X509v3 Basic Constraints:
                    CA:FALSE
    Certificate is to be certified until May 13 08:41:46 2030 GMT (3650 days)
    Sign the certificate? [y/n]:y
    1 out of 1 certificate requests certified, commit? [y/n]y
    ```

    -- The related certificate and key have been generated. The content in  **$GAUSSHOME/CA**  is as follows:

    ![](figures/en-us_image_0289900652.png)


## Setting Up the Environment<a name="en-us_topic_0283136738_section747815158123"></a>

1.  Copy the tool code folder to the target environment.

    -- Assume that the installation directory is  **$INSTALL\_FOLDER**.

    -- Assume that the destination directory is  **/home/ai\_user**.

    ```
    scp -r $INSTALL_FOLDER/bin/dbmind/predictor  ai_user@127.0.0.1:path_to_Predictor
    ```

2.  Copy the CA certificate folder to a directory in the AIEngine environment.

    ```
    cp -r $GAUSSHOME/CA  ai_user@127.0.0.1:path_to_CA
    ```

3.  Install the  **predictor/install/requirements\(-gpu\).txt**  tool.

    ```
    With GPU: pip install -r requirements-gpu.txt
    Without GPU: pip install -r requirements.txt
    ```


## Starting the AIEngine<a name="en-us_topic_0283136738_section8478201519121"></a>

1.  Switch to the AIEngine environment \(that is, copy the target environment  **ai\_user**  of the predictor\).

    Set parameters in  **predictor/python/settings.py**.

    ```
    DEFAULT_FLASK_SERVER_HOST = '127.0.0.1' (running IP address of the AIEngine)
    DEFAULT_FLASK_SERVER_PORT = '5000' (running port number of the AIEngine)
    PATH_SSL = "path_to_CA" (CA folder path)
    ```

2.  Run the startup script of the AIEngine.

    ```
    python path_to_Predictor/python/run.py
    ```

    In this case, the AIEngine keeps enabled on the corresponding port and waits for the request of the time prediction function from the kernel.

    For details about how to initiate a time prediction command from the kernel, see  [User Guide](user-guide.md).


