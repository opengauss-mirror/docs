# 使用游标创建type

## 功能描述

该功能用于在包package或者匿名块、存储过程、函数中使用record类型创建一个游标的type类型。

## 注意事项

- 创建的type为弱游标类型。
- 该type类型如果作为out参数返回是游标类型。


## 语法格式

```sql
TYPE type_name IS REF CURSOR RETURN record_name ;
```

## 参数说明

- **type_name**

    定义的类型的名称。
- **record_name**

    使用数据类型说明符 RECORD 定义的用户定义类型的名称。



## 兼容性

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

## 示例

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
dbms_output.put_line(rc_list.id||' '||rc_list.name1); 
end loop; 
end;
/
```

返回结果如下，则表示创建成功：

```sql
ANONYMOUS BLOCK EXECUTE
```