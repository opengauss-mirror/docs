# Known Issues<a name="EN-US_TOPIC_0289899194"></a>

-   openGauss cannot monitor file permissions and slow disks. When the file permission is abnormal, the database exits and the corresponding information is recorded in logs. On a slow disk, the response to database operations is slower than usual.

-   The read-only mode of the standby node and cascaded standby node is incompatible with the ultimate RTO feature. If the ultimate RTO feature is enabled, disable the read-only mode of the standby node and cascaded standby node.

-   Memory Optimized Tables \(MOTs\) are incompatible with the incremental checkpoint feature. If MOTs are used, disable the incremental checkpoint function.

-   LLVM does not support the ARM architecture. When the MOT TPC-C is imported, an LLVM error is reported. To avoid this problem, disable the JIT function using the  **enable\_mot\_codegen**  parameter. You can configure  **force\_mot\_pseudo\_codegen= true**  to reduce the impact on TPC-C test performance when the JIT function is disabled.

