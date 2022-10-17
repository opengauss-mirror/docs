# 安全和认证（postgresql.conf）<a name="ZH-CN_TOPIC_0242371486"></a>

介绍设置客户端和服务器的安全认证方式的相关参数。

## authentication\_timeout<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_sb4f9d01645684c13ae66d6ad858b411a"></a>

**参数说明：**完成客户端认证的最长时间。如果一个客户端没有在这段时间里完成与服务器端的认证，则服务器自动中断与客户端的连接，这样就避免了出问题的客户端无限制地占用连接数。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，最小值为1，最大值为600，最小单位为s。

**默认值：**1min

## auth\_iteration\_count<a name="zh-cn_topic_0237124696_section2612143317514"></a>

**参数说明：**认证加密信息生成过程中使用的迭代次数。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，2048-134217728。

**默认值：**10000

>![](public_sys-resources/icon-notice.gif) **须知：**   
>迭代次数设置过小会降低口令存储的安全性，设置过大会导致认证、用户创建等涉及口令加密的场景性能劣化，请根据实际硬件条件合理设置迭代次数，推荐采用默认迭代次数。  

## session\_authorization<a name="section2099118013294"></a>

**参数说明：**当前会话的用户标识。

该参数属于USERSET类型参数，此参数为内部参数，只能通过[SET SESSION AUTHORIZATION](SET-SESSION-AUTHORIZATION.md)语法设置，不支持直接设置。

**取值范围：**字符串。

**默认值：**NULL

## session\_timeout<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_see4820fb6c024e0aa4c56882aeae204a"></a>

**参数说明：**表明与服务器建立链接后，不进行任何操作的最长时间。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0-86400，最小单位为s，0表示关闭超时设置。

**默认值：**10min

## idle_in_transaction_session_timeout<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_see4820fb6c024e0aa4c56882aeae204a"></a>

**参数说明：**表明与服务器建立链接后，如果当前会话处于事务中，不进行任何操作的最长时间。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0-86400，最小单位为s，0表示关闭超时设置。

**默认值：**0

>![](public_sys-resources/icon-notice.gif) **须知：**   
>openGauss gsql客户端中有自动重连机制，所以针对初始化用户本地连接，超时后gsql表现的现象为断开后重连。  

## ssl<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_s8c4647db116f44c4b9ce3dceee3d6ffa"></a>

**参数说明：**启用SSL连接。请在使用这个选项之前阅读[使用gsql连接](使用gsql连接.md)。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on表示启用SSL连接。
-   off表示不启用SSL连接。

>![](public_sys-resources/icon-notice.gif) **须知：**   
>开启此参数需要同时配置ssl\_cert\_file、ssl\_key\_file和ssl\_ca\_file等参数及对应文件，不正确的配置可能会导致openGauss无法正常启动。  

**默认值：**on

## require\_ssl<a name="zh-cn_topic_0237124696_section1652594319820"></a>

**参数说明：**设置服务器端是否强制要求SSL连接，该参数只有当参数[ssl](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_s8c4647db116f44c4b9ce3dceee3d6ffa)为on时才有效。请在使用这个选项之前阅读[使用gsql连接](使用gsql连接.md)。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on表示服务器端强制要求SSL连接。
-   off表示服务器端对是否通过SSL连接不作强制要求。

>![](public_sys-resources/icon-notice.gif) **须知：**   
>openGauss目前支持SSL的场景为客户端连接数据库主节点场景，该参数目前建议只在数据库主节点中开启。  

**默认值：**off

## ssl\_ciphers<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_s83e68216730542489adc97d0ba080289"></a>

**参数说明：**指定SSL支持的加密算法列表。ssl_ciphers设置错误会导致数据库不能正常启动。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符串，如果指定多个加密算法，加密算法之间需要以分号分割。详细请参见[用SSL进行安全的TCP/IP连接](用SSL进行安全的TCP-IP连接.md)获取支持的加密算法。

**默认值：**ALL

