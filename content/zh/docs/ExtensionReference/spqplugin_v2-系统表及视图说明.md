# spqplugin_v2系统表及视图说明
-   pg_dist_node

    描述：系统表，存储集群中所有节点的信息

    <table><thead align="left"><tr id="row2994153425611">
    <th class="cellrowborder" valign="top" width="11.97%" id="mcps1.2.5.1.2"><p id="p3994113411568"><a name="p3994113411568"></a><a name="p3994113411568"></a>列名</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.32%" id="mcps1.2.5.1.3"><p id="p189946342567"><a name="p189946342567"></a><a name="p189946342567"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="61.019999999999996%" id="mcps1.2.5.1.4"><p id="p899410346569"><a name="p899410346569"></a><a name="p899410346569"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row16994143445619">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p114021312413"><a name="p114021312413"></a><a name="p114021312413"></a>nodeid</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p16994183413569"><a name="p16994183413569"></a><a name="p16994183413569"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    节点唯一标识
    </td>
    </tr>
    <tr id="row17994123411562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p53919138411"><a name="p53919138411"></a><a name="p53919138411"></a>groupid</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p12994103420564"><a name="p12994103420564"></a><a name="p12994103420564"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    唯一标识一组节点
    </td>
    </tr>
    <tr id="row29944347562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p0371613945"><a name="p0371613945"></a><a name="p0371613945"></a>nodename</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p188631948943"><a name="p188631948943"></a><a name="p188631948943"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    节点IP或域名
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">nodeport
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    节点端口
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">noderack
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    当前版本不使用
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">hasmetadata
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    是否有元数据，CN节点为true，DN节点为false
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">isactive
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    该节点是否被使用
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">nodecluster
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    该节点所属spq cluster的名字
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">metadatasynced
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    元数据是否同步。CN节点为true，DN节点为fasle
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">shouldhaveshards
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    是否可以存储分片数据。CN节点为false，DN节点为true
    </td>
    </tr>
    </tbody>
    </table>
    
    示例：
    ```sql
    openGauss=# select * from pg_dist_node;
    nodeid | groupid | nodename  | nodeport | noderack | hasmetadata | isactive | noderole | nodecluster | metadatasynced | shouldhaveshards 
    --------+---------+-----------+----------+----------+-------------+----------+----------+-------------+----------------+------------------
         1 |       0 | 127.0.0.1 |    15432 | default  | t           | t        | primary  | default     | t              | f
         2 |       1 | 127.0.0.1 |    15532 | default  | f           | t        | primary  | default     | f              | t
         3 |       2 | 127.0.0.1 |    15632 | default  | f           | t        | primary  | default     | f              | t
    (3 rows)
    ```

-   pg_dist_partition

    描述：系统表，存储分布式表的定义

    <table><thead align="left"><tr id="row2994153425611">
    <th class="cellrowborder" valign="top" width="11.97%" id="mcps1.2.5.1.2"><p id="p3994113411568"><a name="p3994113411568"></a><a name="p3994113411568"></a>列名</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.32%" id="mcps1.2.5.1.3"><p id="p189946342567"><a name="p189946342567"></a><a name="p189946342567"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="61.019999999999996%" id="mcps1.2.5.1.4"><p id="p899410346569"><a name="p899410346569"></a><a name="p899410346569"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row16994143445619">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p114021312413"><a name="p114021312413"></a><a name="p114021312413"></a>logicalrelid</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p16994183413569"><a name="p16994183413569"></a><a name="p16994183413569"></a>regclass</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    分布式表表名
    </td>
    </tr>
    <tr id="row17994123411562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p53919138411"><a name="p53919138411"></a><a name="p53919138411"></a>partmethod</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p12994103420564"><a name="p12994103420564"></a><a name="p12994103420564"></a>char</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    当前版本唯一值为'h'，代表hash分区
    </td>
    </tr>
    <tr id="row29944347562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p0371613945"><a name="p0371613945"></a><a name="p0371613945"></a>partkey</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p188631948943"><a name="p188631948943"></a><a name="p188631948943"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    分区列的信息
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">colocationid
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    当前版本不使用
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">repmodel
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>char</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    当前版本不使用
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">autoconverted
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    当前版本不使用
    </td>
    </tr>
    
    </tbody>
    </table>
    
    示例：
    ```sql
    openGauss=# select * from pg_dist_partition;
    logicalrelid | partmethod |                                                        partkey                                                         | colocationid | repmodel | autoconverted 
    --------------+------------+------------------------------------------------------------------------------------------------------------------------+--------------+----------+---------------
    t1           | h          | {VAR :varno 1 :varattno 1 :vartype 23 :vartypmod -1 :varcollid 0 :varlevelsup 0 :varnoold 1 :varoattno 1 :location -1} |            1 | s        | f
    (1 row)
    ```


