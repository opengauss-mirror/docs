# 如何解决“Configure error: Ccompiler cannot create executables”报错<a name="ZH-CN_TOPIC_0241496984"></a>

## 问题<a name="section8138144317480"></a>

如何解决版本编译时出现的“Configure error: Ccompiler cannot create executables”报错。

## 回答<a name="section09254965110"></a>

报错原因：子仓库文件不完整或者被删除。

解决办法：进入/sda/openGauss-server/binarylibs, 执行命令**git pull && git lfs pull**下载缺失的文件，并重新执行当前脚本或命令。

