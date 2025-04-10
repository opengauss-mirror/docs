# SYSCOLUMNS

SYSCOLUMNS视图为每个表和视图中的每列返回一行，并为数据库中的存储过程的每个参数返回一行。

**表1** SYSCOLUMNS视图字段

<table aria-label="表 1" class="table table-sm margin-top-none">
    <thead>
        <tr>
            <th>列名称</th>
            <th>数据类型</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td><strong>name</strong></td>
            <td>列或过程参数的名称。</td>
        </tr>
        <tr>
            <td><strong>id</strong></td>
            <td><strong>oid</strong></td>
            <td>此列所属表的对象 ID，或者与此参数关联的存储过程的 ID。</td>
        </tr>
        <tr>
            <td><strong>xtype</strong></td>
            <td><strong>oid</strong></td>
            <td>类型 ID</td>
        </tr>
        <tr>
            <td><strong>typestat</strong></td>
            <td><strong>tinyint</strong></td>
            <td>直接返回0</td>
        </tr>
        <tr>
            <td><strong>xusertype</strong></td>
            <td><strong>smallint</strong></td>
            <td>类型 ID</td>
        </tr>
        <tr>
            <td><strong>length</strong></td>
            <td><strong>smallint</strong></td>
            <td>sys<strong> 的最大物理存储长度</strong>。<strong>类型</strong>。</td>
        </tr>
        <tr>
            <td><strong>xprec</strong></td>
            <td><strong>tinyint</strong></td>
            <td>直接返回 0</td>
        </tr>
        <tr>
            <td><strong>xscale</strong></td>
            <td><strong>tinyint</strong></td>
            <td>直接返回 0</td>
        </tr>
        <tr>
            <td><strong>colid</strong></td>
            <td><strong>smallint</strong></td>
            <td>列 ID 或参数 ID。</td>
        </tr>
        <tr>
            <td><strong>xoffset</strong></td>
            <td><strong>smallint</strong></td>
            <td>直接返回 0</td>
        </tr>
        <tr>
            <td><strong>bitpos</strong></td>
            <td><strong>tinyint</strong></td>
            <td>直接返回 0</td>
        </tr>
        <tr>
            <td>reserved</td>
            <td><strong>tinyint</strong></td>
            <td>直接返回 0</td>
        </tr>
        <tr>
            <td><strong>colstat</strong></td>
            <td><strong>smallint</strong></td>
            <td>直接返回 0</td>
        </tr>
        <tr>
            <td><strong>cdefault</strong></td>
            <td><strong>oid</strong></td>
            <td>此列的默认值的 ID。</td>
        </tr>
        <tr>
            <td>domain</td>
            <td><strong>oid</strong></td>
            <td>此列的规则或 CHECK 约束的 ID。</td>
        </tr>
        <tr>
            <td><strong>number</strong></td>
            <td><strong>smallint</strong></td>
            <td>过程分组时的子过程号。直接返回 0</td>
        </tr>
        <tr>
            <td><strong>colorder</strong></td>
            <td><strong>smallint</strong></td>
            <td>直接返回 0</td>
        </tr>
        <tr>
            <td><strong>autoval</strong></td>
            <td>bytea</td>
            <td>直接返回 null</td>
        </tr>
        <tr>
            <td><strong>offset</strong></td>
            <td><strong>smallint</strong></td>
            <td>此列所在行的偏移量。直接返回 0</td>
        </tr>
        <tr>
            <td><strong>collationid</strong></td>
            <td><strong>oid</strong></td>
            <td>列的排序规则的 ID。 对于非字符列，此值为 NULL。</td>
        </tr>
        <tr>
            <td><strong>status</strong></td>
            <td><strong>tinyint</strong></td>
            <td>用于说明列或参数的属性的位图：<br> 0x08 = 列允许空值。<br> 0x40 = 参数为 OUTPUT 参数。</td>
        </tr>
        <tr>
            <td>type</td>
            <td><strong>oid</strong></td>
            <td>类型 ID</td>
        </tr>
        <tr>
            <td><strong>usertype</strong></td>
            <td><strong>oid</strong></td>
            <td>所属架构 ID</td>
        </tr>
        <tr>
            <td><strong>printfmt</strong></td>
            <td><strong>varchar(255)</strong></td>
            <td>直接返回 null</td>
        </tr>
        <tr>
            <td><strong>prec</strong></td>
            <td><strong>smallint</strong></td>
            <td>此列的精度级别。<br> -1 = <strong>xml</strong> 或大值类型。</td>
        </tr>
        <tr>
            <td><strong>scale</strong></td>
            <td><strong>int</strong></td>
            <td>列的 scale <br><br> NULL = 数据类型不是数值。</td>
        </tr>
        <tr>
            <td><strong>iscomputed</strong></td>
            <td><strong>int</strong></td>
            <td>指示列是否为计算列的标志：<br><br> 0 = 非计算列。<br><br> 1 = 计算列。</td>
        </tr>
        <tr>
            <td><strong>isoutparam</strong></td>
            <td><strong>int</strong></td>
            <td>指示过程参数是否为输出参数：<br><br> 1 = True<br><br> 0 = False</td>
        </tr>
        <tr>
            <td><strong>isnullable</strong></td>
            <td><strong>int</strong></td>
            <td>指示列是否允许空值：<br><br> 1 = True<br><br> 0 = False</td>
        </tr>
        <tr>
            <td><strong>collation</strong></td>
            <td><strong>name</strong></td>
            <td>列的排序规则的名称。 如果不是基于字符的列，则为 NULL。</td>
        </tr>
    </tbody>
</table>