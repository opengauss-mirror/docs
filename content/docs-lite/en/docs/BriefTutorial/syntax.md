# Syntax<a name="EN-US_TOPIC_0000001210301872"></a>

By default, after you log in to the installed database, you can run the  **\\help**  statement to view syntax of all the SQL syntax of the openGauss.

```
openGauss=# \help
Available help:
ABORT                             ALTER TABLE                       CREATE DATABASE                   CREATE TEXT SEARCH CONFIGURATION  DROP OPERATOR                     MERGE
  ALTER APP WORKLOAD GROUP          ALTER TABLE PARTITION             CREATE DIRECTORY                  CREATE TEXT SEARCH DICTIONARY     DROP OWNED                        MOVE
  ALTER APP WORKLOAD GROUP MAPPING  ALTER TABLESPACE                  CREATE EXTENSION                  CREATE TRIGGER                    DROP PACKAGE                      PREPARE
  ALTER AUDIT POLICY                ALTER TEXT SEARCH CONFIGURATION   CREATE FOREIGN TABLE              CREATE TYPE                       DROP PACKAGE BODY                 PREPARE TRANSACTION
  ALTER DATA SOURCE                 ALTER TEXT SEARCH DICTIONARY      CREATE FUNCTION                   CREATE USER                       DROP PROCEDURE                    PUBLISH SNAPSHOT
  ALTER DATABASE                    ALTER TRIGGER                     CREATE GROUP                      CREATE VIEW                       DROP RESOURCE LABEL               PURGE SNAPSHOT
  ALTER DEFAULT PRIVILEGES          ALTER TYPE                        CREATE INDEX                      CREATE WEAK PASSWORD DICTIONARY   DROP RESOURCE POOL                REASSIGN OWNED
  ALTER DIRECTORY                   ALTER USER                        CREATE LANGUAGE                   CREATE WORKLOAD GROUP             DROP ROLE                         REFRESH MATERIALIZED VIEW
  ALTER EXTENSION                   ALTER VIEW                        CREATE MASKING POLICY             CURSOR                            DROP ROW LEVEL SECURITY POLICY    REINDEX
  ALTER FOREIGN TABLE               ALTER WORKLOAD GROUP              CREATE MATERIALIZED VIEW          DEALLOCATE                        DROP SCHEMA                       RESET
  ALTER FOREIGN TABLE FOR HDFS      ANALYSE                           CREATE MODEL                      DECLARE                           DROP SEQUENCE                     REVOKE
  ALTER FUNCTION                    ANALYZE                           CREATE NODE                       DELETE                            DROP SERVER                       ROLLBACK
  ALTER GROUP                       ANONYMOUS BLOCK                   CREATE NODE GROUP                 DO                                DROP SYNONYM                      ROLLBACK PREPARED
  ALTER INDEX                       ARCHIVE SNAPSHOT                  CREATE OPERATOR                   DROP APP WORKLOAD GROUP           DROP TABLE                        SAMPLE SNAPSHOT
  ALTER LARGE OBJECT                BEGIN                             CREATE PACKAGE                    DROP APP WORKLOAD GROUP MAPPING   DROP TABLESPACE                   SAVEPOINT
  ALTER MASKING POLICY              CALL                              CREATE PACKAGE BODY               DROP AUDIT POLICY                 DROP TEXT SEARCH CONFIGURATION    SELECT
  ALTER MATERIALIZED VIEW           CHECKPOINT                        CREATE PROCEDURE                  DROP CLIENT MASTER KEY            DROP TEXT SEARCH DICTIONARY       SELECT INTO
  ALTER NODE                        CLEAN CONNECTION                  CREATE RESOURCE LABEL             DROP COLUMN ENCRYPTION KEY        DROP TRIGGER                      SET
  ALTER NODE GROUP                  CLOSE                             CREATE RESOURCE POOL              DROP DATA SOURCE                  DROP TYPE                         SET CONSTRAINTS
  ALTER OPERATOR                    CLUSTER                           CREATE ROLE                       DROP DATABASE                     DROP USER                         SET ROLE
  ALTER RESOURCE LABEL              COMMENT                           CREATE ROW LEVEL SECURITY POLICY  DROP DIRECTORY                    DROP VIEW                         SET SESSION AUTHORIZATION
  ALTER RESOURCE POOL               COMMIT                            CREATE SCHEMA                     DROP EXTENSION                    DROP WEAK PASSWORD DICTIONARY     SET TRANSACTION
  ALTER ROLE                        COMMIT PREPARED                   CREATE SEQUENCE                   DROP FOREIGN TABLE                DROP WORKLOAD GROUP               SHOW
  ALTER ROW LEVEL SECURITY POLICY   COPY                              CREATE SERVER                     DROP FUNCTION                     END                               START TRANSACTION
  ALTER SCHEMA                      CREATE APP WORKLOAD GROUP         CREATE SNAPSHOT AS                DROP GROUP                        EXECUTE                           TRUNCATE
  ALTER SEQUENCE                    CREATE APP WORKLOAD GROUP MAPPING CREATE SNAPSHOT FROM              DROP INDEX                        EXECUTE DIRECT                    UPDATE
  ALTER SERVER                      CREATE AUDIT POLICY               CREATE SYNONYM                    DROP MASKING POLICY               EXPLAIN                           VACUUM
  ALTER SESSION                     CREATE BARRIER                    CREATE TABLE                      DROP MATERIALIZED VIEW            FETCH                             VALUES
  ALTER SYNONYM                     CREATE CLIENT MASTER KEY          CREATE TABLE AS                   DROP MODEL                        GRANT
  ALTER SYSTEM KILL SESSION         CREATE COLUMN ENCRYPTION KEY      CREATE TABLE PARTITION            DROP NODE                         INSERT
  ALTER SYSTEM SET                  CREATE DATA SOURCE                CREATE TABLESPACE                 DROP NODE GROUP                   LOCK

```

