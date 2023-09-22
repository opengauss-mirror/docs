# Core Dump Occurs Due to Incorrect Settings of GUC Parameter log\_directory<a name="EN-US_TOPIC_0289901017"></a>

## Symptom<a name="en-us_topic_0283137178_en-us_topic_0059778167_s7a2ed06fefd0448fae90f40fe4291f8d"></a>

After the database process is started, a core dump occurs and no log is recorded.

## Cause Analysis<a name="en-us_topic_0283137178_en-us_topic_0059778167_s74d2dfcb815b4d8ca504c549a923e5ed"></a>

The directory specified by GUC parameter  **log\_directory**  cannot be read or you do not have permissions to access this directory. As a result, the verification fails during the database startup, and the program exits through the panic log.

## Procedure<a name="en-us_topic_0283137178_section485620163250"></a>

Set  **log\_directory**  to a valid directory. For details, see  [log\_directory](../DatabaseReference/logging-destination.md#en-us_topic_0283136719_en-us_topic_0237124721_en-us_topic_0059778787_sfbedf09fcf1a4223a4538679f80f12a9).

