# GMS_OUTPUT工具包

## 可获得性

本特性自openGauss 6.0.0版本开始引入

## 特性简介

特性主要用来实现[GMS_OUTPUT高级包](../ExtensionReference/gms_output-Extension.md)，用于实现多个输出相关的函数接口供用户使用。

## 客户价值

GMS_OUTPUT包主要用于调试PL/SQL程序。它允许开发者从存储过程、包等中发送信息（messages），这些信息可以被捕获并显示在客户端（如gsql）上，从而帮助开发者定位问题、理解程序执行流程。

## 特性描述

- `GMS_OUTPUT` 最显著的特点是作为 PL/SQL 代码的调试工具。它允许开发者在 PL/SQL 代码的任何位置插入 `GMS_OUTPUT.PUT_LINE` 或 `GMS_OUTPUT.PUT` 调用，以输出变量值、消息或执行状态。这对于诊断问题、理解代码逻辑和执行流程至关重要。
- 通过 `GMS_OUTPUT.ENABLE` 和 `GMS_OUTPUT.DISABLE` 过程，可以控制是否将输出发送到客户端。该过程本质上是开辟存储messages的缓冲区和释放缓冲区操作，这允许开发者在需要时启用调试输出，而在生产环境中禁用它。
- 通过`GMS_OUTPUT.GET_LINE`和`GMS_OUTPUT.GET_LINES`过程从缓冲区中检索行数组，并读取一行或指定行数的文本信息。
- `GMS_OUTPUT.NEW_LINE`过程则向行缓冲区中放置一个行结束标记。

## 特性增强

无

## 特性约束

- 仅支持Create extension命令方式加载插件后再使用。

## 依赖关系

无。

