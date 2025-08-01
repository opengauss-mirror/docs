# SYSOBJECTS

SYSOBJECTS视图返回数据库中创建的每个对象（例如表、视图、索引、约束、默认值、以及存储过程等）

**表1** SYSOBJECTS

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
            <td>对象名称</td>
        </tr>
        <tr>
            <td>id</td>
            <td><strong>oid</strong></td>
            <td>对象的oid</td>
        </tr>
        <tr>
            <td>xtype</td>
            <td><strong>char(2)</strong></td>
            <td>支持的类型：<br>
                AF：聚合函数<br>
                C：check约束<br>
                D：默认值或 DEFAULT 约束
                F：FOREIGN KEY 约束<br>
                FN：函数<br>
                P：存储过程<br>
                PK：主键约束<br>
                S：系统表<br>
                SN：同义词<br>
                SO：序列<br>
                TR：触发器<br>
                U：用户表<br>
                UQ：UNIQUE约束<br>
                V：视图<br>
            </td>
        </tr>
        <tr>
            <td>uid</td>
            <td><strong>oid</strong></td>
            <td>对象所属架构ID</td>
        </tr>
        <tr>
            <td>info</td>
            <td><strong>smallint</strong></td>
            <td>返回固定值0</td>
        </tr>
        <tr>
            <td>status</td>
            <td><strong>int</strong></td>
            <td>返回固定值0</td>
        </tr>
        <tr>
            <td>base_schema_ver</td>
            <td><strong>int</strong></td>
            <td>返回固定值0</td>
        </tr>
        <tr>
            <td>replinfo</td>
            <td><strong>int</strong></td>
            <td>返回固定值0</td>
        </tr>
        <tr>
            <td>parent_obj</td>
            <td><strong>oid</strong></td>
            <td>父对象的对象标识号</td>
        </tr>
        <tr>
            <td>crdate</td>
            <td><strong>timestamp(3)</strong></td>
            <td>直返回固定值NULL</td>
        </tr>
        <tr>
            <td>ftcatid</td>
            <td><strong>smallint</strong></td>
            <td>返回固定值0</td>
        </tr>
        <tr>
            <td>schema_ver</td>
            <td><strong>int</strong></td>
            <td>在每次更改表的架构时都会增加的版本号。 始终返回 0</td>
        </tr>
        <tr>
            <td>stats_schema_ver</td>
            <td><strong>int</strong></td>
            <td>直接返回固定值0</td>
        </tr>
        <tr>
            <td>type</td>
            <td><strong>char(2)</strong></td>
            <td>对象类型，支持以下值：<br>
                AF：聚合函数<br>
                C：check约束<br>
                D：默认值或 DEFAULT 约束<br>
                F：FOREIGN KEY约束<br>
                FN：函数<br>
                K：主键或唯一约束<br>
                P：存储过程<br>
                S：系统表<br>
                SN：同义词<br>
                TR：触发器<br>
                U：用户表<br>
                V：视图<br>
            </td>
        </tr>
        <tr>
            <td>userstat</td>
            <td><strong>smallint</strong></td>
            <td>返回固定值0</td>
        </tr>
        <tr>
            <td>sysstat</td>
            <td><strong>smallint</strong></td>
            <td>返回固定值0</td>
        </tr>
        <tr>
            <td>indexdel</td>
            <td><strong>smallint</strong></td>
            <td>返回固定值0</td>
        </tr>
        <tr>
            <td>refdate</td>
            <td><strong>timestamp</strong></td>
            <td>返回固定值NULL</td>
        </tr>
        <tr>
            <td>version</td>
            <td><strong>int</strong></td>
            <td>返回固定值0</td>
        </tr>
        <tr>
            <td>deltrig</td>
            <td><strong>int</strong></td>
            <td>返回固定值0</td>
        </tr>
        <tr>
            <td>instrig</td>
            <td><strong>int</strong></td>
            <td>返回固定值0</td>
        </tr>
        <tr>
            <td>updtrig</td>
            <td><strong>int</strong></td>
            <td>返回固定值0</td>
        </tr>
        <tr>
            <td>seltrig</td>
            <td><strong>int</strong></td>
            <td>返回固定值0</td>
        </tr>
        <tr>
            <td>category</td>
            <td><strong>int</strong></td>
            <td>用于发布、约束和标识。返回固定值0</td>
        </tr>
        <tr>
            <td>cache</td>
            <td><strong>smallint</strong></td>
            <td>直接返回固定值0</td>
        </tr>
    </tbody>
</table>