# libpq<a name="EN-US_TOPIC_0000001255021823"></a>

**libpq**  is a C application programming interface to openGauss.  **libpq**  contains a set of library functions that allow client programs to send query requests to the openGauss servers and obtain query results. It is also the underlying engine of other openGauss application interfaces, such as ODBC.

## Header File that libpq Depends On<a name="section134792037135416"></a>

Client programs that use  **libpq**  must include the header file  **libpq-fe.h**  and must link with the  **libpq**  library.

## Development Process<a name="section0546145995416"></a>

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


## Connecting to a Database<a name="section58178415212"></a>

```
#include <stdio.h>
#include <stdlib.h>
#include <libpq-fe.h>

static void
exit_nicely(PGconn *conn)
{
    PQfinish(conn);
    exit(1);
}

int
main(int argc, char **argv)
{
    const char *conninfo;
    PGconn     *conn;

    /*
     * This value is used when the user provides the value of the conninfo character string in the command line.
     * Otherwise, the environment variables or the default values
     * are used for all other connection parameters.
     */
    if (argc > 1)
        conninfo = argv[1];
    else
        conninfo = "dbname=postgres port=42121 host='10.44.133.171' application_name=test connect_timeout=5 sslmode=allow user='test' password='test_1234'";

    /* Connect to the database. */
    conn = PQconnectdb(conninfo);

    /* Check whether the backend connection has been successfully established. */
    if (PQstatus(conn) != CONNECTION_OK)
    {
        fprintf(stderr, "Connection to database failed: %s",
                PQerrorMessage(conn));
        exit_nicely(conn);
    }

    /* Close the database connection and clean up the database. */
    PQfinish(conn);

    return 0;
}
```

## Creating a Table<a name="section253096145818"></a>

```
#include <stdio.h>
#include <stdlib.h>
#include <libpq-fe.h>

static void
exit_nicely(PGconn *conn)
{
    PQfinish(conn);
    exit(1);
}

int
main(int argc, char **argv)
{
    const char *conninfo;
    PGconn     *conn;
    PGresult   *res;
    int         nFields;
    int         i,j;

    if (argc > 1)
        conninfo = argv[1];
    else
        conninfo = "dbname=postgres port=42121 host='10.44.133.171' application_name=test connect_timeout=5 sslmode=allow user='test' password='test_1234'";

    conn = PQconnectdb(conninfo);

    if (PQstatus(conn) != CONNECTION_OK)
    {
        fprintf(stderr, "Connection to database failed: %s",
                PQerrorMessage(conn));
        exit_nicely(conn);
    }

    res = PQexec(conn, "CREATE TABLE customer_t1(c_customer_sk INTEGER, c_customer_name VARCHAR(32))");
    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        fprintf(stderr, "CREATE command failed: %s", PQerrorMessage(conn));
        PQclear(res);
        exit_nicely(conn);
    }

    /* Close the database connection and clean up the database. */
    PQfinish(conn);

    return 0;
}
```

## Insert Operation<a name="section552692115819"></a>

```
#include <stdio.h>
#include <stdlib.h>
#include <libpq-fe.h>

static void
exit_nicely(PGconn *conn)
{
    PQfinish(conn);
    exit(1);
}

int
main(int argc, char **argv)
{
    const char *conninfo;
    PGconn     *conn;
    PGresult   *res;

    if (argc > 1)
        conninfo = argv[1];
    else
        conninfo = "dbname=postgres port=42121 host='10.44.133.171' application_name=test connect_timeout=5 sslmode=allow user='test' password='test_1234'";

    conn = PQconnectdb(conninfo);

    if (PQstatus(conn) != CONNECTION_OK)
    {
        fprintf(stderr, "Connection to database failed: %s",
                PQerrorMessage(conn));
        exit_nicely(conn);
    }

    res = PQexec(conn, "insert into customer_t1 values(25,'li')");
    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        fprintf(stderr, "INSERT command failed: %s", PQerrorMessage(conn));
        PQclear(res);
        exit_nicely(conn);
    }

    /* Close the database connection and clean up the database. */
    PQfinish(conn);

    return 0;
}
```

## SELECT Operation<a name="section115521847185820"></a>

