# Information Schema

信息模式本身是一个名为information\_schema的模式。这个模式自动存在于所有数据库中。信息模式由一组视图构成，它们包含定义在当前数据库中对象的信息。这个模式的拥有者是初始数据库用户，并且该用户自然地拥有这个模式上的所有特权，包括删除它的能力。

信息模式继承自开源PGXC/PG，相关细节描述请参见PGXC/PG官方文档，链接如下：

[http://postgres-xc.sourceforge.net/docs/1_1/information-schema.html](http://postgres-xc.sourceforge.net/docs/1_1/information-schema.html)

https://www.postgresql.org/docs/9.2/information-schema.html

下面章节只显示未在上述链接内的视图信息。

-   **[\_PG\_FOREIGN\_DATA\_WRAPPERS](_PG_FOREIGN_DATA_WRAPPERS.md)**  

-   **[\_PG\_FOREIGN\_SERVERS](_PG_FOREIGN_SERVERS.md)**  

-   **[\_PG\_FOREIGN\_TABLE\_COLUMNS](_PG_FOREIGN_TABLE_COLUMNS.md)**  

-   **[\_PG\_FOREIGN\_TABLES](_PG_FOREIGN_TABLES.md)**  

-   **[\_PG\_USER\_MAPPINGS](_PG_USER_MAPPINGS.md)**  

-   **[INFORMATION\_SCHEMA\_CATALOG\_NAME](INFORMATION_SCHEMA_CATALOG_NAME.md)**  


