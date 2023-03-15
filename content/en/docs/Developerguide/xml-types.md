# XML Types<a name="EN-US_TOPIC_0000001426952708">

The following functions are inherited from the open source PG9.2.

-   xmlparse ( { DOCUMENT | CONTENT } value)

    Description: Use the function xmlparse to generate xml-type values from character data.

	Parameter: data type is text

	Return value type: xml

	Example:

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


-   xmlserialize( { DOCUMENT | CONTENT } value AS type )

	Description: Use the function xmlserialize to generate a string from xml.

	Parameter: The type can be character, character varying or text or a variant of one of them.

	Return value type: xml

	Example:

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

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   When a string value is converted to an xml type without XMLPARSE or XMLSERIALIZE, the selection of DOCUMENT and CONTENT is determined by the "XML option" session configuration parameter, which can be set by standard commands:
    >    ```
    >    SET XML OPTION { DOCUMENT | CONTENT };
    >    ```
    >    Or use a similar syntax to set:
    >    ```
    >    SET xmloption TO { DOCUMENT | CONTENT };
    >    ```

-   xmlcomment(text)

    Description: Creates an XML value and contains an XML comment with the specified text as the content. The text does not contain the "--" character and does not exist at the end of the "-" character. It conforms to the format requirements of XML comments. And when the parameter is empty, the result is also empty.

	Parameter: data type is text.

	Return value type: xml

	Example:

    ```
    openGauss=# SELECT xmlcomment('hello');
      xmlcomment
    --------------
     <!--hello-->
    ```

-   xmlconcat(xml[, ...])

    Description: concatenates a list consisting of a single XML value into a single value, which contains an XML content fragment. The null value will be ignored, and the result will be null only when all parameters are null.

	Parameter: data type is xml.

	Return value type: xml

	Example:

    ```
    openGauss=# SELECT xmlconcat('<abc/>', '<bar>foo</bar>');
          xmlconcat
    ----------------------
     <abc/><bar>foo</bar>
    ```

-   xmlelement(name name [, xmlattributes(value [AS attname] [, ... ])] [, content, ...])

    Description: Generates an XML element with the given name, attribute, and content.

	Return value type: xml

	Example:

    ```
    openGauss=# SELECT xmlelement(name foo);
     xmlelement
    ------------
     <foo/>
    ```

-   xmlforest(content [AS name] [, ...])

    Description: Generates an XML sequence of elements with a given name and content.

	Return value type: xml

	Example:

    ```
    openGauss=# SELECT xmlforest('abc' AS foo, 123 AS bar);
              xmlforest
    ------------------------------
     <foo>abc</foo><bar>123</bar>
    ```

-   xmlpi(name target [, content])

    Description: Creates an XML processing instruction. If the content is not empty, the content cannot contain character sequences.

	Return value type: xml

	Example:

    ```
    openGauss=# SELECT xmlpi(name php, 'echo "hello world";');
                xmlpi
    -----------------------------
     <?php echo "hello world";?>
    ```

-   xmlroot(xml, version text | no value [, standalone yes|no|no value])

    Description: Modify the attribute of the root node of an XML value. If a version is specified, it will replace the value in the version declaration of the root node. If an independent setting is specified, it will replace the value in the independent declaration of the root node.

	Example:

    ```
    openGauss=# SELECT xmlroot('<?xml version="1.1"?><content>abc</content>',version '1.0', standalone yes);
                    xmlroot
    ----------------------------------------
     <?xml version="1.0" standalone="yes"?>
     <content>abc</content>
    ```

-   xmlagg(xml)

    Description: This function is an aggregate function. It concatenates the input values of aggregate function calls and supports cross-row concatenation.

	Parameter: xml

	Return value type: xml

	Example:

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

-   xmlexists(text passing [BY REF] xml [BY REF])

    Description: evaluate an XPath 1.0 expression (the first parameter ), and use the passed XML value as its context item. If the evaluation result produces an empty node set, the function returns false. If it produces any other value, it returns true. If any parameter is null, the function returns null. The non-null value passed as a context item must be an XML document, not a content fragment or any non-XML value.

	Parameter: xml

	Return value type: bool

	Example:

    ```
    openGauss=# SELECT xmlexists('//town[text() = ''Toronto'']' PASSING BY REF '<towns><town>Toronto</town><town>Ottawa</town></towns>');
     xmlexists
    ------------
     t
    (1 row)
    ```

-   xml_is_well_formed(text)

    Description: Check whether the text is in the correct XML type format and the return value is of Boolean type.

	Parameter: text

	Return value type: bool

	Example:

    ```
    openGauss=# SELECT xml_is_well_formed('<>');
     xml_is_well_formed 
    --------------------
     f
    (1 row)
    ```

-   xml_is_well_formed_document(text)

    Description: Check whether the text is in the correct XML type format and the return value is of Boolean type.

	Parameter: text

	Return value type: bool

	Example:

    ```
    openGauss=# SELECT xml_is_well_formed_document('<pg:foo xmlns:pg="http://postgresql.org/stuff">bar</pg:foo>');
     xml_is_well_formed_document 
    -----------------------------
     t
    (1 row)
    ```

