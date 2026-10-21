---
description: This document describes Resource Pooling Multi-path and Multi-link Redundancy Enviro in openGauss, covering topics such as I. Software to Be Installed, II. Checking Connectivity Between NICs and the Disk Array.
keywords: [openGauss, Resource Pooling Multi-path and Multi-link Redundancy Enviro, database administration, I. Software to Be Installed, II. Checking Connectivity Between NICs and the Disk Array]
---

# Resource Pooling Multi-path and Multi-link Redundancy Environment Setup Guide

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:46:21.617Z pushedAt=2026-09-11T11:23:34.463Z -->

To further improve the stability between the `openGauss` resource pooling cluster and the `Dorado` storage device (disk array), redundant links are added for each database node to enhance the reliability of the database cluster.

This document uses an `openGauss` resource pooling primary-standby environment as an example to introduce the setup process of a `multipath` multi-link redundancy environment.

The device information for this `multipath` multi-link redundancy environment setup is detailed in the following table. In addition to the hardware configuration of a normal cluster, each node requires an additional NIC for the standby link setup.

<table>
  <tr>
    <td>Machine Name</td>
    <td>IP</td>
    <td>OS</td>
    <td>Selected Primary NIC && IP</td>
    <td>Selected Standby NIC && IP</td>
    <td>Disk Array IP</td>
  </tr>
  <tr>
    <td>centos131</td>
    <td>x.x.x.131</td>
    <td>CentOS 7</td>
    <td>enp3s0f0: y.y.y.131</td>
    <td>enp3s0f1: y.y.y.34</td>
    <td>y.y.y.229</td>
  </tr>
  <tr>
    <td>opengauss133</td>
    <td>x.x.x.133</td>
    <td>CentOS 7</td>
    <td>enp2s0f0: y.y.y.35</td>
    <td>enp129s0f0: y.y.y.133</td>
    <td>y.y.y.229</td>
  </tr>
</table>

## I. Software to Be Installed

The software to be installed and its function overview:

<table>
  <tr>
    <td>Software</td>
    <td>Function Overview</td>
  </tr>
  <tr>
    <td>open-iscsi</td>
    <td>Allows the host system to connect to remote iSCSI storage devices over a TCP/IP network, making these storage devices appear as local disks to the host, thereby implementing storage area network functionality.</td>
  </tr>
  <tr>
    <td>libvirt-daemon-driver-storage-iscsi</td>
    <td>A storage driver used to manage and utilize iSCSI storage in libvirt-based virtualization environments. The iSCSI storage driver enables virtual machines to conveniently access and use iSCSI storage devices.</td>
  </tr>
  <tr>
    <td>device-mapper-multipath</td>
    <td>Operates on top of the device mapper framework and is capable of virtualizing multiple physical paths (paths connected to storage devices through different network connections or storage interfaces) into a single logical device, providing the operating system with a unified storage access interface.</td>
  </tr>
</table>

The recommended versions of <code>device-mapper-multipath</code> for different <code>OS</code> are shown in the following table.

<table>
  <tr>
    <td>OS</td>
    <td>Recommended Version of device-mapper-multipath</td>
  </tr>
  <tr>
    <td>centOS 7 (x86)</td>
    <td>0.4.9-111.el7.x86_64 ~ 0.4.9-136.el7_9.x86_64</td>
  </tr>
  <tr>
    <td>openEuler 20.03 (arm)</td>
    <td>0.8.4-12.oe1.aarch64</td>
  </tr>
  <tr>
    <td>openEuler 22.03 (arm)</td>
    <td>0.8.7-6.oe2203.aarch64</td>
  </tr>
</table>

(1) Install the software

```shell
yum install -y open-iscsi
yum install -y libvirt-daemon-driver-storage-iscsi
yum install -y device-mapper-multipath
```

(2) Use `rpm -qa|grep app` to check whether the software is correctly installed. If it is not correctly installed, the output of this command is empty.

