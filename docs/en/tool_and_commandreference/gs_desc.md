# gs_filedump Tool Auxiliary Tool - gs_desc

## Function Introduction

Invokes the **gs_filedump** tool to parse table structures from the database directory and display them on the terminal.

## Prerequisites

The **gs_filedump** tool is configured in the environment variables and can be directly invoked.  
Ensure that the pg_filenode.map file is complete in the database directory, and the physical files corresponding to the system tables **pg_database** , **pg_namespace**, **pg_class**, **pg_attribute**, **pg_type** and **pg_type** exist.

## Syntax

```
gs_desc [-h] [-s SEARCHPATH] [-n NAMESPACE [NAMESPACE ...]] -t TABLENAME [TABLENAME ...]
```

## Parameter Description

| Parameter | Description |
|-----------|-------------|
| `-h, --help` | Show this help message and exit |
| `-s SEARCHPATH, --searchpath SEARCHPATH` | Specify the search path<br> Default value: **$PGDATA** |
| `-n NAMESPACE [NAMESPACE ...], --namespace NAMESPACE [NAMESPACE ...]` | Specify the namespace(s) (multiple can be specified) |
| `-t TABLENAME [TABLENAME ...], --tablename TABLENAME [TABLENAME ...]` | Specify the table name(s) (multiple can be specified) |

## Usage Examples

+ Specify namespace and table name.

```
gs_desc -n public -t tbl01
```

+ Specify table name only.

```
gs_desc -t tbl01
```

+ Specify multiple table names.

```
gs_desc -t tbl01 tbl02
```

+ Specify search path.

```
gs_desc -t tbl01 tbl02 -s /data/
```
