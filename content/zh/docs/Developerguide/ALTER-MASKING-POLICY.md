# ALTER MASKING POLICY<a name="ZH-CN_TOPIC_0306525300"></a>

## 功能描述<a name="zh-cn_topic_0059778839_s878bf4f1569c4d2f87e056f26372448e"></a>

修改脱敏策略。

## 注意事项<a name="zh-cn_topic_0059778839_s63ad21f92ad74c9e8d6bf18bb7218c4f"></a>

-   只有poladmin、sysadmin或初始用户才能执行此操作。
-   需要打开enable\_security\_policy开关脱敏策略才可以生效。
-   预置脱敏函数的执行效果及支持的数据类型请参考《特性描述》中“数据库安全 \> 动态数据脱敏机制”章节。

## 语法格式<a name="zh-cn_topic_0059777586_sa46c661c13834b8389614f75e47a3efa"></a>

-   修改策略描述：

    ```
    ALTER MASKING POLICY policy_name COMMENTS policy_comments;
    ```


-   修改脱敏方式：

    ```
    ALTER MASKING POLICY policy_name [ADD | REMOVE | MODIFY] masking_actions[, ...]*;
    其中masking_action:
        masking_function ON LABEL(label_name[, ...]*)
    ```


-   修改脱敏策略生效场景：

    ```
    ALTER MASKING POLICY policy_name MODIFY(FILTER ON FILTER_TYPE(filter_value[, ...]*)[, ...]*);
    ```


-   移除脱敏策略生效场景，使策略对所用场景生效：

    ```
    ALTER MASKING POLICY policy_name DROP FILTER;
    ```


-   修改脱敏策略开启/关闭：

    ```
    ALTER MASKING POLICY policy_name [ENABLE | DISABLE];
    ```


## 参数说明<a name="section2852173114389"></a>

-   **policy\_name**

    脱敏策略名称，需要唯一，不可重复。

    取值范围：字符串，要符合标识符的命名规范。

-   **policy\_comments**

    需要为脱敏策略添加或修改的描述信息。

-   **masking\_function**

    指的是预置的八种脱敏方式或者用户自定义的函数，支持模式。

    maskall不是预置函数，硬编码在代码中，不支持\\df展示。

    预置时脱敏方式如下：

    ```
    maskall | randommasking | creditcardmasking | basicemailmasking | fullemailmasking | shufflemasking | alldigitsmasking | regexpmasking 
    ```

-   **label\_name**

    资源标签名称。


-   **FILTER\_TYPE**

    指定脱敏策略的过滤信息，过滤类型包括：IP、ROLES、APP。

-   **filter\_value**

    指具体过滤信息内容，例如具体的IP、具体的APP名称、具体的用户名。


-   **ENABLE|DISABLE**

    可以打开或关闭脱敏策略。若不指定ENABLE|DISABLE，语句默认为ENABLE。


## 示例<a name="section873151912198"></a>

```
--创建dev_mask和bob_mask用户。
openGauss=# CREATE USER dev_mask PASSWORD 'dev@1234';
openGauss=# CREATE USER bob_mask PASSWORD 'bob@1234';

--创建一个表tb_for_masking
openGauss=# CREATE TABLE tb_for_masking(col1 text, col2 text, col3 text);

--创建资源标签标记敏感列col1
openGauss=# CREATE RESOURCE LABEL mask_lb1 ADD COLUMN(tb_for_masking.col1);

--创建资源标签标记敏感列col2
openGauss=# CREATE RESOURCE LABEL mask_lb2 ADD COLUMN(tb_for_masking.col2);

--对访问敏感列col1的操作创建脱敏策略
openGauss=# CREATE MASKING POLICY maskpol1 maskall ON LABEL(mask_lb1);

--为脱敏策略maskpol1添加描述
openGauss=# ALTER MASKING POLICY maskpol1 COMMENTS 'masking policy for tb_for_masking.col1';

--修改脱敏策略maskpol1，新增一项脱敏方式
openGauss=# ALTER MASKING POLICY maskpol1 ADD randommasking ON LABEL(mask_lb2);

--修改脱敏策略maskpol1，移除一项脱敏方式
openGauss=# ALTER MASKING POLICY maskpol1 REMOVE randommasking ON LABEL(mask_lb2);

--修改脱敏策略maskpol1，修改一项脱敏方式
openGauss=# ALTER MASKING POLICY maskpol1 MODIFY randommasking ON LABEL(mask_lb1);

--修改脱敏策略maskpol1使之仅对用户dev_mask和bob_mask,客户端工具为psql和gsql，IP地址为'10.20.30.40', '127.0.0.0/24'场景生效。
openGauss=# ALTER MASKING POLICY maskpol1 MODIFY (FILTER ON ROLES(dev_mask, bob_mask), APP(psql, gsql), IP('10.20.30.40', '127.0.0.0/24'));

--修改脱敏策略maskpol1，使之对所有用户场景生效
openGauss=# ALTER MASKING POLICY maskpol1 DROP FILTER;

--禁用脱敏策略maskpol1
openGauss=# ALTER MASKING POLICY maskpol1 DISABLE;
```

## 相关链接<a name="section156744489391"></a>

[CREATE MASKING POLICY](CREATE-MASKING-POLICY.md),[DROP MASKING POLICY](DROP-MASKING-POLICY.md)。

