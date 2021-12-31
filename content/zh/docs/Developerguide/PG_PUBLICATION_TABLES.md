# PG_PUBLICATION_TABLES

视图PG_PUBLICATION_TABLES提供publication与其所发布的表之间的映射信息。和底层的系统表pg_publication_rel不同，这个视图展开了定义为FOR ALL TABLES的publication，这样对这类publication来说，每一个合格的表都有一行。

<table>
    <tr>
        <th>名称</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
        <th>pubname</th>
        <th>name</th>
        <th>发布的名称</th>
    </tr>
    <tr>
        <th>schemaname</th>
        <th>name</th>
        <th>包含表的模式名称</th>
    </tr>
    <tr>
        <th>tablename</th>
        <th>name</th>
        <th>表的名称</th>
    </tr>
</table>
