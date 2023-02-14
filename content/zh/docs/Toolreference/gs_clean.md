# gs\_clean

## 背景信息<a name="zh-cn_topic_0059777935_section1572870103317"></a>

数据库异常宕机后可能会有临时表残留，gs\_clean可以用来清理残留的临时表。

## 语法<a name="zh-cn_topic_0059777935_s7b94cde89f8940c1957e0a44dd494cb8"></a>

连上主DN，清理主DN事务残留临时表。

```
gs_clean [OPTION ...] [USERNAME]
```

## 参数说明<a name="section622320691115"></a>

OPTION的取值如下所示：

-   -a, --all

    清理所有可用数据库中残留的临时表。

-   -h, --host=HOSTADDRESS

    目标DN所在主机的IP地址。

    取值范围：目标DN所在主机的IP地址。

    默认值：localhost


-   -p, --port=PORT

    主DN的端口号。

    取值范围：目标DN的端口号。

    默认值：5432。如果已经设置了操作系统的环境变量PGPORT，则默认为PGPORT的值。

-   -q, --quiet

    静态模式，除了错误信息，不打印任何其它信息。

-   -r, --rollback

    回滚所有异常事务。

-   -t, --timeout=SECS

    连接超时机制。

    默认值：5s。单位：秒（s）。

-   -U, --username=USERNAME

    连接数据库的用户名称。

    取值范围：数据库中有效的用户名称。

    默认值：操作系统用户名称。

-   -v, --verbose

    打印详细的恢复信息。

-   -V, --version

    打印该工具的版本信息。

-   -w, --no-password

    无需输入密码验证。

-   -W, --password=PASSWORD

    需要输入密码验证。

    取值范围：有效字符串。符合密码复杂度要求。

-   -e, --exclusive

    仅清理临时表。

-   -j, --jobs

    清理两阶段残留文件的并发数。

    取值范围：1\~10。

    默认值：3。

-   -?, --help

    打印帮助信息。

>![](public_sys-resources/icon-notice.png) **须知：**
>
>openGauss内核会在后台周期性调用gs_clean清理临时表，需要在pg_hba.conf文件中将本机的认证策略设置为trust，否则会导致gs_clean执行失败。
