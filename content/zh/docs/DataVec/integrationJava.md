# Java SDK对接向量数据库
本文介绍如何使用Java语言调用openGauss向量数据库

## 要求
- 安装java1.8及以上版本
- Apache Maven

## 安装SDK
开发者可以直接从maven中央仓库中获取jar包[maven中央仓库下载](https://central.sonatype.com/artifact/org.opengauss/opengauss-jdbc)，也可以在openGauss官网下载[社区官网下载](https://opengauss.org/zh/download/)，运行以下命令安装Java SDK
```xml
<dependency>
    <groupId>org.opengauss</groupId>
    <artifactId>opengauss-jdbc</artifactId>
    <version>your version</version>
</dependency>
```
## 基本操作
### 1.连接数据库
```java
public Connection getConnection(String username, String passwd)
{
    String driver = "org.opengauss.Driver";
    String sourceURL = "jdbc:opengauss://localhost:port/database_name";
    Connection conn = null;
    
    try {
        Class.forName(driver).getDeclaredConstructor().newInstance();
    } catch(Exception e) {
        e.printStackTrace();
        return null;
    }
    try {
        conn = DriverManager.getConnection(sourceURL, username, passwd);
        System.out.println("Connection succeed!");
    } catch(Exception e) {
        e.printStackTrace();
        return null;
    }
    return conn;
}
```
### 2.创建表
```java
// 执行普通SQL语句
public void ExecuteSQL(Connection conn, String sql)
{
    Statement stmt = null;
    try {
        stmt = conn.createStatement();
        int rc = stmt.executeUpdate(sql);
        stmt.close();
    } catch (SQLException e) {
        if (stmt != null) {
            try {
                stmt.close();
            } catch (SQLException e1) {
                e1.printStackTrace();
            }
        }
        e.printStackTrace();
    }
}

public void CreateTable(int dim)
{
    String sql = String.format("CREATE TABLE IF NOT EXISTS demotable(id INTEGER, content TEXT, embedding vector(%d));", dim);
    ExecuteSQL(sql);
}
```
### 3.创建索引
```java
// 用L2距离创建HNSW类型的向量索引
public void CreateIndex()
{
    String sql = String.format("CREATE INDEX ON demotable USING hnsw (embedding vector_l2_ops);");
    ExecuteSQL(sql);
}
```
### 4.插入/删除/更新
- 插入
 ```java
public void InsertDataSingle(int id, String content, String vector)
{
    String sql = String.format("INSERT INTO demotable VALUES(%d, '%s', '%s');", id, content, vector);
    ExecuteSQL(sql);
}
```
- 删除
```java
public void DeleteData()
{
    String sql = String.format("DELETE FROM demotable where id > 10;");
    ExecuteSQL(sql);
}
```
- 更新
```java
public void UpdateData(String vector)
{
    String sql = String.format("UPDATE demotable set embedding = '%s' where id = 10;");
    ExecuteSQL(sql);
}
```
### 5.查询
```java
public String findNearestVectors(Connection conn, int efsearch, String vector, int topK)
{
    Statement statement = null;
    ResultSet resultSet = null;
    String res = "";
    // 设置查询参数
    String paramsql = String.format("set hnsw_ef_search = %d;", efsearch);
    ExecuteSQL(paramsql);
    String querysql = String.format("SELECT * FROM demotable ORDER BY embedding <-> '%s' LIMIT %d;", vector, topK);
    try {
        statement = conn.createStatement();
        resultSet = statement.executeQuery(querysql);
        while (resultSet.next()) {
            int id = resultSet.getInt("id");
            String content = resultSet.getString("content");
            Object embed = resultSet.getObject("embedding");
            // 替换成你希望的结果
            res += "id: " + id + ", content: " + content + ",embedding: " + embed + "\n";
        }
    } catch (Exception e) {
        e.printStackTrace();
    } finally {
        try { if (resultSet != null) resultSet.close(); } catch(Exception e) {}
        try { if (statement != null) statement.close(); } catch(Exception e) {}
    }
    return res;
}
```
[更多操作示例参考](https://gitee.com/opengauss/openGauss-connector-jdbc)