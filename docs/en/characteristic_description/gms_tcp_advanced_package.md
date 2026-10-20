---
description: This document describes gms_tcp Advanced Package in openGauss, covering topics such as Availability, Feature Overview.
keywords: [openGauss, gms_tcp Advanced Package, features, Availability, Feature Overview]
---

# gms_tcp Advanced Package

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:16:55.859Z pushedAt=2026-09-22T11:12:32.657Z -->

## Availability<a name="section5309649"></a>

This feature has been available since openGauss 7.0.0-RC1.

## Feature Overview<a name="section47786844"></a>

gms_tcp is a network communication plug-in based on openGauss. It provides network programming functions at the TCP/IP level, allowing the database to directly perform network communication operations. It provides function interfaces such as TCP/IP connection management, data reading, and data writing.

## Customer Benefits<a name="section27428414"></a>

It improves compatibility and makes it convenient for users to perform network communication operations with this plug-in.

## Feature Description<a name="section45529136"></a>

After the database is installed, load the gms_tcp plug-in directly by using the create extension gms_tcp; command.

The plug-in currently supports the following interfaces:
OPEN_CONNECTION    --Establishes a TCP connection, supporting parameters such as the remote host, port, local host, and port.
CLOSE_CONNECTION   --Closes the specified TCP connection.
CLOSE_ALL_CONNECTIONS --Closes all TCP connections.
FLUSH             --Immediately sends the data in the output buffer to the server.
READ_LINE         --Reads a line of data, with an option to remove the newline character.
READ_RAW         --Reads raw binary data of a specified length.
READ_TEXT        --Reads text data of a specified length.
GET_LINE         --The underlying implementation for obtaining a line of data.
GET_RAW          --The underlying implementation for obtaining raw data.
GET_TEXT         --The underlying implementation for obtaining text data.
WRITE_LINE       --Writes a line of data, automatically adding a newline character.
WRITE_RAW        --Writes raw binary data.
WRITE_TEXT       --Writes text data.
AVAILABLE        --Checks the number of data bytes available to read in the TCP connection.

## Feature Enhancements<a name="section7109043"></a>

The gms_tcp advanced package plug-in is added based on the local plug-in.

## Feature Constraints<a name="section06531946143616"></a>

The plug-in can be loaded only by using the CREATE EXTENSION command.

## Dependencies<a name="section63981393"></a>

None.
