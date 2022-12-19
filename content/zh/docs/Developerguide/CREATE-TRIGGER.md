# CREATE TRIGGER<a name="ZH-CN_TOPIC_0289900727"></a>

## 功能描述<a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_zh-cn_topic_0059778166_s08b0f056b5f14492970a9037c63fa70c"></a>

创建一个触发器。 触发器将与指定的表或视图关联，并在特定条件下执行指定的函数。

## 注意事项<a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_zh-cn_topic_0059778166_sd48f2980b9464b1abca65a4747930552"></a>

-   当前仅支持在普通行存表上创建触发器，不支持在列存表、临时表、unlogged表等类型表上创建触发器。
-   如果为同一事件定义了多个相同类型的触发器，则按触发器的名称字母顺序触发它们。
-   触发器常用于多表间数据关联同步场景，对SQL执行性能影响较大，不建议在大数据量同步及对性能要求高的场景中使用。
-   执行创建触发器操作的用户需要拥有指定表的TRIGGER权限或被授予了CREATE ANY TRIGGER权限。

## 语法格式<a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_zh-cn_topic_0059778166_s93c6eaefe7c447408b7d42ff86e6035f"></a>

-   **o风格创建触发器的语法**

```
CREATE [ CONSTRAINT ] TRIGGER trigger_name { BEFORE | AFTER | INSTEAD OF } { event [ OR ... ] }
    ON table_name
    [ FROM referenced_table_name ]
    { NOT DEFERRABLE | [ DEFERRABLE ] { INITIALLY IMMEDIATE | INITIALLY DEFERRED } }
    [ FOR [ EACH ] { ROW | STATEMENT } ]
    [ WHEN ( condition ) ]
    EXECUTE PROCEDURE function_name ( arguments );
```

-   **兼容mysql兼容风格的创建触发器的语法**

```
CREATE [ CONSTRAINT ] [ DEFINER=user ] TRIGGER [ IF NOT EXISTS ] trigger_name { BEFORE | AFTER | INSTEAD OF } { event [ OR ... ] }
    ON table_name
    [ FROM referenced_table_name ]
    { NOT DEFERRABLE | [ DEFERRABLE ] { INITIALLY IMMEDIATE | INITIALLY DEFERRED } }
    [ FOR [ EACH ] { ROW | STATEMENT } ]
    [ WHEN ( condition ) ]
    [ trigger_order ]
    trigger_body
```

其中event包含以下几种：

```
    INSERT
    UPDATE [ OF column_name [, ... ] ]
    DELETE
    TRUNCATE
```

其中trigger_order是：

```
    { FOLLOWS|PRECEDES } other_trigger_name
```

## 参数说明<a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_zh-cn_topic_0059778166_s65dbaae3763942599852d585997c77dd"></a>

-   **CONSTRAINT**

    可选项，指定此参数将创建约束触发器，即触发器作为约束来使用。除了可以使用SET CONSTRAINTS调整触发器触发的时间之外，这与常规触发器相同。 约束触发器必须是AFTER ROW触发器。

-   **DEFINER**

    可选项，指定此参数可以影响触发器内引用对象的权限控制。

-   **IF NOT EXISTS**

    可选项，指定此参数如果触发器在相同的模式中具有相同的名称、相同的表、相同的表，则防止发生错误。

-   **trigger\_name**

    触发器名称，该名称不能限定模式，因为触发器自动继承其所在表的模式，且同一个表的触发器不能重名。 对于约束触发器，使用[SET CONSTRAINTS](SET-CONSTRAINTS.md)修改触发器行为时也使用此名称。

    取值范围：符合标识符命名规范的字符串，且最大长度不超过63个字符。

-   **BEFORE**

    触发器函数是在触发事件发生前执行。

-   **AFTER**

    触发器函数是在触发事件发生后执行，约束触发器只能指定为AFTER。

-   **INSTEAD OF**

    触发器函数直接替代触发事件。

-   **event**

    启动触发器的事件，取值范围包括：INSERT、UPDATE、DELETE或TRUNCATE，也可以通过OR同时指定多个触发事件。

    对于UPDATE事件类型，可以使用下面语法指定列：

    ```
    UPDATE OF column_name1 [, column_name2 ... ]
    ```

    表示当这些列作为UPDATE语句的目标列时，才会启动触发器，但是INSTEAD OF UPDATE类型不支持指定列信息。

