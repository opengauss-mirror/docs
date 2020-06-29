# Disabling the OS Firewall<a name="EN-US_TOPIC_0249784527"></a>

To ensure that the openGauss can work properly when the firewall is enabled, related services, protocols, IP addresses, and ports need to be added to the firewall whitelist of each host in the openGauss.

Take openEuler OS as an example. Assume that the openGauss information is listed in  [Table 1](#en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_table4312170510523).

**Table  1**  Information of openGauss

<a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_table4312170510523"></a>
<table><thead align="left"><tr id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_row3906252510523"><th class="cellrowborder" valign="top" width="19.36%" id="mcps1.2.4.1.1"><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p2242248110523"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p2242248110523"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p2242248110523"></a>Host Name</p>
</th>
<th class="cellrowborder" valign="top" width="30.64%" id="mcps1.2.4.1.2"><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p43549248144742"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p43549248144742"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p43549248144742"></a>Internal IP Address</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.4.1.3"><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p428167710523"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p428167710523"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p428167710523"></a>External IP Address</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_row3853509710523"><td class="cellrowborder" valign="top" width="19.36%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p3433512010523"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p3433512010523"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p3433512010523"></a>plat1</p>
</td>
<td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p37828238144742"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p37828238144742"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p37828238144742"></a>192.168.0.11</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p2968135610523"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p2968135610523"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p2968135610523"></a>10.10.0.11</p>
</td>
</tr>
<tr id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_row6580562010523"><td class="cellrowborder" valign="top" width="19.36%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p2865497810523"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p2865497810523"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p2865497810523"></a>plat2</p>
</td>
<td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p44188448144742"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p44188448144742"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p44188448144742"></a>192.168.0.12</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p40149025111953"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p40149025111953"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p40149025111953"></a>10.10.0.12</p>
</td>
</tr>
<tr id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_row1862231610523"><td class="cellrowborder" valign="top" width="19.36%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p3201261810523"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p3201261810523"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p3201261810523"></a>plat3</p>
</td>
<td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p22494559144742"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p22494559144742"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p22494559144742"></a>192.168.0.13</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p4288526910523"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p4288526910523"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p4288526910523"></a>10.10.0.13</p>
</td>
</tr>
<tr id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_row45383578144959"><td class="cellrowborder" valign="top" width="19.36%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p5799022144959"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p5799022144959"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p5799022144959"></a>plat4</p>
</td>
<td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p67067662144959"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p67067662144959"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p67067662144959"></a>192.168.0.14</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p63771559144959"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p63771559144959"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p63771559144959"></a>10.10.0.14</p>
</td>
</tr>
<tr id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_row8271151181015"><td class="cellrowborder" valign="top" width="19.36%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p65983533181015"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p65983533181015"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p65983533181015"></a>Management network</p>
</td>
<td class="cellrowborder" valign="top" width="30.64%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p43065967181015"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p43065967181015"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p43065967181015"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p65791326181015"><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p65791326181015"></a><a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_p65791326181015"></a>10.10.64.236</p>
</td>
</tr>
</tbody>
</table>

## Procedure<a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_section1388712913618"></a>

Currently, EulerOS can be installed only when the firewall is disabled.

1.  Check whether the firewall is disabled.

    ```
    systemctl status firewalld
    ```

    If the firewall is not disabled, go to  [2](#en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_li11887129193617).

    If the firewall is disabled, skip  [2](#en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_li11887129193617).

2.  <a name="en-us_topic_0241802566_en-us_topic_0085434636_en-us_topic_0059782018_li11887129193617"></a>Disable the firewall.

    ```
    systemctl disable firewalld.service
    systemctl stop firewalld.service
    ```

3.  Set the value of  **SELINUX**  in the  **/etc/selinux/config**  file to  **disabled**.
    1.  Run the  **vim**  command to open the  **config**  file.

        ```
        vim /etc/selinux/config
        ```

    2.  Set the value of  **SELINUX**  to  **disabled**.

        ```
        SELINUX=disabled
        ```

4.  Restart the OS.

    ```
    reboot
    ```

5.  Repeat steps 1 to 3 on other hosts.

