# dolphin-系统信息函数<a name="ZH-CN_TOPIC_0289899824"></a>

## dolphin-会话信息函数<a name="zh-cn_topic_0283136950_zh-cn_topic_0237121987_zh-cn_topic_0059777618_seb0ac642d9594cfe9a06d3d304c6dc75"></a>

-   database\(\)

    描述：当前数据库模式的名称。

    返回值类型：name

    示例：

    ```
    openGauss=# SELECT database();
     database
    ----------
     public
    (1 row)
    ```

    备注：database返回在搜索路径中第一个顺位有效的模式名。（如果搜索路径为空则返回NULL，没有有效的模式名也返回NULL）。如果创建表或者其他命名对象时没有声明目标模式，则将使用这些对象的模式。

-   uuid_short\(\)

    描述：当前数据库的uuid_short信息。

    返回值类型：int

    示例：

    ```
    openGauss=# select uuid_short();
        uuid_short    
    ------------------
    3939644819374082
    (1 row)
    ```
