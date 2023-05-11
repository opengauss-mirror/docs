# 附录：SQL语法

## ABORT<a name="section49831237711"></a>

退出当前事务。

```
ABORT [ WORK | TRANSACTION ] ;
```

## ALTER AUDIT POLICY<a name="section68951620202211"></a>

修改统一审计策略。

```
ALTER AUDIT POLICY [ IF EXISTS ] policy_name { ADD | REMOVE } { [ privilege_audit_clause ] [ access_audit_clause ] };
ALTER AUDIT POLICY [ IF EXISTS ] policy_name MODIFY ( filter_group_clause );
ALTER AUDIT POLICY [ IF EXISTS ] policy_name DROP FILTER;
ALTER AUDIT POLICY [ IF EXISTS ] policy_name COMMENTS policy_comments;
ALTER AUDIT POLICY [ IF EXISTS ] policy_name { ENABLE | DISABLE };

where privilege_audit_clause can be:
PRIVILEGES { DDL | ALL }

where access_audit_clause can be:
ACCESS { DML | ALL }

where filter_group_clause can be:
FILTER ON { ( FILTER_TYPE ( filter_value [, ... ] ) ) [, ... ] }

where DDL can be:
{ ( ALTER | ANALYZE | COMMENT | CREATE | DROP | GRANT | REVOKE | SET | SHOW | LOGIN_ACCESS | LOGIN_FAILURE | LOGOUT | LOGIN ) }

where DML can be:
{ ( COPY | DEALLOCATE | DELETE_P | EXECUTE | REINDEX | INSERT | REPARE | SELECT | TRUNCATE | UPDATE ) }
```

## ALTER DATA SOURCE<a name="section06636150238"></a>

修改Data Source对象的属性和内容。

```
ALTER DATA SOURCE src_name
    [TYPE 'type_str']
    [VERSION {'version_str' | NULL}]
    [OPTIONS ( { [ADD | SET | DROP] optname ['optvalue'] } [, ...] )];
ALTER DATA SOURCE src_name RENAME TO src_new_name;
ALTER DATA SOURCE src_name OWNER TO new_owner;

Valid optname are:
    DSN, USERNAME, PASSWORD, ENCODING
```

## ALTER DATABASE<a name="section16557115842312"></a>

修改数据库的属性，包括它的名称、所有者、连接数限制、对象隔离属性等。

```
ALTER DATABASE database_name
    [ [ WITH ] CONNECTION LIMIT connlimit ];
ALTER DATABASE database_name
    RENAME TO new_name;
ALTER DATABASE database_name
    OWNER TO new_owner;
ALTER DATABASE database_name
    SET TABLESPACE new_tablespace;
ALTER DATABASE database_name
    SET configuration_parameter { { TO | = } { value | DEFAULT }  | FROM CURRENT };
ALTER DATABASE database_name
    RESET { configuration_parameter | ALL };
ALTER DATABASE database_name
    [ WITH ] { ENABLE | DISABLE } PRIVATE OBJECT;
```

## ALTER DEFAULT PRIVILEGES<a name="section1332514015252"></a>

设置应用于将来创建的对象的权限（这不会影响分配到已有对象中的权限）。

```
ALTER DEFAULT PRIVILEGES
    [ FOR { ROLE | USER } target_role [, ...] ]
    [ IN SCHEMA schema_name [, ...] ]
    abbreviated_grant_or_revoke;

where abbreviated_grant_or_revoke can be:
grant_on_tables_clause
  | grant_on_sequences_clause
  | grant_on_functions_clause
  | grant_on_types_clause
  | grant_on_client_master_keys_clause
  | grant_on_column_encryption_keys_clause
  | revoke_on_tables_clause
  | revoke_on_sequences_clause
  | revoke_on_functions_clause
  | revoke_on_types_clause
  | revoke_on_client_master_keys_clause
  | revoke_on_column_encryption_keys_clause
where grant_on_tables_clause can be:
GRANT { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES |
    ALTER | DROP | COMMENT | INDEX | VACUUM } [, ...] | ALL [ PRIVILEGES ] }
    ON TABLES
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ]
where grant_on_sequences_clause can be:
GRANT { { SELECT | UPDATE | USAGE | ALTER | DROP | COMMENT }
    [, ...] | ALL [ PRIVILEGES ] }
    ON SEQUENCES
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ]
where grant_on_functions_clause can be:
GRANT { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
    ON FUNCTIONS
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ]
where grant_on_types_clause can be:
GRANT { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
    ON TYPES
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ]
where grant_on_client_master_keys_clause can be:
GRANT { { USAGE | DROP } [, ...] | ALL [ PRIVILEGES ] }
    ON CLIENT_MASTER_KEYS
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ]
where grant_on_column_encryption_keys_clause can be:
GRANT { { USAGE | DROP } [, ...] | ALL [ PRIVILEGES ] }
    ON COLUMN_ENCRYPTION_KEYS
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ]
where revoke_on_tables_clause can be:
REVOKE [ GRANT OPTION FOR ]
    { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES |
    ALTER | DROP | COMMENT | INDEX | VACUUM } [, ...] | ALL [ PRIVILEGES ] }
    ON TABLES
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
where revoke_on_sequences_clause can be:
REVOKE [ GRANT OPTION FOR ]
    { { SELECT | UPDATE | USAGE | ALTER | DROP | COMMENT }
    [, ...] | ALL [ PRIVILEGES ] }
    ON SEQUENCES
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
where revoke_on_functions_clause can be:
REVOKE [ GRANT OPTION FOR ]
    { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
    ON FUNCTIONS
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
where revoke_on_types_clause can be:
REVOKE [ GRANT OPTION FOR ]
    { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
    ON TYPES
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
where revoke_on_client_master_keys_clause can be:
REVOKE [ GRANT OPTION FOR ]
    { { USAGE | DROP } [, ...] | ALL [ PRIVILEGES ] }
    ON CLIENT_MASTER_KEYS
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
where revoke_on_column_encryption_keys_clause can be:
REVOKE [ GRANT OPTION FOR ]
    { { USAGE | DROP } [, ...] | ALL [ PRIVILEGES ] }
    ON COLUMN_ENCRYPTION_KEYS
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT | CASCADE CONSTRAINTS ]
```

## ALTER DIRECTORY<a name="section995741752511"></a>

对directory属性进行修改。

```
CREATE [OR REPLACE] DIRECTORY directory_name
AS 'path_name';
```

## ALTER EVENT TRIGGER<a name="section84611730152512"></a>

修改事件触发器。

```
ALTER EVENT TRIGGER name DISABLE
ALTER EVENT TRIGGER name ENABLE [ REPLICA | ALWAYS ]
ALTER EVENT TRIGGER name OWNER TO { new_owner | CURRENT_USER | SESSION_USER }
ALTER EVENT TRIGGER name RENAME TO new_name
```

## ALTER EXTENSION<a name="section84611730152513"></a>

修改插件扩展。

```
ALTER EXTENSION name UPDATE [ TO new_version ];
ALTER EXTENSION name SET SCHEMA new_schema;
ALTER EXTENSION name ADD member_object;
ALTER EXTENSION name DROP member_object;

where member_object is:

  FOREIGN TABLE object_name |
  FUNCTION function_name ( [ [ argmode ] [ argname ] argtype [, ...] ] ) |
  [ PROCEDURAL ] LANGUAGE object_name |
  SCHEMA object_name |
  SERVER object_name |
  TABLE object_name |
  TEXT SEARCH CONFIGURATION object_name |
  TYPE object_name |
  VIEW object_name
```

## ALTER FOREIGN TABLE<a name="section18659134315252"></a>

对外表进行修改。

```
1. GDS:
ALTER FOREIGN TABLE [ IF EXISTS ]  table_name
    OPTIONS ( {[ ADD | SET | DROP ] option ['value']} [, ... ]);
ALTER FOREIGN TABLE [ IF EXISTS ] tablename
    OWNER TO new_owner;

2. HDFS:
ALTER FOREIGN TABLE [ IF EXISTS ]  table_name
    OPTIONS ( {[ ADD | SET | DROP ] option ['value']} [, ... ]);
ALTER FOREIGN TABLE [ IF EXISTS ] tablename
    OWNER TO new_owner;
ALTER FOREIGN TABLE [ IF EXISTS ] table_name
    MODIFY ( { column_name data_type | column_name [ CONSTRAINT constraint_name ] NOT NULL [ ENABLE ] | column_name [ CONSTRAINT constraint_name ] NULL } [, ...] );
ALTER FOREIGN TABLE [ IF EXISTS ] tablename
    ADD [CONSTRAINT constraint_name]
        {PRIMARY KEY | UNIQUE} (column_name)
        [NOT ENFORCED [ENABLE QUERY OPTIMIZATION | DISABLE QUERY OPTIMIZATION] | ENFORCED];
ALTER FOREIGN TABLE [ IF EXISTS ] tablename
    DROP CONSTRAINT constraint_name ;
ALTER FOREIGN TABLE [ IF EXISTS ] tablename
    action [, ... ];

where action can be:
ALTER [ COLUMN ] column_name [ SET DATA ] TYPE data_type
|   ALTER [ COLUMN ] column_name { SET | DROP } NOT NULL
|   ALTER [ COLUMN ] column_name SET STATISTICS  integer
|   ALTER [ COLUMN ] column_name OPTIONS ( {[ ADD | SET | DROP ] option ['value'] } [, ... ])
|   MODIFY column_name data_type
|   MODIFY column_name [ CONSTRAINT constraint_name ] NOT NULL [ ENABLE ]
|   MODIFY column_name [ CONSTRAINT constraint_name ] NULL

3. OBS:
ALTER FOREIGN TABLE [ IF EXISTS ]  table_name
    OPTIONS ( {[ ADD | SET | DROP ] option ['value']} [, ... ]);
ALTER FOREIGN TABLE [ IF EXISTS ] tablename
    OWNER TO new_owner;
ALTER FOREIGN TABLE [ IF EXISTS ] table_name
    MODIFY ( { column_name data_type | column_name [ CONSTRAINT constraint_name ] NOT NULL [ ENABLE ] | column_name [ CONSTRAINT constraint_name ] NULL } [, ...] );
ALTER FOREIGN TABLE [ IF EXISTS ] tablename
    ADD [CONSTRAINT constraint_name]
        {PRIMARY KEY | UNIQUE} (column_name)
        [NOT ENFORCED [ENABLE QUERY OPTIMIZATION | DISABLE QUERY OPTIMIZATION] | ENFORCED];
ALTER FOREIGN TABLE [ IF EXISTS ] tablename
    DROP CONSTRAINT constraint_name ;
ALTER FOREIGN TABLE [ IF EXISTS ] tablename
    action [, ... ];

where action can be:
ALTER [ COLUMN ] column_name [ SET DATA ] TYPE data_type
|   ALTER [ COLUMN ] column_name { SET | DROP } NOT NULL
|   ALTER [ COLUMN ] column_name SET STATISTICS  integer
|   ALTER [ COLUMN ] column_name OPTIONS ( {[ ADD | SET | DROP ] option ['value'] } [, ... ])
|   MODIFY column_name data_type
|   MODIFY column_name [ CONSTRAINT constraint_name ] NOT NULL [ ENABLE ]
|   MODIFY column_name [ CONSTRAINT constraint_name ] NULL

4. GC:
ALTER FOREIGN TABLE [ IF EXISTS ]  tablename
    OPTIONS ( {[ SET ] option ['value']} [, ... ]);
ALTER FOREIGN TABLE [ IF EXISTS ] tablename
    OWNER TO new_owner;
ALTER FOREIGN TABLE [ IF EXISTS ] table_name
    MODIFY ( { column_name data_type [, ...] );
ALTER FOREIGN TABLE [ IF EXISTS ] tablename
    action [, ... ];

where action can be:
ALTER [ COLUMN ] column_name [ SET DATA ] TYPE data_type
|   MODIFY column_name data_type
```

## ALTER FUNCTION<a name="section13821817183218"></a>

修改自定义函数的属性。

```
ALTER FUNCTION function_name ( [ {[ argmode ] [ argname ] argtype} [, ...] ] )
    action [ ... ] [ RESTRICT ];
ALTER FUNCTION funname ( [ {[ argmode ] [ argname ] argtype} [, ...] ] )
    RENAME TO new_name;
ALTER FUNCTION funname ( [ {[ argmode ] [ argname ] argtype} [, ...] ] )
    OWNER TO new_owner;
ALTER FUNCTION funname ( [ {[ argmode ] [ argname ] argtype} [, ...] ] )
    SET SCHEMA new_schema;

where action can be:
{CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT}
|    {IMMUTABLE | STABLE | VOLATILE}
|    {NOT FENCED | FENCED}
|    [ NOT ] LEAKPROOF
|    {[ EXTERNAL ] SECURITY INVOKER | [ EXTERNAL ] SECURITY DEFINER}
|    AUTHID { DEFINER | CURRENT_USER }
|    COST execution_cost
|    ROWS result_rows
|    SET configuration_parameter {{ TO | = } { value | DEFAULT }| FROM CURRENT}
|    RESET {configuration_parameter| ALL}
```

## ALTER GROUP<a name="section1566522513216"></a>

修改一个用户组的属性。

```
ALTER GROUP group_name
    ADD USER user_name [, ... ];
ALTER GROUP group_name
    DROP USER user_name [, ... ];
ALTER GROUP group_name
   RENAME TO new_name;
```

## ALTER INDEX<a name="section173900340327"></a>

修改现有索引的定义。

