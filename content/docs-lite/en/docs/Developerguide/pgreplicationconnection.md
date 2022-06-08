# PGReplicationConnection<a name="EN-US_TOPIC_0289900699"></a>

PGReplicationConnection is an API class provided by the JDBC driver in openGauss. It is used to implement functions related to logical replication.

## Inheritance Relationship of PGReplicationConnection<a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_section62990966143545"></a>

PGReplicationConnection is a logical replication interface. Its implementation class is PGReplicationConnectionImpl, which is in the  **org.postgresql.replication**  package. The declaration of the class is as follows:

```
public class PGReplicationConnection implements PGReplicationConnection
```

## Construction Method<a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_section25614124144018"></a>

public PGReplicationConnection\(BaseConnection connection\)

## Common Methods<a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_section47247579151819"></a>

**Table  1**  Common methods of PGReplicationConnection

<a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_table55367277113131"></a>
<table><thead align="left"><tr id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_row48207313113131"><th class="cellrowborder" valign="top" width="20.57%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p45195306113131"><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p45195306113131"></a><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p45195306113131"></a>Return Value</p>
</th>
<th class="cellrowborder" valign="top" width="29.43%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p36941164113131"><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p36941164113131"></a><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p36941164113131"></a>Method</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p39444294113131"><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p39444294113131"></a><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p39444294113131"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p40871265113131"><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p40871265113131"></a><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p40871265113131"></a>Throws</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_row32297070113131"><td class="cellrowborder" valign="top" width="20.57%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p65925901113131"><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p65925901113131"></a><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p65925901113131"></a>ChainedCreateReplicationSlotBuilder</p>
</td>
<td class="cellrowborder" valign="top" width="29.43%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136727_en-us_topic_0241500988_p0358853131319"><a name="en-us_topic_0283136727_en-us_topic_0241500988_p0358853131319"></a><a name="en-us_topic_0283136727_en-us_topic_0241500988_p0358853131319"></a>createReplicationSlot()</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p23210864113131"><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p23210864113131"></a><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p23210864113131"></a>Creates a logical replication slot.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p1031812113131"><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p1031812113131"></a><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p1031812113131"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_row9286311113131"><td class="cellrowborder" valign="top" width="20.57%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p13993741113131"><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p13993741113131"></a><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p13993741113131"></a>void</p>
</td>
<td class="cellrowborder" valign="top" width="29.43%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p59751243113131"><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p59751243113131"></a><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p59751243113131"></a>dropReplicationSlot(String slotName)</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p8012554113131"><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p8012554113131"></a><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p8012554113131"></a>Deletes a logical replication slot.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p45037170113131"><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p45037170113131"></a><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p45037170113131"></a>SQLException,IOException</p>
</td>
</tr>
<tr id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_row2681348113131"><td class="cellrowborder" valign="top" width="20.57%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p15862651113131"><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p15862651113131"></a><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p15862651113131"></a>ChainedStreamBuilder</p>
</td>
<td class="cellrowborder" valign="top" width="29.43%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p9806383113131"><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p9806383113131"></a><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p9806383113131"></a>replicationStream()</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p56119559113131"><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p56119559113131"></a><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p56119559113131"></a>Enables logical replication.</p>
</td>
<td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p49390444113131"><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p49390444113131"></a><a name="en-us_topic_0283136727_en-us_topic_0241500988_en-us_topic_0237120404_en-us_topic_0213179170_en-us_topic_0189249657_en-us_topic_0106494102_p49390444113131"></a>-</p>
</td>
</tr>
</tbody>
</table>