-   pg_dist_shard

    描述：系统表，存储分布式表每个分片的信息

    <table><thead align="left"><tr id="row2994153425611">
    <th class="cellrowborder" valign="top" width="11.97%" id="mcps1.2.5.1.2"><p id="p3994113411568"><a name="p3994113411568"></a><a name="p3994113411568"></a>列名</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.32%" id="mcps1.2.5.1.3"><p id="p189946342567"><a name="p189946342567"></a><a name="p189946342567"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="61.019999999999996%" id="mcps1.2.5.1.4"><p id="p899410346569"><a name="p899410346569"></a><a name="p899410346569"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row16994143445619">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p114021312413"><a name="p114021312413"></a><a name="p114021312413"></a>logicalrelid</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p16994183413569"><a name="p16994183413569"></a><a name="p16994183413569"></a>regclass</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    分布式表表名
    </td>
    </tr>
    <tr id="row17994123411562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p53919138411"><a name="p53919138411"></a><a name="p53919138411"></a>shardid</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p12994103420564"><a name="p12994103420564"></a><a name="p12994103420564"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    分片编号
    </td>
    </tr>
    <tr id="row29944347562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p0371613945"><a name="p0371613945"></a><a name="p0371613945"></a>shardstorage</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p188631948943"><a name="p188631948943"></a><a name="p188631948943"></a>char</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    存储类型，当前仅支持't'，即普通表
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">shardminvalue
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    当前shard的hash分区的最小hash值
    </td>
    </tr>
    
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">shardmaxvalue
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    当前shard的hash分区的最大hash值
    </td>
    </tr>
    
    </tbody>
    </table>
    
    示例：
    ```sql
    openGauss=# select * from pg_dist_shard;
     logicalrelid | shardid | shardstorage | shardminvalue | shardmaxvalue 
    --------------+---------+--------------+---------------+---------------
     t1           |   62025 | t            | -2147483648   | -1073741825
     t1           |   62026 | t            | -1073741824   | -1
     t1           |   62027 | t            | 0             | 1073741823
     t1           |   62028 | t            | 1073741824    | 2147483647
    (4 rows)
    ```

-   pg_dist_placement

    描述：系统表，存储分布式表每个分片的位置信息

    <table><thead align="left"><tr id="row2994153425611">
    <th class="cellrowborder" valign="top" width="11.97%" id="mcps1.2.5.1.2"><p id="p3994113411568"><a name="p3994113411568"></a><a name="p3994113411568"></a>列名</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.32%" id="mcps1.2.5.1.3"><p id="p189946342567"><a name="p189946342567"></a><a name="p189946342567"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="61.019999999999996%" id="mcps1.2.5.1.4"><p id="p899410346569"><a name="p899410346569"></a><a name="p899410346569"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">placementid
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    自增唯一标识
    </td>
    </tr>
    <tr id="row17994123411562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p53919138411"><a name="p53919138411"></a><a name="p53919138411"></a>shardid</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p12994103420564"><a name="p12994103420564"></a><a name="p12994103420564"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    分片编号
    </td>
    </tr>
    <tr id="row29944347562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p0371613945"><a name="p0371613945"></a><a name="p0371613945"></a>shardstate</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p188631948943"><a name="p188631948943"></a><a name="p188631948943"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    分片状态
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">shardlength
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    对于hash分区，恒为0
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">groupid
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    唯一标识一组节点
    </td>
    </tr>
    
    
    </tbody>
    </table>
    
    示例：
    ```sql
    openGauss=# select * from pg_dist_placement;
     placementid | shardid | shardstate | shardlength | groupid 
    -------------+---------+------------+-------------+---------
               1 |   62025 |          1 |           0 |       1
               2 |   62026 |          1 |           0 |       2
               3 |   62027 |          1 |           0 |       1
               4 |   62028 |          1 |           0 |       2
    (4 rows)
    
    ```
  
