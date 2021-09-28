# CREATE TRIGGER<a name="EN-US_TOPIC_0289900727"></a>

## Function<a name="en-us_topic_0283137165_en-us_topic_0237122123_en-us_topic_0059778166_s08b0f056b5f14492970a9037c63fa70c"></a>

**CREATE TRIGGER**  creates a trigger. The trigger will be associated with the specified table or view, and will execute the specified function operations are performed.

## Precautions<a name="en-us_topic_0283137165_en-us_topic_0237122123_en-us_topic_0059778166_sd48f2980b9464b1abca65a4747930552"></a>

-   Currently, triggers can be created only on ordinary row-store tables, instead of on column-store tables, temporary tables, or unlogged tables.
-   If multiple triggers of the same kind are defined for the same event, they will be fired in alphabetical order by name.
-   Triggers are usually used for data association and synchronization between multiple tables. SQL execution performance is greatly affected. Therefore, you are advised not to use this statement when a large amount of data needs to be synchronized and performance requirements are high.

## Syntax<a name="en-us_topic_0283137165_en-us_topic_0237122123_en-us_topic_0059778166_s93c6eaefe7c447408b7d42ff86e6035f"></a>

```
CREATE [ CONSTRAINT ] TRIGGER trigger_name { BEFORE | AFTER | INSTEAD OF } { event [ OR ... ] }
    ON table_name
    [ FROM referenced_table_name ]
    { NOT DEFERRABLE | [ DEFERRABLE ] { INITIALLY IMMEDIATE | INITIALLY DEFERRED } }
    [ FOR [ EACH ] { ROW | STATEMENT } ]
    [ WHEN ( condition ) ]
    EXECUTE PROCEDURE function_name ( arguments );
```

Events include:

```
    INSERT
    UPDATE [ OF column_name [, ... ] ]
    DELETE
    TRUNCATE
```

## Parameter Description<a name="en-us_topic_0283137165_en-us_topic_0237122123_en-us_topic_0059778166_s65dbaae3763942599852d585997c77dd"></a>

-   **CONSTRAINT**

    \(Optional\) Creates a constraint trigger. That is, the trigger is used as a constraint. This is the same as a regular trigger except that the timing of the trigger firing can be adjusted using  **SET CONSTRAINTS**. Constraint triggers must be  **AFTER ROW**  triggers.

-   **trigger\_name**

    Specifies the name of the trigger to be created. This must be distinct from the name of any other trigger for the same table. The name cannot be schema-qualified — the trigger inherits the schema of its table. For a constraint trigger, this is also the name to use when modifying the trigger's behavior using  [SET CONSTRAINTS](set-constraints.md).

    Value range: a string, which complies with the identifier naming convention and contains a maximum of 63 characters.

-   **BEFORE**

    Specifies that the function is called before the event.

-   **AFTER**

    Specifies that the function is called after the event. A constraint trigger can only be specified as  **AFTER**.

-   **INSTEAD OF**

    Specifies that the function is called instead of the event.

-   **event**

    Specifies the event that will fire the trigger. Values are  **INSERT**,  **UPDATE**,  **DELETE**, and  **TRUNCATE**. Multiple events can be specified using  **OR**.

    For  **UPDATE**  events, it is possible to specify a list of columns using this syntax:

    ```
    UPDATE OF column_name1 [, column_name2 ... ]
    ```

    The trigger will only fire if at least one of the listed columns is mentioned as a target of the  **UPDATE**  statement.  **INSTEAD OF UPDATE**  events do not support lists of columns. If the column specified by  **UPDATE OF**  contains a generated column, the trigger is also fired when the column on which the generated column depends is the target column of the  **UPDATE**  statement.

-   **table\_name**

    Specifies the name of the table for which the trigger is created.

    Value range: name of an existing table in the database

-   **referenced\_table\_name**

    Specifies the name of another table referenced by the constraint. This option is used for foreign-key constraints. It can only be specified for constraint triggers.

    Value range: name of an existing table in the database

