# ALTER RULE<a name="ZH-CN_TOPIC_0306398141"></a>

## 功能描述<a name="section1858233912452"></a>

修改一个规则的定义。

## 注意事项<a name="section13721922472"></a>

-   要使用ALTER RULE，用户必须为应用了指定规则的表或视图的所有者。
-   目前仅支持修改规则的名称。

## 语法格式<a name="section3737121410476"></a>

```
ALTER RULE name ON table_name RENAME TO new_name
```

## 参数说明<a name="section125214834718"></a>

-   name

    需要修改的规则名称。

-   table\_name

    需要创建规则的表名称。

    取值范围：数据库中已经存在的表名称。

-   new\_name

    规则的新名称。


## 示例<a name="section1538315160485"></a>

```
ALTER RULE notify_all ON emp RENAME TO notify_me;
```
