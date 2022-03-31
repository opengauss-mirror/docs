# Data Compression in OLTP Scenarios<a name="EN-US_TOPIC_0000001221740288"></a>

## Availability<a name="section15406143204715"></a>

This feature is available since openGauss 3.0.0.

## Introduction<a name="section740615433477"></a>

Row-store data compression is supported in OLTP scenarios and general compression algorithms are provided. Data pages are transparently compressed and page storage address files are added to achieve high compression and high performance.

## Benefits<a name="section1067215172372"></a>

Typically, this feature is applicable where the database disk space needs to be reduced.

## Description<a name="section1017916314374"></a>

Data compression in OLTP scenarios can reduce the disk space usage of row-store tables and index data and improve performance in I/O-intensive database systems.

## Constraints<a name="section1694165712371"></a>

Only row-store tables and B-tree indexes are supported. This feature cannot be used in the Ustore and segment-page storage engines.

Compressed table index files are accessed using memory-mapped \(mmap\).  **max\_map\_count**  must be set properly based on the number of compressed table files.

