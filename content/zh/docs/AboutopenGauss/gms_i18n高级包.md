# gns_i18n高级包

## 可获得性

本特性自openGauss 7.0.0-RC1 版本开始引入

## 特性简介

gms_i18n高级包主要实现国际化功能。在安装完数据库后，直接通过插件加载方式创建。

## 客户价值

gms_i18n高级包提供raw_to_char及string_to_raw字符串转换函数。

## 特性描述
-   通过CREATE Extension命令进行插件创建。
-   支持raw_to_char命令，将RAW数据从有效的字符集转换为数据库字符集中的VARCHAR字符串。
-   支持string_to_raw命令，将VARCHAR符串转换为另一个有效的字符集，并将结果作为原始数据返回。

## 特性增强

无

## 特性约束

- 仅支持Create extension命令方式加载插件后再使用。

## 依赖关系

无。