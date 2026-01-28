# 集合支持的函数

## 集合操作符<a name="section423710350429"></a>

- =（默认）

    参数：nesttable类型

    返回值：true or false，bool类型

    功能描述：两个集合类型是否相等（有序比较）。

    示例：

    ```
    openGauss=# declare
    openGauss-#     type nest is table of int;
    openGauss-#     a nest := nest(1,2);
    openGauss-#     b nest := nest(1,2);
    openGauss-#     flag bool; 
    openGauss-# begin
    openGauss$#     flag := a = b;
    openGauss$#     raise info '%', flag;
    openGauss$# end;
    openGauss$# /
    INFO:  t
    ANONYMOUS BLOCK EXECUTE
    ```

- =（compatible_a_db_array模式）

    参数：nesttable类型

    返回值：true or false，bool类型

    功能描述：两个集合类型是否相等（无序比较）。需要注意，当集合中包含NULL值时，结果总是False。

    示例：

    ```
    openGauss$# set behavior_compat_options='compatible_a_db_array';
    SET
    openGauss$# DECLARE
    openGauss$# TYPE my_table IS TABLE OF VARCHAR2(100);
    openGauss$# set1 my_table := my_table('b', 'b', 'c');
    openGauss$# set2 my_table := my_table('c', 'b', 'b');
    openGauss$# BEGIN
    openGauss$#     IF set1 = set2 THEN
    openGauss$#         raise info '集合相等';
    openGauss$#     ELSE
    openGauss$#         raise info'集合不相等';
    openGauss$#     END IF;
    openGauss$# END;
    openGauss$# /
    INFO:  集合相等
    ANONYMOUS BLOCK EXECUTE
    ```

- <\>

    参数：nesttable类型

    返回值：true or false，bool类型

    功能描述：两个集合类型是否不相等。

    示例：

    ```
    openGauss=# declare
    openGauss-#     type nest is table of int;
    openGauss-#     a nest := nest(1,2);
    openGauss-#     b nest := nest(1,2);
    openGauss-#     flag bool; 
    openGauss-# begin
    openGauss$#     flag := a <> b;
    openGauss$#     raise info '%', flag;
    openGauss$# end;
    openGauss$# /
    INFO:  f
    ANONYMOUS BLOCK EXECUTE
    ```

## 集合MULTISET函数<a name="section1678113016436"></a>

- MULTISET UNION \[ALL | DISTINCT\]

    参数：nesttable类型

    返回值：nesttable类型

    功能描述：两个集合变量的并集，ALL不去除重复元素，DISTINCT去除重复元素。

    示例：

    ```
    openGauss=# declare
    openGauss-#     type nest is table of int;
    openGauss-#     a nest := nest(1,2);
    openGauss-#     b nest := nest(2,3);
    openGauss-# begin
    openGauss$#     a := a MULTISET UNION ALL b;
    openGauss$#     raise info '%', a;
    openGauss$# end;
    openGauss$# /
    INFO:  {1,2,2,3}
    ANONYMOUS BLOCK EXECUTE
     
    openGauss=# declare
    openGauss-#     type nest is table of int;
    openGauss-#     a nest := nest(1,2);
    openGauss-#     b nest := nest(2,3);
    openGauss-# begin
    openGauss$#     a := a MULTISET UNION DISTINCT b;
    openGauss$#     raise info '%', a;
    openGauss$# end;
    openGauss$# /
    INFO:  {1,2,3}
    ANONYMOUS BLOCK EXECUTE
    ```