```shell
[root@centos131 ~]# rpm -qa|grep iscsi
iscsi-initiator-utils-6.2.0.874-22.el7_9.x86_64
libiscsi-1.9.0-7.el7.x86_64
libvirt-daemon-driver-storage-iscsi-4.5.0-36.el7_9.5.x86_64
iscsi-initiator-utils-iscsiuio-6.2.0.874-22.el7_9.x86_64

[root@centos131 ~]# rpm -qa|grep libvirt-daemon-driver-storage-iscsi
libvirt-daemon-driver-storage-iscsi-4.5.0-36.el7_9.5.x86_64

[root@centos131 ~]# rpm -qa|grep multipath
device-mapper-multipath-0.4.9-136.el7_9.x86_64
device-mapper-multipath-libs-0.4.9-136.el7_9.x86_64
```

## II. Checking Connectivity Between NICs and the Disk Array

(1) Use the `ping` command to test the connectivity between the four NICs and the disk array.

```shell
ping y.y.y.229 -I NIC // NIC indicates the NIC to be tested.
```

Check the connectivity between NICs `enp3s0f0` and `enp3s0f1` on machine 131 and the disk array.

If a NIC is unreachable, disable reverse path filtering using the command. Two methods are provided below.

a. Method 1: Invalid after restart.

```shell
echo 0 > /proc/sys/net/ipv4/conf/all/rp_filter
echo 0 > /proc/sys/net/ipv4/conf/enp3s0f0/rp_filter
echo 0 > /proc/sys/net/ipv4/conf/enp3s0f1/rp_filter
```

b. Method 2: Write to a file for long-term validity, then use the command <code>sysctl -p</code> to apply the configuration.

```shell
vim /etc/sysctl.conf

net.ipv4.conf.default.rp_filter = 0
net.ipv4.conf.all.rp_filter = 0
net.ipv4.tcp_tw_recycle = 0
net.ipv4.conf.default.rp_filter = 0
net.ipv4.conf.enp3s0f0.rp_filter = 0
net.ipv4.conf.enp3s0f1.rp_filter = 0
```

Check the connectivity between the NICs <code>enp2s0f0</code> and <code>enp129s0f0</code> on the 133 machine and the disk array again.

Use the command to disable reverse path filtering.

Invalid after restart.

```shell
echo 0 > /proc/sys/net/ipv4/conf/all/rp_filter
echo 0 > /proc/sys/net/ipv4/conf/enp2s0f0/rp_filter
echo 0 > /proc/sys/net/ipv4/conf/enp129s0f0/rp_filter
```

```shell
vim /etc/sysctl.conf

net.ipv4.conf.default.rp_filter = 0
net.ipv4.conf.all.rp_filter = 0
net.ipv4.tcp_tw_recycle = 0
net.ipv4.conf.default.rp_filter = 0
net.ipv4.conf.enp129s0f0.rp_filter = 0
net.ipv4.conf.enp2s0f0.rp_filter = 0
```

Note: If the NIC still cannot ping the disk array after disabling reverse path filtering, contact the hardware administrator for assistance.

## III. Discover and Connect to the Disk Array

Use commands on machine 131 to discover the target disk array.

(1) Use the <code>iscsiadm</code> command to perform <code>discovery</code> to find the target disk array, and log in using the specified NIC.

```shell
iscsiadm -m discovery -t st -p y.y.y.229 -l enp3s0f0
iscsiadm -m discovery -t st -p y.y.y.229 -l enp3s0f1
```

```shell
[root@centos131 ~]# iscsiadm -m discovery -t st -p y.y.y.229 -l enp3s0f0

y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
Logging in to [iface: iscsi_enp3s0f0, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260] (multiple)
Logging in to [iface: iscsi_enp3s0f1, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260] (multiple)
Login to [iface: iscsi_enp3s0f0, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260] successful.
Login to [iface: iscsi_enp3s0f1, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260] successful.

[root@centos131 ~]# iscsiadm -m discovery -t st -p y.y.y.229 -l enp3s0f1

y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
```

The operations on machine 133 are the same as those on machine 131.

```shell
[root@opengauss133 ~]# iscsiadm -m discovery -t st -p y.y.y.229 -l enp2s0f0
y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229

[root@opengauss133 ~]# iscsiadm -m discovery -t st -p y.y.y.229 -l enp129s0f0
y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
```

As can be seen from the command output above, machine 133 has two fewer links. The following describes the configuration process for redundant links.

