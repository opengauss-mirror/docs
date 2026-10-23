# oGRecorder (Data Safe)

## Availability<a name="section3480125215575"></a>

This feature is introduced starting from openGauss 7.0.0-RC2.

## Feature Overview<a name="section5814521587"></a>

GR (oGRecorder) is a database log protection software. Its typical deployment scenario is running in virtCCA, connecting southbound to Dorado WORM storage and northbound to databases through the oGRecorderSDK, enabling real-time synchronization of database WAL logs and forming an integrated software-hardware solution for log security protection of user database systems.

## Customer Value<a name="section148987345811"></a>

It protects database write-ahead logs and builds a secure anti-ransomware solution.

## Feature Description<a name="section117041846581"></a>

virtCCA, based on hardware-enforced isolation and confidential computing capabilities, provides a secure TEE computing environment for oGRecorder that is isolated from the host and REE. Dorado WORM storage provides Write Once Read Many technology, allowing only new data to be added and prohibiting deletion or modification of stored data, thereby achieving tamper-proof protection of database logs and preventing the inability to recover data when database files or backup data suffer ransomware attacks. oGRecorder implements a VFS-like system to support efficient data writing and reading, secure authentication with the SDK, and secure data writing. The oGRecorderSDK provides complete file operation APIs for third-party software to call, thereby enabling real-time synchronization and disaster recovery replay of database logs.

## Feature Enhancements<a name="section21149265913"></a>

openGauss 7.0.0-RC3: Supports online rolling upgrade and offline upgrade.

openGauss 7.0.0-RC3: Supports [primary/standby parameter synchronization](../../tool_and_commandreference/ogrecorder/ogrecorder_primary_standby_sync.md).

openGauss 7.0.0-RC3: [oGRecorder API optimization](../../tool_and_commandreference/ogrecorder/ogrecorder_restapi.md)

openGauss 7.0.0-RC3: [oGRecorder key synchronization](../../tool_and_commandreference/ogrecorder/ogrecorder_sry_key_sync.md)

## Feature Constraints<a name="section51513617597"></a>

None.

## Dependencies<a name="section20491151513592"></a>

None.
