# gs\_cgroup<a name="ZH-CN_TOPIC_0000001147386014"></a>

## 背景信息<a name="zh-cn_topic_0059777958_s70c9bd657f6844e6a03a4daa7aa46cd6"></a>

集群环境下做批量任务处理时，多任务复杂性，会导致不同机器间的负载差距很大。为了充分利用集群资源，负载管理变得尤为重要。gs\_cgroup是openGauss提供的负载管理工具。负责创建默认控制组、创建用户自定义控制组、删除用户自定义控制组、更新用户自定义组的资源配额和资源限额、显示控制组配置文件内容、显示控制组树形结构和删除用户的所有控制组。

gs\_cgroup工具为使用数据库的操作系统用户创建Cgroups配置文件，并且在操作系统中生成用户设定的Cgroups。同时为用户提供增加、删除Cgroups、更新Cgroups资源配额、设定Cgroups的CPU或IO限额、设定异常处理阈值及相应操作等服务。此工具只负责当前操作系统节点的Cgroups操作，使用时需在各个节点上调用相同命令语句进行统一配置。

这里假设读者已经了解了负载管理的相关原理，具体请参考《性能优化指南》中“资源负载管理”章节。

## 使用示例<a name="zh-cn_topic_0059777958_s9a5160c94e894511a98780d923399a96"></a>

- 使用普通用户或数据库管理员执行命令。

  1.前置条件：需设置GAUSSHOME环境变量为数据库安装目录；且root用户已创建普通用户默认的控制组。

  2.创建控制组及设置对应的资源配额，以便在数据库中运行作业时，指定到此控制组，使用此控制组管理的资源；通常数据库管理员为每个数据库用户创建Class组。  
  a.  创建Class控制组和Workload控制组。  

  ```
  gs_cgroup -c -S class1 -s 40  
  ```

   创建当前用户新的Class Cgroups命名为“class1”，资源配额为总Class的40%。

  ```
   gs_cgroup -c -S class1 -G grp1 -g 20
  ```

  创建当前用户新的“class1” Cgroups下属的Workload控制组，命名为“grp1”，资源配额为“class1” Cgroups的20%。  

   b.  删除grp1控制组和Class控制组。

  ```
      gs_cgroup -d -S class1 -G grp1
  ```

  ​	删除当前用户已建的“grp1”Cgroups。

  ```
   gs_cgroup -d -S class1
  ```


  ​    删除当前用户已建的“class1”Cgroups。

  >![](public_sys-resources/icon-notice.png) **须知：** 
  >如果删除Class控制组，则Workload控制组也被删除。

3.更新已创建控制组的资源配额。  
a.  更新动态资源配额。

```
gs_cgroup -u -S class1 -G grp1 -g 30
```

​    更新当前用户的class1 Cgroups下属grp1 Cgroups资源配额为class1 Cgroups的30%。

b.  更新限制资源配额。

```
gs_cgroup --fixed -u -S class1 -G grp1 -g 30
```


​    更新当前用户的class1 Cgroups下属grp1 Cgroups限制使用CPU核数范围占上一级class1可用核数的30%。

4.更新Gaussdb的CPU核数范围。

```
gs_cgroup -u -T Gaussdb -f 0-20
```

更新Gaussdb进程使用的CPU核数为0-20。

>![](public_sys-resources/icon-note.png) **说明：**   
>-f参数只适用于对Gaussdb设置核数范围。对于其他各控制组，如需设置核数范围，需要使用--fixed参数。

5.设置异常处理信息（class:wg组需存在）。  
a.  设置组class:wg下的作业阻塞到1200秒或执行2400秒时执行终止动作：

```
gs_cgroup -S class -G wg -E "blocktime=1200,elapsedtime=2400" -a
```

b.  设置组class:wg下的作业下盘数据量达到256MB或大表广播数据量达到100MB时执行终止动作：

```
gs_cgroup -S class -G wg -E "spillsize=256,broadcastsize=100" -a
```

c.  设置组Class下的作业在所有数据库节点上CPU总时间到达100s时执行降级动作：

```
gs_cgroup -S class -E "allcputime=100" --penalty
```

d.  设置组Class下的作业在所有数据库节点上执行时间到达2400秒，倾斜率达到90时执行降级动作:

```
gs_cgroup -S class -E "qualificationtime=2400,cpuskewpercent=90"
```

>![](public_sys-resources/icon-notice.png) **须知：**   
>给控制组设置异常处理信息，需要确保对应的控制组已经创建。指定多个阈值时用“，”分隔，不指定任何动作时默认为“penalty”操作。

6.设置控制组使用的核数范围。

设置组class:wg的核数范围占Class控制组的20%

```
gs_cgroup -S class -G wg -g 20 --fixed -u
```

