# High Concurrency of Thread Pools<a name="EN-US_TOPIC_0000001152195139"></a>

## Availability<a name="section5309649"></a>

This feature is available since openGauss 1.0.0.

## Introduction<a name="section47786844"></a>

The thread pooling technology is used to support stable running of databases at high concurrency.

## Benefits<a name="section27428414"></a>

The overall system throughput is stable in case of a large number of concurrent requests.

## Description<a name="section45529136"></a>

The overall design idea of the thread pool technology is to pool thread resources and reuse them among different connections. After the system is started, a fixed number of working threads are started based on the current number of cores or user configuration. A working thread serves one or more connection sessions. In this way, the session and thread are decoupled. The number of worker threads is fixed. Therefore, frequent thread switchover does not occur in case of high concurrency. The database layer schedules and manages sessions.

## Enhancements<a name="section7109043"></a>

Dynamic scale-in and scale-out of the thread pool is supported.

## Constraints<a name="section06531946143616"></a>

None.

## Dependencies<a name="section63981393"></a>

None.

