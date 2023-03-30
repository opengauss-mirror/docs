# ALTER EXTENSION<a name="ZH-CN_TOPIC_0000001127799415"></a>

## 功能描述<a name="section173831846163116"></a>

修改插件扩展。

## 注意事项<a name="section786041713618"></a>

ALTER EXTENSION 修改一个已安装的扩展的定义。这里有几种方式：

-   UPDATE

    这种方式更新这个扩展到一个新的版本。这个扩展必须满足一个适用的更新脚本\(或者一系列脚本\) 这样就能修改当前安装版本到一个要求的版本。

-   SET SCHEMA

    这种方式移动扩展对象到另一个模式。这个扩展必须relocatable才能使命令成功。

-   ADD member\_object

    这种方式添加一个已存在对象到扩展。这主要在扩展更新脚本上有用。这个对象接着会被视为扩展的成员；显而易见，该对象只能通过取消扩展来取消 。

-   DROP member\_object

    这个方式从扩展上移除一个成员对象。主要在扩展更新脚本上有用。这个对象没有被取消，只是从扩展里分开了。

    您必须拥有扩展来使用 ALTER EXTENSION。 这个 ADD/DROP 方式要求 添加/删除对象的所有权。


## 语法格式<a name="section1374719912321"></a>

```
ALTER EXTENSION name UPDATE [ TO new_version ];
ALTER EXTENSION name SET SCHEMA new_schema;
ALTER EXTENSION name ADD member_object;
ALTER EXTENSION name DROP member_object;

where member_object is:

  AGGREGATE agg_name (agg_type [, ...] ) |
  CAST (source_type AS target_type) |
  COLLATION object_name |
  CONVERSION object_name |
  DOMAIN object_name |
  FOREIGN DATA WRAPPER object_name |
  FOREIGN TABLE object_name |
  FUNCTION function_name ( [ [ argname ] [ argmode ] argtype [, ...] ] ) |
  MATERIALIZED VIEW object_name |
  OPERATOR operator_name (left_type, right_type) |
  OPERATOR CLASS object_name USING index_method |
  OPERATOR FAMILY object_name USING index_method |
  [ PROCEDURAL ] LANGUAGE object_name |
  SCHEMA object_name |
  SEQUENCE object_name |
  SERVER object_name |
  TABLE object_name |
  TEXT SEARCH CONFIGURATION object_name |
  TEXT SEARCH DICTIONARY object_name |
  TEXT SEARCH PARSER object_name |
  TEXT SEARCH TEMPLATE object_name |
  TYPE object_name |
  VIEW object_name
```

## 参数说明<a name="section62781959163314"></a>

-   **name**

    已安装扩展的名称。

-   **new\_version**

    扩展的新版本。可以通过被标识符和字面字符重写。如果不指定的扩展的新版本，ALTER EXTENSION UPDATE会更新到扩展的控制文件中显示的默认版本。

-   **new\_schema**

    扩展的新模式。

-   **object\_name**

    **agg\_name**

    **function\_name**

    **operator\_name**

    从扩展里被被添加或移除的对象的名称。包含表、聚合 、域、外链表、函数、操作符、操作符类、操作符族、序列、文本搜索对象、类型和能被模式合格的视图的名称。

-   **agg\_type**

    在聚合函数操作上的一个输入数据类型，去引用一个零参数聚合函数，写 \* 代替这些输入数据类型列表。

-   **source\_type**

    强制转换的源数据类型的名称。

-   **target\_type**

    强制转换的目标数据类型的名称。

-   **argmode**

    这个函数参数的模型：IN、OUT、INOUT或者 VARIADIC。如果省略的话，默认值为IN。ALTER EXTENSION 不关心OUT参数 ，因为确认函数的一致性只需要输入参数，因此列出 IN、INOUT和 VARIADIC参数就足够了。

-   **argname**

    函数参数的名称。ALTER EXTENSION不关心参数名称，确认函数的一致性只需要参数数据类型。

-   **argtype**

    函数参数的数据类型（可以有模式修饰）。

-   **left\_type**

    **right\_type**

    操作符参数的数据类型（可以有模式修饰），为前缀或后缀运算符的丢失参数写NONE 。


## 示例<a name="section14411351193419"></a>

更新 hstore 扩展到版本 2.0：

```
ALTER EXTENSION hstore UPDATE TO '2.0';
```

更新 hstore扩展的模式为utils：

```
ALTER EXTENSION hstore SET SCHEMA utils;
```

添加一个已存在的函数给 hstore 扩展：

```
ALTER EXTENSION hstore ADD FUNCTION populate_record(anyelement, hstore);
```

