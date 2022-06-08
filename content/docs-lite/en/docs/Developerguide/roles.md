# Roles<a name="EN-US_TOPIC_0289900311"></a>

A role is a set of users. After a role is granted to a user through  **GRANT**, the user will have all the permissions of the role. It is recommended that roles be used to efficiently grant permissions. For example, you can create different roles of design, development, and maintenance personnel, grant the roles to users, and then grant specific data permissions required by different users. When permissions are granted or revoked at the role level, these changes take effect on all members of the role.

openGauss provides an implicitly defined group  **PUBLIC**  that contains all roles. By default, all new users and roles have the permissions of  **PUBLIC**. For details about the default permissions of  **PUBLIC**, see  [GRANT](grant.md). To revoke permissions of  **PUBLIC**  from a user or role, or re-grant these permissions to them, add the  **PUBLIC**  keyword in the  **REVOKE**  or  **GRANT**  statement.

To view all roles, query the system catalog  **PG\_ROLES**.

```
SELECT * FROM PG_ROLES;
```

## Adding, Modifying, and Deleting Roles<a name="en-us_topic_0283137031_en-us_topic_0237121103_en-us_topic_0155089863_section16638951634"></a>

In non-[Separation of Duties](separation-of-duties.md)  scenarios, a role can be created, modified, and deleted only by a system administrator or a user with the  **CREATEROLE**  attribute. In separation-of-duties scenarios, a role can be created, modified, and deleted only by an initial user or a user with the  **CREATEROLE**  attribute.

-   To create a role, use  **[CREATE ROLE](create-role.md)**.
-   To add or delete users in an existing role, use  **[ALTER ROLE](alter-role.md)**.
-   To delete a role, use  **[DROP ROLE](drop-role.md)**.  **DROP ROLE**  deletes only a role, rather than member users in the role.

## Built-in roles<a name="section210351882916"></a>

