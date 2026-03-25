# Redundant Index Analysis Aid

## Availability

This feature is available since openGauss 7.0.0-RC3.

## Introduction

Provides a verbose index view to help diagnose potential redundant indexes in the current database.

## Benefits

During database usage, some indexes may never be hit by queries, which can impact write performance. The verbose index view allows users to identify and remove such unnecessary indexes.

## Description

The verbose index view displays the hit count of each index, as well as information about other indexes that can cover the same columns. Users can query this view by schema, table name, and index name, and use the information to determine whether an index is redundant.

## Enhancements

None.

## Constraints

None.

## Dependencies

None.
