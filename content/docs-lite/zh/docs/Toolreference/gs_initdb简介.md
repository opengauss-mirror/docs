# gs\_initdb简介<a name="ZH-CN_TOPIC_0294749014"></a>

## 背景信息<a name="zh-cn_topic_0059779348_section840612614118"></a>

gs\_initdb初始化数据库时，会创建数据库目录、生成系统表、创建默认数据库和模板数据库。

## 系统表<a name="zh-cn_topic_0059779348_sb69920e012c84bbbb55593eaa5778652"></a>

初始化数据库时会生成大量的系统表和视图，其中绝大部分都对任何数据库用户开放查看权限。

>![](public_sys-resources/icon-note.gif) **说明：** 
>pg\_user\_status、pg\_auth\_history系统表权限只对初始化数据库用户和sysadmin用户开放。

## 生成的数据库<a name="zh-cn_topic_0059779348_sbaf982cf2e9549fa8e083844774de07b"></a>

-   template1：是一个模板数据库，当以后再创建一个新的数据库时，template1数据库里的所有内容都会拷贝到新数据库中。通过gs\_initdb的参数可以决定template1数据库的设置。
-   template0：是openGauss提供的最初始的备份数据库，当需要时可用template0作为模板生成“干净”的数据库。
-   postgres：是一个提供给用户、工具和第三方应用的缺省数据库。

