# Bit String Functions and Operators<a name="EN-US_TOPIC_0289900469"></a>

Compared with the original openGauss, Dolphin modifies the bit string functions as follows:

1. The `bit_bool` function is added.
2. The `^` operator is added.
3. The `bit_count` function is added.

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

- bit_count(N)

  Description: Returns the number of 1s in the binary string when the input data is converted to an unsigned 64-bit integer.

  Input type: numeric text bit

  Return type: text

  Note: If the entered number or character string exceeds the range of unsigned 64-bit integers, 64 is returned. If the number of 1s in the input bits exceeds 64, 1 is returned.

  Example:
  ~~~
  SELECT bit_count(29);
   bit_count 
  ----------
   4
  (1 row)
  ~~~

  ~~~
  SELECT bit_count(b'101010');
   bit_count 
  ----------
   3
  (1 row)
  ~~~
  
