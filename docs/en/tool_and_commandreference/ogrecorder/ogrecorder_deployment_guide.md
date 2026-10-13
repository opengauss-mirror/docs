# oGRecorder Deployment and Operations Guide

## Table of Contents

- [Overview](#overview)
- [Installation Preparation](#installation-preparation)
- [Configuration Files](#configuration-files)
- [Deployment Process](#deployment-process)
- [gr_om Command Reference](#gr_om-command-reference)
- [Upgrade Guide](#upgrade-guide)
- [Uninstallation and Failure Recovery](#uninstallation-and-failure-recovery)
- [Error Code Reference](#error-code-reference)

---

## Overview

oGRecorder (Data Vault) supports two deployment modes: standalone deployment and cluster deployment. This document describes how to use the `gr_om` operations tool to install, upgrade, and manage the cluster.

### Overall Installation Flow

| Step | Description |
|------|-------------|
| Pre-installation Preparation | Prepare the hardware and software environment and complete related configurations |
| Obtain and Verify the Installation Package | Download from the openGauss community and check the package contents |
| Configure the JSON File | Create a JSON configuration file containing server info, installation path, IP, ports, etc. |
| Upload the Package and JSON | Upload to the target server |
| Extract the Package | Use the tar command to extract |
| Initialize the Installation Environment | Configure SSH mutual trust and execute pre-installation |
| Execute Installation | Use gr_om for one-click installation of the Data Vault and CM cluster |

### gr_om Command List

| Command | Description |
|---------|-------------|
| `install` | Install GR and CM components |
| `uninstall` | Uninstall the cluster |
| `upgrade` | Upgrade GR/CM to a new version |
| `preinstall` | Pre-installation (environment preparation) |
| `gr_certs` | Generate and distribute GR certificates |
| `trust` | Configure SSH mutual trust |
| `view` | View cluster information |
| `generate-xml` | Generate an XML configuration file |

---

## Installation Preparation

### Obtain the Installation Package

- **Build from source**: [Reference Link](https://atomgit.com/opengauss/oGRecorder)
- **Official Community**: [Official Website](https://opengauss.org/zh/download/)

### Create the Installation User

Create a user (e.g., `omm`) on each server and set the same password:

```bash
useradd omm
passwd omm
```

### Disable the Firewall

Ensure the firewall is disabled or the relevant ports are open:

```bash
# Example for openEuler 2403
systemctl stop firewalld
systemctl disable firewalld
```

### Synchronize Cluster Time

Ensure all nodes in the cluster have consistent time. It is recommended to use the NTP service for time synchronization.

### Install Dependencies

Ensure the following dependency packages are installed:

```bash
gcc7.3+
python3.7+
expect
```

### Verify User ID

On each node, under the installation user, `id` should return the same result:

```bash
[omm@oGRecorder install]$ id
uid=1135(omm) gid=1135(omm) groups=1135(omm)
```

---

## Configuration Files

### JSON Configuration File Format

Example with 1 primary and 1 standby node:

```json
{
  "cluster": {
    "name": "cluster",
    "install_path": "/home/omm/install/",
    "env_file": "/home/omm/envfile",
    "worm_path": "/worm_path",
    "ca_path": "CA",
    "user": "omm",
    "nodes": [
      {
        "name": "oGRecorder1",
        "ip": "20.20.20.1",
        "gr_port": 33228
      },
      {
        "name": "oGRecorder2",
        "ip": "20.20.20.2",
        "gr_port": 33228
      }
    ]
  }
}
```

### Configuration Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cluster.name` | string | Yes | Cluster name |
| `cluster.install_path` | string | Yes | Installation directory path |
| `cluster.env_file` | string | Yes | Environment variable file path |
| `cluster.worm_path` | string | No | WORM storage path |
| `cluster.ca_path` | string | No | CA certificate directory (relative to worm_path) |
| `cluster.user` | string | Yes | Installation user |
| `cluster.nodes` | array | Yes | Node list |
| `nodes[].name` | string | Yes | Node hostname |
| `nodes[].ip` | string | Yes | Node IP address |
| `nodes[].gr_port` | int | Yes | oGRecorder service port |
| `nodes[].rest_ip` | string | No | RestAPI service IP; required only when RestAPI is installed on a different IP from oGRecorder |

### RestAPI Parameter Configuration (Optional)

**rest_ssl.properties: SSL Configuration**

```properties
# SSL Configuration for CM-RestAPI
server.port=8443
server.ssl.enabled=true
server.ssl.key-store=${GAUSSHOME}/share/sslcert/restapi/server.p12
server.ssl.key-store-password=
server.ssl.key-store-type=PKCS12
server.ssl.key-alias=rest-server
server.ssl.client-auth=need
server.ssl.trust-store=${GAUSSHOME}/share/sslcert/restapi/truststore.jks
server.ssl.trust-store-password=
server.ssl.trust-store-type=JKS
```

**restWhiteList: Whitelist**

```
192.168.0.1
192.168.0.2
```

---

## Deployment Process

### Step 1: Create the Package Directory

```bash
[omm@openGauss omm]$ mkdir -p /home/omm/pkg
```

### Step 2: Upload and Extract the Package

Example using version 7.0.0RC2 openEuler20.03-aarch64:

```bash
[omm@openGauss pkg]$ cd /home/omm/pkg
[omm@openGauss pkg]$ tar -zxvf openGauss-oGRecorder-7.0.0-RC2-openEuler20.03-aarch64.tar.gz
oGRecorder-Server.tar.gz
oGRecorder-SDK.tar.gz
[omm@openGauss pkg]$ tar -zxvf oGRecorder-Server.tar.gz
./
./install/
./install/gr_om
./install/py_pstree.py
./install/gr_contrl.sh
./install/rest_contrl.sh
./install/rest_ssl.properties
./install/restWhiteList
./bin/
./bin/grcmd
./bin/grserver
./lib/
./lib/libgrapi.so
```

### Step 3: Grant Execute Permission to the Installation Script

```bash
[omm@openGauss pkg]$ chmod +x ./install/*
```

### Step 4: Configure SSH Mutual Trust (root user)

Switch to the root user and establish mutual trust for the root user:

```bash
[root@openGauss install]$ cd /home/omm/pkg/install
[root@openGauss install]# ./gr_om trust -X /home/omm/pkg/cluster.json
Host list does not include current node(openGauss82), adding automatically...
[openGauss82] Generating SSH keys...
[20.20.20.1] Generating SSH keys...
root@20.20.20.1's password:
[20.20.20.2] Generating SSH keys...
root@20.20.20.2's password:
...
SSH mutual trust configuration completed for all cluster nodes!
```

### Step 5: Configure SSH Mutual Trust (omm user)

Switch to the omm user and establish mutual trust for the omm user:

```bash
[omm@openGauss install]$ cd /home/omm/pkg/install
[omm@openGauss install]$ ./gr_om trust -X /home/omm/pkg/cluster.json
...
SSH mutual trust configuration completed for all cluster nodes!
```

### Step 6: Execute Pre-installation (root user)

```bash
[root@openGauss install]$ cd /home/omm/pkg/install
[root@openGauss install]$ ./gr_om preinstall -X /home/omm/pkg/cluster.json
Start preinstall oGRecorder.
Successfully create preinstall directory.
Successfully change permissions.
Successfully add environment variable.
Successfully change permissions.
Successfully add crontab permission.
Successfully set limits.conf.
Successfully preinstall oGRecorder.
```

### Step 7: Install oGRecorder (omm user)

```bash
[omm@openGauss install]$ cd /home/omm/pkg/install
[omm@openGauss install]$ source /home/omm/envfile
[omm@openGauss install]$ ./gr_om install \
    -X /home/omm/pkg/cluster.json \
    --grpkg /home/omm/pkg/oGRecorder-Server.tar.gz \
    --cmpkg /home/omm/pkg/openGauss-CM-7.0.0-RC2-openEuler20.03-aarch64.tar.gz
```

Successful installation output:

```
Start install oGRecorder.
Successfully create install path.
Successfully distribute install gr pkg.
Successfully decompress gr pkg.
Successfully create and write gr config file.
Successfully add gr bin and lib.
Successfully create cluster_manual_walrecord file.
Successfully create gr_res.sh file.
Successfully create gr cert.
Successfully distribute gr_om.
Successfully distribute gr_contrl.sh.
Successfully distribute py_pstree.py.
Successfully install oGRecorder.
Start to install cm tool.
...
[  CMServer State   ]

node           instance state
-------------------------------
1  oGRecorder1 1        Primary
2  oGRecorder2 2        Standby

[ Defined Resource State ]

node           res_name instance  state
-----------------------------------------
1  oGRecorder1 gr       20001     OnLine  (Primary)
2  oGRecorder2 gr       20002     OnLine  (Standby)

[   Cluster State   ]

cluster_state   : Normal
redistributing  : No
balanced        : No
current_az      : AZ_ALL
enable_walrecord: Yes

Install CM tool success.
```

**Note:** To install RestAPI, add the `--restpkg` parameter specifying the RestAPI package path.

---

## gr_om Command Reference

### trust - Configure SSH Mutual Trust

**Interface Description**
Automatically configure SSH mutual trust between cluster nodes so they can log in without a password.

**Command Format**

```bash
gr_om trust -X <config_file>
```

**Parameters**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `-X <config_file>` | Yes | JSON configuration file path |

**Usage Example**

```bash
gr_om trust -X /home/omm/cluster.json
```

---

### preinstall - Pre-installation

**Interface Description**
Perform pre-installation environment preparation, including directory creation, permission settings, and environment variable configuration.

**Command Format**

```bash
gr_om preinstall -X <config_file>
```

**Parameters**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `-X <config_file>` | Yes | JSON configuration file path |

**Notes**

- Requires root privileges

**Usage Example**

```bash
gr_om preinstall -X /home/omm/cluster.json
```

---

### install - Install the Cluster

**Interface Description**
Install the oGRecorder cluster, including GR and CM components.

**Command Format**

```bash
gr_om install -X <config_file> --grpkg <gr_package> --cmpkg <cm_package> [--restpkg <rest_package>]
```

**Parameters**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `-X <config_file>` | Yes | JSON configuration file path |
| `--grpkg <gr_package>` | Yes | GR installation package path (.tar.gz) |
| `--cmpkg <cm_package>` | Yes | CM installation package path (.tar.gz) |
| `--restpkg <rest_package>` | No | CM-RESTAPI installation package path |

**Usage Example**

```bash
gr_om install \
    -X /home/omm/cluster.json \
    --grpkg /home/omm/pkg/oGRecorder-Server.tar.gz \
    --cmpkg /home/omm/pkg/CM-7.0.0.tar.gz
```

---

### gr_certs - Certificate Management

**Interface Description**
Generate GR communication certificates and distribute them to all nodes, then reload the service to activate the certificates.

**Command Format**

```bash
gr_om gr_certs -X <config_file>
```

**Parameters**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `-X <config_file>` | Yes | JSON configuration file path |

**Usage Example**

```bash
gr_om gr_certs -X /home/omm/cluster.json
```

---

### view - View Cluster Information

**Interface Description**
View cluster configuration information and static configuration.

**Command Format**

```bash
gr_om view <config_file>
```

**Usage Example**

```bash
gr_om view /home/omm/cluster.json
```

---

### generate-xml - Generate XML Configuration

**Interface Description**
Generate an XML-formatted cluster configuration from the JSON configuration file.

**Command Format**

```bash
gr_om generate-xml <config_file>
```

**Usage Example**

```bash
gr_om generate-xml /home/omm/cluster.json
```

---

## Upgrade Guide

### upgrade - Upgrade the Cluster

**Interface Description**
Upgrade the oGRecorder cluster to a new version. The following upgrade modes are supported:

| Mode | Parameter Combination | Downtime Required | Rollback Scope |
|------|----------------------|-------------------|----------------|
| GR Rolling Upgrade | `--grpkg` | No (node by node) | All upgraded nodes |
| GR Specific Node Upgrade | `--grpkg -n` | Only specified nodes | All upgraded nodes |
| CM Cluster Upgrade | `--cmpkg` | Yes (entire cluster) | All nodes |
| Combined Upgrade | `--grpkg --cmpkg` | Yes (entire cluster) | All nodes |

**Command Format**

```bash
# GR rolling upgrade (all nodes)
gr_om upgrade -X <config_file> --grpkg <gr_package>

# GR rolling upgrade (specific nodes)
gr_om upgrade -X <config_file> --grpkg <gr_package> -n <node_id1> <node_id2> ...

# CM cluster upgrade
gr_om upgrade -X <config_file> --cmpkg <cm_package>

# GR + CM combined upgrade
gr_om upgrade -X <config_file> --grpkg <gr_package> --cmpkg <cm_package>
```

**Parameters**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `-X <config_file>` | Yes | JSON configuration file path |
| `--grpkg <gr_package>` | No | New version GR package path |
| `--cmpkg <cm_package>` | No | New version CM package path |
| `-n, --nodeids <ids>` | No | Specific node IDs to upgrade (starting from 1) |

### Upload and Extract the New Package

Example using version 7.0.0RC2 openEuler20.03-aarch64:

```bash
[omm@openGauss pkg]$ cd /home/omm/pkg
[omm@openGauss pkg]$ tar -zxvf openGauss-oGRecorder-7.0.0-RC2-openEuler20.03-aarch64.tar.gz
oGRecorder-Server.tar.gz
oGRecorder-SDK.tar.gz
[omm@openGauss pkg]$ tar -zxvf oGRecorder-Server.tar.gz
./
./install/
./install/gr_om
./install/py_pstree.py
./install/gr_contrl.sh
./install/rest_contrl.sh
./install/rest_ssl.properties
./install/restWhiteList
./bin/
./bin/grcmd
./bin/grserver
./lib/
./lib/libgrapi.so
[omm@openGauss pkg]$ cd install
[omm@openGauss pkg]$ chmod +x gr_om
```

### Rolling Upgrade Example

```bash
# 1. Upgrade standby nodes first
./gr_om upgrade \
    -X /home/omm/cluster.json \
    --grpkg /home/omm/pkg/oGRecorder-Server.tar.gz \
    -n 2 3

# 2. Then upgrade the primary node
./gr_om upgrade \
    -X /home/omm/cluster.json \
    --grpkg /home/omm/pkg/oGRecorder-Server.tar.gz \
    -n 1
```

### Combined Upgrade Example

```bash
./gr_om upgrade \
    -X /home/omm/cluster.json \
    --grpkg /home/omm/pkg/oGRecorder-Server.tar.gz \
    --cmpkg /home/omm/pkg/CM-7.0.0.tar.gz
```

### Package Verification

The upgrade command automatically verifies the package type to prevent GR/CM package mix-ups:

```
============================================================
PACKAGE VERIFICATION
============================================================
  [1/2] Verifying GR package: /home/omm/oGRecorder-2.0.0.tar.gz
        ✓ GR package verification passed.
  [2/2] Verifying CM package: /home/omm/CM-2.0.0.tar.gz
        ✓ CM package verification passed.
============================================================
All package verifications passed!
============================================================
```

### Failure Rollback

- If any node upgrade fails, the tool automatically rolls back all upgraded nodes
- The rollback process includes: restoring symlinks, restoring bin/lib directories, and restarting services
- If rollback fails, a manual recovery guide will be displayed

**Recommendation**: During online rolling upgrades, it is recommended to specify a standby node as the first node ID, combined with the `gr_create_inst_only_primary` API to achieve only one business reconnection.

---

## Uninstallation and Failure Recovery

### uninstall - Uninstall the Cluster

**Interface Description**
Uninstall the oGRecorder cluster and clean up the installation directory and related configurations.

**Command Format**

```bash
gr_om uninstall -X <config_file>
```

**Usage Example**

```bash
# 1. Stop the cluster first
[omm@openGauss install]$ source /home/omm/envfile
[omm@openGauss install]$ cm_ctl stop
cm_ctl: stop cluster.
cm_ctl: stop nodeid: 1
cm_ctl: stop nodeid: 2
.........
cm_ctl: stop cluster successfully.

# 2. Execute uninstallation
[omm@openGauss install]$ gr_om uninstall -X /home/omm/pkg/cluster.json
Start uninstall oGRecorder.
Successfully uninstall oGRecorder.
```

**Notes**

- Ensure important data is backed up before uninstallation
- Uninstallation is irreversible

### Manual Failure Recovery

If the upgrade fails and automatic rollback also fails, follow these steps for manual recovery:

```bash
# 1. Stop the service
cm_ctl stop

# 2. Restore symlinks to the old version
rm -f /opt/ogrecorder/APP
ln -s /opt/ogrecorder/APP_1.0.0 /opt/ogrecorder/APP

# 3. Restore bin/lib from backup (if available)
cp -a /opt/ogrecorder/APP_1.0.0/backup/bin /opt/ogrecorder/APP_1.0.0/
cp -a /opt/ogrecorder/APP_1.0.0/backup/lib /opt/ogrecorder/APP_1.0.0/

# 4. Restart the service
cm_ctl start
```

---

## Error Code Reference

### General Error Codes

| Error Code | Description |
|------------|-------------|
| 0 | Success |
| 1 | General error |
| 2 | Parameter error |
| 3 | Configuration file error |
| 4 | SSH connection failure |

### Package Verification Error Codes

| Error Code | Description |
|------------|-------------|
| 101 | Package file does not exist |
| 102 | Package extraction failed (possibly corrupted) |
| 103 | Package type mismatch (GR/CM mix-up) |
| 104 | Invalid GR package |
| 105 | Invalid CM package |
| 106 | Unknown package type |

### Package Verification Error Example

When a CM package is passed to `--grpkg`:

```
============================================================
PACKAGE VERIFICATION FAILED
============================================================

Error Code: 103
Error Message: Package type mismatch! Expected GR package but found CM package.
  CM signature files found: bin/cm_server, bin/cm_agent
Package Path: /home/omm/CM-1.0.0.tar.gz
Expected Type: GR
Detected Type: CM

Suggestions:
  - You specified --grpkg but provided a CM package
  - Use --cmpkg for this package instead
  - Or provide the correct GR package

============================================================

Upgrade aborted due to package verification failure.
```

---

## Important Notes

1. **Privilege Requirements**: `preinstall` and `trust` (root user) require root privileges
2. **Network Requirements**: All nodes must be reachable; SSH ports must be open
3. **Disk Space**: Ensure sufficient disk space in the target directory before installation
4. **Time Synchronization**: Cluster node times must be consistent
5. **User ID Consistency**: The uid/gid of the installation user must be the same on all nodes
6. **Backup Recommendation**: Back up important data and configuration files before upgrading
7. **Package Verification**: The tool automatically verifies package types to prevent GR/CM package mix-ups

---

For special environments or errors, please troubleshoot based on the actual output messages.
