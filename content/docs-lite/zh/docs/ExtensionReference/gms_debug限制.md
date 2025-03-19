# gms_debug限制

- 仅支持create extension命令方式加载插件。
- 用于单机下调试存储过程，需要用户具有gs_role_pldebugger权限。
- 调试端必须设置参数兼容模式`set behavior_compat_options='proc_outparam_override'`