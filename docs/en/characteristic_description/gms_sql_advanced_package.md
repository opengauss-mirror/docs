---
description: This document describes gms_sql Advanced Package in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, gms_sql Advanced Package, features, Availability, Feature Overview]
---

# gms_sql Advanced Package

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:16:06.340Z pushedAt=2026-09-22T11:12:32.652Z -->

## Availability<a name="section5309649"></a>

This feature has been available since openGauss 7.0.0-RC1.

## Feature Overview<a name="section47786844"></a>

gms_sql is a plug-in based on openGauss, allowing users to execute dynamic SQL using the gms_sql advanced package, supporting DDL and DML.

## Customer Benefits<a name="section27428414"></a>

It improves compatibility and makes it convenient for users to execute dynamic SQL using the plug-in.

## Feature Description<a name="section45529136"></a>

After the database is installed, load the gms_sql plug-in directly by using the `create extension gms_sql;` command.

The plug-in currently supports the following interfaces:
OPEN_CURSOR --Opens a cursor and returns the ID of the cursor.
CLOSE_CURSOR --Closes a cursor.
COLUMN_VALUE --Saves a specified column in the fetch result to a return parameter.
DEFINE_COLUMN --Defines the column structure in the returned result.
EXECUTE         --Executes the SQL statement processed by the PARSE function.
FETCH_ROWS --Loads a row from the result set.
PARSE         --Parses the syntax of the current statement.
RETURN_RESULT --Returns the result of an executed statement to the client application.
BIND_ARRAY --Binds a table variable based on the input dynamic SQL.
BIND_VARIABLE --Binds a variable based on the input dynamic SQL.
DESCRIBE_COLUMNS, DESCRIBE_COLUMNS2, DESCRIBE_COLUMNS3 --Outputs the metadata information of columns.
DEFINE_ARRAY --Defines the collection to be selected from a given cursor. It is used only for SELECT statements.
IS_OPEN         --Determines whether a cursor is open.
FETCH_ROWS      --Executes dynamic SQL and returns a result data set.
DEFINE_COLUMN   --Returns the variable name of dynamic SQL and defines the value of the returned column through the COLUMN_VALUE stored procedure.

## Feature Enhancements<a name="section7109043"></a>

The gms_sql advanced package plug-in is added based on the local plug-in.

## Feature Constraints<a name="section06531946143616"></a>

The plug-in can be loaded only by using the CREATE EXTENSION command.

## Dependencies<a name="section63981393"></a>

None.
