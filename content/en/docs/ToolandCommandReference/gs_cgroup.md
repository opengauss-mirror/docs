# gs\_cgroup<a name="EN-US_TOPIC_0000001147386014"></a>

## Background<a name="en-us_topic_0059777958_s70c9bd657f6844e6a03a4daa7aa46cd6"></a>

When jobs are batch processed in a cluster, loads on servers significantly vary due to the complexity of batch processing. To fully use cluster resources, you need to manage loads.  **gs\_cgroup**  is a load management tool provided by openGauss. It can create default Cgroups and user-defined Cgroups, delete default and user-defined Cgroups, update resource quotas and allocations, display the configuration files of Cgroups and the Cgroup tree, and delete all Cgroups.

**gs\_cgroup**  creates Cgroups configuration files for the OS user of a database and generates Cgroups that the OS user sets in the OS.  **gs\_cgroup**  also allows users to add or delete Cgroups, update Cgroup resource quotas, allocate CPU cores or I/O resources, set exception thresholds, and handle the exceptions.  **gs\_cgroup**  is responsible only for Cgroups operations performed on the node where the current OS resides, and needs to be centrally configured across nodes by invoking the same statement.

For details, see [Resource Load Management](../PerformanceTuningGuide/resource-load-management.md).

## Examples<a name="en-us_topic_0059777958_s9a5160c94e894511a98780d923399a96"></a>

