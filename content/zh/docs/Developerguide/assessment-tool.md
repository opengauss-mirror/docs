# MySQL语法兼容性评估工具<a name="ZH-CN_TOPIC_0000001245957397"></a>

本工具支持利用已有的openGauss节点评估数据SQL文本在openGauss的兼容性。包含但不限于以下限制：
- 仅支持SQL文本文件输入，且SQL之间以`;`分割。

- 不使用`dolphin`、`whale`等兼容性插件场景，不兼容语句的报错信息可能不准确。如果使用对应插件，需遵循插件使用约束。

- 暂不支持`#`注释，请将文本内的`#`注释替换为`--`注释或直接删除。

- 存储过程、函数语句仅支持：创建体的合法性校验和函数体的语法兼容校验。

- 对于评估结果的准确率：
   - 完全兼容：openGauss完全支持该语法。兼容结果可能依赖于传入SQL语句的前置执行结果，因此实际在openGauss内执行时不一定完全兼容。

   - 语法兼容：openGauss支持该语法，但是实际使用过程中可能包含字段类型不支持、函数不存在等问题。

   - 语句不兼容：openGauss不支持该语法。

   - 不支持评估：未考虑的语句。后续会陆续支持语句评估（例如create database等跨数据库影响语句）。

   - 忽略语句：注释等。

### 代码获取

- openGauss源码路径：

> https://gitee.com/opengauss/openGauss-server

- openGauss插件仓路径：

> https://gitee.com/opengauss/Plugin

### 编译插件

- 必备插件

| 必备插件           | 备注                             |
| ------------------ | -------------------------------- |
| contrib/assessment | 评估插件，包含插件so和可执行文件 |

- 数据库运行时使用以下插件可以提高整体兼容率。

| 可选插件（对应数据库兼容性插件） | 备注            |
| -------------------------------- | --------------- |
| contrib/dolphin             | B兼容数据库插件 |

1. 下载openGauss源码，按照READMD.md指导编译openGauss源码。
2. 将上述插件拷贝到openGauss源码路径的`contrib`路径下。`cd`进入对应目录后`make install -sj`。
3. 将插件必须的文件拷贝到对应二进制路径下面。一般来说包含：`extesion.so`、`extension.sql`，`extension.control`。`assessment`插件包含可执行文件`assessment_database`。本例中涉及文件如下：<font color='red'>如果使用的二进制为步骤1中的二进制，此步骤可以省略。</font>

**assessment依赖文件**

```
二进制路径
├── bin
│   └── ***assessment_database***
├── lib
│   └── postgresql
│       └── ***assessment.so***
└── share
    └── postgresql
        └── extension
            ├── ***assessment--1.0.sql***
            └── ***assessment.control***
```
**dolphin以来文件**

```
二进制路径
├── lib
│   └── postgresql
│       └── ***dolphin.so***
└── share
    └── postgresql
        └── extension
            ├── ***dolphin--1.0.sql***
            └── ***dolphin.control***
```

### 运行

1. 确保有一个正在运行的数据库，且当前支持通过gsql命令连接数据库。

2. 运行命令如下：`assessment_database [args]`，其中args包含以下参数：

|          | 参数 | 描述                                     | 使用                                   |
| -------- | ---- |  ---------------------------------------- | -------------------------------------- |
| 连接参数 | p    |  端口（必选）                             | `-p 5432`                              |
|          | d    | 数据库（可选）                           | `-d evaluation` |
|          | U    |用户名（可选），如果支持本地连接，可不填 | `-U user`                |
|          | W | 密码（可选），如果支持本地连接，可不填 | `-W ******` |
| 兼容性评估 | c | 指定兼容类型（A\B\C\PG)，如果指定`d`参数，该参数不可设置。MySQL场景下请指定B。 | `-c B` |
| 文件参数 | f | 评估SQL文件（必填） | `-f intput.sql` |
|  | o | 输出文件（必填），一般输入html结尾文件 | `-o result.html` |

### 举例

#### case 1:

通过gs_initdb初始化数据库并启动，假设启动端口为5432。此时可以通过`gsql -dpostgres -p5432`方式直接连接数据库。假设输入文件为`test.sql`，输出报告路径为`result.html`，评估的源数据库类型为B，则评估使用的命令为：

```shell
assessment_database -p5432 -cB -ftest.sql -oresult.html
```

此时回显信息为：

```shell
assessment_database: create database "assessment_197561" automatically.
assessment_database: Create plugin[dolphin] automatically.
assessment_database: Create extension[assessment] automatically.
assessment_database: 解析[100.00%]:35/35
assessment_database: Create database assessment_197561 automatically, clear it manually!
```

#### case 2:

假设远程已经有数据库节点，在兼容性评估节点可以通过``gsql -dpostgres -p5432 -h127.0.0.2 -Utest -W***** `连接数据库。假设输入文件为`test.sql`，输出报告路径为`result.html`，评估的源数据库类型为B，则评估使用的命令为：

```shell
assessment_database -p5432 -cB -h127.0.0.2 -Utest -W***** -ftest.sql -oresult.html
```

#### case 3:

假设远程已经有数据库节点，且自己创建了`evaluation`数据库用于兼容性评估。在兼容性评估节点可以通过``gsql -devalution -p5432 -h127.0.0.2 -Utest -W***** `连接数据库。期望通过假设输入文件为`test.sql`，输出报告路径为`result.html`，则评估使用的命令为：

```shell
assessment_database -p5432 -devaluation -h127.0.0.2 -Utest -W***** -ftest.sql -oresult.html
```

即将`case 2`中的`-cB`换成`-devaluation`指定数据库即可。

### 结果

评估工具最终会生成评估报告，以html形式展示。包含如下内容：语句、兼容类型、失败原因。兼容类型包括：语法兼容、完全兼容、语法不兼容、不支持评估。相关说明如下：

- 完全兼容：openGauss完全支持该语法。执行结果依赖于数据库已有的表、函数、存储过程等。

- 语法兼容：openGauss支持该语法，但是实际使用过程中可能包含字段类型不支持、函数不存在等问题。

- 语句不兼容：openGauss不支持该语法。

- 不支持评估：未考虑的语句。后续会陆续支持语句评估（例如create database等跨数据库影响语句）。

### 原理

1. 首先存在一个正常运行的数据库节点，可以直接通过`gs_initdb`初始化。
2. 配置好对应连接参数，连接参数与`openGauss`的`gsql`连接方式是一致的。
3. 如果指定`-c 兼容类型`方式，工具会通过上述配置的连接参数连接到数据库，手动创建对应兼容类型评估数据库，再通过`create extension`创建必要的插件。（如`assessment`、`dolphin`）。
4. 如果指定`-d database`方式，工具会在对应数据库创建插件。
5. 在对应评估数据库评估。评估类型包含：语法树兼容评估、实际语句是否兼容评估。
