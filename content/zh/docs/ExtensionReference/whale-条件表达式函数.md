# 条件表达式函数

-   nvl(expr1, expr2)

    描述： 返回参数列表中第一个非NULL的参数值。

    示例：

    ```
    openGauss=# select "nvl"('abc'::text, NULL);
    nvl
    -----
    abc
    (1 row)

    openGauss=# select "nvl"(NULL, 'abc'::text);
    nvl
    -----
    abc
    (1 row)

    openGauss=# select "nvl"(NULL, NULL);
    ERROR:  could not determine polymorphic type because input has type "unknown"
    CONTEXT:  referenced column: nvl
    openGauss=# select "nvl"(NULL::text, NULL::text);
    nvl
    -----

    (1 row)

    ```
    备注：nvl因为在openGauss内核中被做成了语法，所以不加双引号引用会无法进行调用；该函数不能输入两个unknown类型，比如"nvl"(NULL, NULL)或者"nvl"('abc', NULL)的用法都会报错.

-   nvl2(expr1, expr2, expr3)

    描述： 返回参数列表中第二个非NULL的参数。

    示例：

    ```
    openGauss=# select nvl2(NULL, NULL, NULL);
    ERROR:  could not determine polymorphic type because input has type "unknown"
    CONTEXT:  referenced column: nvl2
    openGauss=# select nvl2('abc'::text, NULL, NULL);
    nvl2
    ------

    (1 row)

    openGauss=# select nvl2('abc'::text, 'def'::text, NULL);
    nvl2
    ------
    def
    (1 row)

    openGauss=# select nvl2(NULL, 'def'::text, NULL);
    nvl2
    ------

    (1 row)

    openGauss=# select nvl2(NULL, 'def'::text, 'ghi'::text);
    nvl2
    ------
    ghi
    (1 row)

    ```
    备注：该函数不能输入两个unknown类型，比如"nvl"(NULL, NULL)或者"nvl"('abc', NULL)的用法都会报错。

-   public.decode(expr1, expr2, result1 ,...)

    描述： 使用expr1和expr2进行比较，如果expr1与expr2匹配，则返回result1，否则返回NULL。即：

        ```
        if (expr1 == expr2) {
            return result1;
        } else {
            return null;
        }
        ```

    该函数支持最多4个分支，所以可以有以下用法：

    decode(expr1, expr2, result1, result2)就表示当expr1与expr2不匹配时，返回result2，即：

        ```
        if (expr1 == expr2) {
            return result1;
        } else {
            return result2;
        }
        ```

    decode(expr1, expr2, result1, expr3, result2)就表示当expr1与expr3匹配时返回result2，即：

        ```
        if (expr1 == expr2) {
            return result1;
        } else if (expr1 == expr3) {
            return result2;
        } else {
            return null;
        }
        ```

    decode(expr1, expr2, result1, expr3, result2, result3)就表示当expr1与expr2和expr3都不匹配时返回result3，即：

        ```
        if (expr1 == expr2) {
            return result1;
        } else if (expr1 == expr3) {
            return result2;
        } else {
            return result3;
        }
        ```

    decode(expr1, expr2, result1, expr3, result2, expr4, result3)就表示当expr1与expr4匹配时返回result3，即：

        ```
        if (expr1 == expr2) {
            return result1;
        } else if (expr1 == expr3) {
            return result2;
        } else if (expr1 == expr4) {
            return result3;
        } else {
            return null;
        }
        ```

    decode(expr1, expr2, result1, expr3, result2, expr4, result3, result4)就表示当expr1与expr2、expr3、expr4都不匹配时，返回result4，即：

        ```
        if (expr1 == expr2) {
            return result1;
        } else if (expr1 == expr3) {
            return result2;
        } else if (expr1 == expr4) {
            return result3;
        } else {
            return result4;
        }
        ```

    其中expr可以是任意类型，result则是text、bpchar、integer、bigint、numeric、time、timestamp、timestamptz类型。

    示例：

    ```
    openGauss=# select public.decode('c'::bpchar, 'a'::bpchar,'postgres'::bpchar);
    decode
    --------

    (1 row)

    openGauss=# select public.decode('a'::bpchar, 'a'::bpchar,'postgres'::bpchar,'default value'::bpchar);
    decode
    ----------
    postgres
    (1 row)

    openGauss=# select public.decode('c', 'a'::bpchar,'postgres'::bpchar,'default value'::bpchar);
        decode
    ---------------
    default value
    (1 row)

    openGauss=# select public.decode('a'::bpchar, 'a'::bpchar,'postgres'::bpchar,'b'::bpchar,'database'::bpchar);
    decode
    ----------
    postgres
    (1 row)

    openGauss=# select public.decode('d'::bpchar, 'a'::bpchar,'postgres'::bpchar,'b'::bpchar,'database'::bpchar);
    decode
    --------

    (1 row)

    openGauss=# select public.decode('a'::bpchar, 'a'::bpchar,'postgres'::bpchar,'b'::bpchar,'database'::bpchar,'default value'::bpchar);
    decode
    ----------
    postgres
    (1 row)

    openGauss=# select public.decode('d'::bpchar, 'a'::bpchar,'postgres'::bpchar,'b'::bpchar,'database'::bpchar,'default value'::bpchar);
        decode
    ---------------
    default value
    (1 row)

    openGauss=# select public.decode('a'::bpchar, 'a'::bpchar,'postgres'::bpchar,'b'::bpchar,'database'::bpchar, 'c'::bpchar, 'system'::bpchar);
    decode
    ----------
    postgres
    (1 row)

    openGauss=# select public.decode('d'::bpchar, 'a'::bpchar,'postgres'::bpchar,'b'::bpchar,'database'::bpchar, 'c'::bpchar, 'system'::bpchar);
    decode
    --------

    (1 row)

    openGauss=# select public.decode('a'::bpchar, 'a'::bpchar,'postgres'::bpchar,'b'::bpchar,'database'::bpchar, 'c'::bpchar, 'system'::bpchar,'default value'::bpchar);
    decode
    ----------
    postgres
    (1 row)

    openGauss=# select public.decode('d'::bpchar, 'a'::bpchar,'postgres'::bpchar,'b'::bpchar,'database'::bpchar, 'c'::bpchar, 'system'::bpchar,'default value'::bpchar);
        decode
    ---------------
    default value
    (1 row)

    openGauss=# select public.decode(NULL, 'a'::bpchar, 'postgres'::bpchar, NULL,'database'::bpchar);
    decode
    ----------
    database
    (1 row)

    openGauss=# select public.decode(NULL, 'a'::bpchar, 'postgres'::bpchar, 'b'::bpchar,'database'::bpchar);
    decode
    --------

    (1 row)

    openGauss=# select public.decode(NULL, 'a'::bpchar, 'postgres'::bpchar, NULL,'database'::bpchar,'default value'::bpchar);
    decode
    ----------
    database
    (1 row)

    openGauss=# select public.decode(NULL, 'a'::bpchar, 'postgres'::bpchar, 'b'::bpchar,'database'::bpchar,'default value'::bpchar);
        decode
    ---------------
    default value
    (1 row)

    ```

