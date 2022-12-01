# 逻辑操作符<a name="ZH-CN_TOPIC_0289900469"></a>

相比于原始的openGauss，dolphin新增了两个逻辑操作符：

1. 新增```&&```操作符。
2. 新增```||```操作符。

- &&

  描述：当```b_compatibility_mode```为```TRUE```时代表逻辑与运算，支持的类型包含boolean型、时间型、日期型、整型、浮点型、位串型。真值表如下：

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

  描述：当```sql_mode```参数不为```'pipes_as_concat'```时代表逻辑或运算，支持的类型包含boolean型、时间型、日期型、整型、浮点型、位串型。真值表如下：

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
