# Roles<a name="EN-US_TOPIC_0246507962"></a>

A role is a set of users. After a role is granted to a user through  **GRANT**, the user will have all the permissions of the role. It is recommended that roles be used to efficiently grant permissions. For example, you can create different roles of design, development, and maintenance personnel, grant the roles to users, and then grant specific data permissions required by different users. When permissions are granted or revoked at the role level, these changes take effect on all members of the role.

openGauss provides an implicitly defined group  **PUBLIC**  that contains all roles. By default, all new users and roles have the permissions of  **PUBLIC**. For details about the default permissions of  **PUBLIC**, see  [GRANT](grant.md). To revoke permissions of  **PUBLIC**  from a user or role, or re-grant these permissions to them, add the  **PUBLIC**  keyword in the  **REVOKE**  or  **GRANT**  statement.

To view all roles, query the system catalog  **PG\_ROLES**.

```
SELECT * FROM PG_ROLES;
```

## Adding, Modifying, and Deleting Roles<a name="en-us_topic_0237121103_en-us_topic_0155089863_section16638951634"></a>

In non-[separation-of-duties](separation-of-duties.md)  scenarios, a role can be created, modified, and deleted only by a system administrator or a user with the  **CREATEROLE**  attribute. In separation-of-duties scenarios, a role can be created, modified, and deleted only by an initial user or a user with the  **CREATEROLE**  attribute.

-   To create a role, use  **[CREATE ROLE](create-role.md)**.
-   To add or delete users in an existing role, use  **[ALTER ROLE](alter-role.md)**.
-   To delete a role, use  **[DROP ROLE](drop-role.md)**.  **DROP ROLE**  deletes only a role, rather than member users in the role.

