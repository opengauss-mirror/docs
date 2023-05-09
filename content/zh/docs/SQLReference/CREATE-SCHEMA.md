# CREATE SCHEMA<a name="ZH-CN_TOPIC_0289901000"></a>

## 功能描述<a name="zh-cn_topic_0283137491_zh-cn_topic_0237122113_zh-cn_topic_0059777945_s8496918cf41f499098fc49523f02b0d8"></a>

创建模式。

访问命名对象时可以使用模式名作为前缀进行访问，如果无模式名前缀，则访问当前模式下的命名对象。创建命名对象时也可用模式名作为前缀修饰。

另外，CREATE SCHEMA可以包括在新模式中创建对象的子命令，这些子命令和那些在创建完模式后发出的命令没有任何区别。如果使用了AUTHORIZATION子句，则所有创建的对象都将被该用户所拥有。

## 注意事项<a name="zh-cn_topic_0283137491_zh-cn_topic_0237122113_zh-cn_topic_0059777945_s438fd9a3c5b84d16b7810533d50c71b9"></a>

-   只要用户对当前数据库有CREATE权限，就可以创建模式。
-   系统管理员在普通用户同名schema下创建的对象，所有者为schema的同名用户（非系统管理员）。

## 语法格式<a name="zh-cn_topic_0283137491_zh-cn_topic_0237122113_zh-cn_topic_0059777945_sf8fcd5db414748bcaa6b2f79f6247377"></a>

-   根据指定的名称创建模式。

    ```
    CREATE SCHEMA schema_name 
        [ AUTHORIZATION user_name ] [WITH BLOCKCHAIN] [ schema_element [ ... ] ];
    ```

-   根据用户名创建模式。

    ```
    CREATE SCHEMA AUTHORIZATION user_name [ schema_element [ ... ] ];
    ```

+ 创建模式并指定默认字符集和字符序。

  ```
  CREATE SCHEMA schema_name 
      [ [DEFAULT] CHARACTER SET | CHARSET [ = ] default_charset ] [ [DEFAULT] COLLATE [ = ] default_collation ];
  ```

  

## 参数说明<a name="zh-cn_topic_0283137491_zh-cn_topic_0237122113_zh-cn_topic_0059777945_s9930d6a2a74b406980e00129b1f4fe2c"></a>

-   **schema\_name**

    模式名称。

    >![](public_sys-resources/icon-notice.png) **须知：** 
    >
    >模式名不能和当前数据库里其他的模式重名。
    >模式的名称不可以“pg\_”开头。

    取值范围：字符串，要符合标识符的命名规范。

-   **AUTHORIZATION user\_name**

    指定模式的所有者。当不指定schema\_name时，把user\_name当作模式名，此时user\_name只能是角色名。

    取值范围：已存在的用户名/角色名。

-   **WITH BLOCKCHAIN**

    指定模式的防篡改属性，防篡改模式下的行存普通用户表将自动扩展为防篡改用户表。

-   **schema\_element**

    在模式里创建对象的SQL语句。目前仅支持CREATE TABLE、CREATE VIEW、CREATE INDEX、CREATE PARTITION、CREATE SEQUENCE、CREATE TRIGGER、GRANT子句。

    子命令所创建的对象都被AUTHORIZATION子句指定的用户所拥有。
    
- **default\_charset**

  仅在sql\_compatibility='B'时支持该语法。指定模式的默认字符集，单独指定时会将模式的默认字符序设置为指定的字符集的默认字符序。

- **default\_collation**

  仅在sql\_compatibility='B'时支持该语法。指定模式的默认字符序，单独指定时会将模式的默认字符集设置为指定的字符序对应的字符集。

  支持字符序参见[表1 B模式（即sql\_compatibility = 'B'）下支持的字符集和字符序介绍](CREATE-TABLE.md#table8163190152)。


>![](public_sys-resources/icon-note.png) **说明：** 
>
>如果当前搜索路径上的模式中存在同名对象时，需要明确指定引用对象所在的模式。可以通过命令SHOW SEARCH\_PATH来查看当前搜索路径上的模式。

## 示例<a name="zh-cn_topic_0283137491_zh-cn_topic_0237122113_zh-cn_topic_0059777945_s05e72232af5e4507aad1511c025d7617"></a>

```
--创建一个角色role1。
openGauss=# CREATE ROLE role1 IDENTIFIED BY 'xxxxxxxxx';

-- 为用户role1创建一个同名schema，子命令创建的表films和winners的拥有者为role1。
openGauss=# CREATE SCHEMA AUTHORIZATION role1
     CREATE TABLE films (title text, release date, awards text[])      
     CREATE VIEW winners AS         
     SELECT title, release FROM films WHERE awards IS NOT NULL;
     
-- 创建一个schema ds，指定schema的默认字符集为utf8mb4，默认字符序为utf8mb4_bin。
openGauss=# CREATE SCHEMA ds CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;

--删除schema。
openGauss=# DROP SCHEMA role1 CASCADE;
--删除用户。
openGauss=# DROP USER role1 CASCADE;
```

## 相关链接<a name="zh-cn_topic_0283137491_zh-cn_topic_0237122113_zh-cn_topic_0059777945_sf210cb55e4884955b9809f27c7c55ce9"></a>

[ALTER SCHEMA](ALTER-SCHEMA.md)，[DROP SCHEMA](DROP-SCHEMA.md)

