# 访问和使用 oGRAC

## 访问 oGRAC

连接数据库的客户端工具包括ogsql、应用程序接口（如JDBC）。

- ogsql是oGRAC自带的客户端工具。使用ogsql连接数据库，可以交互式地输入、编辑、执行SQL语句。详情可以参考[ogsql使用说明](../tool_and_commandreference/client_tool/ogsql_instructions.md)
- 用户可以使用标准的数据库应用程序接口（如JDBC），开发基于oGRAC的应用程序。详情可以参考[JDBC指南](../developer_guide/jdbc/development_process_jdbc.md)

---

## 使用 oGRAC

以下内容描述使用 oGRAC 的基本操作。通过下面内容可以了解到创建数据库、创建表以及向表中插入数据和查询表中数据等操作。

### 前提条件

已经完成了 oGRAC 的安装。

### 操作步骤

1. 以安装用户登录数据库主节点。

2. 连接数据库。

    数据库安装完成后，默认会拉起数据库，第一次连接可以连接到此数据库。

    执行如下命令连接数据库。

    ```shell
    ogsql / as sysdba
    ```

    另外，也可以使用如下命令连接数据库。

    ```shell
    ogsql user_name/user_password@127.0.0.1:port
    ```

    连接成功后就进入了交互界面。

3. 创建数据库用户。

    执行如下命令创建数据库用户。

    ```shell
    create user user_name identified by 'user_password';
    ```

    当结果显示为如下信息，则表示创建成功。

    ```shell
    Succeed.
    ```

    执行如下命令设置用户为系统管理员。

    ```shell
    grant all to user_name;
    ```

4. 创建表。

    执行如下命令创建一个名称为 mytable 的只有一列的表。字段名为 firstcol，字段类型为 integer。

    ```shell
    create table mytable (firstcol int);
    ```

    当结果显示为如下信息，则表示创建成功。

    ```shell
    Succeed.
    ```

    执行如下命令向表中插入数据。

    ```shell
    insert into mytable values (1);
    ```

    当结果显示为如下信息，则表示插入成功。

    ```shell
    1 rows affected.
    ```

    执行如下命令查询表中数据。
    
    ```shell
    select * from mytable;
    FIRSTCOL
    ------------
    1

    1 rows fetched.
    ```