```shell
*********************************
*****  Redundant Link Configuration Process - Start  *****
*********************************

(1) Create iSCSI interfaces

iscsiadm -m iface -I iscsi_enp2s0f0 --op=new
iscsiadm -m iface -I iscsi_enp129s0f0 --op=new

(2) Bind the iSCSI interfaces to establish the mapping between NICs and iSCSI interfaces

iscsiadm -m iface -I iscsi_enp2s0f0 --op=update -n iface.net_ifacename -v enp2s0f0
iscsiadm -m iface -I iscsi_enp129s0f0 --op=update -n iface.net_ifacename -v enp129s0f0

(3) Verify the iface configuration

iscsiadm -m iface

(4) Restart the iSCSI service

systemctl restart iscsi.service

(5) If the network becomes unreachable after the restart, disable reverse path filtering

echo 0 > /proc/sys/net/ipv4/conf/all/rp_filter
echo 0 > /proc/sys/net/ipv4/conf/enp2s0f0/rp_filter
echo 0 > /proc/sys/net/ipv4/conf/enp129s0f0/rp_filter

(6) Send the storage mapping information again

iscsiadm -m discovery -t st -p y.y.y.229

(7) Check the port service information

netstat -anp|grep 3260

*********************************
*****  Redundant Link Configuration Process - End  *****
*********************************
```

## IV. Bind and Map Hosts and Initiators on the Dorado Device Manager Platform, and Generate Four Disks

(1) Create hosts `cenos131` and `centos133`.

(2) Create a host group `centos_hg`.

(3) Add the hosts to the host group.

(4) Create LUNs to generate four disks.

```shell
[15:0:0:1]   disk    HUAWEI   XSG1             6000  /dev/sdl   36382028100c0772b338f5c8900000011   214GB
[15:0:0:2]   disk    HUAWEI   XSG1             6000  /dev/sdm   36382028100c0772b338f5c8900000012   214GB
[15:0:0:3]   disk    HUAWEI   XSG1             6000  /dev/sdn   36382028100c0772b338f5c8900000015   214GB
[15:0:0:4]   disk    HUAWEI   XSG1             6000  /dev/sdo   36382028100c0772b338f5c8900000016   214GB
```

## V. Starting multipath

To ensure that the multipath configuration process does not affect other users' environments in a shared environment, some preliminary operations are required.

a. Enable and initialize the multi-link configuration file.

```shell
mpathconf --enable
```

After executing this command, an empty multipath.conf file is generated under /etc, with the following content. This file is the core file of multipath, responsible for various function controls and parameter configurations related to multipath, and is extremely important.

```shell
# device-mapper-multipath configuration file

# For a complete list of the default configuration values, run either:
# # multipath -t
# or
# # multipathd show config

# For a list of configuration options with descriptions, see the
# multipath.conf man page.

defaults {
        user_friendly_names yes
        find_multipaths yes
}

blacklist_exceptions {
        property "(SCSI_IDENT_|ID_WWN)"
}

blacklist {
}
```

To avoid affecting other users' environments, write wwid "3*" in the blacklist to add all devices to the blacklist, and then add the multipath devices (the four disks generated in Step 4) to the blacklist_exceptions.

After this operation, when <code>multipath</code> scans multipath devices, all devices except those in <code>blacklist_exceptions</code> will be ignored.

b. Introduction to the <code>multipath</code> core configuration file <code>multipath.conf</code>

The <code>multipath.conf</code> file can be divided into several sections, as shown in the following table:

<table>
  <tr>
    <td>Subsection</td>
    <td>Function Description</td>
  </tr>
  <tr>
    <td>blacklist</td>
    <td>A list of devices that are excluded from being treated as multipath devices.</td>
  </tr>
  <tr>
    <td>blacklist_exceptions</td>
    <td>A list of exceptions to the blacklist. Devices that appear in the blacklist but are also added to this list will be scanned and recognized as multipath devices.</td>
  </tr>
  <tr>
    <td>defaults</td>
    <td>General default settings for multipath</td>
  </tr>
  <tr>
    <td>multipaths</td>
    <td>Settings for individual multipath device characteristics. These values override those specified in the overrides, devices, and defaults sections of the configuration file.</td>
  </tr>
  <tr>
    <td>device</td>
    <td>Settings for individual storage controllers. These values override those specified in the defaults section of the configuration file.</td>
  </tr>
  <tr>
    <td>overrides</td>
    <td>Settings that apply to all devices. These values override the values specified in the devices and defaults sections of the configuration file.</td>
  </tr>
