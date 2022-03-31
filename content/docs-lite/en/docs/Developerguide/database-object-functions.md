# Database Object Functions<a name="EN-US_TOPIC_0289900989"></a>

## Database Object Size Functions<a name="en-us_topic_0283137585_en-us_topic_0237121994_en-us_topic_0059778344_s68d3a043cae24a8ab0446b5c58c024f6"></a>

Database object size functions calculate the actual disk space used by database objects.

-   pg\_column\_size\(any\)

    Description: Specifies the number of bytes used to store a particular value \(possibly compressed\)

    Return type: int

    Note:  **pg\_column\_size**  displays the space for storing an independent data value.

    ```
    openGauss=# SELECT pg_column_size(1);
     pg_column_size 
    ----------------
                  4
    (1 row)
    ```

-   pg\_database\_size\(oid\)

    Description: Specifies the disk space used by the database with the specified OID.

    Return type: bigint

-   pg\_database\_size\(name\)

    Description: Specifies the disk space used by the database with the specified name.

    Return type: bigint

    Note:  **pg\_database\_size**  receives the OID or name of a database and returns the disk space used by the corresponding object.

    Example:

    ```
    openGauss=# SELECT pg_database_size('postgres');
     pg_database_size 
    ------------------
             51590112
    (1 row)
    ```

-   pg\_relation\_size\(oid\)

    Description: Specifies the disk space used by the table with a specified OID or index.

    Return type: bigint

-   get\_db\_source\_datasize\(\)

    Description: Estimates the total size of non-compressed data in the current database.

    Return type: bigint

    Remarks: \(1\) Perform an analysis before this function is called. \(2\) Calculate the total data capacity in the non-compressed state by estimating the compression rate of the column-store tables.

    Example:

    ```
    openGauss=# analyze;
    ANALYZE
    openGauss=# select get_db_source_datasize();
     get_db_source_datasize
    ------------------------
                35384925667
    (1 row)
    ```

-   pg\_relation\_size\(text\)

    Description: Specifies the disk space used by the table with a specified name or index. The table name can be schema-qualified.

    Return type: bigint

-   pg\_relation\_size\(relation regclass, fork text\)

    Description: Specifies the disk space used by the specified bifurcating tree \('main', 'fsm', or 'vm'\) of a certain table or index.

    Return type: bigint

-   pg\_relation\_size\(relation regclass\)

    Description: Is an abbreviation of  **pg\_relation\_size\(..., 'main'\)**.

    Return type: bigint

    Note:  **pg\_relation\_size**  receives the OID or name of a table, an index, or a compressed table, and returns the size.

-   pg\_partition\_size\(oid,oid\)

    Description: Specifies the disk space used by the partition with a specified OID. The first  **oid**  is the OID of the table and the second  **oid**  is the OID of the partition.

    Return type: bigint

-   pg\_partition\_size\(text, text\)

    Description: Specifies the disk space used by the partition with a specified name. The first  **text**  is the table name and the second  **text**  is the partition name.

    Return type: bigint

-   pg\_partition\_indexes\_size\(oid,oid\)

    Description: Specifies the disk space used by the index of the partition with a specified OID. The first  **oid**  is the OID of the table and the second  **oid**  is the OID of the partition.

    Return type: bigint

-   pg\_partition\_indexes\_size\(text,text\)

    Description: Specifies the disk space used by the index of the partition with a specified name. The first  **text**  is the table name and the second  **text**  is the partition name.

    Return type: bigint

-   pg\_indexes\_size\(regclass\)

    Description: Specifies the total disk space used by the index appended to the specified table.

    Return type: bigint

-   pg\_size\_pretty\(bigint\)

    Description: Converts a size in bytes expressed as a 64-bit integer into a human-readable format with size units.

    Return type: text

-   pg\_size\_pretty\(numeric\)

    Description: Converts a size in bytes expressed as a numeric value into a human-readable format with size units.

    Return type: text

    Note:  **pg\_size\_pretty**  formats the results of other functions into a human-readable format. KB/MB/GB/TB can be used.

-   pg\_table\_size\(regclass\)

    Description: Specifies the disk space used by the specified table, excluding indexes \(but including TOAST, free space mapping, and visibility mapping\).

    Return type: bigint

-   pg\_tablespace\_size\(oid\)

    Description: Specifies the disk space used by the tablespace with a specified OID.

    Return type: bigint

-   pg\_tablespace\_size\(name\)

    Description: Specifies the disk space used by the tablespace with a specified name.

    Return type: bigint

    Note:

    **pg\_tablespace\_size**  receives the OID or name of a database and returns the disk space used by the corresponding object.

-   pg\_total\_relation\_size\(oid\)

    Description: Specifies the disk space used by the table with a specified OID, including the index and the compressed data.

    Return type: bigint

