# HAVING子句

HAVING子句可以让我们筛选分组后的各组数据。

WHERE子句在所选列上设置条件，而HAVING子句则在由GROUP BY子句创建的分组上设置条件。

## 语法格式<a name="section108517702319"></a>

```
SELECT 
{ * | [column, ...] }
[ FROM from_item [, ...] ]
[ WHERE condition ]
[ GROUP BY grouping_element [, ...] ]
[ HAVING condition [, ...] ]
[ ORDER BY {expression [ ASC | DESC ] }];
```

## 参数说明<a name="section1376271572414"></a>

-   **HAVING子句**

    与GROUP BY子句配合用来选择特殊的组。HAVING子句将组的一些属性与一个常数值比较，只有满足HAVING子句中的逻辑表达式的组才会被提取出来。


## 示例<a name="section9965828102619"></a>

下面实例将找出根据c\_first\_name字段值进行分组，并且c\_first\_name字段的计数少于 2 数据：

```
openGauss=# SELECT c_first_name FROM customer_t1 GROUP BY c_first_name HAVING count(c_first_name) < 2;
```

结果如下。

```
 c_first_name
--------------
 James
 Local

 Joes
(4 rows)
```

下面实例将找出根据c\_first\_name字段值进行分组，并且名称的计数大于1数据：

```
openGauss=# SELECT c_first_name FROM customer_t1 GROUP BY c_first_name HAVING count(c_first_name) > 1;
```

结果如下。

```
 c_first_name
--------------
 Grace
 Lily
(2 rows)
```

