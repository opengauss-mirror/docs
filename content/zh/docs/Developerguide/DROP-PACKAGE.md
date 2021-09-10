# DROP PACKAGE<a name="ZH-CN_TOPIC_0000001114052560"></a>

## 功能描述<a name="section37715281291"></a>

删除已存在的PACKAGE或者PACKAGE BODY。

## 注意事项<a name="section11374103816919"></a>

删除PACKAGE BODY后，PACKAGE内的存储过程及函数会同时失效。

## 语法格式<a name="section1193316471794"></a>

```
DROP PACKAGE [ IF EXISTS ] package_name;
DROP PACKAGE BODY [ IF EXISTS ] package_name;
```

