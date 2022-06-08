# Database Security<a name="EN-US_CONCEPT_0289895649"></a>

## Access Control<a name="en-us_concept_0283139021_section1518355319485"></a>

Access control is to manage users' database access control permissions, including database system permissions and object permissions.

Role-based access control is supported. Roles and permissions are associated. Permissions are assigned to roles and then roles are assigned to users, implementing user access control permission management. The login access control is implemented by using the user ID and authentication technology. The object access control is implemented by checking the object permission based on the user permission on the object. You can assign the minimum permissions required for completing tasks to related database users to minimize database usage risks.

An access control model based on separation of permissions is supported. Database roles are classified into system administrator, security administrator, and audit administrator. The security administrator creates and manages users, the system administrator grants and revokes user permissions, and the audit administrator audits all user behaviors.

By default, the role-based access control model is used. You can set parameters to determine whether to enable the access control model based on separation of permissions.

## Separation of Control and Access Permissions<a name="en-us_concept_0283139021_section74261220114919"></a>

For the system administrator, the control and access permissions on table objects are separated to improve data security of common users and restrict the object access permissions of administrators.

This feature applies to the following scenarios: An enterprise has multiple business departments using different database users to perform service operations. Database maintenance departments at the same level use the database administrator to perform O&M operations. The business departments require that administrators can only perform control operations \(DROP, ALTER, and TRUNCATE\) on data of each department and cannot perform access operations \(INSERT, DELETE, UPDATE, SELECT, and COPY\) without authorization. That is, the control permissions of database administrators for tables need to be isolated from their access permissions to improve the data security of common users.

The system administrators can specify the  **INDEPENDENT**  attribute when creating a user, indicating that the user is a private user. Database administrators \(including initial users and other administrators\) can control \(**DROP**,  **ALTER**, and  **TRUNCATE**\) objects of private users but cannot access \(**INSERT**,  **DELETE**,  **UPDATE**,  **SELECT**,  **COPY**,  **GRANT**,  **REVOKE**, and  **ALTER OWNER**\) the objects without authorization.

## Built-in Database Role Permission Management<a name="section210351882916"></a>

