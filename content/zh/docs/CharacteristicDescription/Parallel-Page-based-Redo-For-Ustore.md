# Parallel Page-based Redo For Ustore<a name="ZH-CN_TOPIC_0000001164037824"></a>

## 可获得性<a name="section1136213124018"></a>

本特性自openGauss 2.1.0 版本开始引入。

## 特性简介<a name="section31192232416"></a>

优化Ustore Inplace Update WAL log写入，Ustore DML Operation回放提高并行度。

## 客户价值<a name="section747141119423"></a>

对于Update的WAL使用空间减少,Ustore DML Operation回放提高并行度。

## 特性描述<a name="section1796166174315"></a>

通过利用Prefix和suffix来减少update WAL log的写入，通过把回放线程分多个类型来解决Ustore DML WAL大多都是多页面回放问题；同时把Ustore的数据页面回放按照blkno去分发。

## 特性增强<a name="section18965647194512"></a>

无。

## 特性约束<a name="section1575615618465"></a>

无。

## 依赖关系<a name="section2535204364616"></a>

依赖于Ustore引擎。

