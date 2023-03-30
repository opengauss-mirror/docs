# DROP RULE<a name="ZH-CN_TOPIC_0306398143"></a>

## 功能描述<a name="section5400959952"></a>

删除一个重写规则。

## 语法格式<a name="section157338176610"></a>

```
DROP RULE [ IF EXISTS ] name ON table_name [ CASCADE | RESTRICT ]
```

## 参数说明<a name="section652211111716"></a>

-   IF EXISTS

    如果该规则不存在，会抛出一个NOTICE。

-   name

    要删除的现存规则名称。

-   table\_name

    该规则应用的表名。

-   CASCADE

    自动级联删除依赖于此规则的对象。

-   RESTRICT

    缺省情况下，如果有任何依赖对象，则拒绝删除此规则。


## 示例<a name="section192526392717"></a>

```
--删除重写规则newrule
DROP RULE newrule ON mytable;
```

