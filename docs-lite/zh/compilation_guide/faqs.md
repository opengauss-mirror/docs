# FAQ<a name="ZH-CN_TOPIC_0289899555"></a>

## 如何解决“Configure error: C compiler cannot create executables”报错<a name="ZH-CN_TOPIC_0289899543"></a>

### 问题<a name="zh-cn_topic_0283136296_section8138144317480"></a>

如何解决版本编译时出现的“Configure error: C compiler cannot create executables”报错。

### 回答<a name="zh-cn_topic_0283136296_section09254965110"></a>

报错原因：binarylibs文件不完整或者被损坏。

解决办法：若binarylibs是通过开源软件构建而来，请重新构建开源第三方软件；若binarylibs是代码下载而来，请重新下载。最后重新执行当前脚本或命令。

## 如何解决 "g++: fatal error: Killed signal terminated program cclplus" 报错<a name="ZH-CN_TOPIC_0289899547"></a>

### 问题<a name="zh-cn_topic_0283136304_section14676321181511"></a>

如何解决编译过程中出现的 "g++: fatal error:  Killed signal terminated program cclplus" 报错。

### 回答<a name="zh-cn_topic_0283136304_section1112815318159"></a>

报错原因：脚本中的编译过程都添加了-sj参数，并发数太大导致错误。

解决办法：编译过程中降低make 并发数，或者直接使用make命令。使用一键式脚本的话需要修改脚本。

## 如何解决"out of memory allocating xxx bytes after a total of xxx bytes"报错<a name="ZH-CN_TOPIC_0289899550"></a>

### 问题<a name="zh-cn_topic_0283136297_section1450054211918"></a>

如何解决编译过程中出现的“out of memory allocating xxx bytes after a total of xxx bytes”报错。

### 回答<a name="zh-cn_topic_0283136297_section19671565204"></a>

报错原因：脚本中的编译过程都添加了-sj参数，同时机器配置较低，内存不足，并发数太大导致错误。

解决办法：编译过程中降低make 并发数，或者直接使用make命令。使用一键式脚本的话需要修改脚本。