- MULTISET EXCEPT \[ALL | DISTINCT\]

    参数：nesttable类型

    返回值：nesttable类型

    功能描述：两个集合变量的差集。如A MULTISET EXCEPT B：ALL表示去除A中与B重复的元素；DISTINCT表示先对A进行去重操作，然后去除与B中有重复的元素。

    示例：

    ```
    openGauss=# declare
    openGauss-#     type nest is table of int;
    openGauss-#     a nest := nest(1,2,2);
    openGauss-#     b nest := nest(2,3);
    openGauss-# begin
    openGauss$#     a := a MULTISET EXCEPT ALL b;
    openGauss$#     raise info '%', a;
    openGauss$# end;
    openGauss$# /
    INFO:  {1,2}
    ANONYMOUS BLOCK EXECUTE
     
    openGauss=# declare
    openGauss-#     type nest is table of int;
    openGauss-#     a nest := nest(1,2,2);
    openGauss-#     b nest := nest(2,3);
    openGauss-# begin
    openGauss$#     a := a MULTISET EXCEPT DISTINCT b;
    openGauss$#     raise info '%', a;
    openGauss$# end;
    openGauss$# /
    INFO:  {1}
    ANONYMOUS BLOCK EXECUTE
    ```

- MULTISET INTERSECT \[ALL | DISTINCT\]

    参数：nesttable类型

    返回值：nesttable类型

    功能描述：两个集合变量的交集。如 A MULTISET INTERSECT B：ALL表是取A与B所有重复的元素；DISTINCT表示取A与B中重复元素，且去除重复元素。

    示例：

    ```
    openGauss=# declare
    openGauss-#     type nest is table of int;
    openGauss-#     a nest := nest(1,2,2);
    openGauss-#     b nest := nest(2,2,3);
    openGauss-# begin
    openGauss$#     a := a MULTISET INTERSECT ALL b;
    openGauss$#     raise info '%', a;
    openGauss$# end;
    openGauss$# /
    INFO:  {2,2}
    ANONYMOUS BLOCK EXECUTE
     
    openGauss=# declare
    openGauss-#     type nest is table of int;
    openGauss-#     a nest := nest(1,2,2);
    openGauss-#     b nest := nest(2,2,3);
    openGauss-# begin
    openGauss$#     a := a MULTISET INTERSECT DISTINCT b;
    openGauss$#     raise info '%', a;
    openGauss$# end;
    openGauss$# /
    INFO:  {2}
    ANONYMOUS BLOCK EXECUTE
    ```

## 集合类型函数<a name="section1525493416436"></a>

- exists\(idx\)

    参数：idx为int4类型或varchar类型，

    返回值：true or false，bool类型

    功能描述：查找指定位置是否存在有效元素。

    示例：

    ```
    openGauss=# declare
    openGauss-#     type nest is table of varchar2;
    openGauss-#     a nest := nest('happy','?');
    openGauss-#     flag bool;
    openGauss-# begin
    openGauss$#     flag := a.exists(1);
    openGauss$#     raise info '%', flag;
    openGauss$#     flag := a.exists(10);
    openGauss$#     raise info '%', flag;
    openGauss$# end;
    openGauss$# /
    INFO:  t
    INFO:  f
    ANONYMOUS BLOCK EXECUTE
     
    openGauss=# declare
    openGauss-#     type nest is table of varchar2 index by varchar2;
    openGauss-#     a nest;
    openGauss-#     flag bool;
    openGauss-# begin
    openGauss$#     a('1') := 'Be';
    openGauss$#     a('2') := 'happy';
    openGauss$#     a('3') := '.';
    openGauss$#     flag := a.exists('1');
    openGauss$#     raise info '%', flag;
    openGauss$#     flag := a.exists('ddd');
    openGauss$#     raise info '%', flag;
    openGauss$# end;
    openGauss$# /
    INFO:  t
    INFO:  f
    ANONYMOUS BLOCK EXECUTE
    ```

