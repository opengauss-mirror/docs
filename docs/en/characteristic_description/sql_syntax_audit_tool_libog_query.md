# libog_query SQL Syntax Audit Tool

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:30:04.510Z pushedAt=2026-09-22T11:12:32.706Z -->

## Availability<a name="section56086982"></a>

This feature has been available since openGauss 7.0.0-RC1.

## Feature Overview<a name="section35020791"></a>

libog_query is a tool that supports offline auditing and analysis of the syntax validity of SQL statements in openGauss.

## Customer Benefits<a name="section46751668"></a>

Commercial companies that use databases typically follow this management workflow for executing SQL on critical databases: Developers select a database on the business platform, submit SQL statements, and DBAs review the work orders upon receipt before executing them. This places a heavy review workload on DBAs and is prone to errors caused by human negligence. With this SQL syntax audit tool, DBAs can implement a customized, automated workflow for auditing SQL syntax compatibility on openGauss, improving DBA efficiency and reducing human errors. In addition, the logs recorded by the tool facilitate subsequent issue tracing, localization, and analysis.

## Feature Description<a name="section18111828"></a>

The libog_query tool provides a shared library (so) and APIs. After an SQL statement is passed in, the tool determines whether the statement is syntactically executable on openGauss. The shared library (so) is provided for integration by third-party software. After integrating the shared library (so), third-party software can use the APIs it provides to perform offline SQL syntax compatibility analysis without connecting to openGauss.

The audit results of SQL statements are classified as follows:

   - Syntax compatibility: openGauss supports the syntax, but actual usage may involve semantic issues such as unsupported field types or nonexistent functions.

   - Syntax incompatibility: openGauss does not support the syntax.

## Feature Enhancements<a name="section28788730"></a>

- Starting from openGauss 7.0.0-RC1, the SQL syntax audit tool supports offline syntax analysis of SQL compatibility through the .so files and interfaces provided by third-party software integration.

- Starting from openGauss 5.0.0-LTS, the syntax compatibility assessment tool supports using existing openGauss nodes to evaluate the compatibility of data SQL text in openGauss online, including syntax compatibility and full compatibility analysis.

## Feature Constraints<a name="section06531946143616"></a>

1. Only single-line SQL text input is supported, and SQL statements are separated by `;`.

2. Syntax compatibility checks are supported for both A-compatibility and B-compatibility databases. B-compatibility is the default, while A-compatibility requires separate compilation. For other compatibility databases, error messages for syntax-incompatible statements may be inaccurate.

3. Syntax compatibility validation of stored procedures is not supported.

4. Only errors at the syntax parsing layer of openGauss are audited. Errors handled at the semantic analysis layer or execution layer are not audited by this tool. For example, scenarios such as unsupported field types, nonexistent functions, nonexistent tables, enum value matching, and matching between the target columns and value expressions of an INSERT statement belong to the semantic layer and are not checked by this tool.

## Dependencies<a name="section57771982"></a>

None.

## References<a name="section57771982"></a>

Open source community address: [libog_query](https://gitcode.com/opengauss/openGauss-server/tree/master/src/bin/libog_query/)

Detailed reference documentation: <a href="https://gitcode.com/opengauss/openGauss-server/blob/master/src/bin/libog_query/readme.md ">README.md</a>
