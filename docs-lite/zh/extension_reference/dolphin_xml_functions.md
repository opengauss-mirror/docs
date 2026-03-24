# XML函数

## 新增xml函数

- extractvalue(xml_frag, xpath_expr)

  描述：提取返回XPath对应的XML字符串的值，输入两个参数，XML值参数xml_frag和xpath表达式xpath_expr，输出一个 TEXT 字符串。

  返回类型：text

  示例：

  ```sql
  opengauss=# select extractValue('<a aa1="aa1" aa2="aa2">a1<b ba1="ba1">b1<c>c1</c>b2</b>a2</a>','/a');
    extractvalue 
  --------------
   a1 a2
  (1 row)
  ```

- updatexml(xml_target, xpath_expr, new_xml)

  描述：更新XML表达式值，返回替换更新后的xml表达式，xml输入三个参数，替换第一个XML值入参xml_target的部分或全部内容为第三个入参new_xml，替换部分或全部取决于第二个入参xpath_expr，返回替换后的完整xml。如果xpath_expr在xml_target中没有匹配到，则直接返回原xml_target内容，如果三个入参中任何一个是NULL，则返回结果为空。

  返回类型：text

  示例：

  ```sql
  opengauss=# select UpdateXML('<a>a1<b>b1<c>c1</c>b2</b>a2</a>','/a/b/c','+++++++++');
    updatexml            
  ---------------------------------
   <a>a1<b>b1+++++++++b2</b>a2</a>
  (1 row)

  opengauss=# select UpdateXML('<a>a1<b>b1<c>c1</c>b2</b>a2</a>','/a','+++++++++');
   updatexml
  -----------
   +++++++++
  (1 row)

  opengauss=# select UpdateXML('<a>a1<b>b1<c>c1</c>b2</b>a2</a>','/a/d','+++++++++');
    updatexml
  ---------------------------------
   <a>a1<b>b1<c>c1</c>b2</b>a2</a>
  (1 row)

  opengauss=# select UpdateXML('<a>a1<b>b1<c>c1</c>b2</b>a2</a>',NULL,'+++++++++');
   updatexml
  -----------
  
  (1 row)
  ```

## 注意事项

- 1、path_expr的解析支持函数

- （1）节点集函数

- last()

  示例：
  
  ```sql
  select extractvalue('<a>A<b>B1</b><b>B2</b></a>','/a/b[last()]');
   extractvalue
  --------------
   B2
  (1 row)
  
  select extractvalue('<a>A<b>B1</b><b>B2</b></a>','/a/b[last()-1]');
   extractvalue
  --------------
   B1
  (1 row)
  
  select extractvalue('<a>A<b>B1</b><b>B2</b></a>','/a/b[last()=1]');
   extractvalue
  --------------
  
  (1 row)
  
  select extractvalue('<a>A<b>B1</b><b>B2</b></a>','/a/b[last()=2]');
   extractvalue
  --------------
   B1 B2
  (1 row)
  ```

- position()

  示例：
  
  ```sql
  select extractvalue('<a>A<b>B1</b><b>B2</b></a>','/a/b[position()]');
   extractvalue
  --------------
   B1 B2
  (1 row)
  ```

- count()

  示例：
  
  ```sql
  select extractValue('<a>a<b>a1<c>c1</c></b><b>a2</b></a>','/a/b[count(c)=0]');
   extractvalue
  --------------
   a2
  (1 row)
  
  select extractValue('<a>a<b>a1<c>c1</c></b><b>a2</b></a>','/a/b[count(c)=1]');
   extractvalue
  --------------
   a1
  (1 row)
  ```

- （2）字符串函数
- contains(string, string)

  示例：

  ```sql
  select extractValue('<a>ab</a>','/a[contains("abc","b")]');
   extractvalue
  --------------
   ab
  (1 row)
  
  select extractValue('<a>ab</a>','/a[contains(.,"a")]');
   extractvalue
  --------------
   ab
  (1 row)
  
  select extractValue('<a>ab</a>','/a[contains(.,"b")]');
   extractvalue
  --------------
   ab
  (1 row)
  
  select extractValue('<a>ab</a>','/a[contains(.,"c")]');
   extractvalue
  --------------
  
  (1 row)
  ```

- substring(string, number, number)

  示例：
  
  ```sql
  select extractValue('<a b="123">ab</a>', '/a/@b[substring(.,1,1)="1"]');
   extractvalue
  --------------
   123
  (1 row)
  
  select extractValue('<a b="123">ab</a>', '/a/@b[substring(.,2,1)="1"]');
   extractvalue
  --------------
  
  (1 row)
  
  select extractValue('<a b="123">ab</a>', '/a/@b[substring(.,2,1)="2"]');
   extractvalue
  --------------
   123
  (1 row)
  ```

- string-length(string)

  示例：
  
  ```sql
  select extractValue('<a><b>b1</b><b>b2</b></a>', '/a/b[string-length("x")=1]');
   extractvalue
  --------------
   b1 b2
  (1 row)
  
  select extractValue('<a><b>b1</b><b>b2</b></a>', '/a/b[string-length("xx")=2]');
   extractvalue
  --------------
   b1 b2
  (1 row)
  ```

- （3）布尔函数

  示例：
  
  - and
  
  ```sql
  select extractValue('<a>a</a>', '/a[true() and true()]');
   extractvalue
  --------------
   a
  (1 row)
  
  select extractValue('<a>a</a>', '/a[true() and false()]');
   extractvalue
  --------------
  
  (1 row)
  ```

