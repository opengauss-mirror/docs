# 别名

SQL可以重命名一个字段的名称，这个名称为该表或该字段的别名，别名的形式可以是单引号字符串。
## 语法格式<a name="section119531510131916"></a>

-   列别名语法

    ```
    SELECT 
    { * | [column [ AS ] output_name, ...] }
    [ FROM from_item [, ...] ]
    [ WHERE condition ];
    ```

## 参数说明<a name="section012816161027"></a>

-   **output\_name**

    AS是可选字段，通过使用子句AS（可选） output\_name可以为输出字段取个别名，output\_name支持单引号形式的字符串。


## 示例<a name="section73551858131418"></a>

```
openGauss=# SELECT id 'test_id' from tab;
 c_first_name | amount
--------------+--------
 Grace        |   1000
 Grace        |
              |
 Joes         |   2200
 James        |   5000
 Local        |   3000
 Lily         |   1000
 Lily         |   2000
(8 rows)
```

