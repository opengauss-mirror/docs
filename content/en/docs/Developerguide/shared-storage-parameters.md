# Shared Storage Parameters<a name="EN-US_TOPIC_0000001371524841"></a>

## ss\_enable\_dss<a name="section14941640131"></a>

**Parameter description**: Specifies whether to enable the DSS mode. This parameter is specified by users during installation and cannot be modified.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean. The value can be **on** or **off**. **on** indicates that the DSS mode is enabled for the current installation and deployment, and **off** indicates that the DSS mode is disabled.

**Default value**: **off**

>![](public_sys-resources/icon-note.gif) **NOTE:**
>-   The default value of **ss\_enable\_dss** is **off** in standalone mode.
>-   To enable shared storage, set this parameter to **on**.
>-   After the OM is automatically installed in shared storage mode, this parameter is set to **on** by default.

## ss\_enable\_dms<a name="section715761611422"></a>

**Parameter description**: Specifies whether to enable the DMS function. This parameter is specified by users during installation and cannot be modified.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean. The value can be **on** or **off**. **on** indicates that the DMS function is enabled for the current installation and deployment, and **off** indicates that the DSS mode is disabled.

**Default value**: **off**

>![](public_sys-resources/icon-note.gif) **NOTE:**
>-   The default value of **ss\_enable\_dms** is **off** in standalone mode.
>-   To enable shared storage, set this parameter to **on**.
>-   After the OM is automatically installed in shared storage mode, this parameter is set to **on** by default.

## ss\_enable\_ssl<a name="section95293415425"></a>

**Parameter description**: Specifies whether to enable SSL.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean. The value can be **on** or **off**. **on** indicates that SSL is enabled, and **off** indicates that SSL is disabled.

**Default value**: **on**

>![](public_sys-resources/icon-note.gif) **NOTE:**
>-   This parameter takes effect only when the SSL parameter of the openGauss is set to **on**.
>-   You need to manually change the value of this parameter on all nodes, and the change takes effect upon restart. If you change the value of this parameter on a single node, the restart will time out and fail.
>-   If this parameter is disabled, the primary and standby nodes are not connected through SSL, which may cause spoofing attacks and information leakage.

## ss\_enable\_catalog\_centralized<a name="section1487019536418"></a>

**Parameter description**: Specifies the resource catalog storage mode, which cannot be modified.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846). This parameter cannot be modified.

**Value range**: Boolean. The value can be **on** or **off**. The value **on** indicates that DRC resources are stored only on the primary node. The value **off** indicates that resources are stored in distributed mode, that is, each node needs to store some DRC resources according to certain rules.

**Default value**: **on**

>![](public_sys-resources/icon-note.gif) **NOTE:**
>Currently, the value of **ss\_enable\_catalog\_centralized** cannot be changed. You can only use the default value.

## ss\_instance\_id<a name="section28801541163"></a>

**Parameter description:** Specifies the ID of a shared storage instance, which is generated based on the DN specified during installation. This parameter cannot be modified.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Default value**: **integer**. Value range: 0 to 2.

## ss\_dss\_vg\_name<a name="section6335163315612"></a>

**Parameter description**: Specifies the volume group name during installation. This parameter cannot be modified.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**: user-defined data volume group name during installation.

## ss\_dss\_conn\_path<a name="section0577131618718"></a>

**Parameter description**: Specifies the socket file path used by the DSS instance process. This parameter cannot be modified.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value:** "UDS:$\{DSS\_HOME\}/.dss\_unix\_d\_socket", which is user-defined during DSS installation.

## ss\_interconnect\_channel\_count<a name="section14669244155820"></a>

**Parameter description**: Specifies the number of MES interconnection channels.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 32

**Default value:** **16**

## ss\_work\_thread\_count<a name="section7297254748"></a>

**Parameter description**: Specifies the number of MES worker threads.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 16 to 128

**Default value**: **32**

## ss\_recv\_msg\_pool\_size<a name="section1881720453581"></a>

**Parameter description**: Specifies the size of the MES message receiving pool.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer. The value range is from 1 MB to 1024 MB and the unit is MB.

**Default value**: **16MB**

## ss\_interconnect\_type<a name="section2052815175514"></a>

**Parameter description**: Specifies the MES communication protocol type.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string, TCP or RDMA

**Default value**: **TCP**

>![](public_sys-resources/icon-note.gif) **NOTE:**
>RDMA communication depends on the CX5 NIC and the OCK RDMA dynamic library. Before enabling this function, ensure that the configuration is correct.

## ss\_interconnect\_url<a name="section111131910175619"></a>

**Parameter description**: Specifies the URL for MES communication between nodes.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string in the format of Node ID:IP address:Port number,Node ID:IP address:Port number, ...

**Default value**: user-defined during installation.

## ss\_rdma\_work\_config<a name="section1548143517579"></a>

**Parameter description**: Specifies the start and end CPUs used in the RDMA user-mode poll.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string in the format of *start CPU* *end CPU* \(separated by a space\), for example, **10 15**

**Default value**: **""**

## ss\_ock\_log\_path<a name="section484914735817"></a>

**Parameter description**: Specifies the path of the OCK RDMA log file.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string

**Default value**: **""**

## ss_enable_scrlock 

**Parameter description:** Specifies whether to use scrlock.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean. The value can be **on** or **off**. **on** indicates that scrlock is enabled, and **off** indicates that scrlock is disabled.

**Default value**: **off**

>![](public_sys-resources/icon-note.gif) **NOTE:**
>scrlock requires the CX5 NIC and depends on the OCK RDMA dynamic library. Before enabling this function, ensure that the configuration is correct.

## ss_enable_scrlock_sleep_mode 

**Parameter description:** Specifies whether to enable the scrlock sleep mode.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean. The value can be **on** or **off**. **on** indicates that the scrlock sleep mode is enabled, and **off** indicates that the scrlock sleep mode is disabled.

**Default value**: **on**

>![](public_sys-resources/icon-note.gif) **NOTE:**
>The scrlock sleep mode reduces the CPU usage of the scrlock but increases the scrlock delay.

## ss_scrlock_server_port 

**Parameter description:** Specifies the listening port number of the scrlock server.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** an integer ranging from 0 to 65536

**Default value**: **8000**

## ss_scrlock_worker_count 

**Parameter description:** Specifies the number of workers on the scrlock client.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:** an integer ranging from 2 to 16

**Default value**: **2**

## ss_scrlock_worker_bind_core  

**Parameter description:** Specifies the start and end CPUs used on the scrlock worker.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string in the format of *start CPU* *end CPU* \(separated by a space\), for example, **10 15**

**Default value**: **""**

>![](public_sys-resources/icon-note.gif) **NOTE:**
>-   This parameter can be left blank. In this case, the scrlock worker is not bound to any CPU.
>-   The value of start and end CPUs must be greater than or equal to 2.

## ss_scrlock_server_bind_core  

**Parameter description:** Specifies the start and end CPUs used on the scrlock server.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string in the format of *start CPU* *end CPU* \(separated by a space\), for example, **10 15**

**Default value**: **""**

>![](public_sys-resources/icon-note.gif) **NOTE:**
>This parameter can be left blank, which is equivalent to "0 0". That is, the scrlock server occupies CPU 0.
