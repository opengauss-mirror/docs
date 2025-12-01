# Access Control Model<a name="EN-US_TOPIC_0000001105555108"></a>

## Availability<a name="section65352835"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section51304608"></a>

The access control model can be used to manage users' access permissions and grant them the minimum permissions required for completing a task.

## Benefits<a name="section59088296"></a>

You can create users and grant permissions to them as needed to minimize risks.

## Description<a name="section62032618"></a>

The database provides a role-based access control model and an access control model based on the separation of duties. In the role-based access control model, database roles are classified into system administrator, monitoring administrator, O&M administrator, security policy administrator, and common user. The security administrator creates roles or user groups and grant permissions to roles. The monitoring administrator views the monitoring views or functions in  **dbe\_perf**  mode. The security policy administrator creates resource labels, anonymization policies, and unified audit policies. A user who is assigned a role has the role's permissions.

In the access control model based on the separation of duties, database roles are classified into system administrator, security administrator, audit administrator, monitoring administrator, O&M administrator, security policy administrator, and common user. The security administrator creates users, the system administrator grants permissions to users, and the audit administrator audits all user behavior.

By default, the role-based access control model is used. To switch to another mode, set the GUC parameter  **enableSeparationOfDuty**  to  **on**.

## Enhancements<a name="section21422657"></a>

None.

## Constraints<a name="section06531946143616"></a>

The permissions of the system administrator are controlled by the GUC parameter  **enableSeparationOfDuty**.

The database needs to be restarted when the separation of duties is enabled, disabled or switched. In addition, improper user permissions in the new model cannot be automatically identified. The database administrator needs to manually identify and rectify the fault.

## Dependencies<a name="section58586189"></a>

None.