You can run the  **\\h **_name_  command to view detailed syntax information. For example:

```
openGauss=# \h ABORT
Command:     ABORT
Description: abort the current transaction
Syntax:
ABORT [ WORK | TRANSACTION ] ;
```

## SQL Statements<a name="section1577722042218"></a>

An SQL statement usually contains keywords, identifiers \(columns\), constants, and special characters. For example, a simple SQL statement is as follows:

```
SELECT id, name FROM t1;
```

<a name="table1597192782513"></a>
<table><thead align="left"><tr id="row1959710273252"><th class="cellrowborder" valign="top" width="20%" id="mcps1.1.6.1.1"><p id="p559817270257"><a name="p559817270257"></a><a name="p559817270257"></a>-</p>
</th>
<th class="cellrowborder" valign="top" width="20%" id="mcps1.1.6.1.2"><p id="p145981027162514"><a name="p145981027162514"></a><a name="p145981027162514"></a>SELECT</p>
</th>
<th class="cellrowborder" valign="top" width="20%" id="mcps1.1.6.1.3"><p id="p3598112722511"><a name="p3598112722511"></a><a name="p3598112722511"></a>id, name</p>
</th>
<th class="cellrowborder" valign="top" width="20%" id="mcps1.1.6.1.4"><p id="p1859915279252"><a name="p1859915279252"></a><a name="p1859915279252"></a>FROM</p>
</th>
<th class="cellrowborder" valign="top" width="20%" id="mcps1.1.6.1.5"><p id="p1959982719254"><a name="p1959982719254"></a><a name="p1959982719254"></a>t1</p>
</th>
</tr>
</thead>
<tbody><tr id="row135992027172510"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.1 "><p id="p259962712516"><a name="p259962712516"></a><a name="p259962712516"></a>Type</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.2 "><p id="p1059952720251"><a name="p1059952720251"></a><a name="p1059952720251"></a>Keyword</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.3 "><p id="p75991727142513"><a name="p75991727142513"></a><a name="p75991727142513"></a>Identifiers (columns)</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.4 "><p id="p15991227152511"><a name="p15991227152511"></a><a name="p15991227152511"></a>Keyword</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.5 "><p id="p145991927122510"><a name="p145991927122510"></a><a name="p145991927122510"></a>Identifier</p>
</td>
</tr>
<tr id="row175991127182512"><td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.1 "><p id="p460016271253"><a name="p460016271253"></a><a name="p460016271253"></a>Description</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.2 "><p id="p1160062711256"><a name="p1160062711256"></a><a name="p1160062711256"></a>Command</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.3 "><p id="p1260032732511"><a name="p1260032732511"></a><a name="p1260032732511"></a>Columns <strong id="b119824590307"><a name="b119824590307"></a><a name="b119824590307"></a>id</strong> and <strong id="b1267052163110"><a name="b1267052163110"></a><a name="b1267052163110"></a>name</strong></p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.4 "><p id="p196001127172513"><a name="p196001127172513"></a><a name="p196001127172513"></a>Statement, which is used to set conditions, rules, or others.</p>
</td>
<td class="cellrowborder" valign="top" width="20%" headers="mcps1.1.6.1.5 "><p id="p166001527122514"><a name="p166001527122514"></a><a name="p166001527122514"></a>Table name</p>
</td>
</tr>
</tbody>
</table>

For details about the SQL syntax, see  [Appendix: SQL Syntax](appendix-sql-syntax.md).

