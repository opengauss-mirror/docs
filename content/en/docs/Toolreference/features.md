# Features<a name="EN-US_TOPIC_0000001201007180"></a>

## cm\_agent<a name="section1669543664312"></a>

cm\_agent is a database management component deployed on each database host. It is used to start, stop, and monitor database instance processes.

The main functions are as follows:

-   It starts and stops the instance processes deployed on the local host when the database instance is started or stopped.
-   It monitors the instance status on the local host and sends the status to the CM server.
-   It runs the commands delivered by the CM server after arbitration.

**Command description:**

- Common options:
  - -V, --version

    Prints the cm\_agent version information and exits.

  - -?, -h,--help

    Displays help information about cm\_agent command parameters and exits.


- Locations where the log information is recorded:
  - 0

    Recorded in specified log files.

  - 1

    Recorded in the **syslog** file.

  - 2

    Recorded in specified log files.

  - 3

    Empty file, that is, no log information is recorded.


- Startup modes:
  - normal

    Startup in normal mode.

  - abnormal

    Startup in abnormal mode.


## cm\_server<a name="section132815414420"></a>

cm\_server is a component used for managing database instances and arbitrating instances. The main functions are as follows:

-   Receives the status of each database instance from cm\_agent on each node.
-   Allows you to query the overall status of the database instances.
-   Monitors instance status changes and delivers arbitration commands.

**Command description:**

- Common options:
  - -V, --version

    Prints the cm\_server version information and exits.

  - -?, -h,--help

    Displays help information about cm\_server command parameters and exits.


- Locations where the log information is recorded:
  - 0

    Recorded in specified log files.

  - 1

    Recorded in the **syslog** file.

  - 2

    Recorded in specified log files.

  - 3

    Empty file, that is, no log information is recorded.



## Custom Resource<a name="section43117352044"></a>

Currently, CM can monitor stateless resources. That is, each resource instance has the same role and does not distinguish between primary and standby resources, or resources can perform primary/standby quorum by themselves. CM provides the following functions:

-   Resource configuration

    The resource configuration file **cm\_resource.json** contains attributes of all custom resources. You can run the **cm\_ctl res** command to modify the configuration file. The modification does not take effect dynamically. After modifying the configuration file, restart the CM for the modification to take effect.

-   Client

    The CM provides a client dynamic library for resource integration and provides the cluster status query, status change notification, and cluster lock capabilities.

-   Automatic startup and stop

    A script must be provided for starting/stopping and detecting resources. The script path must be configured in the resource configuration file.

-   Manual startup and stop

    You can run the **cm\_ctl start/stop -n -I** command to start or stop resource instances. For details, see [cm_ctl](cm_ctl.md).

