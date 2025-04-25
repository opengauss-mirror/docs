# 全量迁移gs_mysync

## 可获得性<a name="section56086982"></a>

本特性自openGauss 5.0.0版本开始引入。

## 特性简介<a name="section35020791"></a>

gs_mysync工具是一个基于Python语言的MySQL到openGauss的复制工具。该工具提供了初始全量数据及对象（视图、触发器、函数、存储过程）的复制能力，可实现数据及对象从MySQL迁移至openGauss。对于数据的全量迁移，支持MySQL中各种数据类型的迁移，同时对于MySQL中的浮点数据类型，包括decimal、dec、numeric、float、float4、float8、real、double、double precision、fixed数据类型，可保证迁移后数据精度不丢失。

## 客户价值<a name="section46751668"></a>

通过使用gs_mysync工具，可完成数据从MySQL搬迁至openGauss数据库。

## 特性描述<a name="section18111828"></a>

gs_mysync工具提供数据全量复制功能，使得数据可以从MySQL迁移至openGauss数据库。对于数据的全量迁移，gs_mysync工具中存储了MySQL数据类型与openGauss数据类型之间的映射关系，可支持MySQL中各种数据类型的迁移。

gs_mysync工具支持在指定版本和架构的系统（包括CentOS7、openEuler20.03、openEuler22.03系统版本，x86_64和aarch64架构）上进行离线安装，无需连接外部网络。

gs_mysync工具全量数据导入支持两种方式：(1) 从MySQL库查询数据导入openGauss；(2)从指定CSV文件导入特定的表数据。其中方式二为5.1.0版本新增特性，通过合理配置csv_dir、contain_columns、column_split三个参数，可采用方式二进行数据导入，以提高全量迁移的性能。

## 特性增强<a name="section28788730"></a>

- 自openGauss 6.0.0-RC1版本，全量迁移支持与数据校验协同进行，在进行多表迁移时，单个表迁移完成后即可进行数据校验，缩短整体迁移校验时间。该特性全量迁移侧详细信息可参考<a href="https://gitcode.com/opengauss/openGauss-tools-chameleon/blob/master/chameleon%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97.md ">chameleon使用指南.md</a> 中参数with_datacheck相关描述。

## 特性约束<a name="section06531946143616"></a>

-   支持MySQL 5.7版本。

## 依赖关系<a name="section57771982"></a>

gs_mysync工具依赖MySQL一键式迁移工具gs_rep_portal。

## 参考文档<a name="section57771982"></a>

开源社区地址：[gs_rep_portal](https://gitcode.com/opengauss/openGauss-migration-portal/tree/5.1.0) 

详细参考文档： <a href="https://gitcode.com/opengauss/openGauss-migration-portal/blob/5.1.0/README.md ">README.md</a> 

全量迁移社区地址：[gs_mysync](https://gitcode.com/opengauss/openGauss-tools-chameleon/tree/5.1.0/)

详细参考文档： <a href="https://gitcode.com/opengauss/openGauss-tools-chameleon/blob/5.1.0/chameleon%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97.md ">chameleon使用指南.md</a>

