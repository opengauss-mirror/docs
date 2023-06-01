# ALTER EVENT<a name="ZH-CN_TOPIC_0000001503472553"></a>

## 功能描述<a name="zh-cn_topic_0283137021_zh-cn_topic_0237122084_zh-cn_topic_0059778428_section1274412112511"></a>

修改已创建的定时任务中的参数。

## 注意事项<a name="zh-cn_topic_0283137021_zh-cn_topic_0237122084_zh-cn_topic_0059778428_s5a554e8d15974449b7ffffee772b46f2"></a>

-   定时任务相关操作只有sql\_compatibility = 'B'时支持。
-   只有定时任务的所有者有权修改待修改的定时任务，用户通过ALTER EVENT修改定时任务时需要拥有被指定schema的USAGE权限。系统管理员默认拥有修改所有定时任务的权限。
-   可以通过SHOW  EVENTS或在PG\_JOB表中查看log\_user列来获得job的所有者信息
-   修改定时任务时每次修改成功后会更新被修改job的所有者为当前用户，若修改定时任务时指定了definer，则更新为被指定的definer。
-   definer选项场景限制与[CREATE EVENT](CREATE-EVENT.md)章节中对definer限制场景一致。

    >![](public_sys-resources/icon-notice.gif) **须知：** 
    >
    >-   系统管理员修改其他用户创建的定时任务后，被修改定时任务的所有者将切换为系统管理员，待执行语句将使用系统管理员的权限执行。


## 语法格式<a name="zh-cn_topic_0283137021_zh-cn_topic_0237122084_zh-cn_topic_0059778428_s7a58ab6578844d1d826f43cf0be946f9"></a>

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

## 参数说明<a name="zh-cn_topic_0283137021_zh-cn_topic_0237122084_zh-cn_topic_0059778428_sf6542f9e45da4efcad90878c3159a286"></a>

-   DEFINER 

    定时任务待执行语句在执行时使用的权限。默认情况下使用当前创建定时任务者的权限，当definer被指定时，使用被指定用户用户权限。

    definer参数只有具有sysadmin权限的用户有权指定。

-   ON SCHEDULE

    定时任务执行时刻。其中schedule子句与[CREATE EVENT](CREATE-EVENT.md)中schedule一致。

-   RENAME TO

    更新定时任务名。

-   ON COMPLETION \[NOT\] PRESERVE

    默认情况下，一旦事务处于完成状态，系统表中就会立刻删除该定时任务。用户可以通过设置ON COMPLETION PRESERVE来覆盖默认行为。

-   ENABLE | DISABLE | DISABLE ON SLAVE

    创建定时任务后，定时任务默认处于ENABLE状态，即到规定时间立即执行待执行语句。用户可以使用DISABLE关键字，改变定时任务的活动状态。DISABLE ON SLAVE表现与DISABLE一致。

-   COMMENT 

    用户可以给定时任务添加注释，注释内容在GS\_JOB\_ATTRIBUTE表中查看。

-   DO

    定时任务待执行语句。


## 示例<a name="zh-cn_topic_0283137021_zh-cn_topic_0237122084_zh-cn_topic_0059778428_s3d5088f2366242cf9ef14a91c2081248"></a>

```
--创建一个定时任务
openGauss=# CREATE TABLE t_ev(num int);

openGauss=# CREATE EVENT IF NOT EXISTS event_e1 ON SCHEDULE AT sysdate + interval 5 second + interval 33 minute DISABLE DO insert into t_ev values(0);

--修改定时任务
--修改定时任务状态和待执行语句
openGauss=# ALTER EVENT event_e1 ENABLE DO select 1;

--修改定时任务名
openGauss=# ALTER EVENT event_e1 RENAME TO event_ee;
```

