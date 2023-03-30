# Database Audit<a name="EN-US_TOPIC_0000001151995069"></a>

## Availability<a name="section10188029"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section24583399"></a>

Audit logs record user operations performed on database startup and stopping, as well as connection, DDL, DML, and DCL operations.

## Benefits<a name="section19924005"></a>

The audit log mechanism enhances the database capability of tracing unauthorized operations and collecting evidence.

## Description<a name="section45098318"></a>

Database security is essential for a database system. openGauss writes all user operations in the database into audit logs. Database security administrators can use the audit logs to reproduce a series of events that cause faults in the database and identify unauthorized users, unauthorized operations, and the time when these operations are performed.

## Enhancements<a name="section3231685"></a>

None.

## Constraints<a name="section06531946143616"></a>

None.

## Dependencies<a name="section29085170"></a>

None.

