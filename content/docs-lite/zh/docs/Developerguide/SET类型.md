# SET类型<a name="ZH-CN_TOPIC_0000001370344985"></a>

SET类型是一种包含字符串成员的集合类型，在表字段创建时定义。

## 规格描述<a name="section980105122611"></a>

1.  SET类型成员个数最大为64个，最小为1个。不能定义为空集。
2.  成员名称长度最大为255个字符，允许使用空字符串作为成员名称。成员名称必须是字符常量，且不能是是计算后得到的字符常量，如 SET\('a' || 'b', 'c'\)。
3.  成员名称不能包含逗号，成员名称不能重复。
4.  不支持创建SET类型的数组和域类型。
5.  只有在sql\_compatibility参数值为B兼容模式下支持SET类型。
6.  不支持SET类型作为列存表字段的数据类型。
7.  不支持SET类型作为分区表的分区键。
8.  DROP TYPE 删除SET类型时，需要使用CASCADE方式删除，且关联的表字段也会被同时删除。
9.  对于USTORE存储方式的表，如果表中包含SET类型的字段，且已经开启回收站功能，表被删除时，不会进入到回收站中，会直接删除。
10. ALTER TABLE 不支持将SET类型字段的数据类型修改为其他SET类型。
11. 表或者SET类型关联的表字段被删除时，或者表字段的SET类型修改为其他类型时，SET数据类型也会被同步删除。
12. 不支持以CREATE TABLE \{ AS | LIKE \} 的方式创建包含SET类型的表。
13. SET类型是随表字段创建的，其名称是组合而成的。如果schema中已经存在同名的数据类型，创建SET类型会失败。
14. SET类型支持与int2、int4、int8、text类型的=、<、\>、<、<=、\>、\>=比较。
15. SET类型支持与int2、int4、int8、float4、float8、numeric、char、varchar、text、nvarchar2数据类型的转换。

## 注意事项<a name="section2940149112912"></a>

-   SET类型的表字段值必须是SET类型定义的集合的子集。如：

    ```
    CREATE TABLE employee (
      name text,
      site SET('beijing','shanghai','nanjing','wuhan')
    );
    ```

-   site字段的值必须是上述集合定义中的子集，可以是空集合，如果提供的值在SET定义中的成员中不存在，会报错。如：

    ```
    openGauss=# INSERT INTO employee values('zhangsan', 'nanjing,beijing');
    INSERT 0 1
    openGauss=# insert into employee values ('zhangsan', 'hangzhou');
    ERROR:  invalid input value for set employee_site_set: 'hangzhou'
    LINE 1: insert into employee values ('zhangsan', 'hangzhou');
                                                     ^
    CONTEXT:  referenced column: site
    openGauss=#
    ```

-   INSERT时无论用户提供的成员值顺序是怎样的，INSERT成功后，查询到的SET类型的值，其成员的都是按照定义时的顺序输出的。

    ```
    openGauss=# select * from employee;
       name   |      site       
    ----------+-----------------
     zhangsan | beijing,nanjing
    (1 rows)
    ```

-   SET类型是以bitmap的方式存储的。SET类型的成员按照定义时的顺序，赋予不同的值。如：SET\('beijing','shanghai','nanjing','wuhan'\) 的类型，对应的值如下：

    **表 1**  SET成员与其对应的数值

    <a name="table1169904134210"></a>
    <table><thead align="left"><tr id="row3699646421"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p126995415429"><a name="p126995415429"></a><a name="p126995415429"></a>SET成员</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p3700194114215"><a name="p3700194114215"></a><a name="p3700194114215"></a>成员值</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p1970010419422"><a name="p1970010419422"></a><a name="p1970010419422"></a>二进制值</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row18700134134218"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p12700124194211"><a name="p12700124194211"></a><a name="p12700124194211"></a>'beijing'</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p117002419428"><a name="p117002419428"></a><a name="p117002419428"></a>1</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p177001349426"><a name="p177001349426"></a><a name="p177001349426"></a>0001</p>
    </td>
    </tr>
    <tr id="row67009410426"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p57006416427"><a name="p57006416427"></a><a name="p57006416427"></a>'shanghai'</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1370010494214"><a name="p1370010494214"></a><a name="p1370010494214"></a>2</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p117008424214"><a name="p117008424214"></a><a name="p117008424214"></a>0010</p>
    </td>
    </tr>
    <tr id="row670014134218"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p170084104219"><a name="p170084104219"></a><a name="p170084104219"></a>'nanjing'</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p0700184164219"><a name="p0700184164219"></a><a name="p0700184164219"></a>4</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p117007418424"><a name="p117007418424"></a><a name="p117007418424"></a>0100</p>
    </td>
    </tr>
    <tr id="row17700144184212"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p970004124217"><a name="p970004124217"></a><a name="p970004124217"></a>'wuhan'</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p157001145424"><a name="p157001145424"></a><a name="p157001145424"></a>8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p870012414422"><a name="p870012414422"></a><a name="p870012414422"></a>1000</p>
    </td>
    </tr>
    </tbody>
    </table>

    因此，如果给SET类型的字段赋值为数值时，会转换为对应的子集。如：9对应的二进制值为 1001, 对应的是子集是 'beijing,wuhan'。

    ```
    openGauss=# INSERT INTO employee values('lisi', 9);
    INSERT 0 1
    openGauss=# select * from employee;
       name   |      site       
    ----------+-----------------
     zhangsan | beijing,nanjing
     lisi     | beijing,wuhan
    (2 rows)
    ```


