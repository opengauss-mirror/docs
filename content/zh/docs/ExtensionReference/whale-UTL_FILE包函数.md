# UTL_FILE包函数

-   utl_file.fopen(location text, filename text, open_mode text [, max_linesize integer [, encoding name]])

    描述：该函数用于打开一个文件。如果打开文件成功，就返回当前文件所在逻辑槽的ID，即文件句柄。每个会话最多只能打开50个文件。

    参数说明：
    - location：表示文件所在的目录，这个值需要在表utl_file.utl_file_dir注册过才能使用，详见示例。
    - filename：表示文件名。
    - open_mode：表示打开文件的模式，有'r'（读模式）、'w'（写模式）、'a'（追加模式）。
    - max_linesize：指定一次操作可以处理的最大字符串长度（以字节为单位）。如果省略，默认值为1024。其取值是一个介于1到32767之间的值。
    - encoding：表示打开文件的编码格式。

    返回值类型：integer

    示例：

    ```
    openGauss=# CREATE OR REPLACE FUNCTION gen_file(dir text) RETURNS void AS $$
    DECLARE
    f utl_file.file_type;
    BEGIN
    f := utl_file.fopen(dir, 'regress_orafce.txt', 'w');
    f := utl_file.fclose(f);
    END;
    $$ LANGUAGE plpgsql;
    CREATE FUNCTION
    openGauss=# INSERT INTO utl_file.utl_file_dir(dir, dirname) VALUES(utl_file.tmpdir(), 'TMPDIR');
    INSERT 0 1
    openGauss=# SELECT gen_file('TMPDIR');
    gen_file
    ----------

    (1 row)

    ```

-   utl_file.is_open(file utl_file.file_type)

    描述：如果file指向打开的文件，则函数返回true，否则返回false。

    参数说明：
    - file：文件的句柄，本质上是一个int类型的参数，为utl_file.fopen成功打开指定文件后的返回值。

    返回值类型：bool

    示例：

    ```
    openGauss=# CREATE OR REPLACE FUNCTION gen_file(dir text) RETURNS void AS $$
    DECLARE
    f utl_file.file_type;
    BEGIN
    f := utl_file.fopen(dir, 'regress_orafce.txt', 'w');
    f := utl_file.fclose(f);
    END;
    $$ LANGUAGE plpgsql;
    CREATE FUNCTION
    openGauss=# CREATE OR REPLACE FUNCTION gen_file(dir text) RETURNS void AS $$
    DECLARE
    f utl_file.file_type;
    BEGIN
    f := utl_file.fopen(dir, 'regress_orafce.txt', 'w');
    RAISE NOTICE 'is_open = %', utl_file.is_open(f);
    f := utl_file.fclose(f);
    RAISE NOTICE 'is_open = %', utl_file.is_open(f);
    END;
    $$ LANGUAGE plpgsql;
    CREATE FUNCTION
    openGauss=# SELECT gen_file('TMPDIR');
    NOTICE:  is_open = t
    NOTICE:  is_open = f
    gen_file
    ----------

    (1 row)

    ```

-   utl_file.put(file utl_file.file_type, str text)

    描述：向文件中插入字符串，该函数需要配合utl_file.new_line结束本行内容，不结束则不会写入。写入成功返回TRUE，否则返回FALSE。

    参数说明：
    - file：文件句柄。
    - str：要写入文件中的字符串。

    返回值类型：bool

    示例：

    ```
    openGauss=# CREATE OR REPLACE FUNCTION gen_file(dir text) RETURNS void AS $$
    DECLARE
    f utl_file.file_type;
    BEGIN
    f := utl_file.fopen(dir, 'regress_orafce.txt', 'w');
    PERFORM utl_file.put(f, 'B');
    -- 结束该行
    PERFORM utl_file.new_line(f);
    f := utl_file.fclose(f);
    END;
    $$ LANGUAGE plpgsql;
    CREATE FUNCTION
    openGauss=# SELECT gen_file('TMPDIR');
    gen_file
    ----------

    (1 row)


    ```

-   utl_file.new_line(file utl_file.file_type [, lines int])

    描述：函数在指定的文件中插入一个或多个换行符。通常配合utl_file.put使用。插入成功返回true，否则返回false。

    参数说明：
    - file：文件句柄。
    - lines：可选参数，缺省时为1，表示要向文件中插入lines个换行符。

    返回值类型：bool

    示例：

    ```
    openGauss=# CREATE OR REPLACE FUNCTION gen_file(dir text) RETURNS void AS $$
    DECLARE
    f utl_file.file_type;
    BEGIN
    f := utl_file.fopen(dir, 'regress_orafce.txt', 'w');
    PERFORM utl_file.put(f, 'B');
    -- 结束该行
    PERFORM utl_file.new_line(f);
    f := utl_file.fclose(f);
    END;
    $$ LANGUAGE plpgsql;
    CREATE FUNCTION
    openGauss=# SELECT gen_file('TMPDIR');
    gen_file
    ----------

    (1 row)


    ```

