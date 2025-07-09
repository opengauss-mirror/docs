# C++ SDK对接向量数据库
本文介绍如何使用C++语言调用openGauss向量数据库

## 环境准备
- g++
- libpq库
```bash
apt-get install libpq-dev
```

## 基本操作
### 1.连接数据库
```cpp
#include <iostream>
#include <vector>
#include <string>
#include <libpq-fe.h>
#include <sstream>
#include <stdexcept>

class OpenGaussManager {
private:
    PGconn* conn;

    // 转义标识符（表名、列名等）
    std::string escape_identifier(const std::string& identifier) {
        char* escaped = PQescapeIdentifier(conn, identifier.c_str(), identifier.size());
        if (!escaped) throw std::runtime_error(PQerrorMessage(conn));
        std::string result(escaped);
        PQfreemem(escaped);
        return result;
    }

    // 执行SQL并检查结果
    void execute_sql(const std::string& sql) {
        PGresult* res = PQexec(conn, sql.c_str());
        if (PQresultStatus(res) != PGRES_COMMAND_OK) {
            std::string err = PQerrorMessage(conn);
            PQclear(res);
            throw std::runtime_error("SQL error: " + err);
        }
        PQclear(res);
    }

    // 将vector转为PostgreSQL数组格式
    std::string vector_to_string(const std::vector<float>& vec) {
        std::ostringstream oss;
        oss << "'[";
        for (size_t i = 0; i < vec.size(); ++i) {
            if (i > 0) oss << ",";
            oss << vec[i];
        }
        oss << "]'";
        return oss.str();
    }

public:
    // 构造函数（仅初始化连接指针）
    OpenGaussManager(const std::string& conninfo){
        conn = PQconnectdb(conninfo.c_str());

        if (PQstatus(conn) != CONNECTION_OK) {
            std::cerr << "Connection failed: " << PQerrorMessage(conn) << std::endl;
            PQfinish(conn);
            conn = nullptr;
        }
    }

    // 析构函数（确保释放连接）
    ~OpenGaussManager() {
        disconnectDB();
    }
    //其它方法
};
```
### 2.创建表
```cpp
void create_table(const std::string& table_name, int vector_dim) {
    std::string sql = 
        "CREATE TABLE IF NOT EXISTS public." + escape_identifier(table_name) + 
        " (id BIGINT PRIMARY KEY, " +
        "embedding vector(" + std::to_string(vector_dim) + "))";
    
    execute_sql(sql);
}
```

### 3.创建索引
```cpp
void create_index(const std::string& table_name) {
    std::string sql = 
        "CREATE INDEX ON " + escape_identifier(table_name) + 
        "USING hnsw(embedding vector_l2_ops);";
    execute_sql(sql);
}
```
### 4.插入/删除/更新数据
- 插入
```cpp
void insert(const std::string& table_name, int id, const std::vector<float>& embedding) {
    std::string sql = 
        "INSERT INTO public." + escape_identifier(table_name) + 
        " (id, embedding) VALUES (" +
        std::to_string(id) + ", " +
        vector_to_string(embedding) + ")";
    
    execute_sql(sql);
}
```

- 删除
```cpp
int delete_by_id(const std::string& table_name, const std::vector<int>& ids) {
    if (ids.empty()) return 0;
    // 构建 ID 列表
    std::stringstream id_list;
    for (size_t i = 0; i < ids.size(); ++i) {
        id_list << escape_literal(std::to_string(ids[i]));
        if (i != ids.size() - 1) id_list << ",";
    }
    std::string sql = 
        "DELETE FROM public." + escape_identifier(table_name) + 
        " WHERE id IN (" + id_list.str() + ")";
    execute_query(sql);
    PGresult* res = PQexec(conn, "SELECT ROW_COUNT");
    int deleted = std::stoi(PQgetvalue(res, 0, 0));
    PQclear(res);
    return deleted;
}
```

