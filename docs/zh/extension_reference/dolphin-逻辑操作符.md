# 逻辑操作符

相比于原始的openGauss，dolphin新增了如下特性：

1. 新增```&&```操作符。
2. 新增```||```操作符。
3. 逻辑运算符 ```AND``` 和 ```OR``` 的两侧使用日期时间类型datetime和timestamp。操作符对日期时间类型进行逻辑运算后返回布尔类型。

- &&

  描述：当```dolphin.b_compatibility_mode```为```TRUE```时代表逻辑与运算，支持的类型包含boolean型、时间型、日期型、整型、浮点型、位串型、字符型。真值表如下：

  <table>
      <tr>
          <td>a</td>
          <td>b</td>
          <td>a && b的结果</td>
      </tr>
      <tr>
          <td>TRUE</td>
          <td>TRUE</td>
          <td>TRUE</td>
      </tr>
      <tr>
          <td>TRUE</td>
          <td>FALSE</td>
          <td>FALSE</td>
      </tr>
      <tr>
          <td>TRUE</td>
          <td>NULL</td>
          <td>NULL</td>
      </tr>
      <tr>
          <td>FLASE</td>
          <td>FALSE</td>
          <td>FALSE</td>
      </tr>
      <tr>
          <td>FALSE</td>
          <td>NULL</td>
          <td>FALSE</td>
      </tr>
      <tr>
          <td>NULL</td>
          <td>NULL</td>
          <td>NULL</td>
      </tr>
  </table>

  对于不同输入类型的处理如下表：

  <table>
  <tr>
      <td>数据类型</td>
      <td>处理方式</td>
  </tr>
  <tr>
      <td>布尔型</td>
      <td>按照真值表进行逻辑与运算。</td>
  </tr>
  <tr>
      <td>整型</td>
      <td>仅将零转换为布尔假，其余值均转换为布尔真，再进行逻辑与运算。</td>
  </tr>
  <tr>
      <td>浮点型</td>
      <td>仅将零转换为布尔假，其余值均转换为布尔真，再进行逻辑与运算。</td>
  </tr>
  <tr>
      <td>位串型</td>
      <td>仅将全零转换为布尔假，其余值均转换为布尔真，再进行逻辑与运算。</td>
  </tr>
  <tr>
      <td>时间型</td>
      <td>时间类型的转换方式仅依赖于‘小时’部分，当为输入‘00：xx：xx’时，时间类型均转换成为布尔假；当输入为‘yy：xx：xx’，且yy不为零时，时间类型均转换为布尔真。再进行逻辑与运算。</td>
  </tr>
  <tr>
      <td>日期型</td>
      <td>日期类型的转换方式仅依赖于‘年’部分，当为输入‘0000-xx-xx’时，日期类型均转换成为布尔假；当输入为‘yyyy-xx-xx’，且yy不为零时，日期类型均转换为布尔真。再进行逻辑与运算。</td>
  </tr>
  <tr>
      <td>字符型</td>
      <td>字符型的转换根据字符型的首部是否为数值，若不为数值，则直接转换成为布尔假；若为数值，则等于0的数值转换为布尔假否则转换为布尔真，然后再进行逻辑与运算。当字符型的数据类型为CHAR、VARCHAR和UNKNOWN类型时，对于包含不为数值部分的操作数给出告警信息，严格模式下报错。</td>
  </tr>
  </table>


  返回值类型：boolean

  示例：

  ```
  openGauss=# SELECT 1 && 1;
  ?column?
  ----------
         t
  （1 row）
  ```

