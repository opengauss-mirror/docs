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