## ssl\_renegotiation\_limit<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_s52ca816208d444eca495ad205c3da3cb"></a>

**参数说明：**指定在会话密钥重新协商之前，通过SSL加密通道可以传输的流量。这个重新协商流量限制机制可以减少攻击者针对大量数据使用密码分析法破解密钥的几率，但是也带来较大的性能损失。流量是指发送和接受的流量总和。使用SSL重协商机制可能引入其他风险，因此已禁用SSL重协商机制，为保持版本兼容保留此参数，修改参数配置不再起作用。

该参数属于USERSET类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，最小值为0，最大值为2147483647。单位为KB。其中0表示禁用重新协商机制。

**默认值：**0

## ssl\_cert\_file<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_s68c117bf68b5461091ef26231ceb314d"></a>

**参数说明：**指定包含SSL服务器证书的文件的名称，其相对路径是相对于数据目录的。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符串

**默认值：**server.crt

## ssl\_key\_file<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_s102e03361bf949d88525e779b5284404"></a>

**参数说明：**指定包含SSL私钥的文件名称，其相对路径是相对于数据目录的。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符串

**默认值：**server.key

## ssl\_ca\_file<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_saaa8bf78f4314b5db5a3b6e9f06a96f9"></a>

**参数说明：**指定包含CA信息的文件的名称，其相对路径是相对于数据目录的。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符串，其中空字符串表示没有CA文件被加载，不进行客户端证书验证。

**默认值：**cacert.pem

## ssl\_crl\_file<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_s87be5a616bf444a6925c058dbc82291d"></a>

**参数说明**：证书吊销列表，如果客户端证书在该列表中，则当前客户端证书被视为无效证书。必须使用相对路径，相对路径是相对于数据目录的。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**：字符串，空字符串表示没有吊销列表。

**默认值**：空

## krb\_server\_keyfile<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_s640043f6a27941c1b96449530c0495c5"></a>

**参数说明：**指定Kerberos服务主配置文件的位置，详细请参见[配置客户端接入认证](配置客户端接入认证.md)。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符串

**默认值：**空

## krb\_srvname<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_s65aefa786b4f481da22dda86c00abb52"></a>

**参数说明：**设置Kerberos服务名，详细请参见[配置客户端接入认证](配置客户端接入认证.md)。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**字符串

**默认值：**postgres

## krb\_caseins\_users<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_s50cf7e3a4a994dc39cfc356cd6eaa1ca"></a>

**参数说明：**设置Kerberos用户名是否大小写敏感。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**布尔型

-   on表示大小写不敏感。
-   off表示大小写敏感。

**默认值：**off

## modify\_initial\_password<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_sd0b025a227a24d07a94d88e691f748e7"></a>

**参数说明：**当openGauss安装成功后，数据库中仅存在一个初始用户（UID为10的用户）。客户通过该帐户初次登录数据库进行操作时，该参数决定是否要对该初始帐户的密码进行修改。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

如果安装过程中未指定初始用户密码，则安装后初始用户密码默认为空，执行其他操作前需要先通过gsql客户端设置初始用户的密码。此参数功能不再生效，保留此参数仅为兼容升级场景。

**取值范围：**布尔型

-   on表示openGauss安装成功后初始用户首次登录操作前需要修改初始密码。
-   off表示openGauss安装成功后初始用户无需修改初始密码即可进行操作。

**默认值：**off

## password\_policy<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_s3db9d0a21a4d48b98ea4afc1f2e44626"></a>

**参数说明：**在使用CREATE ROLE/USER或者ALTER ROLE/USER命令创建或者修改openGauss帐户时，该参数决定是否进行密码复杂度检查。关于密码复杂度检查策略请参见[设置密码安全策略](设置密码安全策略.md)。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

>![](public_sys-resources/icon-notice.gif) **须知：**   
>从安全性考虑，请勿关闭密码复杂度策略。  

**取值范围：**0、1

-   0表示不采用密码复杂度校验策略。
-   1表示采用默认密码复杂度校验策略。

