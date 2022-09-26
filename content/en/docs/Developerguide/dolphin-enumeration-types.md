# ENUM Type<a name="EN-US_TOPIC_0289900754"></a>

ENUM is a string object whose value is selected from the list of allowed values explicitly enumerated in the column definition when the table is created. To implement the compatible enum type, ensure that **CREATE DATABASE test_db with dbcompatibility** is set to **'B'**.

### Creating and Using ENUM Columns

* The enumerated value must be a character string. For example, you can create a table with ENUM columns as follows:
  
  ```sql
  CREATE TABLE shirts (
    name VARCHAR(40),
    size ENUM('small', 'medium', 'large')
  );
  INSERT INO shirts (name, size) VALUES ('dress shirt','large'), ('t-shirt','medium'),
  ('polo shirt','small');
  SELECT name, size FROM shirts WHERE size = 'medium';
    name   |  size  
  ---------+--------
   t-shirt | medium
  (1 row)
  
* The enumerated value cannot contain 'anonymous_enum'. In addition, an existing type cannot be renamed to a name containing 'anonymous_enum'. If an existing type contains 'anonymous_enum', the following error message is displayed:

  ```sql
  CREATE TYPE country_anonymous_enum_1 AS enum('CHINA','USA');
  ERROR: enum type name "country_anonymous_enum_1" can't contain "anonymous_enum" 
  ```

### Index of an enumerated value

* Each enumerated value is assigned an index number, starting from 1, in the order in the column definition.

* The index of the NULL value is 0.

* The word "index" here refers to the position in the enumerated value list and is irrelevant to the table index.
For example, a column specified as `ENUM('small', 'medium', 'large')` has the following enumerated values and indexes:

| Value    | Index |
|:-------- |:----- |
| NULL     | 0     |
| 'small'  | 1     |
| 'medium' | 2     |
| 'large'  | 3     |

* You can use the index number to insert enumerated values in ENUM or filter enumerated values using the index number in the WHERE clause as follows:

```sql
INSERT INTO shirts (name, size) VALUES ('t-shirt',1);
SELECT name, size FROM shirts WHERE size = 1;
   name    | size  
------------+-------
polo shirt | small
t-shirt    | small
(2 rows)
```

* If you use an out-of-bounds index number, an error occurs.
  
  ```sql
  INSERT INTO shirts (name, size) VALUES ('t-shirt',4);
  ERROR:  enum order 4 out of the enum value size: 3
  LINE 1: INSERT INTO shirts (name, size) VALUES ('t-shirt',4);
                                                            ^
  CONTEXT:  referenced column: size
  ```

### Null Values and Empty Strings

* The enumerated value can be NULL, and the empty string **''** is also considered as NULL.
* If you insert an invalid value (that is, a string that does not exist in the enumerated value list) into an ENUM column, an error occurs.

### Enumeration Restrictions

* Numbers cannot be used as enumerated values. If you do use numbers as enumerated values, always enclose them in quotation marks. If quotation marks are omitted, the number is treated as an index.
* Duplicate enumerated values in the ENUM definition cause errors.
* The ENUM supports a string of a maximum of 63 characters.
* The ENUM column can have more than 65,535 different elements.