>![](public_sys-resources/icon-notice.png) **须知：** 
>Class或Workload核数范围必须通过指定--fixed参数设置。

7.回退上一个步骤。

```
gs_cgroup --recover
```

>![](public_sys-resources/icon-note.png) **说明：** 
>
>--recover只支持对Class控制组和Workload控制组的增删改操作进行回退，且只支持回退一次操作。

8.查看已创建的控制组信息。  
a.  查看配置文件中控制组信息。

```
gs_cgroup -p 
```

控制组配置信息

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

 上述示例查看到的控制组配置信息如下表所示。

**表 1**  控制组配置信息

<table><thead align="left"><tr id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_raf32468133ec42a98fa0a24a84f6e542"><th class="cellrowborder" valign="top" width="12.42%" id="mcps1.2.6.1.1"><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a35afb8adcfcc44caab1a15a95bc460f3"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a35afb8adcfcc44caab1a15a95bc460f3"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a35afb8adcfcc44caab1a15a95bc460f3"></a><b>GID</b></p>
</th>
<th class="cellrowborder" valign="top" width="13.900000000000002%" id="mcps1.2.6.1.2"><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a5e63574953494fda87d121cc98444458"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a5e63574953494fda87d121cc98444458"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a5e63574953494fda87d121cc98444458"></a><b>类型</b></p>
</th>
<th class="cellrowborder" valign="top" width="15.61%" id="mcps1.2.6.1.3"><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a64f986ec452e42c284a6f32d6156dfb8"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a64f986ec452e42c284a6f32d6156dfb8"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a64f986ec452e42c284a6f32d6156dfb8"></a><b>名称</b></p>
</th>
<th class="cellrowborder" valign="top" width="31.55%" id="mcps1.2.6.1.4"><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ae59345dfad974f2981d49561fde6edde"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ae59345dfad974f2981d49561fde6edde"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ae59345dfad974f2981d49561fde6edde"></a><b>Percent（%）信息</b></p>
</th>
<th class="cellrowborder" valign="top" width="26.52%" id="mcps1.2.6.1.5"><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_af84180bce2c64a849829b13fdb1e21d5"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_af84180bce2c64a849829b13fdb1e21d5"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_af84180bce2c64a849829b13fdb1e21d5"></a><b>特定信息</b></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_r40c9836246fc434cb849097be80f4238"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a2917dc8c27254a51a345ee36e67a1720"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a2917dc8c27254a51a345ee36e67a1720"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a2917dc8c27254a51a345ee36e67a1720"></a>0</p>
</td>
<td class="cellrowborder" rowspan="4" valign="top" width="13.900000000000002%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a06d02d08bbc2479ab2f65b40bd7b1aa2"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a06d02d08bbc2479ab2f65b40bd7b1aa2"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a06d02d08bbc2479ab2f65b40bd7b1aa2"></a>Top控制组</p>
</td>
<td class="cellrowborder" valign="top" width="15.61%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a5aa339132fd84fffb152ea53482ffcad"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a5aa339132fd84fffb152ea53482ffcad"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a5aa339132fd84fffb152ea53482ffcad"></a>Root</p>
</td>
<td class="cellrowborder" valign="top" width="31.55%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a338af691b8b349658412db97f3db8076"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a338af691b8b349658412db97f3db8076"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a338af691b8b349658412db97f3db8076"></a>1000代表总的系统资源为1000份。</p>
<p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a1581165ca9ae4dd080b5f9b82f5de2e7"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a1581165ca9ae4dd080b5f9b82f5de2e7"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a1581165ca9ae4dd080b5f9b82f5de2e7"></a>括号中的50代表IO资源的50%。</p>
<p id="zh-cn_topic_0085032167_p7162175943818"><a name="zh-cn_topic_0085032167_p7162175943818"></a><a name="zh-cn_topic_0085032167_p7162175943818"></a><span id="text72654133610"><a name="text72654133610"></a><a name="text72654133610"></a>openGauss</span>不通过控制组对IO资源做控制，因此下面其他控制组信息中仅涉及CPU配额情况。</p>
</td>
<td class="cellrowborder" valign="top" width="26.52%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a6eb5d42ab11f40ef961f8058258bd179"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a6eb5d42ab11f40ef961f8058258bd179"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a6eb5d42ab11f40ef961f8058258bd179"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_r983cfc45212e4992b1950009f0e56504"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a1eaf0bdb85924deab2806570de44f3af"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a1eaf0bdb85924deab2806570de44f3af"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a1eaf0bdb85924deab2806570de44f3af"></a>1</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a90c7540a2a9f46af829f8337a21fcbe7"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a90c7540a2a9f46af829f8337a21fcbe7"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a90c7540a2a9f46af829f8337a21fcbe7"></a>Gaussdb:<span id="text1785391015013"><a name="text1785391015013"></a><a name="text1785391015013"></a>omm</span></p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_abcad05a44a894c50ade6a6054e936ddf"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_abcad05a44a894c50ade6a6054e936ddf"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_abcad05a44a894c50ade6a6054e936ddf"></a>系统中只运行一套数据库程序，Gaussdb:<span id="text4458181275015"><a name="text4458181275015"></a><a name="text4458181275015"></a>omm</span>控制组默认配额为833，数据库程序和非数据库程序的比值为（833:167=5:1）。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ab57c2123aa8a4f648fcaf14225f6c74a"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ab57c2123aa8a4f648fcaf14225f6c74a"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ab57c2123aa8a4f648fcaf14225f6c74a"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_rb51a7c2bd35249f58e7520595cfb74f4"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a7f152f6bf6484613a26adc92a992a612"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a7f152f6bf6484613a26adc92a992a612"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a7f152f6bf6484613a26adc92a992a612"></a>2</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ae34f31263140431ab5b0eb6800bbe56a"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ae34f31263140431ab5b0eb6800bbe56a"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ae34f31263140431ab5b0eb6800bbe56a"></a>Backend</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_adcc253590a304f1eba6dbc3f56a42b31"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_adcc253590a304f1eba6dbc3f56a42b31"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_adcc253590a304f1eba6dbc3f56a42b31"></a>Backend和Class括号中的40和60，代表Backend占用Gaussdb:dbuser控制组40%的资源，Class占用Gaussdb:dbuser控制组60%的资源。</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a55cc1dc9b6d8417996044cd8757ef808"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a55cc1dc9b6d8417996044cd8757ef808"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a55cc1dc9b6d8417996044cd8757ef808"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_rc5b04760cc9443d7894575b28d6f82bc"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a073225e9f51c4d45afb1ccfcb9c98f62"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a073225e9f51c4d45afb1ccfcb9c98f62"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a073225e9f51c4d45afb1ccfcb9c98f62"></a>3</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a94cd7a0e32c84ee9a996e6f8c9db099a"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a94cd7a0e32c84ee9a996e6f8c9db099a"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a94cd7a0e32c84ee9a996e6f8c9db099a"></a>Class</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a56886ba6fcde430f9a6eb0f257b4f3bf"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a56886ba6fcde430f9a6eb0f257b4f3bf"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a56886ba6fcde430f9a6eb0f257b4f3bf"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_rebb21435963c46d69a04d0ab35e0caf8"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a5078655f17a24de5839b2be2076ccba1"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a5078655f17a24de5839b2be2076ccba1"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a5078655f17a24de5839b2be2076ccba1"></a>4</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="13.900000000000002%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a139683e2a3e843ea93915c9d37de3cf8"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a139683e2a3e843ea93915c9d37de3cf8"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a139683e2a3e843ea93915c9d37de3cf8"></a>Backend控制组</p>
</td>
<td class="cellrowborder" valign="top" width="15.61%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a89fe583c176e448da9f169b3f01e5e27"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a89fe583c176e448da9f169b3f01e5e27"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a89fe583c176e448da9f169b3f01e5e27"></a>DefaultBackend</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="31.55%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a632dadada0c2425298fa5621a11ca772"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a632dadada0c2425298fa5621a11ca772"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a632dadada0c2425298fa5621a11ca772"></a>括号中的80和20代表DefaultBackend和Vacuum占用Backend控制组80%和20%的资源。</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="26.52%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ac7d60f8f0b3742d19ef61e5b17b8201f"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ac7d60f8f0b3742d19ef61e5b17b8201f"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ac7d60f8f0b3742d19ef61e5b17b8201f"></a>TopGID：代表Top类型控制组中Backend组的GID，即2。</p>
</td>
</tr>
<tr id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_r3bbdbf32c9a54aaeb216b0c132d62439"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a7eae4871ce5c4b2b8ab519f7dbc3f0e8"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a7eae4871ce5c4b2b8ab519f7dbc3f0e8"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a7eae4871ce5c4b2b8ab519f7dbc3f0e8"></a>5</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a2656aced855847baa02b9208adcfabd9"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a2656aced855847baa02b9208adcfabd9"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a2656aced855847baa02b9208adcfabd9"></a>Vacuum</p>
</td>
</tr>
<tr id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_r4bdc9c26155048b7b6fef177826bb6f9"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aad0efd2996714e8fbad3d9d970f10017"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aad0efd2996714e8fbad3d9d970f10017"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aad0efd2996714e8fbad3d9d970f10017"></a>20</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="13.900000000000002%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ad7825e742b514ec2871344b0bc037279"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ad7825e742b514ec2871344b0bc037279"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ad7825e742b514ec2871344b0bc037279"></a>Class控制组</p>
</td>
<td class="cellrowborder" valign="top" width="15.61%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a7cf846331fb24b13b663a961e3e2905c"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a7cf846331fb24b13b663a961e3e2905c"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a7cf846331fb24b13b663a961e3e2905c"></a>DefaultClass</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="31.55%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ac93ff437c8ba41ea9d7e35368d3ab5bb"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ac93ff437c8ba41ea9d7e35368d3ab5bb"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ac93ff437c8ba41ea9d7e35368d3ab5bb"></a>DefaultClass和class1的20和40代表占Class控制组20%和40%的资源。因为当前只有两个Class组，所有它们按照20:40的比例分配Class控制组499的系统配额，则分别为166和332。</p>
</td>
<td class="cellrowborder" rowspan="2" valign="top" width="26.52%" headers="mcps1.2.6.1.5 "><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_u01f01475a56e48468034a2f15ebcd156"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_u01f01475a56e48468034a2f15ebcd156"></a><ul id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_u01f01475a56e48468034a2f15ebcd156"><li>TopGID：代表DefaultClass和class1所属的上层控制（Top控制组中的Class组）的GID，即3。</li><li>MaxLevel：Class组当前含有的Workload组的最大层次，DefaultClass没有Workload Cgroup，其数值为1。</li><li>RemPCT：代表Class组分配Workload组后剩余的资源百分比。如class1中剩余的百分比为70。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_rb09775a1dc284a5badceb435d1fa0deb"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a47e5ba42370049b0a39138e3b7028243"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a47e5ba42370049b0a39138e3b7028243"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a47e5ba42370049b0a39138e3b7028243"></a>21</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a952d4b454c754614961bd0acc1d8eb14"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a952d4b454c754614961bd0acc1d8eb14"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a952d4b454c754614961bd0acc1d8eb14"></a>class1</p>
</td>
</tr>
<tr id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_r69f1f4dcc43042d49dbf46ac0cc7fd5a"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a3d0e978aa70947b7bf8ee28f7f69ef41"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a3d0e978aa70947b7bf8ee28f7f69ef41"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a3d0e978aa70947b7bf8ee28f7f69ef41"></a>86</p>
</td>
<td class="cellrowborder" valign="top" width="13.900000000000002%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a00b2084dc9164cdbb7c2152fb45144ac"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a00b2084dc9164cdbb7c2152fb45144ac"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a00b2084dc9164cdbb7c2152fb45144ac"></a>Workload控制组</p>
</td>
<td class="cellrowborder" valign="top" width="15.61%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0085032167_p1643572385820"><a name="zh-cn_topic_0085032167_p1643572385820"></a><a name="zh-cn_topic_0085032167_p1643572385820"></a>grp1:2</p>
<p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a35c42c0dbaf341eda30f77c6dfe3206a"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a35c42c0dbaf341eda30f77c6dfe3206a"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a35c42c0dbaf341eda30f77c6dfe3206a"></a>（该名称由Workload Cgroup Name和其在class中的层级组成，它是class1的第一个Workload组，层级为2，每个Class组最多10层Workload Cgroup。）</p>
</td>
<td class="cellrowborder" valign="top" width="31.55%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aa56d91049b224ed2a92027036762be85"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aa56d91049b224ed2a92027036762be85"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aa56d91049b224ed2a92027036762be85"></a>根据设置，其占class1的百分比为30，则为332*30%=99。</p>
</td>
<td class="cellrowborder" valign="top" width="26.52%" headers="mcps1.2.6.1.5 "><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_u37d2117f9f64408ea81e8167d73d9153"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_u37d2117f9f64408ea81e8167d73d9153"></a><ul id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_u37d2117f9f64408ea81e8167d73d9153"><li>ClsGID：代表Workload控制组所属的上层控制组（class1控制组）的GID。</li><li>WDLevel：代表当前Workload Cgroup在对应的Class组所在的层次。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ra51ec99f046248e4a80f1357d7cbbbf6"><td class="cellrowborder" valign="top" width="12.42%" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aac66021fdd084e699cf47892c7aac50f"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aac66021fdd084e699cf47892c7aac50f"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aac66021fdd084e699cf47892c7aac50f"></a>724</p>
</td>
<td class="cellrowborder" rowspan="4" valign="top" width="13.900000000000002%" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a31622eb38f454fe4bb0e201ca2bf7af7"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a31622eb38f454fe4bb0e201ca2bf7af7"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a31622eb38f454fe4bb0e201ca2bf7af7"></a>Timeshare控制组</p>
</td>
<td class="cellrowborder" valign="top" width="15.61%" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aebc6436beb654da299f46f73c7c73c86"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aebc6436beb654da299f46f73c7c73c86"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aebc6436beb654da299f46f73c7c73c86"></a>Low</p>
</td>
<td class="cellrowborder" valign="top" width="31.55%" headers="mcps1.2.6.1.4 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aac1ccc37de00462f869d63432b3ea2ed"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aac1ccc37de00462f869d63432b3ea2ed"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aac1ccc37de00462f869d63432b3ea2ed"></a>-</p>
</td>
<td class="cellrowborder" rowspan="4" valign="top" width="26.52%" headers="mcps1.2.6.1.5 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aacc9155fa98446588808649ce29fc559"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aacc9155fa98446588808649ce29fc559"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aacc9155fa98446588808649ce29fc559"></a>Rate：代表Timeshare中的分配比例，Low最少为1，Rush最高为8。这四个Timeshare组的资源配比为Rush:High:Medium:Low=8:4:2:1。</p>
</td>
</tr>
<tr id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_rc218d5326a2744f3aea8ed9b5854b8ea"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ace62508ac2424abb8a994e84175e63c2"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ace62508ac2424abb8a994e84175e63c2"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ace62508ac2424abb8a994e84175e63c2"></a>725</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_adf5d2ad6919d4242a0314c0d5893c4c7"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_adf5d2ad6919d4242a0314c0d5893c4c7"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_adf5d2ad6919d4242a0314c0d5893c4c7"></a>Medium</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a899b0db2dbf34c108c267729c1aaa715"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a899b0db2dbf34c108c267729c1aaa715"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a899b0db2dbf34c108c267729c1aaa715"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_rc8fa48c94125496f99288554c61d6b0f"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a73d01fb5ca31424492c153ae6313011b"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a73d01fb5ca31424492c153ae6313011b"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a73d01fb5ca31424492c153ae6313011b"></a>726</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ad5ed1e4abafc46a7888901c64ae77fb0"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ad5ed1e4abafc46a7888901c64ae77fb0"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_ad5ed1e4abafc46a7888901c64ae77fb0"></a>High</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a931e04a7e35645719108993544a8de7b"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a931e04a7e35645719108993544a8de7b"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a931e04a7e35645719108993544a8de7b"></a>-</p>
</td>
</tr>
<tr id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_r6f7fb17cc6f7454c8a73990b1439ec2b"><td class="cellrowborder" valign="top" headers="mcps1.2.6.1.1 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aeaa5db9e07664c90994f3cc96133eedd"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aeaa5db9e07664c90994f3cc96133eedd"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aeaa5db9e07664c90994f3cc96133eedd"></a>727</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.2 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a1f2edf02225d433cb2209eaaf68d3815"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a1f2edf02225d433cb2209eaaf68d3815"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_a1f2edf02225d433cb2209eaaf68d3815"></a>Rush</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.6.1.3 "><p id="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aa5ee50649fe74d3d938f201dd5cdfbf3"><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aa5ee50649fe74d3d938f201dd5cdfbf3"></a><a name="zh-cn_topic_0085032167_zh-cn_topic_0059777958_aa5ee50649fe74d3d938f201dd5cdfbf3"></a>-</p>
</td>
</tr>
</tbody>
</table>

