# Backup And Restoration For Configuration Files<a name="EN-US_TOPIC_0242215051"></a>

## Background<a name="en-us_topic_0237088792_en-us_topic_0059777801_section728719384439"></a>

If a static configuration file is damaged while you use openGauss, openGauss cannot obtain information about the openGauss topology structure and primary/standby relationship, affecting the openGauss function. In this case, you can use the  **gs\_om**  tool to generate a new static configuration file to replace the damaged file, ensuring normal openGauss running.

## Prerequisites<a name="en-us_topic_0237088792_en-us_topic_0059777801_s1cbae0bf4c9f45db9adf2a0929c96c21"></a>

None

## Procedure<a name="en-us_topic_0237088792_en-us_topic_0059777801_sac68001dd22f4446a51ead8f9d58bee2"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2. Run the following command to generate configuration files in a specified directory on the current host:

   ```
   gs_om -t generateconf -X /opt/software/openGauss/clusterconfig.xml --distribute
   ```

   **/opt/software/openGauss/clusterconfig.xml**  is the  XML configuration files during the openGauss installation.

   >![](public_sys-resources/icon-note.gif) **NOTE:**   
   >
   >- After the command is executed, the new configuration file storage directory is displayed in the log information. Take a one-primary two-standby environment as an example. This directory contains three configuration files named by host names. You need to replace the configuration files of corresponding hosts with the three files respectively.  
   >
   >- If  **--distribute**  is not specified, perform  [3](#en-us_topic_0237088792_en-us_topic_0059777801_lc1ce55d572e44beea3e47b1b427fae3e)  to distribute static configuration files to their corresponding hosts. If  **--distribute**  is specified, the static configuration files are automatically distributed and you do not need to perform  [3](#en-us_topic_0237088792_en-us_topic_0059777801_lc1ce55d572e44beea3e47b1b427fae3e).  

3.  <a name="en-us_topic_0237088792_en-us_topic_0059777801_lc1ce55d572e44beea3e47b1b427fae3e"></a>\(Optional\) Replace the damaged static configuration files of the three hosts in the  **/opt/gaussdb/app/bin**  directory.

    Take one host as an example:

    ```
    mv /opt/huawei/wisequery/script/static_config_files/cluster_static_config_SIA1000056771  /opt/gaussdb/app/bin/cluster_static_config
    ```


## Examples<a name="en-us_topic_0237088792_en-us_topic_0059777801_sec4df58bf58241cf9224729643c51d55"></a>

Run the following commands on any of the hosts in openGauss to generate configuration files:

```
gs_om -t generateconf -X  /opt/software/openGauss/clusterconfig.xml --distribute
Generating static configuration files for all nodes.
Creating temp directory to store static configuration files.
Successfully created the temp directory.
Generating static configuration files.
Successfully generated static configuration files.
Static configuration files for all nodes are saved in /opt/huawei/Bigdata/mppdb/wisequery/script/static_config_files.
Distributing static configuration files to all nodes.
Successfully distributed static configuration files.
```

Open the generated configuration file directory that contains three new files.

```
cd /opt/huawei/Bigdata/mppdb/wisequery/script/static_config_files
ll
total 456
-rwxr-xr-x 1 omm dbgrp 155648 2016-07-13 15:51 cluster_static_config_plat1
-rwxr-xr-x 1 omm dbgrp 155648 2016-07-13 15:51 cluster_static_config_plat2
-rwxr-xr-x 1 omm dbgrp 155648 2016-07-13 15:51 cluster_static_config_plat3
```
