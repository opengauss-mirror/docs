# Prerequisite Check<a name="EN-US_TOPIC_0260488077"></a>

Check that the schema of the disk table to be converted into a MOT table contains all required columns.

Check whether the schema contains any unsupported column data types, as described in the  [Unsupported Data Types](unsupported-data-types.md)__section.

If a specific column is not supported, then it is recommended to first create a secondary disk table with an updated schema. This schema is the same as the original table, except that all the unsupported types have been converted into supported types.

Afterwards, use the following script to export this secondary disk table and then import it into a MOT table.

