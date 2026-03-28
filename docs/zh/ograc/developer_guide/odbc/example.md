# 示例<a name="ZH-CN_TOPIC_0242377033"></a>

## 常用功能示例代码<a name="zh-cn_topic_0237120410_zh-cn_topic_0059777697_s1f4a2c1a228a412193b28fb23d146e03"></a>

```c
// 此示例演示如何通过ODBC方式连接数据库并进行一系列操作。
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include "sql.h"
#include "sqlext.h"

void handle_err(SQLHANDLE h_env, SQLHANDLE h_conn, SQLHANDLE h_stmt) {
    SQLCHAR sqlstate[6];
    SQLINTEGER native_error;
    SQLCHAR errmsg[256];
    SQLSMALLINT msglen;

    SQLRETURN ret2 = SQLError(SQL_NULL_HENV, h_conn, h_stmt, sqlstate, &native_error, errmsg, sizeof(errmsg), &msglen);
    if (ret2 != SQL_NO_DATA) {
        printf("Native error code: %ld\n", native_error);
        printf("Error message: %s\n", errmsg);
    }
}

int main()
{
    SQLHANDLE h_env = NULL;
    SQLHANDLE h_conn= NULL;
    SQLHANDLE h_stmt = NULL;
    SQLRETURN ret;

    //数据源名称、用户名和密码
    SQLCHAR *dsn = (SQLCHAR *)"ogracDB";
    SQLCHAR *username = (SQLCHAR *)"test";
    SQLCHAR *password = (SQLCHAR *)"test123";

    //获取字符串长度
    SQLSMALLINT dsn_len = (SQLSMALLINT)strlen((const char *)dsn);
    SQLSMALLINT username_len = (SQLSMALLINT)strlen((const char *)username);
    SQLSMALLINT password_len = (SQLSMALLINT)strlen((const char *)password);

    //分配环境句柄，也可以用SQLAllocEnv(&h_env)替代SQLAllocHandle
    ret = SQLAllocHandle(SQL_HANDLE_ENV, SQL_NULL_HANDLE, &h_env);
    if (ret != SQL_SUCCESS && ret != SQL_SUCCESS_WITH_INFO)
    {
        printf("Failed to allocate environment handle.\n");
        return SQL_ERROR;
    }
    //设置环境句柄属性
    if (SQL_SUCCESS != SQLSetEnvAttr(h_env, SQL_ATTR_ODBC_VERSION, (void*)SQL_OV_ODBC3, 0))
    {
        printf("Failed to set ODBC version.\n");
        SQLFreeHandle(SQL_HANDLE_ENV, h_env);
        return SQL_ERROR;
    }
    
    //分配连接句柄，也可以用SQLAllocConnect(h_env, &h_conn)替代SQLAllocHandle
    ret = SQLAllocHandle(SQL_HANDLE_DBC, h_env, &h_conn);
    if (ret != SQL_SUCCESS)
    {
        printf("Failed to allocate connection handle.\n");
        SQLFreeHandle(SQL_HANDLE_ENV, h_env);
        return SQL_ERROR;
    }
    
    //设置连接属性
    if (SQL_SUCCESS != SQLSetConnectAttr(h_conn, SQL_ATTR_AUTOCOMMIT, (void*)1, 0))
    {
        printf("Failed to set autocommit.\n");
        SQLFreeHandle(SQL_HANDLE_DBC, h_conn);
        SQLFreeHandle(SQL_HANDLE_ENV, h_env);
        return SQL_ERROR;
    }
    
    //连接数据源
    if (SQLConnect(h_conn, dsn, dsn_len, (SQLCHAR*) NULL, 0, NULL, 0) != SQL_SUCCESS)
    {
        handle_err(h_env, h_conn, h_stmt);
        printf("Failed to connect database.\n");
        return SQL_ERROR;
    }

    //申请语句句柄，也可以用SQLAllocStmt(h_conn, &h_stmt)代替SQLAllocHandle
    if (SQLAllocHandle(SQL_HANDLE_STMT, h_conn, &h_stmt) != SQL_SUCCESS)
    {
        printf("Failed to allocate statement handle.\n");
        SQLFreeHandle(SQL_HANDLE_DBC, h_conn);
        SQLFreeHandle(SQL_HANDLE_ENV, h_env);
        return SQL_ERROR;
    }

    //设置语句属性
    if (SQL_SUCCESS != SQLSetStmtAttr(h_stmt,SQL_ATTR_QUERY_TIMEOUT,(SQLPOINTER *)3,0))
    {
        printf("Failed to set stmt timeout.\n");
        SQLFreeHandle(SQL_HANDLE_STMT, h_stmt);
        SQLFreeHandle(SQL_HANDLE_DBC, h_conn);
        SQLFreeHandle(SQL_HANDLE_ENV, h_env);
        return SQL_ERROR;
    }
    
    SQLCHAR *drop_table_sql = (SQLCHAR *)"drop table if exists test";
    SQLExecDirect(h_stmt, drop_table_sql, strlen(drop_table_sql));
    SQLCHAR *create_table_sql = (SQLCHAR *)"create table test(c1 int,c2 boolean,c3 tinyint,c4 bigint,c5 double,c6 varchar(32),c7 date,c8 timestamp,c9 clob,c10 decimal)";
    SQLExecDirect(h_stmt, create_table_sql, strlen(create_table_sql));
    SQLCHAR *insert_sql = (SQLCHAR *)"insert into test(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10) values(?,?,?,?,?,?,?,?,?,?)";
    SQLPrepare(h_stmt, insert_sql, strlen(insert_sql));

    int col1 = 1;
    SQLBindParameter(h_stmt, 1, SQL_PARAM_INPUT, SQL_C_SSHORT, SQL_INTEGER, sizeof(int), 0, &col1, 0, NULL);
    int col2 = 2;
    SQLBindParameter(h_stmt, 2, SQL_PARAM_INPUT, SQL_C_SLONG, SQL_INTEGER, sizeof(int), 0, &col2, 0, NULL);
    int col3 = 3;
    SQLBindParameter(h_stmt, 3, SQL_PARAM_INPUT, SQL_C_SSHORT, SQL_INTEGER, sizeof(int), 0, &col3, 0, NULL);
    long col4 = 4;
    SQLBindParameter(h_stmt, 4, SQL_PARAM_INPUT, SQL_C_SBIGINT, SQL_BIGINT, sizeof(long), 0, &col4, 0, NULL);
    double col5 = 8.889;
    SQLBindParameter(h_stmt, 5, SQL_PARAM_INPUT, SQL_C_DOUBLE, SQL_DOUBLE, 0, 0, &col5, 0, NULL);
    char col6[51] = "this is a text";
    SQLLEN len = SQL_NTS;
    SQLBindParameter(h_stmt, 6, SQL_PARAM_INPUT, SQL_C_WCHAR, SQL_WVARCHAR, 50, 0, col6, sizeof(col6), &len);

    SQL_DATE_STRUCT col7;
    col7.year = 2024;    // 年份
    col7.month = 3;      // 月份 (1-12)
    col7.day = 15;       // 日期 (1-31)
    SQLBindParameter(h_stmt, 7, SQL_PARAM_INPUT, SQL_C_DATE, SQL_DATE, 0, 0, &col7, sizeof(col7), NULL);

    SQL_TIMESTAMP_STRUCT col8;
    col8.year = 2023;
    col8.month = 12;
    col8.day = 25;
    col8.hour = 14;
    col8.minute = 30;
    col8.second = 45;
    col8.fraction = 0;
    SQLBindParameter(h_stmt, 8, SQL_PARAM_INPUT, SQL_C_TYPE_TIMESTAMP, SQL_TYPE_TIMESTAMP, 27, 7, &col8, sizeof(col8), NULL);

    char col9[51] = "this is a clob text";
    SQLBindParameter(h_stmt, 9, SQL_PARAM_INPUT, SQL_C_WCHAR, SQL_WVARCHAR, 0, 0, col9, sizeof(col9), &len);
    double col10 = 1234.56;
    SQLBindParameter(h_stmt, 10, SQL_PARAM_INPUT, SQL_C_DOUBLE, SQL_DOUBLE, 10, 4, &col10, 0, NULL);
    SQLExecute(h_stmt);

    //查询数据
    SQLCHAR *select_sql = (SQLCHAR *)"select * from test";
    SQLPrepare(h_stmt, select_sql, strlen(select_sql));

    int col_value = 0;
    SQLBindCol(h_stmt, 3, SQL_C_SSHORT, &col_value, sizeof(col_value), NULL);
    SQLExecute(h_stmt);

    SQLINTEGER c1;
    SQLINTEGER c3;
    SQLINTEGER c2;
    SQLBIGINT c4;
    SQLDOUBLE c5;
    SQLWCHAR c6[50];
    SQL_DATE_STRUCT c7;
    SQL_TIMESTAMP_STRUCT c8;
    SQLWCHAR c9[50];
    SQLDOUBLE c10;
    SQLLEN cbName3, cbName4, cbName5, cbName6, cbName7, cbName8, cbName9, cbName10;

    ret  = SQLFetch(h_stmt);
    if (ret == SQL_SUCCESS)
    {
        printf("get %d from table 'test'.\n", col_value);
        SQLGetData(h_stmt, 1, SQL_C_SLONG, (SQLPOINTER)&c1, 0, NULL);
        printf("SQLGetData result c1 is %d.\n", c1);
        
        SQLGetData(h_stmt, 2, SQL_C_SLONG, (SQLPOINTER)&c2, 0, NULL);
        printf("SQLGetData result c2 is %d.\n", c2);

        SQLGetData(h_stmt, 3, SQL_C_TINYINT, &c3, sizeof(c3), &cbName3);
        printf("SQLGetData result c3 is %d.\n", c3);

        SQLGetData(h_stmt, 4, SQL_C_SBIGINT, &c4, sizeof(c4), &cbName4);
        printf("SQLGetData result c4 is %d.\n", c4);

        SQLGetData(h_stmt, 5, SQL_C_DOUBLE, &c5, sizeof(c5), &cbName5);
        printf("SQLGetData result c5 is %f.\n", c5);

        SQLGetData(h_stmt, 6, SQL_C_CHAR, &c6, sizeof(c6), &cbName6);
        printf("SQLGetData result c6 is %s.\n", c6);

        SQLGetData(h_stmt, 7, SQL_C_DATE, &c7, sizeof(SQL_DATE_STRUCT), &cbName7);
        printf("SQLGetData result c7 is %04d-%02d-%02d.\n", c7.year, c7.month, c7.day);

        SQLGetData(h_stmt, 8, SQL_C_TIMESTAMP, &c8, sizeof(SQL_TIMESTAMP_STRUCT), &cbName8);
        printf("SQLGetData result c8 is %04d-%02d-%02d %02d:%02d:%02d.\n", c8.year, c8.month, c8.day, c8.hour, c8.minute, c8.second);

        SQLGetData(h_stmt, 9, SQL_C_CHAR, &c9, sizeof(c9), &cbName9);
        printf("SQLGetData result c9 is %s.\n", c9);

        SQLGetData(h_stmt, 10, SQL_C_DOUBLE, &c10, sizeof(c10), &cbName10);
        printf("SQLGetData result c10 is %f.\n", c10);
    }
    
    //获取行数
    SQLLEN row = 0;
    SQLRowCount(h_stmt, &row);
    printf("Got %d rows from table 'test'.\n", row);

    //断开数据库连接并释放句柄
    SQLFreeHandle(SQL_HANDLE_STMT, h_stmt);
    SQLDisconnect(h_conn);
    SQLFreeHandle(SQL_HANDLE_DBC, h_conn);
    SQLFreeHandle(SQL_HANDLE_ENV, h_env);
    return SQL_SUCCESS;
}
```

