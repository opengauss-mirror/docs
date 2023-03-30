# Data Type Conversion<a name="EN-US_TOPIC_0245374602"></a>

Certain data types in the database support implicit data type conversions, such as assignments and parameters called by functions. For other data types, you can use the type conversion functions provided by openGauss, such as the  **CAST**  function, to forcibly convert them.

openGauss lists common implicit data type conversions in  [Table 1](#en-us_topic_0237122212_en-us_topic_0059778807_tbc67231ae8bc4ca484efaebd2629a0e4).

>![](public_sys-resources/icon-notice.gif) **NOTICE:**   
>The valid value range of  **DATE**  supported by openGauss is from 4713 B.C. to 294276 A.D.  

**Table  1**  Implicit data type conversions

<a name="en-us_topic_0237122212_en-us_topic_0059778807_tbc67231ae8bc4ca484efaebd2629a0e4"></a>
<table><thead align="left"><tr id="en-us_topic_0237122212_en-us_topic_0059778807_r69956e6b5233460085d170c1bae836c3"><th class="cellrowborder" valign="top" width="32.15678432156784%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122212_en-us_topic_0059778807_a70efa5bbf1994084be3ca12218b6faa4"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a70efa5bbf1994084be3ca12218b6faa4"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a70efa5bbf1994084be3ca12218b6faa4"></a>Raw Data Type</p>
</th>
<th class="cellrowborder" valign="top" width="32.15678432156784%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122212_en-us_topic_0059778807_a6f8535f3f6024440abf2fc7623384b6e"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a6f8535f3f6024440abf2fc7623384b6e"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a6f8535f3f6024440abf2fc7623384b6e"></a>Target Data Type</p>
</th>
<th class="cellrowborder" valign="top" width="35.68643135686431%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122212_en-us_topic_0059778807_a6821a54f597b41f99cfe3cfe1c3ef4e4"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a6821a54f597b41f99cfe3cfe1c3ef4e4"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a6821a54f597b41f99cfe3cfe1c3ef4e4"></a><strong id="b153318399320"><a name="b153318399320"></a><a name="b153318399320"></a>Remarks</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122212_en-us_topic_0059778807_r036fabc3c5b14640a8e5166e8ee9c46e"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a032288270dd2462f97ace4bde2f6203a"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a032288270dd2462f97ace4bde2f6203a"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a032288270dd2462f97ace4bde2f6203a"></a>CHAR</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a6c5dc344b60c43f89f341abd2c69ded9"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a6c5dc344b60c43f89f341abd2c69ded9"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a6c5dc344b60c43f89f341abd2c69ded9"></a>VARCHAR2</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a875e5650bb2e4ab4acc70b54458aaeed"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a875e5650bb2e4ab4acc70b54458aaeed"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a875e5650bb2e4ab4acc70b54458aaeed"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_red7674f319bf4fb39846b5ee9fb47b7b"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a00126f61e651400fa38a9e1d28a4e282"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a00126f61e651400fa38a9e1d28a4e282"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a00126f61e651400fa38a9e1d28a4e282"></a>CHAR</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a8ec5e88836194534bb75a42109e10f59"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a8ec5e88836194534bb75a42109e10f59"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a8ec5e88836194534bb75a42109e10f59"></a>NUMBER</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a2e84fd9eefb34b30a2a05c598c56fe5b"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a2e84fd9eefb34b30a2a05c598c56fe5b"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a2e84fd9eefb34b30a2a05c598c56fe5b"></a>Raw data must consist of digits.</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_r39de4558eda9419fb33eb98bedc3b919"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a2dbf18ae1ea54e79b91ad4d177a0ec25"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a2dbf18ae1ea54e79b91ad4d177a0ec25"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a2dbf18ae1ea54e79b91ad4d177a0ec25"></a>CHAR</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_af598b0b0192f4cdabe5a963697188184"><a name="en-us_topic_0237122212_en-us_topic_0059778807_af598b0b0192f4cdabe5a963697188184"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_af598b0b0192f4cdabe5a963697188184"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a1e345eac62614d738ff58f02b7a2a77c"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a1e345eac62614d738ff58f02b7a2a77c"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a1e345eac62614d738ff58f02b7a2a77c"></a>Raw data cannot exceed the valid date range.</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_rb9ff1894f71546d4af8b6644969067e8"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a993adadff7264477832a5142d811e6bd"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a993adadff7264477832a5142d811e6bd"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a993adadff7264477832a5142d811e6bd"></a>CHAR</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a3246806c2a564a0eb16d08bd65e7bdc3"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a3246806c2a564a0eb16d08bd65e7bdc3"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a3246806c2a564a0eb16d08bd65e7bdc3"></a>RAW</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a921bf9d019ed49109e515c6f5fb0045a"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a921bf9d019ed49109e515c6f5fb0045a"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a921bf9d019ed49109e515c6f5fb0045a"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_rae451ff869764ec4913d654d4d74447b"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_af2ba5ebd77dd4983a85539ca355b9f05"><a name="en-us_topic_0237122212_en-us_topic_0059778807_af2ba5ebd77dd4983a85539ca355b9f05"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_af2ba5ebd77dd4983a85539ca355b9f05"></a>CHAR</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_ac859bf40b74846b4bf8e05e3f9654c93"><a name="en-us_topic_0237122212_en-us_topic_0059778807_ac859bf40b74846b4bf8e05e3f9654c93"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_ac859bf40b74846b4bf8e05e3f9654c93"></a>CLOB</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a385d67623c284b498634d788fca7bdd1"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a385d67623c284b498634d788fca7bdd1"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a385d67623c284b498634d788fca7bdd1"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_r5afb5798a863407f923634eb293d6c5b"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a2c9358bf4e2a483390119764934860d4"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a2c9358bf4e2a483390119764934860d4"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a2c9358bf4e2a483390119764934860d4"></a>VARCHAR2</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a1daefb2afa3548cc83b914bf13149803"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a1daefb2afa3548cc83b914bf13149803"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a1daefb2afa3548cc83b914bf13149803"></a>CHAR</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a1916b6ae67dd4aeb931025cd8f5b28c7"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a1916b6ae67dd4aeb931025cd8f5b28c7"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a1916b6ae67dd4aeb931025cd8f5b28c7"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_rf59618fc2307451fb7b5d0ecd70f471f"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a051fb07d485d45b5bb6585a727cc7b40"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a051fb07d485d45b5bb6585a727cc7b40"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a051fb07d485d45b5bb6585a727cc7b40"></a>VARCHAR2</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a3eec43e2998843b187b17f573ee47a99"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a3eec43e2998843b187b17f573ee47a99"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a3eec43e2998843b187b17f573ee47a99"></a>NUMBER</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a3b7586114cba402faf9bae12c2a1cbdd"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a3b7586114cba402faf9bae12c2a1cbdd"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a3b7586114cba402faf9bae12c2a1cbdd"></a>Raw data must consist of digits.</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_r35622a0538954ba29bfbc8e77a462afc"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_aac729614a46b4a4da2dbfbdd5bbadb81"><a name="en-us_topic_0237122212_en-us_topic_0059778807_aac729614a46b4a4da2dbfbdd5bbadb81"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_aac729614a46b4a4da2dbfbdd5bbadb81"></a>VARCHAR2</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a9e8ea6d2dea0420f8a04d8eb5fa97b67"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a9e8ea6d2dea0420f8a04d8eb5fa97b67"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a9e8ea6d2dea0420f8a04d8eb5fa97b67"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a5fd0f9ad5c1443cfb0def57bdfcefa62"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a5fd0f9ad5c1443cfb0def57bdfcefa62"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a5fd0f9ad5c1443cfb0def57bdfcefa62"></a>Raw data cannot exceed the valid date range.</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_r361a7f2fb9b14e30b313eae425062578"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a6d117317fb1341c78030d1f997ae9911"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a6d117317fb1341c78030d1f997ae9911"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a6d117317fb1341c78030d1f997ae9911"></a>VARCHAR2</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a264627bde59542a196b140de1ca70015"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a264627bde59542a196b140de1ca70015"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a264627bde59542a196b140de1ca70015"></a>CLOB</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_abd323b9754bf4f078e5f2d43de60e69a"><a name="en-us_topic_0237122212_en-us_topic_0059778807_abd323b9754bf4f078e5f2d43de60e69a"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_abd323b9754bf4f078e5f2d43de60e69a"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_rb2f66aa85e214964be860af8c5030ad4"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_ad503f5dfce5249a98907a9e63d12e193"><a name="en-us_topic_0237122212_en-us_topic_0059778807_ad503f5dfce5249a98907a9e63d12e193"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_ad503f5dfce5249a98907a9e63d12e193"></a>NUMBER</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_aba0c33cddd884138a0e7749929614f35"><a name="en-us_topic_0237122212_en-us_topic_0059778807_aba0c33cddd884138a0e7749929614f35"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_aba0c33cddd884138a0e7749929614f35"></a>CHAR</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a8d45c7fc49bf46c391082fed965ee7a3"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a8d45c7fc49bf46c391082fed965ee7a3"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a8d45c7fc49bf46c391082fed965ee7a3"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_r4e57d933049d42e5b5c5e80d3bd78bfe"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a80ccb3c665bc42b3ac6f2afbe5419102"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a80ccb3c665bc42b3ac6f2afbe5419102"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a80ccb3c665bc42b3ac6f2afbe5419102"></a>NUMBER</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_aff71c888c1d64eb9852196d2288f2c16"><a name="en-us_topic_0237122212_en-us_topic_0059778807_aff71c888c1d64eb9852196d2288f2c16"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_aff71c888c1d64eb9852196d2288f2c16"></a>VARCHAR2</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_adab4747e2ed644d3bb64c7183ba6e579"><a name="en-us_topic_0237122212_en-us_topic_0059778807_adab4747e2ed644d3bb64c7183ba6e579"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_adab4747e2ed644d3bb64c7183ba6e579"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_ra2fc957fc8bd489a82a29f41ac89bf2f"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_af2a4426248be4ec8920ddf4124f18916"><a name="en-us_topic_0237122212_en-us_topic_0059778807_af2a4426248be4ec8920ddf4124f18916"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_af2a4426248be4ec8920ddf4124f18916"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a5147c2dc79e0445da0d0376bc395e7ea"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a5147c2dc79e0445da0d0376bc395e7ea"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a5147c2dc79e0445da0d0376bc395e7ea"></a>CHAR</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a98654333589a45efad553489425fb71e"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a98654333589a45efad553489425fb71e"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a98654333589a45efad553489425fb71e"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_r22200dc53db643a9bbee5c3971e29fab"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a8a9479c03ed1433cb96f83b0df9f0ec8"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a8a9479c03ed1433cb96f83b0df9f0ec8"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a8a9479c03ed1433cb96f83b0df9f0ec8"></a>DATE</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a60b81bbb0dea4b0e9c3322980302ba3a"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a60b81bbb0dea4b0e9c3322980302ba3a"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a60b81bbb0dea4b0e9c3322980302ba3a"></a>VARCHAR2</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a2ce6cb1ed2844d1abc8aac5d2b8d3b55"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a2ce6cb1ed2844d1abc8aac5d2b8d3b55"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a2ce6cb1ed2844d1abc8aac5d2b8d3b55"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_r936540db9b0d47fc94bcd55c8ec9563f"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_aa68fc9f96d1b44478e04665ccc2a062d"><a name="en-us_topic_0237122212_en-us_topic_0059778807_aa68fc9f96d1b44478e04665ccc2a062d"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_aa68fc9f96d1b44478e04665ccc2a062d"></a>RAW</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_aae9675b6cb9b4bb497a185ef8b5ad73f"><a name="en-us_topic_0237122212_en-us_topic_0059778807_aae9675b6cb9b4bb497a185ef8b5ad73f"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_aae9675b6cb9b4bb497a185ef8b5ad73f"></a>CHAR</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a57400f97ca00496b9df7960afe4071ad"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a57400f97ca00496b9df7960afe4071ad"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a57400f97ca00496b9df7960afe4071ad"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_rf151576d7ba7477baa8e088898755cbe"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_aa2b7331ed76b46eea54879732d4cd56b"><a name="en-us_topic_0237122212_en-us_topic_0059778807_aa2b7331ed76b46eea54879732d4cd56b"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_aa2b7331ed76b46eea54879732d4cd56b"></a>RAW</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a96d82184b78948feb440dfcdffbc0e2b"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a96d82184b78948feb440dfcdffbc0e2b"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a96d82184b78948feb440dfcdffbc0e2b"></a>VARCHAR2</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a188a69d4f32048aaaa376e6dffdf149f"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a188a69d4f32048aaaa376e6dffdf149f"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a188a69d4f32048aaaa376e6dffdf149f"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_r472ab394422041faa30eb7e89febee30"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a8b9a256e467a41ae8e77696cf717b870"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a8b9a256e467a41ae8e77696cf717b870"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a8b9a256e467a41ae8e77696cf717b870"></a>CLOB</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a3d555160d728423684959318a4355539"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a3d555160d728423684959318a4355539"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a3d555160d728423684959318a4355539"></a>CHAR</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_ac1e9a6f50ca64701b1e4276d37f501e5"><a name="en-us_topic_0237122212_en-us_topic_0059778807_ac1e9a6f50ca64701b1e4276d37f501e5"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_ac1e9a6f50ca64701b1e4276d37f501e5"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_r29c0857a5ad840d8a6a70198ce29a52b"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_ac1a3776b45a648d4ae0427d34a813b24"><a name="en-us_topic_0237122212_en-us_topic_0059778807_ac1a3776b45a648d4ae0427d34a813b24"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_ac1a3776b45a648d4ae0427d34a813b24"></a>CLOB</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_ad9ec9591858b40a495cd085944b96657"><a name="en-us_topic_0237122212_en-us_topic_0059778807_ad9ec9591858b40a495cd085944b96657"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_ad9ec9591858b40a495cd085944b96657"></a>VARCHAR2</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a7af5e84e8f7f42d7980a8da70e498308"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a7af5e84e8f7f42d7980a8da70e498308"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a7af5e84e8f7f42d7980a8da70e498308"></a>-</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_r1b149e4015374cde9c1e5b3052653f3c"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a095952f9640d4a6781b614ca5b82d63e"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a095952f9640d4a6781b614ca5b82d63e"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a095952f9640d4a6781b614ca5b82d63e"></a>CLOB</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a08deab09b8a04cd9bb39c27edd4c2d1c"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a08deab09b8a04cd9bb39c27edd4c2d1c"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a08deab09b8a04cd9bb39c27edd4c2d1c"></a>NUMBER</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a3be749fc72804d458ffdc4fbc3e8ffce"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a3be749fc72804d458ffdc4fbc3e8ffce"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a3be749fc72804d458ffdc4fbc3e8ffce"></a>Raw data must consist of digits.</p>
</td>
</tr>
<tr id="en-us_topic_0237122212_en-us_topic_0059778807_rb403e6c819fe4902baf2745ebe70fee9"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a962b560b2be443eda913331961210419"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a962b560b2be443eda913331961210419"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a962b560b2be443eda913331961210419"></a>INT4</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a3c9b8606898f4749a76caf6b28084426"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a3c9b8606898f4749a76caf6b28084426"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a3c9b8606898f4749a76caf6b28084426"></a>CHAR</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_ac3adeec499244758a00f6daffbfcc6df"><a name="en-us_topic_0237122212_en-us_topic_0059778807_ac3adeec499244758a00f6daffbfcc6df"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_ac3adeec499244758a00f6daffbfcc6df"></a>-</p>
</td>
</tr>
    <tr id="en-us_topic_0237122212_en-us_topic_0059778807_rb403e6c819fe4902baf2745ebe70fee9"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a962b560b2be443eda913331961210419"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a962b560b2be443eda913331961210419"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a962b560b2be443eda913331961210419"></a>INT4</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a3c9b8606898f4749a76caf6b28084426"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a3c9b8606898f4749a76caf6b28084426"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a3c9b8606898f4749a76caf6b28084426"></a>BOOLEAN</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_ac3adeec499244758a00f6daffbfcc6df"><a name="en-us_topic_0237122212_en-us_topic_0059778807_ac3adeec499244758a00f6daffbfcc6df"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_ac3adeec499244758a00f6daffbfcc6df"></a>-</p>
</td>
</tr>
    <tr id="en-us_topic_0237122212_en-us_topic_0059778807_rb403e6c819fe4902baf2745ebe70fee9"><td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a962b560b2be443eda913331961210419"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a962b560b2be443eda913331961210419"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a962b560b2be443eda913331961210419"></a>BOOLEAN</p>
</td>
<td class="cellrowborder" valign="top" width="32.15678432156784%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_a3c9b8606898f4749a76caf6b28084426"><a name="en-us_topic_0237122212_en-us_topic_0059778807_a3c9b8606898f4749a76caf6b28084426"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_a3c9b8606898f4749a76caf6b28084426"></a>INT4</p>
</td>
<td class="cellrowborder" valign="top" width="35.68643135686431%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122212_en-us_topic_0059778807_ac3adeec499244758a00f6daffbfcc6df"><a name="en-us_topic_0237122212_en-us_topic_0059778807_ac3adeec499244758a00f6daffbfcc6df"></a><a name="en-us_topic_0237122212_en-us_topic_0059778807_ac3adeec499244758a00f6daffbfcc6df"></a>-</p>
</td>
</tr>
</tbody>
</table>