- extend\[\(e)\]

    参数：e为int4类型

    返回值：无返回值

    功能描述：仅支持nesttable类型。在nesttable变量末尾拓展1个元素。

    约束：嵌套场景不支持extend\(\)。

    示例：

    ```
    openGauss=# declare
    openGauss-#     type nest is table of int;
    openGauss-#     a nest := nest(1);
    openGauss-# begin
    openGauss$#     raise info '%', a;
    openGauss$#     a.extend;
    openGauss$#     raise info '%', a;
    openGauss$# end;
    openGauss$# /
    INFO:  {1}
    INFO:  {1,NULL}
    ANONYMOUS BLOCK EXECUTE
     
    openGauss=# declare
    openGauss-#     type nest is table of int;
    openGauss-#     a nest := nest(1);
    openGauss-# begin
    openGauss$#     raise info '%', a;
    openGauss$#     a.extend(2);
    openGauss$#     raise info '%', a;
    openGauss$# end;
    openGauss$# /
    INFO:  {1}
    INFO:  {1,NULL,NULL}
    ANONYMOUS BLOCK EXECUTE
    ```
    
- delete\[\(idx1\)\]（默认）

    参数：idx1为int4类型或varchar2类型

    返回值：无返回值

    功能描述：无参数时，（nesttable）删除集合类型的所有元素和空间，后续使用需要重新extend，（indexbytable）删除所有元素内容，一个参数删除指定位置元素（不删除空间）。

    约束：嵌套场景不支持delete\(\)。

    示例：

    ```
    openGauss=# declare
    openGauss-#     type nest is table of int;
    openGauss-#     a nest := nest(1,2,3,4,5);
    openGauss-# begin
    openGauss$#     raise info '%', a;
    openGauss$#     a.delete;
    openGauss$#     raise info '%', a;
    openGauss$# end;
    openGauss$# /
    INFO:  {1,2,3,4,5}
    INFO:  {}
    ANONYMOUS BLOCK EXECUTE
     
    openGauss=# declare
    openGauss-#     type nest is table of int;
    openGauss-#     a nest := nest(1,2,3,4,5);
    openGauss-# begin
    openGauss$#     raise info '%', a;
    openGauss$#     a.delete(3);
    openGauss$#     raise info '%', a;
    openGauss$# end;
    openGauss$# /
    INFO:  {1,2,3,4,5}
    INFO:  {1,2,4,5}
    ANONYMOUS BLOCK EXECUTE
    ```

- delete\[\(idx1\)\]（compatible_a_db_array模式）

    参数：idx1为int4类型或varchar2类型

    返回值：无返回值

    功能描述：无参数时，（nesttable）删除集合类型的所有元素和空间。有参数时，删除第idx1项，删除时仅置空，被删除项仍然占位。

    示例：

    ```
    openGauss$# set behavior_compat_options='compatible_a_db_array';
    SET
    openGauss$# CREATE OR REPLACE TYPE num_type IS TABLE OF NUMBER;
    openGauss$# DECLARE
    openGauss$#   nt num_type := num_type(11, 22, 33, 44, 55, 66);
    openGauss$# BEGIN
    openGauss$#   nt.DELETE(1);
    openGauss$#   raise notice '%',nt(1);
    openGauss$#   raise notice '%',nt(2);
    openGauss$#   raise notice '%',nt(3);
    openGauss$#   raise notice '%',nt(4);
    openGauss$# END;
    openGauss$# /
    NOTICE:  <NULL>
    NOTICE:  22
    NOTICE:  33
    NOTICE:  44
    ANONYMOUS BLOCK EXECUTE

    openGauss$# declare
    openGauss$#     type ta is table of varchar(32) index by varchar(32);
    openGauss$#     nt ta;
    openGauss$# begin
    openGauss$#     nt('311') := 'yellow';
    openGauss$#     nt(';') := 'red';
    openGauss$#     nt('o2') := 'orange';
    openGauss$#  raise notice '%',nt('311');
    openGauss$#     raise notice '%',nt(';');
    openGauss$#     raise notice '%',nt('o2');
    openGauss$#     nt.DELETE(';');
    openGauss$#     raise notice '%',nt('311');
    openGauss$#     raise notice '%',nt(';');
    openGauss$#     raise notice '%',nt('o2');
    openGauss$# END;
    openGauss$# /
    NOTICE:  yellow
    NOTICE:  red
    NOTICE:  orange
    NOTICE:  yellow
    NOTICE:  <NULL>
    NOTICE:  orange
    ANONYMOUS BLOCK EXECUTE
    ```

