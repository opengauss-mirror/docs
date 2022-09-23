# Appendix: SQL Syntax<a name="EN-US_TOPIC_0000001210461834"></a>

## ABORT<a name="section49831237711"></a>

Exits the current transaction.

```
ABORT [ WORK | TRANSACTION ] ;
```

## ALTER AUDIT POLICY<a name="section68951620202211"></a>

Modifies the unified audit policy.

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

Modifies the attributes and content of the data source.

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

Modifies a database, including its name, owner, connection limitation, and object isolation.

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

Sets the permissions that will be applied to objects created in the future. \(It does not affect permissions granted to existing objects.\)

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

Modifies a directory.

```
CREATE [OR REPLACE] DIRECTORY directory_name
AS 'path_name';
```

## ALTER EXTENSION<a name="section84611730152513"></a>

Modifies an extension.

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

Modifies a foreign table.

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

Modifies the attributes of a user-defined function.

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

Modifies the attributes of a user group.

```
ALTER GROUP group_name
    ADD USER user_name [, ... ];
ALTER GROUP group_name
    DROP USER user_name [, ... ];
ALTER GROUP group_name
   RENAME TO new_name;
```

## ALTER INDEX<a name="section173900340327"></a>

Modifies the definition of an existing index.

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

Modifies the definition of a large object. It is used to assign a new owner.

```
ALTER LARGE OBJECT large_object_oid
    OWNER TO new_owner;
```

## ALTER MASKING POLICY<a name="section158961352153214"></a>

Modifies a masking policy.

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

Modifies multiple auxiliary attributes of an existing materialized view.

```
ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name
    OWNER TO new_owner;
ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name
    RENAME [COLUMN] column_name to new_column_name;
ALTER MATERIALIZED VIEW [ IF EXISTS ] mv_name
    RENAME TO new_name;
```

## ALTER OPERATOR<a name="section10746838153314"></a>

Modifies the definition of an operator.

```
ALTER OPERATOR name ( { left_type | NONE } , { right_type | NONE } ) OWNER TO new_owner
ALTER OPERATOR name ( { left_type | NONE } , { right_type | NONE } ) SET SCHEMA new_schema
```

## ALTER RESOURCE LABEL<a name="section192962512357"></a>

Modifies a resource label.

```
ALTER RESOURCE LABEL label_name { ADD | REMOVE } label_item_list [, ... ];

where label_item_list can be:
resource_type(resource_path[, ... ])

where resource_type can be:
{ TABLE | COLUMN | SCHEMA | VIEW | FUNCTION }
```

## ALTER RESOURCE POOL<a name="section114211230103519"></a>

Modifies the Cgroup of a resource pool.

```
ALTER RESOURCE POOL pool_name
    WITH ({MEM_PERCENT=pct | CONTROL_GROUP="group_name" | ACTIVE_STATEMENTS=stmt | MAX_DOP = dop | MEMORY_LIMIT='memory_size' | io_limits=io_limits | io_priority='priority' | nodegroup='nodegroup_name' }[, ... ]);
```

## ALTER ROLE<a name="section37815346358"></a>

Modifies role attributes.

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

Modifies an existing row-level access control policy, including the policy name and the users and expressions affected by the policy.

```
ALTER [ ROW LEVEL SECURITY ] POLICY [ IF EXISTS ] policy_name ON table_name RENAME TO new_policy_name

ALTER [ ROW LEVEL SECURITY ] POLICY policy_name ON table_name
    [ TO { role_name | PUBLIC } [, ...] ]
    [ USING ( using_expression ) ]
```

## ALTER SCHEMA<a name="section03851045113518"></a>

Modifies schema attributes.

```
ALTER SCHEMA schema_name
    RENAME TO new_name;
ALTER SCHEMA schema_name
    OWNER TO new_owner;
ALTER SCHEMA schema_name {WITH | WITHOUT} BLOCKCHAIN;
```

## ALTER SEQUENCE<a name="section47281449163516"></a>

Modifies the parameters of an existing sequence.

```
ALTER SEQUENCE [ IF EXISTS ] name
    [ MAXVALUE maxvalue | NO MAXVALUE | NOMAXVALUE ]
    [ OWNED BY { table_name.column_name | NONE } ];
ALTER SEQUENCE [ IF EXISTS ] name OWNER TO new_owner;
```

