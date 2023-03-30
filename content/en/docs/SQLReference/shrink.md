# SHRINK<a name="ZH-CN_TOPIC_0000001382191657"></a>

## Function<a name="en-us_topic_0283137477_en-us_topic_0237122196_en-us_topic_0059779241_s25c2a01507274648bf05cbcb1dc418bf"></a>

Shrinks chunks in a specified compressed table to facilitate page read and write.

## Precautions<a name="en-us_topic_0283137477_en-us_topic_0237122196_en-us_topic_0059779241_s60091e11d710468f8772f6732699506b"></a>

-   The shrink operation is performed only on the primary node and cannot be manually performed on the standby node.
-   The shrink operation time is related to the current CPU usage and table size.
-   Shrink is an optimization operation. If the database is abnormal during optimization, the optimization will not continue after the database is restarted.

## Syntax<a name="en-us_topic_0283137477_en-us_topic_0237122196_en-us_topic_0059779241_sb9827c497faf4cc490614f51246dbc5b"></a>

```
SHRINK TABLE table_name [nowait];
SHRINK INDEX index_name [nowait];
```

## Parameter Description<a name="en-us_topic_0283137477_en-us_topic_0237122196_en-us_topic_0059779241_s0a4a952823114ec6bfe2864b0af1db2f"></a>

-   nowait

    Indicates that a task is returned immediately after being initiated without waiting for the sorting result. The daemon thread periodically wakes up to sort the tasks added by shrink.


## Example<a name="en-us_topic_0283137477_en-us_topic_0237122196_en-us_topic_0059779241_sdb42dc749d654038b498d0f77883ae8a"></a>

The following uses SHRINK TABLE as an example. The operation of SHRINK INDEX is the same as that of SHRINK TABLE.

```
--Create the row_compression table.
openGauss=# CREATE TABLE row_compression
(
    id int
) with (compresstype=2, compress_chunk_size = 512, compress_level = 1);

--Insert data.
openGauss=# Insert into row_compression select generate_series(1,1000);

--View data.
openGauss=# SELECT * FROM row_compression;

--Shrink the table.
openGauss=# SHRINK TABLE row_compression;

--Delete the table.
openGauss=# DROP TABLE row_compression;
```
