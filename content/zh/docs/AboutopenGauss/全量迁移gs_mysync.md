# 全量迁移gs_mysync

## 可获得性<a name="section56086982"></a>

本特性自openGauss 5.0.0版本开始引入。

## 特性简介<a name="section35020791"></a>

gs_mysync工具是一个基于Python语言的MySQL到openGauss的复制工具。该工具提供了初始全量数据及对象（视图、触发器、函数、存储过程）的复制能力，可实现数据及对象从MySQL迁移至openGauss。对于数据的全量迁移，支持MySQL中各种数据类型的迁移，同时对于MySQL中的浮点数据类型，包括decimal、dec、numeric、float、float4、float8、real、double、double precision、fixed数据类型，可保证迁移后数据精度不丢失。

## 客户价值<a name="section46751668"></a>

通过使用gs_mysync工具，可完成数据从MySQL搬迁至openGauss数据库。

## 特性描述<a name="section18111828"></a>

gs_mysync工具提供数据全量复制功能，使得数据可以从MySQL迁移至openGauss数据库。对于数据的全量迁移，gs_mysync工具中存储了MySQL数据类型与openGauss数据类型之间的映射关系，可支持MySQL中各种数据类型的迁移。特别地，对于MySQL中的浮点数据类型，包括decimal、dec、numeric、float、float4、float8、real、double、double precision、fixed数据类型，若数据类型中显示指定或默认含有精度，将转化为openGauss中的number[p, s\]类型；若数据类型中未显示指定精度，将转化为openGauss中的number数据类型，基于此，可保证离线迁移和在线迁移后数据精度不丢失。

## 特性增强<a name="section28788730"></a>

无。

## 特性约束<a name="section06531946143616"></a>

-   支持MySQL 5.7版本。

## 依赖关系<a name="section57771982"></a>

gs_mysync工具依赖MySQL一键式迁移工具gs_rep_portal。

## 参考文档<a name="section57771982"></a>

开源社区地址： https://gitee.com/opengauss/openGauss-migration-portal/tree/master

详细参考文档： [README.md](https://gitee.com/opengauss/openGauss-migration-portal/blob/master/README.md) 

全量迁移社区地址：https://gitee.com/opengauss/openGauss-tools-chameleon

详细参考文档： [chameleon使用指南.md](https://gitee.com/opengauss/openGauss-tools-chameleon/blob/master/chameleon%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97.md) 