# Resource Pooling OM Installation and Deployment Guide

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:46:32.560Z pushedAt=2026-09-24T08:21:10.633Z -->

## Content Overview

openGauss resource pooling is a new cluster architecture introduced by openGauss. Through the DMS and DSS components, this architecture enables shared underlying storage data among multiple nodes in the cluster and real-time memory sharing between nodes, thereby achieving the goals of saving underlying storage resources and supporting one-write-multiple-read with real-time consistent reads within the cluster.
This document primarily describes how to use the enterprise edition installation package to install a resource pooling environment via OM.

## Environment Preparation

### Physical Environment

- Two or more physical servers

- One enterprise-class centralized storage device (such as the Huawei Dorado series) or a centralized storage device that supports the iSCSI 3 protocol

- The physical servers and the storage device are interconnected via Fibre Channel switches. The physical servers are interconnected with each other via Fibre Channel switches or Ethernet switches. The service clients and the physical servers are interconnected via Fibre Channel switches or Ethernet switches.

### Virtual Environment

- Two or more virtual machines (such as DCS, ECS, etc.)

- Four shared disks that support the SCSI3 protocol

## OM Installation Guide

 >
 >[!NOTE] Note
  >
  > - The storage configuration, LUN partitioning, and connectivity configuration between storage nodes and machines are beyond the scope of this installation guide. It is assumed that the machines can already see the LUNs used for database installation.
  > - A cluster set requires four LUNs, as described below:
    1. cm_vote, the CM voting disk, one per cluster set
    2. cm_shared, the CM data disk, one per cluster set
    3. dss_data, the database data disk, one per cluster set
    4. dss_log, database XLog disk, one per cluster set

1. Prepare the software package and the operating system environment. For details, see: [Obtaining the Installation Package](../getting_started/preparing_for_installation.md) and [Preparing the Software and Hardware Installation Environment](../getting_started/preparing_for_installation.md)

2. Prepare the XML file required for installation. For details, see: [Creating an XML Configuration File](../installation_guide/creating_an_xml_configuration_file.md)

3. Execute preinstall. For details, see: [Initializing the Installation Environment](../installation_guide/initializing_the_installation_environment.md)

4. Execute the installation. For details, see [Executing the Installation](../installation_guide/executing_installation.md).