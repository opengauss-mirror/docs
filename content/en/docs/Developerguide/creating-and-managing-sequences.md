# Creating and Managing Sequences<a name="EN-US_TOPIC_0242370196"></a>

## Background<a name="en-us_topic_0237120310_en-us_topic_0093152908_en-us_topic_0064273680_section3970017091331"></a>

A sequence is a database object that generates unique integers. Sequence numbers are generated according to a certain rule. Sequences are unique because they increase automatically. This is why they are often used as primary keys.

You can create a sequence for a column in either of the following methods:

-   Set the data type of a column to  [sequence integer](numeric-data-types.md#en-us_topic_0237121927_en-us_topic_0059778296_t5262f987c61c4a8caff8c8037e912874). A sequence will be automatically created by the database for this column.
-   Run the  **[CREATE SEQUENCE](create-sequence.md)**  statement to create a sequence. Set the initial value of the  **nextval**\('_sequence\_name_'\) function to the default value of a column.

## Procedure<a name="en-us_topic_0237120310_en-us_topic_0093152908_en-us_topic_0064273680_section1199961991514"></a>

Method 1: Set the data type of a column to a sequence integer. For example:

```
CREATE TABLE T1
(
    id    serial,
    name  text
);
```

If the following information is displayed, the table has been created:

```
CREATE TABLE
```

Method 2: Create a sequence and set the initial value of the  **nextval**\('_sequence\_name_'\) function to the default value of a column.

1.  Create a sequence.

    ```
    CREATE SEQUENCE seq1 cache 100;
    ```

    If the following information is displayed, the sequence has been created:

    ```
    CREATE SEQUENCE
    ```

2.  Set the initial value of the  **nextval**\('_sequence\_name_'\) function to the default value of a column.

    ```
    CREATE TABLE T2 
    ( 
        id   int not null default nextval('seq1'),
        name text
    );
    ```

    If the following information is displayed, the default value has been specified:

    ```
    CREATE TABLE
    ```

3.  Associate the sequence with a column.

    Associates a sequence with a specified column included in a table. In this way, the sequence will be deleted when you delete its associated column or the table where the column belongs to.

    ```
    ALTER SEQUENCE seq1 OWNED BY T2.id;
    ```

    If the following information is displayed, the column has been specified:

    ```
    ALTER SEQUENCE
    ```


>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The preceding methods are similar, except that the second method specifies cache for the sequence. A sequence having cache defined has inconsecutive values \(such as 1, 4, and 5\) and cannot maintain the order of its values. After the dependent column of a sequence has been specified, once the sequence is deleted, the sequence of the dependent will be deleted. A sequence shared by multiple columns is not forbidden in a database, but you are not advised to do that.  
>In the current version, you can specify the auto-increment column or set the default value of a column to  **nextval\('seqname'\)**  when defining a table. You cannot add an auto-increment column or a column whose default value is  **nextval\('seqname'\)**  to an existing table.  

