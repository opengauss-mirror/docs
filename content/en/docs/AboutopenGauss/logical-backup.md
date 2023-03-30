# Logical Backup<a name="EN-US_TOPIC_0000001088726280"></a>

## Availability<a name="section56086982"></a>

This feature is available since openGauss 1.0.0.

## Introduction<a name="section35020791"></a>

Data in user tables in the database is backed up to a specified storage medium in a general format.

## Benefits<a name="section46751668"></a>

Through logical backup, you can achieve the following purposes:

-   Back up user data to a reliable storage medium to secure data.
-   Support cross-version recovery and heterogeneous recovery using a general data format.
-   Archive cold data.

## Description<a name="section18111828"></a>

openGauss provides the logical backup capability to back up data in user tables to local disk files in text or CSV format and restore the data in homogeneous or heterogeneous databases.

## Enhancements<a name="section28788730"></a>

None

## Constraints<a name="section06531946143616"></a>

For details about the restrictions on logical backup, see "Server Tools \> gs\_dump" in the  _Tool Reference_.

## Dependencies<a name="section57771982"></a>

None