-   utl_file.put_line(file utl_file.file_type, buffer text [, autoflush bool])

    描述：将数据放入指定的文件并附加换行符。

    参数说明：
    - file：文件句柄。
    - buffer：要插入文件中的字符串数据。
    - autoflush：是否自动刷新到文件中，缺省值为false。

    返回值类型：bool

    示例：

    ```
    -- 本次函数执行完成，由于没有关闭文件所以不会将内容刷新到文件中
    openGauss=# CREATE OR REPLACE FUNCTION gen_file(dir text) RETURNS void AS $$
    DECLARE
    f utl_file.file_type;
    BEGIN
    f := utl_file.fopen(dir, 'regress_orafce.txt', 'w');
    PERFORM utl_file.put_line(f, 'C', false);
    END;
    $$ LANGUAGE plpgsql;
    CREATE FUNCTION
    openGauss=# SELECT gen_file('TMPDIR');
    gen_file
    ----------

    (1 row)

    -- 本次函数中put_line的autoflush为true，会自动将内容刷新到文件中
    openGauss=# CREATE OR REPLACE FUNCTION gen_file(dir text) RETURNS void AS $$
    DECLARE
    f utl_file.file_type;
    BEGIN
    f := utl_file.fopen(dir, 'regress_orafce.txt', 'w');
    PERFORM utl_file.put_line(f, 'C', true);
    END;
    $$ LANGUAGE plpgsql;
    CREATE FUNCTION
    openGauss=# SELECT gen_file('TMPDIR');
    gen_file
    ----------

    (1 row)

    ```

-   utl_file.putf(file utl_file.file_type, format text [, arg1 text [, arg2 text [, arg3 text [, arg4 text [, arg5 text]]]]])

    描述：向指定文件中插入格式化的数据。最多可以支持5个arg。

    参数说明：
    - file：文件句柄。
    - format：要格式化的字符串。
    - arg1：要格式化插入format中的选项，可缺省。
    - arg2：要格式化插入format中的选项，可缺省。
    - arg3：要格式化插入format中的选项，可缺省。
    - arg4：要格式化插入format中的选项，可缺省。
    - arg5：要格式化插入format中的选项，可缺省。

    返回值类型：bool

    示例：

    ```
    openGauss=# CREATE OR REPLACE FUNCTION gen_file(dir text) RETURNS void AS $$
    DECLARE
    f utl_file.file_type;
    BEGIN
    f := utl_file.fopen(dir, 'regress_orafce.txt', 'w');
    -- 无arg
    PERFORM utl_file.putf(f, 'this is the number test');
    PERFORM utl_file.new_line(f);
    -- 5个arg
    PERFORM utl_file.putf(f, '[1=%s, 2=%s, 3=%s, 4=%s, 5=%s]', '1', '2', '3', '4', '5');
    PERFORM utl_file.new_line(f);
    f := utl_file.fclose(f);
    END;
    $$ LANGUAGE plpgsql;
    CREATE FUNCTION
    openGauss=# SELECT gen_file('TMPDIR');
    gen_file
    ----------

    (1 row)

    ```

-   utl_file.fflush(file utl_file.file_type)

    描述：将所有挂起的数据刷新到文件中。

    参数说明：
    - file：文件句柄。

    返回值类型：void

    示例：

    ```
    openGauss=# CREATE OR REPLACE FUNCTION gen_file(dir text) RETURNS void AS $$
    DECLARE
    f utl_file.file_type;
    BEGIN
    f := utl_file.fopen(dir, 'regress_orafce.txt', 'w');
    PERFORM utl_file.put_line(f, 'C', false);
    PERFORM utl_file.fflush(f);
    END;
    $$ LANGUAGE plpgsql;
    CREATE FUNCTION
    openGauss=# SELECT gen_file('TMPDIR');
    gen_file
    ----------

    (1 row)

    ```

-   utl_file.fclose(file utl_file.file_type)

    描述：关闭指定的文件。

    参数说明：
    - file：文件句柄。

    返回值类型：utl_file.file_type

    示例：

    ```
    openGauss=# CREATE OR REPLACE FUNCTION gen_file(dir text) RETURNS void AS $$
    DECLARE
    f utl_file.file_type;
    BEGIN
    f := utl_file.fopen(dir, 'regress_orafce.txt', 'w');
    PERFORM utl_file.put_line(f, 'C', false);
    f := utl_file.fclose(f);
    END;
    $$ LANGUAGE plpgsql;
    CREATE FUNCTION
    openGauss=# SELECT gen_file('TMPDIR');
    gen_file
    ----------

    (1 row)

    ```

