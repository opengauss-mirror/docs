# ANALYZE<a name="ZH-CN_CONCEPT_0289895656"></a>

## 功能描述

用于收集数据库中有关表和索引的对象属性的统计信息。

## 注意事项

-   只允许在database为open模式的状态下执行
-   SYS用户和DBA具有收集、删除所有用户或对象的统计信息的权限
-   普通用户具有收集自己的表的统计信息的权限，具备ANALYZE ANY权限可以操作除SYS外所有用户的统计信息（包括收集、删除等）

## 语法格式

收集表统计信息：

```SQL
 ANALYZE { TABLE [ schema_name. ]table_name COMPUTE STATISTICS } [ FOR REPORT [ SAMPLE sample_percent ]]
```

收集索引统计信息：

```SQL
 ANALYZE { INDEX [ schema_name. ]index_name { COMPUTE STATISTICS | ESTIMATE STATISTICS sample_percent }}
```

## 参数说明

-   **[ schema_name. ]table_name**

    要获取其统计信息的表名，不能和用户下的表重名。
    
-   **COMPUTE STATISTICS**

    收集统计信息，固定语法

-   **ESTIMATE STATISTICS sample_percent**

    使用采样的方式收集，其中sample_percent为采样率，取值范围是`[0, 100]`的整数

-   **FOR REPORT**

    生成统计信息正确性检测报告，用于比较在某个采样率下的统计信息与系统中已收集的统计信息的偏差率。生成的检测报告会保存在LOG_HOME的opt目录下，其中LOG_HOME是安装时的日志目录

-   **SAMPLE sample_percent**

    使用采样率采样统计生成检测报告，sample_percent为采样率，取值范围是`[0, 100]`的整数，默认为100

## 示例

- **分析收集tester用户下表名为student的相关统计信息**

```
-- 删除表tester.student
 DROP TABLE IF EXISTS tester.student;

-- 创建表tester.student
 CREATE TABLE tester.student (student_id INT, student_name CHAR(100) NOT NULL, class_name VARCHAR(64), birthday_data DATETIME, other_info VARCHAR(100));

-- 分析收集tester.student的表统计信息
 ANALYZE TABLE tester.student COMPUTE STATISTICS;
 ANALYZE TABLE tester.student COMPUTE STATISTICS FOR REPORT;
 ANALYZE TABLE tester.student COMPUTE STATISTICS FOR REPORT SAMPLE 10;

-- 创建索引
 CREATE INDEX tester.idx on tester.student (student_id);

-- 分析收集tester.idx的索引统计信息
 ANALYZE TABLE tester.idx COMPUTE STATISTICS;
 ANALYZE TABLE tester.idx ESTIMATE STATISTICS 10;
```