-   Custom resource status

    Custom resources can be in the online, offline, deleted or unknown state. You can run the **cm\_ctl** command to query the state.
    
    ### Configuration Method
    
    After customized resources are installed, you need to configure the following files to use the customized resource monitoring function:
    
    1. Resource script.  
       It is used to start or stop a resource and check the resource status. An example is as follows:
    
    ```
    #!/bin/bash
    #set -ex   #Uncomment this line to help debug the script.
    #Resource name
    resName=sharding
    #Resource binpath
    shardingPath=/home/test/home/apache-shardingsphere-5.1.1-shardingsphere-proxy-bin/bin
    #Command keyword used to filter resource instances
    cmdKey=org.apache.shardingsphere.proxy.Bootstrap
    #File that records the time when the stopped resource is detected for the first time
    phony_dead_time_file=.sharding_phony_dead_time
    #Maximum stopping time, in seconds
    PHONY_MAX_TIME=20
    
    function exec_start
    {
      #Command for starting resources
      sh ${shardingPath}/start.sh; exit $?
    }
    
    function exec_stop
    {
      #Command for stopping resources
      sh ${shardingPath}/stop.sh; exit $?
    }
    
    function exec_check
    {
      #Query the PID of a resource instance.
      pid=`ps x | grep "$cmdKey" | grep -v grep | awk '{print $1}'`
      if [ "${pid}" == "" ]; then
        echo "$resName is not running."
        exit 1
      fi
      #Query the status of the resource instance process.
      state=`cat /proc/$pid/status | grep "State" | awk '{print $2}'`
      if [ "$state" == "T" ]; then
        #Detect and handle stopped resources.
        if [ ! -f $phony_dead_time_file ]; then
          touch ./${phony_dead_time_file}
          echo "export firstphonytime=''" > ./${phony_dead_time_file}
        fi
        source ./$phony_dead_time_file;
        curtime=$(date +%s);
        if [ "$firstphonytime" == "" ]; then
          #If a stopped resource is detected for the first time, the timestamp is written into the stopping time storage file.
          #firstphonytime is the name of the variable used to store the stopping time of the current resource instance.
          #If the current node has multiple customized resource instances, set this parameter to different names.
          echo "export firstphonytime=$curtime" > ./$phony_dead_time_file;
          exit 0;
        fi
        dead_time=$(( $curtime - $firstphonytime ));
        #If the stopping time is greater than or equal to the maximum stopping time set by the user, the resource instance is killed immediately. Otherwise, the resource instance exits normally.
        if [ $dead_time -ge $PHONY_MAX_TIME ]; then
          echo "$resName is detected in a state of phony dead(T) and will be forcibly killed!"
          kill -9 $pid
          rm ./${phony_dead_time_file} -f
          sh ${shardingPath}/start.sh; exit $?
        else
          exit 0
        fi
      elif [ "$state" == "S" ]; then
        #The system is not stopped. After the environment is cleared, the system exits normally.
        rm ./${phony_dead_time_file} -f
        exit 0
      fi
    }
    
    #The following APIs are fixed and do not need to be modified. They correspond to the preceding three functions and must be implemented.
    if [ $1 == '-start' ]; then
      exec_start $2
    elif [ $1 == '-stop' ]; then
      exec_stop $2
    elif [ $1 == '-check' ]; then
      exec_check $2
    elif [ $1 == '-clean' ]; then
      exec_stop $2
    elif [ $1 == '-reg' ]; then
      exit 0
    elif [ $1 == '-unreg' ]; then
      exit 0
    elif [ $1 == '-isreg' ]; then
      exit 11
    else
      echo "Please confirm the input parameters."
      exit 1
    fi
    ```
    
    The preceding example can be used as a template. You need to modify the following information:
    Resource name, resource binPath, command keywords used to filter resource instances, file used to save the first resource stopping time (optional), longest stopping time, and variable name used to record the first stopping time (if multiple user-defined resource instances exist on the same node)
    
    2. Customized resource configuration file **cm\_resource.json**
       The file is stored in **cmdir/cm\_agent/cm\_resource.json**. After configuring the file, restart the cluster.
    
    ```
    {
      "resources": [
        {
          "name": "sharding",
          "resources_type": "APP",
          "instances": [
            {
              "node_id": 1,
              "res_instance_id": 1
            },
            {
              "node_id": 2,
              "res_instance_id": 2
            }
          ],
          "script": "/usr2/omm/install/cm/cm_agent/sharding.sh",
          "check_interval": 1,
          "time_out": 5,
          "restart_delay":3,
          "restart_period":5,
          "restart_times":10
        },
        {
          "name": "test",
          "resources_type": "APP",
          "instances": [
            {
              "node_id": 1,
              "res_instance_id": 1
            },
            {
              "node_id": 2,
              "res_instance_id": 2
            }
          ],
          "script": "/usr2/omm/install/cm/cm_agent/test.sh",
          "check_interval": 1,
          "time_out": 5,
          "restart_delay":0,
          "restart_period":0,
          "restart_times":1000
        }
      ]
    }
    ```
    
    Configuration description: 
    
    -   **resources**: customized resource object list. The name is fixed and cannot be changed.
    -   **name**: name of a customized resource object. The value is a string of a maximum of 32 characters (including the end '\0').
    -   **resources_type**: resource type. The value can be ["APP", "DN"]. **APP** indicates a custom resource, and **DN** indicates a database resource.
    -   **instances**: list of nodes where customized resources are located.
    -   **node_id**: ID of the node where the resource instance is located.
    -   **res_instance_id**: resource instance ID. The value is greater than or equal to 0. Different instances of the same resource have different IDs.
    -   **script**: location of the resource script.
    -   **check_interval**: interval for reporting the resource status, in seconds. The value is greater than or equal to 0.
    -   **time_out**: script execution timeout interval, in seconds. The value is greater than or equal to 0.
    -   **restart_delay**: restart delay after a fault occurs, in seconds. The value range is [0,1800].
    -   **restart_period**: If the difference between the current time and the latest restart time is greater than the value of **restart_period**, the number of resource restart times increases by 1.
    -   **restart_times**: maximum number of restart times in a period. If the number of restart times exceeds the value of **restart_times**, the system does not restart the resource and marks the resource as unavailable. The value range is [0,9999]. The value **0** indicates unlimited restart.
    
    >![](public_sys-resources/icon-caution.gif) **CAUTION:**   
    >The resource configuration file must exist on all nodes and be consistent. 
    >Ensure that the resource script can run properly.


