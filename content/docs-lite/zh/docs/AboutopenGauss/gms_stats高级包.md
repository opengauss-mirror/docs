# gms_stats高级包

## 可获得性<a name="section5309649"></a>

本特性自openGauss 6.0.0 版本开始引入。

本特性于openGauss 7.0.0-RC1 版本进行增强，新增31个接口，详情参考[gms_stats概述](../ExtensionReference/gms_stats概述.md).

## 特性简介<a name="section47786844"></a>

目前gms_stats高级包只支持GATHER_SCHEMA_STATS接口，用于收集指定 Schema 中所有对象的统计信息。在安装完数据库后，直接通过create extension gms_stats;命令加载gms_stats插件。

## 客户价值<a name="section27428414"></a>

提高兼容性并且方便用户使用该高级包收集数据库对象统计信息。

## 特性描述<a name="section45529136"></a>

gms_stats高级包是一个基于openGauss的插件，用于良好地估计统计数据（尤其是针对较大的分区表），并能获得更好的统计结果，最终制定出速度更快的SQL执行计划。目前支持的接口有：GATHER_SCHEMA_STATS（用于收集某个schame下对象的统计信息）。

在openGauss 7.0.0-RC1 版本中，新增31个接口，详情参考[gms_stats概述](../ExtensionReference/gms_stats概述.md).

## 特性增强<a name="section7109043"></a>

在本地插件的基础上增加了gms_stats高级包的插件。

## 特性约束<a name="section06531946143616"></a>

-   不支持收集临时表信息

## 依赖关系<a name="section63981393"></a>

无。