- 更新
```cpp
void update(const std::string& table_name, 
                    int id, 
                    const std::vector<float>& embedding) {
    std::string sql = 
        "UPDATE public." + escape_identifier(table_name) + 
        " SET embedding = " + vector_to_string(embedding) + 
        " WHERE id = " + escape_literal(std::to_string(id));
    execute_query(sql);
}
```
### 5.查询
```cpp
std::vector<std::pair<int, std::vector<float>>> select(
        const std::string& table_name,
        const std::vector<float>& query_vec,
        int topk = 10
    ) {
    std::vector<std::pair<int, std::vector<float>>> results;
    
    std::string sql = 
        "SELECT id, embedding FROM public." + escape_identifier(table_name) +
        " ORDER BY embedding <-> " + vector_to_string(query_vec) +
        " LIMIT " + std::to_string(topk);
    
    PGresult* res = PQexec(conn, sql.c_str());
    if (PQresultStatus(res) != PGRES_TUPLES_OK) {
        PQclear(res);
        throw std::runtime_error("Query failed: " + std::strin(PQerrorMessage(conn)));
    }
    // 解析结果
    int rows = PQntuples(res);
    for (int i = 0; i < rows; ++i) {
        // 解析ID
        int id = std::stoi(PQgetvalue(res, i, 0));
        
        // 解析vector
        std::vector<float> vec;
        std::string vec_str = PQgetvalue(res, i, 1);
        std::istringstream iss(vec_str.substr(1, vec_str.size() -2)); 
        std::string val;
        while (std::getline(iss, val, ',')) {
            vec.push_back(std::stof(val));
        }
        
        results.emplace_back(id, vec);
    }
    
    PQclear(res);
    return results;
}
```

### 6.删除表
```cpp
void drop_table(const std::string& table_name, bool cascade = false) {
    std::string sql = 
        "DROP TABLE IF EXISTS public." + escape_identifier(table_name) +
        (cascade ? " CASCADE" : "");
    
    execute_query(sql);
    execute_query("COMMIT");
}
```

### 7.关闭连接
```cpp
void disconnectDB() {
    if (conn != nullptr) {
        PQfinish(conn);
        conn = nullptr;
    }
}
```

## 用例
```cpp
int main() {
    try {
        // 1. 连接数据库
        OpenGaussManager db("host=127.0.0.1 dbname=vector_db user=admin password=Admin@123 port=5432");

        // 2. 创建表（维度为3）
        db.create_table("image_vectors", 3);
        std::cout << "Table created successfully." << std::endl;

        // 3. 插入测试数据
        std::vector<int> ids = {1};
        std::vector<std::vector<float>> embeddings = {
            {0.1f, 0.2f, 0.128f},
        };
        db.insert("image_vectors", ids[0], embeddings[0]);
        std::cout << "Inserted " << ids.size() << " vectors." << std::endl;

        // 4. 查询相似向量
        std::vector<float> query_vec = {0.12f, 0.22f, 0.128f};
        auto results = db.select("image_vectors", query_vec, 3);
        std::cout << "Top " << results.size() << " similar vectors:" << std::endl;
        for (const auto& [id, vec] : results) {
            std::cout << "ID: " << id << " Vector: [";
            for (size_t i = 0; i < std::min(5UL, vec.size()); ++i) {
                if (i > 0) std::cout << ", ";
                std::cout << vec[i];
            }
            std::cout << ", ...]" << std::endl;
        }

        // 5. 更新向量
        std::vector<float> new_vec = {0.15f, 0.25f, 0.128f};
        db.update("image_vectors", 1, new_vec);
        std::cout << "Updated vector with ID=1" << std::endl;

        // 6. 删除数据
        int deleted = db.delete_by_id("image_vectors", 1);
        std::cout << "Deleted " << deleted << " records" << std::endl;

        // 7. 清理表
        db.drop_table("image_vectors");
        std::cout << "Table dropped successfully." << std::endl;

    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
        return 1;
    }

    return 0;
}
```
编译并运行：
```
g++ -o test test.cpp -I /<YourPath>/include/ -L /<YourPath>/lib/ -lpq
./test
```
