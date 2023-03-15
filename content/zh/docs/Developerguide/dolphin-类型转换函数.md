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

