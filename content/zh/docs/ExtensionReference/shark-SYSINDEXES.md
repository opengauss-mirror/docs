# SYSINDEXES

SYSINDEXES视图为当前数据库中的每个索引和表各对应一行。此视图不支持 XML 索引。 此视图中不支持已分区表和索引。

**表1** SYSINDEXES视图字段

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
            <td><strong>id</strong></td>
            <td><strong>oid</strong></td>
            <td>索引所属表的 ID</td>
        </tr>
        <tr>
            <td><strong>status</strong></td>
            <td><strong>int</strong></td>
            <td>返回 NULL</td>
        </tr>
        <tr>
            <td><strong>first</strong></td>
            <td><strong>bytea</strong></td>
            <td>返回 NULL</td>
        </tr>
        <tr>
            <td><strong>indid</strong></td>
            <td><strong>oid</strong></td>
            <td>索引 ID</td>
        </tr>
        <tr>
            <td>root<strong></strong></td>
            <td><strong>bytea</strong></td>
            <td>返回 NULL</td>
        </tr>
        <tr>
            <td><strong>minlen</strong></td>
            <td><strong>smallint</strong></td>
            <td>行的最小大小。返回 0</td>
        </tr>
        <tr>
            <td><strong>keycnt</strong></td>
            <td><strong>smallint</strong></td>
            <td>键数。返回0</td>
        </tr>
        <tr>
            <td><strong>groupid</strong></td>
            <td><strong>smallint</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>dpages</strong></td>
            <td><strong>int</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td>reserved</td>
            <td><strong>int</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>used</strong></td>
            <td><strong>int</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>rowcnt</strong></td>
            <td><strong>bigint</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>rowmodctr</strong></td>
            <td><strong>int</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>reserved3</strong></td>
            <td><strong>int</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>reserved4</strong></td>
            <td><strong>int</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>xmaxlen</strong></td>
            <td><strong>smallint</strong></td>
            <td>行的最大大小。返回 0</td>
        </tr>
        <tr>
            <td><strong>maxirow</strong></td>
            <td><strong>smallint</strong></td>
            <td>返回 NULL</td>
        </tr>
        <tr>
            <td><strong>OrigFillFactor</strong></td>
            <td><strong>tinyint</strong></td>
            <td>创建索引时使用的初始填充因子值。 </td>
        </tr>
        <tr>
            <td><strong>StatVersion</strong></td>
            <td><strong>tinyint</strong></td>
            <td>返回 0。</td>
        </tr>
        <tr>
            <td><strong>reserved2</strong></td>
            <td><strong>int</strong></td>
            <td>返回 0。</td>
        </tr>
        <tr>
            <td><strong>FirstIAM</strong></td>
            <td><strong>bytea</strong></td>
            <td>返回 NULL</td>
        </tr>
        <tr>
            <td><strong>impid</strong></td>
            <td><strong>smallint</strong></td>
            <td>索引实现标志。 返回 0。</td>
        </tr>
        <tr>
            <td><strong>lockflags</strong></td>
            <td><strong>smallint</strong></td>
            <td>用于约束经过考虑的索引锁粒度。 返回 0。</td>
        </tr>
        <tr>
            <td><strong>pgmodctr</strong></td>
            <td><strong>int</strong></td>
            <td>返回 0。</td>
        </tr>
        <tr>
            <td><strong>keys</strong></td>
            <td><strong>bytea</strong></td>
            <td>组成索引键的列 ID 列表。<br> 返回 NULL。<br> 若要显示索引键列，请使用[sysindexkeys](shark-SYSINDEXKEYS.md)。</td>
        </tr>
        <tr>
            <td><strong>name</strong></td>
            <td><strong>name</strong></td>
            <td>索引的名称。</td>
        </tr>
        <tr>
            <td><strong>statblob</strong></td>
            <td><strong>blob</strong></td>
            <td>统计信息二进制大型对象 (BLOB)。<br> 返回 NULL。</td>
        </tr>
        <tr>
            <td><strong>maxlen</strong></td>
            <td><strong>int</strong></td>
            <td>返回 0</td>
        </tr>
        <tr>
            <td><strong>rows</strong></td>
            <td><strong>int</strong></td>
            <td>返回 0</td>
        </tr>
    </tbody>
</table>