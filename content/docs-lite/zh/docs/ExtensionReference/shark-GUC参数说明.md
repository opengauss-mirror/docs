# GUC参数说明

## d\_format\_behavior\_compat\_options<a name="section203671436822"></a>

**取值范围**：字符串

**默认值**：''

**参数说明**：参数值为逗号间隔的字符串，仅允许合法字符串设定，不合法情况下，启动后报error。同样，设置时候，如果新值非法，则报error并且不修改老值。目前可选参数有：

-   enable_sbr_identifier：是否允许使用 [] 包裹标识符。开启以后内核原有的数组相关语法会被禁用。
```
openGauss=# set d_format_behavior_compat_options = 'enable_sbr_identifier';
SET
openGauss=# create table[array](a1 int);
CREATE TABLE
openGauss=# select ARRAY[1,2,3];
ERROR:  syntax error at or near "[1,2,3]"
```

## ANSI_NULLS<a name="section203671436823"></a>

**取值范围**：on/off

**默认值**：on

**参数说明**：用于控制NULL值与非NULL值比较时的表现。如果设置为on，那么NULL值与NULL或者非NULL值做等于或者不等于比较结果都是NULL。如果设置成off，NULL值与NULL值做等于比较结果为true，NULL值与非NULL值做等于比较时结果为false。

```
openGauss=# set ANSI_NULLS on;
SET
openGauss=# select NULL = NULL;
 ?column?
----------

(1 row)

openGauss=# select 1 = NULL;
 ?column?
----------

(1 row)

openGauss=# select NULL <> NULL;
 ?column?
----------

(1 row)

openGauss=# select 1 <> NULL;
 ?column?
----------

(1 row)

openGauss=# set ANSI_NULLS off;
SET
openGauss=# select NULL = NULL;
 ?column?
----------
 t
(1 row)

openGauss=# select 1 = NULL;
 ?column?
----------
 f
(1 row)

openGauss=# select NULL <> NULL;
 ?column?
----------
 f
(1 row)

openGauss=# select 1 <> NULL;
 ?column?
----------
 t
(1 row)
```

