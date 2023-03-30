# FETCH<a name="ZH-CN_TOPIC_0289900300"></a>

## 功能描述<a name="zh-cn_topic_0283137321_zh-cn_topic_0237122165_zh-cn_topic_0059778422_s1a1f69e123144a83800629a2d8ab2dba"></a>

FETCH通过已创建的游标来检索数据。

每个游标都有一个供FETCH使用的关联位置。游标的关联位置可以在查询结果的第一行之前，或者在结果中的任意行，或者在结果的最后一行之后：

-   游标刚创建完之后，关联位置在第一行之前的。
-   在抓取了一些移动行之后，关联位置在检索到的最后一行上。
-   如果FETCH抓取完了所有可用行，它就停在最后一行后面，或者在反向抓取的情况下是停在第一行前面。
-   FETCH ALL或FETCH BACKWARD ALL将总是把游标的关联位置放在最后一行或者在第一行前面。

## 注意事项<a name="zh-cn_topic_0283137321_zh-cn_topic_0237122165_zh-cn_topic_0059778422_s000e3e857e5349aa8560855805267e6f"></a>

-   如果游标定义了NO SCROLL，则不允许使用例如FETCH BACKWARD之类的反向抓取。
-   NEXT、PRIOR、FIRST、LAST、ABSOLUTE、RELATIVE形式在恰当地移动游标之后抓取一条记录。如果后面没有数据行，就返回一个空的结果，此时游标就会停在查询结果的最后一行之后（向后查询时）或者第一行之前（向前查询时）。
-   FORWARD和BACKWARD形式在向前或者向后移动的过程中抓取指定的行数，然后把游标定位在最后返回的行上；或者是，如果count大于可用的行数，则在所有行之后（向后查询时）或者之前（向前查询时）。
-   RELATIVE 0、FORWARD 0、BACKWARD 0都要求在不移动游标的前提下抓取当前行，也就是重新抓取最近刚抓取过的行。除非游标定位在第一行之前或者最后一行之后，这个动作都应该成功，而在那两种情况下，不返回任何行。
-   当FETCH的游标上涉及列存表时，不支持BACKWARD、PRIOR等涉及反向获取操作。

## 语法格式<a name="zh-cn_topic_0283137321_zh-cn_topic_0237122165_zh-cn_topic_0059778422_sccece13e07c346e8b7e89d726533f687"></a>

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

## 参数说明<a name="zh-cn_topic_0283137321_zh-cn_topic_0237122165_zh-cn_topic_0059778422_sceb763c430654064b8f61e9aa0792af9"></a>

-   **direction\_clause**

    定义抓取数据的方向。

    取值范围：

    -   NEXT（缺省值）

        从当前关联位置开始，抓取下一行。

    -   PRIOR

        从当前关联位置开始，抓取上一行。

    -   FIRST

        抓取查询的第一行（和ABSOLUTE 1相同）。

    -   LAST

        抓取查询的最后一行（和ABSOLUTE -1相同）。

    -   ABSOLUTE count

        抓取查询中第count行。

        ABSOLUTE抓取不会比用相对位移移动到需要的数据行更快，因为下层的实现必须遍历所有中间的行。

        count取值范围：有符号的整数

        -   count为正数，就从查询结果的第一行开始，抓取第count行。
        -   count为负数，就从查询结果末尾抓取第abs\(_count_\)行。
        -   count为0时，定位在第一行之前。

    -   RELATIVE count

        从当前关联位置开始，抓取随后或前面的第count行。

        取值范围：有符号的整数

        -   count为正数就抓取当前关联位置之后的第count行。
        -   count为负数就抓取当前关联位置之前的第abs\(count\)行。
        -   如果当前行没有数据的话，RELATIVE 0返回空。

    -   count

        抓取随后的count行（和FORWARD count一样）。

    -   ALL

        从当前关联位置开始，抓取所有剩余的行（和FORWARD ALL一样）。

    -   FORWARD

        抓取下一行（和NEXT一样）。

    -   FORWARD count

        从当前关联位置开始，抓取随后或前面的count行。

    -   FORWARD ALL

        从当前关联位置开始，抓取所有剩余行。

    -   BACKWARD

        从当前关联位置开始，抓取前面一行\(和PRIOR一样\) 。

    -   BACKWARD count

        从当前关联位置开始，抓取前面的count行（向后扫描）。

        取值范围：有符号的整数

        -   count为正数就抓取当前关联位置之前的count行。
        -   count为负数就抓取当前关联位置之后的abs（count）行。
        -   如果有数据的话，BACKWARD 0重新抓取当前行。

    -   BACKWARD ALL

        从当前关联位置开始，抓取所有前面的行（向后扫描） 。


