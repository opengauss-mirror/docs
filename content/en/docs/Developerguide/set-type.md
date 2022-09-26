# SET Type<a name="EN-US_TOPIC_0000001370104697"></a>

The SET type is a collection type that contains string members and is defined when a table column is created.

## Specifications<a name="section980105122611"></a>

1.  The number of members of the SET type ranges from 1 to 64. It cannot be defined as an empty set.
2.  A member name can contain a maximum of 255 characters. An empty string can be used as a member name. The member name must be a character constant but cannot be a character constant obtained after calculation, for example, SET\('a' || 'b', 'c'\).
3.  The member name cannot contain commas (,) and must be unique.
4.  Arrays and domain types of the SET type cannot be created.
5.  The SET type is supported only when **sql\_compatibility** is set to **B**.
6.  The SET type cannot be used as the data type of columns in column-store tables.
7.  The SET type cannot be used as the partition key of a partitioned table.
8.  You need to use CASCADE to drop the SET type, and the associated table columns are also dropped.
9.  For a USTORE table, if the table contains columns of the SET type and the recycle bin function is enabled, the table is directly deleted instead of being moved to the recycle bin.
10. ALTER TABLE cannot be used to change a column of the SET type to another SET type.
11. When a table or a table column associated with the SET type is deleted, or a table column of the SET type is changed to another type, the SET data type is also deleted.
12. CREATE TABLE \{ AS | LIKE \} cannot be used to create a table containing the SET type.
13. The SET type is created with table columns, and its name is a combination. If a data type with the same name already exists in the schema, the SET type fails to be created.
14. The SET type can be compared with the =, <, \>, <, <=, \>, and \>= of the int2, int4, int8, and text types.
15. The SET type can be converted to the int2, int4, int8, float4, float8, numeric, char, varchar, text and nvarchar2 data types.

## Precautions<a name="section2940149112912"></a>

-   The table column values of the SET type must be a subset of the set defined by the SET type. For example:

    ```
    CREATE TABLE employee (
      name text,
      site SET('beijing','shanghai','nanjing','wuhan')
    );
    ```

-   The value of the **site** column must be a subset of the preceding set definition and can be an empty set. If the provided value does not exist in the members of the SET definition, an error is reported. For example:

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

-   Regardless of the sequence of the member values provided by the user, the queried values of the SET type are displayed in the defined sequence after the INSERT operation is successful.

    ```
    openGauss=# select * from employee;
       name   |      site       
    ----------+-----------------
     zhangsan | beijing,nanjing
    (1 rows)
    ```

-   The SET type is stored in bitmap mode. Members of the SET type are assigned different values according to the sequence in which they are defined. For example, the values of SET\('beijing','shanghai','nanjing','wuhan'\) are as follows:

    **Table 1** SET members and their corresponding values

    <a name="table42018239555"></a>
    <table><thead align="left"><tr id="row172026239558"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p112021323175516"><a name="p112021323175516"></a><a name="p112021323175516"></a>SET Member</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p1020212314554"><a name="p1020212314554"></a><a name="p1020212314554"></a>Member Value</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p13202172385516"><a name="p13202172385516"></a><a name="p13202172385516"></a>Binary Value</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row132021234557"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p320272311557"><a name="p320272311557"></a><a name="p320272311557"></a>'beijing'</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1020252385515"><a name="p1020252385515"></a><a name="p1020252385515"></a>1</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2020210230552"><a name="p2020210230552"></a><a name="p2020210230552"></a>0001</p>
    </td>
    </tr>
    <tr id="row2020242335510"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p320252385510"><a name="p320252385510"></a><a name="p320252385510"></a>'shanghai'</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1057975845514"><a name="p1057975845514"></a><a name="p1057975845514"></a>2</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p13202823125513"><a name="p13202823125513"></a><a name="p13202823125513"></a>0010</p>
    </td>
    </tr>
    <tr id="row920218231557"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p122026237550"><a name="p122026237550"></a><a name="p122026237550"></a>'nanjing'</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p19859145918554"><a name="p19859145918554"></a><a name="p19859145918554"></a>4</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1920232314553"><a name="p1920232314553"></a><a name="p1920232314553"></a>0100</p>
    </td>
    </tr>
    <tr id="row13202152335510"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p132021723155513"><a name="p132021723155513"></a><a name="p132021723155513"></a>'wuhan'</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1720211235555"><a name="p1720211235555"></a><a name="p1720211235555"></a>8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p10202142395513"><a name="p10202142395513"></a><a name="p10202142395513"></a>1000</p>
    </td>
    </tr>
    </tbody>
    </table>

    Therefore, if a value is assigned to a column of the SET type, the value is converted to the corresponding subset. For example, the binary value corresponding to 9 is 1001, and the corresponding subset is 'beijing,wuhan'.

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
