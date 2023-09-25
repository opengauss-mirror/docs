# JSON操作符兼容
在将参数开关dolphin.b_compatibility_mode设置为on时，表示启用四则运算，以及JSON类型操作符的MySQL兼容。相比于原始的openGauss，dolphin对于JSON操作符的修改主要为支持:
## 一元左操作符
 ```+ - ~ not @```

说明：需要类型转换，仅在dolphin.sql_mode关闭sql_mode_strict时允许
## 二元操作符：
### 1. 四则运算
 ```+ - * / div```

说明：需要类型转换，仅在dolphin.sql_mode关闭sql_mode_strict时允许
### 2. 其他非比较操作符
 ```% mod ^ xor >> << | & || && and or```

说明：
1. 需要类型转换，仅在dolphin.sql_mode关闭sql_mode_strict时允许
2. ||操作符需要dolphin.sql_mode关闭pipes_as_concat
### 3. 比较操作符
 ```= <=> != <> < <= > >=```

比较规则说明：
1. JSON类型与NULL、其他类型比较，JSON类型大。
注意：json string与json类型比较，json类型 > json string，保持与MySQL行为一致，示例如下：
 ```
select `id`, `json1`, '{"num": 1, "name": "edf"}' as `jsonc`,
       `json1` > `jsonc` as `json1>jsonc`, `json1` >= `jsonc` as `json1>=jsonc`,
       `json1` < `jsonc` as `json1<jsonc`, `json1` <= `jsonc` as `json1<=jsonc`,
       `json1` != `jsonc` as `json1!=jsonc`, `json1` <> `jsonc` as `json1<>jsonc`,
       `json1` = `jsonc` as `json1=jsonc`, `json1` <=> `jsonc` as `json1<=>jsonc` from test_json_cmp_table;
 id  |           json1           |           jsonc           | json1>jsonc | json1>=jsonc | json1<jsonc | json1<=jsonc | json1!=jsonc | json1<>jsonc | json1=jsonc | json1<=>jsonc 
-----+---------------------------+---------------------------+-------------+--------------+-------------+--------------+--------------+--------------+-------------+---------------
   1 |                           | {"num": 1, "name": "edf"} |             |              |             |              |              |              |             | f
   2 | {"num": 1, "name": "abc"} | {"num": 1, "name": "edf"} | t           | t            | f           | f            | t            | t            | f           | f
   3 |                           | {"num": 1, "name": "edf"} |             |              |             |              |              |              |             | f
  41 | {"num": 1, "name": "abc"} | {"num": 1, "name": "edf"} | t           | t            | f           | f            | t            | t            | f           | f
  42 | {"num": 1, "name": "abc"} | {"num": 1, "name": "edf"} | t           | t            | f           | f            | t            | t            | f           | f
 501 | {"num": 1, "name": "abc"} | {"num": 1, "name": "edf"} | t           | t            | f           | f            | t            | t            | f           | f
 502 | {"num": 1, "name": "abc"} | {"num": 1, "name": "edf"} | t           | t            | f           | f            | t            | t            | f           | f
 503 | {"num": 1, "name": "abc"} | {"num": 1, "name": "edf"} | t           | t            | f           | f            | t            | t            | f           | f
 504 | {"num": 1, "name": "abc"} | {"num": 1, "name": "edf"} | t           | t            | f           | f            | t            | t            | f           | f
 504 | {"num": 1, "name": "abc"} | {"num": 1, "name": "edf"} | t           | t            | f           | f            | t            | t            | f           | f
 505 | {"nam": 2, "name": "abc"} | {"num": 1, "name": "edf"} | t           | t            | f           | f            | t            | t            | f           | f
 506 | {"num": 1, "name": "edf"} | {"num": 1, "name": "edf"} | t           | t            | f           | f            | t            | t            | f           | f
 507 | {"num": 1, "name": "abc"} | {"num": 1, "name": "edf"} | t           | t            | f           | f            | t            | t            | f           | f
 508 | ["a","b","c"]             | {"num": 1, "name": "edf"} | t           | t            | f           | f            | t            | t            | f           | f
 509 | [1,2,"a"]                 | {"num": 1, "name": "edf"} | t           | t            | f           | f            | t            | t            | f           | f
 510 | [1,2,3]                   | {"num": 1, "name": "edf"} | t           | t            | f           | f            | t            | t            | f           | f
 511 | [1,2,3]                   | {"num": 1, "name": "edf"} | t           | t            | f           | f            | t            | t            | f           | f
 512 | [1,2,3]                   | {"num": 1, "name": "edf"} | t           | t            | f           | f            | t            | t            | f           | f
(18 rows)
 ```
