# PG\_STAT\_REPLICATION

PG\_STAT\_REPLICATION视图用于描述日志同步状态信息，例如发起端发送日志位置，接收端接收日志位置等。

**表 1**  PG\_STAT\_REPLICATION字段

<a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_tb2059cf057754a69bd7bdb1bea15c223"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_rec0f8202e1634adba102af8b58bfc358"><th class="cellrowborder" valign="top" width="31.453145314531454%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_afda49225861e4daba514b5919e904a4f"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_afda49225861e4daba514b5919e904a4f"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_afda49225861e4daba514b5919e904a4f"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="35.21352135213521%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_af45105035a124cd593f8ca1a10d05f71"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_af45105035a124cd593f8ca1a10d05f71"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_af45105035a124cd593f8ca1a10d05f71"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a3108a1c0586c4fedb1ac59aca42e5c1c"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a3108a1c0586c4fedb1ac59aca42e5c1c"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a3108a1c0586c4fedb1ac59aca42e5c1c"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_rece4cfacac6447749d39ec30f0265d12"><td class="cellrowborder" valign="top" width="31.453145314531454%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a3b4314b7c15646bcad697d28e70723b5"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a3b4314b7c15646bcad697d28e70723b5"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a3b4314b7c15646bcad697d28e70723b5"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="35.21352135213521%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a738e4c84b33a490d94dbbda0143bc99c"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a738e4c84b33a490d94dbbda0143bc99c"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a738e4c84b33a490d94dbbda0143bc99c"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_abd406f3b07794e6a98828003ad57d13e"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_abd406f3b07794e6a98828003ad57d13e"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_abd406f3b07794e6a98828003ad57d13e"></a>线程的PID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_r244835adba7e43f38d87568ee95fc6da"><td class="cellrowborder" valign="top" width="31.453145314531454%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a76ba59a3c23c498da84f2847b6176eb0"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a76ba59a3c23c498da84f2847b6176eb0"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a76ba59a3c23c498da84f2847b6176eb0"></a>usesysid</p>
</td>
<td class="cellrowborder" valign="top" width="35.21352135213521%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_ae69bb32849b447d1950993a8f0604e0a"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_ae69bb32849b447d1950993a8f0604e0a"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_ae69bb32849b447d1950993a8f0604e0a"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_aa745eaddea5140e5a9d1391b2f7e5c8e"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_aa745eaddea5140e5a9d1391b2f7e5c8e"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_aa745eaddea5140e5a9d1391b2f7e5c8e"></a>用户系统ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_rdb475d17bdf041dd819f0a4bd313e507"><td class="cellrowborder" valign="top" width="31.453145314531454%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a4b8f045679004a60bfd6a5e6cd785146"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a4b8f045679004a60bfd6a5e6cd785146"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a4b8f045679004a60bfd6a5e6cd785146"></a>usename</p>
</td>
<td class="cellrowborder" valign="top" width="35.21352135213521%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a0555cd8e62214cbca46084ccb49936e4"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a0555cd8e62214cbca46084ccb49936e4"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a0555cd8e62214cbca46084ccb49936e4"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_af86c950a30e348db818578680c1e2c1b"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_af86c950a30e348db818578680c1e2c1b"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_af86c950a30e348db818578680c1e2c1b"></a>用户名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_rb38ccc5dd51a41068d8411325bfa2557"><td class="cellrowborder" valign="top" width="31.453145314531454%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a6314f1b58f42494caa1da6eddff65e8a"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a6314f1b58f42494caa1da6eddff65e8a"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a6314f1b58f42494caa1da6eddff65e8a"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="35.21352135213521%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_abdcba94d8c0a4a7cb16760c3798ebf1e"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_abdcba94d8c0a4a7cb16760c3798ebf1e"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_abdcba94d8c0a4a7cb16760c3798ebf1e"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a18bc938a742945a78900807b57a53858"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a18bc938a742945a78900807b57a53858"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a18bc938a742945a78900807b57a53858"></a>程序名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_r4566bfb6ae7a49019bc3cb84ef1f90ae"><td class="cellrowborder" valign="top" width="31.453145314531454%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a98dab7602b45485db5a452ac211bfd61"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a98dab7602b45485db5a452ac211bfd61"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a98dab7602b45485db5a452ac211bfd61"></a>client_addr</p>
</td>
<td class="cellrowborder" valign="top" width="35.21352135213521%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a2d7bdfd324c6426cafb28667c406ecd1"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a2d7bdfd324c6426cafb28667c406ecd1"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a2d7bdfd324c6426cafb28667c406ecd1"></a>inet</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_ab935581a024744c4a4be43ea481dd625"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_ab935581a024744c4a4be43ea481dd625"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_ab935581a024744c4a4be43ea481dd625"></a>客户端地址。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_r939555bb4dc840aabbad5bad079a13ef"><td class="cellrowborder" valign="top" width="31.453145314531454%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a495e4fd50c084d2abd096f55580fac38"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a495e4fd50c084d2abd096f55580fac38"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a495e4fd50c084d2abd096f55580fac38"></a>client_hostname</p>
</td>
<td class="cellrowborder" valign="top" width="35.21352135213521%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a078b223106894668a2a7caac31be4fc0"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a078b223106894668a2a7caac31be4fc0"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a078b223106894668a2a7caac31be4fc0"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a506c09d815484c299a761eb6365cd49a"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a506c09d815484c299a761eb6365cd49a"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a506c09d815484c299a761eb6365cd49a"></a>客户端名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_rfc9acdd1a6634b78800566a80f65f0e7"><td class="cellrowborder" valign="top" width="31.453145314531454%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a975c2352830d4ca5acbbb68222bf50d7"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a975c2352830d4ca5acbbb68222bf50d7"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a975c2352830d4ca5acbbb68222bf50d7"></a>client_port</p>
</td>
<td class="cellrowborder" valign="top" width="35.21352135213521%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a437cd84c0e7c4118b8413e29c816a6be"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a437cd84c0e7c4118b8413e29c816a6be"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a437cd84c0e7c4118b8413e29c816a6be"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_aefc17abea15c42178172f3dce48c1e59"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_aefc17abea15c42178172f3dce48c1e59"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_aefc17abea15c42178172f3dce48c1e59"></a>客户端端口。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_ra5aeee34a0b24d4fb4efa668169698f8"><td class="cellrowborder" valign="top" width="31.453145314531454%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_acd75d164a72c4bf2bbf1ed2d0cb94aee"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_acd75d164a72c4bf2bbf1ed2d0cb94aee"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_acd75d164a72c4bf2bbf1ed2d0cb94aee"></a>backend_start</p>
</td>
<td class="cellrowborder" valign="top" width="35.21352135213521%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a9002ee8fc4b64f3d812a7c1e98cef6d0"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a9002ee8fc4b64f3d812a7c1e98cef6d0"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a9002ee8fc4b64f3d812a7c1e98cef6d0"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a4483f1dcb1c74dbcacd16a9bf69bfae0"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a4483f1dcb1c74dbcacd16a9bf69bfae0"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a4483f1dcb1c74dbcacd16a9bf69bfae0"></a>程序启动时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_r212d8e2b35a24b2b828761a40521149e"><td class="cellrowborder" valign="top" width="31.453145314531454%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a46715c096fbc4892900996f285a50cfb"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a46715c096fbc4892900996f285a50cfb"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a46715c096fbc4892900996f285a50cfb"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="35.21352135213521%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a0c770a2371b14390bfdf09407f09810f"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a0c770a2371b14390bfdf09407f09810f"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a0c770a2371b14390bfdf09407f09810f"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137065_p16270641135419"><a name="zh-cn_topic_0283137065_p16270641135419"></a><a name="zh-cn_topic_0283137065_p16270641135419"></a>日志复制的状态：</p>
<a name="zh-cn_topic_0283137065_ul158009492546"></a><a name="zh-cn_topic_0283137065_ul158009492546"></a><ul id="zh-cn_topic_0283137065_ul158009492546"><li>追赶状态。</li><li>一致的流状态。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_r9dd8b3fefc7e416d8ef895fc9d8ad0a1"><td class="cellrowborder" valign="top" width="31.453145314531454%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a3d614dcbe4fb430887ea7f4eb8224aad"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a3d614dcbe4fb430887ea7f4eb8224aad"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a3d614dcbe4fb430887ea7f4eb8224aad"></a>sender_sent_location</p>
</td>
<td class="cellrowborder" valign="top" width="35.21352135213521%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a728e9c07c67c44e7b063419ff5c807f1"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a728e9c07c67c44e7b063419ff5c807f1"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a728e9c07c67c44e7b063419ff5c807f1"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_ab5dce055e0304c94b6340d8f75515b95"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_ab5dce055e0304c94b6340d8f75515b95"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_ab5dce055e0304c94b6340d8f75515b95"></a>发送端发送日志位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_r8dc1a9a8ea0d4003a41e1cdb1b014e6a"><td class="cellrowborder" valign="top" width="31.453145314531454%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a787ce25144014f5a9e36b0b0b6623ff2"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a787ce25144014f5a9e36b0b0b6623ff2"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a787ce25144014f5a9e36b0b0b6623ff2"></a>receiver_write_location</p>
</td>
<td class="cellrowborder" valign="top" width="35.21352135213521%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a02da915ce8c4485da37edd1e55ad35a8"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a02da915ce8c4485da37edd1e55ad35a8"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a02da915ce8c4485da37edd1e55ad35a8"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_ac5e7287e53a94633b42a35107abca5c7"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_ac5e7287e53a94633b42a35107abca5c7"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_ac5e7287e53a94633b42a35107abca5c7"></a>接收端write日志位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_r5fbe693b21b447d88fafcd84fee88156"><td class="cellrowborder" valign="top" width="31.453145314531454%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_af373cada59c04e369d08d608299b9e73"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_af373cada59c04e369d08d608299b9e73"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_af373cada59c04e369d08d608299b9e73"></a>receiver_flush_location</p>
</td>
<td class="cellrowborder" valign="top" width="35.21352135213521%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_af4b412e161fc496e928f65a6fec71491"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_af4b412e161fc496e928f65a6fec71491"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_af4b412e161fc496e928f65a6fec71491"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a6c3064469b4a4dbd89334efd5617089f"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a6c3064469b4a4dbd89334efd5617089f"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a6c3064469b4a4dbd89334efd5617089f"></a>接收端flush日志位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_re8faabc050bc4c9db183853d8094ecfa"><td class="cellrowborder" valign="top" width="31.453145314531454%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_aa049398ac690437cbe02ca34db5dabe6"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_aa049398ac690437cbe02ca34db5dabe6"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_aa049398ac690437cbe02ca34db5dabe6"></a>receiver_replay_location</p>
</td>
<td class="cellrowborder" valign="top" width="35.21352135213521%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a4ebf28e34eb34d52bf6ed969e2504239"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a4ebf28e34eb34d52bf6ed969e2504239"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a4ebf28e34eb34d52bf6ed969e2504239"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a3426fb2ac2824cbf8d07df6f9f77d332"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a3426fb2ac2824cbf8d07df6f9f77d332"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a3426fb2ac2824cbf8d07df6f9f77d332"></a>接收端replay日志位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_rf2ae8a994a814638a0f1bfe486c53c63"><td class="cellrowborder" valign="top" width="31.453145314531454%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_aa2c809e00ee441af9a4372fcbb4859ed"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_aa2c809e00ee441af9a4372fcbb4859ed"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_aa2c809e00ee441af9a4372fcbb4859ed"></a>sync_priority</p>
</td>
<td class="cellrowborder" valign="top" width="35.21352135213521%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a36e795fdc9ec4ceaa13c4f85b2b9e05a"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a36e795fdc9ec4ceaa13c4f85b2b9e05a"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_a36e795fdc9ec4ceaa13c4f85b2b9e05a"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_aac6508a0408d4120a54db22b7ab87602"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_aac6508a0408d4120a54db22b7ab87602"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_aac6508a0408d4120a54db22b7ab87602"></a>同步复制的优先级（0表示异步）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_rce34dac3a7954e9e96e2697003523b88"><td class="cellrowborder" valign="top" width="31.453145314531454%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_af6032514b9304fe68c80e7f76bc86dad"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_af6032514b9304fe68c80e7f76bc86dad"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_af6032514b9304fe68c80e7f76bc86dad"></a>sync_state</p>
</td>
<td class="cellrowborder" valign="top" width="35.21352135213521%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_abd2b323ebb04401c8a1b7d6ed6ec363b"><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_abd2b323ebb04401c8a1b7d6ed6ec363b"></a><a name="zh-cn_topic_0283137065_zh-cn_topic_0237122450_zh-cn_topic_0059777909_abd2b323ebb04401c8a1b7d6ed6ec363b"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137065_p1654561565417"><a name="zh-cn_topic_0283137065_p1654561565417"></a><a name="zh-cn_topic_0283137065_p1654561565417"></a>同步状态：</p>
<a name="zh-cn_topic_0283137065_ul8410419125415"></a><a name="zh-cn_topic_0283137065_ul8410419125415"></a><ul id="zh-cn_topic_0283137065_ul8410419125415"><li>异步复制。</li><li>同步复制。</li><li>潜在同步者。</li><li>quorum：在同步与异步之间切换，保证备机中有大于一定数量的同步备机，同步备机数量一般为(n+1)/2-1，n为总副本个数。是否为同步备机取决于是否先接到了日志。详情可参考synchronous_standby_names参数描述。</li></ul>
</td>
</tr>
</tbody>
</table>


