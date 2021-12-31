# DROP SUBSCRIPTION

## 功能描述
删除数据库集群中的一个订阅。

## 语法格式
```
DROP PUBLICATION [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## 参数说明

- name

  要删除的订阅的名称。

- CASCADE|RESTRICT。

  当前这些关键词没有任何作用，因为订阅没有依赖关系。

## 注意事项

- 只有超级用户才可以删除订阅。

- 如果该待删除订阅与复制槽相关联，就不能在事务块内部执行DROP SUBSCRIPTION。

