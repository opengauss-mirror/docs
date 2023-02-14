# LLVM使用建议

目前LLVM在数据库内核侧已默认打开，用户可结合上述的分析进行配置，总体建议如下：

1.  设置合理的work\_mem，在允许的条件下尽可能设置较大的work\_mem，如果出现大量数据落盘，则建议关闭LLVM动态编译优化（通过设置enable\_codegen=off实现）。
2.  设置合理的codegen\_cost\_threshold（默认值为10000），确保小数据量场景下避免使用LLVM动态编译优化。当codegen\_cost\_threshold的值设定后，因使用LLVM动态编译优化引入性能劣化，则建议增加codegen\_cost\_threshold的取值。
3.  对于表达式计算使用LLVM动态编译优化，如果存在大量的调用C-函数的场景，建议关闭LLVM动态编译优化。

    >![](public_sys-resources/icon-note.png) **说明：**
    >在资源许可的情况下，数据量越大，可获得的性能提升效果越好。
