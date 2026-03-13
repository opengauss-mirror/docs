# openGauss Go 语言驱动常用操作示例

本文基于 `gitcode.com/opengauss/openGauss-connector-go-pq` 驱动，给出一套可运行的 Go 使用示例，演示如何在 Go 语言中通过标准 `database/sql` 接口访问 openGauss，并完成常见的增删改查、事务和 JSONB 等操作。

示例内容包括：

- 建立数据库连接
- 执行普通 SQL（建表）
- 使用预处理语句批量插入数据
- 使用预编译语句更新数据
- 查询并处理结果集
- 调用函数（返回标量值）
- 使用事务（手动提交 / 回滚）
- JSONB 类型的基本使用示例

---

## 1 前提条件与环境准备

### 1.1 数据库前提条件

在运行示例前，需要准备好以下环境：

- 已部署并启动 openGauss 数据库实例（示例使用主机 `127.0.0.1`，端口 `5432`）
- 已创建测试用户（例如 `ext_user`），并为其分配目标数据库（例如 `postgres`）的连接与基本 DDL/DML 权限
- 客户端网络可访问数据库服务端，端口已放通

可以通过 `gsql` 测试连接，例如：

```bash
gsql -d postgres -p 5432 -U ext_user -W 'password@123' -r
```

### 1.2 Go 及依赖准备

- Go 版本：建议 1.18 及以上
- 在独立目录中运行示例时，可以执行以下命令初始化 Go 模块并获取依赖：

```bash
mkdir opengauss-go-demo
cd opengauss-go-demo

go mod init opengauss-go-demo
go get gitcode.com/opengauss/openGauss-connector-go-pq
```

在已有的 openGauss Go 驱动仓库中（已存在 `go.mod`），可直接在仓库根目录下执行示例程序。

### 1.3 导入 Go 驱动

在 Go 源文件中通过匿名导入的方式注册 openGauss 驱动：

```go
import (
    "database/sql"

    _ "gitcode.com/opengauss/openGauss-connector-go-pq"
)
```

匿名导入（前缀为 `_`）表示只执行包的初始化逻辑（注册驱动），而不直接使用包内导出的符号。

---

## 2 建立数据库连接

### 2.1 连接串格式（DSN）

openGauss Go 驱动兼容 PostgreSQL 风格的 key=value 连接串，常见参数如下：

- `host`：数据库服务端地址，例如 `127.0.0.1`
- `port`：监听端口号，例如 `5432`
- `user`：数据库用户名，例如 `ext_user`
- `password`：用户密码，例如 `password@123`
- `dbname`：数据库名，例如 `postgres`
- `sslmode`：SSL 模式，开发/测试环境可设置为 `disable`，生产环境建议开启并正确配置证书

示例连接串：

```go
dsn := "host=127.0.0.1 port=5432 user=ext_user password=password@123 dbname=postgres sslmode=disable"
```

当密码中包含空格或单引号等特殊字符时，可以使用单引号包裹，例如：

```text
password='Abc 123'
```

### 2.2 封装连接函数示例

```go
package main

import (
    "database/sql"
    "log"

    _ "gitcode.com/opengauss/openGauss-connector-go-pq"
)

func openConn() (*sql.DB, error) {
    dsn := "host=127.0.0.1 port=5432 user=ext_user password=password@123 dbname=postgres sslmode=disable"

    db, err := sql.Open("opengauss", dsn)
    if err != nil {
        return nil, err
    }

    // 验证连接是否可用
    if err := db.Ping(); err != nil {
        _ = db.Close()
        return nil, err
    }

    return db, nil
}

func main() {
    db, err := openConn()
    if err != nil {
        log.Fatalf("connect openGauss failed: %v", err)
    }
    defer db.Close()

    log.Println("connect openGauss success")
}
```

在上述代码中，`"opengauss"` 为驱动注册时使用的名称，与驱动内部 `sql.Register("opengauss", &Driver{})` 保持一致。

---

## 3 执行普通 SQL：创建表

以下代码创建一张测试表 `customer_t1`：

```go
func createTable(db *sql.DB) error {
    sqlStr := `
CREATE TABLE IF NOT EXISTS customer_t1 (
    c_customer_sk   INTEGER,
    c_customer_name VARCHAR(32)
);`
    _, err := db.Exec(sqlStr)
    return err
}
```

只要当前用户在目标数据库中拥有建表权限，即可成功执行。