```
ALTER INDEX [ IF EXISTS ] index_name
    RENAME TO new_name;
ALTER INDEX [ IF EXISTS ] index_name
    SET TABLESPACE tablespace_name;
ALTER INDEX [ IF EXISTS ] index_name
    SET ( {storage_parameter = value} [, ... ] );
ALTER INDEX [ IF EXISTS ] index_name
    RESET ( storage_parameter [, ... ] ) ;
ALTER INDEX [ IF EXISTS ] index_name
    [ MODIFY PARTITION partition_name ] UNUSABLE;
ALTER INDEX index_name
    REBUILD [ PARTITION partition_name ];
ALTER INDEX [ IF EXISTS ] index_name
    RENAME PARTITION partition_name TO new_partition_name;
ALTER INDEX [ IF EXISTS ] index_name
    MOVE PARTITION index_partition_name TABLESPACE new_tablespace;
```

## ALTER LARGE OBJECT<a name="section1990544193217"></a>

用于更改一个large object的定义。它的唯一的功能是分配一个新的所有者。

```
ALTER LARGE OBJECT large_object_oid
    OWNER TO new_owner;
```

## ALTER MASKING POLICY<a name="section158961352153214"></a>

修改脱敏策略。

```
ALTER MASKING POLICY policy_name { ADD | REMOVE | MODIFY } masking_actions [, ... ];
ALTER MASKING POLICY policy_name MODIFY ( filter_group_clause );
ALTER MASKING POLICY policy_name DROP FILTER;
ALTER MASKING POLICY policy_name { ENABLE | DISABLE };

where masking_actions can be:
masking_function ON LABEL(label_name [, ... ])

where masking_function can be:
{ maskall | randommasking | creditcardmasking | basicemailmasking | fullemailmasking | shufflemasking | alldigitsmasking | regexpmasking }

where filter_group_clause can be:
FILTER ON { ( FILTER_TYPE ( filter_value [, ... ] ) ) [, ... ] }
```

## ALTER MATERIALIZED VIEW<a name="section648071913316"></a>

更改一个现有物化视图的多个辅助属性。

```
ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name
    OWNER TO new_owner;
ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name
    RENAME [COLUMN] column_name to new_column_name;
ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name
    RENAME TO new_name;
```

## ALTER OPERATOR<a name="section10746838153314"></a>

修改一个操作符的定义。

```
ALTER OPERATOR name ( { left_type | NONE } , { right_type | NONE } ) OWNER TO new_owner
ALTER OPERATOR name ( { left_type | NONE } , { right_type | NONE } ) SET SCHEMA new_schema
```

## ALTER RESOURCE LABEL<a name="section192962512357"></a>

修改资源标签。

```
ALTER RESOURCE LABEL label_name { ADD | REMOVE } label_item_list [, ... ];

where label_item_list can be:
resource_type(resource_path[, ... ])

where resource_type can be:
{ TABLE | COLUMN | SCHEMA | VIEW | FUNCTION }
```

## ALTER RESOURCE POOL<a name="section114211230103519"></a>

修改一个资源池，指定其他控制组。

```
ALTER RESOURCE POOL pool_name
    WITH ({MEM_PERCENT=pct | CONTROL_GROUP="group_name" | ACTIVE_STATEMENTS=stmt | MAX_DOP = dop | MEMORY_LIMIT='memory_size' | io_limits=io_limits | io_priority='priority' | nodegroup='nodegroup_name' }[, ... ]);
```

## ALTER ROLE<a name="section37815346358"></a>

修改角色属性。

```
ALTER ROLE role_name [ [ WITH ] option [ ... ] ];
ALTER ROLE role_name
    RENAME TO new_name;
ALTER ROLE role_name [ IN DATABASE database_name ]
    SET configuration_parameter {{ TO | = } { value | DEFAULT }|FROM CURRENT};
ALTER ROLE role_name
    [ IN DATABASE database_name ] RESET {configuration_parameter|ALL};

where option can be:
{CREATEDB | NOCREATEDB}
    | {CREATEROLE | NOCREATEROLE}
    | {INHERIT | NOINHERIT}
    | {AUDITADMIN | NOAUDITADMIN}
    | {SYSADMIN | NOSYSADMIN}
    | {MONADMIN | NOMONADMIN}
    | {OPRADMIN | NOOPRADMIN}
    | {POLADMIN | NOPOLADMIN}
    | {USEFT | NOUSEFT}
    | {LOGIN | NOLOGIN}
    | {REPLICATION | NOREPLICATION}
    | {INDEPENDENT | NOINDEPENDENT}
    | {VCADMIN | NOVCADMIN}
    | {PERSISTENCE | NOPERSISTENCE}
    | CONNECTION LIMIT connlimit
    | [ ENCRYPTED | UNENCRYPTED ] PASSWORD { 'password' [ EXPIRED ] | DISABLE | EXPIRED }
    | [ ENCRYPTED | UNENCRYPTED ] IDENTIFIED BY { 'password' [ REPLACE 'old_password' | EXPIRED ] | DISABLE }
    | VALID BEGIN 'timestamp'
    | VALID UNTIL 'timestamp'
    | RESOURCE POOL 'respool'
    | USER GROUP 'groupuser'
    | PERM SPACE 'spacelimit'
    | TEMP SPACE 'tmpspacelimit'
    | SPILL SPACE 'spillspacelimit'
    | NODE GROUP logic_cluster_name
    | ACCOUNT { LOCK | UNLOCK }
    | PGUSER
```

## ALTER ROW LEVEL SECURITY POLICY<a name="section2846163943513"></a>

对已存在的行访问控制策略（包括行访问控制策略的名称，行访问控制指定的用户，行访问控制的策略表达式）进行修改。

```
ALTER [ ROW LEVEL SECURITY ] POLICY [ IF EXISTS ] policy_name ON table_name RENAME TO new_policy_name

ALTER [ ROW LEVEL SECURITY ] POLICY policy_name ON table_name
    [ TO { role_name | PUBLIC } [, ...] ]
    [ USING ( using_expression ) ]
```

## ALTER SCHEMA<a name="section03851045113518"></a>

修改模式属性。

```
ALTER SCHEMA schema_name
    RENAME TO new_name;
ALTER SCHEMA schema_name
    OWNER TO new_owner;
ALTER SCHEMA schema_name {WITH | WITHOUT} BLOCKCHAIN;
```

## ALTER SEQUENCE<a name="section47281449163516"></a>

修改一个现有的序列的参数。

```
ALTER SEQUENCE [ IF EXISTS ] name
    [ MAXVALUE maxvalue | NO MAXVALUE | NOMAXVALUE ]
    [ OWNED BY { table_name.column_name | NONE } ];
ALTER SEQUENCE [ IF EXISTS ] name OWNER TO new_owner;
```

## ALTER SERVER<a name="section1971154113517"></a>

增加、修改和删除一个现有server的参数。已有server可以从pg\_foreign\_server系统表中查询。

```
ALTER SERVER server_name [ VERSION 'new_version' ]
    [ OPTIONS ( {[ ADD | SET | DROP ] option ['value']} [, ... ] ) ];
ALTER SERVER server_name
    OWNER TO new_owner;
ALTER SERVER server_name
     RENAME TO new_name;
```

## ALTER SESSION<a name="section14141059143511"></a>

ALTER SESSION命令用于定义或修改那些对当前会话有影响的条件或参数。修改后的会话参数会一直保持，直到断开当前会话。

```
ALTER SESSION SET
    {{config_parameter { { TO  | =  }  { value | DEFAULT }
      | FROM CURRENT }} | CURRENT_SCHEMA [ TO | = ] { schema | DEFAULT }
      | TIME ZONE time_zone
      | SCHEMA schema
      | NAMES encoding_name
      | ROLE role_name PASSWORD 'password'
      | SESSION AUTHORIZATION { role_name PASSWORD 'password' | DEFAULT }
      | XML OPTION { DOCUMENT | CONTENT }
    } ;
ALTER SESSION SET [ SESSION CHARACTERISTICS AS ] TRANSACTION
    { ISOLATION LEVEL  {  READ COMMITTED  | READ UNCOMMITTED  }  |  { READ ONLY  | READ WRITE  }  } [, ...] ;
```

## ALTER SYNONYM<a name="section590019319367"></a>

修改SYNONYM对象的属性。

```
ALTER SYNONYM synonym_name
    OWNER TO new_owner;
```

## ALTER SYSTEM KILL SESSION<a name="section153614853616"></a>

用于结束一个会话。

```
ALTER SYSTEM KILL SESSION 'session_sid, serial' [ IMMEDIATE ];
```

## ALTER SYSTEM SET<a name="section163798149369"></a>

用于设置POSTMASTER、SIGHUP、BACKEND级别的GUC参数。此命令会将参数写入配置文件，不同级别生效方式有所不同。

```
ALTER SYSTEM SET { GUC_name } TO { GUC_value };
```

## ALTER TABLE<a name="section6770937141711"></a>

修改表，包括修改表的定义、重命名表、重命名表中指定的列、重命名表的约束、设置表的所属模式、添加/更新多个列、打开/关闭行访问控制开关。

```
ALTER TABLE [ IF EXISTS ] { table_name  [*] | ONLY table_name | ONLY ( table_name  )}
    action [, ... ];
ALTER TABLE [ IF EXISTS ] table_name
    ADD ( { column_name data_type [ compress_mode ] [ COLLATE collation ] [ column_constraint [ ... ] ]} [, ...] );
ALTER TABLE [ IF EXISTS ] table_name
    MODIFY ( { column_name data_type | column_name [ CONSTRAINT constraint_name ] NOT NULL [ ENABLE ] | column_name [ CONSTRAINT constraint_name ] NULL } [, ...] );
ALTER TABLE [ IF EXISTS ] table_name
    RENAME TO new_table_name;
ALTER TABLE [ IF EXISTS ] { table_name  [*] | ONLY table_name | ONLY ( table_name  )}
    RENAME [ COLUMN ] column_name TO new_column_name;
ALTER TABLE [ IF EXISTS ] { table_name  [*] | ONLY table_name | ONLY ( table_name  )}
    RENAME CONSTRAINT constraint_name TO new_constraint_name;
ALTER TABLE [ IF EXISTS ] table_name
    SET SCHEMA new_schema;

where action can be:
column_clause
    | ADD table_constraint [ NOT VALID ]
    | ADD table_constraint_using_index
    | VALIDATE CONSTRAINT constraint_name
    | DROP CONSTRAINT [ IF EXISTS ]  constraint_name [ RESTRICT | CASCADE ]
    | CLUSTER ON index_name
    | SET WITHOUT CLUSTER
    | SET ( {storage_parameter = value} [, ... ] )
    | RESET ( storage_parameter [, ... ] )
    | OWNER TO new_owner
    | SET TABLESPACE new_tablespace
    | SET {COMPRESS|NOCOMPRESS}
    | TO { GROUP groupname | NODE ( nodename [, ... ] ) }
    | ADD NODE ( nodename [, ... ] )
    | DELETE NODE ( nodename [, ... ] )
    | UPDATE SLICE LIKE table_name
    | DISABLE TRIGGER [ trigger_name | ALL | USER ]
    | ENABLE TRIGGER [ trigger_name | ALL | USER ]
    | ENABLE REPLICA TRIGGER trigger_name
    | ENABLE ALWAYS TRIGGER trigger_name
    | ENABLE ROW LEVEL SECURITY
    | DISABLE ROW LEVEL SECURITY
    | FORCE ROW LEVEL SECURITY
    | NO FORCE ROW LEVEL SECURITY
    | ENCRYPTION KEY ROTATION
where column_clause can be:
ADD [ COLUMN ] column_name data_type [ compress_mode ] [ COLLATE collation ] [ column_constraint [ ... ] ]
    | MODIFY column_name data_type
    | MODIFY column_name [ CONSTRAINT constraint_name ] NOT NULL [ ENABLE ]
    | MODIFY column_name [ CONSTRAINT constraint_name ] NULL
    | DROP [ COLUMN ] [ IF EXISTS ] column_name [ RESTRICT | CASCADE ]
    | ALTER [ COLUMN ] column_name [ SET DATA ] TYPE data_type [ COLLATE collation ] [ USING expression ]
    | ALTER [ COLUMN ] column_name { SET DEFAULT expression | DROP DEFAULT }
    | ALTER [ COLUMN ] column_name { SET | DROP } NOT NULL
    | ALTER [ COLUMN ] column_name SET STATISTICS [PERCENT] integer
    | ADD STATISTICS (( column_1_name, column_2_name [, ...] ))
    | DELETE STATISTICS (( column_1_name, column_2_name [, ...] ))
    | ALTER [ COLUMN ] column_name SET ( {attribute_option = value} [, ... ] )
    | ALTER [ COLUMN ] column_name RESET ( attribute_option [, ... ] )
    | ALTER [ COLUMN ] column_name SET STORAGE { PLAIN | EXTERNAL | EXTENDED | MAIN }
where column_constraint can be:
[ CONSTRAINT constraint_name ]
    { NOT NULL |
      NULL |
      CHECK ( expression ) |
      DEFAULT default_expr |
      GENERATED ALWAYS AS ( generation_expr ) STORED |
      UNIQUE index_parameters |
      PRIMARY KEY index_parameters |
      ENCRYPTED WITH ( COLUMN_ENCRYPTION_KEY = column_encryption_key, ENCRYPTION_TYPE = encryption_type_value ) |
      REFERENCES reftable [ ( refcolumn ) ] [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ]
        [ ON DELETE action ] [ ON UPDATE action ] }
    [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
where compress_mode can be:
{ DELTA | PREFIX | DICTIONARY | NUMSTR | NOCOMPRESS }
where table_constraint can be:
[ CONSTRAINT constraint_name ]
    { CHECK ( expression ) |
      UNIQUE ( column_name [, ... ] ) index_parameters |
      PRIMARY KEY ( column_name [, ... ] ) index_parameters |
      PARTIAL CLUSTER KEY ( column_name [, ... ] ) |
      FOREIGN KEY ( column_name [, ... ] ) REFERENCES reftable [ ( refcolumn [, ... ] ) ]
        [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ] [ ON DELETE action ] [ ON UPDATE action ] }
    [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
where index_parameters can be:
[ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ USING INDEX TABLESPACE tablespace_name ]
where table_constraint_using_index can be:
[ CONSTRAINT constraint_name ]
    { UNIQUE | PRIMARY KEY } USING INDEX index_name
    [ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
```

