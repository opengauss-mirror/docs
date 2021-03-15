# XML类型
openGauss支持XML类型，使用示例如下：

```
CREATE TABLE xmltest (
    id int,
    data xml
);
INSERT INTO xmltest VALUES (1, '<value>one</value>');
INSERT INTO xmltest VALUES (2, '<value>two</value>');
SELECT * FROM xmltest ORDER BY 1;
 id |        data
\----+--------------------
  1 | <value>one</value>
  2 | <value>two</value>
(2 rows)

SELECT xmlconcat('<foo/>', NULL, '<?xml version="1.1" standalone="no"?><bar/>');

  xmlconcat
\--------------

 <foo/><bar/>
(1 row)

SELECT xmlconcat('<?xml version="1.1"?><foo/>', NULL, '<?xml version="1.1" standalone="no"?><bar/>');

             xmlconcat
\-----------------------------------

 <?xml version="1.1"?><foo/><bar/>
(1 row)
```

该功能默认未开启，如需使用，需要重新使用build.sh脚本编译数据库，修改./configure配置参数，在其中加入 --with-libxml 参数。

在执行编译之前，需要先执行yum install -y libxml2-devel，否则会有"configure: error: library 'xml2' (version >= 2.6.23) is required for XML support"的报错。

在执行编译之前，需要三方库二进制文件中dependeny/操作系统环境/libobs/comm/lib加入到系统环境变量LD_LIBRARY_PATH中，否则会报错"libiconv.so不存在"。