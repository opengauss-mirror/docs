# AI特性函数<a name="ZH-CN_TOPIC_0303599451"></a>

-   gs\_index\_advise\(text\)

    描述：针对单条查询语句推荐索引。

    参数：SQL语句字符串

    返回值类型：record

    示例请参见[单query索引推荐](../AIFeatureGuide/单query索引推荐.md)。

-   hypopg\_create\_index\(text\)

    描述：创建虚拟索引。

    参数：创建索引语句的字符串

    返回值类型：record

    示例请参见[虚拟索引](../AIFeatureGuide/虚拟索引.md)。

-   hypopg\_display\_index\(\)

    描述：显示所有创建的虚拟索引信息。

    参数：无

    返回值类型：record

    示例请参见[虚拟索引](../AIFeatureGuide/虚拟索引.md)。

-   hypopg\_drop\_index\(oid\)

    描述：删除指定的虚拟索引。

    参数：索引的oid

    返回值类型：bool

    示例请参见[虚拟索引](../AIFeatureGuide/虚拟索引.md)。

-   hypopg\_reset\_index\(\)

    描述：清除所有虚拟索引。

    参数：无

    返回值类型：无

    示例请参见[虚拟索引](../AIFeatureGuide/虚拟索引.md)。

-   hypopg\_estimate\_size\(oid\)

    描述：估计指定索引创建所需的空间大小。

    参数：索引的oid

    返回值类型：int8

    示例请参见[虚拟索引](../AIFeatureGuide/虚拟索引.md)。

-   check\_engine\_status\(ip text, port text\)

    描述：测试给定的ip和port上是否有predictor engine提供服务。

    参数：predictor engine的ip地址和端口号。

    返回值类型：text


- encode\_plan\_node\(optname text, orientation text, strategy text, options text, dop int8, quals text, projection text\)

  描述：对入参的计划算子信息进行编码。

  参数：计划算子信息。

  返回值类型：text。

  >![](public_sys-resources/icon-note.png) **说明：** 
  >
  >该函数为内部功能调用函数，不建议用户直接使用。

-   model\_train\_opt\(template text, model text\)

    描述：训练给定的查询性能预测模型。

    参数：性能预测模型的模板名和模型名。

    返回值类型：tartup\_time\_accuracy FLOAT8、  total\_time\_accuracy FLOAT8、  rows\_accuracy FLOAT8、 peak\_memory\_accuracy FLOAT8


-   track\_model\_train\_opt\(ip text, port text\)

    描述：返回给定ip和port predictor engine的训练日志地址。

    参数：predictor engine的ip地址和端口号。

    返回值类型：text


-   encode\_feature\_perf\_hist\(datname text\)

    描述：将目标数据库已收集的历史计划算子进行编码。

    参数：数据库名。

    返回值类型：queryid bigint、 plan\_node\_id int、 parent\_node\_id int、 left\_child\_id int、 right\_child\_id int, encode text、 startup\_time bigint、 total\_time bigint、 rows bigint、 peak\_memory int


-   gather\_encoding\_info\(datname text\)

    描述：调用encode\_feature\_perf\_hist，将编码好的数据进行持久化保存。

    参数：数据库名。

    返回值类型：int


-   db4ai\_predict\_by\_bool \(text, VARIADIC "any"\)

    描述：获取返回值为布尔型的模型进行模型推断任务。此函数为内部调用函数，建议直接使用语法PREDICT BY进行推断任务。

    参数：模型名称和推断任务的输入列。

    返回值类型：bool

- db4ai\_predict\_by\_float4\(text, VARIADIC "any"\)

  描述：获取返回值为float4的模型进行模型推断任务。此函数为内部调用函数，建议直接使用语法PREDICT BY进行推断任务。

  参数：模型名称和推断任务的输入列。

  返回值类型：float

- db4ai\_predict\_by\_float8\(text, VARIADIC "any"\)

  描述：获取返回值为float8的模型进行模型推断任务。此函数为内部调用函数，建议直接使用语法PREDICT BY进行推断任务。

  参数：模型名称和推断任务的输入列。

  返回值类型：float

- db4ai\_predict\_by\_int32\(text, VARIADIC "any"\)

  描述：获取返回值为int32的模型进行模型推断任务。此函数为内部调用函数，建议直接使用语法PREDICT BY进行推断任务。

  参数：模型名称和推断任务的输入列。

  返回值类型：int

- db4ai\_predict\_by\_int64\(text, VARIADIC "any"\)

  描述：获取返回值为int64的模型进行模型推断任务。此函数为内部调用函数，建议直接使用语法PREDICT BY进行推断任务。

  参数：模型名称和推断任务的输入列。

  返回值类型：int

- db4ai\_predict\_by\_numeric\(text, VARIADIC "any"\)

  描述：获取返回值为numeric的模型进行模型推断任务。此函数为内部调用函数，建议直接使用语法PREDICT BY进行推断任务。

  参数：模型名称和推断任务的输入列。

  返回值类型：numeric

- db4ai\_predict\_by\_text\(text, VARIADIC "any"\)

  描述：获取返回值为字符型的模型进行模型推断任务。此函数为内部调用函数，建议直接使用语法PREDICT BY进行推断任务。

  参数：模型名称和推断任务的输入列。

  返回值类型：text

- db4ai\_predict\_by\_float8\_array\(text, VARIADIC "any"\)

  描述：获取返回值为字符型的模型进行模型推断任务。此函数为内部调用函数，建议直接使用语法PREDICT BY进行推断任务。

  参数：模型名称和推断任务的输入列。

  返回值类型：text

- gs\_explain\_model\(text\)

  描述：获取返回值为字符型的模型进行模型解析文本化任务。

  参数：模型名称。

  返回值类型：text


