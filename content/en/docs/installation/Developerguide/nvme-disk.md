# NVMe Disk<a name="EN-US_TOPIC_0257867362"></a>

## Settings<a name="en-us_topic_0257713365_section12232125112298"></a>

1.  Format a partition, as follows –  **mkfs.xfs -f -b size=8192 -s size=512 /dev/nvme0n1p1.**
2.  Mount options – IS SOMETHING MISSING GGG
3.  Add the following to the kernel – cmdline  **scsi\_mod.use\_blk\_mq=1**  in order to enable BFQ. BFQ is a blk-mq \(Multi-Queue Block IO Queueing Mechanism\) scheduler.

