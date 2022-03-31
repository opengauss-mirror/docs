# Creating an Index for an MOT<a name="EN-US_TOPIC_0289900796"></a>

Standard openGauss statements for creating and deleting indexes are supported.

For example:

```
create index  text_index1 on test(x) ;
```

Create an ORDER table for TPC-C and create an index.

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
>You do not need to specify the FOREIGN keyword before the MOT name because it is used only in the commands for creating and deleting tables.

For details about MOT index limitations, see "MOT SQL Coverage and Limitations."

