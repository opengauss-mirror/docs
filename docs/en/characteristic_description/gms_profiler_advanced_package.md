# gms_profiler Advanced Package

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:15:20.722Z pushedAt=2026-09-22T11:12:32.649Z -->

## Availability<a name="section3104013"></a>

This feature has been available since openGauss 6.0.0.

## Feature Overview<a name="section27936123"></a>

gms_profiler is an openGauss-based plug-in used to collect PL/pgSQL program execution data. By analyzing the collected data, it identifies performance bottlenecks in PL/pgSQL programs and calculates the code coverage of the programs.

## Customer Benefits<a name="section50098520"></a>

- Performance analysis: Identify the performance bottleneck of stored procedures, and then optimize them accordingly to improve program execution efficiency.
- Coverage statistics: Count the statement execution times of stored procedures to facilitate tracking program execution paths and improve test coverage.

## Feature Description<a name="section48233501"></a>

- The plug-in is created by using the CREATE EXTENSION command.
- Collection is started by using START_PROFILER, the stored procedure is executed, and collection is stopped by using STOP_PROFILER.
- The collected statistics, including statement execution time and execution count, can be viewed through the plsql_profiler_runs, plsql_profiler_units, and plsql_profiler_data tables.

## Feature Enhancements<a name="section31448332"></a>

None.

## Performance Enhancements

None.

## Feature Constraints<a name="section06531946143616"></a>

- The plug-in can be loaded only by using the CREATE EXTENSION command.
- Exception handling in stored procedures is not supported, which may cause inaccurate collection information.
- If the test procedure calls the flush_data interface, a subsequent ROLLBACK operation is not supported and will report an error. To use ROLLBACK, it is recommended to write the collected information to tables uniformly through the stop_profiler interface.
- It is recommended to call the interfaces in the plug-in by wrapping them in stored procedures. Calling them directly may return a failure.

## Dependencies<a name="section14599532"></a>

None.
