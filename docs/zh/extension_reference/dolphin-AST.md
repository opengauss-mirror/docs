# AST

## 功能描述<a name="zh-cn_topic_0283136750_zh-cn_topic_0237122053_zh-cn_topic_0059778271_s35ca23dd889c479da90f14c150c52f4b"></a>

openGauss语法树校验。

对AST语法后的语句是否支持生成openGauss语法树作判断。

## 注意事项<a name="zh-cn_topic_0283136750_zh-cn_topic_0237122053_zh-cn_topic_0059778271_sa23945b94808484d82b947d70ee28dc6"></a>

校验不通过时，会抛出语法解析相应错误。校验通过时不作任何回显操作。

## 语法格式<a name="zh-cn_topic_0283136750_zh-cn_topic_0237122053_zh-cn_topic_0059778271_s36354f226d754e5bb76ed954add5eea3"></a>

```
AST [ STMT ] ;
```

## 参数说明<a name="zh-cn_topic_0283136750_zh-cn_topic_0237122053_zh-cn_topic_0059778271_s740ca09be515490cbbfb36db4e2fb13e"></a>

- **STMT**

支持任意类型SQL语句、存储过程语句等。

## 示例<a name="zh-cn_topic_0283136750_zh-cn_topic_0237122053_zh-cn_topic_0059778271_saa47e844dd304bcc8a75123e66d1fa37"></a>

```
-- 建表语句校验
openGauss=# AST CREATE TABLE TEST(ID INT6);

-- 不支持语句校验
openGauss=# AST CREATE TABLE TEST;
ERRPR: syntax error at or near ";"
LINE 1:AST CREATE TABLE TEST;
                            ^ 
```
