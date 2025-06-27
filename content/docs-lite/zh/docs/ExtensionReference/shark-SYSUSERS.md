# SYSUSERS

SYSUSERS视图返回数据库中的用户信息。

**表1** SYSUSERS

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
            <td><strong>uid</strong></td>
            <td><strong>smallint</strong></td>
            <td>用户 ID，在此数据库中是唯一的</td>
        </tr>
        <tr>
            <td><strong>status</strong></td>
            <td><strong>smallint</strong></td>
            <td>标识为仅供参考。 不支持。 不保证以后的兼容性。返回0</td>
        </tr>
        <tr>
            <td><strong>name</strong></td>
            <td><strong>name</strong></td>
            <td>用户名或组名，在此数据库中是唯一的。</td>
        </tr>
        <tr>
            <td><strong>sid</strong></td>
            <td><strong>varbinary(85)</strong></td>
            <td>返回NULL</td>
        </tr>
        <tr>
            <td><strong>roles</strong></td>
            <td><strong>varbinary(2048)</strong></td>
            <td>标识为仅供参考。 不支持。 不保证以后的兼容性。返回NULL</td>
        </tr>
        <tr>
            <td><strong>createdate</strong></td>
            <td><strong>date</strong></td>
            <td>返回NULL</td>
        </tr>
        <tr>
            <td><strong>updatedate</strong></td>
            <td><strong>date</strong></td>
            <td>返回NULL</td>
        </tr>
        <tr>
            <td><strong>altuid</strong></td>
            <td><strong>smallint</strong></td>
            <td>标识为仅供参考。 不支持。 不保证以后的兼容性。返回0</td>
        </tr>
        <tr>
            <td><strong>password</strong></td>
            <td><strong>varbinary(256)</strong></td>
            <td>标识为仅供参考。 不支持。 不保证以后的兼容性。返回NULL</td>
        </tr>
        <tr>
            <td><strong>gid</strong></td>
            <td><strong>smallint</strong></td>
            <td>返回0</td>
        </tr>
        <tr>
            <td><strong>environ</strong></td>
            <td><strong>varchar(255)</strong></td>
            <td>保留。返回NULL</td>
        </tr>
        <tr>
            <td><strong>hasdbaccess</strong></td>
            <td><strong>int</strong></td>
            <td>1 = 帐户具有数据库访问权。</td>
        </tr>
        <tr>
            <td><strong>islogin</strong></td>
            <td><strong>int</strong></td>
            <td>1 = 帐户具有登录权限。</td>
        </tr>
        <tr>
            <td><strong>isntname</strong></td>
            <td><strong>int</strong></td>
            <td>返回0</td>
        </tr>
        <tr>
            <td><strong>isntgroup</strong></td>
            <td><strong>int</strong></td>
            <td>返回0</td>
        </tr>
        <tr>
            <td><strong>isntuser</strong></td>
            <td><strong>int</strong></td>
            <td>返回0</td>
        </tr>
        <tr>
            <td><strong>issqluser</strong></td>
            <td><strong>int</strong></td>
            <td>1 = 帐户具是SQL用户。</td>
        </tr>
        <tr>
            <td><strong>isaliased</strong></td>
            <td><strong>int</strong></td>
            <td>返回0</td>
        </tr>
        <tr>
            <td><strong>issqlrole</strong></td>
            <td><strong>int</strong></td>
            <td>1 = 帐户具是SQL角色。</td>
        </tr>
        <tr>
            <td><strong>isapprole</strong></td>
            <td><strong>int</strong></td>
            <td>返回0</td>
        </tr>
    </tbody>
</table>