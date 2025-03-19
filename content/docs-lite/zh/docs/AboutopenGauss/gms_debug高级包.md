# gms_debug插件

## 可获得性

本特性自openGauss 7.0.0-RC1版本开始引入。

## 特性简介

[gms_debug插件](../ExtensionReference/gms_debug-Extension.md)用于实现服务器端调试器，提供一种调试服务端PL/SQL程序单元的方法。

## 客户价值

便于SQL开发者能够及时便捷的发现错误、修正错误，更高效、更快捷、高质量的进行功能开发。

## 特性描述

gms_debug是一个基于openGauss的插件，用于实现服务器端调试器，提供一种调试服务端PL/SQL程序单元的方法。目前支持的接口有：INITIALIZE、ATTACH_SESSION、DETACH_SESSION、SET_BREAKPOINT、CONTINUE、GET_RUNTIME_INFO。

## 特性增强

无。

## 特性约束

- 仅支持create extension命令方式加载插件。
- 用于单机下调试存储过程，需要用户具有gs_role_pldebugger权限。
- 调试端必须设置参数兼容模式`set behavior_compat_options='proc_outparam_override'`


## 依赖关系

无。
