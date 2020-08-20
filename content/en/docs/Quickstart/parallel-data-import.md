# Parallel Data Import<a name="EN-US_TOPIC_0251900933"></a>

openGauss provides a parallel data import function that enables a large amount of data to be imported in a fast and efficient manner. This section describes parameters for importing data in parallel.

## raise\_errors\_if\_no\_files<a name="en-us_topic_0242371495_en-us_topic_0237124705_en-us_topic_0059778176_s944f6b2b59f4449c82c1ff18ac9f306b"></a>

**Parameter description**: Specifies whether to distinguish between the problems "the number of imported file records is empty" and "the imported file does not exist". If this parameter is set to  **on**  and the problem "the imported file does not exist" occurs, openGauss will report the error message "file does not exist".

This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that the messages of "the number of imported file records is empty" and "the imported file does not exist" are distinguished when files are imported.
-   **off**  indicates that the messages of "the number of imported file records is empty" and "the imported file does not exist" are the same when files are imported.

**Default value**:  **off**

## partition\_mem\_batch<a name="en-us_topic_0242371495_en-us_topic_0237124705_en-us_topic_0059778176_s7e110158241a42338a7a457d4173c957"></a>

**Parameter description**: In order to optimize the inserting of column-store partitioned tables in batches, the data is buffered during the inserting process and then written in the disk. You can specify the number of caches through  **partition\_mem\_batch**. If the value is too large, much memory will be consumed. If it is too small, the performance of inserting column-store partitioned tables in batches will deteriorate.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: 1 to 65535

**Default value**:  **256**

## partition\_max\_cache\_size<a name="en-us_topic_0242371495_en-us_topic_0237124705_en-us_topic_0059778176_saa91190efc2a417a93ecfaba28b91624"></a>

**Parameter description**: In order to optimize the inserting of column-store partitioned tables in batches, the data is buffered during the inserting process and then written in the disk. You can specify the data buffer cache size through  **partition\_max\_cache\_size**. If the value is too large, much memory will be consumed. If it is too small, the performance of inserting column-store partitioned tables in batches will deteriorate.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**:

4096 to  _INT\_MAX_/2. The unit is KB.

**Default value**:  **2GB**

## enable\_delta\_store<a name="en-us_topic_0242371495_en-us_topic_0237124705_section1035224982816"></a>

**Parameter description**: Specifies whether to enable delta tables for column-store tables. Delta tables will improve the performance of importing a single piece of data to a column-store table and prevent table bloating. If this parameter is set to  **on**, data to be imported to a column-store table will be stored in the delta table when the data volume is less than  **[DELTAROW\_THRESHOLD](en-us_topic_0242370581.md#en-us_topic_0237122117_en-us_topic_0059778169_lb0b5377e83534b3eac0e425f44b60166)**  specified in table definition and otherwise will be stored in CUs of the main table. This parameter affects all operations involving data transfer of column-store tables, including  **INSERT**,  **COPY**,  **VACUUM**,  **VACUUM FULL**,  **VACUUM DELTAMERGE**, and data redistribution.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0242370406_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**:

-   **on**  indicates that delta tables are enabled.
-   **off**  indicates that delta tables are disabled.

**Default value**:  **off**