-   Commands executed by a common user or the database administrator:
    1.  Prerequisites: The  _GAUSSHOME_  environment variable is used as the database installation directory and user  **root**  has created default Cgroups for common users.
    2.  Create Cgroups and set corresponding resource quota so that jobs of the database can be specified to a Cgroup and use its resources. The database administrator creates Class Cgroups for each database user.
        1.  Create class and workload Cgroups.

            ```
            gs_cgroup -c -S class1 -s 40  
            ```

            Create the  **class1**  Cgroup and allocate 40% of Class resources to it.

            ```
            gs_cgroup -c -S class1 -G grp1 -g 20 
            ```

            Create the  **grp1**  Workload Cgroup under the  **class1**  Cgroup and allocate 20% of  **class1**  Cgroup resources to the Workload Cgroup.

        2.  Delete the created  **grp1**  Cgroup and  **class1**  Cgroup.

            ```
            gs_cgroup -d -S class1 -G grp1
            ```

            Delete the created  **grp1**  Cgroup.

            ```
            gs_cgroup -d -S class1
            ```

            Delete the created  **class1**  Cgroup.

            >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
            >If a Class Cgroup is deleted, its Workload Cgroups will be deleted as well.


    3.  Update the resource quota for created Cgroups.
        1.  Update dynamic resource quota.

            ```
            gs_cgroup -u -S class1 -G grp1 -g 30
            ```

            Update the resources allocated to the  **grp1**  Workload Cgroup under the  **class1**  Cgroup for the current user to 30% of  **class1**  resources.

        2.  Update the resource limitation quota.

            ```
            gs_cgroup --fixed -u -S class1 -G grp1 -g 30
            ```

            Set the number of CPU cores allocated to the  **grp1**  Cgroup to 30% of cores allocated to its parent Cgroup  **class1**.

    4.  Update the range of the CPU cores in the  **Gaussdb**  Cgroup.

        ```
        gs_cgroup -u -T Gaussdb -f 0-20
        ```

        Update the number of CPU cores used by the GaussDB process to 0–20.

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >The  **-f**  parameter can only be used to set the range of the CPU cores in the  **Gaussdb**  Cgroup. For other Cgroups, if you need to set the number of cores, use the  **--fixed**  parameter.

    5.  Set exception handling information. \(**class:wg**  group must exist.\)
        1.  Terminate a job under the  **class:wg**  Cgroup when job congestion lasts for 1200s or job execution lasts for 2400s.

            ```
            gs_cgroup -S class -G wg -E "blocktime=1200,elapsedtime=2400" -a
            ```

        2.  Specify the termination action performed when the size of spilled job data in the  **class:wg**  group reaches 256 MB or the size of broadcast job data in the group reaches 100 MB.

            ```
            gs_cgroup -S class -G wg -E "spillsize=256,broadcastsize=100" -a
            ```

        3.  Demote a job under the Class Cgroup when the total CPU time taken to execute the job on all nodes reaches 100s.

            ```
            gs_cgroup -S class -E "allcputime=100" --penalty
            ```

        4.  Demote a job under the Class Cgroup when the total time taken to execute the job on all nodes reaches 2400s and the skew of the CPU time reaches 90 percent.

            ```
            gs_cgroup -S class -E "qualificationtime=2400,cpuskewpercent=90"
            ```

            >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
            >
            >To set exception handling information for a Cgroup, ensure that the Cgroup has been created. Multiple specified thresholds are separated by commas \(,\). If no operation is specified,  **--penalty**  is used by default.


    6.  Set the number of cores per CPU have for a Cgroup.

        Set the range of cores for the  **class:wg**  Cgroup to 20% of Class cores.

        ```
        gs_cgroup -S class -G wg -g 20 --fixed -u
        ```

        >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
        >The range of cores for the Class or Workload Cgroup must be specified by the  **--fixed**  parameter.

    7.  Roll back the previous step.

        ```
        gs_cgroup --recover
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >The  **--recover**  parameter can only roll back the latest addition, deletion, or modification made to the Class and Workload Cgroups.

    8.  View information about Cgroups that have been created.
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

            [Table 1](#en-us_topic_0059777958_t6ef2f8b1d69342eda1f26e57003015c2)  lists the Cgroup configuration shown in the above example.

            **Table  1**  Cgroup configuration

            <a name="en-us_topic_0059777958_t6ef2f8b1d69342eda1f26e57003015c2"></a>
            <table><thead align="left"><tr id="en-us_topic_0059777958_raf32468133ec42a98fa0a24a84f6e542"><th class="cellrowborder" valign="top" width="12.42%" id="mcps1.2.6.1.1"><p id="en-us_topic_0059777958_a35afb8adcfcc44caab1a15a95bc460f3"><a name="en-us_topic_0059777958_a35afb8adcfcc44caab1a15a95bc460f3"></a><a name="en-us_topic_0059777958_a35afb8adcfcc44caab1a15a95bc460f3"></a>GID</p>
            </th>
            <th class="cellrowborder" valign="top" width="13.900000000000002%" id="mcps1.2.6.1.2"><p id="en-us_topic_0059777958_a5e63574953494fda87d121cc98444458"><a name="en-us_topic_0059777958_a5e63574953494fda87d121cc98444458"></a><a name="en-us_topic_0059777958_a5e63574953494fda87d121cc98444458"></a>Type</p>
            </th>
            <th class="cellrowborder" valign="top" width="15.61%" id="mcps1.2.6.1.3"><p id="en-us_topic_0059777958_a64f986ec452e42c284a6f32d6156dfb8"><a name="en-us_topic_0059777958_a64f986ec452e42c284a6f32d6156dfb8"></a><a name="en-us_topic_0059777958_a64f986ec452e42c284a6f32d6156dfb8"></a>Name</p>
            </th>
            <th class="cellrowborder" valign="top" width="31.55%" id="mcps1.2.6.1.4"><p id="en-us_topic_0059777958_ae59345dfad974f2981d49561fde6edde"><a name="en-us_topic_0059777958_ae59345dfad974f2981d49561fde6edde"></a><a name="en-us_topic_0059777958_ae59345dfad974f2981d49561fde6edde"></a>Percentage (%)</p>
            </th>
            <th class="cellrowborder" valign="top" width="26.52%" id="mcps1.2.6.1.5"><p id="en-us_topic_0059777958_af84180bce2c64a849829b13fdb1e21d5"><a name="en-us_topic_0059777958_af84180bce2c64a849829b13fdb1e21d5"></a><a name="en-us_topic_0059777958_af84180bce2c64a849829b13fdb1e21d5"></a>Remarks</p>
            </th>
            </tr>
            </thead>
            <tbody><tr id="en-us_topic_0059777958_r40c9836246fc434cb849097be80f4238"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059777958_a2917dc8c27254a51a345ee36e67a1720"><a name="en-us_topic_0059777958_a2917dc8c27254a51a345ee36e67a1720"></a><a name="en-us_topic_0059777958_a2917dc8c27254a51a345ee36e67a1720"></a>0</p>
            </td>
            <td class="cellrowborder" rowspan="4" valign="top" width="13.900000000000002%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059777958_a06d02d08bbc2479ab2f65b40bd7b1aa2"><a name="en-us_topic_0059777958_a06d02d08bbc2479ab2f65b40bd7b1aa2"></a><a name="en-us_topic_0059777958_a06d02d08bbc2479ab2f65b40bd7b1aa2"></a>Top Cgroup</p>
            </td>
            <td class="cellrowborder" valign="top" width="15.61%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059777958_a5aa339132fd84fffb152ea53482ffcad"><a name="en-us_topic_0059777958_a5aa339132fd84fffb152ea53482ffcad"></a><a name="en-us_topic_0059777958_a5aa339132fd84fffb152ea53482ffcad"></a>Root</p>
            </td>
            <td class="cellrowborder" valign="top" width="31.55%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059777958_a338af691b8b349658412db97f3db8076"><a name="en-us_topic_0059777958_a338af691b8b349658412db97f3db8076"></a><a name="en-us_topic_0059777958_a338af691b8b349658412db97f3db8076"></a><strong id="b14279620245745"><a name="b14279620245745"></a><a name="b14279620245745"></a>1000</strong> indicates that the total system resources are divided into 1000 pieces.</p>
            <p id="en-us_topic_0059777958_a1581165ca9ae4dd080b5f9b82f5de2e7"><a name="en-us_topic_0059777958_a1581165ca9ae4dd080b5f9b82f5de2e7"></a><a name="en-us_topic_0059777958_a1581165ca9ae4dd080b5f9b82f5de2e7"></a><strong id="b137355509345745"><a name="b137355509345745"></a><a name="b137355509345745"></a>50</strong> in the parentheses indicates 50% of I/O resources.</p>
            <p id="p7162175943818"><a name="p7162175943818"></a><a name="p7162175943818"></a><span id="text1575013584011"><a name="text1575013584011"></a><a name="text1575013584011"></a>openGauss</span> does not control I/O resources through Cgroups. Therefore, the following Cgroup information is only about CPU.</p>
            </td>
            <td class="cellrowborder" valign="top" width="26.52%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0059777958_a6eb5d42ab11f40ef961f8058258bd179"><a name="en-us_topic_0059777958_a6eb5d42ab11f40ef961f8058258bd179"></a><a name="en-us_topic_0059777958_a6eb5d42ab11f40ef961f8058258bd179"></a>-</p>
            </td>
            </tr>
            <tr id="en-us_topic_0059777958_r983cfc45212e4992b1950009f0e56504"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059777958_a1eaf0bdb85924deab2806570de44f3af"><a name="en-us_topic_0059777958_a1eaf0bdb85924deab2806570de44f3af"></a><a name="en-us_topic_0059777958_a1eaf0bdb85924deab2806570de44f3af"></a>1</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059777958_a90c7540a2a9f46af829f8337a21fcbe7"><a name="en-us_topic_0059777958_a90c7540a2a9f46af829f8337a21fcbe7"></a><a name="en-us_topic_0059777958_a90c7540a2a9f46af829f8337a21fcbe7"></a>Gaussdb:<span id="text8124194814719"><a name="text8124194814719"></a><a name="text8124194814719"></a>omm</span></p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059777958_abcad05a44a894c50ade6a6054e936ddf"><a name="en-us_topic_0059777958_abcad05a44a894c50ade6a6054e936ddf"></a><a name="en-us_topic_0059777958_abcad05a44a894c50ade6a6054e936ddf"></a>Only one database program runs in a cluster. The default quota of the <strong id="b135267153401"><a name="b135267153401"></a><a name="b135267153401"></a>Gaussdb:<span id="text1533112501473"><a name="text1533112501473"></a><a name="text1533112501473"></a>omm</span></strong> Cgroup is 833. That is, the ratio of database programs to non-database programs is 5:1 (833:167).</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059777958_ab57c2123aa8a4f648fcaf14225f6c74a"><a name="en-us_topic_0059777958_ab57c2123aa8a4f648fcaf14225f6c74a"></a><a name="en-us_topic_0059777958_ab57c2123aa8a4f648fcaf14225f6c74a"></a>-</p>
            </td>
            </tr>
            <tr id="en-us_topic_0059777958_rb51a7c2bd35249f58e7520595cfb74f4"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059777958_a7f152f6bf6484613a26adc92a992a612"><a name="en-us_topic_0059777958_a7f152f6bf6484613a26adc92a992a612"></a><a name="en-us_topic_0059777958_a7f152f6bf6484613a26adc92a992a612"></a>2</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059777958_ae34f31263140431ab5b0eb6800bbe56a"><a name="en-us_topic_0059777958_ae34f31263140431ab5b0eb6800bbe56a"></a><a name="en-us_topic_0059777958_ae34f31263140431ab5b0eb6800bbe56a"></a>Backend</p>
            </td>
            <td class="cellrowborder" rowspan="2" valign="top" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059777958_adcc253590a304f1eba6dbc3f56a42b31"><a name="en-us_topic_0059777958_adcc253590a304f1eba6dbc3f56a42b31"></a><a name="en-us_topic_0059777958_adcc253590a304f1eba6dbc3f56a42b31"></a>The number <strong id="b2111182574011"><a name="b2111182574011"></a><a name="b2111182574011"></a>40</strong> in the parentheses indicates that the Backend Cgroup takes up 40% of the resources of the <strong id="b12112192564015"><a name="b12112192564015"></a><a name="b12112192564015"></a>Gaussdb:dbuser</strong> Cgroup. The number <strong id="b81121025134016"><a name="b81121025134016"></a><a name="b81121025134016"></a>60</strong> in the parentheses indicates that the Class Cgroup takes up 60% of the resources of the <strong id="b6112182515406"><a name="b6112182515406"></a><a name="b6112182515406"></a>Gaussdb:dbuser</strong> Cgroup.</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059777958_a55cc1dc9b6d8417996044cd8757ef808"><a name="en-us_topic_0059777958_a55cc1dc9b6d8417996044cd8757ef808"></a><a name="en-us_topic_0059777958_a55cc1dc9b6d8417996044cd8757ef808"></a>-</p>
            </td>
            </tr>
            <tr id="en-us_topic_0059777958_rc5b04760cc9443d7894575b28d6f82bc"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059777958_a073225e9f51c4d45afb1ccfcb9c98f62"><a name="en-us_topic_0059777958_a073225e9f51c4d45afb1ccfcb9c98f62"></a><a name="en-us_topic_0059777958_a073225e9f51c4d45afb1ccfcb9c98f62"></a>3</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059777958_a94cd7a0e32c84ee9a996e6f8c9db099a"><a name="en-us_topic_0059777958_a94cd7a0e32c84ee9a996e6f8c9db099a"></a><a name="en-us_topic_0059777958_a94cd7a0e32c84ee9a996e6f8c9db099a"></a>Class</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059777958_a56886ba6fcde430f9a6eb0f257b4f3bf"><a name="en-us_topic_0059777958_a56886ba6fcde430f9a6eb0f257b4f3bf"></a><a name="en-us_topic_0059777958_a56886ba6fcde430f9a6eb0f257b4f3bf"></a>-</p>
            </td>
            </tr>
            <tr id="en-us_topic_0059777958_rebb21435963c46d69a04d0ab35e0caf8"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059777958_a5078655f17a24de5839b2be2076ccba1"><a name="en-us_topic_0059777958_a5078655f17a24de5839b2be2076ccba1"></a><a name="en-us_topic_0059777958_a5078655f17a24de5839b2be2076ccba1"></a>4</p>
            </td>
            <td class="cellrowborder" rowspan="2" valign="top" width="13.900000000000002%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059777958_a139683e2a3e843ea93915c9d37de3cf8"><a name="en-us_topic_0059777958_a139683e2a3e843ea93915c9d37de3cf8"></a><a name="en-us_topic_0059777958_a139683e2a3e843ea93915c9d37de3cf8"></a>Backend Cgroup</p>
            </td>
            <td class="cellrowborder" valign="top" width="15.61%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059777958_a89fe583c176e448da9f169b3f01e5e27"><a name="en-us_topic_0059777958_a89fe583c176e448da9f169b3f01e5e27"></a><a name="en-us_topic_0059777958_a89fe583c176e448da9f169b3f01e5e27"></a>DefaultBackend</p>
            </td>
            <td class="cellrowborder" rowspan="2" valign="top" width="31.55%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059777958_a632dadada0c2425298fa5621a11ca772"><a name="en-us_topic_0059777958_a632dadada0c2425298fa5621a11ca772"></a><a name="en-us_topic_0059777958_a632dadada0c2425298fa5621a11ca772"></a>The numbers <strong id="b145424375406"><a name="b145424375406"></a><a name="b145424375406"></a>80</strong> and <strong id="b9548163744010"><a name="b9548163744010"></a><a name="b9548163744010"></a>20</strong> in the parentheses indicate the percentages of Backend Cgroup resources taken by the <strong id="b20548133784014"><a name="b20548133784014"></a><a name="b20548133784014"></a>DefaultBackend</strong> and <strong id="b65486376408"><a name="b65486376408"></a><a name="b65486376408"></a>Vacuum</strong> groups, respectively.</p>
            </td>
            <td class="cellrowborder" rowspan="2" valign="top" width="26.52%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0059777958_ac7d60f8f0b3742d19ef61e5b17b8201f"><a name="en-us_topic_0059777958_ac7d60f8f0b3742d19ef61e5b17b8201f"></a><a name="en-us_topic_0059777958_ac7d60f8f0b3742d19ef61e5b17b8201f"></a><strong id="b120580388345745"><a name="b120580388345745"></a><a name="b120580388345745"></a>TopGID</strong>: specifies the GID (2) of the Backend group in the Top Cgroup.</p>
            </td>
            </tr>
            <tr id="en-us_topic_0059777958_r3bbdbf32c9a54aaeb216b0c132d62439"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059777958_a7eae4871ce5c4b2b8ab519f7dbc3f0e8"><a name="en-us_topic_0059777958_a7eae4871ce5c4b2b8ab519f7dbc3f0e8"></a><a name="en-us_topic_0059777958_a7eae4871ce5c4b2b8ab519f7dbc3f0e8"></a>5</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059777958_a2656aced855847baa02b9208adcfabd9"><a name="en-us_topic_0059777958_a2656aced855847baa02b9208adcfabd9"></a><a name="en-us_topic_0059777958_a2656aced855847baa02b9208adcfabd9"></a>Vacuum</p>
            </td>
            </tr>
            <tr id="en-us_topic_0059777958_r4bdc9c26155048b7b6fef177826bb6f9"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059777958_aad0efd2996714e8fbad3d9d970f10017"><a name="en-us_topic_0059777958_aad0efd2996714e8fbad3d9d970f10017"></a><a name="en-us_topic_0059777958_aad0efd2996714e8fbad3d9d970f10017"></a>20</p>
            </td>
            <td class="cellrowborder" rowspan="2" valign="top" width="13.900000000000002%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059777958_ad7825e742b514ec2871344b0bc037279"><a name="en-us_topic_0059777958_ad7825e742b514ec2871344b0bc037279"></a><a name="en-us_topic_0059777958_ad7825e742b514ec2871344b0bc037279"></a>Class Cgroup</p>
            </td>
            <td class="cellrowborder" valign="top" width="15.61%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059777958_a7cf846331fb24b13b663a961e3e2905c"><a name="en-us_topic_0059777958_a7cf846331fb24b13b663a961e3e2905c"></a><a name="en-us_topic_0059777958_a7cf846331fb24b13b663a961e3e2905c"></a>DefaultClass</p>
            </td>
            <td class="cellrowborder" rowspan="2" valign="top" width="31.55%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059777958_ac93ff437c8ba41ea9d7e35368d3ab5bb"><a name="en-us_topic_0059777958_ac93ff437c8ba41ea9d7e35368d3ab5bb"></a><a name="en-us_topic_0059777958_ac93ff437c8ba41ea9d7e35368d3ab5bb"></a>The number <strong id="b11143746184018"><a name="b11143746184018"></a><a name="b11143746184018"></a>20</strong> in the parentheses indicates that the <strong id="b5144164615408"><a name="b5144164615408"></a><a name="b5144164615408"></a>DefaultClass</strong> Cgroup takes up 20% of the Class Cgroup resources. The number <strong id="b5144144614015"><a name="b5144144614015"></a><a name="b5144144614015"></a>40</strong> in the parentheses indicates that the <strong id="b41442467402"><a name="b41442467402"></a><a name="b41442467402"></a>class1</strong> Cgroup takes up 40% of the Class Cgroup resources. There are only two Class Cgroups currently. Therefore, the system resource quotas for the Class Cgroups (499) are allocated in the ratio of 20:40 (166:332).</p>
            </td>
            <td class="cellrowborder" rowspan="2" valign="top" width="26.52%" headers="mcps1.2.6.1.5 "><a name="en-us_topic_0059777958_u01f01475a56e48468034a2f15ebcd156"></a><a name="en-us_topic_0059777958_u01f01475a56e48468034a2f15ebcd156"></a><ul id="en-us_topic_0059777958_u01f01475a56e48468034a2f15ebcd156"><li><strong id="b1583845064016"><a name="b1583845064016"></a><a name="b1583845064016"></a>TopGID</strong>: GID (3) of the Class Cgroups in a Top Cgroup to which the <strong id="b1883985012407"><a name="b1883985012407"></a><a name="b1883985012407"></a>DefaultClass</strong> and <strong id="b9839165064012"><a name="b9839165064012"></a><a name="b9839165064012"></a>class1</strong> Cgroups belong.</li><li><strong id="b93432525405"><a name="b93432525405"></a><a name="b93432525405"></a>MaxLevel</strong>: maximum number of levels for Workload Cgroups in a Class Cgroup. This parameter is set to <strong id="b734345212407"><a name="b734345212407"></a><a name="b734345212407"></a>1</strong> for <strong id="b19343652154013"><a name="b19343652154013"></a><a name="b19343652154013"></a>DefaultClass</strong> because it has no Workload Cgroups.</li><li><strong id="b784885334011"><a name="b784885334011"></a><a name="b784885334011"></a>RemPCT</strong>: percentage of remaining resources in a Class Cgroup after its resources are allocated to Workload Cgroups. For example, the percentage of remaining resources in the <strong id="b1714255612400"><a name="b1714255612400"></a><a name="b1714255612400"></a>class1</strong> Cgroup is 70%.</li></ul>
            </td>
            </tr>
            <tr id="en-us_topic_0059777958_rb09775a1dc284a5badceb435d1fa0deb"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059777958_a47e5ba42370049b0a39138e3b7028243"><a name="en-us_topic_0059777958_a47e5ba42370049b0a39138e3b7028243"></a><a name="en-us_topic_0059777958_a47e5ba42370049b0a39138e3b7028243"></a>21</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059777958_a952d4b454c754614961bd0acc1d8eb14"><a name="en-us_topic_0059777958_a952d4b454c754614961bd0acc1d8eb14"></a><a name="en-us_topic_0059777958_a952d4b454c754614961bd0acc1d8eb14"></a>class1</p>
            </td>
            </tr>
            <tr id="en-us_topic_0059777958_r69f1f4dcc43042d49dbf46ac0cc7fd5a"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059777958_a3d0e978aa70947b7bf8ee28f7f69ef41"><a name="en-us_topic_0059777958_a3d0e978aa70947b7bf8ee28f7f69ef41"></a><a name="en-us_topic_0059777958_a3d0e978aa70947b7bf8ee28f7f69ef41"></a>86</p>
            </td>
            <td class="cellrowborder" valign="top" width="13.900000000000002%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059777958_a00b2084dc9164cdbb7c2152fb45144ac"><a name="en-us_topic_0059777958_a00b2084dc9164cdbb7c2152fb45144ac"></a><a name="en-us_topic_0059777958_a00b2084dc9164cdbb7c2152fb45144ac"></a>Workload Cgroup</p>
            </td>
            <td class="cellrowborder" valign="top" width="15.61%" headers="mcps1.2.6.1.3 "><p id="p1643572385820"><a name="p1643572385820"></a><a name="p1643572385820"></a>grp1:2</p>
            <p id="en-us_topic_0059777958_a35c42c0dbaf341eda30f77c6dfe3206a"><a name="en-us_topic_0059777958_a35c42c0dbaf341eda30f77c6dfe3206a"></a><a name="en-us_topic_0059777958_a35c42c0dbaf341eda30f77c6dfe3206a"></a>(This name is composed of the name of a Workload Cgroup and its level in the Class Cgroup. This <strong id="b1695171154117"><a name="b1695171154117"></a><a name="b1695171154117"></a>grp1:2</strong> Cgroup is the first Workload Cgroup under the <strong id="b10967119416"><a name="b10967119416"></a><a name="b10967119416"></a>class1</strong> Cgroup, and its level is 2. Each Class Cgroup contains a maximum of 10 levels of Workload Cgroups.)</p>
            </td>
            <td class="cellrowborder" valign="top" width="31.55%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059777958_aa56d91049b224ed2a92027036762be85"><a name="en-us_topic_0059777958_aa56d91049b224ed2a92027036762be85"></a><a name="en-us_topic_0059777958_aa56d91049b224ed2a92027036762be85"></a>In this example, this Workload Cgroup takes up 30% of <strong id="b7647112164119"><a name="b7647112164119"></a><a name="b7647112164119"></a>class1</strong> Cgroup resources (332 x 30% = 99).</p>
            </td>
            <td class="cellrowborder" valign="top" width="26.52%" headers="mcps1.2.6.1.5 "><a name="en-us_topic_0059777958_u37d2117f9f64408ea81e8167d73d9153"></a><a name="en-us_topic_0059777958_u37d2117f9f64408ea81e8167d73d9153"></a><ul id="en-us_topic_0059777958_u37d2117f9f64408ea81e8167d73d9153"><li><strong id="b93122417411"><a name="b93122417411"></a><a name="b93122417411"></a>ClsGID</strong>: GID of the <strong id="b031244164115"><a name="b031244164115"></a><a name="b031244164115"></a>class1</strong> Cgroup to which this Workload Cgroup belongs.</li><li><strong id="b10391266411"><a name="b10391266411"></a><a name="b10391266411"></a>WDLevel</strong>: Level of this Workload Cgroup in the corresponding Class Cgroup.</li></ul>
            </td>
            </tr>
            <tr id="en-us_topic_0059777958_ra51ec99f046248e4a80f1357d7cbbbf6"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059777958_aac66021fdd084e699cf47892c7aac50f"><a name="en-us_topic_0059777958_aac66021fdd084e699cf47892c7aac50f"></a><a name="en-us_topic_0059777958_aac66021fdd084e699cf47892c7aac50f"></a>724</p>
            </td>
            <td class="cellrowborder" rowspan="4" valign="top" width="13.900000000000002%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059777958_a31622eb38f454fe4bb0e201ca2bf7af7"><a name="en-us_topic_0059777958_a31622eb38f454fe4bb0e201ca2bf7af7"></a><a name="en-us_topic_0059777958_a31622eb38f454fe4bb0e201ca2bf7af7"></a>Timeshare Cgroup</p>
            </td>
            <td class="cellrowborder" valign="top" width="15.61%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059777958_aebc6436beb654da299f46f73c7c73c86"><a name="en-us_topic_0059777958_aebc6436beb654da299f46f73c7c73c86"></a><a name="en-us_topic_0059777958_aebc6436beb654da299f46f73c7c73c86"></a>Low</p>
            </td>
            <td class="cellrowborder" valign="top" width="31.55%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0059777958_aac1ccc37de00462f869d63432b3ea2ed"><a name="en-us_topic_0059777958_aac1ccc37de00462f869d63432b3ea2ed"></a><a name="en-us_topic_0059777958_aac1ccc37de00462f869d63432b3ea2ed"></a>-</p>
            </td>
            <td class="cellrowborder" rowspan="4" valign="top" width="26.52%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0059777958_aacc9155fa98446588808649ce29fc559"><a name="en-us_topic_0059777958_aacc9155fa98446588808649ce29fc559"></a><a name="en-us_topic_0059777958_aacc9155fa98446588808649ce29fc559"></a><strong id="b43981810124115"><a name="b43981810124115"></a><a name="b43981810124115"></a>Rate</strong>: rate of resources allocated to a Timeshare Cgroup. The <strong id="b153995109418"><a name="b153995109418"></a><a name="b153995109418"></a>Low</strong> Cgroup has the minimum rate 1 and the <strong id="b5399141010417"><a name="b5399141010417"></a><a name="b5399141010417"></a>Rush</strong> Cgroup has the maximum rate 8. The resource rate for <strong id="b2600511164110"><a name="b2600511164110"></a><a name="b2600511164110"></a>Rush</strong>:<strong id="b1360011113412"><a name="b1360011113412"></a><a name="b1360011113412"></a>High</strong>:<strong id="b3600151144111"><a name="b3600151144111"></a><a name="b3600151144111"></a>Medium</strong>:<strong id="b9600191115412"><a name="b9600191115412"></a><a name="b9600191115412"></a>Low</strong> is <strong id="b36001411194115"><a name="b36001411194115"></a><a name="b36001411194115"></a>8</strong>:<strong id="b260131115418"><a name="b260131115418"></a><a name="b260131115418"></a>4</strong>:<strong id="b1360114112414"><a name="b1360114112414"></a><a name="b1360114112414"></a>2</strong>:<strong id="b1601111114110"><a name="b1601111114110"></a><a name="b1601111114110"></a>1</strong> under a Timeshare Cgroup.</p>
            </td>
            </tr>
            <tr id="en-us_topic_0059777958_rc218d5326a2744f3aea8ed9b5854b8ea"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059777958_ace62508ac2424abb8a994e84175e63c2"><a name="en-us_topic_0059777958_ace62508ac2424abb8a994e84175e63c2"></a><a name="en-us_topic_0059777958_ace62508ac2424abb8a994e84175e63c2"></a>725</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059777958_adf5d2ad6919d4242a0314c0d5893c4c7"><a name="en-us_topic_0059777958_adf5d2ad6919d4242a0314c0d5893c4c7"></a><a name="en-us_topic_0059777958_adf5d2ad6919d4242a0314c0d5893c4c7"></a>Medium</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059777958_a899b0db2dbf34c108c267729c1aaa715"><a name="en-us_topic_0059777958_a899b0db2dbf34c108c267729c1aaa715"></a><a name="en-us_topic_0059777958_a899b0db2dbf34c108c267729c1aaa715"></a>-</p>
            </td>
            </tr>
            <tr id="en-us_topic_0059777958_rc8fa48c94125496f99288554c61d6b0f"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059777958_a73d01fb5ca31424492c153ae6313011b"><a name="en-us_topic_0059777958_a73d01fb5ca31424492c153ae6313011b"></a><a name="en-us_topic_0059777958_a73d01fb5ca31424492c153ae6313011b"></a>726</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059777958_ad5ed1e4abafc46a7888901c64ae77fb0"><a name="en-us_topic_0059777958_ad5ed1e4abafc46a7888901c64ae77fb0"></a><a name="en-us_topic_0059777958_ad5ed1e4abafc46a7888901c64ae77fb0"></a>High</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059777958_a931e04a7e35645719108993544a8de7b"><a name="en-us_topic_0059777958_a931e04a7e35645719108993544a8de7b"></a><a name="en-us_topic_0059777958_a931e04a7e35645719108993544a8de7b"></a>-</p>
            </td>
            </tr>
            <tr id="en-us_topic_0059777958_r6f7fb17cc6f7454c8a73990b1439ec2b"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059777958_aeaa5db9e07664c90994f3cc96133eedd"><a name="en-us_topic_0059777958_aeaa5db9e07664c90994f3cc96133eedd"></a><a name="en-us_topic_0059777958_aeaa5db9e07664c90994f3cc96133eedd"></a>727</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0059777958_a1f2edf02225d433cb2209eaaf68d3815"><a name="en-us_topic_0059777958_a1f2edf02225d433cb2209eaaf68d3815"></a><a name="en-us_topic_0059777958_a1f2edf02225d433cb2209eaaf68d3815"></a>Rush</p>
            </td>
            <td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0059777958_aa5ee50649fe74d3d938f201dd5cdfbf3"><a name="en-us_topic_0059777958_aa5ee50649fe74d3d938f201dd5cdfbf3"></a><a name="en-us_topic_0059777958_aa5ee50649fe74d3d938f201dd5cdfbf3"></a>-</p>
            </td>
            </tr>
            </tbody>
            </table>

        2.  View the Cgroup tree in the OS.

            **gs\_cgroup -P**  displays a Cgroup tree. In the tree,  **shares**  indicates the value of  **cpu.shares**, which specifies the dynamic quota of CPU resources in the OS, and  **cpus**  indicates the value of  **cpuset.cpus**, which specifies the dynamic quota of CPUSET resources in the OS \(number of cores that a Cgroup can use\).

            ```
            gs_cgroup -P
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




