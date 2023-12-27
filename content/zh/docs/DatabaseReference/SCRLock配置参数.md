# SCRLock配置参数

## ss\_enable\_scrlock 

**参数说明**： 是否使用SCRLock。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔型，on、off。on表示开启使用SCRLock，off表示不开启。

**默认值**： off

>![](public_sys-resources/icon-note.png) **说明：** 
>SCRLock需要使用CX5网卡，并且依赖OCK  RDMA动态库。开启前请确保已配置正确。

## ss\_enable\_scrlock\_sleep\_mode 

**参数说明**： 是否开启SCRLock的睡眠模式。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 布尔值，on、off。on表示开启使用SCRLock的睡眠模式，off表示不开启。

**默认值**： on

>![](public_sys-resources/icon-note.png) **说明：** 
>SCRLock睡眠模式会降低SCRLock对CPU的占用，但是会增加SCRLock的时延。

## ss\_scrlock\_server\_port 

**参数说明**： 表示SCRLock服务端侦听端口号。。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，1024~65535

**默认值**： 8000

## ss\_scrlock\_worker\_count 

**参数说明**： 表示SCRLock客户端worker数量。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 整型，2~16

**默认值**： 2

## ss\_scrlock\_worker\_bind\_core  

**参数说明**： 表示SCRLock worker占用起止CPU。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 字符串，"开始CPU编号 结束CPU编号"，CPU编号中间空格分开，例如："10 15"

**默认值**： ""

>![](public_sys-resources/icon-note.png) **说明：** 
>-   该参数允许为空，此时SCRLock worker不绑定CPU。
>-   该参数表示的起止CPU数量需要不小于2。

## ss\_scrlock\_server\_bind_core  

**参数说明**： 表示SCRLock server占用起止CPU。

该参数属于POSTMASTER类型参数，请参考[表1](重设参数.md#zh-cn_topic_0283137176_zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)中对应设置方法进行设置。

**取值范围**： 字符串，"开始CPU编号 结束CPU编号"，CPU编号中间空格分开，例如："10 15"

**默认值**： ""

>![](public_sys-resources/icon-note.png) **说明：** 
>该参数为空时，等效于该参数为"0 0"，即SCRLock server占用0号CPU。