- delete\[\(idx1, idx2\)\]（compatible_a_db_array模式）

    参数：idx1和idx2为int4类型或varchar2类型

    返回值：无返回值

    功能描述：删除第idx1到idx2，删除时仅置空，被删除项仍然占位。仅在compatible_a_db_array模式支持。

    约束：带索引的数组或者集合不支持delete\[\(idx1, idx2\)\]，嵌套数组会默认带有索引，因此也不支持delete\[\(idx1, idx2\)\]。

    示例：

    ```
    openGauss$# set behavior_compat_options='compatible_a_db_array';
    SET
    openGauss$# CREATE OR REPLACE TYPE num_type IS TABLE OF NUMBER;
    openGauss$# DECLARE
    openGauss$#   nt num_type := num_type(11, 22, 33, 44, 55, 66);
    openGauss$# BEGIN
    openGauss$#   nt.DELETE(2,3);
    openGauss$#   raise notice '%',nt(1);
    openGauss$#   raise notice '%',nt(2);
    openGauss$#   raise notice '%',nt(3);
    openGauss$#   raise notice '%',nt(4);
    openGauss$# END;
    openGauss$# /
    NOTICE:  11
    NOTICE:  <NULL>
    NOTICE:  <NULL>
    NOTICE:  44
    ANONYMOUS BLOCK EXECUTE
    ```
    
- trim\[\(n\)\]

    参数：n为int4类型

    返回值：无返回值

    功能描述：仅支持nesttable类型，无参数时，删除末尾一个元素空间，输入参数合法时，删除末尾指定数量元素空间。

    约束：嵌套场景不支持trim\(\)。

    示例：

    ```
    openGauss=# declare
    openGauss-# type nest is table of int;
    openGauss-# aa nest:=nest(11,22,33,44,55);
    openGauss-# begin
    openGauss$# raise info 'aa:%' ,aa;
    openGauss$# aa.trim;
    openGauss$# raise info 'aa:%' ,aa;
    openGauss$# aa.trim(2);
    openGauss$# raise info 'aa:%' ,aa;
    openGauss$# end;
    openGauss$# /
    INFO:  aa:{11,22,33,44,55}
    INFO:  aa:{11,22,33,44}
    INFO:  aa:{11,22}
    ANONYMOUS BLOCK EXECUTE
    ```

- count

    参数：无

    返回值：int类型

    功能描述：返回集合中存在有效元素的个数。

    示例：

    ```
    openGauss=# declare
    openGauss-# type nest is table of int;
    openGauss-# aa nest:=nest(11,22,33,44,55);
    openGauss-# begin
    openGauss$# raise info 'count:%' ,aa.count;
    openGauss$# end;
    openGauss$# /
    INFO:  count:5
    ANONYMOUS BLOCK EXECUTE
    
    openGauss=# declare
    openGauss-# type nest is table of int index by varchar;
    openGauss-# aa nest;
    openGauss-# begin
    openGauss$# aa('aaa') := 111;
    openGauss$# aa('bbb') := 222;
    openGauss$# aa('ccc') := 333;
    openGauss$# raise info 'count:%' ,aa.count;
    openGauss$# end;
    openGauss$# /
    INFO:  count:3
    ANONYMOUS BLOCK EXECUTE
    ```

- first

    参数：无

    返回值：int类型或varchar类型

    功能描述：返回集合中第一个有效元素的下标。

    示例：

    ```
    openGauss=# declare
    openGauss-# type nest is table of int;
    openGauss-# aa nest:=nest(11,22,33,44,55);
    openGauss-# begin
    openGauss$# raise info 'first:%' ,aa.first;
    openGauss$# end;
    openGauss$# /
    INFO:  first:1
    ANONYMOUS BLOCK EXECUTE
    
    openGauss=# declare
    openGauss-# type nest is table of int index by varchar;
    openGauss-# aa nest;
    openGauss-# begin
    openGauss$# aa('aaa') := 111;
    openGauss$# aa('bbb') := 222;
    openGauss$# aa('ccc') := 333;
    openGauss$# raise info 'first:%' ,aa.first;
    openGauss$# end;
    openGauss$# /
    INFO:  first:aaa
    ANONYMOUS BLOCK EXECUTE
    ```

