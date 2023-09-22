# CREATE TRIGGER<a name="ZH-CN_TOPIC_0289900727"></a>

## 功能描述<a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_zh-cn_topic_0059778166_s08b0f056b5f14492970a9037c63fa70c"></a>

创建一个事件触发器，在指定事件发生发生时执行指定的事件触发器函数。

## 注意事项<a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_zh-cn_topic_0059778166_sd48f2980b9464b1abca65a4747930552"></a>

-   只有超级用户或系统管理员才有权限创建事件触发器。
-   如果为同一事件定义了多个相同类型的事件触发器，则按事件触发器的名称字母顺序触发它们。
-   事件触发器会对ddl操作的性能有一定影响。取决于事件触发器的数量还执行函数的复杂程度。

## 语法格式<a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_zh-cn_topic_0059778166_s93c6eaefe7c447408b7d42ff86e6035f"></a>

    CREATE EVENT TRIGGER name
        ON event
        [ WHEN filter_variable IN (filter_value [, ... ]) [ AND ... ] ]
        EXECUTE PROCEDURE function_name()

## 参数说明<a name="zh-cn_topic_0283731165_zh-cn_topic_0237112223_zh-cn_topic_0059778166_s65dbaae3763942599852d585997c77dd"></a>

-   **name**

    事件触发器名称。

-   **filter\_variable**

    事件触发器用来做过滤的变量（目前仅支持TAG）。

-   **event**

    事件触发器支持的事件，目前支持ddl_command_start、ddl_command_end、sql_drop、table_rewrite。

-   **function\_name**

    用户定义的函数，必须声明为不带参数并返回类型为event_trigger，在事件触发器触发时执行。

## 示例<a name="zh-cn_topic_0283137014_zh-cn_topic_0237122081_zh-cn_topic_0059777895_s7f55076bb56940b7920a431c0c344669"></a>
```
--创建测试数据库
openGauss=# create database test_event_trigger dbcompatibility='PG';
openGauss=# \c test_event_trigger
--创建事件触发器函数(用于ddl_command_start、ddl_command_end事件)
test_event_trigger=# create function test_event_trigger() returns event_trigger as $$
BEGIN
    RAISE NOTICE 'test_event_trigger: % %', tg_event, tg_tag;
END
$$ language plpgsql;

--创建事件触发器函数(用于sql_drop事件)
test_event_trigger=# CREATE OR REPLACE FUNCTION drop_sql_command()
RETURNS event_trigger AS $$
BEGIN
RAISE NOTICE '% - sql_drop', tg_tag;
END;
$$ LANGUAGE plpgsql;

--创建事件触发器函数(用于table_rewrite事件)
test_event_trigger=# CREATE OR REPLACE FUNCTION test_evtrig_no_rewrite() RETURNS event_trigger
LANGUAGE plpgsql AS $$
BEGIN
  RAISE EXCEPTION 'rewrites not allowed';
END;
$$;

--创建事件类型为ddl_command_start的事件触发器
test_event_trigger=# create event trigger regress_event_trigger on ddl_command_start
   execute procedure test_event_trigger();

--创建事件类型为ddl_command_end的事件触发器
test_event_trigger=# create event trigger regress_event_trigger_end on ddl_command_end
   execute procedure test_event_trigger();

--创建事件类型为sql_drop的事件触发器
test_event_trigger=# CREATE EVENT TRIGGER sql_drop_command ON sql_drop
    EXECUTE PROCEDURE drop_sql_command();

--创建事件类型为table_rewrite的事件触发器
test_event_trigger=# create event trigger no_rewrite_allowed on table_rewrite
  when tag in ('alter table') execute procedure test_evtrig_no_rewrite();

--执行ddl语句查看事件触发器效果(触发ddl_command_start与ddl_command_end)
test_event_trigger=# create table event_trigger_table (a int);

--执行alter table语句查看事件触发器效果(触发ddl_command_start与table_rewrite,ddl_command_end由于禁止rewrite报错不触发)
test_event_trigger=# alter table event_trigger_table alter column a type numeric;

--执行drop语句查看事件触发器效果(触发ddl_command_start、sql_drop与ddl_command_end)
test_event_trigger=# drop table event_trigger_table;

--修改事件触发器
test_event_trigger=# create role regress_evt_user WITH ENCRYPTED PASSWORD 'EvtUser123';
test_event_trigger=# ALTER EVENT TRIGGER regress_event_trigger RENAME TO regress_event_trigger_start;
--应该失败，事件触发器的owner只能为超级用户
test_event_trigger=# ALTER EVENT TRIGGER regress_event_trigger_start owner to regress_evt_user;
test_event_trigger=# ALTER EVENT TRIGGER regress_event_trigger_start disable;
test_event_trigger=# ALTER EVENT TRIGGER regress_event_trigger_start enable always;

--删除事件触发器
test_event_trigger=# DROP EVENT TRIGGER regress_event_trigger_start;
test_event_trigger=# DROP EVENT TRIGGER regress_event_trigger_end;
test_event_trigger=# DROP EVENT TRIGGER sql_drop_command;
test_event_trigger=# DROP EVENT TRIGGER no_rewrite_allowed;
```


## 相关链接<a name="zh-cn_topic_0283137014_zh-cn_topic_0237212081_zh-cn_topic_0059777895_see210f0a4a346d4c8e1c34bd85b3ec05"></a>

[ALTER EVENT TRIGGER](ALTER-EVENT-TRIGGER.md)，[DROP EVENT TRIGGER](DROP-EVENT-TRIGGER.md)

