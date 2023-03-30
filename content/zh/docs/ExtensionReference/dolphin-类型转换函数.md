# 类型转换函数<a name="ZH-CN_TOPIC_0289900669"></a>

## 类型转换函数<a name="zh-cn_topic_0283137417_zh-cn_topic_0237121973_zh-cn_topic_0059778246_sd1817f56ca2d4be7a4ad606e0e597c55"></a>

-   cast\(x as y\)

    描述：类型转换函数，将x转换成y指定的类型。如果目标类型为char类型，在dolphin.b_compatibility_mode=on的情况下，实际转换为varchar类型；否则仍为char类型。

    示例：

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

   在后续开发中，扩展的CAST转换功能有money到unsigned和timestamp到unsigned的转换。

   ```sql
   CREATE CAST (timestamp AS uint8) WITH FUNCTION timestamp_uint8(timestamp) AS ASSIGNMENT;
   CREATE CAST (money AS uint8) WITH FUNCTION cash_uint(money) AS ASSIGNMENT;
   ```

   ## 兼容性<a name="section9989313154010"></a>

   CREATE CAST指令符合SQL标准，除了SQL没有为二进制可强制转换类型或者实现函数的额外参数来实现功能。

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