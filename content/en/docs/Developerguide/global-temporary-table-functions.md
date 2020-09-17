# Global Temporary Table Functions<a name="EN-US_TOPIC_0267354430"></a>

-   pg\_get\_gtt\_relstats\(relOid\)

    Description: Displays basic information about a global temporary table specified by the current session.

    Parameter: OID of the global temporary table.

    Return type: record

    Example:

    ```
    postgres=# select * from pg_get_gtt_relstats(74069);
     relfilenode | relpages | reltuples | relallvisible | relfrozenxid | relminmxid 
    -------------+----------+-----------+---------------+--------------+------------
           74069 |       58 |     13000 |             0 |        11151 |          0
    (1 row)
    ```


-   pg\_get\_gtt\_statistics\(relOid, attnum, ''::text\)

    Description: Displays statistics about a single column in a global temporary table specified by the current session.

    Parameter: OID and the  **attnum**  attribute of the global temporary table.

    Return type: record

    Example:

    ```
    postgres=# select * from pg_get_gtt_statistics(74069,1,''::text);
     starelid | starelkind | staattnum | stainherit | stanullfrac | stawidth | stadistinct | stakind1 | stakind2 | stakind3 | stakind4 | stakind5 | staop1 | staop2 | staop3 | staop4 | staop5 | stanumbers1 | stanumbers2 | stanumbers3 | stanu
    mbers4 | stanumbers5 |                                                                                                                                                                                                                      
                                              stavalues1                                                                                                                                                                                        
                                                                            | stavalues2 | stavalues3 | stavalues4 | stavalues5 | stadndistinct | staextinfo 
    ----------+------------+-----------+------------+-------------+----------+-------------+----------+----------+----------+----------+----------+--------+--------+--------+--------+--------+-------------+-------------+-------------+------
    -------+-------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ------------------------------------------------------------------------+------------+------------+------------+------------+---------------+------------
        74069 | c          |         1 | f          |           0 |        4 |          -1 |        2 |        3 |        0 |        0 |        0 |     97 |     97 |      0 |      0 |      0 |             | {1}         |             |      
           |             | {1,130,260,390,520,650,780,910,1040,1170,1300,1430,1560,1690,1820,1950,2080,2210,2340,2470,2600,2730,2860,2990,3120,3250,3380,3510,3640,3770,3900,4030,4160,4290,4420,4550,4680,4810,4940,5070,5200,5330,5460,5590,57
    20,5850,5980,6110,6240,6370,6500,6630,6760,6890,7020,7150,7280,7410,7540,7670,7800,7930,8060,8190,8320,8450,8580,8710,8840,8970,9100,9230,9360,9490,9620,9750,9880,10010,10140,10270,10400,10530,10660,10790,10920,11050,11180,11310,11440,1
    1570,11700,11830,11960,12090,12220,12350,12480,12610,12740,12870,13000} |            |            |            |            |             0 | 
    (1 row)
    ```


-   pg\_gtt\_attached\_pid\(relOid\)

    Description: Displays PIDs of all threads that are using the specified global temporary table.

    Parameter: OID of the global temporary table.

    Return type: record

    Example:

    ```
    postgres=# select * from pg_gtt_attached_pid(74069);
     relid |       pid       
    -------+-----------------
     74069 | 139648170456832
     74069 | 139648123270912
    (2 rows)
    ```


-   pg\_list\_gtt\_relfrozenxids\(\)

    Description: Displays the frozen XID of each session.

    If the value of  **pid**  is  **0**, the earliest frozen XID of all sessions is displayed.

    Parameter: none

    Return type: record

    Example:

    ```
    postgres=# select * from pg_list_gtt_relfrozenxids();
           pid       | relfrozenxid 
    -----------------+--------------
     139648123270912 |        11151
     139648170456832 |        11155
                   0 |        11151
    (3 rows)
    ```


