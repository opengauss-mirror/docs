# package<a name="ZH-CN_TOPIC_0000001151691213"></a>

package是一组相关存储过程、函数、变量、常量、游标等PL/SQL程序的组合，具有面向对象的特点，可以对PL/SQL程序设计元素进行封装。package中的函数具有统一性，创建、删除、修改都统一进行。

package包含包头（Package Specification）和Package Body两个部分，其中包头所包含的声明可以被外部函数、匿名块等访问，而在包体中包含的声明不能被外部函数、匿名块等访问，只能被包体内函数和存储过程等访问。

PACKAGE的创建请参考14.14.72节SQL语法部分。

