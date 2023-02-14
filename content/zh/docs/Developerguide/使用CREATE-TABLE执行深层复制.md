# 使用CREATE TABLE执行深层复制

该方法使用CREATE TABLE语句创建原始表的副本，将原始表的数据填充至副本并重命名副本，完成原始表的复制。

在创建新表时，可以指定表以及列属性，比如主键。

## 操作步骤<a name="zh-cn_topic_0237121142_zh-cn_topic_0165787114_section827316454146"></a>

执行如下步骤对表customer\_t进行深层复制。

1.  使用CREATE TABLE语句创建表customer\_t的副本customer\_t\_copy。

    ```
    CREATE TABLE customer_t_copy
    ( c_customer_sk             integer,
      c_customer_id             char(5),
      c_first_name              char(6),
      c_last_name               char(8)
    ) ;
    ```

2.  使用INSERT INTO…SELECT语句向副本填充原始表中的数据。

    ```
    INSERT INTO customer_t_copy (SELECT * FROM customer_t);
    ```

3.  删除原始表。

    ```
    DROP TABLE customer_t;
    ```

4.  使用ALTER TABLE语句将副本重命名为原始表名称。

    ```
    ALTER TABLE customer_t_copy RENAME TO customer_t;
    ```
