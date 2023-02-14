# psycopg2.connect\(\)

## 功能描述<a name="section5708152714306"></a>

此方法创建新的数据库会话并返回新的connection对象。

## 原型<a name="section441681310810"></a>

```
conn=psycopg2.connect(dbname="test",user="postgres",password="secret",host="127.0.0.1",port="5432")
```

## 参数<a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  psycopg2.connect参数

<a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120432_zh-cn_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p23111054217"><a name="p23111054217"></a><a name="p23111054217"></a>dbname</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1393801515211"><a name="p1393801515211"></a><a name="p1393801515211"></a>数据库名称。</p>
</td>
</tr>
<tr id="row9119201612171"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p41191016141710"><a name="p41191016141710"></a><a name="p41191016141710"></a>user</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1011981671716"><a name="p1011981671716"></a><a name="p1011981671716"></a>用户名。</p>
</td>
</tr>
<tr id="row10206172741720"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p1720682713174"><a name="p1720682713174"></a><a name="p1720682713174"></a>password</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p17206227121719"><a name="p17206227121719"></a><a name="p17206227121719"></a>密码。</p>
</td>
</tr>
<tr id="row9558132361711"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p15558152311177"><a name="p15558152311177"></a><a name="p15558152311177"></a>host</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p055862318177"><a name="p055862318177"></a><a name="p055862318177"></a>数据库IP地址，默认为UNIX socket类型。</p>
</td>
</tr>
<tr id="row2254122041715"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p3254132011713"><a name="p3254132011713"></a><a name="p3254132011713"></a>port</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1025412205170"><a name="p1025412205170"></a><a name="p1025412205170"></a>连接端口号，默认为5432。</p>
</td>
</tr>
<tr id="row14959113116103"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p695903120107"><a name="p695903120107"></a><a name="p695903120107"></a>sslmode</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p13959133131018"><a name="p13959133131018"></a><a name="p13959133131018"></a>ssl模式，ssl连接时用。</p>
</td>
</tr>
<tr id="row325618713115"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p1625618720112"><a name="p1625618720112"></a><a name="p1625618720112"></a>sslcert</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1325711719111"><a name="p1325711719111"></a><a name="p1325711719111"></a>客户端证书路径，ssl连接时用。</p>
</td>
</tr>
<tr id="row244441401113"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p104444141118"><a name="p104444141118"></a><a name="p104444141118"></a>sslkey</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1444410148119"><a name="p1444410148119"></a><a name="p1444410148119"></a>客户端密钥路径，ssl连接时用。</p>
</td>
</tr>
<tr id="row16486192031112"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p24860207112"><a name="p24860207112"></a><a name="p24860207112"></a>sslrootcert</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1548642011112"><a name="p1548642011112"></a><a name="p1548642011112"></a>根证书路径，ssl连接时用。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="section899452817814"></a>

connection对象（连接openGauss数据库实例的对象）。

## 示例<a name="section4160944682"></a>

请参见[示例：常用操作](示例-常用操作-1.md)。
