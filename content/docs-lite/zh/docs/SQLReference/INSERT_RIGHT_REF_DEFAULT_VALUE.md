# INSERT语句右值引用基础值
在兼容B模式下，INSERT语句支持右值引用，当被引用列有NOT NULL约束且没有默认值时，将使用其基础值参与计算。若无基础值则继续使用NULL值参与计算（数组类型、用户自定义类型等）。
支持的各类型的基础值如[表1](#table1)所示。

<span id="table1"><strong>表 1</strong> 类型基础值</span>

| 类型 | 基础值 | 备注 |
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
| char(n) | "" | 注意：当字符串参与运算时，会根据内置规则进行值类型转换，<br/>而定长的字符串存储后的值长度与指定长度一致，会填充空白字符（不同存储方式可能会不同） |
| varchar(n) | "" |  |
| varchar2(n) | "" |  |
| nchar(n) | "" | 注意：当字符串参与运算时，会根据内置规则进行值类型转换，<br/>而定长的字符串存储后的值长度与指定长度一致，会填充空白字符（不同存储方式可能会不同） |
| nvarchar2(n) | "" |  |
| nvarchar(n) | "" |  |
| date | 01-01-1970 |  |
| time | 00:00:00 |  |
| timestamp | 当前时间戳 |  |
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
| blob |  | 数据内容为空的对象 |
| raw |  | 数据内容为空的对象 |
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
| BIT |  | 数据内容为空的对象 |
| BIT VARYING |  | 数据内容为空的对象 |
| UUID | 00000000-0000-0000-0000-000000000000 |  |
| json | null | 数据内容为null |
| jsonb | null | 数据内容为null |
| int8range | empty |  |
| numrange | empty |  |
| tsrange | empty |  |
| tstzrange | empty |  |
| daterange | empty |  |
| hll | \x |  |
| SET | "" |  |
| tsvector |  | 数据内容为空的对象 |
| tsquery |  | 数据内容为空的对象 |
| HASH16 | 0000000000000000 |  |
| HASH32 | 00000000000000000000000000000000 |  |
| enum | 第一项 |  |
