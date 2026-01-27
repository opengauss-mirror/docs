# ALTER SESSION

## 功能描述

调整当前数据库会话的各项配置参数。

## 语法格式

```

ALTER SESSION
{
    SET
    {
        COMMIT_WAIT_LOGGING = { WAIT | NOWAIT }
        | COMMIT_MODE = { IMMEDIATE | BATCH }
        | _SHOW_EXPLAIN_PREDICATE = { TRUE | FALSE }
        | _OUTER_JOIN_OPTIMIZATION = { ON | OFF }
        | TIME_ZONE = '[+|-]hh:mm'
        | LOCK_WAIT_TIMEOUT = timeout
        | CURRENT_SCHEMA = schema_value
        | nls_param = nls_param_value
        | cbo_param = cbo_param_value
    }
}
|
{ ENABLE | DISABLE }
{
    TRIGGERS
    | INTERACTIVE TIMEOUT
    | NOLOGGING
    | OPTINFO_LOG
}

```

## 参数说明

- **COMMIT_WAIT_LOGGING** = { WAIT | NOWAIT }
  
    定义执行提交（COMMIT）操作的服务器进程是否需要等待日志写入器（Log Writer）将重做（Redo）信息完全写入到重做日志文件中。<br>
    默认值: WAIT

  - WAIT : 等待 <br>

    服务器进程将等待确认。在绝大多数场景下，这是推荐且最稳妥的选项。

  - NOWAIT : 不等待。
    
    不关心重做信息是否已持久化到日志文件，事务立即完成提交。此选项能提升事务处理速度，但存在因系统故障导致数据丢失的风险。

- **COMMIT_MODE** = { IMMEDIATE | BATCH }
  
    指定日志写入器（Log Writer）处理重做信息的方式。<br>
    默认值: IMMEDIATE

  - IMMEDIATE : 立即提交 <br>

    每次提交事务都立即触发一次日志写入磁盘操作。设置为IMMEDIATE可能会因为频繁的强制磁盘I/O而影响整体的事务吞吐性能。

  - BATCH : 批量提交。
    
    先将多个事务的重做信息缓存在内存中，当积累到一定量后再批量写入日志文件。设置为BATCH能提高性能，但在实例发生故障时，可能导致尚未写入日志的这批重做信息丢失。

- **_SHOW_EXPLAIN_PREDICATE** = { TRUE | FALSE }
  
    控制执行计划输出中是否包含谓语（过滤条件）信息。

  - TRUE : 开启

    开启后，生成的执行计划将显示相关的谓语条件。

  - FALSE : 关闭
    
    关闭后，执行计划中不显示谓语条件。

- **_OUTER_JOIN_OPTIMIZATION** = { ON | OFF }
  
    基于成本的优化器（CBO）外连接（Outer Join）重排序优化开关。

  - ON : 开启

    开启后，CBO会尝试对外连接操作进行重新排序以寻找更优的执行计划。

  - OFF : 关闭
    
    关闭后，CBO将不对外连接操作进行重排序优化。

- **TIME_ZONE** = '[+|-]hh:mm'
  
    设定当前会话的时区。通过指定如'[+|-]hh:mm'格式的字符串（需包含单引号）来设置会话时区相对于协调世界时（UTC，即格林尼治标准时间）的偏移量（'+'表示时区早于UTC，'-'表示时区晚于UTC。例如，北京时间为'+08:00'）。

    要查询当前会话的时区设置，可以执行查询 `SELECT SESSIONTIMEZONE FROM DUAL;`。

    默认值: 建立会话的客户端操作系统的时区设置。

    合法的时区偏移量范围为 -12:00 至 [+]14:00。

- **LOCK_WAIT_TIMEOUT** = timeout
  
    设置当前会话在请求被锁定的资源时，愿意等待的最长时间。

    **timeout** 是等待时长，单位为毫秒。表示当会话检测到所需资源被锁定时，会等待指定的timeout时间，若在此期间锁未被释放，则会报出锁等待超时错误。

- **CURRENT_SCHEMA** = schema_value
  
    切换当前会话的默认模式（Schema）。默认值为登录用户的模式。

    - 若当前位于根租户中：
        - 如果 `schema_value` 带有租户前缀，会话将切换至指定非根租户下的模式。
        - 如果 `schema_value` 不带租户前缀，会话将切换至根租户下的一个模式。
    
    - 若当前位于非根租户中：
        - 如果 `schema_value` 带有租户前缀，该前缀必须与当前租户名一致，否则会报非法操作错误。
        - 如果 `schema_value` 不带租户前缀，会话将切换至当前租户下的一个模式。

