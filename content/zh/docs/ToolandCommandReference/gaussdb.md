# gaussdb

## 背景信息<a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_section2761723143810"></a>

gaussdb是openGauss数据库的主进程，也是一个可执行的命令，能够通过其启动一个数据库进程。

## 语法<a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_s2298a1889844418daec3743b9a4b57fb"></a>

```
gaussdb [OPTION]...
```

## 描述<a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_s432f3836cff44ad28b00d2b4c01dfd43"></a>

客户端应用程序为了访问数据库，将连接（通过网络或本地）到一个正在运行的gaussdb进程。然后该进程实例会启动一个独立的线程来处理这个连接。

>![](public_sys-resources/icon-notice.png) **须知：** 
>通过gaussdb启动数据库时，需要再开一个窗口来连接到数据库，也可以使用&符号使程序在后台执行。

一个gaussdb进程总是管理来自同一个数据库的数据。一个系统上可以同时运行多个gaussdb进程，只要使用不同的数据目录和不同的端口号。gaussdb启动时需要知道数据目录的位置，该位置必须通过-D指定。通常，-D直接指向由gs\_initdb创建的数据库目录。

缺省时gaussdb在前台启动并将日志信息输出到标准错误。但在实际应用中，gaussdb应当作为后台进程启动，而且多数是在系统启动时自动启动。

gaussdb还能以单用户模式运行，这种用法主要用于gs\_initdb的初始化过程中，有时候也被用于调试灾难性恢复。不过，单用户模式运行的服务器并不适合于调试，因为没有实际的进程间通讯和锁动作发生。当从shell上以单用户模式调用时，用户可以输入查询，然后结果会在屏幕上以一种更适合开发者阅读（不适合普通用户）的格式显示出来。在单用户模式下，将把会话用户ID设为1并赋予系统管理员权限。该用户不必实际存在，因此单用户模式运行的服务器可以用于对某些意外损坏的系统表进行手工恢复。

## 选项<a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_sad67edabbbd34d599e18ec0034923e22"></a>