-   **DEFERRABLE | NOT DEFERRABLE**

    Specifies the start time of the trigger. It can only be specified for constraint triggers. They determine whether the constraint is deferrable.

    For details, see  [CREATE TABLE](create-table.md).

-   **INITIALLY IMMEDIATE** **| INITIALLY DEFERRED**

    If the constraint is deferrable, the two clauses specify the default time to check the constraint. It can only be specified for constraint triggers.

    For details, see  [CREATE TABLE](create-table.md).

-   **FOR EACH ROW | FOR EACH STATEMENT**

    Specifies the frequency of firing the trigger.

    -   **FOR EACH ROW**  indicates that the trigger should be fired once for every row affected by the trigger event.
    -   **FOR EACH STATEMENT**  indicates that the trigger should be fired just once per SQL statement.

    If neither is specified, the default is  **FOR EACH STATEMENT**. Constraint triggers can only be marked as  **FOR EACH ROW**.

-   **condition**

    Specifies whether the trigger function will actually be executed. If  **WHEN**  is specified, the function will be called only when  **condition**  returns  **true**.

    In  **FOR EACH ROW**  triggers, the  **WHEN**  condition can refer to columns of the old and/or new row values by writing  **OLD.**_column name_  or  **NEW.**_column name_  respectively. In addition,  **INSERT**  triggers cannot refer to  **OLD**, and  **DELETE**  triggers cannot refer to  **NEW**.

    **INSTEAD OF**  triggers do not support  **WHEN**  conditions.

    Currently,  **WHEN**  expressions cannot contain subqueries.

    Note that for constraint triggers, evaluation of the  **WHEN**  condition is not deferred, but occurs immediately after the row update operation is performed. If the condition does not evaluate to  **true**, then the trigger is not queued for deferred execution.

-   **function\_name**

    Specifies a user-defined function, which must be declared as taking no parameters and returning type trigger. This is executed when a trigger fires.

