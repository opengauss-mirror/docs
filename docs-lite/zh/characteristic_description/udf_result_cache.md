# UDF结果缓存

## 可获得性<a name="section3480125215575"></a>

本特性自openGauss 7.0.0-RC2版本开始引入。

## 特性简介<a name="section5814521587"></a>

openGauss的UDF 结果缓存（Result Cache）特性表示在一个计划执行周期（即单条语句的执行周期）内，支持共享确定性自定义函数（UDF, User Defined Function）的调用结果。

## 客户价值<a name="section148987345811"></a>

UDF 结果缓存（Result Cache）特性通过节省过程语言引擎的调用和运行开销，大幅提高UDF的执行性能。

## 特性描述<a name="section117041846581"></a>

UDF结果缓存在函数传入的参数值重复率高的场景下，能够起到较好的性能提升效果。UDF结果缓存的整体实现思想是在函数执行时将函数的入参及结果缓存在哈希表中，在函数下次调用时可以直接根据入参获取缓存的结果，这样可以减少函数的重复执行。

## 特性增强<a name="section21149265913"></a>

无。

## 特性约束<a name="section51513617597"></a>

- 函数结果缓存支持缓存的参数类型有：SMALLINT、INT、BIGINT、FLOAT、DOUBLE PRECISION、CHAR、VARCHAR、TEXT、VARCHAR2、NUMERIC、DATE、TIME、TIMESTAMP、TIMESTAMPTZ、BOOL、NVARCHAR2
- 使用内置过程语言（INTERNAL、C、SQL）的函数不支持函数结果缓存。
- RESULT_CACHE 属性为 FALSE 的函数不支持函数结果缓存。
- 含有非 IN 入参的函数不支持函数结果缓存。
- 函数返回结果集、存在可变参数、存在不支持的参数类型不支持函数结果缓存。
- 具有 VOLATILE 属性的函数、聚集函数、窗口函数、存在安全定义或参数数量不一致的函数不支持函数结果缓存。
- 函数中存在子程序、自治事务不支持函数结果缓存。
- 参数超过16个的函数不支持函数结果缓存。
- 除SELECT语句外的语句类型不支持函数结果缓存。
- 开启了SMP并行查询不支持函数结果缓存。
- 传入的参数值超过 127 个字符不支持函数结果缓存。
- 单条语句内UDF数量超过14个，第14个以后的函数不进行缓存。

## 依赖关系<a name="section20491151513592"></a>

无。
