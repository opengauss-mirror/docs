# Setting the Unified Audit Policy<a name="ZH-CN_TOPIC_0000001664414974"></a>

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:47:06.968Z pushedAt=2026-09-11T11:52:18.330Z -->

## Background Information<a name="section69135713151"></a>

Traditional auditing generates a large volume of audit logs and does not support customized access object and access source configurations, making it inconvenient for database security administrators to analyze audit logs. In contrast, the unified audit policy supports binding resource labels and configuring data sources for outputting audit logs, thereby improving the efficiency of database monitoring by security administrators.

## Operation Steps<a name="section199001315531"></a>

1. Run the following command to enable the unified audit_switch.

    ```
    gs_guc reload -Z coordinator -N all -I all -c "enable_security_policy=on"
    ```

2. Configure rsyslog as the operating system root user.

    Add the following content to the operating system background service configuration file /etc/rsyslog.conf:

    ```
    local0.* /var/log/localmessages  
    ```

    Restart the rsyslog service to make the configuration take effect.

    ```
    sudo systemctl restart rsyslog
    ```

3. Log in to the database as the security policy administrator, configure resource labels. For operations related to the security policy administrator, see the [administrators](administrators.md) section. For audit policy parameters, refer to the SQL syntax description.

    ```
    -- Initialize resources.
    DROP TABLE IF EXISTS table_security_auditing;
    CREATE TABLE table_security_auditing(id int,name char(10));
    create user user001 password '********';
    create user user002 password '********';
    grant all privileges to user001;
    
    -- Create a resource label.
    DROP RESOURCE LABEL IF EXISTS rl_security_auditing;
    CREATE RESOURCE LABEL rl_security_auditing ADD TABLE(table_security_auditing);
    
    -- Create an audit policy to audit DDL and DML operations performed by user user001 on the resource label rl_security_auditing.
    CREATE AUDIT POLICY audit_security_priall PRIVILEGES all on LABEL(rl_security_auditing) FILTER ON ROLES(user001);
    CREATE AUDIT POLICY audit_security_accall ACCESS all on LABEL(rl_security_auditing) FILTER ON ROLES(user001);
    ```

4. Log in to the database as user user001 and perform the following operations to trigger the audit policy.

    ```
    -- DML
    insert into table_security_auditing values(1,'22');
    update table_security_auditing set name=234123 where id=1;
    delete from table_security_auditing where id=1;
    truncate table table_security_auditing;
    -- DDL
    GRANT INSERT ON TABLE table_security_auditing TO user002;
    revoke insert on table table_security_auditing from user002;
    ```

5. Use the operating system root user to view the audit log /var/log/localmessage.

    ```
    Oct  9 15:38:11 localhost PGAUDIT: AUDIT EVENT: user name: [user001], app_name: [gsql], client_ip: [local], access type: [INSERT], policy id: [16423], table: [public.table_security_auditi           ng], result: [OK]
    Oct  9 15:38:11 localhost PGAUDIT: AUDIT EVENT: user name: [user001], app_name: [gsql], client_ip: [local], access type: [UPDATE], policy id: [16423], table: [public.table_security_auditi           ng], result: [OK]
    Oct  9 15:38:11 localhost PGAUDIT: AUDIT EVENT: user name: [user001], app_name: [gsql], client_ip: [local], access type: [DELETE], policy id: [16423], table: [public.table_security_auditi           ng], result: [OK]
    Oct  9 15:38:12 localhost PGAUDIT: AUDIT EVENT: user name: [user001], app_name: [gsql], client_ip: [local], access type: [TRUNCATE], policy id: [16423], table: [public.table_security_audi           ting], result: [OK]
    Oct  9 15:49:41 localhost PGAUDIT: AUDIT EVENT: user name: [user001], app_name: [gsql], client_ip: [local], privilege type: [GRANT ON TABLE postgres.public.table_security_auditing TO user002], poy id: [16408], result: [OK]
    Oct  9 15:49:53 localhost PGAUDIT: AUDIT EVENT: user name: [user001], app_name: [gsql], client_ip: [local], privilege type: [REVOKE ON TABLE postgres.public.table_security_auditing FROM user002],licy id: [16408], result: [OK]
    ```

6. If you no longer need to audit specific resources, you can remove the audit policy.

    ```
    drop audit policy audit_security_priall;  
    drop audit policy audit_security_accall; 
    ```

## Unified Audit Log Field Description<a name="section19764337151917"></a>

```
Oct  9 15:38:12 localhost PGAUDIT: AUDIT EVENT: user name: [user001], app_name: [gsql], client_ip: [local], access type: [TRUNCATE], policy id: [16423], table: [public.table_security_auditing], result: [OK]
```

Taking the audit log triggered by the TRUNCATE operation above as an example, the field descriptions are as follows:

|Timestamp|Host Name|Event Type|User Name|Trigger Client|Client IP|Operation Type|Policy ID|Column Name|Execution Result|

>[!WARNING]Note
>In scenarios where the DATABASE LINK feature is used, for a DATABASE LINK request initiated by a client, the actual sender is the server, and attributes such as the sender IP address will be those of the server.