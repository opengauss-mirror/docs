# SHOW VARIABLES

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Displays the values of system variables. This statement does not require any permissions. It only requires the ability to connect to the server.
You can add LIKE and WHERE clauses for further matching.

SHOW VARIABLES accepts optional GLOBAL or SESSION variable range modifiers:

- By using the GLOBAL modifier, the statement displays global system variable values. These are the values of the corresponding session variables used to initialize a new connection to openGauss. If a variable does not have a global value, no value is displayed.
- By using the SESSION modifier, the statement displays the system variable values that are valid for the current connection.
- If no modifier exists, the default value is SESSION.

## Precautions <a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

N/A

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW [GLOBAL | SESSION] VARIABLES [LIKE 'pattern' | WHERE expr];
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **[GLOBAL | SESSION]**

  **global** indicates that the default values of GUC parameters are queried.
  **session** indicates that the session value of the guc parameter is queried.

- **[LIKE 'pattern' | WHERE expr]**

  Matches expression.


## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--Query guc parameters starting with v.
openGauss=# show variables like 'v%';
       Variable_name        |   Value    
----------------------------+------------
 vacuum_cost_delay          | 0
 vacuum_cost_limit          | 200
 vacuum_cost_page_dirty     | 20
 vacuum_cost_page_hit       | 1
 vacuum_cost_page_miss      | 10
 vacuum_defer_cleanup_age   | 0
 vacuum_freeze_min_age      | 2000000000
 vacuum_freeze_table_age    | 4000000000
 vacuum_gtt_defer_check_age | 10000
 var_eq_const_selectivity   | off
 version_retention_age      | 0
(11 rows)
```
