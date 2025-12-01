# SHOW CREATE PROCEDURE<a name="ZH-CN_TOPIC_0289900448"></a>

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Returns the exact string that can be used to recreate the named stored procedure. A similar statement SHOW CREATE FUNCTION displays information about storage functions.
To use either statement, you must have the global SELECT permission.

## Precautions <a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

The sql\_mode indicates the session value during query. Database b displays the sql\_mode bound during routine creation. openGauss displays the session value because openGauss does not bind routines to sql\_mode during routine creation.

character\_set\_client is the session value of the system variable when client\_encoding creates the routine.

collation\_connection is the value specified when lc\_collate creates the database.

Database Collation is the value specified when lc\_collate creates the database.

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW CREATE PROCEDURE proc_name
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **proc_name**

    Name of the stored procedure.

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--Create a stored procedure.
openGauss=# create procedure test_procedure_test(int,int)
openGauss-# SHIPPABLE IMMUTABLE
openGauss-# as
openGauss$# begin
openGauss$# select $1 + $2;
openGauss$# end;
openGauss$# /
CREATE PROCEDURE
--Query the statement for creating a stored procedure.
openGauss=# show create procedure test_procedure_test;
      Procedure      |                        Create Procedure                         |              sql_mode               | character_set_client | collation_connection | Database Collation 
---------------------+-----------------------------------------------------------------+-------------------------------------+----------------------+----------------------+--------------------
 test_procedure_test | CREATE OR REPLACE PROCEDURE public.test_procedure_test(int,int)+| sql_mode_strict,sql_mode_full_group | UTF8                 | en_US.UTF-8    
      | en_US.UTF-8
                     |  IMMUTABLE SHIPPABLE                                           +|                                     |                      |                
      | 
                     | AS  DECLARE                                                    +|                                     |                      |                
      | 
                     | begin                                                          +|                                     |                      |                
      | 
                     | select $1 + $2;                                                +|                                     |                      |                
      | 
                     | end;                                                           +|                                     |                      |                
      | 
                     | /                                                              +|                                     |                      |                
      | 
                     |                                                                 |                                     |                      |                
      | 
(1 row)
```
