# Converting<a name="EN-US_TOPIC_0257867383"></a>

To covert a disk-based table into a MOT table, perform the following:

1.  Suspend application activity.
2.  Use  **gs\_dump**  tool to dump the table’s data into a physical file on disk. Make sure to use the  **data only**.
3.  Rename your original disk-based table.
4.  Create a MOT table with the same table name and schema. Make sure to use the create FOREIGN keyword to specify that it will be a MOT table.
5.  Use** gs\_restore**  to load/restore data from the disk file into the database table.
6.  Visually/manually verify that all the original data was imported correctly into the new MOT table. An example is provided below.
7.  Resume application activity.

**IMPORTANT Note**  – In this way, since the table name remains the same, application queries and relevant database stored-procedures will be able to access the new MOT table seamlessly without code changes. Notice, that due to the current limitation of unsporting cross-engine queries and transactions, in the case queries and stored procedures do joins, unions and similar multi-table queries - it is required to complete the conversion steps to all relevant tables. UNCLEAR – PLEASE FIX VARIOUS THINGS IN THIS SENTENCE GGG

