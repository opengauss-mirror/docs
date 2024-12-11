# gms_xmlgen高级包

## 可获得性

本特性自openGauss 7.0.0-RC1版本开始引入。

## 特性简介

本特性主要用来实现[gms_xmlgen高级包](../ExtensionReference/gms_xmlgen-Extension.md)，用于将sql查询结果转换成规范的xml格式。

## 客户价值

gms_xmlgen高级包主要用于帮助开发者获取xml格式的sql结果。可以根据需要对xml的数据展示方式和输出数据量进行设定。

## 特性描述

- 通过sql query或者cursor查询数据库，以CLOB或xmltype形式返回xml结果。
- 可以设置根标签、行标签或者数组标签输出定制xml结构。
- 可以创建上下文，通过上下文句柄处理xml文档，包括设置属性、获取文档、获取处理行数和关闭句柄等。
- 可以将xml文档中的特殊字符进行转义。
- 可以通过设置数据范围，控制xml数据量。

## 特性增强

无。

## 特性约束

- 仅支持在A模式数据库创建。
- 不支持轻量版数据库。
- 仅支持`create extension`命令方式加载插件后再使用。
- gms_xmlgen高级包安装后如需升级，须先删除，避免相关升级脚本依赖，导致升级失败。
- 涉及xmltype的接口需要设置GUC参数bind_procedure_searchpath。

## 依赖关系

- gms_xmlgen高级包依赖libxml库。
- gms_xmlgen高级包依赖xmltype类型。

