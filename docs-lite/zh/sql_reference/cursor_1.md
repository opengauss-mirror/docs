# 游标<a name="ZH-CN_TOPIC_0000001255221833"></a>

为了处理SQL语句，存储过程进程分配一段内存区域来保存上下文联系。游标是指向上下文区域的句柄或指针。借助游标，存储过程可以控制上下文区域的变化。

## 语法格式<a name="section1579716574370"></a>

- 定义游标

    ```
    CURSOR cursor_name
        [ BINARY ]  [ NO SCROLL ]  [ { WITH | WITHOUT } HOLD ]
        FOR query ;
    ```

- 通过已经创建的游标检索数据

    ```
    FETCH [ direction { FROM | IN } ] cursor_name;
    ```

    其中direction子句为可选参数。

    ```
    NEXT
       | PRIOR
       | FIRST
       | LAST
       | ABSOLUTE count
       | RELATIVE count
       | count
       | ALL
       | FORWARD
       | FORWARD count
       | FORWARD ALL
       | BACKWARD
       | BACKWARD count
       | BACKWARD ALL
    ```

- 在不检索数据的情况下重新定位一个游标

    MOVE的作用类似于FETCH命令，但只是重定位游标而不返回行。

    ```
    MOVE [ direction [ FROM | IN ] ] cursor_name;
    ```

    其中direction子句为可选参数。

    ```
    NEXT
       | PRIOR
       | FIRST
       | LAST
       | ABSOLUTE count
       | RELATIVE count
       | count
       | ALL
       | FORWARD
       | FORWARD count
       | FORWARD ALL
       | BACKWARD
       | BACKWARD count
       | BACKWARD ALL
    ```

- 关闭游标，释放和一个游标关联的所有资源

    ```
    CLOSE { cursor_name | ALL } ;
    ```

## 参数说明<a name="section1353875110388"></a>

- **cursor\_name**

    将要创建、关闭的游标名。

- **BINARY**

    指明游标以二进制而不是文本格式返回数据。

- **NO SCROLL**

    声明游标检索数据行的方式。

    - NO SCROLL：声明该游标不能用于以倒序的方式检索数据行。
    - 未声明：根据执行计划的不同，自动判断该游标是否可以用于以倒序的方式检索数据行。

- **WITH HOLD | WITHOUT HOLD**

    声明当创建游标的事务结束后，游标是否能继续使用。

    - WITH HOLD：声明该游标在创建它的事务结束后仍可继续使用。
    - WITHOUT HOLD：声明该游标在创建它的事务之外不能再继续使用，此游标将在事务结束时被自动关闭。
    - 如果不指定WITH HOLD或WITHOUT HOLD，默认行为是WITHOUT HOLD。
    - 跨节点事务不支持WITH HOLD（例如在多DBnode部署openGauss中所创建的含有DDL的事务属于跨节点事务）。

- **query**

    使用SELECT或VALUES子句指定游标返回的行。

    取值范围：SELECT或VALUES子句。

- **direction**

    定义抓取数据的方向。

    取值范围：

    - NEXT（缺省值）

        从当前关联位置开始，抓取下一行。

    - PRIOR

        从当前关联位置开始，抓取上一行。

    - FIRST

        抓取查询的第一行（和ABSOLUTE 1相同）。

    - LAST

        抓取查询的最后一行（和ABSOLUTE -1相同）。

    - ABSOLUTE count

        抓取查询中第count行。

        ABSOLUTE抓取不会比用相对位移移动到需要的数据行更快，因为下层的实现必须遍历所有中间的行。

        count取值范围：有符号的整数

        - count为正数，就从查询结果的第一行开始，抓取第count行。
        - count为负数，就从查询结果末尾抓取第abs\(_count_\)行。
        - count为0时，定位在第一行之前。

    - RELATIVE count

        从当前关联位置开始，抓取随后或前面的第count行。

        取值范围：有符号的整数

        - count为正数就抓取当前关联位置之后的第count行。
        - count为负数就抓取当前关联位置之前的第abs\(count\)行。
        - 如果当前行没有数据的话，RELATIVE 0返回空。

    - count

        抓取随后的count行（和FORWARD count一样）。

    - ALL

        从当前关联位置开始，抓取所有剩余的行（和FORWARD ALL一样）。

    - FORWARD

        抓取下一行（和NEXT一样）。

    - FORWARD count

        从当前关联位置开始，抓取随后或前面的count行。

    - FORWARD ALL

        从当前关联位置开始，抓取所有剩余行。

    - BACKWARD

        从当前关联位置开始，抓取前面一行\(和PRIOR一样\) 。

    - BACKWARD count

        从当前关联位置开始，抓取前面的count行（向后扫描）。

        取值范围：有符号的整数

        - count为正数就抓取当前关联位置之前的count行。
        - count为负数就抓取当前关联位置之后的abs（count）行。
        - 如果有数据的话，BACKWARD 0重新抓取当前行。

    - BACKWARD ALL

        从当前关联位置开始，抓取所有前面的行（向后扫描） 。

