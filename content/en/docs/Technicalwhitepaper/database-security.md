# Database Security<a name="EN-US_CONCEPT_0252569391"></a>

## Access Control<a name="section202011151413"></a>

Access control is to manage users' database access control permissions, including database system permissions and object permissions.

Role-based access control is supported. Roles and permissions are associated. Permissions are assigned to roles and then roles are assigned to users, implementing user access control permission management. The login access control is implemented by using the user ID and authentication technology. The object access control is implemented by checking the object permission based on the user permission on the object. You can assign the minimum permissions required for completing tasks to related database users to minimize database usage risks.

An access control model based on separation of permissions is supported. Database roles are classified into system administrator, security administrator, and audit administrator. The security administrator creates and manages users, the system administrator grants and revokes user permissions, and the audit administrator audits all user behaviors.

By default, the role-based access control model is used. You can set parameters to determine whether to enable the access control model based on separation of permissions.

## Separation of Control and Access Permissions<a name="section198421420918"></a>

For the system administrator, the control and access permissions on table objects are separated to improve data security of common users and restrict the object access permissions of administrators.

This feature applies to the following scenarios: An enterprise has multiple business departments using different database users to perform service operations. Database maintenance departments at the same level use the database administrator to perform O&M operations. The business departments require that administrators can only perform control operations \(DROP, ALTER, and TRUNCATE\) on data of each department and cannot perform access operations \(INSERT, DELETE, UPDATE, SELECT, and COPY\) without authorization. That is, the control permissions of database administrators for tables need to be isolated from their access permissions to improve the data security of common users.

The system administrators can specify the  **INDEPENDENT**  attribute when creating a user, indicating that the user is a private user. Database administrators \(including initial users and other administrators\) can control \(DROP, ALTER, and TRUNCATE\) objects of private users but cannot access \(INSERT, DELETE, UPDATE, SELECT, COPY, GRANT, REVOKE, and ALTER OWNER\) the objects without authorization.

## Database Encryption Authentication<a name="section154654356117"></a>

The password encryption method based on the RFC5802 mechanism is used for authentication.

The unidirectional, irreversible Hash encryption algorithm PBKDF2 is used for encryption and authentication, effectively defending against rainbow attacks.

The password of the created user is encrypted and stored in the system catalog. During the entire authentication process, passwords are encrypted for storage and transmission. The hash value is calculated and compared with the value stored on the server to verify the correctness.

The message processing flow in the unified encryption and authentication process effectively prevents attackers from cracking the username or password by capturing packets.

## Database Audit<a name="section18172551919"></a>

Audit logs record user operations performed on database startup and stopping, connection, and DDL, DML, and DCL operations. The audit log mechanism enhances the database capability of tracing illegal operations and collecting evidence.

You can set parameters to specify the statements or operations for which audit logs are recorded.

Audit logs record the event time, type, execution result, username, database, connection information, database object, database instance name, port number, and details. You can query audit logs by start time and end time and filter audit logs by recorded field.

Database security administrators can use the audit logs to reproduce a series of events that cause faults in the database and identify unauthorized users, unauthorized operations, and the time when these operations are performed.

## Network Communication Security<a name="section19360177323"></a>

SSL can be used to encrypt communication data between the client and server, ensuring communication security between the client and server.

