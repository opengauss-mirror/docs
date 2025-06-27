# TABLES

TABLES视图返回数据库中的表或视图信息。

**表1** TABLES

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
            <td><strong>TABLE_CATALOG</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>表限定符</td>
        </tr>
        <tr>
            <td><strong>TABLE_SCHEMA</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>包含该表的架构的名称</td>
        </tr>
        <tr>
            <td><strong>TABLE_NAME</strong></td>
            <td><strong>name</strong></td>
            <td>表或视图名称</td>
        </tr>
        <tr>
            <td><strong>TABLE_TYPE</strong></td>
            <td><strong>varchar（10）</strong></td>
            <td>表的类型。 可以是 VIEW 或 BASE TABLE。</td>
        </tr>
    </tbody>
</table>