​    b.  查看操作系统中树形结构的控制组信息  
​    gs\_cgroup -P显示控制组树形结构信息，其中shares代表操作系统中CPU资源的动态资源配额“cpu.shares”的数值，cpus代表操作系统中CPUSET资源的动态资源限额“cpuset.cpus”的数值，指的是该控制组能够使用的核数范围。

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




## 参数说明<a name="zh-cn_topic_0059777958_s2d970209405e437385b0b3d8666e825e"></a>

-   -a \[--abort\]

    对满足设定的异常阈值的作业执行终止动作。

-   -b pct

    Backend Cgroups占用Top Backend资源的百分比，需同时指定“-B backendname”参数。

    取值范围

    -   为1 \~ 99。在不进行设置的情况下，默认CPU配额设置为Vacuum控制组占20%，DefaultBackend控制组占80%。Vacuum和DefaultBackend控制组配额之和设置应小于100%。

-   -B name

    Backend Cgroups名称，仅可指定“-u”参数来更新此Cgroups的资源配额。

    -b percent和-B backendname参数共同作用来控制数据库后备线程的资源比例。

    取值范围：字符串，最长为64个字节。

-   -c

    创建Cgroups并指定其标识。

    普通用户指定“-c”和“-S classname”可以创建新的Class Cgroups，如果再指定“-G groupname”则创建属于Class Cgroups的Workload Cgroups，新的Workload Cgroups位于Class Cgroups的最底层（4层是最底层）。

