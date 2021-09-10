# DO<a name="ZH-CN_TOPIC_0289900214"></a>

## 功能描述<a name="zh-cn_topic_0283137438_zh-cn_topic_0237122132_zh-cn_topic_0059778658_s9b63cdf8ade346bb85b02b8dbdf97170"></a>

执行匿名代码块。

代码块被看做是没有参数的一段函数体，返回值类型是void。它的解析和执行是同一时刻发生的。

## 注意事项<a name="zh-cn_topic_0283137438_zh-cn_topic_0237122132_zh-cn_topic_0059778658_sdad44f940b3e443387bdb882b0ddab8c"></a>

-   程序语言在使用之前，必须通过命令CREATE LANGUAGE安装到当前的数据库中。 plpgsql是默认的安装语言，其它语言安装时必须指定。
-   如果语言是不受信任的，用户必须有使用程序语言的USAGE权限，或者是系统管理员。

## 语法格式<a name="zh-cn_topic_0283137438_zh-cn_topic_0237122132_zh-cn_topic_0059778658_sd2aa9ae78e2b471aa1517fa438ac5e9e"></a>

```
DO [ LANGUAGE lang_name ] code;
```

## 参数说明<a name="zh-cn_topic_0283137438_zh-cn_topic_0237122132_zh-cn_topic_0059778658_sfb2bd9ccfd56476e820c028e3e53ccaf"></a>

-   **lang\_name**

    用来解析代码的程序语言的名称，如果缺省，默认的语言是plpgsql。

-   **code**

    程序语言代码可以被执行的。程序语言必须指定为字符串才行。


## 示例<a name="zh-cn_topic_0283137438_zh-cn_topic_0237122132_zh-cn_topic_0059778658_s414adb8f7846482184cbbd960d4adfcf"></a>

```
--创建用户webuser。
openGauss=# CREATE USER webuser PASSWORD 'xxxxxxxxx';

--授予用户webuser对模式tpcds下视图的所有操作权限。
openGauss=# DO $$DECLARE r record;
BEGIN
    FOR r IN SELECT c.relname table_name,n.nspname table_schema FROM pg_class c,pg_namespace n 
             WHERE c.relnamespace = n.oid AND n.nspname = 'tpcds' AND relkind IN ('r','v')
    LOOP
        EXECUTE 'GRANT ALL ON ' || quote_ident(r.table_schema) || '.' || quote_ident(r.table_name) || ' TO webuser';
    END LOOP;
END$$;


--删除用户webuser。
openGauss=# DROP USER webuser CASCADE;
```

