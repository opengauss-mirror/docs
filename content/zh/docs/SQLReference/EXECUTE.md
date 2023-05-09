# EXECUTE

## 功能描述<a name="zh-cn_topic_0283137468_zh-cn_topic_0237122161_zh-cn_topic_0059777447_s984b3ec2b84d48bb843629462288417b"></a>

执行一个前面准备好的预备语句。因为一个预备语句只在会话的生命期里存在，那么预备语句必须是在当前会话的前些时候用PREPARE语句创建的。

## 注意事项<a name="zh-cn_topic_0283137468_zh-cn_topic_0237122161_zh-cn_topic_0059777447_s3a6fd145e83b4e61a22dabdcf32ac282"></a>

如果创建预备语句的PREPARE语句声明了一些参数，那么传递给EXECUTE语句的必须是一个兼容的参数集，否则就会生成一个错误。

## 语法格式<a name="zh-cn_topic_0283137468_zh-cn_topic_0237122161_zh-cn_topic_0059777447_sbe280a5c331e4b75969129444d341882"></a>

```
EXECUTE name [ ( parameter [, ...] ) ];
```

## 参数说明<a name="zh-cn_topic_0283137468_zh-cn_topic_0237122161_zh-cn_topic_0059777447_sf2fd7956e26c49a8ae566c80a0e8e1c0"></a>

-   **name**

    要执行的预备语句的名称。

-   **parameter**

    给预备语句的一个参数的具体数值。它必须是一个和生成与创建这个预备语句时指定参数的数据类型相兼容的值的表达式。


## 示例<a name="zh-cn_topic_0283137468_zh-cn_topic_0237122161_zh-cn_topic_0059777447_s8a46083a59d940c3aaa2535b2f783645"></a>

```
--创建表reason。
openGauss=# CREATE TABLE tpcds.reason ( 
    CD_DEMO_SK          INTEGER          NOT NULL,
    CD_GENDER           character(16)            ,
    CD_MARITAL_STATUS   character(100)
)
;

--插入数据。
openGauss=# INSERT INTO tpcds.reason VALUES(51, 'AAAAAAAADDAAAAAA', 'reason 51');

--创建表reason_t1。
openGauss=# CREATE TABLE tpcds.reason_t1 AS TABLE tpcds.reason;

--为一个INSERT语句创建一个预备语句然后执行它。
openGauss=# PREPARE insert_reason(integer,character(16),character(100)) AS INSERT INTO tpcds.reason_t1 VALUES($1,$2,$3);

openGauss=# EXECUTE insert_reason(52, 'AAAAAAAADDAAAAAA', 'reason 52'); 

--删除表reason和reason_t1。
openGauss=# DROP TABLE tpcds.reason;
openGauss=# DROP TABLE tpcds.reason_t1;
```

