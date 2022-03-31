# Maintaining Audit Logs<a name="EN-US_TOPIC_0289900145"></a>

## Prerequisites<a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_sbf90b4aa56054a53b7c697eec67d09ac"></a>

You have the audit permission.

## Background<a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_scec2076978bb4ca1b7959fef703791b2"></a>

-   [Table 1](#en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_t611ff04302e6463c8850c39d3e1d78fb)  lists the configuration parameters related to audit logs and the parameter descriptions.

    **Table  1**  Configuration parameters of audit logs

    <a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_t611ff04302e6463c8850c39d3e1d78fb"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_r8d98f172fcb143a4b42b10577220d355"><th class="cellrowborder" valign="top" width="37%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a193720958fde4c19bc65993675dfa1a9"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a193720958fde4c19bc65993675dfa1a9"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a193720958fde4c19bc65993675dfa1a9"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="28.999999999999996%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_af5d2e50e4bb64af6a29f7a3fdb06d45f"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_af5d2e50e4bb64af6a29f7a3fdb06d45f"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_af5d2e50e4bb64af6a29f7a3fdb06d45f"></a>Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="34%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a0b6844c422b4492ebbafb18967b858ac"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a0b6844c422b4492ebbafb18967b858ac"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a0b6844c422b4492ebbafb18967b858ac"></a>Default Value</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_r2604828d09ad4f47ab4f2c1801948ebd"><td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_p1759155401418"><a name="en-us_topic_0283136629_en-us_topic_0237121114_p1759155401418"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_p1759155401418"></a><a href="audit-switch.md#en-us_topic_0283137524_en-us_topic_0237124745_en-us_topic_0059777744_sd283781eb52b490db30d6a5549f7db3e">audit_directory</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="28.999999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_acf56af2e70564f0aad2b714c6ab657f4"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_acf56af2e70564f0aad2b714c6ab657f4"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_acf56af2e70564f0aad2b714c6ab657f4"></a>Audit file storage directory</p>
    </td>
    <td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_adaa9609514694908b74629047cbb90be"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_adaa9609514694908b74629047cbb90be"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_adaa9609514694908b74629047cbb90be"></a><strong id="b4937035121714"><a name="b4937035121714"></a><a name="b4937035121714"></a><span id="en-us_topic_0283136629_en-us_topic_0237121114_text13425845195119"><a name="en-us_topic_0283136629_en-us_topic_0237121114_text13425845195119"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_text13425845195119"></a>/var/log/gaussdb/</span></strong><em id="i109442238161"><a name="i109442238161"></a><a name="i109442238161"></a>User name</em><strong id="b41601414166"><a name="b41601414166"></a><a name="b41601414166"></a>/pg_audit</strong></p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136629_en-us_topic_0237121114_row3691171915118"><td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_p125775410146"><a name="en-us_topic_0283136629_en-us_topic_0237121114_p125775410146"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_p125775410146"></a><a href="audit-switch.md#en-us_topic_0283137524_en-us_topic_0237124745_section939915522551">audit_resource_policy</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="28.999999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_p269312191114"><a name="en-us_topic_0283136629_en-us_topic_0237121114_p269312191114"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_p269312191114"></a>Policy for saving audit logs</p>
    </td>
    <td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_p2693119412"><a name="en-us_topic_0283136629_en-us_topic_0237121114_p2693119412"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_p2693119412"></a><strong id="b16570143511185"><a name="b16570143511185"></a><a name="b16570143511185"></a>on</strong> (indicating that the space configuration policy is used)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_r4addc114b7bc4cb28f59858d1a31e01c"><td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_p1154754131410"><a name="en-us_topic_0283136629_en-us_topic_0237121114_p1154754131410"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_p1154754131410"></a><a href="audit-switch.md#en-us_topic_0283137524_en-us_topic_0237124745_en-us_topic_0059777744_s167d5900250946bca199444c0617c714">audit_space_limit</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="28.999999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_ae74583aff2ed4414bf4d178de6d1965f"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_ae74583aff2ed4414bf4d178de6d1965f"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_ae74583aff2ed4414bf4d178de6d1965f"></a>Maximum storage space occupied by audit files</p>
    </td>
    <td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_af2b1d30a53184505947fb653e984e6e6"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_af2b1d30a53184505947fb653e984e6e6"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_af2b1d30a53184505947fb653e984e6e6"></a>1 GB</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136629_en-us_topic_0237121114_row108931544517"><td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_p35275441413"><a name="en-us_topic_0283136629_en-us_topic_0237121114_p35275441413"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_p35275441413"></a><a href="audit-switch.md#en-us_topic_0283137524_en-us_topic_0237124745_section149961828185211">audit_file_remain_time</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="28.999999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_p13893114414110"><a name="en-us_topic_0283136629_en-us_topic_0237121114_p13893114414110"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_p13893114414110"></a>Minimum period for storing audit log files</p>
    </td>
    <td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_p10893844513"><a name="en-us_topic_0283136629_en-us_topic_0237121114_p10893844513"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_p10893844513"></a>90</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_rdc829df6e13b480a9a813d6d85854515"><td class="cellrowborder" valign="top" width="37%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_p143544143"><a name="en-us_topic_0283136629_en-us_topic_0237121114_p143544143"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_p143544143"></a><a href="audit-switch.md#en-us_topic_0283137524_en-us_topic_0237124745_en-us_topic_0059777744_s7fbbb3e514454b11aa33310454965b66">audit_file_remain_threshold</a></p>
    </td>
    <td class="cellrowborder" valign="top" width="28.999999999999996%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a69fbe4f040e448379bd38496b8fa50fa"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a69fbe4f040e448379bd38496b8fa50fa"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a69fbe4f040e448379bd38496b8fa50fa"></a>Maximum number of audit files in the audit directory</p>
    </td>
    <td class="cellrowborder" valign="top" width="34%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_aaa60b238c94547109f70cf95c6f14eff"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_aaa60b238c94547109f70cf95c6f14eff"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_aaa60b238c94547109f70cf95c6f14eff"></a>1024</p>
    </td>
    </tr>
    </tbody>
    </table>

-   The  **pg\_delete\_audit**  function is used to delete audit logs and is an internal SQL function of the database. Its syntax is as follows:

    ```
    pg_delete_audit(timestamp startime,timestamp endtime)
    ```

    **startime**  and  **endtime**  indicate the audit record start time and end time, respectively.

-   Audit content is commonly recorded to database tables or OS files.  [Table 2](#en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_t078fedc6256143429079733b91e11d22)  lists the advantages and disadvantages of the two record methods.

    **Table  2**  Comparison between the two record methods

    <a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_t078fedc6256143429079733b91e11d22"></a>
    <table><thead align="left"><tr id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_r2dcf662de916436294c42715b701b612"><th class="cellrowborder" valign="top" width="16.37836216378362%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a2d52f31f283b42bf84382b8527dd0ede"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a2d52f31f283b42bf84382b8527dd0ede"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a2d52f31f283b42bf84382b8527dd0ede"></a>Mode</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.7966203379662%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a993895c8ab6e429aa406461afb663f0f"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a993895c8ab6e429aa406461afb663f0f"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a993895c8ab6e429aa406461afb663f0f"></a>Benefit</p>
    </th>
    <th class="cellrowborder" valign="top" width="49.825017498250176%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_aa160057f8f424a0db59a7e9ae1d00943"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_aa160057f8f424a0db59a7e9ae1d00943"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_aa160057f8f424a0db59a7e9ae1d00943"></a>Drawback</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_r6b863162ea9c44d9a233b0e8ab9f4288"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_acf8f4781d45f407f866ec0af7f9fc2d2"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_acf8f4781d45f407f866ec0af7f9fc2d2"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_acf8f4781d45f407f866ec0af7f9fc2d2"></a>Record in tables</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.7966203379662%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a8124271dab28420195b4e642bdd61b5c"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a8124271dab28420195b4e642bdd61b5c"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a8124271dab28420195b4e642bdd61b5c"></a>Users do not need to maintain audit logs.</p>
    </td>
    <td class="cellrowborder" valign="top" width="49.825017498250176%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a603ae97804bb4833becf922f6b81a14f"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a603ae97804bb4833becf922f6b81a14f"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a603ae97804bb4833becf922f6b81a14f"></a>Any users having certain permissions to access database objects can access the audit tables. If a user illegally performs operations on the audit tables, the audit records may become inaccurate.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_r61ce01a0283f4d31aca53d248c27bff9"><td class="cellrowborder" valign="top" width="16.37836216378362%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a51eb5c334c7a49d2831f13f5f89ac29b"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a51eb5c334c7a49d2831f13f5f89ac29b"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a51eb5c334c7a49d2831f13f5f89ac29b"></a>Record in OS files</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.7966203379662%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a59cc39e7e85149f3bc1397e2727b6a03"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a59cc39e7e85149f3bc1397e2727b6a03"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a59cc39e7e85149f3bc1397e2727b6a03"></a>This method has higher security because a user with the permission to access the database may not have the permission to access the OS files.</p>
    </td>
    <td class="cellrowborder" valign="top" width="49.825017498250176%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a9d730cf2b6ef4067a993b42182d7b505"><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a9d730cf2b6ef4067a993b42182d7b505"></a><a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_a9d730cf2b6ef4067a993b42182d7b505"></a>Users need to maintain audit logs.</p>
    </td>
    </tr>
    </tbody>
    </table>

    For database security purposes, openGauss adopts the second method to save audit results for reliability.


## Procedure<a name="en-us_topic_0283136629_en-us_topic_0237121114_en-us_topic_0059778793_sdeb071ceee2f4cfdb1ae1dc6a00da86d"></a>

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres**  is the name of the database to be connected, and  **8000**  is the port number of the database primary node.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql((openGauss x.x.x build f521c606) compiled at 2021-09-16 14:55:22 commit 2935 last mr 6385 release)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    openGauss=# 
    ```

3.  Select a method to maintain audit logs.
    -   Automatic deletion of audit logs

        If the storage space occupied by audit files or the number of audit files reaches the upper limit, the system automatically deletes the oldest audit files and records deletion information to audit logs.

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >By default, the allowed maximum storage space that can be occupied by audit files is set to  **1024 MB**. Users can set the value as required.

        Configure the allowed maximum size of storage space occupied by audit files \(**audit\_space\_limit**\).

        1.  View the current value.

            ```
            openGauss=# SHOW audit_space_limit;
             audit_space_limit
            -------------------
            1 GB
            (1 row)
            ```

            If the command output is not 1 GB \(1024 MB\), run the  **\\q**  command to exit the database.

        2.  Run the following command to set the parameter to its default value 1024 MB:

            ```
            gs_guc reload  -D /gaussdb/data/datanode -c "audit_space_limit=1024MB"
            ```

        Configure the maximum number of audit files \(**audit\_file\_remain\_threshold**\).

        1.  View the current value.

            ```
            openGauss=# SHOW audit_file_remain_threshold;
             audit_file_remain_threshold
            -----------------------------
             1024
            (1 row)
            ```

            If the command output is not 1024, run the  **\\q**  command to exit the database.

        2.  Run the following command to set the parameter to its default value  **1024**:

            ```
            gs_guc reload  -D /gaussdb/data/datanode -c "audit_file_remain_threshold=1024"
            ```

    -   Manually back up audit files.

        If the storage space occupied by audit files or the number of audit logs exceeds the threshold specified by the configuration file, the system automatically deletes the oldest audit files. Therefore, you are advised to periodically save important audit logs.

        1.  Run the  **show**  command to view the directory \(**audit\_directory**\) where audit files are saved.

            ```
            openGauss=# SHOW audit_directory;
            ```

        2.  Copy the entire audit directory elsewhere to save it.

    -   Manually delete audit logs.

        Run the  **pg\_delete\_audit**  command to manually delete the audit records generated during a specified period of time.

        Example: Manually delete the audit records generated from September 20, 2012 to September 21, 2012.

        ```
        openGauss=# SELECT pg_delete_audit('2012-09-20 00:00:00','2012-09-21 23:59:59');
        ```



