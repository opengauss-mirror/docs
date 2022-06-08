# DB4AI: Database-driven AI<a name="EN-US_TOPIC_0000001263249913"></a>

## Availability<a name="section1420315335481"></a>

This feature is available since openGauss 2.1.0.

## Introduction<a name="section18982185114134"></a>

DB4AI uses database capabilities to drive AI tasks and implement data storage and technology stack isomorphism. By integrating AI algorithms into the database, openGauss supports the native AI computing engine, model management, AI operators, and native AI execution plan, providing users with inclusive AI technologies. Different from the traditional AI modeling process, DB4AI one-stop modeling eliminates repeated data flowing among different platforms, simplifies the development process, and plans the optimal execution path through the database, so that developers can focus on the tuning of specific services and models. It outcompetes similar products in ease-of-use and performance.

## Benefits<a name="section1160749171918"></a>

-   With this feature, you do not need to manually compile AI model code. Instead, you can use out-of-the-box SQL statements to train and forecast machine learning models, reducing the learning and usage costs.
-   Extra overhead that is caused by fragmented data storage and repeated data migration can be avoided.
-   A higher execution efficiency can be achieved. With this feature, the AI model training efficiency is high. Compared with manual model training, the performance is improved by several times.
-   Stricter security protection prevents data leakage during AI model training.

## Description<a name="section165492040132317"></a>

openGauss supports the native DB4AI capability. By introducing native AI operators, openGauss simplifies the operation process and fully utilizes the optimization and execution capabilities of the database optimizer and executor to obtain the high-performance model training capability in the database. With a simpler model training and forecast process and higher performance, developers can focus on model tuning and data analysis in a shorter period of time, avoiding fragmented technology stacks and redundant code implementation.

## Enhancements<a name="section818524702617"></a>

More algorithms are supported in openGauss 3.0.0.

## Constraints<a name="section13678185110268"></a>

-   The database is running properly.

## Dependencies<a name="section11899817102719"></a>

None.

