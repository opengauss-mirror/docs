# SELECT HINT<a name="ZH-CN_TOPIC_0000001096400532"></a>

## 功能描述<a name="section290819468377"></a>

设置本次查询执行内生效的查询优化相关GUC参数。本章节涉及的是dolphin关于select-hint的语法增强，对内核支持的hint详见[使用Plan Hint进行调优](使用Plan-Hint进行调优.md).

## 语法格式<a name="section530131664410"></a>

```
set_var(param = value)
```

## 参数说明<a name="section41303128143838"></a>

-   **param**

    参数名。

    目前支持使用Hint设置生效的参数有
    -   布尔类：

        enable\_bitmapscan, enable\_hashagg，enable\_hashjoin, enable\_indexscan，enable\_indexonlyscan, enable\_material，enable\_mergejoin, enable\_nestloop，enable\_index\_nestloop, enable\_seqscan，enable\_sort, enable\_tidscan，partition\_iterator\_elimination，partition\_page\_estimation，enable\_functional\_dependency，var\_eq\_const\_selectivity,

    -   整形类：

        query\_dop

    -   浮点类：

        cost\_weight\_index、default\_limit\_rows、seq\_page\_cost、random\_page\_cost、cpu\_tuple\_cost、cpu\_index\_tuple\_cost、cpu\_operator\_cost、effective\_cache\_size
        
    -   枚举类型：
    
        try_vector_engine_strategy

    -   字符串类型：

        dolphin.optimizer\_switch

-   **value**

    参数的取值。