2. JSON类型与JSON类型比较：先将JSON数据根据key排序，排序后比较规格与JSONB类型相同
   1) 首先比较key值
   2) 相同key值则比较value的类型：object-jsonb > array-jsonb > bool-jsonb > num-jsonb > str-jsonb > null-jsonb 
   3) 同类型的value则比较内容：
      - str-json类型：依据text比较的方法，使用数据库默认排序规则进行比较，返回值正数代表大于，负数代表小于，0表示相等。
      - num-json类型：数值比较。
      - bool-json类型：true > false。
      - array-jsonb类型：长度长的 > 长度短的，长度相等则依次比较每个元素。
      - object-jsonb类型：长度长的 > 长度短的，长度相等则依次比较每个键值对，先比较键，在比较值。
## 兼容详情
### 支持JSON与以下数据类型运算：
- 数字类型：tinyint(**unsigned**)、smallint(**unsigned**)、integer(**unsigned**)、bigint(**unsigned**)、float4、float8、decimal/numeric以及bit。
- 字符串类型：char、varchar、binary、varbinary、tinyblob、blob、mediumblob、longblob、enum、set、json以及text。
- 时间日期类型：date、datetime、timestamp、time、year。
- 布尔类型：boolean。
### 支持情况具体如下：
|操作符|左操作数类型|右操作数类型|
|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|+<br/>-<br/>*<br/>/|json|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric、bit<br/>char、varchar、binary、varbinary、tinyblob、blob、mediumblob、longblob、enum、set、json、text<br/>date、datetime、timestamp、time、year<br/>boolean|
|div|json|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric、bit<br/>char、varchar、binary、varbinary、tinyblob、blob、mediumblob、longblob、enum、set、json、text<br/>date、datetime、timestamp、time、year<br/>boolean<br/><br/>注：json类型在四则运算中被解析为0，因此作为被除数时结果为0|
|^<br/>xor|json|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric、bit<br/>char、varchar、binary、varbinary、tinyblob、blob、mediumblob、longblob、enum、set、json、text<br/>date、datetime、timestamp、time、year<br/><br/>注：不支持boolean，如json^boolean报错：<br/>ERROR:  failed to find conversion function from boolean to double precision|
|%|json|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric、bit<br/>char、varchar、enum、set、json、text<br/>date、datetime、timestamp、time、year<br/>boolean<br/><br/>注：不支持binary、varbinary、tinyblob、blob、mediumblob、longblob，如json%binary报错：<br/>ERROR:  failed to find conversion function from "binary" to numeric|
|mod|json|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric、bit<br/>char、varchar、binary、varbinary、tinyblob、blob、mediumblob、longblob、enum、set、json、text<br/>date、datetime、timestamp、time、year<br/>boolean<br/><br/>注：json类型在运算中被解析为0，因此mod结果为0|
|\>><br/><<|json|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric<br/>char、varchar、enum、set、json、text<br/>date、datetime、timestamp、time、year<br/>boolean<br/><br/>注：<br/>1. 不支持binary、varbinary、tinyblob、blob、mediumblob、longblob，如json>>binary报错：<br/>ERROR:  failed to find conversion function from "binary" to integer<br/>2. 不支持bit，如json>>bit报错：<br/>ERROR:  operator does not exist: double precision >> bit|
|\|<br/>&|json|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric、bit<br/>char、varchar、enum、set、json、text<br/>date、datetime、timestamp、time、year<br/>boolean<br/><br/>注：<br/>不支持binary、varbinary、tinyblob、blob、mediumblob、longblob，如json\|binary报错：<br/>ERROR:  failed to find conversion function from "binary" to bigint|
|\|\|<br/>&&<br/>and<br/>or|json|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric、bit<br/>char、varchar、json、text<br/>date、time<br/>boolean<br/><br/>注：<br/>1. 不支持enum、set、datetime、timestamp、year、binary、varbinary、tinyblob、blob、mediumblob、longblob，如json\|\|binary报错：<br/>ERROR:  argument of OR must be type boolean, not type "binary"<br/>2. \|\|操作符需要dolphin.sql_mode关闭pipes_as_concat|
|=<br/><=><br/>!=<br/><><br/><<br/><=<br/>><br/>>=|json|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric、bit<br/>char、varchar、binary、varbinary、tinyblob、blob、mediumblob、longblob、enum、set、json、text<br/>date、datetime、timestamp、time、year<br/>boolean|
|+<br/>-<br/>*<br/>/|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric、bit<br/>char、varchar、binary、varbinary、tinyblob、blob、mediumblob、longblob、enum、set、json、text<br/>date、datetime、timestamp、time、year<br/>boolean<br/><br/>注：json类型在四则运算中被解析为0，因此作为除数时报错：<br/>ERROR:  division by zero|json|
|div|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric、bit<br/>char、varchar、binary、varbinary、tinyblob、blob、mediumblob、longblob、enum、set、json、text<br/>date、datetime、timestamp、time、year<br/>boolean<br/><br/>注：json类型在四则运算中被解析为0，因此作为除数时结果为NULL|json|
|^<br/>xor|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric、bit<br/>char、varchar、binary、varbinary、tinyblob、blob、mediumblob、longblob、enum、set、json、text<br/>date、datetime、timestamp、time、year<br/><br/>注：不支持boolean，如boolean^json报错：<br/>ERROR:  failed to find conversion function from boolean to double precision|json|
|%|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric、bit<br/>char、varchar、enum、set、json、text<br/>date、datetime、timestamp、time、year<br/>boolean<br/><br/>注：不支持binary、varbinary、tinyblob、blob、mediumblob、longblob，如binary%json报错：<br/>ERROR:  failed to find conversion function from "binary" to numeric|json|
|mod|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric、bit<br/>char、varchar、binary、varbinary、tinyblob、blob、mediumblob、longblob、enum、set、json、text<br/>date、datetime、timestamp、time、year<br/>boolean<br/><br/>注：json类型在运算中被解析为0，因此mod结果为NULL|json|
|\>><br/><<|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric、bit<br/>char、varchar、enum、set、json、text<br/>date、datetime、timestamp、time、year<br/>boolean<br/><br/>注：不支持binary、varbinary、tinyblob、blob、mediumblob、longblob，如binary>>json报错：<br/>ERROR:  failed to find conversion function from "binary" to bigint|json|
|\|<br/>&|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric、bit<br/>char、varchar、enum、set、json、text<br/>date、datetime、timestamp、time、year<br/>boolean<br/><br/>注：<br/>不支持binary、varbinary、tinyblob、blob、mediumblob、longblob，如binary\|json报错：<br/>ERROR:  failed to find conversion function from "binary" to bigint|json|
|\|\|<br/>&&<br/>and<br/>or|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric、bit<br/>char、varchar、json、text<br/>date、time<br/>boolean<br/><br/>注：<br/>1. 不支持enum、set、datetime、timestamp、year、binary、varbinary、tinyblob、blob、mediumblob、longblob，如binary\|\|json报错：<br/>ERROR:  argument of OR must be type boolean, not type "binary"<br/>2. \|\|操作符需要dolphin.sql_mode关闭pipes_as_concat|json|
|=<br/><=><br/>!=<br/><><br/><<br/><=<br/>><br/>>=|tinyint(unsigned)、smallint(unsigned)、integer(unsigned)、bigint(unsigned)、float4、float8、decimal/numeric、bit<br/>char、varchar、binary、varbinary、set、json、text<br/>date、datetime、timestamp、time、year<br/>boolean<br/><br/>注：不支持enum、tinyblob、blob、mediumblob、longblob，如blob>json报错：<br/>ERROR:  operator does not exist: blob > json<br/>HINT:No operator matches the given name and argument type(s). You might need to add explicit type casts.|json|
|+<br/>-<br/>~<br/>@|N/A|json|
|not|N/A|json|
### 其他限制说明：
- 不支持json类型与unknown类型的div, mod, xor操作符运算，报错如下：
```
testdb_m=# select jsonval div NULL from testtb_m;
ERROR:  function pg_catalog.div(json, unknown) is not unique
LINE 1: select jsonval div NULL from testtb_m;
                       ^
HINT:  Could not choose a best candidate function. You might need to add explicit type casts.
CONTEXT:  referenced column: div

testdb_m=# select jsonval mod NULL from testtb_m;
ERROR:  function pg_catalog.b_mod(json, unknown) is not unique
LINE 1: select jsonval mod NULL from testtb_m;
                       ^
HINT:  Could not choose a best candidate function. You might need to add explicit type casts.
CONTEXT:  referenced column: b_mod

testdb_m=# select jsonval xor NULL from testtb_m;
ERROR:  function pg_catalog.xor(json, unknown) is not unique
LINE 1: select jsonval xor NULL from testtb_m;
                       ^
HINT:  Could not choose a best candidate function. You might need to add explicit type casts.
CONTEXT:  referenced column: xor
```

