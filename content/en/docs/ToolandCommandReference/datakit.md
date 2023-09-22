# DataKit

## Function

openGauss development and O&M involve many complex operations. DataKit provides a visualized O&M interface to help users manage, install, monitor, and maintain their own openGauss databases and physical machine resources.

DataKit is a development and O&M tool based on resources (physical machines and databases). It provides extension-based upper-layer development and O&M tools. The extensions are independent of each other, facilitating on-demand use. Each extension is extended based on the DataKit resource center to complete complex operations such as database O&M, monitoring, migration, development, and modeling.

## Principles

DataKit is an extension tool developed based on spring-brick. The foreground uses VUE, and the background uses the spring-bot technology stack. DataKit base provides public capabilities such as resource management, security center, and log center. The database installation, O&M, monitoring, and data migration capabilities are extensions developed based on spring-brick and can be flexibly installed on or uninstalled from the base, facilitating on-demand use.

## Advantages

DataKit is an integrated tool for visualizing web-based openGauss. It aims to facilitate the use and management of openGauss, and lower the threshold for installing and using the openGauss database. It manages security center and extensions, and implements other functions including one-click deployment, uninstallation, component-based installation, multi-version upgrade, and routine O&M.

## Environment Preparation

x86/Arm + openEuler 20.03 or x86 + CentOS 5.7

## Procedure

1.  Create a work directory.

    ```
    mkdir -p /ops/server/openGauss-visualtool/logs /ops/server/openGauss-visualtool/config /ops/ssl /ops/files
    ```
    
1.  Download the JAR package from [https://www.opengauss.org/en/download/](https://www.opengauss.org/en/download/) and store the JAR package to **/ops/server/openGauss-visualtool/**.

3. Store the configuration file **application-temp.yml** to **/ops/server/openGauss-visualtool/config/**. The content of the configuration file is as follows:

   ```
   system:
     # File storage path
     defaultStoragePath: /ops/files
     # Whitelist control switch
     whitelist:
       enabled: false
   server:
     port: 9494
     ssl:
       key-store: /ops/ssl/keystore.p12
       key-store-password: password
       key-store-type: PKCS12
       enabled: true
     servlet:
       context-path: /
   logging:
     file:
       path: /ops/server/openGauss-visualtool/logs/
   spring:
     datasource:
       type: com.alibaba.druid.pool.DruidDataSource
       driver-class-name: org.opengauss.Driver
       url: jdbc:opengauss://ip:port/database?currentSchema=public
       username: dbuser
       password: dbpassword
       druid:
         test-while-idle: false
         test-on-borrow: true
         validation-query: "select 1"
         validation-query-timeout: 30000
   ```

4. Store the SSL file to the **/ops/ssl/** directory to generate an SSL file example. (The Java version for generating the SSL file must be the same as that for running DataKit.)

   ```
   keytool -genkey -noprompt \
       -dname "CN=opengauss, OU=opengauss, O=opengauss, L=Beijing, S=Beijing, C=CN"\
       -alias opengauss\
       -storetype PKCS12 \
       -keyalg RSA \
       -keysize 2048 \
       -keystore /ops/ssl/keystore.p12 \
       -validity 3650 \
       -storepass password
   ```

   

2.  Change the **ip**, **port**, **database**, **dbuser**, and **dbpassword** values in the **application-temp.yml** file.

2.  Create user **ops** and change the owner of the **ops** directory and all files in the directory to user **ops**.

7. Switch to user **ops**, go to the **/ops/server/openGauss-visualtool** directory, and run the startup command.

   ```
   nohup java -Xms2048m -Xmx4096m -jar /ops/server/openGauss-visualtool/visualtool-main.jar --spring.profiles.active=temp >/ops/server/openGauss-visualtool/logs/visualtool-main.out 2>&1 &\
   ```


## Uninstalling DataKit

The DataKit tool is started by the JAR package. You can uninstall the tool by deleting the corresponding JAR package.

## Precautions



1. DataKit usage and development documents: [https://gitee.com/opengauss/openGauss-workbench/tree/master/openGauss-datakit/doc](https://gitee.com/opengauss/openGauss-workbench/tree/master/openGauss-datakit/doc)

2. Basic O&M extensions: [https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/base-ops](https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins/base-ops)

3. Other extensions: [https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins](https://gitee.com/opengauss/openGauss-workbench/tree/master/plugins)