-   **table\_name**

    需要创建触发器的表名称。

    取值范围：数据库中已经存在的表名称。

-   **referenced\_table\_name**

    约束引用的另一个表的名称。 只能为约束触发器指定，常见于外键约束。

    取值范围：数据库中已经存在的表名称。

-   **DEFERRABLE | NOT DEFERRABLE**

    约束触发器的启动时机，仅作用于约束触发器。这两个关键字设置该约束是否可推迟。

    详细介绍请参见[CREATE TABLE](CREATE-TABLE.md)。

-   **INITIALLY IMMEDIATE** **| INITIALLY DEFERRED**

    如果约束是可推迟的，则这个子句声明检查约束的缺省时间，仅作用于约束触发器。

    详细介绍请参见[CREATE TABLE](CREATE-TABLE.md)。

-   **FOR EACH ROW | FOR EACH STATEMENT**

    触发器的触发频率。

    -   FOR EACH ROW是指该触发器是受触发事件影响的每一行触发一次。
    -   FOR EACH STATEMENT是指该触发器是每个SQL语句只触发一次。

    未指定时默认值为FOR EACH STATEMENT。约束触发器只能指定为FOR EACH ROW。

-   **condition**

    决定是否实际执行触发器函数的条件表达式。当指定WHEN时，只有在条件返回true时才会调用该函数。

    在FOR EACH ROW触发器中，WHEN条件可以通过分别写入OLD.column\_name或NEW.column\_name来引用旧行或新行值的列。 当然，INSERT触发器不能引用OLD和DELETE触发器不能引用NEW。

    INSTEAD OF触发器不支持WHEN条件。

    WHEN表达式不能包含子查询。

    对于约束触发器，WHEN条件的评估不会延迟，而是在执行更新操作后立即发生。 如果条件返回值不为true，则触发器不会排队等待延迟执行。

-   **function\_name**

    用户定义的函数，必须声明为不带参数并返回类型为触发器，在触发器触发时执行。

- **arguments**

  执行触发器时要提供给函数的可选的以逗号分隔的参数列表。参数是文字字符串常量，简单的名称和数字常量也可以写在这里，但它们都将被转换为字符串。 请检查触发器函数的实现语言的描述，以了解如何在函数内访问这些参数。

- **trigger\_order**

  可选项，trigger_order特征中的{FOLLOWS|PRECEDES}控制触发器的优先触发顺序，mysql兼容性模式下允许对同一个表，在同一触发事件定义多个触发器，会按照触发器创建的先后顺序来决定触发的优先顺序（先创建的优先）。可以通过{FOLLOWS|PRECEDES}来调整优先级。使用FOLLOWS，最后一次使用的触发器与原始触发器最紧挨着，其他的触发器的优先级都顺序向后挤压；使用PRECEDES，最后一次使用的触发器与原始触发器最紧挨着，其他的触发器的优先级都顺序向前挤压。

