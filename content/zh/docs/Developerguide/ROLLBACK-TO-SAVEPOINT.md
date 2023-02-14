# ROLLBACK TO SAVEPOINT

## 功能描述<a name="zh-cn_topic_0283137625_zh-cn_topic_0237122182_zh-cn_topic_0059778869_section2860121201518"></a>

ROLLBACK TO SAVEPOINT用于回滚到一个保存点，隐含地删除所有在该保存点之后建立的保存点。

回滚所有指定保存点建立之后执行的命令。保存点仍然有效，并且需要时可以再次回滚到该点。

## 注意事项<a name="zh-cn_topic_0283137625_zh-cn_topic_0237122182_zh-cn_topic_0059778869_section586112113153"></a>

-   不能回滚到一个未定义的保存点，语法上会报错。
-   在保存点方面，游标有一些非事务性的行为。任何在保存点里打开的游标都会在回滚掉这个保存点之后关闭。如果一个前面打开了的游标在保存点里面，并且游标被一个FETCH命令影响，而这个保存点稍后回滚了，那么这个游标的位置仍然在FETCH让它指向的位置（也就是FETCH不会被回滚）。关闭一个游标的行为也不会被回滚给撤消掉。如果一个游标的操作导致事务回滚，那么这个游标就会置于不可执行状态，所以，尽管一个事务可以用ROLLBACK TO SAVEPOINT重新恢复，但是游标不能再使用了。
-   使用ROLLBACK TO SAVEPOINT回滚到一个保存点。使用RELEASE SAVEPOINT删除一个保存点，但是保留该保存点建立后执行的命令的效果。

## 语法格式<a name="zh-cn_topic_0283137625_zh-cn_topic_0237122182_zh-cn_topic_0059778869_section18861202111512"></a>

```
ROLLBACK [ WORK | TRANSACTION ] TO [ SAVEPOINT ] savepoint_name;
```

## 参数说明<a name="zh-cn_topic_0283137625_zh-cn_topic_0237122182_zh-cn_topic_0059778869_section68626218158"></a>

savepoint\_name。

回滚截至的保存点。

## 示例<a name="zh-cn_topic_0283137625_zh-cn_topic_0237122182_zh-cn_topic_0059778869_section18863621121517"></a>

```
--撤销 my_savepoint 建立之后执行的命令的影响。
openGauss=# START TRANSACTION;
openGauss=# SAVEPOINT my_savepoint;
openGauss=# ROLLBACK TO SAVEPOINT my_savepoint;
--游标位置不受保存点回滚的影响。
openGauss=# DECLARE foo CURSOR FOR SELECT 1 UNION SELECT 2;
openGauss=# SAVEPOINT foo;
openGauss=# FETCH 1 FROM foo;
 ?column?
----------
        1
openGauss=# ROLLBACK TO SAVEPOINT foo;
openGauss=# FETCH 1 FROM foo;
 ?column?
----------
        2
openGauss=# RELEASE SAVEPOINT my_savepoint;
openGauss=# COMMIT;
```

## 相关链接<a name="zh-cn_topic_0283137625_zh-cn_topic_0237122182_zh-cn_topic_0059778869_section3863621131515"></a>

[SAVEPOINT](SAVEPOINT.md)，[RELEASE SAVEPOINT](RELEASE-SAVEPOINT.md)
