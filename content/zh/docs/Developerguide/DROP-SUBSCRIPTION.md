# DROP SUBSCRIPTION<a name="ZH-CN_TOPIC_0000001240332295"></a>

## **功能描述**<a name="section131281394204"></a>

删除数据库实例中的一个订阅。

## **注意事项**<a name="section7392192602015"></a>

-   只有系统管理员才可以删除订阅。
-   如果该待删除订阅与复制槽相关联，就不能在事务块内部执行DROP SUBSCRIPTION。

## **语法格式**<a name="section1367518145205"></a>

```
DROP SUBSCRIPTION [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## **参数说明**<a name="section9378519122011"></a>

-   **name**

    要删除的订阅的名称。

-   **CASCADE|RESTRICT**

    当前这些关键词没有任何作用，因为订阅没有依赖关系。


## 示例<a name="section11649214223"></a>

请参见[示例](CREATE-SUBSCRIPTION.md#section1399192015610)。

## 相关链接<a name="section36721282226"></a>

[ALTER SUBSCRIPTION](ALTER-SUBSCRIPTION.md)，[CREATE SUBSCRIPTION](CREATE-SUBSCRIPTION.md)