## Parameter Description<a name="en-us_topic_0059777958_s2d970209405e437385b0b3d8666e825e"></a>

-   -a \[--abort\]

    Terminates a job when it exceeds an exception threshold.

-   -b pct

    Specifies the percentage of resources of the  **Top Backend**  Cgroup taken by a Backend Cgroup. The  **-B **_backendname_  parameter must be specified as well.

    Value Range

    -   The value ranges from 1 to 99. If this parameter is not set, the default CPU quota accounts for 20% of the Vacuum Cgroup and  **80%**  of the DefaultBackend Cgroup, respectively. The quota sum for the Vacuum and DefaultBackend Cgroups must be less than 100%.

-   -B name

    Specifies the name of a Backend Cgroup. Only the  **-u**  parameter can be used to change the resource quota for this Cgroup.

    The  **-b percent**  and  **-B **_backendname_  parameters need to be specified to set the resource proportion of database backend threads.

    Value range: a string with a maximum of 64 bytes.

-   -c

    Creates a Cgroup and specifies its name.

    A common user can specify  **-c**  and  **-S** _classname_  to create a Class Cgroup. If  **-G** _groupname_  is specified as well, a Workload Cgroup will be created under the Class Cgroup. The Workload Cgroup is at the bottom layer in the Class Cgroup \(Layer-4 is the bottom layer.\)

