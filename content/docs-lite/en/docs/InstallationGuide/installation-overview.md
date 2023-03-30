# Installation Overview<a name="EN-US_TOPIC_0249784550"></a>

openGauss can be deployed in standalone or in standalone HA mode. In standalone mode, multiple database instances can be deployed on a single host. However, this mode is not recommended for data security purposes. In the standalone HA deployment mode, one primary server and at least one standby server are supported, and a maximum of four standby servers are supported.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>When the openGauss provides scripts for installation, only one database system can be deployed on a single physical machine. If you need to deploy multiple database systems on a single physical machine, you are advised to install the database systems using the CLI instead of using the installation script provided by the openGauss.

