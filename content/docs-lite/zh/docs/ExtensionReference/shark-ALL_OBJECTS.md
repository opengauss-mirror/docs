# ALL_OBJECTS

所有架构范围内的用户定义对象和系统对象的集合。

**表1** ALL_OBJECTS



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
            <td>对象 owner 的oid。<br/>如果当前owner与schema为同一个owner，则返回NULL<br/>如果是以下类型，则也直接返回NULL值： <br/>C<br/>D<br/>F<br/>PK<br/>TR<br/>UQ</td>
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
            <td>
            对象类型。当前支持类型：<br/>
            AF = AGGREGATE_FUNCTION<br/>
            C = CHECK_CONSTRAINT<br/>
            D = DE<br/>
            F = FOREIGN_KEY_CONSTRAINT<br/>
            FN = SQL_SCALAR_FUNCTION<br/>
            P = SQL_STORED_PROCEDURE<br/>
            PK = PRIMARY_KEY_CONSTRAINT<br/>
            S = SYSTEM_BASE_TABLE<br/>
            SN = SYNONYM<br/>
            SO = SEQUENCE_OBJECT<br/>
            U = USER_TABLE<br/>
            V = VIEW<br/>
            TR = SQL DML trigger<br/>
            UQ = UNIQUE_CONSTRAINT
            </td>
        </tr>
        <tr>
            <td><strong>type_desc</strong></td>
            <td><strong>nvarchar(60)</strong></td>
            <td>
            对象类型描述。当前支持类型：<br/>
            AGGREGATE_FUNCTION<br/>
            CHECK_CONSTRAINT<br/>
            DE<br/>
            FOREIGN_KEY_CONSTRAINT<br/>
            SQL_SCALAR_FUNCTION<br/>
            SQL_STORED_PROCEDURE<br/>
            PRIMARY_KEY_CONSTRAINT<br/>
            SYSTEM_BASE_TABLE<br/>
            SYNONYM<br/>
            SEQUENCE_OBJECT<br/>
            USER_TABLE<br/>
            VIEW<br/>
            SQL DML trigger<br/>
            UNIQUE_CONSTRAINT
            </td>
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
    </tbody>
</table>