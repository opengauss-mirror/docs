# 创建数据库

使用SQL创建新的数据库。

>[!NOTE]说明
>为确保安全，首次登录后请修改omm初始密码。

使用SQL语句创建数据库时，指定数据库的字符集为GBK。

```sql
gsql -d postgres -p 26000
```

```sql
openGauss=# CREATE DATABASE mydb WITH ENCODING 'GBK' template = template0;
```

显示类似如下信息：

```sql
CREATE DATABASE
```
