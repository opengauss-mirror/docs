# DROP USER MAPPING

## 功能描述<a name="zh-cn_topic_0283136651_section152751851406"></a>

移除一个用于外部服务器的用户映射。

## 语法格式<a name="zh-cn_topic_0283136651_section4460205915011"></a>

```
DROP USER MAPPING [ IF EXISTS ] FOR { user_name | USER | CURRENT_USER | PUBLIC } SERVER server_name;
```

## 参数描述<a name="zh-cn_topic_0283136651_section115661681112"></a>

-   **IF EXISTS**

    如果该用户映射不存在则不要抛出一个错误，而是发出一个提示。

-   **user\_name**

    该映射的用户名。

    CURRENT\_USER和USER匹配当前用户的名称。PUBLIC被用来匹配系统中所有现存和未来的用户名。

-   **server\_name**

    用户映射的服务器名。


## 相关链接<a name="zh-cn_topic_0283136651_section17590015119"></a>

[ALTER USER MAPPING](ALTER-USER-MAPPING.md)，[CREATE USER MAPPING](CREATE-USER-MAPPING.md)

