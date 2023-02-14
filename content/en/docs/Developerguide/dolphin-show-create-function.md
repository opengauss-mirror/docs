# SHOW CREATE FUNCTION

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Returns the exact string that can be used to recreate the named function. A similar statement SHOW CREATE PROCEDURE displays information about storage functions.
To use either statement, you must have the global SELECT permission.

## Precautions <a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

The sql\_mode indicates the session value during query. Database b displays the sql\_mode bound during routine creation. openGauss displays the session value because openGauss does not bind routines to sql\_mode during routine creation.

character\_set\_client is the session value of the system variable when client\_encoding creates the routine.

collation\_connection is the value specified when lc\_collate creates the database.

Database Collation is the value specified when lc\_collate creates the database.

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW CREATE FUNCTION func_name
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **func_name**

    Name of the function.

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--Create a function.
openGauss=# CREATE FUNCTION functest_A_1(text, date) RETURNS bool LANGUAGE 'sql'
       AS 'SELECT $1 = ''abcd'' AND $2 > ''2001-01-01''';
CREATE FUNCTION
--Query a statement for creating a function.
openGauss=# show create function functest_A_1;
   Function   |                         Create Function                          |              sql_mode               | character_set_client | collation_connection 
| Database Collation 
--------------+------------------------------------------------------------------+-------------------------------------+----------------------+----------------------+--------------------
 functest_a_1 | CREATE OR REPLACE FUNCTION public.functest_a_1(text, date)      +| sql_mode_strict,sql_mode_full_group | UTF8                 | en_US.UTF-8          
| en_US.UTF-8
              |  RETURNS boolean                                                +|                                     |                      |                      
| 
              |  LANGUAGE sql                                                   +|                                     |                      |                      
| 
              |  NOT FENCED NOT SHIPPABLE                                       +|                                     |                      |                      
| 
              | AS $function$SELECT $1 = 'abcd' AND $2 > '2001-01-01'$function$;+|                                     |                      |                      
| 
              |                                                                  |                                     |                      |                      
| 
(1 row)
```
