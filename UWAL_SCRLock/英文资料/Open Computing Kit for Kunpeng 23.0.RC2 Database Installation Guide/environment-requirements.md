# Environment Requirements<a name="EN-US_TOPIC_0000001616421770"></a>

<a name="table9128736162712"></a>
<table><thead align="left"><tr id="row71292036182713"><th class="cellrowborder" valign="top" width="15.010000000000002%" id="mcps1.1.4.1.1"><p id="p1376431594919"><a name="p1376431594919"></a><a name="p1376431594919"></a>Item</p>
</th>
<th class="cellrowborder" valign="top" width="47.63%" id="mcps1.1.4.1.2"><p id="p1012923612711"><a name="p1012923612711"></a><a name="p1012923612711"></a>Configuration</p>
</th>
<th class="cellrowborder" valign="top" width="37.36%" id="mcps1.1.4.1.3"><p id="p6129133622718"><a name="p6129133622718"></a><a name="p6129133622718"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row667355411393"><td class="cellrowborder" valign="top" width="15.010000000000002%" headers="mcps1.1.4.1.1 "><p id="p9764141514918"><a name="p9764141514918"></a><a name="p9764141514918"></a>Network adapter</p>
</td>
<td class="cellrowborder" valign="top" width="47.63%" headers="mcps1.1.4.1.2 "><p id="p1543012207413"><a name="p1543012207413"></a><a name="p1543012207413"></a>The model is subject to the actual environment, for example, Mellanox CX4/CX5 NICs.</p>
</td>
<td class="cellrowborder" valign="top" width="37.36%" headers="mcps1.1.4.1.3 "><p id="p66743541395"><a name="p66743541395"></a><a name="p66743541395"></a>It must support RDMA and Ethernet, and the RDMA protocol must be enabled. For details, refer to the <em id="i625283015611"><a name="i625283015611"></a><a name="i625283015611"></a>RDMA Network Guide</em>.</p>
</td>
</tr>
<tr id="row9245245530"><td class="cellrowborder" valign="top" width="15.010000000000002%" headers="mcps1.1.4.1.1 "><p id="p152468415531"><a name="p152468415531"></a><a name="p152468415531"></a>Switch</p>
</td>
<td class="cellrowborder" valign="top" width="47.63%" headers="mcps1.1.4.1.2 "><p id="p14246134145318"><a name="p14246134145318"></a><a name="p14246134145318"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="37.36%" headers="mcps1.1.4.1.3 "><a name="ul108220398209"></a><a name="ul108220398209"></a><ul id="ul108220398209"><li>To enable the RDMA protocol, configure a lossless network.</li><li>You do not need to configure a lossless network for the TCP protocol.</li></ul>
</td>
</tr>
<tr id="row128756223532"><td class="cellrowborder" valign="top" width="15.010000000000002%" headers="mcps1.1.4.1.1 "><p id="p14875172275315"><a name="p14875172275315"></a><a name="p14875172275315"></a>Server</p>
</td>
<td class="cellrowborder" valign="top" width="47.63%" headers="mcps1.1.4.1.2 "><p id="p4875172214532"><a name="p4875172214532"></a><a name="p4875172214532"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="37.36%" headers="mcps1.1.4.1.3 "><a name="ul17986113313204"></a><a name="ul17986113313204"></a><ul id="ul17986113313204"><li>To enable the RDMA protocol, configure a lossless network.</li><li>You do not need to configure a lossless network for the TCP protocol.</li></ul>
</td>
</tr>
<tr id="row1275520213315"><td class="cellrowborder" valign="top" width="15.010000000000002%" headers="mcps1.1.4.1.1 "><p id="p1358995611515"><a name="p1358995611515"></a><a name="p1358995611515"></a>OS</p>
</td>
<td class="cellrowborder" valign="top" width="47.63%" headers="mcps1.1.4.1.2 "><a name="ul712016229541"></a><a name="ul712016229541"></a><ul id="ul712016229541"><li>Arm<a name="ul39267573548"></a><a name="ul39267573548"></a><ul id="ul39267573548"><li>openEuler 22.03 LTS</li><li>openEuler 20.03 LTS</li></ul>
</li></ul>
<a name="ul2076474310540"></a><a name="ul2076474310540"></a><ul id="ul2076474310540"><li>x86<a name="ul861716917558"></a><a name="ul861716917558"></a><ul id="ul861716917558"><li>openEuler 22.03 LTS</li><li>openEuler 20.03 LTS</li><li>CentOS 7.6 x86</li></ul>
</li></ul>
</td>
<td class="cellrowborder" valign="top" width="37.36%" headers="mcps1.1.4.1.3 "><p id="p0498201244918"><a name="p0498201244918"></a><a name="p0498201244918"></a>-</p>
</td>
</tr>
<tr id="row14188461493"><td class="cellrowborder" rowspan="3" valign="top" width="15.010000000000002%" headers="mcps1.1.4.1.1 "><p id="p7764131510492"><a name="p7764131510492"></a><a name="p7764131510492"></a>Software</p>
</td>
<td class="cellrowborder" valign="top" width="47.63%" headers="mcps1.1.4.1.2 "><p id="p18248418496"><a name="p18248418496"></a><a name="p18248418496"></a>MLNX_OFED_LINUX-5.8-1.1.2.1</p>
</td>
<td class="cellrowborder" valign="top" width="37.36%" headers="mcps1.1.4.1.3 "><p id="p62424113494"><a name="p62424113494"></a><a name="p62424113494"></a>To enable the RDMA protocol, install the RDMA NIC driver.</p>
</td>
</tr>
<tr id="row4504109124916"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><a name="ul1724961323"></a><a name="ul1724961323"></a><ul id="ul1724961323"><li>GCC 7.3</li><li>GCC 10.3</li></ul>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p165046974919"><a name="p165046974919"></a><a name="p165046974919"></a>-</p>
</td>
</tr>
<tr id="row109111629908"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><a name="ul17257184001813"></a><a name="ul17257184001813"></a><ul id="ul17257184001813"><li>OCK_UWAL_23.0.0_centos-7.6-x86_64_gcc10.tar.gz</li><li>OCK_UWAL_23.0.0_centos-7.6-x86_64_gcc7.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_20.03-aarch64_gcc10.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_20.03-aarch64_gcc7.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_20.03-x86_64_gcc10.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_20.03-x86_64_gcc7.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_22.03-aarch64_gcc10.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_22.03-aarch64_gcc7.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_22.03-x86_64_gcc10.tar.gz</li><li>OCK_UWAL_23.0.0_openeuler_22.03-x86_64_gcc7.tar.gz</li></ul>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="p109125294014"><a name="p109125294014"></a><a name="p109125294014"></a>UWAL installation package. In the package names, <strong id="b11128053133418"><a name="b11128053133418"></a><a name="b11128053133418"></a>openeuler_22.03</strong>/<strong id="b367317550344"><a name="b367317550344"></a><a name="b367317550344"></a>centos-7.6</strong> indicates the OS, <strong id="b1675782619352"><a name="b1675782619352"></a><a name="b1675782619352"></a>aarch64</strong>/<strong id="b1993252911351"><a name="b1993252911351"></a><a name="b1993252911351"></a>x86_64</strong> indicates the server architecture, and <strong id="b8731163933514"><a name="b8731163933514"></a><a name="b8731163933514"></a>gcc10</strong>/<strong id="b125024419358"><a name="b125024419358"></a><a name="b125024419358"></a>gcc7</strong> indicates the GCC version on which the package depends. Select a UWAL installation package as required.</p>
</td>
</tr>
</tbody>
</table>

