# ALTER EVENT<a name="EN-US_TOPIC_0000001503472553"></a>

## Function<a name="en-us_topic_0283137021_en-us_topic_0237122084_en-us_topic_0059778428_section1274412112511"></a>

**ALTER EVENT** modifies the parameters in the created scheduled event.

## Precautions<a name="en-us_topic_0283137021_en-us_topic_0237122084_en-us_topic_0059778428_s5a554e8d15974449b7ffffee772b46f2"></a>

-   Operations related to scheduled events are supported only when **sql\_compatibility** is set to **'B'**.
-   Only the owner has the permission to modify the scheduled event to be modified. By default, the system administrator has the permission to modify all scheduled events.
-   You can execute SHOW EVENTS or view the log\_user column in the PG\_JOB table to obtain the event owner information.
-   Each time a scheduled event is modified, the owner of the modified event is changed to the current user. If a definer is specified during modification, the owner is changed to the specified definer.
-   The restrictions for the definer are the same as those described in [CREATE EVENT](create-event.md).

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**
    >-   If a system administrator modifies a scheduled event created by another user, the owner of the modified event is changed to the system administrator. The statements to be executed are executed by the system administrator.


## Syntax<a name="en-us_topic_0283137021_en-us_topic_0237122084_en-us_topic_0059778428_s7a58ab6578844d1d826f43cf0be946f9"></a>

```
ALTER
    [DEFINER = user]    
EVENT event_name
    [ON SCHEDULE schedule]
    [ON COMPLETION [NOT] PRESERVE]
    [RENAME TO new_event_name]
    [ENABLE | DISABLE | DISABLE ON SLAVE]
    [COMMENT 'string']
    [DO event_body]
```

## Parameter Description<a name="en-us_topic_0283137021_en-us_topic_0237122084_en-us_topic_0059778428_sf6542f9e45da4efcad90878c3159a286"></a>

-   definer

    Specifies the permission for the scheduled event statement to be executed during execution. By default, the permission of the user who creates the scheduled event is used. When definer is specified, the permission of the specified user is used.

    Only users with the sysadmin permission can specify the definer.

-   RENAME TO

    Specifies the updated scheduled event name.

-   ON COMPLETION \[NOT\] PRESERVE

    Once a transaction is complete, the scheduled event is deleted from the system catalog immediately by default. You can overwrite the default behavior by setting **ON COMPLETION PRESERVE**.

-   ENABLE | DISABLE | DISABLE ON SLAVE

    The scheduled event is in the **ENABLE** state by default after it is created. That is, the statement to be executed is executed immediately at the specified time. You can use the keyword **DISABLE** to change the **ENABLE** state. The performance of **DISABLE ON SLAVE** is the same as that of **DISABLE**.

-   COMMENT 'string'

    You can add comments to the scheduled event. The comments can be viewed in the **GS\_JOB\_ATTRIBUTE** table.

-   event\_body

    Specifies the statement to be executed for a scheduled event.


## Examples<a name="en-us_topic_0283137021_en-us_topic_0237122084_en-us_topic_0059778428_s3d5088f2366242cf9ef14a91c2081248"></a>

```
--Create a scheduled task.
openGauss=# CREATE TABLE t_ev(num int);

openGauss=# CREATE EVENT IF NOT EXISTS event_e1 ON SCHEDULE AT sysdate + interval 5 second + interval 33 minute DISABLE DO insert into t_ev values(0);

--Modify a scheduled task.
openGauss=# ALTER EVENT event_e1 ENABLE DO select 1;

openGauss=# ALTER EVENT event_e1 RENAME TO event_ee;
```