-   -d

    删除Cgroups及标识。

    普通用户指定“-d”和“-S classname”可以删除已有的Class Cgroups，如果再指定“-G groupname”则删除属于Class Cgroups的Workload Cgroups，并将附属的线程重置到“DefaultClass:DefaultWD:1”Cgroups中；若删除的Workload Cgroups位于Class Cgroups的高层（1层是最高层），则需调整低层的Cgroups的层级，重建新的Cgroups附属的线程加载到新的Cgroups。

-   -E data

    设定异常阈值，目前阈值包括：blocktime、elapsedtime、allcputime、spillsize、broadcastsize以及qualificationtime和cpuskewpercent，指定多个阈值时用“，”分隔。参数值0表示取消设置，设置不合法的值时会提示。

    **表 2**  异常阈值类型

    <a name="table55183313474"></a>
    <table><thead align="left"><tr id="row161093118474"><th class="cellrowborder" valign="top" width="12.871287128712872%" id="mcps1.2.5.1.1"><p id="p1561023111479"><a name="p1561023111479"></a><a name="p1561023111479"></a><b>异常阈值类型</b></p>
    </th>
    <th class="cellrowborder" valign="top" width="51.48514851485149%" id="mcps1.2.5.1.2"><p id="p561012316470"><a name="p561012316470"></a><a name="p561012316470"></a><b>说明</b></p>
    </th>
    <th class="cellrowborder" valign="top" width="19.801980198019802%" id="mcps1.2.5.1.3"><p id="p661083144711"><a name="p661083144711"></a><a name="p661083144711"></a><b>取值范围（0表示取消设置）</b></p>
    </th>
    <th class="cellrowborder" valign="top" width="15.841584158415841%" id="mcps1.2.5.1.4"><p id="p561163119474"><a name="p561163119474"></a><a name="p561163119474"></a><b>支持的异常操作</b></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row18611123134713"><td class="cellrowborder" valign="top" width="12.871287128712872%" headers="mcps1.2.5.1.1 "><p id="p1461123111476"><a name="p1461123111476"></a><a name="p1461123111476"></a>blocktime</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.48514851485149%" headers="mcps1.2.5.1.2 "><p id="p861193110472"><a name="p861193110472"></a><a name="p861193110472"></a>作业的阻塞时间，单位秒。包括全局并发排队以及局部并发排队的总时间。</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.801980198019802%" headers="mcps1.2.5.1.3 "><p id="p06112031194720"><a name="p06112031194720"></a><a name="p06112031194720"></a>0~UINT_MAX</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.841584158415841%" headers="mcps1.2.5.1.4 "><p id="p1161143174711"><a name="p1161143174711"></a><a name="p1161143174711"></a>abort</p>
    </td>
    </tr>
    <tr id="row15611153115475"><td class="cellrowborder" valign="top" width="12.871287128712872%" headers="mcps1.2.5.1.1 "><p id="p156111931114717"><a name="p156111931114717"></a><a name="p156111931114717"></a>elapsedtime</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.48514851485149%" headers="mcps1.2.5.1.2 "><p id="p1761116313473"><a name="p1761116313473"></a><a name="p1761116313473"></a>作业的已被执行时间，单位秒。从开始执行到当前所消耗的时间。</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.801980198019802%" headers="mcps1.2.5.1.3 "><p id="p461118318475"><a name="p461118318475"></a><a name="p461118318475"></a>0~UINT_MAX</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.841584158415841%" headers="mcps1.2.5.1.4 "><p id="p196118319475"><a name="p196118319475"></a><a name="p196118319475"></a>abort</p>
    </td>
    </tr>
    <tr id="row1961111313473"><td class="cellrowborder" valign="top" width="12.871287128712872%" headers="mcps1.2.5.1.1 "><p id="p13611183134711"><a name="p13611183134711"></a><a name="p13611183134711"></a>allcputime</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.48514851485149%" headers="mcps1.2.5.1.2 "><p id="p19611143119478"><a name="p19611143119478"></a><a name="p19611143119478"></a>作业在所有数据库节点上执行时所耗费的CPU总时间，单位秒。</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.801980198019802%" headers="mcps1.2.5.1.3 "><p id="p196111931114716"><a name="p196111931114716"></a><a name="p196111931114716"></a>0~UINT_MAX</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.841584158415841%" headers="mcps1.2.5.1.4 "><p id="p1361113144717"><a name="p1361113144717"></a><a name="p1361113144717"></a>abort，penalty</p>
    </td>
    </tr>
    <tr id="row161163194714"><td class="cellrowborder" valign="top" width="12.871287128712872%" headers="mcps1.2.5.1.1 "><p id="p136111531174718"><a name="p136111531174718"></a><a name="p136111531174718"></a>cpuskewpercent</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.48514851485149%" headers="mcps1.2.5.1.2 "><p id="p116111331184710"><a name="p116111331184710"></a><a name="p116111331184710"></a>作业在数据库节点上执行时的CPU时间的倾斜率，依赖于qualificationtime的设置。</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.801980198019802%" headers="mcps1.2.5.1.3 "><p id="p661114315473"><a name="p661114315473"></a><a name="p661114315473"></a>0~100</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.841584158415841%" headers="mcps1.2.5.1.4 "><p id="p361183154720"><a name="p361183154720"></a><a name="p361183154720"></a>abort，penalty</p>
    </td>
    </tr>
    <tr id="row46117310476"><td class="cellrowborder" valign="top" width="12.871287128712872%" headers="mcps1.2.5.1.1 "><p id="p36111231194715"><a name="p36111231194715"></a><a name="p36111231194715"></a>qualificationtime</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.48514851485149%" headers="mcps1.2.5.1.2 "><p id="p156112315474"><a name="p156112315474"></a><a name="p156112315474"></a>检查作业执行cpu倾斜率的间隔时间，单位秒，需同cpuskewpercent一起设置。</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.801980198019802%" headers="mcps1.2.5.1.3 "><p id="p1561123110471"><a name="p1561123110471"></a><a name="p1561123110471"></a>0~UINT_MAX</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.841584158415841%" headers="mcps1.2.5.1.4 "><p id="p1861133115473"><a name="p1861133115473"></a><a name="p1861133115473"></a>none</p>
    </td>
    </tr>
    <tr id="row15611143112476"><td class="cellrowborder" valign="top" width="12.871287128712872%" headers="mcps1.2.5.1.1 "><p id="p156113314471"><a name="p156113314471"></a><a name="p156113314471"></a>spillsize</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.48514851485149%" headers="mcps1.2.5.1.2 "><p id="p10611143114719"><a name="p10611143114719"></a><a name="p10611143114719"></a>作业在数据库节点上下盘的数据量，单位MB。</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.801980198019802%" headers="mcps1.2.5.1.3 "><p id="p1761133112477"><a name="p1761133112477"></a><a name="p1761133112477"></a>0~UINT_MAX</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.841584158415841%" headers="mcps1.2.5.1.4 "><p id="p161133194717"><a name="p161133194717"></a><a name="p161133194717"></a>abort</p>
    </td>
    </tr>
    <tr id="row561163114479"><td class="cellrowborder" valign="top" width="12.871287128712872%" headers="mcps1.2.5.1.1 "><p id="p7611143118475"><a name="p7611143118475"></a><a name="p7611143118475"></a>broadcastsize</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.48514851485149%" headers="mcps1.2.5.1.2 "><p id="p1661293124717"><a name="p1661293124717"></a><a name="p1661293124717"></a>作业在数据库节点上算子大表广播数据量，单位MB。</p>
    </td>
    <td class="cellrowborder" valign="top" width="19.801980198019802%" headers="mcps1.2.5.1.3 "><p id="p206127315472"><a name="p206127315472"></a><a name="p206127315472"></a>0~UINT_MAX</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.841584158415841%" headers="mcps1.2.5.1.4 "><p id="p17612931154717"><a name="p17612931154717"></a><a name="p17612931154717"></a>abort</p>
    </td>
    </tr>
    </tbody>
    </table>

