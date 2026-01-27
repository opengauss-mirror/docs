# BLOOM索引

## 可获得性<a name="section3480125215578"></a>

本特性自openGauss 7.0.0-RC2版本开始引入。

## 特性简介<a name="section581451519"></a>

openGauss的Bloom索引特性是一种节省空间的数据结构，用于测试元素是否是集合的成员。对于索引访问方法，它允许通过签名快速排除不匹配的元组，其签名大小在索引创建时确定。

## 客户价值<a name="section148987345437"></a>

为多列任意组合的等值查询提供一种高效且空间成本相对较低的解决方案。

## 特性描述<a name="section117041841924"></a>

当表具有许多属性并且查询测试它们的任意组合时，这种类型的索引最有用。传统的btree索引比bloom索引更快，但它可能需要许多btree索引来支持所有可能的查询，但只需要一个bloom索引。但请注意，bloom索引仅支持相等查询，而btree索引也可以执行不等式和范围搜索。

## 特性增强<a name="section21149265192"></a>

无。

## 特性约束<a name="section51513611925"></a>

- 仅支持表的列类型为int4类型和text类型。
- 仅支持行存表，行存段页式表。
- 不支持在线创建索引。
- 索引长度(签名)的长度最大为4096 bits。

## 依赖关系<a name="section20491151519254"></a>

无。

## 使用指导<a name="section20491151512543"></a>

- **使用bloom索引**

为表创建bloom索引，签名长度为80bits, 列1的值哈希到3个bit位，列2的值哈希到4个bit位。

```
CREATE TABLE tst (i int4, t text);
CREATE INDEX bloomidx ON tst USING bloom (i, t) WITH (length=80, col1 = 3, col2 = 4);
```
