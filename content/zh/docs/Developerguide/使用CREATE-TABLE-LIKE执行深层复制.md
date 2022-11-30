# 使用CREATE TABLE LIKE执行深层复制<a name="ZH-CN_TOPIC_0242370293"></a>

该方法使用CREATE TABLE LIKE语句创建原始表的副本，将原始表的数据填充至副本并重命名副本，完成原始表的复制。该方法不继承父表的主键属性，您可以使用ALTER TABLE语句来添加它们。

## 操作步骤<a name="zh-cn_topic_0237121143_zh-cn_topic_0165787115_section1349410417334"></a>

1.  使用CREATE TABLE LIKE语句创建表customer\_t的副本customer\_t\_copy。

    ```
    CREATE TABLE customer_t_copy (LIKE customer_t);
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
