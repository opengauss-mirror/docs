# gs\_om<a name="ZH-CN_TOPIC_0249632260"></a>

## Background<a name="section431817462"></a>

openGauss provides the gs\_om tool to help maintain the database, including starting the openGauss, stopping the openGauss, querying the openGauss status, querying the static configuration, generating the static configuration file, querying the openGauss status details, generating the dynamic configuration file, replacing the SSL certificate, and displaying the help information and version number.

## Prerequisites <a name="section1372118241094"></a>

Log in to the OS as the OS user **omm** to run the **gs\_om** command.

## Syntax <a name="section1241317667"></a>

-   Start openGauss.

    ```
    gs_om -t start [-h HOSTNAME] [-D dataDir] [--time-out=SECS] [--security-mode=MODE] [--cluster-number=None] [-l LOGFILE]
    ```

-   Stop openGauss.

    ```
    gs_om -t stop [-h HOSTNAME] [-D dataDir]  [--time-out=SECS] [-m MODE] [-l LOGFILE] 
    ```

-   Restart openGauss.

    ```
    gs_om -t restart [-h HOSTNAME] [-D dataDir] [--time-out=SECS] [--security-mode=MODE] [-l LOGFILE] [-m MODE]
    ```

-   Query the openGauss status.

    ```
    gs_om -t status [-h HOSTNAME] [-o OUTPUT] [--detail] [--all] [-l LOGFILE]
    ```

- Generate a static configuration file.

  ```
  gs_om -t generateconf -X XMLFILE [--distribute] [-l LOGFILE]
  gs_om -t generateconf --old-values=old --new-values=new [--distribute] [-l LOGFILE]
  ```

-   Generate a dynamic configuration file. Perform this operation after the failover or switchover from the standby node to the primary node.

    ```
    gs_om -t refreshconf
    ```

-   Display the static configurations.

    ```
    gs_om -t view [-o OUTPUT]
    ```

-   Query openGauss status details.

    ```
    gs_om -t query [-o OUTPUT]
    ```

-   Replace SSL certificates.

    ```
    gs_om -t cert --cert-file=CERTFILE [-l LOGFILE]
    gs_om -t cert --rollback
    ```

-   Enable or disable the Kerberos authentication in the database.

    ```
    gs_om -t kerberos -m [install|uninstall] -U USER [-l LOGFILE] [--krb-client|--krb-server]
    ```

-   Display help information.

    ```
    gs_om -? | --help
    ```

-   Display the version number.

    ```
    gs_om -V | --version
    ```


## Parameter Description<a name="section012816161027"></a>

The **gs\_om** tool can use the following types of parameters:

-   Common parameters
    -   -t

        Specifies the **gs\_om** command type.

        Value range: **start**, **stop**, **status**, **generateconf**, **cert**, **view**, **query**, **refreshconf**, and **kerberos**

    -   -l

        Specifies a log file and its storage path.

        Default value: *$GAUSSLOG***/om/gs\_om-***YYYY-MM-DD\_hhmmss***.log** (default value for **virtualip**: **/tmp/gs\_virtualip/gs\_om-***YYYY-MM-DD\_hhmmss***.log**)

    -   -?, --help

        Displays help information.

    -   -V, --version

        Displays version information.


-   Parameters for starting the openGauss:
    -   -h

        Specifies the name of the server to be started. Only one server can be started at a time.

        Value range: a server name

        If no server name is specified, openGauss is started.

    -   -D

        Specifies the path of the database node.

        Value range: database node path.

        If the database node path is not specified, the database node path in the static file is used.

        ![](public_sys-resources/icon-note.gif) **NOTE:** 
        For a cluster where the CM tool is deployed, if the **-D** parameter is specified when you start or stop a single instance, only the database process is started or stopped, and the CM process is not affected.
        
        Assume that the database and CM processes of the current instance are stopped. If the **-D** parameter is specified when the instance is started, only the database process will be started. In this case, the database process fails to be started because the CM process does not exist. You can remove the **-D** parameter to start the entire instance.

    -   --time-out=SECS

        Specifies the timeout threshold. **gs_om** exits when times out. (Unit: second)

        Value range: a positive integer. The recommended value is **300**.

        Default value: **300**

    -   --security-mode

        Specifies whether to start the database in security mode.

        Value range:

        -   **on**: security mode enabled
        -   **off**: security mode disabled. By default, the security mode is disabled.

    -   --cluster-number
        
        Specifies the kernel running version during startup.

        Value range: kernel version