- or
  ```sql
  select extractValue('<a>a</a>', '/a[true() or true()]');
   extractvalue
  --------------
   a
  (1 row)
  
  select extractValue('<a>a</a>', '/a[true() or false()]');
   extractvalue
  --------------
   a
  (1 row)
  ```

- not


- true()
  ```sql
  select extractValue('<a>a</a>', '/a[not(false())]');
   extractvalue
  --------------
   a
  (1 row)
  
  select extractValue('<a>a</a>', '/a[not(true())]');
   extractvalue
  --------------
  
  (1 row)
  ```

- false()
  ```sql
  select extractValue('<a>a</a>', '/a[false()and false()]');
   extractvalue
  --------------
  
  (1 row)
  
  select extractValue('<a>a</a>', '/a[false()and true()]');
   extractvalue
  --------------
  
  (1 row)
  ```

- （4）数函数

  示例：

- sum()
  ```sql
  select extractValue('<a>a1<b ba1="1" ba2="2">b1</b>4</a>','/a/b[sum(@ba1)=1]');
  ```
- floor(number)
  ```sql
  select extractValue('<a>a</a>', '/a[floor(3.1)=3]');
   extractvalue
  --------------
   a
  (1 row)
  
  select extractValue('<a>a</a>', '/a[round(3.1)=3]');
   extractvalue
  --------------
   a
  (1 row)
  
  select extractValue('<a>a</a>', '/a[round(3.8)=4]');
   extractvalue
  --------------
   a
  (1 row)
  ```

- ceiling(number)
  ```sql
  select extractValue('<a>a</a>', '/a[ceiling(3.1)=4]');
   extractvalue
  --------------
   a
  (1 row)
  ```

- round(number)
  ```sql
  select extractValue('<a>a</a>', '/a[round(3.1)=3]');
   extractvalue
  --------------
   a
  (1 row)
  
  select extractValue('<a>a</a>', '/a[round(3.8)=4]');
   extractvalue
  --------------
   a
  (1 row)
  ```

- 2、元素名重复场景不符合xml格式标准直接报错

  执行SQL:

  `select extractValue('<a><b x="xb1" x="xb2"/><c x="xc1" x="xc2"/></a>','/a//@x');`

  返回结果如下:

  ERROR:  Failed to parse XML
  CONTEXT:  referenced column: extractvalue

- 3、入参长度限制

  入参长度限制为最大`100*1024*1024`字节即100M。


## xml入参标准 遵循libxml2库标准

- 1、文档结构要求

- （1）有且仅有一个根元素。

  正确格式示例：

  `<root><a>text</a></root>`

  错误格式示例： 多个根元素

  `<a>text</a><b>text</b>`

- （2）非空元素必须有匹配的开始标签和结束标签。

  正确格式示例：

   `<title>Hello World</title>`

  错误格式示例： 标签未闭合。

  `<title>Hello World`

- （3）空元素必须以自闭合标签或开始/结束标签对的形式正确闭合。

  正确格式示例：

  `<br/> 或 <br></br>`

  错误格式示例： 

  在严格模式下使用 HTML 式的自闭合标签（libxml2 会报错）

  `<br>`

- （4）所有元素必须正确嵌套，子元素必须在父元素结束前完全闭合。

  正确格式示例：

  `<i><b>text</b></i>`

  错误格式示例： 标签交叉嵌套。

  `<i><b>text</i></b>`

- 2、语法与字符要求

- （1）标签名只能以字母、下划线或冒号开头，后续字符可包含字母、数字、连字符、下划线和冒号

  正确格式示例：

  `<book>, <_item>, <ns:title>`

  错误格式示例： 以数字开头或包含非法字符

  `<1tag>, <tag!>`

- （2）属性值必须被单引号或双引号完整包围

  正确格式示例：

  `<div id="main"> 或 <div id='main'>`

  错误格式示例： 属性值无引号。

  `<div id=main>`

- （3）预定义的 5 个特殊字符必须使用实体引用进行转义

  正确格式示例：

  `AT&amp;T， x &lt; 5`

  错误格式示例： 

  直接使用未转义的 & 或 < 字符

  `AT&T， x < 5`

- （4）注释内容不能包含双连字符 --

  正确格式示例：

  <!-- 这是一条注释 -->

  错误格式示例： 注释内部包含 --

  <!-- 错误--注释 -->

- （5）处理指令必须有正确的 `<?target data?>` 格式

  正确格式示例：

  `<?xml-stylesheet type="text/css" href="style.css"?>`

  错误格式示例： 缺少结束的 ?>

  `<?xml-stylesheet type="text/css" href="style.css"`

- 3、命名空间要求

- （1）使用的任何命名空间前缀必须在当前或其父元素作用域内声明。

  正确格式示例：

  `<ns:book xmlns:ns="http://example.com/ns"></ns:book>`

  错误格式示例： 使用了未声明的前缀。

  `<ns:book></ns:book>`

- （2）声明命名空间的 URI 不能是空字符串。

  正确格式示例：

  xmlns:ns="http://example.com"

  错误格式示例： 使用空字符串作为 URI

  xmlns:ns=""

- 4、其他重要约束

- （1）同一个元素内不能有两个名称相同的属性

  正确格式示例：

  `<src="test1" alt="test2"/>`

  错误格式示例： 重复定义了 src 属性

  `<src="test1" src="test2"/>`


- （2）大小写敏感：

  XML 标签和属性名是大小写敏感的，`<Book></Book>` 与 `<book></book>` 被视为不同元素。

## 参考资料

- 1、XML Path Language (XPath)官方说明地址

  `https://www.w3.org/TR/xpath-10/`

