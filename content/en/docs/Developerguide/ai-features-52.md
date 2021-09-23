# AI Features<a name="EN-US_TOPIC_0000001108458456"></a>

## enable\_hypo\_index<a name="section76151259193016"></a>

**Parameter description**: Specifies whether the database optimizer considers the created virtual index when executing the  **EXPLAIN**  statement. By executing  **EXPLAIN**  on a specific query statement, you can evaluate whether the index can improve the execution efficiency of the query statement based on the execution plan provided by the optimizer.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that a virtual index is created during  **EXPLAIN**  execution.
-   **off**  indicates that no virtual index is created during  **EXPLAIN**  execution.

**Default value**:  **off**

## db4ai\_snapshot\_mode<a name="section16166168154212"></a>

**Parameter description**: There are two snapshot modes: MSS \(materialized mode, storing data entities\) and CSS \(computing mode, storing incremental information\).

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string, which can be  **MSS**  or  **CSS**

-   **MSS**  indicates the materialized mode. The DB4AI stores data entities when snapshots are created.
-   **CSS**  indicates the computing mode. The DB4AI stores incremental information when creating snapshots.

**Default value:** **MSS**

## db4ai\_snapshot\_version\_delimiter<a name="section254410351422"></a>

**Parameter description**: Specifies the delimiter for the snapshot version of a data table.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string, consisting of one or more characters.

**Default value**:  **@**

## db4ai\_snapshot\_version\_separator<a name="section337119550421"></a>

**Parameter description**: Specifies the subversion delimiter of a data table snapshot.

This parameter is a  **USERSET**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string, consisting of one or more characters.

**Default value**: .

## unix\_socket\_directory<a name="section138405824612"></a>

**Parameter description:**  Specifies the path for storing files in the unix\_socket communication mode. You can set this parameter only in the configuration file  **postgresql.conf**. Before enabling the fenced mode, you need to set this GUC parameter.

This parameter is a  **POSTMASTER**  parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string of 0 or more characters

**Default value:** **''**

