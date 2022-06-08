# ALTER DATABASE<a name="ZH-CN_TOPIC_0289900461"></a>

## 功能描述<a name="zh-cn_topic_0283136981_zh-cn_topic_0237122055_zh-cn_topic_0059779247_sbb9c79973fbf4b4b8f8e8355b0f67f63"></a>

修改数据库的属性，包括它的名称、所有者、连接数限制、对象隔离属性等。

## 注意事项<a name="zh-cn_topic_0283136981_zh-cn_topic_0237122055_zh-cn_topic_0059779247_sb8bbb55d049b42e688a2e152d2f6c737"></a>

-   只有数据库的所有者或者被授予了数据库ALTER权限的用户才能执行ALTER DATABASE命令，系统管理员默认拥有此权限。针对所要修改属性的不同，还有以下权限约束：
    -   修改数据库名称，必须拥有CREATEDB权限。
    -   修改数据库所有者，当前用户必须是该database的所有者或者系统管理员，必须拥有CREATEDB权限，且该用户是新所有者角色的成员。
    -   修改数据库默认表空间，必须拥有新表空间的CREATE权限。这个语句会从物理上将一个数据库原来缺省表空间上的表和索引移至新的表空间。注意不在缺省表空间的表和索引不受此影响。

-   不能重命名当前使用的数据库，如果需要重新命名，须连接至其他数据库上。

## 语法格式<a name="zh-cn_topic_0283136981_zh-cn_topic_0237122055_zh-cn_topic_0059779247_s2eca2e2a5fc04ac798bbdf1dce3e7303"></a>

-   修改数据库的最大连接数。

    ```
    ALTER DATABASE database_name 
        [ [ WITH ] CONNECTION LIMIT connlimit ];
    ```

-   修改数据库名称。

    ```
    ALTER DATABASE database_name 
        RENAME TO new_name;
    ```

-   修改数据库所属者。

    ```
    ALTER DATABASE database_name 
        OWNER TO new_owner;
    ```

-   修改数据库默认表空间。

    ```
    ALTER DATABASE database_name 
        SET TABLESPACE new_tablespace;
    ```

-   修改数据库指定会话参数值。

    ```
    ALTER DATABASE database_name 
        SET configuration_parameter { { TO | = } { value | DEFAULT } | FROM CURRENT };
    ```

-   数据库配置参数重置。

    ```
    ALTER DATABASE database_name RESET 
        { configuration_parameter | ALL };
    ```


-   修改数据库对象隔离属性。

    ```
    ALTER DATABASE database_name [ WITH ] { ENABLE | DISABLE } PRIVATE OBJECT;
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >-   修改数据库的对象隔离属性时须连接至该数据库，否则无法更改。
    >-   新创建的数据库，对象隔离属性默认是关闭的。当开启数据库对象隔离属性后，普通用户只能查看有权访问的对象（表、函数、视图、字段等）。对象隔离特性对管理员用户不生效，当开启对象隔离特性后，管理员也可以查看到全量的数据库对象。


## 参数说明<a name="zh-cn_topic_0283136981_zh-cn_topic_0237122055_zh-cn_topic_0059779247_s4d6b72484e3b43969af25757fda7ad81"></a>

-   **database\_name**

    需要修改属性的数据库名称。

    取值范围：字符串，要符合标识符的命名规范。

-   **connlimit**

    数据库可以接收的最大并发连接数（管理员用户连接除外）。

    取值范围：整数，建议填写1\~50的整数。-1（缺省）表示没有限制。

-   **new\_name**

    数据库的新名称。

    取值范围：字符串，要符合标识符的命名规范。

-   **new\_owner**

    数据库的新所有者。

    取值范围：字符串，有效的用户名。

-   **new\_tablespace**

    数据库新的默认表空间，该表空间为数据库中已经存在的表空间。默认的表空间为pg\_default。

    取值范围：字符串，有效的表空间名。

-   **configuration\_parameter**

    **value**

    把指定的数据库会话参数值设置为给定的值。如果value是DEFAULT或者RESET，则在新的会话中使用系统的缺省设置。OFF关闭设置。

    取值范围：字符串，

    -   DEFAULT
    -   OFF
    -   RESET

-   **FROM CURRENT**

    根据当前会话连接的数据库设置该参数的值。

-   **RESET configuration\_parameter**

    重置指定的数据库会话参数值。

-   **RESET ALL**

    重置全部的数据库会话参数值。


>![](public_sys-resources/icon-note.gif) **说明：** 
>-   修改数据库默认表空间，会将旧表空间中的所有表和索引转移到新表空间中，该操作不会影响其他非默认表空间中的表和索引。
>-   修改的数据库会话参数值，将在下一次会话中生效。

## 示例<a name="zh-cn_topic_0283136981_zh-cn_topic_0237122055_zh-cn_topic_0059779247_sb089bcdb51bd4932a2967c246217d29e"></a>

请参考CREATE DATABASE的[示例](CREATE-DATABASE.md#zh-cn_topic_0283137050_zh-cn_topic_0237122099_zh-cn_topic_0059778277_s6be7b8abbb4b4aceb9dae686434d672c)。

## 相关链接<a name="zh-cn_topic_0283136981_zh-cn_topic_0237122055_zh-cn_topic_0059779247_saa1e5193215b4927989f304541d2ecbd"></a>

[CREATE DATABASE](CREATE-DATABASE.md)，[DROP DATABASE](DROP-DATABASE.md)

