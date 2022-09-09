# SET PASSWORD <a name="ZH-CN_TOPIC_0289900448"></a>

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

修改用户密码。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-   不指定用户则修改当前连接用户密码。
-   当用户不是superuser且没有create role权限时，需要使用REPLACE指定当前密码来修改为新密码。


## 语法格式<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_se242be9719f44731b261539dbd42d7b9"></a>

```
SET PASSWORD [FOR user] = password_option [REPLACE 'current_auth_string']

password_option: {
    'auth_string'
  | PASSWORD('auth_string')
}
```

## 参数说明<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s06dfa4f09bfd4e0d9826a80e6a91b0a6"></a>

- **[FOR user]**

   user支持以下形式：
   
   1. user（不区分大小写）。
   2. 'user'（区分大小写）。
   3. "user"（区分大小写）。
   4. 'user'@'host'（区分大小写）。
   5. current_user()/current_user。

- **auth_string**

   需要设置的密码。

- **current_auth_string**

   当前密码。


## 示例<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sfff14489321642278317cf06cd89810d"></a>

```
--修改指定用户密码
openGauss=# create user user1 with password 'abcd@123';
CREATE ROLE
openGauss=# set password for user1 = 'abcd@124';
ALTER ROLE

--修改当前用户密码
openGauss=# set password = 'abcd@123';
ALTER ROLE
openGauss=# set password for current_user = 'abcd@123';
ALTER ROLE
openGauss=# set password for current_user() = 'abcd@123';
ALTER ROLE
```
