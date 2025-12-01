# LLVM<a name="EN-US_TOPIC_0000001088566336"></a>

## Availability<a name="section3480125215575"></a>

This feature is available since openGauss 1.0.0.

## Introduction<a name="section5814521587"></a>

openGauss provides the Low Level Virtual Machine \(LLVM\) technology to query dynamic compilation execution.

## Benefits<a name="section148987345811"></a>

The requery performance is greatly improved by dynamically building and executing queries.

## Description<a name="section117041846581"></a>

Based on the query execution plan tree, with the library functions provided by the LLVM, openGauss moves the process of determining the actual execution path from the executor phase to the execution initialization phase. In this way, problems such as function calling, logic condition branch determination, and a large amount of data reading that are related to the original query execution are avoided, to improve the query performance.

## Enhancements<a name="section21149265913"></a>

None

## Constraints<a name="section51513617597"></a>

None

## Dependencies<a name="section20491151513592"></a>

It depends on the LLVM open-source component. Currently, the open-source version 10.0.0 is used.

