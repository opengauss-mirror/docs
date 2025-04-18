# shark-系统信息函数

本章节只包含shark插件新增的系统信息函数。

## 会话信息函数

- @@FETCH_STATUS

    描述：返回最后一条游标FETCH语句的状态，该语句可以是针对连接当前打开的任何游标发出的。0表示FETCH成功，-1表示FETCH失败。

    返回值类型：int

    示例：

    ```
    select @@FETCH_STATUS;
    ```

- @@ROWCOUNT

    描述：返回受上一句影响的行数。如果行数大于20亿，请使用ROWCOUNT_BIG()。

    返回值类型：int

    示例：

    ```
    select @@ROWCOUNT;
    ```

- ROWCOUNT_BIG()

    描述：返回受上一句影响的行数。该函数的功能与@@ROWCOUNT类似，区别在于ROWCOUNT_BIG()的返回类型为bigint。

    返回值类型：bigint

    示例：

    ```
    select ROWCOUNT_BIG();
    ```

- @@SPID

    描述：返回当前用户进程的会话ID。

    返回值类型：bigint

    示例：

    ```
    select @@SPID;
    ```

## 对象信息函数

- object_id('[database_name.[schema_name]. | schema_name.]object_name' [, 'object_type'])

    描述：返回数据库对象的oid。如果没有查询权限或者对象不存在则返回NULL。
    
    第二个参数object_type支持以下类型
<table aria-label="表 1" class="table table-sm margin-top-none">
    <thead>
        <tr>
            <th>属性名称</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>S</strong></td>
            <td><strong>系统表</strong></td>
        </tr>
        <tr>
            <td><strong>U</strong></td>
            <td><strong>用户表</strong></td>
        </tr>
        <tr>
            <td><strong>V</strong></td>
            <td><strong>视图</strong></td>
        </tr>
        <tr>
            <td><strong>SO</strong></td>
            <td><strong>序列</strong></td>
        </tr>
        <tr>
            <td><strong>C</strong></td>
            <td><strong>check约束</strong></td>
        </tr>
        <tr>
            <td><strong>D</strong></td>
            <td><strong>DEAULTA约束</strong></td>
        </tr>
        <tr>
            <td><strong>F</strong></td>
            <td><strong>FOREIGN KEY约束</strong></td>
        </tr>
        <tr>
            <td><strong>PK</strong></td>
            <td><strong>主键约束</strong></td>
        </tr>
        <tr>
            <td><strong>UQ</strong></td>
            <td><strong>UNIQUE约束</strong></td>
        </tr>
        <tr>
            <td><strong>AF</strong></td>
            <td><strong>聚合函数</strong></td>
        </tr>
        <tr>
            <td><strong>FN</strong></td>
            <td><strong>函数</strong></td>
        </tr>
        <tr>
            <td><strong>P</strong></td>
            <td><strong>存储过程</strong></td>
        </tr>
        <tr>
            <td><strong>TR</strong></td>
            <td><strong>触发器</strong></td>
        </tr>
    </tbody>
</table>

    返回值类型：int

    示例：

    ```
    CREATE TABLE sys.students (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        age INT DEFAULT 0,
        grade DECIMAL(5, 2)
    );
    set search_path = 'sys';
    select object_id('students');
    object_id 
    -----------
    16666
    (1 row)

    select object_id('sys.students', 'U');
    object_id 
    -----------
    16666
    (1 row)
    ```


- objectproperty(oid, property)

    描述：返回插件框架中对象的对应属性结果。对象类型不符合返回NULL。
    
    property可选范围

    返回值类型：int

    **表1** property属性表