openGauss provides a group of default roles whose names start with  **gs\_role\_**. These roles are provided to access to specific, typically high-privileged operations. You can grant these roles to other users or roles within the database so that they can use specific functions. These roles should be given with great care to ensure that they are used where they are needed.  [Table 1](#table2118117460)  describes the permissions of built-in roles.

**Table  1**  Permission description of built-in roles

<a name="table2118117460"></a>
<table><thead align="left"><tr id="row142101115461"><th class="cellrowborder" valign="top" width="19.67%" id="mcps1.2.3.1.1"><p id="p152141116461"><a name="p152141116461"></a><a name="p152141116461"></a>Role</p>
</th>
<th class="cellrowborder" valign="top" width="80.33%" id="mcps1.2.3.1.2"><p id="p18211117468"><a name="p18211117468"></a><a name="p18211117468"></a>Permission</p>
</th>
</tr>
</thead>
<tbody><tr id="row132011124611"><td class="cellrowborder" valign="top" width="19.67%" headers="mcps1.2.3.1.1 "><p id="p132161115462"><a name="p132161115462"></a><a name="p132161115462"></a>gs_role_copy_files</p>
</td>
<td class="cellrowborder" valign="top" width="80.33%" headers="mcps1.2.3.1.2 "><p id="p42101120469"><a name="p42101120469"></a><a name="p42101120469"></a>Permission to run the <strong id="b1469318935412"><a name="b1469318935412"></a><a name="b1469318935412"></a>copy... to/from filename</strong> command. However, the GUC parameter <strong id="b10700169145415"><a name="b10700169145415"></a><a name="b10700169145415"></a>enable_copy_server_files</strong> must be set first to enable the function of copying server files.</p>
</td>
</tr>
<tr id="row13218113465"><td class="cellrowborder" valign="top" width="19.67%" headers="mcps1.2.3.1.1 "><p id="p122117468"><a name="p122117468"></a><a name="p122117468"></a>gs_role_signal_backend</p>
</td>
<td class="cellrowborder" valign="top" width="80.33%" headers="mcps1.2.3.1.2 "><p id="p112101115462"><a name="p112101115462"></a><a name="p112101115462"></a>Permission to call the <strong id="b399724715545"><a name="b399724715545"></a><a name="b399724715545"></a>pg_cancel_backend</strong>, <strong id="b1941148115419"><a name="b1941148115419"></a><a name="b1941148115419"></a>pg_terminate_backend</strong>, and <strong id="b144348165420"><a name="b144348165420"></a><a name="b144348165420"></a>pg_terminate_session</strong> functions to cancel or terminate other sessions. However, this role cannot perform operations on sessions of the initial user or <strong id="b65164817540"><a name="b65164817540"></a><a name="b65164817540"></a>PERSISTENCE</strong> user.</p>
</td>
</tr>
<tr id="row182161164616"><td class="cellrowborder" valign="top" width="19.67%" headers="mcps1.2.3.1.1 "><p id="p15271114460"><a name="p15271114460"></a><a name="p15271114460"></a>gs_role_tablespace</p>
</td>
<td class="cellrowborder" valign="top" width="80.33%" headers="mcps1.2.3.1.2 "><p id="p1921011184615"><a name="p1921011184615"></a><a name="p1921011184615"></a>Permission to create a tablespace.</p>
</td>
</tr>
<tr id="row2261194613"><td class="cellrowborder" valign="top" width="19.67%" headers="mcps1.2.3.1.1 "><p id="p152191113468"><a name="p152191113468"></a><a name="p152191113468"></a>gs_role_replication</p>
</td>
<td class="cellrowborder" valign="top" width="80.33%" headers="mcps1.2.3.1.2 "><p id="p6271194616"><a name="p6271194616"></a><a name="p6271194616"></a>Permission to call logical replication functions, such as <strong id="b061445013414"><a name="b061445013414"></a><a name="b061445013414"></a>kill_snapshot</strong>, <strong id="b761416505349"><a name="b761416505349"></a><a name="b761416505349"></a>pg_create_logical_replication_slot</strong>, <strong id="b176157505346"><a name="b176157505346"></a><a name="b176157505346"></a>pg_create_physical_replication_slot</strong>, <strong id="b166157508344"><a name="b166157508344"></a><a name="b166157508344"></a>pg_drop_replication_slot</strong>, <strong id="b146152504344"><a name="b146152504344"></a><a name="b146152504344"></a>pg_replication_slot_advance</strong>, <strong id="b161565016347"><a name="b161565016347"></a><a name="b161565016347"></a>pg_create_physical_replication_slot_extern</strong>, <strong id="b661512508342"><a name="b661512508342"></a><a name="b661512508342"></a>pg_logical_slot_get_changes</strong>, <strong id="b561513509347"><a name="b561513509347"></a><a name="b561513509347"></a>pg_logical_slot_peek_changes</strong>, <strong id="b16169506341"><a name="b16169506341"></a><a name="b16169506341"></a>pg_logical_slot_get_binary_changes</strong>, and <strong id="b961625010346"><a name="b961625010346"></a><a name="b961625010346"></a>pg_logical_slot_peek_binary_changes</strong>.</p>
</td>
</tr>
<tr id="row132201154612"><td class="cellrowborder" valign="top" width="19.67%" headers="mcps1.2.3.1.1 "><p id="p12141118462"><a name="p12141118462"></a><a name="p12141118462"></a>gs_role_account_lock</p>
</td>
<td class="cellrowborder" valign="top" width="80.33%" headers="mcps1.2.3.1.2 "><p id="p829117463"><a name="p829117463"></a><a name="p829117463"></a>Permission to lock and unlock users. However, this role cannot lock or unlock the initial user or users with the <strong id="b18949153305520"><a name="b18949153305520"></a><a name="b18949153305520"></a>PERSISTENCE</strong> attribute.</p>
</td>
</tr>
<tr id="row127549416579"><td class="cellrowborder" valign="top" width="19.67%" headers="mcps1.2.3.1.1 "><p id="p11754349572"><a name="p11754349572"></a><a name="p11754349572"></a>gs_role_pldebugger</p>
</td>
<td class="cellrowborder" valign="top" width="80.33%" headers="mcps1.2.3.1.2 "><p id="p37541141576"><a name="p37541141576"></a><a name="p37541141576"></a>Permission to debug functions in <strong id="b138718711571"><a name="b138718711571"></a><a name="b138718711571"></a>dbe_pldebugger</strong>.</p>
</td>
</tr>
<tr id="row797712387184"><td class="cellrowborder" valign="top" width="19.67%" headers="mcps1.2.3.1.1 "><p id="p197793818184"><a name="p197793818184"></a><a name="p197793818184"></a>gs_role_directory_create</p>
</td>
<td class="cellrowborder" valign="top" width="80.33%" headers="mcps1.2.3.1.2 "><p id="p5978133811189"><a name="p5978133811189"></a><a name="p5978133811189"></a>Permission to create directory objects. However, this role needs to enable the GUC parameter <strong id="b17471054173410"><a name="b17471054173410"></a><a name="b17471054173410"></a>enable_access_server_directory</strong> first.</p>
</td>
</tr>
<tr id="row792643171820"><td class="cellrowborder" valign="top" width="19.67%" headers="mcps1.2.3.1.1 "><p id="p8931643191820"><a name="p8931643191820"></a><a name="p8931643191820"></a>gs_role_directory_drop</p>
</td>
<td class="cellrowborder" valign="top" width="80.33%" headers="mcps1.2.3.1.2 "><p id="p199354321811"><a name="p199354321811"></a><a name="p199354321811"></a>Permission to delete directory objects. However, this role needs to enable the GUC parameter <strong id="b113229265651315"><a name="b113229265651315"></a><a name="b113229265651315"></a>enable_access_server_directory</strong> first.</p>
</td>
</tr>
</tbody>
</table>

The restrictions on built-in roles are as follows:

-   The role names starting with  **gs\_role\_**  are reserved for built-in roles in the database. Do not create users or roles starting with  **gs\_role\_**  or rename existing users or roles starting with  **gs\_role\_**.
-   Do not perform  **ALTER**  or  **DROP**  operations on built-in roles.
-   By default, built-in roles do not have the  **LOGIN**  permission and do not have preset passwords.
-   The  **gsql**  meta-commands  **\\du**  and  **\\dg**  do not display information about built-in roles. However, if  _pattern_  is set to a specific built-in role, the information is displayed.
-   When separation-of-duty is disabled, the initial user, users with the  **SYSADMIN**  permission, and users with the  **ADMIN OPTION**  built-in role permission have the permission to perform  **GRANT**  and  **REVOKE**  operations on built-in roles. When separation of duty is enabled, the initial user and users with the  **ADMIN OPTION**  built-in role permission have the permission to perform  **GRANT**  and  **REVOKE**  operations on built-in roles. Example:

    ```
    GRANT gs_role_signal_backend TO user1;
    REVOKE gs_role_signal_backend FROM user1;
    ```


