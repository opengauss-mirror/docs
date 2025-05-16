# TABLES

所有架构范围内的用户定义表。

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
            <td>对象类型。固定返回 U</td>
        </tr>
        <tr>
            <td><strong>type_desc</strong></td>
            <td><strong>nvarchar(60)</strong></td>
            <td>对象类型描述。固定返回 USER_TABLE</td>
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
            <td><strong>lob_data_space_id</strong></td>
            <td><strong>oid</strong></td>
            <td>对应的 toast 表的 ID</td>
        </tr>
		<tr>
            <td><strong>filestream_data_space_id</strong></td>
            <td><strong>int</strong></td>
            <td>返回 NULL</td>
        </tr>
		<tr>
            <td><strong>max_column_id_used</strong></td>
            <td><strong>int</strong></td>
            <td>列的最大 ID</td>
        </tr>
		<tr>
            <td><strong>lock_on_bulk_load</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
		<tr>
            <td><strong>uses_ansi_nulls</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 1</td>
        </tr>
		<tr>
            <td><strong>is_replicated</strong></td>
            <td><strong>bit</strong></td>
            <td>1 表示为基于事务的发布</td>
        </tr>
		<tr>
            <td><strong>has_replication_filter</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
		<tr>
            <td><strong>is_merge_published</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
		<tr>
            <td><strong>is_sync_tran_subscribed</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
		<tr>
            <td><strong>has_unchecked_assembly_data</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
		<tr>
            <td><strong>text_in_row_limit</strong></td>
            <td><strong>int</strong></td>
            <td>返回 0</td>
        </tr>
		<tr>
            <td><strong>large_value_types_out_of_row</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
		<tr>
            <td><strong>is_tracked_by_cdc</strong></td>
            <td><strong>tinyint</strong></td>
            <td>返回 0</td>
        </tr>
		<tr>
            <td><strong>lock_escalation</strong></td>
            <td><strong>tinyint</strong></td>
            <td>返回 1</td>
        </tr>
		<tr>
            <td><strong>lock_escalation_desc</strong></td>
            <td><strong>nvarchar(60)</strong></td>
            <td>返回 DISABLE</td>
        </tr>
		<tr>
            <td><strong>is_filetable</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
		<tr>
            <td><strong>is_memory_optimized</strong></td>
            <td><strong>bit</strong></td>
            <td>1 表示该表为MOT表</td>
        </tr>
		<tr>
            <td><strong>durability</strong></td>
            <td><strong>tinyint</strong></td>
            <td>返回 0</td>
        </tr>
		<tr>
            <td><strong>durability_desc</strong></td>
            <td><strong>nvarchar(60)</strong></td>
            <td>返回 SCHEMA_AND_DATA</td>
        </tr>
		<tr>
            <td><strong>temporal_type</strong></td>
            <td><strong>tinyint</strong></td>
            <td>2 为临时表<br/>0 其它情况</td>
        </tr>
		<tr>
            <td><strong>temporal_type_desc</strong></td>
            <td><strong>nvarchar(60)</strong></td>
            <td>SYSTEM_VERSIONED_TEMPORAL_TABLE 为临时表<br/>NON_TEMPORAL_TABLE 其它情况</td>
        </tr>
		<tr>
            <td><strong>history_table_id</strong></td>
            <td><strong>int</strong></td>
            <td>返回 NULL</td>
        </tr>
		<tr>
            <td><strong>is_remote_data_archive_enabled</strong></td>
            <td><strong>bit</strong></td>
            <td>返回 0</td>
        </tr>
		<tr>
            <td><strong>is_external</strong></td>
            <td><strong>bit</strong></td>
            <td>1 表示外部表</td>
        </tr>
		<tr>
            <td><strong>history_retention_period</strong></td>
            <td><strong>int</strong></td>
            <td>返回 0</td>
        </tr>
		<tr>
            <td><strong>history_retention_period_unit</strong></td>
            <td><strong>int</strong></td>
            <td>返回 -1</td>
        </tr>
		<tr>
            <td><strong>history_retention_period_unit_desc</strong></td>
            <td><strong>nvarchar(10)</strong></td>
            <td>返回 INFINITE</td>
        </tr>
		<tr>
            <td><strong>is_node</strong></td>
            <td><strong>bit</strong></td>
            <td>图数据库的节点表</td>
        </tr>
		<tr>
            <td><strong>is_edge</strong></td>
            <td><strong>bit</strong></td>
            <td>图数据库的边表</td>
        </tr>
    </tbody>
</table>