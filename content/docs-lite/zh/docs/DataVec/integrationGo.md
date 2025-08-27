# Go SDK对接向量数据库
本文介绍如何使用Go语言调用openGauss向量数据库。

## 环境要求
- 安装Go 1.19及以上版本。

## 安装SDK
开发者可以运行以下命令安装GO SDK[官方仓库](http://gitcode.com/opengauss/openGauss-connector-go-pq)，并在项目中导入该包。
```
安装SDK
go get gitcode.com/opengauss/openGauss-connector-go-pq

在项目中导入该包
import (
 "database/sql"

 _ "gitcode.com/opengauss/openGauss-connector-go-pq"
)

```
>![](figures/icon-note.png) **说明：**
>
>目前 gitcode 不支持 go get，请参考下方用例指导手动安装。

## 基本操作
### 1.连接数据库
>![](figures/icon-note.png) **说明：**
>
>该仓库所有资料和测试文件（copy_test.go,encode_test_go等）使用的密码及sslmode=disable仅为示例，在使用时，请根据实际情况配置正确的密码，使用安全的sslmode（默认值prefer）。

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
### 6.删除表
```go
func DropTable(client *sql.DB, tableName string) error {
    execSql := fmt.Sprintf("DROP TABLE IF EXISTS %s", tableName)
    _, err := client.Exec(execSql)
    return err
}
```
## 用例指导
-   **安装 openGauss-connector-go-pq**
```
# 创建部署脚本
cat << 'EOL' > setup_opengauss_go.sh
#!/bin/bash

# 设置项目名称和驱动信息
PROJECT_NAME="opengauss-go"
MODULE_NAME="opengauss"
DRIVER_MODULE_PATH="gitcode.com/opengauss/openGauss-connector-go-pq"
DRIVER_REPO_URL="https://$DRIVER_MODULE_PATH.git"
DRIVER_VERSION="v1.0.7"

# 获取 GOPATH
GOPATH=$(go env GOPATH)
DRIVER_LOCAL_PATH="$GOPATH/src/$DRIVER_MODULE_PATH"

# 创建项目目录并初始化 go mod
echo "🚀 初始化 Go 项目..."
mkdir -p "$PROJECT_NAME"
cd "$PROJECT_NAME" || exit 1
go mod init "$MODULE_NAME"

# 克隆 openGauss 驱动到本地路径
echo "📦 正在克隆 openGauss Go 驱动..."
mkdir -p "$DRIVER_LOCAL_PATH"
git clone "$DRIVER_REPO_URL" "$DRIVER_LOCAL_PATH"

# 修改 go.mod 添加 require 和 replace
echo "⚙️ 更新 go.mod 文件..."
cat <<EOL2 >> go.mod

require $DRIVER_MODULE_PATH $DRIVER_VERSION

replace $DRIVER_MODULE_PATH => $DRIVER_LOCAL_PATH
EOL2

# 清理模块缓存以确保生效
echo "🧹 清理模块缓存..."
go clean -modcache

# 下载依赖
echo "📥 安装依赖包..."
go get "$DRIVER_MODULE_PATH"

echo "✅ 初始化和依赖安装完成！"
EOL

# 赋予可执行权限
chmod +x setup_opengauss_go.sh

# 执行脚本，开始安装
./setup_opengauss_go.sh
```
-   **使用 Go SDK 连接 openGauss 执行向量操作 **
```
cd opengauss-go
# 创建main.go，填入一下内容
vim main.go
package main
import (
    "fmt"
    "log"
    "database/sql"

    _ "gitcode.com/opengauss/openGauss-connector-go-pq"
)

/*
 * 将上述创建、删除等函数复制到此处
 */

func main(){
    connStr := "host=YourIP port=YourPort user=YourUserName password=YourPassWord dbname=YourDBName sslmode=disable"
    dbClient, err := CreateDBClient(connStr)
    if err != nil {
        log.Fatal(err)
    }
    
    err = DropTable(dbClient, "demotable")
    err = CreateTable(dbClient, 3)
    err = CreateIndex(dbClient)

    data := TableData{
        Id:      1,
        Content: "test",
        Vector:  "[1,2,3]",
    }
    err = InsertDataSingle(dbClient, data)

    data = TableData{
        Id:      11,
        Content: "test1",
        Vector:  "[3,4,5]",
    }
    err = InsertDataSingle(dbClient, data)

    data = TableData{
        Id:      10,
        Content: "test3",
        Vector:  "[2,2,2]",
    }
    err = InsertDataSingle(dbClient, data)

    err = UpdateData(dbClient, "[3,3,3]")

    err = DeleteData(dbClient)

    vectors := SearchVectors(dbClient, 1, "[3,2,4]", 5)
    fmt.Println(vectors)
    err = DropTable(dbClient, "demotable")
}
```

[更多操作示例参考](https://gitcode.com/opengauss/openGauss-connector-go-pq)