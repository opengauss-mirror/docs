# 子程序

嵌套在程序(匿名块/存储过程/函数)中的存储过程或函数，可以显著降低业务代码复杂度。

## 语法格式<a name="zh-cn_topic_0283136646_zh-cn_topic_0237122110_zh-cn_topic_0059778640_sbee45c05d759429e9b8cb27ddd67bd30"></a>

-   创建子程序

    ```
    CREATE [OR REPLACE] PROCEDURE procedure_name
        [...]
        { IS | AS } [subprogram]
        BEGIN
          procedure_body
        END
    /
    ```

    ```
    CREATE FUNCTION function_name
        [...]
        { IS | AS } [subprogram]
        [...]
    /
    ```

## 参数说明<a name="zh-cn_topic_0283136646_zh-cn_topic_0237122110_zh-cn_topic_0059778640_scd93d84d9e624b5e831d78d47a830ca4"></a>

-   **subprogram**

    创建的子程序。


## 功能说明<a name="zh-cn_topic_0283136646_zh-cn_topic_0237122110_zh-cn_topic_0059778640_scd93d84d9e624b5e831d78d47a830ca4"></a>
-   子程序只能被父程序调用，其他程序无法调用
-   当前不支持包中的子程序
-   当前子程序仅支持三层嵌套
-   当前子程序中不支持自治事务


## 示例<a name="zh-cn_topic_0283136560_zh-cn_topic_0237122104_zh-cn_topic_0059778837_scc61c5d3cc3e48c1a1ef323652dda821"></a>

```
--创建函数子程序
openGauss=# CREATE or replace FUNCTION func() returns int AS $$
openGauss$# DECLARE
openGauss$# q int :=0;
openGauss$# function sum1(a int, b int) return int
openGauss$# as
openGauss$# declare
openGauss$#     res int:=0;
openGauss$# begin
openGauss$#     res = a + b;
openGauss$# return res;
openGauss$# end;
openGauss$# BEGIN
openGauss$# q = sum1(3,4);
openGauss$# return q;
openGauss$# END;
openGauss$# $$ LANGUAGE plpgsql;
CREATE FUNCTION

--调用子程序
openGauss=# call func();
 func
------
    7
(1 row)

--存储过程子程序
openGauss=# CREATE or replace PROCEDURE proc(a int, b int) AS
openGauss$# DECLARE
openGauss$# ans int:=0;
openGauss$# function sum1(c int) return int
openGauss$# as
openGauss$# declare
openGauss$#     var int:=5;
openGauss$# function sum2() return int
openGauss$# as
openGauss$# declare
openGauss$#

openGauss$# res int:=0;
openGauss$# begin
openGauss$#
TRANSACTION  WORK
openGauss$# res = res + c;
openGauss$#         return res;
openGauss$# end;
openGauss$# begin
openGauss$#     return sum2() + var + b;
openGauss$# end;
openGauss$# BEGIN
openGauss$# ans = sum1(a);
openGauss$# raise notice 'ans=%',ans;
openGauss$# END;
openGauss$# /
CREATE PROCEDURE

--调用子程序
openGauss=# select proc(1,2);
NOTICE:  ans=8
CONTEXT:  referenced column: proc
 proc
------

(1 row)

--创建匿名块子程序
openGauss=# DECLARE
  FUNCTION square (original NUMBER)
    RETURN NUMBER
  AS
    original_squared NUMBER;
  BEGIN
    original_squared := original * original;
    RETURN original_squared;
  END;
BEGIN
  raise notice '%',square(1);
END;
openGauss$# /
NOTICE:  1
ANONYMOUS BLOCK EXECUTE
```

