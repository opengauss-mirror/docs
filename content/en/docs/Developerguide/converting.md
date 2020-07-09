# Converting<a name="EN-US_TOPIC_0260488078"></a>

To covert a disk-based table into a MOT table, perform the following:

1.  Suspend application activity.
2.  Use  **gs\_dump**  tool to dump the table's data into a physical file on disk. Make sure to use the  **data only**.
3.  Rename your original disk-based table.
4.  Create a MOT table with the same table name and schema. Make sure to use the create FOREIGN keyword to specify that it will be a MOT table.
5.  Use** gs\_restore**  to load/restore data from the disk file into the database table.
6.  Visually/manually verify that all the original data was imported correctly into the new MOT table. An example is provided below.
7.  Resume application activity.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>In this way, since the table name remains the same, application queries and relevant database stored-procedures will be able to access the new MOT table seamlessly without code changes. Please note that MOT does not currently support cross-engine multi-table queries \(such as by using Join, Union and sub-query\) and cross-engine multi-table transactions. Therefore, if an original table is accessed somewhere in a multi-table query, stored procedure or transaction, you must either convert all related disk-tables into MOT tables or alter the relevant code in the  application or the database.  

