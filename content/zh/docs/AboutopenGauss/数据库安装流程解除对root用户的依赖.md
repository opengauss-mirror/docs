# 数据库安装流程解除对root用户的依赖

## 可获得性<a name="section56086982"></a>

本特性自openGauss 6.0.0-RC1版本开始引入。

## 特性简介<a name="section35020791"></a>

数据库安装流程解除对root用户的依赖，本次涉及的流程有预安装，安装，升级，扩容，校验。所有的这些流程让用户无需使用root用户进行操作，直接使用普通用户就能操作。

由于预安装，校验，扩容这个三个工具都是root用户，其他的工具都已经是普通用户执行。所有本次涉及的工具有：gs_preinstall，gs_checkos，gs_expansion。

本次特性针对预安装，校验，扩容这三个工具进行适配，确保数据库可以在普通用户下执行。

## 客户价值<a name="section46751668"></a>

openGauss的安装流程中，在预安装的时候使用的是root用户，到安装又是子用户，这样导致用户操作起来非常麻烦，而且容易出错；有些用户甚至拿不到root用户的权限。本次数据库安装流程解除对root用户的依赖，让用户无需使用root用户进行相应的操作，直接使用普通用户就能操作。

## 特性描述<a name="section18111828"></a>

数据库安装流程解除对root用户的依赖，本次涉及的流程有预安装，安装，升级，扩容，校验。所有的这些流程让用户无需使用root用户进行操作，直接使用普通用户就能操作。

由于预安装，校验，扩容这个三个工具都是root用户，其他的工具都已经是普通用户执行所有本次涉及的工具有：gs_preinstall，gs_checkos，gs_expansion。

本次特性针对预安装，校验，扩容这三个工具进行适配，确保数据库可以在普通用户下执行。

## 特性增强<a name="section28788730"></a>

自openGauss 6.0.0-RC1版本，用户可以使用普通用户来安装，校验，扩容数据库，这在一定程度上解决了普通用户没有root用户权限的问题；当然了对于以前使用root操作也可以进行了保留。

本次适配涉及的工具有：gs_preinstall，gs_checkos，gs_expansion。

## 特性约束<a name="section06531946143616"></a>

本次特性需要注意的是：有些操作，普通用户没有执行权限，还是需要root用户提前执行，可以参考以下资料。

<a href="../InstallationGuide/前提操作.md">前提操作</a>

## 依赖关系<a name="section57771982"></a>

无

## 参考文档<a name="section57771982"></a>

开源社区地址： https://gitee.com/opengauss/openGauss-OM。

gs_checkos文档：<a href="../ToolandCommandReference/gs_check.md">校验</a>

gs_preisntall文档：<a href="../ToolandCommandReference/gs_preinstall.md">预安装</a>

gs_expansion文档：<a href="../ToolandCommandReference/gs_expansion.md">扩容</a>
