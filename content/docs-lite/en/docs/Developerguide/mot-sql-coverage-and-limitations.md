# MOT SQL Coverage and Limitations<a name="EN-US_TOPIC_0289900340"></a>

MOT design enables almost complete coverage of SQL and future feature sets. For example, standard Postgres SQL is mostly supported, as well common database features, such as stored procedures and user defined functions.

The following describes the various types of SQL coverages and limitations:

## Unsupported Features<a name="en-us_topic_0283137737_en-us_topic_0280525140_section59525326"></a>

The following features are not supported by MOT:

-   **Engine Interop:**  No cross-engine \(Disk+MOT\) queries, views or transactions. Planned for 2021.
-   **MVCC, Isolation:**  No snapshot/serializable isolation. Planned for 2021.
-   **Native Compilation \(JIT\)**: Limited SQL coverage. Also, JIT compilation of stored procedures is not supported.
-   LOCAL memory is limited to 1 GB. A transaction can only change data of less than 1 GB.
-   Capacity \(Data+Index\) is limited to available memory. Anti-caching + Data Tiering will be available in the future.
-   No full-text search index.
-   Logical replication is not supported.

In addition, the following are detailed lists of various general limitations of MOT tables, MOT indexes, Query and DML syntax and the features and limitations of Query Native Compilation.

## MOT Table Limitations<a name="en-us_topic_0283137737_en-us_topic_0280525140_section65965888"></a>

The following lists the functionality limitations of MOT tables:

-   Partition by range
-   AES encryption
-   Stream operations
-   User-defined types
-   Sub-transactions
-   DML triggers
-   DDL triggers

## Unsupported Table DDLs<a name="en-us_topic_0283137737_en-us_topic_0280525140_section56822082"></a>

-   Alter table
-   Create table, like including
-   Create table as select
-   Partition by range
-   Create table with no-logging clause
-   DEFERRABLE primary key
-   Reindex
-   Tablespace
-   Create schema with subcommands

## Unsupported Data Types<a name="en-us_topic_0283137737_en-us_topic_0280525140_section41636693"></a>

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

## Unsupported Index DDLs and Index<a name="en-us_topic_0283137737_en-us_topic_0280525140_section39185923"></a>

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

    <a name="en-us_topic_0283137737_en-us_topic_0280525140_table4434407"></a>
    <table><thead align="left"><tr id="en-us_topic_0283137737_en-us_topic_0280525140_row30989376"><th class="cellrowborder" valign="top" width="33.673367336733676%" id="mcps1.1.4.1.1"><p id="en-us_topic_0283137737_en-us_topic_0280525140_p27111510"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p27111510"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p27111510"></a>Column Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.673367336733676%" id="mcps1.1.4.1.2"><p id="en-us_topic_0283137737_en-us_topic_0280525140_p48548738"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p48548738"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p48548738"></a>Column Size</p>
    </th>
    <th class="cellrowborder" valign="top" width="32.653265326532654%" id="mcps1.1.4.1.3"><p id="en-us_topic_0283137737_en-us_topic_0280525140_p40133673"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p40133673"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p40133673"></a>Column Additional Size</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283137737_en-us_topic_0280525140_row29602101"><td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p48960014"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p48960014"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p48960014"></a>varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p6338203"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p6338203"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p6338203"></a>N</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p43632453"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p43632453"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p43632453"></a>4</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137737_en-us_topic_0280525140_row57147760"><td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p65565839"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p65565839"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p65565839"></a>tinyint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p9232767"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p9232767"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p9232767"></a>1</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p9656680"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p9656680"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p9656680"></a>1</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137737_en-us_topic_0280525140_row19801257"><td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p60397945"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p60397945"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p60397945"></a>smallint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p60395349"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p60395349"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p60395349"></a>2</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p60185126"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p60185126"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p60185126"></a>1</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137737_en-us_topic_0280525140_row4795230"><td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p52869369"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p52869369"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p52869369"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p54560509"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p54560509"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p54560509"></a>4</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p57325072"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p57325072"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p57325072"></a>1</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137737_en-us_topic_0280525140_row46163608"><td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p48264776"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p48264776"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p48264776"></a>longint</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p17132764"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p17132764"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p17132764"></a>8</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p45576637"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p45576637"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p45576637"></a>1</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137737_en-us_topic_0280525140_row7536549"><td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p6480739"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p6480739"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p6480739"></a>float</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p55177890"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p55177890"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p55177890"></a>4</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p40224138"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p40224138"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p40224138"></a>2</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137737_en-us_topic_0280525140_row26472924"><td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p63932115"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p63932115"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p63932115"></a>double</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p11118855"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p11118855"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p11118855"></a>8</p>
    </td>
    <td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137737_en-us_topic_0280525140_p28212063"><a name="en-us_topic_0283137737_en-us_topic_0280525140_p28212063"></a><a name="en-us_topic_0283137737_en-us_topic_0280525140_p28212063"></a>3</p>
    </td>
    </tr>
    </tbody>
    </table>


Types that are not specified in above table, the column additional size is zero \(for instance timestamp\).

## Unsupported DMLs<a name="en-us_topic_0283137737_en-us_topic_0280525140_section17128987"></a>

-   Merge into
-   Select into
-   Lock table
-   Copy from table

## Unsupported Queries for Native Compilation and Lite Execution<a name="en-us_topic_0283137737_en-us_topic_0280525140_section19943160"></a>

-   The query refers to more than two tables
-   The query has any one of the following attributes:
    -   Aggregation on non-primitive types
    -   Window functions
    -   Sub-query sub-links
    -   Distinct-ON modifier \(distinct clause is from DISTINCT ON\)
    -   Recursive \(WITH RECURSIVE was specified\)
    -   Modifying CTE \(has INSERT/UPDATE/DELETE in WITH\)


In addition, the following clauses disqualify a query from lite execution:

-   Returning list
-   Group By clause
-   Grouping sets
-   Having clause
-   Windows clause
-   Distinct clause
-   Sort clause that does not conform to native index order
-   Set operations
-   Constraint dependencies