-   -h \[--help\]

    显示命令帮助信息。

-   -H

    用户环境中$GAUSSHOME信息。

    取值范围：字符串，最长为1023个字符。

-   -f

    设置Gaussdb控制组使用的核数范围，范围必须是a-b或a的形式。其他控制组可以使用--fixed进行设置核数范围。

-   --fixed

    设置控制组使用的核数范围比例占上一层级的百分比或者设置IO资源。

    设置核数范围比例时--fixed设置核数范围与'-s' '-g' '-t' '-b' 一起使用。

    核数比例范围0-100，同一层级的核数比例总和小于或者等于100，0代表核数与上一层级相同，对于所有的控制组，CPU限额默认设置为0。-f和--fixed不能同时设置。设置--fixed之后，-f设置的范围自动失效。设置的比例以quota值在-p中进行显示。

    设置IO资源配额时，与'-R' '-r' '-W' '-w'一起使用。

-   -g pct

    指定Workload Cgroups的资源占用“Class”Cgroups资源的百分比，需同时指定“-G groupname”参数；用于创建“-c”或更新“-u”Workload Cgroups。

    取值范围为1 \~ 99。默认Workload控制组CPU配额设置为20%。各Workload控制组配额之和应小于99%。

-   -G name

    指定Workload Cgroups的名称，需同时指定“-S classname”参数来表示该group属于哪个Class Cgroups；可以连同“-c”参数创建新的Cgroups、“-d”参数删除此Cgroups及“-u”更新此Cgroups的资源配额；需要注意，此名称不可是Timeshare Cgroups的默认名称，如“Low”、“Medium”、“High”或“Rush”。

    如果用户自己创建Workload控制组，指定名称时不能指定带 ':' 的名称。不能创建同名控制组。

    取值范围：字符串，最长为28个字节。

