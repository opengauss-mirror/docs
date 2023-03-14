# XML Type<a name="EN-US_TOPIC_0275402505"></a>

XML data types can be used to store XML data. Its internal format is the same as the TEXT type. Its advantages over storing XML data directly in a TEXT domain are that it will use the processing ability of LIBXML2 for XML formatted text, check whether the structure of the input value conforms to the XML standard, and provide support functions based on LIBXML2 to perform type-safe operations on it.

XML types can store well-formed "documents" and "content" fragments defined by XML standards. They are defined by referring to the broader "DOCUMENT NODE" XQUERY and XPATH data models. Basically, this means that there can be more than one top-level element or character node in the content fragment. The expression XMLVALUE IS DOCUMENT can be used to evaluate whether a specific XML value is a complete document or just a document fragment.

The XML parser converts XML documents into XML DOM objects. DOM (DOCUMENT OBJECT MODEL document object model) defines the standard methods for accessing and manipulating documents. XML DOM (XML DOCUMENT OBJECT MODEL) defines the standard methods for accessing and manipulating XML documents. The XML DOM views the XML document as a tree structure. All elements can be accessed through the DOM tree. You can modify or delete their contents and create new elements. Elements, their text, and their attributes are considered nodes.

The XML underlying uses the same data structure as the text type for storage, with a maximum of 1GB.

Example:

```
openGauss= CREATE TABLE xmltest (id int, data xml); 
openGauss= INSERT INTO xmltest VALUES (1, '<value>one</value>');
openGauss= INSERT INTO xmltest VALUES (2, '<value>two</value>');
openGauss= SELECT * FROM xmltest ORDER BY 1;
 id | data 
----+--------------------
1 | <value>one</value> 
2 | <value>two</value>  
(2 rows)
openGauss= SELECT xmlconcat(xmlcomment('hello'),
                            xmlelement(NAME qux, 'xml'),
                            xmlcomment('world'));
               xmlconcat                
----------------------------------------
 <!--hello--><qux>xml</qux><!--world-->
(1 row)
```

>![](public_sys-resources/icon-note.gif) **NOTE:p** 
>-   The following operations are not supported for XML types:
>    -   Logical expressions and, or, not.
>    -   As partition key, secondary partition key, foreign key, primary key and unique constraint.
>    -   XML-related implicit type conversion (XML type can be implicitly converted to character type during assignment).
>    -   Array expression, row expression, sub-query expression [not] in/any/all.
>    -   Create common indexes, unique indexes, global indexes, local indexes, and partial indexes on XML type fields.
>    -   Compare expressions>,<,>=,<=,=,<>,!=, ^= between and、is distinct from、is not distinct from、<=>。
>    -   Conditional expressions decode, nullif, greatest, least.
>    -   As the distinct/group by/order by parameter.
>    -   Aggregate functions sum, max, min, avg, listagg, corr, covar_pop、covar_samp、stddev、stddev_pop、stddev_samp、var_pop、var_samp、variance、bit_and、bit_or、bool_and、bool_or、every、regr_avgx、regr_avgy、regr_count、regr_intercept、regr_r2、regr_slope、regr_sxx、regr_sxy、regr_syy。
>    -   ODBC related binding parameter transfer interface is not supported.
>-   XML types support the following operations:
>    -   Physical backup recovery.
>    -   The comparison expression is null, is not null.
>    -   Conditional expressions case, coalesce.
>    -   Subquery expression [not] exists.
>    -   Global temporary tables and local temporary tables.
>    -   cast type.
>    -   Expression index.
>    -   The value of XML type is determined according to the "xml option" session configuration parameter.
>    -   Support gs_dump export and gs_restore import operation.
>    -   Parallel query, supporting astore and ustore storage engines.
>    -   As input parameter, output parameter, user-defined variable and return value of user-defined function.
>    -   As input parameter, output parameter, user-defined variable and return value of stored procedure. Stored procedures that support autonomous transactions.
>    -   Character processing function quote_literal(value anyelement)、quote_nullable(value anyelement)。
>    -   Aggregate functions count, array_agg, checksum (need to be explicitly converted to character type), string_agg (needs to be explicitly converted to character type).
>    -   The addition, deletion, modification and query of the compound type in the user-defined type when it involves the XML type, and the same as the XML field in the ordinary table, it needs to be inserted and modified according to the XML syntax.
>    -   Support JDBC and ODBC to operate on XML data types, select, update, insert, delete the fields, input XML values using SQL syntax, and obtain XML values using the getSQLXML method of the ResultSet class. It supports the JDBC-related binding parameter transfer interface, the setSQLXML method in the PreparedStatement preprocessing statement interface, and the getSQLXML (int columnIndex) method in the ResultSet execution result set interface.
>    -   Call process: You need to use the java.sql.SQLXML interface class to construct an XML object, then set the specified object type to Oid.XML, and then send the type ID and XML value to the server. After obtaining the returned result from the server, you first call ResultSet.getString, and then use the java.sql.SQLXML interface class to construct an XML object through the obtained character string. At this time, you will check again whether the content conforms to the XML standard format. Therefore, you can also use ResultSet. getString to directly obtain the XML string object.