# Initializing the Database<a name="EN-US_TOPIC_0270160634"></a>

Use SQL to create a database.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>To ensure security, change the initial password of user  **omm**  after the first login.

When using an SQL statement to create a database, set the character set to  **GBK**.

```
gsql -d postgres -p 26000
```

```
postgres=# CREATE DATABASE mydb WITH ENCODING 'GBK' template = template0;
```

Information similar to the following is displayed:

```
CREATE DATABASE
```
