# VIEWS 

VIEWS视图返回数据库中的视图信息。

**表1** VIEWS 

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
            <td><strong>nvarchar(128)</strong></td>
            <td>视图名称</td>
        </tr>
        <tr>
            <td><strong>VIEW_DEFINITION</strong></td>
            <td><strong>nvarchar(4000)</strong></td>
            <td>如果定义的长度大于 nvarchar(4000)，则该列在 4000 处截断。 否则，该列是视图定义文本。</td>
        </tr>
         <tr>
            <td><strong>CHECK_OPTION</strong></td>
            <td><strong>varchar(7)</strong></td>
            <td>WITH CHECK OPTION 的类型。 如果最初的视图是使用 WITH CHECK OPTION 创建的，那么就为 CASCADE。 否则，返回 NONE。</td>
        </tr>
         <tr>
            <td><strong>IS_UPDATABLE</strong></td>
            <td><strong>varchar(2)</strong></td>
            <td>指定视图是否可更新。1=TRUE,0=FALSE</td>
        </tr>
    </tbody>
</table>