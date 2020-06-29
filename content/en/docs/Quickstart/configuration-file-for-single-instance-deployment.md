# Configuration File for Single-Instance Deployment<a name="EN-US_TOPIC_0251900903"></a>

```
<?xml version="1.0" encoding="UTF-8"?>
<ROOT>
<!-- Overall information about openGauss -->
    <CLUSTER>
        <PARAM name="clusterName" value="dbCluster" />
        <PARAM name="nodeNames" value="node1" />
        <PARAM name="backIp1s" value="192.168.0.11"/>
        <PARAM name="gaussdbAppPath" value="/opt/huawei/install/app" />
        <PARAM name="gaussdbLogPath" value="/var/log/omm" />
        <PARAM name="tmpMppdbPath" value="/opt/huawei/tmp" />
        <PARAM name="gaussdbToolPath" value="/opt/huawei/install/om" />
        <PARAM name="corePath" value="/opt/huawei/corefile" />
        <PARAM name="clusterType" value="single-inst"/>
    </CLUSTER>
    <!-- Information about the node deployment on each server -->
    <DEVICELIST>
        <!-- Information about node deployment on node1 -->
        <DEVICE sn="1000001">
            <PARAM name="name" value="node1"/>
            <PARAM name="azName" value="AZ1"/>
            <PARAM name="azPriority" value="1"/>
            <!-- If only one NIC is available for the server, set backIP1 and sshIP1 to the same IP address. -->
            <PARAM name="backIp1" value="192.168.0.11"/>
            <PARAM name="sshIp1" value="192.168.0.11"/>
            
	    <!--dbnode-->
	    <PARAM name="dataNum" value="1"/>
	    <PARAM name="dataPortBase" value="26000"/>
	    <PARAM name="dataNode1" value="/opt/huawei/install/data/db1"/>
        </DEVICE>
    </DEVICELIST>
</ROOT>
```

