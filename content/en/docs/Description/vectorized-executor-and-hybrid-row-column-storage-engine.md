# Vectorized Executor and Hybrid Row-Column Storage Engine<a name="EN-US_TOPIC_0241663027"></a>

## Background<a name="en-us_topic_0237080624_en-us_topic_0231764690_en-us_topic_0059777898_section1514981833412"></a>

In a wide table containing a huge amount of data, a query usually only involves certain columns. In this case, the query performance of the row-store engine is poor. For example, a single table containing the data of a meteorological agency has 200 to 800 columns. Among these columns, only 10 are frequently accessed. In this case, a vectorized executor and column-store engine can significantly improve performance by saving storage space.

## Vectorized Executor<a name="en-us_topic_0237080624_en-us_topic_0231764690_en-us_topic_0059777898_sc7ffb91ad2b04b45866d53d9e9a44982"></a>

[Figure 1](#en-us_topic_0237080624_en-us_topic_0231764690_en-us_topic_0059777898_f9d90aebe179a40759039d0263492489d)  shows a standard vectorized executor. Control flow travels in the downlink direction \(shown as solid lines in the following figure\) and data flow in the uplink direction \(shown as dotted lines in the following figure\). The upper-layer node invokes the lower-layer node to request data and the lower-layer node only returns one tuple to the upper-layer node at a time.

By contrast, the vectorized executor returns a batch of tuples at a time, which significantly improves performance using column storage.

**Figure  1**  Vectorized executor<a name="en-us_topic_0237080624_en-us_topic_0231764690_en-us_topic_0059777898_f9d90aebe179a40759039d0263492489d"></a>  


![](figures/向量化执行引擎(png).png)

## Hybrid Row-Column Storage Engine<a name="en-us_topic_0237080624_en-us_topic_0231764690_en-us_topic_0059777898_s6432f6f4336745df9bb5fb9b5e86ed21"></a>

openGauss supports both row and column storage models. Choose a row- or column-store table as needed.

Column storage is recommended if a table contains many columns \(called a wide table\) but its query involves only a few columns. Row storage is recommended if a table contains only a few columns and a query involves most of the fields.

The hybrid row-column storage engine achieves higher data compression ratio \(column storage\), index performance \(column storage\), and point update and point query \(row storage\) performance, as shown in  [Figure 2](#en-us_topic_0237080624_en-us_topic_0231764690_en-us_topic_0059777898_fbb2af39ce12a419cb437829aaf1cf4fb).

**Figure  2**  Hybrid row-column storage engine<a name="en-us_topic_0237080624_en-us_topic_0231764690_en-us_topic_0059777898_fbb2af39ce12a419cb437829aaf1cf4fb"></a>  


![](figures/opengauss行列混存引擎.png)

The restrictions of the column storage engine are as follows:

-   For DDL statements, only CREATE TABLE, DROP TABLE, and TRUNCATE TABLE are supported.

    Partition management using DDL statements \(such as ADD PARTITION, DROP PARTITION, MERGE PARTITION, and EXCHANGE\) is supported.

    The  **CREATE TABLE LIKE**  statement is supported.

    The  **ALTER TABLE**  statement is partially supported.

    Other DDL statements are not supported.

-   For DML statements, UPDATE, COPY, BULKLOAD, and DELETE are supported.
-   Triggers and primary foreign keys are not supported.
-   Psort index, B-tree index, and GIN index are supported. For details, see "SQL Reference \> SQL Syntax \> CREATE INDEX" in the  _Developer Guide_.

## Data Compression in Column Storage<a name="en-us_topic_0237080624_en-us_topic_0231764690_en-us_topic_0059777898_s82570d067a0b46c9a0c7027af7d93df4"></a>

Old and inactive data can be compressed to free up space, reducing procurement and O&M costs.

In openGauss, data can be compressed using delta encoding, dictionary coder, RLE, LZ4, and ZLIB algorithms. The system automatically selects a compression algorithm based on data characteristics. The average compression ratio is 7:1. Compressed data can be directly accessed and is transparent to services. This greatly reduces the preparation time before accessing historical data.