## ALTER SERVER<a name="section1971154113517"></a>

Adds, modifies, or deletes the parameters of an existing server. You can query existing servers from the  **pg\_foreign\_server**  system catalog.

```
ALTER SERVER server_name [ VERSION 'new_version' ]
    [ OPTIONS ( {[ ADD | SET | DROP ] option ['value']} [, ... ] ) ];
ALTER SERVER server_name
    OWNER TO new_owner;
ALTER SERVER server_name
     RENAME TO new_name;
```

## ALTER SESSION<a name="section14141059143511"></a>

Defines or modifies the conditions or parameters that affect the current session. Modified session parameters are kept until the current session is disconnected.

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

Modifies the attributes of the  **SYNONYM**  object.

```
ALTER SYNONYM synonym_name
    OWNER TO new_owner;
```

## ALTER SYSTEM KILL SESSION<a name="section153614853616"></a>

Ends a session.

```
ALTER SYSTEM KILL SESSION 'session_sid, serial' [ IMMEDIATE ];
```

## ALTER SYSTEM SET<a name="section163798149369"></a>

Sets GUC parameters at the POSTMASTER, SIGHUP, and BACKEND levels. This command writes parameters into the configuration file. The time to take effect varies according to the level.

```
ALTER SYSTEM SET { GUC_name } TO { GUC_value };
```

## ALTER TABLE<a name="section6770937141711"></a>

Modifies tables, including modifying table definitions, renaming tables, renaming specified columns in tables, renaming table constraints, setting table schemas, enabling or disabling row-level security policies, and adding or updating multiple columns.

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

Modifies the attributes of a tablespace.

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

Modifies the definition of a text search configuration. You can modify its mappings from strings to dictionaries, change the configuration's name or owner, or modify the parameters.

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

Modifies the definition of a full-text search dictionary, including its parameters, name, owner, and schema.

```
ALTER TEXT SEARCH DICTIONARY name ( option = value | option [, ...] );
ALTER TEXT SEARCH DICTIONARY name RENAME TO new_name;
ALTER TEXT SEARCH DICTIONARY name OWNER TO new_owner;
ALTER TEXT SEARCH DICTIONARY name SET SCHEMA new_schema
```

## ALTER TRIGGER<a name="section73889822911"></a>

Renames a trigger.

```
ALTER TRIGGER name ON table_name RENAME TO new_name
```

## ALTER TYPE<a name="section138371414112916"></a>

Modifies the definition of a type.

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

Modifies the attributes of a database user.

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

Modifies the auxiliary attributes of a view.

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

Collects statistics about ordinary tables in a database, and stores the results in the  **PG\_STATISTIC**  system catalog. The execution plan generator uses these statistics to determine which one is the most effective execution plan.

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

Applies to a script that is infrequently executed or a one-off activity. It is executed in a session and is not stored.

```
[DECLARE [declare_statements]]
        BEGIN
        execution_staements
        END;
        /
```

## BEGIN<a name="section381716413317"></a>

Initiates an anonymous block or a single transaction.

```
start an anonymous block:
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

Calls defined functions and stored procedures.

```
CALL [schema.] func_name ( param_expr );
```

## CHECKPOINT<a name="section1364151611317"></a>

A checkpoint is a point in the transaction log sequence at which all data files have been updated to reflect the information in the log. All data files will be flushed to a disk.

```
CHECKPOINT
```

## CLEAN CONNECTION<a name="section236712023113"></a>

Clears database connections. You may use this statement to delete a specific user's connections to a specified database.

```
CLEAN CONNECTION
    TO { COORDINATOR ( nodename [, ... ] ) | NODE ( nodename [, ... ] ) | ALL [ CHECK ] [ FORCE ] }
    [ FOR DATABASE dbname ]
    [ TO USER username ];