---

## 4 使用预处理语句批量插入数据

以下代码将多行数据插入 `customer_t1` 表中：

```go
import "fmt"

func batchInsertData(db *sql.DB) error {
    stmt, err := db.Prepare("INSERT INTO customer_t1 (c_customer_sk, c_customer_name) VALUES ($1, $2)")
    if err != nil {
        return err
    }
    defer stmt.Close()

    for i := 0; i < 3; i++ {
        if _, err := stmt.Exec(i, fmt.Sprintf("data %d", i)); err != nil {
            return err
        }
    }
    return nil
}
```

> [!NOTE]说明
> - 使用 `Prepare` 预编译 SQL，可以多次重复使用，提高性能。
> - SQL 中使用位置占位符 `$1`、`$2` 等，由驱动负责绑定参数。

---

## 5 使用预编译语句更新数据

以下代码将 `c_customer_sk = 1` 的记录的名称更新为 `"new Data"`：

```go
import "log"

func execPreparedUpdate(db *sql.DB) error {
    stmt, err := db.Prepare("UPDATE customer_t1 SET c_customer_name = $1 WHERE c_customer_sk = $2")
    if err != nil {
        return err
    }
    defer stmt.Close()

    res, err := stmt.Exec("new Data", 1)
    if err != nil {
        return err
    }

    rows, err := res.RowsAffected()
    if err != nil {
        return err
    }
    log.Printf("updated rows: %d", rows)
    return nil
}
```

---

## 6 查询并处理结果集

以下代码按主键排序查询 `customer_t1` 表，并逐行输出：

```go
func queryData(db *sql.DB) error {
    rows, err := db.Query("SELECT c_customer_sk, c_customer_name FROM customer_t1 ORDER BY c_customer_sk")
    if err != nil {
        return err
    }
    defer rows.Close()

    for rows.Next() {
        var sk int
        var name string
        if err := rows.Scan(&sk, &name); err != nil {
            return err
        }
        log.Printf("row: sk=%d, name=%s", sk, name)
    }

    return rows.Err()
}
```

`database/sql` 在内部对查询结果进行了流式处理，一般不会一次性将全部结果加载到内存中，适合较大结果集的逐行处理。

---

## 7 调用函数（返回标量值）

### 7.1 在 openGauss 中创建测试函数

首先，在数据库中创建一个简单函数 `testproc`，接收 3 个整数参数并返回它们的和：

```sql
CREATE OR REPLACE FUNCTION testproc(a int, b int, c int)
RETURNS int
AS $$
BEGIN
    RETURN a + b + c;
END;
$$ LANGUAGE plpgsql;
```

可以通过 `gsql` 或 Go 程序执行上述语句。下面给出在 Go 程序中创建函数的示例：

```go
func createTestFunc(db *sql.DB) error {
    sqlStr := `
CREATE OR REPLACE FUNCTION testproc(a int, b int, c int)
RETURNS int
AS $$
BEGIN
    RETURN a + b + c;
END;
$$ LANGUAGE plpgsql;
`
    _, err := db.Exec(sqlStr)
    return err
}
```

### 7.2 在 Go 中调用函数并获取返回值

通过 `SELECT` 调用函数并使用 `Scan` 获取结果：

```go
func callFuncTestproc(db *sql.DB) error {
    var out int
    err := db.QueryRow("SELECT testproc($1, $2, $3)", 20, 50, 90).Scan(&out)
    if err != nil {
        return err
    }
    log.Printf("testproc result: %d", out)
    return nil
}
```

---

## 8 使用事务（手动提交 / 回滚）

以下代码示例演示在单个事务中执行插入和更新操作，并根据执行结果决定提交或回滚：

```go
func doInTx(db *sql.DB) (err error) {
    tx, err := db.Begin()
    if err != nil {
        return err
    }

    defer func() {
        if p := recover(); p != nil {
            _ = tx.Rollback()
            panic(p)
        } else if err != nil {
            _ = tx.Rollback()
        } else {
            err = tx.Commit()
        }
    }()

    if _, err = tx.Exec(
        "INSERT INTO customer_t1 (c_customer_sk, c_customer_name) VALUES ($1, $2)",
        100, "tx-data",
    ); err != nil {
        return err
    }

    if _, err = tx.Exec(
        "UPDATE customer_t1 SET c_customer_name = $1 WHERE c_customer_sk = $2",
        "tx-updated", 100,
    ); err != nil {
        return err
    }

    return nil
}
```