- **nls_param** = nls_param_value
  
    设置与国家语言支持（NLS）相关的会话参数。

    - nls_param 可选范围如下：
        - NLS_DATE_FORMAT，默认值为 `"YYYY-MM-DD HH24:MI:SS"`。
        - NLS_TIMESTAMP_FORMAT，默认值为 `"YYYY-MM-DD HH24:MI:SS.FF"`。
        - NLS_TIMESTAMP_TZ_FORMAT，默认值为 `"YYYY-MM-DD HH24:MI:SS.FF TZH:TZM"`。
        - NLS_TIME_FORMAT，默认值为 `"HH:MI:SS.FF AM"`。
        - NLS_TIME_TZ_FORMAT，默认值为 `"HH:MI:SS.FF AM TZR"`。

- **cbo_param** = cbo_param_value
  
    设置基于成本的优化器（CBO）相关的调优参数。

    cbo_param 可选范围如下：
    - CBO_INDEX_CACHING，整型，取值范围[0, 100]，默认值为0，单位为百分比。
    - CBO_INDEX_COST_ADJ，整型，取值范围[1, 10000]，默认值为100，单位为百分比。

- **{ ENABLE | DISABLE } { TRIGGERS | INTERACTIVE TIMEOUT | NOLOGGING | OPTINFO_LOG }**

||ENABLE (启用)|DISABLE (禁用)|
|---|---|---|
| TRIGGERS | 当前会话下执行的SQL语句将激活相关的触发器。 | 当前会话下执行的SQL语句不会激活触发器。 |
| INTERACTIVE TIMEOUT | 开启会话空闲超时检测。默认情况下，若会话连续30分钟无SQL请求，服务端将自动关闭该会话。 | 关闭会话空闲超时检测。 |
| NOLOGGING | 当前会话下，执行插入操作时不记录重做（Redo）日志和回滚（Undo）日志。**警告**：此方式属于高风险操作，不建议常规使用。若必须使用，务必在NOLOGGING插入操作完成后，显式执行一次全量检查点（CHECKPOINT）保证数据持久化到磁盘，然后才能进行其他正常业务。否则，若数据库因断电等异常宕机，可能导致无法正常恢复。 | 当前会话下，执行插入操作时会正常记录重做日志和回滚日志。 |
|  OPTINFO_LOG | 在当前会话下开启优化器详细日志。执行计划生成的详细过程将被记录到 `log/opt/zengine.opt` 日志文件中。系统默认会在2分钟后自动关闭此日志。如需继续使用，需重新执行此命令开启。 | 在当前会话下关闭优化器详细日志。 |

## 示例

- 设置会话在重做信息写入日志文件后再提交事务。

    ```
        ALTER SESSION SET COMMIT_WAIT_LOGGING = WAIT;
    ```

- 设置日志写入器立即写入每个事务的重做信息。

    ```
        ALTER SESSION SET COMMIT_MODE = IMMEDIATE;
    ```

- 将当前会话时区设置为东八区（北京时间）。

    ```
        ALTER SESSION SET TIME_ZONE = '+08:00';
    ```

- 设置会话的日期显示格式。

    ```
        ALTER SESSION SET NLS_DATE_FORMAT = 'YYYY-MM-DD HH24:MI:SS';
    ```

- 如果存在用户user1，将当前会话的默认模式切换到user1。

    ```
        ALTER SESSION SET current_schema = user1;
    ```

- 开启执行计划中的谓语信息显示。

    ```
        ALTER SESSION SET _SHOW_EXPLAIN_PREDICATE = TRUE;
    ```

- 设置会话锁等待超时时间为0毫秒（即不等待，立即报错）。

    ```
        ALTER SESSION SET LOCK_WAIT_TIMEOUT = 0;
    ```

- 启用当前会话的触发器。

    ```
        ALTER SESSION ENABLE TRIGGERS;
    ```

- 禁用会话空闲超时检测。

    ```
        ALTER SESSION DISABLE INTERACTIVE TIMEOUT;
    ```

- 启用当前会话的NOLOGGING插入模式。

    ```
        ALTER SESSION ENABLE NOLOGGING;
    ```
