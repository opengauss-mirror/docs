# COMMENT ON

#### 功能描述

使用 `COMMENT ON` 语句为表、视图或列添加注释信息。  添加的注释可通过以下系统视图查看：

- **表/视图注释**：`MY_TAB_COMMENTS`、`ADM_TAB_COMMENTS`

- **列注释**：`MY_COL_COMMENTS`、`ADM_COL_COMMENTS`

#### 注意事项

- **权限要求**：
  
  - 为自己的表添加注释无需额外权限。
  
  - 为其他用户的表添加注释需要具备 `COMMENT ANY TABLE` 权限。

- **支持场景**：
  
  - 支持在创建表时指定列的注释。

- **限制**：
  
  - 数据库重启或回滚期间不支持此操作。

#### 语法格式

```
COMMENT ON 
{
    TABLE [ schema_name. ] { table_name | view_name }
  | COLUMN [ schema_name. ] { table_name. | view_name. } column_name
} 
IS 'string';
```

#### 参数说明

| 参数                                                           | 说明                   |
| ------------------------------------------------------------ | -------------------- |
| `[ schema_name. ]`                                           | 用户名（模式名）。缺省时为当前登录用户。 |
| `{ table_name \| view_name }`                                | 要添加注释的表名或视图名。        |
| `[ schema_name. ] { table_name. \| view_name. } column_name` | 要添加注释的列名。            |
| `IS`                                                         | 指定注释内容的关键字。          |
| `string`                                                     | 注释文本，最大长度为 4000 字节。  |

#### 示例

```
-- 删除用户表 user_info（如果存在）
DROP TABLE IF EXISTS user_info;

-- 创建用户表 user_info
CREATE TABLE user_info (user_id INT PRIMARY KEY,username VARCHAR(50) NOT NULL, email VARCHAR(100), create_time DATETIME DEFAULT CURRENT_TIMESTAMP, status CHAR(1) DEFAULT 'A');

-- 为表 user_info 添加注释
COMMENT ON TABLE user_info IS 'table of user info';

-- 为列 user_id 添加注释
COMMENT ON COLUMN user_info.user_id IS 'id of users';
```