- **\{ FROM | IN \} cursor\_name**

    使用关键字FROM或IN指定游标名称。

    取值范围：已创建的游标的名称。

- **ALL**

    关闭所有已打开的游标。

## 示例<a name="section19525201318500"></a>

假设存在表customer\_t1 ，数据内容如下：

```
openGauss=# SELECT * FROM customer_t1;
 c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
---------------+---------------+--------------+-------------+--------
          3769 |               | Grace        |             |
          3769 | hello         |              |             |
          6885 | maps          | Joes         |             |   2200
          4321 | tpcds         | Lily         |             |   3000
          9527 | world         | James        |             |   5000
(5 rows)
```

- 用一个游标读取一个表。

    ```
    --开始一个事务。
    openGauss=# START TRANSACTION;
    START TRANSACTION
    
    --建立一个名为cursor1的游标。
    openGauss=# CURSOR cursor1 FOR SELECT * FROM customer_t1;
    DECLARE CURSOR
    
    --抓取前3行到游标cursor1里。
    openGauss=# FETCH FORWARD 3 FROM cursor1;
     c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
    ---------------+---------------+--------------+-------------+--------
              3769 |               | Grace        |             |
              3769 | hello         |              |             |
              6885 | maps          | Joes         |             |   2200
    (3 rows)
    
    --关闭游标并提交事务。
    openGauss=# CLOSE cursor1;
    CLOSE CURSOR
    
    --结束一个事务。
    openGauss=# END;
    COMMIT
    ```

- 用一个游标读取VALUES子句中的内容。

    ```
    --开始一个事务。
    openGauss=# START TRANSACTION;
    START TRANSACTION
    
    --建立一个名为cursor2的游标。
    openGauss=# CURSOR cursor2 FOR VALUES(1,2),(0,3) ORDER BY 1;
    DECLARE CURSOR
    
    --抓取前2行到游标cursor2里。
    openGauss=# FETCH FORWARD 2 FROM cursor2;
     column1 | column2
    ---------+---------
           0 |       3
           1 |       2
    (2 rows)
    
    --关闭游标并提交事务。
    openGauss=# CLOSE cursor2;
    CLOSE CURSOR
    
    --结束一个事务。
    openGauss=# END;
    COMMIT
    ```

- WITH HOLD游标的使用。

    ```
    --开启事务。
    openGauss=# START TRANSACTION;
    
    --创建一个with hold游标。
    openGauss=# DECLARE cursor1 CURSOR WITH HOLD FOR SELECT * FROM customer_t1;
    
    --抓取头2行到游标cursor1里。
    openGauss=# FETCH FORWARD 2 FROM cursor1;
     c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
    ---------------+---------------+--------------+-------------+--------
              3769 |               | Grace        |             |
              3769 | hello         |              |             |
    (2 rows)
    
    --结束事务。
    openGauss=# END;
    COMMIT
    
    --抓取下一行到游标cursor1里。
    openGauss=# FETCH FORWARD 1 FROM cursor1;
     c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
    ---------------+---------------+--------------+-------------+--------
              6885 | maps          | Joes         |             |   2200
    (1 row)
    
    --关闭游标。
    openGauss=# CLOSE cursor1;
    CLOSE CURSOR
    ```

