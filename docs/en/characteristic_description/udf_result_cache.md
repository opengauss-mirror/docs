# UDF Result Cache

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:34:39.503Z pushedAt=2026-09-22T11:12:32.721Z -->

## Availability<a name="section3480125215575"></a>

This feature has been available since openGauss 7.0.0-RC2.

## Feature Overview<a name="section5814521587"></a>

The UDF result cache (Result Cache) feature of openGauss supports sharing the call results of deterministic user-defined functions (UDFs, User-Defined Functions) within a plan execution cycle (that is, the execution cycle of a single statement).

## Customer Benefits<a name="section148987345811"></a>

The UDF result cache (Result Cache) feature significantly improves UDF execution performance by saving the invocation and running overhead of the procedural language engine.

## Feature Description<a name="section117041846581"></a>

The UDF result cache delivers good performance improvement in scenarios where the parameter values passed to a function have a high repetition rate. The overall implementation idea of the UDF result cache is to cache the function's input parameters and results in a hash table during function execution, so that on the next call the cached result can be obtained directly based on the input parameters, thereby reducing repeated function execution.

## Feature Enhancements<a name="section21149265913"></a>

None.

## Feature Constraints<a name="section51513617597"></a>

- The parameter types supported by function result cache are: SMALLINT, INT, BIGINT, FLOAT, DOUBLE PRECISION, CHAR, VARCHAR, TEXT, VARCHAR2, NUMERIC, DATE, TIME, TIMESTAMP, TIMESTAMPTZ, BOOL, and NVARCHAR2.
- Functions using built-in procedural languages (INTERNAL, C, SQL) do not support function result cache.
- Functions with the RESULT_CACHE attribute set to FALSE do not support function result cache.
- Functions with non-IN input parameters do not support function result cache.
- Functions that return result sets, have variable parameters, or have unsupported parameter types do not support function result cache.
- Functions with the VOLATILE attribute, aggregate functions, window functions, functions with security definer, or functions with inconsistent parameter counts do not support function result cache.
- Functions containing subprograms or autonomous transactions do not support function result cache.
- Functions with more than 16 parameters do not support function result cache.
- Statement types other than the SELECT statement do not support function result cache.
- Function result cache is not supported when SMP parallel query is enabled.
- Function result cache is not supported when the passed parameter value exceeds 127 characters.
- If the number of UDFs in a single statement exceeds 14, functions after the 14th are not cached.

## Dependencies<a name="section20491151513592"></a>

None.
