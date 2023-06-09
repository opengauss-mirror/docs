# Configuring a Data Source in the Linux OS<a name="EN-US_TOPIC_0289900737"></a>

The ODBC DRIVER \(**psqlodbcw.so**\) provided by openGauss can be used after it has been configured in a data source. To configure a data source, you must configure the  **odbc.ini**  and  **odbcinst.ini**  files on the server. The two files are generated during the unixODBC compilation and installation, and are saved in the  **/usr/local/etc**  directory by default.

## Procedure<a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_s0b78a5ac02d949ada15c29b00b5c734d"></a>

1.  Obtain the source code package of unixODBC by following link: 

    [https://sourceforge.net/projects/unixodbc/files/unixODBC/2.3.9/unixODBC-2.3.9pre.tar.gz/download](https://sourceforge.net/projects/unixodbc/files/unixODBC/2.3.9/unixODBC-2.3.9pre.tar.gz/download)

    After the download, validate the integrity based on the integrity validation algorithm provided by the community.

2.  Install unixODBC. It does not matter if unixODBC of another version has been installed.

    Currently, unixODBC-2.2.1 is not supported. For example, to install unixODBC-2.3.0, run the commands below. unixODBC is installed in the  **/usr/local**  directory by default. The data source file is generated in the  **/usr/local/etc**  directory, and the library file is generated in the  **/usr/local/lib**  directory.

    ```
    tar zxvf unixODBC-2.3.0.tar.gz
    cd unixODBC-2.3.0
    # Modify the configure file. (If it does not exist, modify the configure.ac file.) Find LIB_VERSION.
    # Change the value of LIB_VERSION to 1:0:0 to compile a *.so.1 dynamic library with the same dependency on psqlodbcw.so.
    vim configure
    
    ./configure --enable-gui=no #To perform compilation on an ARM server, add the configure parameter --build=aarch64-unknown-linux-gnu.
    make
    # The installation may require root permissions.
    make install
    ```

3.  Replace the openGauss client driver.
    1.  Decompress the  **openGauss-x.x.x-ODBC.tar.gz**  package. After the decompression, the  **lib**  and  **odbc**  folders are generated. The  **odbc**  folder contains another  **lib**  folder. Copy the  **psqlodbca.la**,  **psqlodbca.so**,  **psqlodbcw.la**, and  **psqlodbcw.so**  files from  **/odbc/lib**  to  **/usr/local/lib**.
    2.  Copy the library in the  **lib**  directory obtained after decompressing  **openGauss-x.x.x-ODBC.tar.gz**  to the  **/usr/local/lib**  directory.

4.  Configure a data source.
    1.  Configure the ODBC driver file.

        Add the following content to the  **/usr/local/etc/odbcinst.ini**  file:

        ```
        [GaussMPP]
        Driver64=/usr/local/lib/psqlodbcw.so
        setup=/usr/local/lib/psqlodbcw.so
        ```

        For descriptions of the parameters in the  **odbcinst.ini**  file, see  [Table 1](#en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_td564f21e7c8e458bbd741b09896f5d91).

        **Table  1**  odbcinst.ini configuration parameters

        <a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_td564f21e7c8e458bbd741b09896f5d91"></a>
        <table><thead align="left"><tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_rb271d7f472844a738954ee76c1e32380"><th class="cellrowborder" valign="top" width="26.340000000000003%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a28c78abf21ca48ddaee6fd3c34f3397f"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a28c78abf21ca48ddaee6fd3c34f3397f"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a28c78abf21ca48ddaee6fd3c34f3397f"></a><strong id="b20403154618410"><a name="b20403154618410"></a><a name="b20403154618410"></a>Parameter</strong></p>
        </th>
        <th class="cellrowborder" valign="top" width="38.89%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a87fb9ed3f1b140119593e71843494a31"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a87fb9ed3f1b140119593e71843494a31"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a87fb9ed3f1b140119593e71843494a31"></a><strong id="b1786105011417"><a name="b1786105011417"></a><a name="b1786105011417"></a>Description</strong></p>
        </th>
        <th class="cellrowborder" valign="top" width="34.77%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_ad3bb948669de4429be3b566882116d70"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_ad3bb948669de4429be3b566882116d70"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_ad3bb948669de4429be3b566882116d70"></a><strong id="b720613391014"><a name="b720613391014"></a><a name="b720613391014"></a>Example</strong></p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_r6bdd431c96eb4f7c85664375766de400"><td class="cellrowborder" valign="top" width="26.340000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a8e9446f0aa7646fe9538d94cde8e74a3"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a8e9446f0aa7646fe9538d94cde8e74a3"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a8e9446f0aa7646fe9538d94cde8e74a3"></a>[DriverName]</p>
        </td>
        <td class="cellrowborder" valign="top" width="38.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_accc06fd075c040e0884c74e19c4239b2"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_accc06fd075c040e0884c74e19c4239b2"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_accc06fd075c040e0884c74e19c4239b2"></a>Driver name, corresponding to Driver in DSN.</p>
        </td>
        <td class="cellrowborder" valign="top" width="34.77%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_ad04d23410c114609aec4f993de148ce3"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_ad04d23410c114609aec4f993de148ce3"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_ad04d23410c114609aec4f993de148ce3"></a>[DRIVER_N]</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_r1fbbae158f634be28568c80376a63292"><td class="cellrowborder" valign="top" width="26.340000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a67dcf15c971843c0a09bcb75af898ed8"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a67dcf15c971843c0a09bcb75af898ed8"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a67dcf15c971843c0a09bcb75af898ed8"></a>Driver64</p>
        </td>
        <td class="cellrowborder" valign="top" width="38.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_ac1271d08ff5242849aefc93aed5b0038"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_ac1271d08ff5242849aefc93aed5b0038"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_ac1271d08ff5242849aefc93aed5b0038"></a>Path of the dynamic driver library.</p>
        </td>
        <td class="cellrowborder" valign="top" width="34.77%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a9a7de0f221414c0f97d14fbbf74eb104"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a9a7de0f221414c0f97d14fbbf74eb104"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a9a7de0f221414c0f97d14fbbf74eb104"></a>Driver64=/usr/local/lib/psqlodbcw.so</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_r4e8ad74343a849f8a7224716cf20ab57"><td class="cellrowborder" valign="top" width="26.340000000000003%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a18a35a0225c14a2e9aecdc72084f1418"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a18a35a0225c14a2e9aecdc72084f1418"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a18a35a0225c14a2e9aecdc72084f1418"></a>setup</p>
        </td>
        <td class="cellrowborder" valign="top" width="38.89%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a6eecb8f4cf064448a14a46be8e243daa"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a6eecb8f4cf064448a14a46be8e243daa"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a6eecb8f4cf064448a14a46be8e243daa"></a>Driver installation path, which is the same as the dynamic library path in Driver64.</p>
        </td>
        <td class="cellrowborder" valign="top" width="34.77%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a7f838d6444df4566853f51533341401b"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a7f838d6444df4566853f51533341401b"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a7f838d6444df4566853f51533341401b"></a>setup=/usr/local/lib/psqlodbcw.so</p>
        </td>
        </tr>
        </tbody>
        </table>

    2.  Configure the data source file.

        Add the following content to the  **/usr/local/etc/odbc.ini**  file:

        ```
        [MPPODBC]
        Driver=GaussMPP
        Servername=10.145.130.26 (IP address of the server where the database resides)
        Database=postgres  (database name)
        Username=omm  (database username)
        Password=    (user password of the database)
        Port=8000 (listening port of the database)
        Sslmode = allow
        ```

        For descriptions of the parameters in the  **odbc.ini**  file, see  [Table 2](#en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_t55845a6555f2454297b64ce47ad3d648).

        **Table  2**  odbc.ini configuration parameters

        <a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_t55845a6555f2454297b64ce47ad3d648"></a>
        <table><thead align="left"><tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_r670b13dddd7d4cf1803d4fb238347e4f"><th class="cellrowborder" valign="top" width="30.570000000000004%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_acaf03818449f45a3baf67b847f258487"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_acaf03818449f45a3baf67b847f258487"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_acaf03818449f45a3baf67b847f258487"></a><strong id="b566754655"><a name="b566754655"></a><a name="b566754655"></a>Parameter</strong></p>
        </th>
        <th class="cellrowborder" valign="top" width="33.37%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a2996382cc39847f79d6e271605212118"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a2996382cc39847f79d6e271605212118"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a2996382cc39847f79d6e271605212118"></a><strong id="b845178176"><a name="b845178176"></a><a name="b845178176"></a>Description</strong></p>
        </th>
        <th class="cellrowborder" valign="top" width="36.059999999999995%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a5962444038ea45f4a049a6659667dbf3"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a5962444038ea45f4a049a6659667dbf3"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a5962444038ea45f4a049a6659667dbf3"></a><strong id="b15508183881020"><a name="b15508183881020"></a><a name="b15508183881020"></a>Example</strong></p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_r0fb190e64b064cd5bdc4ba6a85b7f5b5"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a5a22b1b502ce470daf0e150a5a22478d"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a5a22b1b502ce470daf0e150a5a22478d"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a5a22b1b502ce470daf0e150a5a22478d"></a>[DSN]</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a4d0e13e5a4974e95ba02b65f0880769a"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a4d0e13e5a4974e95ba02b65f0880769a"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a4d0e13e5a4974e95ba02b65f0880769a"></a>Data source name.</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_en-us_topic_0058965230_p574463221213"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_en-us_topic_0058965230_p574463221213"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_en-us_topic_0058965230_p574463221213"></a>[MPPODBC]</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_r6594d9c7f185417cbb0362b69ff20436"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a11f2651489984caaa3ba6c5a69b3bb4a"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a11f2651489984caaa3ba6c5a69b3bb4a"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a11f2651489984caaa3ba6c5a69b3bb4a"></a>Driver</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a45cdb983d7eb4357bfe4363048fff41b"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a45cdb983d7eb4357bfe4363048fff41b"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a45cdb983d7eb4357bfe4363048fff41b"></a>Driver name, corresponding to DriverName in <strong id="b207611103616"><a name="b207611103616"></a><a name="b207611103616"></a>odbcinst.ini</strong>.</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_en-us_topic_0058965230_p587420421213"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_en-us_topic_0058965230_p587420421213"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_en-us_topic_0058965230_p587420421213"></a>Driver = DRIVER_N</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_ra2915c8c5cb64c31bca0b7cc97b3cb94"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_acda586c1c3074516b55eca79e45c96b9"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_acda586c1c3074516b55eca79e45c96b9"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_acda586c1c3074516b55eca79e45c96b9"></a>Servername</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_af9844951ac5f42cf95b1e70a86da25ed"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_af9844951ac5f42cf95b1e70a86da25ed"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_af9844951ac5f42cf95b1e70a86da25ed"></a>Server IP address. Multiple IP addresses can be configured.</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_en-us_topic_0058965230_p705535321213"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_en-us_topic_0058965230_p705535321213"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_en-us_topic_0058965230_p705535321213"></a>Servername = 10.145.130.26</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_rf57dbfc6a8404544a5844f08783f6892"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a628bf205a20d43c69555a3424981c8f0"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a628bf205a20d43c69555a3424981c8f0"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a628bf205a20d43c69555a3424981c8f0"></a>Database</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a7dacdbe0757946ed85ca6e897a443cab"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a7dacdbe0757946ed85ca6e897a443cab"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a7dacdbe0757946ed85ca6e897a443cab"></a>Name of the database to connect to.</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a44897122ba4248fb8fdb9ff9235f04f2"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a44897122ba4248fb8fdb9ff9235f04f2"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a44897122ba4248fb8fdb9ff9235f04f2"></a>Database = postgres</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_r478d8852e4294c01bb48cbaaf087df82"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_en-us_topic_0058965230_p237028621213"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_en-us_topic_0058965230_p237028621213"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_en-us_topic_0058965230_p237028621213"></a>Username</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a6d4497d8c6134705a3971992b73eb9a8"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a6d4497d8c6134705a3971992b73eb9a8"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a6d4497d8c6134705a3971992b73eb9a8"></a>Database username.</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a4c244a359e2341a9a25a634898bef6f8"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a4c244a359e2341a9a25a634898bef6f8"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a4c244a359e2341a9a25a634898bef6f8"></a>Username = <span id="en-us_topic_0283136654_en-us_topic_0237120407_text542984584919"><a name="en-us_topic_0283136654_en-us_topic_0237120407_text542984584919"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_text542984584919"></a>omm</span></p>
        </td>
        </tr>
        <tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_r373830e4fd9c4f8997fcdde5596099f4"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a72415586711142e39d29a2d8b664ff2b"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a72415586711142e39d29a2d8b664ff2b"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a72415586711142e39d29a2d8b664ff2b"></a>Password</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_ab0a86a7c047f420081b1c5d1c57ca78f"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_ab0a86a7c047f420081b1c5d1c57ca78f"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_ab0a86a7c047f420081b1c5d1c57ca78f"></a>Database user password.</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a7803bcaba1324e56913a1a44d46f692e"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a7803bcaba1324e56913a1a44d46f692e"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a7803bcaba1324e56913a1a44d46f692e"></a>Password=</p>
        <div class="note" id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_note66001755162217"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_note66001755162217"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_note66001755162217"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p57144884162217"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p57144884162217"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p57144884162217"></a>After a user established a connection, the ODBC driver automatically clears their password stored in memory.</p>
        <p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p33900700162423"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p33900700162423"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p33900700162423"></a>However, if this parameter is configured, UnixODBC will cache data source files, which may cause the password to be stored in the memory for a long time.</p>
        <p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p9307938162511"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p9307938162511"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p9307938162511"></a>When you connect to an application, you are advised to send your password through an API instead of writing it in a data source configuration file. After the connection has been established, immediately clear the memory segment where your password is stored.</p>
        </div></div>
        </td>
        </tr>
        <tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_r99417f5e349c4f7b89331e2a2d56200d"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_af23b15858fa341b6b849ff850e10a6cb"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_af23b15858fa341b6b849ff850e10a6cb"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_af23b15858fa341b6b849ff850e10a6cb"></a>Port</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a86b34375cfcd4cdd84b070cc42d847c3"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a86b34375cfcd4cdd84b070cc42d847c3"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a86b34375cfcd4cdd84b070cc42d847c3"></a>Port number of the server.</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_ab47ede062bc6450097f576df5aa63442"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_ab47ede062bc6450097f576df5aa63442"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_ab47ede062bc6450097f576df5aa63442"></a>Port = <span id="en-us_topic_0283136654_en-us_topic_0237120407_text64689595438"><a name="en-us_topic_0283136654_en-us_topic_0237120407_text64689595438"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_text64689595438"></a>8000</span></p>
        </td>
        </tr>
        <tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_rd27aa89b945d4ac6b33000b6df5c916e"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a5f7c150a5b5f471fa60adba4fd913dd4"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a5f7c150a5b5f471fa60adba4fd913dd4"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a5f7c150a5b5f471fa60adba4fd913dd4"></a>Sslmode</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_en-us_topic_0058965230_p462272821213"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_en-us_topic_0058965230_p462272821213"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_en-us_topic_0058965230_p462272821213"></a>Whether to enable SSL.</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a53d9561f3715460d9f7b8a022292214c"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a53d9561f3715460d9f7b8a022292214c"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_a53d9561f3715460d9f7b8a022292214c"></a>Sslmode = allow</p>
        </td>
        </tr>
        <tr id="row115681541336"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="p65681140317"><a name="p65681140317"></a><a name="p65681140317"></a>Debug</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="p195681543312"><a name="p195681543312"></a><a name="p195681543312"></a>If this parameter is set to <strong id="b1638153182116"><a name="b1638153182116"></a><a name="b1638153182116"></a>1</strong>, the <strong id="b893511282474"><a name="b893511282474"></a><a name="b893511282474"></a>mylog</strong> file of the PostgreSQL ODBC driver will be printed. The directory generated for storing logs is <strong id="b17947114672111"><a name="b17947114672111"></a><a name="b17947114672111"></a>/tmp/</strong>. If this parameter is set to <strong id="b1722513421233"><a name="b1722513421233"></a><a name="b1722513421233"></a>0</strong>, no directory is generated.</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="p205681419316"><a name="p205681419316"></a><a name="p205681419316"></a>Debug = 1</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283136654_en-us_topic_0237120407_row3180734193610"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_p91811034123617"><a name="en-us_topic_0283136654_en-us_topic_0237120407_p91811034123617"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_p91811034123617"></a>UseServerSidePrepare</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_p31811134143616"><a name="en-us_topic_0283136654_en-us_topic_0237120407_p31811134143616"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_p31811134143616"></a>Whether to enable the extended query protocol for the database.</p>
        <p id="en-us_topic_0283136654_en-us_topic_0237120407_p19694134018382"><a name="en-us_topic_0283136654_en-us_topic_0237120407_p19694134018382"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_p19694134018382"></a>The value can be <strong id="b15189172412713"><a name="b15189172412713"></a><a name="b15189172412713"></a>0</strong> or <strong id="b121943241370"><a name="b121943241370"></a><a name="b121943241370"></a>1</strong>. The default value is <strong id="b201941245718"><a name="b201941245718"></a><a name="b201941245718"></a>1</strong>, indicating that the extended query protocol is enabled.</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_p318163493616"><a name="en-us_topic_0283136654_en-us_topic_0237120407_p318163493616"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_p318163493616"></a>UseServerSidePrepare = 1</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283136654_en-us_topic_0237120407_row18741310143913"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_p674191083916"><a name="en-us_topic_0283136654_en-us_topic_0237120407_p674191083916"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_p674191083916"></a>UseBatchProtocol</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_p67427101397"><a name="en-us_topic_0283136654_en-us_topic_0237120407_p67427101397"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_p67427101397"></a>Whether to enable the batch query protocol. If it is enabled, DML performance can be improved. The value can be <strong id="b16526329179"><a name="b16526329179"></a><a name="b16526329179"></a>0</strong> or <strong id="b185311229070"><a name="b185311229070"></a><a name="b185311229070"></a>1</strong>. The default value is <strong id="b1753111291713"><a name="b1753111291713"></a><a name="b1753111291713"></a>1</strong>.</p>
        <p id="en-us_topic_0283136654_en-us_topic_0237120407_p20481152784010"><a name="en-us_topic_0283136654_en-us_topic_0237120407_p20481152784010"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_p20481152784010"></a>If this parameter is set to <strong id="b965614018713"><a name="b965614018713"></a><a name="b965614018713"></a>0</strong>, the batch query protocol is disabled (mainly for communication with earlier database versions).</p>
        <p id="en-us_topic_0283136654_en-us_topic_0237120407_p05131728428"><a name="en-us_topic_0283136654_en-us_topic_0237120407_p05131728428"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_p05131728428"></a>If this parameter is set to <strong id="b496916455714"><a name="b496916455714"></a><a name="b496916455714"></a>1</strong> and <strong id="b15974845879"><a name="b15974845879"></a><a name="b15974845879"></a>support_batch_bind</strong> is set to <strong id="b197414453720"><a name="b197414453720"></a><a name="b197414453720"></a>on</strong>, the batch query protocol is enabled.</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_p7742101083917"><a name="en-us_topic_0283136654_en-us_topic_0237120407_p7742101083917"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_p7742101083917"></a>UseBatchProtocol = 1</p>
        </td>
        </tr>
        <tr id="row3254426236"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="p725410268312"><a name="p725410268312"></a><a name="p725410268312"></a>ForExtensionConnector</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="p1125417269313"><a name="p1125417269313"></a><a name="p1125417269313"></a>This parameter specifies whether the savepoint is sent.</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="p32542266317"><a name="p32542266317"></a><a name="p32542266317"></a>ForExtensionConnector = 1</p>
        </td>
        </tr>
        <tr id="row102684231731"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="p6268223637"><a name="p6268223637"></a><a name="p6268223637"></a>UnamedPrepStmtThreshold</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="p42681323638"><a name="p42681323638"></a><a name="p42681323638"></a>Each time <strong id="b17628202615373"><a name="b17628202615373"></a><a name="b17628202615373"></a>SQLFreeHandle</strong> is invoked to release statements, ODBC sends a <strong id="b12308173723819"><a name="b12308173723819"></a><a name="b12308173723819"></a>Deallocate plan_name</strong> statement to the server. A large number of such statements exist in the service. To reduce the number of the statements to be sent, <strong id="b17478186175019"><a name="b17478186175019"></a><a name="b17478186175019"></a>stmt-&gt;plan_name</strong> is left empty so that the database can identify them as unnamed statements. This parameter is added to control the threshold for unnamed statements.</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="p0268142318319"><a name="p0268142318319"></a><a name="p0268142318319"></a>UnamedPrepStmtThreshold = 100</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283136654_en-us_topic_0237120407_row9789524184113"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_p182621858115514"><a name="en-us_topic_0283136654_en-us_topic_0237120407_p182621858115514"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_p182621858115514"></a>ConnectionExtraInfo</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_p1626217582555"><a name="en-us_topic_0283136654_en-us_topic_0237120407_p1626217582555"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_p1626217582555"></a>Whether to display the driver deployment path and process owner in the <strong id="b323618214810"><a name="b323618214810"></a><a name="b323618214810"></a>connection_info</strong> parameter mentioned in <a href="../DataBaseReference/connection-settings.md#en-us_topic_0283136886_en-us_topic_0237124695_section4834457114318">connection_info</a>.</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_p42621158185515"><a name="en-us_topic_0283136654_en-us_topic_0237120407_p42621158185515"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_p42621158185515"></a>ConnectionExtraInfo = 1</p>
        <div class="note" id="en-us_topic_0283136654_en-us_topic_0237120407_note523613263217"><a name="en-us_topic_0283136654_en-us_topic_0237120407_note523613263217"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_note523613263217"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0283136654_en-us_topic_0237120407_p17978439306"><a name="en-us_topic_0283136654_en-us_topic_0237120407_p17978439306"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_p17978439306"></a>The default value is <strong id="b18201217781"><a name="b18201217781"></a><a name="b18201217781"></a>0</strong>. If this parameter is set to <strong id="b261315312492"><a name="b261315312492"></a><a name="b261315312492"></a>1</strong>, the ODBC driver reports the driver deployment path and process owner to the database and displays the information in the <strong id="b4614143116497"><a name="b4614143116497"></a><a name="b4614143116497"></a>connection_info</strong> parameter (see <a href="../DataBaseReference/connection-settings.md#en-us_topic_0283136886_en-us_topic_0237124695_section4834457114318">connection_info</a>). In this case, you can query the information from <a href="../DataBaseReference/pg_stat_activity.md">PG_STAT_ACTIVITY</a>.</p>
        </div></div>
        </td>
        </tr>
        <tr id="row151219194419"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="p1812118199417"><a name="p1812118199417"></a><a name="p1812118199417"></a>BoolAsChar</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="p9121419947"><a name="p9121419947"></a><a name="p9121419947"></a>If this parameter is set to <strong id="b527850153914"><a name="b527850153914"></a><a name="b527850153914"></a>Yes</strong>, the Boolean value is mapped to the SQL_CHAR type. If this parameter is not set, the value is mapped to the SQL_BIT type.</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="p1712114193419"><a name="p1712114193419"></a><a name="p1712114193419"></a>BoolsAsChar = Yes</p>
        </td>
        </tr>
        <tr id="row1295715161419"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="p195720163417"><a name="p195720163417"></a><a name="p195720163417"></a>RowVersioning</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="p9957191615418"><a name="p9957191615418"></a><a name="p9957191615418"></a>When an attempt is made to update a row of data, setting this parameter to <strong id="b244816354211"><a name="b244816354211"></a><a name="b244816354211"></a>Yes</strong> allows the application to detect whether the data has been modified by other users.</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="p2095791613416"><a name="p2095791613416"></a><a name="p2095791613416"></a>RowVersioning = Yes</p>
        </td>
        </tr>
        <tr id="row1429519142045"><td class="cellrowborder" valign="top" width="30.570000000000004%" headers="mcps1.2.4.1.1 "><p id="p12954141643"><a name="p12954141643"></a><a name="p12954141643"></a>ShowSystemTables</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.37%" headers="mcps1.2.4.1.2 "><p id="p529511142411"><a name="p529511142411"></a><a name="p529511142411"></a>By default, the driver regards the system table as a common SQL table.</p>
        </td>
        <td class="cellrowborder" valign="top" width="36.059999999999995%" headers="mcps1.2.4.1.3 "><p id="p162955148416"><a name="p162955148416"></a><a name="p162955148416"></a>ShowSystemTables = Yes</p>
        </td>
        </tr>
        </tbody>
        </table>

        The valid values of  **Sslmode**  are as follows:

        **Table  3**  Sslmode options

        <a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_table22136585143846"></a>
        <table><thead align="left"><tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_row7964795143846"><th class="cellrowborder" valign="top" width="14.87%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p44475740143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p44475740143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p44475740143856"></a>Sslmode</p>
        </th>
        <th class="cellrowborder" valign="top" width="18.87%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p45765196143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p45765196143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p45765196143856"></a>Whether SSL Encryption Is Enabled</p>
        </th>
        <th class="cellrowborder" valign="top" width="66.25999999999999%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p15993376143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p15993376143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p15993376143856"></a>Description</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_row4599577143846"><td class="cellrowborder" valign="top" width="14.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p41388182143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p41388182143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p41388182143856"></a>disable</p>
        </td>
        <td class="cellrowborder" valign="top" width="18.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p64108423143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p64108423143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p64108423143856"></a>No</p>
        </td>
        <td class="cellrowborder" valign="top" width="66.25999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p25399806143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p25399806143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p25399806143856"></a>SSL connection is not enabled.</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_row10527338143846"><td class="cellrowborder" valign="top" width="14.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p61520998143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p61520998143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p61520998143856"></a>allow</p>
        </td>
        <td class="cellrowborder" valign="top" width="18.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p17144918143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p17144918143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p17144918143856"></a>Possible</p>
        </td>
        <td class="cellrowborder" valign="top" width="66.25999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p46561127143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p46561127143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p46561127143856"></a>If the database server requires SSL connection, SSL connection can be enabled. However, authenticity of the database server will not be verified.</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_row19876694143846"><td class="cellrowborder" valign="top" width="14.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p53085640143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p53085640143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p53085640143856"></a>prefer</p>
        </td>
        <td class="cellrowborder" valign="top" width="18.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p4969569143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p4969569143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p4969569143856"></a>Possible</p>
        </td>
        <td class="cellrowborder" valign="top" width="66.25999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p66990807143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p66990807143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p66990807143856"></a>If the database supports SSL connection, SSL connection is recommended. However, authenticity of the database server will not be verified.</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_row43737844143846"><td class="cellrowborder" valign="top" width="14.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p48154267143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p48154267143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p48154267143856"></a>require</p>
        </td>
        <td class="cellrowborder" valign="top" width="18.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p8181559143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p8181559143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p8181559143856"></a>Yes</p>
        </td>
        <td class="cellrowborder" valign="top" width="66.25999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p58726539143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p58726539143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p58726539143856"></a>SSL connection is required and data is encrypted. However, authenticity of the database server will not be verified.</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_row38957604143846"><td class="cellrowborder" valign="top" width="14.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p63301190143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p63301190143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p63301190143856"></a>verify-ca</p>
        </td>
        <td class="cellrowborder" valign="top" width="18.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p27122799143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p27122799143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p27122799143856"></a>Yes</p>
        </td>
        <td class="cellrowborder" valign="top" width="66.25999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p49463116143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p49463116143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p49463116143856"></a>SSL connection is required and whether the database has a trusted certificate will be verified. </p>
        </td>
        </tr>
        <tr id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_row17092427143846"><td class="cellrowborder" valign="top" width="14.87%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p21152121143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p21152121143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p21152121143856"></a>verify-full</p>
        </td>
        <td class="cellrowborder" valign="top" width="18.87%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p35600232143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p35600232143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p35600232143856"></a>Yes</p>
        </td>
        <td class="cellrowborder" valign="top" width="66.25999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p65046568143856"><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p65046568143856"></a><a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_p65046568143856"></a>SSL connection is required. In addition to the check scope specified by <strong id="b678144915917"><a name="b678144915917"></a><a name="b678144915917"></a>verify-ca</strong>, the system checks whether the name of the host where the database resides is the same as that on the certificate. <span id="text18227139123314"><a name="text18227139123314"></a><a name="text18227139123314"></a>openGauss</span> does not support this mode.</p>
        </td>
        </tr>
        </tbody>
        </table>

5.  \(Optional\) Generate an SSL certificate. For details, see  [Generating Certificates](../DatabaseAdministrationGuide/generating-certificates.md). This step and step  [6](#en-us_topic_0283136654_li1724551081815)  are required only when the server and client are connected in SSL mode. Skip the two steps if the non-SSL connection mode is used.
6.  <a name="en-us_topic_0283136654_li1724551081815"></a>\(Optional\) Replace an SSL certificate. For details, see  [Replacing Certificates](../DatabaseAdministrationGuide/replacing-certificates.md).
7.  Enable SSL mode.

    Declare the following environment variables and ensure that the permission for the  **client.key\***  series files is set to  **600**.

    ```
    Go back to the root directory, create the .postgresql directory, and save root.crt, client.crt, client.key, client.key.cipher, client.key.rand, client.req, server.crt, server.key, server.key.cipher, server.key.rand, and server.req to the .postgresql directory.
    In the Unix OS, server.crt and server.key must deny the access from the external or any group. Run the following command to set this permission:
    chmod 0600 server.key
    Copy the certificate files whose names start with root.crt and server to the install/data directory of the database (the directory is the same as that of the postgresql.conf file).
    Modify the postgresql.conf file.
        ssl = on
        ssl_cert_file = 'server.crt'
        ssl_key_file = 'server.key'
        ssl_ca_file = 'root.crt'
    After modifying the parameters, restart the database.
    Set the sslmode parameter to require or verify-ca in the odbc.ini file.
    ```

8.  <a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_l4c0173b8af93447e91aba24005e368e5"></a>Configure the database server.
    1.  Log in as the OS user  **omm**  to the primary node of the database.
    2.  Run the following command to add NIC IP addresses or host names, with values separated by commas \(,\). The NICs and hosts are used to provide external services. In the following command,  _NodeName_  specifies the name of the current node.

        ```
        gs_guc reload -N NodeName -I all -c "listen_addresses='localhost,192.168.0.100,10.11.12.13'"
        ```

        If direct routing of LVS is used, add the virtual IP address \(10.11.12.13\) of LVS to the server listening list.

        You can also set  **listen\_addresses**  to  **\***  or  **0.0.0.0**  to listen to all NICs, but this incurs security risks and is not recommended.

    3.  Run the following command to add an authentication rule to the configuration file of the primary database node. In this example, the IP address \(10.11.12.13\) of the client is the remote host IP address.

        ```
        gs_guc reload -N all -I all -h "host all jack 10.11.12.13/32 sha256"
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >-   ****
        >-   **-N all**  indicates all hosts in openGauss.
        >-   **-I all**  indicates all instances of the host.
        >-   **-h**  specifies statements that need to be added in the  **pg\_hba.conf**  file.
        >-   **all**  indicates that a client can connect to any database.
        >-   **jack**  indicates the user that accesses the database.
        >-   **_10.11.12.13/__32_**  indicates hosts whose IP address is 10.11.12.13 can be connected. Configure the parameter based on your network conditions.  **32**  indicates that there are 32 bits whose value is 1 in the subnet mask. That is, the subnet mask is 255.255.255.255.
        >-   **sha256**  indicates that the password of user  **jack**  is encrypted using the SHA-256 algorithm.

        If the ODBC client and the primary database node to connect are deployed on the same machine, you can use the local trust authentication mode. Run the following command:

        ```
        local all all trust
        ```

        If the ODBC client and the primary database node to connect are deployed on different machines, use the SHA-256 authentication mode. Run the following command:

        ```
        host all all xxx.xxx.xxx.xxx/32 sha256
        ```

    4.  Restart openGauss.

        ```
        gs_om -t stop
        gs_om -t start
        ```

9.  Configure the environment variables on the client.

    ```
    vim ~/.bashrc
    ```

    Add the following information to the configuration file:

    ```
    export LD_LIBRARY_PATH=/usr/local/lib/:$LD_LIBRARY_PATH
    export ODBCSYSINI=/usr/local/etc
    export ODBCINI=/usr/local/etc/odbc.ini
    ```

10. Run the following command to validate the addition:

    ```
    source ~/.bashrc
    ```


## Verifying the Data Source Configuration<a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_scfaeeaa70a9448889e6fdd7e37d172c5"></a>

Run the  **./isql -v** _MPPODBC_  command \(**_MPPODBC_**  is the data source name\).

-   If the following information is displayed, the configuration is correct and the connection succeeds.

    ```
    +---------------------------------------+
    | Connected!                            |
    |                                       |
    | sql-statement                         |
    | help [tablename]                      |
    | quit                                  |
    |                                       |
    +---------------------------------------+
    SQL> 
    ```

-   If error information is displayed, the configuration is incorrect. Check the configuration.

## FAQs<a name="en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_section29040424163013"></a>

-   \[UnixODBC\]\[Driver Manager\]Can't open lib 'xxx/xxx/psqlodbcw.so' : file not found.

    Possible causes:

    -   The path configured in the  **odbcinst.ini**  file is incorrect.

        Run  **ls**  to check the path in the error information, and ensure that the  **psqlodbcw.so**  file exists and you have execute permissions on it.

    -   The dependent library of  **psqlodbcw.so**  does not exist or is not in system environment variables.

        Run  **ldd**  to check the path in the error information. If  **libodbc.so.1**  or other UnixODBC libraries do not exist, configure UnixODBC again following the procedure provided in this section, and add the  **lib**  directory under its installation directory to  **LD\_LIBRARY\_PATH**. If other libraries do not exist, add the  **lib**  directory under the ODBC driver package to  **LD\_LIBRARY\_PATH**.


-   \[UnixODBC\]connect to server failed: no such file or directory

    Possible causes:

    -   An incorrect or unreachable database IP address or port was configured.

        Check the  **Servername**  and  **Port**  configuration items in data sources.

    -   Server monitoring is improper.

        If  **Servername**  and  **Port**  are correctly configured, ensure the proper network adapter and port are monitored by following the database server configurations in the procedure in this section.

    -   Firewall and network gatekeeper settings are improper.

        Check firewall settings, and ensure that the database communication port is trusted.

        Check to ensure network gatekeeper settings are proper \(if any\).


-   \[unixODBC\]The password-stored method is not supported.

    Possible causes:

    The  **sslmode**  configuration item is not configured in the data sources.

    Solution: 

    Set the configuration item to  **allow**  or a higher level. For details, see  [Table 3](#en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_table22136585143846).

-   Server common name "xxxx" does not match host name "xxxxx"

    Possible causes:

    When  **verify-full**  is used for SSL encryption, the driver checks whether the host name in certificates is the same as the actual one.

    Solution: 

    To solve this problem, use  **verify-ca**  to stop checking host names, or generate a set of CA certificates containing the actual host names.

-   Driver's SQLAllocHandle on SQL\_HANDLE\_DBC failed

    Possible causes:

    The executable file \(such as the  **isql**  tool of unixODBC\) and the database driver \(**psqlodbcw.so**\) depend on different library versions of ODBC, such as  **libodbc.so.1**  and  **libodbc.so.2**. You can verify this problem by using the following method:

    ```
    ldd `which isql` | grep odbc
    ldd psqlodbcw.so | grep odbc
    ```

    If the suffix digits of the outputs  **libodbc.so**  are different or indicate different physical disk files, this problem exists. Both  **isql**  and  **psqlodbcw.so**  load  **libodbc.so**. If different physical files are loaded, different ODBC libraries with the same function list conflict with each other in a visible domain. As a result, the database driver cannot be loaded.

    Solution: 

    Uninstall the unnecessary unixODBC, such as libodbc.so.2, and create a soft link with the same name and the .so.2 suffix for the remaining libodbc.so.1 library.

-   FATAL: Forbid remote connection with trust method!

    For security purposes, the primary database node forbids access from other nodes in openGauss without authentication.

    To access the primary database node from inside openGauss, deploy the ODBC program on the host where the primary database node is located and set the server address to  **127.0.0.1**. It is recommended that the service system be deployed outside openGauss. If it is deployed inside, database performance may be affected.

-   \[unixODBC\]\[Driver Manager\]Invalid attribute value

    The unixODBC version may not be the recommended one. You are advised to run the  **odbcinst --version**  command to check the unixODBC version in the environment.

-   authentication method 10 not supported.

    If this error occurs on an open-source client, the cause may be:

    The database stores only the SHA-256 hash of the password, but the open-source client supports only MD5 hashes.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   The database stores the hashes of user passwords instead of actual passwords.
    >-   If a password is updated or a user is created, both types of hashes will be stored, compatible with open-source authentication protocols.
    >-   An MD5 hash can only be generated using the original password, but the password cannot be obtained by reversing its SHA-256 hash. Passwords in the old version will only have SHA-256 hashes and not support MD5 authentication.
    >-   The MD5 encryption algorithm has lower security and poses security risks. Therefore, you are advised to use a more secure encryption algorithm.

    To solve this problem, you can update the user password \(see  [ALTER USER](../SQLReference/alter-user.md)\) or create a user \(see  [CREATE USER](../SQLReference/create-user.md)\) having the same permissions as the faulty user.

-   unsupported frontend protocol 3.51: server supports 1.0 to 3.0

    The database version is too early or the database is an open-source database. Use the driver of the required version to connect to the database.

-   FATAL:  GSS authentication method is not allowed because XXXX user password is not disabled.

    In  **pg\_hba.conf**  of the target primary database node, the authentication mode is set to  **gss**  for authenticating the IP address of the current client. However, this authentication algorithm cannot authenticate clients. Change the authentication algorithm to  **sha256**  and try again. For details, see  [8](#en-us_topic_0283136654_en-us_topic_0237120407_en-us_topic_0059778464_l4c0173b8af93447e91aba24005e368e5).


