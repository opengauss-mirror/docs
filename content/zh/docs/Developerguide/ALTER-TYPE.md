# ALTER TYPE<a name="ZH-CN_TOPIC_0289899831"></a>

## 功能描述<a name="zh-cn_topic_0283136571_zh-cn_topic_0237122082_zh-cn_topic_0059777461_s46f3e0aac3a84502bc20eee219bef9cf"></a>

修改一个类型的定义。

## 注意事项<a name="zh-cn_topic_0059777936_s1cdad938760340bbbbd8251750b59176"></a>

类型的所有者或者被授予了类型ALTER权限的用户或者被授予了ALTER ANY TYPE权限的用户可以执行ALTER TYPE命令，系统管理员默认拥有此权限。但要修改类型的所有者或者修改类型的模式，当前用户必须是该类型的所有者或者系统管理员，且该用户是新所有者角色的成员。

## 语法格式<a name="zh-cn_topic_0283136571_zh-cn_topic_0237122082_zh-cn_topic_0059777461_s700b45dab05a43e4ac8959c5824223be"></a>

-   修改类型。

    ```
    ALTER TYPE name action [, ... ]
    ALTER TYPE name OWNER TO { new_owner | CURRENT_USER | SESSION_USER }
    ALTER TYPE name RENAME ATTRIBUTE attribute_name TO new_attribute_name [ CASCADE | RESTRICT ]
    ALTER TYPE name RENAME TO new_name
    ALTER TYPE name SET SCHEMA new_schema
    ALTER TYPE name ADD VALUE [ IF NOT EXISTS ] new_enum_value [ { BEFORE | AFTER } neighbor_enum_value ] 
    ALTER TYPE name RENAME VALUE existing_enum_value TO new_enum_value
    
    where action is one of:
        ADD ATTRIBUTE attribute_name data_type [ COLLATE collation ] [ CASCADE | RESTRICT ]
        DROP ATTRIBUTE [ IF EXISTS ] attribute_name [ CASCADE | RESTRICT ]
        ALTER ATTRIBUTE attribute_name [ SET DATA ] TYPE data_type [ COLLATE collation ] [ CASCADE | RESTRICT ]
    ```

-   给复合类型增加新的属性。

    ```
    ALTER TYPE name ADD ATTRIBUTE attribute_name data_type [ COLLATE collation ] [ CASCADE | RESTRICT ]
    ```


-   从复合类型删除一个属性。

    ```
    ALTER TYPE name DROP ATTRIBUTE [ IF EXISTS ] attribute_name [ CASCADE | RESTRICT ]
    ```


-   改变一种复合类型中某个属性的类型。

    ```
    ALTER TYPE name ALTER ATTRIBUTE attribute_name [ SET DATA ] TYPE data_type [ COLLATE collation ] [ CASCADE | RESTRICT ]
    ```


-   改变类型的所有者。

    ```
    ALTER TYPE name OWNER TO { new_owner | CURRENT_USER | SESSION_USER }
    ```


-   改变类型的名称或是一个复合类型中的一个属性的名称。

    ```
    ALTER TYPE name RENAME TO new_name
    ALTER TYPE name RENAME ATTRIBUTE attribute_name TO new_attribute_name [ CASCADE | RESTRICT ]
    ```


-   将类型移至一个新的模式中。

    ```
    ALTER TYPE name SET SCHEMA new_schema
    ```


-   为枚举类型增加一个新值。

    ```
    ALTER TYPE name ADD VALUE [ IF NOT EXISTS ] new_enum_value [ { BEFORE | AFTER } neighbor_enum_value ]
    ```


-   重命名枚举类型的一个标签值。

    ```
    ALTER TYPE name RENAME VALUE existing_enum_value TO new_enum_value
    ```


## 参数说明<a name="zh-cn_topic_0283136571_zh-cn_topic_0237122082_zh-cn_topic_0059777461_s28f32bbb70f648b680f66e994ccb96f4"></a>

-   **name**

    一个需要修改的现有的类型的名称\(可以有模式修饰\) 。


-   **new\_name**

    该类型的新名称。


-   **new\_owner**

    新所有者的用户名 。


-   **new\_schema**

    该类型的新模式 。


-   **attribute\_name**

    拟增加、更改或删除的属性的名称。


-   **new\_attribute\_name**

    拟改名的属性的新名称。


-   **data\_type**

    拟新增属性的数据类型或是拟更改的属性的新类型名。

-   **new\_enum\_value**

    枚举类型新增加的标签值，是一个非空的长度不超过63个字节的字符串。

-   **neighbor\_enum\_value**

    一个已有枚举标签值，新值应该被增加在紧接着该枚举值之前或者之后的位置上。

-   **existing\_enum\_value**

    现有的要重命名的枚举值，是一个非空的长度不超过63个字节的字符串


-   **CASCADE**

    自动级联更新需更新类型以及相关联的记录和继承它们的子表。

-   **RESTRICT**

    如果需联动更新类型是已更新类型的关联记录，则拒绝更新。这是缺省选项。

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >
    >-   ADD ATTRIBUTE、DROP ATTRIBUTE和ALTER ATTRIBUTE选项可以组合成一个列表同时处理。 例如，在一条命令中同时增加几个属性或是更改几个属性的类型是可以实现的。
    
    >-   要修改一个类型的模式，必须在新模式上拥有CREATE权限。 要修改所有者，必须是新的所有角色的直接或间接成员， 并且该成员必须在此类型的模式上有CREATE权限。 （这些限制强制了修改所有者不会做任何通过删除和重建类型不能做的事情。 不过，系统管理员可以以任何方式修改任意类型的所有权。） 要增加一个属性或是修改一个属性的类型，也必须有该类型的USAGE权限。


## 示例<a name="zh-cn_topic_0283136571_zh-cn_topic_0237122082_zh-cn_topic_0059777461_sf9c8ea511e3c47b98d77fc0ab56e9d07"></a>

请参考CREATE TYPE的[示例](CREATE-TYPE.md#zh-cn_topic_0283136568_zh-cn_topic_0237122124_zh-cn_topic_0059779377_s66a0b4a6a1df4ba4a116c6c565a0fe9d)。

## 相关链接<a name="zh-cn_topic_0283136571_zh-cn_topic_0237122082_zh-cn_topic_0059777461_sfe6a005c6e5b4a98b94be3d6521f4840"></a>

[CREATE TYPE](CREATE-TYPE.md)，[DROP TYPE](DROP-TYPE.md)