-   utl_file.fclose_all()

    描述：关闭所有被打开的文件。

    返回值类型：void

    示例：

    ```
    openGauss=# CREATE OR REPLACE FUNCTION gen_file(dir text) RETURNS void AS $$
    DECLARE
    f utl_file.file_type;
    BEGIN
    f := utl_file.fopen(dir, 'regress_orafce.txt', 'w');
    PERFORM utl_file.put_line(f, 'C', false);
    PERFORM utl_file.fclose_all();
    END;
    $$ LANGUAGE plpgsql;
    CREATE FUNCTION
    openGauss=# SELECT gen_file('TMPDIR');
    gen_file
    ----------

    (1 row)

    ```

-   utl_file.fremove(location text, filename text)

    描述：删除指定文件夹中的指定文件。

    参数说明：
    - location：文件夹名。
    - filename：文件名。

    返回值类型：void

    示例：

    ```
    openGauss=# select utl_file.fremove('TMPDIR', 'regress_orafce.txt');
    fremove
    ---------

    (1 row)

    ```

-   utl_file.frename(location text, filename text, dest_dir text, dest_file text [, overwrite boolean])

    描述：重命名指定文件夹中的指定文件。

    参数说明：
    - location：文件夹名。
    - filename：文件名。
    - dest_dir：新文件夹名。
    - dest_file：新文件名。
    - overwrite：是否覆盖已存在的文件，如果覆盖则为true，否则为false。该参数可缺省，缺省时为false。

    返回值类型：void

    示例：

    ```
    openGauss=# -- 在/tmp文件夹下预置了一个名为regress_orafce2.txt的文件，因此当overwrite为false的时候报错
    openGauss=# select utl_file.frename('TMPDIR', 'regress_orafce.txt', 'TMPDIR', 'regress_orafce2.txt', false);
    ERROR:  UTL_FILE_WRITE_ERROR
    DETAIL:  File exists
    CONTEXT:  referenced column: frename
    openGauss=# select utl_file.frename('TMPDIR', 'regress_orafce.txt', 'TMPDIR', 'regress_orafce2.txt', true);
    frename
    ---------

    (1 row)

    ```

-   utl_file.fcopy(src_location text, src_filename text, dest_location text, dest_filename text [, start_line integer [, end_line integer]])

    描述：复制指定文件夹中的指定文件。

    参数说明：
    - src_location：源文件夹名。
    - src_filename：源文件名。
    - dest_location：新文件夹名。
    - dest_filename：新文件名。
    - start_line：表示复制文件行的起点，缺省时为从头开始复制。
    - end_line：表示复制的终点，缺省时表示到文件末尾结束。

    返回值类型：void

    示例：

    ```
    openGauss=# CREATE OR REPLACE FUNCTION gen_file(dir text) RETURNS void AS $$
    DECLARE
    f utl_file.file_type;
    BEGIN
    f := utl_file.fopen(dir, 'regress_orafce.txt', 'w');
    PERFORM utl_file.put_line(f, 'A', false);
    PERFORM utl_file.put_line(f, 'B', false);
    PERFORM utl_file.put_line(f, 'C', false);
    PERFORM utl_file.fclose_all();
    END;
    $$ LANGUAGE plpgsql;

    openGauss=# select gen_file('TMPDIR');
    gen_file
    ----------

    (1 row)

    openGauss=# -- regress_orafce2.txt只有一行字母B
    openGauss=# select utl_file.fcopy('TMPDIR', 'regress_orafce.txt', 'TMPDIR', 'regress_orafce2.txt', 2, 2);
    fcopy
    -------

    (1 row)

    ```

-   utl_file.fgetattr(location text, filename text, OUT fexists boolean, OUT file_length bigint, OUT blocksize integer)

    描述：获取文件的信息，包含文件是否存在、文件长度和文件块大小。

    参数说明：
    - location：文件夹名。
    - filename：文件名。

    示例：

    ```
    openGauss=# select * from utl_file.fgetattr('TMPDIR', 'regress_orafce.txt');
    fexists | file_length | blocksize
    ---------+-------------+-----------
    t       |           6 |     65536
    (1 row)

    openGauss=# select * from utl_file.fgetattr('TMPDIR', 'regress_orafce3.txt');
    fexists | file_length | blocksize
    ---------+-------------+-----------
    f       |             |
    (1 row)

    ```

-   utl_file.tmpdir()

    描述：返回临时文件夹的路径。

    返回值类型：text

    示例：

    ```
    openGauss=# select utl_file.tmpdir();
    tmpdir
    --------
    /tmp
    (1 row)

    ```
