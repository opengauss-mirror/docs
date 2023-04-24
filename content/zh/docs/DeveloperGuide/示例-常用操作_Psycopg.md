# 示例：常用操作<a name="ZH-CN_TOPIC_0000001127192087"></a>

```
import psycopg2

# psycopg2常用连接方式
1. conn = psycopg2.connect(dbname="postgres", user="user", password="password", host="localhost", port=port)
2. conn = psycopg2.connect("dbname=postgres user=user password=password  host=localhost port=port")


# 创建连接对象
conn=psycopg2.connect(database="postgres",user="user",password="password",host="localhost",port=port)
cur=conn.cursor() #创建指针对象

# 创建连接对象（SSl连接）
conn = psycopg2.connect(dbname="postgres", user="user", password="password", host="localhost", port=port,
         sslmode="verify-ca", sslcert="client.crt",sslkey="client.key",sslrootcert="cacert.pem")
注意：sslcert，sslkey，sslrootcert分别为用户证书，用户私钥和根证书的文件路径，如果不进行赋值，默认为
      ~/.postgresql目录下对应的client.crt，client.key和root.crt。


# 创建表
cur.execute("CREATE TABLE student(id integer,name varchar,sex varchar);")

#插入数据
cur.execute("INSERT INTO student(id,name,sex) VALUES(%s,%s,%s)",(1,'Aspirin','M'))
cur.execute("INSERT INTO student(id,name,sex) VALUES(%s,%s,%s)",(2,'Taxol','F'))
cur.execute("INSERT INTO student(id,name,sex) VALUES(%s,%s,%s)",(3,'Dixheral','M'))

# 获取结果
cur.execute('SELECT * FROM student')
results=cur.fetchall()
print(results)

# 关闭连接
conn.commit()
cur.close()
conn.close()

# 使用日志
import logging
import psycopg2
from psycopg2.extras import LoggingConnection

logging.basicConfig(level=logging.DEBUG) # 日志级别
logger = logging.getLogger(__name__)

db_settings = {
    "user": "user",
    "password": "password",
    "host": "localhost",
    "database": "postgres",
    "port": port
}
conn = psycopg2.connect(connection_factory=LoggingConnection, **db_settings)
conn.initialize(logger)
```

