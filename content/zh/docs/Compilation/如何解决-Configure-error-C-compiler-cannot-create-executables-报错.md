# 如何解决“Configure error: C compiler cannot create executables”报错<a name="ZH-CN_TOPIC_0241496984"></a>

## 问题<a name="section8138144317480"></a>

如何解决版本编译时出现的“Configure error: C compiler cannot create executables”报错。

## 回答<a name="section09254965110"></a>

报错原因：binarylibs文件不完整或者被损坏。

解决办法：若binarylibs是通过开源软件构建而来，请重新构建开源第三方软件；若binarylibs是代码下载而来，请重新下载。最后重新执行当前脚本或命令。

