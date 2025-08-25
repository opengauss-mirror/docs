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

- scope_identity()

    描述：返回插入到同一作用域中标识列内的最后一个标识值。

    返回值类型：numeric(38, 0)

    示例：

    ```
    openGauss=# CREATE TABLE TZ(Z_id INT IDENTITY PRIMARY KEY, Z_name VARCHAR(20) NOT NULL);
    CREATE TABLE
    openGauss=# INSERT INTO TZ(Z_NAME) VALUES('Lisa');
    INSERT 0 1
    openGauss=# SELECT scope_identity();
    scope_identity 
    ----------------
                1
    (1 row)
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

- databasepropertyex(database, property)

    描述：对于指定的数据库，此函数返回指定数据库选项或属性的当前设置。

    参数类型：
    - `database`数据类型为nvarchar(128)，用于指定`databasepropertyex`要返回其命名属性信息的数据库的名称。
    - `property`数据类型为varchar(128)，用于指定要返回的数据库属性名称。

    返回值类型：sql_variant

    表2：property属性表

    <table aria-label="表 2" class="table table-sm margin-top-none">
        <thead>
            <tr>
                <th>属性名称</th>
                <th>字段说明</th>
                <th>返回值</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Collation</strong></td>
                <td><strong>数据库默认字符序</strong></td>
                <td>返回pg_database中查询数据库的datcollate属性值</td>
            </tr>
            <tr>
                <td><strong>ComparisonStyle</strong></td>
                <td><strong>字符序规则的Windows比较样式</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>Edition</strong></td>
                <td><strong>数据库版本或者服务层级</strong></td>
                <td>返回Standard</td>
            </tr>
            <tr>
                <td><strong>IsAnsiNullsEnabled</strong></td>
                <td><strong>所有和null的比较值被作为unknown</strong></td>
                <td>openGauss中为会话级别参数，默认返回为1</td>
            </tr>
            <tr>
                <td><strong>IsAnsiPaddingEnabled</strong></td>
                <td><strong>在比较或者插入前，字符串将被填充到相同长度</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsAnsiWarningsEnabled</strong></td>
                <td><strong>发生标准错误条件时，SQL Server会发出错误消息或者警告消息，如果当聚合函数中出现Null值，会发出错误和警告</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsArithmeticAbortEnabled</strong></td>
                <td><strong>如果执行查询时发生溢出或被零除错误，将结束查询</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsAutoClose</strong></td>
                <td><strong>在最后一个用户退出后，数据库完全关闭并释放资源</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsAutoCreateStatistics</strong></td>
                <td><strong>查询优化器根据需要创建单列统计信息以提高查询性能</strong></td>
                <td>openGauss中默认为1，返回1</td>
            </tr>
            <tr>
                <td><strong>IsAutoCreateStatisticsIncremental</strong></td>
                <td><strong>条件允许时，创建的单列统计信息递增</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsAutoShrink</strong></td>
                <td><strong>数据库文件定期收缩</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsAutoUpdateStatistics</strong></td>
                <td><strong>查询优化器会自动更新潜在的过期统计信息</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsClone</strong></td>
                <td><strong>数据库是使用DBCC CLONEDATABASE创建的一个用户的数据库的schema-only和statistic-only的副本</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsCloseCursorsOnCommitEnabled</strong></td>
                <td><strong>事务提交后，会关闭所有打开的游标</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsDatabaseSuspendedForSnapshotBackup</strong></td>
                <td><strong>数据库已挂起</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsFulltextEnabled</strong></td>
                <td><strong>支持对数据库进行全文和语义检索</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsInStandBy</strong></td>
                <td><strong>数据库以只读方式联机，同时支持恢复日志</strong></td>
                <td>1为true，0为false</td>
            </tr>
            <tr>
                <td><strong>IsLocalCursorsDefault</strong></td>
                <td><strong>游标声明默认为LOCAL</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsMemoryOptimizedElevateToSnapshotEnabled</strong></td>
                <td><strong>事务隔离级别设置为读提交，读未提交及其以下隔离级别时，使用SNAPSHOT隔离访问内存优化表</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsMergePublished</strong></td>
                <td><strong>如果安装了复制(备份)，允许SQL Server支持数据库表发布用来合并复制(备份)</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsNullConcat</strong></td>
                <td><strong>Null拼接操作产生Null</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsNumericRoundAbortEnabled</strong></td>
                <td><strong>表达式中精度缺失将产生错误</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsParameterizationForced</strong></td>
                <td><strong>参数化数据库是否设置为FORCED</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsQuotedIdentifersEnabled</strong></td>
                <td><strong>允许使用双引号</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsPublished</strong></td>
                <td><strong>如果安装了复制，SQL Server支持发布数据库表供快照复制或者事务复制使用</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsRecursiveTriggersEnable</strong></td>
                <td><strong>递归触发器启用</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsSubscribed</strong></td>
                <td><strong>数据库订阅以发布</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsSyncWithBackup</strong></td>
                <td><strong>数据库为发布数据库或分布式数据库，并且支持在不中断事务复制的情况下还原</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsTornPageDetectionEnabled</strong></td>
                <td><strong>SQL Server检测断电或者其他系统故障导致的不完全I/O操作</strong></td>
                <td>1为true，0为false</td>
            </tr>
            <tr>
                <td><strong>IsVerifiedClone</strong></td>
                <td><strong>数据库是使用DBCC CLONEDATABASE的WITH VERIFY_CLONEDB选项创建的schema-only和statistics-only的用户数据库复制</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>IsXTPSupported</strong></td>
                <td><strong>数据库是否支持XTP</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>LastGoodCheckDbTime</strong></td>
                <td><strong>指定数据库上最后一次成功的DBCC CHECKDB日期和时间</strong></td>
                <td>返回NULL</td>
            </tr>
            <tr>
                <td><strong>LCID</strong></td>
                <td><strong>排序规则的Windows区域设置标识符</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>MaxSizeInBytes</strong></td>
                <td><strong>最大数据库大小(字节单位)</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>Recovery</strong></td>
                <td><strong>数据库恢复模式</strong></td>
                <td>返回NULL</td>
            </tr>
            <tr>
                <td><strong>ServiceObjective</strong></td>
                <td><strong>描述SQL数据库或Azure Synapse Analytics中的数据库性能级别</strong></td>
                <td>返回NULL</td>
            </tr>
            <tr>
                <td><strong>ServiceObjectiveId</strong></td>
                <td><strong>SQL数据库中的服务目标ID</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>SQLSortOrder</strong></td>
                <td><strong>SQL Server早期版本中支持的SQL Server排序ID</strong></td>
                <td>返回0</td>
            </tr>
            <tr>
                <td><strong>Status</strong></td>
                <td><strong>数据库状态</strong></td>
                <td>返回ONLINE</td>
            </tr>
            <tr>
                <td><strong>Updateability</strong></td>
                <td><strong>显示是否可以修改数据</strong></td>
                <td>1为true，0为false</td>
            </tr>
            <tr>
                <td><strong>UserAccess</strong></td>
                <td><strong>显示哪些用户可以访问数据库</strong></td>
                <td>返回NULL</td>
            </tr>
            <tr>
                <td><strong>Version</strong></td>
                <td><strong>用于创建数据库的SQL Server代码的内部版本号</strong></td>
                <td>返回openGauss版本序号</td>
            </tr>
            <tr>
                <td><strong>ReplicaID</strong></td>
                <td><strong>已连接的超大规模数据库/副本的副本ID</strong></td>
                <td>返回NULL</td>
            </tr>
        </tbody>
    </table>

    示例：

    ```
    openGauss=# SELECT databasepropertyex('existDB','Collation') AS Collation;
    collation  
    -------------
    zh_CN.UTF-8
    (1 row)
    ```

- suser_name(\[server_user_id\])

    描述：返回用户的登录表示名

    参数类型：
    - `server_user_id`数据类型为oid，用于指定`suser_name`要返回的用户的登录标识名对应的oid，当用户不输入任何用户oid时，该函数会默认返回当前用户的登陆标识名，如果输入为NULL，该函数返回NULL。

    返回值类型：nvarchar(128)

    示例：

    ```
    openGauss=# SELECT suser_name(10) AS suser_name;
    suser_name 
    ------------
    user_name
    (1 row)
    ```

- suser_sname(\[server_user_sid\])

    描述：返回用户的登录表示名

    参数类型：
    - `server_user_sid`数据类型为varbinary(85)，用于指定`suser_sname`要返回的用户的登录标识名对应的oid，该函数目前等同于`suser_name`。

    返回值类型：nvarchar(128)

    示例：

    ```
    openGauss=# SELECT suser_sname(10::varbinary) AS suser_sname;
    suser_sname 
    -------------
    user_name
    (1 row)
    ```

- @@PROCID

    描述：返回当前模块的oid。模块可以是存储过程、用户自定义函数或触发器。

    返回值类型：oid

    示例：

    ```
    -- 创建存储过程，调用@@PROCID
    openGauss=# CREATE PROCEDURE test_procid
    openGauss-# AS
    openGauss$# DECLARE
    openGauss$#     ProcID integer;
    openGauss$# BEGIN
    openGauss$#     ProcID = @@PROCID;
    openGauss$#     RAISE INFO 'Stored procedure %', ProcID;
    openGauss$# END;
    openGauss$# /
    CREATE PROCEDURE
    
    -- 调用存储过程
    openGauss=# SELECT test_procid();
    INFO:  Stored procedure 49675
    test_procid 
    -------------
    
    (1 row)
    ```