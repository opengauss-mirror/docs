# VIEWS

所有架构范围内的用户定义视图。

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
            <td><strong>name</strong></td>
            <td><strong>name</strong></td>
            <td>对象名称</td>
        </tr>
        <tr>
            <td><strong>object_id</strong></td>
            <td><strong>oid</strong></td>
            <td>对象 ID</td>
        </tr>
        <tr>
            <td><strong>principal_id</strong></td>
            <td><strong>oid</strong></td>
            <td>对象 owner 的oid。<br/>如果当前owner与schema为同一个owner，则返回NULL。</td>
        </tr>
        <tr>
            <td><strong>schema_id</strong></td>
            <td><strong>oid</strong></td>
            <td>所属 schema 的 ID</td>
        </tr>
        <tr>
            <td><strong>parent_object_id</strong></td>
            <td><strong>oid</strong></td>
            <td>返回对象所属的 parent 对象 ID</td>
        </tr>
        <tr>
            <td><strong>type</strong></td>
            <td><strong>char(2)</strong></td>
            <td>对象类型</td>
        </tr>
        <tr>
            <td><strong>type_desc</strong></td>
            <td><strong>nvarchar(60)</strong></td>
            <td>对象类型描述</td>
        </tr>
        <tr>
            <td><strong>create_date</strong></td>
            <td><strong>timestamp</strong></td>
            <td>对象创建日期</td>
        </tr>
        <tr>
            <td><strong>modify_date</strong></td>
            <td><strong>timestamp</strong></td>
            <td>对象修改日期</td>
        </tr>
        <tr>
            <td><strong>is_ms_shipped</strong></td>
            <td><strong>bit</strong></td>
            <td>是否为系统内部对象<br/>如系统表、视图等返回 1</br/>用户表等返回 0</td>
        </tr>
        <tr>
            <td><strong>is_published</strong></td>
            <td><strong>bit</strong></td>
            <td>对象是否发布</td>
        </tr>
        <tr>
            <td><strong>is_schema_published</strong></td>
            <td><strong>bit</strong></td>
            <td>是否只发布架构</td>
        </tr>
        <tr>
            <td><strong>is_replicated</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>has_replication_filter</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>has_opaque_metadata</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>has_unchecked_assembly_data</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>with_check_option</strong></td>
            <td><strong>bit</strong></td>
            <td>1 视图存在 WITH CHECK OPTION 选项</td>
        </tr>
        <tr>
            <td><strong>is_date_correlation_view</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
    </tbody>
</table>