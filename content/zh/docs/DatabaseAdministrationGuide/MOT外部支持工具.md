# MOT外部支持工具

为了支持MOT，修改了以下外部openGauss工具。请确保使用的工具是最新版本。下面将介绍与MOT相关的用法。有关这些工具及其使用方法的完整说明，请参阅《工具与命令参考》。

## gs\_ctl（全量和增量）<a name="section57446177"></a>

此工具用于从主服务器创建备服务器，以及当服务器的时间线偏离后，将服务器与其副本进行同步。

在操作结束时，工具将获取最新的MOT检查点，同时考虑checkpoint\_dir配置值。

检查点从源服务器的checkpoint\_dir读取到目标服务器的checkpoint\_dir。

目前MOT不支持增量检查点。因此，gs\_ctl增量构建对于MOT来说不是以增量方式工作，而是以全量方式工作。Postgres磁盘表仍然可以增量构建。

## gs\_basebackup<a name="section47253550"></a>

gs\_basebackup用于准备运行中服务器的基础备份，不影响其他数据库客户端。

MOT检查点也会在操作结束时获取。但是，检查点的位置是从源服务器中的checkpoint\_dir获取的，并传输到源数据目录中，以便正确备份。

## gs\_dump<a name="section22628774"></a>

gs\_dump用于将数据库模式和数据导出到文件中。支持MOT。

## gs\_restore<a name="section2332376"></a>

gs\_restore用于从文件中导入数据库模式和数据。支持MOT。

