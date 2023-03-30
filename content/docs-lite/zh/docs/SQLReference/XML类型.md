# XML类型<a name="ZH-CN_TOPIC_0289900228"></a>

>![](public_sys-resources/icon-note.gif) **说明：** 
>轻量版场景下，openGauss默认不支持XML类型。

openGauss支持XML类型，使用示例如下。

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

>![](public_sys-resources/icon-note.gif) **说明：** 
>
>-   该功能默认未开启，如需使用，需要修改openGauss-server源码中的cmake/src/build_options.cmake文件，将143行set(USE_LIBXML OFF)去掉，重新使用build/script中cmake_package_mini.sh脚本编译数据库；详细使用指导见企业版。

