# gs\_tar

## 背景信息

通过gs_basebackup的压缩格式备份，主数据目录将被写入到一个名为 base.tar 的文件中，并且其他表空间将被以其 OID 命名。生成的数据文件，需要通过gs_tar命令作解压。

>![](public_sys-resources/icon-note.png) **说明：**
>
>-   gs_tar命令当前仅支持解压通过gs_basebackup生成的归档文件。
>-   如果gs_basebackup制定了压缩等级，会生成以gz结尾的文件。此时需要使用gzip命令先解压缩生成tar包，之后才可以使用gs_tar命令解压生成的tar文件。

## 语法

- 显示帮助信息

  ```
  gs_tar -? | --help
  ```

- 显示版本号信息

  ```
  gs_tar -V | --version
  ```

## 参数说明

gs_tar参数如下：

- -F, --filename=FILENAME

  解压文件，必选项。

- -D，--destination=DIRECTORY

  解压文件输出的目录，必选项。



## 示例

```shell
gs_tar -D /home/test/dn1 -F /home/test/trunk/install/data/backup/base.tar
```
