# dssserver<a name="ZH-CN_TOPIC_0000001375274965"></a>

## Background<a name="en-us_topic_0287276000_en-us_topic_0237152404_en-us_topic_0059777816_section2761723143810"></a>

The dssserver process is an independent process that directly manages raw devices of disk arrays and provides capabilities similar to distributed file systems for external systems. The shared memory and client API dynamic library provide the database with the capabilities of creating files, deleting files, expanding and shrinking files, and reading and writing files. It is also an executable command that can be used to start a dssserver process.

## Syntax<a name="section1366329102015"></a>

Start the dssserver process.

```
dssserver -D $DSS_HOME
```

## Parameter Description<a name="en-us_topic_0287276000_en-us_topic_0237152404_en-us_topic_0059777816_s2298a1889844418daec3743b9a4b57fb"></a>

As an independent process, the dssserver tool needs to provide the **dss\_inst.ini** configuration file before starting the DSS server. The related configuration parameters are as follows:

-   LSNR\_PATH

    **Parameter description**: Specifies the path of the socket file required by the dssserver process.

    **Value range**: a string

    **Default value**: **$DSS\_HOME**

-   LOG\_HOME

    **Parameter description**: Specifies the log path.

    **Value range**: a string

    **Default value**: **""**

-   \_LOG\_BACKUP\_FILE\_COUNT

    **Parameter description**: Specifies the maximum number of log files that can be retained.

    **Value range**: an integer, in the range \[0, 1024\]

    **Default value**: **10**

-   \_LOG\_MAX\_FILE\_SIZE

    **Parameter description**: Specifies the maximum size of a log file.

    **Value range**: an integer, in the range \[1M,4G\].

    **Default value**: **10M**

-   INST\_ID

    **Parameter description**: Specifies the instance ID. The dssserver process ID varies depending on the primary and standby nodes.

    **Value range**: an integer, in the range \[0,63\]

    **Default value**: **0**

-   STORAGE\_MODE

    **Parameter description:** Specifies the storage device type of the DSS. Set this parameter to **RAID** or **CLUSTER\_RAID** for disk arrays.

    **Value range**: a string

    **Default value**: **DISK**

-   \_LOG\_LEVEL

    **Parameter description**: Specifies the log level.

    **Value range**: an integer, in the range \[0,4087\]

    **Default value**: **7**

-   MAX\_SESSION\_NUMS

    **Parameter description**: Specifies the maximum number of session connections.

    **Value range**: an integer, in the range \[16,16320\].

    **Default value**: **8192**

-   DISK\_LOCK\_INTERVAL

    **Parameter description**: Specifies the timeout interval for locking a disk lock.

    **Value range**: an integer, in the range \[1,600000\] (unit: ms).

    **Default value**: **100**

-   DLOCK\_RETRY\_COUNT

    **Parameter description**: Specifies the number of disk locking retries.

    **Value range**: an integer, in the range \[1,500000\]

    **Default value**: **50**

-   \_AUDIT\_BACKUP\_FILE\_COUNT

    **Parameter description**: Specifies the number of audit backup files.

    **Value range**: an integer, in the range \[0,128\]

    **Default value**: **10**

-   \_AUDIT\_MAX\_FILE\_SIZE

    **Parameter description**: Specifies the maximum size of an audit backup file.

    **Value range**: an integer, in the range \[1M,4G\].

    **Default value**: **10M**

-   \_LOG\_FILE\_PERMISSIONS

    **Parameter description**: Specifies the log file permission.

    **Value range**: an integer, in the range \[600,777\]

    **Default value**: **600**

-   \_LOG\_PATH\_PERMISSIONS

    **Parameter description**: Specifies the log path permission.

    **Value range**: an integer, in the range \[700,777\]

    **Default value**: **700**

-   \_SHM\_KEY

    **Parameter description**: Specifies the shared memory key.

    **Value range**: an integer, in the range \[1,64\]

    **Default value**: **1**

-   DSS\_NODES\_LIST

    **Parameter description**: Specifies the URL for MES communication between DSS server nodes.

    **Value range**: a string The format is inst\_Id:IP address:Port number,inst\_Id:IP address:Port number...

    **Default value**: **0:127.0.0.1:1611**

-   INTERCONNECT\_TYPE

    **Parameter description**: Specifies the communication protocol type.

    **Value range**: a character string, TCP or RDMA.

    **Default value**: **TCP**

-   INTERCONNECT\_CHANNEL\_NUM

    **Parameter description**: Specifies the number of MES connection channels for internal communication.

    **Value range**: an integer, in the range [1,32]

    **Default value**: **2**

-   WORK\_THREAD\_COUNT

    **Parameter description**: Specifies the number of MES worker threads for internal communication.

    **Value range**: an integer, in the range \[2,64\]

    **Default value**: **2**

-   RECV\_MSG\_POOL\_SIZE

    **Parameter description**: Specifies the size of the message receiving memory pool.

    **Value range**: an integer, in the range \[1M,1G\].

    **Default value**: **16M**

-   MES\_ELAPSED\_SWIT

    **Parameter description**: Specifies whether to enable the MES statistics delay counting function for internal communication.

    **Value range**: Boolean, **FALSE** or **TRUE**. **TRUE** indicates that the MES statistics delay counting function is enabled, and **FALSE** indicates that the function is disabled.

    **Default value**: **FALSE**

-   DISK\_LOCK\_FILE\_PATH

    **Parameter description**: Specifies the path for storing lock files when **STORAGE\_MODE** is set to **DISK**.

    **Value range**: a string

    **Default value**: **$DSS\_HOME**

-   SSL\_CA

    **Parameter description**: Specifies the root certificate of the CA server.

    **Value range**: a string

    **Default value**: **""**

-   SSL\_KEY

    **Parameter description**: Specifies the private key file of the server, used to decrypt data encrypted using the public key.

    **Value range**: a string

    **Default value**: **""**

-   SSL\_CRL

    **Parameter description**: Specifies the CRL.

    **Value range**: a string

    **Default value**: **""**

-   SSL\_CERT

    **Parameter description**: Specifies the server certificate file, including the public key of the server.

    **Value range**: a string

    **Default value**: **""**

-   SSL\_CIPHER

    **Parameter description**: Specifies the encryption algorithm used for SSL communication.

    **Value range**: a string

    **Default value**: **""**

-   SSL\_PWD\_CIPHERTEX

    **Parameter description**: Specifies the private key password.

    **Value range**: a string

    **Default value**: **""**

-   SSL\_CERT\_NOTIFY\_TIME

    **Parameter description**: Specifies the number of days prior to SSL server certificate expiration that a user will receive a reminder.

    **Value range**: an integer in the range \[7,180\].

    **Default value**: **30**

-   POOL\_NAMES

    **Parameter description:** Specifies the storage pool configuration.

    **Value range**: a string

    **Default value**: **""**

-   IMAGE\_NAMES

    **Parameter description:** Specifies the image configuration.

    **Value range**: a string

    **Default value**: empty

-   CEPH\_CONFIG

    **Parameter description:** Specifies the Ceph cluster configuration file.

    **Value range**: a string

    **Default value:** **"/etc/ceph/ceph.conf"**

-   VOLUME\_TYPES

    **Parameter description:** Specifies the volume type.

    **Value range**: a string

    **Default value**: **""**

-   DSS\_CM\_SO\_NAME

    **Parameter description**: Specifies the binary file name of CM.

    **Value range**: a string

    **Default value**: **""**
