# gms_debug概述
gms_debug是一个基于openGauss的插件，用于实现服务器端调试器，提供一种调试服务端PL/SQL程序单元的方法。目前支持的接口有：

- gms_debug.initialize
- gms_debug.attach_session
- gms_debug.set_breakpoint
- gms_debug.continue
- gms_debug.get_runtime_info
- gms_debug.detach_session
- gms_debug.debug_off
- gms_debug.probe_version
