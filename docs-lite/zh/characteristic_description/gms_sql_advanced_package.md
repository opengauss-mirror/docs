# gms_sql高级包

## 可获得性<a name="section5309649"></a>

本特性自openGauss 7.0.0-RC1 版本开始引入。

## 特性简介<a name="section47786844"></a>

gms_sql是一个基于openGauss的插件,便于用户使用gms_sql高级包执行动态SQL，支持使用DDL和DML等。

## 客户价值<a name="section27428414"></a>

提高兼容性并且方便用户使用该插件执行动态SQL。

## 特性描述<a name="section45529136"></a>

在安装完数据库后，直接通过create extension gms_sql;命令加载gms_sql插件。

该插件目前支持以下接口：
OPEN_CURSOR	--打开一个cursor，并返回该cursor的id。
CLOSE_CURSOR	--用于关闭一个cursor。
COLUMN_VALUE	--用于将fetch结果中的指定列保存到返回参数中。
DEFINE_COLUMN	--用于定义返回的结果中的列结构。
EXECUTE	        --用于执行PARSE函数处理的SQL语句。
FETCH_ROWS	--用于载入结果集中的一行结果。
PARSE	        --解析当前语句的语法。
RETURN_RESULT	--用于将已执行语句的结果返回到客户端应用程序。
BIND_ARRAY	--该存储过程根据传入动态SQL进行table变量进行绑定作用。
BIND_VARIABLE	--该存储过程根据传入动态SQL进行变量的绑定。
DESCRIBE_COLUMNS、DESCRIBE_COLUMNS2、DESCRIBE_COLUMNS3	--该存储过程输出列的元数据信息。
DEFINE_ARRAY	--定义要从给定游标中选择的集合，仅用于SELECT语句。
IS_OPEN	        --该函数用于判断游标是否打开。
FETCH_ROWS      --执行动态SQL返回结果数据集
DEFINE_COLUMN   --动态SQL返回的变量名、通过COLUMN_VALUE存储过程定义返回列的值。

## 特性增强<a name="section7109043"></a>

在本地插件的基础上增加了gms_sql高级包的插件。

## 特性约束<a name="section06531946143616"></a>

仅支持Create extension命令方式加载插件。

## 依赖关系<a name="section63981393"></a>

无。
