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

-   check\_engine\_status\(ip text, port text\)

    描述：测试给定的ip和port上是否有predictor engine提供服务。

    参数：predictor engine的ip地址和端口号

    返回值类型：text

    示例请参见[使用指导](使用指导-20.md)。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >该函数当前版本不可用。

-   encode\_plan\_node\(optname text, orientation text, strategy text, options text, dop int8, quals text, projection text\)

    描述：对入参的计划算子信息进行编码。

    参数：计划算子信息

    返回值类型：text

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >该函数为内部功能调用函数，不建议用户直接使用。

-   model\_train\_opt\(template text, model text\)

    描述：训练给定的查询性能预测模型。

    参数：性能预测模型的模板名和模型名

    返回值类型：tartup\_time\_accuracy FLOAT8,  total\_time\_accuracy FLOAT8,  rows\_accuracy FLOAT8, peak\_memory\_accuracy FLOAT8

    示例请参见[使用指导](使用指导-20.md)。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >该函数当前版本不可用。

-   track\_model\_train\_opt\(ip text, port text\)

    描述：返回给定ip和port predictor engine的训练日志地址。

    参数：predictor engine的ip地址和端口号

    返回值类型：text

    示例请参见[使用指导](使用指导-20.md)。

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >该函数当前版本不可用。

-   encode\_feature\_perf\_hist\(datname text\)

    描述：将目标数据库已收集的历史计划算子进行编码。

    参数：数据库名

    返回值类型：queryid bigint, plan\_node\_id int, parent\_node\_id int, left\_child\_id int, right\_child\_id int, encode text, startup\_time bigint, total\_time bigint, rows bigint, peak\_memory int

    示例请参见[使用指导](使用指导-20.md)。

-   gather\_encoding\_info\(datname text\)

    描述：调用encode\_feature\_perf\_hist，将编码好的数据进行持久化保存。

    参数：数据库名

    返回值类型：int

    示例请参见[使用指导](使用指导-20.md)。