```
#include <stdio.h>
#include <stdlib.h>
#include <libpq-fe.h>
#include <stdint.h>

static void
exit_nicely(PGconn *conn)
{
    PQfinish(conn);
    exit(1);
}
static void
show_binary_results(PGresult *res)
{
    int         i;
    int         i_fnum,
                t_fnum;

    /* Use PQfnumber to avoid assumptions about field order in the result. */
    i_fnum = PQfnumber(res, "i");
    t_fnum = PQfnumber(res, "t");

    for (i = 0; i < PQntuples(res); i++)
    {
        char       *iptr;
        char       *tptr;
        int         ival;

        /* Obtain the field value. (Ignore the possibility that they may be null). */
        iptr = PQgetvalue(res, i, i_fnum);
        tptr = PQgetvalue(res, i, t_fnum);

        /*
         * The binary representation of INT4 is the network byte order,
         * which is better to be replaced by the local byte order.
         */
        ival = ntohl(*((uint32_t *) iptr));

        /*
         * The binary representation of TEXT is text. Since libpq can append a zero byte to it,
         *  and think of it as a C string.
         *
         */

        printf("tuple %d: got\n", i);
        printf(" i = (%d bytes) %d\n",
               PQgetlength(res, i, i_fnum), ival);
        printf(" t = (%d bytes) '%s'\n",
               PQgetlength(res, i, t_fnum), tptr);
        printf("\n\n");
    }
}

int
main(int argc, char **argv)
{
    const char *conninfo;
    PGconn     *conn;
    PGresult   *res;
    const char *paramValues[1];
    int        paramLengths[1];
    int        paramFormats[1];
    uint32_t   binaryIntVal;

    if (argc > 1)
        conninfo = argv[1];
    else
        conninfo = "dbname=postgres port=42121 host='10.44.133.171' application_name=test connect_timeout=5 sslmode=allow user='test' password='test_1234'";

    conn = PQconnectdb(conninfo);

    if (PQstatus(conn) != CONNECTION_OK)
    {
        fprintf(stderr, "Connection to database failed: %s",
                PQerrorMessage(conn));
        exit_nicely(conn);
    }

/* Convert the integer value "2" to the network byte order. */
    binaryIntVal = htonl((uint32_t) 25);

    /* Set the parameter array for PQexecParams. */
    paramValues[0] = (char *) &binaryIntVal;
    paramLengths[0] = sizeof(binaryIntVal);
    paramFormats[0] = 1;        /* Binary */

    res = PQexecParams(conn,
                       "SELECT * FROM customer_t1 WHERE c_customer_sk = $1::int4",
                       1,       /* One parameter */
                       NULL,    /* Enable the backend to deduce the parameter type. */
                       paramValues,
                       paramLengths,
                       paramFormats,
                       1);      /* Binary results are required. */

    if (PQresultStatus(res) != PGRES_TUPLES_OK)
    {
        fprintf(stderr, "SELECT failed: %s", PQerrorMessage(conn));
        PQclear(res);
        exit_nicely(conn);
    }

    show_binary_results(res);

    PQclear(res);

    /* Close the database connection and clean up the database. */
    PQfinish(conn);

    return 0;
}
```

## Update Operation<a name="section1712311085913"></a>

```
#include <stdio.h>
#include <stdlib.h>
#include <libpq-fe.h>

static void
exit_nicely(PGconn *conn)
{
    PQfinish(conn);
    exit(1);
}

int
main(int argc, char **argv)
{
    const char *conninfo;
    PGconn     *conn;
    PGresult   *res;
    int         nFields;
    int         i,j;

    if (argc > 1)
        conninfo = argv[1];
    else
        conninfo = "dbname=postgres port=42121 host='10.44.133.171' application_name=test connect_timeout=5 sslmode=allow user='test' password='test_1234'";

    conn = PQconnectdb(conninfo);

    if (PQstatus(conn) != CONNECTION_OK)
    {
        fprintf(stderr, "Connection to database failed: %s",
                PQerrorMessage(conn));
        exit_nicely(conn);
    }

    res = PQexec(conn, "update customer_t1 set c_customer_sk = 1000 where c_customer_name = 'li'");
    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        fprintf(stderr, "UPDATE command failed: %s", PQerrorMessage(conn));
        PQclear(res);
        exit_nicely(conn);
    }

    /* Close the database connection and clean up the database. */
    PQfinish(conn);

    return 0;
}
```

## Delete Operation<a name="section10955112514599"></a>

```
#include <stdio.h>
#include <stdlib.h>
#include <libpq-fe.h>

static void
exit_nicely(PGconn *conn)
{
    PQfinish(conn);
    exit(1);
}

int
main(int argc, char **argv)
{
    const char *conninfo;
    PGconn     *conn;
    PGresult   *res;
    int         nFields;
    int         i,j;

    if (argc > 1)
        conninfo = argv[1];
    else
        conninfo = "dbname=postgres port=42121 host='10.44.133.171' application_name=test connect_timeout=5 sslmode=allow user='test' password='test_1234'";

    conn = PQconnectdb(conninfo);

    if (PQstatus(conn) != CONNECTION_OK)
    {
        fprintf(stderr, "Connection to database failed: %s",
                PQerrorMessage(conn));
        exit_nicely(conn);
    }

    res = PQexec(conn, "delete from customer_t1 where c_customer_name = 'li");
    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        fprintf(stderr, "DELETE command failed: %s", PQerrorMessage(conn));
        PQclear(res);
        exit_nicely(conn);
    }

    /* Close the database connection and clean up the database. */
    PQfinish(conn);

    return 0;
}
```

