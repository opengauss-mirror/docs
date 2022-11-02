# ALTER RESOURCE POOL<a name="ZH-CN_TOPIC_0000001148027836"></a>

## 功能描述<a name="zh-cn_topic_0059778630_sad90a3a714584faa8f5b38b344e0c313"></a>

修改一个资源池，指定其他控制组。

## 注意事项<a name="zh-cn_topic_0059778630_sc6d595f2e535403c85636f0e37b66060"></a>

只要用户对当前数据库有ALTER权限，就可以修改资源池。

## 语法格式<a name="zh-cn_topic_0059778630_s4811e37a59884a3897fa21c665e5fa52"></a>

```
ALTER RESOURCE POOL pool_name
    WITH ({MEM_PERCENT= pct | CONTROL_GROUP="group_name" | ACTIVE_STATEMENTS=stmt | MAX_DOP = dop | MEMORY_LIMIT='memory_size' | io_limits=io_limits | io_priority='io_priority'}[, ... ]);
```

## 参数说明<a name="zh-cn_topic_0059778630_s744bfeb9db194d149727d961f0f4b382"></a>

-   **pool\_name**

    资源池名称。

    资源池名称为已创建的资源池。

    取值范围：字符串，要符合标识符的命名规范。

- **group\_name**

  控制组名称。

  >![](public_sys-resources/icon-note.gif) **说明：** 
  >
  >-   设置控制组名称时，语法可以使用双引号，也可以使用单引号。

  >-   group\_name对大小写敏感。

  >-   不指定group\_name时，默认指定的字符串为 "Medium"，代表指定DefaultClass控制组的“Medium” Timeshare控制组。

  >-   若数据库管理员指定自定义Class组下的Workload控制组，如control\_group的字符串为：“class1:workload1”；代表此资源池指定到class1控制组下的workload1控制组。也可同时指定Workload控制组的层次，如control\_group的字符串为：“class1:workload1:1”。

  >-   若数据库用户指定Timeshare控制组代表的字符串，即“Rush”、“High”、“Medium”或“Low”其中一种，如control\_group的字符串为“High”；代表资源池指定到DefaultClass控制组下的“High” Timeshare控制组。

  取值范围：已创建的控制组。

-   **stmt**

    资源池语句执行的最大并发数量。

    取值范围：数值型，-1\~2147483647‬。

-   **dop**

    资源池最大并发度，语句执行时能够创建的最多线程数量。

    取值范围：数值型，1\~64‬。

-   **memory\_size**

    资源池最大使用内存。

    取值范围：字符串，内容范围1KB\~2047GB。

-   **mem\_percent**

    资源池可用内存占全部内存或者组用户内存使用的比例。

    在多租户场景下，组用户和业务用户的mem\_percent范围为1-100的整数，默认为20。

    在普通场景下，普通用户的mem\_percent范围为0-100的整数，默认值为0。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >mem\_percent和memory\_limit同时指定时，只有mem\_percent起作用。

-   **io\_limits**

    资源池每秒可触发IO次数上限。

    对于行存，以万次为单位计数，而列存则以正常次数计数。

-   **io\_priority**

    IO利用率高达90%时，重消耗IO作业进行IO资源管控时关联的优先级等级。

    包括三档可选：Low、Medium和High。不控制时可设置为None，默认为None。


>![](public_sys-resources/icon-note.gif) **说明：** 
>io\_limits和io\_priority的设置都仅对复杂作业有效。包括批量导入（INSERT INTO SELECT、COPY FROM、CREATE TABLE AS等），单DN数据量大约超过500MB的复杂查询和VACUUM FULL等操作。

## 示例<a name="zh-cn_topic_0059778630_s5701ea039ae94537a49dec3cd0c173d8"></a>

本示例假定用户已成功创建自定义的class1控制组及其下属的Low、wg1、wg2 三个Workload控制组。

```
--创建一个资源池。
openGauss=# CREATE RESOURCE POOL pool1;

--更新一个资源池，其控制组指定为"DefaultClass"组下属的"High" Timeshare Workload控制组。
openGauss=# ALTER RESOURCE POOL pool1 WITH (CONTROL_GROUP="High");

--更新一个资源池，其控制组指定为"class1"组下属的"Low" Timeshare Workload控制组。
openGauss=# ALTER RESOURCE POOL pool1 WITH (CONTROL_GROUP="class1:Low");

--更新一个资源池，其控制组指定为"class1"组下属的"wg1" Workload控制组。
openGauss=# ALTER RESOURCE POOL pool1 WITH (CONTROL_GROUP="class1:wg1");

--更新一个资源池，其控制组指定为"class1"组下属的"wg2" Workload控制组。
openGauss=# ALTER RESOURCE POOL pool1 WITH (CONTROL_GROUP="class1:wg2:3"); 
--删除资源池pool1。
openGauss=# DROP RESOURCE POOL pool1;
```

## 相关链接<a name="zh-cn_topic_0059778630_seca31b0ddce240958b33b5be42b33c0c"></a>

[CREATE RESOURCE POOL](CREATE-RESOURCE-POOL.md)，[DROP RESOURCE POOL](DROP-RESOURCE-POOL.md)

