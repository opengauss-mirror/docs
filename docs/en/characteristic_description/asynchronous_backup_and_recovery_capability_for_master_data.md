# Asynchronous Standby-to-Primary Data Retrieval

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:05:41.444Z pushedAt=2026-09-22T11:12:32.604Z -->

## Availability<a name="section14707931165614"></a>

This feature has been available since openGauss 6.0.0-RC1.

## Feature Overview<a name="section43398242"></a>

After the primary fails, if only an asynchronous standby can be promoted to primary, the old primary may have committed transactions that were not synchronized to the standby. This feature aims to retrieve this data and provide it to users through logical decoding, so that users can handle it on their own.

## Customer Benefits<a name="section55039858"></a>

In a multi-center deployment where only the standby in the primary center is a synchronous standby and the standbys deployed in remote sites all use asynchronous synchronization, if a city-level failure occurs and both the primary and the synchronous standby become unavailable, an asynchronous standby must be promoted to primary. In this scenario, the old primary may have committed transactions that have not yet been synchronized to the asynchronous standby. This feature aims to retrieve such data, bringing the system RPO close to zero.

## Feature Description<a name="section25596675"></a>

This feature is implemented through the gs_retrieve tool. In actual use, you need to specify the IP addresses, ports, connection usernames, and passwords of the old and new primary. After the old primary is recovered, the unsynchronized data is retrieved through logical decoding.

## Feature Enhancements<a name="section29043486"></a>

None.

## Feature Constraints<a name="section27741012910"></a>

- The gs_retrieve tool can be used only on the machine where the old primary resides. The new primary can be on a different machine.

- After the old primary is restored, it is recommended to set autovacuum to off to prevent historical versions of metadata from being reclaimed and cleaned up.

- When DDL exists within the decoding range, decoding may fail because historical versions of metadata have been cleaned up. Decoding in force mode may cause data loss.

- When too many Xlogs accumulate on the old primary, causing logs that have not yet been synchronized to the asynchronous standby to be reclaimed, complete data may not be obtained.

- During the execution of the gs_retrieve tool, if the old primary performs related IUD operations, these operations are also decoded.

## Dependencies<a name="section57771982"></a>

Depends on the logical decoding feature.

## Basic Principles<a name="section8406643144717"></a>

The overall gs_retrieve process parses xlog to obtain all transactions to be decoded, obtains the restart_lsn and confirmed_flush required for creating a logical replication slot so as to build a consistent snapshot, and then calls built-in functions to create the logical replication slot and perform decoding, finally returning the decoded data.

## Usage Guide<a name="section8406643144718"></a>

See [gs_retrieve](../tool_and_commandreference/gs_retrieve.md) usage guide.

## Usage Scenarios<a name="section8406643144719"></a>

In the openGauss primary/standby architecture, when the primary node crashes abnormally and an asynchronous standby needs to be promoted to primary, the old primary may have data that has not been synchronized to the asynchronous standby. After the old primary recovers, the gs_retrieve tool can retrieve the unsynchronized data through logical decoding.