> [!NOTE]说明
> - 调用 `db.Begin()` 开启事务，得到 `*sql.Tx` 对象。
> - 所有需要在事务中执行的 SQL 使用 `tx.Exec`、`tx.Query` 等方法。
> - 若中途出现错误或发生 `panic`，调用 `Rollback` 回滚事务；否则在最后调用 `Commit` 提交事务。

---

## 9 JSONB 类型使用示例

本节演示如何在 Go 中向 JSONB 字段写入结构化数据并读取出来。

### 9.1 创建 JSONB 测试表

```go
func createJSONTable(db *sql.DB) error {
    _, err := db.Exec(`
CREATE TABLE IF NOT EXISTS t_jsonb (
    id   serial PRIMARY KEY,
    data jsonb
);`)
    return err
}
```

### 9.2 向 JSONB 字段写入数据

定义一个对应的 Go 结构体，使用标准库 `encoding/json` 序列化为 JSON 字符串后插入数据库：

```go
import "encoding/json"

type Payload struct {
    Name string `json:"name"`
    Age  int    `json:"age"`
}

func insertJSON(db *sql.DB) error {
    p := Payload{Name: "Alice", Age: 30}
    b, err := json.Marshal(p)
    if err != nil {
        return err
    }
    _, err = db.Exec("INSERT INTO t_jsonb (data) VALUES ($1)", string(b))
    return err
}
```

### 9.3 从 JSONB 字段读取并反序列化

```go
func queryJSON(db *sql.DB) error {
    rows, err := db.Query("SELECT data FROM t_jsonb")
    if err != nil {
        return err
    }
    defer rows.Close()

    for rows.Next() {
        var raw string
        if err := rows.Scan(&raw); err != nil {
            return err
        }

        var p Payload
        if err := json.Unmarshal([]byte(raw), &p); err != nil {
            return err
        }
        log.Printf("json payload: %+v", p)
    }

    return rows.Err()
}
```

---

## 10 全量示例程序

下面示例程序将前文各个步骤串联起来，在一个程序中依次完成：

1. 建立数据库连接  
2. 创建表 `customer_t1`  
3. 批量插入数据  
4. 预编译更新数据  
5. 查询数据  
6. 创建并调用函数 `testproc`  
7. 在事务中执行插入与更新  
8. 创建 JSONB 表、插入 JSON 数据并查询  

```go
package main

import (
    "database/sql"
    "encoding/json"
    "fmt"
    "log"

    _ "gitcode.com/opengauss/openGauss-connector-go-pq"
)

type Payload struct {
    Name string `json:"name"`
    Age  int    `json:"age"`
}

func openConn() (*sql.DB, error) {
    dsn := "host=127.0.0.1 port=5432 user=ext_user password=password@123 dbname=postgres sslmode=disable"

    db, err := sql.Open("opengauss", dsn)
    if err != nil {
        return nil, err
    }

    if err := db.Ping(); err != nil {
        _ = db.Close()
        return nil, err
    }
    return db, nil
}

func createTable(db *sql.DB) error {
    sqlStr := `
CREATE TABLE IF NOT EXISTS customer_t1 (
    c_customer_sk   INTEGER,
    c_customer_name VARCHAR(32)
);`
    _, err := db.Exec(sqlStr)
    return err
}

func batchInsertData(db *sql.DB) error {
    stmt, err := db.Prepare("INSERT INTO customer_t1 (c_customer_sk, c_customer_name) VALUES ($1, $2)")
    if err != nil {
        return err
    }
    defer stmt.Close()

    for i := 0; i < 3; i++ {
        if _, err := stmt.Exec(i, fmt.Sprintf("data %d", i)); err != nil {
            return err
        }
    }
    return nil
}

func execPreparedUpdate(db *sql.DB) error {
    stmt, err := db.Prepare("UPDATE customer_t1 SET c_customer_name = $1 WHERE c_customer_sk = $2")
    if err != nil {
        return err
    }
    defer stmt.Close()

    res, err := stmt.Exec("new Data", 1)
    if err != nil {
        return err
    }
    rows, err := res.RowsAffected()
    if err != nil {
        return err
    }
    log.Printf("updated rows: %d", rows)
    return nil
}

func queryData(db *sql.DB) error {
    rows, err := db.Query("SELECT c_customer_sk, c_customer_name FROM customer_t1 ORDER BY c_customer_sk")
    if err != nil {
        return err
    }
    defer rows.Close()

    for rows.Next() {
        var sk int
        var name string
        if err := rows.Scan(&sk, &name); err != nil {
            return err
        }
        log.Printf("row: sk=%d, name=%s", sk, name)
    }
    return rows.Err()
}

func createTestFunc(db *sql.DB) error {
    sqlStr := `