-   Parameters for stopping the openGauss:
    -   -h

        Specifies the name of the server where the instance to be stopped is located. Only one server can be stopped at a time.

        Value range: the name of the server where the instance is located.

        If no server name is specified, openGauss is stopped.

    -   -m, --mode=MODE

        Sets the stop mode.

        Value range: the following stop modes are supported.

        -   fast: The data of the primary and standby instance relationship is ensured to be consistent.
        -   **immediate**: The data of the primary and standby instance relationship is not ensured to be consistent.

        Default value: **fast**

    -   --time-out=SECS

        Specifies the timeout threshold. **gs_om** exits when times out. (Unit: second)

        Value range: a positive integer. The recommended value is **300**.

        Default value: **300**


-   Parameters for checking the status:

    [Table 1](#table1171617665) describes parameters in the query result.

    -   -h

        Specifies the name of the server to be queried.

        Value range: a server name.

        If no server is specified, openGauss is queried.

    -   --az

        Specifies the name of the AZ to be queried, for example, **--az=AZ1**.

        Value: name of the AZ. If no AZ name is specified, all AZs are queried.

    -   -o

        Outputs status information to the specified output file.

        If the parameter is not output to the specified file, it is displayed on the screen.
    
    -   --detail
    
        Displays detailed information. If the parameter is not specified, only a prompt is displayed indicating whether the server is normal. 
        
        You can run the **gs_ctl query** command on each database node to query and summarize the results to obtain the detailed information about openGauss.
        
    -    --all
        
        Displays information about all openGauss nodes.
        
        You can run the **gsql **command on each database node to query the system catalog and summarize the results to obtain information about all openGauss nodes. Ensure that **gsql **can be used to query the correct information before using this parameter.


-   Parameters for generating the configuration file:
    -   -X

        Specifies the path of the openGauss configuration file.

        Value range: path of the *clusterconfig.xml* file

    - --old-values=old

      Specifies the old value in the static file to be modified.
    
      Value range: **port**, **ip**, **hostname**. You can enter multiple values and separate them with commas (,).
    
    - --new-values=new
    
      Specifies the new value in the static file to be modified.
    
      Value range: **port**, **ip**, **hostname**. You can enter multiple values and separate them with commas (,). The values correspond to **old-values**.
    
    -   --distribute
    
        Publishes the static configuration file to the installation directory of the openGauss instance.


-   Enable or disable the Kerberos authentication in the database:
    -   -U

        Specifies a database deployment user.

        Value range: a database deployment user

    -   -m

        Specifies the operation to be performed.

        Value range:

        **install**: enables the Kerberos authentication in a database.

        **uninstall**: disables the Kerberos authentication in a database.

    -   --**krb-server**: installs the Kerberos server authentication.
    -   --**krb-client**: installs the Kerberos client authentication.

        Note: You need to use **--krb-server** to install the server authentication first. These two parameters are not required during the uninstallation because the server and client are uninstalled at the same time.


-   Parameters for replacing the SSL certificate:
    -   --cert-file

        Specifies the path of the local SSL certificate .zip package.

    - --rollback

      The certificate is rolled back to the last successfully backup status.
    
    - -L
    
      If this parameter is specified, the operation is performed only on the current node.



**Table 1** Status description

<a name="table1171617665"></a>
<table><thead align="left"><tr id="row918131719617"><th class="cellrowborder" valign="top" width="19.05%" id="mcps1.2.4.1.1"><p id="p18181171612"><a name="p18181171612"></a><a name="p18181171612"></a>Column</p>
</th>
<th class="cellrowborder" valign="top" width="24.87%" id="mcps1.2.4.1.2"><p id="p18185171620"><a name="p18185171620"></a><a name="p18185171620"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="56.08%" id="mcps1.2.4.1.3"><p id="p141817173612"><a name="p141817173612"></a><a name="p141817173612"></a>Value</p>
</th>
</tr>
</thead>
<tbody><tr id="row1181917465"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p51816176618"><a name="p51816176618"></a><a name="p51816176618"></a>cluster_state</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="p719161711614"><a name="p719161711614"></a><a name="p719161711614"></a><span id="text1519617664"><a name="text1519617664"></a><a name="text1519617664"></a>openGauss</span> status, which indicates whether the <span id="text16191179612"><a name="text16191179612"></a><a name="text16191179612"></a>openGauss</span> is running properly.</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><a name="ul13193171467"></a><a name="ul13193171467"></a><ul id="ul13193171467"><li><strong>Normal</strong>: <span id="text620117961"><a name="text620117961"></a><a name="text620117961"></a>openGauss</span> is available and the data has redundancy backup. All the processes are running and the primary-standby relationship is normal. </li><li><strong>Unavailable</strong>: <span id="text5209175619"><a name="text5209175619"></a><a name="text5209175619"></a>openGauss</span> is unavailable. </li><li><strong>Degraded</strong>: <span id="text16202171464"><a name="text16202171464"></a><a name="text16202171464"></a>openGauss</span> is available but the data does not have redundancy backup.</li></ul>
</td>
</tr>
<tr id="row020217369"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p8213171167"><a name="p8213171167"></a><a name="p8213171167"></a>redistributing</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="p14211017768"><a name="p14211017768"></a><a name="p14211017768"></a>Data redistribution status.</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><a name="ul14218176612"></a><a name="ul14218176612"></a><ul id="ul14218176612"><li><strong>Yes</strong>: <span id="text42111171767"><a name="text42111171767"></a><a name="text42111171767"></a>openGauss</span> is in data redistribution status. </li><li><strong>No</strong>: <span id="text16241517961"><a name="text16241517961"></a><a name="text16241517961"></a>openGauss</span> is not in data redistribution status.</li></ul>
</td>
</tr>
<tr id="row62461715613"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p4241317861"><a name="p4241317861"></a><a name="p4241317861"></a>balanced</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="p22431718616"><a name="p22431718616"></a><a name="p22431718616"></a>Balance status. It indicates whether a primary/standby switchover has occurred in the <span id="text16241317368"><a name="text16241317368"></a><a name="text16241317368"></a>openGauss</span> and made the host load unbalanced.</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><a name="ul19241171064"></a><a name="ul19241171064"></a><ul id="ul19241171064"><li><strong>Yes</strong>: The host loading is balanced in <span id="text1248171568"><a name="text1248171568"></a><a name="text1248171568"></a>openGauss</span>. </li><li><strong>No</strong>: The host loading is not balanced in <span id="text9254171960"><a name="text9254171960"></a><a name="text9254171960"></a>openGauss</span>.</li></ul>
</td>
</tr>
<tr id="row1525317264"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p12581718613"><a name="p12581718613"></a><a name="p12581718613"></a>node</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="p92519171668"><a name="p92519171668"></a><a name="p92519171668"></a>Host name.</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><p id="p192515171964"><a name="p192515171964"></a><a name="p192515171964"></a>Name of the host where the instance is located. If there are multiple AZs, the AZ ID of the host will be displayed.</p>
</td>
</tr>
<tr id="row122515171668"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p19265171463"><a name="p19265171463"></a><a name="p19265171463"></a>node_ip</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="p192614174612"><a name="p192614174612"></a><a name="p192614174612"></a>Host IP address.</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><p id="p15261017061"><a name="p15261017061"></a><a name="p15261017061"></a>IP address of the host where the instance is located.</p>
</td>
</tr>
<tr id="row626181719616"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p192612176611"><a name="p192612176611"></a><a name="p192612176611"></a>instance</p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="p192611176616"><a name="p192611176616"></a><a name="p192611176616"></a>Instance ID.</p>
</td>
<td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><p id="p7268178613"><a name="p7268178613"></a><a name="p7268178613"></a>Instance ID.</p>
</td>
</tr>
<tr id="row11262171166"><td class="cellrowborder" valign="top" width="19.05%" headers="mcps1.2.4.1.1 "><p id="p2271417062"><a name="p2271417062"></a><a name="p2271417062"></a>state</p>
<p id="p14821350153410"><a name="p14821350153410"></a><a name="p14821350153410"></a></p>
</td>
<td class="cellrowborder" valign="top" width="24.87%" headers="mcps1.2.4.1.2 "><p id="p172731718619"><a name="p172731718619"></a><a name="p172731718619"></a>Instance status.</p>
</td>
The initial role of the <td class="cellrowborder" valign="top" width="56.08%" headers="mcps1.2.4.1.3 "><a name="ul14274171168"></a><a name="ul14274171168"></a><ul id="ul14274171168"><li><strong>P</strong>: The initial role of the node is <strong>Primary</strong>. After the database is installed, the role does not change and is read from the system static file. </li><li><strong>S</strong>: The initial role of the node is <strong>Standby</strong>. After the database is installed, the role does not change and is read from the system static file. </li><li><strong>C</strong>: The initial role of the node is <strong>Cascade Standby</strong>. After the database is installed, the role does not change and is read from the system static file. </li><li><strong>Primary</strong>: The instance is a primary instance. </li><li><strong>Standby</strong>: The instance is the standby. </li><li><strong>Cascade Standby</strong>: The instance is a cascaded standby instance. </li><li><strong>Pending</strong>: The instance is in the quorum phase. </li><li><strong>Unknown</strong>: The instance status is unknown. </li><li><strong>Down</strong>: The instance is down.</li></ul>
</td>
</tr>
</tbody>
</table>


**Table 2** Feature ID description

<a name="table1129417968"></a>
<table><thead align="left"><tr id="row163017171462"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p43010171265"><a name="p43010171265"></a><a name="p43010171265"></a>Feature Name</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p730201711618"><a name="p730201711618"></a><a name="p730201711618"></a>Feature ID</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p1731817867"><a name="p1731817867"></a><a name="p1731817867"></a><span id="text1631617164"><a name="text1631617164"></a><a name="text1631617164"></a>openGauss</span> Product</p>
</th>
</tr>
</thead>
<tbody><tr id="row16311717760"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16326171465"><a name="p16326171465"></a><a name="p16326171465"></a>Multi-value column</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p10322017260"><a name="p10322017260"></a><a name="p10322017260"></a>0</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p73241719613"><a name="p73241719613"></a><a name="p73241719613"></a>Basic edition</p>
</td>
</tr>
<tr id="row73213171562"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13341713616"><a name="p13341713616"></a><a name="p13341713616"></a>JSON</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p83311177618"><a name="p83311177618"></a><a name="p83311177618"></a>1</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p7339174615"><a name="p7339174615"></a><a name="p7339174615"></a>License control not supported</p>
</td>
</tr>
<tr id="row13317171368"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p6331217968"><a name="p6331217968"></a><a name="p6331217968"></a>XML</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p163312174610"><a name="p163312174610"></a><a name="p163312174610"></a>2</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1734181713611"><a name="p1734181713611"></a><a name="p1734181713611"></a>Not supported</p>
</td>
</tr>
<tr id="row1234717868"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p73412172613"><a name="p73412172613"></a><a name="p73412172613"></a>Data storage format ORC</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1834517061"><a name="p1834517061"></a><a name="p1834517061"></a>3</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p034131719611"><a name="p034131719611"></a><a name="p034131719611"></a>Basic edition</p>
</td>
</tr>
<tr id="row143441715615"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13420171616"><a name="p13420171616"></a><a name="p13420171616"></a></p>
<p id="p19346172618"><a name="p19346172618"></a><a name="p19346172618"></a>One primary and multiple readable standbys on single-node
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p123418171266"><a name="p123418171266"></a><a name="p123418171266"></a>5</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p93513171662"><a name="p93513171662"></a><a name="p93513171662"></a>Invalid</p>
</td>
</tr>
<tr id="row7355171063"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5351171562"><a name="p5351171562"></a><a name="p5351171562"></a>Multidimensional collision and analysis (GPU acceleration)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1135141718619"><a name="p1135141718619"></a><a name="p1135141718619"></a>7</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2359178613"><a name="p2359178613"></a><a name="p2359178613"></a>Advanced feature</p>
</td>
</tr>
<tr id="row03541715612"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p0353174612"><a name="p0353174612"></a><a name="p0353174612"></a>Fulltext index</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p20351217568"><a name="p20351217568"></a><a name="p20351217568"></a>8</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p193661715614"><a name="p193661715614"></a><a name="p193661715614"></a>Basic edition</p>
</td>
</tr>
<tr id="row7361317666"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p53661713617"><a name="p53661713617"></a><a name="p53661713617"></a>EXTENSION_CONNECTOR</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p23617171966"><a name="p23617171966"></a><a name="p23617171966"></a>9</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p136131710617"><a name="p136131710617"></a><a name="p136131710617"></a>Basic edition</p>
</td>
</tr>
<tr id="row183610171860"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p203618178616"><a name="p203618178616"></a><a name="p203618178616"></a>EXPRESS_CLUSTER</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p637201715619"><a name="p637201715619"></a><a name="p637201715619"></a>12</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p10378171766"><a name="p10378171766"></a><a name="p10378171766"></a>Advanced edition</p>
</td>
</tr>
<tr id="row2378176619"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1037171715616"><a name="p1037171715616"></a><a name="p1037171715616"></a>Cross-DC collaboration</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p183711171766"><a name="p183711171766"></a><a name="p183711171766"></a>13</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p638191718619"><a name="p638191718619"></a><a name="p638191718619"></a>Advanced edition</p>
</td>
</tr>
<tr id="row133816171762"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p203811713619"><a name="p203811713619"></a><a name="p203811713619"></a>Figure</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p14387178612"><a name="p14387178612"></a><a name="p14387178612"></a>14</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1838171720617"><a name="p1838171720617"></a><a name="p1838171720617"></a>Not supported</p>
</td>
</tr>
<tr id="row153919171068"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p33912171465"><a name="p33912171465"></a><a name="p33912171465"></a>Time sequence</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p12397179611"><a name="p12397179611"></a><a name="p12397179611"></a>15</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p17392017069"><a name="p17392017069"></a><a name="p17392017069"></a>Not supported</p>
</td>
</tr>
<tr id="row1339417366"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1240131714616"><a name="p1240131714616"></a><a name="p1240131714616"></a>PostGis interconnection</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p0408171861"><a name="p0408171861"></a><a name="p0408171861"></a>16</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p164019171665"><a name="p164019171665"></a><a name="p164019171665"></a>Basic edition</p>
</td>
</tr>
<tr id="row14401817865"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p184019175620"><a name="p184019175620"></a><a name="p184019175620"></a><span id="text144112171862"><a name="text144112171862"></a><a name="text144112171862"></a>openGauss</span>HA in openGauss (one primary and multiple standbys)</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p14414171960"><a name="p14414171960"></a><a name="p14414171960"></a>17</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p7411317863"><a name="p7411317863"></a><a name="p7411317863"></a>Invalid</p>
</td>
</tr>
<tr id="row1141181717616"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p9418173617"><a name="p9418173617"></a><a name="p9418173617"></a>Row-level permission control </p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18411517865"><a name="p18411517865"></a><a name="p18411517865"></a>18</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1042201712615"><a name="p1042201712615"></a><a name="p1042201712615"></a>Advanced edition</p>
</td>
</tr>
<tr id="row1042101712611"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1642181712615"><a name="p1642181712615"></a><a name="p1642181712615"></a>Transparent encryption </p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p042191720611"><a name="p042191720611"></a><a name="p042191720611"></a>19</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p144215171365"><a name="p144215171365"></a><a name="p144215171365"></a>Advanced edition</p>
</td>
</tr>
<tr id="row4421817165"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p5421217169"><a name="p5421217169"></a><a name="p5421217169"></a>Private table </p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p144231714618"><a name="p144231714618"></a><a name="p144231714618"></a>20</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1643191710613"><a name="p1643191710613"></a><a name="p1643191710613"></a>Advanced edition</p>
</td>
</tr>
</tbody>
</table>

## Examples<a name="section2433171169"></a>

-   Start openGauss.

    ```
    gs_om -t start
    Starting cluster.
    ======================================================================
    .
    ======================================================================
    
    Successfully started .
    ```

- Stop openGauss.

  ```
  gs_om -t stop
  Stopping cluster.
  =========================================
  Successfully stopped cluster.
  =========================================
  End stop cluster.
  ```

- View openGauss status details, including instance status.

  ```
  gs_om -t status --detail

    [   Cluster State   ]

    cluster_state   : Normal
    redistributing  : No
    current_az      : AZ_ALL

    [  Datanode State   ]

  node                              node_ip         port                 instance                                   state
  -----------------------------------------------------------------------------------------------------------------
  1  pekpopgsci00235  10.244.62.204    5432      6001 /opt/gaussdb/cluster/data/dn1   P Primary Normal
  2  pekpopgsci00238  10.244.61.81      5432      6002 /opt/gaussdb/cluster/data/dn1   S Standby Normal
 
  ```

- Run the following command on openGauss to generate the configuration file.

  ```
  gs_om -t generateconf -X  /opt/software/openGauss/clusterconfig.xml  --distribute
  Generating static configuration files for all nodes.
  Creating temp directory to store static configuration files.
  Successfully created the temp directory.
  Generating static configuration files.
  Successfully generated static configuration files.
  Static configuration files for all nodes are saved in /opt/opengauss/Bigdata/gaussdb/wisequery/script/static_config_files.
  Distributing static configuration files to all nodes.
  Successfully distributed static configuration files.
  ```

- Run the following command on openGauss to modify the configuration file. To modify a dynamic configuration file, run the **gs\_om -t refreshconf** command and modify the GUC parameter to make the actual port or IP address take effect.

  ```
  gs_om -t generateconf --old-values=26000,192.168.1.1  --new-values=36000,192.168.1.2  --distribute
  Generating static configuration files for all nodes.
  Creating temp directory to store static configuration files.
  Successfully created the temp directory.
  Generating static configuration files.
  Successfully generated static configuration files.
  Static configuration files for all nodes are saved in /opt/huawei/Bigdata/gaussdb/wisequery/script/static_config_files.
  Distributing static configuration files to all nodes.
  Successfully distributed static configuration files.
  ```

  Open the generated configuration file directory. You can see three new files.

  ```
  cd /opt/opengauss/Bigdata/gaussdb/wisequery/script/static_config_files
  ll
  total 456
  -rwxr-xr-x 1 omm dbgrp 155648 2016-07-13 15:51 cluster_static_config_plat1
  -rwxr-xr-x 1 omm dbgrp 155648 2016-07-13 15:51 cluster_static_config_plat2
  -rwxr-xr-x 1 omm dbgrp 155648 2016-07-13 15:51 cluster_static_config_plat3
  ```

-   Roll back SSL certificates.

    ```
    gs_om -t cert --rollback 
    [plat1] SSL cert files rollback successfully.
    [plat2] SSL cert files rollback successfully.
    [plat3] SSL cert files rollback successfully.
    ```

-   Register a license.

    ```
    gs_om -t license -m register -f MTgsMTkK  
    Preparing for the program initialization.
    Lock the OPS operation of OM components.
    Check and make sure the consistency of the license file.
    Backup the license file on all of the cluster hosts.
    Encrypt the product feature information and generate the license file.
    Send message to the *database node* instances to reload the license file.
    Remove the backup license file on all of the cluster hosts.
    License register successfully.
    ```

-   Deregister a license.

    ```
    gs_om -t license -m unregister -f MTgsMTkK
    Preparing for the program initialization.
    Lock the OPS operation of OM components.
    Check and make sure the consistency of the license file.
    Backup the license file on all of the cluster hosts.
    Encrypt the product feature information and generate the license file.
    Send message to the *database node* instances to reload the license file.
    Remove the backup license file on all of the cluster hosts.
    License unregister successfully.
    ```
