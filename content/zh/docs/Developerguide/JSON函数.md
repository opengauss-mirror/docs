# JSON函数<a name="ZH-CN_TOPIC_0242370441"></a>

JSON函数表示可以用于JSON类型（请参考[JSON类型](JSON类型.md#ZH-CN_TOPIC_0242370422)）数据的函数。

-   array\_to\_json\(anyarray \[, pretty\_bool\]\)

    描述：返回JSON类型的数组。一个多维数组成为一个JSON数组的数组。如果pretty\_bool为true，将在一维元素之间添加换行符。

    返回类型：json

    示例：

    ```
    postgres=# SELECT array_to_json('{{1,5},{99,100}}'::int[]);
    array_to_json
    ------------------
    [[1,5],[99,100]]
    (1 row)
    ```

-   row\_to\_json\(record \[, pretty\_bool\]\)

    描述：返回JSON类型的行。如果pretty\_bool为true，将在第一级元素之间添加换行符。

    返回类型：json

    示例：

    ```
    postgres=# SELECT row_to_json(row(1,'foo'));
         row_to_json     
    ---------------------
     {"f1":1,"f2":"foo"}
    (1 row)
    ```


