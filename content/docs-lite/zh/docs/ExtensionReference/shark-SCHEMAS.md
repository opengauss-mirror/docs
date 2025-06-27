# SCHEMAS

SCHEMAS视图返回数据库中的名称空间信息。

**表1** SCHEMAS

<table aria-label="表1" class="table table-sm margin-top-none">
    <thead>
        <tr>
            <th>列名称</th>
            <th>类型</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>name</strong></td>
            <td><strong>name</strong></td>
            <td>架构的名称</td>
        </tr>
        <tr>
            <td><strong>schema_id</strong></td>
            <td><strong>int</strong></td>
            <td>架构的 ID</td>
        </tr>
        <tr>
            <td><strong>principal_id</strong></td>
            <td><strong>int</strong></td>
            <td>此架构所属的主体数据库的 ID</td>
        </tr>
    </tbody>
</table>