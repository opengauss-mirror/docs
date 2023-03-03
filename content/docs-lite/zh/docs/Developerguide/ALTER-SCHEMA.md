# ALTER SCHEMA<a name="ZH-CN_TOPIC_0289900025"></a>

## 功能描述<a name="zh-cn_topic_0283136607_zh-cn_topic_0237122070_zh-cn_topic_0059779037_s806d414edb004fa89cd50a1166d1136e"></a>

修改模式属性。

## 注意事项<a name="zh-cn_topic_0283136607_zh-cn_topic_0237122070_zh-cn_topic_0059779037_sfccb497f01564edb804ecee58fe2698c"></a>

-   只有模式的所有者或者被授予了模式ALTER权限的用户有权限执行ALTER SCHEMA命令，系统管理员默认拥有此权限。但要修改模式的所有者，当前用户必须是该模式的所有者或者系统管理员，且该用户是新所有者角色的成员。
-   对于系统模式pg\_catalog，只允许初始用户修改模式的所有者。

## 语法格式<a name="zh-cn_topic_0283136607_zh-cn_topic_0237122070_zh-cn_topic_0059779037_s794bdb8d97844eb7aa7d1d6cdf896ac9"></a>

-   修改模式的防篡改属性。

    ```
    ALTER SCHEMA schema_name { WITH | WITHOUT } BLOCKCHAIN
    ```


-   修改模式的名称。

    ```
    ALTER SCHEMA schema_name 
        RENAME TO new_name;
    ```

-   修改模式的所有者。

    ```
    ALTER SCHEMA schema_name 
        OWNER TO new_owner;
    ```

+ 修改模式的默认字符集和字符序。

  ```
  ALTER SCHEMA schema_name 
      [ [DEFAULT] CHARACTER SET | CHARSET [ = ] default_charset ] [ [DEFAULT] COLLATE [ = ] default_collation ];
  ```

  

## 参数说明<a name="zh-cn_topic_0283136607_zh-cn_topic_0237122070_zh-cn_topic_0059779037_s8277cc73aecc4f20845d2ddf456a20e7"></a>

-   **schema\_name**

    现有模式的名称。

    取值范围：已存在的模式名。

-   **RENAME TO new\_name**

    修改模式的名称。非系统管理员要改变模式的名称，则该用户必须在此数据库上有CREATE权限。

    new\_name：模式的新名称。

    取值范围：字符串，要符合标识符命名规范。

-   **OWNER TO new\_owner**

    修改模式的所有者。非系统管理员要改变模式的所有者，该用户还必须是新的所有角色的直接或间接成员， 并且该成员必须在此数据库上有CREATE权限。

    new\_owner：模式的新所有者。

    取值范围：已存在的用户名/角色名。

-   **\{ WITH | WITHOUT \} BLOCKCHAIN**

    修改模式的防篡改属性。具有防篡改属性模式下的普通行存表均为防篡改历史表，不包括外表，临时表，系统表。当该模式下不包含任何表时才可修改防篡改属性。另外，不支持临时表模式、toast表模式、dbe\_perf模式、blockchain模式修改防篡改属性。
    
- **default\_charset**

  仅在sql\_compatibility='B'时支持该语法。修改模式的默认字符集，单独指定时会将模式的默认字符序设置为指定的字符集的默认字符序。

- **default\_collate**

  仅在sql\_compatibility='B'时支持该语法。修改模式的默认字符序，单独指定时会将模式的默认字符集设置为指定的字符序对应的字符集。

  支持字符序参见[表1 B模式（即sql\_compatibility = 'B'）下支持的字符集和字符序介绍](CREATE-TABLE.md#table8163190152)。


## 示例<a name="zh-cn_topic_0283136607_zh-cn_topic_0237122070_zh-cn_topic_0059779037_sd7a0dca78f6844d79a0ec70fb4213769"></a>

```
--创建模式ds。
openGauss=# CREATE SCHEMA ds;

--将当前模式ds更名为ds_new。
openGauss=# ALTER SCHEMA ds RENAME TO ds_new;

--创建用户jack。
openGauss=# CREATE USER jack PASSWORD 'xxxxxxxxx';

--将DS_NEW的所有者修改为jack。
openGauss=# ALTER SCHEMA ds_new OWNER TO jack;

--将DS_NEW的默认字符集修改为utf8mb4，默认字符序修改为utf8mb4_bin。
openGauss=# ALTER SCHEMA ds_new CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;

--删除用户jack和模式ds_new。
openGauss=# DROP SCHEMA ds_new;
openGauss=# DROP USER jack;
```

## 相关链接<a name="zh-cn_topic_0283136607_zh-cn_topic_0237122070_zh-cn_topic_0059779037_seadab16e00ee41c383d8cba1759ed7c8"></a>

[CREATE SCHEMA](CREATE-SCHEMA.md)，[DROP SCHEMA](DROP-SCHEMA.md)

