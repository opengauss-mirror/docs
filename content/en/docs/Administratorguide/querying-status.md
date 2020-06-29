# Querying Status<a name="EN-US_TOPIC_0242215009"></a>

## Background<a name="en-us_topic_0237088790_en-us_topic_0059778948_section199712094115"></a>

You can query the status of openGauss in openGauss. The query result shows whether openGauss or a single host is running properly.

## Prerequisites<a name="en-us_topic_0237088790_en-us_topic_0059778948_sa8f556adc7a142bd8efdec0f4483d2bd"></a>

openGauss has been started.

## Procedure<a name="en-us_topic_0237088790_en-us_topic_0059778948_sf87c613d20a343e7ab7491fce49d6eaf"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to query the openGauss status:

    ```
    gs_om -t status --detail
    ```

    [Table 1](#en-us_topic_0237088790_table9610118112610)  describes parameters in the query result.

    To query the status of instances on a host and the status of other instances which form a primary/secondary relationship with instances on the host, add  **-h**  to the command. For example:

    ```
    gs_om -t status -h plat2 --detail
    ```

    **plat2**  indicates the name of the host to be queried.

    To query the status of instances on the host you logged in to, run the following command:

    ```
    gs_om -t status -h plat1
    ```


## Parameter Description<a name="en-us_topic_0237088790_en-us_topic_0059778948_s5690879aa2e24fb79ca064e487f93803"></a>

**Table  1**  Status description

<a name="en-us_topic_0237088790_table9610118112610"></a>
<table><thead align="left"><tr id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_r1ca68f47ed7a43ba9fa57e054c552300"><th class="cellrowborder" valign="top" width="19.05%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a22069e314c114d0092fba3f9be40eddd"><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a22069e314c114d0092fba3f9be40eddd"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a22069e314c114d0092fba3f9be40eddd"></a>Field</p>
</th>
<th class="cellrowborder" valign="top" width="24.87%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a33e384cc66d44c37b0d401eeebb5b651"><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a33e384cc66d44c37b0d401eeebb5b651"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a33e384cc66d44c37b0d401eeebb5b651"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="56.08%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p39822642214"><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p39822642214"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p39822642214"></a>Value</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_r17aa5d21875344b6a7699bf77a96c87c"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p698218613226"><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p698218613226"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p698218613226"></a>cluster_state</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p159828610229"><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p159828610229"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p159828610229"></a><span id="en-us_topic_0237088790_text19664945191710"><a name="en-us_topic_0237088790_text19664945191710"></a><a name="en-us_topic_0237088790_text19664945191710"></a>openGauss</span> status, which indicates whether <span id="en-us_topic_0237088790_text7284101710288"><a name="en-us_topic_0237088790_text7284101710288"></a><a name="en-us_topic_0237088790_text7284101710288"></a>openGauss</span> is running properly.</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_u8eef390bf2e74b0ea8c6025c5283f88d"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_u8eef390bf2e74b0ea8c6025c5283f88d"></a><ul id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_u8eef390bf2e74b0ea8c6025c5283f88d"><li><strong id="b13341846565"><a name="b13341846565"></a><a name="b13341846565"></a>Normal</strong>: <span id="en-us_topic_0237088790_text2361349141713"><a name="en-us_topic_0237088790_text2361349141713"></a><a name="en-us_topic_0237088790_text2361349141713"></a>openGauss</span> is available and the data has redundancy backup. All the processes are running and the primary/standby relationship is normal.</li><li><strong id="b131483231471"><a name="b131483231471"></a><a name="b131483231471"></a>Unavailable</strong>: <span id="en-us_topic_0237088790_text6391145014178"><a name="en-us_topic_0237088790_text6391145014178"></a><a name="en-us_topic_0237088790_text6391145014178"></a>openGauss</span> is unavailable.</li><li><strong id="b161374912711"><a name="b161374912711"></a><a name="b161374912711"></a>Degraded</strong>: <span id="en-us_topic_0237088790_text929715191713"><a name="en-us_topic_0237088790_text929715191713"></a><a name="en-us_topic_0237088790_text929715191713"></a>openGauss</span> is available and faulty <span id="en-us_topic_0237088790_text417964612305"><a name="en-us_topic_0237088790_text417964612305"></a><a name="en-us_topic_0237088790_text417964612305"></a>database nodes</span> and <span id="en-us_topic_0237088790_text133031617101716"><a name="en-us_topic_0237088790_text133031617101716"></a><a name="en-us_topic_0237088790_text133031617101716"></a>primary database nodes</span> exist.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_re9a86e5d6b81441f9c8d99ae61136d92"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p199843613221"><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p199843613221"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p199843613221"></a>node</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p29841464224"><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p29841464224"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p29841464224"></a>Host name.</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p19984269228"><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p19984269228"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p19984269228"></a>Specifies the name of the host where the instance is located. If multiple AZs exist, the AZ IDs will be displayed.</p>
</td>
</tr>
<tr id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_r610a088662ca41bda29d5bf627175f4a"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p11984061224"><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p11984061224"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p11984061224"></a>node_ip</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p179841960221"><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p179841960221"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p179841960221"></a>Host IP Address.</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a28dc49c29e4b47ef84231f37bc8614c7"><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a28dc49c29e4b47ef84231f37bc8614c7"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a28dc49c29e4b47ef84231f37bc8614c7"></a>Specifies the IP address of the host where the instance is located.</p>
</td>
</tr>
<tr id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_r480709225ee64f3fbaf7bcbd8211c4ce"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_aef08714d893a44dd8695759c16b8caa3"><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_aef08714d893a44dd8695759c16b8caa3"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_aef08714d893a44dd8695759c16b8caa3"></a>instance</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p898536202218"><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p898536202218"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p898536202218"></a>Instance ID.</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a2ea98b2ed5da4883943bb701c08da0d3"><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a2ea98b2ed5da4883943bb701c08da0d3"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a2ea98b2ed5da4883943bb701c08da0d3"></a>Specifies the instance ID.</p>
</td>
</tr>
<tr id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_r74e01d104db147eca995378493187166"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p698520620220"><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p698520620220"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p698520620220"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p119851662227"><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p119851662227"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p119851662227"></a>Instance status.</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_ua6b7f8f70d934801a366687ed3c30f79"></a><a name="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_ua6b7f8f70d934801a366687ed3c30f79"></a><ul id="en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_ua6b7f8f70d934801a366687ed3c30f79"><li><strong id="b867483973411"><a name="b867483973411"></a><a name="b867483973411"></a>Primary</strong>: The instance is a primary instance.</li><li><strong id="b1254645013416"><a name="b1254645013416"></a><a name="b1254645013416"></a>Standby</strong>: The instance is a standby instance.</li><li><strong id="b84916513347"><a name="b84916513347"></a><a name="b84916513347"></a>Secondary</strong>: The instance is a secondary instance.</li><li><strong id="b42671952193414"><a name="b42671952193414"></a><a name="b42671952193414"></a>Pending</strong>: The instance is in the quorum phase.</li><li><strong id="b1171317582349"><a name="b1171317582349"></a><a name="b1171317582349"></a>Unknown</strong>: The instance status is unknown.</li><li><strong id="b9492012352"><a name="b9492012352"></a><a name="b9492012352"></a>Down</strong>: The instance is down.</li></ul>
</td>
</tr>
</tbody>
</table>

## Examples<a name="en-us_topic_0237088790_en-us_topic_0059778948_s2ca7a9ce813e4d209f3801b2171de8b1"></a>

View openGauss status details, including instance status.

```
gs_om -t status --detail
[   Cluster State   ]

cluster_state   : Normal
redistributing  : No
current_az      : AZ_ALL

[  Datanode State   ]

node               node_ip         instance                                 state            | node               node_ip         instance                                 state
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1  pekpopgsci00235 10.244.62.204   6001 /opt/gaussdb/cluster/data/dn1 P Primary Normal | 2  pekpopgsci00238 10.244.61.81    6002 /opt/gaussdb/cluster/data/dn1 S Standby Normal
```

