# connection.cursor\(\)<a name="ZH-CN_TOPIC_0000001127310747"></a>

## 功能描述<a name="section5708152714306"></a>

此方法用于返回新的cursor对象。

## 原型<a name="section441681310810"></a>

```
cursor(name=None, cursor_factory=None, scrollable=None, withhold=False)
```

## 参数<a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**表 1**  connection.cursor参数

<a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237120432_zh-cn_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>关键字</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="zh-cn_topic_0237120432_zh-cn_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>参数说明</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237120432_zh-cn_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p23111054217"><a name="p23111054217"></a><a name="p23111054217"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1393801515211"><a name="p1393801515211"></a><a name="p1393801515211"></a>cursor名称，默认为None。</p>
</td>
</tr>
<tr id="row9119201612171"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p41191016141710"><a name="p41191016141710"></a><a name="p41191016141710"></a>cursor_factory</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p1011981671716"><a name="p1011981671716"></a><a name="p1011981671716"></a>用于创造非标准cursor，默认为None。</p>
</td>
</tr>
<tr id="row10206172741720"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p1720682713174"><a name="p1720682713174"></a><a name="p1720682713174"></a>scrollable</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p17206227121719"><a name="p17206227121719"></a><a name="p17206227121719"></a>设置SCROLL选项，默认为None。</p>
</td>
</tr>
<tr id="row9558132361711"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="p15558152311177"><a name="p15558152311177"></a><a name="p15558152311177"></a>withhold</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="p055862318177"><a name="p055862318177"></a><a name="p055862318177"></a>设置HOLD选项，默认为False。</p>
</td>
</tr>
</tbody>
</table>

## 返回值<a name="section899452817814"></a>

cursor对象（用于整个数据库使用Python编程的cursor）。

## 示例<a name="section4160944682"></a>

请参见[示例：常用操作](示例-常用操作_Psycopg.md)。

