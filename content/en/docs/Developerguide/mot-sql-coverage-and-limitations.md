<<<<<<< HEAD
# MOT SQL Coverage and Limitations<a name="EN-US_TOPIC_0270171485"></a>

MOT design enables almost complete coverage of SQL and future feature sets. For example, standard Postgres SQL is mostly supported, as well common database features, such as stored procedures and user defined functions.

The following describes the various types of SQL coverages and limitations –

## Unsupported Features<a name="section1471016259373"></a>

The following features are not supported by MOT –

-   Engine Interop –  No cross-engine \(Disk+MOT\) queries, views or transactions. Planned for 2021.
-   MVCC, Isolation – No snapshot/serializable isolation. Planned for 2021.
-   Native Compilation \(JIT\)  –  Limited SQL coverage. Also, JIT compilation of stored procedures is not supported.
-   LOCAL memory is limited to 1 GB. A transaction can only change data of less than 1 GB.
-   Capacity \(Data+Index\) is limited to available memory. Anti-caching + Data Tiering will be available in the future.
-   No full-text search index.
-   Do not support Logical copy.

In addition, the following are detailed lists of various general limitations of MOT tables, MOT indexes, Query and DML syntax and the features and limitations of Query Native Compilation.

## MOT Table Limitations<a name="section14786645133713"></a>

The following lists the functionality limitations of MOT tables –

-   Partition by range
-   AES encryption
-   Stream operations
-   User-defined types
-   Sub-transactions
-   DML triggers
-   DDL triggers
-   Collations other than "C" or "POSIX"

## Unsupported Table DDLs<a name="section1072117103819"></a>

-   Alter table
-   Create table, like including
-   Create table as select
-   Partition by range
-   Create table with no-logging clause
-   DEFERRABLE primary key
-   Reindex
-   Tablespace
-   Create schema with subcommands

## Unsupported Data Types<a name="section3158172423814"></a>

-   UUID
-   User-Defined Type \(UDF\)
-   Array data type
-   NVARCHAR2\(n\)
-   Clob
-   Name
-   Blob
-   Raw
-   Path
-   Circle
-   Reltime
-   Bit varying\(10\)
-   Tsvector
-   Tsquery
-   JSON
-   Box
-   Text
-   Line
-   Point
-   LSEG
-   POLYGON
-   INET
-   CIDR
-   MACADDR
-   Smalldatetime
-   BYTEA
-   Bit
-   Varbit
-   OID
-   Money
-   Any unlimited varchar/character varying
-   HSTORE
-   XML

## UnsupportedIndex DDLs and Index<a name="section143421450173815"></a>

