# CREATE PUBLICATION

## **功能描述**<a name="section12584151914217"></a>

向当前数据库添加一个新的发布，发布的名称必须与当前数据库中任何现有发布的名称不同。发布本质上是通过逻辑复制将一组表的数据变更进行复制。

## **注意事项**<a name="section412011394429"></a>

-   如果既没有指定FOR TABLE，也没有指定FOR ALL TABLES， 那么这个发布就是以一组空表开始的，可以在后续添加表。
-   创建发布不会开始复制。它只为未来的订阅者定义一个分组和过滤逻辑。 要创建一个发布，调用者必须拥有当前数据库的CREATE权限。（当然，系统管理员不需要这个检查。）
-   要将表添加到发布中，调用者必须拥有该表的所有权。FOR ALL TABLES子句要求调用者是具有SYSADMIN权限用户。
-   添加到发布UPDATE或DELETE操作的发布的表必须已经定义了REPLICA IDENTITY，否则将在这些表上禁止这些操作。
-   COPY ... FROM命令是作为INSERT操作发布的。不发布TRUNCATE和DDL操作。

## **语法格式**<a name="section52689257424"></a>

```
CREATE PUBLICATION name 
    [ FOR TABLE table_name [, ...] 
      | FOR ALL TABLES ] 
    [ WITH ( publication_parameter [=value] [, ... ] ) ];
```

## **参数说明**<a name="section581153212424"></a>

- **name**

  新发布的名称。

- **FOR TABLE**

  指定要添加到发布的表的列表。 只有持久基表才能成为发布的一部分，临时表、非日志表、外表、MOT表、物化视图、常规视图不能被发布。

- **FOR ALL TABLES**

  将发布标记为复制数据库中所有表的更改，包括在将来创建的表。

- **WITH \( publication\_parameter \[= value\] \[, ... \] \)**

  该子句指定发布的可选参数。支持下列参数：

  - **publish \(string\)**

    这个参数决定了哪些DML操作可以发布给订阅者。该值是一个用逗号分隔的操作列表，允许的操作是insert、update和delete，不指定则默认发布所有的动作。该选项的默认值是'insert, update, delete'。

## **示例**<a name="section109371845154215"></a>

```
--创建一个发布，发布两个表中所有更改。
CREATE PUBLICATION mypublication FOR TABLE users, departments;
--创建一个发布，发布所有表中的所有更改。
CREATE PUBLICATION alltables FOR ALL TABLES;
--创建一个发布，只发布一个表中的INSERT操作。
CREATE PUBLICATION insert_only FOR TABLE mydata WITH (publish = 'insert');
--修改发布的动作。
ALTER PUBLICATION insert_only SET (publish='insert,update,delete');
--向发布中添加表。
ALTER PUBLICAITON insert_only ADD TABLE mydata2;
--删除发布。
DROP PUBLICATION insert_only;
```

## 相关链接<a name="section871143685317"></a>

[ALTER PUBLICATION](ALTER-PUBLICATION.md)，[DROP PUBLICATION](DROP-PUBLICATION.md)

