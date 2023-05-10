# 锁

如果需要保持数据库数据的一致性，可以使用LOCK TABLE来阻止其他用户修改表。

例如，一个应用需要保证表中的数据在事务的运行过程中不被修改。为实现这个目的，则可以对表使用进行锁定。这样将防止数据不被并发修改。

LOCK TABLE只在一个事务块的内部有用，在事务结束时就会被释放。

## 语法格式<a name="section1632155118333"></a>

```
LOCK [ TABLE ] name  IN lock_mode MODE
```

## 参数说明<a name="section6973139183420"></a>

-   **name**

    要锁定的表的名称。

-   **lock\_mode**

    锁的模式。基本的有：

    -   **ACCESS EXCLUSIVE**

        这个模式保证其所有者（事务）是可以访问该表的唯一事务。也是缺省锁模式。

    -   **ACCESS SHARE**

        只读取表而不修改的锁模式。



## 示例<a name="zh-cn_topic_0283136808_zh-cn_topic_0237122168_zh-cn_topic_0059778442_s9884bdbe455b460a9a2dde267283b75b"></a>

在执行删除操作时对一个表进行ACCESS EXCLUSIVE锁。

```
--创建示例表格。
openGauss=# CREATE TABLE graderecord  
             (  
             number INTEGER,  
             name CHAR(20),  
             class CHAR(20),  
             grade INTEGER
             );
--插入数据。
openGauss=# insert into graderecord values('210101','Alan','21.01',92);  
insert into graderecord values('210102','Ben','21.01',62);  
insert into graderecord values('210103','Brain','21.01',26);  
insert into graderecord values('210204','Carl','21.02',77);  
insert into graderecord values('210205','David','21.02',47);  
insert into graderecord values('210206','Eric','21.02',97);  
insert into graderecord values('210307','Frank','21.03',90);  
insert into graderecord values('210308','Gavin','21.03',100); 
insert into graderecord values('210309','Henry','21.03',67);  
insert into graderecord values('210410','Jack','21.04',75);  
insert into graderecord values('210311','Jerry','21.04',60);

--启动进程。
openGauss=# START TRANSACTION;

--给示例表格。
openGauss=# LOCK TABLE graderecord IN ACCESS EXCLUSIVE MODE;

--删除示例表格。
openGauss=# DELETE FROM graderecord WHERE name ='Alan';

openGauss=# COMMIT;
```

