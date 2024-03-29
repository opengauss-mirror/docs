# CopyManager

CopyManager是openGauss JDBC驱动中提供的一个API接口类，用于批量向openGauss中导入数据。

## CopyManager的继承关系<a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_section62990966143545"></a>

CopyManager类位于org.postgresql.copy Package中，继承自java.lang.Object类，该类的声明如下：

```
public class CopyManager
extends Object
```

## 构造方法<a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_section25614124144018"></a>

public CopyManager\(BaseConnection connection\)

throws SQLException

## 常用方法<a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_section47247579151819"></a>

**表 1**  CopyManager常用方法

<a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_table55367277113131"></a>
<table><thead align="left"><tr id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_row48207313113131"><th class="cellrowborder" valign="top" width="12.78%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p45195306113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p45195306113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p45195306113131"></a>返回值</p>
</th>
<th class="cellrowborder" valign="top" width="37.22%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p36941164113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p36941164113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p36941164113131"></a>方法</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p39444294113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p39444294113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p39444294113131"></a>描述</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p40871265113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p40871265113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p40871265113131"></a>throws</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_row32297070113131"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p65925901113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p65925901113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p65925901113131"></a>CopyIn</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p38397760113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p38397760113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p38397760113131"></a>copyIn(String sql)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p23210864113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p23210864113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p23210864113131"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p1031812113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p1031812113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p1031812113131"></a>SQLException</p>
</td>
</tr>
<tr id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_row9286311113131"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p13993741113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p13993741113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p13993741113131"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p59751243113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p59751243113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p59751243113131"></a>copyIn(String sql, InputStream from)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p8012554113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p8012554113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p8012554113131"></a>使用COPY FROM STDIN从InputStream中快速向数据库中的表加载数据。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p45037170113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p45037170113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p45037170113131"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_row2681348113131"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p15862651113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p15862651113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p15862651113131"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p9806383113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p9806383113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p9806383113131"></a>copyIn(String sql, InputStream from, int bufferSize)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p56119559113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p56119559113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p56119559113131"></a>使用COPY FROM STDIN从InputStream中快速向数据库中的表加载数据。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p49390444113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p49390444113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p49390444113131"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_row41860814113131"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p35282801113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p35282801113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p35282801113131"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p39334612113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p39334612113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p39334612113131"></a>copyIn(String sql, Reader from)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p31986975113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p31986975113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p31986975113131"></a>使用COPY FROM STDIN从Reader中快速向数据库中的表加载数据。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p40808187113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p40808187113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p40808187113131"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_row31729367113131"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p19941902113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p19941902113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p19941902113131"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p4681386113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p4681386113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p4681386113131"></a>copyIn(String sql, Reader from, int bufferSize)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p43648019113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p43648019113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p43648019113131"></a>使用COPY FROM STDIN从Reader中快速向数据库中的表加载数据。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p45828656113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p45828656113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p45828656113131"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_row9804726113131"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p55985341113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p55985341113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p55985341113131"></a>CopyOut</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p38518764113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p38518764113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p38518764113131"></a>copyOut(String sql)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p33012204113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p33012204113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p33012204113131"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p56742885113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p56742885113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p56742885113131"></a>SQLException</p>
</td>
</tr>
<tr id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_row40923918113131"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p26503022113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p26503022113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p26503022113131"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p66370010113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p66370010113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p66370010113131"></a>copyOut(String sql, OutputStream to)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p7261755113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p7261755113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p7261755113131"></a>将一个COPY TO STDOUT的结果集从数据库发送到OutputStream类中。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p51331321113131"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p51331321113131"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p51331321113131"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_row28470138113339"><td class="cellrowborder" valign="top" width="12.78%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p24379879113339"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p24379879113339"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p24379879113339"></a>long</p>
</td>
<td class="cellrowborder" valign="top" width="37.22%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p28613172113339"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p28613172113339"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p28613172113339"></a>copyOut(String sql, Writer to)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p35965577113339"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p35965577113339"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p35965577113339"></a>将一个COPY TO STDOUT的结果集从数据库发送到Writer类中。</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p42871274114222"><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p42871274114222"></a><a name="zh-cn_topic_0238274501_zh-cn_topic_0237120404_zh-cn_topic_0213179170_zh-cn_topic_0189249657_zh-cn_topic_0106494102_p42871274114222"></a>SQLException,IOException</p>
</td>
</tr>
</tbody>
</table>

