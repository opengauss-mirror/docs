# CREATE TABLESPACE<a name="ZH-CN_TOPIC_0289900078"></a>

## 功能描述<a name="zh-cn_topic_0283137328_zh-cn_topic_0237122120_zh-cn_topic_0059777670_sbf00214c21e441f5adc2bc08ecaca4e7"></a>

在数据库中创建一个新的表空间。

## 注意事项<a name="zh-cn_topic_0283137328_zh-cn_topic_0237122120_zh-cn_topic_0059777670_s54948265e9f34f1fac838f60ac0bd3a6"></a>

-   本章节只包含dolphin新增的语法，原openGauss的语法未做删除和修改。

-   由于路径的特殊字符校验，在使用ADD DATAFILE创建表空间时，若输入路径以.ibd结尾，dolphin插件会将路径名称更改为以_ibd结尾。

## 语法格式<a name="zh-cn_topic_0283137328_zh-cn_topic_0237122120_zh-cn_topic_0059777670_s9f8a8395cc464cd2a34dec7a82fedc7b"></a>

```
CREATE TABLESPACE tablespace_name
    tablespace_details;
```

其中创建表空间的详细信息tablespace_details为：

```
[ OWNER user_name ] [RELATIVE] LOCATION 'directory' [ MAXSIZE 'space_size' ] [with_option_clause] [ ENGINE [=] engine_name ]
| ADD DATAFILE 'directory' [ ENGINE [=] engine_name ]
```

## 参数说明<a name="zh-cn_topic_0283137328_zh-cn_topic_0237122120_zh-cn_topic_0059777670_see2346106f4e402da499ad74c533dfa8"></a>

-   **ENGINE \[=\] engine_name**

    指定存储引擎；该特性目前只有语法没有功能。

## 示例<a name="zh-cn_topic_0283137328_zh-cn_topic_0237122120_zh-cn_topic_0059777670_s4e5e97caa377440d87fad0d49b56323e"></a>

```
--使用ADD DATAFILE语法创建表空间。
openGauss=# CREATE TABLESPACE t_tbspace ADD DATAFILE 'my_tablespace' ENGINE = test_engine;
CREATE TABLESPACE

--使用ADD DATAFILE语法创建表空间，输入路径以.ibd结尾
openGauss=# CREATE TABLESPACE test_tbspace_ibd ADD DATAFILE 'test_tbspace1.ibd';
WARNING:  Suffix ".ibd" of datafile path detected. The actual path will be renamed as "test_tbspace1_ibd"
CREATE TABLESPACE
openGauss=# CREATE TABLE t_tbspace(num int) TABLESPACE test_tbspace_ibd;
CREATE TABLE
openGauss=# \d t_tbspace
   Table "public.t_tbspace"
 Column |  Type   | Modifiers
--------+---------+-----------
 num    | integer |
Tablespace: "test_tbspace_ibd"
```