## ALTER TABLE PARTITION<a name="section1482194619287"></a>

```
ALTER TABLE [ IF EXISTS ] { table_name  [*] | ONLY table_name | ONLY ( table_name  )}
    action [, ... ];
ALTER TABLE [ IF EXISTS ] { table_name [*] | ONLY table_name | ONLY ( table_name  )}
    RENAME PARTITION { partion_name | FOR ( partition_value [, ...] ) } TO partition_new_name;

where action can be:
move_clause  |
    exchange_clause  |
    row_clause  |
    merge_clause  |
    modify_clause  |
    split_clause  |
    add_clause  |
    drop_clause
where move_clause can be:
MOVE PARTITION { partion_name | FOR ( partition_value [, ...] ) } TABLESPACE tablespacename
where exchange_clause can be:
EXCHANGE PARTITION { ( partition_name ) | FOR ( partition_value [, ...] ) }
    WITH TABLE {[ ONLY ] ordinary_table_name | ordinary_table_name * | ONLY ( ordinary_table_name )}
    [ { WITH | WITHOUT } VALIDATION ] [ VERBOSE ]
where row_clause can be:
{ ENABLE | DISABLE } ROW MOVEMENT
where merge_clause can be:
MERGE PARTITIONS { partition_name } [, ...] INTO PARTITION partition_name
    [ TABLESPACE tablespacename ]
where modify_clause can be:
MODIFY PARTITION partition_name { UNUSABLE LOCAL INDEXES | REBUILD UNUSABLE LOCAL INDEXES }
where split_clause can be:
SPLIT PARTITION { partition_name | FOR ( partition_value [, ...] ) } { split_point_clause | no_split_point_clause }
where split_point_clause can be:
AT ( partition_value ) INTO ( PARTITION partition_name [ TABLESPACE tablespacename ] , PARTITION partition_name [ TABLESPACE tablespacename ] )
where no_split_point_clause can be:
INTO {(partition_less_than_item [, ...] ) | (partition_start_end_item [, ...] )}
where add_clause can be:
ADD {partition_less_than_item | partition_start_end_item}
where partition_less_than_item can be:
PARTITION partition_name VALUES LESS THAN ( { partition_value | MAXVALUE }      [, ...] ) [ TABLESPACE tablespacename ]
where partition_start_end_item can be:
PARTITION partition_name {
        {START(partition_value) END (partition_value) EVERY (interval_value)} |
        {START(partition_value) END ({partition_value | MAXVALUE})} |
        {START(partition_value)} |
        {END({partition_value | MAXVALUE})}
} [TABLESPACE tablespace_name]
where drop_clause can be:
DROP PARTITION  { partition_name  | FOR (  partition_value [, ...] )  }

```

## ALTER TABLESPACE<a name="section18141152122812"></a>

修改表空间的属性。

```
ALTER TABLESPACE tablespace_name
    RENAME TO new_tablespace_name;
ALTER TABLESPACE tablespace_name
    OWNER TO new_owner;
ALTER TABLESPACE tablespace_name
    SET ( {tablespace_option = value} [, ... ] );
ALTER TABLESPACE tablespace_name
    RESET ( tablespace_option [, ... ] );
ALTER TABLESPACE tablespace_name
    RESIZE MAXSIZE { UNLIMITED | 'space_size' };
```

## ALTER TEXT SEARCH CONFIGURATION<a name="section115941557112818"></a>

更改文本搜索配置的定义。用户可以将映射从字串类型调整为字典，或者改变配置的名称或者所有者，或者修改搜索配置的配置参数。

```
ALTER TEXT SEARCH CONFIGURATION name
    ADD MAPPING FOR token_type [, ... ] WITH dictionary_name [, ... ]
ALTER TEXT SEARCH CONFIGURATION name
    ALTER MAPPING FOR token_type [, ... ] WITH dictionary_name [, ... ]
ALTER TEXT SEARCH CONFIGURATION name
    ALTER MAPPING REPLACE old_dictionary WITH new_dictionary
ALTER TEXT SEARCH CONFIGURATION name
    ALTER MAPPING FOR token_type [, ... ] REPLACE old_dictionary WITH new_dictionary
ALTER TEXT SEARCH CONFIGURATION name
    DROP MAPPING [ IF EXISTS ] FOR token_type [, ... ]
ALTER TEXT SEARCH CONFIGURATION name RENAME TO new_name
ALTER TEXT SEARCH CONFIGURATION name OWNER TO new_owner
ALTER TEXT SEARCH CONFIGURATION name SET SCHEMA new_schema
ALTER TEXT SEARCH CONFIGURATION name SET ( {configuration_option = value} [, ...] )
ALTER TEXT SEARCH CONFIGURATION name RESET ( {configuration_option} [, ...] )
```

## ALTER TEXT SEARCH DICTIONARY<a name="section13905621293"></a>

修改全文检索词典的相关定义，包括参数、名称、所有者、以及模式等。

```
ALTER TEXT SEARCH DICTIONARY name ( option = value | option [, ...] );
ALTER TEXT SEARCH DICTIONARY name RENAME TO new_name;
ALTER TEXT SEARCH DICTIONARY name OWNER TO new_owner;
ALTER TEXT SEARCH DICTIONARY name SET SCHEMA new_schema
```

## ALTER TRIGGER<a name="section73889822911"></a>

修改触发器名称。

```
ALTER TRIGGER name ON table_name RENAME TO new_name
```

## ALTER TYPE<a name="section138371414112916"></a>

修改一个类型的定义。

```
ALTER TYPE name action [, ... ]
ALTER TYPE name OWNER TO { new_owner | CURRENT_USER | SESSION_USER }
ALTER TYPE name RENAME ATTRIBUTE attribute_name TO new_attribute_name [ CASCADE | RESTRICT ]
ALTER TYPE name RENAME TO new_name
ALTER TYPE name SET SCHEMA new_schema
ALTER TYPE name ADD VALUE [ IF NOT EXISTS ] new_enum_value [ { BEFORE | AFTER } neighbor_enum_value ]
ALTER TYPE name RENAME VALUE existing_enum_value TO new_enum_value

where action is one of:

    ADD ATTRIBUTE attribute_name data_type [ COLLATE collation ] [ CASCADE | RESTRICT ]
    DROP ATTRIBUTE [ IF EXISTS ] attribute_name [ CASCADE | RESTRICT ]
    ALTER ATTRIBUTE attribute_name [ SET DATA ] TYPE data_type [ COLLATE collation ] [ CASCADE | RESTRICT ]
```

## ALTER USER<a name="section16922923102916"></a>

修改数据库用户的属性。

```
ALTER USER user_name [ [ WITH ] option [ ... ] ];
ALTER USER user_name
    RENAME TO new_name;
ALTER USER user_name [ IN DATABASE database_name ]
    SET configuration_parameter {{ TO | = } { value | DEFAULT }|FROM CURRENT};
ALTER USER user_name
    [ IN DATABASE database_name ] RESET {configuration_parameter|ALL};

where option can be:
{CREATEDB | NOCREATEDB}
    | {CREATEROLE | NOCREATEROLE}
    | {INHERIT | NOINHERIT}
    | {AUDITADMIN | NOAUDITADMIN}
    | {SYSADMIN | NOSYSADMIN}
    | {MONADMIN | NOMONADMIN}
    | {OPRADMIN | NOOPRADMIN}
    | {POLADMIN | NOPOLADMIN}
    | {USEFT | NOUSEFT}
    | {LOGIN | NOLOGIN}
    | {REPLICATION | NOREPLICATION}
    | {INDEPENDENT | NOINDEPENDENT}
    | {VCADMIN | NOVCADMIN}
    | {PERSISTENCE | NOPERSISTENCE}
    | CONNECTION LIMIT connlimit
    | [ ENCRYPTED | UNENCRYPTED ] PASSWORD { 'password' [ EXPIRED ] | DISABLE | EXPIRED }
    | [ ENCRYPTED | UNENCRYPTED ] IDENTIFIED BY { 'password' [ REPLACE 'old_password' | EXPIRED ] | DISABLE }
    | VALID BEGIN 'timestamp'
    | VALID UNTIL 'timestamp'
    | RESOURCE POOL 'respool'
    | USER GROUP 'groupuser'
    | PERM SPACE 'spacelimit'
    | TEMP SPACE 'tmpspacelimit'
    | SPILL SPACE 'spillspacelimit'
    | NODE GROUP logic_cluster_name
    | ACCOUNT { LOCK | UNLOCK }
    | PGUSER
```

## ALTER VIEW<a name="section1189482314309"></a>

更改视图的各种辅助属性。

```
ALTER VIEW [ IF EXISTS ] view_name
    ALTER [ COLUMN ] column_name SET DEFAULT expression;
ALTER VIEW [ IF EXISTS ] view_name
    ALTER [ COLUMN ] column_name DROP DEFAULT;
ALTER VIEW [ IF EXISTS ] view_name
    OWNER TO new_owner;
ALTER VIEW [ IF EXISTS ] view_name
    RENAME TO new_name;
ALTER VIEW [ IF EXISTS ] view_name
    SET SCHEMA new_schema;
ALTER VIEW [ IF EXISTS ] view_name
    SET ( {view_option_name [= view_option_value]} [, ... ] );
ALTER VIEW [ IF EXISTS ] view_name
    RESET ( view_option_name [, ... ] );
```

## ANALYSE|ANALYZE<a name="section156235459300"></a>

用于收集与数据库中普通表内容相关的统计信息，统计结果存储在系统表PG\_STATISTIC下。执行计划生成器会使用这些统计数据，以确定最有效的执行计划。

```
{ANALYZE | ANALYSE} [ VERBOSE ]
    [ table_name [ ( column_name [, ...] ) ] ];
{ANALYZE | ANALYSE} [ VERBOSE ]
    [ table_name [ ( column_name [, ...] ) ] ]
    PARTITION patrition_name;
{ANALYZE | ANALYSE} [ VERBOSE ]
    { foreign_table_name | FOREIGN TABLES };
{ANALYZE | ANALYSE} [ VERBOSE ]
    table_name (( column_1_name, column_2_name [, ...] ));
{ANALYZE | ANALYSE} VERIFY {FAST|COMPLETE};
{ANALYZE | ANALYSE} VERIFY {FAST|COMPLETE}
    table_name|index_name [CASCADE];
{ANALYZE | ANALYSE} VERIFY {FAST|COMPLETE}
    table_name PARTITION (patrition_name) [CASCADE];
```

## ANONYMOUS BLOCK<a name="section48601152113011"></a>

匿名块（Anonymous Block）一般用于不频繁执行的脚本或不重复进行的活动。它们在一个会话中执行，并不被存储。

```
[DECLARE [declare_statements]]
        BEGIN
        execution_staements
        END;
        /
```

## BEGIN<a name="section381716413317"></a>

BEGIN可以用于开始一个匿名块，也可以用于开始一个事务。

```
start a anonymous block:
[DECLARE [declare_statements]]
BEGIN
execution_statements
END;
/

start a transaction:
BEGIN [ WORK | TRANSACTION ]
  [
    {
       ISOLATION LEVEL { READ COMMITTED | READ UNCOMMITTED | SERIALIZABLE | REPEATABLE READ }
       | { READ WRITE | READ ONLY }
      } [, ...]
  ];
```

## CALL<a name="section169531510163113"></a>

可以调用已定义的函数和存储过程。

```
CALL [schema.] func_name ( param_expr );
```

## CHECKPOINT<a name="section1364151611317"></a>

检查点（CHECKPOINT）是一个事务日志中的点，所有数据文件都在该点被更新以反映日志中的信息，所有数据文件都将被刷新到磁盘。

```
CHECKPOINT
```

## CLEAN CONNECTION<a name="section236712023113"></a>

用来清理数据库连接。允许在节点上清理指定数据库的指定用户的相关连接。

```
CLEAN CONNECTION
    TO { COORDINATOR ( nodename [, ... ] ) | NODE ( nodename [, ... ] ) | ALL [ CHECK ] [ FORCE ] }
    [ FOR DATABASE dbname ]
    [ TO USER username ];
```

## CLOSE<a name="section05801025193116"></a>

释放和一个游标关联的所有资源。

```
CLOSE { cursor_name | ALL };
```

## CLUSTER<a name="section10643113114311"></a>

根据一个索引对表进行聚簇排序。

```
CLUSTER [ VERBOSE ] table_name [ USING index_name ];
CLUSTER [ VERBOSE ] table_name PARTITION ( partition_name ) [ USING index_name ];
CLUSTER [ VERBOSE ];
```

## COMMENT<a name="section9114377311"></a>

定义或修改一个对象的注释。

```
COMMENT ON
{
  AGGREGATE agg_name (agg_type [, ...] ) |
  CAST (source_type AS target_type) |
  COLLATION object_name |
  COLUMN { table_name.column_name | view_name.column_name } |
  CONSTRAINT constraint_name ON table_name |
  CONVERSION object_name |
  DATABASE object_name |
  DOMAIN object_name |
  EXTENSION object_name |
  FOREIGN DATA WRAPPER object_name |
  FOREIGN TABLE object_name |
  FUNCTION function_name ( [ {[ argmode ] [ argname ] argtype} [, ...] ] ) |
  INDEX object_name |
  LARGE OBJECT large_object_oid |
  OPERATOR operator_name (left_type, right_type) |
  OPERATOR CLASS object_name USING index_method |
  OPERATOR FAMILY object_name USING index_method |
  [ PROCEDURAL ] LANGUAGE object_name |
  ROLE object_name |
  RULE rule_name ON table_name |
  SCHEMA object_name |
  SERVER object_name |
  TABLE object_name |
  TABLESPACE object_name |
  TEXT SEARCH CONFIGURATION object_name |
  TEXT SEARCH DICTIONARY object_name |
  TEXT SEARCH PARSER object_name |
  TEXT SEARCH TEMPLATE object_name |
  TYPE object_name |
  VIEW object_name
}
   IS 'text';
```

