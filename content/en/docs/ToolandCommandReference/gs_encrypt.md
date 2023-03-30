# gs\_encrypt<a name="EN-US_TOPIC_0000001197874537"></a>

## Background<a name="section16490883164452"></a>

**gs\_encrypt**  provided by openGauss is used to encrypt the entered plaintext strings.

## Syntax<a name="section45387719164452"></a>

```
gs_encrypt [OPTION]... PLAINTEXT
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   *PLAINTEXT*  does not follow a short or long option.
>-   *PLAINTEXT*  indicates the plaintext string to be encrypted.

## Parameter Description<a name="section13415675164452"></a>

-   -?, --help

    Displays help information.

-   -V, --version

    Displays version information.

-   -k  *PASSWORD*, --key=*PASSWORD*

    Password entered by a user. It is used to derive the key for encryption. The password must contain 8 to 16 characters, including at least three types of the following: uppercase letters, lowercase letters, digits, and special characters.

-   -v  *VectorValue*, --vector=*VectorValue*

    Salt value entered by a user. It is used to scramble passwords during one-way password hash calculation. The string must contain 16 characters.

-   -f  *FilePrefix*, --file-prefix=*FilePrefix*

    Prefix of the cipher and rand files used for encryption. The cipher and rand files must be stored in  **$GAUSSHOME/bin**.

-   -B  *Value*, --key-base64=*Value*

    Base64 plaintext key used for encryption.

-   -D  *Value*, --vector-base64=*Value*

    Base64 random string used for encryption. The length of the string before base64 encoding must be 16 characters.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >For security purposes, you are advised to set  **HISTCONTROL**  to  **ignorespace**  before using the gs\_encrypt tool to forcibly not record sensitive historical commands and add a space before the  **gs\_encrypt**  command.


## Examples<a name="section18560463164452"></a>

Example 1: Encrypt a plaintext string by using a plaintext key and a plaintext vector. The IV value used for each encryption is randomly generated. Therefore, the ciphertext strings are different even though the same key, vector, and plaintext character string are used for encryption. The maximum length of a plaintext character string that can be encrypted at a time is 335 bytes.

```
gs_encrypt -k password@123 -v 1234567890123456 test_encrypt
```

Command output:

```
G0R7Y2oROfuiEjWtUBx9+eHP3I21A1wMOJ2onVQIiAsxMjM0NTY3ODkwMTIzNDU2
```

Example 2: Encrypt a plaintext string by using cipher and rand files \(invoke the files by entering their prefixes\).

1.  Run the following commands to generate the cipher and rand files:

    ```
    gs_guc generate -S Mppdb@123 -D $GAUSSHOME/bin -o test
    ```

    Command output:

    ```
    gs_guc encrypt -S ***
    ```

2.  Perform the encryption operation.

    ```
    gs_encrypt -f test test_encrypt
    ```

    Command output:

    ```
    tSWpR8aFyF4GHVIVO7QNXhEMNlTcqRMrk172nAf2hLgSQwhcFWyP7X0QVS0SONon
    ```


Example 3: Encrypt a plaintext string by using a Base64 key and a Base64 vector.

1.  Enter the key encrypted using Base64.

    ```
    python
    >>> import base64
    >>> print base64.b64encode("XXXXXXXXX");
    ```

    Command output:

    ```
    R2F1c3NAMTIz
    ```

2.  Enter the vector ciphertext encrypted using Base64.

    ```
    >>> print base64.b64encode("1234567890abcdef");
    ```

    Command output:

    ```
    MTIzNDU2Nzg5MGFiY2RlZg==
    ```

3.  Perform the encryption operation.

    ```
    gs_encrypt -B R2F1c3NAMTIz -D MTIzNDU2Nzg5MGFiY2RlZg==  test_encrypt
    ```

    Command output:

    ```
    V7mpnsfIHTjVTYGw1YHI0c6aY0N4J5L7BtU4CqDoeIkxMjM0NTY3ODkwYWJjZGVm
    ```
