# ENUM Type<a name="EN-US_TOPIC_0289900754"></a>

The ENUM type is a string object whose value is selected from a list of values specified when a column is defined during table creation. To use the MySQL-compatible enum type, ensure that **CREATE DATABASE test_db with dbcompatibility** is set to **'B'**.

### Creating and Using ENUM Columns

* The enumerated value must be a character string. For example, to create a table that contains a column of ENUM type, run the following command:
  
  ```sql
  CREATE TABLE staff (
    name VARCHAR(40),
    gender ENUM('male', 'female')
  );
  INSERT INO staff (name, gender) VALUES ('Tom','male'), ('Jenny','female')
  SELECT name, gender FROM staff WHERE gender = 'male';
    name   | gender  
  ---------+--------
    Tom    |  male
  (1 row)
  
* The enumerated value string cannot contain 'anonymous_enum'. In addition, an existing type cannot be renamed to a name containing 'anonymous_enum'. If an existing type contains 'anonymous_enum', the following error message is displayed:

  ```sql
  CREATE TYPE country_anonymous_enum_1 AS enum('CHINA','USA');
  ERROR: enum type name "country_anonymous_enum_1" can't contain "anonymous_enum" 

  ```

### Index of an enumerated value

* Each enumerated value is assigned an index value starting from 1 based on the sequence of enumerated values in the column definition.

* The index of the NULL value is 0.

* The index refers to the position of the enumerated value in the list when the enumerated value is created, which is irrelevant to the position in the table.
For example, a column specified as ENUM('male', 'female') has the following enumerated values and indexes:

| Value    | Index |
|:-------- |:----- |
| NULL     | 0     |
| 'male'   | 1     |
| 'female' | 2     |

* You can use the index number to insert enumerated values in ENUM or filter enumerated values using the index number in the WHERE clause as follows:

```sql
INSERT INTO staff (name, size) VALUES ('Jone',1);
SELECT name, gender FROM staff WHERE gender = 1;
   name    | gender  
------------+-------
   Tom     | male
   Jone    | male
(2 rows)
```

* If the index value used exceeds the number of enumerated values or is a negative value, an error occurs.
  
  ```sql
  INSERT INTO staff (name, gender) VALUES ('Lara',4);
  ERROR:  enum order 4 out of the enum value size: 2
  LINE 1: INSERT INTO staff (name, gender) VALUES ('Lara',4);
                                                           ^
  CONTEXT:  referenced column: size

  ```

### Null Values and Empty Strings

* The enumerated value can be NULL, and the empty string **''** is also considered as NULL.
* If you insert an invalid value (that is, a string that does not exist in the enumerated value list) into an ENUM column, an error occurs.

### Enumeration Restrictions

* Numbers cannot be used as enumerated values. If you want to use a number as an enumerated value, enclose it in quotation marks to convert it into a string. If there is no quotation mark, the number is used as an index.
* The value of in the ENUM definition cannot contain duplicate enumerated values.
* The ENUM value can contain a maximum of 63 characters.
* There is no restriction on the maximum number of elements in the enumerated values of ENUM.
