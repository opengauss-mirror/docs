# MySQL-\>openGauss迁移工具chameleon<a name="ZH-CN_TOPIC_0000001264707837"></a>

## 可获得性<a name="section56086982"></a>

本特性自openGauss 3.0.0版本开始引入。

## 特性简介<a name="section35020791"></a>

chameleon工具是一个基于Python语言的MySQL到openGauss的实时复制工具。该工具提供了初始全量数据的复制以及增量数据的实时复制能力，可实现数据从MySQL迁移至openGauss。对于数据的全量和增量迁移，支持MySQL中各种数据类型的迁移，同时对于MySQL中的浮点数据类型，包括decimal、dec、numeric、float、float4、float8、real、double、double precision、fixed数据类型，可保证迁移后数据精度不丢失。

## 客户价值<a name="section46751668"></a>

通过使用chameleon工具，可完成数据从MySQL搬迁至openGauss数据库。

## 特性描述<a name="section18111828"></a>

chameleon工具提供数据全量和增量复制功能，使得数据可以从MySQL迁移至openGauss数据库。对于数据的全量和增量迁移，chameleon工具中存储了MySQL数据类型与openGauss数据类型之间的映射关系，可支持MySQL中各种数据类型的迁移。特别地，对于MySQL中的浮点数据类型，包括decimal、dec、numeric、float、float4、float8、real、double、double precision、fixed数据类型，若数据类型中显示指定或默认含有精度，将转化为openGauss中的numeric\[p, s\]类型；若数据类型中未显示指定精度，将转化为openGauss中的numeric数据类型，基于此，可保证离线迁移和在线迁移后数据精度不丢失。

## 特性增强<a name="section28788730"></a>

无。

## 特性约束<a name="section06531946143616"></a>

-   支持MySQL 5.7版本。
-   对于数据类型映射后仍存在不兼容的情形，将导致表数据迁移失败，但不会终止后续的数据离线迁移过程。

## 依赖关系<a name="section57771982"></a>

无。
