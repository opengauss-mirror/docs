# ALTER SYSTEM KILL SESSION<a name="EN-US_TOPIC_0289900551"></a>

## Function<a name="en-us_topic_0283137036_en-us_topic_0237122075_en-us_topic_0059778605_s40bbf40e12d1487aaca3ddd1b9bb55e0"></a>

**ALTER SYSTEM KILL SESSION**  ends a session.

## Precautions<a name="en-us_topic_0283137036_en-us_topic_0237122075_en-us_topic_0059778605_s16279beb536e4281b8403ab11195cb3a"></a>

None

## Syntax<a name="en-us_topic_0283137036_en-us_topic_0237122075_en-us_topic_0059778605_s3b7743fa7cab42718575f7194d1112ba"></a>

```
ALTER SYSTEM KILL SESSION 'session_sid, serial' [ IMMEDIATE ];
```

## Parameter Description<a name="en-us_topic_0283137036_en-us_topic_0237122075_en-us_topic_0059778605_sa834b01395fd4366a5dce7a64ad867b6"></a>

-   **session\_sid, serial**

    Specifies the SID and SERIAL of a session \(To obtain the values, see the example.\)

-   **IMMEDIATE**

    Specifies that a session will be ended instantly after the statement is executed.


## Examples<a name="en-us_topic_0283137036_en-us_topic_0237122075_en-us_topic_0059778605_s731ce019d40848b1aa9b394fd2484a33"></a>

```
-- Query session information.
openGauss=# 
SELECT sa.sessionid AS sid,0::integer AS serial#,ad.rolname AS username FROM pg_stat_get_activity(NULL) AS sa
LEFT JOIN pg_authid ad ON(sa.usesysid = ad.oid)WHERE sa.application_name <> 'JobScheduler';
       sid       | serial# | username 
-----------------+---------+----------
 140131075880720 |       0 | omm
 140131025549072 |       0 | omm
 140131073779472 |       0 | omm
 140131071678224 |       0 | omm
 140131125774096 |       0 | 
 140131127875344 |       0 | 
 140131113629456 |       0 | 
 140131094742800 |       0 | 
(8 rows)

-- End the session whose SID is 140131075880720.
openGauss=#  ALTER SYSTEM KILL SESSION '140131075880720,0' IMMEDIATE;
```

