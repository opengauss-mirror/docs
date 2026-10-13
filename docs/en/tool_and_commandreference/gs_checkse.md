# gs_checkse

## Background<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_section39821515163211"></a>

The `gs_checkse` tool helps check database connection configurations, file directory security, security authentication settings, and other items. It also sets these security configuration parameters for the database.

## Prerequisites<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_scab2909286904a92959e438b7ac1b8c7"></a>

- The current hardware and network environment are normal.

- The openGauss database must be installed in advance using OM.

- Run the `gs_checkse` command as a common user.

## Syntax<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s991d75846f4c48a298084c67b46b40ee"></a>

- Check database security configuration information

    ```
    gs_checkse -i ITEM [-f HOSTFILE] [-h HOSTNAME] [-X XMLFILE] [--detail] [--database=database] [-o OUTPUT] [-l LOGFILE]
    ```

- Display help information

    ```
    gs_checkse -? | --help 
    ```

- Display version information

    ```
    gs_checkse -V | --version
    ```

## Parameter Description<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s79c5f0d8e9e742deacd81d9e296c2960"></a>

- -i

    Item ID list. Format: `-i A`, `-i B1`, `-i A1 -i A2`, or `-i A1,A2`.

    Value range: A1...A10, B1...B10.

    >[!NOTE] Note
    >
    >A1...A10 means checking only the database security configuration parameters without setting them.
    >B1...B10 means setting the database security configuration parameters to the expected values.
    >A and B cannot be entered at the same time.

    For details about the check items, see [Table 1](#zh-cn_topic_0237152331_zh-cn_topic_0059778883_t5348bfc47f50450687012eacb1a1ba4e).

- -f

    Host name list file.

    >[!NOTE] Note
    >Parameters `-f` and `-h` cannot be used together. When multiple nodes are specified by `-f` or `-h`, `hot_standby` must be set to `on`.

    Value range: List of host names.

- -h

    Specifies the hosts to be checked. Multiple hosts can be specified at the same time, separated by commas (,).

    Value range: Host names of openGauss. If no host is specified, the current host is checked.

- -X

    openGauss XML configuration file.

- --detail

    Display detailed check results.

- --database=database

    Specifies the database to be checked. If not specified, the postgres database is checked by default.

    Default value: postgres.

- -o

    Specifies the output file for the SE check report.

    If not specified, the check results are displayed on the screen.

- -l

    Specifies the log file and its path. If not specified, the log file is stored in the `om` directory under the user directory in the log directory.

    Default value: `${GAUSSLOG}/omm/om/gs\_checkse-YYYY-MM-DD\_hhmmss.log`.

- -?, --help

    Display help information.

- -V, --version

    Display version information.

**Table 1**  Database Security Configuration Check Items

For details about the database security configuration check items, refer to [Secure Configuration Benchmark](https://atomgit.com/opengauss/security/tree/master/secure-configuration-benchmark).
<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_t5348bfc47f50450687012eacb1a1ba4e"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r96d5e4d71c8c46a18f130b0cc1968953"><th class="cellrowborder" valign="top" width="9.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a03238af3de8f43ab9b7cf45ffc1deafb"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a03238af3de8f43ab9b7cf45ffc1deafb"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a03238af3de8f43ab9b7cf45ffc1deafb"></a>ID</p>
</th>
<th class="cellrowborder" valign="top" width="29.24%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9436a520200b4257948723d78a376e0c"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9436a520200b4257948723d78a376e0c"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9436a520200b4257948723d78a376e0c"></a>Check Item</p>
</th>
<th class="cellrowborder" valign="top" width="61.49%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af985ce7e6f564a48874877f1e0b23f4a"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af985ce7e6f564a48874877f1e0b23f4a"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af985ce7e6f564a48874877f1e0b23f4a"></a>Detailed Description</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r5b3c92f7b05e4985874423addad78ee3"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a233e3256b7254d3d809864b2fe9d633d"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a233e3256b7254d3d809864b2fe9d633d"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a233e3256b7254d3d809864b2fe9d633d"></a>A1</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aaee89948999b4c6499ac2b915649500b"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aaee89948999b4c6499ac2b915649500b"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aaee89948999b4c6499ac2b915649500b"></a>Checking Connection configuration</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p312231214577"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p312231214577"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p312231214577"></a><p>Check IP address listening on the host: Listening on all IP addresses on the host is prohibited.</p><p>Check external service port: Ensure that a non-default port number is used for the external service port.</p><p>Check maximum connections of the database instance: Ensure that the maximum connections of the database instance are configured correctly.</p><p>Check maximum connections of the database: Ensure that the maximum connections of the database are configured correctly.</p>
<p>Check connections used by administrators: Ensure that the connections used by system administrators are configured correctly.</p><p>Check maximum connections per user: Ensure that the maximum connections per user are configured correctly.</p><p>Check access permissions of UNIX domain sockets: Ensure that the access permissions of UNIX domain sockets are configured correctly.</p><p>Check md5 authentication for host entries: Ensure that no host entry uses md5 authentication.</p><p>Check hostnossl entries: Ensure that there are no hostnossl entries.</p><p>Check host entries with source address 0.0.0.0/0: Ensure that no host entry has a source address of 0.0.0.0/0.</p><p>Check SSL connection enabled on the server: Ensure that SSL connections are enabled on the server.</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rb2f376211ded4f38bfd31e2bfe310480"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p51180414496"></a>A2</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a14fdaa2fffb84d72bb784a7bd253fba0"></a>File directory security</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_adba7c656fb1f4e038f35a4345a20891e"></a><p>Check database installation directory permissions: Ensure that the permissions of the database installation directory are minimized.</p><p>Check shared directory permissions: Ensure that the permissions of the shared directory are minimized.</p><p>Check binary file directory permissions: Ensure that the permissions of the binary file directory are minimized.</p><p>Check data directory permissions: Ensure that the permissions of the data directory are minimized.</p><p>Check log archive directory permissions: Check the ${GAUSSHOME}/archive directory and ensure that the permissions of the log archive directory are minimized.</p>
<p>Check postgresql.conf file permissions: Ensure that the permissions of the postgresql.conf file are minimized.</p><p>Check pg_hba.conf file permissions: Ensure that the permissions of the pg_hba.conf file are minimized.</p><p>Check log directory permissions: Ensure that the permissions of the log directory are minimized.</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r8eb67a4d5ad8404ebf97db57b971e9da"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p957558145716"></a>A3</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2c06cc2ba9084806a54695fd3d666755"></a>Security authentication configuration</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a2983a9dde6d4457190dfe15b7b967a25"></a><p>Check client authentication timeout: Ensure that the client authentication timeout is configured correctly.</p><p>Check authentication encryption iteration count: Ensure that the authentication encryption iteration count is configured correctly.</p><p>Check failed login attempts: Ensure that the number of allowed failed login attempts is configured correctly.</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r73edb318777c4391bf4786a68c3bfe15"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af883b01e64a6494a9ac0f55b91178fab"></a>A4</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p891624214498"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p891624214498"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p891624214498"></a>Account_password_management</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a495a913742ce40088d7362facbc2ae77"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a495a913742ce40088d7362facbc2ae77"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a495a913742ce40088d7362facbc2ae77"></a><p>Check password complexity verification: Ensure that password complexity verification is enabled.</p><p>Check password encryption method: Ensure that the password encryption method is configured correctly.</p><p>Check password reuse interval: Ensure that the password reuse interval is configured correctly.</p><p>Check account auto unlock time: Ensure that the account auto unlock time is configured correctly.</p>
<p>Check initial user password change upon first login: Ensure that the initial user changes the password upon first login.</p><p>Check user validity period: Ensure that the validity period is configured for users.</p><p>Check password validity period: Ensure that the validity period is configured for passwords.</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rcaa7080fa9e04d3fb757cfea2b58b042"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6b1744ed550c4a3eafad1933b6ff5ab4"></a>A5</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a7981cf941aa140df9c8adfdcdbaef39d"></a>Permission management</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac7d352da00d2466b8a5f8508446a8568"></a><p>Check permissions on the pg_authid system catalog: The PUBLIC role is prohibited from having permissions on the pg_authid system catalog.</p><p>Check CREATE permission in the public schema: The PUBLIC role is prohibited from having the CREATE permission in the public schema.</p>
<p>Check all privileges on objects: Granting all privileges on objects to the PUBLIC role is prohibited.</p><p>Check unnecessary administrative privileges for common users: Ensure that unnecessary administrative privileges are revoked from common users.</p><p>Check separation of powers configuration: Ensure that the separation of powers configuration is enabled.</p><p>Check server-side file COPY permission for administrators: Ensure that the server-side file COPY permission is revoked from system administrators.</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rc10298339e724f9d94e6645a42384db2"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a9df7a5a47f7642a7b1151c786391feac"></a>A6</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a29e20efe094c465893db9f5fd96629e4"></a>Database auditing</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aea4a14047e9b4c1c9782520b08c56fe4"></a><p>Check database audit function: Ensure that the database audit function is enabled.</p><p>Check audit for user login and logout: Ensure that auditing for user login and logout is enabled.</p><p>Check audit for database startup, shutdown, recovery, and switchover: Ensure that auditing for database startup, shutdown, recovery, and switchover is enabled.</p>
<p>Check audit for user lock and unlock: Ensure that auditing for user lock and unlock is enabled.</p><p>Check audit for privilege grant and revoke: Ensure that auditing for privilege grant and revoke is enabled.</p><p>Check audit for database object add, delete, and modify operations: Ensure that auditing for database object add, delete, and modify operations is enabled.</p><p>Check audit for database object queries: Ensure that auditing for database object queries is enabled.</p><p>Check audit priority policy: Ensure that the audit priority policy is configured correctly.</p><p>Check maximum record time for a single audit file: Ensure that the maximum record time for a single audit file is configured correctly.</p><p>Check maximum size of a single audit log file: Ensure that the maximum size of a single audit log file is configured correctly.</p><p>Check maximum disk space occupied by all audit log files: Ensure that the maximum disk space occupied by all audit log files is configured correctly.</p><p>Check maximum number of audit log files: Ensure that the maximum number of audit log files is configured correctly.</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r24f0ef2ad50f4a87b554a01c70871c8f"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ad2fa425a2b3b4b05884a2652f9d8a5f3"></a>A7</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p778356414498"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p778356414498"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p778356414498"></a>Error reporting and logging configuration</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a13ba8b3400004e2da8c5bc1ada6a63d2"></a><p>Check logging collector: Ensure that the logging collector is enabled.</p><p>Check log file name: Ensure that the log file name is configured correctly.</p><p>Check log file permissions: Ensure that the log file permissions are configured correctly.</p>
<p>Check overwriting of log files with the same name: Overwriting log files with the same name is prohibited.</p><p>Check maximum record time for a single log file: Ensure that the maximum record time for a single log file is configured correctly.</p><p>Check maximum size of a single log file: Ensure that the maximum size of a single log file is configured correctly.</p><p>Check client log level: Ensure that the client log level is configured correctly.</p><p>Check server log level: Ensure that the server log level is configured correctly.</p><p>Check log level for recording SQL statements that cause errors: Ensure that the log level for recording SQL statements that cause errors is configured correctly.</p><p>Check logging upon user login: Ensure that logging upon user login is enabled.</p><p>Check logging upon user logout: Ensure that logging upon user logout is enabled.</p><p>Check verbosity of messages written to the server log: Ensure that the verbosity of messages written to the server log is configured correctly.</p><p>Check logging of hostnames: Ensure that hostnames are not logged.</p>
<p>Check debug printing of parse trees: Ensure that debug printing of parse trees is disabled.</p><p>Check debug printing of execution plans: Ensure that debug printing of execution plans is disabled.</p><p>Check debug printing of query rewrites: Ensure that debug printing of query rewrites is disabled.</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r1f0c3a5d936f4d118d7502e9358f2dc3"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aec24ba9bfd1b4d05b1eee7821a2b65b5"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aec24ba9bfd1b4d05b1eee7821a2b65b5"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aec24ba9bfd1b4d05b1eee7821a2b65b5"></a>A8</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac53fa789493c45eba3348172f41af3cb"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac53fa789493c45eba3348172f41af3cb"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ac53fa789493c45eba3348172f41af3cb"></a>Backup configuration</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a24f0bea1a74f4ff1a725b499d4aa6da8"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a24f0bea1a74f4ff1a725b499d4aa6da8"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a24f0bea1a74f4ff1a725b499d4aa6da8"></a><p>Check WAL information logging level: Ensure that the WAL information logging level is configured correctly.</p><p>Check archive mode: Ensure that archive mode is enabled.</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r5f0c920f5297418184dcdb383ab11e9a"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a1ff804b1d6f44f748954517b05edcf4c"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a1ff804b1d6f44f748954517b05edcf4c"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a1ff804b1d6f44f748954517b05edcf4c"></a>A9</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p268185614498"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p268185614498"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0058968139_p268185614498"></a>Runtime environment configuration</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa44f04b45c754f509f540f3b106f4374"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa44f04b45c754f509f540f3b106f4374"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa44f04b45c754f509f540f3b106f4374"></a><p>Check file permission mask: Ensure that the file permission mask is configured correctly.</p><p>Check user process information: Ensure that process information is hidden from other users.</p><p>Check NTP clock synchronization: Ensure that NTP clock synchronization is enabled.</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rf7012454f0ce4cffb8014b14f9e92d75"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a832f9866af574a0c965b70b5db06c2c5"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a832f9866af574a0c965b70b5db06c2c5"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a832f9866af574a0c965b70b5db06c2c5"></a>A10</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p775452414498"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p775452414498"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p775452414498"></a>Other configurations</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p849398214577"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p849398214577"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p849398214577"></a><p>Check backslash_quote parameter: Ensure that the backslash_quote parameter is configured correctly.</p><p>Check system catalog structure: Modifying the system catalog structure is prohibited.</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r7a1a89e18a204b68b2120fcfa6914a58"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af894abefcc0f470583b5eec76530e7f4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af894abefcc0f470583b5eec76530e7f4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_af894abefcc0f470583b5eec76530e7f4"></a>B1</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6396a280d13e415db90c18f43bbe91b0"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6396a280d13e415db90c18f43bbe91b0"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_a6396a280d13e415db90c18f43bbe91b0"></a>Set connection configuration</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa71185e87002408d98a19dc37eda29a4"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa71185e87002408d98a19dc37eda29a4"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_aa71185e87002408d98a19dc37eda29a4"></a><p>Set IP address listening on the host: Modify the setting when the parameter value is *.</p><p>Set maximum connections of the database instance: Modify the setting to the default value of 5000 when the parameter value is not 5000.</p><p>Set maximum connections of the database: Modify the setting to 1024 when the parameter value is -1 or greater than 1024, which means unlimited connections.</p>
<p>Set connections used by administrators: Modify the setting when the parameter value is not 3.</p><p>Set maximum connections per user: Modify the setting to 1024 when the user is allowed to have unlimited connections.</p><p>Set access permissions of UNIX domain sockets: Modify the setting when the parameter value is not 0700.</p><p>Set SSL connection enabled on the server: Ensure that this function is enabled. If not, modify the setting.</p></p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r11c8b6aa951b4435b59f1db495499c16"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p37709081505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p37709081505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p37709081505"></a>B2</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p370081631505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p370081631505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p370081631505"></a>Set File directory security</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p448711891505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p448711891505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p448711891505"></a>Set database installation directory permissions: Modify the setting when the permissions of the database installation directory are not minimized.</p><p>Set shared directory permissions: Modify the setting when the permissions of the shared directory are not minimized.</p>
<p>Set binary file directory permissions: Modify the setting when the permissions of the binary file directory are not minimized.</p><p>Set data directory permissions: Modify the setting when the permissions of the data directory are not minimized.</p><p>Set log archive directory permissions: Modify the setting when the permissions of the log archive directory are not minimized.</p><p>Set postgresql.conf file permissions: Modify the setting when the permissions of the postgresql.conf file are not minimized.</p><p>Set pg_hba.conf file permissions: Modify the setting when the permissions of the pg_hba.conf file are not minimized.</p><p>Set log directory permissions: Modify the setting when the permissions of the log directory are not minimized.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r5cc6eaca17574b558edd607dacf979d8"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p290726971505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p290726971505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p290726971505"></a>B3</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p60782711505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p60782711505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p60782711505"></a>Set security authentication configuration</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p225779491505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p225779491505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p225779491505"></a>Set client authentication timeout: Modify the setting when the parameter value is not 1 min.</p><p>Set authentication encryption iteration count: Modify the setting when the parameter value is less than 10000.</p>
<p>Set failed login attempts: Modify the setting to the default value of 10 when the parameter value is 0.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_ra05346e39a6244748e5e145c6075b85f"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p402350061505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p402350061505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p402350061505"></a>B4</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p378100851505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p378100851505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p378100851505"></a>Set account password management</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p427180071505"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p427180071505"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p427180071505"></a>Set password complexity verification: Modify the setting when the parameter value is not 1.</p><p>Set password encryption method: Modify the setting to 2 if the parameter value is 0 or 1.</p>
<p>Set password reuse interval: Modify the setting to 60 when the parameter value is 0.</p><p>Set account auto unlock time: Modify the setting to 1d when the parameter value is 0.</p><p>Set user validity period: Modify the configuration when there are users without a configured validity period.</p><p>Set password validity period: Modify the configuration to 90 when the parameter value is 0.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_rff336c30b6524b058795688afdab8a85"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p547145171506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p547145171506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p547145171506"></a>B5</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p26908721506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p26908721506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p26908721506"></a>Set permission management</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p166340511506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p166340511506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p166340511506"></a>Set permissions on the pg_authid table: The PUBLIC role is prohibited from having permissions on the pg_authid system catalog.</p><p>Set CREATE permission in the public schema: The PUBLIC role is prohibited from having the CREATE permission in the public schema.</p>
<p>Set all privileges on objects: Granting all privileges on objects to the PUBLIC role is prohibited.</p><p>Set administrative privileges for common users: Ensure that unnecessary administrative privileges are revoked from common users.</p><p>Set separation of powers: Modify the setting to enable the separation of powers configuration when the parameter value is not on.</p><p>Set COPY permission for administrators: Ensure that the server-side file COPY permission is revoked from system administrators.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_r90e329f1dde24bbfaa307549b8755680"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p656129311506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p656129311506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p656129311506"></a>B6</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p130471551506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p130471551506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p130471551506"></a>Set database auditing</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p501866071506"><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p501866071506"></a><a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_zh-cn_topic_0058968139_p501866071506"></a>Set database audit function: Enable this function if it is disabled.</p><p>Set audit for user login and logout: Modify the setting when the parameter value is not 7.</p>
<p>Set audit for database startup, shutdown, recovery, and switchover: Modify the parameter when the value is not 1.</p><p>Set audit for user lock and unlock: Modify the setting when the parameter value is not 1.</p><p>Set audit for privilege grant and revoke: Modify the setting when the parameter value is not 1.</p><p>Set audit for database object add, delete, and modify operations: Modify the setting to the default value of 67121159 when the parameter value is less than 67121159.</p><p>Set audit for database object queries: Modify the setting when the parameter value is not 1.</p><p>Set audit priority policy: Enable this function if it is disabled.</p><p>Set maximum record time for a single file: Set the recommended value to the default of 1d when the maximum record time is not 1d.</p><p>Set maximum size of a single audit log file: Set the recommended value to 10MB when the parameter value is not 10MB.</p>
<p>Set maximum disk space occupied by all audit log files: Set the recommended value to no less than 1 GB when the parameter value is not 1 GB.</p><p>Set maximum number of audit log files: Set the recommended value to the default of 1048576 when the parameter value is not 1048576.</p>
</td>
</tr>
<tr id="row1725332313128"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="p4254202319125"><a name="p4254202319125"></a><a name="p4254202319125"></a>B7</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="p8254132331214"><a name="p8254132331214"></a><a name="p8254132331214"></a>Set error reporting and logging configuration</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="p525442331211"><a name="p525442331211"></a><a name="p525442331211"></a>Set logging collector: Enable this function if it is disabled.</p><p>Set log file name: Modify the configuration when the parameter value is not the default.</p><p>Set log file permissions: Modify the setting when the parameter value is not 0600.</p><p>Set overwriting of files with the same name: Set the parameter when the value is not off.</p><p>Set maximum record time for a single log file: Set the recommended value to the default of 1d when the parameter value is not 1d.</p><p>Set maximum size of a single log file: Set the recommended value to the default of 20MB when the parameter value is not 20MB.</p><p>Set client log level: Set the parameter when the value is not notice.</p>
<p>Set server log level: Set the parameter when the value is not warning.</p><p>Set log level for recording SQL statements that cause errors: Set the parameter when the value is not error.</p><p>Set logging upon user login: Modify the setting when the parameter value is not on.</p><p>Set logging upon user logout: Enable this function if it is disabled.</p><p>Set verbosity of messages written to the server log: Modify the setting when the parameter value is not default.</p><p>Set logging of hostnames: Modify the setting when the parameter value is not off.</p><p>Set parse tree debugging: Modify the setting when the parameter value is not off.</p><p>Set execution plan debug printing: Modify the setting when the parameter value is not off.</p><p>Set rewrite debug printing: Modify the setting when the parameter value is not off.</p>
</td>
</tr>
<tr id="row1725332313128"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="p4254202319125"><a name="p4254202319125"></a><a name="p4254202319125"></a>B8</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="p8254132331214"><a name="p8254132331214"></a><a name="p8254132331214"></a>Set backup configuration</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="p525442331211"><a name="p525442331211"></a><a name="p525442331211"></a>Set WAL information logging level: Check whether the parameter value is hot_standby. If not, modify the setting.</p>
</td>
</tr>
<tr id="row1725332313128"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="p4254202319125"><a name="p4254202319125"></a><a name="p4254202319125"></a>B9</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="p8254132331214"><a name="p8254132331214"></a><a name="p8254132331214"></a>Set runtime environment configuration</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="p525442331211"><a name="p525442331211"></a><a name="p525442331211"></a>Set file permission mask: Modify the setting when the parameter value is not 0077. You need to manually run the `source ~/.bashrc` command.</p>
</td>
</tr> 
<tr id="row1725332313128"><td class="cellrowborder" valign="top" width="9.27%" headers="mcps1.2.4.1.1 "><p id="p4254202319125"><a name="p4254202319125"></a><a name="p4254202319125"></a>B10</p>
</td>
<td class="cellrowborder" valign="top" width="29.24%" headers="mcps1.2.4.1.2 "><p id="p8254132331214"><a name="p8254132331214"></a><a name="p8254132331214"></a>Set other configurations</p>
</td>
<td class="cellrowborder" valign="top" width="61.49%" headers="mcps1.2.4.1.3 "><p id="p525442331211"><a name="p525442331211"></a><a name="p525442331211"></a>Set backslash_quote parameter: Modify the setting when the parameter value is not safe_encoding.</p><p>Set system catalog structure: Modify the setting when the parameter value is not off.</p>
</td>
</tr> 
</tbody>
</table>

>[!NOTE] Note
>
> - The above check items and set items are used to ensure that the parameters conform to the preset default values. Adjust these parameters according to your actual needs. For detailed check and set procedures, refer to the relevant security baseline configuration document for more information.
>
> - After setting the umask parameter using option B9, you need to manually run the `source ~/.bashrc` command to make the configuration take effect.
>
> - When you use `gs\_checkse` to set option parameters, the database will be restarted to apply the configuration. Therefore, exercise caution and perform the fix only when necessary to avoid affecting ongoing operations due to the database restart.

## Example<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s0a0dfe17cef247ad9b50e77ed84aff9f"></a>

Use the following command to check database security configurations.

```
gs_checkse -i A -h plat1 -o /var/log/checkse
Performing operation system check/set. Output the result to the file /var/log/checkse.
Operation system check/set is completed.
Total numbers:10. Abnormal numbers:0. Warning numbers:2.

```

View the check results.

```
vim /var/log/checkse 
Checking items:
    A1. [ Checking Connection configuration ]                   : Warning
    A2. [ File directory security ]                             : Normal
    A3. [ Security authentication configuration ]               : Normal
    A4. [ Account_password_management ]                         : Normal
    A5. [ Permission management ]                               : Normal
    A6. [ Database auditing ]                                   : Normal
    A7. [ Error reporting and logging configuration ]           : Normal
    A8. [ Backup configuration ]                                : Normal
    A9. [ Runtime environment configuration ]                   : Warning
    A10.[ Other configurations ]                                : Normal
```

## Related Commands<a name="zh-cn_topic_0237152331_zh-cn_topic_0059778883_s3229172816a643dda00f100421b8a903"></a>

[gs\_check](gs_check.md), [gs\_checkperf](gs_checkperf.md), [gs\_checkos](gs_checkos.md)
