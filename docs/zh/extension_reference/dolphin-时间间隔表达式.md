# 时间间隔表达式

-   interval_expr是一个时间间隔表达式，其语法表示为：
```
INTERVAL expr unit
```
说明：expr为一个表达式，unit为expr的单位。unit允许的取值和对应的expr常量取值格式可参考[表1](#intervalexpr_unit_expr_tbl)。expr支持运算表达式、列引用和绑定参数用法。

注：若expr值的组成部分个数少于unit对应的标准形式时，将expr值的各个划分部分从右到左依次填充到unit对应标准形式中。例如：对于时间单位unit为DAY_SECOND，若expr为‘1 10’，则最终表示的时间间隔值为‘0 00:01:10’。

通常时间间隔表达式用于一些特定的时间计算函数，例如DATE_ADD()和DATE_SUB()等。

**表 1**  时间间隔表达式中unit的取值和对应的expr的表达格式

<a name="intervalexpr_unit_expr_tbl"></a>
<table>
<thead align="left">
<tr>
<th class="cellrowborder" valign="top" width="50%"><p>unit取值</p>
</th>
<th class="cellrowborder" valign="top" width="50%"><p>expr取值格式</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>MICROSECOND</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>MICROSECONDS</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>SECOND</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>SECONDS</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>MINUTE</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>MINUTES</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>HOUR</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>HOURS</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>DAY</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>DAYS</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>WEEK</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>WEEKS</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>MONTH</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>MONTHS</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>QUARTER</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>QUARTERS</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>YEAR</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>YEARS</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>SECOND_MICROSECOND</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>'SECONDS.MICROSECONDS'</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>MINUTE_MICROSECOND</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>'MINUTES:SECONDS.MICROSECONDS'</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>MINUTE_SECOND</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>'MINUTES:SECONDS'</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>HOUR_MICROSECOND</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>'HOURS:MINUTES:SECONDS.MICROSECONDS'</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>HOUR_SECOND</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>'HOURS:MINUTES:SECONDS'</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>HOUR_MINUTE</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>'HOURS:MINUTES'</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>DAY_MICROSECOND</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>'DAYS HOURS:MINUTES:SECONDS.MICROSECONDS'</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>DAY_SECOND</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>'DAYS HOURS:MINUTES:SECONDS'</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>DAY_MINUTE</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>'DAYS HOURS:MINUTES'</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>DAY_HOUR</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>'DAYS HOURS'</p>
</td>
</tr>
<tr>
<td class="cellrowborder" valign="top" width="50%"><p>YEAR_MONTH</p>
</td>
<td class="cellrowborder" valign="top" width="50%"><p>'YEARS-MONTHS'</p>
</td>
</tr>
</tbody>
</table>

## 示例：
```
openGauss=# create database test_db dbcompatibility 'B';
CREATE DATABASE
openGauss=# \c test_db 
test_db=# set dolphin.b_compatibility_mode to on;
SET
test_db=# select date_add('1997-12-31 23:59:59',INTERVAL 1 MICROSECOND);
          date_add          
----------------------------
 1997-12-31 23:59:59.000001
(1 row)

test_db=# select date_add('1997-12-31 23:59:59',INTERVAL '1.111' SECOND_MICROSECOND);
        date_add         
-------------------------
 1998-01-01 00:00:00.111
(1 row)

test_db=# select '1997-12-11' + interval '1 10' day_second;
      ?column?       
---------------------
 1997-12-11 00:01:10
(1 row)

-- 运算表达式
test_db=# select '1997-12-11' + interval 1 + 2 * 3 day;
  ?column?  
------------
 1997-12-18
(1 row)

-- 列引用
test_db=# create table t1 (c1 int);
CREATE TABLE
test_db=# insert into t1 values(1);
INSERT 0 1
test_db=# select '1997-12-11' + interval c1 + 2 year from t1;
  ?column?  
------------
 2000-12-11
(1 row)

-- 绑定参数
test_db=# prepare stmt as 'select ? + interval ? hour';
PREPARE
test_db=# execute stmt('1997-12-11', 20);
      ?column?       
---------------------
 1997-12-11 20:00:00
(1 row)

```
