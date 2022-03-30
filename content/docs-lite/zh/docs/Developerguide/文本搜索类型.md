# 文本搜索类型<a name="ZH-CN_TOPIC_0289900823"></a>

openGauss提供了两种数据类型用于支持全文检索。tsvector类型表示为文本搜索优化的文件格式，tsquery类型表示文本查询。

## tsvector<a name="zh-cn_topic_0283136875_zh-cn_topic_0237121956_zh-cn_topic_0059778491_sd7b46ba1616c4e2fac58b660666ca5ab"></a>

tsvector类型表示一个检索单元，通常是一个数据库表中一行的文本字段或者这些字段的组合，tsvector类型的值是一个标准词位的有序列表，标准词位就是把同一个词的变型体都标准化成相同的，在输入的同时会自动排序和消除重复。to\_tsvector函数通常用于解析和标准化文档字符串。

tsvector的值是唯一分词的分类列表，把一句话的词格式化为不同的词条，在进行分词处理的时候tsvector会自动去掉分词中重复的词条，按照一定的顺序录入。如：

```
openGauss=# SELECT 'a fat cat sat on a mat and ate a fat rat'::tsvector;
                      tsvector                      
----------------------------------------------------
 'a' 'and' 'ate' 'cat' 'fat' 'mat' 'on' 'rat' 'sat'
(1 row)
```

从上面的例子可以看出，通过tsvector把一个字符串按照空格进行分词，分词的顺序是按照长短和字母排序的。但是如果词条中需要包含空格或标点符号，可以用引号标记：

```
openGauss=# SELECT $$the lexeme '    ' contains spaces$$::tsvector;
                 tsvector                  
-------------------------------------------
 '    ' 'contains' 'lexeme' 'spaces' 'the'
(1 row)
```

如果在词条中使用引号，可以使用双$$符号作为标记：

```
openGauss=# SELECT $$the lexeme 'Joe''s' contains a quote$$::tsvector;
                    tsvector                    
------------------------------------------------
 'Joe''s' 'a' 'contains' 'lexeme' 'quote' 'the'
(1 row)
```

词条位置常量也可以放到词汇中：

```
openGauss=# SELECT 'a:1 fat:2 cat:3 sat:4 on:5 a:6 mat:7 and:8 ate:9 a:10 fat:11 rat:12'::tsvector;
                                   tsvector                                    
-------------------------------------------------------------------------------
 'a':1,6,10 'and':8 'ate':9 'cat':3 'fat':2,11 'mat':7 'on':5 'rat':12 'sat':4
(1 row)
```

位置常量通常表示文档中源字的位置。位置信息可以用于进行排名。位置常量的范围是1到16383，最大值默认是16383。相同词的重复位会被忽略掉。

拥有位置的词汇甚至可以用一个权来标记，这个权可以是A、B、C或D。默认的是D，因此输出中不会出现：

```
openGauss=# SELECT 'a:1A fat:2B,4C cat:5D'::tsvector;
          tsvector          
----------------------------
 'a':1A 'cat':5 'fat':2B,4C
(1 row)
```

权可以用来反映文档结构，如：标记标题与主体文字的区别。全文检索排序函数可以为不同的权标记分配不同的优先级。

下面的示例是tsvector类型标准用法。如：

```
openGauss=# SELECT 'The Fat Rats'::tsvector;
      tsvector      
--------------------
 'Fat' 'Rats' 'The'
(1 row)
```

但是对于英文全文检索应用来说，上面的单词会被认为非规范化的，所以需要通过to\_tsvector函数对这些单词进行规范化处理：

```
openGauss=# SELECT to_tsvector('english', 'The Fat Rats');
   to_tsvector   
-----------------
 'fat':2 'rat':3
(1 row)
```

## tsquery<a name="zh-cn_topic_0283136875_zh-cn_topic_0237121956_zh-cn_topic_0059778491_sc32b10b58f6242499a8461a993703975"></a>

tsquery类型表示一个检索条件，存储用于检索的词汇，并且使用布尔操作符&（AND），|（OR）和!（NOT）来组合他们，括号用来强调操作符的分组。to\_tsquery函数及plainto\_tsquery函数会将单词转换为tsquery类型前进行规范化处理。

```
openGauss=# SELECT 'fat & rat'::tsquery;
    tsquery    
---------------
 'fat' & 'rat'
(1 row)

openGauss=# SELECT 'fat & (rat | cat)'::tsquery;
          tsquery          
---------------------------
 'fat' & ( 'rat' | 'cat' )
(1 row)

openGauss=# SELECT 'fat & rat & ! cat'::tsquery;
        tsquery         
------------------------
 'fat' & 'rat' & !'cat'
(1 row)
```

在没有括号的情况下，!（非）结合的最紧密，而&（和）结合的比|（或）紧密。

tsquery中的词汇可以用一个或多个权字母来标记，这些权字母限制这次词汇只能与带有匹配权的tsvector词汇进行匹配。

```
openGauss=# SELECT 'fat:ab & cat'::tsquery;
     tsquery      
------------------
 'fat':AB & 'cat'
(1 row)
```

同样，tsquery中的词汇可以用\*标记来指定前缀匹配：

```
openGauss=# SELECT 'super:*'::tsquery;
  tsquery  
-----------
 'super':*
(1 row)
```

这个查询可以匹配tsvector中以“super”开始的任意单词。

请注意，前缀首先被文本搜索分词器处理，这也就意味着下面的结果为真：

```
openGauss=# SELECT to_tsvector( 'postgraduate' ) @@ to_tsquery( 'postgres:*' ) AS RESULT;
  result  
----------
 t
(1 row)
```

因为postgres经过处理后得到postgr：

```
openGauss=# SELECT to_tsquery('postgres:*');
 to_tsquery 
------------
 'postgr':*
(1 row)
```

这样就匹配postgraduate了。

'Fat:ab & Cats'规范化转为tsquery类型结果如下：

```
openGauss=# SELECT to_tsquery('Fat:ab & Cats');
    to_tsquery    
------------------
 'fat':AB & 'cat'
(1 row)
```

