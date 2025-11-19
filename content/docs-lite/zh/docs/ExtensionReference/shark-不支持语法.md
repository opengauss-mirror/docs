# 不支持语法

shark插件内基于一些新增特性，会屏蔽某些语法特性。本章节主要列出在使用shark插件后，一些语法默认不再支持。

## ROWNUM

### 语法变更说明

- rownum不再作为伪列关键词。

```sql
-- 不再支持rownum作为伪列关键词
openGauss=# select * from test1 where ROWNUM < 2;
ERROR:  column "rownum" does not exist
LINE 1: select * from test1 where ROWNUM < 2;
                                  ^

--可用语法
--例如可以使用limit替代rownum小于语法
openGauss=# select * from test1 limit 1;
 id
----
  1
(1 row)

```