-   -d

    Deletes Cgroups.

    A common user can specify  **-d**  and  **-S** _classname_  parameters to delete the created  **Class**  Cgroups. If the  **-G** _groupname_  parameter is specified as well, a  **Workload**  Cgroup under the  **Class**  Cgroup is deleted, and related threads are put into the  **DefaultClass:DefaultWD:1**  Cgroup. If the  **Workload**  Cgroups to be deleted locate at a high level \(Level 1 is the top level\), adjust hierarchy of lower-level Cgroups, create the new Cgroups-related threads, and load them to the new Cgroups.

-   -E data

    Specifies the exception thresholds, including  **blocktime**,  **elapsedtime**,  **allcputime**,  **spillsize**,  **broadcastsize**,  **qualificationtime**, and  **cpuskewpercent**. The thresholds are separated by commas \(,\).  **0**  indicates that the setting is canceled. If the parameter is set to an invalid value, an error will be prompted.

    **Table  2**  Exception threshold types

    <a name="table55183313474"></a>
    <table><thead align="left"><tr id="row161093118474"><th class="cellrowborder" valign="top" width="12.871287128712872%" id="mcps1.2.5.1.1"><p id="p1561023111479"><a name="p1561023111479"></a><a name="p1561023111479"></a>Exception Threshold Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="51.48514851485149%" id="mcps1.2.5.1.2"><p id="p561012316470"><a name="p561012316470"></a><a name="p561012316470"></a>Description</p>
    </th>
    <th class="cellrowborder" valign="top" width="19.801980198019802%" id="mcps1.2.5.1.3"><p id="p661083144711"><a name="p661083144711"></a><a name="p661083144711"></a>Value Range (<strong id="b197688814045745"><a name="b197688814045745"></a><a name="b197688814045745"></a>0</strong> Indicates Setting Canceled)</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.841584158415841%" id="mcps1.2.5.1.4"><p id="p561163119474"><a name="p561163119474"></a><a name="p561163119474"></a>Operation upon Exception</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row18611123134713"><td class="cellrowborder" valign="top" width="12.871287128712872%" headers="mcps1.2.5.1.1 "><p id="p1461123111476"><a name="p1461123111476"></a><a name="p1461123111476"></a>blocktime</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.48514851485149%" headers="mcps1.2.5.1.2 "><p id="p861193110472"><a name="p861193110472"></a><a name="p861193110472"></a>Job blocking duration. The unit is second. <strong id="b113380311345745"><a name="b113380311345745"></a><a name="b113380311345745"></a>blocktime</strong> includes the total time spent in global and local concurrent queuing.</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.801980198019802%" headers="mcps1.2.5.1.3 "><p id="p06112031194720"><a name="p06112031194720"></a><a name="p06112031194720"></a>0–UINT_MAX</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.841584158415841%" headers="mcps1.2.5.1.4 "><p id="p1161143174711"><a name="p1161143174711"></a><a name="p1161143174711"></a>abort</p>
    </td>
    </tr>
    <tr id="row15611153115475"><td class="cellrowborder" valign="top" width="12.871287128712872%" headers="mcps1.2.5.1.1 "><p id="p156111931114717"><a name="p156111931114717"></a><a name="p156111931114717"></a>elapsedtime</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.48514851485149%" headers="mcps1.2.5.1.2 "><p id="p1761116313473"><a name="p1761116313473"></a><a name="p1761116313473"></a>Execution time of a job that has not been finished. The unit is second. The time indicates the duration from the start point of execution to the current time point.</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.801980198019802%" headers="mcps1.2.5.1.3 "><p id="p461118318475"><a name="p461118318475"></a><a name="p461118318475"></a>0–UINT_MAX</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.841584158415841%" headers="mcps1.2.5.1.4 "><p id="p196118319475"><a name="p196118319475"></a><a name="p196118319475"></a>abort</p>
    </td>
    </tr>
    <tr id="row1961111313473"><td class="cellrowborder" valign="top" width="12.871287128712872%" headers="mcps1.2.5.1.1 "><p id="p13611183134711"><a name="p13611183134711"></a><a name="p13611183134711"></a>allcputime</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.48514851485149%" headers="mcps1.2.5.1.2 "><p id="p19611143119478"><a name="p19611143119478"></a><a name="p19611143119478"></a>Total CPU time spent in executing a job on all nodes. The unit is second.</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.801980198019802%" headers="mcps1.2.5.1.3 "><p id="p196111931114716"><a name="p196111931114716"></a><a name="p196111931114716"></a>0–UINT_MAX</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.841584158415841%" headers="mcps1.2.5.1.4 "><p id="p1361113144717"><a name="p1361113144717"></a><a name="p1361113144717"></a>abort, penalty</p>
    </td>
    </tr>
    <tr id="row161163194714"><td class="cellrowborder" valign="top" width="12.871287128712872%" headers="mcps1.2.5.1.1 "><p id="p136111531174718"><a name="p136111531174718"></a><a name="p136111531174718"></a>cpuskewpercent</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.48514851485149%" headers="mcps1.2.5.1.2 "><p id="p116111331184710"><a name="p116111331184710"></a><a name="p116111331184710"></a>CPU time skew of a job executed on nodes. The value depends on the setting of <strong id="b10387706591"><a name="b10387706591"></a><a name="b10387706591"></a>qualificationtime</strong>.</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.801980198019802%" headers="mcps1.2.5.1.3 "><p id="p661114315473"><a name="p661114315473"></a><a name="p661114315473"></a>0–100</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.841584158415841%" headers="mcps1.2.5.1.4 "><p id="p361183154720"><a name="p361183154720"></a><a name="p361183154720"></a>abort, penalty</p>
    </td>
    </tr>
    <tr id="row46117310476"><td class="cellrowborder" valign="top" width="12.871287128712872%" headers="mcps1.2.5.1.1 "><p id="p36111231194715"><a name="p36111231194715"></a><a name="p36111231194715"></a>qualificationtime</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.48514851485149%" headers="mcps1.2.5.1.2 "><p id="p156112315474"><a name="p156112315474"></a><a name="p156112315474"></a>Interval for checking the CPU skew. The unit is second. This parameter must be set together with <strong id="b84235270613494"><a name="b84235270613494"></a><a name="b84235270613494"></a>cpuskewpercent</strong>.</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.801980198019802%" headers="mcps1.2.5.1.3 "><p id="p1561123110471"><a name="p1561123110471"></a><a name="p1561123110471"></a>0–UINT_MAX</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.841584158415841%" headers="mcps1.2.5.1.4 "><p id="p1861133115473"><a name="p1861133115473"></a><a name="p1861133115473"></a>none</p>
    </td>
    </tr>
    <tr id="row15611143112476"><td class="cellrowborder" valign="top" width="12.871287128712872%" headers="mcps1.2.5.1.1 "><p id="p156113314471"><a name="p156113314471"></a><a name="p156113314471"></a>spillsize</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.48514851485149%" headers="mcps1.2.5.1.2 "><p id="p10611143114719"><a name="p10611143114719"></a><a name="p10611143114719"></a>Amount of job data spilled to disks on nodes. The unit is MB.</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.801980198019802%" headers="mcps1.2.5.1.3 "><p id="p1761133112477"><a name="p1761133112477"></a><a name="p1761133112477"></a>0–UINT_MAX</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.841584158415841%" headers="mcps1.2.5.1.4 "><p id="p161133194717"><a name="p161133194717"></a><a name="p161133194717"></a>abort</p>
    </td>
    </tr>
    <tr id="row561163114479"><td class="cellrowborder" valign="top" width="12.871287128712872%" headers="mcps1.2.5.1.1 "><p id="p7611143118475"><a name="p7611143118475"></a><a name="p7611143118475"></a>broadcastsize</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.48514851485149%" headers="mcps1.2.5.1.2 "><p id="p1661293124717"><a name="p1661293124717"></a><a name="p1661293124717"></a>Size of broadcast operators of a job on nodes. The unit is MB.</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.801980198019802%" headers="mcps1.2.5.1.3 "><p id="p206127315472"><a name="p206127315472"></a><a name="p206127315472"></a>0–UINT_MAX</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.841584158415841%" headers="mcps1.2.5.1.4 "><p id="p17612931154717"><a name="p17612931154717"></a><a name="p17612931154717"></a>abort</p>
    </td>
    </tr>
    </tbody>
    </table>

