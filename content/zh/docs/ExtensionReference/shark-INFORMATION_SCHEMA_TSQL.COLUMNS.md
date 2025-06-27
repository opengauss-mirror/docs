# COLUMNS

COLUMNS视图返回数据库中的列信息。

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
            <td><strong>TABLE_CATALOG</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>表限定符</td>
        </tr>
        <tr>
            <td><strong>TABLE_SCHEMA</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>表所属架构的名称</td>
        </tr>
        <tr>
            <td><strong>TABLE_NAME</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>表名</td>
        </tr>
        <tr>
            <td><strong>COLUMN_NAME</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>列名</td>
        </tr>
        <tr>
            <td><strong>ORDINAL_POSITION</strong></td>
            <td><strong>int</strong></td>
            <td>列标识号</td>
        </tr>
        <tr>
            <td><strong>COLUMN_DEFAULT</strong></td>
            <td><strong>nvarchar（4000）</strong></td>
            <td>列的默认值</td>
        </tr>
        <tr>
            <td><strong>IS_NULLABLE</strong></td>
            <td><strong>varchar(3)</strong></td>
            <td>列的为空性。 如果列允许 NULL，则该列将返回 YES。 否则，返回 NO。</td>
        </tr>
        <tr>
            <td><strong>DATA_TYPE</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>系统提供的数据类型</td>
        </tr>
        <tr>
            <td><strong>CHARACTER_MAXIMUM_LENGTH</strong></td>
            <td><strong>int</strong></td>
            <td>二进制数据、字符数据或文本和图像数据的最大长度（字符）。-1 表示 xml 和大值类型数据。 否则，返回 NULL。 </td>
        </tr>
        <tr>
            <td><strong>CHARACTER_OCTET_LENGTH</strong></td>
            <td><strong>int</strong></td>
            <td>二进制数据、字符数据或文本和图像数据的最大长度（字节）。-1 表示 xml 和大值类型数据。</td>
        </tr>
        <tr>
            <td><strong>NUMERIC_PRECISION</strong></td>
            <td><strong>tinyint</strong></td>
            <td>近似数字数据、精确数字数据、整数数据或货币数据的精度。 否则，返回 NULL。</td>
        </tr>
        <tr>
            <td><strong>NUMERIC_PRECISION_RADIX</strong></td>
            <td><strong>smallint</strong></td>
            <td>近似数字数据、精确数字数据、整数数据或货币数据的精度基数。 否则，返回 NULL。</td>
        </tr>
        <tr>
            <td><strong>NUMERIC_SCALE</strong></td>
            <td><strong>int</strong></td>
            <td>近似数字数据、精确数字数据、整数数据或货币数据的小数位数。 否则，返回 NULL。</td>
        </tr>
        <tr>
            <td><strong>DATETIME_PRECISION</strong></td>
            <td><strong>smallint</strong></td>
            <td>日期时间和 ISO 间隔数据类型的子类型代码。 对于其他数据类型，返回 NULL。</td>
        </tr>
        <tr>
            <td><strong>CHARACTER_SET_CATALOG</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>始终返回 NULL。</td>
        </tr>
        <tr>
            <td><strong>CHARACTER_SET_SCHEMA</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>始终返回 NULL。</td>
        </tr>
        <tr>
            <td><strong>CHARACTER_SET_NAME</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>如果此列是字符数据或 文本 数据类型，则返回字符集的唯一名称。 否则，返回 NULL。</td>
        </tr>
        <tr>
            <td><strong>COLLATION_CATALOG</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>始终返回 NULL。</td>
        </tr>
        <tr>
            <td><strong>COLLATION_SCHEMA</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>始终返回 NULL。</td>
        </tr>
        <tr>
            <td><strong>COLLATION_NAME</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>如果列是字符数据或 文本 数据类型，则返回排序规则的唯一名称。 否则，返回 NULL。</td>
        </tr>
        <tr>
            <td><strong>DOMAIN_CATALOG</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>如果此列是别名数据类型，则此列是在其中创建用户定义数据类型的数据库的名称。 否则，返回 NULL。</td>
        </tr>
        <tr>
            <td><strong>DOMAIN_SCHEMA</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>如果列是用户定义数据类型，则此列将返回该用户定义数据类型的架构名称。 否则，返回 NULL。</td>
        </tr>
        <tr>
            <td><strong>DOMAIN_NAME</strong></td>
            <td><strong>nvarchar(128)</strong></td>
            <td>如果列是用户定义数据类型，则此列是该用户定义数据类型的名称。 否则，返回 NULL。</td>
        </tr>
    </tbody>
</table>