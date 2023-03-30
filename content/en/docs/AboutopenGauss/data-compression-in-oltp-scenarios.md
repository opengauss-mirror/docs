# Data Compression in OLTP Scenarios<a name="EN-US_TOPIC_0000001265564497"></a>

## Availability<a name="section15406143204715"></a>

This feature is available since openGauss 3.0.0.

In openGauss 3.1.0, the PCA and PCD files are integrated into one file. The PCA file is loaded and eliminated independently and does not depend on the mmap operation. The chunk shrinking operation is added.

## Introduction<a name="section740615433477"></a>

The feature supports row-store data compression in OLTP scenarios, provides a general compression algorithm, and implements transparent compression of data pages and maintenance of page storage locations to achieve high compression and high performance. The disk usage of the database is improved.

## Benefits<a name="section1067215172372"></a>

Typically, it is applicable where the database disk space needs to be reduced.

## Description<a name="section1017916314374"></a>

Data compression in OLTP scenarios can reduce the disk storage space of row tables and index data and improve performance in I/O-intensive database systems.

## Constraints<a name="section1694165712371"></a>

- Only heap-based data tables can be compressed, that is, common row-store tables and B-tree indexes can be compressed.
- The operating system must support the punch hole operation.
- The data backup media must support the punch hole operation.
- Compression-related parameters cannot be modified, and uncompressed tables cannot be converted to compressed tables.
- Compression and decompression affect the CPU and performance. The advantages are as follows: The disk storage capability is improved, the disk usage is improved, the disk I/O is reduced, and the disk I/O pressure is reduced.

## Dependency

- The database must support the double-write operation.
- The open-source compression algorithms PGLZ and ZSTD are used for compression.
