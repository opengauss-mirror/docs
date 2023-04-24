# Resource Pooling Architecture

This document describes some best practices and precautions in the resource pooling architecture. Developers who are interested in related features can quickly deploy, practice, or perform customized development.
It is recommended that developers have at least basic knowledge, be proficient in compiling openGauss source code, and master basic storage knowledge and basic Linux commands.

The following figure shows the resource pooling architecture.

<p align="center"><b>Figure 1: openGauss resource pooling architecture</b></p>
<div align="center"><img src="figures/shared_storage.JPG"/></div>

- The read/write node and the read-only node share the same underlying storage.
- The read/write node and the read-only node use the DMS components to share hot data pages in the shared buffer pool through the TCP or RDMA protocol.
- The read/write node and the read-only node access persistent data in the underlying shared storage through DSS APIs and DSS servers.