- ||

  描述：当```sql_mode```参数不为```'pipes_as_concat'```时代表逻辑或运算，支持的类型包含boolean型、时间型、日期型、整型、浮点型、位串型、字符型。真值表如下：

  <table>
      <tr>
          <td>a</td>
          <td>b</td>
          <td>a || b的结果</td>
      </tr>
      <tr>
          <td>TRUE</td>
          <td>TRUE</td>
          <td>TRUE</td>
      </tr>
      <tr>
          <td>TRUE</td>
          <td>FALSE</td>
          <td>TRUE</td>
      </tr>
      <tr>
          <td>TRUE</td>
          <td>NULL</td>
          <td>TRUE</td>
      </tr>
      <tr>
          <td>FLASE</td>
          <td>FALSE</td>
          <td>FALSE</td>
      </tr>
      <tr>
          <td>FALSE</td>
          <td>NULL</td>
          <td>NULL</td>
      </tr>
      <tr>
          <td>NULL</td>
          <td>NULL</td>
          <td>NULL</td>
      </tr>
  </table>

  对于不同输入类型的处理如下表：

  <table>
  <tr>
      <td>数据类型</td>
      <td>处理方式</td>
  </tr>
  <tr>
      <td>布尔型</td>
      <td>按照真值表进行逻辑或运算。</td>
  </tr>
  <tr>
      <td>整型</td>
      <td>仅将零转换为布尔假，其余值均转换为布尔真，再进行逻辑或运算。</td>
  </tr>
  <tr>
      <td>浮点型</td>
      <td>仅将零转换为布尔假，其余值均转换为布尔真，再进行逻辑或运算。</td>
  </tr>
  <tr>
      <td>位串型</td>
      <td>仅将全零转换为布尔假，其余值均转换为布尔真，再进行逻辑或运算。</td>
  </tr>
  <tr>
      <td>时间型</td>
      <td>时间类型的转换方式仅依赖于‘小时’部分，当为输入‘00：xx：xx’时，时间类型均转换成为布尔假；当输入为‘yy：xx：xx’，且yy不为零时，时间类型均转换为布尔真。再进行逻辑或运算。</td>
  </tr>
  <tr>
      <td>日期型</td>
      <td>日期类型的转换方式仅依赖于‘年’部分，当为输入‘0000-xx-xx’时，日期类型均转换成为布尔假；当输入为‘yyyy-xx-xx’，且yy不为零时，日期类型均转换为布尔真。再进行逻辑或运算。</td>
  </tr>
  <tr>
      <td>字符型</td>
      <td>字符型的转换根据字符型的首部是否为数值，若不为数值，则直接转换成为布尔假；若为数值，则等于0的数值转换为布尔假否则转换为布尔真，然后再进行逻辑或运算。当字符型的数据类型为CHAR、VARCHAR和UNKNOWN类型时，对于包含不为数值部分的操作数给出告警信息，严格模式下报错。</td>
  </tr>
  </table>

  
  
  返回值类型：boolean
  
  示例：
  
  ```
  openGauss=# SELECT 0 || 0;
  ?column?
  ----------
         f
  （1 row）
  ```
  
**AND和OR支持日期时间类型**

日期时间类型比较规则：


-   逻辑操作符 AND 两侧的操作数为合法的时间日期类型的前提下，“逻辑与”的运算规则如下：
    -   当 AND 左右两侧的操作数均为非0的日期时间类型，且不为 NULL 时，返回 t 。
    -   当一个或多个操作数指定的日期时间类型为 0 时，返回 f 。
    -   操作数中有任何一个为 NULL 时，返回 NULL 。

-   逻辑操作符 OR 两侧的操作数为合法的时间日期类型的前提下，“逻辑或”的运算规则如下：
    -   左右两侧任意一个操作数为非0值时，不管另一个操作数为 0 还是 NULL ，都返回 t 。
    -   两个操作数均为 0 时，返回 f 。
    -   两个操作数分别为 0 和 NULL 时，返回 NULL。
    -   两个操作数均为NULL时，返回 NULL 。

注意事项：

MySQL兼容模式下的IF函数将timestamp类型0000-00-00 00:00:00判断为FALSE。

示例1：SELECT查看AND对日期时间类型的比较结果。

```sql
select '2022-1-12 12:23:23' and '19980112122324';
select '2022-1-12 12:23:23'::datetime and  '20220112122324';
select '2022-1-12 12:23:23' and  '20220112122324':: timestamp;
select '20201229' and '0000-00-00 00:00:00';
select '00000000' and '0000-00-00 00:00:00';
select null and '2022-1-12 12:23:23'::datetime;
```

结果返回一次为：

```sql
 ?column?
----------
 t
(1 row)

 ?column?
----------
 t
(1 row)

 ?column?
----------
 t
(1 row)

 ?column?
----------
 f
(1 row)

 ?column?
----------
 f
(1 row)

 ?column?
----------

(1 row)
```

示例2：SELECT查看OR对日期时间类型的比较结果。

```sql
select datetime '2022-1-12 12:23:23' or  timestamp '20220112122324';
select NULL or timestamp '20220112122324';
select date '0000-00-00 00:00:00' or  date '20201229';
select '0000-00-00 00:00:00' or '00000000000000':: datetime;
select '0000-00-00 00:00:00' or NULL;
```

结果返回依次为：

```sql
 ?column?
----------
 t
(1 row)

 ?column?
----------
 t
(1 row)

 ?column?
----------
 t
(1 row)

 ?column?
----------
 f
(1 row)

 ?column?
----------

(1 row)
```