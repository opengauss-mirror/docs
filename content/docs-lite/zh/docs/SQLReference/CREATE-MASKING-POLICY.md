# CREATE MASKING POLICY<a name="ZH-CN_TOPIC_0306525303"></a>

## 功能描述<a name="section1163224811518"></a>

创建脱敏策略。

## 注意事项<a name="zh-cn_topic_0059777586_s0bb17f15d73a4d978ef028b2686e0f7a"></a>

只有poladmin，sysadmin或初始用户能执行此操作。

需要开启安全策略开关，即设置GUC参数enable\_security\_policy=on，脱敏策略才可以生效。

预置脱敏函数的执行效果及支持的数据类型请参考《关于openGauss》中”特性描述 \> 数据库安全 \> 动态数据脱敏机制”章节。

## 语法格式<a name="zh-cn_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

```
CREATE MASKING POLICY policy_name masking_clause[, ...]* policy_filter [ENABLE | DISABLE];
```

-   masking\_clause：

    ```
    masking_function ON LABEL(label_name[, ...]*)
    ```

-   masking\_function：

    maskall不是预置函数，硬编码在代码中，不支持\\df展示。

    预置时脱敏方式如下：

    ```
    maskall | randommasking | creditcardmasking | basicemailmasking | fullemailmasking | shufflemasking | alldigitsmasking | regexpmasking
    ```


-   policy\_filter:

    ```
    FILTER ON FILTER_TYPE(filter_value [,...]*)[,...]*
    ```


-   FILTER\_TYPE:

    ```
    IP | APP | ROLES
    ```


## 参数说明<a name="section2852173114389"></a>

-   **policy\_name**

    审计策略名称，需要唯一，不可重复。

    取值范围：字符串，要符合标识符的命名规范。

-   **label\_name**

    资源标签名称。

-   **masking\_clause**

    指出使用何种脱敏函数对被label\_name标签标记的数据库资源进行脱敏，支持用schema.function的方式指定脱敏函数。

-   **policy\_filter**

    指出该脱敏策略对何种身份的用户生效，若为空表示对所用用户生效。


-   **FILTER\_TYPE**

    描述策略过滤的条件类型，包括IP | APP | ROLES。

-   **filter\_value**

    指具体过滤信息内容，例如具体的IP，具体的APP名称，具体的用户名。


-   **ENABLE|DISABLE**

    可以打开或关闭脱敏策略。若不指定ENABLE|DISABLE，语句默认为ENABLE。


## 示例<a name="section7854941155112"></a>

```
--创建dev_mask和bob_mask用户。
openGauss=# CREATE USER dev_mask PASSWORD 'XXXXXXXX';
openGauss=# CREATE USER bob_mask PASSWORD 'XXXXXXXX';

--创建一个表tb_for_masking
openGauss=# CREATE TABLE tb_for_masking(col1 text, col2 text, col3 text);

--创建资源标签标记敏感列col1
openGauss=# CREATE RESOURCE LABEL mask_lb1 ADD COLUMN(tb_for_masking.col1);

--创建资源标签标记敏感列col2
openGauss=# CREATE RESOURCE LABEL mask_lb2 ADD COLUMN(tb_for_masking.col2);

--对访问敏感列col1的操作创建脱敏策略
openGauss=# CREATE MASKING POLICY maskpol1 maskall ON LABEL(mask_lb1);

--创建仅对用户dev_mask和bob_mask,客户端工具为psql和gsql，IP地址为'10.20.30.40', '127.0.0.0/24'场景下生效的脱敏策略。
openGauss=# CREATE MASKING POLICY maskpol2 randommasking ON LABEL(mask_lb2) FILTER ON ROLES(dev_mask, bob_mask), APP(psql, gsql), IP('10.20.30.40', '127.0.0.0/24');
```

## 相关链接<a name="zh-cn_topic_0059778277_s4693856e1f6240dc98de7d6faf52f136"></a>

[ALTER MASKING POLICY](ALTER-MASKING-POLICY.md)，[DROP MASKING POLICY](DROP-MASKING-POLICY.md)。

