# 使用指导<a name="ZH-CN_TOPIC_0294748989"></a>

## 前提条件<a name="zh-cn_topic_0059779027_s7c2e433674384463a42b1e562a499257"></a>

连接数据库时使用的用户需要具备访问数据库的权限。

## 背景信息<a name="zh-cn_topic_0059779027_sec8c9233ebad4d6da06846cb31af1f44"></a>

使用gsql命令可以连接本机的数据库服务，也可以连接远程数据库服务。连接远程数据库服务时，需要在服务器上设置允许远程连接，详细操作请参见《快速入门》中“访问openGauss \> 使用gsql访问openGauss”章节。

## 操作步骤<a name="zh-cn_topic_0059779027_s88b93467806944068b85cf2ec928ae02"></a>

1.  使用gsql连接到openGauss服务器。

    gsql工具使用-d参数指定目标数据库名、-U参数指定数据库用户名、-h参数指定主机名、-p参数指定端口号信息。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >若未指定数据库名称，则使用初始化时默认生成的数据库名称；若未指定数据库用户名，则默认使用当前操作系统用户作为数据库用户名；当某个值没有前面的参数（-d、-U等）时，若连接的命令中没有指定数据库名（-d）则该参数会被解释成数据库名；如果已经指定数据库名（-d）而没有指定数据库用户名（-U）时，该参数则会被解释成数据库用户名。

    示例1，使用omm用户连接到本机postgres数据库的8000端口。

    ```
    gsql -d postgres -p 8000
    ```

    示例2，使用jack用户连接到远程主机postgres数据库的8000端口。

    ```
    gsql -h 10.180.123.163 -d postgres -U jack -p 8000
    ```

    集中式集群中，连接主DataNode时可以把DataNode的IP地址使用逗号分割全部添加到-h后，gsql将依次从前往后连接每个IP地址，查询当前DataNode是否为主DataNode，如果不是则断开连接尝试下一个IP地址，直到找到主DataNode为止。

    ```
    gsql -h 10.180.123.163,10.180.123.164,10.180.123,165 -d postgres -U jack -p 8000
    ```

    示例3，参数postgres和omm不属于任何选项时，分别被解释成了数据库名和用户名。

    ```
    gsql postgres omm -p 8000
    ```

    **等效于**

    ```
    gsql -d postgres -U omm -p 8000
    ```

    详细的gsql参数请参见[命令参考](命令参考-gsql.md)。

2.  执行SQL语句。

    以创建数据库human\_staff为例。

    ```
    CREATE DATABASE human_staff;
    CREATE DATABASE
    ```

    通常，输入的命令行在遇到分号的时候结束。如果输入的命令行没有错误，结果就会输出到屏幕上。

3.  执行gsql元命令。

    以列出openGauss中所有的数据库和描述信息为例。

    ```
    openGauss=# \l
                                    List of databases
          Name      |  Owner   | Encoding  | Collate | Ctype |   Access privileges   
    ----------------+----------+-----------+---------+-------+-----------------------
     human_resource | omm | SQL_ASCII | C       | C     | 
     postgres       | omm | SQL_ASCII | C       | C     | 
     template0      | omm | SQL_ASCII | C       | C     | =c/omm         +
                    |          |           |         |       | omm=CTc/omm
     template1      | omm | SQL_ASCII | C       | C     | =c/omm          +
                    |          |           |         |       | omm=CTc/omm
     human_staff    | omm | SQL_ASCII | C       | C     | 
    (5 rows)
    ```

    更多gsql元命令请参见[元命令参考](元命令参考.md)。


## 示例<a name="zh-cn_topic_0059779027_sa12a135ee93d4bfa8fcbf57ae87b805d"></a>

以把一个查询分成多行输入为例。注意提示符的变化：

```
openGauss=# CREATE TABLE HR.areaS(
openGauss(# area_ID   NUMBER,
openGauss(# area_NAME VARCHAR2(25)
openGauss-# )tablespace EXAMPLE;
CREATE TABLE
```

查看表的定义：

```
openGauss=# \d HR.areaS
               Table "hr.areas"
  Column   |         Type          | Modifiers 
-----------+-----------------------+-----------
 area_id   | numeric               | not null
 area_name | character varying(25) | 
```

向HR.areaS表插入四行数据：

```
openGauss=# INSERT INTO HR.areaS (area_ID, area_NAME) VALUES (1, 'Europe');
INSERT 0 1
openGauss=# INSERT INTO HR.areaS (area_ID, area_NAME) VALUES (2, 'Americas');
INSERT 0 1
openGauss=# INSERT INTO HR.areaS (area_ID, area_NAME) VALUES (3, 'Asia');
INSERT 0 1
openGauss=# INSERT INTO HR.areaS (area_ID, area_NAME) VALUES (4, 'Middle East and Africa');
INSERT 0 1
```

切换提示符：

```
openGauss=# \set PROMPT1 '%n@%m %~%R%#'
omm@[local] openGauss=#
```

查看表：

```
omm@[local] openGauss=# SELECT * FROM HR.areaS;
 area_id |       area_name        
---------+------------------------
       1 | Europe
       4 | Middle East and Africa
       2 | Americas
       3 | Asia
(4 rows)
```

可以用\\pset命令以不同的方法显示表：

```
omm@[local] openGauss=# \pset border 2
Border style is 2.
omm@[local] openGauss=# SELECT * FROM HR.areaS;
+---------+------------------------+
| area_id |       area_name        |
+---------+------------------------+
|       1 | Europe                 |
|       2 | Americas               |
|       3 | Asia                   |
|       4 | Middle East and Africa |
+---------+------------------------+
(4 rows)
```

```
omm@[local] openGauss=# \pset border 0
Border style is 0.
omm@[local] openGauss=# SELECT * FROM HR.areaS;
area_id       area_name        
------- ----------------------
      1 Europe
      2 Americas
      3 Asia
      4 Middle East and Africa
(4 rows)
```

使用元命令：

```
omm@[local] openGauss=# \a \t \x
Output format is unaligned.
Showing only tuples.
Expanded display is on.
omm@[local] openGauss=# SELECT * FROM HR.areaS;
area_id|2
area_name|Americas

area_id|1
area_name|Europe

area_id|4
area_name|Middle East and Africa

area_id|3
area_name|Asia
omm@[local] openGauss=#
```