-   pg\_total\_relation\_size\(regclass\)

    Description: Specifies the total disk space used by the specified table, including all indexes and TOAST data.

    Return type: bigint

-   pg\_total\_relation\_size\(text\)

    Description: Specifies the disk space used by the table with a specified name, including the index and the compressed data. The table name can be schema-qualified.

    Return type: bigint

    Note:  **pg\_total\_relation\_size**  receives the OID or name of a table or a compressed table, and returns the sizes of the data, related indexes, and the compressed table in bytes.

-   datalength\(any\)

    Description: Specifies the number of bytes used by an expression of a specified data type \(data management space, data compression, or data type conversion is not considered\).

    Return type: int

    Note:  **datalength**  is used to calculate the space of an independent data value.

    Example:

    ```
    openGauss=# SELECT datalength(1);
    datalength
    ------------
    4
    (1 row)
    ```

    The following table lists the supported data types and calculation methods.

    <a name="en-us_topic_0283137585_en-us_topic_0237121994_table1693802413208"></a>
    <table><tbody><tr id="en-us_topic_0283137585_en-us_topic_0237121994_row173178255209"><td class="cellrowborder" colspan="3" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p14317192572018"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p14317192572018"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p14317192572018"></a>Data Type</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p153171025152015"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p153171025152015"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p153171025152015"></a>Storage Space</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row1231782517201"><td class="cellrowborder" rowspan="19" valign="top" width="13.451345134513451%"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1031752518206"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1031752518206"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1031752518206"></a>Numeric data types</p>
    </td>
    <td class="cellrowborder" rowspan="5" valign="top" width="10.181018101810182%"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p931712519204"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p931712519204"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p931712519204"></a>Integer types</p>
    </td>
    <td class="cellrowborder" valign="top" width="40.46404640464046%"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p148829553398"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p148829553398"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p148829553398"></a>TINYINT</p>
    </td>
    <td class="cellrowborder" valign="top" width="35.9035903590359%"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p7317192516202"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p7317192516202"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p7317192516202"></a>1</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row173171325102016"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p531819252202"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p531819252202"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p531819252202"></a>SMALLINT</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p7318172512019"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p7318172512019"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p7318172512019"></a>2</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row183184252201"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p18318202510206"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p18318202510206"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p18318202510206"></a>INTEGER</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p11318202519204"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p11318202519204"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p11318202519204"></a>4</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row143181425162014"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1793274415404"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1793274415404"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1793274415404"></a>BINARY_INTEGER</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p12318162552010"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p12318162552010"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p12318162552010"></a>4</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row4318172582019"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p13318122512016"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p13318122512016"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p13318122512016"></a>BIGINT</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p14319825172019"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p14319825172019"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p14319825172019"></a>8</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row1331915259201"><td class="cellrowborder" rowspan="3" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p631913257206"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p631913257206"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p631913257206"></a>Arbitrary precision types</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p4319125142010"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p4319125142010"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p4319125142010"></a>DECIMAL</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p3319162516206"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p3319162516206"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p3319162516206"></a>Every four decimal digits occupy two bytes. The digits before and after the decimal point are calculated separately.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row5452816183215"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1345381614328"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1345381614328"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1345381614328"></a>NUMERIC</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p154531816103217"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p154531816103217"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p154531816103217"></a>Every four decimal digits occupy two bytes. The digits before and after the decimal point are calculated separately.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row10502162383218"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p6503323173219"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p6503323173219"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p6503323173219"></a>NUMBER</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1050320236328"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1050320236328"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1050320236328"></a>Every four decimal digits occupy two bytes. The digits before and after the decimal point are calculated separately.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row20319172511201"><td class="cellrowborder" rowspan="4" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p173191125172014"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p173191125172014"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p173191125172014"></a>Sequence integer</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p932015251201"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p932015251201"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p932015251201"></a>SMALLSERIAL</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p832032542017"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p832032542017"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p832032542017"></a>2</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row132082592016"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p16320725142012"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p16320725142012"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p16320725142012"></a>SERIAL</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p532018255209"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p532018255209"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p532018255209"></a>4</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row1732002532011"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p132042517209"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p132042517209"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p132042517209"></a>BIGSERIAL</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p2320425202019"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p2320425202019"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p2320425202019"></a>8</p>
    </td>
    </tr>
    <tr id="row184433114514"><td class="cellrowborder" valign="top"><p id="p104473114450"><a name="p104473114450"></a><a name="p104473114450"></a>LARGESERIAL</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="p74443111457"><a name="p74443111457"></a><a name="p74443111457"></a>Every four decimal digits occupy two bytes. The digits before and after the decimal point are calculated separately.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row73201825112016"><td class="cellrowborder" rowspan="7" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p2320625122011"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p2320625122011"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p2320625122011"></a>Floating point types</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1321142532013"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1321142532013"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1321142532013"></a>FLOAT4</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p032162510205"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p032162510205"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p032162510205"></a>4</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row16321102582019"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1532162513201"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1532162513201"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1532162513201"></a>DOUBLE PRECISION</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p83219255203"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p83219255203"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p83219255203"></a>8</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row4955357317"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1139918585410"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1139918585410"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1139918585410"></a>FLOAT8</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p7956145143114"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p7956145143114"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p7956145143114"></a>8</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row1832132515207"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p8321132542015"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p8321132542015"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p8321132542015"></a>BINARY_DOUBLE</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p18321525112014"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p18321525112014"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p18321525112014"></a>8</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row16321122517203"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p33211325182012"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p33211325182012"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p33211325182012"></a>FLOAT[(p)]</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1932162519200"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1932162519200"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1932162519200"></a>Every four decimal digits occupy two bytes. The digits before and after the decimal point are calculated separately.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row17321112514209"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p19322325182015"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p19322325182015"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p19322325182015"></a>DEC[(p[,s])]</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p143221253206"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p143221253206"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p143221253206"></a>Every four decimal digits occupy two bytes. The digits before and after the decimal point are calculated separately.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row153225259200"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p53226258209"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p53226258209"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p53226258209"></a>INTEGER[(p[,s])]</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1732232519208"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1732232519208"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1732232519208"></a>Every four decimal digits occupy two bytes. The digits before and after the decimal point are calculated separately.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row12322525132014"><td class="cellrowborder" valign="top" width="13.451345134513451%"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p932242542013"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p932242542013"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p932242542013"></a>Boolean data types</p>
    </td>
    <td class="cellrowborder" valign="top" width="10.181018101810182%"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p14322625182019"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p14322625182019"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p14322625182019"></a>Boolean type</p>
    </td>
    <td class="cellrowborder" valign="top" width="40.46404640464046%"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p4322325102014"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p4322325102014"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p4322325102014"></a>BOOLEAN</p>
    </td>
    <td class="cellrowborder" valign="top" width="35.9035903590359%"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p332362520201"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p332362520201"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p332362520201"></a>1</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row632372552018"><td class="cellrowborder" rowspan="12" valign="top" width="13.451345134513451%"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p932318250202"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p932318250202"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p932318250202"></a>Character data types</p>
    </td>
    <td class="cellrowborder" rowspan="12" valign="top" width="10.181018101810182%"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p103231025122013"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p103231025122013"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p103231025122013"></a>Character types</p>
    </td>
    <td class="cellrowborder" valign="top" width="40.46404640464046%"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p16323182552016"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p16323182552016"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p16323182552016"></a>CHAR</p>
    </td>
    <td class="cellrowborder" valign="top" width="35.9035903590359%"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p12323225142019"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p12323225142019"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p12323225142019"></a>n</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row1258710183282"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p55872189286"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p55872189286"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p55872189286"></a>CHAR(n)</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p11587171862813"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p11587171862813"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p11587171862813"></a>n</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row963314442819"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p16634104162812"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p16634104162812"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p16634104162812"></a>CHARACTER(n)</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p136342416284"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p136342416284"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p136342416284"></a>n</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row973075872713"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p982433632815"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p982433632815"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p982433632815"></a>NCHAR(n)</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p373018584279"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p373018584279"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p373018584279"></a>n</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row9951131042914"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1095212101299"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1095212101299"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1095212101299"></a>VARCHAR(n)</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p15952121092913"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p15952121092913"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p15952121092913"></a>n</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row13241625102014"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p932432511204"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p932432511204"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p932432511204"></a>CHARACTER</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p16324142517204"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p16324142517204"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p16324142517204"></a>Actual number of bytes of a character</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row9217112816251"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p16286183762516"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p16286183762516"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p16286183762516"></a>VARYING(n)</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1093074818269"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1093074818269"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1093074818269"></a>Actual number of bytes of a character</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row232432518204"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p14324725102011"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p14324725102011"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p14324725102011"></a>VARCHAR2(n)</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p832582582011"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p832582582011"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p832582582011"></a>Actual number of bytes of a character</p>
    </td>
    </tr>
    <tr id="row117175318489"><td class="cellrowborder" valign="top"><p id="p194831358491"><a name="p194831358491"></a><a name="p194831358491"></a>NVARCHAR(n)</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="p1748319512492"><a name="p1748319512492"></a><a name="p1748319512492"></a>Actual number of bytes of a character</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row143254257202"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1832592522014"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1832592522014"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1832592522014"></a>NVARCHAR2(n)</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p12325142510204"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p12325142510204"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p12325142510204"></a>Actual number of bytes of a character</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row9325025102018"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p185492010134319"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p185492010134319"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p185492010134319"></a>TEXT</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p232517255209"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p232517255209"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p232517255209"></a>Actual number of bytes of a character</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row8679132173014"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1749716412438"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1749716412438"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1749716412438"></a>CLOB</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p16808171613302"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p16808171613302"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p16808171613302"></a>Actual number of bytes of a character</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row1032612542012"><td class="cellrowborder" rowspan="11" valign="top" width="13.451345134513451%"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p032618254204"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p032618254204"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p032618254204"></a>Time data types</p>
    </td>
    <td class="cellrowborder" rowspan="11" valign="top" width="10.181018101810182%"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p232615256204"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p232615256204"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p232615256204"></a>Time types</p>
    </td>
    <td class="cellrowborder" valign="top" width="40.46404640464046%"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p16232489438"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p16232489438"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p16232489438"></a>DATE</p>
    </td>
    <td class="cellrowborder" valign="top" width="35.9035903590359%"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1327202522010"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1327202522010"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1327202522010"></a>8</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row5327125152015"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1839195214316"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1839195214316"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1839195214316"></a>TIME</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p3327132512206"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p3327132512206"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p3327132512206"></a>8</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row532715255207"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p178185819431"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p178185819431"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p178185819431"></a>TIMEZ</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p11327125102014"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p11327125102014"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p11327125102014"></a>12</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row16327182519206"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p7261197134418"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p7261197134418"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p7261197134418"></a>TIMESTAMP</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p19327142542018"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p19327142542018"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p19327142542018"></a>8</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row53281225172014"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1587102415446"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1587102415446"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1587102415446"></a>TIMESTAMPZ</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p432832515209"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p432832515209"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p432832515209"></a>8</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row332812259202"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p5328025182010"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p5328025182010"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p5328025182010"></a>SMALLDATETIME</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p19328182542013"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p19328182542013"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p19328182542013"></a>8</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row032812255208"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p2032820250202"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p2032820250202"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p2032820250202"></a>INTERVAL DAY TO SECOND</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1328625192014"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1328625192014"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1328625192014"></a>16</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row1332882522019"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p19541104314415"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p19541104314415"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p19541104314415"></a>INTERVAL</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p13281925172015"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p13281925172015"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p13281925172015"></a>16</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row132832512202"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1156352154417"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1156352154417"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1156352154417"></a>RELTIME</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p2329625172017"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p2329625172017"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p2329625172017"></a>4</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row1532915253209"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p051309455"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p051309455"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p051309455"></a>ABSTIME</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p11329162512016"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p11329162512016"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p11329162512016"></a>4</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137585_en-us_topic_0237121994_row163293257203"><td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p1125781313457"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1125781313457"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p1125781313457"></a>TINTERVAL</p>
    </td>
    <td class="cellrowborder" valign="top"><p id="en-us_topic_0283137585_en-us_topic_0237121994_p732922552018"><a name="en-us_topic_0283137585_en-us_topic_0237121994_p732922552018"></a><a name="en-us_topic_0283137585_en-us_topic_0237121994_p732922552018"></a>12</p>
    </td>
    </tr>
    </tbody>
    </table>


