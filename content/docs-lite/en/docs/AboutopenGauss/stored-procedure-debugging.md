# Stored Procedure Debugging<a name="EN-US_TOPIC_0000001105395258"></a>

## Availability<a name="section1076382216287"></a>

This feature was introduced in openGauss 1.0.0. After the third-party library code directory structure was adjusted, this feature was temporarily deleted and is now available since openGauss 1.1.0.

## Introduction<a name="section732915401281"></a>

This feature provides a group of APIs for debugging stored procedures, such as breakpoint debugging and variable printing.

## Benefits<a name="section103921852122817"></a>

This feature improves user experience in developing stored procedures based on openGauss.

## Description<a name="section811017719290"></a>

Stored procedures are important database objects. They encapsulate SQL statement sets used for certain functions so that the statements can be easily invoked. A stored procedure usually contains many SQL statements and procedural execution structures, depending on the service scale. However, writing a large stored procedure is usually accompanied by logic bugs. It is difficult or even impossible to find the bugs by only executing the stored procedure. Therefore, a debugging tool is required.

The stored procedure debugging tool provides a group of debugging APIs to enable the stored procedure to be executed step by step. During the execution, you can set breakpoints and print variables so that SQL developers can detect and correct errors in time and develop functions more efficiently and with high quality.

## Enhancements<a name="section1359382119297"></a>

None.

## Constraints<a name="section13355203802911"></a>

None.

## Dependencies<a name="section101449415302"></a>

None.