-   **arguments**

    Specifies an optional comma-separated list of parameters to be provided to the function when the trigger is executed. The parameters are literal string constants. Simple names and numeric constants can also be written here, but they will all be converted to strings. Check the description of the implementation language of the trigger function to find out how these parameters can be accessed within the function.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The following details trigger types:
    >-   **INSTEAD OF**  triggers must be marked as  **FOR EACH ROW**  and can be defined only on views.
    >-   **BEFORE**  and  **AFTER**  triggers on a view must be marked as  **FOR EACH STATEMENT**.
    >-   **TRUNCATE**  triggers must be marked as  **FOR EACH STATEMENT**.

    **Table  1**  Types of triggers supported on tables and views

    <a name="en-us_topic_0283137165_en-us_topic_0237122123_table15282217184416"></a>
    <table><thead align="left"><tr id="en-us_topic_0283137165_en-us_topic_0237122123_row1928351717446"><th class="cellrowborder" valign="top" width="18.61%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283137165_en-us_topic_0237122123_p172831717164411"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p172831717164411"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p172831717164411"></a>When</p>
    </th>
    <th class="cellrowborder" valign="top" width="31.39%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283137165_en-us_topic_0237122123_p12831417204411"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p12831417204411"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p12831417204411"></a>Event</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283137165_en-us_topic_0237122123_p02835173441"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p02835173441"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p02835173441"></a>Row-Level</p>
    </th>
    <th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283137165_en-us_topic_0237122123_p7283151724411"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p7283151724411"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p7283151724411"></a>Statement-Level</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283137165_en-us_topic_0237122123_row172831817174411"><td class="cellrowborder" rowspan="2" valign="top" width="18.61%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p730044544511"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p730044544511"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p730044544511"></a>BEFORE</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.39%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p3284317124416"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p3284317124416"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p3284317124416"></a>INSERT/UPDATE/DELETE</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p328415179448"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p328415179448"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p328415179448"></a>Tables</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p52841717144413"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p52841717144413"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p52841717144413"></a>Tables and views</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137165_en-us_topic_0237122123_row16284131794411"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p11284117194411"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p11284117194411"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p11284117194411"></a>TRUNCATE</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p17284117134416"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p17284117134416"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p17284117134416"></a>Not supported.</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p928411720440"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p928411720440"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p928411720440"></a>Tables</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137165_en-us_topic_0237122123_row13284111719447"><td class="cellrowborder" rowspan="2" valign="top" width="18.61%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p77757114469"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p77757114469"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p77757114469"></a>AFTER</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.39%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p152851217194419"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p152851217194419"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p152851217194419"></a>INSERT/UPDATE/DELETE</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p18285111715443"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p18285111715443"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p18285111715443"></a>Tables</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p6285191714444"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p6285191714444"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p6285191714444"></a>Tables and views</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137165_en-us_topic_0237122123_row628521784416"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p028581720447"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p028581720447"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p028581720447"></a>TRUNCATE</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p79551335194718"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p79551335194718"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p79551335194718"></a>Not supported.</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p32851817104412"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p32851817104412"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p32851817104412"></a>Tables</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137165_en-us_topic_0237122123_row1628517179447"><td class="cellrowborder" rowspan="2" valign="top" width="18.61%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p76867126463"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p76867126463"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p76867126463"></a>INSTEAD OF</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.39%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p132851717134412"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p132851717134412"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p132851717134412"></a>INSERT/UPDATE/DELETE</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p628520177441"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p628520177441"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p628520177441"></a>Views</p>
    </td>
    <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p328521734411"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p328521734411"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p328521734411"></a>Not supported.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137165_en-us_topic_0237122123_row4285121715449"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p5285121710449"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p5285121710449"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p5285121710449"></a>TRUNCATE</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p13881123616473"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p13881123616473"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p13881123616473"></a>Not supported.</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p828581719444"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p828581719444"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p828581719444"></a>Not supported.</p>
    </td>
    </tr>
    </tbody>
    </table>

    **Table  2**  Special variables in PL/pgSQL functions

    <a name="en-us_topic_0283137165_en-us_topic_0237122123_table760181655812"></a>
    <table><thead align="left"><tr id="en-us_topic_0283137165_en-us_topic_0237122123_row19602716145815"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137165_en-us_topic_0237122123_p206021716105816"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p206021716105816"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p206021716105816"></a>Variable</p>
    </th>
    <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137165_en-us_topic_0237122123_p1460201645816"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1460201645816"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1460201645816"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283137165_en-us_topic_0237122123_row3602131614583"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p14602151695812"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p14602151695812"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p14602151695812"></a>NEW</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p1860211675810"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1860211675810"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1860211675810"></a>New tuple for <strong id="b171974279364"><a name="b171974279364"></a><a name="b171974279364"></a>INSERT</strong> and <strong id="b1820302717360"><a name="b1820302717360"></a><a name="b1820302717360"></a>UPDATE</strong> operations. This variable is <strong id="b7204122718368"><a name="b7204122718368"></a><a name="b7204122718368"></a>NULL</strong> for <strong id="b7204327133617"><a name="b7204327133617"></a><a name="b7204327133617"></a>DELETE</strong> operations.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137165_en-us_topic_0237122123_row76021816145814"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p11602191615818"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p11602191615818"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p11602191615818"></a>OLD</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p1602171615583"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1602171615583"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1602171615583"></a>Old tuple for <strong id="b5854103720369"><a name="b5854103720369"></a><a name="b5854103720369"></a>UPDATE</strong> and <strong id="b168618371363"><a name="b168618371363"></a><a name="b168618371363"></a>DELETE</strong> operations. This variable is <strong id="b886223711362"><a name="b886223711362"></a><a name="b886223711362"></a>NULL</strong> for <strong id="b15863337173611"><a name="b15863337173611"></a><a name="b15863337173611"></a>INSERT</strong> operations.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137165_en-us_topic_0237122123_row18602416155810"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p1475416171454"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1475416171454"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1475416171454"></a>TG_NAME</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p5602181610580"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p5602181610580"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p5602181610580"></a>Trigger name.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137165_en-us_topic_0237122123_row1603161675820"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p1475411171056"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1475411171056"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1475411171056"></a>TG_WHEN</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p206031016115811"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p206031016115811"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p206031016115811"></a>Trigger timing (<strong id="b233355118365"><a name="b233355118365"></a><a name="b233355118365"></a>BEFORE</strong>, <strong id="b13340551183613"><a name="b13340551183613"></a><a name="b13340551183613"></a>AFTER</strong>, or <strong id="b133402519361"><a name="b133402519361"></a><a name="b133402519361"></a>INSTEAD OF</strong>).</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137165_en-us_topic_0237122123_row1660319162582"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p1175418171457"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1175418171457"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1175418171457"></a>TG_LEVEL</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p0603191615816"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p0603191615816"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p0603191615816"></a>Trigger frequency (<strong id="b152731358153619"><a name="b152731358153619"></a><a name="b152731358153619"></a>ROW</strong> or <strong id="b122802589365"><a name="b122802589365"></a><a name="b122802589365"></a>STATEMENT</strong>).</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137165_en-us_topic_0237122123_row1560316166589"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p127546171358"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p127546171358"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p127546171358"></a>TG_OP</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p10603716185818"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p10603716185818"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p10603716185818"></a>Trigger event (<strong id="b147411515374"><a name="b147411515374"></a><a name="b147411515374"></a>INSERT</strong>, <strong id="b27488117372"><a name="b27488117372"></a><a name="b27488117372"></a>UPDATE</strong>, <strong id="b117484117379"><a name="b117484117379"></a><a name="b117484117379"></a>DELETE</strong>, or <strong id="b2749518374"><a name="b2749518374"></a><a name="b2749518374"></a>TRUNCATE</strong>).</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137165_en-us_topic_0237122123_row10541541358"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p27541171651"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p27541171651"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p27541171651"></a>TG_RELID</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p1954041519"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1954041519"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1954041519"></a>OID of the table where the trigger resides.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137165_en-us_topic_0237122123_row45412413517"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p1875420175514"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1875420175514"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1875420175514"></a>TG_RELNAME</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p205414755"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p205414755"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p205414755"></a>Name of the table where the trigger resides. (This variable has been replaced by <strong id="b23441140377"><a name="b23441140377"></a><a name="b23441140377"></a>TG_TABLE_NAME</strong>.)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137165_en-us_topic_0237122123_row13249111110518"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p87540171655"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p87540171655"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p87540171655"></a>TG_TABLE_NAME</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p10250201116514"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p10250201116514"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p10250201116514"></a>Name of the table where the trigger resides.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137165_en-us_topic_0237122123_row162500111657"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p1475451710513"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1475451710513"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p1475451710513"></a>TG_TABLE_SCHEMA</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p6250711553"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p6250711553"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p6250711553"></a>Schema of the table where the trigger resides.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137165_en-us_topic_0237122123_row625014111253"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p117543174514"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p117543174514"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p117543174514"></a>TG_NARGS</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p192506111453"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p192506111453"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p192506111453"></a>Number of parameters for the trigger function.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137165_en-us_topic_0237122123_row1764175611515"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p37540171551"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p37540171551"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p37540171551"></a>TG_ARGV[]</p>
    </td>
    <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137165_en-us_topic_0237122123_p676419562519"><a name="en-us_topic_0283137165_en-us_topic_0237122123_p676419562519"></a><a name="en-us_topic_0283137165_en-us_topic_0237122123_p676419562519"></a>List of parameters for the trigger function.</p>
    </td>
    </tr>
    </tbody>
    </table>


