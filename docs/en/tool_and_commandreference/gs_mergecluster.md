---
description: This document describes gs_mergecluster in openGauss, covering topics such as Background, Precautions.
keywords: [openGauss, gs_mergecluster, tools and commands, Background, Precautions]
---

# gs_mergecluster

## Background<a name="zh-cn_topic_0000001705427697"></a>

openGauss provides the `gs_mergecluster` tool, which merges multiple simply installed nodes into a single cluster. This cluster supports a series of operations using OM tools, such as node expansion and shrinkage, upgrade, and CM deployment.

## Precautions<a name="section940725313438"></a>

- Execute this command under the deployment user (omm). The command requires establishing mutual trust among the omm users across nodes. If mutual trust has been set up in advance, this step will be skipped. Otherwise, you will be prompted to enter a password during execution to create mutual trust.

- During execution, OM tools will be deployed based on the configured XML file path. Additionally, instances will be restarted, and a full data pull will be performed on standby nodes. Please pay attention to your data before execution.

- Currently, only IPv4 deployment is supported.

## Prerequisites<a name="section346168183816"></a>

- You need to manually configure the XML file, which must include all nodes to be merged into the same cluster.

- All nodes must have the same operating system and architecture.

- The omm user must have read and write permissions for the paths specified in the XML file.

## Syntax<a name="section4171702718"></a>

- Merge multiple nodes into a cluster

    ```
    ./gs_mergecluster -X <XMLFILE>
    ```

- Display help information

    ```
    ./gs_mergecluster -h | --help
    ```

## Parameter Description<a name="section1163793633413"></a>

- -X

    The XML configuration file for the cluster.

    The data directories in the XML file should remain unchanged. Other directories should be allocated according to actual needs. Ensure that the omm user has read and write permissions for the allocated directories.

- -h, --help

    Display help information.

## Example<a name="section114775229118"></a>

Steps for capacity expansion using gs_expansion.

Run the expansion tool with the -X parameter.

```
[omm@openGauss54 script]$ ./gs_mergecluster -X /usr1/pkg/cluster_config_3ins.xml 
Parse parameters.
Begin to install package on local node
End to install package on local node
Begin to check and build trust
Ssh Trust test ok...
Begin to install package on remote node
End to install package on remote node
Begin to config instance parameters.
End to config instance parameters.
Begin to build standby instance.
Build host [20.20.20.213] success.
Build host [20.20.20.215] success.
Begin to generate cluster config file.
End to generate cluster config file.
Merge cluster finished. Cluster status info:
[   Cluster State   ]

cluster_state   : Normal
redistributing  : No
current_az      : AZ_ALL

[  Datanode State   ]

    node        node_ip         port      instance                         state
------------------------------------------------------------------------------------------------
1  openGauss54  20.20.20.54     9000       6001 /usr1/omm/openGauss/data   P Primary Normal
2  openGauss213 20.20.20.213    9000       6002 /usr1/omm/openGauss/data   S Standby Normal
3  openGauss215 20.20.20.215    9000       6003 /usr1/omm/openGauss/data   S Standby Normal
```