</table>

When the system determines the attributes of a multipath device, it checks the settings in individual sections of the multipath.conf file in the following order:

```shell
multipaths --> overrides --> devices --> defaults
```

c. Key parameter descriptions for defaults and multipaths

When the same parameter exists in both multipaths and defaults, the value set in multipaths takes precedence.

```shell
defaults {
       polling_interval        5
       path_selector           "round-robin 0"
       path_grouping_policy    multibus
       uid_attribute           ID_SERIAL
       prio                    alua
       path_checker            readsector0
       rr_min_io               100
       max_fds                 8192
       rr_weight               priorities
       failback                immediate
       no_path_retry           fail
       user_friendly_names     yes
}

multipaths {
       multipath {
               wwid                    3600508b4000156d700012000000b0000
               alias                   yellow
               path_grouping_policy    multibus
               path_selector           "round-robin 0"
               failback                manual
               rr_weight               priorities
               no_path_retry           5
       }
       multipath {
               wwid                    1DEC_____321816758474
               alias                   red
       }
}
```

In these two subsections, several important parameters need to be introduced.

`polling_interval`: Used to set the path status polling interval for multipath devices, that is, the time period at which the system checks whether each path is available and whether its status has changed.

The default value is typically between 5 and 10 seconds. A smaller value results in more frequent path status checks, allowing the system to detect path failures and perform failover more quickly, but it also increases system overhead.

`path_selector`: Used to specify the method for checking storage path status. For specific values, refer to the following table (the default value is `tur`).
<table>
  <caption>path_selector Parameter Description</caption>
  <tr>
    <td>Parameter Value</td>
    <td>Function Description</td>
    <td>Feature</td>
  </tr>
  <tr>
    <td>tur</td>
    <td>Checks the path status by sending a specific SCSI command [TEST_UNIT_READY] to the storage device.</td>
    <td>Universal and simple</td>
  </tr>
  <tr>
    <td>emc_clariion</td>
    <td>A path checker specifically designed for EMC Clariion storage devices</td>
    <td>Fully leverages device advantages, but has poor versatility</td>
  </tr>
  <tr>
    <td>hp_sw</td>
    <td>A path checker specifically designed for HP storage devices</td>
    <td>Fully leverages device advantages, but has poor generality</td>
  </tr>
  <tr>
    <td>netapp_fcp</td>
    <td>Path checker applicable to NetApp Fibre Channel storage devices</td>
    <td>Fully leverages device advantages, but has poor generality</td>
  </tr>
  <tr>
    <td>readsector0</td>
    <td>A path checker that reads sector 0 of the storage device to check the path status.</td>
    <td>Primitive, slow, and generic.</td>
  </tr>
  <tr>
    <td>write_file</td>
    <td>A path checker that writes data to a specified file to check the path status.</td>
    <td>Offers a certain degree of flexibility.</td>
  </tr>
</table>

`path_grouping_policy`: defines the path grouping policy for multipath devices, with a default value of `failover`

<table>
  <caption>path_grouping_policy Parameter Description</caption>
  <tr>
    <td>Parameter Value</td>
    <td>Function Description</td>
  </tr>
  <tr>
    <td>failover</td>
    <td>A primary-standby path grouping policy. In this mode, multiple paths are divided into active paths and standby paths. Typically, only active paths are used for data transmission. When an active path fails, the standby path automatically takes over to ensure data continuity.</td>
  </tr>
  <tr>
    <td>multibus</td>
    <td>Load balancing mode. Under this policy, all paths participate in data transmission simultaneously. Data is distributed across different paths based on a specific algorithm, achieving load balancing, fully utilizing the bandwidth of all available paths, and improving overall performance.</td>
  </tr>
  <tr>
    <td>group_by_serial</td>
    <td>Paths are grouped based on the serial number of the storage device. Paths to storage devices with the same serial number are placed in the same group, and paths within the same group are configured for active/standby or load balancing according to certain rules.</td>
  </tr>
  <tr>
    <td>group_by_prio</td>
    <td>Paths are grouped by priority. Users can assign different priorities to each path, and paths with higher priority are preferentially selected for data transmission. When high-priority paths become unavailable, lower-priority paths are then selected.</td>
  </tr>
  <tr>
    <td>group_by_node_name</td>
    <td>Paths are grouped based on the node name of the storage device.</td>
  </tr>