The TLS 1.2 protocol and a highly secure encryption algorithm suite are adopted.  [Table 1](#en-us_topic_0238166170_table13251121491017)  lists the supported encryption algorithm suites.

**Table  1**  Encryption algorithm suites

<a name="en-us_topic_0238166170_table13251121491017"></a>
<table><thead align="left"><tr id="en-us_topic_0238166170_row1625261412109"><th class="cellrowborder" valign="top" width="31.03%" id="mcps1.2.3.1.1"><p id="en-us_topic_0238166170_p99755175105"><a name="en-us_topic_0238166170_p99755175105"></a><a name="en-us_topic_0238166170_p99755175105"></a>IANA Code</p>
</th>
<th class="cellrowborder" valign="top" width="68.97%" id="mcps1.2.3.1.2"><p id="en-us_topic_0238166170_p119751717121010"><a name="en-us_topic_0238166170_p119751717121010"></a><a name="en-us_topic_0238166170_p119751717121010"></a>IANA Suite Name</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0238166170_row92521414141017"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p129756178106"><a name="en-us_topic_0238166170_p129756178106"></a><a name="en-us_topic_0238166170_p129756178106"></a>0x00,0x9F</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p697591721018"><a name="en-us_topic_0238166170_p697591721018"></a><a name="en-us_topic_0238166170_p697591721018"></a>TLS_DHE_RSA_WITH_AES_256_GCM_SHA384</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row1925251461012"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p5975817131017"><a name="en-us_topic_0238166170_p5975817131017"></a><a name="en-us_topic_0238166170_p5975817131017"></a>0x00,0x9E</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p1497511781018"><a name="en-us_topic_0238166170_p1497511781018"></a><a name="en-us_topic_0238166170_p1497511781018"></a>TLS_DHE_RSA_WITH_AES_128_GCM_SHA256</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row172523141100"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p597541715109"><a name="en-us_topic_0238166170_p597541715109"></a><a name="en-us_topic_0238166170_p597541715109"></a>0x00,0xA3</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p1097581731019"><a name="en-us_topic_0238166170_p1097581731019"></a><a name="en-us_topic_0238166170_p1097581731019"></a>TLS_DHE_DSS_WITH_AES_256_GCM_SHA384</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row11252121414107"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p16975101718106"><a name="en-us_topic_0238166170_p16975101718106"></a><a name="en-us_topic_0238166170_p16975101718106"></a>0x00,0xA2</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p1497551717109"><a name="en-us_topic_0238166170_p1497551717109"></a><a name="en-us_topic_0238166170_p1497551717109"></a>TLS_DHE_DSS_WITH_AES_128_GCM_SHA256</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row192521714101013"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p19750173100"><a name="en-us_topic_0238166170_p19750173100"></a><a name="en-us_topic_0238166170_p19750173100"></a>0x00,0x6B</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p497511175106"><a name="en-us_topic_0238166170_p497511175106"></a><a name="en-us_topic_0238166170_p497511175106"></a>TLS_DHE_RSA_WITH_AES_256_CBC_SHA256</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row12524148103"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p297612173109"><a name="en-us_topic_0238166170_p297612173109"></a><a name="en-us_topic_0238166170_p297612173109"></a>0x00,0x67</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p119762017151012"><a name="en-us_topic_0238166170_p119762017151012"></a><a name="en-us_topic_0238166170_p119762017151012"></a>TLS_DHE_RSA_WITH_AES_128_CBC_SHA256</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row15252214111016"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p1897617177107"><a name="en-us_topic_0238166170_p1897617177107"></a><a name="en-us_topic_0238166170_p1897617177107"></a>0x00,0x6A</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p11976141741011"><a name="en-us_topic_0238166170_p11976141741011"></a><a name="en-us_topic_0238166170_p11976141741011"></a>TLS_DHE_DSS_WITH_AES_256_CBC_SHA256</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row112521214131013"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p17976131701016"><a name="en-us_topic_0238166170_p17976131701016"></a><a name="en-us_topic_0238166170_p17976131701016"></a>0x00,0x40</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p19976317161015"><a name="en-us_topic_0238166170_p19976317161015"></a><a name="en-us_topic_0238166170_p19976317161015"></a>TLS_DHE_DSS_WITH_AES_128_CBC_SHA256</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row1025317141104"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p1297611179104"><a name="en-us_topic_0238166170_p1297611179104"></a><a name="en-us_topic_0238166170_p1297611179104"></a>0xC0,0x9F</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p3976141761020"><a name="en-us_topic_0238166170_p3976141761020"></a><a name="en-us_topic_0238166170_p3976141761020"></a>TLS_DHE_RSA_WITH_AES_256_CCM</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row16253131471014"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p16976517101012"><a name="en-us_topic_0238166170_p16976517101012"></a><a name="en-us_topic_0238166170_p16976517101012"></a>0xC0,0x9E</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p897671781011"><a name="en-us_topic_0238166170_p897671781011"></a><a name="en-us_topic_0238166170_p897671781011"></a>TLS_DHE_RSA_WITH_AES_128_CCM</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row825321412109"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p89761217121020"><a name="en-us_topic_0238166170_p89761217121020"></a><a name="en-us_topic_0238166170_p89761217121020"></a>0x00,0x39</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p1976121751010"><a name="en-us_topic_0238166170_p1976121751010"></a><a name="en-us_topic_0238166170_p1976121751010"></a>TLS_DHE_RSA_WITH_AES_256_CBC_SHA</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row5253151419107"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p2097631721011"><a name="en-us_topic_0238166170_p2097631721011"></a><a name="en-us_topic_0238166170_p2097631721011"></a>0x00,0x33</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p11976517131019"><a name="en-us_topic_0238166170_p11976517131019"></a><a name="en-us_topic_0238166170_p11976517131019"></a>TLS_DHE_RSA_WITH_AES_128_CBC_SHA</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row1325371412101"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p159761517131013"><a name="en-us_topic_0238166170_p159761517131013"></a><a name="en-us_topic_0238166170_p159761517131013"></a>0x00,0x38</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p1497691761016"><a name="en-us_topic_0238166170_p1497691761016"></a><a name="en-us_topic_0238166170_p1497691761016"></a>TLS_DHE_DSS_WITH_AES_256_CBC_SHA</p>
</td>
</tr>
<tr id="en-us_topic_0238166170_row72531141108"><td class="cellrowborder" valign="top" width="31.03%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238166170_p189773178101"><a name="en-us_topic_0238166170_p189773178101"></a><a name="en-us_topic_0238166170_p189773178101"></a>0x00,0x32</p>
</td>
<td class="cellrowborder" valign="top" width="68.97%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238166170_p89771717171013"><a name="en-us_topic_0238166170_p89771717171013"></a><a name="en-us_topic_0238166170_p89771717171013"></a>TLS_DHE_DSS_WITH_AES_128_CBC_SHA</p>
</td>
</tr>
</tbody>
</table>

## Row-Level Access Control<a name="section1883112261825"></a>

The row-level access control feature enables database access control to be accurate to each row of data tables. When different users perform the same SQL query operation, the read results may be different according to the row-level access control policy.

You can create a row-level access control policy for a data table. The policy defines an expression that takes effect only for specific database users and SQL operations. When a database user accesses the data table, if a SQL statement meets the specified row-level access control policy of the data table, the expressions that meet the specified condition will be combined by using  **AND**  or  **OR**  based on the attribute type \(**PERMISSIVE**  |  **RESTRICTIVE**\) and applied to the execution plan in the query optimization phase.

Row-level access control is used to control the visibility of row-level data in tables. By predefining filters for data tables, the expressions that meet the specified condition can be applied to execution plans in the query optimization phase, which will affect the final execution result. Currently, row-level access control supports the following SQL statements: SELECT, UPDATE, and DELETE.

