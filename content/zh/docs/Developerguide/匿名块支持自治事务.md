# 匿名块支持自治事务<a name="ZH-CN_TOPIC_0289900151"></a>

自治事务可以在匿名块中定义，标识符为PRAGMA AUTONOMOUS\_TRANSACTION，其余语法与创建匿名块语法相同，示例如下。

```
create table t1(a int ,b text);

START TRANSACTION;
DECLARE 
	PRAGMA AUTONOMOUS_TRANSACTION;
BEGIN
	
	insert into t1 values(1,'you are so cute,will commit!');
END;
/
insert into t1 values(1,'you will rollback!');
rollback;

select * from t1;
```

上述例子，最后在回滚的事务块前执行包含自治事务的匿名块，也能直接说明了自治事务的特性，即主事务的回滚，不会影响自治事务已经提交的内容。

