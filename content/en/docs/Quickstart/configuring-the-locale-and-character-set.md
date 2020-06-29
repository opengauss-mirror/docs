# Configuring the Locale and Character Set<a name="EN-US_TOPIC_0251900915"></a>

This section details two important parameters  **locale**  and  **character set**  which are controlled by specifying related initialization GUC parameters during installation.

## Concepts<a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_s3dc17ad92fab4710ab676f8b8aaf3346"></a>

Locale:

-   A locale involves culture-related issues \(such as letters, sequences, and digit formats\) considered in applications.
-   A locale will be initialized when you run the  **gs\_install**  script to initialize a database. By default, the database is initialized by  **gs\_install**  based on the default OS locale. If the default OS locale is the same as the planned one, you do not need to set  **locale**  during database initialization.

Character set \(encoding\):

-   openGauss supports GBK, UTF-8, and Latin1 encoding.
-   A character set will be initialized when you run the  **gs\_install**  script to initialize a database. By default, the database is initialized by  **gs\_install**  based on the character set corresponding to the default OS locale. When creating a database, you can modify the default character set. Different character sets can be set for different databases.

## Planning Rules and Methods<a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_s6ab1e5d68c4d415aa572630d13e0b61b"></a>

-   Plan character sets by referring to rules and methods listed in  [Table 1](#en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_table4528029520399).

    **Table  1**  Character set

    <a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_table4528029520399"></a>
    <table><thead align="left"><tr id="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_row2988498920399"><th class="cellrowborder" valign="top" width="9.700000000000001%" id="mcps1.2.4.1.1"><p id="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p2336335220399"><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p2336335220399"></a><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p2336335220399"></a>Character Set</p>
    </th>
    <th class="cellrowborder" valign="top" width="53.71%" id="mcps1.2.4.1.2"><p id="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p1338336820399"><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p1338336820399"></a><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p1338336820399"></a>Planning Rule</p>
    </th>
    <th class="cellrowborder" valign="top" width="36.59%" id="mcps1.2.4.1.3"><p id="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p1031100420399"><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p1031100420399"></a><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p1031100420399"></a>Method</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_row1218707520399"><td class="cellrowborder" valign="top" width="9.700000000000001%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p476501020399"><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p476501020399"></a><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p476501020399"></a>GBK</p>
    </td>
    <td class="cellrowborder" valign="top" width="53.71%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p5114038620399"><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p5114038620399"></a><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p5114038620399"></a>A two-byte Chinese character set with fixed-length encoding is used when the database requires only Chinese characters, handles a large amount of data, and requires high performance. For the <span id="en-us_topic_0249784576_text39451718183810"><a name="en-us_topic_0249784576_text39451718183810"></a><a name="en-us_topic_0249784576_text39451718183810"></a>openGauss</span>, the Chinese character set can only be GBK.</p>
    </td>
    <td class="cellrowborder" rowspan="3" valign="top" width="36.59%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_ul5486726620399"></a><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_ul5486726620399"></a><ul id="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_ul5486726620399"><li>During database installation, specify the <strong id="en-us_topic_0249784576_b313612964212"><a name="en-us_topic_0249784576_b313612964212"></a><a name="en-us_topic_0249784576_b313612964212"></a>-E</strong> initialization parameter.</li><li>When you use an SQL statement to create a database, specify the <strong id="en-us_topic_0249784576_b569111118421"><a name="en-us_topic_0249784576_b569111118421"></a><a name="en-us_topic_0249784576_b569111118421"></a>ENCODING</strong> parameter.</li></ul>
    <p id="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p1506353820399"><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p1506353820399"></a><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p1506353820399"></a>For details, see <a href="#en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_sa523d6a2a09c4cf29d503e2175747721">Examples</a>.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_row3513549720399"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p4257481520399"><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p4257481520399"></a><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p4257481520399"></a>UTF-8</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p3274544620399"><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p3274544620399"></a><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p3274544620399"></a>A Unicode character set is used when an application processes various characters or releases processing results in countries or regions using different languages. For the <span id="en-us_topic_0249784576_text177141027113815"><a name="en-us_topic_0249784576_text177141027113815"></a><a name="en-us_topic_0249784576_text177141027113815"></a>openGauss</span>, the Unicode character set can only be UTF-8.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_row4544574720399"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p4778401920399"><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p4778401920399"></a><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p4778401920399"></a>Latin1</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p4530030120399"><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p4530030120399"></a><a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_p4530030120399"></a>The Latin1 character set is used when a database supports only ASCII characters as well as Western European, Greek, Thai, Arabic, and Hebrew characters.</p>
    </td>
    </tr>
    </tbody>
    </table>

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   Character set names are case-insensitive, for example, the following values are supported by openGauss:  **gbk**  and  **GBK**;  **UTF-8**,  **UTF8**,  **uft8**, and  **utf-8**; and  **Latine1**  and  **latine1**.  
    >-   If no character set is specified during installation, the default character set SQL\_ASCII is used. For details about how to specify a character set during installation, see  [Examples](#en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_sa523d6a2a09c4cf29d503e2175747721).  

-   Plan a locale by performing the following steps:
    1.  Check the locale that matches the specified character set \(for example, UTF-8\).

        ```
        locale -a |grep utf8
        ```

        Information similar to the following is displayed, where  **en\_US.utf8**  indicates that the en\_US locale supports the UTF-8 encoding format.

        ```
        ......
        en_SG.utf8
        en_US.utf8
        ......
        ```

    2.  Set a locale when initializing a database. For details, see  [Examples](#en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_sa523d6a2a09c4cf29d503e2175747721).


## Examples<a name="en-us_topic_0249784576_en-us_topic_0241805810_en-us_topic_0085434664_en-us_topic_0059782037_sa523d6a2a09c4cf29d503e2175747721"></a>

Example 1: During the database initialization, set the character set to  **UTF-8**  and the locale to  **zh\_CN.UTF-8**.

```
gs_initdb -E UTF-8 --locale=zh_CN.UTF-8 /opt/gaussdb/data/data_n1 --nodename dn1 -w "Bigdata@123"
```

**/opt/gaussdb/data/data\_n1**  is the database node directory after the installation, and the database user password is  **Bigdata@123**.

Information similar to the following is displayed:

```
The files belonging to this database system will be owned by user "xlnha".
This user must also own the server process.

The database cluster will be initialized with locale "zh_CN.UTF-8".
gs_initdb: could not find suitable text search configuration for locale "zh_CN.UTF-8"
The default text search configuration will be set to "simple".

fixing permissions on existing directory /opt/gaussdb/data1 ... ok
creating subdirectories ... ok
selecting default max_connections ... 100
selecting default shared_buffers ... 32MB
creating configuration files ... ok
......
```

Example 2: When using an SQL statement to create a database, set the character set to  **GBK**.

```
gsql -d postgres -p 1255
```

```
postgres=# CREATE DATABASE mydb WITH ENCODING 'GBK' template = template0;
```

Information similar to the following is displayed:

```
CREATE DATABASE
```

