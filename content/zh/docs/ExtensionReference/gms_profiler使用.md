# gms_profiler使用

## 创建Extension<a name="section21088306113"></a>

创建gms_profiler Extension可直接使用CREATE Extension命令进行创建：

```
openGauss=# CREATE Extension gms_profiler;
```

## 使用Extension<a name="section107391050141118"></a>


创建用于测试的存储过程。

```sql
openGauss=# create or replace procedure do_something (p_times in number) as
openGauss$# l_dummy number;
openGauss$# begin
openGauss$#     for i in 1 .. p_times loop
openGauss$#         select l_dummy +1 into l_dummy;
openGauss$#     end loop;
openGauss$# end;
openGauss$# /
CREATE PROCEDURE
openGauss=#
openGauss=# create or replace procedure do_wrapper (p_times in number) as
openGauss$# begin
openGauss$#     for i in 1 .. p_times loop
openGauss$#         do_something(p_times);
openGauss$#     end loop;
openGauss$# end;
openGauss$# /
CREATE PROCEDURE
openGauss=#
openGauss=# create or replace procedure test_profiler_start () as
openGauss$# declare
openGauss$# l_result binary_integer;
openGauss$# begin
openGauss$#     l_result := gms_profiler.start_profiler('test_profiler', 'simple');
openGauss$#     do_wrapper(p_times => 2);
openGauss$#     l_result := gms_profiler.stop_profiler();
openGauss$# end;
openGauss$# /
CREATE PROCEDURE
```

调用存储过程

```
openGauss=# call test_profiler_start();
```

查询结果

```
openGauss=# select * from gms_profiler.plsql_profiler_runs;
openGauss=# select * from gms_profiler.plsql_profiler_units;
openGauss=# select * from gms_profiler.plsql_profiler_data;
```
## 删除Extension<a name="section1587441381220"></a>

在openGauss中删除gms_profiler Extension的方法如下所示：

```
openGauss=# DROP Extension gms_profiler [CASCADE];
```

>![](public_sys-resources/icon-note.png) **说明：** 
>
>如果Extension被其它对象依赖，需要加入CASCADE（级联）关键字，删除所有依赖对象。

