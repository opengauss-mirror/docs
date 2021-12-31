# PG_SUBSCRIPTION

系统表PG_SUBSCRIPTION包含所有现有的逻辑复制订阅。

和大部分系统表不同，**pg_subscription在集群的所有数据库之间共享：每个集群只有一份pg_subscription拷贝，而不是每个数据库一份**。

**表1** PG_SUBSCRIPTION字段
<table>
    <tr>
        <th>名称</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
        <th>subdbid</th>
        <th>oid</th>
        <th>订阅所在的数据库的OID</th>
    </tr>
    <tr>
        <th>subname</th>
        <th>text</th>
        <th>订阅的名称</th>
    </tr>
    <tr>
        <th>subowner</th>
        <th>oid</th>
        <th>订阅的拥有者</th>
    </tr>
    <tr>
        <th>subenabled</th>
        <th>bool</th>
        <th>如果为真，订阅被启用并且应该被复制。</th>
    </tr>
    <tr>
        <th>subconninfo</th>
        <th>text</th>
        <th>到发布端数据库的连接信息</th>
    </tr>
    <tr>
        <th>subslotname</th>
        <th>text</th>
        <th>发布端数据库中复制槽的名称；空表示 NONE</th>
    </tr>
    <tr>
        <th>subpublications</th>
        <th>text[]</th>
        <th>被订阅的publication名称的数组。这些引用的是发布者服务器上的publication。</th>
    </tr>
</table>

**注意事项**：

列subconninfo存在password信息，参考user mapping功能，需要对password字段进行加密。
