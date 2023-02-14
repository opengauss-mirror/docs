# SNAPSHOT

## 功能描述<a name="section1590014447254"></a>

针对多用户情况下，对数据进行统一的版本控制。

## 注意事项<a name="section1427744717250"></a>

-   本特性GUC参数db4ai\_snapshot\_mode，快照存储模型分为MSS和CSS两种；GUC参数db4ai\_snapshot\_version\_delimiter，用于设定版本分隔符，默认为“@”;GUC参数db4ai\_snapshot\_version\_separator，用于设定子版本分隔符，默认为“.”。
-   当快照选用增量存储方式时，各个快照中具有依赖关系。删除快照需要按照依赖顺序进行删除。
-   snapshot特性用于团队不同成员间维护数据，涉及管理员和普通用户之间的数据转写。所以在私有用户、三权分立\(enableSeparationOfDuty=ON\)等状态下，数据库不支持snapshot功能特性。
-   当需要稳定可用的快照用于AI训练等任务时，用户需要将快照发布。

## 语法格式<a name="section1452716494253"></a>

1.  创建快照。

    可以采用“CREATE SNAPSHOT … AS”以及“CREATE SNAPSHOT … FROM”语句创建**数据表快照**。

    -   CREATE SNAPSHOT AS

        ```
        CREATE SNAPSHOT <qualified_name> [@ <version | ident | sconst>]
            [COMMENT IS <sconst>}
            AS query;
        ```

    -   CREATE SNAPSHOT FROM

        ```
        CREATE SNAPSHOT <qualified_name> [@ <version | ident | sconst>]
            FROM @ <version | ident | sconst>
            [COMMENT IS <sconst>}
                USING (
                { INSERT [INTO SNAPSHOT] …
                  | UPDATE [SNAPSHOT] [AS <alias>] SET … [FROM …] [WHERE …]
                  | DELETE [FROM SNAPSHOT] [AS <alias>] [USING …] [WHERE …]
                  | ALTER [SNAPSHOT] { ADD … | DROP … } [, …]
              } [; …]
            );
        ```

2.  删除快照。

    PURGE SNAPSHOT

    ```
    PURGE SNAPSHOT <qualified_name> @ <version | ident | sconst>;
    ```

3.  快照采样。

    SAMPLE SNAPSHOT

    ```
    SAMPLE SNAPSHOT <qualified_name> @ <version | ident | sconst>
        [STRATIFY BY attr_list]
        { AS <label> AT RATIO <num> [COMMENT IS <comment>] } [, …]
    ```

4.  快照发布。

    PUBLISH SNAPSHOT

    ```
    PUBLISH SNAPSHOT <qualified_name> @ <version | ident | sconst>;
    ```

5.  快照存档。

    ARCHIVE SNAPSHOT

    ```
    ARCHIVE SNAPSHOT <qualified_name> @ <version | ident | sconst>;
    ```


## 参数说明<a name="section319555514251"></a>

-   qualified\_name

    创建snapshot的名称。

    取值范围：字符串，需要符合标识符命名规则。

-   version

    \(可省略\)snapshot的版本号，当省略设置。系统会自动顺延编号。

    取值范围：字符串，数字编号配合分隔符。


## 示例<a name="section3170957142519"></a>

```
create snapshot s1@1.0 comment is 'first version' as select * from t1;
```

```
create snapshot s1@3.0 from @1.0 comment is 'inherits from @1.0' using (INSERT VALUES(6, 'john'), (7, 'tim'); DELETE WHERE id = 1);
```

```
SELECT * FROM s1@1.0;
```

```
purge snapshot s1@1.0;
```

```
sample snapshot s1@2.0 stratify by name as nick at ratio .5;
```

```
publish snapshot s1@2.0;
```

```
archive snapshot s1@2.0;
```

## 相关链接<a name="section2051314595253"></a>

无。
