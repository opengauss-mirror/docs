# Type Conversion Functions<a name="EN-US_TOPIC_0289900669"></a>

## Type Conversion Functions<a name="en-us_topic_0283137417_en-us_topic_0237121973_en-us_topic_0059778246_sd1817f56ca2d4be7a4ad606e0e597c55"></a>

-   cast\(x as y\)

    Description: Converts x into the type specified by y. If the target data type is char, the data type is converted to varchar in the case of **dolphin.b\_compatibility\_mode=on**. Otherwise, the data type is still char.

    Example:

    ```
    openGauss=# set dolphin.b_compatibility_mode=on;

    openGauss=# SELECT cast('abc' as char(10));
     varchar
    ---------
     abc
    (1 row)

    openGauss=# SELECT dolphin.b_compatibility_mode=off;

    openGauss=# SELECT cast('abc' as char(10));
       bpchar
    ------------
     abc
    (1 row)
    ```

   In subsequent development, the extended CAST function includes the conversion from money to unsigned and from timestamp to unsigned.

   ```sql
   CREATE CAST (timestamp AS uint8) WITH FUNCTION timestamp_uint8(timestamp) AS ASSIGNMENT;
   CREATE CAST (money AS uint8) WITH FUNCTION cash_uint(money) AS ASSIGNMENT;
   ```

   ## Compatibility<a name="section9989313154010"></a>

   The CREATE CAST instruction complies with the SQL standard. Except that the SQL does not have extra parameters that can be forcibly converted to binary types or implement functions.

   ```sql
    openGauss=# SELECT CAST('$2'::money as unsigned);
     uint8
     -------
     2
     (1 row)
    openGauss=# SELECT CAST(CURRENT_TIMESTAMP::TIMESTAMP AS UNSIGNED);
     current_timestamp
     -------------------
     20230103023621
     (1 row)

    ```
