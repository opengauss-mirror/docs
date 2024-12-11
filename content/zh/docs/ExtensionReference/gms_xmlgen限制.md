# gms_xmlgen限制

- 仅支持在A模式数据库创建。
- 仅支持`create extension`命令方式加载插件。
- gms_xmlgen插件依赖libxml，而轻量版openGuass不支持libxml，故轻量版openGauss不支持该插件。
- gms_xmlgen插件依赖xmltype类型，该类型于7.0.0-RC1版本引入，对数据库进行升级或回滚操作时，须先删除该插件，否则回滚升级脚本中存在依赖，升级将失败报错。
- 涉及xmltype的接口需要设置GUC参数bind_procedure_searchpath。