**默认值：**1

## password\_reuse\_time<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_s36625909efc14a42af3e142435ae9794"></a>

**参数说明：**在使用ALTER USER或者ALTER ROLE修改用户密码时，该参数指定是否对新密码进行可重用天数检查。关于密码可重用策略请参见[设置密码安全策略](设置密码安全策略.md)。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

>![](public_sys-resources/icon-notice.gif) **须知：**  
> 
>修改密码时会检查配置参数[password\_reuse\_time](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_s36625909efc14a42af3e142435ae9794)和[password\_reuse\_max](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53)。  
>-   当[password\_reuse\_time](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_s36625909efc14a42af3e142435ae9794)和[password\_reuse\_max](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53)都为正数时，只要满足其中任一个，即可认为密码可以重用。  
>-   当[password\_reuse\_time](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_s36625909efc14a42af3e142435ae9794)为0时，表示不限制密码重用天数，仅限制密码重用次数。  
>-   当[password\_reuse\_max](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53)为0时，表示不限制密码重用次数，仅限制密码重用天数。  
>-   当[password\_reuse\_time](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_s36625909efc14a42af3e142435ae9794)和[password\_reuse\_max](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53)都为0时，表示不对密码重用进行限制。  

**取值范围：**浮点型，最小值为0，最大值为3650，单位为天。

-   0表示不检查密码可重用的天数。
-   正数表示新密码不能为该值指定的天数内使用过的密码。

**默认值：**60

## password\_reuse\_max<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53"></a>

**参数说明：**在使用ALTER USER或者ALTER ROLE修改用户密码时，该参数指定是否对新密码进行可重用次数检查。关于密码可重用策略请参见[设置密码安全策略](设置密码安全策略.md)。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

>![](public_sys-resources/icon-notice.gif) **须知：** 
>  
>修改密码时会检查配置参数[password\_reuse\_time](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_s36625909efc14a42af3e142435ae9794)和[password\_reuse\_max](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53)。  
>-   当[password\_reuse\_time](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_s36625909efc14a42af3e142435ae9794)和[password\_reuse\_max](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53)都为正数时，只要满足其中任一个，即可认为密码可以重用。  
>-   当[password\_reuse\_time](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_s36625909efc14a42af3e142435ae9794)为0时，表示不限制密码重用天数，仅限制密码重用次数。  
>-   当[password\_reuse\_max](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53)为0时，表示不限制密码重用次数，仅限制密码重用天数。  
>-   当[password\_reuse\_time](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_s36625909efc14a42af3e142435ae9794)和[password\_reuse\_max](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53)都为0时，表示不对密码重用进行限制。  

**取值范围：**整型，最小值为0，最大值为1000。

-   0表示不检查密码可重用次数。
-   正整数表示新密码不能为该值指定的次数内使用过的密码。

**默认值：**0

## password\_lock\_time<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_s5e488e82235e4bd5b470b57a44a38c27"></a>

**参数说明：**该参数指定帐户被锁定后自动解锁的时间。关于帐户自动锁定策略请参见[设置密码安全策略](设置密码安全策略.md)。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

>![](public_sys-resources/icon-notice.gif) **须知：**   
>password\_lock\_time和[failed\_login\_attempts](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_sc155ec2258b34e78a2ffcf797e66b959)必须都为正数时锁定和解锁功能才能生效。  

**取值范围：**浮点型，最小值为0，最大值为365，单位为天。

-   0表示密码验证失败时，自动锁定功能不生效。
-   正数表示帐户被锁定后，当锁定时间超过password\_lock\_time设定的值时，帐户将会被自行解锁。

**默认值：**1d

## failed\_login\_attempts<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_sc155ec2258b34e78a2ffcf797e66b959"></a>

**参数说明：**在任意时候，如果输入密码错误的次数达到failed\_login\_attempts参数设定的值，则当前帐户会被锁定。password\_lock\_time参数设定的天数过后，帐户自动解锁。例如，登录时输入密码失败，ALTER USER时修改密码失败等。关于帐户自动锁定策略请参见[设置密码安全策略](设置密码安全策略.md)。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

