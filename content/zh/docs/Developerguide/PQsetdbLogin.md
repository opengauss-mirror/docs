# PQsetdbLogin<a name="ZH-CN_TOPIC_0242380572"></a>

## 功能描述<a name="zh-cn_topic_0241735615_section189041135191819"></a>

与数据库服务器建立一个新的链接。

## 原型<a name="zh-cn_topic_0241735615_section148775407917"></a>

```
PGconn *PQsetdbLogin(const char *pghost,
                     const char *pgport,
                     const char *pgoptions,
                     const char *pgtty,
                     const char *dbName,
                     const char *login,
                     const char *pwd);
```

## 参数<a name="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  PQsetdbLogin参数

<a name="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735615_p144262583911"><a name="zh-cn_topic_0241735615_p144262583911"></a><a name="zh-cn_topic_0241735615_p144262583911"></a>pghost</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"><a name="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"></a><a name="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"></a>要链接的主机名，详见<a href="链接字符.md">链接字符</a>章节描述的host字段。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_r2088b45aa8374f988b5b381a7e85ae5b"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735615_p7393163933919"><a name="zh-cn_topic_0241735615_p7393163933919"></a><a name="zh-cn_topic_0241735615_p7393163933919"></a>pgport</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735615_p1339112395397"><a name="zh-cn_topic_0241735615_p1339112395397"></a><a name="zh-cn_topic_0241735615_p1339112395397"></a>主机服务器的端口号，详见<a href="链接字符.md">链接字符</a>描述的port字段。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_re3c53307a0b8488f86edbf902499dcd5"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735615_p183774394393"><a name="zh-cn_topic_0241735615_p183774394393"></a><a name="zh-cn_topic_0241735615_p183774394393"></a>pgoptions</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735615_p113734398392"><a name="zh-cn_topic_0241735615_p113734398392"></a><a name="zh-cn_topic_0241735615_p113734398392"></a>添加命令行选项以在运行时发送到服务器，详见<a href="链接字符.md">链接字符</a>描述的options字段。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_rc78d71a78a944585b1a9275d30efa604"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735615_p737003913919"><a name="zh-cn_topic_0241735615_p737003913919"></a><a name="zh-cn_topic_0241735615_p737003913919"></a>pgtty</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735615_p2576195855917"><a name="zh-cn_topic_0241735615_p2576195855917"></a><a name="zh-cn_topic_0241735615_p2576195855917"></a>忽略（以前，这个选项声明服务器日志的输出方向）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735615_row89651041155418"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735615_p1696614418544"><a name="zh-cn_topic_0241735615_p1696614418544"></a><a name="zh-cn_topic_0241735615_p1696614418544"></a>dbName</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735615_p1396684105419"><a name="zh-cn_topic_0241735615_p1396684105419"></a><a name="zh-cn_topic_0241735615_p1396684105419"></a>要链接的数据库名，详见<a href="链接字符.md">链接字符</a>描述的dbname字段。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735615_row296618417549"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735615_p1296604175412"><a name="zh-cn_topic_0241735615_p1296604175412"></a><a name="zh-cn_topic_0241735615_p1296604175412"></a>login</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735615_p1296717415545"><a name="zh-cn_topic_0241735615_p1296717415545"></a><a name="zh-cn_topic_0241735615_p1296717415545"></a>要链接的用户名，详见<a href="链接字符.md">链接字符</a>章节描述的user字段。</p>
</td>
</tr>
<tr id="zh-cn_topic_0241735615_row173772032195413"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0241735615_p53787321542"><a name="zh-cn_topic_0241735615_p53787321542"></a><a name="zh-cn_topic_0241735615_p53787321542"></a>pwd</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0241735615_p837863275410"><a name="zh-cn_topic_0241735615_p837863275410"></a><a name="zh-cn_topic_0241735615_p837863275410"></a>如果服务器要求口令认证，所用的口令，详见<a href="链接字符.md">链接字符</a>描述的password字段。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="zh-cn_topic_0241735615_zh-cn_topic_0237120432_zh-cn_topic_0059778852_sd43c3bb519574fb68eae3b53fb1b652f"></a>

PGconn \*：指向包含链接的对象指针，内存在函数内部申请。

## 注意事项<a name="zh-cn_topic_0241735615_zh-cn_topic_0237120433_zh-cn_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

-   该函数为PQconnectdb前身，参数个数固定，未定义参数被调用时使用缺省值，若需要给固定参数设置缺省值，则可赋值NULL或者空字符串。
-   若dbName中包含“=”或链接URL的有效前缀，则该dbName被看做一个conninfo字符串并传递至PQconnectdb中，其余参数与PQconnectdbParams保持一致。

## 示例<a name="zh-cn_topic_0241735615_zh-cn_topic_0237120433_zh-cn_topic_0059777949_s14d206561091447bbb06bac48d8fee66"></a>

请参见[示例](示例-3.md)章节。
