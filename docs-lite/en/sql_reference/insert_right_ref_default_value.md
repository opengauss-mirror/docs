# INSERT_RIGHT_REF_DEFAULT_VALUE
In B-compatible mode, the INSERT statement supports right-value reference. If a referenced column has a NOT NULL constraint and does not have a default value, its base value is used for calculation. If there is no basic value, the NULL value is used for calculation (array type or user-defined type).
The basic values of the supported types are shown in [Table 1](#table1).

<span id="table1"><strong>Table 1</strong> Type basic values</span>

| Type| Basic Value| Description|
| --- | ----- | --- |
| int | 0 |  |
| tinyint | 0 |  |
| smallint | 0 |  |
| integer | 0 |  |
| binary_integer | 0 |  |
| bigint | 0 |  |
| boolean | f |  |
| numeric | 0 |  |
| decimal | 0 |  |
| dec | 0 |  |
| double precision | 0 |  |
| float8 | 0 |  |
| float | 0 |  |
| char(n) | "" | Note: When a character string is involved in calculation, the value type is converted based on built-in rules.<br>The length of the value stored by a fixed-length character string is the same as the specified length, and blank characters are filled (which may vary according to the storage mode).|
| varchar(n) | "" |  |
| varchar2(n) | "" |  |
| nchar(n) | "" | Note: When a character string is involved in calculation, the value type is converted based on built-in rules.<br>The length of the value stored by a fixed-length character string is the same as the specified length, and blank characters are filled (which may vary according to the storage mode).|
| nvarchar2(n) | "" |  |
| nvarchar(n) | "" |  |
| date | 01-01-1970 |  |
| time | 00:00:00 |  |
| timestamp | Current timestamp|  |
| smalldatetime | Thu Jan 01 00:00:00 1970 |  |
| interval year | @ 0 |  |
| interval month | @ 0 |  |
| interval day | @ 0 |  |
| interval hour | @ 0 |  |
| interval minute | @ 0 |  |
| interval second | @ 0 |  |
| interval day to second | @ 0 |  |
| interval day to hour | @ 0 |  |
| interval day to minute | @ 0 |  |
| interval hour to minute | @ 0 |  |
| interval hour to second | @ 0 |  |
| interval minute to second | @ 0 |  |
| reltime | @ 0 |  |
| abstime | Wed Dec 31 16:00:00 1969 PST |  |
| money | $0.00 |  |
| int4range | empty |  |
| blob |  | Object without data content|
| raw |  | Object without data content|
| bytea | \x |  |
| point | (0,0) |  |
| lseg | [(0,0),(0,0)] |  |
| box | (0,0),(0,0) |  |
| path | ((0,0)) |  |
| polygon | ((0,0)) |  |
| circle | <(0,0),0> |  |
| cidr | 0.0.0.0/32 |  |
| inet | 0.0.0.0 |  |
| macaddr | 00:00:00:00:00:00 |  |
| BIT |  | Object without data content|
| BIT VARYING |  | Object without data content|
| UUID | 00000000-0000-0000-0000-000000000000 |  |
| json | null | The data content is null.|
| jsonb | null | The data content is null.|
| int8range | empty |  |
| numrange | empty |  |
| tsrange | empty |  |
| tstzrange | empty |  |
| daterange | empty |  |
| hll | \x |  |
| SET | "" |  |
| tsvector |  | Object without data content|
| tsquery |  | Object without data content|
| HASH16 | 0000000000000000 |  |
| HASH32 | 00000000000000000000000000000000 |  |
| enum | The first item|  |
