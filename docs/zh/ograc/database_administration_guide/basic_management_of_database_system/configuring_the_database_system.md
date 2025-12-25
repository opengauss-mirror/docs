# 配置数据库系统

oGRAC数据库提供了多种系统参数可供用户进行查询或者修改，从而灵活的应对不同的环境和业务场景。

### **查看数据库系统参数**

通过系统视图DV_PARAMETERS，用户可以看到当前数据库参数配置情况，以下是对每个参数的解释：

- name：表示参数名字
- value：表示参数的值
- RUNTIME_VALUE：运行时实际使用的值
- DEFAULT_VALUE：参数的默认值
- ISDEFAULT：当前值是否为默认值
- MODIFIABLE：参数是否可修改
- DESCRIPTION：参数描述
- RANGE：参数的取值范围
- DATATYPE：参数的数据类型
- EFFECTIVE：参数生效方式
    - reboot：表示需要重启才能生效
    - immediately：动态生效
    - reconnect：重新连接后生效

### **配置数据库系统参数**

通过ALTER SYSTEM语句，用户可以修改数据库系统参数。

配置参数指令语法格式如下：

```SQL
ALTER SYSTEM SET parameter_name = parameter_value [SCOPE = {PFILE | MEMORY | BOTH}];

--示例
ALTER SYSTEM SET SHARED_POOL_SIZE = 2G SCOPE = MEMORY;

SHOW PARAMETER SHARED_POOL_SIZE;

```
其中的SCOPE各个参数含义如下：

- SCOPE=SPFILE：修改只写入服务器参数文件，重启后生效。

- SCOPE=MEMORY：修改只影响当前实例，立即生效，但重启后失效。

- SCOPE=BOTH：同时修改内存和参数文件，立即生效且重启后仍然有效。

必要的，用户需要有ALTER SYTSYEM的系统权限。