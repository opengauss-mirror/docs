# Access Control <a name="EN-US_CONCEPT_0252569392"></a>

Access control is to manage users' database access control permissions, including database system permissions and object permissions.

Role-based access control is supported. Roles and permissions are associated. Permissions are assigned to roles and then roles are assigned to users, implementing user access control permission management. The login access control is implemented by using the user ID and authentication technology. The object access control is implemented by checking the object permission based on the user permission on the object. You can assign the minimum permissions required for completing tasks to related database users to minimize database usage risks.

An access control model based on separation of permissions is supported. Database roles are classified into system administrator, security administrator, and audit administrator. The security administrator creates and manages users, the system administrator grants and revokes user permissions, and the audit administrator audits all user behaviors.

By default, the role-based access control model is used. You can set parameters to determine whether to enable the access control model based on separation of permissions.