-   xml_is_well_formed_content(text)

    Description: Check whether the text is in the correct XML type format and the return value is of Boolean type.

	Parameter: text

	Return value type: bool

	Example:

    ```
    openGauss=# select xml_is_well_formed_content('k');
     xml_is_well_formed_content
    ----------------------------
     t
    (1 row)
    ```

-   xpath(xpath, xml [, nsarray])

    Description: The XPath 1.0 expression xpath (a text value ) is calculated on the XML value xml. It returns an array of XML values, which corresponds to the node collection generated by the XPath expression. If the XPath expression returns a scalar value instead of a node collection, it will return an array of single elements.

	The second parameter must be a well-formed XML document. Specifically, it must have a single root node element.

	The third optional parameter of this function is an array of namespace mappings. This array should be a two-dimensional text array with the length of its second axis equal to 2 (that is, it should be an array of arrays, each of which is composed of exactly 2 elements). The first element of each array item is the name (alias) of the namespace, and the second element is the URI of the namespace. The aliases provided in this array are not required to be the same as those used in the XML document itself (in other words, aliases are local in the XML document and in the xpath function environment).

	Return value type: xml

	Example:

    ```
    openGauss=# SELECT xpath('/my:a/text()', '<my:a xmlns:my="http://example.com">test</my:a>',ARRAY[ARRAY['my', 'http://example.com']]);
     xpath  
    --------
     {test}
    (1 row)
    ```

-   xpath_exists(xpath, xml [, nsarray])

    Description: This function is a special form of xpath function. This function does not return a single XML value that satisfies the XPath 1.0 expression. It returns a Boolean value indicating whether the query is satisfied (specifically, whether it produces any value other than an empty node set ). This function is equivalent to the standard XMLEXISTS predicate, but it also provides support for a namespace mapping parameter.

	Return value type: bool

	Example:

    ```
    openGauss=# SELECT xpath_exists('/my:a/text()', '<my:a xmlns:my="http://example.com">test</my:a>',ARRAY[ARRAY['my', 'http://example.com']]);
     xpath_exists  
    --------------
     t
    (1 row)
    ```

-   query_to_xml(query text, nulls boolean, tableforest boolean, targetns text)

    Description: This function maps the contents of the relational table to XML values, which can be understood as the export function of XML.

	Return value type: xml

-   query_to_xmlschema(query text, nulls boolean, tableforest boolean, targetns text)

    Description: returns XML schema documents, which describe the mapping performed by the corresponding functions above.

-   query_to_xml_and_xmlschema(query text, nulls boolean, tableforest boolean, targetns text)

    Description: Generate XML data mapping and corresponding XML schema, and link the generated results together in a document.

-   cursor_to_xml(cursor refcursor, count int, nulls boolean,tableforest boolean, targetns text)

    Description: This function maps the contents of the relational table to XML values, which can be understood as the export function of XML.

	Return value type: xml
	
-   cursor_to_xmlschema(cursor refcursor, nulls boolean, tableforest boolean, targetns text)

    Description: returns XML schema documents, which describe the mapping performed by the corresponding functions above.

	Return value type: xml

-   schema_to_xml(schema name, nulls boolean, tableforest boolean, targetns text)

    Description: used to generate a similar mapping of the entire schema or the entire current database.

	Return value type: xml

-   schema_to_xmlschema(schema name, nulls boolean, tableforest boolean, targetns text)

    Description: used to generate a similar mapping of the entire schema or the entire current database.

-   schema_to_xml_and_xmlschema(schema name, nulls boolean, tableforest boolean, targetns text)

    Description: used to generate a similar mapping of the entire schema or the entire current database.

-   database_to_xml(nulls boolean, tableforest boolean, targetns text)

    Description: used to generate a similar mapping of the entire schema or the entire current database.

	Return value type: xml

-   database_to_xmlschema(nulls boolean, tableforest boolean, targetns text)

    Description: used to generate a similar mapping of the entire schema or the entire current database.

-   database_to_xml_and_xmlschema(nulls boolean, tableforest boolean, targetns text)

   Description: used to generate a similar mapping of the entire schema or the entire current database.

-   table_to_xml(tbl regclass, nulls boolean, tableforest boolean, targetns text)

    Description: This function maps the contents of the relational table to XML values, which can be understood as the export function of XML.

	Return value type: xml

-   table_to_xmlschema(tbl regclass, nulls boolean, tableforest boolean, targetns text)

    Description: returns XML schema documents, which describe the mapping performed by the corresponding functions above.
	
	Return value type: xml

-   table_to_xml_and_xmlschema(tbl regclass, nulls boolean, tableforest boolean, targetns text)

    Description: Generate XML data mapping and corresponding XML schema, and link the generated results together in a document.

    >![](public_sys-resources/icon-note.gif) **explain：** 
    >-   Xpath related functions only support xpath () and xpath_ Exists (). Because it uses the xpath language to query XML documents, these functions rely on the libxml2 library, which is only available in Xpath 1.0, so XPath is limited to 1.0.
    >-   Xquery, xml extension, and xslt are not supported.