-   spq_shards

    描述：视图，查看所有的分片信息

    <table><thead align="left"><tr id="row2994153425611">
    <th class="cellrowborder" valign="top" width="11.97%" id="mcps1.2.5.1.2"><p id="p3994113411568"><a name="p3994113411568"></a><a name="p3994113411568"></a>列名</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.32%" id="mcps1.2.5.1.3"><p id="p189946342567"><a name="p189946342567"></a><a name="p189946342567"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="61.019999999999996%" id="mcps1.2.5.1.4"><p id="p899410346569"><a name="p899410346569"></a><a name="p899410346569"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">table_name
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>regclass</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    表名
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">shardid
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    分片编号
    </td>
    </tr>
    <tr id="row17994123411562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p53919138411"><a name="p53919138411"></a><a name="p53919138411"></a>shard_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p12994103420564"><a name="p12994103420564"></a><a name="p12994103420564"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    分片名
    </td>
    </tr>
    <tr id="row29944347562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p0371613945"><a name="p0371613945"></a><a name="p0371613945"></a>table_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p188631948943"><a name="p188631948943"></a><a name="p188631948943"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    表类型
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">nodename</td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>text</p></td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    节点IP或域名
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">nodeport</td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>integer</p></td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    节点端口
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">shard_size</td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>bigint</p></td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    分片大小
    </td>
    </tr>
    
    </tbody>
    </table>
    
    示例：
    ```sql
    openGauss=# select * from spq_shards;
     table_name | shardid | shard_name | table_type  | nodename  | nodeport | shard_size 
    ------------+---------+------------+-------------+-----------+----------+------------
     t1         |   62025 | t1_62025   | distributed | 127.0.0.1 |    15532 |       8192
     t1         |   62026 | t1_62026   | distributed | 127.0.0.1 |    15632 |       8192
     t1         |   62027 | t1_62027   | distributed | 127.0.0.1 |    15532 |          0
     t1         |   62028 | t1_62028   | distributed | 127.0.0.1 |    15632 |       8192
    (4 rows)
    ```

-   spq_tables

    描述：视图，查看所有分布式表信息

    <table><thead align="left"><tr id="row2994153425611">
    <th class="cellrowborder" valign="top" width="11.97%" id="mcps1.2.5.1.2"><p id="p3994113411568"><a name="p3994113411568"></a><a name="p3994113411568"></a>列名</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.32%" id="mcps1.2.5.1.3"><p id="p189946342567"><a name="p189946342567"></a><a name="p189946342567"></a>类型</p>
    </th>
    <th class="cellrowborder" valign="top" width="61.019999999999996%" id="mcps1.2.5.1.4"><p id="p899410346569"><a name="p899410346569"></a><a name="p899410346569"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">table_name
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>regclass</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    表名
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">table_type
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    表类型
    </td>
    </tr>
    <tr id="row17994123411562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p53919138411"><a name="p53919138411"></a><a name="p53919138411"></a>distribution_column</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p12994103420564"><a name="p12994103420564"></a><a name="p12994103420564"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    分片列
    </td>
    </tr>
    <tr id="row29944347562">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 "><p id="p0371613945"><a name="p0371613945"></a><a name="p0371613945"></a>table_size</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p188631948943"><a name="p188631948943"></a><a name="p188631948943"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 ">
    表大小
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">shard_count</td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>bigint</p></td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    分片数量
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">table_owner</td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>name</p></td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    属主
    </td>
    </tr>
    <tr id="row179951634105614">
    <td class="cellrowborder" valign="top" width="11.97%" headers="mcps1.2.5.1.2 ">access_method</td>
    <td class="cellrowborder" valign="top" width="15.32%" headers="mcps1.2.5.1.3 "><p id="p1199573415619"><a name="p1199573415619"></a><a name="p1199573415619"></a>name</p></td>
    <td class="cellrowborder" valign="top" width="61.019999999999996%" headers="mcps1.2.5.1.4 "><a name="ul13872183415441"></a><a name="ul13872183415441"></a>
    当前版本不使用
    </td>
    </tr>
    
    </tbody>
    </table>
    
    示例：
    ```sql
    openGauss=# select * from spq_tables;
     table_name | table_type  | distribution_column | table_size | shard_count | table_owner | access_method 
    ------------+-------------+---------------------+------------+-------------+-------------+---------------
     t1         | distributed | a                   | 24 kB      |           4 | openGauss   | 
    (1 row)
    ```