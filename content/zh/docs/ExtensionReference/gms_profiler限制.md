# gms_profiler限制

- 仅支持Create extension命令方式加载插件。
- 不支持存储过程中存在异常处理的场景，会导致收集信息不准确。
- 如果测试过程调用了flush_data接口，不支持其后调用ROOLBACK操作，会报错。如需使用ROOLBACK, 建议统一通过stop_profiler接口完成收集信息写表。