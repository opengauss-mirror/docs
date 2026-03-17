# CREATE VIEW 使用文档

## 概述

CREATE VIEW 语句用于在数据库中创建一个视图，该视图基于一个或多个表的 SELECT 查询结果。视图本身不存储数据，而是在查询时动态生成结果。

## 语法

```sql
CREATE [OR REPLACE] [FORCE] VIEW view_name [(column_name [, column_name] ...)]
AS subquery;
```

## 参数说明

| 参数 | 说明                  |
|------|---------------------|
| OR REPLACE | 如果视图已存在，则替换它        |
| FORCE | 即使基础表不存在或查询无效，也创建视图 |
| view_name | 要创建的视图名称            |
| column_name | 视图的列名列表             |
| subquery | 定义视图的 SELECT 查询语句   |

## 系统视图

系统预定义的视图，用于提供数据库的运行时信息和元数据。视图的名称通常以 `DV_` 开头。

### 常见系统视图

- `DV_BUFFER_POOLS`：缓冲池信息
- `DV_DATA_FILES`：数据文件信息
- `DV_TABLESPACES`：表空间信息
- `DV_PARAMETERS`：参数信息
- `DV_GLOBAL_TRANSACTIONS`：全局事务信息

### 查询系统视图

```sql
-- 查询缓冲池信息
SELECT * FROM DV_BUFFER_POOLS;

-- 查询系统参数
SELECT * FROM DV_PARAMETERS;
```

## 使用示例

### 基本视图创建

```sql
-- 创建一个基于 employees 表的视图，只包含特定列
CREATE VIEW employee_view AS
SELECT employee_id, first_name, last_name, department_id, hire_date
FROM employees;
```

### 指定列名

```sql
-- 创建视图并指定自定义列名
CREATE VIEW employee_department_view (emp_id, emp_name, dept_id)
AS
SELECT employee_id, CONCAT(first_name, ' ', last_name), department_id
FROM employees;
```

### 带条件的视图

```sql
-- 创建一个只包含销售部门员工的视图
CREATE VIEW sales_employee_view AS
SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE department_id = 100;
```

### 基于多表连接的视图

```sql
-- 创建一个连接 employees 和 departments 表的视图
CREATE VIEW employee_details_view AS
SELECT e.employee_id, e.first_name, e.last_name, e.salary, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id;
```

### 使用 OR REPLACE 选项

```sql
-- 修改现有的视图
CREATE OR REPLACE VIEW employee_view AS
SELECT employee_id, first_name, last_name, department_id, hire_date, salary
FROM employees;
```

### 使用 FORCE 选项

```sql
-- 即使基础表不存在，也创建视图
CREATE OR REPLACE FORCE VIEW future_employee_view (emp_id, emp_name, dept_id)
AS
SELECT employee_id, first_name, department_id
FROM future_employees;
```

### 带聚合函数的视图

```sql
-- 创建一个按部门统计员工数量和平均工资的视图
CREATE VIEW department_statistics_view AS
SELECT department_id, COUNT(*) AS employee_count, AVG(salary) AS average_salary
FROM employees
GROUP BY department_id;
```

### 带 WITH AS 子句的视图

```sql
-- 创建一个使用 WITH AS 子句的视图
CREATE VIEW top_employees_view AS
WITH high_salary_employees AS (
    SELECT employee_id, first_name, last_name, salary
    FROM employees
    WHERE salary > 10000
)
SELECT * FROM high_salary_employees
ORDER BY salary DESC;
```