## Examples<a name="en-us_topic_0283137165_en-us_topic_0237122123_en-us_topic_0059778166_sfbca773f5bcd4799b3ea668b3eb074fa"></a>

```
-- Create a source table and a destination table.
openGauss=# CREATE TABLE test_trigger_src_tbl(id1 INT, id2 INT, id3 INT);
openGauss=# CREATE TABLE test_trigger_des_tbl(id1 INT, id2 INT, id3 INT);

-- Create a trigger function.
openGauss=# CREATE OR REPLACE FUNCTION tri_insert_func() RETURNS TRIGGER AS
           $$
           DECLARE
           BEGIN
                   INSERT INTO test_trigger_des_tbl VALUES(NEW.id1, NEW.id2, NEW.id3);
                   RETURN NEW;
           END
           $$ LANGUAGE PLPGSQL;

openGauss=# CREATE OR REPLACE FUNCTION tri_update_func() RETURNS TRIGGER AS
           $$
           DECLARE
           BEGIN
                   UPDATE test_trigger_des_tbl SET id3 = NEW.id3 WHERE id1=OLD.id1;
                   RETURN OLD;
           END
           $$ LANGUAGE PLPGSQL;

openGauss=# CREATE OR REPLACE FUNCTION TRI_DELETE_FUNC() RETURNS TRIGGER AS
           $$
           DECLARE
           BEGIN
                   DELETE FROM test_trigger_des_tbl WHERE id1=OLD.id1;
                   RETURN OLD;
           END
           $$ LANGUAGE PLPGSQL;

-- Create an INSERT trigger.
openGauss=# CREATE TRIGGER insert_trigger
           BEFORE INSERT ON test_trigger_src_tbl
           FOR EACH ROW
           EXECUTE PROCEDURE tri_insert_func();

-- Create an UPDATE trigger.
openGauss=# CREATE TRIGGER update_trigger
           AFTER UPDATE ON test_trigger_src_tbl  
           FOR EACH ROW
           EXECUTE PROCEDURE tri_update_func();

-- Create a DELETE trigger.
openGauss=# CREATE TRIGGER delete_trigger
           BEFORE DELETE ON test_trigger_src_tbl
           FOR EACH ROW
           EXECUTE PROCEDURE tri_delete_func();

-- Execute the INSERT event and check the trigger results.
openGauss=# INSERT INTO test_trigger_src_tbl VALUES(100,200,300);
openGauss=# SELECT * FROM test_trigger_src_tbl;
openGauss=# SELECT * FROM test_trigger_des_tbl;  // Check whether the trigger operation takes effect.

-- Execute the UPDATE event and check the trigger results.
openGauss=# UPDATE test_trigger_src_tbl SET id3=400 WHERE id1=100;
openGauss=# SELECT * FROM test_trigger_src_tbl;
openGauss=# SELECT * FROM test_trigger_des_tbl;  // Check whether the trigger operation takes effect.

-- Execute the DELETE event and check the trigger results.
openGauss=# DELETE FROM test_trigger_src_tbl WHERE id1=100;
openGauss=# SELECT * FROM test_trigger_src_tbl;
openGauss=# SELECT * FROM test_trigger_des_tbl;  // Check whether the trigger operation takes effect.

-- Modify a trigger.
openGauss=# ALTER TRIGGER delete_trigger ON test_trigger_src_tbl RENAME TO delete_trigger_renamed;

-- Disable insert_trigger.
openGauss=# ALTER TABLE test_trigger_src_tbl DISABLE TRIGGER insert_trigger;  

-- Disable all triggers on the current table.
openGauss=# ALTER TABLE test_trigger_src_tbl DISABLE TRIGGER ALL;  

-- Delete triggers.
openGauss=# DROP TRIGGER insert_trigger ON test_trigger_src_tbl;
openGauss=# DROP TRIGGER update_trigger ON test_trigger_src_tbl;
openGauss=# DROP TRIGGER delete_trigger_renamed ON test_trigger_src_tbl;
```

## Helpful Links<a name="en-us_topic_0283137165_en-us_topic_0237122123_en-us_topic_0059778166_sf40b399700a74bd7b2d37e445d057f6e"></a>

[ALTER TRIGGER](alter-trigger.md),  [DROP TRIGGER](drop-trigger.md), and  [ALTER TABLE](alter-table.md)