- **trigger\_body**

  直接通过在begin...end之间书写代码块，定义触发器之后要完成的工作。

  **表 1**  表和视图上支持的触发器种类：

  >![](public_sys-resources/icon-note.gif) **说明：** 
  >
  >关于触发器种类：
  >
  >-   INSTEAD OF的触发器必须标记为FOR EACH ROW，并且只能在视图上定义。
  >-   BEFORE和AFTER触发器作用在视图上时，只能标记为FOR EACH STATEMENT。
  >-   TRUNCATE类型触发器仅限FOR EACH STATEMENT。

  <a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_table15282217184416"></a>
  <table><thead align="left"><tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row1928351717446"><th class="cellrowborder" valign="top" width="18.61%" id="mcps1.2.5.1.1"><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p172831717164411"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p172831717164411"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p172831717164411"></a>触发时机</p>
  </th>
  <th class="cellrowborder" valign="top" width="31.39%" id="mcps1.2.5.1.2"><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p12831417204411"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p12831417204411"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p12831417204411"></a>触发事件</p>
  </th>
  <th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.3"><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p02835173441"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p02835173441"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p02835173441"></a>行级</p>
  </th>
  <th class="cellrowborder" valign="top" width="25%" id="mcps1.2.5.1.4"><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p7283151724411"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p7283151724411"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p7283151724411"></a>语句级</p>
  </th>
  </tr>
  </thead>
  <tbody><tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row172831817174411"><td class="cellrowborder" rowspan="2" valign="top" width="18.61%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p730044544511"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p730044544511"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p730044544511"></a>BEFORE</p>
  </td>
  <td class="cellrowborder" valign="top" width="31.39%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p3284317124416"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p3284317124416"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p3284317124416"></a>INSERT/UPDATE/DELETE</p>
  </td>
  <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p328415179448"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p328415179448"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p328415179448"></a>表</p>
  </td>
  <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p52841717144413"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p52841717144413"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p52841717144413"></a>表和视图</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row16284131794411"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p11284117194411"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p11284117194411"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p11284117194411"></a>TRUNCATE</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p17284117134416"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p17284117134416"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p17284117134416"></a>不支持</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p928411720440"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p928411720440"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p928411720440"></a>表</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row13284111719447"><td class="cellrowborder" rowspan="2" valign="top" width="18.61%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p77757114469"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p77757114469"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p77757114469"></a>AFTER</p>
  </td>
  <td class="cellrowborder" valign="top" width="31.39%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p152851217194419"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p152851217194419"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p152851217194419"></a>INSERT/UPDATE/DELETE</p>
  </td>
  <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p18285111715443"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p18285111715443"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p18285111715443"></a>表</p>
  </td>
  <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p6285191714444"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p6285191714444"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p6285191714444"></a>表和视图</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row628521784416"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p028581720447"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p028581720447"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p028581720447"></a>TRUNCATE</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p79551335194718"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p79551335194718"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p79551335194718"></a>不支持</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p32851817104412"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p32851817104412"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p32851817104412"></a>表</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row1628517179447"><td class="cellrowborder" rowspan="2" valign="top" width="18.61%" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p76867126463"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p76867126463"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p76867126463"></a>INSTEAD OF</p>
  </td>
  <td class="cellrowborder" valign="top" width="31.39%" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p132851717134412"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p132851717134412"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p132851717134412"></a>INSERT/UPDATE/DELETE</p>
  </td>
  <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p628520177441"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p628520177441"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p628520177441"></a>视图</p>
  </td>
  <td class="cellrowborder" valign="top" width="25%" headers="mcps1.2.5.1.4 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p328521734411"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p328521734411"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p328521734411"></a>不支持</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row4285121715449"><td class="cellrowborder" valign="top" headers="mcps1.2.5.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p5285121710449"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p5285121710449"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p5285121710449"></a>TRUNCATE</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p13881123616473"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p13881123616473"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p13881123616473"></a>不支持</p>
  </td>
  <td class="cellrowborder" valign="top" headers="mcps1.2.5.1.3 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p828581719444"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p828581719444"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p828581719444"></a>不支持</p>
  </td>
  </tr>
  </tbody>
  </table>

  **表 2**  PLPGSQL类型触发器函数特殊变量：

  <a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_table760181655812"></a>
  <table><thead align="left"><tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row19602716145815"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p206021716105816"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p206021716105816"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p206021716105816"></a>变量名</p>
  </th>
  <th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1460201645816"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1460201645816"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1460201645816"></a>变量含义</p>
  </th>
  </tr>
  </thead>
  <tbody><tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row3602131614583"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p14602151695812"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p14602151695812"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p14602151695812"></a>NEW</p>
  </td>
  <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1860211675810"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1860211675810"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1860211675810"></a>INSERT及UPDATE操作涉及tuple信息中的新值，对DELETE为空。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row76021816145814"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p11602191615818"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p11602191615818"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p11602191615818"></a>OLD</p>
  </td>
  <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1602171615583"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1602171615583"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1602171615583"></a>UPDATE及DELETE操作涉及tuple信息中的旧值，对INSERT为空。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row18602416155810"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1475416171454"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1475416171454"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1475416171454"></a>TG_NAME</p>
  </td>
  <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p5602181610580"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p5602181610580"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p5602181610580"></a>触发器名称。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row1603161675820"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1475411171056"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1475411171056"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1475411171056"></a>TG_WHEN</p>
  </td>
  <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p206031016115811"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p206031016115811"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p206031016115811"></a>触发器触发时机（BEFORE/AFTER/INSTEAD OF）。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row1660319162582"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1175418171457"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1175418171457"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1175418171457"></a>TG_LEVEL</p>
  </td>
  <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p0603191615816"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p0603191615816"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p0603191615816"></a>触发频率（ROW/STATEMENT）。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row1560316166589"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p127546171358"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p127546171358"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p127546171358"></a>TG_OP</p>
  </td>
  <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p10603716185818"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p10603716185818"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p10603716185818"></a>触发操作（INSERT/UPDATE/DELETE/TRUNCATE）。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row10541541358"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p27541171651"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p27541171651"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p27541171651"></a>TG_RELID</p>
  </td>
  <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1954041519"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1954041519"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1954041519"></a>触发器所在表OID。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row45412413517"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1875420175514"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1875420175514"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1875420175514"></a>TG_RELNAME</p>
  </td>
  <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p205414755"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p205414755"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p205414755"></a>触发器所在表名（已废弃，现用TG_TABLE_NAME替代）。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row13249111110518"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p87540171655"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p87540171655"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p87540171655"></a>TG_TABLE_NAME</p>
  </td>
  <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p10250201116514"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p10250201116514"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p10250201116514"></a>触发器所在表名。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row162500111657"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1475451710513"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1475451710513"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p1475451710513"></a>TG_TABLE_SCHEMA</p>
  </td>
  <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p6250711553"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p6250711553"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p6250711553"></a>触发器所在表的SCHEMA信息。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row625014111253"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p117543174514"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p117543174514"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p117543174514"></a>TG_NARGS</p>
  </td>
  <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p192506111453"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p192506111453"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p192506111453"></a>触发器函数参数个数。</p>
  </td>
  </tr>
  <tr id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_row1764175611515"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p37540171551"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p37540171551"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p37540171551"></a>TG_ARGV[]</p>
  </td>
  <td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p676419562519"><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p676419562519"></a><a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_p676419562519"></a>触发器函数参数列表。</p>
  </td>
  </tr>
  </tbody>
  </table>


