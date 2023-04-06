# COMMENT<a name="ZH-CN_TOPIC_0289900191"></a>

## 功能描述<a name="zh-cn_topic_0283137624_zh-cn_topic_0237122093_zh-cn_topic_0059778518_se3f65a35f2604b18a7024290d26f80cf"></a>

定义或修改一个对象的注释。

## 注意事项<a name="zh-cn_topic_0283137624_zh-cn_topic_0237122093_zh-cn_topic_0059778518_s1a808d6187aa43c5bda33df14effd78f"></a>

-   每个对象只存储一条注释，因此要修改一个注释，对同一个对象发出一条新的COMMENT命令即可。要删除注释，在文本字符串的位置写上NULL即可。当删除对象时，注释自动被删除掉。
-   目前注释浏览没有安全机制：任何连接到某数据库上的用户都可以看到所有该数据库对象的注释。共享对象（比如数据库、角色、表空间）的注释是全局存储的，连接到任何数据库的任何用户都可以看到它们。因此，不要在注释里存放与安全有关的敏感信息。
-   对大多数对象，只有对象的所有者或者被授予了对象COMMENT权限的用户可以设置注释，系统管理员默认拥有该权限。
-   角色没有所有者，所以COMMENT ON ROLE命令仅可以由系统管理员对系统管理员角色执行，有CREATEROLE权限的角色也可以为非系统管理员角色设置注释。系统管理员可以对所有对象进行注释。

## 语法格式<a name="zh-cn_topic_0283137624_zh-cn_topic_0237122093_zh-cn_topic_0059778518_sc17f26ffc35449b285334777c0405013"></a>

```
COMMENT ON
{
  AGGREGATE agg_name (agg_type [, ...] ) |
  CAST (source_type AS target_type) |
  COLLATION object_name |
  COLUMN { table_name.column_name | view_name.column_name } |
  CONSTRAINT constraint_name ON table_name |
  CONVERSION object_name |
  DATABASE object_name |
  DOMAIN object_name |
  Extension object_name |
  FOREIGN DATA WRAPPER object_name |
  FOREIGN TABLE object_name |
  FUNCTION function_name ( [ {[ argname ] [ argmode ] argtype} [, ...] ] ) |
  INDEX object_name |
  LARGE OBJECT large_object_oid |
  OPERATOR operator_name (left_type, right_type) |
  OPERATOR CLASS object_name USING index_method |
  OPERATOR FAMILY object_name USING index_method |
  [ PROCEDURAL ] LANGUAGE object_name |
  ROLE object_name |
  SCHEMA object_name |
  SERVER object_name |
  TABLE object_name |
  TABLESPACE object_name |
  TEXT SEARCH CONFIGURATION object_name |
  TEXT SEARCH DICTIONARY object_name |
  TEXT SEARCH PARSER object_name |
  TEXT SEARCH TEMPLATE object_name |
  TYPE object_name |
  VIEW object_name |
  TRIGGER trigger_name ON table_name
}
   IS 'text';
```

## 参数说明<a name="zh-cn_topic_0283137624_zh-cn_topic_0237122093_zh-cn_topic_0059778518_s56dde1ab6b0149328413f05ffc3c73b8"></a>

-   **agg\_name**

    聚集函数的名称。

-   **agg\_type**

    聚集函数参数的类型。

-   **source\_type**

    类型转换的源数据类型。

-   **target\_type**

    类型转换的目标数据类型。

-   **object\_name**

    对象名。

-   **table\_name.column\_name**

    **view\_name.column\_name**

    定义/修改注释的列名称。前缀可加表名称或者视图名称。

-   **constraint\_name**

    定义/修改注释的表约束的名称。

-   **table\_name**

    表的名称。

-   **function\_name**

    定义/修改注释的函数名称。

-   **argname,argmode,argtype**

    函数参数的模式、名称、类型。

-   **large\_object\_oid**

    定义/修改注释的大对象的OID值。

-   **operator\_name**

    操作符名称。

-   **left\_type,right\_type**

    操作参数的数据类型（可以用模式修饰）。当前置或者后置操作符不存在时，可以增加NONE选项。

-   **trigger\_name**

    触发器名称。

-   **text**

    注释。


## 示例<a name="zh-cn_topic_0283137624_zh-cn_topic_0237122093_zh-cn_topic_0059778518_s57de72dc01404015a1a8a938238ad917"></a>

```
openGauss=# CREATE TABLE tpcds.customer_demographics_t2
(
    CD_DEMO_SK                INTEGER               NOT NULL,
    CD_GENDER                 CHAR(1)                       ,
    CD_MARITAL_STATUS         CHAR(1)                       ,
    CD_EDUCATION_STATUS       CHAR(20)                      ,
    CD_PURCHASE_ESTIMATE      INTEGER                       ,
    CD_CREDIT_RATING          CHAR(10)                      ,
    CD_DEP_COUNT              INTEGER                       ,
    CD_DEP_EMPLOYED_COUNT     INTEGER                       ,
    CD_DEP_COLLEGE_COUNT      INTEGER
)
WITH (ORIENTATION = COLUMN,COMPRESSION=MIDDLE)
;

-- 为tpcds.customer_demographics_t2.cd_demo_sk列加注释。
openGauss=# COMMENT ON COLUMN tpcds.customer_demographics_t2.cd_demo_sk IS 'Primary key of customer demographics table.';

--创建一个由c_customer_sk小于150的内容组成的视图。
openGauss=# CREATE VIEW tpcds.customer_details_view_v2 AS
    SELECT *
    FROM tpcds.customer
    WHERE c_customer_sk < 150;

-- 为tpcds.customer_details_view_v2视图加注释。
openGauss=# COMMENT ON VIEW tpcds.customer_details_view_v2 IS 'View of customer detail';

-- 删除view。
openGauss=# DROP VIEW tpcds.customer_details_view_v2;

-- 删除tpcds.customer_demographics_t2。
openGauss=# DROP TABLE tpcds.customer_demographics_t2;
```

