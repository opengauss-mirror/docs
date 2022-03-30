# XML类型<a name="ZH-CN_TOPIC_0289900228"></a>

>![](public_sys-resources/icon-note.gif) **说明：** 
>轻量版场景下，openGauss不支持使用XML类型。

openGauss支持XML类型，使用示例如下。

```
openGauss= CREATE TABLE xmltest ( id int, data xml ); 
openGauss= INSERT INTO xmltest VALUES (1, 'one');
openGauss= INSERT INTO xmltest VALUES (2, 'two'); 
openGauss= SELECT * FROM xmltest ORDER BY 1;
 id | data 
----+--------------------
1 | one 
2 | two 
(2 rows)
openGauss= SELECT xmlconcat('', NULL, ''); 
xmlconcat
(1 row)
openGauss= SELECT xmlconcat('', NULL, ''); 
xmlconcat
(1 row)
```

>![](public_sys-resources/icon-note.gif) **说明：** 
>-   该功能默认未开启，如需使用，需要重新使用build.sh脚本编译数据库，修改./configure配置参数，在其中加入--with-libxml参数。
>-   在执行编译之前，需要先执行yum install -y libxml2-devel，否则会有"configure: error: library 'xml2' \(version \>= 2.6.23\) is required for XML support"的报错。
>-   在执行编译之前，需要三方库二进制文件中dependeny操作系统环境/libobs/comm/lib加入到系统环境变量LD\_LIBRARY\_PATH中，否则会报错"libiconv.so不存在"。

