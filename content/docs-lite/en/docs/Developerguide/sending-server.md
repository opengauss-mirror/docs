# Sending Server<a name="EN-US_TOPIC_0289900253"></a>

## max\_wal\_senders<a name="en-us_topic_0283137693_en-us_topic_0237124712_en-us_topic_0059777860_s197194d979964a63a01b4b9fc15b0053"></a>

**Parameter description**: Specifies the maximum number of simultaneously running WAL sender processes. The value cannot be greater than or equal to that of  **[max\_connections](connection-settings.md#en-us_topic_0283136886_en-us_topic_0237124695_en-us_topic_0059777636_sa723b719fa70453bb7ec27f323d41c79)**.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>**[wal\_level](settings.md#en-us_topic_0283137354_en-us_topic_0237124707_en-us_topic_0059778393_s2c76f5957066407a959191148f2c780f)**  must be set to  **archive**,  **hot\_standby**, or  **logical**  to allow the connection from standby servers.

**Value range:**  an integer ranging from 0 to 1024. The recommended value range is 8 to 100.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>This parameter can be set to 0 only when a single DN is used and there is no primary/standby instance.

**Default value:** **16**

## wal\_keep\_segments<a name="en-us_topic_0283137693_en-us_topic_0237124712_en-us_topic_0059777860_sf1f97e9d2e034746932686e8578c975e"></a>

**Parameter description**: Specifies the number of Xlog file segments. Specifies the minimum number of transaction log files stored in the  **pg\_xlog**  directory. The standby server obtains log files from the primary server for streaming replication.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 2 to  _INT\_MAX_

**Default value:** **16**

**Setting suggestions**:

-   During WAL archiving or recovery from a checkpoint on the server, the system may retain more log files than the number specified by  **wal\_keep\_segments**.
-   If this parameter is set to an excessively small value, a transaction log may have been overwritten by a new transaction before requested by the standby server. As a result, the request fails and the connection between the primary and standby servers is terminated.
-   If the HA system uses asynchronous transmission, increase the value of  **wal\_keep\_segments**  when data greater than 4 GB is continuously imported in COPY mode. Take T6000 board as an example. If the data to be imported reaches 50 GB, you are advised to set this parameter to  **1000**. You can dynamically restore the setting of this parameter after data import is complete and the WAL synchronization is proper.
-   If the synchronous\_commit level is lower than LOCAL\_FLUSH, you are advised to set this parameter to 1000 when rebuilding the standby node to prevent rebuilding failures caused by primary node log recycling during the rebuilding.

## wal\_sender\_timeout<a name="en-us_topic_0283137693_en-us_topic_0237124712_en-us_topic_0059777860_s909a994d7a9044d89d62e7028cf3bb65"></a>

**Parameter description**: Specifies the maximum duration that the sending server waits for the WAL reception in the receiver.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>-   If the data volume on the primary server is huge, the value of this parameter must be increased for the database rebuilding on a standby server. For example, if the data volume on the primary server reaches 500 GB, you are advised to set this parameter to 600 seconds.
>-   This parameter cannot be set to a value larger than the value of  **wal\_receiver\_timeout**  or the timeout parameter for database rebuilding.

**Value range**: an integer ranging from 0 to  _INT\_MAX_. The unit is ms.

**Default value**:  **6s**

## max\_replication\_slots<a name="en-us_topic_0283137693_section7322161612568"></a>

**Parameter description**: Specifies the number of log replication slots in the primary server.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range:**  an integer ranging from 0 to 262143. The recommended value range is 8 to 100.

**Default value**:  **8**

**Setting suggestions**:

When HA replication, , and logical decoding are used, you are advised to set this parameter to: Number of current physical replication slots +  Number of required logical replication slots. If the actual value is smaller than the recommended value, these functions may be unavailable or abnormal.

-   Physical replication slots provide an automatic method to ensure that Xlogs are not removed from a primary node before they are received by all the standby nodes and secondary nodes. That is, physical replication slots are used to support primary/standby HA. The number of physical replication slots required by a database is equal to the ratio of standby and secondary nodes to the primary node. For example, if an HA database has 1 primary node, 1 standby node, and 1 secondary node, the number of required physical replication slots will be 2. If an HA database has 1 primary node and 3 standby nodes, the number of required physical replication slots will be 3.
-   Currently, primary/standby/secondary deployment is not supported by default.
-   Plan the number of logical replication slots as follows:
    -   A logical replication slot can carry changes of only one database for decoding. If multiple databases are involved, create multiple logical replication slots.
    -   If logical replication is needed by multiple target databases, create multiple logical replication slots in the source database. Each logical replication slot corresponds to one logical replication link.


## enable\_slot\_log<a name="en-us_topic_0283137693_en-us_topic_0059778871_s541fa3115bdb432d8ff8649e25925fe1"></a>

**Parameter description**: Specifies whether to enable primary/standby synchronization for logical replication slots.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

-   **on**  indicates that primary/standby synchronization is enabled for logical replication slots.
-   **off**  indicates that primary/standby synchronization is disabled for logical replication slots.

**Default value**:  **off**

## max\_changes\_in\_memory<a name="en-us_topic_0283137693_section16366164213497"></a>

**Parameter description**: Specifies the maximum size \(bytes\) of a single transaction buffered in the memory during logical decoding.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 2147483647

**Default value**:  **4096**

## max\_cached\_tuplebufs<a name="en-us_topic_0283137693_section134501848125220"></a>

**Parameter description**: Specifies the maximum size \(bytes\) of the total tuple information buffered in the memory during logic decoding. You are advised to set this parameter to a value greater than or equal to twice of  [max\_changes\_in\_memory](#en-us_topic_0283137693_section16366164213497).

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 1 to 2147483647

**Default value**:  **8192**

## enable\_wal\_shipping\_compression<a name="section1767245331318"></a>

**Parameter description**: Specifies whether to enable cross-cluster log compression in streaming DR mode.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: Boolean

This parameter applies only to a pair of walsender and walreceiver for cross-cluster transmission in streaming DR and is configured in the primary cluster.

-   **true**  indicates that cross-cluster log compression is enabled in streaming DR mode.
-   **false**  indicates that cross-cluster log compression is disabled in streaming DR mode.

**Default value**:  **false**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In the Lite scenario, the openGauss DR scenario is unavailable.

## replconninfo1<a name="en-us_topic_0283137693_en-us_topic_0237124712_en-us_topic_0059777860_se4d237ddf6e7410182aa0936da9d54ed"></a>

**Parameter description**: Specifies the information about the first node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. An empty string indicates that no information about the first node is configured.

**Default value**: empty

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>Example:** replconninfo1='localhost=10.145.130.2 localport=12211 remotehost=10.145.130.3 remoteport=12212 sslmode=verify-ca'**
>-   -   For details about the  **sslmode**  parameter, see  [Table 1](#table6171141317597).
>-   The sequence of  **localhost**  and  **localport**  cannot be reversed. The sequence of  **remotehost**  and  **remoteport**  cannot be reversed either.

**Table  1** **sslmode**  details

<a name="table6171141317597"></a>
<table><thead align="left"><tr id="row8173213195911"><th class="cellrowborder" valign="top" width="12.809999999999999%" id="mcps1.2.3.1.1"><p id="p10174141335914"><a name="p10174141335914"></a><a name="p10174141335914"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="87.19%" id="mcps1.2.3.1.2"><p id="p28201061414"><a name="p28201061414"></a><a name="p28201061414"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row71747136590"><td class="cellrowborder" valign="top" width="12.809999999999999%" headers="mcps1.2.3.1.1 "><p id="p161741413125913"><a name="p161741413125913"></a><a name="p161741413125913"></a>sslmode</p>
</td>
<td class="cellrowborder" valign="top" width="87.19%" headers="mcps1.2.3.1.2 "><p id="p137425181408"><a name="p137425181408"></a><a name="p137425181408"></a>After SSL link encryption is enabled for a database, the standby node can connect to the database using SSL. When the standby node connects to the database, set <strong id="b4588141932710"><a name="b4588141932710"></a><a name="b4588141932710"></a>sslmode</strong> as follows:</p>
<a name="ul1291554817184"></a><a name="ul1291554817184"></a><ul id="ul1291554817184"><li><strong id="b24753100165"><a name="b24753100165"></a><a name="b24753100165"></a>disable</strong>: only tries setting up a non-SSL connection.</li><li><strong id="b169701418171613"><a name="b169701418171613"></a><a name="b169701418171613"></a>allow</strong>: tries setting up a non-SSL connection first, and then an SSL connection if the attempt fails.</li><li><strong id="b175873019168"><a name="b175873019168"></a><a name="b175873019168"></a>prefer</strong>: tries setting up an SSL connection first, and then a non-SSL connection if the attempt fails.</li><li><strong id="b83281741101610"><a name="b83281741101610"></a><a name="b83281741101610"></a>require</strong>: encrypts only the data link, but does not verify the database authenticity.</li><li><strong id="b18794113419179"><a name="b18794113419179"></a><a name="b18794113419179"></a>verify-ca</strong>: encrypts the data link and verifies the database authenticity.</li><li><strong id="b195485616189"><a name="b195485616189"></a><a name="b195485616189"></a>verify-full</strong>: encrypts the data link, verifies the database authenticity, checks whether the server certificate is issued by a trusted CA, and checks whether the host name of the server is the same as that in the certificate.</li><li>In the <span id="text1511123254911"><a name="text1511123254911"></a><a name="text1511123254911"></a>Lite</span> scenario, <strong id="b12660112142013"><a name="b12660112142013"></a><a name="b12660112142013"></a>verify-ca</strong> is recommended. For other values that cannot be identified, <strong id="b57141638162018"><a name="b57141638162018"></a><a name="b57141638162018"></a>prefer</strong> is used by default.</li></ul>
</td>
</tr>
</tbody>
</table>

## replconninfo2<a name="en-us_topic_0283137693_en-us_topic_0237124712_en-us_topic_0059777860_s01420b1b22454611b55a523555429058"></a>

**Parameter description**: Specifies the information about the second node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. An empty string indicates that no information about the second node is configured.

**Default value**: empty

## replconninfo3<a name="en-us_topic_0283137693_en-us_topic_0237124712_section8514121012410"></a>

**Parameter description**: Specifies the information about the third node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. An empty string indicates that no information about the third node is configured.

**Default value**: empty

## replconninfo4<a name="en-us_topic_0283137693_en-us_topic_0237124712_section961005915410"></a>

**Parameter description**: Specifies the information about the fourth node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. An empty string indicates that no information about the fourth node is configured.

**Default value**: empty

## replconninfo5<a name="en-us_topic_0283137693_en-us_topic_0237124712_section1573419505515"></a>

**Parameter description**: Specifies the information about the fifth node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string An empty string indicates that no information about the fifth node is configured.

**Default value**: empty

## replconninfo6<a name="en-us_topic_0283137693_en-us_topic_0237124712_section1136279965"></a>

**Parameter description**: Specifies the information about the sixth node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. An empty string indicates that no information about the sixth node is configured.

**Default value**: empty

## replconninfo7<a name="en-us_topic_0283137693_en-us_topic_0237124712_section10707131718617"></a>

**Parameter description**: Specifies the information about the seventh node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. An empty string indicates that no information about the seventh node is configured.

**Default value**: empty

## replconninfo8<a name="section67981447114611"></a>

**Parameter description**: Specifies the information about the eighth node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. An empty string indicates that no information about the eighth node is configured.

**Default value**: empty

## replconninfo9<a name="section2022343663619"></a>

**Parameter description**: Specifies the information about the ninth node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string An empty string indicates that no information about the ninth node is configured.

**Default value**: empty

## replconninfo10<a name="section1031583915367"></a>

**Parameter description**: Specifies the information about the tenth node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string An empty string indicates that no information about the tenth node is configured.

**Default value**: empty

## replconninfo11<a name="section2085818462368"></a>

**Parameter description**: Specifies the information about the eleventh node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string An empty string indicates that no information about the eleventh node is configured.

**Default value**: empty

## replconninfo12<a name="section167129118388"></a>

**Parameter description**: Specifies the information about the twelfth node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string An empty string indicates that no information about the twelfth node is configured.

**Default value**: empty

## replconninfo13<a name="section7670163183812"></a>

**Parameter description**: Specifies the information about the thirteenth node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string An empty string indicates that no information about the thirteenth node is configured.

**Default value**: empty

## replconninfo14<a name="section936818719387"></a>

**Parameter description**: Specifies the information about the fourteenth node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string An empty string indicates that no information about the fourteenth node is configured.

**Default value**: empty

## replconninfo15<a name="section418813119380"></a>

**Parameter description**: Specifies the information about the fifteenth node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string An empty string indicates that no information about the fifteenth node is configured.

**Default value**: empty

## replconninfo16<a name="section7545413193813"></a>

**Parameter description**: Specifies the information about the sixteenth node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string An empty string indicates that no information about the sixteenth node is configured.

**Default value**: empty

## replconninfo17<a name="section362914154381"></a>

**Parameter description**: Specifies the information about the seventeenth node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string An empty string indicates that no information about the seventeenth node is configured.

**Default value**: empty

## replconninfo18<a name="section2376111783814"></a>

**Parameter description**: Specifies the information about the eighteenth node to be listened on and authenticated by the current server.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string An empty string indicates that no information about the eighteenth node is configured.

**Default value**: empty

## cross\_cluster\_replconninfo1<a name="section354985375319"></a>

**Parameter description**: Specifies the information about the first node to be listened on and authenticated by the current server across clusters.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. An empty string indicates that no information about the first node is configured.

**Default value**: empty

## cross\_cluster\_replconninfo2<a name="section16549175305316"></a>

**Parameter description**: Specifies the information about the second node to be listened on and authenticated by the current server across clusters.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. An empty string indicates that no information about the second node is configured.

**Default value**: empty

## cross\_cluster\_replconninfo3<a name="section655065375310"></a>

**Parameter description**: Specifies the information about the third node to be listened on and authenticated by the current server across clusters.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. An empty string indicates that no information about the third node is configured.

**Default value**: empty

## cross\_cluster\_replconninfo4<a name="section95504535538"></a>

**Parameter description**: Specifies the information about the fourth node to be listened on and authenticated by the current server across clusters.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. An empty string indicates that no information about the fourth node is configured.

**Default value**: empty

## cross\_cluster\_replconninfo5<a name="section1550175310534"></a>

**Parameter description**: Specifies the information about the fifth node to be listened on and authenticated by the current server across clusters.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string An empty string indicates that no information about the fifth node is configured.

**Default value**: empty

## cross\_cluster\_replconninfo6<a name="section2550105395315"></a>

**Parameter description**: Specifies the information about the sixth node to be listened on and authenticated by the current server across clusters.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. An empty string indicates that no information about the sixth node is configured.

**Default value**: empty

## cross\_cluster\_replconninfo7<a name="section1955045305317"></a>

**Parameter description**: Specifies the information about the seventh node to be listened on and authenticated by the current server across clusters.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. An empty string indicates that no information about the seventh node is configured.

**Default value**: empty

## cross\_cluster\_replconninfo8<a name="section755035345315"></a>

**Parameter description**: Specifies the information about the eighth node to be listened on and authenticated by the current server across clusters.

This parameter is a SIGHUP parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. An empty string indicates that no information about the eighth node is configured.

**Default value**: empty

## available\_zone<a name="section1567713155312"></a>

**Parameter description**: Specifies the region where the local node is located.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: a string. An empty string indicates that no information about the node is configured.

**Default value**: empty

## max\_keep\_log\_seg<a name="section1657933731116"></a>

**Parameter description**: Stream control parameter. In logical replication, physical logs are parsed and converted into logical logs locally on the DN. When the number of physical log files that are not parsed is greater than the value of this parameter, stream control is triggered. The value  **0**  indicates that the stream control function is disabled.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 2147483647

**Default value**:  **0**

