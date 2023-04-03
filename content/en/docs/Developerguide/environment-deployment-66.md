# Environment Deployment <a name="EN-US_TOPIC_0000001196145058"></a>

1.  Start the exporter process and create a listening port number on the local host.
2.  Modify the configuration file  **prometheus.yml**  on the Promethues server and add the information about the started exporter to the file. For example:

    ```
     scrape_configs:
     ...
       - job_name: 'opengauss_exporter'
         static_configs:
         - targets: ['127.0.0.1:9187']
     ...
    ```


The exporter component uses HTTPS for communication by default. Therefore, you need to provide the SSL certificate and key file by default through  **--ssl-keyfile**  and  **--ssl-certfile**. To disable HTTPS, you can run the  **--disable-https**  command.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The default communication protocol used by openGauss is incompatible with PostgreSQL. As a result, the PostgreSQL-based Python driver  **psycopg2-binary**  installed using the PyPI source cannot connect to the openGauss database.
>Therefore, you need to compile  **psycopg2**  or modify GUC parameters for adaptation. You can also download  **psycopg2**  compiled based on openGauss from the openGauss official website. \(Typically, a version compiled for Python 3.6 is provided. User need to check the version number before using it.\)
>-   Download the openGauss Python driver from the official website:
>    https://opengauss.org/en/download/
>-   For details about the adaptation of the Python driver, see the openGauss operation guide at:
>    https://mp.weixin.qq.com/s/2TobUQKtw0N9sBpMZJr6zw

