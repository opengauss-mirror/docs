# 驱动常见问题与解决方法

## **问题1：20250607_xx_psycopy2驱动类型映射问题**

### 问题描述

- 【数据库版本】openGauss 6.0.0 LTS
- 【模块】驱动，opengauss-psycopg2（6.0.0）
- 【问题描述】2025年6月，客户通过SQLAlchemy（x.x.xx版本）调用opengauss-psycopg2（6.0.0版本）执行全表查询时，高概率出现报错`Value Error: invalid literal for int() with base 10: '{}'`，导致业务报错中断。

### 问题定位

1. 根据报错堆栈，程序在调用fetchall()接口时报错，定界报错模块。

    ![image](figures/fig_driver_1_1.png)

    这里花了一些时间捋清楚代码的调用链。SQLAlchemy ORM 层 ->psycopg2 (DBAPI) 驱动层 ->libpq (openGauss C API) 层（代码示例见#-解决方案）。报错的地方是dbapi_cursor.fetchall()，所以，问题应该出在psycopg2驱动中的类型转换。

2. 查看psycopg2中实现，找到问题代码
`dbapi_cursor.fetchall()`最终调用到了psycopg2驱动中的`curs_fetchall -> _psyco_curs_buildrow -> _psyco_curs_buildrow_fill -> typecast_cast`，在typecast_cast函数中进行类型转换。
通过对正常流程的debug调试，转换函数实际走的是下面的流程：

    ![image](figures/fig_driver_1_2.png)

    调试过程：先按照debug方式编译psycopg2, 并开启debug日志输出，方便定位。
    执行`python3 -m pdb test_string_to_int.py`，打断点之后执行c，加载符号表。

    ![image](figures/fig_driver_1_3.png)

    `ps ux`找到对应的python进程，执行`gdb python3 pid`

    ![image](figures/fig_driver_1_4.png)

    在psycopg2要跟踪的函数打断点，执行c

    ![image](figures/fig_driver_1_5.png)

    在python的debug程序中执行c，在出现`Value Error: invalid literal for int() with base 10: '{}'`报错时，程序会停到psycopg2的断点函数上，证明psycopg2中将text（报错字段类型）的转换函数注册为了int的转换函数。
    继续寻找`self->ccast`回调函数的赋值点，在两个地方有赋值：

    1. register_type_uint，该函数是在B库下去注册uint1,uint2,uint4,uint8的cast函数

        ![image](figures/fig_driver_1_6.png)

    2. typecast_from_c，该函数是在init时，对所有基础类型注册cast函数

        ![image](figures/fig_driver_1_7.png)

        通过分析，怀疑register_type_uint在注册的时候出现问题，并通过回退这段代码证实。

3. 进一步定位问题根因
    为了进一步确认在哪里将text类型映射成了int，我们在typecast_add的代码中添加打印日志，在每一次cast函数注册时，打印出注册的oid和映射后的类型name

    ![image](figures/fig_driver_1_8.png)

    继续运行程序，发现register_type_uint中注册了很多跟uint不想关的oid，其中就用`oid=25(text)`，确认了问题出现的原因。
    进一步分析代码，发现问题点，_typecast_INTEGER_types在malloc之后，没有memset，在后面判断是否值为0时，判断条件失效，从而导致注册不相关的其他类型。问题定位。

    ![image](figures/fig_driver_1_9.png)

4. 问题原因总结
由于psycopg2中malloc之后没有memset，导致驱动出现类型映射错误现象，最终导致客户程序抛异常。

### 规避&处理措施

- **【规避措施】**客户现场规避方案：回退到5.0.0
- **【处理措施】**问题最终解决方案：修改代码

### 解决方案

- **【故障现象】** 驱动执行报错
- **【故障场景】** ORM框架调用驱动后报错
- **【检查手段】** 类似场景可通过以下几步去分析

    1. 通过ORM框架调用函数链，找到驱动实际执行函数（代码分析）；
    2. 确认驱动中类型和cast函数的注册逻辑（代码分析）；
    3. Debug驱动代码，确认有问题的cast函数注册地方（debug）；

