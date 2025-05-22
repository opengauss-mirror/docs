# SYSDATABASES

用户定义对象和系统对象的所有列的集合。

**表1** SYSDATABASES

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
            <td>数据库名称</td>
        </tr>
        <tr>
            <td><strong>dbid</strong></td>
            <td><strong>smallint</strong></td>
            <td>数据库 ID</td>
        </tr>
        <tr>
            <td><strong>sid</strong></td>
            <td><strong>varbinary(85)</strong></td>
            <td>数据库创建者的系统 ID</td>
        </tr>
        <tr>
            <td><strong>mode</strong></td>
            <td><strong>smallint</strong></td>
            <td>返回0</td>
        </tr>
        <tr>
            <td><strong>status</strong></td>
            <td><strong>int</strong></td>
            <td>返回0</td>
        </tr>
        <tr>
            <td><strong>status2</strong></td>
            <td><strong>int</strong></td>
            <td>返回0</td>
        </tr>
        <tr>
            <td><strong>crdate</strong></td>
            <td><strong>timestamp</strong></td>
            <td>返回1900-01-01 00：00：00.000</td>
        </tr>
        <tr>
            <td><strong>reserved</strong></td>
            <td><strong>timestamp</strong></td>
            <td>保留供将来使用 。返回1900-01-01 00：00：00.000</td>
        </tr>
        <tr>
            <td><strong>category</strong></td>
            <td><strong>int</strong></td>
            <td>返回0</td>
        </tr>
        <tr>
            <td><strong>cmptlevel</strong></td>
            <td><strong>tinyint</strong></td>
            <td>返回0</td>
        </tr>
        <tr>
            <td><strong>filename</strong></td>
            <td><strong>nvarchar(260)</strong></td>
            <td>返回NULL</td>
        </tr>
        <tr>
            <td><strong>version</strong></td>
            <td><strong>smallint</strong></td>
            <td>返回NULL</td>
        </tr>
    </tbody>
</table>