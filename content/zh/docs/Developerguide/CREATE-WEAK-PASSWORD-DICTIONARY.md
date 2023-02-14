# CREATE WEAK PASSWORD DICTIONARY

## 功能描述<a name="zh-cn_topic_0283137390_zh-cn_topic_0237122128_zh-cn_topic_0059778820_sf3fcf0507ea74a0ba4c4b4cbf0a0a8ba"></a>

向gs\_global\_config表中插入一个或者多个弱口令。

## 注意事项<a name="zh-cn_topic_0283137390_zh-cn_topic_0237122128_zh-cn_topic_0059778820_s8f58e1ff1b9849b2845f196df6352f13"></a>

-   只有初始用户、系统管理员和安全管理员拥有权限执行本语法。
-   弱口令字典中的口令存放在gs\_global\_config系统表中。
-   弱口令字典默认为空，用户通过本语法可以新增一条或多条弱口令。
-   当用户尝试通过本语法插入gs\_global\_config表中已存在的弱口令时，会只在表中保留一条该弱口令。

## 语法格式<a name="zh-cn_topic_0283137390_zh-cn_topic_0237122128_zh-cn_topic_0059778820_s77068dc6043742e086ef7bfea9075223"></a>

```
CREATE WEAK PASSWORD DICTIONARY
       [WITH VALUES] ( {'weak_password'} [, ...] );
```

## 参数说明<a name="zh-cn_topic_0283137390_zh-cn_topic_0237122128_zh-cn_topic_0059778820_safdd83ccfa754a3188de60962295adad"></a>

weak\_password

弱口令。

范围：字符串。

## 示例<a name="zh-cn_topic_0283137390_zh-cn_topic_0237122128_zh-cn_topic_0059778820_s5587dfafbfee44509237e4eb718ccc55"></a>

```
--向gs_global_config系统表中插入单个弱口令。
openGauss=# CREATE WEAK PASSWORD DICTIONARY WITH VALUES ('password1');

--向gs_global_config系统表中插入多个弱口令。
openGauss=# CREATE WEAK PASSWORD DICTIONARY WITH VALUES ('password2'),('password3');

--清空gs_global_config系统表中所有弱口令。
openGauss=# DROP WEAK PASSWORD DICTIONARY;

--查看现有弱口令。
openGauss=# SELECT * FROM gs_global_config WHERE NAME LIKE 'weak_password';
```

## 相关链接<a name="zh-cn_topic_0283137390_zh-cn_topic_0237122128_zh-cn_topic_0059778820_sb9bc0f8b2b464231a9dc551fa79f0485"></a>

[DROP WEAK PASSWORD DICTIONARY](DROP-WEAK-PASSWORD-DICTIONARY.md)
