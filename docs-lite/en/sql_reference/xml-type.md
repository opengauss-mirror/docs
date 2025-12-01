# XML Type<a name="EN-US_TOPIC_0289900228"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In the Lite scenario, openGauss does not support the XML type.

openGauss supports the XML types. The following is an example:

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
openGauss= SELECT xmlconcat('', NULL, ''); 
xmlconcat
(1 row)
openGauss= SELECT xmlconcat('', NULL, ''); 
xmlconcat
(1 row)
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   This function is not enabled by default. To use it, you need to modify the cmake/src/build in the openGauss-server source code build_options. cmake file, remove 143 line set (USE_LIBXML OFF), and reuse cmake in build/script/package_mini.sh script compiles the database; See the enterprise version for detailed instructions.