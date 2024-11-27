# gms_compress限制

- 仅支持`create extension`命令方式加载插件。
- 仅支持最大使用5个（未）压缩句柄。
- 仅支持压缩row和blob类型。
- 每个句柄存储的数据不能超过1GB。