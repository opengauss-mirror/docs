# gms_raw插件

## 可获得性

本特性自openGauss 7.0.0-RC1版本开始引入。

## 特性简介

[gms_raw插件](../ExtensionReference/gms_raw-Extension.md)用于对十六进制raw类型数据进行转换和操作。

## 客户价值

gms_raw插件用于对十六进制raw类型数据进行转换和操作。

## 特性描述

- gms_raw是一个基于openGauss的插件，用于对十六进制raw类型数据进行转换和操作。

## 特性增强

无。

## 特性约束

- 仅支持create extension命令方式加载插件。
- gms_raw插件不支持set schema，即执行`alter extension gms_raw set schema new_name;`将提示报错。

## 依赖关系

无。