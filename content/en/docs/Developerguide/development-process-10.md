# Development Process<a name="EN-US_TOPIC_0000001166619840"></a>

To compile and connect to a libpq source program, perform the following operations:

1.  Decompress the release package \(for example,  **openGauss-\*.\*.0-\*\*\*-64bit-Libpq.tar.gz**\). The required header file is stored in the  **include**  folder, and the  **lib**  folder contains the required libpq library file.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >In addition to  **libpq-fe.h**, the  **include**  folder contains the header files  **postgres\_ext.h**,  **gs\_thread.h**, and  **gs\_threadlocal.h**  by default. These three header files are the dependency files of  **libpq-fe.h**.

2.  Include the  **libpq-fe.h**  header file.

    ```
    #include <libpq-fe.h>
    ```

3.  Provide the  **-I** _directory_  option to provide the installation location of the header files. \(Sometimes the compiler looks for the default directory, so this option can be ignored.\) Example:

    ```
    gcc -I (Directory where the header files are located) -L (Directory where the libpq library is located) testprog.c -lpq
    ```

4.  If the makefile is used, add the following options to variables  _CPPFLAGS_,  _LDFLAGS_, and  _LIBS_:

    ```
    CPPFLAGS += -I (Directory where the header files are located)
    LDFLAGS += -L (Directory where the libpq library is located)
    LIBS += -lpq
    ```


