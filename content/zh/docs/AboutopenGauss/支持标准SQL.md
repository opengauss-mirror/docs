# 支持标准SQL

## 可获得性<a name="section38134078"></a>

本特性自openGauss 1.0.0版本开始引入。

## 特性简介<a name="section7662382"></a>

SQL是用于访问和处理数据库的标准计算机语言。SQL标准的定义分成核心特性以及可选特性，绝大部分的数据库都没有100%支撑SQL标准。

openGauss数据库支持SQL:2011大部分的核心特性，同时还支持部分的可选特性，为使用者提供统一的SQL界面。

## 客户价值<a name="section1852576"></a>

标准SQL的引入为所有的数据库厂商提供统一的SQL界面，减少使用者的学习成本和应用程序的迁移代价。

## 特性描述<a name="section16673190"></a>

具体的特性列表请参见《SQL参考》中“SQL语言结构和语法”章节。

## 特性增强<a name="section15840983"></a>

支持ALTER TABLE语句修改表字段和引用视图解耦。

支持TABLESAMPLE子句实现数据采样。

支持带外层PRIOR关键字的CONNECT BY子句。

以下特性自openGauss 6.0.0开始支持：

支持to_binary_float(expr default return_expr on conversion error)。

支持IS [NOT] NAN、IS [NOT] INFINITE。

支持float(n)范围为`1~126`。

支持numeric(p, s)类型中参数`s`允许为负数。

## 特性约束<a name="section06531946143616"></a>

float(n)范围支持`1~126`需要开启参数`behavior_compat_options='float_as_numeric'`。

## 依赖关系<a name="section8351126"></a>

无。

