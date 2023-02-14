# DROP EXTENSION

## 功能描述<a name="section173831846163116"></a>

删除一个扩展。

## 注意事项<a name="section786041713618"></a>

-   DROP EXTENSION命令从数据库中删除一个扩展。在删除扩展的过程中，构成扩展的组件也会一起删除。
-   必须是扩展的拥有者才能够使用DROP EXTENSION命令。

## 语法格式<a name="section1374719912321"></a>

```
DROP EXTENSION [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ]
```

## 参数说明<a name="section62781959163314"></a>

-   **IF EXISTS**

    当使用IF EXISTS参数，如果扩展不存在时，不会抛出错误，而是产生一个通知。

-   **name**

    已经安装的扩展模块的名称。

-   **CASCADE**

    自动删除依赖于该扩展的对象。

-   **RESTRICT**

    如果有依赖于扩展的对象，则不允许删除次扩展（除非它所有的成员对象和其它扩展对象在一条DROP命令一起删除）。这是缺省行为。


## 示例<a name="section14411351193419"></a>

从当前数据库中删除扩展hstore

```
DROP EXTENSION hstore;
```

在当前数据库中，如果有使用hstore的对象的，这条命令就会失败，比如任一表中的字段使用hstore类型。这时增加CASCADE选项会强制删除扩展和依赖于扩展的对象。