-   -N \[--group\] name

    可以将组名简写成class:wg。

-   -p

    显示Cgroups配置文件的信息。

-   -P

    显示Cgroups树形结构信息。

-   --penalty

    对满足设定的异常阈值的作业执行降级动作，如果没有设定任何操作，则该操作将为默认操作。

-   -r data

    仅用于更新I/O资源读数据上限，用于设置“blkio.throttle.read\_bps\_device”的数值；为字符串类型，该字符串由“major:minor value”构成，其中major为要访问的磁盘的主设备号，minor为要访问的磁盘的次设备号，value为设备每秒读操作次数上限数值，取值范围为0 \~ ULONG\_MAX，其中取值0用来初始化此字段为空；需和“-u”参数及Cgroups名称一同使用；如果Class Cgroups和Workload Cgroups的名称同时指定，则只应用到Workload Cgroups。

    取值范围：字符串，最长为32个字符。

-   -R data

    仅用于更新IO资源每秒读操作次数上限，用于设置“blkio.throttle.read\_iops\_device”的数值；取值信息同“-r”参数；需和“-u”参数及Cgroups名称一同使用；如果Class Cgroups和Workload Cgroups的名称同时指定，则只应用到Workload Cgroups。

    取值范围：字符串，最长为32个字符。

-   --recover

    仅用于回退Class控制组和Workload控制组的增删改操作，且只能回退一步。

