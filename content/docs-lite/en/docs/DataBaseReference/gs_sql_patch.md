# GS_SQL_PATCH

GS_SQL_PATCH records the status information about all SQL_PATCH.

**Table 1** GS_SQL_PATCH columns

| Name                | Type         | Description                                          |
| :------------------ | :----------- | :--------------------------------------------------- |
| patch_name          | name         | Specifies the patch name.                            |
| unique_sql_id       | bigint       | Queries the global unique ID.                        |
| owner               | oid          | ID of the user who creates the patch.                |
| enable              | bool         | Determines whether the patch takes effect.           |
| status              | "char"       | Patch status (reserved column).                      |
| abort               | bool         | Determines whether the value is **AbortHint**.       |
| hint_string         | text         | Specifies the hint text.                             |
| hint_node           | pg_node_tree | Specifies the hint parsing and serialization result. |
| original_query      | text         | Original statement (reserved column).                |
| patched_query       | text         | Patched statement (reserved column).                 |
| original_query_tree | pg_node_tree | Original statement parsing result (reserved column). |
| patched_query_tree  | pg_node_tree | Patched statement parsing result (reserved column).  |
| description         | text         | Specifies the patch description.                     |