# Updating and Inserting Data by Using the MERGE INTO Statement<a name="EN-US_TOPIC_0242370290"></a>

To add all or a large amount of data in a table to an existing table, you can run the  **MERGE INTO**  statement in openGauss to merge the two tables so that data can be quickly added to the existing table.

The  **MERGE INTO**  statement matches data in a source table with that in a target table based on a join condition. If data matches,  **UPDATE**  will be executed on the target table. Otherwise,  **INSERT**  will be executed. This statement is a convenient way to combine multiple operations and avoids multiple  **INSERT**  or  **UPDATE**  statements.

## Prerequisites<a name="en-us_topic_0237121140_en-us_topic_0165787112_section775820232421"></a>

You have the  **INSERT**  and  **UPDATE**  permissions for the target table and the  **SELECT**  permission for the source table.

## Procedure<a name="en-us_topic_0237121140_en-us_topic_0165787112_section116710974218"></a>

1.  Create a source table named  **products**  and insert data.

    ```
    postgres=# CREATE TABLE products 
    ( product_id INTEGER, 
      product_name VARCHAR2(60), 
      category VARCHAR2(60) 
    );
    
    postgres=# INSERT INTO products VALUES 
    (1502, 'olympus camera', 'electrncs'),
    (1601, 'lamaze', 'toys'),
    (1666, 'harry potter', 'toys'),
    (1700, 'wait interface', 'books'); 
    ```

2.  Create a target table named  **newproducts**  and insert data.

    ```
    postgres=# CREATE TABLE newproducts 
    ( product_id INTEGER, 
      product_name VARCHAR2(60), 
      category VARCHAR2(60) 
    ); 
    
    postgres=# INSERT INTO newproducts VALUES 
    (1501, 'vivitar 35mm', 'electrncs'),
    (1502, 'olympus ', 'electrncs'),
    (1600, 'play gym', 'toys'),
    (1601, 'lamaze', 'toys'), 
    (1666, 'harry potter', 'dvd'); 
    ```

