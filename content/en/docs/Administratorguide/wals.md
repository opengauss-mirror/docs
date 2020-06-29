# WALs<a name="EN-US_TOPIC_0242215143"></a>

In a system using write-ahead logs \(WALs or Xlogs\), all data file modifications are written to a log before they are applied. That is, the corresponding log must be written into a permanent memory before a data file is modified. You can use WALs to restore the cluster if the system crashes.

## Log Storage Directory<a name="en-us_topic_0237088900_en-us_topic_0059778183_s15507e3c25eb4aa9a9f76d5188415041"></a>

Take a DN as an example. Its WALs are stored in the  **/gaussdb/data/data\_dn****/pg\_xlog**  directory.

**/gaussdb/data/data\_dn**  is the data directory of a node in the cluster.

## Log Naming Rules<a name="en-us_topic_0237088900_en-us_topic_0059778183_section60871389111729"></a>

Log files are saved as segment files. Each segment is 16 MB and is divided into multiple 8 KB pages. The name of a WAL file consists of 24 hexadecimal characters. Each name has three parts, with each part having eight hexadecimal characters. The first part indicates the time line, the second part indicates the log file identifier, and the third part indicates the file segment identifier. A time line starts from 1, and a log file identifier and a file segment identifier start from 0.

For example, the name of the first transaction log is  **000000010000000000000000**.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The numbers in each part are used in ascending order in succession. Exhausting all available numbers takes a long time, and the numbers will start from zero again after they reach the maximum.  

## Log Content Description<a name="en-us_topic_0237088900_section4291946273"></a>

The content of WALs depends on the types of recorded transactions. WALs can be used to restore a system after the system breaks down.

By default, GaussDB Kernel reads WALs for system restoration during each startup.

## Maintenance Suggestions<a name="en-us_topic_0237088900_en-us_topic_0059778183_scf0648238e1a4f06adf3a4c5551b7eac"></a>

WALs are important for database restoration. You are advised to routinely back up WALs.

