# Bit String Types<a name="EN-US_TOPIC_0289900674"></a>

Compared with the original openGauss, Dolphin modifies the bit string types as follows:
1. The data of the bit type is of variable length up to the maximum length *n*. Longer strings will be rejected. The data of the **bit varying** type is of variable length up to the maximum length *n*. Longer strings will be rejected.
2. If one explicitly casts a bit-string value to **bit\(n\)**, it will be truncated or zero-padded on the left to be exactly *n* bits, without raising an error.

```
--Create a table.
openGauss=# CREATE TABLE bit_type_t1 
(
    BT_COL1 INTEGER,
    BT_COL2 BIT(3),
    BT_COL3 BIT VARYING(5)
) ;

--Data is converted if it exceeds the length of this data type.
openGauss=# INSERT INTO bit_type_t1 VALUES(2, B'1000'::bit(3), B'101');

--View data.
openGauss=# SELECT * FROM bit_type_t1;
 bt_col1 | bt_col2 | bt_col3 
---------+---------+---------
       2 | 100     | 101
(2 rows)

--If the length of a character string is insufficient, the character string is converted to bit(n) and zeros are padded on the left.
openGauss=# SELECT B'10'::bit(4);
  bit   
--------
 000010
(1 row)

--Delete a table.
openGauss=# DROP TABLE bit_type_t1;
```
