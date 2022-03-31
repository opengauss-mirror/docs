# Unified Audit<a name="EN-US_TOPIC_0000001105075476"></a>

## Availability<a name="section17746747"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section25503003"></a>

The audit mechanism is a security management solution that can effectively deal with the attackers' repudiation. The larger the audit scope is, the more operations can be monitored and the more audit logs are generated, affecting the actual audit efficiency. The unified audit mechanism is a technology that implements efficient security audit management by customizing audit policies. After the administrator defines the audit object and audit behaviors, if the task executed by a user is associated with an audit policy, the corresponding audit behavior is generated and the audit log is recorded. Customized audit policies can cover common user management activities, as well as DDL and DML operations, meeting routine audit requirements.

## Benefits<a name="section28200442"></a>

Audit is indispensable for routine security management. When a traditional audit mechanism is used to audit an operation, such as  **SELECT**, a large number of audit logs are generated, increasing the I/O of the entire system and affecting the system performance and audit efficiency of administrators. The unified audit mechanism allows you to customize policies for generating audit logs. For example, only the operation that database account  **A**  queries table  **a**  is audited. Customized audit greatly reduces the number of generated audit logs, ensuring audit behaviors and reducing the impact on system performance. In addition, customized audit policies can improve the audit efficiency of administrators.

## Description<a name="section52477394"></a>

The unified audit mechanism customizes audit behaviors based on resource labels and classifies the supported audit behaviors into the  **ACCESS**  and  **PRIVILEGES**  classes. The SQL syntax for creating a complete audit policy is as follows:

```
CREATE RESOURCE LABEL auditlabel add table(table_for_audit1, table_for_audit2);
CREATE AUDIT POLICY audit_select_policy ACCESS SELECT ON LABEL(auditlabel) FILTER ON ROLES(usera);
CREATE AUDIT POLICY audit_admin_policy PRIVILEGES ALTER, DROP ON LABEL(auditlabel) FILTER ON IP(local);
```

**auditlabel**  indicates the resource label in the current audit, which contains two table objects.  **audit\_select\_policy**  defines the audit policy for user  **usera**  to audit the  **SELECT**  operation on the objects with the  **auditlabel**  label, regardless of the access source.  **audit\_admin\_policy**  defines a local audit policy for  **ALTER**  and  **DROP**  operations on the objects with the  **auditlabel**  label, regardless of the user. If  **ACCESS**  and  **PRIVILEGES**  are not specified, all DDL and DML operations on objects with a resource label are audited. If no audit objects are specified, operations on all objects are audited. The addition, deletion, and modification of unified audit policies are also recorded in unified audit logs.

Currently, unified audit supports the following audit behaviors:

<a name="table1851759894"></a>
<table><tbody><tr id="row168961759693"><td class="cellrowborder" valign="top" width="19%"><p id="p16896145916917"><a name="p16896145916917"></a><a name="p16896145916917"></a><strong id="b3958729153810"><a name="b3958729153810"></a><a name="b3958729153810"></a>SQL Type</strong></p>
</td>
<td class="cellrowborder" valign="top" width="81%"><p id="p1589610591090"><a name="p1589610591090"></a><a name="p1589610591090"></a>Supported operations and object types</p>
</td>
</tr>
<tr id="row28961959397"><td class="cellrowborder" valign="top" width="19%"><p id="p68967591395"><a name="p68967591395"></a><a name="p68967591395"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="81%"><p id="p1089617591999"><a name="p1089617591999"></a><a name="p1089617591999"></a>Operations: ALL, ALTER, ANALYZE, COMMENT, CREATE, DROP, GRANT, and REVOKE</p>
<p id="p15896195916918"><a name="p15896195916918"></a><a name="p15896195916918"></a>SET   SHOW</p>
<p id="p13422105741811"><a name="p13422105741811"></a><a name="p13422105741811"></a>Objects: DATABASE, SCHEMA, FUNCTION, TRIGGER, TABLE, SEQUENCE, FOREIGN_SERVER, FOREIGN_TABLE, TABLESPACE, ROLE/USER, INDEX, VIEW, and DATA_SOURCE</p>
</td>
</tr>
<tr id="row108961159196"><td class="cellrowborder" valign="top" width="19%"><p id="p16896159397"><a name="p16896159397"></a><a name="p16896159397"></a>DML</p>
</td>
<td class="cellrowborder" valign="top" width="81%"><p id="p17896115914919"><a name="p17896115914919"></a><a name="p17896115914919"></a>Operations: ALL, COPY, DEALLOCATE, DELETE, EXECUTE, REINDEX, INSERT, PREPARE, SELECT, TRUNCATE, and UPDATE</p>
</td>
</tr>
</tbody>
</table>