-   --revert

    恢复控制组为默认状态。

-   -D mpoint

    指定的挂载点，默认的挂载点“/dev/cgroup/subsystem”。

-   -m

    挂载cgroup。

-   -M

    取消挂载cgroup。

-   -U

    数据库用户名称。

-   --refresh

    刷新控制组状态。

-   -s pct

    指定Class Cgroups的资源占用“Top Class”Cgroups资源的百分比，需同时指定“-S classname”参数；用于创建“-c”或更新“-u”Class Cgroups。

    取值范围为1-99。默认Class控制组的CPU配额设置为20%，R6C10版本中，Class控制组的CPU配额设置为40%，升级过程中，不会对此配额做更新。新创建的Class控制组的CPU配额以及默认的DefaultClass之和应小于100%。

-   -S name

    指定Class group的名称；可以连同“-c”参数创建新的Cgroups、“-d”参数删除此Cgroups及“-u”更新此Cgroups的资源配额。创建子Class名称不能带‘：’。

    取值范围：字符串，最长为31个字节。

-   -t percent

    指定Top Cgroups（Root、Gaussdb:omm、Backend和Class Cgroups）占用资源的百分比，需同时指定“-T name”参数。若指定“-T Root”所在的Cgroups，其在Cgroups配置文件中显示的名称为“Root”，此数值代表的含义是blkio.weight值的百分比，最小值为10%，CPU资源配额如cpu.shares的数值不可修改；若指定“Gaussdb:omm” Cgroups，则表示占用整个系统CPU资源的百分比（可根据Root Cgroups的默认CPU配额1024得出该组的cpu.shares数值，此数值默认当前系统仅含有1套数据库环境），对于IO资源配额为1000，不再变化;若指定“Class”或“Backend”Cgroups，则表示资源占用“Gaussdb”Cgroups资源的百分比。

    取值范围为1 \~ 99。默认Class控制组配额为60%， Backend控制组配额为40%。修改Class控制组配额，同时会自动更新Backend控制组配额，使两者之和保持100%。

