# cm\_install and cm\_uninstall<a name="EN-US_TOPIC_0000001201210100"></a>

The cm\_install tool can be used to deploy CMs in the openGauss database cluster. The cm\_uninstall tool can be used to uninstall CMs from the openGauss database cluster without affecting the DN cluster. 

## Precautions

-   After cm\_install is executed, the cluster is started by default.
-   This tool must be used as an individual user.
-   This tool allows you to install or uninstall the CM tool when the cluster is stopped. Note that the primary node before the cluster is stopped must be the initial primary node configured in the XML file. Otherwise, after the CM tool is installed or uninstalled and started again, the host of the cluster is different from that before the cluster is stopped.
-   If the CM tool is uninstalled when the cluster is stopped, dynamic files will be deleted after the uninstallation. However, dynamic files cannot be generated because the cluster is stopped. If necessary, run the **gs_om -t refreshconf** command to generate dynamic files after the cluster is started using gs\_om.
-   Before using this tool, go to the **cm\_tool** directory where this tool is located.

## Prerequisites

-   The OM tool is required for installing the openGauss cluster.
-   Generally, the cluster installed using the OM tool can ensure that mutual trust exists between nodes in the cluster.
-   The version of the openGauss cluster to be installed is the same as that of the CM to be installed.
-   Before CM deployment, the cluster status must be normal or stopped, and the term value of the host must be a non-zero value and the largest value in the cluster.
-   Before using this command, you need to run the source command to set environment variables.

## Usage

Installation

```
cm_install -? | --help
cm_install -X XMLFILE [-e envFile] --cmpkg=cmpkgPath
```

Uninstallation

```
cm_uninstall -? | --help
cm_uninstall -X XMLFILE [-e envFile] [--deleteData] [--deleteBinary]
```

**Description:** 

-   -X

    Specifies the path of the XML file.

-   -e

    Specifies the path of the environment variable file. The default value is **~/.bashrc**.

-   --cmpkg

    Specifies the path of the CM package.

-   --deleteData

    Deletes the CM data directory. By default, the CM data directory is not deleted.

-   --deleteBinary

    Delete CM-related binary files, including om\_monitor, cm\_agent, cm\_server, and cm\_ctl. By default, the binary files are not deleted.

-   -?, --help

    Displays help information.
