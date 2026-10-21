---
description: This document describes dsstbox in openGauss, covering topics such as Overview, Commands.
keywords: [openGauss, dsstbox, tools and commands, Overview, Commands]
---

# dsstbox

## Overview<a name="section1377524355216"></a>

When openGauss is deployed in resource pooling mode with the `ss_enable_dss` feature enabled, the resource pooling architecture provides the `dsstbox` management tool to analyze the file system managed by DSS and repair metadata files. Currently, the `dsstbox` tool provides two main functions:

- **ssrepair**: Provides the capability to modify DSS metadata.
- **ssminer**: Parses historical redo logs on the DSS side.

## Commands<a name="section161808461171"></a>

- Display help information

    ```
    dsstbox -h
    dsstbox --help
    ```

- Display all help information

    ```
    dsstbox -a
    dsstbox --all
    ```

- Display the DSS version number

    ```
    dsstbox -v
    dsstbox --version
    ```

- Modify metadata

    ```
    dsstbox ssrepair <-v vol_path> <-t type> [-i meta_id] [-s au_size] <-k key_value>
    ```

- Print all valid historical redo information of the specified VG.

    ```
    dsstbox ssminer <-g vg_name> [-D DSS_HOME]
    ```

- Print `number` valid historical redo entries starting from `start_lsn` of the specified VG. If the `number` parameter is omitted, all valid historical redo log information starting from `start_lsn` is printed. If both `start_lsn` and `number` are 0, only the `redo_ctrl` information is printed.

    ```
    dsstbox ssminer <-g vg_name> <-s start_lsn> [-n number] [-D DSS_HOME]
    ```

- Print `number` valid historical redo entries starting from the `index+offset` combined position of the specified VG. If the `number` parameter is omitted, all valid historical redo log information starting from the `index+offset` combined position is printed. If both the `offset` and `number` parameters are omitted, only all valid historical redo information corresponding to the `index` block is printed.

    ```
    dsstbox ssminer <-g vg_name> <-i index> [-o offset] [-n number] [-D DSS_HOME]
    ```

    > [!NOTE] Note
    > - **vol_path**: The disk volume group path to be modified. Only absolute paths are supported. The length cannot exceed 63. Only digits, uppercase/lowercase letters, and `_`, `-`, `.` are allowed.
    > - **type**: The metadata type to be modified. Supported types include: `core_ctrl`, `volume_ctrl`, `root_ft_block`, `volume_header`, `software_version`, `fs_block`, `ft_block`, `fs_aux_block`.
    >   - `core_ctrl`, `volume_ctrl`, and `root_ft_block` reside only on the entry volume, so modifications are only allowed on the entry volume. `fs_block`, `ft_block`, `fs_aux_block`, `volume_header`, and `software_version` can reside on any volume, so they are not restricted to the entry volume.
    >   - `software_version` is actually a sub-item of `volume_header`, but it is not allowed to modify `software_version` via `-t volume_header -k software_version=*version*`; it can only be modified via `-t software_version -k software_version=*version*`. The modified version cannot exceed the current DSS version.
    >   - `core_ctrl`, `volume_ctrl`, `root_ft_block`, `volume_header`, and `software_version` have fixed positions on the volume, so `-i meta_id` and `-s au_size` are not required. `fs_block`, `ft_block`, and `fs_aux_block` have unfixed positions on the volume, so `-i meta_id` and `-s au_size` must be passed.
    > - **meta_id**: The `meta_id` of the metadata to be modified. Value range: [0, 2^64 - 1]. The user must ensure that `meta_id` actually exists (ssrepair does not validate this internally); otherwise, the modification will fail or incorrect metadata will be modified.
    > - **au_size**: The size of a single AU physical block of the disk volume group to be modified, in KB. Value range: [2048, 65536]. It is only used together with `-i meta_id` to calculate the offset of the metadata within the disk, and is not used to set the AU_SIZE of the volume group. The user must ensure that the passed value is consistent with the actual AU size of the volume group (ssrepair does not validate this internally); otherwise, incorrect metadata will be modified.
    > - **key_value**: The metadata field to be modified and the modified field content. Multiple key-value pairs are supported, separated by `,`.
    > - **DSS_HOME**: The path where `$DSS_HOME` is located.
    > - **vg_name**: Volume group name. Length cannot exceed 63. Only digits, uppercase/lowercase letters, and the special characters `_`, `.`, `-` are supported; other characters are not supported.
    > - **start_lsn**: The unique identifier of a single redo log, monotonically increasing. Value range: integer, [0, 2^64 - 1]. When `start_lsn = 0`, `number` must also be 0; otherwise, an error is reported.
    > - **number**: The number of redo logs to print. Value range: integer, [0, 2^64 - 1]. When `number = 0`, `start_lsn` must also be 0; otherwise, an error is reported.
    > - **index**: The index of the redo block to print. Value range: integer, [0, 7].
    > - **offset**: The offset when reading the specified redo block. Value range: integer, [0, 2^64 - 1], in bytes.

    > [!WARNING] Warning
    > 1. The `dsstbox ssrepair` function for modifying DSS metadata is a high-risk operation. Please operate with caution. It must be operated under the guidance of technical support personnel.
    > 2. `dsstbox ssrepair` is only an escape method under extreme conditions. It only provides the function of modifying DSS metadata. Since multiple metadata corruptions have already occurred when this tool is used, the disk metadata is not trustworthy. It can only validate whether the modified field exists and whether the modified content is legal, but cannot perform reverse rationality validation. The technical personnel using it must ensure the rationality of the modified data.
    > 3. Using `dsstbox ssrepair` to modify metadata while `dssserver` is running may cause the modified data to be overwritten a second time. You must stop the cluster before using `dsstbox ssrepair`.
    > 4. Before modifying metadata, `dsstbox ssrepair` will prompt the user to confirm the above conditions and continue execution after the user confirms the input. If you do not want the confirmation prompt, set the environment variable `DSS_REPAIR_CONFIRM_QUIET` to `TRUE`.

