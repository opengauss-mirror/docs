# ALTER SYSTEM SET<a name="EN-US_TOPIC_0289900623"></a>

## Function<a name="en-us_topic_0283137187_en-us_topic_0237122075_en-us_topic_0059778605_s40bbf40e12d1487aaca3ddd1b9bb55e0"></a>

**ALTER SYSTEM SET**  sets GUC parameters of the POSTMASTER, SIGHUP, and BACKEND levels. This command writes parameters into the configuration file. The time to take effect varies according to the level.

## Precautions<a name="en-us_topic_0283137187_en-us_topic_0237122075_en-us_topic_0059778605_s16279beb536e4281b8403ab11195cb3a"></a>

-   This command can be used only by initial users and users with the  **sysadmin**  permission.
-   The effective time of GUC parameters at different levels is as follows:
    -   The GUC parameters at the POSTMASTER level take effect only after the system is restarted.
    -   The GUC parameters at the BACKEND level take effect only after the session is reconnected.
    -   The GUC parameters at the SIGHUP level take effect immediately. \(Actually, there is a slight delay to wait for the thread reloading the parameter.\)

-   You can set the  [**audit\_set\_parameter**](../DatabaseReference/operation-auditing.md#en-us_topic_0283136929_en-us_topic_0237124747_en-us_topic_0059777487_sc59738d0efe94f909306fde1f3d04f1e)  parameter to specify whether the operation is audited.
-   The operation can be synchronized to the standby server.
-   The operation is the same as  **gs\_guc**, which does not pay attention to whether the database is a primary or standby node or whether the database is read-only.
-   The operation cannot be executed in a transaction because it cannot be rolled back.
-   The following parameters can be modified only by the initial user:

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
-- Set the SIGHUP-level parameter audit_enabled.
openGauss=#  alter system set audit_enabled to off;
ALTER SYSTEM SET
openGauss=#  show audit_enabled;
 audit_enabled
---------------
 off
(1 row)

-- The setting of the POSTMASTER-level parameter enable_thread_pool takes effect after the system is restarted.
openGauss=# alter system set enable_thread_pool to on;
NOTICE:  please restart the database for the POSTMASTER level parameter to take effect.
ALTER SYSTEM SET
```

