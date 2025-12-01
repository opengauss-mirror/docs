# SHOW CREATE VIEW<a name="ZH-CN_TOPIC_0289900448"></a>

## Function<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

Returns the exact string that can be used to recreate the named view.

## Precautions <a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

character\_set\_client is the session value of the system variable when client\_encoding creates the routine.

collation\_connection is the value specified when lc\_collate creates the database.

## Syntax<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SHOW CREATE VIEW view_name
```

## Parameter Description<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **view_name**

    View name.

## Examples<a name="en-us_topic_0283137542_en-us_topic_0237122167_en-us_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--Create a view
openGauss=# create view tt19v as
openGauss-# select 'foo'::text = any(array['abc','def','foo']::text[]) c1,
openGauss-#        'foo'::text = any((select array['abc','def','foo']::text[])::text[]) c2;
CREATE VIEW
--Query a statement for creating a view.
openGauss=# show create view tt19v;
 View  |                                                                                      Create View                                                            
                           | character_set_client | collation_connection 
-------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------+----------------------
 tt19v | CREATE OR REPLACE VIEW public.tt19v AS                                                                                                                      
                          +| UTF8                 | en_US.UTF-8
       | SELECT ('foo'::text = ANY (ARRAY['abc'::text, 'def'::text, 'foo'::text])) AS c1, ('foo'::text = ANY ((SELECT ARRAY['abc'::text, 'def'::text, 'foo'::text] AS "array")::text[])) AS c2; |                      | 
(1 row)
```
