# PGReplicationConnection<a name="ZH-CN_TOPIC_0289900699"></a>

PGReplicationConnection是openGauss JDBC驱动中提供的一个API接口类，用于执行逻辑复制相关的功能。

## PGReplicationConnection的继承关系<a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_section62990966143545"></a>

PGReplicationConnection是逻辑复制的接口，实现类是PGReplicationConnectionImpl，该类位于org.postgresql.replication Package中，该类的声明如下：

```
public class PGReplicationConnection implements PGReplicationConnection
```

## 构造方法<a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_section25614124144018"></a>

public PGReplicationConnection\(BaseConnection connection\)

## 常用方法<a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_section47247579151819"></a>

**表 1**  PGReplicationConnection常用方法

<a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_table55367277113131"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_row48207313113131"><th class="cellrowborder" valign="top" width="20.57%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p45195306113131"><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p45195306113131"></a><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p45195306113131"></a>返回值</p>
</th>
<th class="cellrowborder" valign="top" width="29.43%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p36941164113131"><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p36941164113131"></a><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p36941164113131"></a>方法</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p39444294113131"><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p39444294113131"></a><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p39444294113131"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p40871265113131"><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p40871265113131"></a><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p40871265113131"></a>throws</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_row32297070113131"><td class="cellrowborder" valign="top" width="20.57%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p65925901113131"><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p65925901113131"></a><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p65925901113131"></a>ChainedCreateReplicationSlotBuilder</p>
</td>
<td class="cellrowborder" valign="top" width="29.43%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_p0358853131319"><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_p0358853131319"></a><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_p0358853131319"></a>createReplicationSlot()</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p23210864113131"><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p23210864113131"></a><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p23210864113131"></a>用于创建逻辑复制槽</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p1031812113131"><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p1031812113131"></a><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p1031812113131"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_row9286311113131"><td class="cellrowborder" valign="top" width="20.57%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p13993741113131"><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p13993741113131"></a><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p13993741113131"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.43%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p59751243113131"><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p59751243113131"></a><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p59751243113131"></a>dropReplicationSlot(String slotName)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p8012554113131"><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p8012554113131"></a><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p8012554113131"></a>用于删除逻辑复制槽</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p45037170113131"><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p45037170113131"></a><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p45037170113131"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_row2681348113131"><td class="cellrowborder" valign="top" width="20.57%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p15862651113131"><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p15862651113131"></a><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p15862651113131"></a>ChainedStreamBuilder</p>
</td>
<td class="cellrowborder" valign="top" width="29.43%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p9806383113131"><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p9806383113131"></a><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p9806383113131"></a>replicationStream()</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p56119559113131"><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p56119559113131"></a><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p56119559113131"></a>用户开启逻辑复制</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p49390444113131"><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p49390444113131"></a><a name="zh-cn_topic_0283136727_zh-cn_topic_0241500988_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p49390444113131"></a>-</p>
</td>
</tr>
</tbody>
</table>

