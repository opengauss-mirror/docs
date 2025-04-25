# Go SDK对接向量数据库
本文介绍如何使用Go语言调用openGauss向量数据库。

## 环境要求
- 安装Go 1.19及以上版本。
- openGauss数据库安装部署 [容器镜像安装](https://docs.opengauss.org/zh/docs/7.0.0-RC1-lite/docs/InstallationGuide/%E5%AE%B9%E5%99%A8%E9%95%9C%E5%83%8F%E5%AE%89%E8%A3%85.html)。

## 安装SDK
开发者可以运行以下命令安装Go SDK[官方仓库](http://gitee.com/opengauss/openGauss-connector-go-pq)，并在项目中导入该包。
```
安装SDK
go get gitee.com/opengauss/openGauss-connector-go-pq

在项目中导入该包
import (
 "database/sql"

 _ "gitee.com/opengauss/openGauss-connector-go-pq"
)

```
## 基本操作
### 1.连接数据库
```go
// connectInfo格式: 
// "host=127.0.0.1 port=5432 user=username password=userpassword dbname=userdbname sslmode=disable"
func CreateDBClient(connectInfo string) (*sql.DB, error) {
    return sql.Open("opengauss", connectInfo)
}
```
### 2.创建表
```go
func CreateTable(client *sql.DB, dim int) error {
    execSql := fmt.Sprintf("CREATE TABLE IF NOT EXISTS demotable(id INTEGER, content TEXT, embedding vector(%d))", dim)
    _, err := client.Exec(execSql)
    return err
}
```
### 3.创建索引
```go
// 用L2距离创建HNSW类型的向量索引
func CreateIndex(client *sql.DB) error {
    execSql := fmt.Sprint("CREATE INDEX ON demotable USING hnsw (embedding vector_l2_ops)")
    _, err := client.Exec(execSql)
    return err
}
```
### 4.插入/删除/更新
- 插入
 ```go
// 单条插入
type TableData struct {
    Id      int
    Content string
    Vector  string
}
func InsertDataSingle(client *sql.DB, data TableData) error {
    execSql := fmt.Sprintf("INSERT INTO demotable VALUES(%d, '%s', '%s')", data.Id, data.Content, data.Vector)
    _, err := client.Exec(execSql)
    return err
}
```
- 删除
```go
func DeleteData(client *sql.DB) error {
    execSql := fmt.Sprint("DELETE FROM demotable where id > 10")
    _, err := client.Exec(execSql)
    return err
}
```
- 更新
```go
func UpdateData(client *sql.DB, vector string) error {
    execSql := fmt.Sprintf("UPDATE demotable set embedding = '%s' where id = 10", vector)
    _, err := client.Exec(execSql)
    return err
}
```
### 5.查询
```go
func SearchVectors(client *sql.DB, efsearch int, vector string, topK int) []string {
    var res []string
    // 设置查询参数
    paramsql := fmt.Sprintf("set hnsw_ef_search = %d", efsearch);
    querysql := fmt.Sprintf("SELECT * FROM demotable ORDER BY embedding <-> '%s' LIMIT %d;", vector, topK);
    _, _ = client.Exec(paramsql)
    rows, _ := client.Query(querysql)
    for rows.Next() {
        var id int
        var content string
        var vector []byte
        _ = rows.Scan(&id, &content, &vector)
        embedding := string(vector)
        row := fmt.Sprintf("id: %d, content: %s, embedding: %s", id, content, embedding);
        res = append(res, row)
    }
    return res
}
```
[更多操作示例参考](https://gitcode.com/opengauss/openGauss-connector-go-pq)