## 示例<a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_zh-cn_topic_0059778166_sfbca773f5bcd4799b3ea668b3eb074fa"></a>

```
--创建源表及触发表
openGauss=# CREATE TABLE test_trigger_src_tbl(id1 INT, id2 INT, id3 INT);
openGauss=# CREATE TABLE test_trigger_des_tbl(id1 INT, id2 INT, id3 INT);

--创建触发器函数
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

--创建INSERT触发器
openGauss=# CREATE TRIGGER insert_trigger
           BEFORE INSERT ON test_trigger_src_tbl
           FOR EACH ROW
           EXECUTE PROCEDURE tri_insert_func();

--创建UPDATE触发器
openGauss=# CREATE TRIGGER update_trigger
           AFTER UPDATE ON test_trigger_src_tbl  
           FOR EACH ROW
           EXECUTE PROCEDURE tri_update_func();

--创建DELETE触发器
openGauss=# CREATE TRIGGER delete_trigger
           BEFORE DELETE ON test_trigger_src_tbl
           FOR EACH ROW
           EXECUTE PROCEDURE tri_delete_func();

--执行INSERT触发事件并检查触发结果
openGauss=# INSERT INTO test_trigger_src_tbl VALUES(100,200,300);
openGauss=# SELECT * FROM test_trigger_src_tbl;
openGauss=# SELECT * FROM test_trigger_des_tbl;  //查看触发操作是否生效。

--执行UPDATE触发事件并检查触发结果
openGauss=# UPDATE test_trigger_src_tbl SET id3=400 WHERE id1=100;
openGauss=# SELECT * FROM test_trigger_src_tbl;
openGauss=# SELECT * FROM test_trigger_des_tbl;  //查看触发操作是否生效

--执行DELETE触发事件并检查触发结果
openGauss=# DELETE FROM test_trigger_src_tbl WHERE id1=100;
openGauss=# SELECT * FROM test_trigger_src_tbl;
openGauss=# SELECT * FROM test_trigger_des_tbl;  //查看触发操作是否生效

--修改触发器
openGauss=# ALTER TRIGGER delete_trigger ON test_trigger_src_tbl RENAME TO delete_trigger_renamed;

--禁用insert_trigger触发器
openGauss=# ALTER TABLE test_trigger_src_tbl DISABLE TRIGGER insert_trigger;  

--禁用当前表上所有触发器
openGauss=# ALTER TABLE test_trigger_src_tbl DISABLE TRIGGER ALL;  

--删除触发器
openGauss=# DROP TRIGGER insert_trigger ON test_trigger_src_tbl;
openGauss=# DROP TRIGGER update_trigger ON test_trigger_src_tbl;
openGauss=# DROP TRIGGER delete_trigger_renamed ON test_trigger_src_tbl;
--创建mysql兼容数据库
openGauss=# create database db_mysql dbcompatibility 'B';
--创建触发器定义用户
openGauss=# create user test_user password 'Gauss@123';
--创建原表及触发表
db_mysql=# create table test_mysql_trigger_src_tbl (id INT);
db_mysql=# create table test_mysql_trigger_des_tbl (id INT);
db_mysql=# create table animals (id INT, name CHAR(30));
db_mysql=# create table food (id INT, foodtype VARCHAR(32), remark VARCHAR(32), time_flag TIMESTAMP);
--创建MySQL兼容definer语法触发器
db_mysql=# create definer=test_user trigger trigger1
					after insert on test_mysql_trigger_src_tbl
					for each row
					begin 
    				 insert into test_mysql_trigger_des_tbl values(1);
					end;
					/
--创建MySQL兼容trigger_order语法触发器
db_mysql=# create trigger animal_trigger1
 					after insert on animals
					for each row
					begin
    				 insert into food(id, foodtype, remark, time_flag) values (1,'ice cream', 'sdsdsdsd', now());
					end;
					/
--创建MySQL兼容FOLLOWS触发器
db_mysql=# create trigger animal_trigger2
					after insert on animals
					for each row
					follows animal_trigger1
					begin
    				 insert into food(id, foodtype, remark, time_flag) values (2,'chocolate', 'sdsdsdsd', now());
					end;
					/
db_mysql=# create trigger animal_trigger3
          after insert on animals
          for each row
          follows animal_trigger1
          begin
              insert into food(id, foodtype, remark, time_flag) values (3,'cake', 'sdsdsdsd', now());
          end;
          /
db_mysql=# create trigger animal_trigger4
          after insert on animals
          for each row
          follows animal_trigger1
          begin
              insert into food(id, foodtype, remark, time_flag) values (4,'sausage', 'sdsdsdsd', now());
          end;
          /
--执行insert触发事件并检查触发结果
db_mysql=# insert into animals (id, name) values(1,'lion');
db_mysql=# select * from animals;
db_mysql=# select id, foodtype, remark from food;
--创建MySQL兼容PROCEDES触发器
db_mysql=# create trigger animal_trigger5
          after insert on animals
          for each row
          precedes animal_trigger3
          begin
              insert into food(id, foodtype, remark, time_flag) values (5,'milk', 'sdsds', now());
          end;
          /
db_mysql=# create trigger animal_trigger6
          after insert on animals
          for each row
          precedes animal_trigger2
          begin
              insert into food(id, foodtype, remark, time_flag) values (6,'strawberry', 'sdsds', now());
          end;
          /
--执行insert触发事件并检查触发结果
db_mysql=# insert into animals (id, name) values(2, 'dog');
db_mysql=# select * from animals;
db_mysql=# select id, foodtype, remark from food;
--创建MySQL兼容if not exists语法触发器
db_mysql=# create trigger if not exists animal_trigger1
          after insert on animals
          for each row
          begin
              insert into food(id, foodtype, remark, time_flag) values (1,'ice cream', 'sdsdsdsd', now());
          end;
          /
--mysql兼容删除触发器语法
db_mysql=# drop trigger animal_trigger1;
db_mysql=# drop trigger if exists animal_trigger1;
```

## 相关链接<a name="zh-cn_topic_0283137165_zh-cn_topic_0237122123_zh-cn_topic_0059778166_sf40b399700a74bd7b2d37e445d057f6e"></a>

[ALTER TRIGGER](ALTER-TRIGGER.md)，[DROP TRIGGER](DROP-TRIGGER.md)，[ALTER TABLE](ALTER-TABLE.md)

