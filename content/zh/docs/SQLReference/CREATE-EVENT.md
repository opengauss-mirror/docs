# CREATE EVENT

## 功能描述<a name="section189661819135511"></a>

创建一个新的定时任务。

## 注意事项<a name="section7961133411551"></a>

-   定时任务相关操作只有sql\_compatibility = 'B'时支持。
-   用户操作（创建/修改/删除）定时任务时，非sysadmin用户需要被sysadmin用户赋予操作定时任务的权限。
    -   用户使用CREATE EVENT创建定时任务时，需要拥有创建定时任务schema的CREATE权限。
    -   用户使用ALTER/DROP EVENT修改或删除定时任务时，需要拥有被指定schema的USAGE权限。
    -   只有定时任务的属主有权ALTER或DROP定时任务。
    -   定时任务的属主与被指定的definer保持一致，若创建定时任务时未指定definer，则默认为当前创建定时任务者。
-   定时任务时间间隔interval表达式目前兼容了浮点数语法，例如interval 0.5 minute，但是计算时会将浮点数取整，所以不建议interval时间间隔使用浮点数形式。
-   同一database下不支持同名定时任务。
-   定时任务中待执行语句范围是除安全相关操作以外任意SQL语句，但对于某些有约束的语句会执行失败。例如：不支持通过复合语句创建database。
-   定时任务待执行语句不支持的安全相关操作范围主要包括：
    -   使用加密函数。
    -   创建、设置用户、group。
    -   连接数据库。
    -   函数加密等。

-   定时任务指定definer选项在以下场景下会指定失败：
    -   操作定时任务的用户不具有sysadmin权限。
    -   当前用户与被指定definer不一致时：
        -   指定definer为初始用户。
        -   指定definer为私有用户、运维管理员、监控管理员。
        -   开启三权分立，enableSeparationOfDuty=on。



## 语法格式<a name="section139076585551"></a>

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
              YEAR_MONTH | DAY_HOUR | DAY_MINUTE | DAY_SECOND |
              HOUR_MINUTE | HOUR_SECOND | MINUTE_SECOND}
```

## 参数说明<a name="section169527814566"></a>

-   DEFINER

    定时任务待执行语句在执行时使用的权限。默认情况下使用当前创建定时任务者的权限，当definer被指定时，使用被指定用户用户权限。
    
    definer参数只有具有sysadmin权限的用户有权指定。

- ON SCHEDULE

  定时任务执行时刻。定时任务可以通过schedule设置为执行一次，也可以设置为执行多次：

  -   AT timestamp \[+ INTERVAL interval\] 表示设置定时任务只在timestamp \[+ INTERVAL interval\] 时间点执行一次。
  -   EVERY interval 表示设置定时任务在每隔interval时间后重复执行。
      -   STARTS timestamp \[+ INTERVAL interval\] 用户可以给可重复执行的定时任务指定起始时间，即定时任务从timestamp \[+ INTERVAL interval\]时刻开始执行。当此参数为空时默认从当前时刻开始执行。
      -   ENDS timestamp \[+ INTERVAL interval\] 用户可以给可重复执行的定时任务指定结束时间，即定时任务从timestamp \[+ INTERVAL interval\]时刻停止执行。当此参数为空时默认为3999-12-31 16:00:00。

-   INTERVAL

    时间间隔，interval由quantity数字和时间单位组成，例如1 YEAR。

-   ON COMPLETION \[NOT\] PRESERVE

    默认情况下，一旦事务处于完成状态，系统表中就会立刻删除该定时任务。用户可以通过设置ON COMPLETION PRESERVE来覆盖默认行为。

-   ENABLE | DISABLE | DISABLE ON SLAVE

    创建定时任务后，定时任务默认处于ENABLE状态，即到规定时间立即执行待执行语句。用户可以使用DISABLE关键字，改变定时任务的活动状态。DISABLE ON SLAVE表现与DISABLE一致。

-   COMMENT 

    用户可以给定时任务添加注释，注释内容在GS\_JOB\_ATTRIBUTE表中查看。

-   DO

    定时任务待执行语句。


## 示例<a name="section8357162720577"></a>

```
openGauss=# CREATE TABLE t_ev(num int);

--创建一个执行一次的定时任务
openGauss=# CREATE EVENT IF NOT EXISTS event_e1 ON SCHEDULE AT sysdate() + interval 5 second + interval 33 minute DISABLE DO insert into t_ev values(0);

--创建一个每隔一分钟执行一次的定时任务
openGauss=# CREATE EVENT IF NOT EXISTS event_e1 ON SCHEDULE EVERY 1 minute DO insert into t_ev values(1);

```

>![](public_sys-resources/icon-notice.png) **须知：** 
>-   定时任务创建完成后如果执行失败，失败原因可以通过SHOW EVENTS或在PG\_JOB表中查看。
>-   当定时任务的待执行语句中进行涉及用户密码相关操作时（创建弱口令等），系统表及中会记录密码的明文。因此不建议用户在定时任务的待执行语句中进行涉及用户密码的相关操作。

