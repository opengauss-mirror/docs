---
description: This document describes Data Type Comparison Between MySQL and openGauss in openGauss.
keywords: [openGauss, Data Type Comparison Between MySQL and openGauss, data migration]
---

# Data Type Comparison Between MySQL and openGauss

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-16T08:10:03.380Z -->

Note that the MySQL data types listed below refer to the data_type in information_schema.COLUMNS, not column_type. For example, for a column_type of int unsigned, its data_type is actually int. For a column_type of float(5,2), its data_type is actually float.

Whether the char(1) type can successfully insert a Chinese character depends on the database mode. When the database is in B mode (with the dolphin plugin loaded), char(1) can successfully insert one Chinese character; when the database is in A mode, inserting one Chinese character will fail.
For openGauss B-mode database data type reference, see: https://docs.opengauss.org/en/

| MySQL | openGauss | Remarks |
|-------|-----------|---------|
| int | integer | If `column_type` contains the `unsigned` or `zerofill` attribute, the type mapping is converted to `uint4` on the openGauss side. |
| tinyint | tinyint | If `column_type` contains the `unsigned` or `zerofill` attribute, the type mapping is converted to `uint1` on the openGauss side. |
| smallint | smallint | If `column_type` contains the `unsigned` or `zerofill` attribute, the type mapping is converted to `uint2` on the openGauss side. |
| mediumint | integer | On the openGauss side, `mediumint` is equivalent to `integer` and occupies 4 bytes of storage, whereas on the MySQL side, `mediumint` occupies 3 bytes. Therefore, the openGauss type supports a larger numeric range. If `column_type` contains the `unsigned` or `zerofill` attribute, the type mapping is converted to `uint4` on the openGauss side. |
| bigint | bigint | If `column_type` contains the `unsigned` or `zerofill` attribute, the type mapping is converted to `uint8` on the openGauss side. |
| char | character | Maximum storage length (`character_maximum_length`) supported for migration. Default length is 1. |
| varchar | character varying | Maximum storage length (`character_maximum_length`) supported for migration. |
| date | date | |
| time | time without time zone | The MySQL `time` type maps to the openGauss `time` type, with the corresponding `data_type` being `time without time zone`. |
| datetime | timestamp without time zone | The MySQL `datetime` type maps to the openGauss `datetime` type, with the corresponding `data_type` being `timestamp without time zone`. |
| timestamp | timestamp with time zone | The MySQL `timestamp` type maps to the openGauss `timestamp` type, with the corresponding `data_type` being `timestamp with time zone`. |
| year | year | Supports width specification: `year(w)`, where `w` denotes the display width. `year(4)` outputs `'YYYY'`, and `year(2)` outputs `'YY'`. |
| text | text | |
| tinytext | text | On the openGauss side, `tinytext`, `mediumtext`, and `longtext` are all aliases for `text` and are equivalent to `text`. |
| mediumtext | text | On the openGauss side, `tinytext`, `mediumtext`, and `longtext` are all aliases for `text` and are equivalent to `text`. |
| longtext | text | On the openGauss side, `tinytext`, `mediumtext`, and `longtext` are all aliases for `text` and are equivalent to `text`. |
| blob | blob | |
| tinyblob | tinyblob | |
| mediumblob | mediumblob | |
| longblob | longblob | |
| binary | binary | |
| varbinary | varbinary | |
| decimal | numeric | When the MySQL-side `column_type` is `decimal`, `dec`, `numeric`, or `fixed`, the corresponding `data_type` is `decimal`. These types support three formats: `type`, `type(p)`, and `type(p,s)`. If no precision `(p,s)` is specified (i.e., `type`), the default precision is `type(10,0)`. If `s` is not specified (i.e., `type(p)`), the default is `s=0`, resulting in `type(p,0)`. Precision (`numeric_precision`) and scale (`numeric_scale`) supported for migration; the migrated type is `numeric(p,s)`. |
| double | numeric | When the MySQL-side `column_type` is `double`, `double precision`, or `real`, the corresponding `data_type` is `double`. These types support two formats: `type` and `type(p,s)`. If precision `(p,s)` is specified and `s != 0`, the type mapping converts to `numeric(p,s)`; if `s = 0`, the type converts to `float(p)`. If no precision is specified, the type mapping converts to `number`, i.e., a `numeric` type without the default `(10,0)` precision. |
| float | real | When the MySQL-side `column_type` is `float`, the corresponding `data_type` is `float`. The `float` type supports three formats: `type`, `type(p)`, and `type(p,s)`. If precision `(p,s)` is specified and `s != 0`, the type mapping converts to `numeric(p,s)`; if `s = 0`, the type converts to `float(p)`. If only `p` is specified, the type mapping converts to `float(p)`; when `p` is in the range `[1, 24]`, the corresponding `data_type` is `real`; when `p` is in the range `[25, 53]`, the corresponding `data_type` is `double precision`. If `p` is not specified, the type mapping is `float`, with the corresponding `data_type` being `real`. |
| bit | bit | Maximum storage length (`character_maximum_length`) supported for migration. Default length is 1. |
| enum | enum | |
| set | set | |
| json | json | |
| geometry | point | If PostGIS is installed on the openGauss side, the type is migrated as `geometry`. |
| point | point | If PostGIS is installed on the openGauss side, the type is migrated as `geometry`. |
| linestring | path | If PostGIS is installed on the openGauss side, the type is migrated as `geometry`. |
| polygon | polygon | If PostGIS is installed on the openGauss side, the type is migrated as `geometry`. |
| multipoint | bytea | If PostGIS is installed on the openGauss side, the type is migrated as `geometry`. |
| geometrycollection | bytea | If PostGIS is installed on the openGauss side, the type is migrated as `geometry`. |
| multilinestring | bytea | If PostGIS is installed on the openGauss side, the type is migrated as `geometry`. |
| multipolygon | bytea | If PostGIS is installed on the openGauss side, the type is migrated as `geometry`. |
