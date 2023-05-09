# ALTER SESSION

## 功能描述<a name="zh-cn_topic_0283137033_zh-cn_topic_0237122073_zh-cn_topic_0059778275_s62f804a7ed5a4f278e36b0175ff7bdc9"></a>

ALTER SESSION命令用于定义或修改那些对当前会话有影响的条件或参数。修改后的会话参数会一直保持，直到断开当前会话。

## 注意事项<a name="zh-cn_topic_0283137033_zh-cn_topic_0237122073_zh-cn_topic_0059778275_sa3088a8149ed4a2aa40a1107176bbe0a"></a>

-   如果执行SET TRANSACTION之前没有执行START TRANSACTION，则事务立即结束，命令无法显示效果。
-   可以用START TRANSACTION里面声明所需要的transaction\_mode\(s\)的方法来避免使用SET TRANSACTION。

## 语法格式<a name="zh-cn_topic_0283137033_zh-cn_topic_0237122073_zh-cn_topic_0059778275_sbe3534568f9843f48bb14af315b3c0f6"></a>

-   设置会话的事务参数。

    ```
    ALTER SESSION SET [ SESSION CHARACTERISTICS AS ] TRANSACTION
        { ISOLATION LEVEL { READ COMMITTED } | { READ ONLY  | READ WRITE } } [, ...] ;
    ```

-   设置会话的其他运行时参数。

    ```
    ALTER SESSION SET 
        {{config_parameter { { TO  | =  }  { value | DEFAULT }
          | FROM CURRENT }} 
          | TIME ZONE time_zone
          | CURRENT_SCHEMA schema
          | NAMES encoding_name
          | ROLE role_name PASSWORD 'password'
          | SESSION AUTHORIZATION { role_name PASSWORD 'password' | DEFAULT }
          | XML OPTION { DOCUMENT | CONTENT }
        } ;
    ```


## 参数说明<a name="zh-cn_topic_0283137033_zh-cn_topic_0237122073_zh-cn_topic_0059778275_sddb6ecf7bf554397a5dcf64a45a2fd33"></a>

修改会话涉及到的参数说明请参见SET语法中的[参数说明](SET.md#zh-cn_topic_0283136841_zh-cn_topic_0237122186_zh-cn_topic_0059779029_s39823c7ebd854a9f9c761b3a32b1c3c3)。

## 示例<a name="zh-cn_topic_0283137033_zh-cn_topic_0237122073_zh-cn_topic_0059778275_sea2dac4896614cbf9f90c11334eb3538"></a>

```
-- 创建模式ds。
openGauss=# CREATE SCHEMA ds;

--设置模式搜索路径。
openGauss=# SET SEARCH_PATH TO ds, public;

--设置日期时间风格为传统的POSTGRES风格（日在月前）。
openGauss=# SET DATESTYLE TO postgres, dmy;

--设置当前会话的字符编码为UTF8。
openGauss=# ALTER SESSION SET NAMES 'UTF8';

--设置时区为加州伯克利。
openGauss=# SET TIME ZONE 'PST8PDT';

--设置时区为意大利。
openGauss=# SET TIME ZONE 'Europe/Rome';

--设置当前模式。
openGauss=# ALTER SESSION SET CURRENT_SCHEMA TO tpcds;

--设置XML OPTION为DOCUMENT。
openGauss=# ALTER SESSION SET XML OPTION DOCUMENT;

--创建角色joe，并设置会话的角色为joe。
openGauss=# CREATE ROLE joe WITH PASSWORD 'xxxxxxxxx';
openGauss=# ALTER SESSION SET SESSION AUTHORIZATION joe PASSWORD 'xxxxxxxxx';

--切换到默认用户。
openGauss=> ALTER SESSION SET SESSION AUTHORIZATION default;

--删除ds模式。
openGauss=# DROP SCHEMA ds;

--删除joe。
openGauss=# DROP ROLE joe;
```

## 相关链接<a name="zh-cn_topic_0283137033_zh-cn_topic_0237122073_zh-cn_topic_0059778275_sae8fd88368e642f8bec50ae5712a870c"></a>

[SET](SET.md)

