# GRANT/REVOKE PROXY<a name="ZH-CN_TOPIC_0289900448"></a>

## Function <a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_82447c9355baf6b6fe87ecdad394891bca"></a>

Grants or revokes proxy permissions.

## Precautions <a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_b34c74bb507744ae6afd7bb034cdd8acd9"></a>

N/A

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
GRANT PROXY ON user
    TO user [, user] ...
    [WITH GRANT OPTION]

REVOKE PROXY ON user
    FROM user [, user] ...
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_38dc93b76b3a96e84ce04d3e684c5bb6ac"></a>

- **{PROXY}**

   Syntax keyword.

- **user**
  
   User (role) name.

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--Create a simple table.
opengauss=# CREATE SCHEMA tst_schema1;
opengauss=# SET SEARCH_PATH TO tst_schema1;
opengauss=# CREATE TABLE tst_t1
(
id int,
name varchar(20)
);
INSERT INTO tst_t1 values(20220101, 'proxy_example');

--Create a user.
opengauss=# DROP ROLE if EXISTS test_proxy_u1;
opengauss=# CREATE ROLE test_proxy_u1 IDENTIFIED BY 'test_proxy_u1@123';
opengauss=# DROP ROLE if EXISTS test_proxy_u2;
opengauss=# CREATE ROLE test_proxy_u3 IDENTIFIED BY 'test_proxy_u2@123';
opengauss=# DROP ROLE if EXISTS test_proxy_u3;
opengauss=# CREATE ROLE test_proxy_u3 IDENTIFIED BY 'test_proxy_u3@123';

--Grant schema and table permissions.
opengauss=# GRANT ALL ON SCHEMA tst_schema1 TO test_proxy_u2;
opengauss=# GRANT ALL ON SCHEMA tst_schema1 TO test_proxy_u2;
opengauss=# GRANT ALL ON SCHEMA tst_schema1 TO test_proxy_u2;
opengauss=# GRANT ALL ON tst_t1 to test_proxy_u1;

--Test permissions (no permissions).
opengauss=# SET ROLE test_proxy_u2 PASSWORD 'test_proxy_u2@123';
opengauss=> SELECT * FROM tst_schema1.tst_t1;
ERROR:  permission denied for relation tst_t1
DETAIL:  N/A

--Test permissions (with proxy permissions).
opengauss=> RESET ROLE;
opengauss=# GRANT PROXY ON test_proxy_u1 TO test_proxy_u2;
opengauss=# SET ROLE test_proxy_u2 PASSWORD 'test_proxy_u2@123';
opengauss=>  SELECT * FROM tst_schema1.tst_t1;
    id    |     name      
----------+---------------
 20220101 | proxy_example
 
 --Test permissions (cascading test: usr_1->usr_2->usr_3).
 opengauss=> RESET ROLE;
opengauss=# GRANT PROXY ON test_proxy_u2 TO test_proxy_u3;
opengauss=# SET ROLE test_proxy_u3 PASSWORD 'test_proxy_u3@123';
opengauss=>  SELECT * FROM tst_schema1.tst_t1;
    id    |     name      
----------+---------------
 20220101 | proxy_example
 
--Test permissions granted by the proxy (with grant option).
opengauss=> RESET ROLE;
opengauss=# SET ROLE test_proxy_u2 PASSWORD 'test_proxy_u2@123';
opengauss=> grant proxy on test_proxy_u1 to test_proxy_u3;
ERROR:  must have admin option on role "test_proxy_u1"
opengauss=> RESET ROLE;
RESET
opengauss=# SET ROLE test_proxy_u2 PASSWORD 'test_proxy_u2@123';
SET
opengauss=> grant proxy on test_proxy_u1 to test_proxy_u3;
ERROR:  must have admin option on role "test_proxy_u1"
opengauss=> RESET ROLE;
opengauss=# grant proxy on test_proxy_u1 to test_proxy_u2 with grant option;
opengauss=# SET ROLE test_proxy_u2 PASSWORD 'test_proxy_u2@123';
opengauss=> grant proxy on test_proxy_u1 to test_proxy_u3;

--Test the proxy permission revoking.
opengauss=> revoke proxy on test_proxy_u1 from test_proxy_u3;
opengauss=> revoke proxy on test_proxy_u1 from test_proxy_u2;
opengauss=>  SET ROLE test_proxy_u3 password 'test_proxy_u3@123';
opengauss=> SELECT * FROM tst_schema1.tst_t1;
ERROR:  permission denied for relation tst_t1
DETAIL:  N/A
```
