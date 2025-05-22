# CHECK_CONSTRAINTS

用户定义对象和系统对象的所有列的集合。

**表1** CHECK_CONSTRAINTS

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
            <td><strong>CONSTRAINT_CATALOG</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>约束限定符</td>
        </tr>
        <tr>
            <td><strong>CONSTRAINT_SCHEMA</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>约束所属架构的名称</td>
        </tr>
        <tr>
            <td><strong>CONSTRAINT_NAME</strong></td>
            <td><strong>name</strong></td>
            <td>约束名称</td>
        </tr>
        <tr>
            <td><strong>CHECK_CLAUSE</strong></td>
            <td><strong>nvarchar（4000）</strong></td>
            <td>Transact-SQL 定义语句的实际文本</td>
        </tr>
    </tbody>
</table>