# LOCK<a name="EN-US_TOPIC_0289899976"></a>

## Function<a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_s11c25749bd754f4c98e19b29df2baf41"></a>

**LOCK TABLE**  obtains a table-level lock.

openGauss always tries to select the lock mode with minimum constraints when automatically requesting a lock for a statement referenced by a table. Use  **LOCK**  if users need a more strict lock mode. For example, suppose an application runs a transaction at the Read Committed isolation level and needs to ensure that data in a table remains stable in the duration of the transaction. To achieve this, you could obtain  **SHARE**  lock mode over the table before the query. This will prevent concurrent data changes and ensure subsequent reads of the table see a stable view of committed data. It is because the  **SHARE**  lock mode conflicts with the  **ROW EXCLUSIVE**  lock acquired by writers, and your  **LOCK TABLE name IN SHARE MODE**  statement will wait until any concurrent holders of  **ROW EXCLUSIVE**  mode locks commit or roll back. Therefore, once you obtain the lock, there are no uncommitted writes outstanding; furthermore none can begin until you release the lock.

## Precautions<a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_s7bddbed63c51406a8d5cff4c980420bf"></a>

-   **LOCK TABLE**  is useless outside a transaction block: the lock would remain held only to the completion of the statement. If  **LOCK TABLE**  is out of any transaction block, an error is reported.
-   If no lock mode is specified, then  **ACCESS EXCLUSIVE**, the most restrictive mode, is used.
-   LOCK TABLE ...  **IN ACCESS SHARE MODE**  requires the  **SELECT **permission on the target table. All other forms of  **LOCK**  require table-level  **UPDATE**  and/or the  **DELETE**  permission.
-   There is no  **UNLOCK TABLE**  statement. Locks are always released at transaction end.
-   **LOCK TABLE**  only deals with table-level locks, and so the mode names involving  **ROW**  are all misnomers. These mode names should generally be read as indicating the intention of the user to acquire row-level locks within the locked table. Also,  **ROW EXCLUSIVE**  mode is a shareable table lock. Note that all the lock modes have identical semantics so far as  **LOCK TABLE**  is concerned, differing only in the rules about which modes conflict with which. For details about the rules, see  [Table 1](#en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ta3d4fbc3c92c4f2994f7a9f5583a6ba5).
-   If the xc\_maintenance\_mode parameter is not enabled, an error is reported when an ACCESS EXCLUSIVE lock is applied for a system catalog.

## Syntax<a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_s178af862f5994d318f9e6603d8196260"></a>

```
LOCK [ TABLE ] {[ ONLY ] name [, ...]| {name [ * ]} [, ...]}
    [ IN {ACCESS SHARE | ROW SHARE | ROW EXCLUSIVE | SHARE UPDATE EXCLUSIVE | SHARE | SHARE ROW EXCLUSIVE | EXCLUSIVE | ACCESS EXCLUSIVE} MODE ]
    [ NOWAIT ];
```

## Parameter Description<a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_s7c43a54dca4d4f10a601fc0683f9b61b"></a>

**Table  1**  Lock mode conflicts

<a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ta3d4fbc3c92c4f2994f7a9f5583a6ba5"></a>
<table><thead align="left"><tr id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_r25a96ae5dba64e87bb4ca6d2b98fcccc"><th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.1"><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a1184708d3bb6447691c54b05c2c109b4"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a1184708d3bb6447691c54b05c2c109b4"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a1184708d3bb6447691c54b05c2c109b4"></a>Requested Lock Mode/Current Lock Mode</p>
</th>
<th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.2"><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a272b097048d74c94ae92e4080f495db5"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a272b097048d74c94ae92e4080f495db5"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a272b097048d74c94ae92e4080f495db5"></a>ACCESS SHARE</p>
</th>
<th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.3"><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a608c08f6990b4cf1ba3608a15a9db09d"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a608c08f6990b4cf1ba3608a15a9db09d"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a608c08f6990b4cf1ba3608a15a9db09d"></a>ROW SHARE</p>
</th>
<th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.4"><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a89c9a57edacf4c198180708989e2c43b"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a89c9a57edacf4c198180708989e2c43b"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a89c9a57edacf4c198180708989e2c43b"></a>ROW EXCLUSIVE</p>
</th>
<th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.5"><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_aa1df15c749e147f7b9ef5bfdfe7f9aea"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_aa1df15c749e147f7b9ef5bfdfe7f9aea"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_aa1df15c749e147f7b9ef5bfdfe7f9aea"></a>SHARE UPDATE EXCLUSIVE</p>
</th>
<th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.6"><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a651e042806ec46568773112d83d8f4a8"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a651e042806ec46568773112d83d8f4a8"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a651e042806ec46568773112d83d8f4a8"></a>SHARE</p>
</th>
<th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.7"><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a86f9fc42aa6548f99a992e59cdb6bc7b"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a86f9fc42aa6548f99a992e59cdb6bc7b"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a86f9fc42aa6548f99a992e59cdb6bc7b"></a>SHARE ROW EXCLUSIVE</p>
</th>
<th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.8"><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ae0392485c9604970aae8df77cffea492"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ae0392485c9604970aae8df77cffea492"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ae0392485c9604970aae8df77cffea492"></a>EXCLUSIVE</p>
</th>
<th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.9"><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a21d34603417042788edc77a59b7547e2"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a21d34603417042788edc77a59b7547e2"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a21d34603417042788edc77a59b7547e2"></a>ACCESS EXCLUSIVE</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_r23b8cf3574884f4780dbab52d7fe475f"><td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.1 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ab46e22782ba740849a91aa5617ba4156"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ab46e22782ba740849a91aa5617ba4156"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ab46e22782ba740849a91aa5617ba4156"></a>ACCESS SHARE</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.2 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a8c5057cf0f00449d897e25740f709cbd"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a8c5057cf0f00449d897e25740f709cbd"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a8c5057cf0f00449d897e25740f709cbd"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.3 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a9d249b37b5854f10bc72a9b342cf938e"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a9d249b37b5854f10bc72a9b342cf938e"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a9d249b37b5854f10bc72a9b342cf938e"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.4 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af3013345ef074f6ba11c618b3c7c397a"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af3013345ef074f6ba11c618b3c7c397a"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af3013345ef074f6ba11c618b3c7c397a"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.5 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a0276ef0ff1954892abe67c7836e0d8b3"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a0276ef0ff1954892abe67c7836e0d8b3"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a0276ef0ff1954892abe67c7836e0d8b3"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.6 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af10f852ef88641e79c3cab2080ea3920"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af10f852ef88641e79c3cab2080ea3920"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af10f852ef88641e79c3cab2080ea3920"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.7 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af6e92c2e40b24839a72cecc87650f89e"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af6e92c2e40b24839a72cecc87650f89e"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af6e92c2e40b24839a72cecc87650f89e"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.8 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_afd4f6adf75eb485a8f1cf65b7201daa6"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_afd4f6adf75eb485a8f1cf65b7201daa6"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_afd4f6adf75eb485a8f1cf65b7201daa6"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.9 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a6a7d4b81ad834ce5a3dfc360f6e7d67b"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a6a7d4b81ad834ce5a3dfc360f6e7d67b"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a6a7d4b81ad834ce5a3dfc360f6e7d67b"></a>X</p>
</td>
</tr>
<tr id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_rcb8cbbb903344289b2f5464b6b90ce8b"><td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.1 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a276de8bf5e184d5b8a107156cd47abad"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a276de8bf5e184d5b8a107156cd47abad"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a276de8bf5e184d5b8a107156cd47abad"></a>ROW SHARE</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.2 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af0aa04592a2a402cb7b40e328e509c77"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af0aa04592a2a402cb7b40e328e509c77"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af0aa04592a2a402cb7b40e328e509c77"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.3 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a48252081168e40ed9dcc0fd8e5cc1aee"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a48252081168e40ed9dcc0fd8e5cc1aee"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a48252081168e40ed9dcc0fd8e5cc1aee"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.4 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a41ab7e269c454bf2bc3d8ca73908bda2"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a41ab7e269c454bf2bc3d8ca73908bda2"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a41ab7e269c454bf2bc3d8ca73908bda2"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.5 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ada7510cd76024ae59d114022309f5698"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ada7510cd76024ae59d114022309f5698"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ada7510cd76024ae59d114022309f5698"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.6 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af29e1c9cfc794ecf9ecba00974ffbffa"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af29e1c9cfc794ecf9ecba00974ffbffa"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af29e1c9cfc794ecf9ecba00974ffbffa"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.7 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ac1811314718f48248c8374c99006cfe9"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ac1811314718f48248c8374c99006cfe9"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ac1811314718f48248c8374c99006cfe9"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.8 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ace6a44508e9241a7b3f254b40e6ec241"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ace6a44508e9241a7b3f254b40e6ec241"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ace6a44508e9241a7b3f254b40e6ec241"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.9 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a25b4493d8c7749dbb76b07d50dee5b36"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a25b4493d8c7749dbb76b07d50dee5b36"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a25b4493d8c7749dbb76b07d50dee5b36"></a>X</p>
</td>
</tr>
<tr id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_r97c1058eb1624d39aa226cab2b32468b"><td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.1 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a7064004d0c7249d6aa07c40c00b113a9"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a7064004d0c7249d6aa07c40c00b113a9"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a7064004d0c7249d6aa07c40c00b113a9"></a>ROW EXCLUSIVE</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.2 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a70323820ab054baea6472856a672a87c"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a70323820ab054baea6472856a672a87c"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a70323820ab054baea6472856a672a87c"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.3 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_aa07f5ef5e5a74f05ad738317b621ecb7"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_aa07f5ef5e5a74f05ad738317b621ecb7"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_aa07f5ef5e5a74f05ad738317b621ecb7"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.4 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a39cacca773364189b1661b54b3fdb12d"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a39cacca773364189b1661b54b3fdb12d"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a39cacca773364189b1661b54b3fdb12d"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.5 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_aa432c061a47046dc9a0da86899dae6b2"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_aa432c061a47046dc9a0da86899dae6b2"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_aa432c061a47046dc9a0da86899dae6b2"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.6 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a494a17cff6484358af76bc44a611aefa"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a494a17cff6484358af76bc44a611aefa"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a494a17cff6484358af76bc44a611aefa"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.7 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a92a4f8064dd74abfba58194d80953b41"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a92a4f8064dd74abfba58194d80953b41"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a92a4f8064dd74abfba58194d80953b41"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.8 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a90f57951b3c24d89b557b6ec94c7c84c"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a90f57951b3c24d89b557b6ec94c7c84c"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a90f57951b3c24d89b557b6ec94c7c84c"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.9 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a54633126c72d49f388bec5dfbfed9afc"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a54633126c72d49f388bec5dfbfed9afc"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a54633126c72d49f388bec5dfbfed9afc"></a>X</p>
</td>
</tr>
<tr id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_r581166696f9f4b7c95ad505a7909703f"><td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.1 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a426aef12caff464da0a3f362b568c565"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a426aef12caff464da0a3f362b568c565"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a426aef12caff464da0a3f362b568c565"></a>SHARE UPDATE EXCLUSIVE</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.2 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a7b630c29b7644dab8c8ebc3efb3c124b"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a7b630c29b7644dab8c8ebc3efb3c124b"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a7b630c29b7644dab8c8ebc3efb3c124b"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.3 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_abf649def86334f18b699f4a79a636fa1"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_abf649def86334f18b699f4a79a636fa1"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_abf649def86334f18b699f4a79a636fa1"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.4 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ae8836973263543aa9c43afc082de919a"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ae8836973263543aa9c43afc082de919a"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ae8836973263543aa9c43afc082de919a"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.5 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a0a88e6815fe44c7cabb183f0e608c5ed"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a0a88e6815fe44c7cabb183f0e608c5ed"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a0a88e6815fe44c7cabb183f0e608c5ed"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.6 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a0bfaee4f6d184fd496170244c8cb531d"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a0bfaee4f6d184fd496170244c8cb531d"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a0bfaee4f6d184fd496170244c8cb531d"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.7 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_adb07da7e838b410c99a65ec6bbc33316"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_adb07da7e838b410c99a65ec6bbc33316"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_adb07da7e838b410c99a65ec6bbc33316"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.8 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ac266f0c534314899bec4b677288abb2b"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ac266f0c534314899bec4b677288abb2b"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ac266f0c534314899bec4b677288abb2b"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.9 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a7cb5945e7b1549bdba5ccbf342fdaca5"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a7cb5945e7b1549bdba5ccbf342fdaca5"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a7cb5945e7b1549bdba5ccbf342fdaca5"></a>X</p>
</td>
</tr>
<tr id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ree31b044d66b4a75b161399c7bf9e434"><td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.1 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a9074eed14d0b4ea0b7cacf4dabda8e88"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a9074eed14d0b4ea0b7cacf4dabda8e88"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a9074eed14d0b4ea0b7cacf4dabda8e88"></a>SHARE</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.2 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a2141b54b92df4abf87d6667ae949cac2"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a2141b54b92df4abf87d6667ae949cac2"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a2141b54b92df4abf87d6667ae949cac2"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.3 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_acc7edd33b9df4d84b70be0cee966d94a"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_acc7edd33b9df4d84b70be0cee966d94a"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_acc7edd33b9df4d84b70be0cee966d94a"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.4 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a1ee062a6a76f4d64b3dd33a7114d1a24"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a1ee062a6a76f4d64b3dd33a7114d1a24"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a1ee062a6a76f4d64b3dd33a7114d1a24"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.5 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_aaa57542f95e64e5cae96e765d1593eea"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_aaa57542f95e64e5cae96e765d1593eea"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_aaa57542f95e64e5cae96e765d1593eea"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.6 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a64d228f588f9497fb8939675d32be29e"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a64d228f588f9497fb8939675d32be29e"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a64d228f588f9497fb8939675d32be29e"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.7 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a569457ad04664703ab803b5ceb815b43"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a569457ad04664703ab803b5ceb815b43"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a569457ad04664703ab803b5ceb815b43"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.8 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a3155e13036fd47e78136ae6dd67d3c16"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a3155e13036fd47e78136ae6dd67d3c16"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a3155e13036fd47e78136ae6dd67d3c16"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.9 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a6cdb2a7b02744a398dd63b0ea5560605"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a6cdb2a7b02744a398dd63b0ea5560605"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a6cdb2a7b02744a398dd63b0ea5560605"></a>X</p>
</td>
</tr>
<tr id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_r01bfda5ca26546dda0b0a00e6719ade4"><td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.1 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a7f7fded747f44f4f995693f047092820"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a7f7fded747f44f4f995693f047092820"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a7f7fded747f44f4f995693f047092820"></a>SHARE ROW EXCLUSIVE</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.2 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a20cd7e760320417da118dd9280eb1d22"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a20cd7e760320417da118dd9280eb1d22"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a20cd7e760320417da118dd9280eb1d22"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.3 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a6d8ae982320b4bc992665e577c6e13ba"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a6d8ae982320b4bc992665e577c6e13ba"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a6d8ae982320b4bc992665e577c6e13ba"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.4 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a432087b932d643bbaab737ae04b496a8"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a432087b932d643bbaab737ae04b496a8"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a432087b932d643bbaab737ae04b496a8"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.5 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_abdceec7269e84c54bccacb76888971ce"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_abdceec7269e84c54bccacb76888971ce"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_abdceec7269e84c54bccacb76888971ce"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.6 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ae80efea7b940425f9cee361725f558a5"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ae80efea7b940425f9cee361725f558a5"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ae80efea7b940425f9cee361725f558a5"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.7 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a5d81bebfb3024188822e7f9e9f1144e5"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a5d81bebfb3024188822e7f9e9f1144e5"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a5d81bebfb3024188822e7f9e9f1144e5"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.8 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ae0c0570732c64a8e9428ed03b28acb26"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ae0c0570732c64a8e9428ed03b28acb26"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ae0c0570732c64a8e9428ed03b28acb26"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.9 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ab47a06104dee4a2d89dcfc3df5b16240"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ab47a06104dee4a2d89dcfc3df5b16240"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ab47a06104dee4a2d89dcfc3df5b16240"></a>X</p>
</td>
</tr>
<tr id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_rabbd74486cc44bc7ab3a5451bf9fdf0c"><td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.1 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_acf837fbf92624380bd792ceacbeadadf"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_acf837fbf92624380bd792ceacbeadadf"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_acf837fbf92624380bd792ceacbeadadf"></a>EXCLUSIVE</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.2 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ac780634bfb2541aba89c5ede034a8be2"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ac780634bfb2541aba89c5ede034a8be2"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ac780634bfb2541aba89c5ede034a8be2"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.3 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a49a72429748f4eaca900fea84e252799"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a49a72429748f4eaca900fea84e252799"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a49a72429748f4eaca900fea84e252799"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.4 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a2dbcbb3232f146849e80a6b1260ea5a0"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a2dbcbb3232f146849e80a6b1260ea5a0"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a2dbcbb3232f146849e80a6b1260ea5a0"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.5 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a37282ff1d5ae4688a340f197ec316bcf"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a37282ff1d5ae4688a340f197ec316bcf"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a37282ff1d5ae4688a340f197ec316bcf"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.6 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a16f1ca4a44bf473f9706024a7598872c"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a16f1ca4a44bf473f9706024a7598872c"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a16f1ca4a44bf473f9706024a7598872c"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.7 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a88e1e6b3e167455c905cdeeaa3d10093"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a88e1e6b3e167455c905cdeeaa3d10093"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a88e1e6b3e167455c905cdeeaa3d10093"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.8 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a8004e60d4a1d4667b9abf786fc8ca754"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a8004e60d4a1d4667b9abf786fc8ca754"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a8004e60d4a1d4667b9abf786fc8ca754"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.9 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_afc5f4fa6f9c9497fb112dd42b2b52ae9"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_afc5f4fa6f9c9497fb112dd42b2b52ae9"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_afc5f4fa6f9c9497fb112dd42b2b52ae9"></a>X</p>
</td>
</tr>
<tr id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_rc11d5c0e83df412184a24fb8017540b3"><td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.1 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a837b9f85773642649ae8d07e6517b869"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a837b9f85773642649ae8d07e6517b869"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a837b9f85773642649ae8d07e6517b869"></a>ACCESS EXCLUSIVE</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.2 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ab265c9aff940417f8a4db4b1c171410f"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ab265c9aff940417f8a4db4b1c171410f"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ab265c9aff940417f8a4db4b1c171410f"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.3 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a887108fafd0f44559f98991e89f341e1"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a887108fafd0f44559f98991e89f341e1"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a887108fafd0f44559f98991e89f341e1"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.4 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_abf9083d173714786878eaa90482bde41"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_abf9083d173714786878eaa90482bde41"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_abf9083d173714786878eaa90482bde41"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.5 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ac0d34a365dd0416fb8e15b8f09a214bc"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ac0d34a365dd0416fb8e15b8f09a214bc"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ac0d34a365dd0416fb8e15b8f09a214bc"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.6 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af32e35fe12784b08a937cd0a8e2dade6"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af32e35fe12784b08a937cd0a8e2dade6"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_af32e35fe12784b08a937cd0a8e2dade6"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.7 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_aef45dc2d00b04564a8cb445181dc9e82"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_aef45dc2d00b04564a8cb445181dc9e82"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_aef45dc2d00b04564a8cb445181dc9e82"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.8 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ab8f29c684b4c4300a6ca1882d85e782e"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ab8f29c684b4c4300a6ca1882d85e782e"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_ab8f29c684b4c4300a6ca1882d85e782e"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.9 "><p id="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a6a869c8995aa4395b2e433f05475f52a"><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a6a869c8995aa4395b2e433f05475f52a"></a><a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_a6a869c8995aa4395b2e433f05475f52a"></a>X</p>
</td>
</tr>
</tbody>
</table>

**LOCK**  parameters are as follows:

-   **name**

    Specifies the name \(optionally schema-qualified\) of an existing table to lock.

    Tables are locked one-by-one in the order specified in the  **LOCK TABLE**  statement.

    Value range: an existing table name

-   **ONLY**

    If  **ONLY**  is specified, only that table is locked. If  **ONLY**  is not specified, the table and all its sub-tables are locked.

-   **ACCESS SHARE**

    Conflicts with the ACCESS EXCLUSIVE lock mode only.

    The  **SELECT**  statement acquires a lock of this mode on referenced tables. Typically, any command that reads a table without modifying it acquires this lock mode.

-   **ROW SHARE**

    It conflicts with the EXCLUSIVE and ACCESS EXCLUSIVE lock modes.

    **SELECT FOR UPDATE**  and  **SELECT FOR SHARE**  automatically acquire the  **ROW SHARE**  lock on the target table and add the  **ACCESS SHARE**  lock to other referenced tables except  **FOR SHARE**  and  **FOR UPDATE**.

-   **ROW EXCLUSIVE**

    Allows concurrent read of a table but does not allow modification of data in the table like  **ROW SHARE**.  **UPDATE**,  **DELETE**, and  **INSERT**  automatically acquire the  **ROW SHARE**  lock on the target table and add the  **ACCESS SHARE**  lock to other referenced tables. Generally, all statements that modify table data acquire the  **ROW EXCLUSIVE**  lock for tables.

-   **SHARE UPDATE EXCLUSIVE**

    Protects a table against concurrent schema changes and VACUUM runs.

    Acquired by  **VACUUM **\(without  **FULL**\),  **ANALYZE**  and  **CREATE INDEX CONCURRENTLY**  statements, and some forms of  **ALTER TABLE**.

-   **SHARE**

    Allows concurrent queries of a table but does not allow modification of the table.

    Acquired by  **CREATE INDEX**  \(without  **CONCURRENTLY**\).

-   **SHARE ROW EXCLUSIVE**

    Protects a table against concurrent data changes, and is self-exclusive so that only one session can hold it at a time.

    No SQL statements automatically acquire this lock mode.

-   **EXCLUSIVE**

    Allows concurrent queries of the target table but does not allow any other operations.

    This mode allows only concurrent  **ACCESS SHARE**  locks; that is, only reads from the table can proceed in parallel with a transaction holding this lock mode.

    No SQL statements automatically acquire this lock mode on user tables. However, it will be acquired on some system catalogs in case of some operations.

-   **ACCESS EXCLUSIVE**

    Guarantees that the holder is the only transaction accessing the table in any way.

    Acquired by the  **ALTER TABLE**,  **DROP TABLE**,  **TRUNCATE**, and  **REINDEX**  statements.

    This is also the default lock mode for  **LOCK TABLE**  statements that do not specify a mode explicitly.

-   **NOWAIT**

    Specifies that  **LOCK TABLE**  should not wait for any conflicting locks to be released: if the specified lock\(s\) cannot be acquired immediately without waiting, the transaction is aborted.

    If  **NOWAIT**  is not specified,  **LOCK TABLE**  obtains a table-level lock, waiting if necessary for any conflicting locks to be released.


## Examples<a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_s9884bdbe455b460a9a2dde267283b75b"></a>

```
-- Obtain a SHARE ROW EXCLUSIVE lock on a primary key table when going to perform a delete operation.
openGauss=# CREATE TABLE tpcds.reason_t1 AS TABLE tpcds.reason;

openGauss=# START TRANSACTION;

openGauss=# LOCK TABLE tpcds.reason_t1 IN SHARE ROW EXCLUSIVE MODE;

openGauss=# DELETE FROM tpcds.reason_t1 WHERE r_reason_desc IN(SELECT r_reason_desc FROM tpcds.reason_t1 WHERE r_reason_sk < 6 );

openGauss=# DELETE FROM tpcds.reason_t1 WHERE r_reason_sk = 7;

openGauss=# COMMIT;

-- Delete the tpcds.reason_t1 table.
openGauss=# DROP TABLE tpcds.reason_t1;
```

