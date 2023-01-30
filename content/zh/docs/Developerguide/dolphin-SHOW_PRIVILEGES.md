# SHOW PRIVILEGES<a name="ZH-CN_TOPIC_0289900333"></a>

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_e8462b6390eb094e5f9b12ad5b6a5275a"></a>

查看当前数据库中的权限信息清单。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_a97bfe293849a27832226d8625f758cb3"></a>

N/A

## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_10b7b181a93344db76802be6aec2f1a02"></a>

```
SHOW PRIVILEGES
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_2ebef6d0b2256f34ae51a0d8b776050dd"></a>

N/A

## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_9b9bc68b4b0fc78d13ef05f6ccd6a00f7"></a>

```
-- 显示当前数据库中的权限信息清单
opengauss=# show privileges;
      Privileges      |                                                  Context                                                   |                              Comment                               
----------------------+------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------
 Alter                | Large object,Sequence,Database,Foreign Server,Function,Node group,Schema,Tablespace,Type,Directory,Package | To alter the 'objects'
 Alter any index      | Index                                                                                                      | To alter any index
 Alter any sequence   | Sequence                                                                                                   | To alter any sequence
 Alter any table      | Table                                                                                                      | To alter any table
 Alter any trigger    | Trigger                                                                                                    | To alter any trigger
 Alter any type       | Type                                                                                                       | To alter any type
 Comment              | Table                                                                                                      | To comment on table
 Compute              | Node group                                                                                                 | To compute on node group
 Connect              | Database                                                                                                   | To connect database
 Create               | Database,Schema,Tablespace,Node group                                                                      | To create database,schema,tablespace,node group
 Create any function  | Function                                                                                                   | To create any function
 Create any index     | Index                                                                                                      | To create any index
 Create any package   | Package                                                                                                    | To create any package
 Create any sequence  | Sequence                                                                                                   | To create any sequence
 Create any synonym   | Synonym                                                                                                    | To create any synonym
 Create any table     | Table                                                                                                      | To create any table
 Create any trigger   | Trigger                                                                                                    | To create any trigger
 Create any type      | Type                                                                                                       | To create any type
 Delete                | Table                                                                                                      | To delete table
 Delete any table      | Table                                                                                                      | To delete any table
 Drop any sequence    | Sequence                                                                                                   | To drop any sequence
 Drop any synonym     | Synonym                                                                                                    | To drop any synonym
 Drop any table       | Table                                                                                                      | To drop any table
 Drop any trigger     | Trigger                                                                                                    | To drop any trigger
 Drop any type        | Type                                                                                                       | To drop any type
 Execute              | Function,Procedure,Package                                                                                 | To execute function, procedure,Package
 Execute any function | Function                                                                                                   | To execute any function
 Execute any package  | Package                                                                                                    | To execute any package
 Index                | Table                                                                                                      | To create index on table
 Insert               | Table                                                                                                      | To insert into table
 Insert any table     | Table                                                                                                      | To insert any table
 References           | Table                                                                                                      | To have references on table
 Select               | Large object,Sequence,Table                                                                                | To select on large object,sequence and table
 Select any sequence  | Sequence                                                                                                   | To select any sequence
 Select any table     | Table                                                                                                      | To select on any table
 Temporary            | Database                                                                                                   | To create temporary table in database
 Temp                 | Database                                                                                                   | To create temporary table in database
 Truncate             | Table                                                                                                      | To truncate table
 Update               | Large object,Sequence,Table                                                                                | To update large object,Sequence,Table
 Update any table     | Table                                                                                                      | To update any table
 Usage                | Domain,Foreign data wrapper,Foreign server,Language,Schema,Sequence,Type                                   | To use domain,fdw,foreign server,language,schema,sequence and type
 Vacuum               | Table                                                                                                      | To vacuum table
(42 rows)

```