# Using a gsql Meta-Command to Import Data<a name="EN-US_TOPIC_0289900838"></a>

The GSQL tool provides the  **\\copy**  meta-command to import data.

## \\copy Command<a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_section58856731203635"></a>

For details on the  **\\copy**  command, see  [Table 1](#en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_table65007762203657).

**Table  1**  \\copy meta-command

<a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_table65007762203657"></a>
<table><thead align="left"><tr id="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_row12923480203657"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p25975961203657"><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p25975961203657"></a><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p25975961203657"></a>Syntax</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p23678091203657"><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p23678091203657"></a><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p23678091203657"></a>Remarks</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_row11776229203657"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p17687276203715"><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p17687276203715"></a><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p17687276203715"></a>\copy { table [ ( column_list ) ] |</p>
<p id="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p24967761203715"><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p24967761203715"></a><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p24967761203715"></a>( query ) } { from | to } { filename |</p>
<p id="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p23383257203715"><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p23383257203715"></a><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p23383257203715"></a>stdin | stdout | pstdin | pstdout }</p>
<p id="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p9122727203715"><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p9122727203715"></a><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p9122727203715"></a>[ with ] [ binary ] [ delimiter</p>
<p id="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p14995683203715"><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p14995683203715"></a><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p14995683203715"></a>[ as ] 'character' ] [ null [ as ] 'string' ]</p>
<p id="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p743422203715"><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p743422203715"></a><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p743422203715"></a>[ csv [ header ] [ quote [ as ]</p>
<p id="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p6690801203715"><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p6690801203715"></a><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p6690801203715"></a>'character' ] [ escape [ as ] 'character' ]</p>
<p id="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p60217213203715"><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p60217213203715"></a><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p60217213203715"></a>[ force quote column_list | * ] [ force</p>
<p id="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p5084012203715"><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p5084012203715"></a><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p5084012203715"></a>not null column_list ] ]</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p4223544411233"><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p4223544411233"></a><a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_p4223544411233"></a>You can run this command to import or export data after logging in to a database on any gsql client. Different from the <strong id="b186214934"><a name="b186214934"></a><a name="b186214934"></a>COPY</strong> statement in SQL, this command performs read/write operations on local files rather than files on database servers. The accessibility and permissions of the local files are restricted to local users.</p>
<div class="note" id="en-us_topic_0283136941_en-us_topic_0237121136_note1924115273417"><a name="en-us_topic_0283136941_en-us_topic_0237121136_note1924115273417"></a><a name="en-us_topic_0283136941_en-us_topic_0237121136_note1924115273417"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0283136941_en-us_topic_0237121136_p1925145210348"><a name="en-us_topic_0283136941_en-us_topic_0237121136_p1925145210348"></a><a name="en-us_topic_0283136941_en-us_topic_0237121136_p1925145210348"></a><strong id="b1044161612311"><a name="b1044161612311"></a><a name="b1044161612311"></a>\copy</strong> applies only to small-scale data import in good format. It does not preprocess invalid characters or provide error tolerance. Therefore, <strong id="b13491316532"><a name="b13491316532"></a><a name="b13491316532"></a>\copy</strong> cannot be used in scenarios where abnormal data exists. <strong id="b1242617441683"><a name="b1242617441683"></a><a name="b1242617441683"></a>COPY</strong> is preferred for data import.</p>
</div></div>
</td>
</tr>
</tbody>
</table>

## Parameter Description<a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_section5126610110100"></a>

-   table

    Specifies the name \(possibly schema-qualified\) of an existing table.

    Value range: an existing table name

-   column\_list

    Specifies an optional list of columns to be copied.

    Value range: any field in the table. If no column list is specified, all columns of the table will be copied.

-   query

    Specifies that the results are to be copied.

    Value range: a  **SELECT**  or  **VALUES**  command in parentheses

-   filename

    Specifies the absolute path of a file. To run the  **COPY**  command, the user must have the write permission for this path.

-   stdin

    Specifies that input comes from the standard input.

-   stdout

    Specifies that output goes to the standard output.

-   pstdin

    Specifies that input comes from the gsql client.

-   pstout
-   Specifies that output goes to the gsql client.
-   binary

    Specifies that data is stored and read in binary mode instead of text mode. In binary mode, you cannot declare  **DELIMITER**,  **NULL**, or  **CSV**. After  **binary**  is specified, CSV, FIXED, and TEXT cannot be specified through  **option**  or  **copy\_option**.

-   delimiter \[ as \] 'character'

    Specifies the character that separates columns within each row \(line\) of the file.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   The value of  **delimiter**  cannot be  **\\r**  or  **\\n**.
    >-   A delimiter cannot be the same as the null value. The delimiter for the CSV format cannot be same as the  **quote**  value.
    >-   The delimiter of TEXT data cannot contain any of the following characters: \\.abcdefghijklmnopqrstuvwxyz0123456789.
    >-   The data length of a single row should be less than 1 GB. A row that has many columns using long delimiters cannot contain much valid data.
    >-   You are advised to use multi-character delimiters or invisible delimiters. For example, you can use multi-characters \(such as $^&\) and invisible characters \(such as 0x07, 0x08, and 0x1b\).

    Value range: a multi-character delimiter within 10 bytes

    Default value:

    -   A tab character in TEXT format
    -   A comma \(,\) in CSV format
    -   No delimiter in FIXED format

-   null \[ as \] 'string'

    Specifies the string that represents a null value.

    Value range:

    -   A null value cannot be  **\\r**  or  **\\n**. The maximum length is 100 characters.
    -   A null value cannot be the same as the  **delimiter**  or  **quote**  value.

    Default value:

    -   The default value for the CSV format is an empty string without quotation marks.
    -   The default value for the TEXT format is  **\\N**.

-   header

    Specifies whether a file contains a header with the names of each column in the file.  **header**  is available only for CSV and FIXED files.

    When data is imported, if  **header**  is  **on**, the first row of the data file will be identified as the header and ignored. If  **header**  is  **off**, the first row will be identified as a data row.

    When data is exported, if header is  **on**,  **fileheader**  must be specified.  **fileheader**  specifies the content in the header. If  **header**  is  **off**, an exported file does not contain a header.

    Value range:  **true/on**  and  **false/off**

    Default value: false

-   quote \[ as \] 'character'

    Specifies a quoted character string for a CSV file.

    Default value: a double quotation mark \("\)

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   The value of  **quote**  cannot be the same as that of the  **delimiter**  or null parameter.
    >-   The value of  **quote**  must be a single-byte character.
    >-   Invisible characters are recommended, such as 0x07, 0x08, and 0x1b.

-   escape \[ as \] 'character'

    Specifies an escape character for a CSV file. The value must be a single-byte character.

    Default value: a double quotation mark \("\) If the value is the same as that of  **quote**, it will be replaced by  **\\0**.

-   force quote column\_list | \*

    In  **CSV COPY TO**  mode, forces quotation marks to be used for all non-null values in each specified column. Null values are not quoted.

    Value range: an existing column name

-   force not null column\_list

    Assigns a value to a specified column in  **CSV COPY FROM**  mode.

    Value range: an existing column name


## Examples<a name="en-us_topic_0283136941_en-us_topic_0237121136_en-us_topic_0117407672_section49087436203946"></a>

1.  Create a target table  **a**.

    ```
    openGauss=# CREATE TABLE a(a int);
    ```

2.  Import data.
    1.  Copy data from  **stdin**  to table  **a**.

        ```
        openGauss=# \copy a from stdin;
        ```

        When the  **\>\>**  characters are displayed, enter data. To end your input, enter a backslash and a period \(\\.\).

        ```
        Enter data to be copied followed by a newline.
        End with a backslash and a period on a line by itself.
        >> 1
        >> 2
        >> \.
        ```

        Query data imported to table  **a**.

        ```
        openGauss=# SELECT * FROM a;
         a 
        ---
         1
         2
        (2 rows)
        ```

    2.  Copy data from a local file to table  **a**. The following assumes that the local file is  **/home/omm/2.csv**.

        -   Commas \(,\) are used as delimiters.
        -   If the number of columns defined in a source data file is greater than that in a foreign table, extra columns will be ignored during import.

        ```
        openGauss=# \copy a FROM '/home/omm/2.csv' WITH (delimiter',',IGNORE_EXTRA_DATA 'on');
        ```



