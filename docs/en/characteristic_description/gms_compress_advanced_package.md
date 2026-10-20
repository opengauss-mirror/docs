---
description: This document describes gms_compress Advanced Package in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, gms_compress Advanced Package, features, Availability, Feature Overview]
---

# gms_compress Advanced Package

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:12:28.653Z pushedAt=2026-09-22T11:12:32.633Z -->

## Availability<a name="section3104013"></a>

This feature has been available since openGauss 7.0.0-RC1.

## Feature Overview<a name="section27936123"></a>

gms_compress is an openGauss-based plug-in that provides a set of data compression utilities.

## Customer Benefits<a name="section50098520"></a>

- gms_compress is mainly used in data compression and decompression scenarios, making it convenient for users to compress and decompress binary data. Storing compressed data saves space. In addition, the compression algorithm uses the standard Lempel-Ziv algorithm, which can be used to decompress gzip-format files.

## Feature Description<a name="section48233501"></a>

- The plug-in is created by using the CREATE EXTENSION command.
- The gms_compress package uses the Lempel-Ziv compression algorithm, a widely used compression technique that is especially suitable for reducing data size.
- The package supports compression and decompression of binary data (RAW and BLOB).
- LZ_COMPRESS provides a QUALITY parameter that allows users to choose between compression speed and compression quality. The parameter value ranges from 1 to 9, where 1 indicates the fastest compression speed, 9 indicates the best compression quality, and the default value is 6.

## Feature Enhancements<a name="section31448332"></a>

None.

## Performance Enhancements

None.

## Feature Constraints<a name="section06531946143616"></a>

- The plug-in can be loaded only by using the `create extension` command.

## Dependencies<a name="section14599532"></a>

None.
