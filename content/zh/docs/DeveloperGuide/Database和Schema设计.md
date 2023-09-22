# Database和Schema设计

openGauss中可以使用Database和Schema实现业务的隔离，区别在于Database的隔离更加彻底，各个Database之间共享资源极少，可实现连接隔离、权限隔离等，Database之间无法直接互访。Schema隔离的方式共用资源较多，可以通过grant与revoke语法便捷地控制不同用户对各Schema及其下属对象的权限。

-   从便捷性和资源共享效率上考虑，推荐使用Schema进行业务隔离。
-   建议系统管理员创建Schema和Database，再赋予相关用户对应的权限。

## Database设计建议<a name="zh-cn_topic_0097078336_section6542627416593"></a>

-   【规则】在实际业务中，根据需要创建新的Database，不建议直接使用数据库实例默认的postgres数据库。
-   【建议】一个数据库实例内，用户自定义的Database数量建议不超过3个。
-   【建议】为了适应全球化的需求，使数据库编码能够存储与表示绝大多数的字符，建议创建Database的时候使用UTF-8编码。
-   【关注】创建Database时，需要重点关注字符集编码（ENCODING）和兼容性（DBCOMPATIBILITY）两个配置项。openGauss支持A、B、C和PG四种兼容模式，分别表示兼容O语法、MY语法、TD语法和POSTGRES语法，不同兼容模式下的语法行为存在一定差异，默认为A兼容模式。
-   【关注】Database的owner默认拥有该Database下所有对象的所有权限，包括删除权限。删除权限影响较大，请谨慎使用。

## Schema设计建议<a name="zh-cn_topic_0097078336_section11591445165916"></a>

-   【关注】如果该用户不具有sysadmin权限或者不是该Schema的owner，要访问Schema下的对象，需要同时给用户赋予Schema的usage权限和对象的相应权限。
-   【关注】如果要在Schema下创建对象，需要授予操作用户该Schema的create权限。
-   【关注】Schema的owner默认拥有该Schema下对象的所有权限，包括删除权限。删除权限影响较大，请谨慎使用。

