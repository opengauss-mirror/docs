# COLUMNS

用户定义对象的所有列。

**表1** COLUMNS

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
            <td>列名称</td>
        </tr>
        <tr>
            <td><strong>column_id</strong></td>
            <td><strong>int</strong></td>
            <td>列的 ID</td>
        </tr>
        <tr>
            <td><strong>system_type_id</strong></td>
            <td><strong>oid</strong></td>
            <td>列的数据类型 ID</td>
        </tr>
        <tr>
            <td><strong>user_type_id</strong></td>
            <td><strong>oid</strong></td>
            <td>列的数据类型 ID</td>
        </tr>
        <tr>
            <td><strong>max_length</strong></td>
            <td><strong>smallint</strong></td>
            <td>列的最大字节长度</td>
        </tr>
        <tr>
            <td><strong>precision</strong></td>
            <td><strong>smallint</strong></td>
            <td>如果是基于 numeric 的类型，则返回对应的 precision<br/>否则返回 0</td>
        </tr>
        <tr>
            <td><strong>scale</strong></td>
            <td><strong>smallint</strong></td>
            <td>如果是基于 numeric 的类型，则返回对应的 scale<br/>否则返回 0</td>
        </tr>
        <tr>
            <td><strong>collation_name</strong></td>
            <td><strong>name</strong></td>
            <td>列的字符排序名称</td>
        </tr>
        <tr>
            <td><strong>is_nullable</strong></td>
            <td><strong>bit</strong></td>
            <td>列是否允许 null 值</td>
        </tr>
        <tr>
            <td><strong>is_ansi_padded</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>is_rowguidcol</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>is_identity</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>is_computed</strong></td>
            <td><strong>bit</strong></td>
            <td>1 列为计算列</td>
        </tr>
        <tr>
            <td><strong>is_filestream</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>is_replicated</strong></td>
            <td><strong>bit</strong></td>
            <td>1 列已发布。如果列对应的表发布，则该表的所有列都发布。</td>
        </tr>
        <tr>
            <td><strong>is_non_sql_subscribed</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>is_merge_published</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>is_dts_replicated</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>is_xml_document</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>xml_collection_id</strong></td>
            <td><strong>oid</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>default_object_id</strong></td>
            <td><strong>oid</strong></td>
            <td>列的默认值的 ID</td>
        </tr>
        <tr>
            <td><strong>rule_object_id</strong></td>
            <td><strong>int</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>is_sparse</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>is_column_set</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>generated_always_type</strong></td>
            <td><strong>tinyint</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>generated_always_type_desc</strong></td>
            <td><strong>nvarchar(60)</strong></td>
            <td>返回 NOT_APPLICABLE</td>
        </tr>
        <tr>
            <td><strong>encryption_type</strong></td>
            <td><strong>int</strong></td>
            <td>列的加密类型<br/>1 = Deterministic encryption<br/>2 = Randomized encryption</td>
        </tr>
        <tr>
            <td><strong>encryption_type_desc</strong></td>
            <td><strong>nvarchar(64)</strong></td>
            <td>列的加密类型的描述<br/>Deterministic encryption<br/>Randomized encryption</td>
        </tr>
        <tr>
            <td><strong>encryption_algorithm_name</strong></td>
            <td><strong>name</strong></td>
            <td>列加密的算法</td>
        </tr>
        <tr>
            <td><strong>column_encryption_key_id</strong></td>
            <td><strong>oid</strong></td>
            <td>加密列的Key的 ID</td>
        </tr>
        <tr>
            <td><strong>column_encryption_key_database_name</strong></td>
            <td><strong>name</strong></td>
            <td>返回 NULL</td>
        </tr>
        <tr>
            <td><strong>is_hidden</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>is_masked</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>graph_type</strong></td>
            <td><strong>int</strong></td>
            <td>返回 NULL</td>
        </tr>
        <tr>
            <td><strong>graph_type_desc</strong></td>
            <td><strong>nvarchar(60)</strong></td>
            <td>返回 NULL</td>
        </tr>
    </tbody>
</table>