## Examples<a name="section192337387165"></a>

- Modify the `fs_block` metadata block with `meta_id` 8919238324529152 (v:0, au:10, block:507, item:0) on volume `/dev/vdb2`. The modified content is `head.common.type=1,bitmap[1]=18446744073709551615`.

    ```
    dsstbox ssrepair -v /dev/vdb2 -t fs_block -i 8919238324529152 -s 8192 -k 'head.common.type=1,bitmap[1]=18446744073709551615'
    ```

- Modify the `ft_block` metadata block with `meta_id` 105553116275712 (v:0, au:9, block:6, item:0) on volume `/dev/vdb2`. The modified content is `node_num=16`.

    ```
    dsstbox ssrepair -v /dev/vdb2 -t ft_block -i 105553116275712 -s 8192 -k 'node_num=16'
    ```

- Modify the `fs_aux_block` metadata block with `meta_id` 9601646138484736 (v:0, au:12, item:0) on volume `/dev/vdb2`. The modified content is `head.ftid=105553116275712`.

    ```
    dsstbox ssrepair -v /dev/vdb2 -t fs_aux_block -i 9601646138484736 -s 8192 -k 'head.ftid=105553116275712'
    ```

- Modify the `software_version` on volume `/dev/vdb2` to 2.

    ```
    dsstbox ssrepair -v /dev/vdb2 -t software_version -k 'software_version=2'
    ```

- Modify the `volume_header` metadata block on volume `/dev/vdb2`. The modified content is `vg_name=test_dsstbox`.

    ```
    dsstbox ssrepair -v /dev/vdb2 -t volume_header -k 'vg_name=test_dsstbox'
    ```

- Modify the `root_ft_block` metadata block on volume `/dev/vdb2`. The modified content is `ft_block.common.version=32,ft_root.fid=5133`.

    ```
    dsstbox ssrepair -v /dev/vdb2 -t root_ft_block -k 'ft_block.common.version=32,ft_root.fid=5133'
    ```

- Modify the `volume_ctrl` metadata block on volume `/dev/vdb2`. The modified content is `version=79,defs[0].id=0`.

    ```
    dsstbox ssrepair -v /dev/vdb2 -t volume_ctrl -k 'version=79,defs[0].id=0'
    ```

- Modify the `core_ctrl` metadata block on volume `/dev/vdb2`. The modified content is `au_size=8192,volume_count=1,volume_attrs[0].id=0`.

    ```
    dsstbox ssrepair -v /dev/vdb2 -t core_ctrl -k 'au_size=8192,volume_count=1,volume_attrs[0].id=0'
    ```

- Print all valid historical redo information of `data`.

    ```
    dsstbox ssminer -g data
    ```

- Print the redo ctrl information of `data`.

    ```
    dsstbox ssminer -g data -s 0 -n 0
    ```

- Print 3 redo historical entries starting from lsn 2 of `data`.

    ```
    dsstbox ssminer -g data -s 2 -n 3
    ```

- Print 3 redo historical entries starting from index 0, offset 0 of `data`.

    ```
    dsstbox ssminer -g data -i 0 -o 0 -n 3
    ```
