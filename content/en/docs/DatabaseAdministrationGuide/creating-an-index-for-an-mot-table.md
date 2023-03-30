# Creating an Index for an MOT Table<a name="EN-US_TOPIC_0270402395"></a>

Standard PostgreSQL create and drop index statements are supported.

For example –

```
create index  text_index1 on test(x) ;
```

The following is a complete example of creating an index for the ORDER table in a TPC-C  workload –

```
create FOREIGN table bmsql_oorder (
  o_w_id       integer      not null,
  o_d_id       integer      not null,
  o_id         integer      not null,
  o_c_id       integer not null,
  o_carrier_id integer,         
  o_ol_cnt     integer,
  o_all_local  integer,
  o_entry_d    timestamp,
  primary key (o_w_id, o_d_id, o_id)
);
 
create index  bmsql_oorder_index1 on bmsql_oorder(o_w_id, o_d_id, o_c_id, o_id) ;
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>There is no need to specify the  **FOREIGN**  keyword before the MOT table name, because it is only created for create and drop table commands.

For MOT index limitations, see the Index subsection under the  _SQL Coverage and Limitations _section.

