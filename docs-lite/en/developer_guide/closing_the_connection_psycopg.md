# Closing the Connection<a name="EN-US_TOPIC_0000001079921692"></a>

After you complete required data operations in a database, close the database connection. Call the close method such as  **connection.close\(\)**  to close the connection.

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>This method closes the database connection and does not automatically call  **commit\(\)**. If you just close the database connection without calling  **commit\(\)**  first, changes will be lost.

