# gms_i18n Advanced Package

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:13:41.543Z pushedAt=2026-09-22T11:12:32.638Z -->

## Availability

This feature has been available since openGauss 7.0.0-RC1.

## Feature Overview

The gms_i18n advanced package mainly implements internationalization. After the database is installed, it is created directly by loading the plug-in.

## Customer Benefits

The gms_i18n advanced package provides the raw_to_char and string_to_raw string conversion functions.

## Feature Description

- The plug-in is created by using the CREATE EXTENSION command.
- Supports the raw_to_char command, which converts RAW data from a valid character set into a VARCHAR string in the database character set.
- Supports the string_to_raw command, which converts a VARCHAR string into another valid character set and returns the result as raw data.

## Feature Enhancements

None.

## Feature Constraints

- The plug-in can be loaded only by using the CREATE EXTENSION command.

## Dependencies

None.
