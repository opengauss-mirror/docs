# GROUP BY子句

GROUP BY语句和SELECT语句一起使用，用来对相同的数据进行分组。您可以对一列或者多列进行分组，但是被分组的列必须存在。

## 语法格式<a name="section1483055819415"></a>

```
SELECT 
{ * | [column, ...] }
[ FROM from_item [, ...] ]
[ WHERE condition ]
[ GROUP BY grouping_element [, ...] ]
[ ORDER BY {expression [ ASC | DESC ] }];
```

## 参数说明<a name="section36303203424"></a>

-   **GROUP BY子句**

    将查询结果按某一列或多列的值分组，值相等的为一组。

    GROUP BY在一个SELECT语句中，放在WHRER子句的后面，ORDER BY 句的前面。


## 示例<a name="section1172527518"></a>

表customer\_t1中存在重复的c\_first\_name，根据c\_first\_name字段分组，并求和Amount。

```
openGauss=# SELECT c_first_name, sum(Amount)  FROM customer_t1 GROUP BY c_first_name;
 c_first_name | sum
--------------+------
 James        | 5000
 Grace        | 1000
 Local        | 3000
              |
 Joes         | 2200
 Lily         | 3000
(6 rows)
```