```

## CLOSE<a name="section05801025193116"></a>

Frees the resources associated with an open cursor.

```
CLOSE { cursor_name | ALL };
```

## CLUSTER<a name="section10643113114311"></a>

Clusters a table based on an index.

```
CLUSTER [ VERBOSE ] table_name [ USING index_name ];
CLUSTER [ VERBOSE ] table_name PARTITION ( partition_name ) [ USING index_name ];
CLUSTER [ VERBOSE ];
```

## COMMENT<a name="section9114377311"></a>

Defines or changes the comment of an object.

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

Commits all operations of a transaction.

```
{ COMMIT | END } [ WORK | TRANSACTION ];
```

## COMMIT PREPARED<a name="section855864615317"></a>

Commits a prepared two-phase transaction.

```
COMMIT PREPARED transaction_id;
```

## COPY<a name="section19690125053116"></a>

Copies data between tables and files.

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

Creates a unified audit policy.

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

Creates a CMK object that can be used to encrypt a CEK object.

```
CREATE CLIENT MASTER KEY client_master_key_name
     [WITH] ( ['KEY_STORE' , 'KEY_PATH' , 'ALGORITHM'] );
```

## CREATE COLUMN ENCRYPTION KEY<a name="section928842315327"></a>

Creates a CEK that can be used to encrypt a specified column in a table.

```
CREATE COLUMN ENCRYPTION KEY column_encryption_key_name
     [WITH] [VALUES] ( ['CLIENT_MASTER_KEY' , 'ALGORITHM'] );
```

## CREATE DATA SOURCE<a name="section248572810322"></a>

Creates an external data source, which defines the information about the database that openGauss will connect to.

```
CREATE DATA SOURCE src_name
    [TYPE 'type_str']
    [VERSION {'version_str' | NULL}]
    [OPTIONS (optname 'optvalue' [, ...])];

Valid optname are:
    DSN, USERNAME, PASSWORD, ENCODING
```

## CREATE DATABASE<a name="section11813913316"></a>

Creates a database. By default, the new database will be created only by cloning the standard system database  **template0**.

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

Creates a directory. The directory defines an alias for a path in the server file system and is used to store data files used by users.

```
CREATE [OR REPLACE] DIRECTORY directory_name
AS 'path_name';
```

## CREATE EXTENSION<a name="section1371614218343"></a>

Installs an extension.

```
CREATE EXTENSION [ IF NOT EXISTS ] extension_name
    [ WITH ] [ SCHEMA schema_name ]
             [ VERSION version ]
             [ FROM old_version ];
```

## CREATE FOREIGN TABLE<a name="section423641063415"></a>

Creates a foreign table.

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

Creates a function.

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

Creates a user group.

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

Create an index on a specified table.

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

Defines a new procedural language. A standalone or centralized system does not support creating procedural languages.

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

Creates a masking policy.

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

Creates a complete-refresh materialized view that can be refreshed by using  **REFRESH MATERIALIZED VIEW**  to refresh the data in the materialized view.

```
CREATE [ INCREMENTAL ] MATERIALIZED VIEW table_name
    [ (column_name [, ...] ) ]
    [ TABLESPACE tablespace_name ]
    AS query
```

## CREATE MODEL<a name="section4576161463818"></a>

Trains a machine learning model and saves the model.

```
CREATE MODEL model_name USING algorithm_name
[FEATURES { {expression [ [ AS ] output_name ]} [, ...] }]
[TARGET { {expression [ [ AS ] output_name ]} [, ...] }]
FROM { table_name | select_query }
WITH hyperparameter_name = { hyperparameter_value | DEFAULT } [, ...] }
```

## CREATE OPERATOR<a name="section113477442380"></a>

Defines a new operator.

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

Creates a package.

```
CREATE [ OR REPLACE ] PACKAGE [ schema ] package_name
    [ invoker_rights_clause ] { IS | AS } item_list_1 END package_name;
```

## CREATE PROCEDURE<a name="section16473718113918"></a>

Creates a stored procedure.

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

Creates a resource label.

```
CREATE RESOURCE LABEL [ IF NOT EXISTS ] label_name ADD label_item_list[ , ... ];

where label_item_list can be:
resource_type(resource_path[, ... ])

