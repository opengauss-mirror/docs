# Offline Page Parsing Tool -- pagehack

## Background<a name="zh-cn_topic_0237152442_section125419154823"></a>

`pagehack` is a tool that parses pages in an offline manner within the database.
>[!WARNING] Warning>
>Decoding segment-page files is not supported yet.<br/>

## Prerequisites<a name="zh-cn_topic_0237152442_section14602518111"></a>

Ensure that the database directory exists and the path is correct.

## Syntax<a name="zh-cn_topic_0237152442_section554725771"></a>

```
pagehack [OPTIONS]
```

## Parameter Description<a name="zh-cn_topic_0237152442_section4751333172417"></a>

**Hacking OPTIONS -- Parsing Option Description:**

- -f FILENAME

    The database directory to be modified. Ensure the path is correct.

- -t { heap | fsm | uheap | btree_index | ubtree_index | ubtree_pcr_index | undo | pca | filenode_map | pg_internal_init | twophase | cu | slot | pg_control | clog | csnlog | gaussdb_state | double_write | dw_single_flush_file | undo_zone | undo_space | undo_slot_space | undo_slot | undo_record | undo_fix | segment | lsn_info_meta | block_info_meta }

    The database file to be parsed.

- -r { pg_class | pg_index | pg_partition | pg_cudesc_xx | ts_cudesc_xx | pg_database | pg_tablespace | pg_attribute | pg_am | pg_statistic | pg_toast }

    The relation type used during parsing. The default is `heap`.

- -i { toast_index }

    The relation name to parse when the parsing type is `heap`.

- -v

    Display visibility mapping information when the parsing type is `index` or `heap`.

- -b

    Display BCM mapping information when the parsing type is `index` or `heap`.

- -u

    Parse the `double-write` file.

- -s

    Display the starting point of parsing when the file type is `heap`, `index`, or `undo`.

- -n

    Set the block number to be parsed.

- -o

    Set the CU pointer in cudesc.

- -I

    Set the starting position of the item slot to be modified on a page.

- -N

    Set the number of item slots to be modified on a page.

- -w

    When this option is used, modifications will be written to the file.

- -d

    This option is for testing purposes only. It is used to dirty half a page.

- -z

    Can only be used to parse undo space/group meta pages, followed by the specified zoneId.

- -S

    Select the segment number of a heap table file to be parsed.

**Dss OPTIONS -- Resource Pooling Option Description:**

- -D

    Enable resource pooling mode.

- -c

    The socket file path used by the dss instance process.

**Common OPTIONS -- General Option Description:**

- --help, -h

    Display help information.

- --version, -V

    Display version information.

## Example<a name="zh-cn_topic_0237152442_section554725871"></a>

+ Parse a uheap page.

```
pagehack -f [filename] -t uheap
```

+ Parse a btree index page.

```
pagehack -f [filename] -t btree_index
```

+ Parse a ubtree index page.

```
pagehack -f [filename] -t ubtree_index
```

+ Parse a ubtree pcr index page.

```
pagehack -f [filename] -t ubtree_pcr_index
```

+ Parse the header of an undo file.

```
pagehack -f [filename] -t undo -s [start number] -n [block number]
```
