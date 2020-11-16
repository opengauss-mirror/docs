# XML Type<a name="EN-US_TOPIC_0275402505"></a>

openGauss supports the XML type. The following is an example:

```
postgres= CREATE TABLE xmltest ( id int, data xml ); 
postgres= INSERT INTO xmltest VALUES (1, 'one');
postgres= INSERT INTO xmltest VALUES (2, 'two'); 
postgres= SELECT * FROM xmltest ORDER BY 1;
 id | data 
----+--------------------
1 | one 
2 | two 
(2 rows)
postgres= SELECT xmlconcat('', NULL, ''); 
xmlconcat
(1 row)
postgres= SELECT xmlconcat('', NULL, ''); 
xmlconcat
(1 row)
```

![](public_sys-resources/icon-note.gif) **NOTE:**   
-   This function is disabled by default. To use this function, you need to use the  **build.sh**  script to compile the database again and add the** --with-libxml**  parameter to the  **./configure**  configuration parameter.  
-   Before compilation, you need to run the  **yum install -y libxml2-devel**  command. Otherwise, the "configure: error: library 'xml2' \(version \>= 2.6.23\) is required for XML support" error will be reported.  
-   Before compilation, you need to add the  **dependency/**_operating system environment_**/libobs/comm/lib**  in the binary file of the third-party library to the system environment variable  _LD\_LIBRARY\_PATH_. Otherwise, an error message is displayed, indicating that  **libiconv.so**  does not exist.  

