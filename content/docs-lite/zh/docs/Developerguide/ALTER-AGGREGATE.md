# ALTER AGGREGATE<a name="ZH-CN_TOPIC_0000001127682267"></a>

## 功能描述<a name="section173831846163116"></a>

修改一个聚合函数的定义。

## 注意事项<a name="section786041713618"></a>

要使用 ALTER AGGREGATE ，你必须是该聚合函数的所有者。 要改变一个聚合函数的模式，你必须在新模式上有 CREATE 权限。 要改变所有者，你必须是新所有角色的一个直接或间接成员，并且该角色必须在聚合函数的模式上有 CREATE 权限。（这些限制强制了修改该所有者不会做任何通过删除和重建聚合函数不能做的事情。不过，具有SYSADMIN权限用户可以用任何方法任意更改聚合函数的所属关系）。

## 语法格式<a name="section1374719912321"></a>

```
ALTER AGGREGATE name ( argtype [ , ... ] ) RENAME TO new_name
ALTER AGGREGATE name ( argtype [ , ... ] ) OWNER TO new_owner
ALTER AGGREGATE name ( argtype [ , ... ] ) SET SCHEMA new_schema
```

## 参数说明<a name="section62781959163314"></a>

-   **name**

    现有的聚合函数的名称\(可以有模式修饰\)。

-   **argtype**

    聚合函数操作的输入数据类型。要引用一个零参数聚合函数，可以写入\*代替输入数据类型列表。

-   **new\_name**

    聚合函数的新名字。

-   **new\_owner**

    聚合函数的新所有者。

-   **new\_schema**

    聚合函数的新模式。


## 示例<a name="section14411351193419"></a>

把一个接受integer 类型参数的聚合函数myavg重命名为 my\_average ：

```
ALTER AGGREGATE myavg(integer) RENAME TO my_average;
```

把一个接受integer 类型参数的聚合函数myavg的所有者改为joe ：

```
ALTER AGGREGATE myavg(integer) OWNER TO joe;
```

把一个接受integer 类型参数的聚合函数myavg移动到模式myschema里：

```
ALTER AGGREGATE myavg(integer) SET SCHEMA myschema;
```

## 兼容性<a name="section15847115116365"></a>

SQL标准里没有ALTER AGGREGATE语句。

