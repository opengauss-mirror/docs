# gms_profiler高级包

## 可获得性<a name="section3104013"></a>

本特性自openGauss 6.0.0版本开始引入。

## 特性简介<a name="section27936123"></a>

gms_profiler是一个基于openGauss的插件，用于收集PL/pgSQL程序执行情况，通过分析收集的数据进而找到PL/pgSQL程序的性能瓶颈，统计程序的代码覆盖率。

## 客户价值<a name="section50098520"></a>

-   性能分析：找到存储过程的性能瓶颈，进而针对性优化，提高程序执行效率。
-   覆盖率统计：统计存储过程的语句执行次数，方便跟踪程序执行路径，提升测试覆盖率。

## 特性描述<a name="section48233501"></a>

-   通过CREATE Extension命令进行插件创建。
-   通过START_PROFILER开启收集，执行存储过程，STOP_PROFILER结束收集。
-   通过表plsql_profiler_runs 、plsql_profiler_units、plsql_profiler_data查看收集的统计信息，包括语句执行时间，执行次数等。

## 特性增强<a name="section31448332"></a>

无。

## 性能增强

无。
## 特性约束<a name="section06531946143616"></a>

- 仅支持Create extension命令方式加载插件。
- 不支持存储过程中存在异常处理的场景，会导致收集信息不准确。
- 如果测试过程调用了flush_data接口，不支持其后调用ROOLBACK操作，会报错。如需使用ROOLBACK, 建议统一通过stop_profiler接口完成收集信息写表。
- 插件中接口建议封装在存储过程中调用，直接调用可能会返回失败。

## 依赖关系<a name="section14599532"></a>

无。