## Database Object Position Functions<a name="en-us_topic_0283137585_en-us_topic_0237121994_en-us_topic_0059778344_sf54a0e1472764b91bf4bea25ffb4e050"></a>

-   pg\_relation\_filenode\(relation regclass\)

    Description: Specifies the ID of a filenode with the specified relationship.

    Return type: oid

    Description:  **pg\_relation\_filenode**  receives the OID or name of a table, an index, a sequence, or a compressed table, and returns the number of  **filenode**  allocated to it.  **filenode**  is the basic component of the file name used by the relationship. For most tables, the result is the same as that of  **pg\_class.relfilenode**. For a specified system directory,  **relfilenode**  is set to  **0**  and this function must be used to obtain the correct value. If a relationship that is not stored is transmitted, such as a view, this function returns  **NULL**.

-   pg\_relation\_filepath\(relation regclass\)

    Description: Specifies the name of a file path with the specified relationship.

    Return type: text

    Description:  **pg\_relation\_filepath**  is similar to  **pg\_relation\_filenode**, except that  **pg\_relation\_filepath**  returns the whole file path name for the relationship \(relative to the data directory  **PGDATA**  of openGauss\).

-   pg\_filenode\_relation\(tablespace oid, filenode oid\)

    Description: Obtains the table names corresponding to the tablespace and relfilenode.

    Return type: regclass

-   pg\_partition\_filenode\(partition\_oid\)

    Description: Obtains  **filenode**  corresponding to the OID lock of a specified partitioned table.

    Return type: oid

-   pg\_partition\_filepath\(partition\_oid\)

    Description: Specifies the file path name of a partition.

    Return type: text


## Recycle Bin Object Functions<a name="section94402101427"></a>

-   gs\_is\_recycle\_object\(classid, objid, objname\)

    Description: Determines whether an object is in the recycle bin.

    Return type: Boolean


