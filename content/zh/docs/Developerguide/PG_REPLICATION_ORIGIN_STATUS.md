# PG_REPLICATION_ORIGIN_STATUS

获取复制源的复制状态

<table>
    <tr>
        <th>名称</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
        <th>local_id</th>
        <th>oid</th>
        <th>复制源id</th>
    </tr>
    <tr>
        <th>external_id</th>
        <th>text</th>
        <th>复制源名称</th>
    </tr>
    <tr>
        <th>remote_lsn</th>
        <th>LSN</th>
        <th>复制源的lsn位置</th>
    </tr>
    <tr>
        <th>local_lsn</th>
        <th>LSN</th>
        <th>本地的lsn位置</th>
    </tr>
</table>
