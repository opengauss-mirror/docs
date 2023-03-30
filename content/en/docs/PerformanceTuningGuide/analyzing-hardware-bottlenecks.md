# Analyzing Hardware Bottlenecks<a name="EN-US_TOPIC_0245374520"></a>

The CPU, memory, I/O, and network resource usage of each node in openGauss are obtained to check whether these resources are fully used and whether any bottleneck exists.

-   **[CPU](cpu.md)**  
You can run the  **top**  command to check the CPU usage of each node in openGauss and analyze whether performance bottleneck caused by heavy CPU load exists.
-   **[Memory](memory.md)**  
Run the  **top**  command to check the memory usage of each node in openGauss and analyze whether a performance bottleneck occurs due to high memory usage.
-   **[I/O](i-o.md)**  
You can run the  **iostat**  or  **pidstat**  command, or use openGauss heath check tools to check the I/O usage and throughput on each node in openGauss and analyze whether performance bottleneck caused by I/O exists.
-   **[Network](network.md)**  
You can run the  **sar**  or  **ifconfig**  command to check the network status on each node in openGauss and analyze whether performance bottlenecks caused by network faults occur.