- MOVE语句的使用。

    ```
    --开始一个事务。
    openGauss=# START TRANSACTION;
    START TRANSACTION
    
    --定义一个名为cursor1的游标。
    openGauss=# CURSOR cursor1 FOR SELECT * FROM customer_t1;
    DECLARE CURSOR
    
    --忽略游标cursor1的前3行。
    openGauss=# MOVE FORWARD 1 FROM cursor1;
    MOVE 1
    
    --抓取游标cursor1的前2行。
    openGauss=# FETCH 2 FROM cursor1;
     c_customer_sk | c_customer_id | c_first_name | c_last_name | amount
    ---------------+---------------+--------------+-------------+--------
              3769 | hello         |              |             |
              6885 | maps          | Joes         |             |   2200
    (2 rows)
    
    
    --关闭游标。
    openGauss=# CLOSE cursor1;
    CLOSE CURSOR
    
    --结束一个事务。
    openGauss=# END;
    COMMIT
    ```

## 使用游标创建type

### 功能描述

该功能用于在包package或者匿名块、存储过程、函数中使用record类型创建一个游标的type类型。

### 注意事项

- 创建的type为弱游标类型。
- 该type类型如果作为out参数返回是游标类型。

### 语法格式

```sql
TYPE type_name IS REF CURSOR RETURN record_name ;
```

### 参数说明

- **type_name**

    定义的类型的名称。
- **record_name**

    使用数据类型说明符 RECORD 定义的用户定义类型的名称。

### 兼容性

暂不支持如下语法：

```sql
TYPE type_name IS REF CURSOR
  [ RETURN
    { {db_table_or_view | cursor | cursor_variable}%ROWTYPE
    | record%TYPE
    | ref_cursor_type
    }
  ] ;
```

### 示例

**示例1：** 使用record类型创建一个游标的type类型。

1、创建测试表t。

```sql
create table t(id int, name varchar2(30));
```

2、声明游标类型。

```sql
declare
type RECORD_ACCOUNT_LIST is record(id int,name varchar2(30));
type CUR_ACCOUNT_LIST is ref cursor return RECORD_ACCOUNT_LIST;
cur_accountlist CUR_ACCOUNT_LIST;
begin
open cur_accountlist for select * from t;
end;
/
```

返回结果如下，则表示创建成功：

```sql
ANONYMOUS BLOCK EXECUTE
```

**示例2：** 弱游标类型。

1、创建测试表t1并插入数据。

```sql
create table t1(id int, name varchar2(30));
insert into t1 values(1,'a1');
```

2、定义一个弱类型游标。

```sql
create extension gms_output;
select gms_output.enable(2000);

declare
type RECORD_ACCOUNT_LIST1 IS RECORD (id int, name1 varchar2(30));
type CUR_ACCOUNT_LIST1 is ref cursor return RECORD_ACCOUNT_LIST1; 
cur_accountlist1 CUR_ACCOUNT_LIST1;
rc_list RECORD_ACCOUNT_LIST1; 
begin
open cur_accountlist1 for select * from t1; 
loop
fetch cur_accountlist1 into rc_list;
exit when cur_accountlist1%notfound;
gms_output.put_line(rc_list.id||' '||rc_list.name1);
end loop; 
end;
/
```

返回结果如下，则表示创建成功：

```sql
1 a1
ANONYMOUS BLOCK EXECUTE
```

## 支持游标作为插入值

### 功能描述

A模式的plsql中，游标可以作为插入值实现插入。

### 示例

```sql
set behavior_compat_options = 'allow_procedure_compile_check';
create table source(c1 int,c2 varchar2(100));
insert into source values(1,'aa');
insert into source values(2,'bb');
create table target(c1 int,c2 varchar2(100));
-- INSERT
declare
  cursor cur is
    select c1,c2 from source;
begin
  for data in cur loop
    INSERT INTO target values(data.c1,data.c2);
  end loop;
end;
/
select * from target order by c1;
 c1 | c2 
----+----
  1 | aa
  2 | bb
(2 rows)

-- UPDATE
declare
  cursor cur is
    select c1,c2 from source;
begin
  for data in cur loop
    UPDATE TARGET SET c1 = data.c1, c2 = data.c2;
  end loop;
end;
/
select * from target order by c1;
 c1 | c2
----+----
  2 | bb
  2 | bb
(2 rows)

-- DELETE
declare
  cursor cur is
    select c1,c2 from source;
begin
  for data in cur loop
    DELETE FROM TARGET WHERE c1 = data.c1 AND c2 = data.c2;
  end loop;
end;
/
select * from target order by c1;
 c1 | c2
----+----
(0 rows)

drop table source;
drop table target;
reset behavior_compat_options;
```
