# ALTER GROUP<a name="ZH-CN_TOPIC_0289900959"></a>

## 功能描述<a name="zh-cn_topic_0283136839_zh-cn_topic_0237122062_zh-cn_topic_0059777426_s9257704722b6426cbb9a62c26d7941f8"></a>

修改一个用户组的属性。

## 注意事项<a name="zh-cn_topic_0283136839_zh-cn_topic_0237122062_zh-cn_topic_0059777426_s3f6c5899f7ab4b4a936ef9a3ecfc3227"></a>

ALTER GROUP是ALTER ROLE的别名，非SQL标准语法，不推荐使用，建议用户直接使用ALTER ROLE替代。

## 语法格式<a name="zh-cn_topic_0283136839_zh-cn_topic_0237122062_zh-cn_topic_0059777426_s0798d93d042a4c96ab266f7eb45fc5d5"></a>

-   向用户组中添加用户。

    ```
    ALTER GROUP group_name
        ADD USER user_name [, ... ];
    ```


-   从用户组中删除用户。

    ```
    ALTER GROUP group_name
        DROP USER user_name [, ... ];
    ```

-   修改用户组的名称。

    ```
    ALTER GROUP group_name
        RENAME TO new_name;
    ```


## 参数说明<a name="zh-cn_topic_0283136839_zh-cn_topic_0237122062_zh-cn_topic_0059777426_sf7fbcb97d29b45e38bb6d6a65cc96f46"></a>

请参考ALTER ROLE的[参数说明](ALTER-ROLE.md#zh-cn_topic_0283137195_zh-cn_topic_0237122068_zh-cn_topic_0059778744_s50961af6143d4aafaf8fa02febbbf331)。

## 示例<a name="zh-cn_topic_0283136839_zh-cn_topic_0237122062_zh-cn_topic_0059778614_sfe220a2da49d4ca5928fe714ca12e949"></a>

```
--向用户组中添加用户。
openGauss=# ALTER GROUP super_users ADD USER lche, jim;

--从用户组中删除用户。
openGauss=# ALTER GROUP super_users DROP USER jim;

--修改用户组的名称。
openGauss=# ALTER GROUP super_users RENAME TO normal_users;
```

## 相关链接<a name="zh-cn_topic_0283136839_zh-cn_topic_0237122062_zh-cn_topic_0059777426_s72bcc1ca592a4b47bfaf7849e51e7e30"></a>

[ALTER GROUP](ALTER-GROUP.md)，[DROP GROUP](DROP-GROUP.md)，[ALTER ROLE](ALTER-ROLE.md)
