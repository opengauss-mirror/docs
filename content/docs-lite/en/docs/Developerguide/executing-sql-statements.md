# Executing SQL Statements<a name="EN-US_TOPIC_0000001127309327"></a>

1.  Construct an operation statement and use  **%s**  as a placeholder. During execution, psycopg2 will replace the placeholder with the parameter value. You can add the RETURNING clause to obtain the automatically generated column values.
2.  The  **cursor.execute**  method is used to perform operations on one row, and the  **cursor.executemany**  method is used to perform operations on multiple rows.