## COMMIT<a name="section68431541193115"></a>

通过COMMIT或者END可完成提交事务的功能，即提交事务的所有操作。

```
{ COMMIT | END } [ WORK | TRANSACTION ];
```

## COMMIT PREPARED<a name="section855864615317"></a>

提交一个早先为两阶段提交准备好的事务。

```
COMMIT PREPARED transaction_id;
```

## COPY<a name="section19690125053116"></a>

通过COPY命令实现在表和文件之间拷贝数据。

```
COPY table_name [ ( column_name [, ...] ) ]
    FROM { 'filename' | STDIN }
    [ [ USING ] DELIMITERS 'delimiters' ]
    [ WITHOUT ESCAPING ]
    [ LOG ERRORS ]
    [ LOG ERRORS DATA ]
    [ REJECT LIMIT 'limit' ]
    [ [ WITH ] ( option [, ...] ) ]
    | copy_option
    | [ FIXED FORMATTER ( { column_name( offset, length ) } [, ...] ) ]
    | [ TRANSFORM ( { column_name [ data_type ] [ AS transform_expr ] } [, ...] ) ];
COPY table_name [ ( column_name [, ...] ) ]
    TO { 'filename' | STDOUT }
    [ [ USING ] DELIMITERS 'delimiters' ]
    [ WITHOUT ESCAPING ]
    [ [ WITH ] ( option [, ...] ) ]
    | copy_option
    | [ FIXED FORMATTER ( { column_name( offset, length ) } [, ...] ) ];
COPY query
    TO { 'filename' | STDOUT }
    [ WITHOUT ESCAPING ]
    [ [ WITH ] ( option [, ...] ) ]
    | copy_option
    | [ FIXED FORMATTER ( { column_name( offset, length ) } [, ...] ) ];

where option can be:
FORMAT 'format_name'
| OIDS [ boolean ]
| DELIMITER 'delimiter_character'
| NULL 'null_string'
| HEADER [ boolean ]
| FILEHEADER 'header_file_string'
| FREEZE [ boolean ]
| QUOTE 'quote_character'
| ESCAPE 'escape_character'
| EOL 'newline_character'
| NOESCAPING [ boolean ]
| FORCE_QUOTE { ( column_name [, ...] ) | * }
| FORCE_NOT_NULL ( column_name [, ...] )
| FORCE_NULL ( column_name [, ...] )
| ENCODING 'encoding_name'
| IGNORE_EXTRA_DATA [ boolean ]
| FILL_MISSING_FIELDS [ boolean ]
| COMPATIBLE_ILLEGAL_CHARS [ boolean ]
| DATE_FORMAT 'date_format_string'
| TIME_FORMAT 'time_format_string'
| TIMESTAMP_FORMAT 'timestamp_format_string'
| SMALLDATETIME_FORMAT 'smalldatetime_format_string'

and copy_option can be:
OIDS
| NULL 'null_string'
| HEADER
| FILEHEADER 'header_file_string'
| FREEZE
| FORCE NOT NULL column_name [, ...]
| FORCE NULL column_name [, ...]
| FORCE QUOTE { column_name [, ...] | * }
| BINARY
| CSV
| QUOTE [ AS ] 'quote_character'
| ESCAPE [ AS ] 'escape_character'
| EOL 'newline_character'
| ENCODING 'encoding_name'
| IGNORE_EXTRA_DATA
| FILL_MISSING_FIELDS
| COMPATIBLE_ILLEGAL_CHARS
| DATE_FORMAT 'date_format_string'
| TIME_FORMAT 'time_format_string'
| TIMESTAMP_FORMAT 'timestamp_format_string'
| SMALLDATETIME_FORMAT 'smalldatetime_format_string'
```

## CREATE AUDIT POLICY<a name="section1615067193214"></a>

创建统一审计策略。

```
CREATE AUDIT POLICY [ IF NOT EXISTS ] policy_name { { privilege_audit_clause | access_audit_clause } [ filter_group_clause ] [ ENABLED | DISABLED ] };

where privilege_audit_clause can be:
PRIVILEGES { DDL | ALL } [ ON LABEL ( resource_label_name [, ... ] ) ]

where access_audit_clause can be:
ACCESS { DML | ALL } [ ON LABEL ( resource_label_name [, ... ] ) ]

where filter_group_clause can be:
FILTER ON { ( FILTER_TYPE ( filter_value [, ... ] ) ) [, ... ] }

where DDL can be:
{ ( ALTER | ANALYZE | COMMENT | CREATE | DROP | GRANT | REVOKE | SET | SHOW | LOGIN_ACCESS | LOGIN_FAILURE | LOGOUT | LOGIN ) }

where DML can be:
{ ( COPY | DEALLOCATE | DELETE_P | EXECUTE | REINDEX | INSERT | REPARE | SELECT | TRUNCATE | UPDATE ) }

where FILTER_TYPE can be:
{ APP | ROLES | IP }
```

## CREATE CLIENT MASTER KEY<a name="section8958191713320"></a>

创建一个客户端主密钥对象，该对象可用于加密Column Encryption Key对象。

```
CREATE CLIENT MASTER KEY client_master_key_name
     [WITH] ( ['KEY_STORE' , 'KEY_PATH' , 'ALGORITHM'] );
```

## CREATE COLUMN ENCRYPTION KEY<a name="section928842315327"></a>

创建一个列加密密钥，该密钥可用于加密表中指定列。

```
CREATE COLUMN ENCRYPTION KEY column_encryption_key_name
     [WITH] [VALUES] ( ['CLIENT_MASTER_KEY' , 'ALGORITHM'] );
```

## CREATE DATA SOURCE<a name="section248572810322"></a>

创建一个新的外部数据源对象，该对象用于定义openGauss要连接的目标库信息。

```
CREATE DATA SOURCE src_name
    [TYPE 'type_str']
    [VERSION {'version_str' | NULL}]
    [OPTIONS (optname 'optvalue' [, ...])];

Valid optname are:
    DSN, USERNAME, PASSWORD, ENCODING
```

## CREATE DATABASE<a name="section11813913316"></a>

创建一个新的数据库。缺省情况下新数据库将通过复制标准系统数据库template0来创建，且仅支持使用template0来创建。

```
CREATE DATABASE database_name
    [ [ WITH ] {[ OWNER [=] user_name ]|
           [ TEMPLATE [=] template ]|
           [ ENCODING [=] encoding ]|
           [ LC_COLLATE [=] lc_collate ]|
           [ LC_CTYPE [=] lc_ctype ]|
           [ DBCOMPATIBILITY [=] compatibility_type ]|
           [ TABLESPACE [=] tablespace_name ]|
           [ CONNECTION LIMIT [=] connlimit ]}[...] ];
```

## CREATE DIRECTORY<a name="section158031353133315"></a>

使用CREATE DIRECTORY语句创建一个目录对象，该目录对象定义了服务器文件系统上目录的别名，用于存放用户使用的数据文件。

```
CREATE [OR REPLACE] DIRECTORY directory_name
AS 'path_name';
```

## CREATE EVENT TRIGGER<a name="section1142367183143"></a>

创建一个事件触发器。事件触发器将与指定的事件触发器函数绑定，在特定事件触发后执行函数。

```
CREATE EVENT TRIGGER name
    ON event
    [ WHEN filter_variable IN (filter_value [, ... ]) [ AND ... ] ]
    EXECUTE PROCEDURE function_name()
```

## CREATE EXTENSION<a name="section1371614218343"></a>

安装一个扩展。

```
CREATE EXTENSION [ IF NOT EXISTS ] extension_name
    [ WITH ] [ SCHEMA schema_name ]
             [ VERSION version ]
             [ FROM old_version ];
```

## CREATE FOREIGN TABLE<a name="section423641063415"></a>

创建外表。

```
CREATE FOREIGN TABLE [ IF NOT EXISTS  ] table_name
( { column_name type_name POSITION(offset,length) [column_constraint ]
        | LIKE source_table | table_constraint } [, ...] )
SEVER gsmpp_server
OPTIONS (  { option_name ' value '  }  [, ...] )
[  { WRITE ONLY  |  READ ONLY  }]
[ WITH error_table_name | LOG INTO error_table_name]
[REMOTE LOG 'name']
[PER NODE REJECT LIMIT 'value']
[ TO { GROUP groupname | NODE ( nodename [, ... ] ) } ];
CREATE FOREIGN TABLE [ IF NOT EXISTS ] table_name
( { column_name type_name
    [ { [CONSTRAINT constraint_name] NULL |
    [CONSTRAINT constraint_name] NOT NULL |
        column_constraint [...]} ] |
        table_constraint} [, ...] )
SERVER server_name
OPTIONS ( { option_name ' value ' } [, ...] )
DISTRIBUTE BY {ROUNDROBIN | REPLICATION}
[ TO { GROUP groupname | NODE ( nodename [, ... ] ) } ]
[ PARTITION BY ( column_name ) [AUTOMAPPED]] ;
CREATE FOREIGN TABLE [ IF NOT EXISTS ] table_name
( [ { column_name type_name | LIKE source_table } [, ...] ] )
SERVER server_name
OPTIONS ( { option_name ' value ' } [, ...] )
[ READ ONLY ]
[ DISTRIBUTE BY {ROUNDROBIN} ]
[ TO { GROUP groupname | NODE ( nodename [, ... ] ) } ];

where column_constraint can be:
[CONSTRAINT constraint_name]
{PRIMARY KEY | UNIQUE}
[NOT ENFORCED [ENABLE QUERY OPTIMIZATION | DISABLE QUERY OPTIMIZATION] | ENFORCED]
where table_constraint can be:
[CONSTRAINT constraint_name]
{PRIMARY KEY | UNIQUE} (column_name)
[NOT ENFORCED [ENABLE QUERY OPTIMIZATION | DISABLE QUERY OPTIMIZATION] | ENFORCED]
```

## CREATE FUNCTION<a name="section18271217183410"></a>

创建一个函数。

```
CREATE [ OR REPLACE  ] FUNCTION function_name
    ( [  { argname [ argmode  ] argtype [  { DEFAULT  | :=  | =  } expression  ]}  [, ...]  ] )
    [ RETURNS rettype [ DETERMINISTIC  ]
        | RETURNS TABLE (  { column_name column_type  }  [, ...] )]
    LANGUAGE lang_name
    [
        {IMMUTABLE  | STABLE  | VOLATILE}
        | {SHIPPABLE | NOT SHIPPABLE}
        | [ NOT  ] LEAKPROOF
        | WINDOW
        | {CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT}
        | {[ EXTERNAL  ] SECURITY INVOKER  | [ EXTERNAL  ] SECURITY DEFINER | AUTHID DEFINER  | AUTHID CURRENT_USER}
        | {FENCED | NOT FENCED}
        | {PACKAGE}
        | COST execution_cost
        | ROWS result_rows
        | SET configuration_parameter { {TO | =} value | FROM CURRENT }
    ] [...]
    {
        AS 'definition'
        | AS 'obj_file', 'link_symbol'
    }

CREATE [ OR REPLACE  ] FUNCTION function_name
    ( [  { argname [ argmode  ] argtype [  { DEFAULT | := | =  } expression  ] }  [, ...]  ] )
    RETURN rettype [ DETERMINISTIC  ]
    [
        {IMMUTABLE  | STABLE  | VOLATILE }
        | {SHIPPABLE | NOT SHIPPABLE}
        | {PACKAGE}
        | [ NOT  ] LEAKPROOF
        | {CALLED ON NULL INPUT  | RETURNS NULL ON NULL INPUT  | STRICT }
        | {[ EXTERNAL  ] SECURITY INVOKER  | [ EXTERNAL  ] SECURITY DEFINER | | AUTHID DEFINER  | AUTHID CURRENT_USER}
        | COST execution_cost
        | ROWS result_rows
        | SET configuration_parameter { {TO | =} value | FROM CURRENT }
     ][...]
     {
        IS | AS
     } plsql_body
/
```

## CREATE GROUP<a name="section815328203713"></a>

创建一个新用户组。

```
CREATE GROUP group_name [ [ WITH ] option [ ... ] ] [ ENCRYPTED | UNENCRYPTED ] { PASSWORD | IDENTIFIED BY } { 'password' [ EXPIRED ] | DISABLE };

where option can be:
{SYSADMIN | NOSYSADMIN}
    | {MONADMIN | NOMONADMIN}
    | {OPRADMIN | NOOPRADMIN}
    | {POLADMIN | NOPOLADMIN}
    | {AUDITADMIN | NOAUDITADMIN}
    | {CREATEDB | NOCREATEDB}
    | {USEFT | NOUSEFT}
    | {CREATEROLE | NOCREATEROLE}
    | {INHERIT | NOINHERIT}
    | {LOGIN | NOLOGIN}
    | {REPLICATION | NOREPLICATION}
    | {INDEPENDENT | NOINDEPENDENT}
    | {VCADMIN | NOVCADMIN}
    | {PERSISTENCE | NOPERSISTENCE}
    | CONNECTION LIMIT connlimit
    | VALID BEGIN 'timestamp'
    | VALID UNTIL 'timestamp'
    | RESOURCE POOL 'respool'
    | USER GROUP 'groupuser'
    | PERM SPACE 'spacelimit'
    | TEMP SPACE 'tmpspacelimit'
    | SPILL SPACE 'spillspacelimit'
    | NODE GROUP logic_group_name
    | IN ROLE role_name [, ...]
    | IN GROUP role_name [, ...]
    | ROLE role_name [, ...]
    | ADMIN role_name [, ...]
    | USER role_name [, ...]
    | SYSID uid
    | DEFAULT TABLESPACE tablespace_name
    | PROFILE DEFAULT
    | PROFILE profile_name
    | PGUSER
```

