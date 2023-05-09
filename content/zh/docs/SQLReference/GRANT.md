# GRANT<a name="ZH-CN_TOPIC_0289900312"></a>

## 功能描述<a name="zh-cn_topic_0283137177_zh-cn_topic_0237122166_zh-cn_topic_0059778755_s4bc6f47f2f9e45c18707d7219f3987ee"></a>

对角色和用户进行授权操作。

使用GRANT命令进行用户授权包括以下三种场景：

-   **将系统权限授权给角色或用户**

    系统权限又称为用户属性，包括SYSADMIN、CREATEDB、CREATEROLE、AUDITADMIN、MONADMIN、OPRADMIN、POLADMIN和LOGIN。

    系统权限一般通过CREATE/ALTER ROLE语法来指定。其中，SYSADMIN权限可以通过GRANT/REVOKE ALL PRIVILEGE授予或撤销。但系统权限无法通过ROLE和USER的权限被继承，也无法授予PUBLIC。

-   **将数据库对象授权给角色或用户**

    将数据库对象（表和视图、指定字段、数据库、函数、模式、表空间等）的相关权限授予特定角色或用户；

    GRANT命令将数据库对象的特定权限授予一个或多个角色。这些权限会追加到已有的权限上。

    关键字PUBLIC表示该权限要赋予所有角色，包括以后创建的用户。PUBLIC可以看做是一个隐含定义好的组，它总是包括所有角色。任何角色或用户都将拥有通过GRANT直接赋予的权限和所属的权限，再加上PUBLIC的权限。

    如果声明了WITH GRANT OPTION，则被授权的用户也可以将此权限赋予他人，否则就不能授权给他人。这个选项不能赋予PUBLIC，这是openGauss特有的属性。

    openGauss会将某些类型的对象上的权限授予PUBLIC。默认情况下，对表、表字段、序列、外部数据源、外部服务器、模式或表空间对象的权限不会授予PUBLIC，而以下这些对象的权限会授予PUBLIC：数据库的CONNECT权限和CREATE TEMP TABLE权限、函数的EXECUTE特权、语言和数据类型（包括域）的USAGE特权。当然，对象拥有者可以撤销默认授予PUBLIC的权限并专门授予权限给其他用户。为了更安全，建议在同一个事务中创建对象并设置权限，这样其他用户就没有时间窗口使用该对象。另外可参考安全加固指南的权限控制章节，对PUBLIC用户组的权限进行限制。这些初始的默认权限可以使用ALTER DEFAULT PRIVILEGES命令修改。

    对象的所有者缺省具有该对象上的所有权限，出于安全考虑所有者可以舍弃部分权限，但ALTER、DROP、COMMENT、INDEX、VACUUM以及对象的可再授予权限属于所有者固有的权限，隐式拥有。

-   **将角色或用户的权限授权给其他角色或用户**

    将一个角色或用户的权限授予一个或多个其他角色或用户。在这种情况下，每个角色或用户都可视为拥有一个或多个数据库权限的集合。

    当声明了WITH ADMIN OPTION，被授权的用户可以将该权限再次授予其他角色或用户，以及撤销所有由该角色或用户继承到的权限。当授权的角色或用户发生变更或被撤销时，所有继承该角色或用户权限的用户拥有的权限都会随之发生变更。

    数据库系统管理员可以给任何角色或用户授予/撤销任何权限。拥有CREATEROLE权限的角色可以赋予或者撤销任何非系统管理员角色的权限。
    
