# 不支持语法

dolphin插件内基于一些新增特性，会屏蔽某些语法特性。本章节主要列出在使用dolphin插件后，一些语法默认不支持。

## ANALYSE

### 语法变更说明

- 用于收集与数据库中普通表内容相关的统计信息，不再支持ANALYSE关键字。相关功能请使用ANALYZE关键字。

```sql
-- 原先支持的语法：
ANALYSE;
-- 可用的相关语法
ANALYZE; 
```

## ANALYZE

- ANALYZE语法无法直接使用verbose选项。实际使用过程中，需要采用()的方式包裹。

```sql
-- 原先支持的语法：
ANALYZE VERBOSE;
-- 可用的相关语法
ANALYZE (VERBOSE);
-- 当表VERBOSE存在时，下面语句表示对VERBOSE表作ANALYZE
ANALYZE VERBOSE;
```

### 替换语法

## VACUUM

### 语法变更说明

- 禁用VACCUM相关选项如：COMPACT。

```sql
-- 原先支持的语法如，后续将不再支持
vacuum full compact table_name;
-- 可用的相关语法
vacuum full table_name;
```

- VACUUM语法无法直接使用verbose、freeze选项。实际使用过程中，需要采用()的方式包裹。

```sql
-- 原先支持的语法如，后续将不再支持
vacuum full freeze verbose table_name;
-- 可用的相关语法
vacuum full table_name;
-- 或者
vacuum (full, freeze, verbose) table_name;

```

## CLUSTER

- CLUSTER语法无法直接使用verbose。实际使用过程中，需要采用()的方式包裹。

```sql
-- 原先支持语法
cluster verbose index_name;
-- 可用的相关语法
cluster (verbose) index_name;
```

## ROWNUM

- rownum不再作为伪列。

## USER

-- 移除SELECT USER返回当前用户语法。可以采用SELECT USER()语法替代。

```sql
-- 原先支持的语法如，后续将不再支持
SELECT USER;
-- 可用的相关语法
SELECT USER();
```

## CREATE-TRIGGER

-- 禁止使用USER名字作为openGauss触发器的名字。

## SYSDATE

-- 禁用select sysdate语法。可以使用select sysdate()替换。

```sql
-- 原先支持的语法如，后续将不再支持
SELECT SYSDATE;
-- 可用的相关语法
SELECT SYSDATE();
```

## COLLATION FOR

-- 禁用COLLATION FOR语法，可以用pg_collation_for替换。

```sql
CREATE TABLE test(id INT);
-- 原先支持的语法如，后续将不再支持
SELECT COLLATION FOR (id) from test;
-- 可用的相关语法
SELECT pg_collcation_for(id) from test;
```

## CREATE RULE

-- 在使用CREATE RULE语法时，当指定规则的过滤条件需要单独使用PRIOR/BINARY字段列时，该字段需要添加括号（其他字段无影响）。

```sql
create table test(binary boolean);
create table test2(id boolean);
-- 原先支持的语法如，后续将不再支持
create rule "test_rule" as on select to test where binary do instead select * from test2;
-- 可用的相关语法(仅表示语法合规，不保证语法功能时可用的)
create rule "test_rule" as on select to test where (binary) do instead select * from test2;
```

## CASE WHEN END

-- 在使用CASE WHEN END相关语句时，如果最后需要返回PRIOR/BINARY字段列时，该字段需要添加括号（其他字段无影响）。

```sql
create table test(id int,binary int);
select case when id % 2 =0 then 1 else binary end from test;
-- 可用的相关语法
select case when id % 2 =0 then 1 else (binary) end from test;
```

## ONLY

ONLY在使用过程中，表示是否对表的子表操作。例如：ALTER
TABLE子句中，修改表属性时，根据是否声明ONLY决定是否修改子表等。实际使用中，如果需要使用ONLY，需要在对ONLY添加括号。目前openGauss不支持继承表，该语法暂不赘述。

## ON DUPLICATE KEY UPDATE
- 在openGauss中，ON DUPLICATE KEY UPDATE语法默认以excluded作为新数据的别名。后续将不再支持excluded作为别名。如果有别名特性，可以采用as别名的的方式。
```sql
create table test(a int ,b int,c int);
create unique index on test(b);
-- 原先支持的语法如，后续将不再支持
insert into test values(1,2,3) on duplicate key update b = excluded.b + 1;
-- 可用的相关语法
insert into test values(1,2,3) as excluded on duplicate key update b = excluded.b + 1;
```
- 在openGauss中，ON DUPLICATE KEY UPDATE语法中，额可以使用insert into test *selectStmt* on duplicate key update语句，后续在该场景下，需要对selectStmt添加括号包裹。
```sql
create table test(a int ,b int,c int);
create unique index on test(b);
-- 原先支持的语法如，后续将不再支持
insert into test select 1,2,3 on duplicate key update a = values(b) + 1;
-- 可用的相关语法
insert into test (select 1,2,3) on duplicate key update a = values(b) + 1;
```
- 我们可以通过as别名的方式指定新数据的别名。例如：

```sql
create table test(a int ,b int,c int);
create unique index on test(b);
insert into test (select 1,2,3) as excluded(d,e,f) on duplicate key update a = excluded.e + 1;
```

## MINUS
openGauss可以基于查询数据集合作相关操作。MINUS表示集合间的排除操作。后续MINUS功能将不可用，使用EXCPECT关键字替换。
```sql
-- 原先支持的语法如，后续将不再支持
select generate_series(1,10) MINUS select generate_series(2,10);
-- 可用的相关语法
select generate_series(1,10) EXCEPT select generate_series(2,10);
```