</table>

`failback`: Controls whether to automatically switch data transmission back to the original primary path after a faulty path recovers. The default value is `manual`.

<table>
  <caption>failback Parameter Description</caption>
  <tr>
    <td>Parameter Value</td>
    <td>Function description</td>
  </tr>
  <tr>
    <td>immediate</td>
    <td>When the failed path recovers, the system immediately switches data transmission back to the original primary path. This approach quickly restores the path status prior to the failure and maximizes the performance advantage of the original primary path.</td>
  </tr>
  <tr>
    <td>manual</td>
    <td>After the failed path recovers, the system does not automatically switch back to the original primary path. Instead, it continues to use the current standby path or load balancing path, and manual intervention by the administrator is required to switch data transmission back to the original primary path.</td>
  </tr>
  <tr>
    <td>followover</td>
    <td>Specifies that automatic failback can be performed only when the first path in the path group is active. When another node requests a failover, this allows the node to perform failback automatically.</td>
  </tr>
  <tr>
    <td>delayed</td>
    <td>Delays the switchover for a period of time after the failed path recovers, so as to avoid potential instability factors that may exist immediately after path recovery from affecting data transmission.</td>
  </tr>
</table>

`fast_io_fail_tmo`: When an I/O issue is detected on the current path, if it is not resolved within this time (in `s`), the `multipathd` process considers the path as failed and performs a path switchover.

`no_path_retry`: Number of retries after a path failure

`multipath` has numerous parameters. The most critical ones are listed here, and you can configure them as needed for different scenarios.

(1) Start the `multipathd` service and enable it to start on boot.

```shell
systemctl enable multipathd   // Enable the service to start on boot.
systemctl start multipathd    // Start the multipathd service.
```

(2) Clear multi-link residue, reconfigure and load multi-link, and display the multi-link topology.

```shell
multipath -F   // Clear multi-link residue
multipath -v2  // Reload multi-link
multipath -ll  // Display multi-link topology
```

(3) Use `multipath -ll` to check the disk mapping. If the output is empty, the configuration is incorrect. The fix is as follows:

a. Check whether the relevant modules of `multipath` are installed successfully.

```shell
[root@centos131 ~]# lsmod |grep dm_multipath

dm_multipath           27792  2 dm_round_robin,dm_service_time
dm_mod                128595  12 dm_multipath,dm_log,dm_mirror
```

b. Load the `dm-multipath` kernel module into the `Linux` system kernel. This module is the core component of the multipath function and is primarily used to implement multipath access to storage devices.

```shell
modprobe dm-multipath
```

c. Load the `dm-round-robin` kernel module into the `Linux` system kernel. This module is part of the device mapper in the `Linux` system, and its main function is to implement a round-robin `I/O` scheduling policy.

```shell
modprobe dm-round-robin
```

d. Start the `multipath` service.

```shell
service multipathd start

Redirecting to /bin/systemctl start multipathd.service
```

e. Use the `multipath -v2` command to verify whether the multipath function is enabled properly.

```shell
multipath -v2

Nov 15 16:34:16 | sdg: alua not supported
Nov 15 16:34:16 | sdi: alua not supported
Nov 15 16:34:16 | sdk: alua not supported
Nov 15 16:34:16 | sdm: alua not supported
Nov 15 16:34:16 | sdf: alua not supported
Nov 15 16:34:16 | sdh: alua not supported
Nov 15 16:34:16 | sdj: alua not supported
Nov 15 16:34:16 | sdl: alua not supported
```

```shell
[root@centos131 ~]# multipath -ll

[root@centos131 ~]# iscsiadm -m session
tcp: [38] y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229 (non-flash)
tcp: [39] y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229 (non-flash)
```

f. Exit the previously established session.

```shell
[root@centos131 ~]# iscsiadm -m session -u
Logging out of session [sid: 38, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260]
Logging out of session [sid: 39, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260]
```

g. Rediscover the disk array and establish a connection.

