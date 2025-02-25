# gms_match限制

- 仅支持create extension命令方式加载插件。
- gms_match插件不支持set schema，即执行`alter extension gms_match set schema new_name;`将提示报错。

