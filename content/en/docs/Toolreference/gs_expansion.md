# gs\_expansion<a name="EN-US_TOPIC_0276337028"></a>

## Background<a name="section0416152818466"></a>

openGauss provides the  **gs\_expansion**  tool to scale out the standby database node. A standalone node or a node with one primary and multiple standbys can be scaled to a node with one primary and four standbys.

## Precautions<a name="section17961256134615"></a>

-   When a standalone mode is scaled to the primary/standby mode, the standalone database needs to be started as primary. Therefore, the database process needs to be restarted. When scaling out a standalone node, plan the running services first.

-   The parameter **synchronous\_standby\_names** will not automatically be updated after expansion. If you add a standby node for this parameter, please update manually after expansion.

## Prerequisites<a name="section18105194594714"></a>

-   The openGauss image package exists on the  database host and is decompressed. The capacity is scaled out by running the **./gs\_expansion**  command in the **script/**  directory.

-   The same users and user groups as those on the primary node have been created on the new standby node.

-   The mutual trust of user  **root**  and the database management user **omm** has been established between the existing database nodes and the new nodes.

-   The XML file has been created and information about the standby node to be scaled has been added to the installed database configuration file.

-   Only user  **root**  is authorized to run the  **gs\_expansion**  command.

-   Do not run **gs\_dropnode** command on the primary node at the same time.

-   The environment variables of the primary database node have been imported before the scale-out command is run. If the current database cluster is installed in a separate environment variable mode, run the **source** command to imports the spilt environment variable. If they are not spilt, run the  **source** command to import the **.bashrc** configuration file of the sub-user. Generally, the file path is: **/home/[user]/.bashrc**.

-   The operating system of the new standby node is the same as that of the primary node.


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

-   -?, –help

    Shows help information.

-   -V, –version

    Shows version information.


## Examples<a name="section14886952175610"></a>

Use  **gs\_expansion**  for scaling:

```
# ./gs_expansion -U zxb -G zxb -X /opt/zxb/instance4.xml -h 90.90.44.165
Start to preinstall database on the new standby nodes.
Successfully preinstall database on the new standby nodes.

Start to install database on the new standby nodes.

installing database on node 90.90.44.165:
Please enter the password of user [zxb] on node [90.90.44.165]:
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
The sslcert will be generated in /usr1/zxb/opengauss/gaussdb/app/share/sslcert/om
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

Successfully install database on node ['90.90.44.165']

Database on standby nodes installed finished. Start to establish the primary-standby relationship.

Success to expansion standby nodes.
```

## Helpful Links<a name="section81692446111"></a>

[gs\_preinstall](gs_preinstall.md),  [gs\_install](gs_install.md), and  [gs\_ctl](gs_ctl.md)