where resource_type can be:
{ TABLE | COLUMN | SCHEMA | VIEW | FUNCTION }
```

## CREATE RESOURCE POOL<a name="section18585183983910"></a>

Creates a resource pool and specifies the Cgroup of the resource pool.

```
CREATE RESOURCE POOL pool_name
    [WITH ({MEM_PERCENT=pct | CONTROL_GROUP="group_name" | ACTIVE_STATEMENTS=stmt | MAX_DOP = dop | MEMORY_LIMIT='memory_size' | io_limits=io_limits | io_priority='priority' | nodegroup='nodegroup_name' | is_foreign = boolean }[, ... ])];
```

## CREATE ROLE<a name="section1244016494394"></a>

Creates a role.

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

Creates a row-level access control policy for a table.

```
CREATE [ ROW LEVEL SECURITY ] POLICY policy_name ON table_name
    [ AS { PERMISSIVE | RESTRICTIVE } ]
    [ FOR { ALL | SELECT | UPDATE | DELETE } ]
    [ TO { role_name | PUBLIC } [, ...] ]
    USING ( using_expression )
```

## CREATE SCHEMA<a name="section3453098405"></a>

Creates a schema.

```
CREATE SCHEMA schema_name
    [ AUTHORIZATION user_name ] [WITH BLOCKCHAIN] [ schema_element [ ... ] ];
```

## CREATE SEQUENCE<a name="section474181934010"></a>

Aadds a sequence to the current database. The owner of the sequence is the user who creates it.

```
CREATE SEQUENCE name [ INCREMENT [ BY ] increment ]
    [ MINVALUE minvalue | NO MINVALUE | NOMINVALUE] [ MAXVALUE maxvalue | NO MAXVALUE | NOMAXVALUE]
    [ START [ WITH ] start ] [ CACHE cache ] [ [ NO ] CYCLE | NOCYCLE]
    [ OWNED BY { table_name.column_name | NONE } ];
```

## CREATE SERVER<a name="section1395812274401"></a>

Defines a new foreign server.

```
CREATE SERVER server_name
    FOREIGN DATA WRAPPER fdw_name
    OPTIONS ( { option_name ' value ' } [, ...] ) ;
```

## CREATE SYNONYM<a name="section1645131174110"></a>

Creates a synonym object. A synonym is an alias of a database object and is used to record the mapping between database object names. You can use synonyms to access associated database objects.

```
CREATE [ OR REPLACE ] SYNONYM synonym_name
    FOR object_name;
```

## CREATE TABLE<a name="section18626122310418"></a>

Creates an empty table in the current database. The table will be owned by the creator.

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

Creates a table from the results of a query.

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

Creates a partitioned table. Partitioning refers to splitting what is logically one large table into smaller physical pieces based on specific schemes. The table based on the logic is called a partitioned table, and each physical piece is called a partition. A partitioned table is a logical table and does not store data. Data is stored in physical partitions.

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
        NOTICE: LIST/HASH partition is only available in CENTRALIZED mode!
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

Creates a tablespace in a database.

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

Creates a text search configuration. A text search configuration specifies a text search parser that can divide a string into tokens, plus dictionaries that can be used to determine which tokens are of interest for searching. 

```
CREATE TEXT SEARCH CONFIGURATION name (
    PARSER = parser_name |
    COPY = source_config
) [ WITH ( {configuration_option = value} [, ...] )];
```

## CREATE TEXT SEARCH DICTIONARY<a name="section15227139175911"></a>

Deletes a full-text retrieval dictionary.

```
CREATE TEXT SEARCH DICTIONARY name
     ( TEMPLATE = template_name | COPY = source_config
     [, option = value [, ...] ] );
```

## CREATE TRIGGER<a name="section435712265916"></a>

Creates a trigger. The trigger will be associated with the specified table or view, and will execute the specified functions under certain conditions.

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

Defines a new data type for use in the current database. The user who defines a type becomes its owner. Types are designed only for row-store tables.

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

Creates a user.

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

Creates a view.

```
CREATE [ OR REPLACE ] [ TEMP | TEMPORARY ] VIEW view_name [ ( column_name [, ...] ) ]
    [ WITH ( {view_option_name [= view_option_value]} [, ... ] ) ]
    AS query;
```

## CREATE WEAK PASSWORD DICTIONARY<a name="section14319881017"></a>

Inserts one or more weak passwords into the  **gs\_global\_config**  table.

```
CREATE WEAK PASSWORD DICTIONARY
     [WITH VALUES] ( {'weak_password'} [, ...] );
