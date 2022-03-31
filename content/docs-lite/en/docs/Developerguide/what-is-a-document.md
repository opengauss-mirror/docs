# What Is a Document?<a name="EN-US_TOPIC_0289900763"></a>

A document is the unit of searching in a full text search system; for example, a magazine article or email message. The text search engine must be able to parse documents and store associations of lexemes \(keywords\) with their parent document. Later, these associations are used to search for documents that contain query words.

For searches within openGauss, a document is normally a textual column within a row of a database table, or possibly a combination \(concatenation\) of such columns, perhaps stored in several tables or obtained dynamically. In other words, a document can be constructed from different parts for indexing and it might not be stored anywhere as a whole. Example:

```
openGauss=# SELECT d_dow || '-' || d_dom || '-' || d_fy_week_seq  AS identify_serials FROM tpcds.date_dim WHERE d_fy_week_seq = 1;
identify_serials 
------------------
 5-6-1
 0-8-1
 2-3-1
 3-4-1
 4-5-1
 1-2-1
 6-7-1
(7 rows) 
```

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>Actually, in these example queries,  **coalesce**  should be used to prevent a single  **NULL**  attribute from causing a  **NULL**  result for the whole document.

Another possibility is to store the documents as simple text files in the file system. In this case, the database can be used to store the full text index and to execute searches, and some unique identifier can be used to retrieve the document from the file system. However, retrieving files from outside the database requires system administrator permissions or special function support, so this is usually less convenient than keeping all the data inside the database. Also, keeping everything inside the database allows easy access to document metadata to assist in indexing and display. 

For text search purposes, each document must be reduced to the preprocessed  **tsvector**  format. Searching and relevance-based ranking are performed entirely on the  **tsvector**  representation of a document. The original text is retrieved only when the document has been selected for display to a user. We therefore often speak of the  **tsvector**  as being the document, but it is only a compact representation of the full document.

