# Disk Space<a name="EN-US_TOPIC_0289899840"></a>

This section describes the disk space parameters, which are used to set limits on the disk space for storing temporary files.

## sql\_use\_spacelimit<a name="en-us_topic_0283136725_en-us_topic_0237124700_en-us_topic_0059777577_s43b2a38b07f647039f73f31d71db7b26"></a>

**Parameter description**: Specifies the space size for files to be flushed to disks when a single SQL statement is executed on a single database node. The managed space includes the space occupied by ordinary tables, temporary tables, and intermediate result sets to be flushed to disks.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from –1 to 2147483647. The unit is KB.  **–1**  indicates no limit.

**Default value:** **–1**

## temp\_file\_limit<a name="en-us_topic_0283136725_en-us_topic_0237124700_en-us_topic_0059778485_s9b5f5f38370448ee8aa44940c3aaf6dc"></a>

**Parameter description**: Specifies the limit on the size of a temporary file spilled to disk in a session. The temporary file can be a sort or hash temporary file, or the storage file for a held cursor.

This is a session-level setting.

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>This parameter does not apply to disk space used for temporary tables during the SQL query process.

**Value range**: an integer ranging from –1 to 2147483647. The unit is KB.  **–1**  indicates no limit.

**Default value**:  **–1**

