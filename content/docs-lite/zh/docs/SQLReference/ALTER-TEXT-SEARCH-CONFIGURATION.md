# ALTER TEXT SEARCH CONFIGURATION<a name="ZH-CN_TOPIC_0289900161"></a>

## 功能描述<a name="zh-cn_topic_0283137411_zh-cn_topic_0237122079_zh-cn_topic_0059778328_s9adfe253d8074dff8561df762ecd7460"></a>

更改文本搜索配置的定义。用户可以将映射从字串类型调整为字典，或者改变配置的名称或者所有者，或者修改搜索配置的配置参数。

ADD MAPPING FOR选项为文本搜索配置增加字串类型映射；如果ADD MAPPING FOR后面任何一个字串类型的映射已经存在于此文本搜索配置中，那么系统将会报错。

ALTER MAPPING FOR选项会首先清除已有的字串类型映射，然后添加指定的字串类型映射。

ALTER MAPPING REPLACE ... WITH ... 与ALTER MAPPING FOR ... REPLACE ... WITH ...选项会直接使用new\_dictionary替换old\_dictionary。需要注意的是，只有pg\_ts\_config\_map系统表中存在maptokentype与old\_dictionary对应关系的元组时，才能更新成功，否则不会成功，也不会有任何提示信息返回。

DROP MAPPING FOR选项会删除当前文本搜索配置中指定的字串类型映射。 如果没有指定IF EXISTS选项，当DROP MAPPING FOR选项指定的字串类型映射在文本搜索配置中不存在时，数据库会报错。

## 注意事项<a name="zh-cn_topic_0283137411_zh-cn_topic_0237122079_zh-cn_topic_0059778328_s269e65b549b14fc7b0350b5ff9c25722"></a>

-   当一个搜索配置已经被引用（如被用来创建索引），则不允许用户修改此文本搜索配置。
-   要使用ALTER TEXT SEARCH CONFIGURATION，用户必须是配置的所有者。

## 语法格式<a name="zh-cn_topic_0283137411_zh-cn_topic_0237122079_zh-cn_topic_0059778328_s4d87827fb0cf409aabcd17379f82b1c3"></a>

-   增加文本搜索配置字串类型映射语法

```
ALTER TEXT SEARCH CONFIGURATION name 
    ADD MAPPING FOR token_type [, ... ] WITH dictionary_name [, ... ];
```

-   修改文本搜索配置字典语法

```
ALTER TEXT SEARCH CONFIGURATION name 
    ALTER MAPPING FOR token_type [, ... ] REPLACE old_dictionary WITH new_dictionary;
```

-   修改文本搜索配置字串类型语法

```
ALTER TEXT SEARCH CONFIGURATION name
    ALTER MAPPING FOR token_type [, ... ] WITH dictionary_name [, ... ];
```

-   更改文本搜索配置字典语法

```
ALTER TEXT SEARCH CONFIGURATION name
    ALTER MAPPING REPLACE old_dictionary WITH new_dictionary;
```

-   删除文本搜索配置字串类型映射语法

```
ALTER TEXT SEARCH CONFIGURATION name
    DROP MAPPING [ IF EXISTS ] FOR token_type [, ... ];
```

-   重命名文本搜索配置所有者语法

```
ALTER TEXT SEARCH CONFIGURATION name OWNER TO new_owner;
```

-   重命名文本搜索配置名称语法

```
ALTER TEXT SEARCH CONFIGURATION name RENAME TO new_name;
```

-   重命名文本搜索配置命名空间语法

```
ALTER TEXT SEARCH CONFIGURATION name SET SCHEMA new_schema;
```

-   修改文本搜索配置属性语法

```
ALTER TEXT SEARCH CONFIGURATION name SET ( { configuration_option = value } [, ...] );
```

-   重置文本搜索配置属性语法

```
ALTER TEXT SEARCH CONFIGURATION name RESET ( {configuration_option} [, ...] );
```

## 参数说明<a name="zh-cn_topic_0283137411_zh-cn_topic_0237122079_zh-cn_topic_0059778328_sf1c3321032274c75b33ec6927629ba5a"></a>

-   **name**

    已有文本搜索配置的名称（可以有模式修饰）。

