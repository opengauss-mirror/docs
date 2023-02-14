# SHOW MASTER STATUS 

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Views the progress of WAL (Xlog).

## Precautions<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-  This statement can also be executed in a non-primary database.
-  When the command is executed on the primary database, the results of Xlog\_Lsn and pg\_current\_xlog\_location are the same. When the command is executed on a non-primary database, the results of Xlog\_Lsn and pg\_last\_xlog\_replay\_location are the same.
-  The primary database uses this statement to query the real-time progress of Xlog writing.
-  The standby database uses this statement to query the real-time progress of the current Xlog replay.

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW MASTER STATUS

```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **Xlog_File_Name**

       Name of the Xlog file that is being processed.

- **Xlog_File_Offset**

       Offset position of the Xlog file that is being processed.

- **Xlog_Lsn**

       LSN of the current Xlog.


## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
openGauss=# show master status;
      Xlog_File_Name      | Xlog_File_Offset |  Xlog_Lsn
--------------------------+------------------+------------
 000000010000000000000010 |          7142672 | 0/106CFD10
(1 row)
```
