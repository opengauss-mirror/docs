# SQL语法审计工具libog_query

## 可获得性<a name="section56086982"></a>

本特性自openGauss 7.0.0-RC1版本开始引入。

## 特性简介<a name="section35020791"></a>

libog_query 是一个支持离线审计分析SQL语句在openGauss中的语法合法性的工具。

## 客户价值<a name="section46751668"></a>

通常使用数据库的商业公司对使用关键数据库执行SQL具有以下的管理流程：开发人员在业务平台上选择数据库，提交SQL，DBA收到工单以后进行审核，通过后执行。这样对于DBA审核工作量大，容易发生因人为疏忽的问题。基于本语法审计工具，DBA可以实现定制化在openGauss上的SQL语法审核的自动化流程，提高DBA的工作效率，减少人为错误，同时利用工具记录日志也有助于后续的问题回溯定位和分析。

## 特性描述<a name="section18111828"></a>

libog_query 工具对外提供so和接口，传入SQL后判断该SQL在语法上能否在openGauss上执行。so供第三方软件集成，第三方软件集成该so后，可利用该so提供的接口，离线进行SQL兼容性语法分析，无需连接到openGauss。

对于SQL语句审计结果的支持判断：
   - 语法兼容：openGauss支持该语法，但是实际使用过程中可能包含字段类型不支持、函数不存在等语义问题。
   - 语法不兼容：openGauss不支持该语法。


## 特性增强<a name="section28788730"></a>

- 自openGauss 7.0.0-RC1版本 SQL语法审计工具支持通过第三方软件集成提供的so和接口，对SQL兼容性进行离线语法分析。
- 自openGauss 5.0.0-LTS版本 语法兼容性评估工具支持利用已有的openGauss节点在线评估数据SQL文本在openGauss的兼容性，包括语法兼容和完全兼容分析。

## 特性约束<a name="section06531946143616"></a>

1. 仅支持单行SQL文本输入，且SQL之间以`;`分割。
2. 支持A库和B库兼容性语法检查场景，默认为B库兼容性，A库需要单独编译，其他兼容性库的语法不兼容语句的报错信息可能不准确。
3. 不支持存储过程的语法兼容校验。
4. 仅支持审计在 openGauss 的语法解析层的错误。属于语义分析层或执行层等阶段处理的报错，本工具不支持审计：如字段类型不支持、函数不存在、表不存在，枚举类型值的匹配，Insert语句的目标列和值表达式的匹配等场景属于语义层，工具不会做检查。

## 依赖关系<a name="section57771982"></a>

无。

## 参考文档<a name="section57771982"></a>

开源社区地址： [libog_query](https://gitee.com/opengauss/openGauss-server/tree/master/src/bin/libog_query/)

详细参考文档： <a href="https://gitee.com/opengauss/openGauss-server/blob/master/src/bin/libog_query/readme.md ">README.md</a>


