# XML类型<a name="ZH-CN_TOPIC_0289900228"></a>

XML数据类型可以被用来存储XML数据。它的内部格式和TEXT类型相同，它比直接在一个TEXT域中存储XML数据的优势在于：它会使用LIBXML2对于XML格式文本的处理能力，检查输入值的结构是不是符合XML标准，并且基于LIBXML2提供了支持函数用于在其上执行类型安全的操作。

XML类型可以存储格式良好的遵循XML标准定义的“文档”、以及“内容”片段，它是通过引用更宽泛的“DOCUMENT NODE” XQUERY和XPATH数据模型来定义的。大致上说，这意味着内容片段中可以有多于一个的顶层元素或字符节点。表达式XMLVALUE IS DOCUMENT可以被用来评估一个特定的XML值是一个完整文档或者仅仅是一个文档片段。

XML解析器把XML文档转换为XML DOM对象。DOM（DOCUMENT OBJECT MODEL 文档对象模型）定义了访问和操作文档的标准方法。XML DOM（XML DOCUMENT OBJECT MODEL）定义了访问和操作XML文档的标准方法。XML DOM把XML文档作为树结构来查看。所有元素可以通过DOM树来访问。可以修改或删除它们的内容，并创建新的元素。元素，它们的文本，以及它们的属性，都被认为是节点。

XML底层使用和text类型一样的数据结构进行存储，最大为1GB。

示例：

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

>![](public_sys-resources/icon-note.gif) **说明：** 
>-   XML类型不支持如下操作：
>    -   逻辑表达式and、or、not。
>    -   作为分区键、二级分区键、外键、主键、唯一约束。
>    -   XML相关的隐式类型转换（赋值时XML类型可隐式转换为字符类型）。
>    -   数组表达式、行表达式、子查询表达式[not]in/any/all。
>    -   XML类型字段上创建普通索引、unique索引、global索引、local索引、部分索引。
>    -   比较表达式>、<、>=、<=、=、<>、!=、^=、between and、is distinct from、is not distinct from、<=>。
>    -   条件表达式decode、nullif、greatest、least。
>    -   作为distinct/group by/order by 参数。
>    -   聚合函数sum、max、min、avg、listagg、corr、covar_pop、covar_samp、stddev、stddev_pop、stddev_samp、var_pop、var_samp、variance、bit_and、bit_or、bool_and、bool_or、every、regr_avgx、regr_avgy、regr_count、regr_intercept、regr_r2、regr_slope、regr_sxx、regr_sxy、regr_syy。
>    -   不支持ODBC相关绑定传参接口。
>-   XML类型支持如下操作：
>    -   物理备份恢复。
>    -   比较表达式is null、is not null。
>    -   条件表达式case、coalesce。
>    -   子查询表达式[not]exists。
>    -   全局临时表和本地临时表。
>    -   强制类型转换。
>    -   表达式索引。
>    -   XML类型的值是根据"xml option"会话配置参数决定的。
>    -   支持gs_dump导出和gs_restore导入操作。
>    -   并行查询，支持astore和ustore存储引擎。
>    -   作为自定义函数的入参，出参，自定义变量，返回值。
>    -   作为存储过程的入参，出参，自定义变量，返回值。支持自治事务的存储过程。
>    -   字符处理函数quote_literal(value anyelement)、quote_nullable(value anyelement)。
>    -   聚集函数count、array_agg、checksum（需显式转换为字符类型）、string_agg（需显式转换为字符类型）。
>    -   自定义类型中复合类型涉及XML type时的增删改查，且与普通表中的XML字段一样，需要按照XML的语法插入和修改。
>    -   支持JDBC和ODBC支持对XML数据类型操作，支持对该字段进行select，update，insert，delete，使用SQL语法输入XML值，使用ResultSet类的getSQLXML方法获取XML值。支持JDBC相关绑定传参接口、可使用PreparedStatement预处理语句接口中的setSQLXML方法、和ResultSet执行结果集接口中的getSQLXML(int columnIndex)方法。
>        调用流程：需要使用java.sql.SQLXML接口类构造XML对象，再设置指定的对象类型为Oid.XML，然后将类型ID和XML值发送到 服务端，从服务端获取到返回结果后，先调用ResultSet.getString，然后通过获取的字符串使用java.sql.SQLXML接口类构造XML对象，此时会再次检查内容是否符合XML标准格式。所以xml值也可以使用ResultSet.getString直接获取XML的字符串对象。

