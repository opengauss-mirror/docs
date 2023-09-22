# ndpplugin GUC参数说明

## ndpplugin.enable_ndp

**参数说明**：参数值为布尔类型，该参数用于使能插件。

**取值范围**：布尔型

- on表示开启算子卸载特性。
- off表示关闭算子卸载特性。

**默认值**：off

## ndpplugin.pushdown_min_blocks

**参数说明**：参数值为整数，该参数限制下推页面数阈值，页面数小于阈值的表即使满足下推条件也不会走下推流程。

**取值范围**：[0, INT_MAX / 1000]

**默认值**：0

## ndpplugin.ndp_port

**参数说明**：参数值为整数，该参数指定存储集群libsmartscan进程监听的端口号，用于和libsmartscan进程通信，发送任务。

**取值范围**：字符串

**默认值**：./

## ndpplugin.crl_path

**参数说明**：参数为字符串，该参数仅在开启SSL时有效，指定CRL证书路径。

**取值范围**：字符串

**默认值**：./