-   Create index on decimal/numeric
-   Create index on nullable columns
-   Create index, index per table \> 9
-   Create index on key size \> 256

    The key size includes the column size in bytes + a column additional size, which is an overhead required to maintain the index. The below table lists the column additional size for different column types.

    Additionally, in case of non-unique indexes an extra 8 bytes is required.

    Thus, the following pseudo code calculates the  **key size**:

    ```
    keySize =0;
     
    for each (column in index){
          keySize += (columnSize + columnAddSize);
    }
    if (index is non_unique) {
          keySize += 8;
    }
    ```

    <a name="table12338164993916"></a>
    <table><thead align="left"><tr id="row20518449193910"><th class="cellrowborder" valign="top" width="33.753375337533754%" id="mcps1.1.4.1.1"><p id="p11518349193912"><a name="p11518349193912"></a><a name="p11518349193912"></a>Column Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.39333933393339%" id="mcps1.1.4.1.2"><p id="p105181749143916"><a name="p105181749143916"></a><a name="p105181749143916"></a>Column Size</p>
    </th>
    <th class="cellrowborder" valign="top" width="32.853285328532856%" id="mcps1.1.4.1.3"><p id="p1518154915393"><a name="p1518154915393"></a><a name="p1518154915393"></a>Column Additional Size</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1351819494398"><td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.1.4.1.1 "><p id="p251844953911"><a name="p251844953911"></a><a name="p251844953911"></a>varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.1.4.1.2 "><p id="p3519349123919"><a name="p3519349123919"></a><a name="p3519349123919"></a>N</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.853285328532856%" headers="mcps1.1.4.1.3 "><p id="p1519174983919"><a name="p1519174983919"></a><a name="p1519174983919"></a>4</p>
    </td>
    </tr>
    <tr id="row7519194910392"><td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.1.4.1.1 "><p id="p135197497395"><a name="p135197497395"></a><a name="p135197497395"></a>tinyint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.1.4.1.2 "><p id="p17519104953916"><a name="p17519104953916"></a><a name="p17519104953916"></a>1</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.853285328532856%" headers="mcps1.1.4.1.3 "><p id="p12519114963915"><a name="p12519114963915"></a><a name="p12519114963915"></a>1</p>
    </td>
    </tr>
    <tr id="row145191491395"><td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.1.4.1.1 "><p id="p12519154983915"><a name="p12519154983915"></a><a name="p12519154983915"></a>smallint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.1.4.1.2 "><p id="p7520194912396"><a name="p7520194912396"></a><a name="p7520194912396"></a>2</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.853285328532856%" headers="mcps1.1.4.1.3 "><p id="p105200496393"><a name="p105200496393"></a><a name="p105200496393"></a>1</p>
    </td>
    </tr>
    <tr id="row9520124916396"><td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.1.4.1.1 "><p id="p14520194914396"><a name="p14520194914396"></a><a name="p14520194914396"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.1.4.1.2 "><p id="p4520114933914"><a name="p4520114933914"></a><a name="p4520114933914"></a>4</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.853285328532856%" headers="mcps1.1.4.1.3 "><p id="p45208498392"><a name="p45208498392"></a><a name="p45208498392"></a>1</p>
    </td>
    </tr>
    <tr id="row9520164918395"><td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.1.4.1.1 "><p id="p18521124912397"><a name="p18521124912397"></a><a name="p18521124912397"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.1.4.1.2 "><p id="p1652114973920"><a name="p1652114973920"></a><a name="p1652114973920"></a>8</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.853285328532856%" headers="mcps1.1.4.1.3 "><p id="p125211549133910"><a name="p125211549133910"></a><a name="p125211549133910"></a>1</p>
    </td>
    </tr>
    <tr id="row13521449103912"><td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.1.4.1.1 "><p id="p652174911399"><a name="p652174911399"></a><a name="p652174911399"></a>float</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.1.4.1.2 "><p id="p1522124915392"><a name="p1522124915392"></a><a name="p1522124915392"></a>4</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.853285328532856%" headers="mcps1.1.4.1.3 "><p id="p95221249163919"><a name="p95221249163919"></a><a name="p95221249163919"></a>2</p>
    </td>
    </tr>
    <tr id="row20522549163913"><td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.1.4.1.1 "><p id="p75224492396"><a name="p75224492396"></a><a name="p75224492396"></a>float8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.1.4.1.2 "><p id="p1152244910393"><a name="p1152244910393"></a><a name="p1152244910393"></a>8</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.853285328532856%" headers="mcps1.1.4.1.3 "><p id="p19522154933914"><a name="p19522154933914"></a><a name="p19522154933914"></a>3</p>
    </td>
    </tr>
    </tbody>
    </table>

    Types that are not specified in above table, the column additional size is zero \(for instance timestamp\).


## Unsupported DMLs<a name="section2069095112407"></a>

-   Merge into
-   Select into
-   Lock table
-   Copy from table
-   Upsert

## Unsupported Queries for Native Compilation and Lite Execution<a name="section4815162910417"></a>

-   The query refers to more than two tables
-   The query has any one of the following attributes –
    -   Aggregation on non-primitive types
    -   Window functions
    -   Sub-query sub-links
    -   Distinct-ON modifier \(distinct clause is from DISTINCT ON\)
    -   Recursive \(WITH RECURSIVE was specified\)
    -   Modifying CTE \(has INSERT/UPDATE/DELETE in WITH\)


In addition, the following clauses disqualify a query from lite execution –

-   Returning list
-   Group By clause
-   Grouping sets
-   Having clause
-   Windows clause
-   Distinct clause
-   Sort clause that does not conform to native index order
-   Set operations
-   Constraint dependencies
=======
# MOT SQL Coverage and Limitations<a name="EN-US_TOPIC_0270171485"></a>