-   **\{ FROM | IN \} cursor\_name**

    使用关键字FROM或IN指定游标名称。

    取值范围：已创建的游标的名称。


## 示例<a name="zh-cn_topic_0283137321_zh-cn_topic_0237122165_zh-cn_topic_0059778422_s1ee72832a27547e4949061a010e24578"></a>

```
--SELECT语句，用一个游标读取一个表。开始一个事务。
openGauss=# START TRANSACTION;

--建立一个名为cursor1的游标。
openGauss=# CURSOR cursor1 FOR SELECT * FROM tpcds.customer_address ORDER BY 1;

--抓取头3行到游标cursor1里。
openGauss=# FETCH FORWARD 3 FROM cursor1;
 ca_address_sk |  ca_address_id   | ca_street_number |   ca_street_name   | ca_street_type  | ca_suite_number |     ca_city     |    ca_county    | ca_state |   ca_zip   |  ca_country   | ca_gmt_offset |   ca_location_type   
---------------+------------------+------------------+--------------------+-----------------+-----------------+-----------------+-----------------+----------+------------+---------------+---------------+----------------------
             1 | AAAAAAAABAAAAAAA | 18               | Jackson            | Parkway         | Suite 280       | Fairfield       | Maricopa County | AZ       | 86192      | United States |         -7.00 | condo               
             2 | AAAAAAAACAAAAAAA | 362              | Washington 6th     | RD              | Suite 80        | Fairview        | Taos County     | NM       | 85709      | United States |         -7.00 | condo               
             3 | AAAAAAAADAAAAAAA | 585              | Dogwood Washington | Circle          | Suite Q         | Pleasant Valley | York County     | PA       | 12477      | United States |         -5.00 | single family       
(3 rows)

--关闭游标并提交事务。
openGauss=# CLOSE cursor1;

--结束一个事务。
openGauss=# END;

--VALUES子句，用一个游标读取VALUES子句中的内容。开始一个事务。
openGauss=# START TRANSACTION;

--建立一个名为cursor2的游标。
openGauss=# CURSOR cursor2 FOR VALUES(1,2),(0,3) ORDER BY 1;

--抓取头2行到游标cursor2里。
openGauss=# FETCH FORWARD 2 FROM cursor2;
column1 | column2
---------+---------
0 |       3
1 |       2
(2 rows)

--关闭游标并提交事务。
openGauss=# CLOSE cursor2;

--结束一个事务。
openGauss=# END;

--WITH HOLD游标的使用，开启事务。
openGauss=# START TRANSACTION;

--创建一个with hold游标。
openGauss=# DECLARE cursor1 CURSOR WITH HOLD FOR SELECT * FROM tpcds.customer_address ORDER BY 1;

--抓取头2行到游标cursor1里。
openGauss=# FETCH FORWARD 2 FROM cursor1;
 ca_address_sk |  ca_address_id   | ca_street_number |   ca_street_name   | ca_street_type  | ca_suite_number |     ca_city     |    ca_county    | ca_state |   ca_zip   |  ca_country   | ca_gmt_offset |   ca_location_type   
---------------+------------------+------------------+--------------------+-----------------+-----------------+-----------------+-----------------+----------+------------+---------------+---------------+----------------------
             1 | AAAAAAAABAAAAAAA | 18               | Jackson            | Parkway         | Suite 280       | Fairfield       | Maricopa County | AZ       | 86192      | United States |         -7.00 | condo               
             2 | AAAAAAAACAAAAAAA | 362              | Washington 6th     | RD              | Suite 80        | Fairview        | Taos County     | NM       | 85709      | United States |         -7.00 | condo               
(2 rows)

--结束事务。
openGauss=# END;

--抓取下一行到游标cursor1里。
openGauss=# FETCH FORWARD 1 FROM cursor1;
 ca_address_sk |  ca_address_id   | ca_street_number |   ca_street_name   | ca_street_type  | ca_suite_number |     ca_city     |    ca_county    | ca_state |   ca_zip   |  ca_country   | ca_gmt_offset |   ca_location_type   
---------------+------------------+------------------+--------------------+-----------------+-----------------+-----------------+-----------------+----------+------------+---------------+---------------+----------------------
             3 | AAAAAAAADAAAAAAA | 585              | Dogwood Washington | Circle          | Suite Q         | Pleasant Valley | York County     | PA       | 12477      | United States |         -5.00 | single family       
(1 row)

--关闭游标。
openGauss=# CLOSE cursor1;

```

## 相关链接<a name="zh-cn_topic_0283137321_zh-cn_topic_0237122165_zh-cn_topic_0059778422_scff73b2bdc594902afb6925b8a3b97ac"></a>

[CLOSE](CLOSE.md)，[MOVE](MOVE.md)