## Shared Storage<a name="section135462412052"></a>

-   Disk heartbeat

    The CM Agent on each node periodically writes heartbeat messages to the voting disk. The CM Server obtains the heartbeat messages from the voting disk and uses them as the arbitration basis in primary/standby sharing mode.

-   Network heartbeat

    The main logic of the network heartbeat detection between nodes is implemented in the CM Agent. To avoid frequent connection setup, persistent connections are used for heartbeat detection. That is, the CM Agents exchange heartbeat messages through TCP persistent connections. Each CM Agent node periodically broadcasts the heartbeat messages and periodically reports the list information to the CM Server. This function depends on the clock synchronization of each node.

-   Arbitration among clusters

    The CM Server performs arbitration based on the network heartbeat data, disk heartbeat data, and shared disk status, and selects the leader node among clusters.

    The clusters must meet the following conditions:

    1. The DB instance is normal.

    2. The network communication is normal.

    3. The disk heartbeat is normal.

    Clusters that do not meet the requirements will be removed.

    The rules for selecting the leader node among clusters are as follows:

    1. A cluster with a larger number of nodes is selected.

    2. If the number of nodes is the same, the cluster with smaller node IDs is selected.

-   Constraints:
    -   The clocks of cluster nodes must be synchronized.
    -   Before installing the CM, ensure that the shared disk has at least 150 MB free space. Otherwise, historical data may be affected.
    -   Before installing the CM, ensure that the voting disk has been cleared. Otherwise, historical data may be affected.
    -   Heartbeat detection is performed between all nodes in a cluster, which may affect the network in a large cluster. Therefore, heartbeat detection can be enabled for a maximum of 64 nodes. (DMS supports a maximum of 64 nodes, which meets service requirements.)
    -   The CM cluster supports a maximum of eight standby nodes. Therefore, a maximum of nine copies are supported in a cluster.
    -   Ensure that the voting disk and shared disk contain at least 1 GB space, which is exclusively used by the CM and cannot be used by other applications.
    -   The disk heartbeat is enabled only in arbitration mode of the shared storage architecture.


## DN Arbitration Supported by CM<a name="section2099617234715"></a>

