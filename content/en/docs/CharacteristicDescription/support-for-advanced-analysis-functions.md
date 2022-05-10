# Support for Advanced Analysis Functions<a name="EN-US_TOPIC_0000001135403981"></a>

## Availability<a name="section5309649"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section47786844"></a>

None

## Benefits<a name="section27428414"></a>

Window functions are provided for advanced data analysis and processing. The window function groups the data in a table in advance. Each row belongs to a specific group. Then, a series of association analysis calculations are performed on the group. In this way, some attributes of each tuple in the set and association information with other tuples can be mined.

## Description<a name="section45529136"></a>

The following uses an example to describe the window analysis function: Compare the salary of each person in a department with the average salary of the department.

```
SELECT depname, empno, salary, avg(salary) OVER (PARTITION BY depname) FROM empsalary; 
depname | empno | salary | avg
-----------+-------+--------+----------------------- 
develop | 11 | 5200 | 5020.0000000000000000 
develop | 7 | 4200 | 5020.0000000000000000 
develop | 9 | 4500 | 5020.0000000000000000 
develop | 8 | 6000 | 5020.0000000000000000 
develop | 10 | 5200 | 5020.0000000000000000 
personnel | 5 | 3500 | 3700.0000000000000000 
personnel | 2 | 3900 | 3700.0000000000000000 
sales | 3 | 4800 | 4866.6666666666666667
sales | 1 | 5000 | 4866.6666666666666667 
sales | 4 | 4800 | 4866.6666666666666667 
(10 rows)
```

The analysis function  **avg\(salary\) OVER \(PARTITION BY depname\)**  easily calculates each employee's salary and the average salary of the department.

Currently, the system supports the following analysis functions:  **row\_number\(\)**,  **rank\(\)**,  **dense\_rank\(\)**,  **percent\_rank\(\)**,  **cume\_dist\(\)**,  **ntile\(\)**,  **lag\(\)**,  **lead\(\)**,  **first\_value\(\)**,  **last\_value\(\)**, and  **nth\_value\(\)**. For details about functions and statements, see "SQL Reference \> Functions and Operators \> Window Functions" in the  _Developer Guide_.

## Enhancements<a name="section7109043"></a>

None

## Constraints<a name="section06531946143616"></a>

None

## Dependencies<a name="section63981393"></a>

None