MOT design enables almost complete coverage of SQL and future feature sets. For example, standard Postgres SQL is mostly supported, as well common database features, such as stored procedures and user defined functions.

The following describes the various types of SQL coverages and limitations –

## Unsupported Features<a name="section1471016259373"></a>

The following features are not supported by MOT –

-   Engine Interop –  No cross-engine \(Disk+MOT\) queries, views or transactions. Planned for 2021.
-   MVCC, Isolation – No snapshot/serializable isolation. Planned for 2021.
-   Native Compilation \(JIT\)  –  Limited SQL coverage. Also, JIT compilation of stored procedures is not supported.
-   LOCAL memory is limited to 1 GB. A transaction can only change data of less than 1 GB.
-   Capacity \(Data+Index\) is limited to available memory. Anti-caching + Data Tiering will be available in the future.
-   No full-text search index.
-   Do not support Logical copy.

In addition, the following are detailed lists of various general limitations of MOT tables, MOT indexes, Query and DML syntax and the features and limitations of Query Native Compilation.

## MOT Table Limitations<a name="section14786645133713"></a>

The following lists the functionality limitations of MOT tables –

-   Partitioning
-   AES encryption, row-level access control, dynamic data masking
-   Stream operations
-   User-defined types
-   Sub-transactions
-   DML triggers
-   DDL triggers
-   Collations other than "C" or "POSIX"

## Unsupported Table DDLs<a name="section1072117103819"></a>

-   Alter table
-   Create table, like including
-   Create table as select
-   Partition by range
-   Create table with no-logging clause
-   DEFERRABLE primary key
-   Reindex
-   Tablespace
-   Create schema with subcommands

## Unsupported Data Types<a name="section3158172423814"></a>

-   UUID
-   User-Defined Type \(UDF\)
-   Array data type
-   NVARCHAR2\(n\)
-   Clob
-   Name
-   Blob
-   Raw
-   Path
-   Circle
-   Reltime
-   Bit varying\(10\)
-   Tsvector
-   Tsquery
-   JSON
-   Box
-   Text
-   Line
-   Point
-   LSEG
-   POLYGON
-   INET
-   CIDR
-   MACADDR
-   Smalldatetime
-   BYTEA
-   Bit
-   Varbit
-   OID
-   Money
-   Any unlimited varchar/character varying
-   HSTORE
-   XML
-   Int16
-   Abstime
-   Tsrange
-   Tstzrange
-   Int8range
-   Int4range
-   Numrange
-   Daterange
-   HLL

## UnsupportedIndex DDLs and Index<a name="section143421450173815"></a>