-   **token\_type**

    与配置的语法解析器关联的字串类型的名称。详细信息参见[解析器](解析器.md)。

-   **dictionary\_name**

    文本搜索字典名称。 如果有多个字典，则它们会按指定的顺序搜索。

-   **old\_dictionary**

    映身中拟被替换的文本搜索字典名称。

-   **new\_dictionary**

    替换old\_dictionary的文本搜索字典的名称。

-   **new\_owner**

    文本搜索配置的新所有者。

-   **new\_name**

    文本搜索配置的新名称。

-   **new\_schema**

    文本搜索配置的新模式名。

-   **configuration\_option**

    文本搜索配置项。详细信息参见[CREATE TEXT SEARCH CONFIGURATION](CREATE-TEXT-SEARCH-CONFIGURATION.md)。

-   **value**

    文本搜索配置项的值。


## 示例<a name="zh-cn_topic_0283137411_zh-cn_topic_0237122079_zh-cn_topic_0059778328_s5e2c22ccd01e485788ada368262a3447"></a>

```
--创建文本搜索配置。
openGauss=# CREATE TEXT SEARCH CONFIGURATION english_1 (parser=default);
CREATE TEXT SEARCH CONFIGURATION

--增加文本搜索配置字串类型映射语法。
openGauss=# ALTER TEXT SEARCH CONFIGURATION english_1 ADD MAPPING FOR word WITH simple,english_stem;
ALTER TEXT SEARCH CONFIGURATION

--增加文本搜索配置字串类型映射语法。
openGauss=# ALTER TEXT SEARCH CONFIGURATION english_1 ADD MAPPING FOR email WITH english_stem, french_stem;
ALTER TEXT SEARCH CONFIGURATION

--查询文本搜索配置相关信息。
openGauss=# SELECT b.cfgname,a.maptokentype,a.mapseqno,a.mapdict,c.dictname FROM pg_ts_config_map a,pg_ts_config b, pg_ts_dict c WHERE a.mapcfg=b.oid AND a.mapdict=c.oid AND b.cfgname='english_1' ORDER BY 1,2,3,4,5;
  cfgname  | maptokentype | mapseqno | mapdict |   dictname   
-----------+--------------+----------+---------+--------------
 english_1 |            2 |        1 |    3765 | simple
 english_1 |            2 |        2 |   12960 | english_stem
 english_1 |            4 |        1 |   12960 | english_stem
 english_1 |            4 |        2 |   12964 | french_stem
(4 rows)

--增加文本搜索配置字串类型映射语法。
openGauss=# ALTER TEXT SEARCH CONFIGURATION english_1 ALTER MAPPING REPLACE french_stem with german_stem;
ALTER TEXT SEARCH CONFIGURATION

--查询文本搜索配置相关信息。
openGauss=# SELECT b.cfgname,a.maptokentype,a.mapseqno,a.mapdict,c.dictname FROM pg_ts_config_map a,pg_ts_config b, pg_ts_dict c WHERE a.mapcfg=b.oid AND a.mapdict=c.oid AND b.cfgname='english_1' ORDER BY 1,2,3,4,5;
  cfgname  | maptokentype | mapseqno | mapdict |   dictname   
-----------+--------------+----------+---------+--------------
 english_1 |            2 |        1 |    3765 | simple
 english_1 |            2 |        2 |   12960 | english_stem
 english_1 |            4 |        1 |   12960 | english_stem
 english_1 |            4 |        2 |   12966 | german_stem
(4 rows)
```

请参见CREATE TEXT SEARCH CONFIGURATION的[示例](CREATE-TEXT-SEARCH-CONFIGURATION.md#zh-cn_topic_0283137399_zh-cn_topic_0237122121_zh-cn_topic_0059777835_sc3a4aef5c0c0420eaf5a2e67097004a2)。

## 相关链接<a name="zh-cn_topic_0283137411_zh-cn_topic_0237122079_zh-cn_topic_0059778328_sb5eacaaa1ba74a8abb0193ac98c34512"></a>

[CREATE TEXT SEARCH CONFIGURATION](CREATE-TEXT-SEARCH-CONFIGURATION.md)，  [DROP TEXT SEARCH CONFIGURATION](DROP-TEXT-SEARCH-CONFIGURATION.md)

