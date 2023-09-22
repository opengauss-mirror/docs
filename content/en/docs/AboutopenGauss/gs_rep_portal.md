# MySQL Migration Tool gs\_rep\_portal<a name="EN-US_TOPIC_0000001264707837"></a>

## Availability<a name="section56086982"></a>

This feature is available since openGauss 5.0.0.

## Introduction<a name="section35020791"></a>

gs\_rep\_portal is a Java-based tool that runs on Linux and integrates full migration, incremental migration, reverse migration, and data check. gs\_rep\_portal allows you to install the preceding tools in one-click mode and set migration tasks. The tasks invoke the corresponding tools to complete each migration step based on the user-defined execution plan and display the status, progress, and exception cause of each step in real time.

## Benefits<a name="section46751668"></a>

You can use gs\_rep\_portal to quickly start a migration plan that contains multiple migration tools. Multiple migration plans can be started at the same time.

## Description<a name="section18111828"></a>

gs\_rep\_portal is a Java-based tool that runs on Linux and integrates full migration, incremental migration, reverse migration, and data check. gs\_rep\_portal allows you to install the preceding tools in one-click mode and set migration tasks. The tasks invoke the corresponding tools to complete each migration step based on the user-defined execution plan and display the status, progress, and exception cause of each step in real time.

## Enhancements<a name="section28788730"></a>

None.

## Constraints<a name="section06531946143616"></a>

- The curl tool is required for incremental migration, reverse migration, and incremental check on the portal.

- Incremental migration and reverse migration of the same migration plan cannot be enabled at the same time. If a plan contains incremental migration and reverse migration, you need to manually stop incremental migration and start reverse migration. Incremental migration cannot be started after reverse migration is started.

- After stopping incremental migration and before starting reverse migration, do not perform jobs on openGauss. Otherwise, data will be lost.

- The value of **workspace.id** used by the portal can contain only lowercase letters and digits.

- When starting multiple plans on the portal, ensure that the MySQL database instances are different and openGauss databases are different. In addition, incremental migration and reverse migration of the same MySQL database instance and openGauss database cannot be enabled at the same time.

## Dependencies<a name="section57771982"></a>

This feature depends on the normal use of migration tools.
