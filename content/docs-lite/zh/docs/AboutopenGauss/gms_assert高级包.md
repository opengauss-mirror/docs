# gms_assert高级包

## 可获得性

本特性自openGauss 7.0.0-RC1版本开始引入。

## 特性简介

本特性主要用来实现[GMS_ASSERT高级包](../ExtensionReference/gms_assert-Extension.md)，用于验证输入值的属性。

## 客户价值

-   gms_assert可用于对输入值进行检验，防止SQL注入等问题。

## 特性描述

-   通过CREATE Extension命令进行插件创建。
-   gms_assert包可用于验证输入值属性，包括验证字符串的合法性（是否正确使用引号），验证数据库对象名称的合法性。

## 特性增强

无。

## 性能增强

无。
## 特性约束

- 仅支持`create extension`命令方式加载插件。

## 依赖关系

无。
