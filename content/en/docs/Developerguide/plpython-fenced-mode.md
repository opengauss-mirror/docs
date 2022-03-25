# PLPython Fenced Mode<a name="EN-US_TOPIC_0000001149506467"></a>

PL/Python is added to the fenced mode, which is insecure. During database compilation, to integrate Python into the database, you can add the  **--with-python**  option to  **configure**, or specify the Python path for installing PL/Python and add the  **--with-includes='/python-dir=path'**  option.

Before starting the database, set the GUC parameter  **unix\_socket\_directory**  to specify the file address for communication between unix\_socket processes. You need to create a folder in  **user-set-dir-path**  in advance and grant read, write, and execute permissions on the folder.

```
unix_socket_directory = '/user-set-dir-path'
```

After the configuration is complete, start the database.

After PL/Python is added to the database compilation and the GUC parameter  **unix\_socket\_directory**  is set, the  **fenced-Master**  process is automatically created during database startup. If Python compilation is not performed for the database, you need to manually start the master process in fenced mode. After the GUC parameter is set, run the command to create the master process.

Run the following command to start the  **fenced-Master**  process:

```
gaussdb --fenced -k /user-set-dir-path -D /user-set-dir-path &
```

After the fenced mode is configured, the UDF calculation is performed in the  **fenced-worker**  process for the PL/Python-fenced UDF database.

## Usage Guide<a name="section823619213143"></a>

-   Create an extension.

    -   When the compiled PL/Python is Python 2:

        ```
        openGauss=# create extension plpythonu;
        CREATE EXTENSION
        ```

    -   When the compiled PL/Python is Python 3:

        ```
        openGauss=# create extension plpython3u;
        CREATE EXTENSION
        ```

    The following uses Python 2 as an example.


-   Create a PL/Python-fenced UDF database.

    ```
    openGauss=# create or replace function pymax(a int, b int)
    openGauss-# returns INT
    openGauss-# language plpythonu fenced
    openGauss-# as $$
    openGauss$# import numpy
    openGauss$# if a > b:
    openGauss$#     return a;
    openGauss$# else:
    openGauss$#     return b;
    openGauss$# $$;
    CREATE FUNCTION
    ```

-   View UDF information.

    ```
    openGauss=# select * from pg_proc where proname='pymax';
    -[ RECORD 1 ]----+--------------
    proname          | pymax
    pronamespace     | 2200
    proowner         | 10
    prolang          | 16388
    procost          | 100
    prorows          | 0
    provariadic      | 0
    protransform     | -
    proisagg         | f
    proiswindow      | f
    prosecdef        | f
    proleakproof     | f
    proisstrict      | f
    proretset        | f
    provolatile      | v
    pronargs         | 2
    pronargdefaults  | 0
    prorettype       | 23
    proargtypes      | 23 23
    proallargtypes   |
    proargmodes      |
    proargnames      | {a,b}
    proargdefaults   |
    prosrc           |
                     | import numpy
                     | if a > b:
                     |     return a;
                     | else:
                     |     return b;
                     |
    probin           |
    proconfig        |
    proacl           |
    prodefaultargpos |
    fencedmode       | t
    proshippable     | f
    propackage       | f
    prokind          | f
    proargsrc        |
    ```

-   Run the UDF.
    -   Create a data table.

        ```
        openGauss=# create table temp (a int ,b int) ;
        CREATE TABLE
        openGauss=# insert into temp values (1,2),(2,3),(3,4),(4,5),(5,6);
        INSERT 0 5
        ```

    -   Run the UDF.

        ```
        openGauss=# select pymax(a,b) from temp;
         pymax
        -------
             2
             3
             4
             5
             6
        (5 rows)
        ```



