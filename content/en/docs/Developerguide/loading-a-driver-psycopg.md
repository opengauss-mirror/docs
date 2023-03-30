# Loading a Driver<a name="EN-US_TOPIC_0000001080050160"></a>

-   Before using the driver, perform the following operations:
    1.  Decompress the driver package of the corresponding version and copy psycopg2 to the  **site-packages **folder in the Python installation directory as the  **root **user.
    2.  Change the  **psycopg2 **directory permission to  **755**.
    3.  Add the  **psycopg2 **directory to the environment variable  _$PYTHONPATH_  and validate it.
    4.  For non-database users, configure the  **lib**  directory in  _LD\_LIBRARY\_PATH_  after decompression.

-   Load a database driver before creating a database connection:

    ```
    import  psycopg2
    ```