## CREATE INDEX<a name="section135021417123711"></a>

在指定的表上创建索引。

```
CREATE [ UNIQUE ] INDEX [ [schema_name.] index_name ] ON table_name [ USING method ]
    ({ { column_name | ( expression ) } [ COLLATE collation ] [ opclass ] [ ASC | DESC ] [ NULLS { FIRST | LAST } ] }[, ...] )
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ TABLESPACE tablespace_name ]
    [ WHERE predicate ];
CREATE [ UNIQUE ] INDEX [ [schema_name.] index_name ] ON table_name [ USING method ]
( {{ column_name | ( expression ) } [ COLLATE collation ] [ opclass ] [ ASC | DESC ] [ NULLS LAST ] }[, ...] )
[ LOCAL [ ( { PARTITION index_partition_name [ TABLESPACE index_partition_tablespace ] } [, ...] ) ] | GLOBAL ]
[ WITH ( { storage_parameter = value } [, ...] ) ]
[ TABLESPACE tablespace_name ];
```

## CREATE LANGUAGE<a name="section747314401378"></a>

定义一种新的过程语言。单机和集中式暂不支持创建过程语言。

```
CREATE [ UNIQUE ] INDEX [ [schema_name.] index_name ] ON table_name [ USING method ]
    ({ { column_name | ( expression ) } [ COLLATE collation ] [ opclass ] [ ASC | DESC ] [ NULLS { FIRST | LAST } ] }[, ...] )
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ TABLESPACE tablespace_name ]
    [ WHERE predicate ];
CREATE [ UNIQUE ] INDEX [ [schema_name.] index_name ] ON table_name [ USING method ]
( {{ column_name | ( expression ) } [ COLLATE collation ] [ opclass ] [ ASC | DESC ] [ NULLS LAST ] }[, ...] )
[ LOCAL [ ( { PARTITION index_partition_name [ TABLESPACE index_partition_tablespace ] } [, ...] ) ] | GLOBAL ]
[ WITH ( { storage_parameter = value } [, ...] ) ]
[ TABLESPACE tablespace_name ];

openGauss=# \h CREATE LANGUAGE
Command:     CREATE LANGUAGE
Description: define a new procedural language
Syntax:
CREATE [ OR REPLACE ] [ PROCEDURAL ] LANGUAGE name;
CREATE [ OR REPLACE ] [ TRUSTED ] [ PROCEDURAL ] LANGUAGE name
    HANDLER call_handler [ INLINE inline_handler ] [ VALIDATOR valfunction ];
```

## CREATE MASKING POLICY<a name="section1281415163717"></a>

创建脱敏策略。

```
CREATE MASKING POLICY policy_name masking_clause [, ... ] [ policy_filter_clause ] [ ENABLE | DISABLE ];

where masking_clause can be:
masking_function ON LABEL(label_name [, ... ])

where masking_function can be:
{ maskall | randommasking | creditcardmasking | basicemailmasking | fullemailmasking | shufflemasking | alldigitsmasking | regexpmasking }

where policy_filter_clause can be:
FILTER ON { ( FILTER_TYPE ( filter_value [, ... ] ) ) [, ... ] }

where FILTER_TYPE can be:
{ APP | ROLES | IP }
```

## CREATE MATERIALIZED VIEW<a name="section154308319386"></a>

CREATE MATERIALIZED VIEW会创建一个全量物化视图，并且后续可以使用REFRESH MATERIALIZED VIEW（全量刷新）刷新物化视图的数据。

```
CREATE [ INCREMENTAL ] MATERIALIZED VIEW table_name
    [ (column_name [, ...] ) ]
    [ TABLESPACE tablespace_name ]
    AS query
```

## CREATE MODEL<a name="section4576161463818"></a>

训练机器学习模型并保存模型。

```
CREATE MODEL model_name USING algorithm_name
[FEATURES { {expression [ [ AS ] output_name ]} [, ...] }]
[TARGET { {expression [ [ AS ] output_name ]} [, ...] }]
FROM { table_name | select_query }
WITH hyperparameter_name = { hyperparameter_value | DEFAULT } [, ...] }
```

## CREATE OPERATOR<a name="section113477442380"></a>

定义一个新操作符。

```
CREATE OPERATOR name (
    PROCEDURE = function_name
    [, LEFTARG = left_type ] [, RIGHTARG = right_type ]
    [, COMMUTATOR = com_op ] [, NEGATOR = neg_op ]
    [, RESTRICT = res_proc ] [, JOIN = join_proc ]
    [, HASHES ] [, MERGES ]
)
```

## CREATE PACKAGE<a name="section423510546382"></a>

创建一个新的PACKAGE。

```
CREATE [ OR REPLACE ] PACKAGE [ schema ] package_name
    [ invoker_rights_clause ] { IS | AS } item_list_1 END package_name;
```

## CREATE PROCEDURE<a name="section16473718113918"></a>

创建一个新的存储过程。

```
CREATE [ OR REPLACE ] PACKAGE [ schema ] package_name
    [ invoker_rights_clause ] { IS | AS } item_list_1 END package_name;

openGauss=# \h CREATE PROCEDURE
Command:     CREATE PROCEDURE
Description: create a procedure
Syntax:
CREATE [ OR REPLACE ] PROCEDURE procedure_name
    [ ( {[ argmode ] [ argname ] argtype [ { DEFAULT | := | = } expression ]}[,...]) ]
   { IS | AS } plsql_body
/
```

## CREATE RESOURCE LABEL<a name="section1764018283395"></a>

创建资源标签。

```
CREATE RESOURCE LABEL [ IF NOT EXISTS ] label_name ADD label_item_list[ , ... ];

where label_item_list can be:
resource_type(resource_path[, ... ])

where resource_type can be:
{ TABLE | COLUMN | SCHEMA | VIEW | FUNCTION }
```

## CREATE RESOURCE POOL<a name="section18585183983910"></a>

创建一个资源池，并指定此资源池相关联的控制组。

```
CREATE RESOURCE POOL pool_name
    [WITH ({MEM_PERCENT=pct | CONTROL_GROUP="group_name" | ACTIVE_STATEMENTS=stmt | MAX_DOP = dop | MEMORY_LIMIT='memory_size' | io_limits=io_limits | io_priority='priority' | nodegroup='nodegroup_name' | is_foreign = boolean }[, ... ])];
```

## CREATE ROLE<a name="section1244016494394"></a>

创建角色。

```
CREATE ROLE role_name [ [ WITH ] option [ ... ] ] [ ENCRYPTED | UNENCRYPTED ] { PASSWORD | IDENTIFIED BY } { 'password' [ EXPIRED ] | DISABLE };

where option can be:
{SYSADMIN | NOSYSADMIN}
    | {MONADMIN | NOMONADMIN}
    | {OPRADMIN | NOOPRADMIN}
    | {POLADMIN | NOPOLADMIN}
    | {AUDITADMIN | NOAUDITADMIN}
    | {CREATEDB | NOCREATEDB}
    | {USEFT | NOUSEFT}
    | {CREATEROLE | NOCREATEROLE}
    | {INHERIT | NOINHERIT}
    | {LOGIN | NOLOGIN}
    | {REPLICATION | NOREPLICATION}
    | {INDEPENDENT | NOINDEPENDENT}
    | {VCADMIN | NOVCADMIN}
    | {PERSISTENCE | NOPERSISTENCE}
    | CONNECTION LIMIT connlimit
    | VALID BEGIN 'timestamp'
    | VALID UNTIL 'timestamp'
    | RESOURCE POOL 'respool'
    | USER GROUP 'groupuser'
    | PERM SPACE 'spacelimit'
    | TEMP SPACE 'tmpspacelimit'
    | SPILL SPACE 'spillspacelimit'
    | NODE GROUP logic_cluster_name
    | IN ROLE role_name [, ...]
    | IN GROUP role_name [, ...]
    | ROLE role_name [, ...]
    | ADMIN role_name [, ...]
    | USER role_name [, ...]
    | SYSID uid
    | DEFAULT TABLESPACE tablespace_name
    | PROFILE DEFAULT
    | PROFILE profile_name
    | PGUSER
```

## CREATE ROW LEVEL SECURITY  POLICY<a name="section61451757163914"></a>

对表创建行访问控制策略。

```
CREATE [ ROW LEVEL SECURITY ] POLICY policy_name ON table_name
    [ AS { PERMISSIVE | RESTRICTIVE } ]
    [ FOR { ALL | SELECT | UPDATE | DELETE } ]
    [ TO { role_name | PUBLIC } [, ...] ]
    USING ( using_expression )
```

## CREATE SCHEMA<a name="section3453098405"></a>

创建模式。

```
CREATE SCHEMA schema_name
    [ AUTHORIZATION user_name ] [WITH BLOCKCHAIN] [ schema_element [ ... ] ];
```

## CREATE SEQUENCE<a name="section474181934010"></a>

用于向当前数据库里增加一个新的序列。序列的Owner为创建此序列的用户。

```
CREATE SEQUENCE name [ INCREMENT [ BY ] increment ]
    [ MINVALUE minvalue | NO MINVALUE | NOMINVALUE] [ MAXVALUE maxvalue | NO MAXVALUE | NOMAXVALUE]
    [ START [ WITH ] start ] [ CACHE cache ] [ [ NO ] CYCLE | NOCYCLE]
    [ OWNED BY { table_name.column_name | NONE } ];
```

## CREATE SERVER<a name="section1395812274401"></a>

定义一个新的外部服务器。

```
CREATE SERVER server_name
    FOREIGN DATA WRAPPER fdw_name
    OPTIONS ( { option_name ' value ' } [, ...] ) ;
```

## CREATE SYNONYM<a name="section1645131174110"></a>

创建一个同义词对象。同义词是数据库对象的别名，用于记录与其他数据库对象名间的映射关系，用户可以使用同义词访问关联的数据库对象。

```
CREATE [ OR REPLACE ] SYNONYM synonym_name
    FOR object_name;
```

## CREATE TABLE<a name="section18626122310418"></a>

在当前数据库中创建一个新的空白表，该表由命令执行者所有。

```
CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } | UNLOGGED ] TABLE [ IF NOT EXISTS ] table_name
({ column_name data_type [ compress_mode ] [ COLLATE collation ] [ column_constraint [ ... ] ] [encrypted with ('column_encryption_key', 'encryption_type')]
    | table_constraint
    | LIKE source_table [ like_option [...] ] }
    [, ... ])
[ WITH ( {storage_parameter = value} [, ... ] ) ]
[ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]
[ COMPRESS | NOCOMPRESS ]
[ TABLESPACE tablespace_name ];

where column_constraint can be:
[ CONSTRAINT constraint_name ]
{ NOT NULL |
  NULL |
  CHECK ( expression ) |
  DEFAULT default_expr |
  GENERATED ALWAYS AS ( generation_expr ) STORED |
  UNIQUE index_parameters |
  PRIMARY KEY index_parameters |
  ENCRYPTED WITH ( COLUMN_ENCRYPTION_KEY = column_encryption_key, ENCRYPTION_TYPE = encryption_type_value ) |
  REFERENCES reftable [ ( refcolumn ) ] [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ]
    [ ON DELETE action ] [ ON UPDATE action ] }
[ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
where table_constraint can be:
[ CONSTRAINT constraint_name ]
{ CHECK ( expression ) |
  UNIQUE ( column_name [, ... ] ) index_parameters |
  PRIMARY KEY ( column_name [, ... ] ) index_parameters |
  PARTIAL CLUSTER KEY ( column_name [, ... ] ) |
  FOREIGN KEY ( column_name [, ... ] ) REFERENCES reftable [ ( refcolumn [, ... ] ) ]
    [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ] [ ON DELETE action ] [ ON UPDATE action ] }
[ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
where compress_mode can be:
{ DELTA | PREFIX | DICTIONARY | NUMSTR | NOCOMPRESS }
where like_option can be:
{ INCLUDING | EXCLUDING } { DEFAULTS | GENERATED | CONSTRAINTS | INDEXES | STORAGE | COMMENTS | PARTITION | RELOPTIONS | DISTRIBUTION | ALL }
where index_parameters can be:
[ WITH ( {storage_parameter = value} [, ... ] ) ]
[ USING INDEX TABLESPACE tablespace_name ]
```

## CREATE TABLE AS<a name="section1824102817417"></a>

根据查询结果创建表。

```
CREATE [ UNLOGGED ] TABLE table_name
    [ (column_name [, ...] ) ]
    [ WITH ( {storage_parameter = value} [, ... ] ) ]
    [ COMPRESS | NOCOMPRESS ]
    [ TABLESPACE tablespace_name ]
    [ DISTRIBUTE BY { REPLICATION | { [HASH ] ( column_name ) } } ]
    [ TO { GROUP groupname | NODE ( nodename [, ... ] ) } ]
    AS query
    [ WITH [ NO ] DATA ];
```

## CREATE TABLE PARTITION<a name="section1887832134120"></a>

创建分区表。分区表是把逻辑上的一张表根据某种方案分成几张物理块进行存储，这张逻辑上的表称之为分区表，物理块称之为分区。分区表是一张逻辑表，不存储数据，数据实际是存储在分区上的。

