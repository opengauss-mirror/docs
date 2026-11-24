# 透明数据加密支持内生国密

## 可获得性<a name="section_sdf_tde_availability"></a>

本特性自openGauss 8.0.0-RC1 版本开始引入。

## 特性简介<a name="section_sdf_tde_intro"></a>

openGauss透明数据加密（TDE）在原有KMS密钥管理方式的基础上，新增内生国密（SDF）密钥管理方式。该方式通过GM/T 0018标准的SDF（密码设备应用接口）调用服务器内置的国密密码模块（例如鲲鹏TEE/CCOS），由密码模块内的硬件根密钥保护主密钥，并由密码模块执行SM4加解密，无需外置加密卡，也无需对接外部KMS。

两种密钥管理方式通过GUC参数tde\_key\_provider选择，KMS方式为默认值。内生国密方式仅支持资源池化部署，适用于对国密算法、密钥不出设备有明确要求的场景。

## 客户价值<a name="section_sdf_tde_value"></a>

- 主密钥（KEK）驻留在服务器内置密码模块中，由TEE硬件根密钥保护；数据加密密钥以句柄形式使用，数据库进程不接触数据加密密钥明文，降低密钥在内存中泄露的风险。且无需额外采购KMS服务或外置加密卡，降低部署成本。

## 特性描述<a name="section_sdf_tde_description"></a>

### 密钥管理方式<a name="section_sdf_tde_key_management"></a>

内生国密方式沿用透明数据加密的三层密钥结构，即根密钥（RK）、主密钥（CMK）和数据加密密钥（DEK），但三者的承载位置与KMS方式不同：

- 根密钥（RK）：由TEE/密码模块内部的硬件根密钥承担，不出设备、不可导出，数据库不感知也不管理。
- 主密钥（CMK）：即gs\_tde\_sdf在密码模块槽位内创建的SM4 KEK，由根密钥保护，数据库使用预先配置的访问口令申请其访问权限。KEK槽位取值范围为1～1000，每个集群使用一个固定槽位。
- 主密钥ID：由KEK槽位编码生成，形如00000000-0000-0000-0000-00000000006a的UUID文本，最后12位十六进制数为槽位号。该编码复用了原有的CMK字段以及页面、WAL格式，不依赖KMS分配UUID。
- 数据加密密钥（DEK）：由主密钥（KEK）在密码模块内封装保护，数据库只保存DEK密文信封和DEK句柄，不接触DEK明文。
- DEK密文信封采用版本3格式，包含被主密钥封装的DEK、用于认证信封的封装密钥以及HMAC-SM3校验值。信封在首次导入时校验，校验失败会拒绝使用该信封。

表级的创建、切换和密钥轮转操作与KMS方式一致。内生国密方式仅支持SM4\_CTR加密算法，创建加密表时未指定算法则默认使用SM4\_CTR；轮转生成的DEK仍由同一个主密钥（KEK）保护，主密钥本身不变。

需要说明的是，gs\_tde\_sdf创建和分发的是主密钥（CMK），根密钥由TEE硬件提供，工具不创建、不导出、也不管理根密钥。

### 页面加密与存储<a name="section_sdf_tde_page"></a>

- 每次加解密的最小数据单元为一个8K大小的page页面，页面加解密通过SDF\_Encrypt/SDF\_Decrypt同步调用密码模块完成，每个页面使用独立随机IV。
- 页面尾部保存DEK密文信封、IV和算法标识，DEK明文始终不出密码模块。
- 加密算法、DEK密文信封和主密钥ID等参数以"keyword=value"格式保存在pg\_class系统表的reloptions字段中。
- 由于页面需要保存密钥信封等信息，相比不加密时占用存储空间膨胀约2.5%。

### 资源池化集成<a name="section_sdf_tde_resource_pooling"></a>

- 仅支持资源池化部署场景。集群内每个数据节点都必须导入相同的KEK并使用相同槽位，节点本地保存各自的SDF配置文件和加密后的KEK访问口令文件。
- 页面加解密与共享存储、双写、批量复制等路径集成，WAL中携带主密钥ID、DEK密文信封和算法标识等TDE上下文，支持资源池化备机回放和共享存储恢复。
- 数据库启动时打开密码设备并建立一个常驻的共享会话，完成KEK授权和SM4-CTR加解密自检。启动自检失败时数据库启动失败。
- 数据库进程按"主密钥ID+DEK密文信封"缓存DEK句柄，每个数据节点最多缓存10000个句柄，采用CLOCK策略淘汰。淘汰只释放模块内句柄，不删除持久化的密文信封，后续访问可重新导入。

