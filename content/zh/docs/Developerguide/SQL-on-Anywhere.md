# SQL on Anywhere

当前用于大数据处理的引擎组件种类繁多，且各自提供了丰富的接口供用户使用。但对传统数据库用户来说，SQL语言依然是最熟悉和方便的一种接口。如果能在一个客户端中使用SQL语句操作不同的大数据组件，将极大提升使用各种大数据组件的效率。

openGauss支持SQL on Anywhere，基于openGauss可以操作Oracle、Spark和other openGauss，构筑起统一的大数据计算平台。

## 基于Extension Connector的跨数据库实例访问数据<a name="section134436495103"></a>

使用openGauss提供的Extension Connector可以将SQL语句发送到数据库实例外部的Oracle数据库、Spark和其他openGauss数据库实例，并在当前库中返回执行结果，实数据库实例处理数据。

Extension Connector的基本工作原理是：用户首先构建Data Source对象（其中包含目标库的一些连接信息和字符编码方式），然后用户获取该Data Source的使用权限，最后通过标准ODBC API连接目标库，发送SQL语句并获取执行结果。

为了方便使用，Extension Connector为用户提供了统一的连接函数exec\_on\_extension\(text, text\)。其中，第一个参数为Data Source名称，第二个参数为发送的SQL语句。

**函数exec\_on\_extension具有如下特点：**

-   exec\_on\_extension连接目标库的权限由控制Data Source的使用权限实现。
-   exec\_on\_extension处理字符的编码方式放在了Data Source对象中，缺省值为UTF-8。
-   exec\_on\_extension是返回类型为record的函数，即数据集。因而语法上需要'AS\(表定义\)'来接收返回的数据，且不能省略，其基本调用形式如下，且不支持CALL调用。
-   exec\_on\_extension支持发送多种类型的SQL语句，对于处理结果集的方式，建议按下表处理：

    <a name="table173552601415"></a>
    <table><thead align="left"><tr id="row536426141418"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.1.4.1.1"><p id="p19365260146"><a name="p19365260146"></a><a name="p19365260146"></a>SQL语句类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.1.4.1.2"><p id="p1336226131416"><a name="p1336226131416"></a><a name="p1336226131416"></a>SQL语句返回结果</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.1.4.1.3"><p id="p13672619140"><a name="p13672619140"></a><a name="p13672619140"></a>AS子句</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1836126161416"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.1 "><p id="p690895191917"><a name="p690895191917"></a><a name="p690895191917"></a>DDL</p>
    <p id="p1936826191418"><a name="p1936826191418"></a><a name="p1936826191418"></a>（如CREATE、DROP等）</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.2 "><p id="p136112617143"><a name="p136112617143"></a><a name="p136112617143"></a>空集：表示成功</p>
    <p id="p4602101371619"><a name="p4602101371619"></a><a name="p4602101371619"></a>非空：表示失败</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.3 "><p id="p436426141419"><a name="p436426141419"></a><a name="p436426141419"></a>可定义为一列text类型：</p>
    <p id="p924695001612"><a name="p924695001612"></a><a name="p924695001612"></a>(c1 text)</p>
    </td>
    </tr>
    <tr id="row136326101413"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.1 "><p id="p6147178131915"><a name="p6147178131915"></a><a name="p6147178131915"></a>DQL</p>
    <p id="p1836152621410"><a name="p1836152621410"></a><a name="p1836152621410"></a>（如SELECT、FROM等）</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.2 "><p id="p3360263147"><a name="p3360263147"></a><a name="p3360263147"></a>数据表</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.3 "><p id="p536132651419"><a name="p536132651419"></a><a name="p536132651419"></a>类型需要与返回值类型按列匹配</p>
    </td>
    </tr>
    <tr id="row18361126121418"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.1 "><p id="p557115917199"><a name="p557115917199"></a><a name="p557115917199"></a>DML</p>
    <p id="p18363264141"><a name="p18363264141"></a><a name="p18363264141"></a>（如INSERT、UPDATE等）</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.2 "><p id="p183612617145"><a name="p183612617145"></a><a name="p183612617145"></a>空集：表示成功</p>
    <p id="p444212283191"><a name="p444212283191"></a><a name="p444212283191"></a>非空：表示失败</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.3 "><p id="p133602621418"><a name="p133602621418"></a><a name="p133602621418"></a>可定义为一列text类型：</p>
    <p id="p154831854121920"><a name="p154831854121920"></a><a name="p154831854121920"></a>(c1 text)</p>
    </td>
    </tr>
    <tr id="row83672641414"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.1 "><p id="p836226161420"><a name="p836226161420"></a><a name="p836226161420"></a>显示文本命令</p>
    <p id="p1934192314208"><a name="p1934192314208"></a><a name="p1934192314208"></a>（如SHOW、EXPLAIN等）</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.2 "><p id="p1536026141411"><a name="p1536026141411"></a><a name="p1536026141411"></a>若干行、列数据</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.1.4.1.3 "><p id="p103618261143"><a name="p103618261143"></a><a name="p103618261143"></a>可定义成对应返回列数的text类型，如返回两列文本，则可定义为：（c1 text, c2 text）</p>
    </td>
    </tr>
    </tbody>
    </table>


**使用函数exec\_on\_extension需要注意以下约束：**

-   exec\_on\_extension优先去Data Source对象中寻找USERNAME和PASSWORD，若未找到，则由unixODBC去配置文件odbc.ini中寻找，若仍未找到，则连接失败。如果Data Source对象中给出了错误的而odbc.ini中给出了正确的USERNAME和PASSWORD，则也是连接失败。
-   "SELECT \* FROM exec\_on\_extension\(\) AS \(C1, C2,  ..., Cn \)" 中AS子句标定的列是取“执行SQL语句返回的数据”的前n列（靠前原则），因此要注意列类型与返回数据前n列匹配（如果列类型不匹配则可能得到错误的结果或执行失败），不能只取返回的中间或后面部分列，且AS子句中的列数也不能多于总共返回的列数。
-   exec\_on\_extension不检查发送的SQL语句的合法性，仅支持发送一条SQL语句，建议不要发送以下SQL语句或内容（函数exec\_hadoop\_sql也遵循该约束），如：
    -   不能发送只在当前session中有效的命令或SQL语句，如：建临时表。
    -   不能发起事务，如：start transaction等。
    -   不能在发送的SQL语句中再次调用exec\_on\_extension或exec\_hadoop\_sql函数，如：select \* from exec\_on\_extension\('xxx', 'select \* from exec\_on\_extension\(\)...'\)。
    -   不能发送客户端命令，如：openGauss数据库实例的《工具参考》中“客户端工具 \> gsql \> 元命令参考”章节，Oracle的SQLPlus命令等。
    -   不能发送交互命令，如：切换用户需要输入密码的场景等。


>![](public_sys-resources/icon-note.png) **说明：**
>
>1.  为保证兼容性，保留了上个版本对接Spark数据库实例的连接函数exec\_hadoop\_sql。也就是说既可以使用exec\_on\_extension也可以使用exec\_hadoop\_sql进行Spark对接。由于exec\_hadoop\_sql存在安全问题，只有赋权后才能使用，建议用户使用exec\_on\_extension函数。
>
>2.  在MySQL兼容性下暂不支持exec\_on\_extension和exec\_hadoop\_sql函数的使用。

-   **[SQL on Hadoop](SQL-on-Hadoop.md)**

-   **[SQL on Oracle](SQL-on-Oracle.md)**

-   **[SQL on Spark](SQL-on-Spark.md)**

-   **[SQL on other openGauss](SQL-on-other-openGauss.md)**
