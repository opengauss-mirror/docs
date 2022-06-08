# Data Compression in OLTP Scenarios<a name="EN-US_TOPIC_0000001265564497"></a>

## Availability<a name="section15406143204715"></a>

This feature is available since openGauss 3.0.0.

## Introduction<a name="section740615433477"></a>

The feature supports row-store data compression in OLTP scenarios, provides a general compression algorithm, and implements transparent compression of data pages and maintenance of page storage locations to achieve high compression and high performance. Disk persistence is implemented using two types of files: compressed address file \(with the file name extension .pca\) and compressed data file \(with the file name extension .pcd\).

## Benefits<a name="section1067215172372"></a>

Typically, it is applicable where the database disk space needs to be reduced.

## Description<a name="section1017916314374"></a>

Data compression in OLTP scenarios can reduce the disk storage space of row tables and index data and improve performance in I/O-intensive database systems.

## Constraints<a name="section1694165712371"></a>

- Only row-store tables and BTree indexes are supported. The feature cannot be used on Ustore and segment-page storage engines.

- Compressed table index files are accessed using mmap.  **max\_map\_count**  must be set properly based on the number of compressed table files.

