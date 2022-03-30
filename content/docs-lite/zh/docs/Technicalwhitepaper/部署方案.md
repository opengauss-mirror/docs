# 部署方案<a name="ZH-CN_TOPIC_0289895652"></a>

openGauss主要支持单机部署和一主多备部署两种部署形态。openGauss不提供CM集群管理工具，故后续描述高可用方案是基于用户自行提供的集群管理、仲裁和恢复的基础上完成。

## 常用概念<a name="zh-cn_topic_0283139012_section27911144155312"></a>

-   单机

    单机指的是只有一个数据库实例。

-   双机

    双机指的是系统中存在主备数据库实例，主实例支持读写，备实例支持只读。

-   冷热备份

    冷备份： 是指备份就是一个简单的备份集，不可以提供服务。

    热备份： 是指备份数据库可以对外提供服务 。


## 部署形态汇总<a name="zh-cn_topic_0283139012_section906197544"></a>

单机和双机两种部署形态方案介绍请见[表1](#zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_table138801827134510)。

**表 1**  openGauss部署形态汇总表

<a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_table138801827134510"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_row88806271452"><th class="cellrowborder" valign="top" width="7.830783078307831%" id="mcps1.2.8.1.1"><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p9880227184518"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p9880227184518"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p9880227184518"></a>部署形态</p>
</th>
<th class="cellrowborder" valign="top" width="11.561156115611562%" id="mcps1.2.8.1.2"><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p1388836114920"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p1388836114920"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p1388836114920"></a>技术方案</p>
</th>
<th class="cellrowborder" valign="top" width="10.051005100510052%" id="mcps1.2.8.1.3"><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p133131537114919"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p133131537114919"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p133131537114919"></a>高可用</p>
</th>
<th class="cellrowborder" valign="top" width="10.671067106710671%" id="mcps1.2.8.1.4"><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p6990111871915"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p6990111871915"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p6990111871915"></a>基础设置要求</p>
</th>
<th class="cellrowborder" valign="top" width="10.41104110411041%" id="mcps1.2.8.1.5"><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p103111337154915"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p103111337154915"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p103111337154915"></a>业务场景</p>
</th>
<th class="cellrowborder" valign="top" width="20.99209920992099%" id="mcps1.2.8.1.6"><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p7880132764518"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p7880132764518"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p7880132764518"></a>场景特点</p>
</th>
<th class="cellrowborder" valign="top" width="28.48284828482848%" id="mcps1.2.8.1.7"><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p1088012784511"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p1088012784511"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p1088012784511"></a>技术规格</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_row18811277455"><td class="cellrowborder" valign="top" width="7.830783078307831%" headers="mcps1.2.8.1.1 "><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p9881162744520"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p9881162744520"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p9881162744520"></a>单机</p>
</td>
<td class="cellrowborder" valign="top" width="11.561156115611562%" headers="mcps1.2.8.1.2 "><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p288192718457"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p288192718457"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p288192718457"></a>单机</p>
</td>
<td class="cellrowborder" valign="top" width="10.051005100510052%" headers="mcps1.2.8.1.3 "><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p17881172714513"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p17881172714513"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p17881172714513"></a>无高可用能力</p>
</td>
<td class="cellrowborder" valign="top" width="10.671067106710671%" headers="mcps1.2.8.1.4 "><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p1198919186193"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p1198919186193"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p1198919186193"></a>单机房</p>
</td>
<td class="cellrowborder" valign="top" width="10.41104110411041%" headers="mcps1.2.8.1.5 "><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p868019214187"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p868019214187"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p868019214187"></a>物理机</p>
</td>
<td class="cellrowborder" valign="top" width="20.99209920992099%" headers="mcps1.2.8.1.6 "><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_ul61827011712"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_ul61827011712"></a><ul id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_ul61827011712"><li>对系统的可靠性和可用性无任何要求</li><li>主要用于体验试用以及调测场景</li></ul>
</td>
<td class="cellrowborder" valign="top" width="28.48284828482848%" headers="mcps1.2.8.1.7 "><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_ul83681420142312"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_ul83681420142312"></a><ul id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_ul83681420142312"><li>系统RTO和RPO不可控</li><li>无实例级容灾能力，一旦出现实例故障，系统不可用</li><li>一旦实例级数据丢失，则数据永久丢失，无法恢复</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_row16881142774510"><td class="cellrowborder" valign="top" width="7.830783078307831%" headers="mcps1.2.8.1.1 "><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p8881192712456"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p8881192712456"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p8881192712456"></a>主备</p>
</td>
<td class="cellrowborder" valign="top" width="11.561156115611562%" headers="mcps1.2.8.1.2 "><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p488172764514"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p488172764514"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p488172764514"></a>主机+备机</p>
</td>
<td class="cellrowborder" valign="top" width="10.051005100510052%" headers="mcps1.2.8.1.3 "><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p888116276453"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p888116276453"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p888116276453"></a>抵御实例级故障</p>
</td>
<td class="cellrowborder" valign="top" width="10.671067106710671%" headers="mcps1.2.8.1.4 "><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p2988191815196"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p2988191815196"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p2988191815196"></a>单机房</p>
</td>
<td class="cellrowborder" valign="top" width="10.41104110411041%" headers="mcps1.2.8.1.5 "><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p12948205813196"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p12948205813196"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p12948205813196"></a>物理机</p>
</td>
<td class="cellrowborder" valign="top" width="20.99209920992099%" headers="mcps1.2.8.1.6 "><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_ul617272701813"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_ul617272701813"></a><ul id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_ul617272701813"><li>节点间无网络延迟</li><li>要求承受数据库内实例级故障</li><li>适用于对系统可靠性要求不高的场景</li></ul>
</td>
<td class="cellrowborder" valign="top" width="28.48284828482848%" headers="mcps1.2.8.1.7 "><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_ul15571133112234"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_ul15571133112234"></a><ul id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_ul15571133112234"><li>RPO=0</li><li>实例故障RTO&lt;10s</li><li>无AZ级容灾能力</li><li>推荐主备最大可用模式</li></ul>
</td>
</tr>
</tbody>
</table>

## 软硬件规格说明<a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_section9327172719508"></a>

openGauss支持的CPU和OS范围：

**表 2**  openGauss软硬件规格

<a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_table112131848163420"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_row1521418485347"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p521474873420"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p521474873420"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p521474873420"></a>交付模式</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p182145480348"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p182145480348"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p182145480348"></a>CPU</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p1021415481346"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p1021415481346"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p1021415481346"></a>OS</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_row18214144823411"><td class="cellrowborder" rowspan="2" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p42141148193411"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p42141148193411"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p42141148193411"></a>线下</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p1214174883410"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p1214174883410"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p1214174883410"></a>X86</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p438431555610"><a name="p438431555610"></a><a name="p438431555610"></a>EulerOS V2.0SP10、SUSE 12.5</p>
</td>
</tr>
<tr id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_row221414883410"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p11214164893414"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p11214164893414"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p11214164893414"></a>ARM</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p6214348143417"><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p6214348143417"></a><a name="zh-cn_topic_0283139012_zh-cn_topic_0243295239_zh-cn_topic_0240782908_p6214348143417"></a>EulerOS V2.0SP10</p>
</td>
</tr>
</tbody>
</table>

## 部署方案介绍<a name="zh-cn_topic_0283139012_section185145125515"></a>

整体部署方案可以分为两类：单机部署、一主一备部署。

-   单机部署

    单机部署形态是一种非常特殊的部署形态，这种形态对于可靠性、可用性均无任何保证。由于只有一个数据副本，一旦发生数据损坏、丢失，只能通过物理备份恢复数据。这种部署形态，一般用于数据库体验用户，以及测试环境做语法功能调测等场景。不建议用于商业现网运行。

    **图 1**  单机部署形态图<a name="zh-cn_topic_0283139012_zh-cn_topic_0243295241_zh-cn_topic_0243253012_fig1128133574111"></a>  
    

    ![](figures/zh-cn_image_0289895654.png)

-   主备部署

    主备模式相当于两个数据副本，主机和备机各一个数据副本，备机接受日志、执行日志回放。

    **图 2**  主备部署形态图<a name="zh-cn_topic_0283139012_zh-cn_topic_0243295242_zh-cn_topic_0243253013_fig1843505845112"></a>  
    ![](figures/主备部署形态图.png "主备部署形态图")


