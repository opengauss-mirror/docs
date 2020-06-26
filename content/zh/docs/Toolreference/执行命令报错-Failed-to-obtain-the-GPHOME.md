# 执行命令报错“Failed to obtain the GPHOME”<a name="ZH-CN_TOPIC_0249632274"></a>

## 问题现象<a name="zh-cn_topic_0237152452_zh-cn_topic_0059779180_s9068f5a3fa2545e483455c23e895c088"></a>

如果在root用户下执行工具命令时，出现如下信息，

```
Failed to obtain the GPHOME.
```

## 原因分析<a name="zh-cn_topic_0237152452_zh-cn_topic_0059779180_s1f781026f255460893d4a31199a5aa3d"></a>

可能是环境变量中GPHOME变量没有配置正确。需要检查环境变量GPHOME是否包含openGaussXML中gaussdbToolPath路径。

## 操作步骤<a name="zh-cn_topic_0237152452_zh-cn_topic_0059779180_s14e2709c0b7440f1a11c5c0d58d05885"></a>

使用如下命令检查$GPHOME路径。

```
echo $GPHOME
```

如果不是安装时默认的路径，请在配置文件中修改GPHOME的路径。

```
vim /etc/profile
```

