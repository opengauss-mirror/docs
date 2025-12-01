# CREATE EVENT<a name="EN-US_TOPIC_0000001503312881"></a>

## Function<a name="section189661819135511"></a>

CREATE EVENT creates a scheduled event.

## Precautions<a name="section7961133411551"></a>

-   Operations related to scheduled events are supported only when **sql\_compatibility** is set to **'B'**.
-   A user without the sysadmin permission must obtain the permission from the user who has the sysadmin permission to create, modify or delete the scheduled event. The operation permissions of the scheduled event are the same as those of creating scheduled events for the advanced package **DBE\_SCHEDULER**.
-   Currently, the interval expression of a scheduled event is compatible with the syntax of floating-point number, for example, interval 0.5 minutes. However, the floating-point number is rounded up during calculation. Therefore, you are not advised to use the floating-point number for the interval.
-   Scheduled events with the same name are not supported in the same database.
-   The statements to be executed in a scheduled event are any SQL statements except security-related operations. However, some statements with restrictions fail to be executed. For example, a database cannot be created by using composite statements.
-   The security-related operations are as follows.
    -   Use encryption functions.
    -   Create and set users and groups.
    -   Connect to a database.
    -   Encrypt a function.

-   The definer fails to be specified for a scheduled event in the following scenarios:
    -   The user who operates the scheduled event does not have the sysadmin permission.
    -   If the current user is inconsistent with the specified definer:
        -   An initial user is specified as the definer.
        -   A private user, O&M administrator, or monitoring administrator is specified as the definer.
        -   The parameter **enableSeparationOfDuty** is set to **on** to enable the separation of duties.



## Syntax<a name="section139076585551"></a>

```
CREATE
    [DEFINER = user]
EVENT
    [IF NOT EXISTS]
    event_name
    ON SCHEDULE schedule
    [ON COMPLETION [NOT] PRESERVE]
    [ENABLE | DISABLE | DISABLE ON SLAVE]
    [COMMENT 'string']
    DO event_body;
schedule: {
    AT timestamp [+ INTERVAL interval] ...
  | EVERY interval
    [STARTS timestamp [+ INTERVAL interval] ...]
    [ENDS timestamp [+ INTERVAL interval] ...]
}
interval:
    quantity {YEAR | MONTH | DAY | HOUR | MINUTE | SECOND |
              YEAR TO MONTH | DAY TO HOUR | DAY TO MINUTE |
              DAY TO SECOND | HOUR TO MINUTE | HOUR TO SECOND | 
              MINUTE TO SECOND}
```

## Parameter Description<a name="section169527814566"></a>

-   definer

    Specifies the permission for the scheduled event statement to be executed during execution. By default, the permission of the user who creates the scheduled event is used. When definer is specified, the permission of the specified user is used.
    
    Only users with the sysadmin permission can specify the definer.

-   ON COMPLETION \[NOT\] PRESERVE

    Once a transaction is complete, the scheduled event is deleted from the system catalog immediately by default. You can overwrite the default behavior by setting **ON COMPLETION PRESERVE**.

-   ENABLE | DISABLE | DISABLE ON SLAVE

    The scheduled event is in the **ENABLE** state by default after it is created. That is, the statement to be executed is executed immediately at the specified time. You can use the keyword **DISABLE** to change the **ENABLE** state. The performance of **DISABLE ON SLAVE** is the same as that of **DISABLE**.

-   COMMENT 'string'

    You can add comments to the scheduled event. The comments can be viewed in the **GS\_JOB\_ATTRIBUTE** table.

-   event\_body

    Specifies the statement to be executed for a scheduled event.


## Examples<a name="section8357162720577"></a>

```
openGauss=# CREATE TABLE t_ev(num int);

openGauss=# CREATE EVENT IF NOT EXISTS event_e1 ON SCHEDULE AT sysdate + interval 5 second + interval 33 minute DISABLE DO insert into t_ev values(0);

openGauss=# CREATE EVENT IF NOT EXISTS event_e1 ON SCHEDULE EVERY 1 minute DO insert into t_ev values(1);

```

>![](public_sys-resources/icon-notice.gif) **NOTICE:**
>-   If a scheduled event fails to be executed after being created, you can view the failure cause in the **SHOW EVENTS** or **PG\_JOB** table.
>-   When operations related to user passwords (such as creating weak passwords) are performed in the statements to be executed for a scheduled event, system catalog records the password in plaintext. Therefore, you are not advised to perform operations related to user passwords in the statements to be executed for the scheduled event.
