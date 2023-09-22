# gs\_encrypt

## 背景信息<a name="section16490883164452"></a>

openGauss提供了gs\_encrypt工具为输入的明文字符串进行加密操作。

## 语法<a name="section45387719164452"></a>

```
gs_encrypt [OPTION]... PLAINTEXT
```

>![](public_sys-resources/icon-note.png) **说明：** 
>-   “PLAINTEXT”前不需要加短选项或长选项。
>-   “PLAINTEXT”是需要加密的明文字符串。

## 参数说明<a name="section13415675164452"></a>

-   -?, --help

    显示帮助信息。

-   -V, --version

    显示版本号信息。

-   -k  _PASSWORD_， --key=_PASSWORD_

    用户输入的口令，用于派生出加密操作时使用的密钥。口令长度有效范围为大于等于8个字符，小于等于16个字符，并且至少包含大写字母、小写字母、数字和特殊字符中的三种字符。

-   -v  _VectorValue_，--vector=_VectorValue_

    用户输入的盐值，计算口令单向哈希时用于对口令进行加扰。字符串长度必须等于16。

-   -f  _FilePrefix_, --file-prefix=_FilePrefix_

    加密操作时使用的cipher和rand文件前缀字符串。cipher和rand文件必须存放在$GAUSSHOME/bin目录下。

-   -B  _Value_，--key-base64=_Value_

    加密时使用的明文密钥，以base64编码。

-   -D  _Value_， --vector-base64=_Value_

    加密时使用的随机数，以base64编码。base64编码前的字符串长度必须为16。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >出于安全考虑，建议用户在使用gs\_encrypt工具前设置HISTCONTROL=ignorespace，强制不记录敏感历史命令，然后在执行gs\_encrypt命令行前面加空格。


## 示例<a name="section18560463164452"></a>

示例1：通过输入key和vector明文值来对明文字符串进行加密操作。由于每次加密时使用的IV值是随机生成的，因此使用同样的key和vector以及明文字符串加密后对应的密文串不相同。单次支持加密的明文字符串最大长度为335字节。

```
gs_encrypt -k password@123 -v 1234567890123456 test_encrypt
```

命令回显：

```
G0R7Y2oROfuiEjWtUBx9+eHP3I21A1wMOJ2onVQIiAsxMjM0NTY3ODkwMTIzNDU2
```

示例2：已经存在cipher和rand文件，通过文件前缀来对明文字符串进行加密操作。

1.  生成cipher和rand文件。

    ```
    gs_guc generate -S Mppdb@123 -D $GAUSSHOME/bin -o test
    ```

    命令回显：

    ```
    gs_guc encrypt -S ***
    ```

2.  执行加密操作。

    ```
    gs_encrypt -f test test_encrypt
    ```

    命令回显：

    ```
    tSWpR8aFyF4GHVIVO7QNXhEMNlTcqRMrk172nAf2hLgSQwhcFWyP7X0QVS0SONon
    ```


示例3：通过输入base64转码后的key和vector密文来对明文字符串进行加密操作。

1.  输入base64转码后的key。

    ```
    python
    >>> import base64
    >>> print base64.b64encode("XXXXXXXXX");
    ```

    命令回显：

    ```
    R2F1c3NAMTIz
    ```

2.  输入base64转码后vector密文。

    ```
    >>> print base64.b64encode("1234567890abcdef");
    ```

    命令回显：

    ```
    MTIzNDU2Nzg5MGFiY2RlZg==
    ```

3.  执行加密操作。

    ```
    gs_encrypt -B R2F1c3NAMTIz -D MTIzNDU2Nzg5MGFiY2RlZg==  test_encrypt
    ```

    命令回显：

    ```
    V7mpnsfIHTjVTYGw1YHI0c6aY0N4J5L7BtU4CqDoeIkxMjM0NTY3ODkwYWJjZGVm
    ```


