# Disk/SSD<a name="EN-US_TOPIC_0257867357"></a>

The following describes how to ensure that disk R/W performance is suitable for database synchronous commit mode.

To do so, test your disk bandwidth using the following:

```
[...]$ sync; dd if=/dev/zero of=testfile bs=1M count=1024; sync
1024+0 records in
1024+0 records out
1073741824 bytes (1.1 GB) copied, 1.36034 s, 789 MB/s 
```

In case the disk bandwidth is significantly below the above number \(789 MB/s\), it may create a performance bottleneck for openGauss, and especially for MOT.

