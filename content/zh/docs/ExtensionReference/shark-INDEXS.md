# INDEXS

返回所有索引。

**表1** INDEXS

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
            <td><strong>object_id</strong></td>
            <td><strong>oid</strong></td>
            <td>所属对象的 ID</td>
        </tr>
        <tr>
            <td><strong>name</strong></td>
            <td><strong>name</strong></td>
            <td>索引名称</td>
        </tr>
        <tr>
            <td><strong>index_id</strong></td>
            <td><strong>oid</strong></td>
            <td>索引 ID</td>
        </tr>
        <tr>
            <td><strong>type</strong></td>
            <td><strong>tinyint</strong></td>
            <td>当前支持：<br/>2 = Nonclustered rowstore (B-tree)<br/>6 = Nonclustered columnstore index<br/>7 = Nonclustered hash index. </td>
        </tr>
        <tr>
            <td><strong>type_desc</strong></td>
            <td><strong>nvarchar(60)</strong></td>
            <td>type的描述信息。当前支持：<br/>NONCLUSTERED<br/>NONCLUSTERED COLUMNSTORE<br/>NONCLUSTERED HASH</td>
        </tr>
        <tr>
            <td><strong>is_unique</strong></td>
            <td><strong>bit</strong></td>
            <td>是否唯一索引</td>
        </tr>
        <tr>
            <td><strong>data_space_id</strong></td>
            <td><strong>oid</strong></td>
            <td>索引的数据空间。索引对应的tablespace。</td>
        </tr>
        <tr>
            <td><strong>ignore_dup_key</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>is_primary_key</strong></td>
            <td><strong>bit</strong></td>
            <td>是否为主键</td>
        </tr>
        <tr>
            <td><strong>is_unique_constraint</strong></td>
            <td><strong>bit</strong></td>
            <td>是否唯一约束</td>
        </tr>
        <tr>
            <td><strong>fill_factor</strong></td>
            <td><strong>tinyint</strong></td>
            <td>填充因子</td>
        </tr>
        <tr>
            <td><strong>is_padded</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>is_disabled</strong></td>
            <td><strong>bit</strong></td>
            <td>是否禁用索引</td>
        </tr>
        <tr>
            <td><strong>is_hypothetical</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>allow_row_locks</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 1</td>
        </tr>
        <tr>
            <td><strong>allow_page_locks</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 1</td>
        </tr>
        <tr>
            <td><strong>has_filter</strong></td>
            <td><strong>bit</strong></td>
            <td>是否为部分索引</td>
        </tr>
        <tr>
            <td><strong>filter_definition</strong></td>
            <td><strong>nvarchar</strong></td>
            <td>部分索引定义</td>
        </tr>
        <tr>
            <td><strong>compression_delay</strong></td>
            <td><strong>int</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>suppress_dup_key_messages</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
    </tbody>
</table>
