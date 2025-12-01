# 快照同步函数<a name="ZH-CN_TOPIC_0289900332"></a>

快照同步函数是导出当前快照的标识符。

-   pg\_export\_snapshot\(\)

    描述：保存当前的快照并返回它的标识符。

    返回值类型：text

    备注：函数pg\_export\_snapshot保存当前的快照并返回一个文本字符串标识此快照。这个字符串必须传递给想要导入快照的客户端。可用在set transaction snapshot snapshot\_id时导入snapshot，但是应用的前提是该事务设置了SERIALIZABLE或REPEATABLE READ隔离级别。而openGauss目前是不支持这两种隔离级别的。该函数的输出不可用做set transaction snapshot的输入。

-   pg\_export\_snapshot\_and\_csn\(\)

    描述：保存当前的快照并返回它的标识符。比pg\_export\_snapshot\(\)多返回一列CSN，表示当前快照的CSN。

    返回值类型：text


