# High Concurrency and High Performance<a name="EN-US_TOPIC_0241663031"></a>

openGauss supports 10,000 concurrent connections through server thread pools; supports thread affinity and millions of tpmC using the NUMA-based kernel data structure; manages TB-level large memory buffers through efficient hot and cold data elimination; achieves multiversion access without read/write blocks using CSN-based snapshots; avoids performance fluctuation caused by full-page writes using incremental checkpoints.