```
CREATE TABLE [ IF NOT EXISTS ] partition_table_name
( [
  { column_name data_type [ COLLATE collation ] [ column_constraint [ ... ] ]
    | table_constraint
    | LIKE source_table [ like_option [...] ] }
    [, ... ]
] )
[ WITH ( {storage_parameter = value} [, ... ] ) ]
[ COMPRESS | NOCOMPRESS ]
[ TABLESPACE tablespace_name ]
[ DISTRIBUTE BY { REPLICATION | { [ HASH ] ( column_name ) } } ]
[ TO { GROUP groupname | NODE ( nodename [, ... ] ) } ]
PARTITION BY {
        {VALUES (partition_key)} |
        {RANGE (partition_key) [ INTERVAL ('interval_expr') [ STORE IN ( tablespace_name [, ... ] ) ] ] ( partition_less_than_item [, ... ] )} |
        {RANGE (partition_key) [ INTERVAL ('interval_expr') [ STORE IN ( tablespace_name [, ... ] ) ] ] ( partition_start_end_item [, ... ] )} |
        {LIST | HASH (partition_key) (PARTITION partition_name [VALUES (list_values_clause)] opt_table_space )}
        NOTICE: LIST/HASH partition is only avaliable in CENTRALIZED mode!
} [ { ENABLE | DISABLE } ROW MOVEMENT ];

where column_constraint can be:
[ CONSTRAINT constraint_name ]
{ NOT NULL |
  NULL |
  CHECK ( expression ) |
  DEFAULT default_expr |
  GENERATED ALWAYS AS ( generation_expr ) STORED |
  UNIQUE index_parameters |
  PRIMARY KEY index_parameters |
  REFERENCES reftable [ ( refcolumn ) ] [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ]
    [ ON DELETE action ] [ ON UPDATE action ] }
[ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
where table_constraint can be:
[ CONSTRAINT constraint_name ]
{ CHECK ( expression ) |
  UNIQUE ( column_name [, ... ] ) index_parameters |
  PRIMARY KEY ( column_name [, ... ] ) index_parameters |
  FOREIGN KEY ( column_name [, ... ] ) REFERENCES reftable [ ( refcolumn [, ... ] ) ]
    [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ] [ ON DELETE action ] [ ON UPDATE action ] }
[ DEFERRABLE | NOT DEFERRABLE | INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
where index_parameters can be:
[ WITH ( {storage_parameter = value} [, ... ] ) ]
[ USING INDEX TABLESPACE tablespace_name ]
where like_option can be:
{ INCLUDING | EXCLUDING } { DEFAULTS | GENERATED | CONSTRAINTS | INDEXES | STORAGE | COMMENTS | RELOPTIONS | DISTRIBUTION | ALL }
where partition_less_than_item can be:
PARTITION partition_name VALUES LESS THAN ( { partition_value | MAXVALUE } ) [TABLESPACE tablespace_name]
where partition_start_end_item can be:
PARTITION partition_name {
        {START(partition_value) END (partition_value) EVERY (interval_value)} |
        {START(partition_value) END ({partition_value | MAXVALUE})} |
        {START(partition_value)} |
        {END({partition_value | MAXVALUE})}
} [TABLESPACE tablespace_name]
```

## CREATE TABLESPACE<a name="section828573624117"></a>

在数据库中创建一个新的表空间。

```
CREATE TABLESPACE tablespace_name
    [ OWNER user_name ]  [ RELATIVE ]  LOCATION 'directory' [ MAXSIZE 'space_size' ]
    [with_option_clause];

where option_clause can be:
WITH ( filesystem= { 'systemtype '| " systemtype " | systemtype }
 [ { , address = { ' ip:port [ , ... ] ' | " ip:port [ , ... ] "} } ]
, cfgpath = { 'path '| " path " } ,storepath = { 'rootpath '| " rootpath "}
[{, random_page_cost = { 'value '| " value " | value }}]
[{,seq_page_cost = { 'value '| " value " | value }}])
```

## CREATE TEXT SEARCH CONFIGURATION<a name="section176014355914"></a>

创建新的文本搜索配置。一个文本搜索配置声明一个能将一个字符串划分成符号的文本搜索解析器，加上可以用于确定搜索对哪些标记感兴趣的字典

```
CREATE TEXT SEARCH CONFIGURATION name (
    PARSER = parser_name |
    COPY = source_config
) [ WITH ( {configuration_option = value} [, ...] )];
```

## CREATE TEXT SEARCH DICTIONARY<a name="section15227139175911"></a>

删除全文检索词典。

```
CREATE TEXT SEARCH DICTIONARY name
     ( TEMPLATE = template_name | COPY = source_config
     [, option = value [, ...] ] );
```

## CREATE TRIGGER<a name="section435712265916"></a>

创建一个触发器。 触发器将与指定的表或视图关联，并在特定条件下执行指定的函数。

```
CREATE [ CONSTRAINT ] TRIGGER name { BEFORE | AFTER | INSTEAD OF } { event [ OR ... ] }
    ON table_name
    [ FROM referenced_table_name ]
    { NOT DEFERRABLE | [ DEFERRABLE ] { INITIALLY IMMEDIATE | INITIALLY DEFERRED } }
    [ FOR [ EACH ] { ROW | STATEMENT } ]
    [ WHEN ( condition ) ]
    EXECUTE PROCEDURE function_name ( arguments )

where event can be one of:

    INSERT
    UPDATE [ OF column_name [, ... ] ]
    DELETE
    TRUNCATE
```

## CREATE TYPE<a name="section547123013591"></a>

在当前数据库中定义一种新的数据类型。定义数据类型的用户将成为该数据类型的拥有者。类型只适用于行存表

```
CREATE TYPE name AS
    ( [ attribute_name data_type [ COLLATE collation ] [, ... ] ] )

CREATE TYPE name AS ENUM
    ( [ 'label' [, ... ] ] )

CREATE TYPE name (
    INPUT = input_function,
    OUTPUT = output_function
    [ , RECEIVE = receive_function ]
    [ , SEND = send_function ]
    [ , TYPMOD_IN = type_modifier_input_function ]
    [ , TYPMOD_OUT = type_modifier_output_function ]
    [ , ANALYZE = analyze_function ]
    [ , INTERNALLENGTH = { internallength | VARIABLE } ]
    [ , PASSEDBYVALUE ]
    [ , ALIGNMENT = alignment ]
    [ , STORAGE = storage ]
    [ , LIKE = like_type ]
    [ , CATEGORY = category ]
    [ , PREFERRED = preferred ]
    [ , DEFAULT = default ]
    [ , ELEMENT = element ]
    [ , DELIMITER = delimiter ]
    [ , COLLATABLE = collatable ]
)

CREATE TYPE name
```

## CREATE USER<a name="section18117941135913"></a>

创建一个用户。

```
CREATE USER user_name [ [ WITH ] option [ ... ] ] [ ENCRYPTED | UNENCRYPTED ] { PASSWORD | IDENTIFIED BY } { 'password' [ EXPIRED ] | DISABLE };

where option can be:
{SYSADMIN | NOSYSADMIN}
    | {MONADMIN | NOMONADMIN}
    | {OPRADMIN | NOOPRADMIN}
    | {POLADMIN | NOPOLADMIN}
    | {AUDITADMIN | NOAUDITADMIN}
    | {CREATEDB | NOCREATEDB}
    | {USEFT | NOUSEFT}
    | {CREATEROLE | NOCREATEROLE}
    | {INHERIT | NOINHERIT}
    | {LOGIN | NOLOGIN}
    | {REPLICATION | NOREPLICATION}
    | {INDEPENDENT | NOINDEPENDENT}
    | {VCADMIN | NOVCADMIN}
    | {PERSISTENCE | NOPERSISTENCE}
    | CONNECTION LIMIT connlimit
    | VALID BEGIN 'timestamp'
    | VALID UNTIL 'timestamp'
    | RESOURCE POOL 'respool'
    | USER GROUP 'groupuser'
    | PERM SPACE 'spacelimit'
    | TEMP SPACE 'tmpspacelimit'
    | SPILL SPACE 'spillspacelimit'
    | NODE GROUP logic_cluster_name
    | IN ROLE role_name [, ...]
    | IN GROUP role_name [, ...]
    | ROLE role_name [, ...]
    | ADMIN role_name [, ...]
    | USER role_name [, ...]
    | SYSID uid
    | DEFAULT TABLESPACE tablespace_name
    | PROFILE DEFAULT
    | PROFILE profile_name
    | PGUSER
```

## CREATE VIEW<a name="section117221748175917"></a>

创建一个视图。

```
CREATE [ OR REPLACE ] [ TEMP | TEMPORARY ] VIEW view_name [ ( column_name [, ...] ) ]
    [ WITH ( {view_option_name [= view_option_value]} [, ... ] ) ]
    AS query;
```

## CREATE WEAK PASSWORD DICTIONARY<a name="section14319881017"></a>

向gs\_global\_config表中插入一个或者多个弱口令。

```
CREATE WEAK PASSWORD DICTIONARY
     [WITH VALUES] ( {'weak_password'} [, ...] );
```

## CURSOR<a name="section129431938505"></a>

定义一个游标，用于在一个大的查询里面检索少数几行数据。

```
CURSOR cursor_name
    [ BINARY ] [ INSENSITIVE ] [ [ NO ] SCROLL ]
    FOR query ;
```

## DEALLOCATE<a name="section172195813012"></a>

用于删除前面编写的预备语句。如果用户没有明确删除一个预备语句，那么它将在会话结束的时候被删除。

```
DEALLOCATE [ PREPARE ] { name | ALL };
```

## DECLARE<a name="section11430198016"></a>

用于删除前面编写的预备语句。如果用户没有明确删除一个预备语句，那么它将在会话结束的时候被删除。

```
1. declare a cursor:
DECLARE cursor_name [ BINARY ] [ NO SCROLL ]
    CURSOR [ { WITH | WITHOUT } HOLD ] FOR query ;

2. start an anonymous block:
[DECLARE [declare_statements]]
BEGIN
execution_statements
END;
/
```

## DELETE<a name="section1711123611118"></a>

从指定的表里删除满足WHERE子句的行。如果WHERE子句不存在，将删除表中所有行，结果只保留表结构。

```
[ WITH [ RECURSIVE ] with_query [, ...] ]
DELETE [/*+ plan_hint */] FROM [ ONLY ] table_name [ * ] [ [ AS ] alias ]
    [ USING using_list ]
    [ WHERE condition | WHERE CURRENT OF cursor_name ] [ LIMIT row_count ]
    [ RETURNING { * | { output_expr [ [ AS ] output_name ] } [, ...] } ];
```

## DO<a name="section13651745814"></a>

执行匿名代码块。

```
DO [ LANGUAGE lang_name ] code;
```

## DROP AUDIT POLICY<a name="section469674116215"></a>

删除一个审计策略。

```
DROP AUDIT POLICY [IF EXISTS] policy_name;
```

## DROP CLIENT MASTER KEY<a name="section344324714214"></a>

删除一个客户端加密主密钥\(CMK\)。

```
DROP CLIENT MASTER KEY [ IF EXISTS ] client_master_key_name [, ...];
```

## DROP COLUMN ENCRYPTION KEY<a name="section15946576216"></a>

删除一个列加密密钥\(cek\)。

```
DROP COLUMN ENCRYPTION KEY [ IF EXISTS ] client_column_key_name [, ...];
```

## DROP DATA SOURCE<a name="section960457935"></a>

删除一个Data Source对象。

```
DROP DATA SOURCE [IF EXISTS] src_name [CASCADE | RESTRICT];
```

## DROP DATABASE<a name="section37761863417"></a>

删除一个数据库。

```
DROP DATABASE [ IF EXISTS ] database_name;
```

## DROP DIRECTORY<a name="section204579261744"></a>

删除指定的directory对象。

```
DROP DIRECTORY [ IF EXISTS ] directory_name;
```

## DROP EVENT TRIGGER<a name="section335169343419"></a>

删除一个事件触发器。

```
DROP EVENT TRIGGER [ IF EXISTS ] name [ CASCADE | RESTRICT ];
```

## DROP EXTENSION<a name="section335916343419"></a>

删除一个扩展。

```
DROP EXTENSION [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ];
```

## DROP FOREIGN TABLE<a name="section6489134715419"></a>

删除指定的外表。

```
DROP FOREIGN TABLE [ IF EXISTS ]
table_name [, ...] [ CASCADE | RESTRICT ];
```

## DROP FUNCTION<a name="section1453919566416"></a>

删除一个已存在的函数。

```
DROP FUNCTION [ IF EXISTS ] function_name [ ( [ {[ argmode ] [ argname ] argtype} [, ...] ] ) [ CASCADE | RESTRICT ] ];
```

## DROP GROUP<a name="section14607173514513"></a>

删除用户组。

```
DROP GROUP [ IF EXISTS ] group_name [, ...];
```

## DROP INDEX<a name="section17349546053"></a>

删除索引。

```
DROP INDEX [ IF EXISTS ]
index_name [, ...] [ CASCADE | RESTRICT ];
```

## DROP MASKING POLICY<a name="section8393812617"></a>

删除脱敏策略。

```
DROP MASKING POLICY [IF EXISTS] policy_name;
```

## DROP MATERIALIZED VIEW<a name="section1750124610611"></a>

强制删除数据库中已有的物化视图。

```
DROP MATERIALIZED VIEW [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ]
```

## DROP MODEL<a name="section13657705719"></a>

删除一个已训练完成保存的模型对象。

```
DROP MODEL model_name;
```

## DROP OPERATOR<a name="section363922132210"></a>

openGauss暂不支持。

```
DROP OPERATOR [ IF EXISTS ] name ( { left_type | NONE } , { right_type | NONE } ) [ CASCADE | RESTRICT ]
```

## DROP OWNED<a name="section1281654572214"></a>

删除一个数据库角色所拥有的数据库对象。

```
DROP OWNED BY name [, ...] [ CASCADE | RESTRICT ];
```

## DROP PACKAGE<a name="section5712141519232"></a>

删除已存在的PACKAGE或者PACKAGE BODY。

```
DROP PACKAGE [ IF EXISTS ] package_name;
```

## DROP PROCEDURE<a name="section148454545239"></a>

删除已存在的存储过程。

```
DROP PROCEDURE [ IF EXISTS ] procedure_name;
```

