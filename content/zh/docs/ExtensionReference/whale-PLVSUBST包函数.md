# PLVSUBST包函数

-   plvsubst.subst()

    描述：获取当前的替换关键字。

    返回值类型：text

    示例：
    ```
    openGauss=# select plvsubst.subst();
    subst
    -------
    %s
    (1 row)

    ```

-   plvsubst.setsubst([str text])

    描述：设置格式化输出时的替换关键字。

    参数说明：

    - str：要设置的替换关键字，可省略，省略时就会将替换关键字设置为'%s'。

    返回值类型：void

    示例：
    ```
    openGauss=# select plvsubst.setsubst('abc');
    setsubst
    ----------

    (1 row)

    openGauss=# select plvsubst.subst();
    subst
    -------
    abc
    (1 row)

    openGauss=# select plvsubst.setsubst();
    setsubst
    ----------

    (1 row)

    openGauss=# select plvsubst.subst();
    subst
    -------
    %s
    (1 row)

    ```

-   plvsubst.string(template_in text, values_in text[] [, subst text])

    描述：扫描字符串中替换关键字的所有实例，并将其替换为替换值列表中的下一个值。

    参数说明：

    - template_in：格式化输出的模板。

    - values_in：用于替换实例的值。

    - subst：表示替换关键字，缺省时为NULL，为NULL时所表示的替换关键字可以通过plvsubst.subst()函数获取。

    返回值类型：text

    示例：
    ```
    openGauss=# select plvsubst.string('My name is %s %s.', ARRAY['Pavel','Stěhule']);
            string
    ---------------------------
    My name is Pavel Stěhule.
    (1 row)

    openGauss=# select plvsubst.string('My name is % %.', ARRAY['Pavel','Stěhule'], '%');
            string
    ---------------------------
    My name is Pavel Stěhule.
    (1 row)

    openGauss=# select plvsubst.string('My name is %s.', ARRAY['Stěhule']);
        string
    ---------------------
    My name is Stěhule.
    (1 row)

    ```

-   plvsubst.string(template_in text, vals_in text [, delim_in text [, subst_in text]])

    描述：扫描字符串中替换关键字的所有实例，并将其替换为替换值列表中的下一个值。

    参数说明：

    - template_in：格式化输出的模板。

    - vals_in：用于替换实例的值。当输入替换关键字的值时，这个参数会以特定的分隔符进行分隔，默认为','。

    - delim_in：可选参数，表示vals_in的分隔符。缺省时为','。

    - subst_in：表示替换关键字，缺省时为NULL，为NULL时所表示的替换关键字可以通过plvsubst.subst()函数获取。

    返回值类型：text

    示例：
    ```
    openGauss=# -- 打开accept_empty_str，让openGauss可以接受空字符串
    openGauss=# set behavior_compat_options to 'accept_empty_str';
    SET
    openGauss=# select plvsubst.string('My name is %s %s.', 'Pavel,Stěhule');
            string
    ---------------------------
    My name is Pavel Stěhule.
    (1 row)

    openGauss=# select plvsubst.string('My name is %s %s.', 'Pavel|Stěhule','|');
            string
    ---------------------------
    My name is Pavel Stěhule.
    (1 row)

    openGauss=# select plvsubst.string('My name is %s.', 'Stěhule');
        string
    ---------------------
    My name is Stěhule.
    (1 row)

    openGauss=# select plvsubst.string('My name is %s.', '');
    ERROR:  too few parameters specified for template string
    CONTEXT:  referenced column: string
    openGauss=# select plvsubst.string('My name is empty.', '');
        string
    -------------------
    My name is empty.
    (1 row)

    ```
    