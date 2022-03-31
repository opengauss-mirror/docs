# Creating Tables<a name="EN-US_TOPIC_0289900736"></a>

## Background<a name="en-us_topic_0283137451_en-us_topic_0237120299_en-us_topic_0059778113_s98ef8b33479543b8a2dd01ff14f4729b"></a>

A table is created in a database and can be saved in different databases. Tables under different schemas in a database can have the same name. Before creating a table, refer to  [Planning a Storage Model](planning-a-storage-model.md).

## Procedure<a name="en-us_topic_0283137451_en-us_topic_0237120299_en-us_topic_0059778113_section414221814554"></a>

Run the following statement to create a table:

```
openGauss=# CREATE TABLE customer_t1
(
    c_customer_sk             integer,
    c_customer_id             char(5),
    c_first_name              char(6),
    c_last_name               char(8)
);
```

If the following information is displayed, the table has been created:

```
 CREATE TABLE
```

**c\_customer\_sk**,  **c\_customer\_id**,  **c\_first\_name**, and  **c\_last\_name**  are the column names of the table.  **integer**,  **char\(5\)**,  **char\(6\)**, and  **char\(8\)**  are column name types.