## DROP RESOURCE LABEL<a name="section176185813381"></a>

删除资源标签。

```
DROP RESOURCE LABEL [ IF EXISTS ] policy_name[, ... ];
```

## DROP RESOURCE POOL<a name="section5950171973912"></a>

删除一个资源池。

```
DROP RESOURCE POOL [ IF EXISTS ] pool_name;
```

## DROP ROLE<a name="section8554143411395"></a>

删除指定的角色。

```
DROP ROLE [ IF EXISTS ] role_name [, ...];
```

## DROP ROW LEVEL SECURITY POLICY<a name="section212945163912"></a>

删除表上某个行访问控制策略。

```
DROP [ ROW LEVEL SECURITY ] POLICY [ IF EXISTS ] policy_name ON table_name [ CASCADE | RESTRICT ]
```

## DROP SCHEMA<a name="section7803955103910"></a>

从数据库中删除模式。

```
DROP SCHEMA [ IF EXISTS ] schema_name [, ...] [ CASCADE | RESTRICT ];
```

## DROP SEQUENCE<a name="section85898511400"></a>

从当前数据库里删除序列。

```
DROP SEQUENCE [ IF EXISTS ] {[schema.]sequence_name} [, ...] [ CASCADE | RESTRICT ];
```

## DROP SERVER<a name="section169951919194016"></a>

删除现有的一个数据服务器。

```
DROP SERVER [ IF EXISTS ] server_name [ { CASCADE | RESTRICT } ] ;
```

## DROP SYNONYM<a name="section133361130154020"></a>

删除指定的SYNONYM对象。

```
DROP SYNONYM [ IF EXISTS ] synonym_name [ CASCADE | RESTRICT ];
```

## DROP TABLE<a name="section1271573964016"></a>

删除指定的表。

```
DROP TABLE [ IF EXISTS ]
{[schema.]table_name} [, ...] [ CASCADE | RESTRICT ];
```

## DROP TABLESPACE<a name="section464334811404"></a>

删除一个表空间。

```
DROP TABLESPACE [ IF EXISTS ] tablespace_name;
```

## DROP TEXT SEARCH CONFIGURATION<a name="section8100525184116"></a>

删除已有文本搜索配置。

```
DROP TEXT SEARCH CONFIGURATION [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## DROP TEXT SEARCH DICTIONARY<a name="section16205191710413"></a>

删除全文检索词典。

```
DROP TEXT SEARCH DICTIONARY [ IF EXISTS ] name [ CASCADE | RESTRICT ];
```

## DROP TRIGGER<a name="section1644120455413"></a>

删除触发器。

```
DROP TRIGGER [ IF EXISTS ] name ON table_name [ CASCADE | RESTRICT ]
```

## DROP TYPE<a name="section560775919414"></a>

删除一个用户定义的数据类型。

```
DROP TYPE [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ]
```

## DROP USER<a name="section1023171120423"></a>

删除用户，同时会删除同名的schema。

```
DROP USER [ IF EXISTS ] user_name [, ...] [ CASCADE | RESTRICT ];
```

## DROP VIEW<a name="section75261528114216"></a>

数据库中强制删除已有的视图。

```
DROP VIEW [ IF EXISTS ] view_name [, ...] [ CASCADE | RESTRICT ];
```

## DROP WEAK PASSWORD DICTIONARY<a name="section410793920425"></a>

清空gs\_global\_config中的所有弱口令。

```
DROP WEAK PASSWORD DICTIONARY;
```

## END<a name="section106867054310"></a>

END可完成提交事务的功能，即提交事务的所有操作。

```
END [ WORK | TRANSACTION ]
```

## EXECUTE<a name="section145975115437"></a>

执行一个前面准备好的预备语句。因为一个预备语句只在会话的生命期里存在，那么预备语句必须是在当前会话的前些时候用PREPARE语句创建的。

```
EXECUTE name [ ( parameter [, ...] ) ];
```

## EXECUTE DIRECT<a name="section154651029104316"></a>

在指定的节点上执行SQL语句。一般情况下，SQL语句的执行是由集群负载自动分配到合适的节点上，execute direct主要用于数据库维护和测试。

```
EXPLAIN [ (  option  [, ...] )  ] statement;
EXPLAIN  { [  { ANALYZE  | ANALYSE  }  ] [ VERBOSE  ]  | PERFORMANCE  } statement;

where option can be:
ANALYZE [ boolean ] |
    ANALYSE [ boolean ] |
    VERBOSE [ boolean ] |
    COSTS [ boolean ] |
    CPU [ boolean ] |
    DETAIL [ boolean ] |
    NODES [ boolean ] |
    NUM_NODES [ boolean ] |
    BUFFERS [ boolean ] |
    TIMING [ boolean ] |
    PLAN [ boolean ] |
    FORMAT { TEXT | XML | JSON | YAML }

openGauss=# \h EXECUTE DIRECT
Command:     EXECUTE DIRECT
Description: launch queries directly to dedicated nodes
Syntax:
EXECUTE DIRECT ON ( nodename [, ... ] ) query;
EXECUTE DIRECT ON { COORDINATORS | DATANODES | ALL } query;
```

## EXPLAIN<a name="section1771414383436"></a>

显示SQL语句的执行计划。

```
EXPLAIN [ (  option  [, ...] )  ] statement;
EXPLAIN  { [  { ANALYZE  | ANALYSE  }  ] [ VERBOSE  ]  | PERFORMANCE  } statement;

where option can be:
ANALYZE [ boolean ] |
    ANALYSE [ boolean ] |
    VERBOSE [ boolean ] |
    COSTS [ boolean ] |
    CPU [ boolean ] |
    DETAIL [ boolean ] |
    NODES [ boolean ] |
    NUM_NODES [ boolean ] |
    BUFFERS [ boolean ] |
    TIMING [ boolean ] |
    PLAN [ boolean ] |
    FORMAT { TEXT | XML | JSON | YAML }
```

## FETCH<a name="section126613474439"></a>

FETCH通过已创建的游标来检索数据。

```
FETCH [ direction { FROM | IN } ] cursor_name;

where direction can be:
NEXT
   | PRIOR
   | FIRST
   | LAST
   | ABSOLUTE count
   | RELATIVE count
   | count
   | ALL
   | FORWARD
   | FORWARD count
   | FORWARD ALL
   | BACKWARD
   | BACKWARD count
   | BACKWARD ALL
