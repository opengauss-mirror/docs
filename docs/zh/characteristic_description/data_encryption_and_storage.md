# 数据加密存储

## 可获得性<a name="section8174682"></a>

本特性自openGauss 1.1.0版本开始引入。

## 特性简介<a name="section6463280"></a>

提供对导入数据的加密存储。

## 客户价值<a name="section58169521"></a>

为客户提供加密导入接口，对客户认为是敏感信息的数据进行加密后存储在表内。

## 特性描述<a name="section53763648"></a>

openGauss提供加密函数gs\_encrypt\_aes128\(\)、gs_encrypt()和解密函数gs\_decrypt\_aes128\(\)、gs\_decrypt()接口。通过加密函数，可以对需要输入到表内的某列数据进行加密后再存储到表格内。调用格式为:

**gs\_encrypt\_aes128\(column, key\),gs_encrypt(decryptstr,keystr,decrypttype)**

其中key为用户指定的初始口令，用于派生加密密钥。当客户需要对整张表进行加密处理时，则需要为每一列单独书写加密函数。

当具有对应权限的用户需要查看具体的数据时，可通过解密函数接口对相应的属性列进行解密处理，调用格式为：

**gs\_decrypt\_aes128\(column, key\),gs\_decrypt(decryptstr,keystr,decrypttype)**

## 特性增强<a name="section14110789"></a>

无。

## 特性约束<a name="section06531946143616"></a>

无。

## 依赖关系<a name="section59888241"></a>

无。