- last

    参数：无

    返回值：int类型或varchar类型

    功能描述：返回集合中最后一个有效元素的下标。

    示例：

    ```
    openGauss=# declare
    openGauss-# type nest is table of int;
    openGauss-# aa nest:=nest(11,22,33,44,55);
    openGauss-# begin
    openGauss$# raise info 'last:%' ,aa.last;
    openGauss$# end;
    openGauss$# /
    INFO:  last:5
    ANONYMOUS BLOCK EXECUTE
    
    openGauss=# declare
    openGauss-# type nest is table of int index by varchar;
    openGauss-# aa nest;
    openGauss-# begin
    openGauss$# aa('aaa') := 111;
    openGauss$# aa('bbb') := 222;
    openGauss$# aa('ccc') := 333;
    openGauss$# raise info 'last:%' ,aa.last;
    openGauss$# end;
    openGauss$# /
    INFO:  last:ccc
    ANONYMOUS BLOCK EXECUTE
    ```

- prior\(idx\)

    参数：idx为int类型或varchar类型

    返回值：int类型或varchar类型

    功能描述：返回集合中当前下标的前一个有效元素下标。

    示例：

    ```
    openGauss=# declare
    openGauss-# type nest is table of int;
    openGauss-# aa nest:=nest(11,22,33,44,55);
    openGauss-# begin
    openGauss$# raise info 'prior:%' ,aa.prior(3);
    openGauss$# end;
    openGauss$# /
    INFO:  prior:2
    ANONYMOUS BLOCK EXECUTE
    
    openGauss=# declare
    openGauss-# type nest is table of int index by varchar;
    openGauss-# aa nest;
    openGauss-# begin
    openGauss$# aa('aaa') := 111;
    openGauss$# aa('bbb') := 222;
    openGauss$# aa('ccc') := 333;
    openGauss$# raise info 'prior:%' ,aa.prior('bbb');
    openGauss$# end;
    openGauss$# /
    INFO:  prior:aaa
    ANONYMOUS BLOCK EXECUTE
    ```

- next\(idx\)

    参数：idx为int类型或varchar类型

    返回值：int类型或varchar类型

    功能描述：返回集合中当前下标的后一个有效元素下标。

    示例：

    ```
    openGauss=# declare
    openGauss-# type nest is table of int;
    openGauss-# aa nest:=nest(11,22,33,44,55);
    openGauss-# begin
    openGauss$# raise info 'next:%' ,aa.next(3);
    openGauss$# end;
    openGauss$# /
    INFO:  next:4
    ANONYMOUS BLOCK EXECUTE
    
    openGauss=# declare
    openGauss-# type nest is table of int index by varchar;
    openGauss-# aa nest;
    openGauss-# begin
    openGauss$# aa('aaa') := 111;
    openGauss$# aa('bbb') := 222;
    openGauss$# aa('ccc') := 333;
    openGauss$# raise info 'next:%' ,aa.next('bbb');
    openGauss$# end;
    openGauss$# /
    INFO:  next:ccc
    ANONYMOUS BLOCK EXECUTE
    ```

- limit

    参数：无

    返回值：null

    功能描述：用于nesttable类型，返回集合中最大可以储存的元素个数，只适用于array类型，nesttable返回空。

    示例：

    ```
    openGauss=# declare
    openGauss-# type nest is table of int;
    openGauss-# aa nest:=nest(11,22,33,44,55);
    openGauss-# begin
    openGauss$# raise info 'limit:%' ,aa.limit;
    openGauss$# end;
    openGauss$# /
    INFO:  limit:<NULL>
    ANONYMOUS BLOCK EXECUTE
    ```
