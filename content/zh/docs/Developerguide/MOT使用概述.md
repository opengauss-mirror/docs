# MOT使用概述<a name="ZH-CN_TOPIC_0280525102"></a>

MOT作为openGauss的一部分自动部署。有关如何计算和规划所需的内存和存储资源以维持工作负载的说明，请参阅[MOT准备](MOT准备.md)。参考[MOT部署](MOT部署.md)了解MOT中所有的配置，以及服务器优化的非必须选项。

使用MOT的方法非常简单。MOT命令的语法与基于磁盘的表的语法相同，并支持大多数标准，如PostgreSQL SQL、DDL和DML命令和功能，如存储过程。只有MOT中的创建和删除表语句与openGauss中基于磁盘的表的语句不同。您可以参考[MOT使用](MOT使用.md)了解这两个简单命令的说明，如何将基于磁盘的表转换为MOT，如何使用查询原生编译和PREPARE语句获得更高的性能，以及了解外部工具支持和MOT引擎的限制。

[MOT管理](MOT管理.md)介绍了如何进行数据库维护，以及监控和分析日志和错误报告。最后，[MOT样例TPC-C基准](MOT样例TPC-C基准.md)介绍了如何执行标准TPC-C基准测试。

-   阅读以下内容了解如何使用MOT：

    <a name="table28609126"></a>
    <table><tbody><tr id="row984423"><td class="cellrowborder" valign="top" width="100%"><p id="p12629440"><a name="p12629440"></a><a name="p12629440"></a><a name="image46556104"></a><a name="image46556104"></a><span><img id="image46556104" src="figures/zh-cn_image_0280525201.png" width="249.375" height="262.34250000000003"></span></p>
    </td>
    </tr>
    </tbody>
    </table>
