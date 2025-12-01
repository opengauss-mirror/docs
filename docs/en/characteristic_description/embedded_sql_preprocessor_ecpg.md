# Embedded SQL Preprocessor ECPG<a name="EN-US_TOPIC_0000001088406674"></a>

## Availability<a name="section663215"></a>

This feature is available since openGauss 3.1.0.

## Introduction<a name="section5968939"></a>

Embedded SQL programs in C language are supported.

## Benefits<a name="section53720453"></a>

Embedded SQL programs compiled for other SQL databases can be easily migrated to openGauss, ensuring quick service migration.

## Description<a name="section13722030"></a>

An embedded SQL program consists of code written in an ordinary programming language, in this case C, mixed with SQL commands in specially marked sections. To build the program, the source code (\*.pgc) is first passed through the embedded SQL preprocessor, which converts it to an ordinary C program (\*.c), and afterwards it can be processed by a C compiler. Converted ECPG applications call functions in the libpq library through the embedded SQL library (ecpglib), and communicate with the openGauss server using the normal frontend-backend protocol.
The embedded SQL program has an advantage over other methods in processing SQL commands for C code.
1. It handles the lengthy information transfer between variables in C programs.
2. The SQL code in the program is checked during compilation to ensure syntax correctness.
3. SQL embedded in C is specified in SQL standards and is supported by many other SQL database systems.

## Enhancements<a name="section56389407"></a>

None.

## Constraints<a name="section06531946143616"></a>

ECPG supports most of the openGauss SQL syntax. However, the current syntax and lexical of the ECPG do not support the processing of anonymous block statements and package statements. Therefore, anonymous block statements and package creation statements cannot be used as embedded SQL statements.

## Dependencies<a name="section37742617"></a>

None.
