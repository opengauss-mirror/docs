# UWAL Parameters<a name="EN-US_TOPIC_0000001371524841"></a>

## replconninfo\{N\} 
**Parameter description:** Configures the IP address and port number of the remote UWAL node. Add **remotenodeid** \(**uwal_nodeid** of the remote node\), **remoteuwalhost** \(**uwal_ip** of the remote node\), and **remoteuwalport** \(**uwal_port** of the remote node\) to the end of the original parameters. **N** specifies the information about the **N**th node to be listened on and authenticated by the current node.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Character string. An empty string indicates that no information about the **N**th node is configured.


## enable_uwal 
**Parameter description:** Specifies whether to enable the UWAL feature.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean. The value can be **on** or **off**. **on** indicates that UWAL is enabled, and **off** indicates that UWAL is disabled.


## uwal_config 
**Parameter description:** UWAL configuration.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Character string of the JSON type.


## uwal_disk_size
**Parameter description:** Disk size occupied by UWAL. The value cannot exceed the total disk size. Unit: byte.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Integer. Minimum value: **8589934592**, Maximum value: **4398046511104**.


## uwal_devices_path 
**Parameter description:** Path for storing UWAL files. The path must be an existing path. It is the input parameter name when the UwalInit() function is invoked.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Character string of the file storage path.


## uwal_log_path 
**Parameter description:** Path for storing UWAL log files. The path must be an existing path.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Character string of the file storage path.


## uwal_rpc_compression_switch
**Parameter description:** Specifies whether to enable compressed transfer.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean. The value can be **true** or **false**. **true** indicates that compressed transfer is enabled, and **false** indicates that compressed transfer is disabled.


## uwal_rpc_flowcontrol_switch
**Parameter description:** Specifies whether to enable flow control for the asynchronous standby database. This parameter is set on the active database.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean. The value can be **on** or **off**. **on** indicates that flow control for the asynchronous standby database is enabled, and **off** indicates that flow control for the asynchronous standby database is disabled.


## uwal_rpc_flowcontrol_value
**Parameter description:** Flow control threshold of the asynchronous standby database. Unit: MB.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 8 to 2048


## uwal_async_append_switch
**Parameter description:** Specifies whether UWAL uses synchronous write or asynchronous write.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean. The value can be **true** or **false**. **true** indicates that asynchronous write is used, and **false** indicates that synchronous write is used.


## application_name
**Parameter description:** Specifies the client name used in the current connection request.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Any character string.



# uwal\_config Parameters

## uwal_nodeid
**Parameter description:** ID of the current UWAL node.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 7

## uwal_ip
**Parameter description:** UWAL listening address, which is the input parameter name when the UwalInit\(\) function is invoked.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Character string, IPv4


## uwal_port
**Parameter description:** UWAL listening port, which is the input parameter name when the UwalInit\(\) function is invoked.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 9000 to 65535


## uwal_protocol
**Parameter description:** \(Optional\) Connection protocol of the current node, which is the input parameter name when the UwalInit\(\) function is invoked.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Character string, The value can be **tcp** or **rdma**.


## cpu_bind_switch
**Parameter description:** \(Optional\) Specifies whether to enable core binding for UWAL core threads.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean. The value can be **true** or **false**. **true** indicates that core binding is enable, and **false** indicates that core binding is disable.


## cpu_bind_start
**Parameter description:** \(Optional\) Start CPU core used for UWAL core binding.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1024


## cpu_bind_num
**Parameter description:** \(Optional\) Number of CPU cores bound to UWAL.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](../DatabaseAdministrationGuide/resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 2 to 16