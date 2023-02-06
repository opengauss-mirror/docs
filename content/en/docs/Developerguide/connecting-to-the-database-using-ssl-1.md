# Connecting to the Database \(Using SSL\)<a name="EN-US_TOPIC_0000001127066489"></a>

When you use psycopy2 to connect to the GaussDB Kernel server, you can enable SSL to encrypt the communication between the client and server. To enable SSL, you must have the server certificate, client certificate, and private key files. For details on how to obtain these files, see related documents and commands of OpenSSL.

1. Use the .ini file \(the **configparser** package of Python can parse this type of configuration file\) to save the configuration information about the database connection.

   The file content is as follows: 
    ```
    [opengauss]  
    host=localhost
    database=postgres  
    user=omm
    password=test
    ```
2. Add SSL connection parameters **sslmode**, **sslcert**, **sslkey**, and **sslrootcert** to the connection options. 
    a.  **sslmode**: [Table 1](#table167989176183) 
    b.  **sslcert**: client certificate path 
    c.  **sslkey**: client key path 
    d.  **sslrootcert**: root certificate path

3. Use the **psycopg2.connect** function to obtain the connection object. 
    ```python
    from configparser import ConfigParser
    import psycopg2
    parser = ConfigParser()
    parser.read('database.ini')
    parameters = dict()
    for parameter, value in parser.items('opengauss'):
        parameters[parameter] = value
    connection = psycopg2.connect(**parameters)
   ```
4. Use the connection object to create a cursor object. 
    ```python
    cursor = connection.cursor()
    ```

**Table  1**  sslmode options

<a name="table167989176183"></a>
<table><thead align="left"><tr id="row137980170181"><th class="cellrowborder" valign="top" width="19.671967196719674%" id="mcps1.2.4.1.1"><p id="p1779912176188"><a name="p1779912176188"></a><a name="p1779912176188"></a>sslmode</p>
</th>
<th class="cellrowborder" valign="top" width="27.362736273627362%" id="mcps1.2.4.1.2"><p id="p16799101711180"><a name="p16799101711180"></a><a name="p16799101711180"></a>Whether SSL Encryption Is Enabled</p>
</th>
<th class="cellrowborder" valign="top" width="52.96529652965296%" id="mcps1.2.4.1.3"><p id="p187991817181812"><a name="p187991817181812"></a><a name="p187991817181812"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row979913177185"><td class="cellrowborder" valign="top" width="19.671967196719674%" headers="mcps1.2.4.1.1 "><p id="p14799171716183"><a name="p14799171716183"></a><a name="p14799171716183"></a>disable</p>
</td>
<td class="cellrowborder" valign="top" width="27.362736273627362%" headers="mcps1.2.4.1.2 "><p id="p10799131751817"><a name="p10799131751817"></a><a name="p10799131751817"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="52.96529652965296%" headers="mcps1.2.4.1.3 "><p id="p107991817121810"><a name="p107991817121810"></a><a name="p107991817121810"></a>SSL connection is not enabled.</p>
</td>
</tr>
<tr id="row19799181719180"><td class="cellrowborder" valign="top" width="19.671967196719674%" headers="mcps1.2.4.1.1 "><p id="p8799131721817"><a name="p8799131721817"></a><a name="p8799131721817"></a>allow</p>
</td>
<td class="cellrowborder" valign="top" width="27.362736273627362%" headers="mcps1.2.4.1.2 "><p id="p1579961710189"><a name="p1579961710189"></a><a name="p1579961710189"></a>Possible</p>
</td>
<td class="cellrowborder" valign="top" width="52.96529652965296%" headers="mcps1.2.4.1.3 "><p id="p879961791818"><a name="p879961791818"></a><a name="p879961791818"></a>If the database server requires SSL connection, SSL connection can be enabled. However, authenticity of the database server will not be verified.</p>
</td>
</tr>
<tr id="row19799417101810"><td class="cellrowborder" valign="top" width="19.671967196719674%" headers="mcps1.2.4.1.1 "><p id="p1979961711181"><a name="p1979961711181"></a><a name="p1979961711181"></a>prefer</p>
</td>
<td class="cellrowborder" valign="top" width="27.362736273627362%" headers="mcps1.2.4.1.2 "><p id="p37991117111814"><a name="p37991117111814"></a><a name="p37991117111814"></a>Possible</p>
</td>
<td class="cellrowborder" valign="top" width="52.96529652965296%" headers="mcps1.2.4.1.3 "><p id="p16799101716188"><a name="p16799101716188"></a><a name="p16799101716188"></a>If the database supports SSL connection, SSL connection is preferred. However, authenticity of the database server will not be verified.</p>
</td>
</tr>
<tr id="row679916170181"><td class="cellrowborder" valign="top" width="19.671967196719674%" headers="mcps1.2.4.1.1 "><p id="p6799917171819"><a name="p6799917171819"></a><a name="p6799917171819"></a>require</p>
</td>
<td class="cellrowborder" valign="top" width="27.362736273627362%" headers="mcps1.2.4.1.2 "><p id="p5799101761818"><a name="p5799101761818"></a><a name="p5799101761818"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="52.96529652965296%" headers="mcps1.2.4.1.3 "><p id="p19799161751816"><a name="p19799161751816"></a><a name="p19799161751816"></a>SSL connection is required and data is encrypted. However, authenticity of the database server will not be verified.</p>
</td>
</tr>
<tr id="row197990172186"><td class="cellrowborder" valign="top" width="19.671967196719674%" headers="mcps1.2.4.1.1 "><p id="p379919177185"><a name="p379919177185"></a><a name="p379919177185"></a>verify-ca</p>
</td>
<td class="cellrowborder" valign="top" width="27.362736273627362%" headers="mcps1.2.4.1.2 "><p id="p7799201712189"><a name="p7799201712189"></a><a name="p7799201712189"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="52.96529652965296%" headers="mcps1.2.4.1.3 "><p id="p1679911711183"><a name="p1679911711183"></a><a name="p1679911711183"></a>The SSL connection must be enabled.</p>
</td>
</tr>
<tr id="row157991617111810"><td class="cellrowborder" valign="top" width="19.671967196719674%" headers="mcps1.2.4.1.1 "><p id="p107991717161817"><a name="p107991717161817"></a><a name="p107991717161817"></a>verify-full</p>
</td>
<td class="cellrowborder" valign="top" width="27.362736273627362%" headers="mcps1.2.4.1.2 "><p id="p679981717180"><a name="p679981717180"></a><a name="p679981717180"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="52.96529652965296%" headers="mcps1.2.4.1.3 "><p id="p17799317131814"><a name="p17799317131814"></a><a name="p17799317131814"></a>The SSL connection must be enabled. Currently, <span id="text159163191612"><a name="text159163191612"></a><a name="text159163191612"></a>openGauss</span> does not support this option.</p>
</td>
</tr>
</tbody>
</table>