-   -T name

    指定Top Cgroups的名称。

    取值范围：字符串，最长为64个字节。

-   -u

    更新Cgroups。

-   -V \[--version\]

    显示gs\_cgroup工具的版本信息。

-   -w data

    仅用于更新I/O资源每秒写数据上限，用于设置“blkio.throttle.write\_bps\_device”的数值。取值信息同“-r”参数，需和“-u”参数及Cgroups名称一同使用。如果Class Cgroups和Workload Cgroups的名称同时指定，则只应用到Workload Cgroups。

    取值范围：字符串，最长为32个字符。

-   -W data

    仅用于更新IO资源每秒写操作次数上限，用于设置“blkio.throttle.write\_iops\_device”的数值。取值信息同“-r”参数，需和“-u”参数及Cgroups名称一同使用。如果Class Cgroups和Workload Cgroups的名称同时指定，则只应用到Workload Cgroups。

    取值范围：字符串，最长为32个字符。


>![](public_sys-resources/icon-note.png) **说明：** 
>
>对于磁盘major:minor的编号获取，可以通过下面方式。如获取/mpp目录对应的磁盘编号：
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


>![](public_sys-resources/icon-notice.png) **须知：** 
>这里一定要查sdd的磁盘号，不能是sdd1的磁盘号。否则执行时会报错。
>如果更新IO的限额配置信息超过了可允许的最大配置字串，则新的更新不存储在配置文件中。如当前设置的字串长度为96，更新IO的磁盘数量大于8个，则有可能超出字串限制，更新成功，但是不存储在配置文件中。

