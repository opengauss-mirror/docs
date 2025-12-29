# grcmd 工具使用说明

`grcmd` 是 openGauss 数据保险柜（oGRecorder）组件的命令行管理工具，用于管理和维护 GR 服务。支持配置管理、证书生成、服务状态查询等功能。

## 基本用法

```sh
grcmd [command] [OPTIONS]
```

- 查看帮助信息：
  - 简要帮助：`grcmd -h` 或 `grcmd --help`
  - 详细帮助：`grcmd -a` 或 `grcmd --all`
  - 版本信息：`grcmd -v` 或 `grcmd --version`

## 常用命令

| 命令         | 说明                       |
| ------------ | -------------------------- |
| ts           | 显示当前 API 调用耗时统计  |
| lscli        | 显示当前客户端信息         |
| setcfg       | 设置配置参数               |
| getcfg       | 查询配置参数               |
| getstatus    | 查询 GR 服务状态           |
| stop         | 停止 GR 服务               |
| switchover   | 主备切换                   |
| reload_certs | 重新加载证书               |
| gencert      | 生成客户端/服务端证书      |
| datausage    | 查询数据空间使用情况       |

## 命令详解

### 1. ts

显示当前 API 调用耗时统计。

```sh
grcmd ts
```

### 2. lscli

显示当前客户端进程信息。

```sh
grcmd lscli
```

### 3. setcfg

设置配置参数。

```sh
grcmd setcfg -n <name> -v <value> [-s <scope>]
```

- `-n/--name`：配置项名称（必选）
- `-v/--value`：配置项值（必选）
- `-s/--scope`：作用范围，可选值为 `memory`、`pfile`、`both`，默认 `both`

### 4. getcfg

查询配置参数。

```sh
grcmd getcfg -n <name>
```

- `-n/--name`：配置项名称（必选）

### 5. getstatus

查询 GR 服务状态。

```sh
grcmd getstatus
```

### 6. stop

停止 GR 服务。

```sh
grcmd stop
```

### 7. switchover

主备切换。

```sh
grcmd switchover
```

### 8. reload_certs

重新加载证书。

```sh
grcmd reload_certs
```

### 9. gencert

生成客户端或服务端证书。

```sh
grcmd gencert -t <ca|client|server> [-d <days>]
```

- `-t/--type`：证书类型，`ca` 或 `client` 或 `server`（必选）
- `-d/--days`：证书有效期天数（可选，默认 3650）

> 需提前设置环境变量 `GR_HOME`，证书将生成在 `$GR_HOME/CA` 目录下。
> 建议设置证书有效时间大于worm保护时间，防止证书超过worm保护时间后被修改。
> 手动通过grcmd命令生成证书时，需要先修改配置文件中SER_SSL_KEY、CLI_SSL_KEY等证书相关配置，指定一个空目录。
> 通过该命令生成的证书，会自动把私钥进行加密。

### 10. datausage

查询数据空间使用情况。

```sh
grcmd datausage
```

## 注意事项

- 某些命令（如 setcfg、stop、switchover、gencert、datausage）会记录操作日志。
- 运行前请确保环境变量 `GR_HOME` 已正确设置。

## 获取帮助

- 查看所有命令及参数说明：

  ```sh
  grcmd --all
  ```

- 查看指定命令详细帮助：

  ```sh
  grcmd <command> -h
  ```

---