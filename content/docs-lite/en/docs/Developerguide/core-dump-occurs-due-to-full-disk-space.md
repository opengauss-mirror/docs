# Core Dump Occurs due to Full Disk Space<a name="EN-US_TOPIC_0289900936"></a>

## Symptom<a name="en-us_topic_0283137100_en-us_topic_0059778167_s7a2ed06fefd0448fae90f40fe4291f8d"></a>

When TPC-C is running, the disk space is full during injection. As a result, a core dump occurs on the GaussDB process, as shown in the following figure.

![](figures/en-us_image_0289900420.png)

## Cause Analysis<a name="en-us_topic_0283137100_en-us_topic_0059778167_s74d2dfcb815b4d8ca504c549a923e5ed"></a>

When the disk is full, Xlog logs cannot be written. The program exits through the panic log.

## Procedure<a name="en-us_topic_0283137100_section485620163250"></a>

Externally monitor the disk usage and periodically clean up the disk.
