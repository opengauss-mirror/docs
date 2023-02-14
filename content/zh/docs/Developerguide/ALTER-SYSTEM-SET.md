# ALTER SYSTEM SET

## 功能描述<a name="zh-cn_topic_0283137187_zh-cn_topic_0237122075_zh-cn_topic_0059778605_s40bbf40e12d1487aaca3ddd1b9bb55e0"></a>

ALTER SYSTEM SET命令用于设置POSTMASTER、SIGHUP、BACKEND级别的GUC参数。此命令会将参数写入配置文件，不同级别生效方式有所不同。

## 注意事项<a name="zh-cn_topic_0283137187_zh-cn_topic_0237122075_zh-cn_topic_0059778605_s16279beb536e4281b8403ab11195cb3a"></a>

-   此命令仅限初始用户和拥有sysadmin权限的用户才可使用。
-   不同级别GUC参数生效时间如下：
    -   POSTMASTER级别的GUC参数需要重启后才生效。
    -   BACKEND级别的GUC参数需要会话重新连接后才生效。
    -   SIGHUP级别的GUC参数立即生效（需要等待线程重新加载参数，实际略微有延迟）。

-   通过配置[audit\_set\_parameter](操作审计.md#zh-cn_topic_0283136929_zh-cn_topic_0237124747_zh-cn_topic_0059777487_sc59738d0efe94f909306fde1f3d04f1e)参数，可以配置此操作是否被审计。
-   操作可被备机同步。
-   同gs\_guc一致，并不关注数据库是主或备节点、是否只读。
-   不可在事务中执行，因为此操作无法被回滚。
-   部分参数只能由初始用户修改，具体如下：

    ```
    audit_copy_exec, audit_data_format, audit_database_process, audit_directory, audit_dml_state,
    audit_dml_state_select, audit_enabled, audit_file_remain_threshold, audit_file_remain_time,
    audit_function_exec, audit_grant_revoke, audit_login_logout, audit_resource_policy,
    audit_rotation_interval, audit_rotation_size, audit_set_parameter, audit_space_limit,
    audit_system_object, audit_user_locked, audit_user_violation,
    asp_log_directory, config_file, data_directory, enable_access_server_directory,
    enable_copy_server_files, external_pid_file, hba_file, ident_file, log_directory, perf_directory,
    query_log_directory, ssl_ca_file, ssl_cert_file, ssl_crl_file, ssl_key_file, stats_temp_directory,
    unix_socket_directory, unix_socket_group, unix_socket_permissions,
    krb_caseins_users, krb_server_keyfile, krb_srvname, allow_system_table_mods, enableSeparationOfDuty,
    modify_initial_password, password_encryption_type, password_policy
    ```


## 语法格式<a name="zh-cn_topic_0283137187_zh-cn_topic_0237122075_zh-cn_topic_0059778605_s3b7743fa7cab42718575f7194d1112ba"></a>

```
ALTER SYSTEM SET parameter TO value;
```

## 参数说明<a name="zh-cn_topic_0283137187_zh-cn_topic_0237122075_zh-cn_topic_0059778605_sa834b01395fd4366a5dce7a64ad867b6"></a>

-   **parameter**

    GUC参数名。

-   **value**

    GUC参数值。


## 示例<a name="zh-cn_topic_0283137187_section49061716194314"></a>

```
--设置SIGHUP级别参数audit_enabled。
openGauss=#  alter system set audit_enabled to off;
ALTER SYSTEM SET
openGauss=#  show audit_enabled;
 audit_enabled
---------------
 off
(1 row)

--设置POSTMASTER级别参数 enable_thread_pool，将在重启之后生效。
openGauss=# alter system set enable_thread_pool to on;
NOTICE:  please restart the database for the POSTMASTER level parameter to take effect.
ALTER SYSTEM SET
```
