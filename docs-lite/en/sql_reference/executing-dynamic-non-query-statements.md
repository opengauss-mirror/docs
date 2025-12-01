# Executing Dynamic Non-query Statements<a name="EN-US_TOPIC_0289900338"></a>

## Syntax<a name="en-us_topic_0283136884_en-us_topic_0237122226_en-us_topic_0059777751_s856a2c95da554ee0b5783beeee22397c"></a>

[Figure 1](#en-us_topic_0283136884_en-us_topic_0237122226_en-us_topic_0059777751_f039af8fc76c54a54b06d579e56b81232)  shows the syntax diagram.

**Figure  1**  noselect::=<a name="en-us_topic_0283136884_en-us_topic_0237122226_en-us_topic_0059777751_f039af8fc76c54a54b06d579e56b81232"></a>  
![](figures/noselect.png "noselect")

[Figure 2](#en-us_topic_0283136884_en-us_topic_0237122226_en-us_topic_0059777751_fa52bfbcefb174772a5bd22ca73c6a03a)  shows the syntax diagram for  **using\_clause**.

**Figure  2**  using\_clause::=<a name="en-us_topic_0283136884_en-us_topic_0237122226_en-us_topic_0059777751_fa52bfbcefb174772a5bd22ca73c6a03a"></a>  
![](figures/using_clause-0.png "using_clause-0")

The above syntax diagram is explained as follows:

**USING IN **_bind\_argument_  is used to specify the variable whose value is passed to the dynamic SQL statement. The variable is used when a placeholder exists in  _dynamic\_noselect\_string_. That is, a placeholder is replaced by the corresponding  _bind\_argument_  when a dynamic SQL statement is executed. Note that  _bind\_argument_  can only be a value, variable, or expression, and cannot be a database object such as a table name, column name, and data type. If a stored procedure needs to transfer database objects through  _bind\_argument_  to construct dynamic SQL statements \(generally, DDL statements\), you are advised to use double vertical bars \(||\) to concatenate  _dynamic\_select\_clause_  with a database object. In addition, a dynamic PL/SQL block allows duplicate placeholders. That is, a placeholder can correspond to only one  _bind\_argument_.

## Examples<a name="en-us_topic_0283136884_en-us_topic_0237122226_en-us_topic_0059777751_sd52a0b806574451cb8d5192b55156f4e"></a>

```
-- Create a table.
openGauss=# CREATE TABLE sections_t1
(
   section       NUMBER(4) ,
   section_name  VARCHAR2(30),
   manager_id    NUMBER(6),
   place_id      NUMBER(4) 
);

-- Declare a variable.
openGauss=# DECLARE 
   section       NUMBER(4) := 280; 
   section_name  VARCHAR2(30) := 'Info support'; 
   manager_id    NUMBER(6) := 103;
   place_id      NUMBER(4) := 1400;
   new_colname   VARCHAR2(10) := 'sec_name';
BEGIN 
-- Execute the query.
    EXECUTE IMMEDIATE 'insert into sections_t1 values(:1, :2, :3, :4)' 
       USING section, section_name, manager_id,place_id; 
-- Execute the query (duplicate placeholders).
    EXECUTE IMMEDIATE 'insert into sections_t1 values(:1, :2, :3, :1)' 
       USING section, section_name, manager_id; 
-- Run the ALTER statement. (You are advised to use double vertical bars (||) to concatenate the dynamic DDL statement with a database object.)
    EXECUTE IMMEDIATE 'alter table sections_t1 rename section_name to ' || new_colname;
END; 
/

-- Query data.
openGauss=# SELECT * FROM sections_t1;

-- Delete the table.
openGauss=# DROP TABLE sections_t1;
```

