# AI特性函数<a name="ZH-CN_TOPIC_0303599451"></a>

-   gs\_index\_advise\(text\)

    描述：针对单条查询语句推荐索引。

    参数：SQL语句字符串

    返回值类型：record

    示例请参见[单query索引推荐](单query索引推荐.md)。

-   hypopg\_create\_index\(text\)

    描述：创建虚拟索引。

    参数：创建索引语句的字符串

    返回值类型：record

    示例请参见[虚拟索引](虚拟索引.md)。

-   hypopg\_display\_index\(\)

    描述：显示所有创建的虚拟索引信息。

    参数：无

    返回值类型：record

    示例请参见[虚拟索引](虚拟索引.md)。

-   hypopg\_drop\_index\(oid\)

    描述：删除指定的虚拟索引。

    参数：索引的oid

    返回值类型：bool

    示例请参见[虚拟索引](虚拟索引.md)。

-   hypopg\_reset\_index\(\)

    描述：清除所有虚拟索引。

    参数：无

    返回值类型：无

    示例请参见[虚拟索引](虚拟索引.md)。

-   hypopg\_estimate\_size\(oid\)

    描述：估计指定索引创建所需的空间大小。

    参数：索引的oid

    返回值类型：int8

    示例请参见[虚拟索引](虚拟索引.md)。


