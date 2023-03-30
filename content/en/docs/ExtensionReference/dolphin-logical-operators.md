# Logical Operators<a name="EN-US_TOPIC_0289900469"></a>

Compared with the original openGauss, Dolphin has two new logical operators:

1. The **&&** operator is added.
2. The **||** operator is added.

- &&

  Description: When **b\_compatibility\_mode** is set to **TRUE**, it indicates the logical AND operation. The supported types include Boolean, time, date, integer, floating point, and bit string. The truth table is as follows:

  <table>
      <tr>
          <td>a</td>
          <td>b</td>
          <td>Result of a && b </td>
      </tr>
      <tr>
          <td>TRUE</td>
          <td>TRUE</td>
          <td>TRUE</td>
      </tr>
      <tr>
          <td>TRUE</td>
          <td>FALSE</td>
          <td>FALSE</td>
      </tr>
      <tr>
          <td>TRUE</td>
          <td>NULL</td>
          <td>NULL</td>
      </tr>
      <tr>
          <td>FLASE</td>
          <td>FALSE</td>
          <td>FALSE</td>
      </tr>
      <tr>
          <td>FALSE</td>
          <td>NULL</td>
          <td>FALSE</td>
      </tr>
      <tr>
          <td>NULL</td>
          <td>NULL</td>
          <td>NULL</td>
      </tr>
  </table>

  The following table describes the processing of different input types.

  <table>
  <tr>
      <td>Data Type</td>
      <td>Processing Method</td>
  </tr>
  <tr>
      <td>Boolean </td>
      <td> The logical AND operation is performed according to the truth table.</td>
  </tr>
  <tr>
      <td>Integer</td>
      <td>Only the zero value is converted to Boolean false, and other values are converted to Boolean true. Then, the logical AND operation is performed.</td>
  </tr>
  <tr>
      <td>Floating point </td>
      <td>Only zero is converted to Boolean false, and other values are converted to Boolean true. Then, the logical AND operation is performed.</td>
  </tr>
  <tr>
      <td>Bit string </td>
      <td>Only the all-0 value is converted to Boolean false, and other values are converted to Boolean true. Then, the logical AND operation is performed.</td>
  </tr>
  <tr>
      <td>Time </td>
      <td>The conversion mode of the time type depends only on the hour part. When '00:xx:xx' is entered, the time type is converted to Boolean false. When 'yy:xx:xx' is entered, if **yy** is not 0, the time type is converted to Boolean true. Then, the logical AND operation is performed.</td>
  </tr>
  <tr>
      <td>Date </td>
      <td>The conversion mode of the date type depends only on the year part. When '0000-xx-xx' is entered, the date type is converted to Boolean false. When 'yyyy-xx-xx' is entered, if **yy** is not 0, the date type is converted to Boolean true. Then, the logical AND operation is performed.</td>
  </tr>
  </table>

  Return type: Boolean

  Example: 

  ```
  openGauss=# SELECT 1 && 1;
  ?column?
  ----------
         t
  (1 row)
  ```

- ||

  Description: When **sql\_mode** is not set to **'pipes\_as\_concat'**, it indicates a logical OR operation. The supported types include Boolean, time, date, integer, floating point, and bit string. The truth table is as follows:

  <table>
      <tr>
          <td>a</td>
          <td>b</td>
          <td>Result of a || b </td>
      </tr>
      <tr>
          <td>TRUE</td>
          <td>TRUE</td>
          <td>TRUE</td>
      </tr>
      <tr>
          <td>TRUE</td>
          <td>FALSE</td>
          <td>TRUE</td>
      </tr>
      <tr>
          <td>TRUE</td>
          <td>NULL</td>
          <td>TRUE</td>
      </tr>
      <tr>
          <td>FLASE</td>
          <td>FALSE</td>
          <td>FALSE</td>
      </tr>
      <tr>
          <td>FALSE</td>
          <td>NULL</td>
          <td>NULL</td>
      </tr>
      <tr>
          <td>NULL</td>
          <td>NULL</td>
          <td>NULL</td>
      </tr>
  </table>

  The following table describes the processing of different input types.

  <table>
  <tr>
      <td>Data Type</td>
      <td>Processing Method</td>
  </tr>
  <tr>
      <td>Boolean </td>
      <td> The logical OR operation is performed according to the truth table.</td>
  </tr>
  <tr>
      <td>Integer</td>
      <td>Only the zero value is converted to Boolean false, and other values are converted to Boolean true. Then, the logical OR operation is performed.</td>
  </tr>
  <tr>
      <td>Floating point </td>
      <td>Only the zero value is converted to Boolean false, and other values are converted to Boolean true. Then, the logical OR operation is performed.</td>
  </tr>
  <tr>
      <td>Bit string </td>
      <td>Only the all-0 value is converted to Boolean false, and other values are converted to Boolean true. Then, the logical OR operation is performed.</td>
  </tr>
  <tr>
      <td>Time </td>
      <td>The conversion mode of the time type depends only on the hour part. When '00:xx:xx' is entered, the time type is converted to Boolean false. When 'yy:xx:xx' is entered, if **yy** is not 0, the time type is converted to Boolean true. Then, the logical OR operation is performed.</td>
  </tr>
  <tr>
      <td>Date </td>
      <td>The conversion mode of the date type depends only on the year part. When '0000-xx-xx' is entered, the date type is converted to Boolean false. When 'yyyy-xx-xx' is entered, if **yy** is not 0, the date type is converted to Boolean true. Then, the logical OR operation is performed.</td>
  </tr>
  </table>

  Return type: Boolean

  Example: 

  ```
  openGauss=# SELECT 0 || 0;
  ?column?
  ----------
         f
  (1 row)
  ```

  
