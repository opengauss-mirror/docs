# gms_xmlparser高级包

## 可获得性

本特性在当前版本引入。

## 特性简介

[gms_xmlparser扩展](../extension_reference/gms_xmlparser.md)用于解析 XML 字符串或 XML 文件，并提供解析器句柄与文档句柄管理能力。

## 客户价值

`gms_xmlparser` 为 Oracle 兼容场景提供了较轻量的 XML 解析接口，便于应用在数据库侧完成 XML 文档装载、解析和对象流转。

## 特性描述

- 支持通过 `newparser` 创建解析器句柄。
- 支持将 XML 字符串或文件路径传入 `parse` 进行解析。
- 支持通过 `parsebuffer`、`parseclob` 将缓冲区内容写入解析器。
- 支持通过 `getdocument` 获取解析后的文档对象。
- 支持通过 `freeparser` 和 `gms_xmldom.freedocument` 释放内部资源。

## 特性增强

无。

## 特性约束

- 仅支持通过 `CREATE EXTENSION` 方式加载扩展。
- 依赖 `libxml`。
- 句柄类型为内部类型，不支持用户自行构造。
- 使用完成后需要主动释放解析器和文档对象。

## 依赖关系

- 依赖 `libxml`。