-   -h \[--help\]

    Displays the command help information.

-   -H

    Collects  **$GAUSSHOME**  information among the current users.

    Value range: a string with a maximum of 1023 characters.

-   -f

    Specifies the range of core quantity used by the  **Gaussdb**  Cgroup. The range format can be  _a-b_  or  _a_. For other Cgroups, use the  **--fixed**  parameter to set the range of core quantity.

-   --fixed

    Specifies the percentage of cores allocated for a Cgroup's parent group that the Cgroup can use, or specifies the I/O resources.

    **--fixed**  is set together with  **-s**,  **-g**,  **-t**, and  **-b**  when the kernel range ratio is set.

    The ratio is between 0 and 100. The sum of kernels of the same level is less than or equal to 100. The value  **0**  indicates that the kernel number of a level is same as that of the upper level. The CPU quota for all the Cgroups is set to  **0**  by default.  **-f**  and  **--fixed**  cannot be configured at the same time. After  **--fixed**  is set, the  **-f**  range will be automatically invalid. The ratio will be displayed in  **-p**  as the quota value.

    When the I/O resource quota is set,  **-R**,  **-r**,  **-W**, and  **-w**  are used together. 

-   -g pct

    Specifies the percentage of resources in a Class Cgroup taken by a Workload Cgroup. The  **-G** _groupname_  parameter needs to be specified as well. The  **-g pct**  parameter can be used with the  **-c**  parameter to create a Cgroup or with the  **-u**  parameter to update a Workload Cgroup.

    Value range: 1 to 99. By default, the CPU quota of a Workload Cgroup is 20%. The sum of CPU quotas for all Workload Cgroups must be less than 99%.

