# openGauss Go Driver Common Operation Examples

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-10-13T01:58:39.316Z pushedAt=2026-10-16T03:56:41.177Z -->

Based on the `atomgit.com/opengauss/openGauss-connector-go-pq` driver, this document provides a set of runnable Go usage examples that demonstrate how to access openGauss through the standard `database/sql` interface in Go and perform common operations such as add, delete, modify, query, transactions, and JSONB.

The examples include:

- Establishing a database connection
- Executing ordinary SQL (creating a table)
- Using prepared statements to insert data in batches
- Using prepared statements to update data
- Querying and processing result sets
- Calling a function (returning a scalar value)
- Using transactions (manual commit / rollback)
- Basic usage example of the JSONB type

---

## 1 Prerequisites and Environment Preparation

### 1.1 Database Prerequisites

Before running the examples, prepare the following environment:

- An openGauss database instance has been deployed and started (the examples use host `127.0.0.1` and port `5432`).
- A test user (for example, `ext_user`) has been created and granted the connection and basic DDL/DML privileges on the target database (for example, `postgres`).
- The client network can access the database server, and the port is open.

The connection can be tested using `gsql`, for example:

```bash
gsql -d postgres -p 5432 -U ext_user -W 'password@123' -r
```

### 1.2 Go and Dependency Preparation

- Go version: 1.18 or later is recommended
- When running examples in a standalone directory, execute the following command to initialize the Go module and obtain dependencies:

```bash
mkdir opengauss-go-demo
cd opengauss-go-demo

go mod init opengauss-go-demo
go get atomgit.com/opengauss/openGauss-connector-go-pq
```

In an existing openGauss Go driver repository (where `go.mod` already exists), you can run the example programs directly from the repository root directory.

### 1.3 Importing the Go Driver

Register the openGauss driver in a Go source file through anonymous import:

```go
import (
    "database/sql"

    _ "atomgit.com/opengauss/openGauss-connector-go-pq"
)
```

Anonymous import (with the `_` prefix) means that only the package initialization logic (driver registration) is executed, without directly using the symbols exported by the package.

---

## 2 Establishing a Database Connection

### 2.1 Connection String Format (DSN)

The openGauss Go driver is compatible with PostgreSQL-style key=value connection strings. Common parameters are as follows:

- `host`: address of the database server, for example, `127.0.0.1`
- `port`: listening port number, for example, `5432`
- `user`: database username, for example, `ext_user`
- `password`: user password, for example, `password@123`
- `dbname`: database name, for example, `postgres`
- `sslmode`: SSL mode. In development/test environments, it can be set to `disable`. In production environments, it is recommended to enable it and configure certificates correctly.

Example connection string:

```go
dsn := "host=127.0.0.1 port=5432 user=ext_user password=password@123 dbname=postgres sslmode=disable"
```

When the password contains special characters such as spaces or single quotation marks, it can be enclosed in single quotation marks, for example:

```text
password='Abc 123'
```

### 2.2 Encapsulating the Connection Function Example

```go
package main

import (
    "database/sql"
    "log"

    _ "atomgit.com/opengauss/openGauss-connector-go-pq"
)

func openConn() (*sql.DB, error) {
    dsn := "host=127.0.0.1 port=5432 user=ext_user password=password@123 dbname=postgres sslmode=disable"

    db, err := sql.Open("opengauss", dsn)
    if err != nil {
        return nil, err
    }

    // Verify that the connection is available.
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

In the preceding code, `"opengauss"` is the name used when the driver is registered, and it is consistent with `sql.Register("opengauss", &Driver{})` inside the driver.

---

## 3 Executing Ordinary SQL: Creating a Table

The following code creates a test table `customer_t1`:

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

The statement executes successfully as long as the current user has the privilege to create tables in the target database.

---

## 4 Batch Inserting Data Using Prepared Statements

The following code inserts multiple rows of data into the `customer_t1` table:

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

> [!NOTE]Note
> - Use `Prepare` to precompile the SQL statement, which can be reused multiple times to improve performance.
> - Positional placeholders such as `$1` and `$2` are used in the SQL statement, and the driver is responsible for binding the parameters.

---

## 5 Updating Data Using a Prepared Statement

The following code updates the name of the record where `c_customer_sk = 1` to `"new Data"`:

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

## 6 Querying and Processing Result Sets

The following code queries the `customer_t1` table sorted by the primary key and outputs the results row by row:

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

`database/sql` internally streams the query results and generally does not load all results into memory at once, making it suitable for processing large result sets row by row.

---

## 7 Calling the Function (Returning a Scalar Value)

### 7.1 Creating a Test Function in openGauss

First, create a simple function `testproc` in the database. It receives three integer parameters and returns their sum:

```sql
CREATE OR REPLACE FUNCTION testproc(a int, b int, c int)
RETURNS int
AS $$
BEGIN
    RETURN a + b + c;
END;
$$ LANGUAGE plpgsql;
```

The preceding statement can be executed through `gsql` or a Go program. The following is an example of creating the function in a Go program:

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

### 7.2 Calling a Function in Go and Obtaining the Return Value

Call the function through `SELECT` and use `Scan` to obtain the result:

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

## 8 Using Transactions (Manual Commit / Rollback)

The following code example demonstrates the insert and update operations in a single transaction, and decides whether to commit or roll back based on the execution result:

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

> [!NOTE]Note 
> - Call `db.Begin()` to start a transaction and obtain a `*sql.Tx` object.
> - Use methods such as `tx.Exec` and `tx.Query` for all SQL statements that need to be executed within the transaction.
> - If an error occurs or a `panic` is triggered midway, call `Rollback` to roll back the transaction; otherwise, call `Commit` at the end to commit the transaction.

---

## 9 JSONB Type Usage Example

This section demonstrates how to write structured data to a JSONB field and read it back in Go.

### 9.1 Creating a JSONB Test Table

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

### 9.2 Writing Data to a JSONB Field

Define a corresponding Go struct, serialize it to a JSON string using the standard library `encoding/json`, and then insert it into the database:

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

### 9.3 Reading from the JSONB Field and Deserializing

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

## 10 Complete Example Program

The following example program connects the steps described in the preceding sections and completes the following operations in sequence:

1. Establish a database connection  
2. Create the table `customer_t1`  
3. Insert data in batches  
4. Update data using a prepared statement  
5. Query data  
6. Create and call the function `testproc`  
7. Perform insert and update operations in a transaction  
8. Create a JSONB table, insert JSON data, and query it  

```go
package main

import (
    "database/sql"
    "encoding/json"
    "fmt"
    "log"

    _ "atomgit.com/opengauss/openGauss-connector-go-pq"
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

