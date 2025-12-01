# 如何解决 "g++: fatal error: Killed signal terminated program cclplus" 报错<a name="ZH-CN_TOPIC_0289899547"></a>

## 问题<a name="zh-cn_topic_0283136304_section14676321181511"></a>

如何解决编译过程中出现的 "g++: fatal error:  Killed signal terminated program cclplus" 报错。

## 回答<a name="zh-cn_topic_0283136304_section1112815318159"></a>

报错原因：脚本中的编译过程都添加了-sj参数，并发数太大导致错误。

解决办法：编译过程中降低make 并发数，或者直接使用make命令。使用一键式脚本的话需要修改脚本。

