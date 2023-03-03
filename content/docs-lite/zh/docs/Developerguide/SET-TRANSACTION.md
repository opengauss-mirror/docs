# SET TRANSACTION<a name="ZH-CN_TOPIC_0289900810"></a>

## 功能描述<a name="zh-cn_topic_0283137515_zh-cn_topic_0237122190_zh-cn_topic_0059778135_se7890b9b6c9749168d76cd4ce38ee49f"></a>

为事务设置特性。事务特性包括事务隔离级别、事务访问模式\(读/写或者只读\)。可以设置当前事务的特性（LOCAL\)，也可以设置会话的默认事务特性（SESSION），也可以设置当前数据库的全局会话的事务特性（GLOBAL）。

## 注意事项<a name="zh-cn_topic_0283137515_zh-cn_topic_0237122190_zh-cn_topic_0059778135_s91c8bf3e55a0490299ef9c0cd59f44f6"></a>

设置当前事务特性需要在事务中执行（即执行SET TRANSACTION之前需要执行START TRANSACTION或者BEGIN），否则设置不生效。设置当前数据库全局会话（GLOBAL）的事务特性在重新连接后生效。

## 语法格式<a name="zh-cn_topic_0283137515_zh-cn_topic_0237122190_zh-cn_topic_0059778135_sce3e49e1f5894684861d1df6677d12c8"></a>

设置事务的隔离级别、读写模式。

```
{ SET [ LOCAL | SESSION | GLOBAL ] TRANSACTION|SET SESSION CHARACTERISTICS AS TRANSACTION }
  { ISOLATION LEVEL { READ COMMITTED | SERIALIZABLE | REPEATABLE READ }
  | { READ WRITE | READ ONLY } } [, ...]
```

## 参数说明<a name="zh-cn_topic_0283137515_zh-cn_topic_0237122190_zh-cn_topic_0059778135_sedb5d46e1cef47ad953116db260be4ad"></a>

-   **LOCAL**

    声明该命令只在当前事务中有效。

- **SESSION**

  声明这个命令只对当前会话起作用。

  SET SESSION TRANSACTION语句需要在B兼容模式下，设置GUC参数b\_format\_behavior\_compat\_options为set\_session\_transaction后生效。其他情形使用SET SESSION CHARACTERISTICS语句。

  取值范围：字符串，要符合标识符的命名规范。

-   **GLOBAL**

    声明这个命令对当前数据库的全局会话生效。

    作用范围：在集中式的B兼容模式下生效。对后续连接的会话生效。
    
-   **ISOLATION\_LEVEL**

    指定事务隔离级别，该参数决定当一个事务中存在其他并发运行事务时能够看到什么数据。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >在事务中第一个数据修改语句（SELECT，INSERT，DELETE，UPDATE，FETCH，COPY）执行之后，当前事务的隔离级别就不能再次设置。

    取值范围：

    -   READ COMMITTED：读已提交隔离级别，只能读到已经提交的数据，而不会读到未提交的数据。这是缺省值。
    -   REPEATABLE READ：可重复读隔离级别，仅仅能看到事务开始之前提交的数据，不能看到未提交的数据，以及在事务执行期间由其它并发事务提交的修改。
    -   SERIALIZABLE：openGauss目前功能上不支持此隔离级别，等价于REPEATABLE READ。

-   **READ WRITE | READ ONLY**

    指定事务访问模式（读/写或者只读）。


## 示例<a name="zh-cn_topic_0283137515_zh-cn_topic_0237122190_zh-cn_topic_0059778135_sf3622c31002245c482e236cade222456"></a>

```
--开启一个事务，设置事务的隔离级别为READ COMMITTED，访问模式为READ ONLY。
openGauss=# START TRANSACTION;
openGauss=# SET LOCAL TRANSACTION ISOLATION LEVEL READ COMMITTED READ ONLY;
openGauss=# COMMIT;
--设置当前会话的事务隔离级别、读写模式。
--在sql_compatibility = 'B'场景下,b_format_behavior_compat_options设置为set_session_transaction。
openGauss=# SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;
openGauss=# SET SESSION TRANSACTION READ ONLY;
--设置当前数据库全局会话的事务隔离级别、读写模式(sql_compatibility = 'B'场景下)。
openGauss=# SET GLOBAL TRANSACTION ISOLATION LEVEL READ COMMITTED;
openGauss=# SET GLOBAL TRANSACTION READ ONLY;
```