- **【处理方法】**

附代码示例：

```
import time
from sqlalchemy.orm import declarative_base, relationship, sessionmaker
from sqlalchemy import create_engine, Column, Integer, String, Text, TIMESTAMP, JSON, Boolean, ForeignKey, Date, DateTime, \
    UniqueConstraint, Index, CheckConstraint
from sqlalchemy.dialects.postgresql import UUID, BOOLEAN
from datetime import datetime
import base64
import threading
import traceback
import os

#import logging
#logging.basicConfig(level=logging.DEBUG)
#logging.getLogger('sqlalchemy.engine').setLevel(logging.DEBUG)

#os.environ['PSYCOPG_DEBUG'] = '1'

# 按照要求组织成一定的字符串,注意url特殊字符的转义
DB_URI = 'postgresql+psycopg2://zt10:Huawei123@192.168.0.118:5437/jdbc_utf8_b'

# 替换下面的参数以连接到你的openGauss数据库
# 格式为：'OpenGauss://<用户>:<密码>@<地址>:<端口>/<数据库名>'
engine = create_engine(DB_URI,
                       max_overflow=200,  # 超过连接池大小外最多创建的连接
                       pool_size=100,  # 连接池大小
                       pool_timeout=30,  # 池中没有线程最多等待的时间，否则报错
                       pool_recycle=10,  # 对线程池中的线程进行一次连接的回收的时间，如果是3600，表示1个小时后对连接进行回收
                       client_encoding='utf8'  # 字符集
                       )

# 声明ORM基类
Base = declarative_base()

class User(Base):
    __tablename__ = 'user5'

    id = Column(String(64), primary_key=True)
    extra = Column(Text,primary_key=True)
    enabled = Column(Boolean)
    default_project_id = Column(String(64))
    created_at = Column(TIMESTAMP(timezone=False))
    last_active_at = Column(Date)
    domain_id = Column(String(64))


def init_db():
    # 创建继承base类的表的映射关系
    Base.metadata.create_all(engine)

def query():
    Session = sessionmaker(bind=engine)
    session = Session()

    users = session.query(User).all()
    #users = session.query(User).filter_by(id)
    for user in users:
        if type(user.enabled) is not bool:
            print("is not bool", user.enabled)
            print("type=", type(user.enabled))


if __name__ == '__main__':
    init_db()
    try:
        for i in range(10000001):
            #t = threading.Thread(target=query)
            #t.start()
            if i % 1000 == 0:
                print("try ", i)
            query()
            #time.sleep(0.1)
    except BaseException as e:
        tb = traceback.format_exc()
        print("try ", i)
        print("catch except:", e, tb)
```

## **问题2：executemany故障报告**

### 问题描述

openGauss的Python驱动psycopg2中，executemany接口执行批量插入相较于mysql性能较差。

### 问题根因

Executemany接口继承于原生pg驱动，并且并未做修改，原生pg驱动同样存在该问题。该接口并没有对批量操作做任何优化，与在python中使用for循环无异。而在mysql的驱动中，executemany接口会把多个插入数据拼接成一个sql去执行。

