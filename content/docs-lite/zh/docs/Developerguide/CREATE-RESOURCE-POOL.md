# CREATE RESOURCE POOL<a name="ZH-CN_TOPIC_0000001193907775"></a>

## 功能描述<a name="zh-cn_topic_0059777569_sea021d0b1f154052a73b69b89d636f66"></a>

创建一个资源池，并指定此资源池相关联的控制组。

## 注意事项<a name="zh-cn_topic_0059777569_sf6c61d950e6b4383a3bc630c8d5910a4"></a>

只要用户对当前数据库有CREATE权限，就可以创建资源池。

## 语法格式<a name="zh-cn_topic_0059777569_s864093cc963a4396a4a304befe0df251"></a>

```
CREATE RESOURCE POOL pool_name
    [WITH ({MEM_PERCENT=pct | CONTROL_GROUP="group_name" | ACTIVE_STATEMENTS=stmt | MAX_DOP = dop | MEMORY_LIMIT='memory_size' | io_limits=io_limits | io_priority='io_priority' | nodegroup="nodegroupname" | is_foreign=boolean }[, ... ])];
```

## 参数说明<a name="zh-cn_topic_0059777569_s9b6dbda628294e24a95da9e33949c3e8"></a>

-   **pool\_name**

    资源池名称。

    资源池名称不能和当前数据库里已有的资源池重名。

    取值范围：字符串，要符合标识符的命名规范。

-   **group\_name**

    控制组名称。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >-   设置控制组名称时，语法可以使用双引号，也可以使用单引号。
    >-   group\_name对大小写敏感。
    >-   不指定group\_name时，默认指定的字符串为 "Medium"，代表指定DefaultClass控制组的"Medium" Timeshare控制组。
    >-   若数据库管理员指定自定义Class组下的Workload控制组，如control\_group的字符串为："class1:workload1"；代表此资源池指定到class1控制组下的workload1控制组。也可同时指定Workload控制组的层次，如control\_group的字符串为："class1:workload1:1"。
    >-   若数据库用户指定Timeshare控制组代表的字符串，即"Rush"、"High"、"Medium"或"Low"其中一种，如control\_group的字符串为"High"；代表资源池指定到DefaultClass控制组下的"High" Timeshare控制组。

    取值范围：字符串，要符合说明中的规则，其指定已创建的控制组。

-   **stmt**

    资源池语句执行的最大并发数量。

    取值范围：数值型，-1\~2147483647‬。

-   **dop**

    资源池最大并发度，语句执行时能够创建的最多线程数量。

    取值范围：数值型，1\~64‬

-   **memory\_size**

    资源池最大使用内存。

    取值范围：字符串，内容范围1KB\~2047GB

-   **mem\_percent**

    资源池可用内存占全部内存或者组用户内存使用的比例。

    在多租户场景下，组用户和业务用户的mem\_percent范围1-100，默认为20。

    在普通场景下，普通用户的mem\_percent范围为0-100，默认值为0。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >mem\_percent和memory\_limit同时指定时，只有mem\_percent起作用。

-   **io\_limits**

    资源池每秒可触发IO次数上限。

    对于行存，以万次为单位计数，而列存则以正常次数计数。

-   **io\_priority**

    IO利用率高达90%时，重消耗IO作业进行IO资源管控时关联的优先级等级。

    包括三档可选：Low、Medium和High。不控制时可设置为None。默认为None。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >io\_limits和io\_priority的设置都仅对复杂作业有效。包括批量导入（INSERT INTO SELECT，COPY FROM，CREATE TABLE AS等），单DN数据量大约超过500MB的复杂查询和VACUUM FULL等操作。

-   **nodegroup**

    在逻辑集群模式下，指定逻辑集群名称。必须是存在的逻辑集群。

    如果逻辑集群名称包含大写字符、特殊符号或以数字开头，SQL语句中对逻辑集群名称需要加双引号。

-   **is\_foreign**

    在逻辑集群模式下，指定当前资源池用于控制没有关联本逻辑集群的普通用户的资源。这里的逻辑集群是由资源池nodegroup字段指定的。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >-   nodegroup必须是存在的逻辑集群，不能是elastic\_group和安装的nodegroup \(group\_version1\)。
    >-   如果指定了is\_foreign为true，则资源池不能再关联用户，即不允许通过CREATE USER ... RESOURCE POOL语句来将该资源池配置给用户。该资源池自动检查用户是否关联到资源池指定的逻辑集群，如果用户没有关联到该逻辑集群，则这些用户在逻辑集群所包含的数据库节点上运行将受到该资源池的资源控制。


## 示例<a name="zh-cn_topic_0059777569_s44181f6d005b4da1952aaeff4ef66e0e"></a>

本示例假定用户已预先成功创建控制组（创建控制组请参考[设置控制组](设置控制组.md)）。

```
--创建一个默认资源池，其控制组为"DefaultClass"组下属的"Medium" Timeshare Workload控制组。
openGauss=# CREATE RESOURCE POOL pool1;

-- 创建一个资源池，其控制组指定为"DefaultClass"组下属的"High" Timeshare Workload控制组。
openGauss=# CREATE RESOURCE POOL pool2 WITH (CONTROL_GROUP="High");

-- 创建一个资源池，其控制组指定为"class1"组下属的"Low" Timeshare Workload控制组。
openGauss=# CREATE RESOURCE POOL pool3 WITH (CONTROL_GROUP="class1:Low");

-- 创建一个资源池，其控制组指定为"class1"组下属的"wg1" Workload控制组。
openGauss=# CREATE RESOURCE POOL pool4 WITH (CONTROL_GROUP="class1:wg1");

-- 创建一个资源池，其控制组指定为"class1"组下属的"wg2" Workload控制组。
openGauss=# CREATE RESOURCE POOL pool5 WITH (CONTROL_GROUP="class1:wg2:3");

--删除资源池。
openGauss=# DROP RESOURCE POOL pool1;
openGauss=# DROP RESOURCE POOL pool2;
openGauss=# DROP RESOURCE POOL pool3;
openGauss=# DROP RESOURCE POOL pool4;
openGauss=# DROP RESOURCE POOL pool5;
```

## 相关链接<a name="zh-cn_topic_0059777569_s00af0cee720942fa8efec001d31e8c84"></a>

[ALTER RESOURCE POOL](ALTER-RESOURCE-POOL.md)，[DROP RESOURCE POOL](DROP-RESOURCE-POOL.md)

