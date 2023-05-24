# SET PASSWORD 

## 功能描述<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_s86b6c9741c7741d3976c5e358e8d5486"></a>

修改用户密码。

## 注意事项<a name="zh-cn_topic_0283137542_zh-cn_topic_0237122167_zh-cn_topic_0059778902_sdd2da7fe44624eb99ee77013ff96c6bd"></a>

-   不指定用户则修改当前连接用户密码。
-   初始用户可以修改任何用户的密码（包括自身密码），不需要指定REPLACE校验当前密码。
-   非初始用户不能修改初始用户的密码。
-   sysadmin和拥有createrole权限的用户可以修改其他（非初始化、非sysadmin，非createrole权限）用户密码，不需要指定REPLACE校验当前密码。
-   sysadmin和拥有createrole权限的用户修改自身密码时，需要指定REPLACE校验当前密码。


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
openGauss=# create user user1 with password 'XXXXXXXX';
CREATE ROLE
openGauss=# set password for user1 = 'XXXXXXXX';
ALTER ROLE

--修改当前用户密码
openGauss=# set password = 'XXXXXXXX';
ALTER ROLE
openGauss=# set password for current_user = 'XXXXXXXXX';
ALTER ROLE
openGauss=# set password for current_user() = 'XXXXXXXX';
ALTER ROLE
```