## 长文本数据处理示例<a name="zh-cn_topic_0283137582_zh-cn_topic_0237120410_section6611714101314"></a>

```c
// 此示例演示在执行insert语句中，如何处理长文本数据，分段发送数据到数据库，避免一次性占用大量内存。
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include "sql.h"
#include "sqlext.h"

int main()
{
    SQLHANDLE h_env = NULL;
    SQLHANDLE h_conn= NULL;
    SQLHANDLE h_stmt = NULL;
    SQLRETURN ret;

    //数据源名称、用户名和密码
    SQLCHAR *dsn = (SQLCHAR *)"ogracDB";
    SQLCHAR *username = (SQLCHAR *)"test";
    SQLCHAR *password = (SQLCHAR *)"test123";

    //获取字符串长度
    SQLSMALLINT dsn_len = (SQLSMALLINT)strlen((const char *)dsn);
    SQLSMALLINT username_len = (SQLSMALLINT)strlen((const char *)username);
    SQLSMALLINT password_len = (SQLSMALLINT)strlen((const char *)password);

    //分配环境句柄
    SQLAllocEnv(&h_env);
    //设置环境句柄属性
    SQLSetEnvAttr(h_env, SQL_ATTR_ODBC_VERSION, (void*)SQL_OV_ODBC3, 0);
    //分配连接句柄
    SQLAllocConnect(h_env, &h_conn);
    //设置连接属性
    SQLSetConnectAttr(h_conn, SQL_ATTR_AUTOCOMMIT, (void*)1, 0);
    //连接数据源
    if (SQLConnect(h_conn, dsn, dsn_len, username, username_len, password, password_len) != SQL_SUCCESS)
    {
        printf("Failed to connect database.\n");
        return SQL_ERROR;
    }
    //申请语句句柄
    SQLAllocHandle(SQL_HANDLE_STMT, h_conn, &h_stmt);
    //设置语句属性
    SQLSetStmtAttr(h_stmt,SQL_ATTR_QUERY_TIMEOUT,(SQLPOINTER *)3,0);
    //删除表
    SQLCHAR *drop_table_sql = (SQLCHAR *)"drop table if exists test";
    SQLExecDirect(h_stmt, drop_table_sql, strlen(drop_table_sql));

    //创建表
    SQLCHAR *create_table_sql = (SQLCHAR *)"create table test(c1 varchar(32), c2 clob, c3 clob)";
    SQLExecDirect(h_stmt, create_table_sql, strlen(create_table_sql));
    
    //插入数据
    SQLCHAR *insert_sql = (SQLCHAR *)"insert into test values(?,?,?)";
    SQLPrepare(h_stmt, insert_sql, strlen(insert_sql));
    int col = 12;
    SQLBindParameter(h_stmt, 1, SQL_PARAM_INPUT, SQL_C_SSHORT, SQL_INTEGER, sizeof(int), 0, &col, 0, NULL);

    //绑定参数为执行时数据
    SQLLEN cbTextSize = SQL_DATA_AT_EXEC;
    SQLBindParameter(h_stmt, 2, SQL_PARAM_INPUT, SQL_C_WCHAR, SQL_WLONGVARCHAR, 50, 0, (SQLPOINTER)2, 0, &cbTextSize);
    SQLBindParameter(h_stmt, 3, SQL_PARAM_INPUT, SQL_C_WCHAR, SQL_WLONGVARCHAR, 50, 0, (SQLPOINTER)3, 0, &cbTextSize);
    ret = SQLExecute(h_stmt);
    if (ret == SQL_NEED_DATA) {
        SQLPOINTER pParamID;
        while (SQLParamData(h_stmt, &pParamID) == SQL_NEED_DATA)
        {
            printf("pParamID = %d.\n", pParamID);
            if (pParamID == (SQLPOINTER)2)
            {
                const char *data = "This is a text";
                int ret2 = SQLPutData(h_stmt, (SQLPOINTER)data, strlen(data));
                if (ret2 != SQL_SUCCESS)
                {
                    printf("Put param2 Failed.\n");
                } else {
                    printf("Put param2 success.\n");
                }
            } else if (pParamID == (SQLPOINTER)3)
            {
                const char *data = "This is a long text";
                int ret3= SQLPutData(h_stmt, (SQLPOINTER)data, strlen(data));
                if (ret3 != SQL_SUCCESS)
                {
                    printf("Put param3 Failed.\n");
                    break;
                } else {
                    printf("Put param3 success.\n");
                }
            }
        }
    }

    //查询数据
    SQLCHAR *select_sql = (SQLCHAR *)"select c1,c2,c3 from test";
    SQLPrepare(h_stmt, select_sql, strlen(select_sql));
    SQLExecute(h_stmt);

    SQLINTEGER c1;
    SQLWCHAR c2[50];
    SQLWCHAR c3[50];
    SQLLEN cbName;
    do
    {
        ret  = SQLFetch(h_stmt);
        if (ret != SQL_SUCCESS && ret != SQL_NO_DATA)
        {
            break;
        }
        
        if (ret == SQL_SUCCESS)
        {
            SQLGetData(h_stmt, 1, SQL_C_SLONG, (SQLPOINTER)&c1, 0, NULL);
            printf("SQLGetData result c1 is %d .\n", c1);
            
            SQLGetData(h_stmt, 2, SQL_C_CHAR, c2, sizeof(c2), &cbName);
            printf("SQLGetData result c2 is %s.\n", c2);

            SQLGetData(h_stmt, 3, SQL_C_CHAR, c3, sizeof(c3), &cbName);
            printf("SQLGetData result c3 is %s.\n", c3);
        }
        
    } while (ret != SQL_NO_DATA);

    //释放语句句柄
    SQLFreeHandle(SQL_HANDLE_STMT, h_stmt);
    //断开数据库连接
    SQLDisconnect(h_conn);
    SQLFreeHandle(SQL_HANDLE_DBC, h_conn);
    SQLFreeHandle(SQL_HANDLE_ENV, h_env);
    return SQL_SUCCESS;
}
```