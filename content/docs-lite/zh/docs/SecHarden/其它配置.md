# 其它配置

## 确保backslash_quote参数配置正确

### 说明

参数`backslash_quote`控制字符串中是否允许使用`\'`来替代引号。“\'”的写法可能引发安全风险，如SQL注入攻击。为了避免这种风险，建议配置服务器拒绝带反斜杠转义的引号的查询。推荐使用SQL标准方法，使用一个引号写两遍（`''`）的方法。

### 实现

**检查方法：**

检查`backslash_quote`参数值，如果不为`safe_encoding`或`off`则失败。

```sql
openGauss=# show backslash_quote;
 backslash_quote
-----------------
safe_encoding
(1 row)
```

**修复方法：**

修改参数`backslash_quote`为`safe_encoding`或`off`。

```bash
gs_guc reload -Z datanode -N all -I all -c "backslash_quote=safe_encoding"
```

## 禁止修改系统表结构

### 说明

参数`allow_system_table_mods`控制是否允许修改系统表的结构。虽然在某些极端情况下，此参数可以帮助恢复受损的数据库，但在生产环境中，修改系统表结构可能会带来严重的安全风险，包括数据丢失和系统不稳定。因此，在生产环境中，应将`allow_system_table_mods`参数设置为`off`。

### 实现

**检查方法：**

检查`allow_system_table_mods`参数值是否为`off`，如果不为`off`则失败。

```sql
openGauss=# show allow_system_table_mods;
 allow_system_table_mods
-------------------------
off
(1 row)
```

**修复方法：**

设置参数`allow_system_table_mods`为`off`，然后重启数据库。设置命令如下：

```bash
gs_guc set -Z datanode -N all -I all -c "allow_system_table_mods=off"
gs_om -t stop && gs_om -t start
```