-   Create index on decimal/numeric
-   Create index on nullable columns
-   Create index, index per table \> 9
-   Create index on key size \> 256

    The key size includes the column size in bytes + a column additional size, which is an overhead required to maintain the index. The below table lists the column additional size for different column types.

    Additionally, in case of non-unique indexes an extra 8 bytes is required.

    Thus, the following pseudo code calculates the  **key size**:

    ```
    keySize =0;
     
    for each (column in index){
          keySize += (columnSize + columnAddSize);
    }
    if (index is non_unique) {
          keySize += 8;
    }
    ```

    <a name="table12338164993916"></a>
    <table><thead align="left"><tr id="row20518449193910"><th class="cellrowborder" valign="top" width="33.753375337533754%" id="mcps1.1.4.1.1"><p id="p11518349193912"><a name="p11518349193912"></a><a name="p11518349193912"></a>Column Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.39333933393339%" id="mcps1.1.4.1.2"><p id="p105181749143916"><a name="p105181749143916"></a><a name="p105181749143916"></a>Column Size</p>
    </th>
    <th class="cellrowborder" valign="top" width="32.853285328532856%" id="mcps1.1.4.1.3"><p id="p1518154915393"><a name="p1518154915393"></a><a name="p1518154915393"></a>Column Additional Size</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1351819494398"><td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.1.4.1.1 "><p id="p251844953911"><a name="p251844953911"></a><a name="p251844953911"></a>varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.1.4.1.2 "><p id="p3519349123919"><a name="p3519349123919"></a><a name="p3519349123919"></a>N</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.853285328532856%" headers="mcps1.1.4.1.3 "><p id="p1519174983919"><a name="p1519174983919"></a><a name="p1519174983919"></a>4</p>
    </td>
    </tr>
    <tr id="row7519194910392"><td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.1.4.1.1 "><p id="p135197497395"><a name="p135197497395"></a><a name="p135197497395"></a>tinyint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.1.4.1.2 "><p id="p17519104953916"><a name="p17519104953916"></a><a name="p17519104953916"></a>1</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.853285328532856%" headers="mcps1.1.4.1.3 "><p id="p12519114963915"><a name="p12519114963915"></a><a name="p12519114963915"></a>1</p>
    </td>
    </tr>
    <tr id="row145191491395"><td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.1.4.1.1 "><p id="p12519154983915"><a name="p12519154983915"></a><a name="p12519154983915"></a>smallint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.1.4.1.2 "><p id="p7520194912396"><a name="p7520194912396"></a><a name="p7520194912396"></a>2</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.853285328532856%" headers="mcps1.1.4.1.3 "><p id="p105200496393"><a name="p105200496393"></a><a name="p105200496393"></a>1</p>
    </td>
    </tr>
    <tr id="row9520124916396"><td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.1.4.1.1 "><p id="p14520194914396"><a name="p14520194914396"></a><a name="p14520194914396"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.1.4.1.2 "><p id="p4520114933914"><a name="p4520114933914"></a><a name="p4520114933914"></a>4</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.853285328532856%" headers="mcps1.1.4.1.3 "><p id="p45208498392"><a name="p45208498392"></a><a name="p45208498392"></a>1</p>
    </td>
    </tr>
    <tr id="row9520164918395"><td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.1.4.1.1 "><p id="p18521124912397"><a name="p18521124912397"></a><a name="p18521124912397"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.1.4.1.2 "><p id="p1652114973920"><a name="p1652114973920"></a><a name="p1652114973920"></a>8</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.853285328532856%" headers="mcps1.1.4.1.3 "><p id="p125211549133910"><a name="p125211549133910"></a><a name="p125211549133910"></a>1</p>
    </td>
    </tr>
    <tr id="row13521449103912"><td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.1.4.1.1 "><p id="p652174911399"><a name="p652174911399"></a><a name="p652174911399"></a>float</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.1.4.1.2 "><p id="p1522124915392"><a name="p1522124915392"></a><a name="p1522124915392"></a>4</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.853285328532856%" headers="mcps1.1.4.1.3 "><p id="p95221249163919"><a name="p95221249163919"></a><a name="p95221249163919"></a>2</p>
    </td>
    </tr>
    <tr id="row20522549163913"><td class="cellrowborder" valign="top" width="33.753375337533754%" headers="mcps1.1.4.1.1 "><p id="p75224492396"><a name="p75224492396"></a><a name="p75224492396"></a>float8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.39333933393339%" headers="mcps1.1.4.1.2 "><p id="p1152244910393"><a name="p1152244910393"></a><a name="p1152244910393"></a>8</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.853285328532856%" headers="mcps1.1.4.1.3 "><p id="p19522154933914"><a name="p19522154933914"></a><a name="p19522154933914"></a>3</p>
    </td>
    </tr>
    </tbody>
    </table>

    Types that are not specified in above table, the column additional size is zero \(for instance timestamp\).


## Unsupported DMLs<a name="section2069095112407"></a>

-   Merge into
-   Select into
-   Lock table
-   Copy from table
-   Upsert

## Unsupported Queries for Native Compilation and Lite Execution<a name="section4815162910417"></a>

-   The query refers to more than two tables
-   The query has any one of the following attributes –
    -   Aggregation on non-primitive types
    -   Window functions
    -   Sub-query sub-links
    -   Distinct-ON modifier \(distinct clause is from DISTINCT ON\)
    -   Recursive \(WITH RECURSIVE was specified\)
    -   Modifying CTE \(has INSERT/UPDATE/DELETE in WITH\)


In addition, the following clauses disqualify a query from lite execution –

-   Returning list
-   Group By clause
-   Grouping sets
-   Having clause
-   Windows clause
-   Distinct clause
-   Sort clause that does not conform to native index order
-   Set operations
-   Constraint dependencies

>>>>>>> 49fc616318ac81e3dee043a978510420d3c96db4