-   -G name

    Specifies the name of a Workload Cgroup. The  **-S **_classname_  parameter needs to be set to specify the Class Cgroup to which the Workload Cgroup belongs. The  **-G **_name_  parameter can be used with  **-c**  to create a Cgroup, with  **-d**  to delete a Cgroup, and with  **-u**  to update the resource quota for a Cgroup. Note that  _name_  in the  **-G **_name_  parameter cannot be a default Timeshare Cgroup name, including  **Low**,  **Medium**,  **High**, and  **Rush**.

    If a user creates a Workload Cgroup, the name must contain any colons \(:\). Names of Cgroups must be different.

    Value range: a string with a maximum of 28 bytes

-   -N \[--group\] name

    Shows the Cgroup name,  **class:wg**  for short.

-   -p

    Shows information about Cgroup configuration files.

-   -P

    Shows the structure of the Cgroup tree.

-   --penalty

    Demotes a job when the job exceeds an exception threshold. If no operation is specified,  **--penalty**  is used by default.

-   -r data

    Only updates the upper limit of data reading for I/O resources, that is, sets the value of  **blkio.throttle.read\_bps\_device**. This parameter is a string consisting of  **major:minor value**, in which  **major**  indicates the major device number of the disk to be accessed,  **minor**  indicates the minor device number, and  **value**  indicates the upper limit of the number of read operations. The upper limit ranges from  **0**  to  **ULONG\_MAX**, and  **0**  indicates that the number of read operations is not restricted. This parameter needs to be used with the  **-u**  parameter and Cgroup names. If both the  **Class**  Cgroup name and  **Workload**  Cgroup name are specified, this parameter is used for the  **Workload**  Cgroup.

    Value range: a string with a maximum of 32 characters.

