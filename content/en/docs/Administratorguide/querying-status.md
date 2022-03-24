# Querying Status<a name="EN-US_TOPIC_0289897006"></a>

## Background<a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0059778948_section199712094115"></a>

openGauss allows you to view the status of the entire openGauss. The query result shows whether openGaussthe database  or a single host is running properly.

## Prerequisites<a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0059778948_sa8f556adc7a142bd8efdec0f4483d2bd"></a>

openGaussThe database  has started.

## Procedure<a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0059778948_sf87c613d20a343e7ab7491fce49d6eaf"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to query openGaussthe database  status:

    ```
    gs_om -t status --detail
    ```

    [Table 1](#en-us_topic_0283140576_en-us_topic_0237088790_table9610118112610)  describes parameters in the query result.

    To query the instance status on a host, add  **-h**  to the command. For example:

    ```
    gs_om -t status -h plat2 
    ```

    **plat2**  indicates the name of the host to be queried.


## Parameter Description<a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0059778948_s5690879aa2e24fb79ca064e487f93803"></a>

**Table  1**  Node role description

<a name="en-us_topic_0283140576_en-us_topic_0237088790_table9610118112610"></a>
<table><thead align="left"><tr id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_r1ca68f47ed7a43ba9fa57e054c552300"><th class="cellrowborder" valign="top" width="19.05%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a22069e314c114d0092fba3f9be40eddd"><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a22069e314c114d0092fba3f9be40eddd"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a22069e314c114d0092fba3f9be40eddd"></a>Field</p>
</th>
<th class="cellrowborder" valign="top" width="24.87%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a33e384cc66d44c37b0d401eeebb5b651"><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a33e384cc66d44c37b0d401eeebb5b651"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a33e384cc66d44c37b0d401eeebb5b651"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="56.08%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p39822642214"><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p39822642214"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p39822642214"></a>Value</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_r17aa5d21875344b6a7699bf77a96c87c"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p698218613226"><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p698218613226"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p698218613226"></a>cluster_state</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p159828610229"><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p159828610229"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p159828610229"></a>openGauss<span id="ph015872521415"><a name="ph015872521415"></a><a name="ph015872521415"></a>The database</span> status, which indicates whether the entire openGauss<span id="ph0248194781414"><a name="ph0248194781414"></a><a name="ph0248194781414"></a>database</span> is running properly.</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_u8eef390bf2e74b0ea8c6025c5283f88d"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_u8eef390bf2e74b0ea8c6025c5283f88d"></a><ul id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_u8eef390bf2e74b0ea8c6025c5283f88d"><li><strong id="b13341846565"><a name="b13341846565"></a><a name="b13341846565"></a>Normal</strong>: openGauss<span id="ph5704101721518"><a name="ph5704101721518"></a><a name="ph5704101721518"></a>The database</span> is available and the data has redundancy backup. All the processes are running and the primary/standby relationship is normal.</li><li><strong id="b147115501517"><a name="b147115501517"></a><a name="b147115501517"></a>Unavailable</strong>: openGauss<span id="ph1621134341513"><a name="ph1621134341513"></a><a name="ph1621134341513"></a>The database</span> is unavailable.</li><li><strong id="b161374912711"><a name="b161374912711"></a><a name="b161374912711"></a>Degraded</strong>: openGauss<span id="ph0614215121618"><a name="ph0614215121618"></a><a name="ph0614215121618"></a>The database</span> is available and faulty <span id="en-us_topic_0237088790_text417964612305"><a name="en-us_topic_0237088790_text417964612305"></a><a name="en-us_topic_0237088790_text417964612305"></a>database nodes</span> and <span id="en-us_topic_0237088790_text133031617101716"><a name="en-us_topic_0237088790_text133031617101716"></a><a name="en-us_topic_0237088790_text133031617101716"></a>primary database nodes</span> exist.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_re9a86e5d6b81441f9c8d99ae61136d92"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p199843613221"><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p199843613221"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p199843613221"></a>node</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p29841464224"><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p29841464224"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p29841464224"></a>Host name.</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p19984269228"><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p19984269228"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p19984269228"></a>Specifies the name of the host where the instance is located. If multiple AZs exist, the AZ IDs will be displayed.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_r610a088662ca41bda29d5bf627175f4a"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p11984061224"><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p11984061224"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p11984061224"></a>node_ip</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p179841960221"><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p179841960221"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p179841960221"></a>Host IP Address.</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a28dc49c29e4b47ef84231f37bc8614c7"><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a28dc49c29e4b47ef84231f37bc8614c7"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a28dc49c29e4b47ef84231f37bc8614c7"></a>Specifies the IP address of the host where the instance is located.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_r480709225ee64f3fbaf7bcbd8211c4ce"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_aef08714d893a44dd8695759c16b8caa3"><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_aef08714d893a44dd8695759c16b8caa3"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_aef08714d893a44dd8695759c16b8caa3"></a>instance</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p898536202218"><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p898536202218"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p898536202218"></a>Instance ID.</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a2ea98b2ed5da4883943bb701c08da0d3"><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a2ea98b2ed5da4883943bb701c08da0d3"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_a2ea98b2ed5da4883943bb701c08da0d3"></a>Specifies the instance ID.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_r74e01d104db147eca995378493187166"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p698520620220"><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p698520620220"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p698520620220"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p119851662227"><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p119851662227"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_en-us_topic_0058968082_p119851662227"></a>Instance role</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_ua6b7f8f70d934801a366687ed3c30f79"></a><a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_ua6b7f8f70d934801a366687ed3c30f79"></a><ul id="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0085031926_en-us_topic_0059777902_ua6b7f8f70d934801a366687ed3c30f79"><li><strong id="b1124551273417"><a name="b1124551273417"></a><a name="b1124551273417"></a>Normal</strong>: a single host instance.</li><li><strong id="b867483973411"><a name="b867483973411"></a><a name="b867483973411"></a>Primary</strong>: The instance is a primary instance.</li><li><strong id="b1254645013416"><a name="b1254645013416"></a><a name="b1254645013416"></a>Standby</strong>: The instance is a standby instance.</li><li><strong id="b1237739101610"><a name="b1237739101610"></a><a name="b1237739101610"></a>Cascade Standby</strong>: The instance is a cascaded standby instance.</li><li><strong id="b84916513347"><a name="b84916513347"></a><a name="b42671952193414"></a><a name="b42671952193414"></a>Pending</strong>: The instance is in the quorum phase.</li><li><strong id="b1171317582349"><a name="b1171317582349"></a><a name="b1171317582349"></a>Unknown</strong>: The instance status is unknown.</li><li><strong id="b1185551573413"><a name="b1185551573413"></a><a name="b1185551573413"></a>Down</strong>: The instance is down.</li><li><strong id="b4750142783412"><a name="b4750142783412"></a><a name="b4750142783412"></a>Abnormal</strong>: The node is abnormal.</li><li><strong id="b1417334153412"><a name="b1417334153412"></a><a name="b1417334153412"></a>Manually stopped</strong>: The node has been manually stopped.</li></ul>
</td>
</tr>
</tbody>
</table>


Each role has different states, such as startup and connection. The states are described as follows:

**Table  2**  Node state description

<a name="en-us_topic_0283140576_table149721321167"></a>
<table><thead align="left"><tr id="en-us_topic_0283140576_row10972432141616"><th class="cellrowborder" valign="top" width="19.09%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283140576_p2972163216166"><a name="en-us_topic_0283140576_p2972163216166"></a><a name="en-us_topic_0283140576_p2972163216166"></a>State</p>
</th>
<th class="cellrowborder" valign="top" width="80.91000000000001%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283140576_p6973132171614"><a name="en-us_topic_0283140576_p6973132171614"></a><a name="en-us_topic_0283140576_p6973132171614"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283140576_row1697353271611"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283140576_p4973103219165"><a name="en-us_topic_0283140576_p4973103219165"></a><a name="en-us_topic_0283140576_p4973103219165"></a>Normal</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283140576_p797316329162"><a name="en-us_topic_0283140576_p797316329162"></a><a name="en-us_topic_0283140576_p797316329162"></a>The node starts up normally.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_row497463241614"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283140576_p997413321162"><a name="en-us_topic_0283140576_p997413321162"></a><a name="en-us_topic_0283140576_p997413321162"></a>Need repair</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283140576_p19974432161619"><a name="en-us_topic_0283140576_p19974432161619"></a><a name="en-us_topic_0283140576_p19974432161619"></a>The node needs to be restored.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_row10974632161613"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283140576_p1297417320163"><a name="en-us_topic_0283140576_p1297417320163"></a><a name="en-us_topic_0283140576_p1297417320163"></a>Starting</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283140576_p129748322165"><a name="en-us_topic_0283140576_p129748322165"></a><a name="en-us_topic_0283140576_p129748322165"></a>The node is starting up.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_row11974193214164"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283140576_p6850209237"><a name="en-us_topic_0283140576_p6850209237"></a><a name="en-us_topic_0283140576_p6850209237"></a>Wait promoting</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283140576_p39751332191613"><a name="en-us_topic_0283140576_p39751332191613"></a><a name="en-us_topic_0283140576_p39751332191613"></a>The node is waiting for upgrade. For example, after the standby node sends an upgrade request to the primary node, the standby node is waiting for the response from the primary node.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_row559165911244"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283140576_p195912059112419"><a name="en-us_topic_0283140576_p195912059112419"></a><a name="en-us_topic_0283140576_p195912059112419"></a>Promoting</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283140576_p1059113596242"><a name="en-us_topic_0283140576_p1059113596242"></a><a name="en-us_topic_0283140576_p1059113596242"></a>The standby node is being upgraded to the primary node.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_row16262125142516"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283140576_p7975832171615"><a name="en-us_topic_0283140576_p7975832171615"></a><a name="en-us_topic_0283140576_p7975832171615"></a>Demoting</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283140576_p4975163281616"><a name="en-us_topic_0283140576_p4975163281616"></a><a name="en-us_topic_0283140576_p4975163281616"></a>The node is being downgraded, for example, the primary node is being downgraded to the standby node.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_row166011154288"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283140576_p3602171516283"><a name="en-us_topic_0283140576_p3602171516283"></a><a name="en-us_topic_0283140576_p3602171516283"></a>Building</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283140576_p8602141519287"><a name="en-us_topic_0283140576_p8602141519287"></a><a name="en-us_topic_0283140576_p8602141519287"></a>The standby node fails to be started and needs to be rebuilt.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_row204661155152818"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283140576_p046665518284"><a name="en-us_topic_0283140576_p046665518284"></a><a name="en-us_topic_0283140576_p046665518284"></a>Catchup</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283140576_p19467185572814"><a name="en-us_topic_0283140576_p19467185572814"></a><a name="en-us_topic_0283140576_p19467185572814"></a>The standby node is catching up with the primary node.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_row1954133272912"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283140576_p95473252913"><a name="en-us_topic_0283140576_p95473252913"></a><a name="en-us_topic_0283140576_p95473252913"></a>Coredump</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283140576_p154132152915"><a name="en-us_topic_0283140576_p154132152915"></a><a name="en-us_topic_0283140576_p154132152915"></a>The node program breaks down.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_row6961171216305"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283140576_p39611712173013"><a name="en-us_topic_0283140576_p39611712173013"></a><a name="en-us_topic_0283140576_p39611712173013"></a>Unknown</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283140576_p196171243012"><a name="en-us_topic_0283140576_p196171243012"></a><a name="en-us_topic_0283140576_p196171243012"></a>The node status is unknown.</p>
</td>
</tr>
</tbody>
</table>

If a node is in  **Need repair**  state, you need to rebuild the node to restore it. Generally, the reasons for rebuilding a node are as follows:

Table 3 Node rebuilding causes

<a name="en-us_topic_0283140576_table19763431134713"></a>
<table><thead align="left"><tr id="en-us_topic_0283140576_row876483111479"><th class="cellrowborder" valign="top" width="19.09%" id="mcps1.1.3.1.1"><p id="en-us_topic_0283140576_p576419319471"><a name="en-us_topic_0283140576_p576419319471"></a><a name="en-us_topic_0283140576_p576419319471"></a>State</p>
</th>
<th class="cellrowborder" valign="top" width="80.91000000000001%" id="mcps1.1.3.1.2"><p id="en-us_topic_0283140576_p14764531184717"><a name="en-us_topic_0283140576_p14764531184717"></a><a name="en-us_topic_0283140576_p14764531184717"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283140576_row16764203134718"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283140576_p776473116475"><a name="en-us_topic_0283140576_p776473116475"></a><a name="en-us_topic_0283140576_p776473116475"></a>Normal</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283140576_p1176423114713"><a name="en-us_topic_0283140576_p1176423114713"></a><a name="en-us_topic_0283140576_p1176423114713"></a>The node starts up normally.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_row13764133118472"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283140576_p5680195674719"><a name="en-us_topic_0283140576_p5680195674719"></a><a name="en-us_topic_0283140576_p5680195674719"></a>WAL segment removed</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283140576_p4764131124717"><a name="en-us_topic_0283140576_p4764131124717"></a><a name="en-us_topic_0283140576_p4764131124717"></a>WALs of the primary node do not exist, and logs of the standby node are later than those of the primary node.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_row57641331174715"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283140576_p12764131134712"><a name="en-us_topic_0283140576_p12764131134712"></a><a name="en-us_topic_0283140576_p12764131134712"></a>Disconnect</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283140576_p157641631134717"><a name="en-us_topic_0283140576_p157641631134717"></a><a name="en-us_topic_0283140576_p157641631134717"></a>Standby node cannot be connected to the primary node.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_row197649313478"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283140576_p177651831184719"><a name="en-us_topic_0283140576_p177651831184719"></a><a name="en-us_topic_0283140576_p177651831184719"></a>Version not matched</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283140576_p175006437491"><a name="en-us_topic_0283140576_p175006437491"></a><a name="en-us_topic_0283140576_p175006437491"></a>The binary versions of the primary and standby nodes are inconsistent.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_row13765193194719"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283140576_p6765173134713"><a name="en-us_topic_0283140576_p6765173134713"></a><a name="en-us_topic_0283140576_p6765173134713"></a>Mode not matched</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283140576_p11534131815503"><a name="en-us_topic_0283140576_p11534131815503"></a><a name="en-us_topic_0283140576_p11534131815503"></a>Nodes do not match the primary and standby roles. For example, two standby nodes are connected.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_row18765163174713"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283140576_p4765131114720"><a name="en-us_topic_0283140576_p4765131114720"></a><a name="en-us_topic_0283140576_p4765131114720"></a>System id not matched</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283140576_p9765731114718"><a name="en-us_topic_0283140576_p9765731114718"></a><a name="en-us_topic_0283140576_p9765731114718"></a>The database system IDs of the primary and standby nodes are inconsistent. The system IDs of the primary and standby nodes must be the same.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_row37654312479"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283140576_p1876513164711"><a name="en-us_topic_0283140576_p1876513164711"></a><a name="en-us_topic_0283140576_p1876513164711"></a>Timeline not matched</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283140576_p476533144713"><a name="en-us_topic_0283140576_p476533144713"></a><a name="en-us_topic_0283140576_p476533144713"></a>The log timelines are inconsistent.</p>
</td>
</tr>
<tr id="en-us_topic_0283140576_row376583112472"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.3.1.1 "><p id="en-us_topic_0283140576_p276511317475"><a name="en-us_topic_0283140576_p276511317475"></a><a name="en-us_topic_0283140576_p276511317475"></a>Unknown</p>
</td>
<td class="cellrowborder" valign="top" width="80.91000000000001%" headers="mcps1.1.3.1.2 "><p id="en-us_topic_0283140576_p1376543114713"><a name="en-us_topic_0283140576_p1376543114713"></a><a name="en-us_topic_0283140576_p1376543114713"></a>Unknown cause.</p>
</td>
</tr>
</tbody>
</table>

## Examples<a name="en-us_topic_0283140576_en-us_topic_0237088790_en-us_topic_0059778948_s2ca7a9ce813e4d209f3801b2171de8b1"></a>

View openGauss the database  status details, including instance status.

```
gs_om -t status --detail
[   Cluster State   ]

cluster_state   : Normal
redistributing  : No
current_az      : AZ_ALL

[  Datanode State   ]
node                           node_ip           port                           instance                                   state
----------------------------------------------------------------------------------------------------------------
1  pekpopgsci00235  10.244.62.204    5432      6001 /opt/gaussdb/cluster/data/dn1   P Primary Normal
2  pekpopgsci00238  10.244.61.81      5432      6002 /opt/gaussdb/cluster/data/dn1   S Standby Normal
```



