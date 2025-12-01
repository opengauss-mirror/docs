# 如何解决"out of memory allocating xxx bytes after a total of xxx bytes"报错<a name="ZH-CN_TOPIC_0289899550"></a>

## 问题<a name="zh-cn_topic_0283136297_section1450054211918"></a>

如何解决编译过程中出现的“out of memory allocating xxx bytes after a total of xxx bytes”报错。

## 回答<a name="zh-cn_topic_0283136297_section19671565204"></a>

报错原因：脚本中的编译过程都添加了-sj参数，同时机器配置较低，内存不足，并发数太大导致错误。

解决办法：编译过程中降低make 并发数，或者直接使用make命令。使用一键式脚本的话需要修改脚本。

