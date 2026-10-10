# gms_stats Advanced Package

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:16:44.427Z pushedAt=2026-09-22T11:12:32.654Z -->

## Availability<a name="section5309649"></a>

This feature has been available since openGauss 6.0.0.

This feature was enhanced in openGauss 7.0.0-RC1, adding 31 interfaces. For details, see [GMS_STATS Overview](https://atomgit.com/opengauss/openGauss-server/blob/master/docs/en/extension_reference/gms_stats.md).

## Feature Overview<a name="section47786844"></a>

Currently, the gms_stats Advanced Package supports only the GATHER_SCHEMA_STATS interface, which is used to collect statistics for all objects in a specified Schema. After the database is installed, load the gms_stats plug-in directly by using the CREATE EXTENSION gms_stats; command.

## Customer Benefits<a name="section27428414"></a>

Improves compatibility and makes it convenient for users to use this advanced package to collect database object statistics.

## Feature Description<a name="section45529136"></a>

The gms_stats advanced package is a plug-in based on openGauss. It is used to properly estimate statistics (especially for large partitioned tables), obtain better statistical results, and ultimately generate faster SQL execution plans. The currently supported interface is GATHER_SCHEMA_STATS (used to collect statistics of objects in a schema).

## Feature Enhancements<a name="section7109043"></a>

The gms_stats advanced package plug-in is added based on the local plug-in.

In openGauss 7.0.0-RC1, 31 interfaces were added. For details, see [GMS_STATS Overview](https://atomgit.com/opengauss/openGauss-server/blob/master/docs/en/extension_reference/gms_stats.md).

## Feature Constraints<a name="section06531946143616"></a>

- Does not support collecting temporary table information.

## Dependencies<a name="section63981393"></a>

None.
