# gms_compress高级包

## 可获得性<a name="section3104013"></a>

本特性自openGauss 7.0.0RC1版本开始引入。

## 特性简介<a name="section27936123"></a>

gms_compress是一个基于openGauss的插件，提供了一组数据压缩实用程序。

## 客户价值<a name="section50098520"></a>

-   gms_compress主要用于数据压缩、解压缩场景，方便用户对二进制数据进行压缩和解压，存储压缩后的数据能节省空间。同时压缩算法采用标准的Lempel-Ziv算法，可以用于解压gzip格式的文件。

## 特性描述<a name="section48233501"></a>

-   通过CREATE Extension命令进行插件创建。
-   gms_compress 包使用 Lempel-Ziv 压缩算法，这是一种广泛使用的压缩技术，特别适用于减少数据的大小。
-   该包允许对二进制数据（RAW、BLOB）进行压缩和解压缩。
-   LZ_COMPRESS 提供了一个 QUALITY 参数，允许用户在压缩速度和压缩质量之间进行选择。参数值从 1 到 9，其中 1 表示最快的压缩速度，9 表示最好的压缩质量，默认值为 6。

## 特性增强<a name="section31448332"></a>

无。

## 性能增强

无。
## 特性约束<a name="section06531946143616"></a>

- 仅支持`create extension`命令方式加载插件。

## 依赖关系<a name="section14599532"></a>

无。

