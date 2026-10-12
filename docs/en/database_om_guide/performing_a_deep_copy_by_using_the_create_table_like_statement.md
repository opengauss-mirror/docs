# Performing a Deep Copy Using CREATE TABLE LIKE

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T08:04:31.778Z -->

This method uses the `CREATE TABLE LIKE` statement to create a replica of the source table, populates the replica with data from the source table, renames the replica, and completes the copy operation. This method does not inherit the parent table's primary key attributes. You can use the `ALTER TABLE` statement to add them.

## Procedure <a name="zh-cn_topic_0237121143_zh-cn_topic_0165787115_section1349410417334"></a>

1. Use the `CREATE TABLE LIKE` statement to create a replica named `customer\_t\_copy` of the table `customer\_t`.

    ```
    CREATE TABLE customer_t_copy (LIKE customer_t);
    ```

2. Use the `INSERT INTO...SELECT` statement to populate the replica with data from the source table.

    ```
    INSERT INTO customer_t_copy (SELECT * FROM customer_t);
    ```

3. Drop the source table.

    ```
    DROP TABLE customer_t;
    ```

4. Use the `ALTER TABLE` statement to rename the replica to the original table name.

    ```
    ALTER TABLE customer_t_copy RENAME TO customer_t;
    ```