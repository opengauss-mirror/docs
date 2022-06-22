# 搜索表<a name="ZH-CN_TOPIC_0289899842"></a>

在不使用索引的情况下也可以进行全文检索。

-   一个简单查询：将body字段中包含america的每一行打印出来。

    ```
    openGauss=# DROP SCHEMA IF EXISTS tsearch CASCADE;
    
    openGauss=# CREATE SCHEMA tsearch;
    
    openGauss=# CREATE TABLE tsearch.pgweb(id int, body text, title text, last_mod_date date);
    
    openGauss=# INSERT INTO tsearch.pgweb VALUES(1, 'China, officially the People''s Republic of China (PRC), located in Asia, is the world''s most populous state.', 'China', '2010-1-1');
    
    openGauss=# INSERT INTO tsearch.pgweb VALUES(2, 'America is a rock band, formed in England in 1970 by multi-instrumentalists Dewey Bunnell, Dan Peek, and Gerry Beckley.', 'America', '2010-1-1');
    
    openGauss=# INSERT INTO tsearch.pgweb VALUES(3, 'England is a country that is part of the United Kingdom. It shares land borders with Scotland to the north and Wales to the west.', 'England', '2010-1-1');
    
    openGauss=# INSERT INTO tsearch.pgweb VALUES(4, 'Australia, officially the Commonwealth of Australia, is a country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.', 'Australia', '2010-1-1');
    
    openGauss=# INSERT INTO tsearch.pgweb VALUES(6, 'Japan is an island country in East Asia.', 'Japan', '2010-1-1');
    
    openGauss=# INSERT INTO tsearch.pgweb VALUES(7, 'Germany, officially the Federal Republic of Germany, is a sovereign state and federal parliamentary republic in central-western Europe.', 'Germany', '2010-1-1');
    
    openGauss=# INSERT INTO tsearch.pgweb VALUES(8, 'France, is a sovereign state comprising territory in western Europe and several overseas regions and territories.', 'France', '2010-1-1');
    
    openGauss=# INSERT INTO tsearch.pgweb VALUES(9, 'Italy officially the Italian Republic, is a unitary parliamentary republic in Europe.', 'Italy', '2010-1-1');
    
    openGauss=# INSERT INTO tsearch.pgweb VALUES(10, 'India, officially the Republic of India, is a country in South Asia.', 'India', '2010-1-1');
    
    openGauss=# INSERT INTO tsearch.pgweb VALUES(11, 'Brazil, officially the Federative Republic of Brazil, is the largest country in both South America and Latin America.', 'Brazil', '2010-1-1');
    
    openGauss=# INSERT INTO tsearch.pgweb VALUES(12, 'Canada is a country in the northern half of North America.', 'Canada', '2010-1-1');
    
    openGauss=# INSERT INTO tsearch.pgweb VALUES(13, 'Mexico, officially the United Mexican States, is a federal republic in the southern part of North America.', 'Mexico', '2010-1-1');
    
    openGauss=# SELECT id, body, title FROM tsearch.pgweb WHERE to_tsvector('english', body) @@ to_tsquery('english', 'america');
     id |                                                          body                                                           |  title  
    ----+-------------------------------------------------------------------------------------------------------------------------+---------
      2 | America is a rock band, formed in England in 1970 by multi-instrumentalists Dewey Bunnell, Dan Peek, and Gerry Beckley. | America
     12 | Canada is a country in the northern half of North America.                                                              | Canada
     13 | Mexico, officially the United Mexican States, is a federal republic in the southern part of North America.              | Mexico
     11 | Brazil, officially the Federative Republic of Brazil, is the largest country in both South America and Latin America.   | Brazil
    (4 rows)
    ```
    
    像America这样的相关词也会被找到，因为这些词都被处理成了相同标准的词条。

    上面的查询指定english配置来解析和规范化字符串。当然也可以省略此配置，通过default\_text\_search\_config进行配置设置：

    ```
openGauss=# SHOW default_text_search_config;
     default_text_search_config 
    ----------------------------
     pg_catalog.english
    (1 row)
    
    openGauss=# SELECT id, body, title FROM tsearch.pgweb WHERE to_tsvector(body) @@ to_tsquery('america');
     id |                                                          body                                                           |  title  
    ----+-------------------------------------------------------------------------------------------------------------------------+---------
     11 | Brazil, officially the Federative Republic of Brazil, is the largest country in both South America and Latin America.   | Brazil
      2 | America is a rock band, formed in England in 1970 by multi-instrumentalists Dewey Bunnell, Dan Peek, and Gerry Beckley. | America
     12 | Canada is a country in the northern half of North America.                                                              | Canada
     13 | Mexico, officially the United Mexican States, is a federal republic in the southern part of North America.              | Mexico
    (4 rows)
    ```
    
-   一个复杂查询：检索出在title或者body字段中包含north和america的最近10篇文档：

    ```
    openGauss=# SELECT title FROM tsearch.pgweb WHERE to_tsvector(title || ' ' || body) @@ to_tsquery('north & america') ORDER BY last_mod_date DESC LIMIT 10;
     title  
    --------
     Mexico
     Canada
    (2 rows)
    ```

    为了清晰，举例中没有调用coalesce函数在两个字段中查找包含NULL的行。

    以上例子均在没有索引的情况下进行查询。对于大多数应用程序来说，这个方法很慢。因此除了偶尔的特定搜索，文本搜索在实际使用中通常需要创建索引。


