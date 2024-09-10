# spqplugin限制

- 暂时仅支持[shared_preload_libraries](../DatabaseReference/内核资源使用.md)方式加载插件。
- 插件依赖xerces-c 3.0及以上版本
- 磁盘预留空间不够时，会导致执行语句失败。