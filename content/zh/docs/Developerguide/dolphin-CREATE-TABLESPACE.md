# CREATE TABLESPACE<a name="ZH-CN_TOPIC_0289900078"></a>

## 功能描述<a name="zh-cn_topic_0283137328_zh-cn_topic_0237122120_zh-cn_topic_0059777670_sbf00214c21e441f5adc2bc08ecaca4e7"></a>

在数据库中创建一个新的表空间。

## 注意事项<a name="zh-cn_topic_0283137328_zh-cn_topic_0237122120_zh-cn_topic_0059777670_s54948265e9f34f1fac838f60ac0bd3a6"></a>

-   本章节只包含dolphin新增的语法，原openGauss的语法未做删除和修改。

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
CREATE TABLESPACE t_tbspace ADD DATAFILE 'my_tablespace' ENGINE = test_engine;
CREATE TABLESPACE
```


