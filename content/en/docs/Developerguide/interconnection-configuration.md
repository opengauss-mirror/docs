# Interconnection Configuration<a name="EN-US_TOPIC_0311524272"></a>

Before using the SQL on Hadoop function, you need to configure the interconnection between the openGauss database instance and the remote Hadoop database instance.

FusionInsight Manager provides the method of configuring interconnection between openGauss and FusionInsight HD Hadoop database instances. Currently, only one connection can be configured. If the interconnection has been configured on FusionInsight Manager and only one HD Hadoop database needs to be accessed, skip this section.

If you need to access multiple HD Hadoop database instances or other Hadoop database instances except FusionInsight HD, manually configure the interconnection on the openGauss database instance host by referring to the following method.

1.  Verify that the ports corresponding to the NameNode, DataNode, and Kerberos services in the remote Hadoop database instance can be accessed by openGauss.

    Run the following command to check port accessibility:

    ```
    telnet [Hadoop host IP address] [port number]
    ```

    Check the following ports:

    -   Port used by NameNode to provide the RPC service. By default, it is port  **25000**. If the port number is unknown, check the  **dfs.namenode.rpc-address.\***  field in the  **hdfs-site.xml**  configuration file on the Hadoop host.
    -   Port used by DataNode to provide the RPC service. By default, it is port  **25008**. If the port number is unknown, check the  **dfs.datanode.ipc.port**  field in the  **hdfs-site.xml**  configuration file on the Hadoop host.
    -   Port used by DataNode to provide the data service. By default, it is port  **25009**. If the port number is unknown, check the  **dfs.datanode.port**  field in the  **hdfs-site.xml**  configuration file on the Hadoop host.
    -   Port used by Kerberos to provide the admin service. By default, it is port  **21730**. If the port number is unknown, check the  **admin\_server**  field in the  **krb5.conf**  configuration file on the Hadoop host.
    -   Port used by Kerberos to provide the kpassswd service. By default, it is port  **21731**. If the port number is unknown, check the  **kpasswd\_server**  field in the  **krb5.conf**  configuration file on the Hadoop host.

2.  Download the HDFS client and use MobaXterm to upload the client installation package to any host where the openGauss database instance is located. Then, log in to the database instance host as the  **root**  user and install the HDFS client.

    For details about how to download and install the HDFS client, see the corresponding Hadoop documents. 

3.  <a name="en-us_topic_0119276786_li10663114112494"></a>Create a directory to store all configuration files, for example,  **hdfs\_cfg**.

    ```
    mkdir /hdfs_cfg
    ```

    After the directory is created, check whether user  **omm**  can access the directory. If the user cannot access the directory, run the  **chmod**  command to authorize the user.

    ```
    # su - omm
    > cd /hdfs_cfg
    ```

    If user  **omm**  can access the directory, the user has the permission.

4.  Copy the  **hdfs-site.xml**,  **core-site.xml**, and  **krb5.conf**  files from the HDFS client installation directory to the  **hdfs\_cfg**  directory created in the previous step.

    The  **hdfs-site.xml**  and  **core-site.xml**  files are stored in  _client installation directory_**/HDFS/hadoop/etc/hadoop**. The  **krb5.conf**  file is stored in  _client installation directory_**/KrbClient/kerberos/var/krb5kdc**.

5.  Create a user for openGauss to access the Hadoop in the Hadoop database instance. You can also use an existing Hadoop user.

    If FusionInsight HD is used, you can create the user on FusionInsight Manager. For details about how to create other Hadoop database instance users, see the corresponding Hadoop documents.

6.  Download the  **keytab**  file of the user created in the previous step and copy the file to the  **hdfs\_cfg**  directory created in  [3](#en-us_topic_0119276786_li10663114112494).
7.  Manually add the  **elk-site.xml**  file to the  **hdfs\_cfg**  directory and add the following content to the file: Note that you need to modify the following information in bold for different users involved in the Hadoop connection:

    ```
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <configuration>
    <property>
    <name>dfs.namenode.kerberos.principal</name>
    <value>user/hadoop.hadoop.com@HADOOP.COM</value> // Name of the user involved in the Hadoop connection@domain name
    </property>
    <property>
    <name>dfs.namenode.kerberos.keytab</name>
    <value>configuration directory/user.keytab</value> // Absolute path of the keytab file for the user involved in the Hadoop connection
    </property>
    </configuration>
    ```

8.  Verify that the  **hdfs\_cfg**  configuration directory contains the following files:  **hdfs-site.xml**,  **core-site.xml**,  **elk-site.xml**,  **user.keytab**, and  **krb5.conf**.
9.  Log in to other hosts of the openGauss database instance as the  **omm**  user. Run the  **scp -r**  command to copy the configuration directory to all hosts of the openGauss database instance. Ensure that these hosts use the same path. The following command is an example. Change the IP address as needed.

    ```
    scp -r omm@10.10.0.1:/hdfs_cfg ./
    ```

10. Use the  [CREATE SERVER](en-us_topic_0289899991.md)  syntax to define foreign servers to store HDFS database instance information. If  **hdfscfgpath**  is used, set it to the created directory  **/hdfs\_cfg**. Then create a foreign table and associate the table with the server.

    Remote connections to different Hadoop are isolated and identified by different foreign servers. Each foreign server corresponds to a configuration directory. Therefore, if you need to remotely access multiple Hadoop database instances, create configuration directories and foreign server definitions for different database instances.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >As described at the beginning of this section, if the interconnection is configured on FusionInsight Manager, set  **hdfscfgpath**  by following the provided reference document.
    >The value of  **hdfscfgpath**  is the path for storing the HDFS client configuration file. You can set  **hdfscfgpath**  to this path by performing the preceding steps. The value of  **hdfscfgpath**  in this document is for reference only. Change the value as needed.


