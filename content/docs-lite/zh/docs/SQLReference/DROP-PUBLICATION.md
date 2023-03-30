# DROP PUBLICATION<a name="ZH-CN_TOPIC_0000001240652289"></a>

## **功能描述**<a name="section4742194571517"></a>

从数据库中删除一个现有的发布。

## **注意事项**<a name="section1769118514169"></a>

发布只能被其属主或系统管理员删除。

## **语法格式**<a name="section464555611517"></a>

```
DROP PUBLICATION [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## **参数说明**<a name="section134251850191516"></a>

-   **IF EXISTS**

    如果发布不存在，不要抛出一个错误，而是发出一个提示。

-   **name**

    现有发布的名称。

-   **CASCADE|RESTRICT**

    当前这些关键词没有任何作用，因为发布没有依赖关系。


## 示例<a name="section102825519166"></a>

请参见[示例](CREATE-PUBLICATION.md#section109371845154215)。

## 相关链接<a name="section915018161711"></a>

[ALTER PUBLICATION](ALTER-PUBLICATION.md)，[CREATE PUBLICATION](CREATE-PUBLICATION.md)

