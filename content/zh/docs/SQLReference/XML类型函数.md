# XML类型函数<a name="ZH-CN_TOPIC_0000001426952708"></a>

以下函数均继承自开源PG9.2。

-   xmlparse \( \{ DOCUMENT | CONTENT \} value\)

    描述：使用函数xmlparse, 来从字符数据产生xml类型的值。

    参数：数据类型为text

    返回值类型：xml

    示例：

    ```
    openGauss=# SELECT XMLPARSE (DOCUMENT '<?xml version="1.0"?><book><title>Manual</title><chapter>...</chapter></book>');
                          xmlparse                         
    ----------------------------------------------------------
     <book><title>Manual</title><chapter>...</chapter></book>
    (1 row)
    openGauss=# SELECT XMLPARSE (CONTENT 'abc<foo>bar</foo><bar>foo</bar>');
              xmlparse             
    ---------------------------------
     abc<foo>bar</foo><bar>foo</bar>
    (1 row)
    ```


-   xmlserialize\( \{ DOCUMENT | CONTENT \} value AS type \)

    描述：使用函数xmlserialize, 来从xml产生一个字符串。

    参数：类型可以是character，character varying或text或其中某个的变种。

    返回值类型：xml

    示例：

    ```
    openGauss=# SELECT XMLSERIALIZE(CONTENT 'good' AS CHAR(10));
     xmlserialize 
    --------------
     good
    (1 row)
    openGauss=# SELECT xmlserialize(DOCUMENT '<head>bad</head>' as text);
       xmlserialize   
    ------------------
     <head>bad</head>
    (1 row)
    ```

    >![](public_sys-resources/icon-note.png) **说明：** 
    >-   当一个字符串值在没有通过XMLPARSE或XMLSERIALIZE的情况下，与xml类型进行转换时，分别的选择DOCUMENT与CONTENT由"XML option" 会话配置参数决定，这个配置参数可以由标准命令来设置：
    >    ```
    >    SET XML OPTION { DOCUMENT | CONTENT };
    >    ```
    >    或使用类似的语法来设置：
    >    ```
    >    SET xmloption TO { DOCUMENT | CONTENT };
    >    ```

-   xmlcomment\(text\)

    描述：创建一个XML值，并且它包含一个用指定文本作为内容的XML注释。该文本不包含“--”字符且不存在是“-”字符的结尾、符合XML注释的格式要求。且当参数为空时、结果也为空。

    参数：数据类型为text。

    返回值类型：xml

    示例：

    ```
    openGauss=# SELECT xmlcomment('hello');
      xmlcomment
    --------------
     <!--hello-->
    ```

-   xmlconcat\(xml\[, ...\]\)

    描述：将由单个XML值组成的列表串接成一个单独的值，该值包含一个XML的内容片断。其中空值会被忽略，并且只有当所有参数都为空时结果才为空。

    参数：数据类型为xml。

    返回值类型：xml

    示例：

    ```
    openGauss=# SELECT xmlconcat('<abc/>', '<bar>foo</bar>');
          xmlconcat
    ----------------------
     <abc/><bar>foo</bar>
    ```

-   xmlelement\(name name \[, xmlattributes\(value \[AS attname\] \[, ... \]\)\] \[, content, ...\]\)

    描述：使用给定名称、属性和内容产生一个XML元素。

    返回值类型：xml

    示例：

    ```
    openGauss=# SELECT xmlelement(name foo);
     xmlelement
    ------------
     <foo/>
    ```

-   xmlforest\(content \[AS name\] \[, ...\]\)

    描述：使用给定名称和内容产生一个元素的XML序列。

    返回值类型：xml

    示例：

    ```
    openGauss=# SELECT xmlforest('abc' AS foo, 123 AS bar);
              xmlforest
    ------------------------------
     <foo>abc</foo><bar>123</bar>
    ```

-   xmlpi\(name target \[, content\]\)

    描述：创建一个XML处理指令。若内容不为空、则内容不能包含字符序列。

    返回值类型：xml

    示例：

    ```
    openGauss=# SELECT xmlpi(name php, 'echo "hello world";');
                xmlpi
    -----------------------------
     <?php echo "hello world";?>
    ```

