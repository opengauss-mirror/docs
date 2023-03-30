# 使用DML命令更新表<a name="ZH-CN_TOPIC_0242370289"></a>

openGauss支持标准的数据库操作语言（DML）命令，对表进行更新。

## 操作步骤<a name="zh-cn_topic_0237121139_zh-cn_topic_0165787111_section6970183123711"></a>

假设存在表customer\_t，表结构如下：

```
CREATE TABLE customer_t
( c_customer_sk             integer,   
  c_customer_id             char(5),    
  c_first_name              char(6),    
  c_last_name               char(8) 
) ;
```

可以使用如下DML命令对表进行数据更新。

-   使用INSERT向表中插入数据。
    -   向表customer\_t中插入一行。

        ```
        INSERT INTO customer_t (c_customer_sk, c_customer_id, c_first_name,c_last_name) VALUES (3769, 5, 'Grace','White');
        ```

    -   向表customer\_t中插入多行数据。

        ```
        INSERT INTO customer_t (c_customer_sk, c_customer_id, c_first_name,c_last_name) VALUES    
        (6885, 1, 'Joes', 'Hunter'),    
        (4321, 2, 'Lily','Carter'),    
        (9527, 3, 'James', 'Cook'),
        (9500, 4, 'Lucy', 'Baker');
        ```

        更多关于INSERT的使用方法，请参见[向表中插入数据](../DatabaseAdministrationGuide/向表中插入数据.md)。


-   使用UPDATE更新表中数据。修改字段c\_customer\_id值为0。

    ```
    UPDATE customer_t SET c_customer_id = 0;
    ```

    更多关于UPDATE的使用方法，请参见[UPDATE](../SQLReference/UPDATE.md)。

-   使用DELETE删除表中的行。

    可以使用WHERE子句指定需要删除的行，若不指定即删除表中所有的行，只保留数据结构。

    ```
    DELETE FROM customer_t WHERE c_last_name = 'Baker';
    ```

    更多关于DELETE的使用方法，请参见[DELETE](../SQLReference/DELETE.md)。

-   使用TRUNCATE命令快速从表中删除所有的行。

    ```
    TRUNCATE TABLE customer_t;
    ```

    更多关于TRUNCATE的使用方法，请参见[TRUNCATE](../SQLReference/TRUNCATE.md)。

    删除表时，DELETE语句每次删除一行数据而TRUNCATE语句是通过释放表存储的数据页来删除数据，使用TRUNCATE语句比使用DELETE语句更加快速。

    使用DELETE语句删除表时，仅删除数据，不释放存储空间。使用TRUNCATE语句删除表时，删除数据且释放存储空间。


