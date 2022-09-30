# Features<a name="EN-US_TOPIC_0000001201007180"></a>

## cm\_agent<a name="section1669543664312"></a>

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



## cm\_server<a name="section132815414420"></a>

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
The CMRestAPI uses the PUT method. The pushed host information carries the MasterIpPort parameter in the **ip:port** format, and the pushed standby node information carries the StanbysInfo parameter in the **ip1:port1,ip2:port2, ...,ipn:portn** format. For details about an application demo, see the application demo in the CMRestAPI repository.

**Other description:** 
1. Security-related description 
By default, the CMRestAPI uses the HTTP service and supports the configuration of the access whitelist. You can use the startup parameter **-w** to configure the whitelist file of the access source IP address. Each line in the whitelist file contains one IP address. To use the HTTPS service, you can specify the system parameter **server.ssl** in the JAR package during startup to enable the CMRestAPI to start the HTTPS service, or configure the **application.properties** file in the resource directory. The following is an example: 
```
-Dserver.port=*Service listening port* -Dserver.ssl.key-store=*Key file path* -Dserver.ssl.key-store-password= *Key file password* -Dserver.ssl.key-store-type= *Key type* ``` 
Example: **java -jar -Dserver.port=8443 -Dserver.ssl.key-store=/home/omm/keystore.p12 -Dserver.ssl.key-store-password=Abcdef@123 -Dserver.ssl.key-store-type=PKCS12 cmrestapi-xxx.jar -e envFile**
```  
You can search for and configure more parameters.

2. Memory-related description 
This program uses the Spring Boot framework. By default, the startup occupies a large amount of memory (about 1 GB). If the number of concurrent requests is small and you do not want the program to occupy a large amount of memory, you can specify some system parameters during startup to reduce the memory usage. The following is an example of the startup parameters: 
```-XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=56m -Xms128m -Xmx128m -Xmn32m -Xss328k -XX:SurvivorRatio=8 -XX:+UseConcMarkSweepGC```

3. Customized resource configuration file 
This program depends on CM-related processes and instructions. Therefore, this program must run with CM at the same time. You need to configure the customized resource configuration file. For details about the configuration method, see the content related to the customized resource monitoring feature.
