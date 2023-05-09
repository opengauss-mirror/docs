# ALTER LANGUAGE

## 功能描述<a name="section113331284191"></a>

修改一个过程语言的定义。单机和集中式暂不支持修改过程语言。

## 语法格式<a name="section122664751912"></a>

```
ALTER [ PROCEDURAL ] LANGUAGE name RENAME TO new_name ALTER [ PROCEDURAL ] LANGUAGE name OWNER TO new_owner
```

## 参数说明<a name="section48568352146"></a>

-   **name**

    语言的名字。

-   **new\_name**

    语言的新名字。

-   **new\_owner**

    语言的新的所有者。


## 兼容性<a name="section446220148329"></a>

SQL标准里没有ALTER LANGUAGE语句。