3.  Run the  **MERGE INTO**  statement to merge data in the source table  **products**  into the target table  **newproducts**.

   ```
   MERGE INTO newproducts np    
   USING products p    
   ON (np.product_id = p.product_id )    
   WHEN MATCHED THEN     
     UPDATE SET np.product_name = p.product_name, np.category = p.category 
   WHEN NOT MATCHED THEN     
     INSERT VALUES (p.product_id, p.product_name, p.category) ; 
   ```

    For details on parameters in the statement, see  [Table 1](#en-us_topic_0237121140_en-us_topic_0165787112_table1973914406416). For more information, see  [MERGE INTO](merge-into.md).

    **Table  1**  Parameters in the MERGE INTO statement

    <a name="en-us_topic_0237121140_en-us_topic_0165787112_table1973914406416"></a>

    <table><thead align="left"><tr id="en-us_topic_0237121140_en-us_topic_0165787112_row177398403416"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237121140_en-us_topic_0165787112_p47391401341"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p47391401341"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p47391401341"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237121140_en-us_topic_0165787112_p10739540945"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p10739540945"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p10739540945"></a>Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237121140_en-us_topic_0165787112_p1573911401344"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p1573911401344"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p1573911401344"></a>Example Value</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237121140_en-us_topic_0165787112_row1073994017420"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121140_en-us_topic_0165787112_p17394408415"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p17394408415"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p17394408415"></a><strong id="en-us_topic_0237121140_b257434181716"><a name="en-us_topic_0237121140_b257434181716"></a><a name="en-us_topic_0237121140_b257434181716"></a>INTO</strong> clause</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121140_en-us_topic_0165787112_p18739240646"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p18739240646"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p18739240646"></a>Specifies a target table that is to be updated or has data to be inserted.</p>
    <a name="en-us_topic_0237121140_en-us_topic_0165787112_ul142032147713"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_ul142032147713"></a><p>A table alias is supported.</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121140_en-us_topic_0165787112_p137401240747"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p137401240747"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p137401240747"></a>Value: newproducts np</p>
    <p id="en-us_topic_0237121140_en-us_topic_0165787112_p550610131086"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p550610131086"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p550610131086"></a>The table name is <strong id="en-us_topic_0237121140_b89571520171714"><a name="en-us_topic_0237121140_b89571520171714"></a><a name="en-us_topic_0237121140_b89571520171714"></a>newproducts</strong> and the alias is <strong id="en-us_topic_0237121140_b49582204172"><a name="en-us_topic_0237121140_b49582204172"></a><a name="en-us_topic_0237121140_b49582204172"></a>np</strong>.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121140_en-us_topic_0165787112_row19740184017411"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121140_en-us_topic_0165787112_p1874094019414"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p1874094019414"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p1874094019414"></a><strong id="en-us_topic_0237121140_b4655182701716"><a name="en-us_topic_0237121140_b4655182701716"></a><a name="en-us_topic_0237121140_b4655182701716"></a>USING</strong> clause</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121140_en-us_topic_0165787112_p1074012409417"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p1074012409417"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p1074012409417"></a>Specifies a source table. A table alias is supported.</p>
    <p id="en-us_topic_0237121140_p13651817475"><a name="en-us_topic_0237121140_p13651817475"></a><a name="en-us_topic_0237121140_p13651817475"></a>If the target table is a replication table, the source table must also be a replication table.</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121140_en-us_topic_0165787112_p874054013419"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p874054013419"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p874054013419"></a>Value: products p</p>
    <p id="en-us_topic_0237121140_en-us_topic_0165787112_p11818141110261"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p11818141110261"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p11818141110261"></a>The table name is <strong id="en-us_topic_0237121140_b1155413401710"><a name="en-us_topic_0237121140_b1155413401710"></a><a name="en-us_topic_0237121140_b1155413401710"></a>products</strong> and the alias is <strong id="en-us_topic_0237121140_b17554123410174"><a name="en-us_topic_0237121140_b17554123410174"></a><a name="en-us_topic_0237121140_b17554123410174"></a>p</strong>.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121140_en-us_topic_0165787112_row474017401746"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121140_en-us_topic_0165787112_p157401440443"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p157401440443"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p157401440443"></a><strong id="en-us_topic_0237121140_b1948243618173"><a name="en-us_topic_0237121140_b1948243618173"></a><a name="en-us_topic_0237121140_b1948243618173"></a>ON</strong> clause</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121140_en-us_topic_0165787112_p1974024011415"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p1974024011415"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p1974024011415"></a>Specifies a join condition between a target table and a source table.</p>
    <p id="en-us_topic_0237121140_en-us_topic_0165787112_p131176438458"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p131176438458"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p131176438458"></a>Columns in the join condition cannot be updated.</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121140_en-us_topic_0165787112_p2023819456265"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p2023819456265"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p2023819456265"></a>Value: np.product_id = p.product_id</p>
    <p id="en-us_topic_0237121140_en-us_topic_0165787112_p5485102292012"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p5485102292012"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p5485102292012"></a>The join condition is that the <strong id="en-us_topic_0237121140_b04451650181711"><a name="en-us_topic_0237121140_b04451650181711"></a><a name="en-us_topic_0237121140_b04451650181711"></a>product_id</strong> column in the target table <strong id="en-us_topic_0237121140_b545055015172"><a name="en-us_topic_0237121140_b545055015172"></a><a name="en-us_topic_0237121140_b545055015172"></a>newproducts</strong> has equivalent values as the <strong id="en-us_topic_0237121140_b17451165061713"><a name="en-us_topic_0237121140_b17451165061713"></a><a name="en-us_topic_0237121140_b17451165061713"></a>product_id</strong> column in the source table <strong id="en-us_topic_0237121140_b845145011178"><a name="en-us_topic_0237121140_b845145011178"></a><a name="en-us_topic_0237121140_b845145011178"></a>products</strong>.</p>
    <p id="en-us_topic_0237121140_en-us_topic_0165787112_p282019714612"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p282019714612"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p282019714612"></a></p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121140_en-us_topic_0165787112_row52387453267"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121140_en-us_topic_0165787112_p1330213405279"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p1330213405279"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p1330213405279"></a><strong id="en-us_topic_0237121140_b1284615981710"><a name="en-us_topic_0237121140_b1284615981710"></a><a name="en-us_topic_0237121140_b1284615981710"></a>WHEN MATCHED</strong> clause</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121140_en-us_topic_0165787112_p6424153613389"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p6424153613389"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p6424153613389"></a>Performs <strong id="en-us_topic_0237121140_b357021171813"><a name="en-us_topic_0237121140_b357021171813"></a><a name="en-us_topic_0237121140_b357021171813"></a>UPDATE</strong> if data in the source table matches that in the target table based on the condition.</p>
    <a name="en-us_topic_0237121140_en-us_topic_0165787112_ul1748315314466"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_ul1748315314466"></a><ul id="en-us_topic_0237121140_en-us_topic_0165787112_ul1748315314466"><li>Only one <strong id="en-us_topic_0237121140_b1568153111818"><a name="en-us_topic_0237121140_b1568153111818"></a><a name="en-us_topic_0237121140_b1568153111818"></a>WHEN MATCHED</strong> clause can be specified.</li><li>The <strong id="en-us_topic_0237121140_b71078931819"><a name="en-us_topic_0237121140_b71078931819"></a><a name="en-us_topic_0237121140_b71078931819"></a>WHEN MATCHED</strong> clause can be omitted. If it is omitted, no operation will be performed on the rows that meet the condition in the <strong id="en-us_topic_0237121140_b1111213911813"><a name="en-us_topic_0237121140_b1111213911813"></a><a name="en-us_topic_0237121140_b1111213911813"></a>ON</strong> clause.</li><li>Columns involved in the distribution key of the target table cannot be updated.</li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121140_en-us_topic_0165787112_p10308917144911"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p10308917144911"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p10308917144911"></a>Value: WHEN MATCHED THEN UPDATE SET np.product_name = p.product_name, np.category = p.category</p>
    <p id="en-us_topic_0237121140_en-us_topic_0165787112_p17304117134915"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p17304117134915"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p17304117134915"></a>When the condition in the <strong id="en-us_topic_0237121140_b714572114180"><a name="en-us_topic_0237121140_b714572114180"></a><a name="en-us_topic_0237121140_b714572114180"></a>ON</strong> clause is met, the values of the <strong id="en-us_topic_0237121140_b514642119188"><a name="en-us_topic_0237121140_b514642119188"></a><a name="en-us_topic_0237121140_b514642119188"></a>product_name</strong> and <strong id="en-us_topic_0237121140_b314610217180"><a name="en-us_topic_0237121140_b314610217180"></a><a name="en-us_topic_0237121140_b314610217180"></a>category</strong> columns in the target table <strong id="en-us_topic_0237121140_b19147021151816"><a name="en-us_topic_0237121140_b19147021151816"></a><a name="en-us_topic_0237121140_b19147021151816"></a>newproducts</strong> are replaced with the values in the corresponding columns in the source table <strong id="en-us_topic_0237121140_b131471621121813"><a name="en-us_topic_0237121140_b131471621121813"></a><a name="en-us_topic_0237121140_b131471621121813"></a>products</strong>.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121140_en-us_topic_0165787112_row196141748172619"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121140_en-us_topic_0165787112_p3692175212712"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p3692175212712"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p3692175212712"></a><strong id="en-us_topic_0237121140_b2011922817183"><a name="en-us_topic_0237121140_b2011922817183"></a><a name="en-us_topic_0237121140_b2011922817183"></a>WHEN NOT MATCHED</strong> clause</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121140_en-us_topic_0165787112_p114111803918"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p114111803918"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p114111803918"></a>Performs <strong id="en-us_topic_0237121140_b10691132911189"><a name="en-us_topic_0237121140_b10691132911189"></a><a name="en-us_topic_0237121140_b10691132911189"></a>INSERT</strong> if data in the source table does not match that in the target table based on the condition.</p>
    <a name="en-us_topic_0237121140_en-us_topic_0165787112_ul1335515501391"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_ul1335515501391"></a><ul id="en-us_topic_0237121140_en-us_topic_0165787112_ul1335515501391"><li>Only one <strong id="en-us_topic_0237121140_b9342333191818"><a name="en-us_topic_0237121140_b9342333191818"></a><a name="en-us_topic_0237121140_b9342333191818"></a>WHEN NOT MATCHED</strong> clause can be specified.</li><li>The <strong id="en-us_topic_0237121140_b710413541815"><a name="en-us_topic_0237121140_b710413541815"></a><a name="en-us_topic_0237121140_b710413541815"></a>WHEN NOT MATCHED</strong> clause can be omitted.</li><li><p id="en-us_topic_0237121140_en-us_topic_0165787112_p11588954184014"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p11588954184014"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p11588954184014"></a>An <strong id="en-us_topic_0237121140_b1628317363181"><a name="en-us_topic_0237121140_b1628317363181"></a><a name="en-us_topic_0237121140_b1628317363181"></a>INSERT</strong> clause can contain only one <strong id="en-us_topic_0237121140_b11284036141813"><a name="en-us_topic_0237121140_b11284036141813"></a><a name="en-us_topic_0237121140_b11284036141813"></a>VALUES</strong>.</p>
    </li><li><p id="en-us_topic_0237121140_en-us_topic_0165787112_p196945118220"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p196945118220"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p196945118220"></a>The <strong id="en-us_topic_0237121140_b15177938181818"><a name="en-us_topic_0237121140_b15177938181818"></a><a name="en-us_topic_0237121140_b15177938181818"></a>WHEN MATCHED</strong> and <strong id="en-us_topic_0237121140_b141784385183"><a name="en-us_topic_0237121140_b141784385183"></a><a name="en-us_topic_0237121140_b141784385183"></a>WHEN NOT MATCHED</strong> clauses can be exchanged in sequence. One of them can be omitted, but they cannot be omitted at the same time.</p>
    </li></ul>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121140_en-us_topic_0165787112_p10164102853613"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p10164102853613"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p10164102853613"></a>Value: WHEN NOT MATCHED THEN</p>
    <p id="en-us_topic_0237121140_en-us_topic_0165787112_p16747192313615"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p16747192313615"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p16747192313615"></a>INSERT VALUES (p.product_id, p.product_name, p.category)</p>
    <p id="en-us_topic_0237121140_en-us_topic_0165787112_p1439652163112"><a name="en-us_topic_0237121140_en-us_topic_0165787112_p1439652163112"></a><a name="en-us_topic_0237121140_en-us_topic_0165787112_p1439652163112"></a>Insert rows in the source table <strong id="en-us_topic_0237121140_b10995114415181"><a name="en-us_topic_0237121140_b10995114415181"></a><a name="en-us_topic_0237121140_b10995114415181"></a>products</strong> that do not meet the condition in the <strong id="en-us_topic_0237121140_b160204512184"><a name="en-us_topic_0237121140_b160204512184"></a><a name="en-us_topic_0237121140_b160204512184"></a>ON</strong> clause into the target table <strong id="en-us_topic_0237121140_b01845151812"><a name="en-us_topic_0237121140_b01845151812"></a><a name="en-us_topic_0237121140_b01845151812"></a>newproducts</strong>.</p>
    </td>
    </tr>
    </tbody>
    </table>

4.  Query the target table  **newproducts**  after the merge.

    ```
    SELECT * FROM newproducts;
    ```

    The command output is as follows:

    ```
     product_id |  product_name  | category
    ------------+----------------+-----------
           1501 | vivitar 35mm   | electrncs
           1502 | olympus camera | electrncs
           1666 | harry potter   | toys
           1600 | play gym       | toys
           1601 | lamaze         | toys
           1700 | wait interface | books
    (6 rows)
    ```


