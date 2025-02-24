# 支持自定义ssh端口

## 可获得性<a name="section56086982"></a>

本特性自openGauss 7.0.0-RC1版本开始引入。

## 特性简介<a name="section35020791"></a>

ssh默认用的22端口，生产上22端口是要关掉的，只能指定一个固定端口替换22，需要支持用户自定义SSH端口，用户可配置。

## 客户价值<a name="section46751668"></a>

在客户的现场中，一般不使用22端口，使用自定义端口替代22端口，从而提高安全性。

## 特性描述<a name="section18111828"></a>

openGauss 通过om安装的时候，支持用户自定义ssh端口，正常安装数据库。

## 特性增强<a name="section28788730"></a>

无

## 特性约束<a name="section06531946143616"></a>

-  ssh端口除了默认22端口外，自定义的端口范围在1024-65535之间。

## 依赖关系<a name="section57771982"></a>

无

## 参考文档<a name="section57771982"></a>

开源社区地址： https://gitee.com/opengauss/openGauss-OM。

创建xml文件文档：<a href="../InstallationGuide/创建XML配置文件.md">创建xml配置文件</a>

gs_sshexkey文档：<a href="../ToolandCommandReference/gs_sshexkey.md">gs_sshexkey</a>

gs_expansion文档：<a href="../ToolandCommandReference/gs_expansion.md">扩容</a>

一站式安装文档：<a href="../InstallationGuide/一站式安装指南.md">扩容</a>