-   xmlroot\(xml, version text | no value \[, standalone yes|no|no value\]\)

    描述：修改一个XML值的根结点的属性。如果指定了一个版本，它会替换根节点的版本声明中的值、如果指定了一个独立设置、它会替换根节点的独立声明中的值。

    示例：

    ```
    openGauss=# SELECT xmlroot('<?xml version="1.1"?><content>abc</content>',version '1.0', standalone yes);
                    xmlroot
    ----------------------------------------
     <?xml version="1.0" standalone="yes"?>
     <content>abc</content>
    ```

-   xmlagg\(xml\)

    描述：该函数是一个聚集函数、它将聚集函数调用的输入值串接起来，且支持跨行串接。

    参数：xml

    返回值类型：xml

    示例：

    ```
    openGauss=# CREATE TABLE xmltest (
                id int,
                data xml
               );
    openGauss=# INSERT INTO xmltest VALUES (1, '<value>one</value>');
    INSERT 0 1
    openGauss=# INSERT INTO xmltest VALUES (2, '<value>two</value>');
    INSERT 0 1
    openGauss=# SELECT xmlagg(data) FROM xmltest;
                    xmlagg                
    --------------------------------------
     <value>one</value><value>two</value>
    (1 row)
    ```

-   xmlexists\(text passing \[BY REF\] xml \[BY REF\]\)

    描述：评价一个XPath 1.0表达式\(第一个参数\)，以传递的XML值作为其上下文项。 如果评价的结果产生一个空节点集，该函数返回false，如果产生任何其他值，则返回true。 如果任何参数为空，则函数返回null。 作为上下文项传递的非空值必须是一个XML文档，而不是内容片段或任何非XML值。

    参数：xml

    返回值类型：bool

    示例：

    ```
    openGauss=# SELECT xmlexists('//town[text() = ''Toronto'']' PASSING BY REF '<towns><town>Toronto</town><town>Ottawa</town></towns>');
     xmlexists
    ------------
     t
    (1 row)
    ```

-   xml\_is\_well\_formed\(text\)

    描述：检查text是不是正确的XML类型格式、返回值为布尔类型。

    参数：text

    返回值类型：bool

    示例：

    ```
    openGauss=# SELECT xml_is_well_formed('<>');
     xml_is_well_formed 
    --------------------
     f
    (1 row)
    ```

-   xml\_is\_well\_formed\_document\(text\)

    描述：检查text是不是正确的XML类型格式、返回值为布尔类型。

    参数：text

    返回值类型：bool

    示例：

    ```
    openGauss=# SELECT xml_is_well_formed_document('<pg:foo xmlns:pg="http://postgresql.org/stuff">bar</pg:foo>');
     xml_is_well_formed_document 
    -----------------------------
     t
    (1 row)
    ```

-   xml\_is\_well\_formed\_content\(text\)

    描述：检查text是不是正确的XML类型格式、返回值为布尔类型。

    参数：text

    返回值类型：bool

    示例：

    ```
    openGauss=# select xml_is_well_formed_content('k');
     xml_is_well_formed_content
    ----------------------------
     t
    (1 row)
    ```

-   xpath\(xpath, xml \[, nsarray\]\)

    描述：在XML值xml上计算XPath 1.0表达式xpath \(a text value\)。它返回一个XML值的数组，该数组对应于该XPath表达式产生的结点集合。如果该XPath表达式返回一个标量值而不是一个结点集合，将会返回一个单一元素的数组。

    第二个参数必须是一个良构的XML文档。特殊地，它必须有一个单一根结点元素。

    该函数可选的第三个参数是一个名字空间映射的数组。这个数组应该是一个二维text数组，其第二轴长度等于2（即它应该是一个数组的数组，其中每一个都由刚好 2 个元素组成）。每个数组项的第一个元素是名字空间的名称（别名），第二个元素是名字空间的URI。并不要求在这个数组中提供的别名和在XML文档本身中使用的那些名字空间相同（换句话说，在XML文档中和在xpath函数环境中，别名都是本地的）。

    返回值类型：xml

    示例：

    ```
    openGauss=# SELECT xpath('/my:a/text()', '<my:a xmlns:my="http://example.com">test</my:a>',ARRAY[ARRAY['my', 'http://example.com']]);
     xpath  
    --------
     {test}
    (1 row)
    ```

