# pg\_controldata

## 功能介绍<a name="zh-cn_topic_0237152440_section125419154813"></a>

pg\_controldata工具用来显示数据库目录下control文件的信息。

## 前提条件<a name="zh-cn_topic_0237152440_section14602518109"></a>

确保数据目录正确，以及相应数据目录下的pg\_control文件存在。

## 语法<a name="zh-cn_topic_0237152440_section554725769"></a>

-   查看control文件信息

    ```
    pg_controldata DATADIR
    ```

-   显示版本号信息

    ```
    pg_controldata -V | --version
    ```

-   显示帮助信息

    ```
    pg_controldata -? | --help
    ```


## 参数说明<a name="zh-cn_topic_0237152440_section187851955142614"></a>

-   DATADIR

    查看control文件信息时所用的参数，DATADIR为实例对应的数据库目录。

-   -V, --version

    显示版本信息。

-   -?,--help

    打印帮助信息。
