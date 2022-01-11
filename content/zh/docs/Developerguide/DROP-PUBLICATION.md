# DROP PUBLICATION

## 功能描述

从数据库中删除一个现有的发布。

## 语法格式
```
DROP PUBLICATION [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## 参数说明

- IF EXISTS

  如果发布不存在，不要抛出一个错误，而是发出一个提示。

- name

  现有发布的名称。

- CASCADE|RESTRICT

  当前这些关键词没有任何作用，因为发布没有依赖关系。

## 注意事项

发布只能被其属主或超级用户删除。
