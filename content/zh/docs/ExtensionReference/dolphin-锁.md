# B数据库锁<a name="ZH-CN_TOPIC_0000001225179937"></a>

如果需要保持数据库数据的一致性，可以使用LOCK TABLES来阻止其他用户修改表。

例如，一个应用需要保证表中的数据在事务的运行过程中不被修改。为实现这个目的，则可以对表使用进行锁定。这样将防止数据不被并发修改。

LOCK TABLES使用后，会让接下来的sql处于事务状态中，所以需要用UNLOCK TABLES手动释放锁并结束事务。

另外如果需要对当前session只允许读的话，那么还可以用FLUSH TABLES WITH READ LOCK实现，之后也需要用UNLOCK TABLES手动结束这个功能。



## 语法格式<a name="section1632155118333"></a>

-   上锁
    ```
    LOCK TABLES namelist READ/WRITE
    ```

-   让当前session处于只读表的状态
    ```
    FLUSH TABLES WITH READ LOCK
    ```

-   解锁
    ```
    UNLOCK TABLES
    ```

## 参数说明<a name="section6973139183420"></a>

-   **namelist**

    要锁定的表的名称，可以有多个表。

-   **READ/WRITE**

    锁的模式。有：

    -   **READ**

        读锁，只读取表而不修改的锁模式。

    -   **WRITE**

        写锁，这个模式保证其所有者（事务）是可以访问该表的唯一事务。



## 示例<a name="zh-cn_topic_0283136808_zh-cn_topic_0237122168_zh-cn_topic_0059778442_s9884bdbe455b460a9a2dde267283b75b"></a>

在执行删除操作时对一个表进行WRITE锁。

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

--给示例表格。
openGauss=# LOCK TABLES graderecord WRITE;

--删除示例表格。
openGauss=# DELETE FROM graderecord WHERE name ='Alan';

openGauss=# UNLOCK TABLES;
```