-   **将ANY权限授予给角色或用户**

    将ANY权限授予特定的角色和用户，ANY权限的取值范围参见语法格式。当声明了WITH ADMIN OPTION，被授权的用户可以将该ANY权限再次授予其他角色/用户，或从其他角色/用户处回收该ANY权限。ANY权限可以通过角色被继承，但不能赋予PUBLIC。初始用户和三权分立关闭时的系统管理员用户可以给任何角色/用户授予或撤销ANY权限。

    目前支持以下ANY权限：CREATE ANY TABLE、ALTER ANY TABLE、DROP ANY TABLE、SELECT ANY TABLE、INSERT ANY TABLE、UPDATE ANY TABLE、DELETE ANY TABLE、CREATE ANY SEQUENCE、CREATE ANY INDEX、CREATE ANY FUNCTION、EXECUTE ANY FUNCTION、 CREATE ANY PACKAGE、EXECUTE ANY PACKAGE、CREATE ANY TYPE、ALTER ANY TYPE、DROP ANY TYPE、ALTER ANY SEQUENCE、DROP ANY SEQUENCE、SELECT ANY SEQUENCE、ALTER ANY INDEX、DROP ANY INDEX、CREATE ANY SYNONYM、DROP ANY SYNONYM、CREATE ANY TRIGGER、ALTER ANY TRIGGER、DROP ANY TRIGGER。详细的ANY权限范围描述参考[表1](#table1360121832117)。


## 注意事项<a name="zh-cn_topic_0283137177_zh-cn_topic_0237122166_zh-cn_topic_0059778755_section1780116145345"></a>

-   不允许将ANY权限授予PUBLIC，也不允许从PUBLIC回收ANY权限。
-   ANY权限属于数据库内的权限，只对授予该权限的数据库内的对象有效，例如SELECT ANY TABLE只允许用户查看当前数据库内的所有用户表数据，对其他数据库内的用户表无查看权限。
-   即使用户被授予ANY权限，也不能对私有用户下的对象进行访问操作（INSERT、DELETE、UPDATE、SELECT）。
-   ANY权限与原有的权限相互无影响。
-   如果用户被授予CREATE ANY TABLE权限，在同名schema下创建表的属主是该schema的属主，用户对表进行其他操作时，需要授予相应的操作权限。与此类似的还有CREATE ANY FUNCTION、CREATE ANY PACKAGE、CREATE ANY TYPE、CREATE ANY SEQUENCE和CREATE ANY INDEX，在同名模式下创建的对象的属主是同名模式的属主；而对于CREATE ANY TRIGGER和CREATE ANY SYNONYM，在同名模式下创建的对象的属主为创建者。
-   需要谨慎授予用户CREATE ANY FUNCTION或CREATE ANY PACKAGE的权限，以免其他用户利用DEFINER类型的函数或PACKAGE进行权限提升。

## 语法格式<a name="zh-cn_topic_0283137177_zh-cn_topic_0237122166_zh-cn_topic_0059778755_s9b21365068e9482782f400457afa8a01"></a>

-   将表或视图的访问权限赋予指定的用户或角色。

    ```
    GRANT { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | ALTER | DROP | COMMENT | INDEX | VACUUM } [, ...] 
          | ALL [ PRIVILEGES ] }
        ON { [ TABLE ] table_name [, ...]
           | ALL TABLES IN SCHEMA schema_name [, ...] }
        TO { [ GROUP ] role_name | PUBLIC } [, ...] 
        [ WITH GRANT OPTION ];
    
    ```

-   将表中字段的访问权限赋予指定的用户或角色。

    ```
    GRANT { {{ SELECT | INSERT | UPDATE | REFERENCES | COMMENT } ( column_name [, ...] )} [, ...] 
          | ALL [ PRIVILEGES ] ( column_name [, ...] ) }
        ON [ TABLE ] table_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   将序列的访问权限赋予指定的用户或角色，LARGE字段属性可选，赋权语句不区分序列是否为LARGE。

    ```
    GRANT { { SELECT | UPDATE | USAGE | ALTER | DROP | COMMENT } [, ...] 
          | ALL [ PRIVILEGES ] }
        ON { [ [ LARGE ] SEQUENCE ] sequence_name [, ...]
           | ALL SEQUENCES IN SCHEMA schema_name [, ...] }
        TO { [ GROUP ] role_name | PUBLIC } [, ...] 
        [ WITH GRANT OPTION ];
    ```

-   将数据库的访问权限赋予指定的用户或角色。

    ```
    GRANT { { CREATE | CONNECT | TEMPORARY | TEMP | ALTER | DROP | COMMENT } [, ...]
          | ALL [ PRIVILEGES ] }
        ON DATABASE database_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   将域的访问权限赋予指定的用户或角色。

    ```
    GRANT { USAGE | ALL [ PRIVILEGES ] }
        ON DOMAIN domain_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >本版本暂时不支持赋予域的访问权限。

-   将客户端加密主密钥CMK的访问权限赋予指定的用户或角色。

    ```
    GRANT { { USAGE | DROP } [, ...] | ALL [ PRIVILEGES ] }
        ON CLIENT_MASTER_KEY client_master_key [, ...] 
        TO { [ GROUP ] role_name | PUBLIC } [, ...] 
        [ WITH GRANT OPTION ];
    ```

-   将列加密密钥CEK的访问权限赋予指定的用户或角色。

    ```
    GRANT { { USAGE | DROP } [, ...] | ALL [ PRIVILEGES ] }
        ON COLUMN_ENCRYPTION_KEY column_encryption_key [, ...] 
        TO { [ GROUP ] role_name | PUBLIC } [, ...] 
        [ WITH GRANT OPTION ];
    ```

-   将外部数据源的访问权限赋予给指定的用户或角色。

    ```
    GRANT { USAGE | ALL [ PRIVILEGES ] }
        ON FOREIGN DATA WRAPPER fdw_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   将外部服务器的访问权限赋予给指定的用户或角色。

    ```
    GRANT { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON FOREIGN SERVER server_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   将函数的访问权限赋予给指定的用户或角色。

    ```
    GRANT { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON { FUNCTION {function_name ( [ {[ argmode ] [ arg_name ] arg_type} [, ...] ] )} [, ...]
           | ALL FUNCTIONS IN SCHEMA schema_name [, ...] }
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

- 将存储过程的访问权限赋予给指定的用户或角色。

  ```
  GRANT { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
  	ON { PROCEDURE {proc_name ( [ {[ argmode ] [ arg_name ] arg_type} [, ...] ] )} [, ...]}
  	TO { [ GROUP ] role_name | PUBLIC } [, ...]
  	[ WITH GRANT OPTION ];
  ```
  

  
-   将过程语言的访问权限赋予给指定的用户或角色。

    ```
    GRANT { USAGE | ALL [ PRIVILEGES ] }
        ON LANGUAGE lang_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   将大对象的访问权限赋予指定的用户或角色。

    ```
    GRANT { { SELECT | UPDATE } [, ...] | ALL [ PRIVILEGES ] }
        ON LARGE OBJECT loid [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >本版本暂时不支持大对象。

-   将模式的访问权限赋予指定的用户或角色。

    ```
    GRANT { { CREATE | USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON SCHEMA schema_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >
    >将模式中的表或者视图对象授权给其他用户时，需要将表或视图所属的模式的USAGE权限同时授予该用户，若没有该权限，则只能看到这些对象的名称，并不能实际进行对象访问。 同名模式下创建表的权限无法通过此语法赋予，可以通过将角色的权限赋予其他用户或角色的语法，赋予同名模式下创建表的权限。

-   将表空间的访问权限赋予指定的用户或角色。

    ```
    GRANT { { CREATE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON TABLESPACE tablespace_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

-   将类型的访问权限赋予指定的用户或角色。

    ```
    GRANT { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
        ON TYPE type_name [, ...]
        TO { [ GROUP ] role_name | PUBLIC } [, ...]
        [ WITH GRANT OPTION ];
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >
    >本版本暂时不支持赋予类型的访问权限。

-   将Data Source对象的权限赋予指定的角色。

    ```
    GRANT { USAGE | ALL [PRIVILEGES]}
       ON DATA SOURCE src_name [, ...]
       TO { [GROUP] role_name | PUBLIC } [, ...]
       [WITH GRANT OPTION];
    ```

-   将directory对象的权限赋予指定的角色。

    ```
    GRANT { { READ | WRITE | ALTER | DROP } [, ...] | ALL [PRIVILEGES] }
       ON DIRECTORY directory_name [, ...]
       TO { [GROUP] role_name | PUBLIC } [, ...]
       [WITH GRANT OPTION];
    ```

-   将package对象的权限赋予指定的角色。

    ```
    GRANT { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [PRIVILEGES] }
       ON PACKAGE package_name [, ...]
       TO { [GROUP] role_name | PUBLIC } [, ...]
       [WITH GRANT OPTION];
    ```

-   将角色的权限赋予其他用户或角色的语法。

    ```
    GRANT role_name [, ...]
       TO role_name [, ...]
       [ WITH ADMIN OPTION ];
    ```

-   将sysadmin权限赋予指定的角色。

    ```
    GRANT ALL { PRIVILEGES | PRIVILEGE }
       TO role_name;
    ```

- 将ANY权限赋予其他用户或角色的语法。

  ```
  GRANT { CREATE ANY TABLE | ALTER ANY TABLE | DROP ANY TABLE | SELECT ANY TABLE | INSERT ANY TABLE | UPDATE ANY TABLE |
    DELETE ANY TABLE | CREATE ANY SEQUENCE | CREATE ANY INDEX | CREATE ANY FUNCTION | EXECUTE ANY FUNCTION |
    CREATE ANY PACKAGE | EXECUTE ANY PACKAGE | CREATE ANY TYPE | ALTER ANY TYPE | DROP ANY TYPE | ALTER ANY SEQUENCE | DROP ANY SEQUENCE |
    SELECT ANY SEQUENCE | ALTER ANY INDEX | DROP ANY INDEX | CREATE ANY SYNONYM | DROP ANY SYNONYM | CREATE ANY TRIGGER | ALTER ANY TRIGGER | DROP ANY TRIGGER
   } [, ...]
    TO [ GROUP ] role_name [, ...]
    [ WITH ADMIN OPTION ];
  ```

## 参数说明<a name="zh-cn_topic_0283137177_zh-cn_topic_0237122166_zh-cn_topic_0059778755_s3557d45c54124d86bc3f619358d806f8"></a>

GRANT的权限分类如下所示。

-   **SELECT**

    允许对指定的表、视图、序列执行SELECT命令，update或delete时也需要对应字段上的select权限。

-   **INSERT**

    允许对指定的表执行INSERT命令。

-   **UPDATE**

    允许对声明的表中任意字段执行UPDATE命令。通常，update命令也需要select权限来查询出哪些行需要更新。SELECT… FOR UPDATE、SELECT… FOR NO KEY UPDATE、SELECT… FOR SHARE和SELECT… FOR KEY SHARE除了需要SELECT权限外，还需要UPDATE权限。

-   **DELETE**

    允许执行DELETE命令删除指定表中的数据。通常，delete命令也需要select权限来查询出哪些行需要删除。

-   **TRUNCATE**

    允许执行TRUNCATE语句删除指定表中的所有记录。

-   **REFERENCES**

    创建一个外键约束，必须拥有参考表和被参考表的REFERENCES权限。

-   **CREATE**
    -   对于数据库，允许在数据库里创建新的模式。
    -   对于模式，允许在模式中创建新的对象。如果要重命名一个对象，用户除了必须是该对象的所有者外，还必须拥有该对象所在模式的CREATE权限。
    -   对于表空间，允许在表空间中创建表，允许在创建数据库和模式的时候把该表空间指定为缺省表空间。

-   **CONNECT**

    允许用户连接到指定的数据库。

-   **EXECUTE**

    允许使用指定的函数，以及利用这些函数实现的操作符。

-   **USAGE**
    -   对于过程语言，允许用户在创建函数的时候指定过程语言。
    -   对于模式，USAGE允许访问包含在指定模式中的对象，若没有该权限，则只能看到这些对象的名称。
    -   对于序列，USAGE允许使用nextval函数。
    -   对于Data Source对象，USAGE是指访问权限，也是可赋予的所有权限，即USAGE与ALL PRIVILEGES等价。

-   **ALTER**

    允许用户修改指定对象的属性，但不包括修改对象的所有者和修改对象所在的模式。

-   **DROP**

    允许用户删除指定的对象。

-   **COMMENT**

    允许用户定义或修改指定对象的注释。

-   **INDEX**

    允许用户在指定表上创建索引，并管理指定表上的索引，还允许用户对指定表执行REINDEX和CLUSTER操作。

-   **VACUUM**

    允许用户对指定的表执行ANALYZE和VACUUM操作。

-   **ALL PRIVILEGES**

    一次性给指定用户/角色赋予所有可赋予的权限。只有系统管理员有权执行GRANT ALL PRIVILEGES。


GRANT的参数说明如下所示。

-   **role\_name**

    已存在用户名称。

-   **table\_name**

    已存在表名称。

-   **column\_name**

    已存在字段名称。

-   **schema\_name**

    已存在模式名称。

-   **database\_name**

    已存在数据库名称。

-   **function\_name**

    已存在函数名称。

-   **procedure\_name**

    已存在存储过程名称。

-   **sequence\_name**

    已存在序列名称。

-   **domain\_name**

    已存在域类型名称。

-   **fdw\_name**

    已存在外部数据包名称。

-   **lang\_name**

    已存在语言名称。

-   **type\_name**

    已存在类型名称。

-   **src\_name**

    已存在的Data Source对象名称。

-   **argmode**

    参数模式。

    取值范围：字符串，要符合标识符命名规范。

-   **arg\_name**

    参数名称。

    取值范围：字符串，要符合标识符命名规范。

-   **arg\_type**

    参数类型。

    取值范围：字符串，要符合标识符命名规范。

-   **loid**

    包含本页的大对象的标识符。

    取值范围：字符串，要符合标识符命名规范。

-   **tablespace\_name**

    表空间名称。

-   client\_master\_key

    客户端加密主密钥的名称。

    取值范围：字符串，要符合标识符命名规范。

-   column\_encryption\_key

    列加密密钥的名称。

    取值范围：字符串，要符合标识符命名规范。

-   **directory\_name**

    目录名称。

    取值范围：字符串，要符合标识符命名规范。

-   **WITH GRANT OPTION**

    如果声明了WITH GRANT OPTION，则被授权的用户也可以将此权限赋予他人，否则就不能授权给他人。这个选项不能赋予PUBLIC。


非对象所有者给其他用户授予对象权限时，命令按照以下规则执行：

-   如果用户没有该对象上指定的权限，命令立即失败。
-   如果用户有该对象上的部分权限，则GRANT命令只授予他有授权选项的权限。
-   如果用户没有可用的授权选项，GRANT ALL PRIVILEGES形式将发出一个警告信息，其他命令形式将发出在命令中提到的且没有授权选项的相关警告信息。

>![](public_sys-resources/icon-note.png) **说明：** 
>
>数据库系统管理员可以访问所有对象，而不会受对象的权限设置影响。这个特点类似Unix系统的root的权限。和root一样，除了必要的情况外，建议不要总是以系统管理员身份进行操作。

- WITH ADMIN OPTION

  对于角色，当声明了WITH ADMIN OPTION，被授权的用户可以将该角色再授予其他角色/用户，或从其他角色/用户回收该角色。

  对于ANY权限，当声明了WITH ADMIN OPTION，被授权的用户可以将该ANY权限再授予其他角色/用户，或从其他角色/用户回收该ANY权限。


**表 1**  ANY权限列表

<a name="table1360121832117"></a>

<table><thead align="left"><tr id="row116015189214"><th class="cellrowborder" valign="top" width="22.509999999999998%" id="mcps1.2.3.1.1"><p id="p6601181862115"><a name="p6601181862115"></a><a name="p6601181862115"></a>系统权限名称</p>
</th>
<th class="cellrowborder" valign="top" width="77.49000000000001%" id="mcps1.2.3.1.2"><p id="p26011318192119"><a name="p26011318192119"></a><a name="p26011318192119"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row5601171810211"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p196011187211"><a name="p196011187211"></a><a name="p196011187211"></a>CREATE ANY TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p96013188214"><a name="p96013188214"></a><a name="p96013188214"></a>用户能够在public模式和用户模式下创建表或视图。如果想要创建serial类型列的表，还需要授予创建序列的权限。</p>
</td>
</tr>
<tr id="row8601131892110"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p9601201818210"><a name="p9601201818210"></a><a name="p9601201818210"></a>ALTER ANY TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p4601518112115"><a name="p4601518112115"></a><a name="p4601518112115"></a>用户拥有对public模式和用户模式下表或视图的ALTER权限。如果想要修改表的唯一索引为表增加主键约束或唯一约束，还需要授予该表的索引权限。</p>
</td>
</tr>
<tr id="row960101852112"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p11601111814216"><a name="p11601111814216"></a><a name="p11601111814216"></a>DROP ANY TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p117212437315"><a name="p117212437315"></a><a name="p117212437315"></a>用户拥有对public模式和用户模式下表或视图的DROP权限。</p>
</td>
</tr>
<tr id="row2601171822114"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p11601121822110"><a name="p11601121822110"></a><a name="p11601121822110"></a>SELECT ANY TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p8713439315"><a name="p8713439315"></a><a name="p8713439315"></a>用户拥有对public模式和用户模式下表或视图的SELETCT权限，仍然受行级访问控制限制。</p>
</td>
</tr>
<tr id="row1960171812214"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p2601218192119"><a name="p2601218192119"></a><a name="p2601218192119"></a>UPDATE ANY TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p1770144313316"><a name="p1770144313316"></a><a name="p1770144313316"></a>用户拥有对public模式和用户模式下表或视图的UPDATE权限，仍然受行级访问控制限制。</p>
</td>
</tr>
<tr id="row1960141815214"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p56010186214"><a name="p56010186214"></a><a name="p56010186214"></a>INSERT ANY TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p186911435319"><a name="p186911435319"></a><a name="p186911435319"></a>用户拥有对public模式和用户模式下表或视图的INSERT权限。</p>
</td>
</tr>
<tr id="row186016187218"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p2060191816213"><a name="p2060191816213"></a><a name="p2060191816213"></a>DELETE ANY TABLE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p76816437315"><a name="p76816437315"></a><a name="p76816437315"></a>用户拥有对public模式和用户模式下表或视图的DELETE权限，仍然受行级访问控制限制。</p>
</td>
</tr>
<tr id="row7827488255"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p1382104882516"><a name="p1382104882516"></a><a name="p1382104882516"></a>CREATE ANY FUNCTION</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p2799144511319"><a name="p2799144511319"></a><a name="p2799144511319"></a>用户能够在用户模式下创建函数或存储过程。</p>
</td>
</tr>
<tr id="row1466925310257"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p8669135372515"><a name="p8669135372515"></a><a name="p8669135372515"></a>EXECUTE ANY FUNCTION</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p9669135311252"><a name="p9669135311252"></a><a name="p9669135311252"></a>用户拥有在public模式和用户模式下函数或存储过程的EXECUTE权限。</p>
</td>
</tr>
<tr id="row9568146102610"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p14568184619264"><a name="p14568184619264"></a><a name="p14568184619264"></a>CREATE ANY PACKAGE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p14990113362"><a name="p14990113362"></a><a name="p14990113362"></a>用户能够在public模式和用户模式下创建PACKAGE。</p>
</td>
</tr>
<tr id="row47031450142617"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p27031350102618"><a name="p27031350102618"></a><a name="p27031350102618"></a>EXECUTE ANY PACKAGE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p37961145938"><a name="p37961145938"></a><a name="p37961145938"></a>用户拥有在public模式和用户模式下PACKAGE的EXECUTE权限。</p>
</td>
</tr>
<tr id="row1654415246293"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p254416244293"><a name="p254416244293"></a><a name="p254416244293"></a>CREATE ANY TYPE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p175443247299"><a name="p175443247299"></a><a name="p175443247299"></a>用户能够在public模式和用户模式下创建类型。</p>
</td>
</tr>
<tr id="row1565211281297"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p1765242862910"><a name="p1765242862910"></a><a name="p1765242862910"></a>CREATE ANY SEQUENCE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p2079315451731"><a name="p2079315451731"></a><a name="p2079315451731"></a>用户能够在public模式和用户模式下创建序列。</p>
</td>
</tr>
<tr id="row87515532292"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p14752155317297"><a name="p14752155317297"></a><a name="p14752155317297"></a>CREATE ANY INDEX</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p37921145332"><a name="p37921145332"></a><a name="p37921145332"></a>用户能够在public模式和用户模式下创建索引。如果在某表空间创建分区表索引，需要授予用户该表空间的创建权限。</p>
</td>
</tr>
<tr id="row28313644111"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p169111525019"><a name="p169111525019"></a><a name="p169111525019"></a>ALTER ANY TYPE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p891121525017"><a name="p891121525017"></a><a name="p891121525017"></a>用户拥有对public模式和用户模式下类型的ALTER权限，但不包括修改类型的所有者或者修改类型的模式。</p>
</td>
</tr>
<tr id="row58511459164011"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p939716502508"><a name="p939716502508"></a><a name="p939716502508"></a>DROP ANY TYPE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p7398165055011"><a name="p7398165055011"></a><a name="p7398165055011"></a>用户拥有对public模式和用户模式下类型的DROP权限。</p>
</td>
</tr>
<tr id="row1376021211412"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p39991052155020"><a name="p39991052155020"></a><a name="p39991052155020"></a>ALTER ANY SEQUENCE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p2999175245019"><a name="p2999175245019"></a><a name="p2999175245019"></a>用户拥有对public模式和用户模式下序列的ALTER权限，但不包括修改序列的所有者。</p>
</td>
</tr>
<tr id="row1758121512413"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p89298558504"><a name="p89298558504"></a><a name="p89298558504"></a>DROP ANY SEQUENCE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p39291855195010"><a name="p39291855195010"></a><a name="p39291855195010"></a>用户拥有对public模式和用户模式下序列的DROP权限。</p>
</td>
</tr>
<tr id="row715411044114"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p3799728145018"><a name="p3799728145018"></a><a name="p3799728145018"></a>SELECT ANY SEQUENCE</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p47992028115011"><a name="p47992028115011"></a><a name="p47992028115011"></a>用户拥有对public模式和用户模式下序列的SELECT、USAGE和UPDATE权限。</p>
</td>
</tr>
<tr id="row59761826194118"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p16737144425012"><a name="p16737144425012"></a><a name="p16737144425012"></a>ALTER ANY INDEX</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p7737144105015"><a name="p7737144105015"></a><a name="p7737144105015"></a>用户拥有对public模式和用户模式下索引的ALTER权限。如果要重命名索引，还需要索引所在模式下创建对象的权限。如果涉及表空间的操作，还需要对应表空间的相应操作权限。如果设置索引不可用（UNUSABLE），还需要DROP ANY INDEX权限。</p>
</td>
</tr>
<tr id="row659911913419"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p11597647135013"><a name="p11597647135013"></a><a name="p11597647135013"></a>DROP ANY INDEX</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p14597104775017"><a name="p14597104775017"></a><a name="p14597104775017"></a>用户拥有对public模式和用户模式下索引的DROP权限。</p>
</td>
</tr>
<tr id="row20739192484111"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p1728420391502"><a name="p1728420391502"></a><a name="p1728420391502"></a>CREATE ANY TRIGGER</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p2285133910505"><a name="p2285133910505"></a><a name="p2285133910505"></a>用户能够在public模式和用户模式下创建触发器。</p>
</td>
</tr>
<tr id="row792282114416"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p2366124205018"><a name="p2366124205018"></a><a name="p2366124205018"></a>ALTER ANY TRIGGER</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p1036614424509"><a name="p1036614424509"></a><a name="p1036614424509"></a>用户拥有对public模式和用户模式下触发器的ALTER权限。</p>
</td>
</tr>
<tr id="row93379175417"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p205462355504"><a name="p205462355504"></a><a name="p205462355504"></a>DROP ANY TRIGGER</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p254612356504"><a name="p254612356504"></a><a name="p254612356504"></a>用户拥有对public模式和用户模式下触发器的DROP权限。</p>
</td>
</tr>
<tr id="row94485714403"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p864102511508"><a name="p864102511508"></a><a name="p864102511508"></a>CREATE ANY SYNONYM</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p13641325135013"><a name="p13641325135013"></a><a name="p13641325135013"></a>用户能够在用户模式下创建同义词。</p>
</td>
</tr>
<tr id="row11336453114019"><td class="cellrowborder" valign="top" width="22.509999999999998%" headers="mcps1.2.3.1.1 "><p id="p588843295012"><a name="p588843295012"></a><a name="p588843295012"></a>DROP ANY SYNONYM</p>
</td>
<td class="cellrowborder" valign="top" width="77.49000000000001%" headers="mcps1.2.3.1.2 "><p id="p10888153216509"><a name="p10888153216509"></a><a name="p10888153216509"></a>用户拥有对public模式和用户模式下同义词的DROP权限。</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.png) **说明：** 
>
>用户被授予任何一种ANY权限后，用户对public模式和用户模式具有USAGE权限，对[表1](../SQLReference/Schema.md#table167371825175015)中除public之外的系统模式没有USAGE权限。

## 示例<a name="zh-cn_topic_0283137177_zh-cn_topic_0237122166_zh-cn_topic_0059778755_s724dfb1c8978412b95cb308b64dfa447"></a>

**示例：将系统权限授权给用户或者角色。**

创建名为joe的用户，并将sysadmin权限授权给他。

```
openGauss=# CREATE USER joe PASSWORD 'xxxxxxxxx';
openGauss=# GRANT ALL PRIVILEGES TO joe;
```

授权成功后，用户joe会拥有sysadmin的所有权限。

**示例：将对象权限授权给用户或者角色**。

1.  撤销joe用户的sysadmin权限，然后将模式tpcds的使用权限和表tpcds.reason的所有权限授权给用户joe。

    ```
    openGauss=# REVOKE ALL PRIVILEGES FROM joe;
    openGauss=# GRANT USAGE ON SCHEMA tpcds TO joe;
    openGauss=# GRANT ALL PRIVILEGES ON tpcds.reason TO joe;
    ```

    授权成功后，joe用户就拥有了tpcds.reason表的所有权限，包括增删改查等权限。

2.  将tpcds.reason表中r\_reason\_sk、r\_reason\_id、r\_reason\_desc列的查询权限，r\_reason\_desc的更新权限授权给joe。

    ```
    openGauss=# GRANT select (r_reason_sk,r_reason_id,r_reason_desc),update (r_reason_desc) ON tpcds.reason TO joe;
    ```

    授权成功后，用户joe对tpcds.reason表中r\_reason\_sk，r\_reason\_id的查询权限会立即生效。如果joe用户需要拥有将这些权限授权给其他用户的权限，可以通过以下语法对joe用户进行授权。

    ```
    openGauss=# GRANT select (r_reason_sk, r_reason_id) ON tpcds.reason TO joe WITH GRANT OPTION;
    ```

    将数据库openGauss的连接权限授权给用户joe，并给予其在openGauss中创建schema的权限，而且允许joe将此权限授权给其他用户。

    ```
    openGauss=# GRANT create,connect on database openGauss TO joe WITH GRANT OPTION;
    ```

    创建角色tpcds\_manager，将模式tpcds的访问权限授权给角色tpcds\_manager，并授予该角色在tpcds下创建对象的权限，不允许该角色中的用户将权限授权给其他人。

    ```
    openGauss=# CREATE ROLE tpcds_manager PASSWORD 'xxxxxxxxx';
    openGauss=# GRANT USAGE,CREATE ON SCHEMA tpcds TO tpcds_manager;
    ```

    将表空间tpcds\_tbspc的所有权限授权给用户joe，但用户joe无法将权限继续授予其他用户。

    ```
    openGauss=# CREATE TABLESPACE tpcds_tbspc RELATIVE LOCATION 'tablespace/tablespace_1';
    openGauss=# GRANT ALL ON TABLESPACE tpcds_tbspc TO joe;
    ```


**示例：将用户或者角色的权限授权给其他用户或角色。**

1.  创建角色manager，将joe的权限授权给manager，并允许该角色将权限授权给其他人。

    ```
    openGauss=# CREATE ROLE manager PASSWORD 'xxxxxxxxx';
    openGauss=# GRANT joe TO manager WITH ADMIN OPTION;
    ```

2.  创建用户senior\_manager，将用户manager的权限授权给该用户。

    ```
    openGauss=# CREATE ROLE senior_manager PASSWORD 'xxxxxxxxx';
    openGauss=# GRANT manager TO senior_manager;
    ```

3.  撤销权限，并清理用户。

    ```
    openGauss=# REVOKE manager FROM joe;
    openGauss=# REVOKE senior_manager FROM manager;
    openGauss=# DROP USER manager;
    ```


**示例：将CMK或者CEK的权限授权给其他用户或角色。**

1.  连接密态数据库。

    ```
    gsql -p 57101 openGauss -r -C
    openGauss=#  CREATE CLIENT MASTER KEY MyCMK1 WITH ( KEY_STORE = localkms , KEY_PATH = "key_path_value" , ALGORITHM = RSA_2048);
    CREATE CLIENT MASTER KEY
    openGauss=# CREATE COLUMN ENCRYPTION KEY MyCEK1 WITH VALUES (CLIENT_MASTER_KEY = MyCMK1, ALGORITHM = AEAD_AES_256_CBC_HMAC_SHA256);
    CREATE COLUMN ENCRYPTION KEY
    ```

2.  创建角色newuser，将密钥的权限授权给newuser。

    ```
    openGauss=# CREATE USER newuser PASSWORD 'xxxxxxxxx';
    CREATE ROLE
    openGauss=# GRANT ALL ON SCHEMA public TO newuser;
    GRANT
    openGauss=# GRANT USAGE ON COLUMN_ENCRYPTION_KEY MyCEK1 to newuser;
    GRANT
    openGauss=# GRANT USAGE ON CLIENT_MASTER_KEY MyCMK1 to newuser;
    GRANT
    ```

3.  设置该用户连接数据库，使用该CEK创建加密表。

    ```
    openGauss=# SET SESSION AUTHORIZATION newuser PASSWORD 'xxxxxxxxx';
    openGauss=>  CREATE TABLE acltest1 (x int, x2 varchar(50) ENCRYPTED WITH (COLUMN_ENCRYPTION_KEY = MyCEK1, ENCRYPTION_TYPE = DETERMINISTIC));
    CREATE TABLE
    openGauss=> SELECT has_cek_privilege('newuser', 'MyCEK1', 'USAGE');
     has_cek_privilege
    -------------------
     t
    (1 row)
    ```

4.  撤销权限，并清理用户。

    ```
    openGauss=# REVOKE USAGE ON COLUMN_ENCRYPTION_KEY MyCEK1 FROM newuser;
    openGauss=# REVOKE USAGE ON CLIENT_MASTER_KEY MyCMK1 FROM newuser;
    openGauss=# DROP TABLE newuser.acltest1;
    openGauss=# DROP COLUMN ENCRYPTION KEY MyCEK1;
    openGauss=# DROP CLIENT MASTER KEY MyCMK1;
    openGauss=# DROP SCHEMA IF EXISTS newuser CASCADE;
    openGauss=# REVOKE ALL ON SCHEMA public FROM newuser;
    openGauss=# DROP ROLE IF EXISTS newuser;
    ```


**示例：撤销上述授予的权限，并清理角色和用户。**

```
openGauss=# REVOKE ALL PRIVILEGES ON tpcds.reason FROM joe;
openGauss=# REVOKE ALL PRIVILEGES ON SCHEMA tpcds FROM joe;
openGauss=# REVOKE ALL ON TABLESPACE tpcds_tbspc FROM joe;
openGauss=# DROP TABLESPACE tpcds_tbspc;
openGauss=# REVOKE USAGE,CREATE ON SCHEMA tpcds FROM tpcds_manager;
openGauss=# DROP ROLE tpcds_manager;
openGauss=# DROP ROLE senior_manager;
openGauss=# DROP USER joe CASCADE;
```

## 相关链接<a name="zh-cn_topic_0283137177_zh-cn_topic_0237122166_zh-cn_topic_0059778755_s3bb41459be684975af982bfe2508c335"></a>

[REVOKE](REVOKE.md)，[ALTER DEFAULT PRIVILEGES](ALTER-DEFAULT-PRIVILEGES.md)

