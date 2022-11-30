# DROP DATA SOURCE<a name="ZH-CN_TOPIC_0289900803"></a>

## 功能描述<a name="zh-cn_topic_0283136822_zh-cn_topic_0237122135_section324414515172"></a>

删除一个Data Source对象。

## 注意事项<a name="zh-cn_topic_0283136822_zh-cn_topic_0237122135_section6945185782115"></a>

只有属主/系统管理员/初始用户才可以删除一个Data Source对象。

## 语法格式<a name="zh-cn_topic_0283136822_zh-cn_topic_0237122135_section1289212618239"></a>

```
DROP DATA SOURCE [IF EXISTS] src_name [CASCADE | RESTRICT];
```

## 参数说明<a name="zh-cn_topic_0283136822_zh-cn_topic_0237122135_section1789010295266"></a>

-   **src\_name**

    待删除的Data Source对象名称。

    取值范围：字符串，符合标识符命名规范。

-   **IF EXISTS**

    如果指定的Data Source不存在，则发出一个notice而不是报错。

-   **CASCADE | RESTRICT**
    -   **CASCADE**：表示允许级联删除依赖于Data Source的对象。
    -   **RESTRICT**（缺省值）：表示有依赖于该Data Source的对象存在，则该Data Source无法删除。

        目前Data Source对象没有被依赖的对象，CASCADE和RESTRICT效果一样，保留此选项是为了向后兼容性。



## 示例<a name="zh-cn_topic_0283136822_zh-cn_topic_0237122135_section162746130164"></a>

```
--创建Data Source对象。
openGauss=# CREATE DATA SOURCE ds_tst1;

--删除Data Source对象。
openGauss=# DROP DATA SOURCE ds_tst1 CASCADE;
openGauss=# DROP DATA SOURCE IF EXISTS ds_tst1 RESTRICT;
```

## 相关链接<a name="zh-cn_topic_0283136822_zh-cn_topic_0237122135_section191190297715"></a>

[CREATE DATA SOURCE](CREATE-DATA-SOURCE.md)，[ALTER DATA SOURCE](ALTER-DATA-SOURCE.md)