## Enhancements<a name="section2534498"></a>

None.

## Constraints<a name="section06531946143616"></a>

-   The unified audit policy must be created by a user with the  **POLADMIN**  or  **SYSADMIN**  attribute, or by the initial user. Common users do not have the permission to access the security policy system catalog and system view.
-   The syntax of a unified audit policy applies to either DDL or DML operations. DDL operations and DML operations are mutually exclusive in an audit policy. A maximum of 98 unified audit policies can be configured.
-   Unified audit monitors the SQL statements executed by users on the clients, but does not record the internal SQL statements of databases.
-   In the same audit policy, the same resource tag can be bound to different audit behaviors, and the same behavior can be bound to different resource tags. The ALL operation type includes all operations supported by DDL or DML.
-   A resource label can be associated with different unified audit policies. Unified audit outputs audit information in sequence based on the policies matched by SQL statements.
-   Audit logs of unified audit policies are recorded separately. Currently, no visualized query interfaces are provided. Audit logs depend on the OS service Rsyslog and are archived through the service configuration.
-   In cloud service scenarios, logs need to be stored in the OBS. In hybrid cloud scenarios, you can deploy Elasticsearch to collect CN logs and perform visualized processing.
-   It is recommended that  **APP**  in  **FILTER**  be set to applications in the same trusted domain. Since a client may be forged, a security mechanism must be formed on the client when  **APP**  is used to reduce misuse risks. Generally, you are not advised to set  **APP**. If it is set, pay attention to the risk of client spoofing.
-   Taking an IPv4 address as an example, the following formats are supported:

    <a name="table7313162864616"></a>
    <table><tbody><tr id="row17313728174619"><td class="cellrowborder" valign="top" width="19%"><p id="p1631315285461"><a name="p1631315285461"></a><a name="p1631315285461"></a>IP Address Format</p>
    </td>
    <td class="cellrowborder" valign="top" width="81%"><p id="p2031382844611"><a name="p2031382844611"></a><a name="p2031382844611"></a>Example</p>
    </td>
    </tr>
    <tr id="row9313728154613"><td class="cellrowborder" valign="top" width="19%"><p id="p9607159482"><a name="p9607159482"></a><a name="p9607159482"></a>Single IP address</p>
    </td>
    <td class="cellrowborder" valign="top" width="81%"><p id="p595719466464"><a name="p595719466464"></a><a name="p595719466464"></a>127.0.0.1</p>
    </td>
    </tr>
    <tr id="row1131322814614"><td class="cellrowborder" valign="top" width="19%"><p id="p1861151584818"><a name="p1861151584818"></a><a name="p1861151584818"></a>IP address with mask</p>
    </td>
    <td class="cellrowborder" valign="top" width="81%"><p id="p345013294714"><a name="p345013294714"></a><a name="p345013294714"></a>127.0.0.1|255.255.255.0</p>
    </td>
    </tr>
    <tr id="row156113154489"><td class="cellrowborder" valign="top" width="19%"><p id="p136161513482"><a name="p136161513482"></a><a name="p136161513482"></a>CIDR IP address</p>
    </td>
    <td class="cellrowborder" valign="top" width="81%"><p id="p15618157482"><a name="p15618157482"></a><a name="p15618157482"></a>127.0.0.1/24</p>
    </td>
    </tr>
    <tr id="row10611015144813"><td class="cellrowborder" valign="top" width="19%"><p id="p19611215184811"><a name="p19611215184811"></a><a name="p19611215184811"></a>IP address segment</p>
    </td>
    <td class="cellrowborder" valign="top" width="81%"><p id="p13493154714715"><a name="p13493154714715"></a><a name="p13493154714715"></a>127.0.0.1-127.0.0.5</p>
    </td>
    </tr>
    </tbody>
    </table>


## Dependencies<a name="section22810484"></a>

None.