```

## CURSOR<a name="section129431938505"></a>

Defines a cursor to retrieve a small number of rows out of a large query.

```
CURSOR cursor_name
    [ BINARY ] [ INSENSITIVE ] [ [ NO ] SCROLL ]
    FOR query ;
```

## DEALLOCATE<a name="section172195813012"></a>

Deallocates a previously prepared statement. If you do not explicitly deallocate a prepared statement, it is deallocated when the session ends.

```
DEALLOCATE [ PREPARE ] { name | ALL };
```

## DECLARE<a name="section11430198016"></a>

Deallocates a previously prepared statement. If you do not explicitly deallocate a prepared statement, it is deallocated when the session ends.

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

Deletes rows that satisfy the WHERE clause from the specified table. If the WHERE clause is absent, it will delete all rows in the table. The result is a valid, but an empty table.

```
[ WITH [ RECURSIVE ] with_query [, ...] ]
DELETE [/*+ plan_hint */] FROM [ ONLY ] table_name [ * ] [ [ AS ] alias ]
    [ USING using_list ]
    [ WHERE condition | WHERE CURRENT OF cursor_name ] [ LIMIT row_count ]
    [ RETURNING { * | { output_expr [ [ AS ] output_name ] } [, ...] } ];
```

## DO<a name="section13651745814"></a>

Executes an anonymous code block.

```
DO [ LANGUAGE lang_name ] code;
```

## DROP AUDIT POLICY<a name="section469674116215"></a>

Deletes an audit policy.

```
DROP AUDIT POLICY [IF EXISTS] policy_name;
```

## DROP CLIENT MASTER KEY<a name="section344324714214"></a>

Deletes a CMK.

```
DROP CLIENT MASTER KEY [ IF EXISTS ] client_master_key_name [, ...];
```

## DROP COLUMN ENCRYPTION KEY<a name="section15946576216"></a>

Deletes a CEK.

```
DROP COLUMN ENCRYPTION KEY [ IF EXISTS ] client_column_key_name [, ...];
```

## DROP DATA SOURCE<a name="section960457935"></a>

Deletes a data source.

```
DROP DATA SOURCE [IF EXISTS] src_name [CASCADE | RESTRICT];
```

## DROP DATABASE<a name="section37761863417"></a>

Deletes a database.

```
DROP DATABASE [ IF EXISTS ] database_name;
```

## DROP DIRECTORY<a name="section204579261744"></a>

Deletes a directory.

```
DROP DIRECTORY [ IF EXISTS ] directory_name;
```

## DROP EXTENSION<a name="section335916343419"></a>

Deletes an extension.

```
DROP EXTENSION [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ];
```

## DROP FOREIGN TABLE<a name="section6489134715419"></a>

Deletes a foreign table.

```
DROP FOREIGN TABLE [ IF EXISTS ]
table_name [, ...] [ CASCADE | RESTRICT ];
```

## DROP FUNCTION<a name="section1453919566416"></a>

Deletes a function.

```
DROP FUNCTION [ IF EXISTS ] function_name [ ( [ {[ argmode ] [ argname ] argtype} [, ...] ] ) [ CASCADE | RESTRICT ] ];
```

## DROP GROUP<a name="section14607173514513"></a>

Deletes a user group.

```
DROP GROUP [ IF EXISTS ] group_name [, ...];
```

## DROP INDEX<a name="section17349546053"></a>

Deletes an index.

```
DROP INDEX [ IF EXISTS ]
index_name [, ...] [ CASCADE | RESTRICT ];
```

## DROP MASKING POLICY<a name="section8393812617"></a>

Deletes a masking policy.

```
DROP MASKING POLICY [IF EXISTS] policy_name;
```

## DROP MATERIALIZED VIEW<a name="section1750124610611"></a>

Forcibly deletes an existing materialized view from the database.

```
DROP MATERIALIZED VIEW [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ]
```

## DROP MODEL<a name="section13657705719"></a>

Deletes a model that has been trained and saved.

```
DROP MODEL model_name;
```

## DROP OPERATOR<a name="section363922132210"></a>

Not supported in openGauss currently.

```
DROP OPERATOR [ IF EXISTS ] name ( { left_type | NONE } , { right_type | NONE } ) [ CASCADE | RESTRICT ]
```

## DROP OWNED<a name="section1281654572214"></a>

Deletes the database objects owned by a database role.

```
DROP OWNED BY name [, ...] [ CASCADE | RESTRICT ];
```

## DROP PACKAGE<a name="section5712141519232"></a>

Deletes a package or package body.

```
DROP PACKAGE [ IF EXISTS ] package_name;
```

## DROP PROCEDURE<a name="section148454545239"></a>

Deletes a stored procedure.

```
DROP PROCEDURE [ IF EXISTS ] procedure_name;
```

## DROP RESOURCE LABEL<a name="section176185813381"></a>

Deletes a resource label.

```
DROP RESOURCE LABEL [ IF EXISTS ] policy_name[, ... ];
```

## DROP RESOURCE POOL<a name="section5950171973912"></a>

Deletes a resource pool.

```
DROP RESOURCE POOL [ IF EXISTS ] pool_name;
```

## DROP ROLE<a name="section8554143411395"></a>

Deletes a role.

```
DROP ROLE [ IF EXISTS ] role_name [, ...];
```

## DROP ROW LEVEL SECURITY POLICY<a name="section212945163912"></a>

Deletes a row-level access control policy from a table.

```
DROP [ ROW LEVEL SECURITY ] POLICY [ IF EXISTS ] policy_name ON table_name [ CASCADE | RESTRICT ]
```

## DROP SCHEMA<a name="section7803955103910"></a>

Deletes a schema from the current database.

```
DROP SCHEMA [ IF EXISTS ] schema_name [, ...] [ CASCADE | RESTRICT ];
```

## DROP SEQUENCE<a name="section85898511400"></a>

Deletes a sequence from the current database.

```
DROP SEQUENCE [ IF EXISTS ] {[schema.]sequence_name} [, ...] [ CASCADE | RESTRICT ];
```

## DROP SERVER<a name="section169951919194016"></a>

Deletes a data server.

```
DROP SERVER [ IF EXISTS ] server_name [ { CASCADE | RESTRICT } ] ;
```

## DROP SYNONYM<a name="section133361130154020"></a>

Deletes a synonym.

```
DROP SYNONYM [ IF EXISTS ] synonym_name [ CASCADE | RESTRICT ];
```

## DROP TABLE<a name="section1271573964016"></a>

Deletes a table.

```
DROP TABLE [ IF EXISTS ]
{[schema.]table_name} [, ...] [ CASCADE | RESTRICT ];
```

## DROP TABLESPACE<a name="section464334811404"></a>

Deletes a tablespace.

```
DROP TABLESPACE [ IF EXISTS ] tablespace_name;
```

## DROP TEXT SEARCH CONFIGURATION<a name="section8100525184116"></a>

Deletes a text search configuration.

```
DROP TEXT SEARCH CONFIGURATION [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## DROP TEXT SEARCH DICTIONARY<a name="section16205191710413"></a>

Deletes a full-text retrieval dictionary.

```
DROP TEXT SEARCH DICTIONARY [ IF EXISTS ] name [ CASCADE | RESTRICT ];
```

## DROP TRIGGER<a name="section1644120455413"></a>

Deletes a trigger.

```
DROP TRIGGER [ IF EXISTS ] name ON table_name [ CASCADE | RESTRICT ]
```

## DROP TYPE<a name="section560775919414"></a>

Deletes a user-defined data type.

```
DROP TYPE [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ]
```

## DROP USER<a name="section1023171120423"></a>

Deletes a user and the schema with the same name as the user.

```
DROP USER [ IF EXISTS ] user_name [, ...] [ CASCADE | RESTRICT ];
```

## DROP VIEW<a name="section75261528114216"></a>

Forcibly deletes a view from the database.

```
DROP VIEW [ IF EXISTS ] view_name [, ...] [ CASCADE | RESTRICT ];
```

## DROP WEAK PASSWORD DICTIONARY<a name="section410793920425"></a>

Clears all weak passwords in  **gs\_global\_config**.

```
DROP WEAK PASSWORD DICTIONARY;
```

## END<a name="section106867054310"></a>

Commits all operations of a transaction.

```
END [ WORK | TRANSACTION ]
```

## EXECUTE<a name="section145975115437"></a>

Executes a prepared statement. Because a prepared statement exists only in the lifetime of the session, the prepared statement must be created earlier in the current session by using the  **PREPARE**  statement.

```
EXECUTE name [ ( parameter [, ...] ) ];
```

## EXECUTE DIRECT<a name="section154651029104316"></a>

Executes an SQL statement on a specified node. Generally, the cluster automatically allocates an SQL statement to proper nodes.  **EXECUTE DIRECT**  is mainly used for database maintenance and testing.

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

Shows the execution plan of an SQL statement.

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

Retrieves rows using a previously created cursor.

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

Grants permissions to roles and users.

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

Inserts new rows into a table.

```
[ WITH [ RECURSIVE ] with_query [, ...] ]
INSERT [/*+ plan_hint */] INTO table_name [ ( column_name [, ...] ) ]
    { DEFAULT VALUES | VALUES {( { expression | DEFAULT } [, ...] ) }[, ...] | query }
    [ ON DUPLICATE KEY UPDATE { NOTHING | { column_name = { expression | DEFAULT } } [, ...] } ]
    [ RETURNING {* | {output_expression [ [ AS ] output_name ] }[, ...]} ];
```

## LOCK<a name="section1145414312448"></a>

Obtains a table-level lock.

```
LOCK [ TABLE ] {[ ONLY ] name [, ...]| {name [ * ]} [, ...]}
    [ IN {ACCESS SHARE | ROW SHARE | ROW EXCLUSIVE | SHARE UPDATE EXCLUSIVE | SHARE | SHARE ROW EXCLUSIVE | EXCLUSIVE | ACCESS EXCLUSIVE} MODE ]
    [ NOWAIT ];
```

## MERGE INTO<a name="section16961174111586"></a>

Conditionally matches data in a target table with that in a source table. If data matches,  **UPDATE**  is executed on the target table; if data does not match,  **INSERT**  is executed. You can use this syntax to run  **UPDATE**  and  **INSERT**  at a time for convenience

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

Repositions a cursor without retrieving any data.  **MOVE**  works exactly like the  **FETCH**  command, except it only positions the cursor and does not return rows.

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

Creates a prepared statement.

```
PREPARE name [ ( data_type [, ...] ) ] AS statement;
```

## PREPARE TRANSACTION<a name="section711602195920"></a>

Prepares the current transaction for two-phase commit.

```
PREPARE TRANSACTION transaction_id;
```

## REASSIGN OWNED<a name="section12455101219013"></a>

Changes the owner of the database object.

```
REASSIGN OWNED BY old_role [, ...] TO new_role;
```

## REFRESH MATERIALIZED VIEW<a name="section780019119"></a>

Refreshes a materialized view in complete refresh mode.

```
REFRESH [ INCREMENTAL ] MATERIALIZED VIEW name
```

## REINDEX<a name="section1513619818"></a>

Rebuilds an index using the data stored in the index's table, replacing the old copy of the index.

```
REINDEX { INDEX | [INTERNAL] TABLE | DATABASE | SYSTEM } name [ FORCE ];
REINDEX  { INDEX | [INTERNAL] TABLE  } name
    PARTITION partition_name [ FORCE  ];
```

## RESET<a name="section35251025311"></a>

Restores run-time parameters to their default values. The default values are defined in the  **postgresql.conf**  configuration file.

```
RESET {configuration_parameter | CURRENT_SCHEMA | TIME ZONE | TRANSACTION ISOLATION LEVEL | SESSION AUTHORIZATION | ALL };
```

## REVOKE<a name="section164535315116"></a>

Revokes permissions from one or more roles.

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

Rolls back the current transaction and backs out all updates in the transaction.

```
ROLLBACK [ WORK | TRANSACTION ];
```

## ROLLBACK PREPARED<a name="section859555317113"></a>

Prepares the current transaction for two-phase commit.

```
ROLLBACK PREPARED transaction_id;
```

## SAVEPOINT<a name="section2040475015211"></a>

Establishes a new savepoint within the current transaction.

```
SAVEPOINT savepoint_name;
```

## SELECT<a name="section1682174435"></a>

Retrieves data from a table or view.

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

Defines a new table based on a query result and inserts data obtained by query to the new table.

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

Modifies a run-time parameter.

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

Sets a constraint for checking the current transaction.

```
SET CONSTRAINTS { ALL | name [, ...] } { DEFERRED | IMMEDIATE };
```

## SET ROLE<a name="section850115316911"></a>

Sets the current user identifier of the current session.

```
SET [ SESSION | LOCAL ] ROLE role_name PASSWORD 'password';
RESET ROLE;
```

## SET SESSION AUTHORIZATION<a name="section14862845482"></a>

Sets the session user identifier and the current user identifier of the current SQL session to a specified user.

```
SET [ SESSION | LOCAL ] SESSION AUTHORIZATION role_name PASSWORD 'password';
{SET [ SESSION | LOCAL ] SESSION AUTHORIZATION DEFAULT
   | RESET SESSION AUTHORIZATION};
```

## SET TRANSACTION<a name="section158781191977"></a>

Sets constraints for checking the current transaction.

```
{SET [ LOCAL ] TRANSACTION|SET SESSION CHARACTERISTICS AS TRANSACTION}
  { ISOLATION LEVEL { READ COMMITTED | READ UNCOMMITTED }
  | { READ WRITE | READ ONLY | SERIALIZABLE | REPEATABLE READ }
  } [, ...]
SET TRANSACTION SNAPSHOT snapshot_id;
```

## SHOW<a name="section19354335613"></a>

Sows the current value of a run-time parameter.

```
SHOW { configuration_parameter | CURRENT_SCHEMA | TIME ZONE | TRANSACTION ISOLATION LEVEL | SESSION AUTHORIZATION | ALL };
```

## START TRANSACTION<a name="section137751758658"></a>

Starts a transaction. If the isolation level or read/write mode is specified, a new transaction will have those characteristics. You can also specify them using  **SET TRANSACTION**.

```
START TRANSACTION
   [ { ISOLATION LEVEL { READ COMMITTED | READ UNCOMMITTED }
   | { READ WRITE | READ ONLY | SERIALIZABLE | REPEATABLE READ }
   } [, ...] ];
```

## TRUNCATE<a name="section77009509411"></a>

Quickly removes all rows from a database table.

```
TRUNCATE [ TABLE ] [ ONLY ] {table_name [ * ]} [, ... ]
    [ CONTINUE IDENTITY ] [ CASCADE | RESTRICT ];
ALTER TABLE [ IF EXISTS  ] { [ ONLY  ] table_name  | table_name *  | ONLY ( table_name )  }
    TRUNCATE PARTITION { partition_name  | FOR (  partition_value  [, ...] )  } ;
```

## UPDATE<a name="section368033917415"></a>

Updates data in a table. Changes the values of the specified columns in all rows that satisfy the condition. The WHERE clause clarifies conditions. The SET clause specifies the columns to be modified and columns that not specified in the SET clause retain their previous values.

```
UPDATE [/*+ plan_hint */] [ ONLY ] table_name [ * ] [ [ AS ] alias ]
    SET {column_name = { expression | DEFAULT } |
          ( column_name [, ...] ) = {( { expression | DEFAULT } [, ...] ) |sub_query }
          }[, ...]
    [ FROM from_list] [ WHERE condition ]
    [ RETURNING {* | {output_expression [ [ AS ] output_name ]} [, ...] }];
```

## VACUUM<a name="section52478381533"></a>

Recycles storage space occupied by rows that have been deleted from a table or B-Tree index. In normal database operation, rows that have been deleted are not physically removed from their table; instead, they remain present until a  **VACUUM**  is done. Therefore, it is necessary to do  **VACUUM**  periodically, especially on frequently-updated tables.

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

Computes a row or a set of rows based on given values. It is most commonly used to generate a constant table within a large statement.

```
VALUES {( expression [, ...] )} [, ...]
    [ ORDER BY {sort_expression [ ASC | DESC | USING operator ]} [, ...] ]
    [ LIMIT { count | ALL } ]
    [ OFFSET start [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ count ] { ROW | ROWS } ONLY ];
```