```shell
[root@centos131 ~]# iscsiadm -m discovery -t st -p y.y.y.229 -l enp3s0f0
y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
Logging in to [iface: iscsi_enp3s0f0, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260] (multiple)
Logging in to [iface: iscsi_enp3s0f1, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260] (multiple)
Login to [iface: iscsi_enp3s0f0, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260] successful.
Login to [iface: iscsi_enp3s0f1, target: iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229, portal: y.y.y.229,3260] successful.

[root@centos131 ~]# iscsiadm -m discovery -t st -p y.y.y.229 -l enp3s0f1
y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229
```

h. View the established TCP sessions.

```shell
[root@centos131 ~]# iscsiadm -m session
tcp: [40] y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229 (non-flash)
tcp: [41] y.y.y.229:3260,36354 iqn.2006-08.com.huawei:oceanstor:2100382028c0772b::28e01:y.y.y.229 (non-flash)
```

i. Use the command `multipath -ll` to view the multi-link topology and check the disk mapping status.

```shell
[root@centos131 ~]# multipath -ll
Nov 15 16:35:38 | sdk: alua not supported
Nov 15 16:35:38 | sdm: alua not supported
mpathe (36382028100c0772b338f5c8900000016) dm-6 HUAWEI  ,XSG1
size=200G features='0' hwhandler='0' wp=rw
`-+- policy='service-time 0' prio=-1 status=active
  |- 50:0:0:4 sdk 8:160 active ready running
  `- 51:0:0:4 sdm 8:192 active ready running
Nov 15 16:35:38 | sdi: alua not supported
Nov 15 16:35:38 | sdl: alua not supported
mpathd (36382028100c0772b338f5c8900000015) dm-5 HUAWEI  ,XSG1
size=200G features='0' hwhandler='0' wp=rw
`-+- policy='service-time 0' prio=-1 status=active
  |- 50:0:0:3 sdi 8:128 active ready running
  `- 51:0:0:3 sdl 8:176 active ready running
Nov 15 16:35:38 | sdg: alua not supported
Nov 15 16:35:38 | sdj: alua not supported
mpathc (36382028100c0772b338f5c8900000012) dm-4 HUAWEI  ,XSG1
size=200G features='0' hwhandler='0' wp=rw
`-+- policy='service-time 0' prio=-1 status=active
  |- 50:0:0:2 sdg 8:96  active ready running
  `- 51:0:0:2 sdj 8:144 active ready running
Nov 15 16:35:38 | sdf: alua not supported
Nov 15 16:35:38 | sdh: alua not supported
mpathb (36382028100c0772b338f5c8900000011) dm-3 HUAWEI  ,XSG1
size=200G features='0' hwhandler='0' wp=rw
`-+- policy='service-time 0' prio=-1 status=active
  |- 50:0:0:1 sdf 8:80  active ready running
  `- 51:0:0:1 sdh 8:112 active ready running
```

After this step, in the output of the `multipath -ll` command, `mpathb`, `mpathc`, `mpathd`, and `mpathe` serve as multi-link identifiers, and the drive letters `dm-*` corresponding to the four disks generated in Step 4 can be observed. Each disk has two links, and the status of each link is `active ready running`.

NOTE
After this step, check whether the device identifiers `dm-*` generated by `multipath` for the four disks are consistent across all nodes. If they are consistent, proceed with the subsequent installation steps. If they are inconsistent, use the following method to resolve the issue.

(4) Resolution for inconsistent device identifiers `dm-*` generated by `multipath` for the four disks across nodes [optional step]

a. Modify the parameters in the `multipath.conf` file on each node one by one, and unify aliases for the multipath devices (four disks).

```shell
vim /etc/multipath.conf

defaults {
        user_friendly_names no
        find_multipaths no
}

multipaths {
        multipath {
                wwid "36382028100c0772b109f1ce700000007"
                alias   aa
        }
        multipath {
                wwid "36382028100c0772b109f1ce700000008"
                alias   bb
        }
        multipath {
                wwid "36382028100c0772b109f1ce700000009"
                alias   cc
        }
        multipath {
                wwid "36382028100c0772b109f1ce70000000a"
                alias   dd
        }
}
```

In the `defaults` section, set `user_friendly_names` to `no`. In the `multipaths` section, use the `alias` parameter to assign an alias to each multipath device.

