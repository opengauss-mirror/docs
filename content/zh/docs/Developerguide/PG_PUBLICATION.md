# PG_PUBLICATION

系统表pg_publication包含当前数据库中创建的所有publication。

**表1** PG_PUBLICATION字段

<table>
    <tr>
        <th>名称</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
        <th>pubname</th>
        <th>text</th>
        <th>publication的名称</th>
    </tr>
    <tr>
        <th>pubowner</th>
        <th>oid</th>
        <th>publication的拥有者</th>
    </tr>
    <tr>
        <th>puballtables</th>
        <th>bool</th>
        <th>如果为真，这个publication自动包括数据库中的所有表，包括未来将会创建的任何表。</th>
    </tr>
    <tr>
        <th>pubinsert</th>
        <th>bool</th>
        <th>如果为真，为publication中的表复制INSERT操作。</th>
    </tr>
    <tr>
        <th>pubupdate</th>
        <th>bool</th>
        <th>如果为真，为publication中的表复制UPDATE操作。</th>
    </tr>
    <tr>
        <th>pubdelete</th>
        <th>bool</th>
        <th>如果为真，为publication中的表复制DELETE操作。</th>
    </tr>
</table>
