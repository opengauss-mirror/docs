# 执行SQL语句<a name="ZH-CN_TOPIC_0000001127309327"></a>

1.  构造操作语句，使用%s作为占位符，执行时psycopg2会用参数值智能替换掉占位符。可以添加RETURNING子句，来得到自动生成的字段值。
2.  使用cursor.execute方法来操作一行，使用cursor.executemany方法来操作多行。
