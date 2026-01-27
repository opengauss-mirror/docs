# Physical File Parsing Tool - gs_filedump

## Function Introduction

**gs_filedump** is a tool used to parse physical files of the openGauss database, including control files and mapping files, and format their contents into human-readable form. It provides various options to specify block size, range, segments, TOAST, and item interpretation methods. This tool typically does not require the database to be running and can directly dump data from data files.

## Prerequisites

Ensure that the database directory exists and the path is correct.

## Syntax

```
gs_filedump [-abcdfhikuxy] [-r relfilenode] [-T reltoastrelid] [-R startblock [endblock]] [-D attrlist] [-S blocksize] [-s segsize] [-n segnumber] FILENAME
```

## Parameter Description

| Parameter | Description |
|-----------|-------------|
| `-a` | Display absolute addresses (block header information is always relative) |
| `-b` | Display binary block images within the specified range (disables all formatting options) |
| `-d` | Display formatted block content dump (disables all other formatting options) |
| `-D` | Column types of the parsed table, separated by commas,<br>Supported types: bigint, bigserial, bool, char, charN, date, float, float4, float8, int, <br> json, macaddr, name, numeric, oid, real, serial, smallint, smallserial, text, <br> time, timestamp, timestamptz, timetz, uuid, varchar, varcharN, xid, xml<br> **~** ignores all remaining attributes in the tuple |
| `-f` | Display formatted block content dump and explanation |
| `-h` | Display help information |
| `-i` | Display detailed information of parsed entries |
| `-k` | Verify block checksums |
| `-o` | Do not dump old values |
| `-R` | Specify the block range to parse (blocks are indexed starting from 0)<br>[startblock]: starting block<br>[endblock]: ending block<br>If only the starting block is provided, a single block will be formatted |
| `-s` | Force segment size to [segsize] |
| `-u` | Decode blocks stored with ustore storage type |
| `-t` | Dump TOAST files (supports **astore** and **ustore** storage engines) |
| `-v` | Output additional information about TOAST relations |
| `-n` | Force segment number to [segnumber] |
| `-S` | Force block size to [blocksize] |
| `-x` | Force interpretation of block items as index item format |
| `-y` | Force interpretation of block items as heap item format |

### Segment-Page Table Related Options

> When specifying a segmented storage table, the file path must be specified as '{filedir}/1'

| Parameter | Description |
|-----------|-------------|
| `-r` | Specify the relfilenode [relfilenode] of the table |
| `-T` | Specify the relfilenode [reltoastrelid] of the table's pg_toast<br>The parameter **-t**  will not be supported |

### Control File Related Options

| Parameter | Description |
|-----------|-------------|
| `-c` | Interpret the listed file as a control file |
| `-f` | Display formatted content dump and explanation |
| `-S` | Force block size to [blocksize] |

### Additional Features

| Parameter | Description |
|-----------|-------------|
| `-m` | Interpret the file as a **pg_filenode.map** file and print its contents (all other options will be ignored) |

## Usage Examples

+ Parse a ustore engine table.

```
gs_filedump -u -ot -D int,timestamp,time,timetz,~  $PGDATA/base/15938/16384
```

+ Parse a segment table.

```
 gs_filedump -o -r 4161 -T 4162 -D int,smallint,bigint,~  $PGDATA/base/15938/1
```

+ Parse control file.

```
gs_filedump -c $PGDATA/global/pg_control
```

+ Parse map file.

```
gs_filedump -m $PGDATA/global/pg_filenode.map
```

### Others

You can use the auxiliary tool [**gs_desc**](./gs_desc.md) to obtain table structure information and recommended query commands.
