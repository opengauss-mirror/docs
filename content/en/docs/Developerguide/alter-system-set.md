# ALTER SYSTEM SET<a name="EN-US_TOPIC_0289900623"></a>

## Function<a name="en-us_topic_0283137187_en-us_topic_0237122075_en-us_topic_0059778605_s40bbf40e12d1487aaca3ddd1b9bb55e0"></a>

The  **ALTER SYSTEM SET**  command is used to set GUC parameters of the POSTMASTER, SIGHUP, and BACKEND levels. This command writes parameters into the configuration file. The time to take effect varies according to the level.

## Precautions<a name="en-us_topic_0283137187_en-us_topic_0237122075_en-us_topic_0059778605_s16279beb536e4281b8403ab11195cb3a"></a>

-   Only users with administrator permissions can run this command.
-   The effective time of GUC parameters at different levels is as follows:
    -   The GUC parameters at the POSTMASTER level take effect only after the system is restarted.
    -   The GUC parameters at the BACKEND level take effect only after the session is reconnected.
    -   The GUC parameters at the SIGHUP level take effect immediately. \(Actually, there is a slight delay to wait for the thread reloading the parameter.\)

-   You can set the  [audit\_set\_parameter](en-us_topic_0289900107.md#en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_sc59738d0efe94f909306fde1f3d04f1e)  parameter to specify whether the operation is audited.
-   The operation can be synchronized to the standby server.
-   The operation is the same as  **gs\_guc**, which does not pay attention to whether the database is a primary or standby node or whether the database is read-only.
-   The operation cannot be executed in a transaction because it cannot be rolled back.

## Syntax<a name="en-us_topic_0283137187_en-us_topic_0237122075_en-us_topic_0059778605_s3b7743fa7cab42718575f7194d1112ba"></a>

```
ALTER SYSTEM SET parameter TO value;
```

## Parameter Description<a name="en-us_topic_0283137187_en-us_topic_0237122075_en-us_topic_0059778605_sa834b01395fd4366a5dce7a64ad867b6"></a>

-   **parameter**

    GUC parameter

-   **value**

    GUC parameter value


## Examples<a name="en-us_topic_0283137187_section49061716194314"></a>

```
-- Set a SIGHUP-level parameter audit_enabled.
postgres=#  alter system set audit_enabled to off;
ALTER SYSTEM SET
postgres=#  show audit_enabled;
 audit_enabled
---------------
 off
(1 row)

-- The setting of the POSTMASTER-level parameter enable_thread_pool takes effect after the system is restarted.
postgres=# alter system set enable_thread_pool to on;
NOTICE:  please restart the database for the POSTMASTER level parameter to take effect.
ALTER SYSTEM SET
```

