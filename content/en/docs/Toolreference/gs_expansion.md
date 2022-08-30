# gs\_expansion<a name="EN-US_TOPIC_0276337028"></a>

## Background<a name="section0416152818466"></a>

openGauss provides the  **gs\_expansion**  tool to scale out the standby database node. A standalone node or a node with one primary and multiple standbys can be scaled to a node with one primary and four standbys.

## Precautions<a name="section17961256134615"></a>

-   The parameter **synchronous\_standby\_names** will not automatically be updated after expansion. If you add a standby node for this parameter, please update manually after expansion.
-   Before expanding a cascade_standby, it is necessary to ensure that there has been already standby in Normal state in the same AZ(Available Zone) as the cascade_standby in current cluster, or that standby in the same AZ as the cascade_standby is being expanding at the same time.
-   Before scaling out the database cluster, you need to pay attention to the CPU, I/O, and network conditions of the primary node and new nodes. You are not advised to perform scale-out when the hardware load is heavy. Otherwise, the scale-out may take a long time or even fail.
-   If the original cluster contains a large amount of data, run the checkpoint on the primary node before the scale-out. Otherwise, the scale-out may take a long time or even fail.

## Prerequisites<a name="section18105194594714"></a>

-   The openGauss image package exists on the database host and is decompressed. The capacity is scaled out by running the  **./gs\_expansion**  command in the  **script**  directory.

- The same users and user groups as those on the primary node have been created on the new standby node.

- Ensure that the mutual trust of user  **root**  and the database management user \(such as  **omm**\) has been established between the existing database nodes and the new nodes.

- Ensure that the XML file has been properly configured and information about the standby node to be scaled has been added to the installed database configuration file.

- Only user  **root**  is authorized to run the  **gs\_expansion**  command.

- Do not run the  **gs\_dropnode**  command on the primary node to delete other standby nodes at the same time.

- Before running the scale-out commands, run the  **source**  command to import environment variables of a database on the primary node. If the database is installed in separate environment variable mode, run the  **source**  command to import the separate environment variables. If they are not separated, run the  **source**  command to import the .bashrc configuration file of the sub-user. Generally, the file path is  **/home/\[user\]/.bashrc**.

- The operating system of the new standby node is the same as that of the primary node.

- Do not perform an primary/standby switchover or failover on other standby nodes at the same time.

- Do not run the  **gs\_expansion**  command twice at the same time.

- Scale out the standby node only on the primary node.

  >![](public_sys-resources/icon-note.gif) **NOTE:** 
  >For security purposes, the tool in the  **gaussdbToolPath**  directory will be automatically deleted after the pre-installation is complete in enterprise-edition installation mode.


## 


## Syntax<a name="section10648255135011"></a>

-   Scale out the standby node.

    ```
    ./gs_expansion –U USER –G GROUP –X XMLFILE –h hostlist [-L]
    ```

-   Show help information.

    ```
    ./gs_expansion -? | --help 
    ```

-   Show version information.

    ```
    ./gs_expansion -V | --version 
    ```


## Description<a name="section46642447531"></a>

-   -U

    Specifies the OS username of openGauss.

    The user name of the new standby node must be the same as that of the primary node where the database has been installed and must be created in advance.

-   -G

    Specifies the OS user group of openGauss.

    The user group of the new standby node must be the same as that of the primary node where the database has been installed.

-   -X

    Specifies the path of the openGauss configuration file.

    Value range: storage paths of XML files. The XML file must contain the configuration information about the installed database and all nodes of the new database.

-   -h

    Specifies the IP address of the standby node to be scaled.

    The value must be the same as the value of  **backip**  in the XML configuration file. If there are multiple nodes, use commas \(,\) to separate them.

-   -L

    If the standalone database has been installed on the node to be scaled, skip the step of installing the database on the new standby node and directly establish the primary/standby relationship by adding the  **–L**  parameter during scaling.

    >![](public_sys-resources/icon-note.gif) **NOTE:**  
    >-   The databases installed on the primary and standby nodes must use the same user and user group, and the paths for separating environment variables must be the same.  
    >-   When the primary and standby nodes are installed, the values of  **gaussdbAppPath**,  **gaussdbLogPath**,  **gaussdbToolPath**, and  **corePath**  in the XML configuration file must be the same.  
    >-   The data on the scaled standby node must be installed in om mode. The database started in compilation mode does not support scaling out with the primary node.  
    >-   The database version of new instance need to be same as the primary instance.

- --time-out=SECS

  Specifies the timeout period for transmitting software packages during scale-out. If the network performance is poor, you can increase the timeout period to avoid timeout.

  Default value:  **300s**

  Unit: s

-   -?, –help

    Shows help information.

-   -V, –version

    Shows version information.


## Examples<a name="section14886952175610"></a>

Use  **gs\_expansion**  for scaling:

```
[root@openGauss173 script]# ./gs_expansion -U gsexpa -G xuemn -X /home/gsexpa/cas.xml -h 90.90.44.171
Start to preinstall database on new nodes.
Start to send soft to each standby nodes.
End to send soft to each standby nodes.
Start to preinstall database step.
Preinstall 90.90.44.171 success
End to preinstall database step.
End to preinstall database on new nodes.

Start to install database on new nodes.
Installing database on node 90.90.44.171:
Please enter the password of user [gsexpa] on node [90.90.44.171]:
Parsing the configuration file.
Check preinstall on every node.
Successfully checked preinstall on every node.
Creating the backup directory.
Successfully created the backup directory.
begin deploy..
Installing the cluster.
begin prepare Install Cluster..
Checking the installation environment on all nodes.
begin install Cluster..
Installing applications on all nodes.
Successfully installed APP.
begin init Instance..
encrypt cipher and rand files for database.
Please enter password for database:
Please repeat for database:
begin to create CA cert files
The sslcert will be generated in /data/gsexpa/openGauss/cluster/app/share/sslcert/om
Cluster installation is completed.
Configuring.
Deleting instances from all nodes.
Successfully deleted instances from all nodes.
Checking node configuration on all nodes.
Initializing instances on all nodes.
Updating instance configuration on all nodes.
Check consistence of memCheck and coresCheck on database nodes.
Configuring pg_hba on all nodes.
Configuration is completed.
Successfully started cluster.
Successfully installed application.
end deploy..
90.90.44.171 install success.
Finish to install database on all nodes.
Database on standby nodes installed finished.

Checking gaussdb and gs_om version.
End to check gaussdb and gs_om version.

Start to establish the relationship.
Start to build standby 90.90.44.171.
Build standby 90.90.44.171 success.
Start to generate and send cluster static file.
End to generate and send cluster static file.

Expansion results:
90.90.44.171:   Success
Expansion Finish.
```

## Helpful Links<a name="section81692446111"></a>

[gs\_preinstall](gs_preinstall.md),  [gs\_install](gs_install.md), and  [gs\_ctl](gs_ctl.md)