-   xpath\_exists\(xpath, xml \[, nsarray\]\)

    描述：该函数是xpath函数的一种特殊形式。这个函数不是返回满足XPath 1.0表达式的单一XML值，它返回一个布尔值表示查询是否被满足\(具体来说，它是否产生了空节点集以外的任何值\)。这个函数等价于标准的XMLEXISTS谓词，不过它还提供了对一个名字空间映射参数的支持。

    返回值类型：bool

    示例：

    ```
    openGauss=# SELECT xpath_exists('/my:a/text()', '<my:a xmlns:my="http://example.com">test</my:a>',ARRAY[ARRAY['my', 'http://example.com']]);
     xpath_exists  
    --------------
     t
    (1 row)
    ```

-   query\_to\_xml\(query text, nulls boolean, tableforest boolean, targetns text\)

    描述：该函数将关系表的内容映射成 XML 值，可理解为XML的导出功能。

    返回值类型：xml

-   query\_to\_xmlschema\(query text, nulls boolean, tableforest boolean, targetns text\)

    描述：返回 XML 模式文档，这些文档描述上述对应函数所执行的映射。

-   query\_to\_xml\_and\_xmlschema\(query text, nulls boolean, tableforest boolean, targetns text\)

    描述：产生XML数据映射和对应的XML模式，并把产生的结果链接在一起放在一个文档中。

-   cursor\_to\_xml\(cursor refcursor, count int, nulls boolean,tableforest boolean, targetns text\)

    描述：该函数将关系表的内容映射成 XML 值，可理解为XML的导出功能。

    返回值类型：xml

-   cursor\_to\_xmlschema\(cursor refcursor, nulls boolean, tableforest boolean, targetns text\)

    描述：返回 XML 模式文档，这些文档描述上述对应函数所执行的映射。

    返回值类型：xml

-   schema\_to\_xml\(schema name, nulls boolean, tableforest boolean, targetns text\)

    描述：把模式中的表映射成XML值。

    返回值类型：xml

- schema\_to\_xmlschema\(schema name, nulls boolean, tableforest boolean, targetns text\)

  描述：把模式中的表映射成XML模式文档。

  返回值类型：xml

- schema\_to\_xml\_and\_xmlschema\(schema name, nulls boolean, tableforest boolean, targetns text\)

  描述：把模式中的表映射成XML值和模式文档。

  返回值类型：xml

- database\_to\_xml\(nulls boolean, tableforest boolean, targetns text\)

  描述：把数据库的表映射成XML值。

  返回值类型：xml

- database\_to\_xmlschema\(nulls boolean, tableforest boolean, targetns text\)

  描述：把数据库的表映射成XML模式文档。

  返回值类型：xml

- database\_to\_xml\_and\_xmlschema\(nulls boolean, tableforest boolean, targetns text\)

  描述：把数据库的表映射成XML值和模式文档。

  返回值类型：xml

-   table\_to\_xml\(tbl regclass, nulls boolean, tableforest boolean, targetns text\)

    描述：该函数将关系表的内容映射成 XML 值，可理解为XML的导出功能。

    返回值类型：xml

-   table\_to\_xmlschema\(tbl regclass, nulls boolean, tableforest boolean, targetns text\)

    描述：返回 XML 模式文档，这些文档描述上述对应函数所执行的映射。

    返回值类型：xml

-   table\_to\_xml\_and\_xmlschema\(tbl regclass, nulls boolean, tableforest boolean, targetns text\)

    描述：产生XML数据映射和对应的XML模式，并把产生的结果链接在一起放在一个文档中。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >-   xpath相关函数仅支持 xpath\(\) 和 xpath\_exists\(\)、由于其使用xpath语言查询XML文档，而这些函数都依赖于libxml2 库，且这个库仅在Xpath1.0提供、所以对XPath的限制为1.0。
    >-   不支持xquery、xml extension、xslt。


