# Bit String Functions and Operators<a name="EN-US_TOPIC_0289900469"></a>

Compared with the original openGauss, Dolphin modifies the bit string functions as follows:

1. The bit\_bool function is added.
2. The `^` operator is added.

- bit_bool(bit)

  Description: Returns a Boolean value based on the data in the bit string. If the value is **0**, **false** is returned. Otherwise, **true** is returned.

  Return type: Boolean

  Example: 
  ~~~
  openGauss=# select bit_bool('11111');
   bit_bool 
  ----------
   t
  (1 row)
  ~~~

  ~~~
  openGauss=# select bit_bool('00001');
   bit_bool 
  ----------
   t
  (1 row)
  ~~~

  ~~~
  openGauss=# select bit_bool('00000');
   bit_bool 
  ----------
   f
  (1 row)
  ~~~


- ^

  Description: Implements the bitwise XOR of bit-type data.

  Return type: bit

  Example: 

  ```
  openGauss=# select b'1001'^b'1100';
   ?column? 
  ----------
   0101
  (1 row)
  ```

  
