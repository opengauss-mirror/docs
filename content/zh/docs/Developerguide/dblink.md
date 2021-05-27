# dblink<a name="ZH-CN_TOPIC_0272283427"></a>

dblink是一个可以支持在一个openGauss数据库会话中连接到其他openGauss数据库的工具，openGauss默认不编译dblink，下面依次介绍如何编译和使用dblink。

## 编译dblink<a name="section206261540193912"></a>

当前openGauss数据库将dblink的源码放在contrib/dblink目录中，用户需要使用的时候，在完整编译安装完openGauss数据库之后，只需要进入上述目录执行make, make install即可完成dblink的编译安装。

## 常用的dblink函数<a name="section1776874817393"></a>

-   加载dblink扩展：**CREATE EXTENSION dblink;**

-   打开一个到远程数据库的持久连接：**SELECT dblink_connect(text connstr);**

-   关闭一个到远程数据库的持久连接：**SELECT dblink_disconnect();**

-   在远程数据库执行查询：**SELECT * FROM dblink(text connstr, text sql);** 

-   在远程数据库执行命令：**SELECT dblink_exec(text connstr, text sql);**

-   返回所有打开的命名 dblink 连接的名称：**SELECT dblink_get_connections();**

-   发送一个异步查询到远程数据库：**SELECT dblink_send_query(text connname, text sql);**

-   检查连接是否正在忙于一个异步查询：**SELECT dblink_is_busy(text connname);**

-   删除扩展：**DROP EXTENSION dblink;**

## 注意事项<a name="section17197204403"></a>

-   目前仅支持openGauss数据库通过dblink访问另一个openGauss数据库，不支持openGauss连接PostgreSQL。


