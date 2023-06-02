# Setting a Cgroup<a name="EN-US_TOPIC_0000001147994526"></a>

## Background<a name="section4704103619115"></a>

The core of openGauss resource load management is resource pools. The first step of configuring a resource pool is to configure Cgroups in the environment. For details about Cgroup principles, see the product manual corresponding to your OS. For details about openGauss Cgroups, see  [Viewing Cgroup Information](#en-us_topic_0066854607_s66a16734a4e54c00abaaa1cc44c82c89).

The Class Cgroup is a top-layer Cgroup for database service running.  **DefaultClass**  is a sub-category of the Class Cgroup and is automatically created when a cluster is deployed. The  **Medium**  Cgroup under  **DefaultClass**  contains running jobs that are triggered by the system. Resource configurations of  **Medium**  cannot be modified, and the jobs running on it are not controlled by resource management. Therefore, you are advised to create sub-Class and Workload Cgroups to control resource allocation.

## Prerequisites<a name="section1034014512269"></a>

You are familiar with "Server Tools \> gs\_cgroup" and "Server Tools \> gs\_ssh" in  _Tool Reference_.

## Procedure<a name="en-us_topic_0066854607_section5658359019124"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   To control all the resources in openGauss, you need to create, update, and delete Cgroups on each node. Use  **gs\_ssh**  \(see "Server Tools \> gs\_ssh" in  _Tool Reference_\) to run commands in the steps below.
>-   A Cgroup must be named as follows:
>    -   The names of sub-Class Cgroups and Workload Cgroups cannot contain columns \(:\).
>    -   Cgroups having the same name cannot be created.

**Creating sub-Class and Workload Cgroups**

1.  Log in as the OS user  **omm**  to the primary node of openGauss.
2.  Create sub-Class Cgroups  **class\_a**  and  **class\_b**, and allocate 40% and 20% of Class CPU resources to them, respectively.

    ```
    gs_ssh -c "gs_cgroup -c -S class_a -s 40"
    ```

    ```
    gs_ssh -c "gs_cgroup -c -S class_b -s 20"
    ```

3.  Create Workload Cgroups  **workload\_a1**  and  **workload\_a2**  under  **class\_a**, and allocate 20% and 60% of  **class\_a**  CPU resources to them, respectively.

    ```
    gs_ssh -c "gs_cgroup -c -S class_a -G workload_a1 -g 20 "
    ```

    ```
    gs_ssh -c "gs_cgroup -c -S class_a -G workload_a2 -g 60 "
    ```

4.  Create Workload Cgroups  **workload\_b1**  and  **workload\_b2**  under  **class\_b**, and allocate 50% and 40% of  **class\_b**  CPU resources to them, respectively.

    ```
    gs_ssh -c "gs_cgroup -c -S class_b -G workload_b1 -g 50 "
    ```

    ```
    gs_ssh -c "gs_cgroup -c -S class_b -G workload_b2 -g 40 "
    ```


**Adjusting resource quotas for Cgroups**

1.  Change the CPU resource quota for  **class\_a**  to 30%.

    ```
    gs_ssh -c "gs_cgroup -u -S class_a -s 30"
    ```

2.  Change the CPU resource quota for  **workload\_a1**  under  **class\_a**  to 30% of  **class\_a**  CPU resources.

    ```
    gs_ssh -c "gs_cgroup -u -S class_a -G workload_a1 -g 30"
    ```

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >After adjustment, CPU resources allocated to  **workload\_a1**  should not be greater than those allocated to  **class\_a**. The name of a Workload Cgroup cannot be a default name of the Timeshare Cgroup, that is,  **Low**,  **Medium**,  **High**, or  **Rush**.


**Deleting a Cgroup**

1.  Delete the Cgroup  **class\_a**.

    ```
    gs_ssh -c "gs_cgroup -d  -S class_a"
    ```

    After the command is executed, the Cgroup  **class\_a**  is deleted.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >User  **root**  or a user with the  **root**  permission can delete the default Cgroups that can be accessed by a common user  _username_  by specifying  **-d**  and  **-U** _username_. A common user can delete existing Class Cgroups by specifying  **-d**  and  **-S** _classname_.


## Viewing Cgroup Information<a name="en-us_topic_0066854607_s66a16734a4e54c00abaaa1cc44c82c89"></a>

1.  View Cgroup information in configuration files.

    ```
    gs_cgroup -p 
    ```

    Cgroup configuration

    ```
    gs_cgroup -p
    
    Top Group information is listed:
    GID:   0 Type: Top    Percent(%): 1000( 50) Name: Root                  Cores: 0-47
    GID:   1 Type: Top    Percent(%):  833( 83) Name: Gaussdb:omm           Cores: 0-20
    GID:   2 Type: Top    Percent(%):  333( 40) Name: Backend               Cores: 0-20
    GID:   3 Type: Top    Percent(%):  499( 60) Name: Class                 Cores: 0-20
    
    Backend Group information is listed:
    GID:   4 Type: BAKWD  Name: DefaultBackend   TopGID:   2 Percent(%): 266(80) Cores: 0-20
    GID:   5 Type: BAKWD  Name: Vacuum           TopGID:   2 Percent(%):  66(20) Cores: 0-20
    
    Class Group information is listed:
    GID:  20 Type: CLASS  Name: DefaultClass     TopGID:   3 Percent(%): 166(20) MaxLevel: 1 RemPCT: 100 Cores: 0-20
    GID:  21 Type: CLASS  Name: class1           TopGID:   3 Percent(%): 332(40) MaxLevel: 2 RemPCT:  70 Cores: 0-20
    
    Workload Group information is listed:
    GID:  86 Type: DEFWD  Name: grp1:2           ClsGID:  21 Percent(%):  99(30) WDLevel:  2 Quota(%): 30 Cores: 0-5
    
    Timeshare Group information is listed:
    GID: 724 Type: TSWD   Name: Low              Rate: 1
    GID: 725 Type: TSWD   Name: Medium           Rate: 2
    GID: 726 Type: TSWD   Name: High             Rate: 4
    GID: 727 Type: TSWD   Name: Rush             Rate: 8
    
    Group Exception information is listed:
    GID:  20 Type: EXCEPTION Class: DefaultClass
    PENALTY: QualificationTime=1800 CPUSkewPercent=30
    
    GID:  21 Type: EXCEPTION Class: class1
    PENALTY: AllCpuTime=100 QualificationTime=2400 CPUSkewPercent=90
    
    GID:  86 Type: EXCEPTION Group: class1:grp1:2
    ABORT: BlockTime=1200 ElapsedTime=2400
    ```

    [Table 1](#en-us_topic_0085032167_en-us_topic_0059777958_t6ef2f8b1d69342eda1f26e57003015c2)  lists the Cgroup configuration shown in the above example.

    **Table  1**  Cgroup configuration

    <a name="en-us_topic_0085032167_en-us_topic_0059777958_t6ef2f8b1d69342eda1f26e57003015c2"></a>
    <table><thead align="left"><tr id="en-us_topic_0085032167_en-us_topic_0059777958_raf32468133ec42a98fa0a24a84f6e542"><th class="cellrowborder" valign="top" width="12.42%" id="mcps1.2.6.1.1"><p id="en-us_topic_0085032167_en-us_topic_0059777958_a35afb8adcfcc44caab1a15a95bc460f3"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a35afb8adcfcc44caab1a15a95bc460f3"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a35afb8adcfcc44caab1a15a95bc460f3"></a>GID</p>
    </th>
    <th class="cellrowborder" valign="top" width="13.900000000000002%" id="mcps1.2.6.1.2"><p id="en-us_topic_0085032167_en-us_topic_0059777958_a5e63574953494fda87d121cc98444458"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a5e63574953494fda87d121cc98444458"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a5e63574953494fda87d121cc98444458"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.61%" id="mcps1.2.6.1.3"><p id="en-us_topic_0085032167_en-us_topic_0059777958_a64f986ec452e42c284a6f32d6156dfb8"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a64f986ec452e42c284a6f32d6156dfb8"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a64f986ec452e42c284a6f32d6156dfb8"></a>Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="31.55%" id="mcps1.2.6.1.4"><p id="en-us_topic_0085032167_en-us_topic_0059777958_ae59345dfad974f2981d49561fde6edde"><a name="en-us_topic_0085032167_en-us_topic_0059777958_ae59345dfad974f2981d49561fde6edde"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_ae59345dfad974f2981d49561fde6edde"></a>Percentage (%)</p>
    </th>
    <th class="cellrowborder" valign="top" width="26.52%" id="mcps1.2.6.1.5"><p id="en-us_topic_0085032167_en-us_topic_0059777958_af84180bce2c64a849829b13fdb1e21d5"><a name="en-us_topic_0085032167_en-us_topic_0059777958_af84180bce2c64a849829b13fdb1e21d5"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_af84180bce2c64a849829b13fdb1e21d5"></a>Remarks</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0085032167_en-us_topic_0059777958_r40c9836246fc434cb849097be80f4238"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a2917dc8c27254a51a345ee36e67a1720"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a2917dc8c27254a51a345ee36e67a1720"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a2917dc8c27254a51a345ee36e67a1720"></a>0</p>
    </td>
    <td class="cellrowborder" rowspan="4" valign="top" width="13.900000000000002%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a06d02d08bbc2479ab2f65b40bd7b1aa2"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a06d02d08bbc2479ab2f65b40bd7b1aa2"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a06d02d08bbc2479ab2f65b40bd7b1aa2"></a>Top Cgroup</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.61%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a5aa339132fd84fffb152ea53482ffcad"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a5aa339132fd84fffb152ea53482ffcad"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a5aa339132fd84fffb152ea53482ffcad"></a>Root</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.55%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a338af691b8b349658412db97f3db8076"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a338af691b8b349658412db97f3db8076"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a338af691b8b349658412db97f3db8076"></a>The number <strong id="b1042213281387"><a name="b1042213281387"></a><a name="b1042213281387"></a>1000</strong> indicates that the total system resources are divided into 1000 pieces.</p>
    <p id="en-us_topic_0085032167_en-us_topic_0059777958_a1581165ca9ae4dd080b5f9b82f5de2e7"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a1581165ca9ae4dd080b5f9b82f5de2e7"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a1581165ca9ae4dd080b5f9b82f5de2e7"></a>The number <strong id="b2679153713815"><a name="b2679153713815"></a><a name="b2679153713815"></a>50</strong> in the parentheses indicates 50% of I/O resources.</p>
    <p id="en-us_topic_0085032167_p7162175943818"><a name="en-us_topic_0085032167_p7162175943818"></a><a name="en-us_topic_0085032167_p7162175943818"></a><span id="text72654133610"><a name="text72654133610"></a><a name="text72654133610"></a>openGauss</span> does not control I/O resources through Cgroups. Therefore, the following Cgroup information is only about CPU.</p>
    </td>
    <td class="cellrowborder" valign="top" width="26.52%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a6eb5d42ab11f40ef961f8058258bd179"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a6eb5d42ab11f40ef961f8058258bd179"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a6eb5d42ab11f40ef961f8058258bd179"></a>-</p>
    </td>
    </tr>
    <tr id="en-us_topic_0085032167_en-us_topic_0059777958_r983cfc45212e4992b1950009f0e56504"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a1eaf0bdb85924deab2806570de44f3af"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a1eaf0bdb85924deab2806570de44f3af"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a1eaf0bdb85924deab2806570de44f3af"></a>1</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a90c7540a2a9f46af829f8337a21fcbe7"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a90c7540a2a9f46af829f8337a21fcbe7"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a90c7540a2a9f46af829f8337a21fcbe7"></a>Gaussdb:<span id="text1785391015013"><a name="text1785391015013"></a><a name="text1785391015013"></a>omm</span></p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_abcad05a44a894c50ade6a6054e936ddf"><a name="en-us_topic_0085032167_en-us_topic_0059777958_abcad05a44a894c50ade6a6054e936ddf"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_abcad05a44a894c50ade6a6054e936ddf"></a>Only one database program runs in a cluster. The default quota of the <strong id="b338996153918"><a name="b338996153918"></a><a name="b338996153918"></a>Gaussdb:<span id="text4458181275015"><a name="text4458181275015"></a><a name="text4458181275015"></a>omm</span></strong> Cgroup is 833. That is, the ratio of database programs to non-database programs is 5:1 (833:167).</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_ab57c2123aa8a4f648fcaf14225f6c74a"><a name="en-us_topic_0085032167_en-us_topic_0059777958_ab57c2123aa8a4f648fcaf14225f6c74a"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_ab57c2123aa8a4f648fcaf14225f6c74a"></a>-</p>
    </td>
    </tr>
    <tr id="en-us_topic_0085032167_en-us_topic_0059777958_rb51a7c2bd35249f58e7520595cfb74f4"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a7f152f6bf6484613a26adc92a992a612"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a7f152f6bf6484613a26adc92a992a612"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a7f152f6bf6484613a26adc92a992a612"></a>2</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_ae34f31263140431ab5b0eb6800bbe56a"><a name="en-us_topic_0085032167_en-us_topic_0059777958_ae34f31263140431ab5b0eb6800bbe56a"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_ae34f31263140431ab5b0eb6800bbe56a"></a>Backend</p>
    </td>
    <td class="cellrowborder" rowspan="2" valign="top" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_adcc253590a304f1eba6dbc3f56a42b31"><a name="en-us_topic_0085032167_en-us_topic_0059777958_adcc253590a304f1eba6dbc3f56a42b31"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_adcc253590a304f1eba6dbc3f56a42b31"></a>The number <strong id="b132562032163913"><a name="b132562032163913"></a><a name="b132562032163913"></a>40</strong> in the parentheses indicates that the Backend Cgroup takes up 40% of the resources of the <strong id="b325633233910"><a name="b325633233910"></a><a name="b325633233910"></a>Gaussdb:dbuser</strong> Cgroup. The number <strong id="b92571532183918"><a name="b92571532183918"></a><a name="b92571532183918"></a>60</strong> in the parentheses indicates that the Class Cgroup takes up 60% of the resources of the <strong id="b1625716321396"><a name="b1625716321396"></a><a name="b1625716321396"></a>Gaussdb:dbuser</strong> Cgroup.</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a55cc1dc9b6d8417996044cd8757ef808"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a55cc1dc9b6d8417996044cd8757ef808"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a55cc1dc9b6d8417996044cd8757ef808"></a>-</p>
    </td>
    </tr>
    <tr id="en-us_topic_0085032167_en-us_topic_0059777958_rc5b04760cc9443d7894575b28d6f82bc"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a073225e9f51c4d45afb1ccfcb9c98f62"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a073225e9f51c4d45afb1ccfcb9c98f62"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a073225e9f51c4d45afb1ccfcb9c98f62"></a>3</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a94cd7a0e32c84ee9a996e6f8c9db099a"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a94cd7a0e32c84ee9a996e6f8c9db099a"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a94cd7a0e32c84ee9a996e6f8c9db099a"></a>Class</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a56886ba6fcde430f9a6eb0f257b4f3bf"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a56886ba6fcde430f9a6eb0f257b4f3bf"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a56886ba6fcde430f9a6eb0f257b4f3bf"></a>-</p>
    </td>
    </tr>
    <tr id="en-us_topic_0085032167_en-us_topic_0059777958_rebb21435963c46d69a04d0ab35e0caf8"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a5078655f17a24de5839b2be2076ccba1"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a5078655f17a24de5839b2be2076ccba1"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a5078655f17a24de5839b2be2076ccba1"></a>4</p>
    </td>
    <td class="cellrowborder" rowspan="2" valign="top" width="13.900000000000002%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a139683e2a3e843ea93915c9d37de3cf8"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a139683e2a3e843ea93915c9d37de3cf8"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a139683e2a3e843ea93915c9d37de3cf8"></a>Backend Cgroup</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.61%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a89fe583c176e448da9f169b3f01e5e27"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a89fe583c176e448da9f169b3f01e5e27"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a89fe583c176e448da9f169b3f01e5e27"></a>DefaultBackend</p>
    </td>
    <td class="cellrowborder" rowspan="2" valign="top" width="31.55%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a632dadada0c2425298fa5621a11ca772"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a632dadada0c2425298fa5621a11ca772"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a632dadada0c2425298fa5621a11ca772"></a>The numbers <strong id="b135841549163916"><a name="b135841549163916"></a><a name="b135841549163916"></a>80</strong> and <strong id="b135841149133911"><a name="b135841149133911"></a><a name="b135841149133911"></a>20</strong> in the parentheses indicate the percentages of Backend Cgroup resources taken by the <strong id="b8585204993917"><a name="b8585204993917"></a><a name="b8585204993917"></a>DefaultBackend</strong> and <strong id="b4585249143911"><a name="b4585249143911"></a><a name="b4585249143911"></a>Vacuum</strong> groups, respectively.</p>
    </td>
    <td class="cellrowborder" rowspan="2" valign="top" width="26.52%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_ac7d60f8f0b3742d19ef61e5b17b8201f"><a name="en-us_topic_0085032167_en-us_topic_0059777958_ac7d60f8f0b3742d19ef61e5b17b8201f"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_ac7d60f8f0b3742d19ef61e5b17b8201f"></a><strong id="b1614316158614"><a name="b1614316158614"></a><a name="b1614316158614"></a>TopGID</strong>: GID (2) of the Backend Cgroup in a Top Cgroup</p>
    </td>
    </tr>
    <tr id="en-us_topic_0085032167_en-us_topic_0059777958_r3bbdbf32c9a54aaeb216b0c132d62439"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a7eae4871ce5c4b2b8ab519f7dbc3f0e8"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a7eae4871ce5c4b2b8ab519f7dbc3f0e8"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a7eae4871ce5c4b2b8ab519f7dbc3f0e8"></a>5</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a2656aced855847baa02b9208adcfabd9"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a2656aced855847baa02b9208adcfabd9"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a2656aced855847baa02b9208adcfabd9"></a>Vacuum</p>
    </td>
    </tr>
    <tr id="en-us_topic_0085032167_en-us_topic_0059777958_r4bdc9c26155048b7b6fef177826bb6f9"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_aad0efd2996714e8fbad3d9d970f10017"><a name="en-us_topic_0085032167_en-us_topic_0059777958_aad0efd2996714e8fbad3d9d970f10017"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_aad0efd2996714e8fbad3d9d970f10017"></a>20</p>
    </td>
    <td class="cellrowborder" rowspan="2" valign="top" width="13.900000000000002%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_ad7825e742b514ec2871344b0bc037279"><a name="en-us_topic_0085032167_en-us_topic_0059777958_ad7825e742b514ec2871344b0bc037279"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_ad7825e742b514ec2871344b0bc037279"></a>Class Cgroup</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.61%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a7cf846331fb24b13b663a961e3e2905c"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a7cf846331fb24b13b663a961e3e2905c"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a7cf846331fb24b13b663a961e3e2905c"></a>DefaultClass</p>
    </td>
    <td class="cellrowborder" rowspan="2" valign="top" width="31.55%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_ac93ff437c8ba41ea9d7e35368d3ab5bb"><a name="en-us_topic_0085032167_en-us_topic_0059777958_ac93ff437c8ba41ea9d7e35368d3ab5bb"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_ac93ff437c8ba41ea9d7e35368d3ab5bb"></a>The number <strong id="b181971237164015"><a name="b181971237164015"></a><a name="b181971237164015"></a>20</strong> in the parentheses indicates that the <strong id="b919773784012"><a name="b919773784012"></a><a name="b919773784012"></a>DefaultClass</strong> Cgroup takes up 20% of the Class Cgroup resources. The number <strong id="b16197193784019"><a name="b16197193784019"></a><a name="b16197193784019"></a>40</strong> in the parentheses indicates that the <strong id="b2019783704010"><a name="b2019783704010"></a><a name="b2019783704010"></a>class1</strong> Cgroup takes up 40% of the Class Cgroup resources. There are only two Class Cgroups currently. Therefore, the system resource quotas for the Class Cgroups (499) are allocated in the ratio of 20:40 (166:332).</p>
    </td>
    <td class="cellrowborder" rowspan="2" valign="top" width="26.52%" headers="mcps1.2.6.1.5 "><a name="en-us_topic_0085032167_en-us_topic_0059777958_u01f01475a56e48468034a2f15ebcd156"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_u01f01475a56e48468034a2f15ebcd156"></a><ul id="en-us_topic_0085032167_en-us_topic_0059777958_u01f01475a56e48468034a2f15ebcd156"><li><strong id="b76131136171217"><a name="b76131136171217"></a><a name="b76131136171217"></a>TopGID</strong>: GID (3) of the Class Cgroups in a Top Cgroup to which the <strong id="b10620136101218"><a name="b10620136101218"></a><a name="b10620136101218"></a>DefaultClass</strong> and <strong id="b2621636101213"><a name="b2621636101213"></a><a name="b2621636101213"></a>class1</strong> Cgroups belong.</li><li><strong id="b054211494120"><a name="b054211494120"></a><a name="b054211494120"></a>MaxLevel</strong>: maximum number of levels for Workload Cgroups in a Class Cgroup. This parameter is set to <strong id="b7548449141216"><a name="b7548449141216"></a><a name="b7548449141216"></a>1</strong> for <strong id="b654974911124"><a name="b654974911124"></a><a name="b654974911124"></a>DefaultClass</strong> because it has no Workload Cgroups.</li><li><strong id="b1146918001317"><a name="b1146918001317"></a><a name="b1146918001317"></a>RemPCT</strong>: percentage of remaining resources in a Class Cgroup after its resources are allocated to Workload Cgroups. For example, the percentage of remaining resources in the <strong id="b7586716164519"><a name="b7586716164519"></a><a name="b7586716164519"></a>class1</strong> Cgroup is 70%.</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0085032167_en-us_topic_0059777958_rb09775a1dc284a5badceb435d1fa0deb"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a47e5ba42370049b0a39138e3b7028243"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a47e5ba42370049b0a39138e3b7028243"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a47e5ba42370049b0a39138e3b7028243"></a>21</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a952d4b454c754614961bd0acc1d8eb14"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a952d4b454c754614961bd0acc1d8eb14"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a952d4b454c754614961bd0acc1d8eb14"></a>class1</p>
    </td>
    </tr>
    <tr id="en-us_topic_0085032167_en-us_topic_0059777958_r69f1f4dcc43042d49dbf46ac0cc7fd5a"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a3d0e978aa70947b7bf8ee28f7f69ef41"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a3d0e978aa70947b7bf8ee28f7f69ef41"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a3d0e978aa70947b7bf8ee28f7f69ef41"></a>86</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.900000000000002%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a00b2084dc9164cdbb7c2152fb45144ac"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a00b2084dc9164cdbb7c2152fb45144ac"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a00b2084dc9164cdbb7c2152fb45144ac"></a>Workload Cgroup</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.61%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0085032167_p1643572385820"><a name="en-us_topic_0085032167_p1643572385820"></a><a name="en-us_topic_0085032167_p1643572385820"></a>grp1:2</p>
    <p id="en-us_topic_0085032167_en-us_topic_0059777958_a35c42c0dbaf341eda30f77c6dfe3206a"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a35c42c0dbaf341eda30f77c6dfe3206a"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a35c42c0dbaf341eda30f77c6dfe3206a"></a>(This name is composed of the name of a Workload Cgroup and its level in the Class Cgroup. This <strong id="b12101430164514"><a name="b12101430164514"></a><a name="b12101430164514"></a>grp1:2</strong> Cgroup is the first Workload Cgroup under the <strong id="b721623054510"><a name="b721623054510"></a><a name="b721623054510"></a>class1</strong> Cgroup, and its level is 2. Each Class Cgroup contains a maximum of 10 levels of Workload Cgroups.)</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.55%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_aa56d91049b224ed2a92027036762be85"><a name="en-us_topic_0085032167_en-us_topic_0059777958_aa56d91049b224ed2a92027036762be85"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_aa56d91049b224ed2a92027036762be85"></a>In this example, this Workload Cgroup takes up 30% of <strong id="b182431912154614"><a name="b182431912154614"></a><a name="b182431912154614"></a>class1</strong> Cgroup resources (332 x 30% = 99).</p>
    </td>
    <td class="cellrowborder" valign="top" width="26.52%" headers="mcps1.2.6.1.5 "><a name="en-us_topic_0085032167_en-us_topic_0059777958_u37d2117f9f64408ea81e8167d73d9153"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_u37d2117f9f64408ea81e8167d73d9153"></a><ul id="en-us_topic_0085032167_en-us_topic_0059777958_u37d2117f9f64408ea81e8167d73d9153"><li><strong id="b109358192460"><a name="b109358192460"></a><a name="b109358192460"></a>ClsGID</strong>: GID of the <strong id="b2936101984616"><a name="b2936101984616"></a><a name="b2936101984616"></a>class1</strong> Cgroup to which the Workload Cgroup belongs.</li><li><strong id="b2332173261411"><a name="b2332173261411"></a><a name="b2332173261411"></a>WDLevel</strong>: level of the Workload Cgroup in the corresponding Class Cgroup.</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0085032167_en-us_topic_0059777958_ra51ec99f046248e4a80f1357d7cbbbf6"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_aac66021fdd084e699cf47892c7aac50f"><a name="en-us_topic_0085032167_en-us_topic_0059777958_aac66021fdd084e699cf47892c7aac50f"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_aac66021fdd084e699cf47892c7aac50f"></a>724</p>
    </td>
    <td class="cellrowborder" rowspan="4" valign="top" width="13.900000000000002%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a31622eb38f454fe4bb0e201ca2bf7af7"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a31622eb38f454fe4bb0e201ca2bf7af7"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a31622eb38f454fe4bb0e201ca2bf7af7"></a>Timeshare Cgroup</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.61%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_aebc6436beb654da299f46f73c7c73c86"><a name="en-us_topic_0085032167_en-us_topic_0059777958_aebc6436beb654da299f46f73c7c73c86"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_aebc6436beb654da299f46f73c7c73c86"></a>Low</p>
    </td>
    <td class="cellrowborder" valign="top" width="31.55%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_aac1ccc37de00462f869d63432b3ea2ed"><a name="en-us_topic_0085032167_en-us_topic_0059777958_aac1ccc37de00462f869d63432b3ea2ed"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_aac1ccc37de00462f869d63432b3ea2ed"></a>-</p>
    </td>
    <td class="cellrowborder" rowspan="4" valign="top" width="26.52%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_aacc9155fa98446588808649ce29fc559"><a name="en-us_topic_0085032167_en-us_topic_0059777958_aacc9155fa98446588808649ce29fc559"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_aacc9155fa98446588808649ce29fc559"></a><strong id="b2058754361416"><a name="b2058754361416"></a><a name="b2058754361416"></a>Rate</strong>: rate of resources allocated to a Timeshare Cgroup. The <strong id="b1859394319142"><a name="b1859394319142"></a><a name="b1859394319142"></a>Low</strong> Cgroup has the minimum rate 1 and the <strong id="b175931943111419"><a name="b175931943111419"></a><a name="b175931943111419"></a>Rush</strong> Cgroup has the maximum rate 8. The resource rate for <strong id="b337344164618"><a name="b337344164618"></a><a name="b337344164618"></a>Rush</strong>:<strong id="b13749413463"><a name="b13749413463"></a><a name="b13749413463"></a>High</strong>:<strong id="b153741341194610"><a name="b153741341194610"></a><a name="b153741341194610"></a>Medium</strong>:<strong id="b17374184124613"><a name="b17374184124613"></a><a name="b17374184124613"></a>Low</strong> is <strong id="b193751041114618"><a name="b193751041114618"></a><a name="b193751041114618"></a>8</strong>:<strong id="b3375141154613"><a name="b3375141154613"></a><a name="b3375141154613"></a>4</strong>:<strong id="b10375114134615"><a name="b10375114134615"></a><a name="b10375114134615"></a>2</strong>:<strong id="b9375114117462"><a name="b9375114117462"></a><a name="b9375114117462"></a>1</strong> under a Timeshare Cgroup.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0085032167_en-us_topic_0059777958_rc218d5326a2744f3aea8ed9b5854b8ea"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_ace62508ac2424abb8a994e84175e63c2"><a name="en-us_topic_0085032167_en-us_topic_0059777958_ace62508ac2424abb8a994e84175e63c2"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_ace62508ac2424abb8a994e84175e63c2"></a>725</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_adf5d2ad6919d4242a0314c0d5893c4c7"><a name="en-us_topic_0085032167_en-us_topic_0059777958_adf5d2ad6919d4242a0314c0d5893c4c7"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_adf5d2ad6919d4242a0314c0d5893c4c7"></a>Medium</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a899b0db2dbf34c108c267729c1aaa715"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a899b0db2dbf34c108c267729c1aaa715"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a899b0db2dbf34c108c267729c1aaa715"></a>-</p>
    </td>
    </tr>
    <tr id="en-us_topic_0085032167_en-us_topic_0059777958_rc8fa48c94125496f99288554c61d6b0f"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a73d01fb5ca31424492c153ae6313011b"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a73d01fb5ca31424492c153ae6313011b"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a73d01fb5ca31424492c153ae6313011b"></a>726</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_ad5ed1e4abafc46a7888901c64ae77fb0"><a name="en-us_topic_0085032167_en-us_topic_0059777958_ad5ed1e4abafc46a7888901c64ae77fb0"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_ad5ed1e4abafc46a7888901c64ae77fb0"></a>High</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a931e04a7e35645719108993544a8de7b"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a931e04a7e35645719108993544a8de7b"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a931e04a7e35645719108993544a8de7b"></a>-</p>
    </td>
    </tr>
    <tr id="en-us_topic_0085032167_en-us_topic_0059777958_r6f7fb17cc6f7454c8a73990b1439ec2b"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_aeaa5db9e07664c90994f3cc96133eedd"><a name="en-us_topic_0085032167_en-us_topic_0059777958_aeaa5db9e07664c90994f3cc96133eedd"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_aeaa5db9e07664c90994f3cc96133eedd"></a>727</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_a1f2edf02225d433cb2209eaaf68d3815"><a name="en-us_topic_0085032167_en-us_topic_0059777958_a1f2edf02225d433cb2209eaaf68d3815"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_a1f2edf02225d433cb2209eaaf68d3815"></a>Rush</p>
    </td>
    <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0085032167_en-us_topic_0059777958_aa5ee50649fe74d3d938f201dd5cdfbf3"><a name="en-us_topic_0085032167_en-us_topic_0059777958_aa5ee50649fe74d3d938f201dd5cdfbf3"></a><a name="en-us_topic_0085032167_en-us_topic_0059777958_aa5ee50649fe74d3d938f201dd5cdfbf3"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>

2.  View the Cgroup tree in the OS.

    Run the following command to query the structure of the Cgroup tree:

    ```
    gs_cgroup -P
    ```

    In the command output,  **shares**  indicates the value of  **cpu.shares**, which specifies the dynamic quota of CPU resources in the OS, and  **cpus**  indicates the value of  **cpuset.cpus**, which specifies the dynamic quota of CPUSET resources in the OS \(number of cores that a Cgroup can use\).

    ```
    Mount Information:
    cpu:/dev/cgroup/cpu
    blkio:/dev/cgroup/blkio
    cpuset:/dev/cgroup/cpuset
    cpuacct:/dev/cgroup/cpuacct
    
    Group Tree Information:
    - Gaussdb:wangrui (shares: 5120, cpus: 0-20, weight: 1000)
            - Backend (shares: 4096, cpus: 0-20, weight: 400)
                    - Vacuum (shares: 2048, cpus: 0-20, weight: 200)
                    - DefaultBackend (shares: 8192, cpus: 0-20, weight: 800)
            - Class (shares: 6144, cpus: 0-20, weight: 600)
                    - class1 (shares: 4096, cpus: 0-20, weight: 400)
                            - RemainWD:1 (shares: 1000, cpus: 0-20, weight: 100)
                                    - RemainWD:2 (shares: 7000, cpus: 0-20, weight: 700)
                                            - Timeshare (shares: 1024, cpus: 0-20, weight: 500)
                                                    - Rush (shares: 8192, cpus: 0-20, weight: 800)
                                                    - High (shares: 4096, cpus: 0-20, weight: 400)
                                                    - Medium (shares: 2048, cpus: 0-20, weight: 200)
                                                    - Low (shares: 1024, cpus: 0-20, weight: 100)
                                    - grp1:2 (shares: 3000, cpus: 0-5, weight: 300)
                            - TopWD:1 (shares: 9000, cpus: 0-20, weight: 900)
                    - DefaultClass (shares: 2048, cpus: 0-20, weight: 200)
                            - RemainWD:1 (shares: 1000, cpus: 0-20, weight: 100)
                                    - Timeshare (shares: 1024, cpus: 0-20, weight: 500)
                                            - Rush (shares: 8192, cpus: 0-20, weight: 800)
                                            - High (shares: 4096, cpus: 0-20, weight: 400)
                                            - Medium (shares: 2048, cpus: 0-20, weight: 200)
                                            - Low (shares: 1024, cpus: 0-20, weight: 100)
                            - TopWD:1 (shares: 9000, cpus: 0-20, weight: 900)
    ```

3.  Obtain the Cgroup configuration in a system view.

    1.  Perform the steps in  [Using gsql to Connect to a Database](../DatabaseAdministrationGuide/using-gsql-to-operate-an-encrypted-database.md).
    2.  Obtain the configuration about all Cgroups in the system.

    ```
    openGauss=# SELECT * FROM gs_all_control_group_info;
    ```