-   -R data

    Only updates the upper limit of I/O resources used to read data per second, that is, sets the value of  **blkio.throttle.read\_iops\_device**. The value of this parameter is the same as that of the  **-r**  parameter. This parameter needs to be used with the  **-u**  parameter and Cgroup names. If both the  **Class**  Cgroup name and  **Workload**  Cgroup name are specified, this parameter is used for the  **Workload**  Cgroup.

    Value range: a string with a maximum of 32 characters.

-   --recover

    Rolls back only the latest addition, deletion, or modification made to the Class and Workload Cgroups.

-   --revert

    Restores to the default status of the Cgroup.

-   -D mpoint

    Specifies a mount point. The default mount point is  **/dev/cgroup/subsystem**.

-   -m

    Mounts the Cgroup.

-   -M

    Unmounts the Cgroup.

-   -U

    Specifies the database username.

-   --refresh

    Updates the status of the Cgroup.

-   -s pct

    Specifies the percentage of resources in the top  **Class**  Cgroup taken by a  **Class**  Cgroup. The  **-S **_classname_  parameter needs to be specified as well. The  **-s pct**  parameter can be used with the  **-c**  parameter to create a Cgroup or with the  **-u**  parameter to update a  **Class**  Cgroup.

    Value range: 1 to 99. By default, the CPU quota of the Class Cgroup is set to 20%. In R6C10, the CPU quota of the Class Cgroup is set to 40%. During the upgrade, the quota is not updated. The sum of the CPU quota of the newly created Class Cgroup and the default  **DefaultClass**  quota must be less than 100%.