-   The CM supports the following DN arbitration modes:
    -   Quorum: The synchronous standby node is selected based on the MAJORITY arbitration.
        -   Description: The CM performs arbitration based on the quorum mode. When DN shards have no primary DN, the CM sends a failover message to the node with the largest term and LSN to promote the node to primary after redoing MAJORITY DNs.
        -   Constraints: At least a cluster with one primary and two standby nodes are required.

    -   DCF:
        -   Automatic switchover based on the Paxos protocol:
            -   Description: In DCF automatic switchover mode, the CM does not select the primary DN. Instead, the CM is only responsible for data collection and stopped resource detection.
            -   Constraint: Only **cm\_ctl switchover -n NODEID -D DATADIR** can be used for switchover.
            -   CM configuration: enable\_dcf=ON and dn\_arbitrate\_mode=paxos
            -   DN configuration: enable\_dcf=ON

        -   General constraint:
            -   At least a cluster with one primary and two standby nodes are required.

        -   Default installation: DCF automatic switchover mode

    -   Shared storage:
        -   Description: In this scenario, the CM does not select the primary DN. Instead, the CM is only responsible for data collection and stopped resource detection.
        -   CM configuration: dn\_arbitrate\_mode=share\_disk
        -   For details about description and constraints, see [Shared Storage](#section135462412052).

## Cluster Information Query and Push

**Functions:** 
By running the CMRestAPI component, the CM supports:

1. The HTTP/HTTPS service is used to remotely query the cluster status, helping management personnel and O&M platforms monitor the cluster status.
2. When an primary/standby switchover occurs in the database cluster, the latest primary/standby information of the cluster is pushed to the receiving address registered by the application through the HTTP/HTTPS service in time. In this way, the application can detect the primary/standby change of the cluster in time and quickly connect to the new primary and standby nodes.

**Parameter description:** 

+ **-e** indicates the database environment variable file, which must be specified.

+ **-w** indicates the whitelist of source IP addresses. If the whitelist is not required, you do not need to specify it.
  Startup command: 

  ```
  java -jar cmrestapi-xxx.jar -e envFile [-w appWhiteList]
  ```

**API description:** 

1. Query the cluster or node status.  
   This API uses the GET method. The format is **http://***ip***:***port***/****CMRestAPI/***keyword*.  
   Where: 
   + **ip** indicates the IP address of the node where CMRestAPI is running. 
   + **port** indicates the listening port of the CMRestAPI service. 
   + **keyword** indicates the keyword of the information to be queried. Currently, the following information can be queried: 
     Cluster status. The format is **http://***ip***:***port***/****CMRestAPI/ClusterStatus**. 
     Node status. The format is **http://***ip***:***port***/****CMRestAPI/NodeStatus[?nodeId=n]**. If **nodeId** is set to **n**, the status of node *n* can be queried. If **nodeId** is not specified, the status of the node that provides services (that is, the status of the node specified by the IP address) is returned by default. 

2. Register and update the addresses for receiving information about the primary and standby nodes. 
   If the application wants to receive the latest primary/standby information pushed by the CMRestAPI, the application needs to register an information receiving address with the CMRestAPI and listen on the address. After receiving the request, the CMRestAPI saves the registered receiving address to the environment where the cluster is located through DCC. DCC stores data in the key-value format. The key is **/CMRestAPI/RecvAddrList/***ip***/***app*, where **ip** indicates the IP address of the host where the application is located and **app** indicates the user-defined application name. It is used to distinguish the receiving addresses registered by multiple applications in the same environment. If the key already exists, that is, the source IP address and application name are the same, the address for receiving active and standby information corresponding to the key is updated. The value of **Content-Type** is **application/x-www-form-urlencoded**. 
   This API uses the PUT method. The format is **http://***ip***:***port***/CMRestAPI/RecvAddr**. The following two parameters need to be provided:  
   + **url**: receiving address to be registered.
   + **app**: application name. If this parameter is not provided, the key is in the format of Prefix + Application IP address.

3. Delete the addresses for receiving information about the primary and standby nodes. 
   This API uses the DELETE method. The format is **http://***ip***:***port***/CMRestAPI/RecvAddr**. The following parameter needs to be provided: 
   **app**: application name. If this parameter is not provided, the key is in the format of **Prefix + Application IP address**.  

4. Description of the address for receiving information. 
   Example of the information receiving address: **http://***ip***:***port***/CMRestAPI**
   The CMRestAPI uses the PUT method to push host information. The context is MasterInfo, that is, the link format is **http://***ip***:***port***/CMRestAPI/MasterInfo**. The object type is String. The host information format is *ip***:***port*. The context of the pushed standby node is StanbyInfo, the type of the sent object is String, and the format of the standby node information is **ip1:port1,ip2:port2, ...,ipn:portn**. For details about an application demo, see [applicationdemo](https://gitee.com/opengauss/CM-RestAPI/tree/master/applicationdemo/src/main/java/com/application/applicationdemo) in the CMRestAPI repository.

**Other description:** 

1. Security-related description. 
   (1) By default, the CMRestAPI uses the HTTP service and supports the configuration of the access whitelist. You can use the startup parameter **-w** to configure the whitelist file of the access source IP address. Each line in the whitelist file contains one IP address. 
   (2) To use the HTTPS service, you can specify the system parameter **server.ssl** in the JAR package during startup to enable the CMRestAPI to start the HTTPS service, or write related parameters into the **application.properties** file and specify the configuration file in the startup command, or configure the **application.properties** file in the **resource** directory of the source code and compile the file. The following is an example of customized configuration parameters:  

```
-Dserver.port=Service listening port -Dserver.ssl.key-store=Key file path -Dserver.ssl.key-store-password=Key file password -Dserver.ssl.key-store-type=Key type  
Example: 
Specify parameters:

Specify system parameters.
java -jar -Dserver.port=8443 -Dserver.ssl.key-store=/home/omm/keystore.p12 -Dserver.ssl.key-store-password=Abcdef@123 -Dserver.ssl.key-store-type=PKCS12 cmrestapi-xxx.jar -e envFile  
Specify a configuration file. 
java -jar -Dspring.config.location=/configpath/application.properties cmrestapi-xxx.jar -e envFile
```

You can search for and configure more parameters.

2. Memory-related parameters. 
   This program uses the Spring Boot framework. By default, the startup occupies a large amount of memory (about 1 GB). If the number of concurrent requests is small and you do not want the program to occupy a large amount of memory, you can specify some system parameters during startup to reduce the memory usage. The following is an example of the startup parameters:  

```
-XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=56m -Xms128m -Xmx128m -Xmn32m -Xss328k -XX:SurvivorRatio=8 -XX:+UseConcMarkSweepGC  
Example: java -jar -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=56m -Xms128m -Xmx128m -Xmn32m -Xss328k -XX:SurvivorRatio=8 -XX:+UseConcMarkSweepGC cmrestapi-xxx.jar -e envFile
```

You can search for and configure more parameters.

3. Customized resource configuration file. 
   This program depends on CM-related processes and instructions. Therefore, this program must run with CM at the same time. You need to configure the customized resource configuration file. For details about the configuration method, see the content related to the customized resource monitoring feature.

**Operation Procedure** 

1. Install the database cluster containing a CM, and configure the resource script and customized resource file. The following is an example of the resource script:  
   cmrestapi.sh

```
#!/bin/bash
#set -ex
#Resource name
resName=CM-RestAPI
#Resource binpath
cmrestapiPath=/home/cmrestapi/cmrestapi-3.1.0-RELEASE.jar
#Keyword of the resource startup command
cmdKey=cmrestapi-3.1.0-RELEASE.jar
#File that records the time when the stopped resource is detected for the first time
phony_dead_time_file=.cmrestapi_phony_dead_time
#Maximum stopping time, in seconds
PHONY_MAX_TIME=20
envFile=/home/cmrestapi/envfile
#appWhiteListFile=/home/cmrestapi/appWhiteListFile
source $envFile

function exec_start
{
    nohup java -jar -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=56m -Xms128m -Xmx128m -Xmn32m -Xss328k -XX:SurvivorRatio=8 -XX:+UseConcMarkSweepGC -Dserver.port=8080 $cmrestapiPath -e $envFile >> $GAUSSLOG/cm/cmrestapi/cmrestapi.log 2>&1 &
    exit $?
}

function exec_stop
{
    ps x | grep "$cmdKey" | grep -v grep | awk '{print $1}' | xargs kill -9; exit $?
}

function exec_check
{
    pid=`ps x | grep "$cmdKey" | grep -v grep | awk '{print $1}'`
    if [ "${pid}" == "" ]; then
        echo "$resName is not running."
        exit 1
    fi
    state=`cat /proc/$pid/status | grep "State" | awk '{print $2}'`
    if [ "$state" == "T" ]; then
        if [ ! -f $phony_dead_time_file ]; then
            touch ./${phony_dead_time_file}
            echo "export firstphonytime=''" > ./${phony_dead_time_file}
        fi
        source ./$phony_dead_time_file;
        curtime=$(date +%s);
        if [ "$firstphonytime" == "" ]; then
            echo "export firstphonytime=$curtime" > ./$phony_dead_time_file;
            exit 0;
        fi
        dead_time=$(( $curtime - $firstphonytime ));
        if [ $dead_time -ge $PHONY_MAX_TIME ]; then
            echo "$resName is detected in a state of phony dead(T) and will be forcibly killed!"
            kill -9 $pid
            rm ./${phony_dead_time_file} -f
            exec_start
        else
            exit 0
        fi
    elif [ "$state" == "S" ]; then
        rm ./${phony_dead_time_file} -f
        echo "$resName is running normally."
        exit 0
    fi
}

if [ $1 == '-start' ]; then
    exec_start $2
elif [ $1 == '-stop' ]; then
    exec_stop $2
elif [ $1 == '-check' ]; then
    exec_check $2
elif [ $1 == '-clean' ]; then
    exec_stop $2
elif [ $1 == '-reg' ]; then
    exit 0
elif [ $1 == '-unreg' ]; then
    exit 0
elif [ $1 == '-isreg' ]; then
    exit 11
else
    echo "Please confirm the input parameters."
    exit 1
fi
```

The following is an example of the customized resource file **cm_resource.json**: 

```
{
  "resources": [
    {
      "name": "CM-RestAPI",
      "resources_type": "APP",
      "instances": [
        {
          "node_id": 1,
          "res_instance_id": 1
        },
        {
          "node_id": 2,
          "res_instance_id": 2
        },
        {
          "node_id": 3,
          "res_instance_id": 3
        }
      ],
      "script": "/home/cmrestapi/install/cm/cm_agent/cmrestapi.sh",
      "check_interval": 1,
      "time_out": 10,
      "restart_delay":0,
      "restart_period":0,
      "restart_times":1000
    }
  ]
}
```

>![](public_sys-resources/icon-caution.gif) **CAUTION:**   
>To use the customized resource management function of CM, the process needs to be executed in the backend. Therefore, you need to redirect the log output to the log file or configure the log output options, and use nohup and & to run the program in the backend.
>This program must run on a node where a database is deployed. If the primary/standby information push function is required during a cluster switchover, this program must run on all database nodes in the cluster.

2. Start the cluster. You can use a browser to access the cluster or node information query interface to query the corresponding information.
3. Develop the application (for details, see the demo of the source code repository) and start the application.
4. Register an address for receiving information.
