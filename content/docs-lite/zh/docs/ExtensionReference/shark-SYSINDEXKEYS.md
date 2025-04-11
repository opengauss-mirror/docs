# SYSINDEXKEYS

SYSINDEXKEYS视图包含有关数据库的索引中列的信息。

**表1** SYSINDEXKEYS视图字段

<table aria-label="表1" class="table table-sm margin-top-none">
    <thead>
        <tr>
            <th>列名称</th>
            <th>数据类型</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>id</strong></td>
            <td><strong>oid</strong></td>
            <td>表的 ID。</td>
        </tr>
        <tr>
            <td><strong>indid</strong></td>
            <td><strong>oid</strong></td>
            <td>索引的 ID。</td>
        </tr>
        <tr>
            <td><strong>colid</strong></td>
            <td><strong>smallint</strong></td>
            <td>列的 ID。</td>
        </tr>
        <tr>
            <td><strong>keyno</strong></td>
            <td><strong>smallint</strong></td>
            <td>该列在索引中的位置。</td>
        </tr>
    </tbody>
</table>