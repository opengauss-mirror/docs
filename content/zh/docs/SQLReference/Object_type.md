# object type

object type，即对象类型，由属性，和相关的处理这些属性的方法构成。也可以在对象数据类型作为父类型，在父类型的基础上创建子类型，使其继承父类型的属性以及方法。提供面向对象能力。

object type包含属性、以及处理这些属性的方法。CREATE TYPE中声明对象类型的属性与方法，CREATE TYPE BODY中实现对象类型的方法。

OBJECT TYPE的创建请参见[CREATE TYPE](CREATE-TYPE.md)

>![](public_sys-resources/icon-notice.png) **须知：** 
>-   对象类型相关功能仅在A兼容模式下允许使用
>-   暂不支持多态功能(父类型接纳子类型数据或者子类型接纳父类型数据)
>-   暂不支持对象类型功能嵌套集合类型使用(即不支持对象类型的集合类型, table of object_type)
>-   暂不支持new关键字构造对象实例，仅支持使用typename(param1, param2)的方式隐式构造对象实例。

