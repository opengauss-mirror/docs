# gms_match插件

## 可获得性

本特性自openGauss 7.0.0-RC1版本开始引入。

## 特性简介

[gms_match插件](../ExtensionReference/gms_match-Extension.md)用于比较两个字符串之间的相似度。

## 客户价值

gms_match插件用于比较两个字符串之间的相似度。

## 特性描述

- gms_match是一个基于openGauss的插件，用于比较两个字符串之间的相似度。

## 特性增强

无。

## 特性约束

- 仅支持create extension命令方式加载插件。
- gms_match插件不支持set schema，即执行`alter extension gms_match set schema new_name;`将提示报错。

## 依赖关系

无。
