# MySQL full migration with resume functionality

## Availability<a name="section56086982"></a>

This feature is available since openGauss 7.0.0.

## Introduction<a name="section35020791"></a>

The feature of resume enables the migration task of datakit from MySQL to openGauss to continue in case of failure. It achieves table-level resume, which means tables that have already been successfully migrated will not be migrated again, thereby improving migration efficiency.

## Benefits<a name="section46751668"></a>

By utilizing the resume function, migration efficiency can be improved and the risk of migration failure can be reduced.

## Description<a name="section18111828"></a>

The front end provides a "Continue Migration" button. When clicking this button in scenarios such as full migration or data verification failure, the back end can implement resume transmission from a broken point. This button is only available in the migration failure state, and the "Continue Migration" button does not appear in other states.

The resume function can be used after the failure of full migration in offline or online migration, but it is not available during incremental migration or reverse migration.

If the data verification process fails, clicking the "Continue Migration" button will prevent the migration of tables that have already been migrated. Objects such as views, stored procedures, triggers, and functions will be migrated again, but will fail due to their existence on the target side.

## Enhancements<a name="section28788730"></a>

None.

## Constraints<a name="section06531946143616"></a>

The resume function is only available in scenarios where MySQL is used on the source side.

The resume function is only available in the case of migration failure. After manually ending the migration task, the resume function is not available.

## Dependencies<a name="section57771982"></a>

None.