>![](public_sys-resources/icon-notice.gif) **须知：**   
>failed\_login\_attempts和[password\_lock\_time](#zh-cn_topic_0237124696_zh-cn_topic_0059778664_s5e488e82235e4bd5b470b57a44a38c27)必须都为正数时锁定和解锁功能才能生效。  

**取值范围：**整型，最小值为0，最大值为1000。

-   0表示自动锁定功能不生效。
-   正整数表示当错误密码次数达到failed\_login\_attempts设定的值时，当前帐户将被锁定。

**默认值：**10

## password\_encryption\_type<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_se6b55c35b44945099d33b403a5a43bce"></a>

**参数说明：**该字段决定采用何种加密方式对用户密码进行加密存储。修改此参数的配置不会自动触发已有用户密码加密方式的修改，只会影响新创建用户或修改用户密码操作。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**0、1、2、3

-   0表示采用md5方式对密码加密。
-   1表示采用sha256和md5两种方式分别对密码加密。
-   2表示采用sha256方式对密码加密。
-   3表示采用sm3方式对密码加密。

>![](public_sys-resources/icon-notice.gif) **须知：**   
>md5加密算法安全性低，存在安全风险，不建议用户使用。  

**默认值：**2

## password\_min\_length<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_s80e5b9ae60584d44ac53f5ab2998b26f"></a>

**参数说明：**该字段决定帐户密码的最小长度。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，6\~999个字符。

**默认值：**8

## password\_max\_length<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_sf837d511c2de48069eb14ebb3afc0c20"></a>

**参数说明：**该字段决定帐户密码的最大长度。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，6\~999个字符。

**默认值：**32

## password\_min\_uppercase<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_s17e52632df154eba8c8e622b520b2c34"></a>

**参数说明：**该字段决定帐户密码中至少需要包含大写字母个数。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0\~999

-   0表示没有限制。
-   1\~999表示创建账户所指定的密码中至少需要包含大写字母个数。

**默认值：**0

## password\_min\_lowercase<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_s2e5497c6fbe84f14bab2ff2af8ce651c"></a>

**参数说明：**该字段决定帐户密码中至少需要包含小写字母的个数。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0\~999

-   0表示没有限制。
-   1\~999表示创建帐户所指定的密码中至少需要包含小写字母个数。

**默认值：**0

## password\_min\_digital<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_s3a14167dd99e4dfd8710bd9b03f5cec9"></a>

**参数说明：**该字段决定帐户密码中至少需要包含数字的个数。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0\~999

-   0表示没有限制。
-   1\~999表示创建帐户所指定的密码中至少需要包含数字个数。

**默认值：**0

## password\_min\_special<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_sac086283deba4af790d8d97bc5469d1a"></a>

**参数说明：**该字段决定帐户密码中至少需要包含特殊字符个数。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，0\~999

-   0表示没有限制。
-   1\~999表示创建帐户所指定的密码中至少需要包含特殊字符个数。

**默认值：**0

## password\_effect\_time<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_sfcc6124115734728917a548a8bd8f0d4"></a>

**参数说明：**该字段决定帐户密码的有效时间。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**浮点型，最小值为0，最大值为999，单位为天。

-   0表示不开启有效期限制功能。
-   1\~999表示创建帐户所指定的密码有效期，临近或超过有效期系统会提示用户修改密码。

**默认值：**90

## password\_notify\_time<a name="zh-cn_topic_0237124696_zh-cn_topic_0059778664_s1beab889ab8d49848ef28bf60c10d8f7"></a>

**参数说明：**该字段决定帐户密码到期前提醒的天数。

该参数属于SIGHUP类型参数，请参考[表1](重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围：**整型，最小值为0，最大值为999，单位为天。

-   0表示不开启提醒功能。
-   1\~999表示帐户密码到期前提醒的天数。

**默认值：**7

