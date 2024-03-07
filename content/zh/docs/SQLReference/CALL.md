# CALL

## 功能描述<a name="zh-cn_topic_0283137636_zh-cn_topic_0237122088_zh-cn_topic_0059778236_s17e49a7670334c61978f059adf2cb65d"></a>

使用CALL命令可以调用已定义的函数和存储过程。

## 注意事项<a name="zh-cn_topic_0283137636_zh-cn_topic_0237122088_zh-cn_topic_0059778236_sdf7f29bdebc44178a9581f41f4257f09"></a>

函数或存储过程的所有者、被授予了函数或存储过程EXECUTE权限的用户或被授予EXECUTE ANY FUNCTION权限的用户有权调用函数或存储过程，系统管理员默认拥有此权限。

## 语法格式<a name="zh-cn_topic_0283137636_zh-cn_topic_0237122088_zh-cn_topic_0059778236_sdf8eb47ae3d945fea7582a7753cdd985"></a>

```
CALL [schema.|package.] {func_name| procedure_name} ( param_expr );
```

## 参数说明<a name="zh-cn_topic_0283137636_zh-cn_topic_0237122088_zh-cn_topic_0059778236_sf183d9684eb54414b8f5c370a1c7038b"></a>

-   **schema**

    函数或存储过程所在的模式名称。

-   **package**

    函数或存储过程所在的package名称。

-   **func\_name**

    所调用函数或存储过程的名称。

    取值范围：已存在的函数名称。

-   **param\_expr**

    参数列表可以用符号“:=”或者“=\>”将参数名和参数值隔开，这种方法的好处是参数可以以任意顺序排列。若参数列表中仅出现参数值，则参数值的排列顺序必须和函数或存储过程定义时的相同。

    取值范围：已存在的函数参数名称或存储过程参数名称。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >参数可以包含入参（参数名和类型之间指定“IN”关键字）和出参（参数名和类型之间指定“OUT”关键字），使用CALL命令调用函数或存储过程时，对于非重载的函数，参数列表必须包含出参，出参可以传入一个变量或者任一常量。对于重载的package函数，参数列表里可以忽略出参（此处如果想创建只有出参不同入参相同的重载函数，需要set behavior_compat_options ="proc_outparam_override"
    ），忽略出参时可能会导致函数找不到，因为其本质是调用了另一个同名的不含出参的重载函数。包含出参时，出参只能是常量。以上两种情况详见[示例](#zh-cn_topic_0283137636_zh-cn_topic_0237122088_zh-cn_topic_0059778236_s299dc001fa4b48cd9b56412a73db23c0)


## 示例<a name="zh-cn_topic_0283137636_zh-cn_topic_0237122088_zh-cn_topic_0059778236_s299dc001fa4b48cd9b56412a73db23c0"></a>

```
--创建一个函数func_add_sql，计算两个整数的和，并返回结果。
openGauss=# CREATE FUNCTION func_add_sql(num1 integer, num2 integer) RETURN integer
AS
BEGIN
RETURN num1 + num2;
END;
/

--按参数值传递。
openGauss=# CALL func_add_sql(1, 3);

--使用命名标记法传参。
openGauss=# CALL func_add_sql(num1 => 1,num2 => 3);
openGauss=# CALL func_add_sql(num2 := 2, num1 := 3);

--删除函数。
openGauss=# DROP FUNCTION func_add_sql;

--创建带出参的函数。
openGauss=# CREATE FUNCTION func_increment_sql(num1 IN integer, num2 IN integer, res OUT integer)
RETURN integer
AS
BEGIN
res := num1 + num2;
END;
/

--出参传入常量。
openGauss=# CALL func_increment_sql(1,2,1);

--删除函数。
openGauss=# DROP FUNCTION func_increment_sql;

--创建package属性的重载函数并通过call调用
openGauss=# set behavior_compat_options ="proc_outparam_override";
openGauss=# CREATE OR REPLACE PACKAGE test_overload IS
function testp(a int) return int;
function testp(a int, b out int) return int;
end test_overload;
/

openGauss=# create or replace package body test_overload --创建package body
is                               
function testp(a int) return int
is                
Begin
raise notice 'func without out_arg';
return a;
end;
function testp(a int, b out int)
return int
is
begin
b:=1;
Raise notice 'func with out_arg';
return 2;
end;
end test_overload;
/

openGauss=# call test_overload.testp(1);--调用忽略出参
openGauss=# call test_overload.testp(1,2);--调用包含出参
```