```

## GRANT<a name="section1457945194316"></a>

对角色和用户进行授权操作。

```
GRANT { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES |
    ALTER | DROP | COMMENT | INDEX | VACUUM } [, ...] | ALL [ PRIVILEGES ] }
    ON { [ TABLE ] table_name [, ...]
         | ALL TABLES IN SCHEMA schema_name [, ...] }
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
GRANT { {{ SELECT | INSERT | UPDATE | REFERENCES | COMMENT } ( column_name [, ...] )}
    [, ...] | ALL [ PRIVILEGES ] ( column_name [, ...] ) }
    ON [ TABLE ] table_name [, ...]
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
GRANT { { SELECT | UPDATE | USAGE | ALTER | DROP | COMMENT } [, ...]
    | ALL [ PRIVILEGES ] }
    ON { [ SEQUENCE ] sequence_name [, ...]
    | ALL SEQUENCES IN SCHEMA schema_name [, ...] }
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
GRANT { { CREATE | CONNECT | TEMPORARY | TEMP | ALTER | DROP | COMMENT }
    [, ...] | ALL [ PRIVILEGES ] }
    ON DATABASE database_name [, ...]
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
GRANT { USAGE | ALL [ PRIVILEGES ] }
    ON DOMAIN domain_name [, ...]
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
GRANT { { USAGE | DROP } [, ...] | ALL [ PRIVILEGES ] }
    ON CLIENT_MASTER_KEY client_master_key
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
GRANT { { USAGE | DROP } [, ...] | ALL [ PRIVILEGES ] }
    ON COLUMN_ENCRYPTION_KEY column_encryption_key
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
GRANT { USAGE | ALL [ PRIVILEGES ] }
    ON FOREIGN DATA WRAPPER fdw_name [, ...]
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
GRANT { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
    ON FOREIGN SERVER server_name [, ...]
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
GRANT { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
    ON { FUNCTION {function_name ( [ {[ argmode ] [ arg_name ] arg_type} [, ...] ] )} [, ...]
         | ALL FUNCTIONS IN SCHEMA schema_name [, ...] }
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
GRANT { USAGE | ALL [ PRIVILEGES ] }
    ON LANGUAGE lang_name [, ...]
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
GRANT { { CREATE | USAGE | COMPUTE | ALTER | DROP } [, ...] | ALL [ PRIVILEGES ] }
    ON NODE GROUP group_name [, ...]
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
GRANT { { SELECT | UPDATE } [, ...] | ALL [ PRIVILEGES ] }
    ON LARGE OBJECT loid [, ...]
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
GRANT { { CREATE | USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
    ON SCHEMA schema_name [, ...]
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
GRANT { { CREATE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
    ON TABLESPACE tablespace_name [, ...]
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
GRANT { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
    ON TYPE type_name [, ...]
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
GRANT { USAGE | ALL [PRIVILEGES] }
    ON DATA SOURCE src_name [, ...]
    TO { [GROUP] role_name | PUBLIC } [, ...]
    [WITH GRANT OPTION];
GRANT { { READ | WRITE } [, ...] | ALL [PRIVILEGES] }
    ON DIRECTORY directory_name [, ...]
    TO { [GROUP] role_name | PUBLIC } [, ...]
    [WITH GRANT OPTION];
GRANT { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
    ON PACKAGE package_name [, ...]
    TO { [ GROUP ] role_name | PUBLIC } [, ...]
    [ WITH GRANT OPTION ];
GRANT role_name [, ...]
   TO role_name [, ...]
   [ WITH ADMIN OPTION ];
GRANT ALL { PRIVILEGES | PRIVILEGE }
   TO role_name;
```

## INSERT<a name="section6611175574317"></a>

向表中添加一行或多行数据。

```
[ WITH [ RECURSIVE ] with_query [, ...] ]
INSERT [/*+ plan_hint */] INTO table_name [ ( column_name [, ...] ) ]
    { DEFAULT VALUES | VALUES {( { expression | DEFAULT } [, ...] ) }[, ...] | query }
    [ ON DUPLICATE KEY UPDATE { NOTHING | { column_name = { expression | DEFAULT } } [, ...] } ]
    [ RETURNING {* | {output_expression [ [ AS ] output_name ] }[, ...]} ];
```

## LOCK<a name="section1145414312448"></a>

LOCK TABLE获取表级锁。

```
LOCK [ TABLE ] {[ ONLY ] name [, ...]| {name [ * ]} [, ...]}
    [ IN {ACCESS SHARE | ROW SHARE | ROW EXCLUSIVE | SHARE UPDATE EXCLUSIVE | SHARE | SHARE ROW EXCLUSIVE | EXCLUSIVE | ACCESS EXCLUSIVE} MODE ]
    [ NOWAIT ];
```

## MERGE INTO<a name="section16961174111586"></a>

将目标表和源表中数据针对关联条件进行匹配，若关联条件匹配时对目标表进行UPDATE，无法匹配时对目标表执行INSERT。此语法可以很方便地用来合并执行UPDATE和INSERT，避免多次执行。

```
MERGE [/*+ plan_hint */] INTO table_name [ [ AS ] alias ]
USING { { table_name | view_name } | subquery } [ [ AS ] alias ]
ON ( condition )
[
  WHEN MATCHED THEN
  UPDATE SET { column_name = { expression | DEFAULT } |
          ( column_name [, ...] ) = ( { expression | DEFAULT } [, ...] ) } [, ...]
  [ WHERE condition ]
]
[
  WHEN NOT MATCHED THEN
  INSERT { DEFAULT VALUES |
  [ ( column_name [, ...] ) ] VALUES ( { expression | DEFAULT } [, ...] ) [, ...] [ WHERE condition ] }
];
```

## MOVE<a name="section2750104813581"></a>

MOVE在不检索数据的情况下重新定位一个游标。MOVE的作用类似于FETCH命令，但只是重定位游标而不返回行。

```
MOVE [ direction [ FROM | IN ] ] cursor_name;

where direction can be:
NEXT
   | PRIOR
   | FIRST
   | LAST
   | ABSOLUTE count
   | RELATIVE count
   | count
   | ALL
   | FORWARD
   | FORWARD count
   | FORWARD ALL
   | BACKWARD
   | BACKWARD count
   | BACKWARD ALL
```

## PREPARE<a name="section10381175665815"></a>

创建一个预备语句。

```
PREPARE name [ ( data_type [, ...] ) ] AS statement;
```

## PREPARE TRANSACTION<a name="section711602195920"></a>

为当前事务做两阶段提交的准备。

```
PREPARE TRANSACTION transaction_id;
```

## REASSIGN OWNED<a name="section12455101219013"></a>

修改数据库对象的属主。

```
REASSIGN OWNED BY old_role [, ...] TO new_role;
```

## REFRESH MATERIALIZED VIEW<a name="section780019119"></a>

会以全量刷新的方式对物化视图进行刷新。

```
REFRESH [ INCREMENTAL ] MATERIALIZED VIEW name
```

## REINDEX<a name="section1513619818"></a>

为表中的数据重建索引。

```
REINDEX { INDEX | [INTERNAL] TABLE | DATABASE | SYSTEM } name [ FORCE ];
REINDEX  { INDEX | [INTERNAL] TABLE  } name
    PARTITION partition_name [ FORCE  ];
```

## RESET<a name="section35251025311"></a>

将指定的运行时参数恢复为缺省值。这些参数的缺省值是指postgresql.conf配置文件中所描述的参数缺省值。

```
RESET {configuration_parameter | CURRENT_SCHEMA | TIME ZONE | TRANSACTION ISOLATION LEVEL | SESSION AUTHORIZATION | ALL };
```

## REVOKE<a name="section164535315116"></a>

用于撤销一个或多个角色的权限。

```
REVOKE [ GRANT OPTION FOR ]
    { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES |
    ALTER | DROP | COMMENT | INDEX | VACUUM } [, ...] | ALL [ PRIVILEGES ] }
    ON { [ TABLE ] table_name [, ...]
         | ALL TABLES IN SCHEMA schema_name [, ...] }
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ GRANT OPTION FOR ]
    { {{ SELECT | INSERT | UPDATE | REFERENCES | COMMENT } ( column_name [, ...] )}
    [, ...] | ALL [ PRIVILEGES ] ( column_name [, ...] ) }
    ON [ TABLE ] table_name [, ...]
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ GRANT OPTION FOR ]
    { { SELECT | UPDATE | ALTER | DROP | COMMENT } [, ...]
    | ALL [ PRIVILEGES ] }
    ON { [ SEQUENCE ] sequence_name [, ...]
    | ALL SEQUENCES IN SCHEMA schema_name [, ...] }
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ GRANT OPTION FOR ]
    { { CREATE | CONNECT | TEMPORARY | TEMP | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
    ON DATABASE database_name [, ...]
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ GRANT OPTION FOR ]
    { USAGE | ALL [ PRIVILEGES ] }
    ON DOMAIN domain_name [, ...]
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ GRANT OPTION FOR ]
    { { USAGE | DROP } [, ...] | ALL [PRIVILEGES] }
    ON CLIENT_MASTER_KEYS client_master_keys_name [, ...]
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ GRANT OPTION FOR ]
    { { USAGE | DROP } [, ...] | ALL [PRIVILEGES]}
    ON COLUMN_ENCRYPTION_KEYS column_encryption_keys_name [, ...]
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ GRANT OPTION FOR ]
    { { READ | WRITE } [, ...] | ALL [ PRIVILEGES ] }
    ON DIRECTORY directory_name [, ...]
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ GRANT OPTION FOR ]
    { USAGE | ALL [ PRIVILEGES ] }
    ON FOREIGN DATA WRAPPER fdw_name [, ...]
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ GRANT OPTION FOR ]
    { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
    ON FOREIGN SERVER server_name [, ...]
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ GRANT OPTION FOR ]
    { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
    ON { FUNCTION {function_name ( [ {[ argmode ] [ arg_name ] arg_type} [, ...] ] )} [, ...]
         | ALL FUNCTIONS IN SCHEMA schema_name [, ...] }
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ GRANT OPTION FOR ]
    { USAGE | ALL [ PRIVILEGES ] }
    ON LANGUAGE lang_name [, ...]
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ GRANT OPTION FOR ]
    { {CREATE | USAGE | COMPUTE | ALTER | DROP } [, ...] | ALL [ PRIVILEGES ] }
    ON NODE GROUP group_name [, ...]
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ GRANT OPTION FOR ]
    { { SELECT | UPDATE } [, ...] | ALL [ PRIVILEGES ] }
    ON LARGE OBJECT loid [, ...]
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ GRANT OPTION FOR ]
    { { CREATE | USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
    ON SCHEMA schema_name [, ...]
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ GRANT OPTION FOR ]
    { { CREATE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
    ON TABLESPACE tablespace_name [, ...]
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ GRANT OPTION FOR ]
    { { USAGE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
    ON TYPE type_name [, ...]
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ GRANT OPTION FOR ]
    { USAGE | ALL [ PRIVILEGES ] }
    ON DATA SOURCE src_name [, ...]
    FROM { [GROUP] role_name | PUBLIC } [, ...];
REVOKE [ GRANT OPTION FOR ]
    { { READ | WRITE } [, ...] | ALL [ PRIVILEGES ] }
    ON DIRECTORY directory_name [, ...]
    FROM { [GROUP] role_name | PUBLIC } [, ...];
REVOKE [ GRANT OPTION FOR ]
    { { EXECUTE | ALTER | DROP | COMMENT } [, ...] | ALL [ PRIVILEGES ] }
    ON PACKAGE package_name [, ...]
    FROM { [ GROUP ] role_name | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ];
REVOKE [ ADMIN OPTION FOR ]
    role_name [, ...] FROM role_name [, ...]
    [ CASCADE | RESTRICT ];
REVOKE ALL { PRIVILEGES | PRIVILEGE } FROM role_name;
```

## ROLLBACK<a name="section172815377119"></a>

回滚当前事务并取消当前事务中的所有更新。

```
ROLLBACK [ WORK | TRANSACTION ];
```

## ROLLBACK PREPARED<a name="section859555317113"></a>

为当前事务做两阶段提交的准备。

```
ROLLBACK PREPARED transaction_id;
```

## SAVEPOINT<a name="section2040475015211"></a>

用于在当前事务里建立一个新的保存点。

```
SAVEPOINT savepoint_name;
```

## SELECT<a name="section1682174435"></a>

SELECT用于从表或视图中取出数据。

```
[ WITH [ RECURSIVE ] with_query [, ...] ]
SELECT [/*+ plan_hint */] [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
    { * | {expression [ [ AS ] output_name ]} [, ...] }
    [ FROM from_item [, ...] ]
    [ WHERE condition ]
    [ GROUP BY grouping_element [, ...] ]
    [ HAVING condition [, ...] ]
    [ WINDOW {window_name AS ( window_definition )} [, ...] ]
    [ { UNION | INTERSECT | EXCEPT | MINUS } [ ALL | DISTINCT ] select ]
    [ ORDER BY {expression [ [ ASC | DESC | USING operator ] | nlssort_expression_clause ] [ NULLS { FIRST | LAST } ]} [, ...] ]
    [ LIMIT { [offset,] count | ALL } ]
    [ OFFSET start [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ count ] { ROW | ROWS } ONLY ]
    [ {FOR { UPDATE | SHARE } [ OF table_name [, ...] ] [ NOWAIT ]} [...] ];
TABLE { ONLY {(table_name)| table_name} | table_name [ * ]};

where from_item can be:
[ ONLY ] table_name [ * ] [ partition_clause ] [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
[ TABLESAMPLE sampling_method ( argument [, ...] ) [ REPEATABLE ( seed ) ] ]
|( select ) [ AS ] alias [ ( column_alias [, ...] ) ]
|with_query_name [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
|function_name ( [ argument [, ...] ] ) [ AS ] alias [ ( column_alias [, ...] | column_definition [, ...] ) ]
|function_name ( [ argument [, ...] ] ) AS ( column_definition [, ...] )
|from_item [ NATURAL ] join_type from_item [ ON join_condition | USING ( join_column [, ...] ) ]
where grouping_element can be:
()
|expression
|( expression [, ...] )
|ROLLUP ( { expression | ( expression [, ...] ) } [, ...] )
|CUBE ( { expression | ( expression [, ...] ) } [, ...] )
|GROUPING SETS ( grouping_element [, ...] )
where with_query can be:
with_query_name [ ( column_name [, ...] ) ] AS ( {select | values | insert | update | delete} )
where partition_clause can be:
PARTITION { ( partition_name ) | FOR (  partition_value [, ...] ) }
where nlssort_expression_clause can be:
NLSSORT ( column_name, ' NLS_SORT = { SCHINESE_PINYIN_M | generic_m_ci } ' )
```

## SELECT INTO<a name="section1292562511318"></a>

SELECT INTO用于根据查询结果创建一个新表，并且将查询到的数据插入到新表中。

```
[ WITH [ RECURSIVE ] with_query [, ...] ]
SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
    { * | {expression [ [ AS ] output_name ]} [, ...] }
    INTO [ UNLOGGED ] [ TABLE ] new_table
    [ FROM from_item [, ...] ]
    [ WHERE condition ]
    [ GROUP BY expression [, ...] ]
    [ HAVING condition [, ...] ]
    [ WINDOW {window_name AS ( window_definition )} [, ...] ]
    [ { UNION | INTERSECT | EXCEPT | MINUS } [ ALL | DISTINCT ] select ]
    [ ORDER BY {expression [ [ ASC | DESC | USING operator ] | nlssort_expression_clause ] [ NULLS { FIRST | LAST } ]} [, ...] ]
    [ LIMIT { count | ALL } ]
    [ OFFSET start [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ count ] { ROW | ROWS } ONLY ]
    [ {FOR { UPDATE | SHARE } [ OF table_name [, ...] ] [ NOWAIT ]} [...] ];
```

## SET<a name="section3442250692"></a>

用于修改运行时配置参数。

```
SET [ LOCAL | SESSION ]
    { {config_parameter { { TO | = } { value | DEFAULT } | FROM CURRENT }}};
SET [ SESSION | LOCAL ] TIME ZONE { timezone | LOCAL | DEFAULT };
SET [ SESSION | LOCAL ] NAMES encoding_name;
SET [ SESSION | LOCAL ]
    {CURRENT_SCHEMA { TO | = } { schema | DEFAULT }
    | SCHEMA 'schema'};
SET [ SESSION | LOCAL ] XML OPTION { DOCUMENT | CONTENT };
```

## SET CONSTRAINTS<a name="section7821154016920"></a>

设置当前事务检查行为的约束条件。

```
SET CONSTRAINTS { ALL | name [, ...] } { DEFERRED | IMMEDIATE };
```

## SET ROLE<a name="section850115316911"></a>

设置当前会话的当前用户标识符。

```
SET [ SESSION | LOCAL ] ROLE role_name PASSWORD 'password';
RESET ROLE;
```

## SET SESSION AUTHORIZATION<a name="section14862845482"></a>

把当前会话里的会话用户标识和当前用户标识都设置为指定的用户。

```
SET [ SESSION | LOCAL ] SESSION AUTHORIZATION role_name PASSWORD 'password';
{SET [ SESSION | LOCAL ] SESSION AUTHORIZATION DEFAULT
   | RESET SESSION AUTHORIZATION};
```

## SET TRANSACTION<a name="section158781191977"></a>

SET CONSTRAINTS设置当前事务检查行为的约束条件。

```
{SET [ LOCAL ] TRANSACTION|SET SESSION CHARACTERISTICS AS TRANSACTION}
  { ISOLATION LEVEL { READ COMMITTED | READ UNCOMMITTED }
  | { READ WRITE | READ ONLY | SERIALIZABLE | REPEATABLE READ }
  } [, ...]
SET TRANSACTION SNAPSHOT snapshot_id;
```

## SHOW<a name="section19354335613"></a>

SHOW将显示当前运行时参数的数值。

```
SHOW { configuration_parameter | CURRENT_SCHEMA | TIME ZONE | TRANSACTION ISOLATION LEVEL | SESSION AUTHORIZATION | ALL };
```

## START TRANSACTION<a name="section137751758658"></a>

通过START TRANSACTION启动事务。如果声明了隔离级别、读写模式，那么新事务就使用这些特性，类似执行了SET TRANSACTION。

```
START TRANSACTION
   [ { ISOLATION LEVEL { READ COMMITTED | READ UNCOMMITTED }
   | { READ WRITE | READ ONLY | SERIALIZABLE | REPEATABLE READ }
   } [, ...] ];
```

## TRUNCATE<a name="section77009509411"></a>

清理表数据，TRUNCATE快速地从表中删除所有行。

```
TRUNCATE [ TABLE ] [ ONLY ] {table_name [ * ]} [, ... ]
    [ CONTINUE IDENTITY ] [ CASCADE | RESTRICT ];
ALTER TABLE [ IF EXISTS  ] { [ ONLY  ] table_name  | table_name *  | ONLY ( table_name )  }
    TRUNCATE PARTITION { partition_name  | FOR (  partition_value  [, ...] )  } ;
```

## UPDATE<a name="section368033917415"></a>

更新表中的数据。UPDATE修改满足条件的所有行中指定的字段值，WHERE子句声明条件，SET子句指定的字段会被修改，没有出现的字段则保持它们的原值。

```
UPDATE [/*+ plan_hint */] [ ONLY ] table_name [ * ] [ [ AS ] alias ]
    SET {column_name = { expression | DEFAULT } |
          ( column_name [, ...] ) = {( { expression | DEFAULT } [, ...] ) |sub_query }
          }[, ...]
    [ FROM from_list] [ WHERE condition ]
    [ RETURNING {* | {output_expression [ [ AS ] output_name ]} [, ...] }];
```

## VACUUM<a name="section52478381533"></a>

VACUUM回收表或B-Tree索引中已经删除的行所占据的存储空间。在一般的数据库操作里，那些已经DELETE的行并没有从它们所属的表中物理删除；在完成VACUUM之前它们仍然存在。因此有必要周期地运行VACUUM，特别是在经常更新的表上。

```
VACUUM [ ( { FULL | FREEZE | VERBOSE | {ANALYZE | ANALYSE }} [,...] ) ]
    [ table_name [ (column_name [, ...] ) ] ] [ PARTITION ( partition_name ) ];
VACUUM [ FULL [ COMPACT ] ] [ FREEZE ] [ VERBOSE ] [ table_name ] [ PARTITION ( partition_name ) ];
VACUUM [ FULL ] [ FREEZE ] [ VERBOSE ] { ANALYZE | ANALYSE } [ VERBOSE ]
    [ table_name [ (column_name [, ...] ) ] ] [ PARTITION ( partition_name ) ];
VACUUM DELTAMERGE [ table_name ];
VACUUM HDFSDIRECTORY [ table_name ];
```

## VALUES<a name="section8236182919328"></a>

根据给定的值表达式计算一个或一组行的值。它通常用于在一个较大的命令内生成一个“常数表”。

```
VALUES {( expression [, ...] )} [, ...]
    [ ORDER BY {sort_expression [ ASC | DESC | USING operator ]} [, ...] ]
    [ LIMIT { count | ALL } ]
    [ OFFSET start [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ count ] { ROW | ROWS } ONLY ];
```

