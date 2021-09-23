# Troubleshooting<a name="EN-US_TOPIC_0300596396"></a>

-   **Problem description**: When you compile the database, the following messages about the Python module are displayed: "can not be used when making a shared object;recompile with -fPIC" or "libpython22.7.a: could not read symbols: Bad value".

    **Solution**:

    1.  Check the Python version and environment variables.
    2.  Check whether python-devel is installed or whether  **--enable-shared**  is enabled during Python compilation.


-   **Problem description**: When the  **gdb **or  **gstack **command is executed, the error message "gdb: symbol lookup error: gdb: undefined symbol: PyUnicodeUCS4\_FromEncodedObject" is displayed.

    **Solution**: This problem generally occurs in the environment where Python 2 is compiled. During Python 2 compilation and installation, you can use the  **--enable-unicode=ucs2**  or  **--enable-unicode=ucs4**  option to specify that two bytes or four bytes are used to represent a Unicode character. By default, Python 2 uses  **--enable-unicode=ucs2**. By default, Python 3 uses four bytes to represent a Unicode character.

    You can run the  **import sys; print sys.maxunicode**  command in the built-in Python 2 and view the result. If the result is  **65535**, the system uses the UCS2 code by default. If the result is  **1114111**, the system uses the UCS4 code.

    When you compile Python 2 by yourself, if the built-in Python 2 uses UCS4, the gdb in the system also depends on UCS4. Therefore, you need to add  **--enable-unicode=ucs4**  when configuring Python 2 that is compiled by yourself.


-   **Problem description**: The error message " "Data table does not exist" " is displayed when the kmeans algorithm is used.

    **Solution**: If the schema where the algorithm is located and the input table are not in the same schema, you can set  **SET behavior\_compat\_options = 'bind\_procedure\_searchpath'**  to solve the problem.


-   **Problem description**: An error is reported during Python startup or import.

    **Solution**:

    1.  Check the environment variables, such as  _PYTHONHOME _and  _PYTHONPATH_.
    2.  Install the required dependency packages.


-   **Problem description**: An error message "ERROR: spiexceptions.UndefinedFunction: operator does not exist: json -\>\> unknown." is displayed when algorithms such as regression are used.

    **Solution**: The database does not support the JSON export function.


-   **Problem description**: During compilation in MADlib, if  **make -sj **is used, boost-related errors are reported. For example:  **fatal error: boost/mpl/if.hpp: No such file or directory**.

    **Solution**: This is not a problem. During MADlib compilation, the installation packages are decompressed first. If the compilation is performed in parallel mode, the compilation and decompression may be performed at the same time. If this file used for compilation has not been decompressed yet, such an error is reported. You can run the  **make -sj**  command again to solve the problem.


-   **Problem description**: The error message "ERROR: Failed to connect to database" is displayed when you run the  **./madpack**  command to install the Madpack.

    **Solution**: Check whether the database is started, whether the target database exists, whether the database port is occupied, and whether the installation user has the administrator permission. When installing the Madpack, set the IP address to  **127.0.0.1**  instead of localhost. Otherwise, the connection fails.