gaussdb接受[表1](#zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_table57797050)中所示的命令行参数。

**表 1**  参数说明

<a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_table57797050"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row43670834"><th class="cellrowborder" valign="top" width="25.31%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p29628404"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p29628404"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p29628404"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="44.800000000000004%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p2404378"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p2404378"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p2404378"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="29.89%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_aa06a14c37bd040cd97448b9000ef3aaf"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_aa06a14c37bd040cd97448b9000ef3aaf"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_aa06a14c37bd040cd97448b9000ef3aaf"></a>取值范围</p>
</th>
</tr>
</thead>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row21908749"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p56666625"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p56666625"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p56666625"></a>-B NBUFFERS</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p26900760"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p26900760"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p26900760"></a>设置服务器进程使用的共享内存缓冲区的数量。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a2e8fae2a2e094d14800248e24130ba54"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a2e8fae2a2e094d14800248e24130ba54"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a2e8fae2a2e094d14800248e24130ba54"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_row83115131926"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_p163122131828"><a name="zh-cn_topic_0237152404_p163122131828"></a><a name="zh-cn_topic_0237152404_p163122131828"></a>-b BINARY UPGRADES</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_p131215137218"><a name="zh-cn_topic_0237152404_p131215137218"></a><a name="zh-cn_topic_0237152404_p131215137218"></a>binary upgrade标志。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_p113120134214"><a name="zh-cn_topic_0237152404_p113120134214"></a><a name="zh-cn_topic_0237152404_p113120134214"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row43068867"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p60700683"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p60700683"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p60700683"></a>-c  NAME=VALUE</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p48997190"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p48997190"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p48997190"></a>给一个正在运行的参数赋值。-c可以出现多次从而设置多个参数。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ab12f30d93c014606a8e9b6a89f15ca8b"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ab12f30d93c014606a8e9b6a89f15ca8b"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ab12f30d93c014606a8e9b6a89f15ca8b"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row52052080"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p20341076"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p20341076"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p20341076"></a>-C NAME</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p50779386"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p50779386"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p50779386"></a>打印一个命名的运行时的参数的值然后退出。可以用在正在运行的服务器上，从postgresql.conf返回值。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a57274bec29e3474fae274180f2490dff"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a57274bec29e3474fae274180f2490dff"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a57274bec29e3474fae274180f2490dff"></a>取值为postgresql.conf中的所有参数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row5161960"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p45836335"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p45836335"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p45836335"></a>-d 1-5</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p61613065"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p61613065"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p61613065"></a>设置调试级别，1-5记录对应debug级别信息。级别越高，写到服务器日志的调试输出越多。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ae0032c8bc9564970a115e553267fdc95"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ae0032c8bc9564970a115e553267fdc95"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ae0032c8bc9564970a115e553267fdc95"></a>取值范围：1-5。</p>
<div class="note" id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_n8d7a35f1e7d748ae95fa1fbe8279338e"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_n8d7a35f1e7d748ae95fa1fbe8279338e"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_n8d7a35f1e7d748ae95fa1fbe8279338e"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a8b2faa2dd515447a8784e2c4488ace34"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a8b2faa2dd515447a8784e2c4488ace34"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a8b2faa2dd515447a8784e2c4488ace34"></a>如果取值小于等于0，则只会记录notice级别的信息。</p>
</div></div>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row66250175"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p18662833"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p18662833"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p18662833"></a>-D DATADIR</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p47850758"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p47850758"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p47850758"></a>声明数据目录或者配置文件的文件系统路径。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a5fda7f28bf144d3d9815d536948c645c"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a5fda7f28bf144d3d9815d536948c645c"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a5fda7f28bf144d3d9815d536948c645c"></a>用户自定义。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row62985800"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p32636334"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p32636334"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p32636334"></a>-e</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p43794247"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p43794247"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p43794247"></a>把缺省日期风格设置为“European”，也就是说用DMY规则解释日期输入，并且在一些日期输出格式里日在月份前面打印。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_abd2013cc2b63455b933888eccc77bb56"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_abd2013cc2b63455b933888eccc77bb56"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_abd2013cc2b63455b933888eccc77bb56"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row65543320"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p66335417"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p66335417"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p66335417"></a>-F</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p22003934"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p22003934"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p22003934"></a>关闭fsync调用以提高性能，但是要冒系统崩溃时数据毁坏的风险。声明这个选项等效关闭了fsync参数。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ae62fa0d7e1884eca88a79bbed8d7595c"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ae62fa0d7e1884eca88a79bbed8d7595c"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ae62fa0d7e1884eca88a79bbed8d7595c"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row4450947"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p16415272"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p16415272"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p16415272"></a>-h HOSTNAME</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p20165279"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p20165279"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p20165279"></a>指定gaussdb侦听来自前端应用TCP/IP连接的主机名或IP地址。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a38862312ce074cf793ad05c6e3e4de54"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a38862312ce074cf793ad05c6e3e4de54"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a38862312ce074cf793ad05c6e3e4de54"></a>前端存在的主机名或IP地址。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row48574620"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p59568141"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p59568141"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p59568141"></a>-i</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p14117920"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p14117920"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p14117920"></a>该选项允许远程客户通过TCP/IP（网际域套接字）与服务器通讯。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a4521d849e6d54c4397402074b97fc7d2"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a4521d849e6d54c4397402074b97fc7d2"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a4521d849e6d54c4397402074b97fc7d2"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row7150838"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p56403632"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p56403632"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p56403632"></a>-k DIRECTORY</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p66541932"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p66541932"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p66541932"></a>指定gaussdb侦听来自前端应用连接的Unix域套接字的目录。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a5a36d1ab250e4e8fbe847333a247d060"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a5a36d1ab250e4e8fbe847333a247d060"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a5a36d1ab250e4e8fbe847333a247d060"></a>缺省通常是/tmp ，但是可以在编译的时候修改。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_r88198e66fc19401db0e845f7e24aa123"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a0b42e13c8a8640b9849b6e7d01e3578e"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a0b42e13c8a8640b9849b6e7d01e3578e"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a0b42e13c8a8640b9849b6e7d01e3578e"></a>-l</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a4a165d1abee64cc8b82fecb1c9c19699"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a4a165d1abee64cc8b82fecb1c9c19699"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a4a165d1abee64cc8b82fecb1c9c19699"></a>该选项允许远程客户通过SSL（ 安全套接层）与服务器通讯。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ab662c7ef619a4fab823006a09d276920"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ab662c7ef619a4fab823006a09d276920"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ab662c7ef619a4fab823006a09d276920"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_r641db91b7b4049acadac433beacb7983"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p42890274"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p42890274"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p42890274"></a>-N MAX-CONNECT</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p34552299"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p34552299"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p34552299"></a>设置服务器接受的客户端连接的最大数。缺省时由gs_initdb自动选择。声明这个选项等价于声明max_connections配置参数。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a2630f0c949054c57886df67dba01da8b"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a2630f0c949054c57886df67dba01da8b"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a2630f0c949054c57886df67dba01da8b"></a>取值范围：正整数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_r4e1cb43bf0d44c8e9a93c46a53a0a915"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ad57b0b6ed99346d0bef75d279d4df5d6"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ad57b0b6ed99346d0bef75d279d4df5d6"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ad57b0b6ed99346d0bef75d279d4df5d6"></a>-M SERVERMODE</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a28f079c7f4e24fa39c3b17051fa1711f"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a28f079c7f4e24fa39c3b17051fa1711f"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a28f079c7f4e24fa39c3b17051fa1711f"></a>在启动时指定数据库的启动模式。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ad48af41abfc847d4be5addc3a2eab10c"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ad48af41abfc847d4be5addc3a2eab10c"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ad48af41abfc847d4be5addc3a2eab10c"></a>SERVERMODE可以取下面四个值：</p>
<a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_u3805d8a1137d446ab9ec6cdaf4c55193"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_u3805d8a1137d446ab9ec6cdaf4c55193"></a><ul id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_u3805d8a1137d446ab9ec6cdaf4c55193"><li>primary：本端以主机模式启动。</li><li>standby：本端以备机模式启动。</li><li>cascade_standby：本端以级联备机模式启动。</li><li>pending：本端处于等待状态，等待提升为主机或者备机。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row15341077"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p58268518"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p58268518"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p58268518"></a>-o OPTIONS</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p47839930"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p47839930"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p47839930"></a>向每个服务器进程传递 "OPTIONS"。保留语法，已没有实际功能。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ac615410901da44f580292f90aca0b051"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ac615410901da44f580292f90aca0b051"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ac615410901da44f580292f90aca0b051"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row40407089"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p45114348"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p45114348"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p45114348"></a>-p PORT</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p5843465"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p5843465"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p5843465"></a>指定gaussdb侦听客户端连接的TCP/IP端口或本地Unix domain socket文件的扩展。默认端口号为15400。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p748137203944"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p748137203944"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p748137203944"></a>正整数，在操作系统支持的端口范围内。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row4407977"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p47462893"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p47462893"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p47462893"></a>-s</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p7555059"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p7555059"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p7555059"></a>在每条命令结束时打印时间信息和其他统计信息。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_af9a75fd9d2b74f04a5e5e602f92da1e2"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_af9a75fd9d2b74f04a5e5e602f92da1e2"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_af9a75fd9d2b74f04a5e5e602f92da1e2"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row34653585"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p55376440"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p55376440"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p55376440"></a>-S WORK-MEM</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p16173682"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p16173682"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p16173682"></a>声明内部排序和散列在求助于临时磁盘文件之前可以使用的内存大小。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a853d9c21b7954bf492783f20c45425c2"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a853d9c21b7954bf492783f20c45425c2"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a853d9c21b7954bf492783f20c45425c2"></a>单位为KB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_row145281213145513"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_p1652931385513"><a name="zh-cn_topic_0237152404_p1652931385513"></a><a name="zh-cn_topic_0237152404_p1652931385513"></a>--single_node</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_p18529191355511"><a name="zh-cn_topic_0237152404_p18529191355511"></a><a name="zh-cn_topic_0237152404_p18529191355511"></a>拉起单机数据库。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_p10529121325516"><a name="zh-cn_topic_0237152404_p10529121325516"></a><a name="zh-cn_topic_0237152404_p10529121325516"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row54312920"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p12798506"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p12798506"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p12798506"></a>-V, --version</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p60463071"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p60463071"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p60463071"></a>打印gaussdb的版本信息然后退出。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a34ea1c813777432b8f7110528402ca8f"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a34ea1c813777432b8f7110528402ca8f"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a34ea1c813777432b8f7110528402ca8f"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row9900497"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p14556567"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p14556567"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p14556567"></a>--NAME=VALUE</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p53708688"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p53708688"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p53708688"></a>给一个正在运行的参数赋值。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a60944fd37dae43eea7f454a568a3d180"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a60944fd37dae43eea7f454a568a3d180"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a60944fd37dae43eea7f454a568a3d180"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row14480017"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p4130578"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p4130578"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p4130578"></a>--describe-config</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p48074570"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p48074570"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p48074570"></a>描述配置参数然后退出。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a620e8e59e1e54cd6944678134188fa6a"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a620e8e59e1e54cd6944678134188fa6a"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a620e8e59e1e54cd6944678134188fa6a"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row23184364"><td class="cellrowborder" valign="top" width="25.31%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p32410609"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p32410609"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p32410609"></a>-?, --help</p>
</td>
<td class="cellrowborder" valign="top" width="44.800000000000004%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p38699208"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p38699208"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p38699208"></a>显示关于gaussdb命令行参数的帮助信息，然后退出。</p>
</td>
<td class="cellrowborder" valign="top" width="29.89%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a5744e23c516c423096014bba0779f15c"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a5744e23c516c423096014bba0779f15c"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a5744e23c516c423096014bba0779f15c"></a>-</p>
</td>
</tr>
</tbody>
</table>

[表2](#zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_table56695537)中的参数主要是便于开发人员调试使用，有时也用于帮助恢复严重损坏的数据库。在应用程序使用数据库提供服务时，请不要使用这些参数进行调试。

**表 2**  开发者选项

<a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_table56695537"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row31159014"><th class="cellrowborder" valign="top" width="11.85%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p53518268"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p53518268"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p53518268"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="60.89%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p50997798"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p50997798"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p50997798"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="27.26%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_af9875d1925fb4266b040111fb34d1306"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_af9875d1925fb4266b040111fb34d1306"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_af9875d1925fb4266b040111fb34d1306"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row39146563"><td class="cellrowborder" valign="top" width="11.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p38489139"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p38489139"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p38489139"></a>-f s|i|n|m|h</p>
</td>
<td class="cellrowborder" valign="top" width="60.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p3517461"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p3517461"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p3517461"></a>禁止某种扫描和连接方法的使用。</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a481c8f570a5c4ebfb5f457bc2890783e"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a481c8f570a5c4ebfb5f457bc2890783e"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a481c8f570a5c4ebfb5f457bc2890783e"></a>取值范围：</p>
<a name="zh-cn_topic_0237152404_ul20661184463014"></a><a name="zh-cn_topic_0237152404_ul20661184463014"></a><ul id="zh-cn_topic_0237152404_ul20661184463014"><li>s：关闭顺序</li><li>i：索引扫描</li><li>n：关闭嵌套循环</li><li>m：融合（merge）连接</li><li>h：Hash连接</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row38137908"><td class="cellrowborder" valign="top" width="11.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p32627775"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p32627775"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p32627775"></a>-n</p>
</td>
<td class="cellrowborder" valign="top" width="60.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p23245326"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p23245326"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p23245326"></a>主要用于调试导致服务器进程异常崩溃的问题。一般策略是通知所有其他服务器进程终止并重新初始化共享内存和信号灯。该选项指定gaussdb不重新初始化共享内存。</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_aa0e429d7c28741e6a35f443371d29a59"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_aa0e429d7c28741e6a35f443371d29a59"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_aa0e429d7c28741e6a35f443371d29a59"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row46904138"><td class="cellrowborder" valign="top" width="11.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p8163685"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p8163685"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p8163685"></a>-P</p>
</td>
<td class="cellrowborder" valign="top" width="60.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p5219810"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p5219810"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p5219810"></a>读系统表时忽略系统索引，但在修改表时仍然更新索引。</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a826e2a4e530043b8a80e966448e23072"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a826e2a4e530043b8a80e966448e23072"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a826e2a4e530043b8a80e966448e23072"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_r6ae3f55cfed84785ac7effeb32e75571"><td class="cellrowborder" valign="top" width="11.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a3b9740e815264c99a7c5327b1e5d90fc"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a3b9740e815264c99a7c5327b1e5d90fc"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a3b9740e815264c99a7c5327b1e5d90fc"></a>-O</p>
</td>
<td class="cellrowborder" valign="top" width="60.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a291aaa21611849249849fc2e61739a7c"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a291aaa21611849249849fc2e61739a7c"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a291aaa21611849249849fc2e61739a7c"></a>允许修改系统表的结构</p>
<div class="notice" id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_na0a910f47c584f82bc1782609720a98d"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_na0a910f47c584f82bc1782609720a98d"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_na0a910f47c584f82bc1782609720a98d"></a><span class="noticetitle"> 须知： </span><div class="noticebody"><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a3cc963f3d2c04a9e82730f8daa0e8fc9"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a3cc963f3d2c04a9e82730f8daa0e8fc9"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a3cc963f3d2c04a9e82730f8daa0e8fc9"></a>此选项可能导致系统表损坏, 甚至数据库无法启动。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a87f843e0093841e080c20eaeb2d8e666"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a87f843e0093841e080c20eaeb2d8e666"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a87f843e0093841e080c20eaeb2d8e666"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row54444120"><td class="cellrowborder" valign="top" width="11.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p59374438"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p59374438"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p59374438"></a>-t pa|pl|ex</p>
</td>
<td class="cellrowborder" valign="top" width="60.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p18798502"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p18798502"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p18798502"></a>打印与每个主要系统模块相关的查询记时统计。</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a58f89b0a01734c1ea83da1f0f2437cef"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a58f89b0a01734c1ea83da1f0f2437cef"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a58f89b0a01734c1ea83da1f0f2437cef"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row48711404"><td class="cellrowborder" valign="top" width="11.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p52440629"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p52440629"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p52440629"></a>-T</p>
</td>
<td class="cellrowborder" valign="top" width="60.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p13722753"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p13722753"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p13722753"></a>主要用于调试导致服务器进程异常崩溃的问题。该选项指定gaussdb通过发送SIGSTOP信号停止其他所有服务器进程，但是并不让它们退出。这样就允许系统程序员手动从所有服务器进程搜集内核转储。</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a8ebe9a0a360340019e58fa6835a5e941"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a8ebe9a0a360340019e58fa6835a5e941"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a8ebe9a0a360340019e58fa6835a5e941"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row33887928"><td class="cellrowborder" valign="top" width="11.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p28973648"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p28973648"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p28973648"></a>-W NUM</p>
</td>
<td class="cellrowborder" valign="top" width="60.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p40948108"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p40948108"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p40948108"></a>指定一个新的服务器进程开始需要等待的秒数。</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p535752120417"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p535752120417"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p535752120417"></a>单位：秒</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_r6ae3f55cfed84785ac7effeb32e75571"><td class="cellrowborder" valign="top" width="11.85%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a3b9740e815264c99a7c5327b1e5d90fc"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a3b9740e815264c99a7c5327b1e5d90fc"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a3b9740e815264c99a7c5327b1e5d90fc"></a>--localxid</p>
</td>
<td class="cellrowborder" valign="top" width="60.89%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a291aaa21611849249849fc2e61739a7c"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a291aaa21611849249849fc2e61739a7c"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a291aaa21611849249849fc2e61739a7c"></a>使用本地事务ID，而不是全局事务ID。</p>
<div class="notice" id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_na0a910f47c584f82bc1782609720a98d"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_na0a910f47c584f82bc1782609720a98d"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_na0a910f47c584f82bc1782609720a98d"></a><span class="noticetitle"> 须知： </span><div class="noticebody"><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a3cc963f3d2c04a9e82730f8daa0e8fc9"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a3cc963f3d2c04a9e82730f8daa0e8fc9"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a3cc963f3d2c04a9e82730f8daa0e8fc9"></a>此选项仅用于gs_initdb。使用此选项可能会导致数据库不一致。</p>
</div></div>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a87f843e0093841e080c20eaeb2d8e666"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a87f843e0093841e080c20eaeb2d8e666"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a87f843e0093841e080c20eaeb2d8e666"></a>已存在的本地事务ID</p>
</td>
</tr>
</tbody>
</table>

下面的选项[表3](#zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_table57361376)仅在单用户模式下可用。

**表 3**  单用户模式选项

<a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_table57361376"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row24663889"><th class="cellrowborder" valign="top" width="11.790000000000001%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p4225720"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p4225720"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p4225720"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="61.33%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p28085520"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p28085520"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p28085520"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="26.88%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p343555438439"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p343555438439"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p343555438439"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row27773324"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p12786982"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p12786982"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p12786982"></a>--single</p>
</td>
<td class="cellrowborder" valign="top" width="61.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p53094849"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p53094849"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p53094849"></a>启动单用户模式。必须是命令行中的第一个选项。</p>
</td>
<td class="cellrowborder" valign="top" width="26.88%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p313355808439"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p313355808439"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p313355808439"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row57770046"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p22600384"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p22600384"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p22600384"></a>DBNAME</p>
</td>
<td class="cellrowborder" valign="top" width="61.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p57480283"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p57480283"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p57480283"></a>要访问的数据库的名称。必须是命令行中的最后一个选项。</p>
</td>
<td class="cellrowborder" valign="top" width="26.88%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p551540668439"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p551540668439"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p551540668439"></a>字符串。默认为用户名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row30757183"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p8303908"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p8303908"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p8303908"></a>-d 0-5</p>
</td>
<td class="cellrowborder" valign="top" width="61.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p1527933"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p1527933"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p1527933"></a>重新指定调试级别。</p>
</td>
<td class="cellrowborder" valign="top" width="26.88%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p382943688439"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p382943688439"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p382943688439"></a>0-5</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row64458347"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p16383953"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p16383953"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p16383953"></a>-E</p>
</td>
<td class="cellrowborder" valign="top" width="61.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p22820875"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p22820875"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p22820875"></a>回显所有命令。</p>
</td>
<td class="cellrowborder" valign="top" width="26.88%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p148361438439"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p148361438439"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p148361438439"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row31082150"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p50154537"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p50154537"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p50154537"></a>-j</p>
</td>
<td class="cellrowborder" valign="top" width="61.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p33553567"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p33553567"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p33553567"></a>禁止使用新行作为语句分隔符。</p>
</td>
<td class="cellrowborder" valign="top" width="26.88%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p608769678439"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p608769678439"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p608769678439"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_row53800517"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p9556098"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p9556098"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p9556098"></a>-r  FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="61.33%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p18925060"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p18925060"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p18925060"></a>将所有服务器标准输出和标准错误保存到文件filename中。</p>
</td>
<td class="cellrowborder" valign="top" width="26.88%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p320872798439"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p320872798439"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p320872798439"></a>-</p>
</td>
</tr>
</tbody>
</table>

**表 4**  自启动模式选项

<a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_tddeddd4cc1554b5e8aff332d9c106cb8"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_r89f00392806e449cb2678cbc9c059ab9"><th class="cellrowborder" valign="top" width="11.790000000000001%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a5917552e9a354513afc75e72b5c418ba"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a5917552e9a354513afc75e72b5c418ba"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a5917552e9a354513afc75e72b5c418ba"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="60.95%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a6cd98232859446d886afe4dbafb3b344"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a6cd98232859446d886afe4dbafb3b344"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a6cd98232859446d886afe4dbafb3b344"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="27.26%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a493c4d1abad440f0a005b300848e439c"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a493c4d1abad440f0a005b300848e439c"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a493c4d1abad440f0a005b300848e439c"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_r18a6a1211ff54d9cb34e127dadba1385"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a39974e9b41754e7bb5146cdc0c95ebfa"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a39974e9b41754e7bb5146cdc0c95ebfa"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a39974e9b41754e7bb5146cdc0c95ebfa"></a>--boot</p>
</td>
<td class="cellrowborder" valign="top" width="60.95%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a30a98faac5734d92a5bd2b61a582ca27"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a30a98faac5734d92a5bd2b61a582ca27"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a30a98faac5734d92a5bd2b61a582ca27"></a>启动自启动模式。必须是命令行中的第一个选项。该参数是对数据库中的参数变量及相关配置初始化，常用在数据库安装的流程中，直接使用该参数，无明显行为感知。</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a70c27505e4d94541aa237a5d8e3911ba"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a70c27505e4d94541aa237a5d8e3911ba"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a70c27505e4d94541aa237a5d8e3911ba"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_rc9192b5995a149bcbacb94b5c709df69"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p612884019308"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p612884019308"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p612884019308"></a>-r  FILENAME</p>
</td>
<td class="cellrowborder" valign="top" width="60.95%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ad82845a4d1bc4d8a925009c0abbe0590"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ad82845a4d1bc4d8a925009c0abbe0590"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_ad82845a4d1bc4d8a925009c0abbe0590"></a>将所有服务器标准输出和标准错误保存到文件filename中。</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a81311e2db7aa4aaf84820cf543610bf5"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a81311e2db7aa4aaf84820cf543610bf5"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a81311e2db7aa4aaf84820cf543610bf5"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_r5186b8c372584c2282458855ea67b34f"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p842204719308"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p842204719308"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p842204719308"></a>-x NUM</p>
</td>
<td class="cellrowborder" valign="top" width="60.95%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a622cbfce2b26480db6122d638c570287"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a622cbfce2b26480db6122d638c570287"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_a622cbfce2b26480db6122d638c570287"></a>指定一个新的服务器线程的类型。在初始化数据库时，会用到自启动模式，通过设置这个参数，启动不同线程来执行一些逻辑，正常情况下，不会用到，因为自启动模式很少会用到。</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p589777684644"><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p589777684644"></a><a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_p589777684644"></a>-</p>
</td>
</tr>
</tbody>
</table>

**表 5**  升级模式选项

<a name="zh-cn_topic_0237152404_table1473115131212"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152404_row1791171111214"><th class="cellrowborder" valign="top" width="11.790000000000001%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152404_p780741171211"><a name="zh-cn_topic_0237152404_p780741171211"></a><a name="zh-cn_topic_0237152404_p780741171211"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="60.95%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152404_p1682381171211"><a name="zh-cn_topic_0237152404_p1682381171211"></a><a name="zh-cn_topic_0237152404_p1682381171211"></a>参数说明</p>
</th>
<th class="cellrowborder" valign="top" width="27.26%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152404_p14839121151218"><a name="zh-cn_topic_0237152404_p14839121151218"></a><a name="zh-cn_topic_0237152404_p14839121151218"></a>取值范围</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152404_row108640191215"><td class="cellrowborder" valign="top" width="11.790000000000001%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152404_p11885710122"><a name="zh-cn_topic_0237152404_p11885710122"></a><a name="zh-cn_topic_0237152404_p11885710122"></a>-u NUM</p>
</td>
<td class="cellrowborder" valign="top" width="60.95%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152404_p190312111213"><a name="zh-cn_topic_0237152404_p190312111213"></a><a name="zh-cn_topic_0237152404_p190312111213"></a>指定升级前数据库内核版本号。</p>
</td>
<td class="cellrowborder" valign="top" width="27.26%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152404_p16926171121218"><a name="zh-cn_topic_0237152404_p16926171121218"></a><a name="zh-cn_topic_0237152404_p16926171121218"></a>-</p>
</td>
</tr>
</tbody>
</table>

除以上参数外，出现在postgres.conf中的所有参数，均可以用--guc\_name=guc\_value的方式在gaussdb启动时传给gaussdb。例如，--enable\_fast\_query\_shipping=off。

## 环境变量<a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_sac6ef2b8033a4b3687c3968ca3692932"></a>

-   PGLINETENCODING：客户端使用的缺省字符编码。客户端可以独立地覆盖它。这个值也可以在配置文件里设置。
-   PGDATESTYLE：运行时参数DateStyle的缺省值。现在反对使用该环境变量。
-   TZ：服务器的时区。

## 错误处理<a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_s93533ab12cab4b3cbdcc08cd129fe243"></a>

一个提到了semget或shmget的错误信息可能意味着需要重新配置内核，提供足够的共享内存和信号灯。可以通过降低shared\_buffers值以减少openGauss的共享内存的消耗，或者降低max\_connections值减少openGauss的信号灯的消耗。

如果发现类似“另外一个服务器正在运行”的错误信息，可以根据系统使用不同的命令：

```
ps ax | grep gaussdb
```

或

```
ps -ef | grep gaussdb
```

如果确信没有冲突的服务器正在运行，可以删除消息里提到的锁文件然后再次运行。

无法绑定端口的错误信息可能表明该端口已经被其他非openGauss进程使用。如果终止gaussdb后又马上用同一端口号运行它，也可能得到错误信息。这时，必须多等几秒，等操作系统关闭了该端口再试。最后，如果使用了一个操作系统认为是保留的端口，也可能导致这个错误信息。例如：Unix版本认为低于1024的端口号是“可信任的”，因而只有Unix系统管理员可以使用它们。

>![](public_sys-resources/icon-notice.png) **须知：** 

>-   如果有可能，不要使用SIGKILL杀死主进程。这样会阻止gaussdb在退出前释放它持有的系统资源（例如共享内存和信号灯）。这样可能会影响到将来启动新的进程。
>-   可以使用SIGTERM、SIGINT、SIGQUIT信号正常结束服务器进程。第一个信号将等待所有的客户端退出后才退出。第二个将强制断开所有客户端，而第三个将不停止立刻退出，导致在重启时的恢复运行。
>-   信号SIGHUP将会重新加载服务器配置文件。它也可能给单个服务器进程发送SIGHUP信号，但是这通常是不明显的。
>-   要取消一个正在执行的查询，向正在运行的进程发送SIGINT信号。
>-   主服务器进程向子进程发送SIGTERM信号让它们正常退出；发送SIGQUIT信号立即退出且不做清理工作。用户有三种信号不能用。同时，发送SIGKILL信号也是不明智的：主进程将把这个信号当作崩溃信号，然后会强制其他兄弟进程作为标准的崩溃回复过程退出。

## 用法<a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_s188b513ab6fb4938a75c0cd8a49cc38c"></a>

启动一个单用户模式的服务器：

```
gaussdb --single -D /usr/local/pgsql/data other-options my_database
```

用-D给服务器提供正确的数据库目录的路径。同时还要声名已存在的特定数据库名称。

>![](public_sys-resources/icon-notice.png) **须知：** 

>-   通常，独立运行的服务器把换行符当做命令输入完成字符；要想把一行分成多行写，必需在除最后一个换行符以外的每个换行符前面敲一个反斜杠。
>-   如果使用了-j命令行选项，新行将不被当作命令结束符。此时服务器将从标准输入一直读取到EOF标志为止，然后把所有读到的内容当作一个完整的命令字符串看待，并且反斜杠与换行符也被当作普通字符来看待。
>-   输入EOF（Control+D）即可退出会话。如果已经使用了-j则必须连续使用两个EOF才行。
>-   单用户模式运行的服务器不会提供复杂的行编辑功能（比如没有命令历史）。单用户模式也不会做任何后台处理，像自动检查点。

## 示例<a name="zh-cn_topic_0237152404_zh-cn_topic_0059777816_zh-cn_topic_0058968126_section367683"></a>

- 用缺省值在后台启动gaussdb：


```
nohup gaussdb >logfile 2>&1 </dev/null  &
```

- 指定端口启动gaussdb，如1234：


```
gaussdb --single_node -p 1234 -D data_dir
```

- 使用gsql与服务器连接，用-p指定端口号：


```
gsql -d postgres -p 1234
```

