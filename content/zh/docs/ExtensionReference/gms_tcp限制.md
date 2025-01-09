# gms_tcp限制.md

- 仅支持Create extension命令方式加载插件。
- 只支持在匿名块和PL/pgSQL中使用。
- 在Create extension gms_tcp；之前要保证数据库中没有gms_tcp这个schema。