-   -S name

    Specifies the name of a Class Cgroup. This parameter can be used with  **-c**  to create a Cgroup, with  **-d**  to delete a Cgroup, or with  **-u**  to update resource quota for a Cgroup. The name of a sub-Class Cgroup cannot contain the colon \(:\).

    Value range: a string with a maximum of 31 bytes.

-   -t percent

    Specifies the percentage of resources for top Cgroups \(**Root**,  **Gaussdb**: omm, Backend, and Class Cgroups\). The  **-T name**  parameter needs to be specified as well. If this parameter is used to specify resource percentage for the  **-T Root**  Cgroup, the name shown in the Cgroup configuration file is  **Root**.  _percent_  indicates the percentage of the value of  **blkio.weight**, and its minimum value is  **10%**. The CPU resource quota, such as the value of  **cpu.shares**  cannot be changed. If this parameter is used to specify resource percentage for the  **Gaussdb:omm**  Cgroup, the parameter value indicates the percentage of CPU resources taken by the  **Gaussdb:omm**  Cgroup. \(The  **cpu.shares**  value for the  **Gaussdb:omm**  Cgroup can be obtained based on the quota 1024 for the  **Root**  Cgroup and the condition that only one database is available for the current system.\) The I/O resource quota is 1000 and will not change. If this parameter is used to specify resource percentage for the  **Class**  or  **Backend**  Cgroup, the parameter value indicates the percentage of resources in the  **Gaussdb**  Cgroup taken by the  **Class**  or  **Backend**  Cgroup.

    Value range: 1 to 99. By default, the quota of the Class Cgroup is 60%, and the quota of the Backend Cgroup is 40%. Modify the quota of the Class Cgroup and automatically update the quota of the Backend Cgroup so that the sum quota of the Backend and Class Cgroups is 100%.

-   -T name

    Specifies the names of top Cgroups.

    Value range: a string with a maximum of 64 bytes.

-   -u

    Updates Cgroups.

-   -V \[--version\]

    Displays version information about the  **gs\_cgroup**  tool.

-   -w data

    Only updates the upper limit of I/O resources used to write data per second, that is, sets the value of  **blkio.throttle.write\_bps\_device**. The value of this parameter is the same as that of the  **-r**  parameter. The  **-u**  parameter and the Cgroup name need to be specified as well. If both the  **Class**  Cgroup name and  **Workload**  Cgroup name are specified, this parameter is used for the  **Workload**  Cgroup.

    Value range: a string with a maximum of 32 characters.

-   -W data

    Only updates the upper limit of I/O resources used to write data per second, that is, sets the value of  **blkio.throttle.write\_iops\_device**. The value of this parameter is the same as that of the  **-r**  parameter. The  **-u**  parameter and the Cgroup name need to be specified as well. If both the  **Class**  Cgroup name and  **Workload**  Cgroup name are specified, this parameter is used for the  **Workload**  Cgroup.

    Value range: a string with a maximum of 32 characters.


>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>Use the following method to obtain the  **major:minor**  value for the disk. For example, obtain the number of the disk corresponding to the  **/mpp**  directory.
>```
>> df 
>Filesystem      1K-blocks      Used  Available Use% Mounted on
>/dev/sda1       524173248  41012784  456534008   9% /
>devtmpfs         66059264       236   66059028   1% /dev
>tmpfs            66059264        88   66059176   1% /dev/shm
>/dev/sdb1      2920486864 135987592 2784499272   5% /data
>/dev/sdc1      2920486864  24747868 2895738996   1% /data1
>/dev/sdd1      2920486864  24736704 2895750160   1% /mpp
>/dev/sde1      2920486864  24750068 2895736796   1% /mpp1
>> ls -l /dev/sdd
>brw-rw---- 1 root disk 8, 48 Feb 26 11:20 /dev/sdd
>```

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>
>Check the disk number of sdd rather than sdd1. Otherwise, an error will be reported.
>If the length of I/O quota limitation after the upgrade exceeds the allowed maximum length of the string, the update will not be saved in the configuration file. If the maximum length of the string is set to 96 and I/O resources of more than eight disks are updated, the string limitation may be exceeded. The update will not be saved in the configuration file though the update succeeds.

