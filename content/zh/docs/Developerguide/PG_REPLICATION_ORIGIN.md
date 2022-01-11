# PG_REPLICATION_ORIGIN

PG_REPLICATION_ORIGIN系统表包含所有已创建的复制源，在一个集群的所有数据库之间共享，并且每个实例只有一份pg_replication_origin的拷贝，而不是每个数据库实例一份。

**表1** PG_REPLICATION_ORIGIN字段
<table>
    <tr>
        <th>名称</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
        <th>roident</th>
        <th>oid</th>
        <th>一个集群范围内唯一的复制源标识符。</th>
    </tr>
    <tr>
        <th>roname</th>
        <th>text</th>
        <th>外部的由用户定义的复制源名称。</th>
    </tr>
</table>
