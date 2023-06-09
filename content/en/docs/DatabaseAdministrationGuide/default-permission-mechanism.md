# Default Permission Mechanism<a name="EN-US_TOPIC_0289899957"></a>

A user who creates an object is the owner of this object. By default,  [Separation of Duties](separation-of-duties.md)  is disabled after database installation. A database system administrator has the same permissions as object owners. After an object is created, only the object owner or system administrator can query, modify, and delete the object, and grant permissions for the object to other users through  [GRANT](../SQLReference/grant.md)  by default.

To enable another user to use the object, grant required permissions to the user or the role that contains the user.

openGauss supports the following permissions: SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, CREATE, CONNECT, EXECUTE, USAGE, ALTER, DROP, COMMENT, INDEX, and VACUUM. Permission types are associated with object types. For permission details, see  [GRANT](../SQLReference/grant.md).

To remove permissions, run  **[REVOKE](../SQLReference/revoke.md)**. Object owners have implicit permissions \(such as ALTER, DROP, COMMENT, INDEX, VACUUM, GRANT, and REVOKE\) on objects. That is, once becoming the owner of an object, the owner is immediately granted the implicit permissions on the object. Object owners can remove their own common permissions, for example, making tables read-only to themselves or others, except the system administrator.

System catalogs and views are visible to either system administrators or all users. System catalogs and views that require system administrator permissions can be queried only by system administrators. For details, see  [System Catalogs and System Views](../DatabaseReference/system-catalogs-and-system-views.md).

The database provides the object isolation feature. If this feature is enabled, users can view only the objects \(tables, views, columns, and functions\) that they have the permission to access. System administrators are not affected by this feature. For details, see  [ALTER DATABASE](../SQLReference/alter-database.md).