b. Clear multi-link residues, reconfigure and reload multipath, and display the multipath topology.

```shell
multipath -F   // Clear multipath residuals.
multipath -v2  // Reload multipath.
multipath -ll  // Display multipath topology.

dd (36382028100c0772b109f1ce70000000a) dm-6 HUAWEI,XSG1
size=50G features='1 queue_if_no_path' hwhandler='0' wp=rw
`-+- policy='service-time 0' prio=1 status=active
  |- 0:0:0:4 sdn     8:208 active ready running
  `- 1:0:0:4 sdm     8:192 active ready running
aa (36382028100c0772b109f1ce700000007) dm-3 HUAWEI,XSG1
size=1000G features='1 queue_if_no_path' hwhandler='0' wp=rw
`-+- policy='service-time 0' prio=1 status=active
  |- 0:0:0:1 sdh     8:112 active ready running
  `- 1:0:0:1 sda     8:0   active ready running
bb (36382028100c0772b109f1ce700000008) dm-4 HUAWEI,XSG1
size=500G features='1 queue_if_no_path' hwhandler='0' wp=rw
`-+- policy='service-time 0' prio=1 status=active
  |- 0:0:0:2 sdj     8:144 active ready running
  `- 1:0:0:2 sdi     8:128 active ready running
cc (36382028100c0772b109f1ce700000009) dm-5 HUAWEI,XSG1
size=50G features='1 queue_if_no_path' hwhandler='0' wp=rw
`-+- policy='service-time 0' prio=1 status=active
  |- 0:0:0:3 sdl     8:176 active ready running
  `- 1:0:0:3 sdk     8:160 active ready running
```

From the output of this command, you can see that the aliases of the four multipath devices are all set to the form of <code>aa</code>, <code>bb</code>, <code>cc</code>, and <code>dd</code>.

c. Enter the <code>/dev/mapper</code> directory and view the symbolic links generated by the four multipath devices.

```shell
[root@openGauss54 ~]# cd /dev/mapper
[root@openGauss54 mapper]# ll
total 0
lrwxrwxrwx. 1 root root       7 Dec 18 10:12 aa -> ../dm-3
lrwxrwxrwx. 1 root root       7 Dec 18 10:12 bb -> ../dm-4
lrwxrwxrwx. 1 root root       7 Dec 18 10:12 cc -> ../dm-5
lrwxrwxrwx. 1 root root       7 Dec 18 10:12 dd -> ../dm-6
```

When building the resource pooling cluster environment later, directly use it in the corresponding position of the <code>xml</code>, for example, <code>/dev/mapper/aa</code>.

## VI. View the Device Names Generated for the Four Disks

Use the `ll /dev/dm-*` command to sequentially view the device name of each corresponding disk.

```shell
[root@centos131 script]# ll /dev/dm-3
brw-rw---- 1 root disk 253, 3 Nov 15 16:35 /dev/dm-3
[root@centos131 script]# ll /dev/dm-4
brw-rw---- 1 root disk 253, 4 Nov 15 16:35 /dev/dm-4
[root@centos131 script]# ll /dev/dm-5
brw-rw---- 1 root disk 253, 5 Nov 15 16:35 /dev/dm-5
[root@centos131 script]# ll /dev/dm-6
brw-rw---- 1 root disk 253, 6 Nov 15 16:35 /dev/dm-6
```

## VII. Resource Pooling Environment Setup

In the `xml` file of the resource pooling cluster, if the multipath disk identifiers are consistent across all nodes, modify the identifiers of the four disks to the corresponding numbers `/dev/dm-*`. If they are inconsistent, use the corresponding symbolic links `/dev/mapper/**` instead. The subsequent process is the same as that of the resource pooling environment setup.

## VIII. Reliability and Availability Testing

For subsequent testing, `TPCC` can be run on both the primary and standby nodes simultaneously. During the test, use the command `ip link set NIC down` or `ifdown NIC` to perform a `DOWN` operation on the NIC, which may last for several minutes. Alternatively, a script can be used to repeatedly execute `DOWN` and `UP` operations over a period of time, with `SLEEP` operations interspersed in between. Observe the cluster status and service execution to verify the availability and reliability that the `multipath` multi-link redundancy environment brings to the cluster.
