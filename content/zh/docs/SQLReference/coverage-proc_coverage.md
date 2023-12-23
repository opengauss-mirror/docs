# coverage.proc_coverage

proc_coverage表记录存储过程覆盖率信息。只能在系统库中查询到结果，在用户库中无法查询。

**表 1**  proc_coverage表属性
|名称|类型|描述|
|--|--|--|
|coverage_id|bigint|覆盖率信息序号|
|pro_oid|oid|存储过程oid|
|pro_name|text|存储过程名称|
|db_name|text|存储过程所在数据库名称|
|pro_querys|text|存储过程源语句|
|pro_canbreak|boolean[]|布尔数组，下标对应源语句行号，当前行是否支持断点（可执行）|
|coverage|integer[]|int数组，下标对应源语句行号，当前行执行次数|

>![](public_sys-resources/icon-note.png) **说明：**
>
> 1. 该表为unlogged表，当数据库未正常退出时，其中的数据会丢失。
>
> 2. 该表为unlogged表，发生主备切换时，新主机上只存在表结构，无数据。