openGauss provides a group of default roles whose names start with  **gs\_role\_**. These roles are provided to access to specific, typically high-privileged operations. You can grant these roles to other users or roles within the database so that they can use specific functions. These roles should be given with great care to ensure that they are used where they are needed.  [Table 1](#table2118117460)  describes the permissions of built-in roles.

**Table  1**  Built-in role permissions

<a name="table2118117460"></a>
<table><thead align="left"><tr id="row142101115461"><th class="cellrowborder" valign="top" width="17.44%" id="mcps1.2.3.1.1"><p id="p152141116461"><a name="p152141116461"></a><a name="p152141116461"></a>Role</p>
</th>
<th class="cellrowborder" valign="top" width="82.56%" id="mcps1.2.3.1.2"><p id="p18211117468"><a name="p18211117468"></a><a name="p18211117468"></a>Permission</p>
</th>
</tr>
</thead>
<tbody><tr id="row132011124611"><td class="cellrowborder" valign="top" width="17.44%" headers="mcps1.2.3.1.1 "><p id="p132161115462"><a name="p132161115462"></a><a name="p132161115462"></a>gs_role_copy_files</p>
</td>
<td class="cellrowborder" valign="top" width="82.56%" headers="mcps1.2.3.1.2 "><p id="p42101120469"><a name="p42101120469"></a><a name="p42101120469"></a>Permission to run the <strong id="b161060808"><a name="b161060808"></a><a name="b161060808"></a>copy... to/from filename</strong> command. However, the GUC parameter <strong id="b16111308013"><a name="b16111308013"></a><a name="b16111308013"></a>enable_copy_server_files</strong> must be set first to enable the function of copying server files.</p>
</td>
</tr>
<tr id="row13218113465"><td class="cellrowborder" valign="top" width="17.44%" headers="mcps1.2.3.1.1 "><p id="p122117468"><a name="p122117468"></a><a name="p122117468"></a>gs_role_signal_backend</p>
</td>
<td class="cellrowborder" valign="top" width="82.56%" headers="mcps1.2.3.1.2 "><p id="p112101115462"><a name="p112101115462"></a><a name="p112101115462"></a>Permission to invoke the <strong id="b205551310016"><a name="b205551310016"></a><a name="b205551310016"></a>pg_cancel_backend</strong>, <strong id="b11555532012"><a name="b11555532012"></a><a name="b11555532012"></a>pg_terminate_backend</strong>, and <strong id="b1755653902"><a name="b1755653902"></a><a name="b1755653902"></a>pg_terminate_session</strong> functions to cancel or terminate other sessions. However, this role cannot perform operations on sessions of the initial user or <strong id="b85569319014"><a name="b85569319014"></a><a name="b85569319014"></a>PERSISTENCE</strong> user.</p>
</td>
</tr>
<tr id="row182161164616"><td class="cellrowborder" valign="top" width="17.44%" headers="mcps1.2.3.1.1 "><p id="p15271114460"><a name="p15271114460"></a><a name="p15271114460"></a>gs_role_tablespace</p>
</td>
<td class="cellrowborder" valign="top" width="82.56%" headers="mcps1.2.3.1.2 "><p id="p1921011184615"><a name="p1921011184615"></a><a name="p1921011184615"></a>Permission to create a tablespace.</p>
</td>
</tr>
<tr id="row2261194613"><td class="cellrowborder" valign="top" width="17.44%" headers="mcps1.2.3.1.1 "><p id="p152191113468"><a name="p152191113468"></a><a name="p152191113468"></a>gs_role_replication</p>
</td>
<td class="cellrowborder" valign="top" width="82.56%" headers="mcps1.2.3.1.2 "><p id="p6271194616"><a name="p6271194616"></a><a name="p6271194616"></a>Permission to invoke logical replication functions, such as <strong id="b135690144016"><a name="b135690144016"></a><a name="b135690144016"></a>kill_snapshot</strong>, <strong id="b1156918141505"><a name="b1156918141505"></a><a name="b1156918141505"></a>pg_create_logical_replication_slot</strong>, <strong id="b45691914506"><a name="b45691914506"></a><a name="b45691914506"></a>pg_create_physical_replication_slot</strong>, <strong id="b12570614207"><a name="b12570614207"></a><a name="b12570614207"></a>pg_drop_replication_slot</strong>, <strong id="b175709141003"><a name="b175709141003"></a><a name="b175709141003"></a>pg_replication_slot_advance</strong>, <strong id="b175702144017"><a name="b175702144017"></a><a name="b175702144017"></a>pg_create_physical_replication_slot_extern</strong>, <strong id="b10571161414012"><a name="b10571161414012"></a><a name="b10571161414012"></a>pg_logical_slot_get_changes</strong>, <strong id="b1571714103"><a name="b1571714103"></a><a name="b1571714103"></a>pg_logical_slot_peek_changes</strong>, <strong id="b1257117145011"><a name="b1257117145011"></a><a name="b1257117145011"></a>pg_logical_slot_get_binary_changes</strong> and <strong id="b125711514305"><a name="b125711514305"></a><a name="b125711514305"></a>pg_logical_slot_peek_binary_changes</strong>.</p>
</td>
</tr>
<tr id="row132201154612"><td class="cellrowborder" valign="top" width="17.44%" headers="mcps1.2.3.1.1 "><p id="p12141118462"><a name="p12141118462"></a><a name="p12141118462"></a>gs_role_account_lock</p>
</td>
<td class="cellrowborder" valign="top" width="82.56%" headers="mcps1.2.3.1.2 "><p id="p829117463"><a name="p829117463"></a><a name="p829117463"></a>Permission to lock and unlock users. However, this role cannot lock or unlock the initial user or <strong id="b186742301794557"><a name="b186742301794557"></a><a name="b186742301794557"></a>PERSISTENCE</strong> user.</p>
</td>
</tr>
<tr id="row0460611191614"><td class="cellrowborder" valign="top" width="17.44%" headers="mcps1.2.3.1.1 "><p id="p64601118162"><a name="p64601118162"></a><a name="p64601118162"></a>gs_role_directory_create</p>
</td>
<td class="cellrowborder" valign="top" width="82.56%" headers="mcps1.2.3.1.2 "><p id="p17460311141616"><a name="p17460311141616"></a><a name="p17460311141616"></a>Permission to create directory objects. However, this role needs to enable the GUC parameter <strong id="b111751710320"><a name="b111751710320"></a><a name="b111751710320"></a>enable_access_server_directory</strong> first.</p>
</td>
</tr>
<tr id="row10679131511613"><td class="cellrowborder" valign="top" width="17.44%" headers="mcps1.2.3.1.1 "><p id="p96791115121616"><a name="p96791115121616"></a><a name="p96791115121616"></a>gs_role_directory_drop</p>
</td>
<td class="cellrowborder" valign="top" width="82.56%" headers="mcps1.2.3.1.2 "><p id="p14679111519168"><a name="p14679111519168"></a><a name="p14679111519168"></a>Permission to delete directory objects. However, this role needs to enable the GUC parameter <strong id="b1352916512322"><a name="b1352916512322"></a><a name="b1352916512322"></a>enable_access_server_directory</strong> first.</p>
</td>
</tr>
</tbody>
</table>

## Database Encryption Authentication<a name="en-us_concept_0283139021_section5666740124910"></a>

The password encryption method based on the RFC5802 mechanism is used for authentication.

The unidirectional, irreversible Hash encryption algorithm PBKDF2 is used for encryption and authentication, effectively defending against rainbow attacks.

The password of the created user is encrypted and stored in the system catalog. During the entire authentication process, passwords are encrypted for storage and transmission. The hash value is calculated and compared with the value stored on the server to verify the correctness.

The message processing flow in the unified encryption and authentication process effectively prevents attackers from cracking the username or password by capturing packets.

## Database Audit<a name="en-us_concept_0283139021_section1544614711502"></a>

Audit logs record user operations performed on database startup and stopping, connection, and DDL, DML, and DCL operations. The audit log mechanism enhances the database capability of tracing illegal operations and collecting evidence.

You can set parameters to specify the statements or operations for which audit logs are recorded.

Audit logs record the event time, type, execution result, username, database, connection information, database object, database instance name, port number, and details. You can query audit logs by start time and end time and filter audit logs by recorded field.

Database security administrators can use the audit logs to reproduce a series of events that cause faults in the database and identify unauthorized users, unauthorized operations, and the time when these operations are performed.

## Network Communication Security<a name="en-us_concept_0283139021_section12318192310500"></a>

SSL can be used to encrypt communication data between the client and server, ensuring communication security between the client and server.

The TLS 1.2 protocol and a highly secure encryption algorithm suite are adopted.  [Table 2](#table13251121491017)  lists the supported encryption algorithm suites.

**Table  2**  Encryption algorithm suites

<a name="table13251121491017"></a>
<table><thead align="left"><tr id="row1625261412109"><th class="cellrowborder" valign="top" width="37.940000000000005%" id="mcps1.2.4.1.1"><p id="p99755175105"><a name="p99755175105"></a><a name="p99755175105"></a>OpenSSL Suite Name</p>
</th>
<th class="cellrowborder" valign="top" width="47.25%" id="mcps1.2.4.1.2"><p id="p119751717121010"><a name="p119751717121010"></a><a name="p119751717121010"></a>IANA Suite Name</p>
</th>
<th class="cellrowborder" valign="top" width="14.81%" id="mcps1.2.4.1.3"><p id="p15594635152615"><a name="p15594635152615"></a><a name="p15594635152615"></a>Security</p>
</th>
</tr>
</thead>
<tbody><tr id="row313281911346"><td class="cellrowborder" valign="top" width="37.940000000000005%" headers="mcps1.2.4.1.1 "><p id="p131331119183419"><a name="p131331119183419"></a><a name="p131331119183419"></a>ECDHE-RSA-AES128-GCM-SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="47.25%" headers="mcps1.2.4.1.2 "><p id="p11133101914340"><a name="p11133101914340"></a><a name="p11133101914340"></a>TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="14.81%" headers="mcps1.2.4.1.3 "><p id="p1413381911349"><a name="p1413381911349"></a><a name="p1413381911349"></a>HIGH</p>
</td>
</tr>
<tr id="row19615113518261"><td class="cellrowborder" valign="top" width="37.940000000000005%" headers="mcps1.2.4.1.1 "><p id="p66166355269"><a name="p66166355269"></a><a name="p66166355269"></a>ECDHE-RSA-AES256-GCM-SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="47.25%" headers="mcps1.2.4.1.2 "><p id="p1761653522615"><a name="p1761653522615"></a><a name="p1761653522615"></a>TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="14.81%" headers="mcps1.2.4.1.3 "><p id="p261633515262"><a name="p261633515262"></a><a name="p261633515262"></a>HIGH</p>
</td>
</tr>
<tr id="row031613406345"><td class="cellrowborder" valign="top" width="37.940000000000005%" headers="mcps1.2.4.1.1 "><p id="p2031624043411"><a name="p2031624043411"></a><a name="p2031624043411"></a>ECDHE-ECDSA-AES128-GCM-SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="47.25%" headers="mcps1.2.4.1.2 "><p id="p731694013418"><a name="p731694013418"></a><a name="p731694013418"></a>TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256</p>
</td>
<td class="cellrowborder" valign="top" width="14.81%" headers="mcps1.2.4.1.3 "><p id="p14316154033412"><a name="p14316154033412"></a><a name="p14316154033412"></a>HIGH</p>
</td>
</tr>
<tr id="row1723517434266"><td class="cellrowborder" valign="top" width="37.940000000000005%" headers="mcps1.2.4.1.1 "><p id="p7236204382616"><a name="p7236204382616"></a><a name="p7236204382616"></a>ECDHE-ECDSA-AES256-GCM-SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="47.25%" headers="mcps1.2.4.1.2 "><p id="p17236164312261"><a name="p17236164312261"></a><a name="p17236164312261"></a>TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384</p>
</td>
<td class="cellrowborder" valign="top" width="14.81%" headers="mcps1.2.4.1.3 "><p id="p19236144315263"><a name="p19236144315263"></a><a name="p19236144315263"></a>HIGH</p>
</td>
</tr>
</tbody>
</table>

## Row-Level Security<a name="en-us_concept_0283139021_section135874520509"></a>

The row-level security \(RLS\) feature enables database access control to be accurate to each row of data tables. When different users perform the same SQL query operation, the read results may be different according to the RLS policy.

You can create an RLS policy for a data table. The policy defines an expression that takes effect only for specific database users and SQL operations. When a database user accesses the data table, if a SQL statement meets the specified RLS policy of the data table, the expressions that meet the specified condition will be combined by using  **AND**  or  **OR**  based on the attribute type \(**PERMISSIVE**  |  **RESTRICTIVE**\) and applied to the execution plan in the query optimization phase.

RLS is used to control the visibility of row-level data in tables. By predefining filters for data tables, the expressions that meet the specified condition can be applied to execution plans in the query optimization phase, which will affect the final execution result. Currently, RLS supports the following SQL statements: SELECT, UPDATE, and DELETE.

## Resource Labels<a name="section7656163019424"></a>

The resource label feature classifies database resources based on user-defined rules to implement resource classification and management. Administrators can configure resource labels to configure security policies, such as auditing or data masking, for a group of database resources.

Resource labels can be used to group database resources based on features and application scenarios. You can manage all database resources with specified labels, which greatly reduces policy configuration complexity and information redundancy and improves management efficiency.

Currently, resource labels support the following database resource types: schema, table, column, view, and function.

## Dynamic Data Masking<a name="section7123124654113"></a>

To prevent unauthorized users from sniffing privacy data, the dynamic data masking feature can be used to protect user privacy data. When an unauthorized user accesses the data for which a dynamic data masking policy is configured, the database returns the anonymized data to protect privacy data.

Administrators can create dynamic data masking policies on data columns. The policies specify the data masking methods for specific user scenarios. After the dynamic data masking function is enabled, the system matches user identity information \(such as the access IP address, client tool, and username\) with the masking policy when a user accesses data in the sensitive column. After the matching is successful, the system masks the sensitive data in the query result of the column based on the masking policy.

The purpose of dynamic data masking is to flexibly protect privacy data by configuring the filter, and specifying sensitive column labels and corresponding masking functions in the masking policy without changing the source data.

## Unified Auditing<a name="section1672052375210"></a>

Unified auditing allows administrators to configure audit policies for database resources or resource labels to simplify management, generate audit logs, reduce redundant audit logs, and improve management efficiency.

Administrators can customize audit policies for configuring operation behaviors or database resources. The policies are used to audit specific user scenarios, user behaviors, or database resources. After the unified auditing function is enabled, when a user accesses the database, the system matches the corresponding unified audit policy based on the user identity information, such as the access IP address, client tool, and username. Then, the system classifies the user behaviors based on the access resource label and user operation type \(DML or DDL\) in the policy to perform unified auditing.

The purpose of unified auditing is to change the existing traditional audit behavior into specific tracking audit behavior and exclude other behaviors from the audit, thereby simplifying management and improving the security of audit data generated by the database.

## Password Strength Verification<a name="section465673171713"></a>

To harden the security of customer accounts and data, do not set weak passwords. You need to specify a password when initializing the database, creating a user, or modifying a user. The password must meet the strength requirements. Otherwise, the system prompts you to enter the password again.

The account password complexity policy restricts the minimum number of uppercase letters, lowercase letters, digits, and special characters in a password, the maximum and minimum length of a password, the password cannot be the same as the username or the reverse of the username, and the password cannot be a weak password. This policy enhances user account security.

Weak passwords are easy to crack. The definition of weak passwords may vary with users or user groups. Users can define their own weak passwords.

The  **password\_policy**  parameter specifies whether to enable the password strength verification mechanism. The default value is  **1**, indicating that the password strength verification mechanism is enabled.

## Data Encryption and Storage<a name="section13800339194113"></a>

Imported data is encrypted before stored.

This feature provides data encryption and decryption APIs for users and uses encryption functions to encrypt sensitive information columns identified by users, so that data can be stored in tables after being encrypted.

If you need to encrypt the entire table, you need to write an encryption function for each column. Different attribute columns can use different input parameters.

If a user with the required permission wants to view specific data, the user can decrypt required columns using the decryption function API.

## Ledger Database<a name="section185956502478"></a>

To prevent database O&M personnel from stealing, tampering with, and erasing traces of the database, you can use the ledger database feature to perform comprehensive audit and trace the history. When a tamper-proof user table is modified, the database records the modification behavior to the history table where only data can be appended. In this way, the operation history can be recorded and the operation source can be traced.

The ledger database stores and verifies historical operations by generating data hash digests. Ledgers refer to user history tables and global blockchain tables. For table-level data modification operations, the system records the operation information and hash digest in a global blockchain table. In addition, each tamper-proof user table corresponds to a user history table to record the hash digest of row-level data changes. You can determine whether the user table is tampered by recalculating the hash digest and verifying the hash digest consistency.

Each record in the ledger represents a given operation fact that has occurred. The content of the record can only be appended and cannot be modified. The consistency between the tamper-proof user table and the corresponding history table can be checked to identify and track the tampering behavior. In addition, the ledger database provides an API for checking the tamper-proof user table consistency and an API for restoring and archiving history tables to meet the requirements of tampering identification, data expansion and mitigation, and historical data restoration and archiving.

