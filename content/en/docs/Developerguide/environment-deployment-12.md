# Environment Deployment <a name="EN-US_TOPIC_0300593883"></a>

The DeepSQL environment consists of two parts: compiling the database and installing the algorithm library.

## Prerequisites<a name="section9205152617372"></a>

-   Python 2.7.12 or later has been installed.
-   The database supports the PL/Python stored procedure.
-   You have the administrator permission to install the algorithm library.

## Procedure<a name="section1262314198407"></a>

1.  Check the Python deployment environment.

    Before the installation, check the Python version installed in the system. Currently, DeepSQL requires Python 2.7.12 or later.

    -   If the Python version is later than 2.7.12, you can directly install the  **python-devel **package.
    -   If the version is too early or the  **python-devel **package cannot be installed, download the latest Python 2 source code, manually configure and compile Python 2, and configure environment variables.

    In the algorithm library, some algorithms, such as NumPy and pandas, call Python packages. You can install the following Python libraries:

    ```
    pip install numpy
    pip install pandas
    pip install scipy
    ```

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   If you compile Python by yourself, you need to add the  **--enable-shared**  option when executing the  **configure **script.
    >-   If Python 2 in the system uses the UCS4 code, you need to add the  **--enable-unicode=ucs4**  option when compiling Python 2.
    >    You can run the  **import sys; print sys.maxunicode**  command in the built-in Python 2 and view the result. If the result is  **65535**, the system uses the UCS2 code by default. If the result is  **1114111**, the system uses the UCS4 code.
    >-   If the built-in Python 2 uses UCS4, the gdb and gstack in the system also depend on UCS4. Therefore, when configuring Python 2, you need to add  **--enable-unicode=ucs4**. Otherwise, an error is reported when gdb or gstack is used.

2.  Compile and deploy the database.

    The database supports the PL/Python stored procedure. The database is compiled by default, and this module is not included. Therefore, you need to add the  **--with-python**  option in the  **configure**  phase when compiling the database.

    Other compilation steps remain unchanged.

    After the compilation is complete, run the  **gs\_initdb **command again.

    By default, the PL/Python stored procedure module is not loaded. Run  **CREATE EXTENSION plpythonu**  to load the module.

3.  Compile and install the algorithm library.

    The algorithm library uses the open-source MADlib machine learning framework. The source code package and patch can be obtained from the code repository of the third-party library. The installation commands are as follows:

    ```
    tar -zxf apache-madlib-1.17.0-src.tar.gz
    cp madlib.patch apache-madlib-1.17.0-src           
    cd apache-madlib-1.17.0-src/
    patch -p1 < madlib.patch
    ```

    The compilation commands are as follows:

    ```
    ./configure -DCMAKE_INSTALL_PREFIX={YOUR_MADLIB_INSTALL_FOLDER}               
    -DPOSTGRESQL_EXECUTABLE=$GAUSSHOME/bin/ 
    -DPOSTGRESQL_9_2_EXECUTABLE=$GAUSSHOME/bin/ 
    -DPOSTGRESQL_9_2_CLIENT_INCLUDE_DIR=$GAUSSHOME/bin/  
    -DPOSTGRESQL_9_2_SERVER_INCLUDE_DIR=$GAUSSHOME/bin/
    # The preceding commands are all configure commands.
    make
    make install
    ```

    Replace  _\{YOUR\_MADLIB\_INSTALL\_FOLDER\}_  with the actual installation path.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >When MADlib is compiled, the dependency software is downloaded online. If the network cannot be connected, you need to manually download the dependency packages  **PyXB-1.2.6.tar.gz**,  **eigen-branches-3.2.tar.gz**, and  **boost\_1\_61\_0.tar.gz**  to the local host. The  **configure **commands are as follows:
    >```
    >./configure -DCMAKE_INSTALL_PREFIX={YOUR_MADLIB_INSTALL_FOLDER}                  # your install folder
    >-DPYXB_TAR_SOURCE={YOUR_DEPENDENCY_FOLDER}/PyXB-1.2.6.tar.gz                     # change to your local folder
    >-DEIGEN_TAR_SOURCE={YOUR_DEPENDENCY_FOLDER}/eigen-branches-3.2.tar.gz      # change to your local folder
    >-DBOOST_TAR_SOURCE={YOUR_DEPENDENCY_FOLDER}/boost_1_61_0.tar.gz              # change to your local folder
    >-DPOSTGRESQL_EXECUTABLE=$GAUSSHOME/bin/
    >-DPOSTGRESQL_9_2_EXECUTABLE=$GAUSSHOME/bin/
    >-DPOSTGRESQL_9_2_CLIENT_INCLUDE_DIR=$GAUSSHOME/bin/
    >-DPOSTGRESQL_9_2_SERVER_INCLUDE_DIR=$GAUSSHOME/bin/
    >```

4.  Install the algorithm library in the database.
    1.  Go to the  **\{YOUR\_MADLIB\_INSTALL\_FOLDER\}**  directory.
    2.  Go to the  **bin **directory.
    3.  Run the following command:

        ```
        ./madpack -s <SCHEMA_NAME> -p opengauss -c <USER_NAME>@127.0.0.1:<PORT>/<DATABASE_NAME> install
        ```

        The options in the command are described as follows:

        -   **-s**: specifies the name of a schema.
        -   **-p**: database platform, which can be  **opengauss**.
        -   **-c**: specifies parameters for connecting to the database, including the username, @, IP address, port number, and target database name.

        **install**  is the installation command. Besides, you can run the  **reinstall **or  **uninstall **commands.

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >-   The destination database must exist.
        >-   Use 127.0.0.1 instead of localhost as the IP address.
        >-   Operations such as installation and uninstallation of a large number of PL/Python stored procedures need to be performed by the database administrator. Common users do not have the permission to create or modify PL/Python stored procedures. They can only call the stored procedures.
        >-   The recommended database compatibility is B. The processing of empty and NULL values varies according to the database compatibility. B compatibility is recommended. Example:  **CREATE DATABASE <YOUR\_DATABASE\> dbcompatibility='B'**



