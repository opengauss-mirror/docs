# Functions Supported by Sets<a name="EN-US_TOPIC_0000001361706622"></a>

## Set Operators<a name="section423710350429"></a>

-   =

    Parameter type: nest-table

    Return value: **true** or **false**, Boolean type

    Description: Checks whether two sets are of the same type.

    Example:

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

-   <\>

    Parameter type: nest-table

    Return value: **true** or **false**, Boolean type

    Description: Checks whether the types of two sets are different.

    Example:

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


## MULTISET<a name="section1678113016436"></a>

-   MULTISET UNION \[ALL | DISTINCT\]

    Parameter type: nest-table

    Return type: nest-table

    Description: Union of two set variables. **ALL** indicates that duplicate elements are not removed, and **DISTINCT** indicates that duplicate elements are removed.

    Example:

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

-   MULTISET EXCEPT \[ALL | DISTINCT\]

    Parameter type: nest-table

    Return type: nest-table

    Description: Difference of two set variables. Taking A MULTISET EXCEPT B as an example, **ALL** indicates that elements that are the same as those in B are removed from A. **DISTINCT** indicates that duplicate elements are removed from A first and then elements that are the same as those in B are removed from A.

    Example:

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

-   MULTISET INTERSECT \[ALL | DISTINCT\]

    Parameter type: nest-table

    Return type: nest-table

    Description: Intersection of two set variables. Taking A MULTISET INTERSECT B as an example, **ALL** indicates that all duplicate elements in A and B are obtained, and **DISTINCT** indicates that duplicate elements in A and B are obtained and then duplicate elements in this intersection are removed.

    Example:

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


## Set Types<a name="section1525493416436"></a>

-   exists\(idx\)

    Parameter: *idx* is of the int4 or varchar type.

    Return value: **true** or **false**, Boolean type

    Description: Checks whether a valid element exists in a specified position.

    Example:

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

-   extend\[\(count\[, idx\]\)\]

    Parameters: *idx* and *count* are of the int4 type.

    Return type: No value is returned.

    Description: Only the nest-table type is supported. One or *count* elements are extended at the end of the nest-table variable. If index set element *idx* exists, *count* index elements are copied to the end of the variable.

    Restriction: extend\(\) is not supported in nesting scenarios.

    Example:

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
     
    openGauss=# declare
    openGauss-#     type nest is table of int;
    openGauss-#     a nest := nest(1);
    openGauss-# begin
    openGauss$#     raise info '%', a;
    openGauss$#     a.extend(2,1);
    openGauss$#     raise info '%', a;
    openGauss$# end;
    openGauss$# /
    INFO:  {1}
    INFO:  {1,1,1}
    ANONYMOUS BLOCK EXECUTE
    ```

-   delete\[\(idx1\[, idx2\]\)\]

    Parameters: *idx1* and *idx2* are of the int4 or varchar2 type.

    Return type: No value is returned.

    Description: Deletes all elements and releases corresponding storage space in a nest-table set (to use this set, **extend** must be executed again), or deletes all elements (including index set elements) in an index-by table set but does not release corresponding storage space.

    Restriction: delete\(\) is not supported in nesting scenarios.

    Example:

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
     
    openGauss=# declare
    openGauss-#     type nest is table of int;
    openGauss-#     a nest := nest(1,2,3,4,5);
    openGauss-# begin
    openGauss$#     raise info '%', a;
    openGauss$#     a.delete(2,4);
    openGauss$#     raise info '%', a;
    openGauss$# end;
    openGauss$# /
    INFO:  {1,2,3,4,5}
    INFO:  {1,5}
    ANONYMOUS BLOCK EXECUTE
    ```

-   trim\[\(n\)\]

    Parameter: *n* is of the int4 type.

    Return type: No value is returned.

    Description: Deletes one or *n* elements and corresponding storage space from a nest-table set. Only the nest-table set type is supported.

    Restriction: trim\(\) is not supported in nesting scenarios.

    Example:

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

-   count

    Parameter: none

    Return type: int

    Description: Returns the number of valid elements in a set.

    Example:

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

-   first

    Parameter: none

    Return type: int or varchar

    Description: Returns the index of the first valid element in a set.

    Example:

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

-   last

    Parameter: none

    Return type: int or varchar

    Description: Returns the index of the last valid element in a set.

    Example:

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

-   prior\(idx\)

    Parameter: *idx* is of the int or varchar type.

    Return type: int or varchar

    Description: Returns the index of a valid element before the current index in a set.

    Example:

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

-   next\(idx\)

    Parameter: *idx* is of the int or varchar type.

    Return type: int or varchar

    Description: Returns the index of a valid element following the current index in a set.

    Example:

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

-   limit

    Parameter: none

    Return value: null

    Description: Returns the maximum number of elements that can be stored in a nest-table set. This function applies only to the array type. The return value is null.

    Example:

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


## Set-related Functions<a name="section139035984313"></a>

-   unnest\_table\(anynesttable\)

    Description: Returns a set of elements in a nest-table.

    Return type: setof anyelement

    Restriction: The tableof type cannot be nested with the tableof type, or the tableof type cannot be nested with other types and then the tableof type.

    Example:

    ```
    create or replace procedure f1()
    as
        type t1 is table of int;
        v2 t1 := t1(null, 2, 3, 4, null);
        tmp int;
        cursor c1 is select * from unnest_table(v2);
    begin
    open c1;
    for i in 1 .. v2.count loop
        fetch c1 into tmp;
        if tmp is null then
            dbe_output.print_line(i || ': is null');
        else
            dbe_output.print_line(i || ': ' || tmp);
        end if;
    end loop;
    close c1;
    end;
    /
    
    openGauss=# call f1();
    1: is null
    2: 2
    3: 3
    4: 4
    5: is null
     f1 
    ----
    
    (1 row)
    ```


-   unnest\_table\(anyindexbytable\)

    Description: Returns the set of elements in an index-by table sorted by index.

    Return type: setof anyelement

    Restriction: The tableof type cannot be nested with the tableof type, or the tableof type cannot be nested with other types and then the tableof type. Only the index by int type is supported. The index by varchar type is not supported.

    Example:

    ```
    create or replace procedure f1()
    as
        type t1 is table of int index by int;
        v2 t1 := t1(1=>1, -10=>(-10), 6=>6, 4=>null);
        tmp int;
        cursor c1 is select * from unnest_table(v2);
    begin
    open c1;
    for i in 1 .. v2.count loop
        fetch c1 into tmp;
        if tmp is null then
            dbe_output.print_line(i || ': is null');
        else
            dbe_output.print_line(i || ': ' || tmp);
        end if;
    end loop;
    close c1;
    end;
    /
    
    openGauss=# call f1();
    1: -10
    2: 1
    3: is null
    4: 6
     f1 
    ----
    
    (1 row)
    ```
