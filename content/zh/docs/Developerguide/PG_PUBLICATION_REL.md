# PG_PUBLICATION_REL

系统表PG_PUBLICATION_REL包含当前数据库中的表和publication之间的映射，这是一种**多对多**映射。

**表1** PG_PUBLICATION_REL字段
<table>
    <tr>
        <th>名称</th>
        <th>类型</th>
        <th>引用</th>
        <th>描述</th>
    </tr>
    <tr>
        <th>prpubid</th>
        <th>oid</th>
        <th></th>
        <th>对publication的引用</th>
    </tr>
    <tr>
        <th>prrelid</th>
        <th>oid</th>
        <th></th>
        <th>对表的引用</th>
    </tr>
</table>
