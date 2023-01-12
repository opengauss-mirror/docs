# LOCK<a name="ZH-CN_TOPIC_0242370632"></a>

## 功能描述<a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_s11c25749bd754f4c98e19b29df2baf41"></a>

LOCK TABLE获取表级锁。

openGauss在为一个引用了表的命令自动请求锁时，尽可能选择最小限制的锁模式。如果用户需要一种更为严格的锁模式，可以使用LOCK命令。例如，一个应用是在Read Committed隔离级别上运行事务，并且它需要保证表中的数据在事务的运行过程中不被修改。为实现这个目的，则可以在查询之前对表使用SHARE锁模式进行锁定。这样将防止数据不被并发修改，从而保证后续的查询可以读到已提交的持久化的数据。因为SHARE锁模式与任何写操作需要的ROW EXCLUSIVE模式冲突，并且LOCK TABLE name IN SHARE MODE语句将等到所有当前持有ROW EXCLUSIVE模式锁的事务提交或回滚后才能执行。因此，一旦获得该锁，就不会存在未提交的写操作，并且其他操作也只能等到该锁释放之后才能开始。

## 注意事项<a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_s7bddbed63c51406a8d5cff4c980420bf"></a>

-   LOCK TABLE只能在一个事务块的内部有用，因为锁在事务结束时就会被释放。出现在任意事务块外面的LOCK TABLE都会报错。
-   如果没有声明锁模式，缺省为最严格的模式ACCESS EXCLUSIVE。
-   LOCK TABLE ... IN ACCESS SHARE MODE需要在目标表上有SELECT权限。所有其他形式的LOCK需要UPDATE和/或DELETE权限。
-   没有UNLOCK TABLE命令，锁总是在事务结束时释放。
-   LOCK TABLE只处理表级的锁，因此那些带“ROW”字样的锁模式都是有歧义的。这些模式名称通常可理解为用户试图在一个被锁定的表中获取行级的锁。同样，ROW EXCLUSIVE模式也是一个可共享的表级锁。注意，只要是涉及到LOCK TABLE ，所有锁模式都有相同的语意，区别仅在于规则中锁与锁之间是否冲突，规则请参见[表1](#zh-cn_topic_0237122168_zh-cn_topic_0059778442_ta3d4fbc3c92c4f2994f7a9f5583a6ba5)。
-   如果没有打开xc\_maintenance\_mode参数，那么对系统表申请ACCESS EXCLUSIVE级别锁将报错。

## 语法格式<a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_s178af862f5994d318f9e6603d8196260"></a>

```
LOCK [ TABLE ] {[ ONLY ] name [, ...]| {name [ * ]} [, ...]}
    [ IN {ACCESS SHARE | ROW SHARE | ROW EXCLUSIVE | SHARE UPDATE EXCLUSIVE | SHARE | SHARE ROW EXCLUSIVE | EXCLUSIVE | ACCESS EXCLUSIVE} MODE ]
    [ NOWAIT ];
```

## 参数说明<a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_s7c43a54dca4d4f10a601fc0683f9b61b"></a>

**表 1**  冲突的锁模式

<a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ta3d4fbc3c92c4f2994f7a9f5583a6ba5"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_r25a96ae5dba64e87bb4ca6d2b98fcccc"><th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.1"><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a1184708d3bb6447691c54b05c2c109b4"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a1184708d3bb6447691c54b05c2c109b4"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a1184708d3bb6447691c54b05c2c109b4"></a>请求的锁模式/当前锁模式</p>
</th>
<th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.2"><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a272b097048d74c94ae92e4080f495db5"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a272b097048d74c94ae92e4080f495db5"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a272b097048d74c94ae92e4080f495db5"></a>ACCESS SHARE</p>
</th>
<th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.3"><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a608c08f6990b4cf1ba3608a15a9db09d"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a608c08f6990b4cf1ba3608a15a9db09d"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a608c08f6990b4cf1ba3608a15a9db09d"></a>ROW SHARE</p>
</th>
<th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.4"><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a89c9a57edacf4c198180708989e2c43b"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a89c9a57edacf4c198180708989e2c43b"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a89c9a57edacf4c198180708989e2c43b"></a>ROW EXCLUSIVE</p>
</th>
<th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.5"><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_aa1df15c749e147f7b9ef5bfdfe7f9aea"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_aa1df15c749e147f7b9ef5bfdfe7f9aea"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_aa1df15c749e147f7b9ef5bfdfe7f9aea"></a>SHARE UPDATE EXCLUSIVE</p>
</th>
<th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.6"><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a651e042806ec46568773112d83d8f4a8"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a651e042806ec46568773112d83d8f4a8"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a651e042806ec46568773112d83d8f4a8"></a>SHARE</p>
</th>
<th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.7"><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a86f9fc42aa6548f99a992e59cdb6bc7b"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a86f9fc42aa6548f99a992e59cdb6bc7b"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a86f9fc42aa6548f99a992e59cdb6bc7b"></a>SHARE ROW EXCLUSIVE</p>
</th>
<th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.8"><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ae0392485c9604970aae8df77cffea492"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ae0392485c9604970aae8df77cffea492"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ae0392485c9604970aae8df77cffea492"></a>EXCLUSIVE</p>
</th>
<th class="cellrowborder" valign="top" width="11.111111111111112%" id="mcps1.2.10.1.9"><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a21d34603417042788edc77a59b7547e2"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a21d34603417042788edc77a59b7547e2"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a21d34603417042788edc77a59b7547e2"></a>ACCESS EXCLUSIVE</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_r23b8cf3574884f4780dbab52d7fe475f"><td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.1 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ab46e22782ba740849a91aa5617ba4156"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ab46e22782ba740849a91aa5617ba4156"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ab46e22782ba740849a91aa5617ba4156"></a>ACCESS SHARE</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.2 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a8c5057cf0f00449d897e25740f709cbd"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a8c5057cf0f00449d897e25740f709cbd"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a8c5057cf0f00449d897e25740f709cbd"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.3 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a9d249b37b5854f10bc72a9b342cf938e"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a9d249b37b5854f10bc72a9b342cf938e"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a9d249b37b5854f10bc72a9b342cf938e"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.4 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af3013345ef074f6ba11c618b3c7c397a"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af3013345ef074f6ba11c618b3c7c397a"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af3013345ef074f6ba11c618b3c7c397a"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.5 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a0276ef0ff1954892abe67c7836e0d8b3"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a0276ef0ff1954892abe67c7836e0d8b3"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a0276ef0ff1954892abe67c7836e0d8b3"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.6 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af10f852ef88641e79c3cab2080ea3920"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af10f852ef88641e79c3cab2080ea3920"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af10f852ef88641e79c3cab2080ea3920"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.7 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af6e92c2e40b24839a72cecc87650f89e"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af6e92c2e40b24839a72cecc87650f89e"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af6e92c2e40b24839a72cecc87650f89e"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.8 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_afd4f6adf75eb485a8f1cf65b7201daa6"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_afd4f6adf75eb485a8f1cf65b7201daa6"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_afd4f6adf75eb485a8f1cf65b7201daa6"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.9 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a6a7d4b81ad834ce5a3dfc360f6e7d67b"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a6a7d4b81ad834ce5a3dfc360f6e7d67b"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a6a7d4b81ad834ce5a3dfc360f6e7d67b"></a>X</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_rcb8cbbb903344289b2f5464b6b90ce8b"><td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.1 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a276de8bf5e184d5b8a107156cd47abad"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a276de8bf5e184d5b8a107156cd47abad"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a276de8bf5e184d5b8a107156cd47abad"></a>ROW SHARE</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.2 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af0aa04592a2a402cb7b40e328e509c77"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af0aa04592a2a402cb7b40e328e509c77"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af0aa04592a2a402cb7b40e328e509c77"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.3 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a48252081168e40ed9dcc0fd8e5cc1aee"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a48252081168e40ed9dcc0fd8e5cc1aee"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a48252081168e40ed9dcc0fd8e5cc1aee"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.4 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a41ab7e269c454bf2bc3d8ca73908bda2"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a41ab7e269c454bf2bc3d8ca73908bda2"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a41ab7e269c454bf2bc3d8ca73908bda2"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.5 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ada7510cd76024ae59d114022309f5698"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ada7510cd76024ae59d114022309f5698"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ada7510cd76024ae59d114022309f5698"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.6 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af29e1c9cfc794ecf9ecba00974ffbffa"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af29e1c9cfc794ecf9ecba00974ffbffa"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af29e1c9cfc794ecf9ecba00974ffbffa"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.7 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ac1811314718f48248c8374c99006cfe9"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ac1811314718f48248c8374c99006cfe9"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ac1811314718f48248c8374c99006cfe9"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.8 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ace6a44508e9241a7b3f254b40e6ec241"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ace6a44508e9241a7b3f254b40e6ec241"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ace6a44508e9241a7b3f254b40e6ec241"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.9 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a25b4493d8c7749dbb76b07d50dee5b36"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a25b4493d8c7749dbb76b07d50dee5b36"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a25b4493d8c7749dbb76b07d50dee5b36"></a>X</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_r97c1058eb1624d39aa226cab2b32468b"><td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.1 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a7064004d0c7249d6aa07c40c00b113a9"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a7064004d0c7249d6aa07c40c00b113a9"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a7064004d0c7249d6aa07c40c00b113a9"></a>ROW EXCLUSIVE</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.2 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a70323820ab054baea6472856a672a87c"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a70323820ab054baea6472856a672a87c"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a70323820ab054baea6472856a672a87c"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.3 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_aa07f5ef5e5a74f05ad738317b621ecb7"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_aa07f5ef5e5a74f05ad738317b621ecb7"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_aa07f5ef5e5a74f05ad738317b621ecb7"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.4 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a39cacca773364189b1661b54b3fdb12d"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a39cacca773364189b1661b54b3fdb12d"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a39cacca773364189b1661b54b3fdb12d"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.5 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_aa432c061a47046dc9a0da86899dae6b2"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_aa432c061a47046dc9a0da86899dae6b2"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_aa432c061a47046dc9a0da86899dae6b2"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.6 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a494a17cff6484358af76bc44a611aefa"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a494a17cff6484358af76bc44a611aefa"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a494a17cff6484358af76bc44a611aefa"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.7 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a92a4f8064dd74abfba58194d80953b41"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a92a4f8064dd74abfba58194d80953b41"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a92a4f8064dd74abfba58194d80953b41"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.8 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a90f57951b3c24d89b557b6ec94c7c84c"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a90f57951b3c24d89b557b6ec94c7c84c"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a90f57951b3c24d89b557b6ec94c7c84c"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.9 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a54633126c72d49f388bec5dfbfed9afc"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a54633126c72d49f388bec5dfbfed9afc"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a54633126c72d49f388bec5dfbfed9afc"></a>X</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_r581166696f9f4b7c95ad505a7909703f"><td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.1 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a426aef12caff464da0a3f362b568c565"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a426aef12caff464da0a3f362b568c565"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a426aef12caff464da0a3f362b568c565"></a>SHARE UPDATE EXCLUSIVE</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.2 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a7b630c29b7644dab8c8ebc3efb3c124b"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a7b630c29b7644dab8c8ebc3efb3c124b"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a7b630c29b7644dab8c8ebc3efb3c124b"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.3 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_abf649def86334f18b699f4a79a636fa1"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_abf649def86334f18b699f4a79a636fa1"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_abf649def86334f18b699f4a79a636fa1"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.4 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ae8836973263543aa9c43afc082de919a"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ae8836973263543aa9c43afc082de919a"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ae8836973263543aa9c43afc082de919a"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.5 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a0a88e6815fe44c7cabb183f0e608c5ed"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a0a88e6815fe44c7cabb183f0e608c5ed"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a0a88e6815fe44c7cabb183f0e608c5ed"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.6 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a0bfaee4f6d184fd496170244c8cb531d"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a0bfaee4f6d184fd496170244c8cb531d"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a0bfaee4f6d184fd496170244c8cb531d"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.7 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_adb07da7e838b410c99a65ec6bbc33316"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_adb07da7e838b410c99a65ec6bbc33316"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_adb07da7e838b410c99a65ec6bbc33316"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.8 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ac266f0c534314899bec4b677288abb2b"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ac266f0c534314899bec4b677288abb2b"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ac266f0c534314899bec4b677288abb2b"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.9 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a7cb5945e7b1549bdba5ccbf342fdaca5"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a7cb5945e7b1549bdba5ccbf342fdaca5"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a7cb5945e7b1549bdba5ccbf342fdaca5"></a>X</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ree31b044d66b4a75b161399c7bf9e434"><td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.1 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a9074eed14d0b4ea0b7cacf4dabda8e88"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a9074eed14d0b4ea0b7cacf4dabda8e88"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a9074eed14d0b4ea0b7cacf4dabda8e88"></a>SHARE</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.2 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a2141b54b92df4abf87d6667ae949cac2"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a2141b54b92df4abf87d6667ae949cac2"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a2141b54b92df4abf87d6667ae949cac2"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.3 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_acc7edd33b9df4d84b70be0cee966d94a"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_acc7edd33b9df4d84b70be0cee966d94a"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_acc7edd33b9df4d84b70be0cee966d94a"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.4 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a1ee062a6a76f4d64b3dd33a7114d1a24"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a1ee062a6a76f4d64b3dd33a7114d1a24"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a1ee062a6a76f4d64b3dd33a7114d1a24"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.5 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_aaa57542f95e64e5cae96e765d1593eea"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_aaa57542f95e64e5cae96e765d1593eea"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_aaa57542f95e64e5cae96e765d1593eea"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.6 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a64d228f588f9497fb8939675d32be29e"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a64d228f588f9497fb8939675d32be29e"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a64d228f588f9497fb8939675d32be29e"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.7 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a569457ad04664703ab803b5ceb815b43"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a569457ad04664703ab803b5ceb815b43"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a569457ad04664703ab803b5ceb815b43"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.8 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a3155e13036fd47e78136ae6dd67d3c16"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a3155e13036fd47e78136ae6dd67d3c16"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a3155e13036fd47e78136ae6dd67d3c16"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.9 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a6cdb2a7b02744a398dd63b0ea5560605"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a6cdb2a7b02744a398dd63b0ea5560605"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a6cdb2a7b02744a398dd63b0ea5560605"></a>X</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_r01bfda5ca26546dda0b0a00e6719ade4"><td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.1 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a7f7fded747f44f4f995693f047092820"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a7f7fded747f44f4f995693f047092820"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a7f7fded747f44f4f995693f047092820"></a>SHARE ROW EXCLUSIVE</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.2 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a20cd7e760320417da118dd9280eb1d22"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a20cd7e760320417da118dd9280eb1d22"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a20cd7e760320417da118dd9280eb1d22"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.3 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a6d8ae982320b4bc992665e577c6e13ba"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a6d8ae982320b4bc992665e577c6e13ba"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a6d8ae982320b4bc992665e577c6e13ba"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.4 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a432087b932d643bbaab737ae04b496a8"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a432087b932d643bbaab737ae04b496a8"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a432087b932d643bbaab737ae04b496a8"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.5 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_abdceec7269e84c54bccacb76888971ce"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_abdceec7269e84c54bccacb76888971ce"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_abdceec7269e84c54bccacb76888971ce"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.6 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ae80efea7b940425f9cee361725f558a5"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ae80efea7b940425f9cee361725f558a5"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ae80efea7b940425f9cee361725f558a5"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.7 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a5d81bebfb3024188822e7f9e9f1144e5"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a5d81bebfb3024188822e7f9e9f1144e5"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a5d81bebfb3024188822e7f9e9f1144e5"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.8 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ae0c0570732c64a8e9428ed03b28acb26"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ae0c0570732c64a8e9428ed03b28acb26"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ae0c0570732c64a8e9428ed03b28acb26"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.9 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ab47a06104dee4a2d89dcfc3df5b16240"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ab47a06104dee4a2d89dcfc3df5b16240"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ab47a06104dee4a2d89dcfc3df5b16240"></a>X</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_rabbd74486cc44bc7ab3a5451bf9fdf0c"><td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.1 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_acf837fbf92624380bd792ceacbeadadf"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_acf837fbf92624380bd792ceacbeadadf"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_acf837fbf92624380bd792ceacbeadadf"></a>EXCLUSIVE</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.2 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ac780634bfb2541aba89c5ede034a8be2"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ac780634bfb2541aba89c5ede034a8be2"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ac780634bfb2541aba89c5ede034a8be2"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.3 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a49a72429748f4eaca900fea84e252799"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a49a72429748f4eaca900fea84e252799"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a49a72429748f4eaca900fea84e252799"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.4 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a2dbcbb3232f146849e80a6b1260ea5a0"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a2dbcbb3232f146849e80a6b1260ea5a0"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a2dbcbb3232f146849e80a6b1260ea5a0"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.5 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a37282ff1d5ae4688a340f197ec316bcf"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a37282ff1d5ae4688a340f197ec316bcf"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a37282ff1d5ae4688a340f197ec316bcf"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.6 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a16f1ca4a44bf473f9706024a7598872c"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a16f1ca4a44bf473f9706024a7598872c"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a16f1ca4a44bf473f9706024a7598872c"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.7 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a88e1e6b3e167455c905cdeeaa3d10093"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a88e1e6b3e167455c905cdeeaa3d10093"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a88e1e6b3e167455c905cdeeaa3d10093"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.8 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a8004e60d4a1d4667b9abf786fc8ca754"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a8004e60d4a1d4667b9abf786fc8ca754"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a8004e60d4a1d4667b9abf786fc8ca754"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.9 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_afc5f4fa6f9c9497fb112dd42b2b52ae9"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_afc5f4fa6f9c9497fb112dd42b2b52ae9"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_afc5f4fa6f9c9497fb112dd42b2b52ae9"></a>X</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_rc11d5c0e83df412184a24fb8017540b3"><td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.1 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a837b9f85773642649ae8d07e6517b869"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a837b9f85773642649ae8d07e6517b869"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a837b9f85773642649ae8d07e6517b869"></a>ACCESS EXCLUSIVE</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.2 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ab265c9aff940417f8a4db4b1c171410f"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ab265c9aff940417f8a4db4b1c171410f"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ab265c9aff940417f8a4db4b1c171410f"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.3 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a887108fafd0f44559f98991e89f341e1"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a887108fafd0f44559f98991e89f341e1"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a887108fafd0f44559f98991e89f341e1"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.4 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_abf9083d173714786878eaa90482bde41"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_abf9083d173714786878eaa90482bde41"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_abf9083d173714786878eaa90482bde41"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.5 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ac0d34a365dd0416fb8e15b8f09a214bc"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ac0d34a365dd0416fb8e15b8f09a214bc"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ac0d34a365dd0416fb8e15b8f09a214bc"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.6 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af32e35fe12784b08a937cd0a8e2dade6"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af32e35fe12784b08a937cd0a8e2dade6"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_af32e35fe12784b08a937cd0a8e2dade6"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.7 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_aef45dc2d00b04564a8cb445181dc9e82"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_aef45dc2d00b04564a8cb445181dc9e82"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_aef45dc2d00b04564a8cb445181dc9e82"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.8 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ab8f29c684b4c4300a6ca1882d85e782e"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ab8f29c684b4c4300a6ca1882d85e782e"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_ab8f29c684b4c4300a6ca1882d85e782e"></a>X</p>
</td>
<td class="cellrowborder" valign="top" width="11.111111111111112%" headers="mcps1.2.10.1.9 "><p id="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a6a869c8995aa4395b2e433f05475f52a"><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a6a869c8995aa4395b2e433f05475f52a"></a><a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_a6a869c8995aa4395b2e433f05475f52a"></a>X</p>
</td>
</tr>
</tbody>
</table>

LOCK的参数说明如下所示：

-   **name**

    要锁定的表的名称，可以有模式修饰。

    LOCK TABLE命令中声明的表的顺序就是上锁的顺序。

    取值范围：已存在的表名。

-   **ONLY**

    如果指定ONLY，只有该表被锁定。如果没有声明，该表和他的所有子表将都被锁定。

-   **ACCESS SHARE**

    ACCESS锁只允许对表进行读取，而禁止对表进行修改。所有对表进行读取而不修改的SQL语句都会自动请求这种锁。例如，SELECT命令会自动在被引用的表上请求一个这种锁。

-   **ROW SHARE**

    与EXCLUSIVE和ACCESS EXCLUSIVE锁模式冲突。

    SELECT FOR UPDATE和SELECT FOR SHARE命令会自动在目标表上请求ROW SHARE锁（且所有被引用但不是FOR SHARE/FOR UPDATE的其他表上，还会自动加上ACCESS SHARE锁）。

-   **ROW EXCLUSIVE**

    与ROW SHARE锁相同，ROW EXCLUSIVE允许并发读取表，但是禁止修改表中数据。UPDATE，DELETE，INSERT命令会自动在目标表上请求这个锁（且所有被引用的其他表上还会自动加上的ACCESS SHARE锁）。通常情况下，所有会修改表数据的命令都会请求表的ROW EXCLUSIVE锁。

-   **SHARE UPDATE EXCLUSIVE**

    这个模式保护一个表的模式不被并发修改，以及禁止在目标表上执行垃圾回收命令（VACUUM ）。

    VACUUM（不带FULL选项），ANALYZE，CREATE INDEX CONCURRENTLY命令会自动请求这样的锁。

-   **SHARE**

    SHARE锁允许并发的查询，但是禁止对表进行修改。

    CREATE INDEX（不带CONCURRENTLY选项）语句会自动请求这种锁。

-   **SHARE ROW EXCLUSIVE**

    SHARE ROW EXCLUSIVE锁禁止对表进行任何的并发修改，而且是独占锁，因此一个会话中只能获取一次。

    任何SQL语句都不会自动请求这个锁模式。

-   **EXCLUSIVE**

    EXCLUSIVE锁允许对目标表进行并发查询，但是禁止任何其他操作。

    这个模式只允许并发加ACCESS SHARE锁，也就是说，只有对表的读动作可以和持有这个锁模式的事务并发执行。

    任何SQL语句都不会在用户表上自动请求这个锁模式。然而在某些操作的时候，会在某些系统表上请求它。

-   **ACCESS EXCLUSIVE**

    这个模式保证其所有者（事务）是可以访问该表的唯一事务。

    ALTER TABLE，DROP TABLE，TRUNCATE，REINDEX命令会自动请求这种锁。

    在LOCK TABLE命令没有明确声明需要的锁模式时，它是缺省锁模式。

-   **NOWAIT**

    声明LOCK TABLE不去等待任何冲突的锁释放，如果无法立即获取该锁，该命令退出并且发出一个错误信息。

    在不指定NOWAIT的情况下获取表级锁时，如果有其他互斥锁存在的话，则等待其他锁的释放。


## 示例<a name="zh-cn_topic_0237122168_zh-cn_topic_0059778442_s9884bdbe455b460a9a2dde267283b75b"></a>

```
--在执行删除操作时对一个有主键的表进行 SHARE ROW EXCLUSIVE 锁。
openGauss=# CREATE TABLE tpcds.reason_t1 AS TABLE tpcds.reason;

openGauss=# START TRANSACTION;

openGauss=# LOCK TABLE tpcds.reason_t1 IN SHARE ROW EXCLUSIVE MODE;

openGauss=# DELETE FROM tpcds.reason_t1 WHERE r_reason_desc IN(SELECT r_reason_desc FROM tpcds.reason_t1 WHERE r_reason_sk < 6 );

openGauss=# DELETE FROM tpcds.reason_t1 WHERE r_reason_sk = 7;

openGauss=# COMMIT;

--删除表tpcds.reason_t1。
openGauss=# DROP TABLE tpcds.reason_t1;
```