### 密钥管理工具<a name="section_sdf_tde_tool"></a>

新增gs\_tde\_sdf工具，需要在启用SDF方式前，以root用户在密码模块所在节点执行，用于：

- 查询指定槽位是否已被占用。
- 在未占用的槽位创建SM4 KEK，并导出受保护备份。
- 在其他数据节点导入同一备份并校验KEK一致性。
- 生成节点本地的KEK访问口令文件和SDF配置文件sdf\_info.json。

数据库不会自动创建或导入KEK，也不会在部署时自动生成SDF配置文件。

## 特性约束<a name="section_sdf_tde_constraints"></a>

- 仅支持资源池化部署，且必须同时开启ss\_enable\_dms和ss\_enable\_dss；未开启资源池化的实例或纯CN实例不能启用SDF方式。
- 仅支持SM4\_CTR加密算法。
- 每个集群使用一个固定的KEK槽位，所有数据节点必须导入同一个KEK。部署后不得更换KEK、槽位或使用其他KEK覆盖同名槽位，否则已加密数据无法解密。
- KMS方式与内生国密方式不能混用，修改tde\_key\_provider不会迁移已有加密数据；已有加密数据必须继续使用创建时所用的密钥管理方式。
- 每个数据节点需要本地保存sdf\_info.json、加密后的KEK访问口令文件及其.key伴随文件。这些文件不随DSS共享存储快照备份，需要单独纳入备份与恢复清单。
- 主密钥（KEK）封装后的DEK信封长度受页面预留的140字节限制，密码模块返回的封装密钥长度必须能够放入该信封。
- 每个数据节点最多缓存10000个DEK句柄，同时受密码模块自身句柄规格限制；句柄耗尽时会话操作会返回SDF错误。
- 页面加解密为同步调用，性能取决于目标TEE和密码模块的处理能力，部署前需要在实际环境进行性能测试。
- 表级加密的通用约束（仅heap行存表、不加密列存/Ustore/物化视图/索引/TOAST/XLOG/系统表、密钥轮转条件等）与KMS方式相同，请参考[透明数据加密](transparent_data_encryption.md)。

## 依赖关系<a name="section_sdf_tde_dependencies"></a>

- 服务器内置的国密密码模块及TEE运行环境。
- 符合GM/T 0018标准的SDF动态库（鲲鹏BoostKit的libsdf.so），并需要提供ECM密钥管理扩展接口。
- 资源池化部署提供的DMS和DSS能力。
- gs\_tde\_sdf工具依赖Python 3和系统OpenSSL的libcrypto库。

## 使用指导<a name="section_sdf_tde_usage"></a>

内生国密方式的部署流程如下，详细步骤和示例请参考[设置透明数据加密（TDE）](../database_administration_guide/configuring_tde.md#section_sdf_tde_config)。

1. 在任意数据节点以root用户创建主密钥（KEK），同时生成本节点的口令文件和SDF配置文件。

    ```
    # /data/ccos/install/app/bin/gs_tde_sdf --library /usr/lib64/libsdf.so create-backup \
      --key-index 107 \
      --backup-file /data/ccos/kek-backup.json \
      --runtime-password-file /data/ccos/tde_sdf.password \
      --database-user ccos \
      --emit-config /data/ccos/install/data/dn/tde_config/sdf_info.json
    ```

2. 将备份文件分发到其他数据节点，导入并生成本地文件（无需指定槽位，槽位由备份文件决定）。

    ```
    # /data/ccos/install/app/bin/gs_tde_sdf --library /usr/lib64/libsdf.so import-backup \
      --backup-file /data/ccos/kek-backup.json \
      --runtime-password-file /data/ccos/tde_sdf.password \
      --database-user ccos \
      --emit-config /data/ccos/install/data/dn/tde_config/sdf_info.json
    ```

3. 设置GUC参数并重启数据库。

    ```
    gs_guc set -Z datanode -N all -I all -c "enable_tde=on" -c "tde_key_provider=sdf"
    gs_om -t restart
    ```

4. 创建加密表进行验证。

    ```
    openGauss=# CREATE TABLE tde_sdf_test (a int, b text) WITH (enable_tde = on, encrypt_algo = 'SM4_CTR');
    ```

参数说明请参考[tde\_key\_provider](../database_reference/security_configuration.md#section_tde_key_provider)，工具参数请参考[gs\_tde\_sdf](../tool_and_commandreference/gs_tde_sdf.md)。
