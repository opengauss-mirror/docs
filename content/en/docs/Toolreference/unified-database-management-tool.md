# Unified Database Management Tool<a name="EN-US_TOPIC_0000001246286999"></a>

The cluster manager \(CM\) is a database management module. It supports customized resource monitoring and provides capabilities such as monitoring of the primary/standby database status, network communication faults, file system faults, and automatic primary/standby switchover upon faults. It also provides various database management capabilities, such as starting and stopping nodes and instances, querying database instance status, performing primary/standby switchover, and managing logs.

Note that in a scenario where there are one primary node and one standby node, the CM supports only basic capabilities, such as installation, startup, stop, and detection.

-   **[Features](#features)**  

-   **[Introduction to the cm\_ctl Tool](#introduction-to-the-cm_ctl-tool)**  

-   **[Security Design](#security-design)**  

-   **[CM Parameters](#cm-parameters)**  

## Features<a name="EN-US_TOPIC_0000001201007180"></a>

### cm\_agent<a name="section1669543664312"></a>

cm\_agent is a database management component deployed on each database host. It is used to start, stop, and monitor database instance processes.

It has the following functions:

-   It starts and stops the instance processes deployed on the local host when the database instance is started or stopped.
-   It monitors the instance status on the local host and sends the status to the CM server.
-   It runs the commands delivered by the CM server after arbitration.

**Command description:**

-   Common options:
    -   -V, --version

        Prints the cm\_agent version information and exits.

    -   -?, -h,--help

        Displays help information about cm\_agent command parameters and exits.


-   Locations where the log information is recorded:
    -   0

        Recorded in specified log files.

    -   1

        Recorded in the  **syslog**  file.

    -   2

        Recorded in specified log files.

    -   3

        Empty file, that is, no log information is recorded.


-   Startup modes:
    -   normal

        Startup in normal mode.

    -   abnormal

        Startup in abnormal mode.



### cm\_server<a name="section132815414420"></a>

cm\_server is a component used for managing database instances and arbitrating instances. It has the following functions:

-   Receives the status of each database instance from cm\_agent on each node.
-   Allows you to query the overall status of the database instances.
-   Monitors instance status changes and delivers arbitration commands.

**Command description:**

-   Common options:
    -   -V, --version

        Prints the cm\_server version information and exits.

    -   -?, -h,--help

        Displays help information about cm\_server command parameters and exits.


-   Locations where the log information is recorded:
    -   0

        Recorded in specified log files.

    -   1

        Recorded in the  **syslog**  file.

    -   2

        Recorded in specified log files.

    -   3

        Empty file, that is, no log information is recorded.

### Customized Resource Monitoring

Currently, CM can monitor stateless resources. That is, each resource instance has the same role and does not distinguish between primary and standby resources, or resources can perform primary/standby quorum by themselves. CM provides the following functions:
-   Start and stop resources.
-   Monitor resource processes and restart processes when exceptions occur.
-   Query the resource process status.
-   Detect and recover zombie processes (resource scripts required).

Configuration method:
After customized resources are installed, you need to configure the following files to use the customized resource monitoring function:
1. Resource script 
It is used to start or stop a resource and check the resource status. An example is as follows:
```
#!/bin/bash
#set -ex   # Uncomment this line to help debug the script.
#Resource name
resName=sharding
#Resource binpath
shardingPath=/home/test/home/apache-shardingsphere-5.1.1-shardingsphere-proxy-bin/bin
#Command keyword used to filter resource instances
cmdKey=org.apache.shardingsphere.proxy.Bootstrap
#File that records the time when the resource suspension is detected for the first time
phony_dead_time_file=.sharding_phony_dead_time
#Maximum suspension time, in seconds
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
    #Detect and handle zombie resources.
    if [ ! -f $phony_dead_time_file ]; then
      touch ./${phony_dead_time_file}
      echo "export firstphonytime=''" > ./${phony_dead_time_file}
    fi
    source ./$phony_dead_time_file;
    curtime=$(date +%s);
    if [ "$firstphonytime" == "" ]; then
      #If a zombie resource is detected for the first time, the timestamp is written into the zombie time storage file.
      #firstphonytime is the name of the variable used to store the suspension time of the current resource instance.
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
    #The resource is not in the stopped state. After the environment is cleared, the resource exits normally.
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
fi
```
The preceding example can be used as a template. You need to modify the following information:
Resource name, resource binPath, command keywords used to filter resource instances, file used to save the first resource stopping time (optional), longest stopping time, and variable name used to record the first stopping time (if multiple user-defined resource instances exist on the same node)

2. Customized resource configuration file **cm_resource.json**
The file is stored in **cmdir/cm_agent/cm_resource.json**. After configuring the file, restart the cluster.
```
{
  "resources": [
    {
      "name": "sharding",
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
-   **instances**: list of nodes where customized resources are located.
-   **node_id**: ID of the node where the resource instance is located.
-   **res\_instance\_id**: resource instance ID. The value is greater than or equal to 0. Different instances of the same resource have different IDs.
-   **script**: location of the resource script.
-   **check_interval**: interval for reporting the resource status, in seconds. The value is greater than or equal to 0.
-   **time_out**: script execution timeout interval, in seconds. The value is greater than or equal to 0.
-   **restart_delay**: restart delay after a fault occurs, in seconds. The value range is [0,1800].
-   **restart_period**: If the difference between the current time and the latest restart time is greater than the value of **restart_period**, the number of resource restart times increases by 1.
-   **restart_times**: maximum number of restart times in a period. If the number of restart times exceeds the value of **restart_times**, the system does not restart the resource and marks the resource as unavailable. The value range is [0,9999]. The value **0** indicates unlimited restart.

>![](./public_sys-resources/icon-caution.gif) **Caution:**  
>The resource configuration file must exist on all nodes and be consistent. 
>Ensure that the resource script can run properly. 

### Cluster Information Query and Push
**Functions: ** 
By running the CMRestAPI component, the CM supports:
1. The HTTP/HTTPS service is used to remotely query the cluster status, helping management personnel and O&M platforms monitor the cluster status.
2. When an primary/standby switchover occurs in the database cluster, the latest primary/standby information of the cluster is pushed to the receiving address registered by the application through the HTTP/HTTPS service in time. In this way, the application can detect the primary/standby change of the cluster in time and quickly connect to the new primary and standby nodes.

**Parameter description:** 
-**-e** indicates the database environment variable file, which must be specified. 
-**-w** indicates the whitelist of source IP addresses. If the whitelist is not required, you do not need to specify it. 
Startup command: 
java -jar cmrestapi-xxx.jar -e envFile [-w appWhiteList]

**API description:** 
1. Query the cluster or node status. 
This API uses the GET method. The format is **http://***ip***:***port***/****CMRestAPI/***keyword*. 
Where: 
**ip** indicates the IP address of the node where CMRestAPI is running. 
**port** indicates the listening port of the CMRestAPI service. 
**keyword** indicates the keyword of the information to be queried. Currently, the following information can be queried: 
Cluster status. The format is **http://***ip***:***port***/****CMRestAPI/ClusterStatus**. 
Node status. The format is **http://***ip***:***port***/****CMRestAPI/ClusterStatus[?nodeId=n]**. If **nodeId** is set to **n**, the status of node *n* can be queried. If **nodeId** is not specified, the status of the node that provides services (that is, the status of the node specified by the IP address) is returned by default. 

2. Register and update the addresses for receiving information about the primary and standby nodes. 
If the application wants to receive the latest primary/standby information pushed by the CMRestAPI, the application needs to register an information receiving address with the CMRestAPI and listen on the address. After receiving the request, the CMRestAPI saves the registered receiving address to the environment where the cluster is located through DCC. DCC stores data in the key-value format. The key is **/CMRestAPI/RecvAddrList/***ip***/***app*, where **ip** indicates the IP address of the host where the application is located and **app** indicates the user-defined application name. It is used to distinguish the receiving addresses registered by multiple applications in the same environment. If the key already exists, that is, the source IP address and application name are the same, the address for receiving active and standby information corresponding to the key is updated. 
This API uses the PUT method. The format is **http://***ip***:***port***/CMRestAPI/RecvAddr**. The following two parameters need to be provided: 
**url**: receiving address to be registered. 
**app**: application name. If this parameter is not provided, the key is in the format of Prefix + Application IP address.

3. Delete the addresses for receiving information about the primary and standby nodes. 
This API uses the DELETE method. The format is **http://***ip***:***port***/CMRestAPI/RecvAddr**. The following parameter needs to be provided: 
**app**: application name. 

4. Description of the address for receiving information. 
Example of the information receiving address: **http://***ip***:***port***/CMRestAPI**
The CMRestAPI uses the PUT method to push host information. The context is MasterInfo, that is, the link format is **http://***ip***:***port***/CMRestAPI/MasterInfo**. The object type is String. The host information format is *ip***:***port*. The context of the pushed standby node is StanbyInfo, the type of the sent object is String, and the format of the standby node information is **ip1:port1,ip2:port2, ...,ipn:portn**. For details about an application demo, see [applicationdemo](https://gitee.com/opengauss/CM-RestAPI/tree/master/applicationdemo/src/main/java/com/application/applicationdemo) in the CMRestAPI repository.

**Other description:** 
1. Security-related description 
(1) By default, the CMRestAPI uses the HTTP service and supports the configuration of the access whitelist. You can use the startup parameter **-w** to configure the whitelist file of the access source IP address. Each line in the whitelist file contains one IP address.  
(2) To use the HTTPS service, you can specify the system parameter **server.ssl** in the JAR package during startup to enable the CMRestAPI to start the HTTPS service, or write related parameters into the **application.properties** file and specify the configuration file in the startup command, or configure the **application.properties** file in the **resource** directory of the source code and compile the file. The following is an example of customized configuration parameters: 
```
-Dserver.port=*Service listening port* -Dserver.ssl.key-store=*Key file path* -Dserver.ssl.key-store-password= *Key file password* -Dserver.ssl.key-store-type= *Key type* ``` 
Example: 
Specify system parameters.
java -jar -Dserver.port=8443 -Dserver.ssl.key-store=/home/omm/keystore.p12 -Dserver.ssl.key-store-password=Abcdef@123 -Dserver.ssl.key-store-type=PKCS12 cmrestapi-xxx.jar -e envFile  
Specify a configuration file. 
java -jar -Dspring.config.location=/configpath/application.properties cmrestapi-xxx.jar -e envFile
```  
You can search for and configure more parameters.

2. Memory-related description 
This program uses the Spring Boot framework. By default, the startup occupies a large amount of memory (about 1 GB). If the number of concurrent requests is small and you do not want the program to occupy a large amount of memory, you can specify some system parameters during startup to reduce the memory usage. The following is an example of the startup parameters: 
```-XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=56m -Xms128m -Xmx128m -Xmn32m -Xss328k -XX:SurvivorRatio=8 -XX:+UseConcMarkSweepGC```

3. Customized resource configuration file 
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
fi
```
The following is an example of the customized resource file **cm_resource.json**: 
```
{
  "resources": [
    {
      "name": "CM-RestAPI",
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
>![](./public_sys-resources/icon-caution.gif) **Caution:**  
>To use the customized resource management function of CM, the process needs to be executed in the backend. Therefore, you need to redirect the log output to the log file or configure the log output options, and use nohup and & to run the program in the backend.
>This program must run on a node where a database is deployed. If the primary/standby information push function is required during a cluster switchover, this program must run on all database nodes in the cluster.
2. Start the cluster. You can use a browser to access the cluster or node information query interface to query the corresponding information.
3. Develop the application (for details, see the demo of the source code repository) and start the application.
4. Register an address for receiving information.


## Introduction to the cm\_ctl Tool<a name="EN-US_TOPIC_0000001201327140"></a>

**cm\_ctl**  is a tool provided by openGauss to control database instance services. This tool is called by O&M personnel for automatic database instance service restoration. The  **cm\_ctl**  tool provides the following functions:

-   Starts database instance services, all the instances in an AZ, all instances on a single host, or a single instance process.
-   Stops database instance services, all instances in an AZ, all instances on a single host, or instance processes on a single node. 
-   Restarts the logical database instance service.
-   Queries the database instance status or the status of a single host.
-   Switches over the primary and standby instances or resets the instance status.
-   Rebuilds the standby node.
-   Views the database instance configuration file.
-   Sets the log level, the arbitration mode of cm\_server when one primary and multiple standby database instances are deployed, and the switchover mode between AZs.
-   Obtains the log level, the arbitration mode of cm\_server when one primary and multiple standby database instances are deployed, and the switchover mode between AZs.
-   Checks the status of an instance process.

Files related to the  **cm\_ctl**  tool:

-   cluster\_manual\_start

    This is a flag file for starting and stopping a database instance. This file is stored in  *$GAUSSHOME***/bin**, where  *GAUSSHOME*  is an environment variable. When the database instance is started, the  **cm\_ctl**  tool deletes the file. When the database instance is stopped, the  **cm\_ctl**  tool generates the file and writes the stop mode to the file.


-   instance\_manual\_start\_X \(*X*  indicates the instance ID.\)

    This is a flag file for starting and stopping a single instance. This file is stored in  *$GAUSSHOME***/bin**, where  *GAUSSHOME*  is an environment variable. When the instance is started, the  **cm\_ctl**  tool deletes the file. When the instance is stopped, the  **cm\_ctl**  tool generates the file and writes the stop mode to the file.


**cm\_ctl**  constraints:

-   In cluster mode, the  **cm\_ctl**  tool instead of the  **gs\_ctl**  tool is used to switch the database role.

### Command Description<a name="en-us_topic_0116784021_s03ab48c805584dbda0f4d8f1a36833c2"></a>

The  **cm\_ctl**  tool can use the following types of parameters:

-   Parameters for  **option**. For details, see  [Parameters for option](#en-us_topic_0116784021_table1718281376).
-   Common parameters. For details, see  [Common parameters](#en-us_topic_0116784021_t73f4b6dad11943ea811a211e6c127669).
-   Parameters for  **start**. For details, see  [Parameters for start](#table45722029132319).
-   Parameters for  **switchover**. For details, see  [Parameters for switchover](#table12226155814102).
-   Parameters for  **build**. For details, see  [Parameters for build](#table649003761312).
-   Parameters for  **check**. For details, see  [Parameters for check](#en-us_topic_0116784021_t5582631c9b25449da85855fab919ddfd).
-   Parameters for  **stop**. For details, see  [Parameters for stop](#en-us_topic_0116784021_t7507cabe697c4b4da00814fccee8e559).
-   Parameters for  **query**. For details, see  [Parameters for query](#en-us_topic_0116784021_t19badc48929f4f9abd94b8ac774f06c1).
-   Parameters for  **view**. For details, see  [Parameters for view](#en-us_topic_0116784021_table207722104617).
-   Parameters for  **set**. For details, see  [Parameters for set](#en-us_topic_0116784021_tef5e0858a71c4d21abce8f80e3ba7723)  and  [Parameters for set cm](#table10437204416514).
-   Parameters for  **get**. For details, see  [Parameters for get](#table1599151916313).
-   Parameters for  **setrunmode**. For details, see  [Parameters for setrunmode](#table1656519521713).
-   Parameters for  **changerole**. For details, see  [Parameters for changerole](#table326418392182).
-   Parameters for  **changemember**. For details, see  [Parameters for changemember](#table27311655104911).
-   Parameters for  **reload**. For details, see  [Parameters for reload](#table11377594818).
-   Parameters for  **list**. For details, see  [Parameters for list](#table0914920191018).
-   Parameters for  **encrypt**. For details, see  [Parameters for encrypt](#table4739105911382).
-   Parameters for  **ddb**. For details, see  [Parameters for ddb](#table9665145942617).
-   Parameters for  **switch**. For details, see  [Parameters for switch](#table7591811163812).

**Table  1**  Parameters for option

<a name="en-us_topic_0116784021_table1718281376"></a>
<table><thead align="left"><tr id="en-us_topic_0116784021_row3512281078"><th class="cellrowborder" valign="top" width="18.73%" id="mcps1.2.3.1.1"><p id="en-us_topic_0116784021_p551628671"><a name="en-us_topic_0116784021_p551628671"></a><a name="en-us_topic_0116784021_p551628671"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="81.27%" id="mcps1.2.3.1.2"><p id="en-us_topic_0116784021_p3512813716"><a name="en-us_topic_0116784021_p3512813716"></a><a name="en-us_topic_0116784021_p3512813716"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0116784021_row1772289712"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_p2732814712"><a name="en-us_topic_0116784021_p2732814712"></a><a name="en-us_topic_0116784021_p2732814712"></a>start</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_p97172813717"><a name="en-us_topic_0116784021_p97172813717"></a><a name="en-us_topic_0116784021_p97172813717"></a>Starts the database instance service, all instances on a single host, instance processes on a single node, or the entire AZ when one primary database and multiple standby databases are deployed.</p>
</td>
</tr>
<tr id="en-us_topic_0116784021_row10772813716"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_p1471228371"><a name="en-us_topic_0116784021_p1471228371"></a><a name="en-us_topic_0116784021_p1471228371"></a>switchover</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_p4718281716"><a name="en-us_topic_0116784021_p4718281716"></a><a name="en-us_topic_0116784021_p4718281716"></a>Switches over the primary and standby database instances when one primary database and multiple standby databases are deployed. In DCF mode, the <strong id="b161471534135316"><a name="b161471534135316"></a><a name="b161471534135316"></a>-n NODEID</strong> and <strong id="b16824362537"><a name="b16824362537"></a><a name="b16824362537"></a>-D DATADIR</strong> parameters are not supported.</p>
</td>
</tr>
<tr id="row47801623861"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p778072319614"><a name="p778072319614"></a><a name="p778072319614"></a>finishredo</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p1845716340619"><a name="p1845716340619"></a><a name="p1845716340619"></a>Stops the playback on all standby nodes, and forcibly promotes one of the shards to primary.</p>
<div class="caution" id="note1445713341613"><a name="note1445713341613"></a><a name="note1445713341613"></a><span class="cautiontitle"> CAUTION: </span><div class="cautionbody"><p id="p145715341615"><a name="p145715341615"></a><a name="p145715341615"></a>Setting this parameter is a high-risk operation. Exercise caution when performing this operation.</p>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0116784021_row13782811712"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_p127328274"><a name="en-us_topic_0116784021_p127328274"></a><a name="en-us_topic_0116784021_p127328274"></a>build</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_p197172818716"><a name="en-us_topic_0116784021_p197172818716"></a><a name="en-us_topic_0116784021_p197172818716"></a>Rebuilds a standby instance.</p>
</td>
</tr>
<tr id="en-us_topic_0116784021_row1879288713"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_p5712819713"><a name="en-us_topic_0116784021_p5712819713"></a><a name="en-us_topic_0116784021_p5712819713"></a>check</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p939441964612"><a name="p939441964612"></a><a name="p939441964612"></a>Checks the running status of an instance process. You are not advised to use this parameter.</p>
</td>
</tr>
<tr id="en-us_topic_0116784021_row8717283718"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_p3719281470"><a name="en-us_topic_0116784021_p3719281470"></a><a name="en-us_topic_0116784021_p3719281470"></a>stop</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_p972280719"><a name="en-us_topic_0116784021_p972280719"></a><a name="en-us_topic_0116784021_p972280719"></a>Stops the database instance service, all instances on a single host, or the instance processes on a single node when one primary database and multiple standby databases are deployed.</p>
</td>
</tr>
<tr id="en-us_topic_0116784021_row1670282072"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_p47628373"><a name="en-us_topic_0116784021_p47628373"></a><a name="en-us_topic_0116784021_p47628373"></a>query</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_p1276281674"><a name="en-us_topic_0116784021_p1276281674"></a><a name="en-us_topic_0116784021_p1276281674"></a>Queries the database instance status or the status of a single host when one primary database and multiple standby databases are deployed.</p>
</td>
</tr>
<tr id="row14381747877"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p152263498720"><a name="p152263498720"></a><a name="p152263498720"></a>view</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p13383472716"><a name="p13383472716"></a><a name="p13383472716"></a>Views the database instance configuration file.</p>
</td>
</tr>
<tr id="en-us_topic_0116784021_row9712817716"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_p1271281978"><a name="en-us_topic_0116784021_p1271281978"></a><a name="en-us_topic_0116784021_p1271281978"></a>set</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_p12713283719"><a name="en-us_topic_0116784021_p12713283719"></a><a name="en-us_topic_0116784021_p12713283719"></a>Sets the log level, the arbitration mode of cm_server when one primary database and multiple standby databases are deployed, the switchover mode between AZs, and the promotion mode to primary of cm_server.</p>
</td>
</tr>
<tr id="row1850113211082"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p550112211786"><a name="p550112211786"></a><a name="p550112211786"></a>set --param</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p6501202116818"><a name="p6501202116818"></a><a name="p6501202116818"></a>Sets CM parameters. By default, parameters on all nodes are set. You can also use the <strong id="b4288030105215"><a name="b4288030105215"></a><a name="b4288030105215"></a>-n</strong> parameter to set parameters on a node. For details about the parameters, see <a href="cm-parameters.md">CM Parameters</a>.</p>
</td>
</tr>
<tr id="row1662135316255"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p966415322513"><a name="p966415322513"></a><a name="p966415322513"></a>get</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p186641553172510"><a name="p186641553172510"></a><a name="p186641553172510"></a>Obtains the log level, the arbitration mode of cm_server when one primary database and multiple standby databases are deployed, and the switchover mode between AZs.</p>
</td>
</tr>
<tr id="row1294918104914"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p69493101593"><a name="p69493101593"></a><a name="p69493101593"></a>setrunmode</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p19491010291"><a name="p19491010291"></a><a name="p19491010291"></a>Sets the number of DCF votes in DCF deployment mode. This parameter is used for forcible DCF startup.</p>
</td>
</tr>
<tr id="row412616153913"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p1212614151911"><a name="p1212614151911"></a><a name="p1212614151911"></a>changerole</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p6126171511913"><a name="p6126171511913"></a><a name="p6126171511913"></a>Changes the primary role to <strong id="b951634185512"><a name="b951634185512"></a><a name="b951634185512"></a>passive</strong> or <strong id="b9516114105514"><a name="b9516114105514"></a><a name="b9516114105514"></a>follower</strong> in the DCF mode.</p>
</td>
</tr>
<tr id="row13434131719918"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p14350171099"><a name="p14350171099"></a><a name="p14350171099"></a>changemember</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p134358171493"><a name="p134358171493"></a><a name="p134358171493"></a>Changes the attributes of a DCF node in DCF mode, including the role, logical group, and election priority of the node.</p>
</td>
</tr>
<tr id="row934765319475"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p3348145354718"><a name="p3348145354718"></a><a name="p3348145354718"></a>reload</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p19892194942510"><a name="p19892194942510"></a><a name="p19892194942510"></a>Loads the static configuration file of a database instance online. You are not advised to use this parameter.</p>
</td>
</tr>
<tr id="row1431318261489"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p631452618487"><a name="p631452618487"></a><a name="p631452618487"></a>reload --param</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p11314192624815"><a name="p11314192624815"></a><a name="p11314192624815"></a>Loads CM parameters that can take effect dynamically. Some parameters cannot be reloaded and can take effect only after the CM is restarted.</p>
</td>
</tr>
<tr id="row1174130124814"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p1274193034820"><a name="p1274193034820"></a><a name="p1274193034820"></a>list</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p1674123010483"><a name="p1674123010483"></a><a name="p1674123010483"></a>Lists all parameters of cm_agent or cm_server.</p>
</td>
</tr>
<tr id="row79323240495"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p69321424194915"><a name="p69321424194915"></a><a name="p69321424194915"></a>encrypt</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p8933624164910"><a name="p8933624164910"></a><a name="p8933624164910"></a>Encrypts an entered password. The password can contain 8 to 15 characters and must contain at least three types of the following characters: digits, letters, and symbols.</p>
</td>
</tr>
<tr id="row83491118501"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p2034911110501"><a name="p2034911110501"></a><a name="p2034911110501"></a>ddb</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p203493114508"><a name="p203493114508"></a><a name="p203493114508"></a>Runs the DCC command in DCC mode.</p>
</td>
</tr>
<tr id="row9198618201015"><td class="cellrowborder" valign="top" width="18.73%" headers="mcps1.2.3.1.1 "><p id="p1386610187104"><a name="p1386610187104"></a><a name="p1386610187104"></a>switch</p>
</td>
<td class="cellrowborder" valign="top" width="81.27%" headers="mcps1.2.3.1.2 "><p id="p819851818100"><a name="p819851818100"></a><a name="p819851818100"></a>Switches to the DDB mode.</p>
<div class="note" id="note195647106235"><a name="note195647106235"></a><a name="note195647106235"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p1356414106234"><a name="p1356414106234"></a><a name="p1356414106234"></a>Currently, openGauss can be switched only to the DCC mode.</p>
</div></div>
</td>
</tr>
</tbody>
</table>

**Table  2**  Common parameters

<a name="en-us_topic_0116784021_t73f4b6dad11943ea811a211e6c127669"></a>
<table><thead align="left"><tr id="en-us_topic_0116784021_r9b2667f4243a4e87b40e7fc0180813c7"><th class="cellrowborder" valign="top" width="27.38%" id="mcps1.2.3.1.1"><p id="en-us_topic_0116784021_a7ec01558f8ed4028bbf8cdea612a621a"><a name="en-us_topic_0116784021_a7ec01558f8ed4028bbf8cdea612a621a"></a><a name="en-us_topic_0116784021_a7ec01558f8ed4028bbf8cdea612a621a"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="72.61999999999999%" id="mcps1.2.3.1.2"><p id="en-us_topic_0116784021_aaad7089c239e47e5b6bb41f0d119a5ea"><a name="en-us_topic_0116784021_aaad7089c239e47e5b6bb41f0d119a5ea"></a><a name="en-us_topic_0116784021_aaad7089c239e47e5b6bb41f0d119a5ea"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0116784021_r1e184ddb0ba14a27a0c48e56ae67ca44"><td class="cellrowborder" valign="top" width="27.38%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_a6aa8803f607642bb8466be3254e77531"><a name="en-us_topic_0116784021_a6aa8803f607642bb8466be3254e77531"></a><a name="en-us_topic_0116784021_a6aa8803f607642bb8466be3254e77531"></a>-D DATADIR</p>
</td>
<td class="cellrowborder" valign="top" width="72.61999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_afa2212dded3748a7924ea04efce2280b"><a name="en-us_topic_0116784021_afa2212dded3748a7924ea04efce2280b"></a><a name="en-us_topic_0116784021_afa2212dded3748a7924ea04efce2280b"></a>Specifies the instance data directory.</p>
</td>
</tr>
<tr id="row195328365128"><td class="cellrowborder" valign="top" width="27.38%" headers="mcps1.2.3.1.1 "><p id="p1934113751214"><a name="p1934113751214"></a><a name="p1934113751214"></a>-l FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="72.61999999999999%" headers="mcps1.2.3.1.2 "><p id="p4140154021210"><a name="p4140154021210"></a><a name="p4140154021210"></a>Outputs the result to a specified file.</p>
</td>
</tr>
<tr id="en-us_topic_0116784021_r3009d9544e694ea0b8c248b152c2fcb0"><td class="cellrowborder" valign="top" width="27.38%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_afa6218bc758d49eca62af42f644e06fe"><a name="en-us_topic_0116784021_afa6218bc758d49eca62af42f644e06fe"></a><a name="en-us_topic_0116784021_afa6218bc758d49eca62af42f644e06fe"></a>-n NODEID</p>
</td>
<td class="cellrowborder" valign="top" width="72.61999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_a18f50a7ab89f42f6bf0cec63b6120a07"><a name="en-us_topic_0116784021_a18f50a7ab89f42f6bf0cec63b6120a07"></a><a name="en-us_topic_0116784021_a18f50a7ab89f42f6bf0cec63b6120a07"></a>Specifies a node.</p>
</td>
</tr>
<tr id="en-us_topic_0116784021_r84d4692a7d8849c49dfa4e154052725f"><td class="cellrowborder" valign="top" width="27.38%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_aac254a8d2358472289e1a36867cdd244"><a name="en-us_topic_0116784021_aac254a8d2358472289e1a36867cdd244"></a><a name="en-us_topic_0116784021_aac254a8d2358472289e1a36867cdd244"></a>-z AVAILABILITY_ZONE</p>
</td>
<td class="cellrowborder" valign="top" width="72.61999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_a5beacea766d44bbe813c7ac582bba362"><a name="en-us_topic_0116784021_a5beacea766d44bbe813c7ac582bba362"></a><a name="en-us_topic_0116784021_a5beacea766d44bbe813c7ac582bba362"></a>Specifies an AZ name.</p>
</td>
</tr>
<tr id="en-us_topic_0116784021_r477e0c6128994f0aa7d1bc5910ddc257"><td class="cellrowborder" valign="top" width="27.38%" headers="mcps1.2.3.1.1 "><p id="p122511250131212"><a name="p122511250131212"></a><a name="p122511250131212"></a>-t SECS</p>
</td>
<td class="cellrowborder" valign="top" width="72.61999999999999%" headers="mcps1.2.3.1.2 "><p id="p1497155341214"><a name="p1497155341214"></a><a name="p1497155341214"></a>Specifies a timeout period.</p>
</td>
</tr>
<tr id="en-us_topic_0116784021_r8e84c6e9ea2c4544ba81838fade7c37f"><td class="cellrowborder" valign="top" width="27.38%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_a1e0cd0443cda4befb15b7b32ba4eea0e"><a name="en-us_topic_0116784021_a1e0cd0443cda4befb15b7b32ba4eea0e"></a><a name="en-us_topic_0116784021_a1e0cd0443cda4befb15b7b32ba4eea0e"></a>-V, --version</p>
</td>
<td class="cellrowborder" valign="top" width="72.61999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_a99eb4947ce8845f3ae4445d57f800f32"><a name="en-us_topic_0116784021_a99eb4947ce8845f3ae4445d57f800f32"></a><a name="en-us_topic_0116784021_a99eb4947ce8845f3ae4445d57f800f32"></a>Prints the <strong id="b5744291316"><a name="b5744291316"></a><a name="b5744291316"></a>cm_ctl</strong> version and exits.</p>
</td>
</tr>
<tr id="en-us_topic_0116784021_rf8678b2ad92b4c5ca6a73aff8b1fdd9a"><td class="cellrowborder" valign="top" width="27.38%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_ae5caaed9829a4efda56af9b389561516"><a name="en-us_topic_0116784021_ae5caaed9829a4efda56af9b389561516"></a><a name="en-us_topic_0116784021_ae5caaed9829a4efda56af9b389561516"></a>-?, -h,--help</p>
</td>
<td class="cellrowborder" valign="top" width="72.61999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_a3f900ff898144a7a82007afa0fb93825"><a name="en-us_topic_0116784021_a3f900ff898144a7a82007afa0fb93825"></a><a name="en-us_topic_0116784021_a3f900ff898144a7a82007afa0fb93825"></a>Displays help information about <strong id="b0989419018"><a name="b0989419018"></a><a name="b0989419018"></a>cm_ctl</strong> command parameters and exits.</p>
</td>
</tr>
</tbody>
</table>

**Table  3**  Parameters for switchover

<a name="table12226155814102"></a>
<table><thead align="left"><tr id="row72262584103"><th class="cellrowborder" valign="top" width="22.869999999999997%" id="mcps1.2.3.1.1"><p id="p1722685820101"><a name="p1722685820101"></a><a name="p1722685820101"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="77.13%" id="mcps1.2.3.1.2"><p id="p322605817109"><a name="p322605817109"></a><a name="p322605817109"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1822715813100"><td class="cellrowborder" valign="top" width="22.869999999999997%" headers="mcps1.2.3.1.1 "><p id="p122279589106"><a name="p122279589106"></a><a name="p122279589106"></a>-a</p>
</td>
<td class="cellrowborder" valign="top" width="77.13%" headers="mcps1.2.3.1.2 "><p id="p182271958161018"><a name="p182271958161018"></a><a name="p182271958161018"></a>Restores nodes to their initial status.</p>
<div class="note" id="note4227758151011"><a name="note4227758151011"></a><a name="note4227758151011"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p322713584103"><a name="p322713584103"></a><a name="p322713584103"></a>Switchover is performed for maintenance. Before a switchover, ensure that the cluster is running properly, all services are stopped, and the <strong id="b469310511938"><a name="b469310511938"></a><a name="b469310511938"></a>pgxc_get_senders_catchup_time()</strong> view shows no ongoing catchup between the primary and standby nodes.</p>
</div></div>
</td>
</tr>
<tr id="row876891261217"><td class="cellrowborder" valign="top" width="22.869999999999997%" headers="mcps1.2.3.1.1 "><p id="p157683127123"><a name="p157683127123"></a><a name="p157683127123"></a>-A</p>
</td>
<td class="cellrowborder" valign="top" width="77.13%" headers="mcps1.2.3.1.2 "><p id="p5768101211121"><a name="p5768101211121"></a><a name="p5768101211121"></a>Switches all node instances from primary to standby.</p>
</td>
</tr>
<tr id="row132271458161020"><td class="cellrowborder" valign="top" width="22.869999999999997%" headers="mcps1.2.3.1.1 "><p id="p6227658191018"><a name="p6227658191018"></a><a name="p6227658191018"></a>-f</p>
</td>
<td class="cellrowborder" valign="top" width="77.13%" headers="mcps1.2.3.1.2 "><p id="p1722775811018"><a name="p1722775811018"></a><a name="p1722775811018"></a>Specifies that a switchover of the -f type is performed.</p>
<div class="note" id="note2022865851012"><a name="note2022865851012"></a><a name="note2022865851012"></a><span class="notetitle"> NOTE: </span><div class="notebody"><a name="ul1722865861017"></a><a name="ul1722865861017"></a><ul id="ul1722865861017"><li>Switchover is performed for maintenance. Before a switchover, ensure that the cluster is running properly, all services are stopped, and the <strong id="b189276262043"><a name="b189276262043"></a><a name="b189276262043"></a>pgxc_get_senders_catchup_time()</strong> view shows no ongoing catchup between the primary and standby nodes.</li><li>Usage: <strong id="b12361015191017"><a name="b12361015191017"></a><a name="b12361015191017"></a>cm_ctl switchover -n NODEID -D DATADIR -f</strong>.</li></ul>
</div></div>
</td>
</tr>
</tbody>
</table>

**Table  4**  Parameters for build

<a name="table649003761312"></a>
<table><thead align="left"><tr id="row1549019377136"><th class="cellrowborder" valign="top" width="36.96%" id="mcps1.2.3.1.1"><p id="p9490837131316"><a name="p9490837131316"></a><a name="p9490837131316"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="63.04%" id="mcps1.2.3.1.2"><p id="p17490937101319"><a name="p17490937101319"></a><a name="p17490937101319"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row20490193716132"><td class="cellrowborder" valign="top" width="36.96%" headers="mcps1.2.3.1.1 "><p id="p24901837141313"><a name="p24901837141313"></a><a name="p24901837141313"></a>-f</p>
</td>
<td class="cellrowborder" valign="top" width="63.04%" headers="mcps1.2.3.1.2 "><p id="p649120371130"><a name="p649120371130"></a><a name="p649120371130"></a>Forcibly rebuilds a standby node</p>
</td>
</tr>
<tr id="row20491153713135"><td class="cellrowborder" valign="top" width="36.96%" headers="mcps1.2.3.1.1 "><p id="p16491153712138"><a name="p16491153712138"></a><a name="p16491153712138"></a>-b full</p>
</td>
<td class="cellrowborder" valign="top" width="63.04%" headers="mcps1.2.3.1.2 "><p id="p144918375134"><a name="p144918375134"></a><a name="p144918375134"></a>Performs a full build. If this parameter is not specified, automatic build is performed for the deployment mode of one primary database instance and multiple standby database instances. <strong id="b7644175341112"><a name="b7644175341112"></a><a name="b7644175341112"></a>auto build</strong>: calls the incremental build first and calls the full build after the incremental build fails.</p>
</td>
</tr>
<tr id="row66031246131316"><td class="cellrowborder" valign="top" width="36.96%" headers="mcps1.2.3.1.1 "><p id="p1860354615133"><a name="p1860354615133"></a><a name="p1860354615133"></a>-c</p>
</td>
<td class="cellrowborder" valign="top" width="63.04%" headers="mcps1.2.3.1.2 "><p id="p613211713369"><a name="p613211713369"></a><a name="p613211713369"></a>Rebuilds cm_server (by copying the DCC data directory on the primary node to the specified node. This method is applicable only to the scenario where there are one primary node and one standby node.)</p>
</td>
</tr>
</tbody>
</table>

**Table  5**  Parameters for check

<a name="en-us_topic_0116784021_t5582631c9b25449da85855fab919ddfd"></a>
<table><thead align="left"><tr id="en-us_topic_0116784021_rd37f17597d4247e0ae482955d9309dec"><th class="cellrowborder" valign="top" width="37.41%" id="mcps1.2.3.1.1"><p id="en-us_topic_0116784021_a01a077aed6494d02a3281d4e8099e93f"><a name="en-us_topic_0116784021_a01a077aed6494d02a3281d4e8099e93f"></a><a name="en-us_topic_0116784021_a01a077aed6494d02a3281d4e8099e93f"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="62.59%" id="mcps1.2.3.1.2"><p id="en-us_topic_0116784021_a7a38ec4d685b4f47b90e0ad9a4f50824"><a name="en-us_topic_0116784021_a7a38ec4d685b4f47b90e0ad9a4f50824"></a><a name="en-us_topic_0116784021_a7a38ec4d685b4f47b90e0ad9a4f50824"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0116784021_rd8c1b7cddd6f427d9694f264d2005cac"><td class="cellrowborder" valign="top" width="37.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_ab803457b0a634b51b9dded46a033ccd3"><a name="en-us_topic_0116784021_ab803457b0a634b51b9dded46a033ccd3"></a><a name="en-us_topic_0116784021_ab803457b0a634b51b9dded46a033ccd3"></a>-B BINNAME</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_ac55816c176ab4706a6aadb8ad7593023"><a name="en-us_topic_0116784021_ac55816c176ab4706a6aadb8ad7593023"></a><a name="en-us_topic_0116784021_ac55816c176ab4706a6aadb8ad7593023"></a>Specifies the name of a process, which can be <strong id="b19125236191517"><a name="b19125236191517"></a><a name="b19125236191517"></a>cm_agent</strong>, <strong id="b19125336151517"><a name="b19125336151517"></a><a name="b19125336151517"></a>gaussdb</strong>, or <strong id="b1112533671519"><a name="b1112533671519"></a><a name="b1112533671519"></a>cm_server</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0116784021_rd2e1192de08d42bcaade8ca56005ffc1"><td class="cellrowborder" valign="top" width="37.41%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_a4e9f52921a6d48ef83bdfe09118a36b2"><a name="en-us_topic_0116784021_a4e9f52921a6d48ef83bdfe09118a36b2"></a><a name="en-us_topic_0116784021_a4e9f52921a6d48ef83bdfe09118a36b2"></a>-T DATAPATH</p>
</td>
<td class="cellrowborder" valign="top" width="62.59%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_ab3ea48e85af841789dc64a1178000c5a"><a name="en-us_topic_0116784021_ab3ea48e85af841789dc64a1178000c5a"></a><a name="en-us_topic_0116784021_ab3ea48e85af841789dc64a1178000c5a"></a>Specifies the instance data directory.</p>
</td>
</tr>
</tbody>
</table>

**Table  6**  Parameters for stop

<a name="en-us_topic_0116784021_t7507cabe697c4b4da00814fccee8e559"></a>
<table><thead align="left"><tr id="en-us_topic_0116784021_r9fe46923fdac41adafc1d99fc26394fe"><th class="cellrowborder" valign="top" width="32.15%" id="mcps1.2.3.1.1"><p id="en-us_topic_0116784021_ac69b26b26eaf444d8976b4a02ebfa755"><a name="en-us_topic_0116784021_ac69b26b26eaf444d8976b4a02ebfa755"></a><a name="en-us_topic_0116784021_ac69b26b26eaf444d8976b4a02ebfa755"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="67.85%" id="mcps1.2.3.1.2"><p id="en-us_topic_0116784021_a2149847c7cee4befb99d6feded576a60"><a name="en-us_topic_0116784021_a2149847c7cee4befb99d6feded576a60"></a><a name="en-us_topic_0116784021_a2149847c7cee4befb99d6feded576a60"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0116784021_rd03f46c5234c4d7e8f26720fb785b37c"><td class="cellrowborder" valign="top" width="32.15%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_add073231a45d453b801c35a3eb22b469"><a name="en-us_topic_0116784021_add073231a45d453b801c35a3eb22b469"></a><a name="en-us_topic_0116784021_add073231a45d453b801c35a3eb22b469"></a>-m SHUTDOWN-MODE</p>
</td>
<td class="cellrowborder" valign="top" width="67.85%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_a420b6d7e3a0c471d9cfc5e497dd028bc"><a name="en-us_topic_0116784021_a420b6d7e3a0c471d9cfc5e497dd028bc"></a><a name="en-us_topic_0116784021_a420b6d7e3a0c471d9cfc5e497dd028bc"></a>Specifies the stop mode. The options are as follows:</p>
<a name="ul116320588224"></a><a name="ul116320588224"></a><ul id="ul116320588224"><li><strong>smart (s)</strong>: The database instance exits after user services end. </li><li><strong>fast (f)</strong>: The database instance exits without waiting for the user service to end. <li><strong>immediate (i)</strong>: The database instance is forced to exit without waiting for the user service to end.</li></ul>
</td>
</tr>
</tbody>
</table>

**Table  7**  Parameters for query

<a name="en-us_topic_0116784021_t19badc48929f4f9abd94b8ac774f06c1"></a>
<table><thead align="left"><tr id="en-us_topic_0116784021_r95c34a3a3d3b46c4acc26ae7505b45a6"><th class="cellrowborder" valign="top" width="19.43%" id="mcps1.2.3.1.1"><p id="en-us_topic_0116784021_a1604cdeb3e414559ae3d5f833f16552b"><a name="en-us_topic_0116784021_a1604cdeb3e414559ae3d5f833f16552b"></a><a name="en-us_topic_0116784021_a1604cdeb3e414559ae3d5f833f16552b"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="80.57%" id="mcps1.2.3.1.2"><p id="en-us_topic_0116784021_a571c87b4d9294e02bd2aed23a771d5a0"><a name="en-us_topic_0116784021_a571c87b4d9294e02bd2aed23a771d5a0"></a><a name="en-us_topic_0116784021_a571c87b4d9294e02bd2aed23a771d5a0"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1129820320157"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p12982030155"><a name="p12982030155"></a><a name="p12982030155"></a>-s</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_a842704ebd6fc4221aaba924dc932ff55"><a name="en-us_topic_0116784021_a842704ebd6fc4221aaba924dc932ff55"></a><a name="en-us_topic_0116784021_a842704ebd6fc4221aaba924dc932ff55"></a>Displays instances that result in unbalanced primary and standby instance quantity on each host.</p>
<div class="note" id="en-us_topic_0116784021_nc60bc80c518c49eda2b35d562147346b"><a name="en-us_topic_0116784021_nc60bc80c518c49eda2b35d562147346b"></a><a name="en-us_topic_0116784021_nc60bc80c518c49eda2b35d562147346b"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0116784021_af1994683c8554b83b1b0e4aabdbcf7cd"><a name="en-us_topic_0116784021_af1994683c8554b83b1b0e4aabdbcf7cd"></a><a name="en-us_topic_0116784021_af1994683c8554b83b1b0e4aabdbcf7cd"></a>The <strong id="b12339112641813"><a name="b12339112641813"></a><a name="b12339112641813"></a>-s</strong> parameter must be used together with <strong id="b173391026131818"><a name="b173391026131818"></a><a name="b173391026131818"></a>-v</strong> and <strong id="b4339162611816"><a name="b4339162611816"></a><a name="b4339162611816"></a>-C</strong> so that instances that result in unbalanced primary and standby instance quantity on each host can be displayed in pairs. When using <strong id="b14340626141810"><a name="b14340626141810"></a><a name="b14340626141810"></a>-s</strong>, <strong id="b143401026161810"><a name="b143401026161810"></a><a name="b143401026161810"></a>-C</strong> and <strong id="b1734082614183"><a name="b1734082614183"></a><a name="b1734082614183"></a>-v</strong> must be specified.</p>
</div></div>
</td>
</tr>
<tr id="row65832211151"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p0583221191520"><a name="p0583221191520"></a><a name="p0583221191520"></a>-C</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_a4b79f2da8c494569857808ffd61f71a5"><a name="en-us_topic_0116784021_a4b79f2da8c494569857808ffd61f71a5"></a><a name="en-us_topic_0116784021_a4b79f2da8c494569857808ffd61f71a5"></a>Displays the database instance status in pairs based on the primary and standby relationship.</p>
<div class="note" id="en-us_topic_0116784021_n731aa2a43352481e978b12c5553265bb"><a name="en-us_topic_0116784021_n731aa2a43352481e978b12c5553265bb"></a><a name="en-us_topic_0116784021_n731aa2a43352481e978b12c5553265bb"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0116784021_a39570561395642a98889ff545e5199f0"><a name="en-us_topic_0116784021_a39570561395642a98889ff545e5199f0"></a><a name="en-us_topic_0116784021_a39570561395642a98889ff545e5199f0"></a>The <strong id="b16600114912199"><a name="b16600114912199"></a><a name="b16600114912199"></a>-C</strong> parameter must be used together with <strong id="b14600144910198"><a name="b14600144910198"></a><a name="b14600144910198"></a>-v</strong> to display detailed database instance status information in pairs based on the primary and standby relationship. When using <strong id="b160024951918"><a name="b160024951918"></a><a name="b160024951918"></a>-C</strong>, <strong id="b360154918197"><a name="b360154918197"></a><a name="b360154918197"></a>-v</strong> must be specified.</p>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0116784021_r553167c4166044a0b29f84a7883ccc75"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_a999edbdbff544c99ba456dd23e519dac"><a name="en-us_topic_0116784021_a999edbdbff544c99ba456dd23e519dac"></a><a name="en-us_topic_0116784021_a999edbdbff544c99ba456dd23e519dac"></a>-v</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_a925da3184e614f288fce5a63a2916abf"><a name="en-us_topic_0116784021_a925da3184e614f288fce5a63a2916abf"></a><a name="en-us_topic_0116784021_a925da3184e614f288fce5a63a2916abf"></a>Displays the detailed database instance status.</p>
<div class="note" id="en-us_topic_0116784021_n40330e074da34b2da0c80b95a9493f29"><a name="en-us_topic_0116784021_n40330e074da34b2da0c80b95a9493f29"></a><a name="en-us_topic_0116784021_n40330e074da34b2da0c80b95a9493f29"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0116784021_a37464d4740da49ac813a633ba7dd3ad0"><a name="en-us_topic_0116784021_a37464d4740da49ac813a633ba7dd3ad0"></a><a name="en-us_topic_0116784021_a37464d4740da49ac813a633ba7dd3ad0"></a>A database instance can be in any of the following states:</p>
<a name="en-us_topic_0116784021_uda4877377f8c4db6a498b7fed7873ea5"></a><a name="en-us_topic_0116784021_uda4877377f8c4db6a498b7fed7873ea5"></a><ul id="en-us_topic_0116784021_uda4877377f8c4db6a498b7fed7873ea5"><li><strong id="b19696183172111"><a name="b19696183172111"></a><a name="b19696183172111"></a>Normal</strong>: indicates that the database instance is available and the data is backed up. All the processes are running and the primary and standby relationship is normal.</li><li><strong id="b18558115810213"><a name="b18558115810213"></a><a name="b18558115810213"></a>Degraded</strong>: The database instance is available, but data is not backed up.</li><li><strong id="b1178571882216"><a name="b1178571882216"></a><a name="b1178571882216"></a>Unavailable</strong>: The database instance is unavailable.</li></ul>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0116784021_rf77a30064bae47b3b55158207950b428"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_a15fcb4494e4c469ba1cd5c4cf245309b"><a name="en-us_topic_0116784021_a15fcb4494e4c469ba1cd5c4cf245309b"></a><a name="en-us_topic_0116784021_a15fcb4494e4c469ba1cd5c4cf245309b"></a>-d</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_a440eac8bd72d47b89536e3204d64c34c"><a name="en-us_topic_0116784021_a440eac8bd72d47b89536e3204d64c34c"></a><a name="en-us_topic_0116784021_a440eac8bd72d47b89536e3204d64c34c"></a>Displays the instance data directory.</p>
<div class="note" id="en-us_topic_0116784021_n34b3cecab92d4d8798e0839da2a6d3bd"><a name="en-us_topic_0116784021_n34b3cecab92d4d8798e0839da2a6d3bd"></a><a name="en-us_topic_0116784021_n34b3cecab92d4d8798e0839da2a6d3bd"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0116784021_a96799a456e334a499e7a5369cb7f02b5"><a name="en-us_topic_0116784021_a96799a456e334a499e7a5369cb7f02b5"></a><a name="en-us_topic_0116784021_a96799a456e334a499e7a5369cb7f02b5"></a>The <strong id="b133514594224"><a name="b133514594224"></a><a name="b133514594224"></a>-d</strong> parameter must be used together with the <strong id="b12351259152215"><a name="b12351259152215"></a><a name="b12351259152215"></a>-v</strong> and <strong id="b1435245982218"><a name="b1435245982218"></a><a name="b1435245982218"></a>-C</strong> parameters.</p>
</div></div>
</td>
</tr>
<tr id="row52574051616"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_a67311a740bdb4055adb5ab46efe4e860"><a name="en-us_topic_0116784021_a67311a740bdb4055adb5ab46efe4e860"></a><a name="en-us_topic_0116784021_a67311a740bdb4055adb5ab46efe4e860"></a>-i</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_ac117ca8771bf4cef8f424b4fd0d658c5"><a name="en-us_topic_0116784021_ac117ca8771bf4cef8f424b4fd0d658c5"></a><a name="en-us_topic_0116784021_ac117ca8771bf4cef8f424b4fd0d658c5"></a>Displays the IP addresses of physical nodes.</p>
<div class="note" id="en-us_topic_0116784021_n4f315e9ba51145dd9128d814932da195"><a name="en-us_topic_0116784021_n4f315e9ba51145dd9128d814932da195"></a><a name="en-us_topic_0116784021_n4f315e9ba51145dd9128d814932da195"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0116784021_ad62086b6f32c49a69a1d742ff34aa2ad"><a name="en-us_topic_0116784021_ad62086b6f32c49a69a1d742ff34aa2ad"></a><a name="en-us_topic_0116784021_ad62086b6f32c49a69a1d742ff34aa2ad"></a>The <strong id="b1173211100235"><a name="b1173211100235"></a><a name="b1173211100235"></a>-i</strong> parameter must be used together with the <strong id="b127321110142310"><a name="b127321110142310"></a><a name="b127321110142310"></a>-v</strong> and <strong id="b197321103231"><a name="b197321103231"></a><a name="b197321103231"></a>-C</strong> parameters.</p>
</div></div>
</td>
</tr>
<tr id="row523414981611"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p9234134911620"><a name="p9234134911620"></a><a name="p9234134911620"></a>-F</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_p1071913172256"><a name="en-us_topic_0116784021_p1071913172256"></a><a name="en-us_topic_0116784021_p1071913172256"></a>Displays the fenced UDF status of each node.</p>
<div class="note" id="en-us_topic_0116784021_note14720161711256"><a name="en-us_topic_0116784021_note14720161711256"></a><a name="en-us_topic_0116784021_note14720161711256"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0116784021_p1722151716253"><a name="en-us_topic_0116784021_p1722151716253"></a><a name="en-us_topic_0116784021_p1722151716253"></a>The <strong id="b0313720152314"><a name="b0313720152314"></a><a name="b0313720152314"></a>-F</strong> parameter must be used together with the <strong id="b2314162052311"><a name="b2314162052311"></a><a name="b2314162052311"></a>-v</strong> and <strong id="b131442002317"><a name="b131442002317"></a><a name="b131442002317"></a>-C</strong> parameters to display the fenced UDF status of each node. When the <strong id="b1631422014234"><a name="b1631422014234"></a><a name="b1631422014234"></a>-F</strong> parameter is used, the <strong id="b1731472018237"><a name="b1731472018237"></a><a name="b1731472018237"></a>-C</strong> and <strong id="b16314220112318"><a name="b16314220112318"></a><a name="b16314220112318"></a>-v</strong> parameters must be specified.</p>
</div></div>
</td>
</tr>
<tr id="row72113163521"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p7211167171713"><a name="p7211167171713"></a><a name="p7211167171713"></a>-z ALL</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="p179912235284"><a name="p179912235284"></a><a name="p179912235284"></a>Displays the AZ name of a database instance.</p>
<div class="note" id="note2620241288"><a name="note2620241288"></a><a name="note2620241288"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p1234192413287"><a name="p1234192413287"></a><a name="p1234192413287"></a>The <strong id="b1952141232415"><a name="b1952141232415"></a><a name="b1952141232415"></a>-z</strong> parameter must be used together with <strong id="b19598128244"><a name="b19598128244"></a><a name="b19598128244"></a>-v</strong> and <strong id="b39591212152418"><a name="b39591212152418"></a><a name="b39591212152418"></a>-C</strong> and be followed by <strong id="b49601212182418"><a name="b49601212182418"></a><a name="b49601212182418"></a>ALL</strong>.</p>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0116784021_r91a86e28e010481eaf36b9c0de2c3820"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p172271611523"><a name="p172271611523"></a><a name="p172271611523"></a>-r</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="p52221655217"><a name="p52221655217"></a><a name="p52221655217"></a>Displays the redo status of the standby node.</p>
<div class="note" id="note844444714528"><a name="note844444714528"></a><a name="note844444714528"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p1844594775210"><a name="p1844594775210"></a><a name="p1844594775210"></a>When using <strong id="b15013246247"><a name="b15013246247"></a><a name="b15013246247"></a>-r</strong>, you must specify the <strong id="b51122410244"><a name="b51122410244"></a><a name="b51122410244"></a>-v</strong> parameter.</p>
</div></div>
</td>
</tr>
<tr id="row6520145815401"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p35211358194014"><a name="p35211358194014"></a><a name="p35211358194014"></a>-g</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="p15168320103413"><a name="p15168320103413"></a><a name="p15168320103413"></a>Displays information about cluster backup and restoration.</p>
</td>
</tr>
<tr id="en-us_topic_0116784021_row464311132254"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p1573810068"><a name="p1573810068"></a><a name="p1573810068"></a>-x</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="p1773840868"><a name="p1773840868"></a><a name="p1773840868"></a>Displays all abnormal database instances.</p>
<div class="note" id="note10739110060"><a name="note10739110060"></a><a name="note10739110060"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p15739160960"><a name="p15739160960"></a><a name="p15739160960"></a>The <strong id="b157888124253"><a name="b157888124253"></a><a name="b157888124253"></a>-x</strong> parameter must be used together with the <strong id="b1978912128259"><a name="b1978912128259"></a><a name="b1978912128259"></a>-v</strong> and <strong id="b27899125258"><a name="b27899125258"></a><a name="b27899125258"></a>-C</strong> parameters.</p>
</div></div>
</td>
</tr>
<tr id="en-us_topic_0116784021_r0c7619ba8f3f445196dc6b76a354f937"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_ab515c4c4117c461295e58b95c1da869a"><a name="en-us_topic_0116784021_ab515c4c4117c461295e58b95c1da869a"></a><a name="en-us_topic_0116784021_ab515c4c4117c461295e58b95c1da869a"></a>-S</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="p11633175118493"><a name="p11633175118493"></a><a name="p11633175118493"></a>Displays the status check result when a database instance is started.</p>
<div class="note" id="note563385194914"><a name="note563385194914"></a><a name="note563385194914"></a><span class="notetitle"> NOTE: </span><div class="notebody"><div class="p" id="p36334518495"><a name="p36334518495"></a><a name="p36334518495"></a>The <strong id="b1462103252519"><a name="b1462103252519"></a><a name="b1462103252519"></a>-S</strong> parameter must be used together with the <strong id="b3621532202511"><a name="b3621532202511"></a><a name="b3621532202511"></a>-v</strong> and <strong id="b162173214252"><a name="b162173214252"></a><a name="b162173214252"></a>-C</strong> parameters to display the database instance status check result. The states are as follows:<a name="ul291533852718"></a><a name="ul291533852718"></a><ul id="ul291533852718"><li><strong id="b18190442102111"><a name="b18190442102111"></a><a name="b18190442102111"></a>Normal</strong>: The database instance is available and the data is backed up. All the processes are running and the primary and standby relationship is normal.</li><li><strong id="b169011117162219"><a name="b169011117162219"></a><a name="b169011117162219"></a>Degraded</strong>: The database instance is available, but data is not backed up.</li><li><strong id="b20170253152216"><a name="b20170253152216"></a><a name="b20170253152216"></a>Unavailable</strong>: The database instance is unavailable.</li></ul>
</div>
</div></div>
</td>
</tr>
<tr id="row1939914596122"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p17400105901210"><a name="p17400105901210"></a><a name="p17400105901210"></a>--minorityAz</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="p1440025912126"><a name="p1440025912126"></a><a name="p1440025912126"></a>Queries the CMS in a specified AZ.</p>
<div class="note" id="note1384679188"><a name="note1384679188"></a><a name="note1384679188"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p7844715187"><a name="p7844715187"></a><a name="p7844715187"></a>This parameter ignores the CMS nodes in non-specified AZs and can improve the query speed in few scenarios.</p>
</div></div>
</td>
</tr>
<tr id="row20168820153413"><td class="cellrowborder" valign="top" width="19.43%" headers="mcps1.2.3.1.1 "><p id="p1316811209341"><a name="p1316811209341"></a><a name="p1316811209341"></a>-p</p>
</td>
<td class="cellrowborder" valign="top" width="80.57%" headers="mcps1.2.3.1.2 "><p id="p11386175715616"><a name="p11386175715616"></a><a name="p11386175715616"></a>Displays the ports of all database instance nodes.</p>
<div class="note" id="note938765713620"><a name="note938765713620"></a><a name="note938765713620"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p13871857266"><a name="p13871857266"></a><a name="p13871857266"></a>The <strong id="b939174822717"><a name="b939174822717"></a><a name="b939174822717"></a>-p</strong> parameter must be used together with the <strong id="b193919481271"><a name="b193919481271"></a><a name="b193919481271"></a>-v</strong> and <strong id="b12391548162716"><a name="b12391548162716"></a><a name="b12391548162716"></a>-C</strong> parameters.</p>
</div></div>
</td>
</tr>
</tbody>
</table>

**Table  8**  Parameters for set

<a name="en-us_topic_0116784021_tef5e0858a71c4d21abce8f80e3ba7723"></a>
<table><thead align="left"><tr id="en-us_topic_0116784021_rff0042d520c048e9a9920b990bd58afe"><th class="cellrowborder" valign="top" width="35.120000000000005%" id="mcps1.2.3.1.1"><p id="en-us_topic_0116784021_a8f0c292661264b72ba915297a9510a00"><a name="en-us_topic_0116784021_a8f0c292661264b72ba915297a9510a00"></a><a name="en-us_topic_0116784021_a8f0c292661264b72ba915297a9510a00"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="64.88000000000001%" id="mcps1.2.3.1.2"><p id="en-us_topic_0116784021_adfb37b0213a2402fb66d0033431adc08"><a name="en-us_topic_0116784021_adfb37b0213a2402fb66d0033431adc08"></a><a name="en-us_topic_0116784021_adfb37b0213a2402fb66d0033431adc08"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0116784021_r922b5d9f35404fb48604c9882f09b336"><td class="cellrowborder" valign="top" width="35.120000000000005%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0116784021_aa76794bdce4845c5ba86de984106438c"><a name="en-us_topic_0116784021_aa76794bdce4845c5ba86de984106438c"></a><a name="en-us_topic_0116784021_aa76794bdce4845c5ba86de984106438c"></a>--log_level=LOG_LEVEL</p>
</td>
<td class="cellrowborder" valign="top" width="64.88000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0116784021_ac533a5fc9d824ed2821ba1216c397d78"><a name="en-us_topic_0116784021_ac533a5fc9d824ed2821ba1216c397d78"></a><a name="en-us_topic_0116784021_ac533a5fc9d824ed2821ba1216c397d78"></a>Sets the log level of the primary cm_server. Six log levels are included: <strong id="b104341723193112"><a name="b104341723193112"></a><a name="b104341723193112"></a>DEBUG5</strong>, <strong id="b16434162311318"><a name="b16434162311318"></a><a name="b16434162311318"></a>DEBUG1</strong>, <strong id="b9434623143117"><a name="b9434623143117"></a><a name="b9434623143117"></a>WARNING</strong>, <strong id="b74357234312"><a name="b74357234312"></a><a name="b74357234312"></a>LOG</strong>, <strong id="b10435623173113"><a name="b10435623173113"></a><a name="b10435623173113"></a>ERROR</strong>, and <strong id="b8435523183117"><a name="b8435523183117"></a><a name="b8435523183117"></a>FATAL</strong>, in an ascending order in terms of log print level. The higher the log level, the less the log print information.</p>
</td>
</tr>
<tr id="row461575013278"><td class="cellrowborder" valign="top" width="35.120000000000005%" headers="mcps1.2.3.1.1 "><p id="p5616750122715"><a name="p5616750122715"></a><a name="p5616750122715"></a>--cm_arbitration_mode=ARBITRATION_MODE</p>
</td>
<td class="cellrowborder" valign="top" width="64.88000000000001%" headers="mcps1.2.3.1.2 "><p id="p26161150132714"><a name="p26161150132714"></a><a name="p26161150132714"></a>Sets the arbitration mode of cm_server when one primary and multiple standbys are deployed. There are two modes: <strong id="b76961746163320"><a name="b76961746163320"></a><a name="b76961746163320"></a>MAJORITY</strong> and <strong id="b11696154693314"><a name="b11696154693314"></a><a name="b11696154693314"></a>MINORITY</strong>. <strong id="b136962466336"><a name="b136962466336"></a><a name="b136962466336"></a>MAJORITY</strong> indicates the majority mode, and <strong id="b569612461335"><a name="b569612461335"></a><a name="b569612461335"></a>MINORITY</strong> indicates the minority mode. openGauss does not support the <strong id="b033243673415"><a name="b033243673415"></a><a name="b033243673415"></a>MINORITY</strong> mode. This parameter can be set to <strong id="b192481215103619"><a name="b192481215103619"></a><a name="b192481215103619"></a>MINORITY</strong> but it does not take effect.</p>
</td>
</tr>
<tr id="row1622416576276"><td class="cellrowborder" valign="top" width="35.120000000000005%" headers="mcps1.2.3.1.1 "><p id="p123344326288"><a name="p123344326288"></a><a name="p123344326288"></a>--cm_switchover_az_mode=</p>
<p id="p83351832122816"><a name="p83351832122816"></a><a name="p83351832122816"></a>SWITCHOVER_AZ_MODE</p>
</td>
<td class="cellrowborder" valign="top" width="64.88000000000001%" headers="mcps1.2.3.1.2 "><p id="p2226155722719"><a name="p2226155722719"></a><a name="p2226155722719"></a>Enables/Disables automatic switchover between AZs when one primary and multiple standbys are deployed. There are two modes: <strong id="b1583014103615"><a name="b1583014103615"></a><a name="b1583014103615"></a>NON_AUTO</strong> and <strong id="b0830241143615"><a name="b0830241143615"></a><a name="b0830241143615"></a>AUTO</strong>. <strong id="b7831204119369"><a name="b7831204119369"></a><a name="b7831204119369"></a>NON_AUTO</strong> indicates the non-automatic switchover mode, and <strong id="b1583174112361"><a name="b1583174112361"></a><a name="b1583174112361"></a>AUTO</strong> indicates the automatic switchover mode. In <strong id="b13331653193611"><a name="b13331653193611"></a><a name="b13331653193611"></a>AUTO</strong> mode, the primary cm_server automatically controls the node instance switchover between AZ1 and AZ2.</p>
</td>
</tr>
<tr id="row42457165812"><td class="cellrowborder" valign="top" width="35.120000000000005%" headers="mcps1.2.3.1.1 "><p id="p1424671620810"><a name="p1424671620810"></a><a name="p1424671620810"></a>--cmsPromoteMode=CMS_PROMOTE_MODE -I INSTANCEID</p>
</td>
<td class="cellrowborder" valign="top" width="64.88000000000001%" headers="mcps1.2.3.1.2 "><p id="p162467161987"><a name="p162467161987"></a><a name="p162467161987"></a>Sets the promotion mode to primary of cm_server. There are two modes: <strong id="b11985144117388"><a name="b11985144117388"></a><a name="b11985144117388"></a>AUTO</strong> and <strong id="b1342174553813"><a name="b1342174553813"></a><a name="b1342174553813"></a>PRIMARY_F</strong>. <strong id="b10305195115388"><a name="b10305195115388"></a><a name="b10305195115388"></a>AUTO</strong> indicates that the promotion mode to primary is automatically selected. <strong id="b1528620332404"><a name="b1528620332404"></a><a name="b1528620332404"></a>PRIMARY_F</strong> indicates that the node specified by <strong id="b598384918403"><a name="b598384918403"></a><a name="b598384918403"></a>-I</strong> is forcibly promoted to primary, regardless of whether there is a primary node. Therefore, multiple primary cm_server may exist.</p>
</td>
</tr>
</tbody>
</table>

**Table  9**  Parameters for set cm

<a name="table10437204416514"></a>
<table><thead align="left"><tr id="row1743716445512"><th class="cellrowborder" valign="top" width="24.75%" id="mcps1.2.3.1.1"><p id="p54386442055"><a name="p54386442055"></a><a name="p54386442055"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="75.25%" id="mcps1.2.3.1.2"><p id="p15438944158"><a name="p15438944158"></a><a name="p15438944158"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row10308104323615"><td class="cellrowborder" valign="top" width="24.75%" headers="mcps1.2.3.1.1 "><p id="p4784850203614"><a name="p4784850203614"></a><a name="p4784850203614"></a>--param</p>
</td>
<td class="cellrowborder" valign="top" width="75.25%" headers="mcps1.2.3.1.2 "><p id="p1378411501367"><a name="p1378411501367"></a><a name="p1378411501367"></a>Specifies the CM parameters to be set. If this parameter is not specified, the CM parameters cannot be set.</p>
</td>
</tr>
<tr id="row1243814448520"><td class="cellrowborder" valign="top" width="24.75%" headers="mcps1.2.3.1.1 "><p id="p64381244256"><a name="p64381244256"></a><a name="p64381244256"></a>--agent | --server</p>
</td>
<td class="cellrowborder" valign="top" width="75.25%" headers="mcps1.2.3.1.2 "><p id="p72351114768"><a name="p72351114768"></a><a name="p72351114768"></a>Specifies whether to set the cm_server or cm_agent parameters. This parameter is mandatory.</p>
</td>
</tr>
<tr id="row179561119550"><td class="cellrowborder" valign="top" width="24.75%" headers="mcps1.2.3.1.1 "><p id="p8956119552"><a name="p8956119552"></a><a name="p8956119552"></a>-k parameter="value"</p>
</td>
<td class="cellrowborder" valign="top" width="75.25%" headers="mcps1.2.3.1.2 "><p id="p195661914515"><a name="p195661914515"></a><a name="p195661914515"></a>Specifies the parameters and parameter values to be set. Only existing parameters can be set. Parameters cannot be added or deleted.</p>
</td>
</tr>
</tbody>
</table>

**Table  10**  Parameters for get

<a name="table1599151916313"></a>
<table><thead align="left"><tr id="row2991719183112"><th class="cellrowborder" valign="top" width="36.559999999999995%" id="mcps1.2.3.1.1"><p id="p11331611153415"><a name="p11331611153415"></a><a name="p11331611153415"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="63.44%" id="mcps1.2.3.1.2"><p id="p1587112152345"><a name="p1587112152345"></a><a name="p1587112152345"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1399151933116"><td class="cellrowborder" valign="top" width="36.559999999999995%" headers="mcps1.2.3.1.1 "><p id="p1642213231347"><a name="p1642213231347"></a><a name="p1642213231347"></a>--log_level=LOG_LEVEL</p>
</td>
<td class="cellrowborder" valign="top" width="63.44%" headers="mcps1.2.3.1.2 "><p id="p8277436173410"><a name="p8277436173410"></a><a name="p8277436173410"></a>Obtains the log level of the primary cm_server. Six log levels are included: <strong id="b14892134910319"><a name="b14892134910319"></a><a name="b14892134910319"></a>DEBUG5</strong>, <strong id="b17892124993117"><a name="b17892124993117"></a><a name="b17892124993117"></a>DEBUG1</strong>, <strong id="b1089244953118"><a name="b1089244953118"></a><a name="b1089244953118"></a>WARNING</strong>, <strong id="b1489220495315"><a name="b1489220495315"></a><a name="b1489220495315"></a>LOG</strong>, <strong id="b1589212491314"><a name="b1589212491314"></a><a name="b1589212491314"></a>ERROR</strong>, and <strong id="b1789274983110"><a name="b1789274983110"></a><a name="b1789274983110"></a>FATAL</strong>, in an ascending order in terms of log print level. The higher the log level, the less the log print information.</p>
</td>
</tr>
<tr id="row1699121903112"><td class="cellrowborder" valign="top" width="36.559999999999995%" headers="mcps1.2.3.1.1 "><p id="p2991919143114"><a name="p2991919143114"></a><a name="p2991919143114"></a>--cm_arbitration_mode=ARBITRATION_MODE</p>
</td>
<td class="cellrowborder" valign="top" width="63.44%" headers="mcps1.2.3.1.2 "><p id="p1699131919316"><a name="p1699131919316"></a><a name="p1699131919316"></a>Obtains the arbitration mode of cm_server when one primary and multiple standbys are deployed. There are two modes: <strong id="b7273175210339"><a name="b7273175210339"></a><a name="b7273175210339"></a>MAJORITY</strong> and <strong id="b727325253313"><a name="b727325253313"></a><a name="b727325253313"></a>MINORITY</strong>. <strong id="b92731521333"><a name="b92731521333"></a><a name="b92731521333"></a>MAJORITY</strong> indicates the majority mode, and <strong id="b13273155213335"><a name="b13273155213335"></a><a name="b13273155213335"></a>MINORITY</strong> indicates the minority mode. The <strong id="b81752214453"><a name="b81752214453"></a><a name="b81752214453"></a>MINORITY</strong> mode is applicable to the scenario where one primary database and multiple standby databases are deployed and only AZ3 is alive. In this case, cm_server can perform arbitration properly. In other modes, after the arbitration mode is set to <strong id="b134864517471"><a name="b134864517471"></a><a name="b134864517471"></a>MINORITY</strong>, the CM automatically changes the arbitration mode to <strong id="b1935061994719"><a name="b1935061994719"></a><a name="b1935061994719"></a>MAJORITY</strong> to ensure the normal running of the cluster. The <strong id="b1021923164713"><a name="b1021923164713"></a><a name="b1021923164713"></a>MAJORITY</strong> mode is applicable to the scenario where one primary database and multiple standby databases are deployed and the number of alive components (cm_server and nodes) is greater than half of the total. In normal cases, the database instance is in <strong id="b52295512505"><a name="b52295512505"></a><a name="b52295512505"></a>MAJORITY</strong> mode by default.</p>
<div class="caution" id="note9231439203710"><a name="note9231439203710"></a><a name="note9231439203710"></a><span class="cautiontitle"> CAUTION: </span><div class="cautionbody"><p id="p1122639103710"><a name="p1122639103710"></a><a name="p1122639103710"></a>openGauss does not support the <strong id="b1241181265118"><a name="b1241181265118"></a><a name="b1241181265118"></a>MINORITY</strong> mode.</p>
</div></div>
</td>
</tr>
<tr id="row17991519113117"><td class="cellrowborder" valign="top" width="36.559999999999995%" headers="mcps1.2.3.1.1 "><p id="p1237992903510"><a name="p1237992903510"></a><a name="p1237992903510"></a>--cm_switchover_az_mode</p>
<p id="p83401424173512"><a name="p83401424173512"></a><a name="p83401424173512"></a>=SWITCHOVER_AZ_MODE</p>
</td>
<td class="cellrowborder" valign="top" width="63.44%" headers="mcps1.2.3.1.2 "><p id="p655611817358"><a name="p655611817358"></a><a name="p655611817358"></a>Obtains the automatic switchover mode between AZs when one primary and multiple standbys are deployed. There are two modes: <strong id="b1714775293615"><a name="b1714775293615"></a><a name="b1714775293615"></a>NON_AUTO</strong> and <strong id="b214765213612"><a name="b214765213612"></a><a name="b214765213612"></a>AUTO</strong>. <strong id="b111471152163619"><a name="b111471152163619"></a><a name="b111471152163619"></a>NON_AUTO</strong> indicates the non-automatic switchover mode, and <strong id="b5147125211367"><a name="b5147125211367"></a><a name="b5147125211367"></a>AUTO</strong> indicates the automatic switchover mode. In <strong id="b18524181413379"><a name="b18524181413379"></a><a name="b18524181413379"></a>AUTO</strong> mode, the primary cm_server automatically controls the node instance switchover between AZ1 and AZ2.</p>
</td>
</tr>
</tbody>
</table>

**Table  11**  Parameters for view

<a name="en-us_topic_0116784021_table207722104617"></a>
<table><thead align="left"><tr id="en-us_topic_0116784021_row67721210367"><th class="cellrowborder" valign="top" width="29.470000000000002%" id="mcps1.2.3.1.1"><p id="en-us_topic_0116784021_p139843241269"><a name="en-us_topic_0116784021_p139843241269"></a><a name="en-us_topic_0116784021_p139843241269"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="70.53%" id="mcps1.2.3.1.2"><p id="en-us_topic_0116784021_p199867246618"><a name="en-us_topic_0116784021_p199867246618"></a><a name="en-us_topic_0116784021_p199867246618"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row730813337919"><td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.3.1.1 "><p id="p163098331196"><a name="p163098331196"></a><a name="p163098331196"></a>-v</p>
</td>
<td class="cellrowborder" valign="top" width="70.53%" headers="mcps1.2.3.1.2 "><p id="p11207208477"><a name="p11207208477"></a><a name="p11207208477"></a>Displays the static configuration details of all nodes in the database instance.</p>
<div class="note" id="note155818124710"><a name="note155818124710"></a><a name="note155818124710"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="p6581814476"><a name="p6581814476"></a><a name="p6581814476"></a>Compared with the <strong id="b52241520522"><a name="b52241520522"></a><a name="b52241520522"></a>cm_ctl view</strong> command, cm-server and node component IDs (for example, <strong id="b555982511107"><a name="b555982511107"></a><a name="b555982511107"></a>cmseverInstanceID</strong> and <strong id="b271583081014"><a name="b271583081014"></a><a name="b271583081014"></a>datanodeInstanceID</strong>) are added to the output of <strong id="b18331931145312"><a name="b18331931145312"></a><a name="b18331931145312"></a>-v</strong>.</p>
</div></div>
</td>
</tr>
<tr id="row3618144510122"><td class="cellrowborder" valign="top" width="29.470000000000002%" headers="mcps1.2.3.1.1 "><p id="p146181345121215"><a name="p146181345121215"></a><a name="p146181345121215"></a>-N</p>
</td>
<td class="cellrowborder" valign="top" width="70.53%" headers="mcps1.2.3.1.2 "><p id="p176180458126"><a name="p176180458126"></a><a name="p176180458126"></a>Displays only the static configuration of the local node, that is, information about the node where the <strong id="b127055465618"><a name="b127055465618"></a><a name="b127055465618"></a>cm_ctl view</strong> command is executed. <em id="i095914845611"><a name="i095914845611"></a><a name="i095914845611"></a>N</em> indicates "native".</p>
</td>
</tr>
</tbody>
</table>

**Table  12**  Parameters for setrunmode

<a name="table1656519521713"></a>
<table><thead align="left"><tr id="row656520511176"><th class="cellrowborder" valign="top" width="21.802180218021803%" id="mcps1.2.4.1.1"><p id="p155654511171"><a name="p155654511171"></a><a name="p155654511171"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="28.35283528352835%" id="mcps1.2.4.1.2"><p id="p65652516172"><a name="p65652516172"></a><a name="p65652516172"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="49.84498449844985%" id="mcps1.2.4.1.3"><p id="p868045681719"><a name="p868045681719"></a><a name="p868045681719"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row1456505131713"><td class="cellrowborder" valign="top" width="21.802180218021803%" headers="mcps1.2.4.1.1 "><p id="p205654561717"><a name="p205654561717"></a><a name="p205654561717"></a>--xmode</p>
</td>
<td class="cellrowborder" valign="top" width="28.35283528352835%" headers="mcps1.2.4.1.2 "><p id="p656595141715"><a name="p656595141715"></a><a name="p656595141715"></a>Specified the DCF running mode.</p>
</td>
<td class="cellrowborder" valign="top" width="49.84498449844985%" headers="mcps1.2.4.1.3 "><a name="ul114721049101719"></a><a name="ul114721049101719"></a><ul id="ul114721049101719"><li><strong id="b159521555579"><a name="b159521555579"></a><a name="b159521555579"></a>normal</strong>: normal mode.</li><li><strong id="b1730368125710"><a name="b1730368125710"></a><a name="b1730368125710"></a>minority</strong>: minority mode. In this mode, <strong id="b23031789573"><a name="b23031789573"></a><a name="b23031789573"></a>--votenum</strong> is used to specify the number of votes.</li></ul>
</td>
</tr>
<tr id="row956514518173"><td class="cellrowborder" valign="top" width="21.802180218021803%" headers="mcps1.2.4.1.1 "><p id="p1056520581715"><a name="p1056520581715"></a><a name="p1056520581715"></a>--votenum</p>
</td>
<td class="cellrowborder" valign="top" width="28.35283528352835%" headers="mcps1.2.4.1.2 "><p id="p165651857172"><a name="p165651857172"></a><a name="p165651857172"></a>Specifies the number of votes for a DCF minority run.</p>
</td>
<td class="cellrowborder" valign="top" width="49.84498449844985%" headers="mcps1.2.4.1.3 "><p id="p1256585101719"><a name="p1256585101719"></a><a name="p1256585101719"></a>The value is a positive integer and cannot be greater than the total number of DCF copies.</p>
</td>
</tr>
</tbody>
</table>

**Table  13**  Parameters for changerole

<a name="table326418392182"></a>
<table><thead align="left"><tr id="row5264133917189"><th class="cellrowborder" valign="top" width="21.67%" id="mcps1.2.4.1.1"><p id="p122641139121814"><a name="p122641139121814"></a><a name="p122641139121814"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="28.439999999999998%" id="mcps1.2.4.1.2"><p id="p3264739191818"><a name="p3264739191818"></a><a name="p3264739191818"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="49.89%" id="mcps1.2.4.1.3"><p id="p56175205198"><a name="p56175205198"></a><a name="p56175205198"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row18264133919182"><td class="cellrowborder" valign="top" width="21.67%" headers="mcps1.2.4.1.1 "><p id="p1726433910185"><a name="p1726433910185"></a><a name="p1726433910185"></a>--role</p>
</td>
<td class="cellrowborder" valign="top" width="28.439999999999998%" headers="mcps1.2.4.1.2 "><p id="p18264143931814"><a name="p18264143931814"></a><a name="p18264143931814"></a>Changes the primary role to <strong id="b21013085617"><a name="b21013085617"></a><a name="b21013085617"></a>passive</strong> or <strong id="b1410115095614"><a name="b1410115095614"></a><a name="b1410115095614"></a>follower</strong> in the DCF mode.</p>
</td>
<td class="cellrowborder" valign="top" width="49.89%" headers="mcps1.2.4.1.3 "><a name="ul9521516141916"></a><a name="ul9521516141916"></a><ul id="ul9521516141916"><li><strong id="b15714651105714"><a name="b15714651105714"></a><a name="b15714651105714"></a>passive</strong>: passive role</li><li><strong id="b183281154125718"><a name="b183281154125718"></a><a name="b183281154125718"></a>follower</strong>: follower role</li></ul>
</td>
</tr>
</tbody>
</table>

**Table  14**  Parameters for changemember

<a name="table27311655104911"></a>
<table><thead align="left"><tr id="row073285510494"><th class="cellrowborder" valign="top" width="22.11%" id="mcps1.2.4.1.1"><p id="p14732455194911"><a name="p14732455194911"></a><a name="p14732455194911"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="36.93%" id="mcps1.2.4.1.2"><p id="p18732155514495"><a name="p18732155514495"></a><a name="p18732155514495"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="40.96%" id="mcps1.2.4.1.3"><p id="p1273285517492"><a name="p1273285517492"></a><a name="p1273285517492"></a>Value Range</p>
</th>
</tr>
</thead>
<tbody><tr id="row17732055144916"><td class="cellrowborder" valign="top" width="22.11%" headers="mcps1.2.4.1.1 "><p id="p14732205513497"><a name="p14732205513497"></a><a name="p14732205513497"></a>--role</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.2 "><p id="p11732195564918"><a name="p11732195564918"></a><a name="p11732195564918"></a>Changes the primary role to <strong id="b71031002562"><a name="b71031002562"></a><a name="b71031002562"></a>passive</strong> or <strong id="b110340115620"><a name="b110340115620"></a><a name="b110340115620"></a>follower</strong> in the DCF mode.</p>
</td>
<td class="cellrowborder" valign="top" width="40.96%" headers="mcps1.2.4.1.3 "><a name="ul27324551495"></a><a name="ul27324551495"></a><ul id="ul27324551495"><li><strong id="b1150365335716"><a name="b1150365335716"></a><a name="b1150365335716"></a>passive</strong>: passive role</li><li><strong id="b078225505713"><a name="b078225505713"></a><a name="b078225505713"></a>follower</strong>: follower role</li></ul>
</td>
</tr>
<tr id="row85359260508"><td class="cellrowborder" valign="top" width="22.11%" headers="mcps1.2.4.1.1 "><p id="p653602616508"><a name="p653602616508"></a><a name="p653602616508"></a>--group</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.2 "><p id="p115363266505"><a name="p115363266505"></a><a name="p115363266505"></a>Changes the value of <strong id="b144914519246"><a name="b144914519246"></a><a name="b144914519246"></a>group</strong> in DCF mode.</p>
</td>
<td class="cellrowborder" valign="top" width="40.96%" headers="mcps1.2.4.1.3 "><p id="p135362266507"><a name="p135362266507"></a><a name="p135362266507"></a>0–2147483647</p>
</td>
</tr>
<tr id="row199431655317"><td class="cellrowborder" valign="top" width="22.11%" headers="mcps1.2.4.1.1 "><p id="p2094316135319"><a name="p2094316135319"></a><a name="p2094316135319"></a>--priority</p>
</td>
<td class="cellrowborder" valign="top" width="36.93%" headers="mcps1.2.4.1.2 "><p id="p8941116195318"><a name="p8941116195318"></a><a name="p8941116195318"></a>Changes the value of <strong id="b344341112257"><a name="b344341112257"></a><a name="b344341112257"></a>priority</strong> in DCF mode.</p>
</td>
<td class="cellrowborder" valign="top" width="40.96%" headers="mcps1.2.4.1.3 "><p id="p9806144365316"><a name="p9806144365316"></a><a name="p9806144365316"></a>0–2147483647</p>
</td>
</tr>
</tbody>
</table>

**Table  15**  Parameters for start

<a name="table45722029132319"></a>
<table><thead align="left"><tr id="row157214292236"><th class="cellrowborder" valign="top" width="44.67%" id="mcps1.2.3.1.1"><p id="p657332992311"><a name="p657332992311"></a><a name="p657332992311"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="55.33%" id="mcps1.2.3.1.2"><p id="p175731429182314"><a name="p175731429182314"></a><a name="p175731429182314"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row4904151813359"><td class="cellrowborder" valign="top" width="44.67%" headers="mcps1.2.3.1.1 "><p id="p190431873518"><a name="p190431873518"></a><a name="p190431873518"></a>--cm_arbitration_mode=ARBITRATION_MODE</p>
</td>
<td class="cellrowborder" valign="top" width="55.33%" headers="mcps1.2.3.1.2 "><p id="p2639256183818"><a name="p2639256183818"></a><a name="p2639256183818"></a>Obtains the arbitration mode of cm_server when one primary and multiple standbys are deployed. There are two modes: <strong id="b1027985223314"><a name="b1027985223314"></a><a name="b1027985223314"></a>MAJORITY</strong> and <strong id="b0279135213315"><a name="b0279135213315"></a><a name="b0279135213315"></a>MINORITY</strong>. <strong id="b16279115211339"><a name="b16279115211339"></a><a name="b16279115211339"></a>MAJORITY</strong> indicates the majority mode, and <strong id="b1127975293318"><a name="b1127975293318"></a><a name="b1127975293318"></a>MINORITY</strong> indicates the minority mode. The <strong id="b1140910914011"><a name="b1140910914011"></a><a name="b1140910914011"></a>MINORITY</strong> mode is applicable to the scenario where one primary database and multiple standby databases are deployed and only AZ3 is alive. In this case, cm_server can perform arbitration properly. In other modes, after the arbitration mode is set to <strong id="b1409179508"><a name="b1409179508"></a><a name="b1409179508"></a>MINORITY</strong>, the CM automatically changes the arbitration mode to <strong id="b1241059701"><a name="b1241059701"></a><a name="b1241059701"></a>MAJORITY</strong> to ensure the normal running of the cluster. The <strong id="b164101597017"><a name="b164101597017"></a><a name="b164101597017"></a>MAJORITY</strong> mode is applicable to the scenario where one primary database and multiple standby databases are deployed and the number of alive components (cm_server and nodes) is greater than half of the total. In normal cases, the database instance is in <strong id="b9618115755019"><a name="b9618115755019"></a><a name="b9618115755019"></a>MAJORITY</strong> mode by default.</p>
<div class="caution" id="note1463910569387"><a name="note1463910569387"></a><a name="note1463910569387"></a><span class="cautiontitle"> CAUTION: </span><div class="cautionbody"><p id="p56391756113812"><a name="p56391756113812"></a><a name="p56391756113812"></a>openGauss does not support the <strong id="b136191313105114"><a name="b136191313105114"></a><a name="b136191313105114"></a>MINORITY</strong> mode.</p>
</div></div>
</td>
</tr>
</tbody>
</table>

**Table  16**  Parameters for reload

<a name="table11377594818"></a>
<table><thead align="left"><tr id="row191374598810"><th class="cellrowborder" valign="top" width="19.07%" id="mcps1.2.3.1.1"><p id="p81371759884"><a name="p81371759884"></a><a name="p81371759884"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="80.93%" id="mcps1.2.3.1.2"><p id="p51371359185"><a name="p51371359185"></a><a name="p51371359185"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1613551115370"><td class="cellrowborder" valign="top" width="19.07%" headers="mcps1.2.3.1.1 "><p id="p125141917163710"><a name="p125141917163710"></a><a name="p125141917163710"></a>--param</p>
</td>
<td class="cellrowborder" valign="top" width="80.93%" headers="mcps1.2.3.1.2 "><p id="p1751513175372"><a name="p1751513175372"></a><a name="p1751513175372"></a>Specifies the CM parameters to be loaded. If this parameter is not specified, the CM parameters cannot be loaded.</p>
</td>
</tr>
<tr id="row11375597819"><td class="cellrowborder" valign="top" width="19.07%" headers="mcps1.2.3.1.1 "><p id="p7137959988"><a name="p7137959988"></a><a name="p7137959988"></a>--agent | --server</p>
</td>
<td class="cellrowborder" valign="top" width="80.93%" headers="mcps1.2.3.1.2 "><p id="p81379594820"><a name="p81379594820"></a><a name="p81379594820"></a>Specifies whether to dynamically load cm_server or cm_agent parameters.</p>
</td>
</tr>
</tbody>
</table>

**Table  17**  Parameters for list

<a name="table0914920191018"></a>
<table><thead align="left"><tr id="row16914192061011"><th class="cellrowborder" valign="top" width="18.96%" id="mcps1.2.3.1.1"><p id="p1491413208107"><a name="p1491413208107"></a><a name="p1491413208107"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="81.04%" id="mcps1.2.3.1.2"><p id="p991415208109"><a name="p991415208109"></a><a name="p991415208109"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row10516627123718"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.3.1.1 "><p id="p108223363717"><a name="p108223363717"></a><a name="p108223363717"></a>--param</p>
</td>
<td class="cellrowborder" valign="top" width="81.04%" headers="mcps1.2.3.1.2 "><p id="p082163319379"><a name="p082163319379"></a><a name="p082163319379"></a>Specifies the CM parameters to be listed. This parameter is mandatory.</p>
</td>
</tr>
<tr id="row12914172051015"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.3.1.1 "><p id="p1491442071016"><a name="p1491442071016"></a><a name="p1491442071016"></a>--agent | --server</p>
</td>
<td class="cellrowborder" valign="top" width="81.04%" headers="mcps1.2.3.1.2 "><p id="p1915320111019"><a name="p1915320111019"></a><a name="p1915320111019"></a>Specifies the cm_server or cm_agent parameters to be listed. This parameter is mandatory.</p>
</td>
</tr>
</tbody>
</table>

**Table  18**  Parameters for encrypt

<a name="table4739105911382"></a>
<table><thead align="left"><tr id="row273916595382"><th class="cellrowborder" valign="top" width="17.61%" id="mcps1.2.3.1.1"><p id="p1740145913817"><a name="p1740145913817"></a><a name="p1740145913817"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="82.39%" id="mcps1.2.3.1.2"><p id="p87401459183813"><a name="p87401459183813"></a><a name="p87401459183813"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row77407599381"><td class="cellrowborder" valign="top" width="17.61%" headers="mcps1.2.3.1.1 "><p id="p16740165913389"><a name="p16740165913389"></a><a name="p16740165913389"></a>-M</p>
</td>
<td class="cellrowborder" valign="top" width="82.39%" headers="mcps1.2.3.1.2 "><p id="p127407599381"><a name="p127407599381"></a><a name="p127407599381"></a>Specifies the encryption type. The value can be <strong id="b089456968"><a name="b089456968"></a><a name="b089456968"></a>server</strong> or <strong id="b1889175611616"><a name="b1889175611616"></a><a name="b1889175611616"></a>client</strong>. The default value is <strong id="b17444192613710"><a name="b17444192613710"></a><a name="b17444192613710"></a>server</strong>.</p>
</td>
</tr>
<tr id="row10308151616412"><td class="cellrowborder" valign="top" width="17.61%" headers="mcps1.2.3.1.1 "><p id="p203087164417"><a name="p203087164417"></a><a name="p203087164417"></a>-D</p>
</td>
<td class="cellrowborder" valign="top" width="82.39%" headers="mcps1.2.3.1.2 "><p id="p1330871613411"><a name="p1330871613411"></a><a name="p1330871613411"></a>Specifies the path of the encrypted password file.</p>
</td>
</tr>
</tbody>
</table>

**Table  19**  Parameters for switch

<a name="table7591811163812"></a>
<table><thead align="left"><tr id="row116011120380"><th class="cellrowborder" valign="top" width="26.479999999999997%" id="mcps1.2.3.1.1"><p id="p960141133813"><a name="p960141133813"></a><a name="p960141133813"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="73.52%" id="mcps1.2.3.1.2"><p id="p156018113381"><a name="p156018113381"></a><a name="p156018113381"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row760411173813"><td class="cellrowborder" valign="top" width="26.479999999999997%" headers="mcps1.2.3.1.1 "><p id="p1860411173815"><a name="p1860411173815"></a><a name="p1860411173815"></a>--ddb_type=[DDB]</p>
</td>
<td class="cellrowborder" valign="top" width="73.52%" headers="mcps1.2.3.1.2 "><p id="p56091153816"><a name="p56091153816"></a><a name="p56091153816"></a>Select the DDB mode to be switched to. (openGauss supports only the DCC mode.)</p>
</td>
</tr>
<tr id="row0601511113819"><td class="cellrowborder" valign="top" width="26.479999999999997%" headers="mcps1.2.3.1.1 "><p id="p10601311203814"><a name="p10601311203814"></a><a name="p10601311203814"></a>--commit</p>
</td>
<td class="cellrowborder" valign="top" width="73.52%" headers="mcps1.2.3.1.2 "><p id="p12601811123819"><a name="p12601811123819"></a><a name="p12601811123819"></a>After the switchover, the database instance cannot be promoted to primary. You need to run the <strong id="b10634115283710"><a name="b10634115283710"></a><a name="b10634115283710"></a>commit</strong> command to restore the database instance.</p>
</td>
</tr>
<tr id="row185952324012"><td class="cellrowborder" valign="top" width="26.479999999999997%" headers="mcps1.2.3.1.1 "><p id="p115922315400"><a name="p115922315400"></a><a name="p115922315400"></a>--rollback</p>
</td>
<td class="cellrowborder" valign="top" width="73.52%" headers="mcps1.2.3.1.2 "><p id="p195912239404"><a name="p195912239404"></a><a name="p195912239404"></a>Rolls back the switchover that fails.</p>
</td>
</tr>
</tbody>
</table>

**Table  20**  Parameters for ddb

<a name="table9665145942617"></a>
<table><thead align="left"><tr id="row466525912618"><th class="cellrowborder" valign="top" width="24.26%" id="mcps1.2.3.1.1"><p id="p146651459142614"><a name="p146651459142614"></a><a name="p146651459142614"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="75.74%" id="mcps1.2.3.1.2"><p id="p4665185972619"><a name="p4665185972619"></a><a name="p4665185972619"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row116651859182617"><td class="cellrowborder" valign="top" width="24.26%" headers="mcps1.2.3.1.1 "><p id="p1966525920261"><a name="p1966525920261"></a><a name="p1966525920261"></a>--put [key] [value]</p>
</td>
<td class="cellrowborder" valign="top" width="75.74%" headers="mcps1.2.3.1.2 "><p id="p1366575916264"><a name="p1366575916264"></a><a name="p1366575916264"></a>Inserts a key-value pair to DCC. If the key-value pair already exists, the value corresponding to the key is changed.</p>
</td>
</tr>
<tr id="row566545911263"><td class="cellrowborder" valign="top" width="24.26%" headers="mcps1.2.3.1.1 "><p id="p18665185932611"><a name="p18665185932611"></a><a name="p18665185932611"></a>--get [key]</p>
</td>
<td class="cellrowborder" valign="top" width="75.74%" headers="mcps1.2.3.1.2 "><p id="p9665175915268"><a name="p9665175915268"></a><a name="p9665175915268"></a>Queries the value corresponding to the key in DCC.</p>
</td>
</tr>
<tr id="row15196652912"><td class="cellrowborder" valign="top" width="24.26%" headers="mcps1.2.3.1.1 "><p id="p619156132916"><a name="p619156132916"></a><a name="p619156132916"></a>--delete [key]</p>
</td>
<td class="cellrowborder" valign="top" width="75.74%" headers="mcps1.2.3.1.2 "><p id="p719168299"><a name="p719168299"></a><a name="p719168299"></a>Deletes a specified key-value pair from DCC.</p>
</td>
</tr>
<tr id="row8171152343111"><td class="cellrowborder" valign="top" width="24.26%" headers="mcps1.2.3.1.1 "><p id="p21711123123119"><a name="p21711123123119"></a><a name="p21711123123119"></a>--prefix</p>
</td>
<td class="cellrowborder" valign="top" width="75.74%" headers="mcps1.2.3.1.2 "><p id="p1117111239317"><a name="p1117111239317"></a><a name="p1117111239317"></a>You can add the <strong id="b1583273374"><a name="b1583273374"></a><a name="b1583273374"></a>prefix</strong> parameter after the get or delete operation to implement fuzzy query and deletion.</p>
</td>
</tr>
<tr id="row5306142533517"><td class="cellrowborder" valign="top" width="24.26%" headers="mcps1.2.3.1.1 "><p id="p030642553510"><a name="p030642553510"></a><a name="p030642553510"></a>--cluster_info</p>
</td>
<td class="cellrowborder" valign="top" width="75.74%" headers="mcps1.2.3.1.2 "><p id="p49771547103512"><a name="p49771547103512"></a><a name="p49771547103512"></a>Obtains the database instance information.</p>
</td>
</tr>
<tr id="row273185853512"><td class="cellrowborder" valign="top" width="24.26%" headers="mcps1.2.3.1.1 "><p id="p1174165853518"><a name="p1174165853518"></a><a name="p1174165853518"></a>--leader_info</p>
</td>
<td class="cellrowborder" valign="top" width="75.74%" headers="mcps1.2.3.1.2 "><p id="p17741258153514"><a name="p17741258153514"></a><a name="p17741258153514"></a>Obtains information about the primary node.</p>
</td>
</tr>
<tr id="row1650133010324"><td class="cellrowborder" valign="top" width="24.26%" headers="mcps1.2.3.1.1 "><p id="p20511305328"><a name="p20511305328"></a><a name="p20511305328"></a>--help, -h</p>
</td>
<td class="cellrowborder" valign="top" width="75.74%" headers="mcps1.2.3.1.2 "><p id="p1051730113216"><a name="p1051730113216"></a><a name="p1051730113216"></a>Displays the DCC command help information.</p>
</td>
</tr>
<tr id="row560803311322"><td class="cellrowborder" valign="top" width="24.26%" headers="mcps1.2.3.1.1 "><p id="p106087332320"><a name="p106087332320"></a><a name="p106087332320"></a>--version, -v</p>
</td>
<td class="cellrowborder" valign="top" width="75.74%" headers="mcps1.2.3.1.2 "><p id="p5608113383215"><a name="p5608113383215"></a><a name="p5608113383215"></a>Displays DCC version information.</p>
</td>
</tr>
</tbody>
</table>

### Command Reference<a name="section129433814222"></a>

-   Start an instance.

    ```
    cm_ctl start [-z AVAILABILITY_ZONE [--cm_arbitration_mode=ARBITRATION_MODE]] | [-n NODEID [-D DATADIR]] [-t SECS]
    ```

-   Perform a switchover between primary and standby databases.

    ```
    cm_ctl switchover [-z AVAILABILITY_ZONE] | [-n NODEID -D DATADIR [-f]] | [-a] | [-A] [-t SECS]
    ```

-   Stop the playback on all standby nodes, and forcibly promote one of the shards to primary.

    ```
    cm_ctl finishredo
    ```

-   Rebuild the standby node.

    ```
    cm_ctl build -n NODEID -D DATADIR [-t SECS] [-f] [-b full]
    ```

-   Check the running status of an instance process.

    ```
    cm_ctl check -B BINNAME -T DATAPATH
    ```

-   Stop an instance.

    ```
    cm_ctl stop [[-z AVAILABILITY_ZONE] | [-n NODEID [-D DATADIR [-R]]]] [-t SECS] [-m SHUTDOWN-MODE]
    ```

-   Query the cluster status.

    ```
    cm_ctl query [-z ALL] [-l FILENAME] [-v [-C [-s] [-S] [-d] [-i] [-F] [-x] [-p]] | [-r]] [-t SECS] [--minorityAz=AZ_NAME]
    ```

-   View the cluster configuration file.

    ```
    cm_ctl view [-v | -N | -n NODEID] [-l FILENAME]
    ```

-   Set parameters.

    ```
    cm_ctl set [--log_level=LOG_LEVEL] [--cm_arbitration_mode=ARBITRATION_MODE] [--cm_switchover_az_mode=SWITCHOVER_AZ_MODE]
    ```

-   Set CM parameters.

    ```
    cm_ctl set --param --agent | --server [-n NODEID] -k "PARAMETER='value'"
    ```

-   Obtain parameters.

    ```
    cm_ctl get [--log_level] [--cm_arbitration_mode] [--cm_switchover_az_mode]
    ```

-   Set the number of DCF votes.

    ```
    cm_ctl setrunmode -n NODEID -D DATADIR  [[--xmode=normal] | [--xmode=minority --votenum=NUM]]
    ```

-   Change the DCF role information.

    ```
    cm_ctl changerole [--role=PASSIVE | --role=FOLLOWER] -n NODEID -D DATADIR [-t SECS]
    ```

-   Change the attributes of the DCF node.

    ```
    cm_ctl changemember [--role=PASSIVE | --role=FOLLOWER] [--group=xx] [--priority=xx] -n NODEID -D DATADIR [-t SECS]
    ```

-   Dynamically load CM parameters.

    ```
    cm_ctl reload --param [--agent | --server]
    ```

-   List all CM parameters.

    ```
    cm_ctl list --param [--agent | --server]
    ```

-   Perform encryption.

    ```
    cm_ctl encrypt [-M MODE] -D DATADIR
    ```

-   Run the DCC command.

    ```
    cm_ctl ddb DCC_CMD
    Set: cm_ctl ddb --put [key] [value]
    Delete: cm_ctl ddb --delete [key]
    View DCC command help information: cm_ctl ddb --help
    ```

-   Run the  **switch ddb**  command.

    ```
    cm_ctl switch [--ddb_type=[DDB]] [--commit] [--rollback]
    ```

## Security Design<a name="EN-US_TOPIC_0000001201487108"></a>

### Procedure for Manually Replacing Certificates<a name="section103992017202219"></a>

-   Create a self-signed certificate.

    For details about how to create a self-signed certificate, see "Database Security Management \> Client Access Authentication \> Managing SSL Certificates \> Generating Certificates in  *Developer Guide*

    To protect the private key password, use the  **cm encrypt**  tool. For details, see  [Introduction to the cm\_ctl Tool](introduction-to-the-cm_ctl-tool.md).

    ```
    cm_ctl encrypt [-M MODE] -D DATADIR
    ```

    1.  Generate the server key factors  **server.key.cipher**  and  **server.key.rand**.

        ```
        cm_ctl encrypt -M server -D DATADIR
        please enter the password: (The password must be the same as the protection password of the server private key.)
        ```

    2.  Generate the client key factors  **client.key.cipher**  and  **client.key.rand**.

        ```
        cm_ctl encrypt -M client -D DATADIR
        please enter the password: (The password must be the same as the protection password of the client private key.)
        ```



### Certificate Usage Guide<a name="section10534952182617"></a>

1.  To use the certificate, you need to set the cm\_server parameter to  **on**  \(The default value is  **off**\).

    ```
    cm_ctl set --param --server -k enable_ssl="on"
    ```


1.  The certificate file must exist in  *$GAUSSHOME***/share/sslcert/cm**  on all nodes. After the certificate is replaced, restart the cluster for the certificate to take effect.

    Required certificate files include  **server.crt**,  **server.key**,  **client.crt**,  **client.key**,  **cacert.pem**,  **server.key.cipher**,  **server.key.rand**,  **client.key.cipher**, and  **client.key.rand**.

    The permission on the root certificate, key, certificate, and encrypted key file should be 400. If the permission does not meet the requirements, SSL cannot be used.

    -   chmod 400 cacert.pem
    -   chmod 400 server.crt
    -   chmod 400 server.key
    -   chmod 400 server.key.cipher
    -   chmod 400 server.key.rand
    -   chmod 400 client.crt
    -   chmod 400 client.key
    -   chmod 400 client.key.cipher
    -   chmod 400 client.key.rand

3. The certificate validity period is checked every day, which can be set through  **ssl\_cert\_expire\_check\_interval**. An alarm is generated when the certificate is about to expire in 90 days, which can be set through  **ssl\_cert\_expire\_alert\_threshold**. \(For details about the parameter, see  [ssl\_cert\_expire\_alert\_threshold](parameters-related-to-cm_server.md#section8148443183416).\)

## CM Parameters<a name="EN-US_TOPIC_0000001201167154"></a>

You can view cm\_agent parameters in the  **cm\_agent.conf**  file in the cm\_agent data directory and cm\_server parameters in the  **cm\_server.conf**  file in the cm\_server data directory.

### Parameters Related to cm\_agent<a name="EN-US_TOPIC_0000001246246987"></a>

#### log\_dir<a name="section030711438392"></a>

**Parameter description**: Specifies the directory where cm\_agent logs are stored. It can be specified as an absolute path, or a path relative to  *$GAUSSLOG*. When you set an absolute path using  **cm\_ctl**, the path must be included in quotation marks \(""\), for example,  **cm\_ctl set --param --agent -k log\_dir="'/log/dir'"**.

**Value range**: a string with up to 1024 characters. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **log**, indicating that the cm\_agent logs are generated in the CM directory in  *$GAUSSLOG*.

#### log\_file\_size<a name="section130710434392"></a>

**Parameter description**: Specifies the size of a log file. If the size of the  **cm\_agent-xx-current.log**  file exceeds the specified size, a new log file is created to record log information.

**Value range**: an integer, in the range \[0,2047\]. The actual value range is \[1,2047\]. The unit is MB. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value:** **16 MB**

#### log\_min\_messages<a name="section19307194343914"></a>

**Parameter description**: Specifies which message levels are written to the cm\_agent log. A higher level covers the messages of all the lower levels. The lower the level is, the fewer messages will be written into the log.

**Value range**: enumerated type. Valid values are  **debug5**,  **debug1**,  **warning**,  **error**,  **log**, and  **fatal**  \(case-insensitive\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **warning**

#### incremental\_build<a name="section330784317397"></a>

**Parameter description**: Specifies whether a standby node is incrementally built. If this parameter is enabled, a standby node is incrementally rebuilt. Otherwise, a standby node is fully rebuilt.

**Value range**: Boolean. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **on**,  **yes**,  **true**, or  **1**: A standby node is incrementally rebuilt.

-   **off**,  **no**,  **false**, or  **0**: A standby node is fully rebuilt.

**Default value**:  **on**

#### security\_mode<a name="section318914113417"></a>

**Parameter description**: Specifies whether nodes are started in secure mode. If this parameter is enabled, nodes are started in secure mode. Otherwise, nodes are started in non-secure mode.

**Value range**: Boolean. The modification of this parameter takes effect dynamically. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **on**,  **yes**,  **true**, or  **1**: Nodes are started in secure mode.

-   **off**,  **no**,  **false**, or  **0**: Nodes are started in non-secure mode.

**Default value**:  **off**

#### upgrade\_from<a name="section616511291250"></a>

**Parameter description**: Specifies the internal version number of the database before an in-place upgrade. Do not modify the value of this parameter.

**Value range**: a non-negative integer, in the range \[0,4294967295\]. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **0**

#### alarm\_component<a name="section19308174317397"></a>

**Parameter description**: Specifies the position of the alarm component that handles alarms if the first mode is used. When you set an absolute path using  **cm\_ctl**, the path must be included in quotation marks \(""\), for example,  **cm\_ctl set --param --agent -k alarm\_component="'/alarm/dir'"**.

**Value range**: a string with up to 1024 characters. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **/opt/huawei/snas/bin/snas\_cm\_cmd**

#### alarm\_report\_interval<a name="section17308104393914"></a>

**Parameter description**: Specifies the interval at which an alarm is reported.

**Value range**: a non-negative integer, in the range \[0,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

#### agent\_heartbeat\_timeout<a name="section1222151611711"></a>

**Parameter description**: Specifies the time to wait before the cm\_server heartbeat times out.

**Value range**: an integer, in the range \[2,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **5**

#### agent\_connect\_timeout<a name="section13943381675"></a>

**Parameter description**: Specifies the time to wait before the attempt of cm\_agent to connect to cm\_server times out.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

#### agent\_connect\_retries<a name="section184312403713"></a>

**Parameter description**: Specifies the number of times cm\_agent tries to connect to cm\_server.

**Value range**: an integer, in the range \[0,2147483647\]. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **15**

#### agent\_kill\_instance\_timeout<a name="section10806122512811"></a>

**Parameter description**: Specifies the interval from the time when cm\_agent fails to connect to the primary cm\_server to the time when cm\_agent kills all instances on the node.

**Value range**: an integer, in the range \[0,2147483647\]. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **0**, indicating that the operation of killing all instances on the node is not initiated.

#### agent\_report\_interval<a name="section1740211461789"></a>

**Parameter description**: Specifies the interval at which cm\_agent reports the instance status.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

#### alarm\_report\_max\_count<a name="section490373917911"></a>

**Parameter description**: Specifies the maximum number of times an alarm is reported.

**Value range**: a non-negative integer, in the range \[1,2592000\]. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

#### agent\_check\_interval<a name="section296010163916"></a>

**Parameter description**: Specifies the interval at which cm\_agent queries the status of instances.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value:** **2**

#### enable\_log\_compress<a name="section18961713161017"></a>

**Parameter description**: Specifies whether to enable log compression.

**Value range**: Boolean. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **on**,  **yes**,  **true**, or  **1**: Log compression is allowed.
-   **off**,  **no**,  **false**, or  **0**:Log compression is not allowed.

**Default value**:  **on**

#### process\_cpu\_affinity<a name="section1740823111111"></a>

**Parameter description**: Specifies whether to bind a primary node process to a CPU core before starting the process. If this parameter is set to  **0**, core binding is not performed. If it is set to another value, core binding is performed, and the number of physical CPU cores is 2<sup>n</sup>. Restart the database and cm\_agent for any modification of this parameter to take effect. Only ARM is supported. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Value range**: an integer, in the range \[0,2\].

**Default value**:  **0**

#### enable\_xc\_maintenance\_mode<a name="section154040531117"></a>

**Parameter description**: Specifies whether the  **pgxc\_node**  system catalog can be modified when the database is in read-only mode.

**Value range**: Boolean. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **on**,  **yes**,  **true**, or  **1**: The function of modifying the  **pgxc\_node**  system catalog is enabled.

-   **off**,  **no**,  **false**, or  **0**: The function of modifying the  **pgxc\_node**  system catalog is disabled.

**Default value**:  **on**

#### log\_threshold\_check\_interval<a name="section1372141912128"></a>

**Parameter description**: Specifies the interval for compressing and clearing CM logs. The logs are compressed and cleared every 1800 seconds.

**Application scope**:  *$GAUSSLOG***/cm/cm\_ctl**,  *$GAUSSLOG***/cm/cm\_server**, files in the  *$GAUSSLOG***/cm/om\_monitor**  directory and log files prefixed with  **cm\_agent-**,  **system\_call-**, and  **system\_alarm-**  in the  *$GAUSSLOG***/cm/cm\_agent**  directory

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1800**

#### log\_max\_size<a name="section1940221415131"></a>

**Parameter description**: Specifies the maximum size of CM logs. When the total size of CM logs exceeds \(value of  **log\_max\_size**  x 95/100\) MB, historical compressed logs are deleted in sequence based on the log generation time until the total size is less than \(value of  **log\_max\_size**  x 95/100\) MB.

**Application scope**:  *$GAUSSLOG***/cm/cm\_ctl**,  *$GAUSSLOG***/cm/cm\_server**, files in the  *$GAUSSLOG***/cm/om\_monitor**  directory and log files prefixed with  **cm\_agent-**,  **system\_call-**, and  **system\_alarm-**  in the  *$GAUSSLOG***/cm/cm\_agent**  directory

**Value range**: an integer, in the range \[0,2147483647\] \(unit: MB\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **10240**

#### log\_max\_count<a name="section114033146138"></a>

**Parameter description**: Specifies the maximum number of CM log files that can be stored. When the total number of CM log files exceeds the value of this parameter, compressed logs that have been stored for days longer than those specified by  **log\_saved\_days**  are deleted based on the name of the compressed log file.

**Application scope**:  *$GAUSSLOG***/cm/cm\_ctl**,  *$GAUSSLOG***/cm/cm\_server**, files in the  *$GAUSSLOG***/cm/om\_monitor**  directory and log files prefixed with  **cm\_agent-**,  **system\_call-**, and  **system\_alarm-**  in the  *$GAUSSLOG***/cm/cm\_agent**  directory

**Value range**: an integer, in the range \[0,10000\]. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **10000**

#### log\_saved\_days<a name="section25051814181410"></a>

**Parameter description**: Specifies the number of days for storing compressed CM log files. If the number of compressed CM log files exceeds the value of this parameter and the total number of CM log files exceeds the value of  **log\_max\_count**, the compressed log files are deleted.

**Application scope**:  *$GAUSSLOG***/cm/cm\_ctl**,  *$GAUSSLOG***/cm/cm\_server**, files in the  *$GAUSSLOG***/cm/om\_monitor**  directory and log files prefixed with  **cm\_agent-**,  **system\_call-**, and  **system\_alarm-**  in the  *$GAUSSLOG***/cm/cm\_agent**  directory

**Value range**: an integer, in the range \[0,1000\]. \(unit: day\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **90**

#### agent\_phony\_dead\_check\_interval<a name="section13310143113916"></a>

**Parameter description**: Specifies the interval at which cm\_agent checks whether a process is suspended.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **10**

#### unix\_socket\_directory<a name="section931094316393"></a>

**Parameter description**: Specifies the directory location of the Unix socket. When you set an absolute path using  **cm\_ctl**, the path must be included in quotation marks \(""\), for example,  **cm\_ctl set --param --agent -k unix\_socket\_directory="'/unix/dir'"**.

**Value range**: a string with up to 1024 characters. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value:** **''**

#### dilatation\_shard\_count\_for\_disk\_capacity\_alarm<a name="section827183713151"></a>

**Parameter description**: Specifies the number of shards to be added in the scale-out scenario. This parameter is used to calculate the threshold for reporting a disk capacity alarm.

**Value range**: an integer, in the range \[0,2147483647\]. If this parameter is set to  **0**, the disk scale-out alarm is not reported. If this parameter is set to a value greater than  **0**, the disk scale-out alarm is reported and the threshold is calculated based on the number of shards specified by this parameter. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

#### enable\_dcf<a name="section8310843173919"></a>

**Parameter description**: Specifies the status of the DCF mode.

**Value range**: Boolean. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **on**,  **yes**,  **true**, or  **1**: The DCF function is enabled.
-   **off**,  **no**,  **false**, or  **0**:The DCF function is disabled.

**Default value**:  **off**

#### disaster\_recovery\_type<a name="section1027633115186"></a>

**Parameter description**: Specifies the type of the DR relationship between primary and standby databases.

**Value range**: an integer, in the range \[0,2\]. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **0**  indicates that no DR relationship is established.
-   **1**  indicates that the OBS DR relationship is established.
-   **2**  indicates that the streaming DR relationship is established.

**Default value**:  **0**

#### agent\_backup\_open<a name="section114001741152513"></a>

**Parameter description**: Specifies whether to enable the DR mode. After the DR mode is enabled, the CM runs in DR mode.

**Value range**: an integer, in the range \[0,2\]. Any modification of this parameter takes effect only after cm\_agent is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **0**  indicates that no DR relationship is established.
-   **1**  indicates that the OBS DR relationship is established \(not supported later versions\).
-   **2**  indicates that the streaming DR relationship is established.

**Default value**:  **0**

### Parameters Related to cm\_server<a name="EN-US_TOPIC_0000001246287001"></a>

#### log\_dir<a name="section21021611134413"></a>

**Parameter description**: Specifies the directory where cm\_server logs are stored. It can be specified as an absolute path, or a path relative to  *$GAUSSLOG*. When you set an absolute path using  **cm\_ctl**, the path must be included in quotation marks \(""\), for example,  **cm\_ctl set --param --server -k log\_dir="'/log/dir'"**.

**Value range**: a string with up to 1024 characters. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **log**, indicating that the cm\_server logs are generated in the CM directory in  *$GAUSSLOG*.

#### log\_file\_size<a name="section171021311114411"></a>

**Parameter description**: Specifies the size of a log file. If the size of the  **cm\_server-xx-current.log**  file exceeds the specified size, a new log file is created to record log information.

**Value range**: an integer, in the range \[0,2047\]. The actual value range is \[1,2047\]. The unit is MB. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **16 MB**

#### log\_min\_messages<a name="section1110261111441"></a>

**Parameter description**: Specifies the message levels to be written to the cm\_server log. A higher level covers the messages of all the lower levels. The lower the level is, the fewer messages will be written into the log.

**Value range**: enumerated type. Valid values are  **debug5**,  **debug1**,  **log**,  **warning**,  **error**, and  **fatal**  \(case-insensitive\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **warning**

#### thread\_count<a name="section12102111113443"></a>

**Parameter description**: Specifies the number of threads in the cm\_server thread pool.

**Value range**: an integer, in the range \[2,1000\]. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1000**

#### instance\_heartbeat\_timeout<a name="section24821313171815"></a>

**Parameter description**: Specifies the time to wait before the instance heartbeat times out.

**Value range**: an integer, in the range \[1,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **6**

#### instance\_failover\_delay\_timeout<a name="section14533832212"></a>

**Parameter description**: Specifies the delay in cm\_server failover after the primary cm\_server breakdown is detected.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **0**

#### cmserver\_ha\_connect\_timeout<a name="section3103711174420"></a>

**Parameter description**: Specifies the time to wait before the connection between the primary cm\_server and standby cm\_server times out.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value:** **2**

#### cmserver\_ha\_heartbeat\_timeout<a name="section1510361114443"></a>

**Parameter description**: Specifies the time to wait before the heartbeat between the primary cm\_server and standby cm\_server times out.

**Value range**: an integer, in the range \[1,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **6**

#### cmserver\_ha\_status\_interval<a name="section1133674182316"></a>

**Parameter description**: Specifies the interval between synchronizations of primary cm\_server and standby cm\_server status.

**Value range**: an integer, in the range \[1,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

#### cmserver\_self\_vote\_timeout<a name="section363915452213"></a>

**Parameter description**: Specifies the timeout interval for cm\_server to vote for each other. This parameter is a legacy parameter and does not take effect.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **6**

#### phony\_dead\_effective\_time<a name="section11031311164411"></a>

**Parameter description**: Specifies the maximum number of times a database node is detected as a zombie. If the number of times the node is detected as a zombie is greater than the specified value, a process on the node is considered to be a zombie and will be restarted.

**Value range**: an integer, in the range \[1,2147483647\]. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **5**

#### cm\_server\_arbitrate\_delay\_base\_time\_out<a name="section9923154532414"></a>

**Parameter description**: Specifies the basic delay duration for cm\_server arbitration. If the primary cm\_server is disconnected, the arbitration starts to be timed. If the disconnection duration exceeds the arbitration delay duration, a new primary cm\_server will be selected. The arbitration delay duration is determined by the basic delay duration, the node index \(server ID\), and the incremental delay duration. The formula is as follows: Arbitration delay duration = Basic delay duration + Node index x Incremental delay duration

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **10**

#### cm\_server\_arbitrate\_delay\_incrememtal\_time\_out<a name="section116431649142414"></a>

**Parameter description**: Specifies the incremental delay duration for cm\_server arbitration. If the primary cm\_server is disconnected, the arbitration starts to be timed. If the disconnection duration exceeds the arbitration delay duration, a new primary cm\_server will be selected. The arbitration delay duration is determined by the basic delay duration, the node index \(server ID\), and the incremental delay duration. The formula is as follows: Arbitration delay duration = Basic delay duration + Node index x Incremental delay duration

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **3**

#### alarm\_component<a name="section12321745182515"></a>

**Parameter description**: Specifies the position of the alarm component that handles alarms if the first mode is used. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514). When you set an absolute path using  **cm\_ctl**, the path must be included in quotation marks \(""\), for example,  **cm\_ctl set --param --server -k alarm\_component="'/alarm/dir'"**.

**Value range**: a string with up to 1024 characters. Any modification of this parameter takes effect only after cm\_server is restarted.

**Default value**:  **/opt/huawei/snas/bin/snas\_cm\_cmd**

#### alarm\_report\_interval<a name="section17967105912515"></a>

**Parameter description**: Specifies the interval at which an alarm is reported.

**Value range**: a non-negative integer, in the range \[0,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **3**

#### alarm\_report\_max\_count<a name="section183101620262"></a>

**Parameter description**: Specifies the maximum number of times an alarm is reported.

**Value range**: a non-negative integer, in the range \[1,2592000\]. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

#### instance\_keep\_heartbeat\_timeout<a name="section1092193510262"></a>

**Parameter description**: cm\_agent periodically checks the instance status and reports the status to cm\_server. If the instance status cannot be detected for a long time and the accumulated number of times exceeds the value of this parameter, cm\_server delivers a command to cm\_agent to restart the instance.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **40**

#### az\_switchover\_threshold<a name="section10442115810268"></a>

**Parameter description**: If the failure rate of a node shard in an AZ \(Number of faulty node shards/Total number of node shards x 100%\) exceeds the specified value, automatic AZ switchover is triggered.

**Value range**: an integer, in the range \[1,100\]. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **100**

#### az\_check\_and\_arbitrate\_interval<a name="section208296015278"></a>

**Parameter description**: Specifies the interval for checking the AZ status. If the status of an AZ is abnormal, automatic AZ switchover is triggered.

**Value range**: an integer, in the range \[1,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value:** **2**

#### az\_connect\_check\_interval<a name="section182125018279"></a>

**Parameter description**: Specifies the interval at which the network connection between AZs is checked.

**Value range**: an integer, in the range \[1,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **60**

#### az\_connect\_check\_delay\_time<a name="section1884134782719"></a>

**Parameter description**: Specifies the delay between two retries to check the network connection between AZs.

**Value range**: an integer, in the range \[1,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **150**

#### cmserver\_demote\_delay\_on\_etcd\_fault<a name="section171253502814"></a>

**Parameter description**: Specifies the interval at which cm\_server is demoted to standby due to unhealthy ETCD.

**Value range**: an integer, in the range \[1,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **8**

#### instance\_phony\_dead\_restart\_interval<a name="section938462914288"></a>

**Parameter description**: Specifies the interval at which cm\_agent restarts and kills a zombie database instance. The interval between two consecutive kill operations cannot be less than the value of this parameter. Otherwise, cm\_agent does not deliver commands.

**Value range**: an integer, in the range \[1800,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value:** **21600**

#### enable\_transaction\_read\_only<a name="section510515117445"></a>

**Parameter description**: Specifies whether a database is in read-only mode.

**Value range**: Boolean values  **on**,  **off**,  **true**,  **false**,  **yes**,  **no**,  **1**, and  **0**  The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **on**

#### datastorage\_threshold\_check\_interval<a name="section122858817307"></a>

**Parameter description**: Specifies the interval for checking the disk usage. This interval is specified by the user.

**Value range**: an integer, in the range \[1,2592000\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **10**

#### datastorage\_threshold\_value\_check<a name="section121051111164418"></a>

**Parameter description**: Specifies the usage threshold of a read-only disk in a database. When the disk usage of the data directory exceeds the specified value, the database is automatically set to read-only mode.

**Value range**: an integer, in the range \[1,99\]. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **85**

#### max\_datastorage\_threshold\_check<a name="section1710519119443"></a>

**Parameter description**: Specifies the maximum interval for checking the disk usage. After you modify the  **enable\_transaction\_read\_only**  parameter, the system automatically checks whether the disk usage reaches the threshold at the specified interval.

**Value range**: an integer, in the range \[1,2592000\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

Default value:  **43200**

#### enable\_az\_auto\_switchover<a name="section14105161104415"></a>

**Parameter description**: Specifies whether to enable automatic AZ switchover. If this parameter is set to  **1**, cm\_server automatically switches over services among AZs. Otherwise, when a node is faulty, services will not be automatically switched to another AZ even if the current AZ is unavailable. You can run the switchover command to manually switch services to another AZ.

**Value range**: a non-negative integer. The value  **0**  indicates that automatic AZ switchover is disabled, and the value  **1**  indicates that automatic AZ switchover is enabled. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

#### cm\_krb\_server\_keyfile<a name="section815763211440"></a>

**Parameter description**: Specifies the location of the key file on the Kerberos server. The value must be an absolute path. The file is usually stored in the  *$\{GAUSSHOME\}***/kerberos**  directory and the file extension is  **keytab**. The file name is the same as the name of the user who runs the cluster. This parameter is used together with  **cm\_auth\_method**. If the value of the  **cm\_auth\_method**  parameter is changed to  **gss**,  **cm\_krb\_server\_keyfile**  must also be set to the corresponding path correctly. Otherwise, the cluster status will be affected. When you set an absolute path using  **cm\_ctl**, the path must be included in quotation marks \(""\), for example,  **cm\_ctl set --param --server -k cm\_krb\_server\_keyfile="'/krb/dir'"**.

**Value range**: a string. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  *$\{GAUSSHOME\}***/kerberos/***\{Username\}***.keytab**. The default value does not take effect and is used only for reference.

#### switch\_rto<a name="section489193815352"></a>

**Parameter description**: Specifies the delay for the forcible startup of cm\_server. When  **force\_promote**  is set to  **1**  and a shard in the cluster does not have primary cm\_server, the system starts timing. After the delay, the forcible startup logic starts to be executed.

**Value range**: an integer, in the range \[60,2147483647\] \(unit: second\). Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **600**

#### force\_promote<a name="section210571111441"></a>

**Parameter description**: Specifies whether cm\_server enables the forcible startup logic \(that is, when the cluster status is unknown, ensure that the basic functions of the cluster are available at the cost of data loss\). The value  **0**  indicates that forcible startup is disabled, and the value  **1**  indicates that forcible startup is enabled.

**Value range:**  an integer,  **0**  or  **1**. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **0**

#### backup\_open<a name="section51185261313"></a>

**Parameter description**: Specifies whether to enable the DR cluster. After the DR cluster is enabled, the CM runs in DR cluster mode.

**Value range:**  an integer,  **0**  or  **1**. Any modification of this parameter takes effect only after cm\_server is restarted. This parameter cannot be enabled for non-DR clusters. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **0**: The DR cluster is disabled.
-   **1**: The DR cluster is enabled.

**Default value**:  **0**

#### enable\_dcf<a name="section1223164233119"></a>

**Parameter description**: Specifies the status of the DCF mode.

**Value range**: Boolean. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

-   **on**,  **yes**,  **true**, or  **1**: The DCF function is enabled.
-   **off**,  **no**,  **false**, or  **0**: The DCF function is disabled.

**Default value**:  **off**

#### ddb\_type<a name="section0106121124418"></a>

**Parameter description**: Specifies whether to switch between ETCD and DCC modes.

**Value range**: an integer.  **0**: specifies the ETCD mode;  **1**: specifies the DCC mode. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>\(openGauss supports only the DCC mode.\)

#### enable\_ssl<a name="section1910621118445"></a>

**Parameter description**: Specifies whether to enable SSL.

**Value range**: Boolean. After this function is enabled, the SSL certificate is used to encrypt communication. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:

-   **on**,  **yes**,  **true**, or  **1**: SSL is enabled.
-   **off**,  **no**,  **false**, or  **0**: SSL is disabled.
-   **Default value**:  **off**

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >To ensure security, you are not advised to disable it. After this function is disabled, the CM  **does not**  use encrypted communication and all information is transmitted in plaintext, which may bring security risks such as eavesdropping, tampering, and spoofing.


#### ssl\_cert\_expire\_alert\_threshold<a name="section8148443183416"></a>

**Parameter description**: Specifies the SSL certificate expiration alarm time.

**Value range**: an integer, in the range \[7,180\] \(unit: day\). If the certificate expiration time is less than the value of this parameter, an alarm indicating that the certificate is about to expire is reported. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **90**

#### ssl\_cert\_expire\_check\_interval<a name="section10149843143417"></a>

**Parameter description**: Specifies the period for checking whether the SSL certificate expires.

**Value range**: an integer, in the range \[0,2147483647\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **86400**

#### ddb\_log\_level<a name="section181071211184411"></a>

**Parameter description**: Sets the DDB log level.

To disable the log function, set this parameter to  **NONE**, which cannot be used together with the following log levels:

To enable the log function, set this parameter to one or a combination of the following log levels:  **RUN\_ERR|RUN\_WAR|RUN\_INF|DEBUG\_ERR|DEBUG\_WAR|DEBUG\_INF|TRACE|PROFILE|OPER**. If two or more log levels are used together, separate them with vertical bars \(|\). The log level cannot be set to an empty string.

**Value range**: a string containing one or a combination of the following log levels:  **RUN\_ERR|RUN\_WAR|RUN\_INF|DEBUG\_ERR|DEBUG\_WAR|DEBUG\_INF|TRACE|PROFILE|OPER**. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **RUN\_ERR|RUN\_WAR|DEBUG\_ERR|OPER|RUN\_INF|PROFILE**

#### ddb\_log\_backup\_file\_count<a name="section610761194419"></a>

**Parameter description**: Specifies the maximum number of log files that can be saved.

**Value range**: an integer, in the range \[1,100\]. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **10**

#### ddb\_max\_log\_file\_size<a name="section19107101110446"></a>

**Parameter description**: Specifies the maximum number of bytes in a log.

**Value range**: a string with up to 1024 characters, in the range \[1 MB,1000 MB\]. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **10M**

#### ddb\_log\_suppress\_enable<a name="section11071411114412"></a>

**Parameter description**: Specifies whether to enable the log suppression function.

**Value range**: an integer.  **0**: disabled;  **1**: enabled. The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **1**

#### ddb\_election\_timeout<a name="section1096185711575"></a>

**Parameter description**: Specifies the DCC election timeout period.

**Value range**: an integer, in the range \[1,600\] \(unit: second\). The modification of this parameter takes effect after reloading. For details about how to modify the parameter, see  [Parameters for set cm](introduction-to-the-cm_ctl-tool.md#table10437204416514).

**Default value**:  **3**

#### delay\_arbitrate\_timeout<a name="section1410893910156"></a>

**Parameter description**: Specifies the time for waiting for the redo log replay of a node in the same AZ as the primary DN. The node in the same AZ as the primary DN is preferentially promoted to primary.

**Value range**: an integer, in the range \[0,2147483647\] (unit: second). For details about how to modify the parameter, see [Parameters for set cm](#table10437204416514).

**Default value**: **0**

#### cm\_auth\_method<a name="section1969815428196"></a>

**Parameter description**: Specifies the port authentication mode of the CM. **trust** indicates that port authentication is not configured. **gss** indicates that Kerberos port authentication is used. Note that you can change the value to **gss** only after the Kerberos server and client are successfully installed. Otherwise, the CM cannot communicate properly, affecting the database status.

**Value range**: **gss** or **trust**. Any modification of this parameter takes effect only after cm\_server is restarted. For details about how to modify the parameter, see [Parameters for set cm](#table10437204416514).

**Default value**: **trust**

#### dn\_arbitrate\_mode<a name="section1264174324416"></a>

**Parameter description**: Specifies the DN arbitration mode.

**Value range**: a string. The modification of this parameter takes effect after reloading. For details about how to modify parameters, see [Parameters for set cm](#table10437204416514). In share\_disk mode, you are not advised to change the arbitration mode.

-   quorum
-   paxos
-   share\_disk

**Default value**: **quorum**
