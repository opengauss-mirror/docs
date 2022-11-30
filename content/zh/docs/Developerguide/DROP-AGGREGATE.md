# DROP AGGREGATE<a name="ZH-CN_TOPIC_0000001080822720"></a>

## 功能描述<a name="section173831846163116"></a>

删除一个聚合函数。

## 注意事项<a name="section786041713618"></a>

DROP AGGREGATE删除一个现存的聚合函数，执行这条命令的用户必须是该聚合函数的所有者。

## 语法格式<a name="section1374719912321"></a>

```
DROP AGGREGATE [ IF EXISTS ] name ( argtype [ , ... ] ) [ CASCADE | RESTRICT ]
```

## 参数说明<a name="section62781959163314"></a>

-   **IF EXISTS**

    如果指定的聚合不存在，那么发出一个 notice 而不是抛出一个错误。

-   **name**

    现存的聚合函数名（可以有模式修饰）。

-   **argtype**

    聚合函数操作的输入数据类型，要引用一个零参数聚合函数，请用\*代替输入数据类型列表。

-   **CASCADE**

    级联删除依赖于这个聚合函数的对象。

-   **RESTRICT**

    如果有任何依赖对象，则拒绝删除这个聚合函数。这是缺省处理。


## 示例<a name="section14411351193419"></a>

将integer类型的聚合函数myavg删除：

```
DROP AGGREGATE myavg(integer);
```

## 兼容性<a name="section9989313154010"></a>

SQL 标准里没有DROP AGGREGATE语句。