<table aria-label="表 1" class="table table-sm margin-top-none">
    <thead>
        <tr>
            <th>属性名称</th>
            <th>对象类型</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>IsDefault</strong></td>
            <td><strong>任何对象</strong></td>
            <td>返回0。</td>
        </tr>
        <tr>
            <td><strong>IsDefaultCnst</strong></td>
            <td><strong>任何对象</strong></td>
            <td>是否为DEFAULT约束。1=True, 0=False</td>
        </tr>
        <tr>
            <td><strong>IsDeterministic</strong></td>
            <td><strong>函数</strong></td>
            <td>返回0。</td>
        </tr>
        <tr>
            <td><strong>IsIndexed</strong></td>
            <td><strong>表、视图</strong></td>
            <td>有索引的表或视图。1=True, 0=False</td>
        </tr>
        <tr>
            <td><strong>IsInlineFunction</strong></td>
            <td><strong>函数</strong></td>
            <td>内联函数。1=True, 0=False</td>
        </tr>
        <tr>
            <td><strong>IsSysShipped</strong></td>
            <td><strong>任何对象</strong></td>
            <td>sys框架下的对象。1=True, 0=False</td>
        </tr>
        <tr>
            <td><strong>IsPrimaryKey</strong></td>
            <td><strong>任何对象</strong></td>
            <td>是否为PRIMARY KEY约束。1=True, 0=False</td>
        </tr>
        <tr>
            <td><strong>IsProcedure</strong></td>
            <td><strong>任何对象</strong></td>
            <td>是否为存储过程。1=True, 0=False</td>
        </tr>
        <tr>
            <td><strong>IsRule</strong></td>
            <td><strong>任何对象</strong></td>
            <td>返回0。</td>
        </tr>
        <tr>
            <td><strong>IsScalarFunction</strong></td>
            <td><strong>函数</strong></td>
            <td>是否为标量值函数。1=True, 0=False</td>
        </tr>
        <tr>
            <td><strong>IsSchemaBound</strong></td>
            <td><strong>函数、视图</strong></td>
            <td>返回0。</td>
        </tr>
        <tr>
            <td><strong>IsTable</strong></td>
            <td><strong>表</strong></td>
            <td>是否为表。1=True, 0=False</td>
        </tr>
        <tr>
            <td><strong>IsTableFunction</strong></td>
            <td><strong>函数</strong></td>
            <td>是否为表值函数。1=True, 0=False</td>
        </tr>
        <tr>
            <td><strong>IsTrigger</strong></td>
            <td><strong>任何对象</strong></td>
            <td>是否为触发器。1=True, 0=False</td>
        </tr>
        <tr>
            <td><strong>IsUserTable</strong></td>
            <td><strong>表</strong></td>
            <td>是否为用户表。1=True, 0=False</td>
        </tr>
        <tr>
            <td><strong>IsView</strong></td>
            <td><strong>视图</strong></td>
            <td>是否为视图。1=True, 0=False</td>
        </tr>
        <tr>
            <td><strong>OwnerId</strong></td>
            <td><strong>任何对象</strong></td>
            <td>返回对象所有者的oid。</td>
        </tr>
        <tr>
            <td><strong>ExeclsQuotedIdentOn</strong></td>
            <td><strong>函数、存储过程、触发器、视图</strong></td>
            <td>返回1。</td>
        </tr>
        <tr>
            <td><strong>ExeclsIsAnsiNullsOn</strong></td>
            <td><strong>函数、存储过程、触发器、视图</strong></td>
            <td>返回1。</td>
        </tr>
        <tr>
            <td><strong>TableFulltextPopulateStatus</strong></td>
            <td><strong>表</strong></td>
            <td>返回0。</td>
        </tr>
        <tr>
            <td><strong>TableHasVarDecimalStorageFormat</strong></td>
            <td><strong>表</strong></td>
            <td>返回0。</td>
        </tr>
    </tbody>
</table>

    示例：
    其中database为当前数据库

    ```
    CREATE TABLE sys.students (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        age INT DEFAULT 0,
        grade DECIMAL(5, 2)
    );
    set search_path = 'sys';
    select objectproperty(object_id('students'), 'ownerid') as ownerid;
     ownerid 
    ---------
    10
    (1 row)
    select objectproperty(object_id('sys.students'), 'istable') as ownerid;
     ownerid 
    ---------
    1
    (1 row)
    select objectproperty(object_id('database.sys.students'), 'isview') as ownerid;
     ownerid 
    ---------
    0
    (1 row)
    ```