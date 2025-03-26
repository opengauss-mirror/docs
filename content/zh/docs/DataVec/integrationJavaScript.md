# Node.js SDK对接向量数据库
本文介绍如何使用JavaScript语言调用openGauss向量数据库

## 环境准备
 - 下载源码[openGauss-connector-nodejs](https://gitee.com/opengauss/openGauss-connector-nodejs)
```bash
npm install & npm run build
```

## 基本操作
### 1.连接数据库
```javascript
const connect = async (host, port, username, database, password) => {
    const client = new Client();
    const config = {
        host: host,
        port: port,
        username: username,
        database: database,
        password: password
    };

    await client.connect(config);
    return client;
}
```
### 2.创建表
```javascript
const create_table = async (client, table_name, dim) => {
    const querystr = `
        CREATE TABLE IF NOT EXISTS public.${table_name} (id BIGINT PRIMARY KEY, embedding vector(${dim}));
    `;
    const result = await client.query(querystr);
}
```

### 3.创建索引
```javascript
const create_index = async (client, table_name, index_name) => {
    const querystr = `
        CREATE INDEX IF NOT EXISTS ${index_name} ON public.${table_name} USING hnsw (embedding vector_l2_ops);
    `;
    const result = await client.query(querystr);
}
```

### 4.插入/删除/更新数据
- 插入
```javascript
const insert_vector = async (client, table_name, vector, id) => {
    const querystr = `
        INSERT INTO public.${table_name} (id, embedding) VALUES(${id}, '${vector}');
    `;
    const result = await client.query(querystr);
}
```

- 删除
```javascript
const delete_vector = async (client, table_name, id) => {
    const querystr = `
        DELETE FROM public.${table_name} WHERE id = ${id};
    `;
    const result = await client.query(querystr);
}
```

- 更新
```javascript
const update_vector = async (client, table_name, vector, id) => {
    const querystr = `
        UPDATE public.${table_name} SET embedding = '${vector}' WHERE id = ${id};
    `;
    const result = await client.query(querystr);
}
```

### 5.查询
```javascript
const query = async (client, table_name, vector, topk) => {
    const querystr = `
        SELECT * FROM public.${table_name} ORDER BY embedding <-> '${vector}'::vector LIMIT ${topk}::int;
    `;
    const result = await client.query(querystr);
}
```

### 6.删除表
```javascript
const delete_table = async (client, table_name) => {
    const querystr = `
        DROP TABLE IF EXISTS public.${table_name};
    `;
    const result = await client.query(querystr);
}
```

### 7.关闭连接
```javascript
const close = async (client) => {
    await client.end();
}
```

## 用例
```javascript
const client = connect('host', 5432, 'username', 'postgres', 'password');
create_table(client, 'test_table1', 3);
create_index(client, 'test_table1', 'idx_test1');
insert_vector(client, 'test_table1', [1.2, 3, 5], 0);
insert_vector(client, 'test_table1', [4.3, 5.2, 1], 1);
update_vector(client, 'test_table1', [1, 3, 3], 1);
query(client, 'test_table1', [1, 2, 2], 1);
delete_vector(client, 'test_table1', 0);
delete_table(client, 'test_table1');
close(client);
```