CREATE OR REPLACE FUNCTION testproc(a int, b int, c int)
RETURNS int
AS $$
BEGIN
    RETURN a + b + c;
END;
$$ LANGUAGE plpgsql;
`
    _, err := db.Exec(sqlStr)
    return err
}

func callFuncTestproc(db *sql.DB) error {
    var out int
    err := db.QueryRow("SELECT testproc($1, $2, $3)", 20, 50, 90).Scan(&out)
    if err != nil {
        return err
    }
    log.Printf("testproc result: %d", out)
    return nil
}

func doInTx(db *sql.DB) (err error) {
    tx, err := db.Begin()
    if err != nil {
        return err
    }

    defer func() {
        if p := recover(); p != nil {
            _ = tx.Rollback()
            panic(p)
        } else if err != nil {
            _ = tx.Rollback()
        } else {
            err = tx.Commit()
        }
    }()

    if _, err = tx.Exec(
        "INSERT INTO customer_t1 (c_customer_sk, c_customer_name) VALUES ($1, $2)",
        100, "tx-data",
    ); err != nil {
        return err
    }

    if _, err = tx.Exec(
        "UPDATE customer_t1 SET c_customer_name = $1 WHERE c_customer_sk = $2",
        "tx-updated", 100,
    ); err != nil {
        return err
    }

    return nil
}

func createJSONTable(db *sql.DB) error {
    _, err := db.Exec(`
CREATE TABLE IF NOT EXISTS t_jsonb (
    id   serial PRIMARY KEY,
    data jsonb
);`)
    return err
}

func insertJSON(db *sql.DB) error {
    p := Payload{Name: "Alice", Age: 30}
    b, err := json.Marshal(p)
    if err != nil {
        return err
    }
    _, err = db.Exec("INSERT INTO t_jsonb (data) VALUES ($1)", string(b))
    return err
}

func queryJSON(db *sql.DB) error {
    rows, err := db.Query("SELECT data FROM t_jsonb")
    if err != nil {
        return err
    }
    defer rows.Close()

    for rows.Next() {
        var raw string
        if err := rows.Scan(&raw); err != nil {
            return err
        }
        var p Payload
        if err := json.Unmarshal([]byte(raw), &p); err != nil {
            return err
        }
        log.Printf("json payload: %+v", p)
    }
    return rows.Err()
}

func main() {
    db, err := openConn()
    if err != nil {
        log.Fatalf("connect openGauss failed: %v", err)
    }
    defer db.Close()

    log.Println("== create table customer_t1 ==")
    if err := createTable(db); err != nil {
        log.Fatalf("createTable failed: %v", err)
    }

    log.Println("== batch insert data ==")
    if err := batchInsertData(db); err != nil {
        log.Fatalf("batchInsertData failed: %v", err)
    }

    log.Println("== exec prepared update ==")
    if err := execPreparedUpdate(db); err != nil {
        log.Fatalf("execPreparedUpdate failed: %v", err)
    }

    log.Println("== query data ==")
    if err := queryData(db); err != nil {
        log.Fatalf("queryData failed: %v", err)
    }

    log.Println("== create and call testproc() ==")
    if err := createTestFunc(db); err != nil {
        log.Fatalf("createTestFunc failed: %v", err)
    }
    if err := callFuncTestproc(db); err != nil {
        log.Fatalf("callFuncTestproc failed: %v", err)
    }

    log.Println("== do in transaction ==")
    if err := doInTx(db); err != nil {
        log.Fatalf("doInTx failed: %v", err)
    }

    log.Println("== jsonb demo ==")
    if err := createJSONTable(db); err != nil {
        log.Fatalf("createJSONTable failed: %v", err)
    }
    if err := insertJSON(db); err != nil {
        log.Fatalf("insertJSON failed: %v", err)
    }
    if err := queryJSON(db); err != nil {
        log.Fatalf("queryJSON failed: %v", err)
    }

    log.Println("all demos finished successfully")
}
```

