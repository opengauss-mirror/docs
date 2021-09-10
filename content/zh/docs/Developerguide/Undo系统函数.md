# Undo系统函数<a name="ZH-CN_TOPIC_0000001135762588"></a>

-   gs\_undo\_meta\(type, zid, location\)

    描述：Undo各模块元信息。

    参数说明：

    -   type\(元信息类型\)

        0表示Undo Zone\(Record\) 对应的元信息。

        1表示Undo Zone\(Transaction Slot\) 对应的元信息。

        2表示Undo Space\(Record\) 对应的元信息。

        3表示Undo Space\(Transaction Slot\) 对应的元信息。

    -   zid\(undo zone编号\)

        -1表示所有undo zone的元信息。

        0-1024\*1024表示对应zoneid的元信息。

    -   location\(读取位置）

        0表示从当前内存中读取。

        1表示从物理文件中读取。

    返回值类型：record

-   gs\_undo\_translot\(type, zid\)

    描述：Undo事务槽信息。

    参数说明：

    -   type\(元信息类型\)

        0表示Undo Zone\(Record\) 对应的元信息。

        1表示Undo Zone\(Transaction Slot\) 对应的元信息。

        2表示Undo Space\(Record\) 对应的元信息。

        3表示Undo Space\(Transaction Slot\) 对应的元信息。

    -   zid\(undo zone编号\)

        -1表示所有undo zone的元信息。

        0-1024\*1024表示对应zoneid的元信息。

    返回值类型：record


