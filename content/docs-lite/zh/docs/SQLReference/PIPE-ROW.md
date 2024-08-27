# PIPE ROW

## 限制

只能在指定了PIPELINED的函数中使用。

## 语法

pipe_row_clause::=

![](figures/zh-cn-pipe_row.png)

对以上语法的解释如下：

PIPE ROW语句只能出现指定了PIPELINED的函数主体中，它向函数的调用程序返回一个表行。

函数返回给其调用程序的行（表元素），它的类型需要为函数指定的表元素。

如果表达式是记录变量，则必须使用表元素的数据类型显式声明它。不能使用仅在结构上与元素类型相同的数据类型来声明它。

## 示例

```
CREATE TYPE t_tf_row as (
    id number,
    description varchar2(50)
);
CREATE TYPE t_tf_tab is table of t_tf_row;
CREATE OR REPLACE FUNCTION get_tab_ptf(p_rows in number) returns t_tf_tab pipelined LANGUAGE plpgsql AS
$BODY$
declare result t_tf_row;
begin
    for i in 1 .. p_rows loop
        result.id = i;
        result.description = 'Descrption for ' || i;
        pipe row(null);
        pipe row(result);
    end loop;
end;
$BODY$;
select * from get_tab_ptf(2);
 id |   description    
----+------------------
    | 
  1 | Descrption for 1
    | 
  2 | Descrption for 2
(4 rows)
```

