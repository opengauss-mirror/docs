# 使用指导<a name="ZH-CN_TOPIC_0000001316625936"></a>

1.  设置采样方式为按照采样率采样，即设置GUC参数default\_statistics\_target为\[-100, -1\]之间的整数，表示采样百分比。
2.  使用ANALYZE\(\(\[column\_name,\]\)\) 进行数据统计和模型创建。
3.  输入查询，如果查询涉及到的等值查询列上有统计模型创建，那么会自动使用统计模型进行选择率估计。
4.  不再需要智能统计模型的时候，使用ALTER TABLE \[table\_name\] DELETE STATISTICS \(\(\[column\_name,\]\)\)进行统计信息以及模型删除。

其他使用的方法详见SQL接口章节[ALTER TABLE](ALTER-TABLE.md.md)和[ANALYZE | ANALYSE](ANALYZE-ANALYSE.md)。