Pg社区未做优化的原因：
参考以下链接中的讨论[issue](https://github.com/psycopg/psycopg2/issues/491)
可以看出pg社区的工程师认为，这种自动拼接的操作不应该由驱动来做而应该由业务人为的区分，所以一开始并未实现该功能。然而后续针对这个issue pg社区改变了想法，认为还是有必要做enhancement，所以添加了多个其他接口来实现批量执行的优化，原来的executemany保持不变。
其他接口使用方式如下：
<https://www.psycopg.org/docs/extras.html#fast-exec>
execute_values接口可以达到mysql驱动中executemany接口相同的功能。

### 解决方案

由于已经具备导成一条sql执行的接口，og社区也暂不考虑做executemany的优化。建议业务侧使用execute_values接口适配后重新进行测试查看是否满足业务需求。
具体的execute_values针对wakeloss脚本中的适配方案如下：

```
#添加库文件
from psycopg2.extras import execute_batch, execute_values

#插入时，values后面跟一个占位符%s即可，数据格式不变，调用方法为execute_values(cursor, insert_query, values)，详情还是参考https://www.psycopg.org/docs/extras.html#fast-exec
#脚本中做如下修改可跑通
insert_query = """
        INSERT IGNORE INTO {} ({})
        VALUES %s
""".format(d_table, ",".join(columns))
execute_values(cursor, insert_query, values)
```

## **问题3：jdbc连接b兼容库问题**

### 问题描述

客户反馈500版本jdbc驱动连接500版本b兼容数据库会报错，在相同情况下使用300版本连接数据库正常。

### 问题定位

1. 查看报错日志如下：

    `org.postgresql.util.PSQLException: [20.20.20.115:51808/20.20.20.115:16534] ERROR: permission denied for
    schema dolphin_catalog`

2. 问题复现

    搭建环境

    - 【安装数据库】编译安装5.0.0版本数据库

    - 【编译dolphin插件】

    1. 执行`git clone https://gitee.com/opengauss/Plugin.git -b v5.0.0`
    2. 将Plugin目录下的dolphin全部拷贝到openGauss-server/contrib目录下，拷贝之后进入到openGauss￾server/contrib/dolphin目录下进行编译（需要设置好gcc等环境变量）

    可以参考如下：

    ```
    [lzf_500@openGauss115 JDBC]$ cat ~/.bashrc
    # Source default setting
    [ -f /etc/bashrc ] && . /etc/bashrc
    # User environment PATH
    PATH="$HOME/.local/bin:$HOME/bin:$PATH"
    export PATH
    export CODE_BASE=/home/lzf_500/openGauss-server/
    export GAUSSHOME=$CODE_BASE/mppdb_temp_install/
    export LD_LIBRARY_PATH=$GAUSSHOME/lib::$LD_LIBRARY_PATH
    export PATH=$GAUSSHOME/bin:$PATH
    export BINARYLIBS=/home/lzf_500/binarylibs
    export GCC_PATH=$BINARYLIBS/buildtools/gcc7.3
    export CC=$GCC_PATH/gcc/bin/gcc
    export CXX=$GCC_PATH/gcc/bin/g++
    export
    LD_LIBRARY_PATH=$GAUSSHOME/lib:$GCC_PATH/gcc/lib64:$GCC_PATH/isl/lib:$GCC_PATH/mpc/lib/:$GCC_PATH/mpfr/l
    ib/:$GCC_PATH/gmp/lib/:$LD_LIBRARY_PATH
    ```

    - 【前置准备】

    1. 创建b库
    2. 创建用户
    3. 修改b库参数
    4. 修改数据库设置
    5. 官网上下载300与500版本JDBC驱动，编写测试脚本，进行测试
    a. java的测试demo
    OpenGaussJDBCExample.java

    ```java
    importjava.sql.Connection;
    importjava.sql.DriverManager;importjava.sql.ResultSet;
    importjava.sql.Statement;
    importjava.sql.SQLException;
    publicclassOpenGaussJDBCExample{
        //数据库连接信息
        privatestaticfinalStringDB_URL="jdbc:postgresql://20.20.20.115:16534/test";privatestaticfinalStringUSER="t2";
        privatestaticfinalStringPASS="Huawei@123";
        publicstaticvoidmain(String[]args){
            Connectionconn=null;
            Statementstmt=null;
            try{
                //注册JDBC驱动
                Class.forName("org.postgresql.Driver");
                //打开连接
                System.out.println("连接到数据库...");
                conn=DriverManager.getConnection(DB_URL,USER,PASS);
                //执行查询
                //执行查询
                System.out.println("创建查询语句...");
                stmt=conn.createStatement();
                Stringsql="select*fromtest1.t1where1+1;";
                esultSetrs=null;
                for(inti=0;i<1;i++){
                    rs=stmt.executeQuery(sql);
                    //打印查询结果
                    while(rs.next()){
                        //根据查询结果字段类型获取数据
                        //intid=rs.getInt("a");
                        //Stringname=rs.getString("name");//打印结果
                        //System.out.println("ID:"+id);
                    }
                    rs.close();
                 }
                 //完成后关闭
                 rs.close();
                stmt.close();
                conn.close();
            }catch(SQLExceptionse){
                //处理JDBC错误
                se.printStackTrace  
            }catch(Exceptione){
                //处理Class.forName错误
                e.printStackTrace();
            }finally{
                //关闭资源
                try{
                    if(stmt!=null)stmt.close();
                }catch(SQLExceptionse2){
                try{
                    if(conn!=null)conn.close();
                }catch(SQLExceptionse){
                    se.printStackTrace();
                }
            }
            System.out.println("程序结束!");
         }
     }
     }
    ```

    b. 测试脚本
    test.sh ,修改文件名和路径名，选择使用300驱动或者500驱动

    ```sh
    javac-cp.:/home/lzf_500/JDBC/3.0.0/postgresql.jarOpenGaussJDBCExample.java 
    java-cp.:/home/lzf_500/JDBC/3.0.0/postgresql.jarOpenGaussJDBCExample
    ```

    - 【问题复现】

    1. 修改OpenGaussJDBCExample.java 中`String sql = " select * from test1.t1；"`;
    300与500驱动执行均未报错
    2. 咨询兼容性开发同事，设计用例`String sql = " select * from test1.t1 where 1+1；"`;
    300驱动与500驱动均报错，如下：

        ```sql
        连接到数据库...
        Jan 17, 2025 11:38:01 AM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
        INFO: [2c831c08-0ebd-4694-b34b-29d14fa704f7] Try to connect. IP: 20.20.20.115:16534
        Jan 17, 2025 11:38:01 AM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
        INFO: [20.20.20.115:51808/20.20.20.115:16534] Connection is established. ID: 2c831c08-0ebd-4694-b34b-
        29d14fa704f7
        Jan 17, 2025 11:38:01 AM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
        INFO: Connect complete. ID: 2c831c08-0ebd-4694-b34b-29d14fa704f7
        创建查询语句...
        org.postgresql.util.PSQLException: [20.20.20.115:51808/20.20.20.115:16534] ERROR: permission denied for
        schema dolphin_catalog
            Detail: N/A
                    at org.postgresql.core.v3.QueryExecutorImpl.receiveErrorResponse(QueryExecutorImpl.java:2901)
                    at org.postgresql.core.v3.QueryExecutorImpl.processResults(QueryExecutorImpl.java:2630)
                    at org.postgresql.core.v3.QueryExecutorImpl.execute(QueryExecutorImpl.java:362)
                    at org.postgresql.jdbc.PgStatement.runQueryExecutor(PgStatement.java:561)
                    at org.postgresql.jdbc.PgStatement.executeInternal(PgStatement.java:538)
                    at org.postgresql.jdbc.PgStatement.execute(PgStatement.java:396)
                    at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:338)
                    at org.postgresql.jdbc.PgStatement.executeCachedSql(PgStatement.java:324)
                    at org.postgresql.jdbc.PgStatement.executeWithFlags(PgStatement.java:301)
                    at org.postgresql.jdbc.PgStatement.executeQuery(PgStatement.java:240)
                    at OpenGaussJDBCExample_500.main(OpenGaussJDBCExample_500.java:33)
        程序结束!
        ```

    3. 修改用例，进行确认`String sql = " select * dolphin_calalog.dolphin_int4pl(1,1);"`;
    结果和场景2一致
    4. 查看数据库pg_log日志，进行分析，也是该语句执行报错

        ```log
        2025-01-1711:16:17.332t2test20.20.20.1152814615264033440[0:0#0]forschemadolphin_catalog
        2025-01-1711:16:17.332t2test20.20.20.1152814615264033440[0:0#0]2025-01-1711:16:17.332t2test20.20.20.1152814615264033440[0:0#0]privilegesfortheobject.
        2025-01-1711:16:17.332t2test20.20.20.1152814615264033440[0:0#0]systemtablestogettheacloftheobject.
        2025-01-1711:16:17.332t2test20.20.20.1152814615264033440[0:0#0]fromtest1.t1where1+1
        2025-01-1711:16:17.332t2test20.20.20.1152814615264033440[0:0#0]tid[1138099]'sbacktrace:
        ```

    5. 授予权限

        ```sql
        grantusageonschemadolphin_catalogtopublic;
        REVOKEUSAGEONSCHEMAdolphin_catalogFROMPUBLIC;(撤回语句，该sql不执行)
        ```

    然后再执行上述测试，300与500版本均能执行通过。

3. 问题探究

    从现象来看，是因为执行了类似的`select 1+1;`等类似的操作，需要调用到dolphin_catalog中的函数，
    但是没有相应的权限，需要授予权限之后才能执行。
    复现成功之后反馈给客户，向客户获取执行失败的sql进行结论验证，返回失败的都是同一条sql，如下所
    示

    ![image](figures/fig_driver_1_1.png)

## **问题4：jdbc适配cerdb如何操作**

### 问题描述

openGauss JDBC 适配cerdb操作指导。

### 解决方案

需要实现的功能如下：

![image](figures/fig_driver_4_1.png)

jdbc需要的环境：

| 软件及环境要求 | 推荐版本 |
| :------------- | :------- |
| maven          | 3.6.1    |
| java           | 1.8      |

若环境不满足，编译驱动包会报错：

![image](figures/fig_driver_4_2.png)

1. 步骤一：下载相关分支的代码（此处主要实现jdbc:cerdb功能）

    - 执行`git clone -b 5.0.0 https://gitee.com/opengauss/openGauss-connector-jdbc.git`，
    - 修改`/openGauss-connector-jdbc/pgjdbc/src/main/java/org/postgresql/Driver.java`
    - 在connect方法相关行追加”jdbc:cerdb:”，共三处（分支不同，相关代码行数会不同，注意区别）

        ![image](figures/fig_driver_4_3.png)

        ![image](figures/fig_driver_4_4.png)

        此处更换为cerdb，不追加。

        ![image](figures/fig_driver_4_5.png)

2. 步骤二：更改包名，及版本号。

    - 更改`/openGauss-connector-jdbc/pgjdbc`下的pom.xml,
    - 将`<artifactId>opengauss-jdbc</artifactId>`和`<version>6.0.0</version>`更改为客户需要命名的包及版本。

        ![image](figures/fig_driver_4_6.png)

    - 修改bulid.sh文件：openGauss-connector-jdbc/build.sh，共四处替换为cerdb:

        ![image](figures/fig_driver_4_6.png)
        ![image](figures/fig_driver_4_7.png)
        ![image](figures/fig_driver_4_8.png)
        ![image](figures/fig_driver_4_9.png)

    - 适配ceos系统,增加相关代码：主要查看ceos的`cat /etc/system-release`。

        ![image](figures/fig_driver_4_10.png)

3. 步骤三：打包，执行`sh build.sh`。

    ![image](figures/fig_driver_4_11.png)

    - 测试cerdb-jdbc-1.1.jar，此处的dirver必须选择opengauss。

        ![image](figures/fig_driver_4_12.png)

        测试正常：

        ![image](figures/fig_driver_4_13.png)

    - 测试postgresql.jar，Driver必须选择postgresql。

        ![image](figures/fig_driver_4_14.png)

        测试正常：

        ![image](figures/fig_driver_4_15.png)

    - openGauss-connector-jdbc/build.sh修改，如图，将org.opengauss改为`org.cerdb,String driver = "org.cerdb.Driver";`即可使用。

        ![image](figures/fig_driver_4_16.png)
        ![image](figures/fig_driver_4_17.png)

    - Bishengjdk8也可以打包：

        ![image](figures/fig_driver_4_18.png)

        经测试Bishengjdk8打的jar包传到jdk8环境上，jar也可以正常使用。

## **问题5：libpq连接指导**

### 解决方案

#### 通过gsql方式连接

```
gsql "dbname=postgres port=12486 host='localhost' connect_timeout=10 application_name=cm_agent
options='-c xc_maintenance_mode=on -c remotetype=internaltool'"
```

#### 通过代码连接

1. 安装库

    ```
    Ubuntu/Debian：
    apt-get install libpq-dev
    CentOS/RHEL：
    yum install postgresql-devel
    ```

2. 测试demo

    ```
    #include <stdio.h>
    #include <stdlib.h>
    #include <libpq-fe.h>
    //#include "libpq/libpq-int.h"
    void checkConnStatus(PGconn *conn) {
    if (PQstatus(conn) != CONNECTION_OK) {
    fprintf(stderr, "Connection to database failed: %s", PQerrorMessage(conn));
    PQfinish(conn);
    exit(1);
    }
    }
    int main() {
    char local_conninfo[256];
    int portnum = 12486;
    const char *host_str = "localhost";
    int connectTimeOut = 10;
    int rwTimeout = 20;
    const char *g_progname = "cm_agent";
    int enable_xc_maintenance_mode = 1;
    int rc = snprintf(local_conninfo, sizeof(local_conninfo),
    "dbname=postgres port=%d host='%s' connect_timeout=%d
    application_name=%s "
    "options='%s %s'",
    portnum + 1,
    host_str,
    connectTimeOut,
    g_progname,
    enable_xc_maintenance_mode ? "-c xc_maintenance_mode=on" : "",
    "-c remotetype=internaltool");
    if (rc < 0 || rc >= sizeof(local_conninfo)) {
    fprintf(stderr, "snprintf error\n");
    3.编译
    return 1;
    }
    printf("Connecting with connection info: %s\n", local_conninfo);
    PGconn *conn = PQconnectdb(local_conninfo);
    printf("Connecting with connection info: %s\n", local_conninfo);
    checkConnStatus(conn);
    printf("Connected to database successfully\n");
    PQfinish(conn);
    return 0;
    }
    ```

3. 编译

```
gcc -o demo demo.c -lpq
```

## **问题6：修改用户名导致md5认证失败**

### 问题描述

修改了包含md5认证的用户名，会导致使用md5连接认证失败。

### 解决方案

- 修改用户名： `ALTER USER btest RENAME TO atest;`
- 查看加密方式： `password_encryption_type=1`

    如果password_encryption_type为0或者1，则用户的密码是使用md5进行加密的。

    md5加密不安全，opengauss在修改用户名后，为了安全起见，将md5的认证设置为不可用，必须重置密码才行。
    `WARNING:  Please alter the role's password after rename role name for compatible with PG client.`
    原生pg驱动只能使用md5跟opengauss连接，所以报这个错了。重置下密码，pg驱动也可以继续用了。推荐用opengauss驱动。

    ![image](figures/fig_driver_6.png)

## **问题7：修改表结构应用查询报错**

### 问题描述

修改表结构导致DDL报错，问题如图：

![image](figures/fig_driver_7.png)

报错：`Error: cached plan must not change result type.`

背景：这个表使用alter语句，修改过一个字段的长度，从500改为2000。

### 问题定位

DDL是被会话级别缓存的，改了之后需要重连会话。

1. 对于这个问题，可以应用侧重启，重新`prepare execute`。
2. 重启数据库肯定可以解决，但不推荐。
