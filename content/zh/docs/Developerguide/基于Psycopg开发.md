# 基于Psycopg开发<a name="ZH-CN_TOPIC_0000001079921480"></a>

Psycopg是一种用于执行SQL语句的PythonAPI，可以为PostgreSQL、openGauss数据库提供统一访问接口，应用程序可基于它进行数据操作。Psycopg2是对libpq的封装，主要使用C语言实现，既高效又安全。它具有客户端游标和服务器端游标、异步通信和通知、支持“COPY TO/COPY FROM”功能。支持多种类型Python开箱即用，适配PostgreSQL数据类型；通过灵活的对象适配系统，可以扩展和定制适配。Psycopg2兼容Unicode和Python 3。

openGauss数据库提供了对Psycopg2特性的支持，并且支持Psycopg2通过SSL模式链接。

**表 1**  Psycopg支持平台

<a name="zh-cn_topic_0059778944_tcc3bf62098e14505b94680dffaa5940d"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778944_re1a7b791067f4bac9743d0de9f2ae8b6"><th class="cellrowborder" valign="top" width="78.64%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0059778944_aa56cbe2a342d43b59dfc4501d2fc6172"><a name="zh-cn_topic_0059778944_aa56cbe2a342d43b59dfc4501d2fc6172"></a><a name="zh-cn_topic_0059778944_aa56cbe2a342d43b59dfc4501d2fc6172"></a>操作系统</p>
</th>
<th class="cellrowborder" valign="top" width="21.36%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0059778944_a645fcd4314514ac5b4409e804145c94b"><a name="zh-cn_topic_0059778944_a645fcd4314514ac5b4409e804145c94b"></a><a name="zh-cn_topic_0059778944_a645fcd4314514ac5b4409e804145c94b"></a>平台</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059778944_row1915312215011"><td class="cellrowborder" valign="top" width="78.64%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0059778944_p826525664919"><a name="zh-cn_topic_0059778944_p826525664919"></a><a name="zh-cn_topic_0059778944_p826525664919"></a>EulerOS 2.5</p>
</td>
<td class="cellrowborder" align="left" valign="top" width="21.36%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0059778944_p93583610509"><a name="zh-cn_topic_0059778944_p93583610509"></a><a name="zh-cn_topic_0059778944_p93583610509"></a>x86_64位</p>
</td>
</tr>
<tr id="row1728515110349"><td class="cellrowborder" valign="top" width="78.64%" headers="mcps1.2.3.1.1 "><p id="p1028612118342"><a name="p1028612118342"></a><a name="p1028612118342"></a>EulerOS 2.8</p>
</td>
<td class="cellrowborder" valign="top" width="21.36%" headers="mcps1.2.3.1.2 "><p id="p162863113411"><a name="p162863113411"></a><a name="p162863113411"></a>ARM64位</p>
</td>
</tr>
</tbody>
</table>

-   **[Psycopg包](Psycopg包.md)**

-   **[开发流程](开发流程-2.md)**

-   **[加载驱动](加载驱动.md)**

-   **[连接数据库](连接数据库.md)**

-   **[执行SQL语句](执行SQL语句.md)**

-   **[处理结果集](处理结果集.md)**

-   **[关闭连接](关闭连接.md)**

-   **[连接数据库（SSL方式）](连接数据库_SSL方式_1.md)**

-   **[示例：常用操作](示例-常用操作.md)**

-   **[Psycopg接口参考](Psycopg接口参考.md)**
