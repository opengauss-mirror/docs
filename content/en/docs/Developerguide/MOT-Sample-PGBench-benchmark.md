# MOT Sample PGBench benchmark

**pgbench** is a simple program for running benchmark tests on PostgreSQL. It runs the same sequence of SQL commands over and over, possibly in multiple concurrent database sessions, and then calculates the average transaction rate (transactions per second or TPS). By default, pgbench tests a scenario that is loosely based on TPC-B, involving five SELECT, UPDATE, and INSERT commands per transaction.

To support the optimistic concurrency control (OCC) of the openGauss MOT several minor changes were applied to the standard **pgbench**. The enhanced utility is released as part of the openGauss code under the contrib** folder.

A pgbench benchmark (26/08/2020) showed that MOT engine outperforms the Disk-engine by factor of x2.4-2.8 times, both higher TPS and lower Latency.

+ Hardware tested: 2-socket 72 cores x86 server (Intel Xeon Gold 6154 CPU @ 3GHz)

+ Test Parameters: Transaction=TPCB; Scaling Factor = 100 ;Query Protocol=Prepared