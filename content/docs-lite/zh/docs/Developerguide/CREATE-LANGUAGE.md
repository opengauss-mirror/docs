# CREATE LANGUAGE<a name="ZH-CN_TOPIC_0000001080607732"></a>

## 功能描述<a name="section113331284191"></a>

定义一种新的过程语言。单机和集中式暂不支持创建过程语言。

## 语法格式<a name="section122664751912"></a>

```
CREATE [ OR REPLACE ] [ PROCEDURAL ] LANGUAGE name
CREATE [ OR REPLACE ] [ TRUSTED ] [ PROCEDURAL ] LANGUAGE name
    HANDLER call_handler [ INLINE inline_handler ] [ VALIDATOR valfunction ]
```

## 参数说明<a name="section48568352146"></a>

-   **TRUSTED**

    TRUSTED说明该语言并不授权没有权限的用户访问数据。如果在注册该语言时忽略这个关键字，则只有SYSADMIN权限可以使用。

-   **PROCEDURAL**

    这是个没有用的字。

-   **name**

    新过程语言的名称。这个名字应该在数据库的所有语言中唯一。

    出于向下兼容的原因，这个名字可以用单引号包围。

-   **HANDLER call\_handler**

    call\_handler是一个以前注册过的函数名字，该函数将被用来执行该过程语言的函数。过程语言的调用处理器必须用一种编译语言\(比如C\)书写，调用风格必须是版本1的调用风格，并且注册为不接受参数并且返回language\_handler类型的函数。language\_handler是用于将函数声明为调用处理器的占位符。

-   **INLINE inline\_handler**

    inline\_handler是以前注册过的函数名字，用来在该语言中执行一个匿名代码块\(DO命令\)。如果没有指定inline\_handler函数，那么该语言不支持匿名代码块。处理器函数必须接受一个internal类型的参数，这将是DO命令的内部表示，并且它通常返回void。忽略该处理器的返回值。

-   **VALIDATOR valfunction**

    valfunction是一个以前注册过的函数名字，在用该语言创建新函数的时候将用它来校验新函数。如果没有声明校验函数，那么建立新函数的时候就不会检查它。校验函数必须接受一个类型为oid的参数，它是将要创建的函数的OID，并且通常会返回void。

    校验函数通常会检查函数体，看看有没有语法错误，但是它也可以查看函数的其它属性，比如该语言是否不能处理某种参数类型。校验函数应该用ereport\(\)函数报告错误。该函数的返回值将被忽略。


## 示例<a name="section95851353171318"></a>

创建标准的过程语言的比较好的方法：

```
CREATE LANGUAGE plperl;
```

对于pg\_pltemplate还不知道的语言，需要下面这样的序列：

```
CREATE FUNCTION plsample_call_handler() RETURNS language_handler
    AS '$libdir/plsample'
    LANGUAGE C;
CREATE LANGUAGE plsample
    HANDLER plsample_call_handler;
```

