# Other System Functions<a name="EN-US_TOPIC_0289900172"></a>

-   The built-in functions and operators of openGauss are inherited from the open-source Postgres-XC and PostgreSQL. For details about the following functions, see the  [Postgres-XC documentation](http://postgres-xc.sourceforge.net/docs/1_1/functions.html)  and  [PostgreSQL documentation](https://www.postgresql.org/docs/9.2/functions.html).

    <a name="en-us_topic_0283137115_table11249131114414"></a>
    <table><tbody><tr id="en-us_topic_0283137115_row126641212124110"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p15664151264118"><a name="en-us_topic_0283137115_p15664151264118"></a><a name="en-us_topic_0283137115_p15664151264118"></a>_pg_char_max_length</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p156647127414"><a name="en-us_topic_0283137115_p156647127414"></a><a name="en-us_topic_0283137115_p156647127414"></a>_pg_char_octet_length</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p866416129418"><a name="en-us_topic_0283137115_p866416129418"></a><a name="en-us_topic_0283137115_p866416129418"></a>_pg_datetime_precision</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p126641912104112"><a name="en-us_topic_0283137115_p126641912104112"></a><a name="en-us_topic_0283137115_p126641912104112"></a>_pg_expandarray</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p66644128416"><a name="en-us_topic_0283137115_p66644128416"></a><a name="en-us_topic_0283137115_p66644128416"></a>_pg_index_position</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p166640127414"><a name="en-us_topic_0283137115_p166640127414"></a><a name="en-us_topic_0283137115_p166640127414"></a>_pg_interval_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1366491284119"><a name="en-us_topic_0283137115_p1366491284119"></a><a name="en-us_topic_0283137115_p1366491284119"></a>_pg_numeric_precision</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row20664012144115"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p17664412114114"><a name="en-us_topic_0283137115_p17664412114114"></a><a name="en-us_topic_0283137115_p17664412114114"></a>_pg_numeric_precision_radix</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1866421211419"><a name="en-us_topic_0283137115_p1866421211419"></a><a name="en-us_topic_0283137115_p1866421211419"></a>_pg_numeric_scale</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p36651412154114"><a name="en-us_topic_0283137115_p36651412154114"></a><a name="en-us_topic_0283137115_p36651412154114"></a>_pg_truetypid</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p176657129415"><a name="en-us_topic_0283137115_p176657129415"></a><a name="en-us_topic_0283137115_p176657129415"></a>_pg_truetypmod</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p86652012114113"><a name="en-us_topic_0283137115_p86652012114113"></a><a name="en-us_topic_0283137115_p86652012114113"></a>abbrev</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p176651512204117"><a name="en-us_topic_0283137115_p176651512204117"></a><a name="en-us_topic_0283137115_p176651512204117"></a>abs</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1366501216410"><a name="en-us_topic_0283137115_p1366501216410"></a><a name="en-us_topic_0283137115_p1366501216410"></a>abstime</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row36651312134115"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p8665161234114"><a name="en-us_topic_0283137115_p8665161234114"></a><a name="en-us_topic_0283137115_p8665161234114"></a>abstimeeq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p9665131216417"><a name="en-us_topic_0283137115_p9665131216417"></a><a name="en-us_topic_0283137115_p9665131216417"></a>abstimege</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1366512124417"><a name="en-us_topic_0283137115_p1366512124417"></a><a name="en-us_topic_0283137115_p1366512124417"></a>abstimegt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p6665191234110"><a name="en-us_topic_0283137115_p6665191234110"></a><a name="en-us_topic_0283137115_p6665191234110"></a>abstimein</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p15665191254116"><a name="en-us_topic_0283137115_p15665191254116"></a><a name="en-us_topic_0283137115_p15665191254116"></a>abstimele</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1266501210418"><a name="en-us_topic_0283137115_p1266501210418"></a><a name="en-us_topic_0283137115_p1266501210418"></a>abstimelt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p36653127410"><a name="en-us_topic_0283137115_p36653127410"></a><a name="en-us_topic_0283137115_p36653127410"></a>abstimene</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1966513123419"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p14665121244113"><a name="en-us_topic_0283137115_p14665121244113"></a><a name="en-us_topic_0283137115_p14665121244113"></a>abstimeout</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p366501224110"><a name="en-us_topic_0283137115_p366501224110"></a><a name="en-us_topic_0283137115_p366501224110"></a>abstimerecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1066531213414"><a name="en-us_topic_0283137115_p1066531213414"></a><a name="en-us_topic_0283137115_p1066531213414"></a>abstimesend</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p866513120411"><a name="en-us_topic_0283137115_p866513120411"></a><a name="en-us_topic_0283137115_p866513120411"></a>aclcontains</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p86651712194116"><a name="en-us_topic_0283137115_p86651712194116"></a><a name="en-us_topic_0283137115_p86651712194116"></a>acldefault</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p12665111216418"><a name="en-us_topic_0283137115_p12665111216418"></a><a name="en-us_topic_0283137115_p12665111216418"></a>aclexplode</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p17665912194118"><a name="en-us_topic_0283137115_p17665912194118"></a><a name="en-us_topic_0283137115_p17665912194118"></a>aclinsert</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1266510125413"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p11665111212415"><a name="en-us_topic_0283137115_p11665111212415"></a><a name="en-us_topic_0283137115_p11665111212415"></a>aclitemeq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1966516127414"><a name="en-us_topic_0283137115_p1966516127414"></a><a name="en-us_topic_0283137115_p1966516127414"></a>aclitemin</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p766531274113"><a name="en-us_topic_0283137115_p766531274113"></a><a name="en-us_topic_0283137115_p766531274113"></a>aclitemout</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1266581211418"><a name="en-us_topic_0283137115_p1266581211418"></a><a name="en-us_topic_0283137115_p1266581211418"></a>aclremove</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p966691244115"><a name="en-us_topic_0283137115_p966691244115"></a><a name="en-us_topic_0283137115_p966691244115"></a>acos</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p12666161294116"><a name="en-us_topic_0283137115_p12666161294116"></a><a name="en-us_topic_0283137115_p12666161294116"></a>age</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p9666151264110"><a name="en-us_topic_0283137115_p9666151264110"></a><a name="en-us_topic_0283137115_p9666151264110"></a>akeys</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row12666161217414"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p186661112114117"><a name="en-us_topic_0283137115_p186661112114117"></a><a name="en-us_topic_0283137115_p186661112114117"></a>any_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1266671216412"><a name="en-us_topic_0283137115_p1266671216412"></a><a name="en-us_topic_0283137115_p1266671216412"></a>any_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1366671213415"><a name="en-us_topic_0283137115_p1366671213415"></a><a name="en-us_topic_0283137115_p1366671213415"></a>anyarray_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p15666161210414"><a name="en-us_topic_0283137115_p15666161210414"></a><a name="en-us_topic_0283137115_p15666161210414"></a>anyarray_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p18666812174119"><a name="en-us_topic_0283137115_p18666812174119"></a><a name="en-us_topic_0283137115_p18666812174119"></a>anyarray_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1666613124416"><a name="en-us_topic_0283137115_p1666613124416"></a><a name="en-us_topic_0283137115_p1666613124416"></a>anyarray_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p16669122410"><a name="en-us_topic_0283137115_p16669122410"></a><a name="en-us_topic_0283137115_p16669122410"></a>anyelement_in</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row126661612104113"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p96668124411"><a name="en-us_topic_0283137115_p96668124411"></a><a name="en-us_topic_0283137115_p96668124411"></a>anyelement_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p36661512194114"><a name="en-us_topic_0283137115_p36661512194114"></a><a name="en-us_topic_0283137115_p36661512194114"></a>anyenum_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p56661012174115"><a name="en-us_topic_0283137115_p56661012174115"></a><a name="en-us_topic_0283137115_p56661012174115"></a>anyenum_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p766681204117"><a name="en-us_topic_0283137115_p766681204117"></a><a name="en-us_topic_0283137115_p766681204117"></a>anynonarray_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p10666101213412"><a name="en-us_topic_0283137115_p10666101213412"></a><a name="en-us_topic_0283137115_p10666101213412"></a>anynonarray_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p12666171264118"><a name="en-us_topic_0283137115_p12666171264118"></a><a name="en-us_topic_0283137115_p12666171264118"></a>anyrange_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1566661219414"><a name="en-us_topic_0283137115_p1566661219414"></a><a name="en-us_topic_0283137115_p1566661219414"></a>anyrange_out</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row6666712164118"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p126661612124113"><a name="en-us_topic_0283137115_p126661612124113"></a><a name="en-us_topic_0283137115_p126661612124113"></a>anytextcat</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p56661112184114"><a name="en-us_topic_0283137115_p56661112184114"></a><a name="en-us_topic_0283137115_p56661112184114"></a>area</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p7666412164115"><a name="en-us_topic_0283137115_p7666412164115"></a><a name="en-us_topic_0283137115_p7666412164115"></a>areajoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1166681211415"><a name="en-us_topic_0283137115_p1166681211415"></a><a name="en-us_topic_0283137115_p1166681211415"></a>areasel</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p18666131244111"><a name="en-us_topic_0283137115_p18666131244111"></a><a name="en-us_topic_0283137115_p18666131244111"></a>array_agg</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p5666121213419"><a name="en-us_topic_0283137115_p5666121213419"></a><a name="en-us_topic_0283137115_p5666121213419"></a>array_agg_finalfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p46671128416"><a name="en-us_topic_0283137115_p46671128416"></a><a name="en-us_topic_0283137115_p46671128416"></a>array_agg_transfn</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row46671312174116"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p2667512164112"><a name="en-us_topic_0283137115_p2667512164112"></a><a name="en-us_topic_0283137115_p2667512164112"></a>array_append</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1966713127412"><a name="en-us_topic_0283137115_p1966713127412"></a><a name="en-us_topic_0283137115_p1966713127412"></a>array_cat</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1366710121416"><a name="en-us_topic_0283137115_p1366710121416"></a><a name="en-us_topic_0283137115_p1366710121416"></a>array_dims</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p176678123411"><a name="en-us_topic_0283137115_p176678123411"></a><a name="en-us_topic_0283137115_p176678123411"></a>array_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1266711213413"><a name="en-us_topic_0283137115_p1266711213413"></a><a name="en-us_topic_0283137115_p1266711213413"></a>array_fill</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p186671612104114"><a name="en-us_topic_0283137115_p186671612104114"></a><a name="en-us_topic_0283137115_p186671612104114"></a>array_ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p866791217415"><a name="en-us_topic_0283137115_p866791217415"></a><a name="en-us_topic_0283137115_p866791217415"></a>array_gt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row36676122416"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p866715122414"><a name="en-us_topic_0283137115_p866715122414"></a><a name="en-us_topic_0283137115_p866715122414"></a>array_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p11667212134113"><a name="en-us_topic_0283137115_p11667212134113"></a><a name="en-us_topic_0283137115_p11667212134113"></a>array_larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p766781294113"><a name="en-us_topic_0283137115_p766781294113"></a><a name="en-us_topic_0283137115_p766781294113"></a>array_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p206671512114118"><a name="en-us_topic_0283137115_p206671512114118"></a><a name="en-us_topic_0283137115_p206671512114118"></a>array_length</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p14667191212416"><a name="en-us_topic_0283137115_p14667191212416"></a><a name="en-us_topic_0283137115_p14667191212416"></a>array_lower</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1966710122415"><a name="en-us_topic_0283137115_p1966710122415"></a><a name="en-us_topic_0283137115_p1966710122415"></a>array_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p11667141224120"><a name="en-us_topic_0283137115_p11667141224120"></a><a name="en-us_topic_0283137115_p11667141224120"></a>array_ndims</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row26674123419"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p14667141264114"><a name="en-us_topic_0283137115_p14667141264114"></a><a name="en-us_topic_0283137115_p14667141264114"></a>array_ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p066751215418"><a name="en-us_topic_0283137115_p066751215418"></a><a name="en-us_topic_0283137115_p066751215418"></a>array_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p166715127413"><a name="en-us_topic_0283137115_p166715127413"></a><a name="en-us_topic_0283137115_p166715127413"></a>array_prepend</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p166701254117"><a name="en-us_topic_0283137115_p166701254117"></a><a name="en-us_topic_0283137115_p166701254117"></a>array_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1366711214412"><a name="en-us_topic_0283137115_p1366711214412"></a><a name="en-us_topic_0283137115_p1366711214412"></a>array_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p86675127410"><a name="en-us_topic_0283137115_p86675127410"></a><a name="en-us_topic_0283137115_p86675127410"></a>array_smaller</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1667101218413"><a name="en-us_topic_0283137115_p1667101218413"></a><a name="en-us_topic_0283137115_p1667101218413"></a>array_to_json</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1966781224115"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p7667612154120"><a name="en-us_topic_0283137115_p7667612154120"></a><a name="en-us_topic_0283137115_p7667612154120"></a>array_to_string</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1266816127418"><a name="en-us_topic_0283137115_p1266816127418"></a><a name="en-us_topic_0283137115_p1266816127418"></a>array_typanalyze</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p9668171264118"><a name="en-us_topic_0283137115_p9668171264118"></a><a name="en-us_topic_0283137115_p9668171264118"></a>array_upper</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1166851213416"><a name="en-us_topic_0283137115_p1166851213416"></a><a name="en-us_topic_0283137115_p1166851213416"></a>arraycontained</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1566841216412"><a name="en-us_topic_0283137115_p1566841216412"></a><a name="en-us_topic_0283137115_p1566841216412"></a>arraycontains</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p5668201214120"><a name="en-us_topic_0283137115_p5668201214120"></a><a name="en-us_topic_0283137115_p5668201214120"></a>arraycontjoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p366813126419"><a name="en-us_topic_0283137115_p366813126419"></a><a name="en-us_topic_0283137115_p366813126419"></a>arraycontsel</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row566851264118"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p2668201218414"><a name="en-us_topic_0283137115_p2668201218414"></a><a name="en-us_topic_0283137115_p2668201218414"></a>arrayoverlap</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p106681126413"><a name="en-us_topic_0283137115_p106681126413"></a><a name="en-us_topic_0283137115_p106681126413"></a>ascii</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p7668712104114"><a name="en-us_topic_0283137115_p7668712104114"></a><a name="en-us_topic_0283137115_p7668712104114"></a>asin</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p96680122414"><a name="en-us_topic_0283137115_p96680122414"></a><a name="en-us_topic_0283137115_p96680122414"></a>atan</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p0668171244111"><a name="en-us_topic_0283137115_p0668171244111"></a><a name="en-us_topic_0283137115_p0668171244111"></a>atan2</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p96681012124120"><a name="en-us_topic_0283137115_p96681012124120"></a><a name="en-us_topic_0283137115_p96681012124120"></a>avals</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1466891220416"><a name="en-us_topic_0283137115_p1466891220416"></a><a name="en-us_topic_0283137115_p1466891220416"></a>avg</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row766841224115"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p12668151244115"><a name="en-us_topic_0283137115_p12668151244115"></a><a name="en-us_topic_0283137115_p12668151244115"></a>big5_to_euc_tw</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p8668171211415"><a name="en-us_topic_0283137115_p8668171211415"></a><a name="en-us_topic_0283137115_p8668171211415"></a>big5_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p56681126418"><a name="en-us_topic_0283137115_p56681126418"></a><a name="en-us_topic_0283137115_p56681126418"></a>big5_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1966851220412"><a name="en-us_topic_0283137115_p1966851220412"></a><a name="en-us_topic_0283137115_p1966851220412"></a>bit</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p366831212418"><a name="en-us_topic_0283137115_p366831212418"></a><a name="en-us_topic_0283137115_p366831212418"></a>bit_and</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p14668012134112"><a name="en-us_topic_0283137115_p14668012134112"></a><a name="en-us_topic_0283137115_p14668012134112"></a>bit_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p20668121234115"><a name="en-us_topic_0283137115_p20668121234115"></a><a name="en-us_topic_0283137115_p20668121234115"></a>bit_length</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1266891264111"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p46681912134119"><a name="en-us_topic_0283137115_p46681912134119"></a><a name="en-us_topic_0283137115_p46681912134119"></a>bit_or</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p0668191264111"><a name="en-us_topic_0283137115_p0668191264111"></a><a name="en-us_topic_0283137115_p0668191264111"></a>bit_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p196681812134120"><a name="en-us_topic_0283137115_p196681812134120"></a><a name="en-us_topic_0283137115_p196681812134120"></a>bit_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p176681412114114"><a name="en-us_topic_0283137115_p176681412114114"></a><a name="en-us_topic_0283137115_p176681412114114"></a>bit_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p12669512104119"><a name="en-us_topic_0283137115_p12669512104119"></a><a name="en-us_topic_0283137115_p12669512104119"></a>bitand</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p466920124412"><a name="en-us_topic_0283137115_p466920124412"></a><a name="en-us_topic_0283137115_p466920124412"></a>bitcat</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p206691612184111"><a name="en-us_topic_0283137115_p206691612184111"></a><a name="en-us_topic_0283137115_p206691612184111"></a>bitcmp</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1766919120415"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p466916128410"><a name="en-us_topic_0283137115_p466916128410"></a><a name="en-us_topic_0283137115_p466916128410"></a>biteq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p2066920128418"><a name="en-us_topic_0283137115_p2066920128418"></a><a name="en-us_topic_0283137115_p2066920128418"></a>bitge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p466911121416"><a name="en-us_topic_0283137115_p466911121416"></a><a name="en-us_topic_0283137115_p466911121416"></a>bitgt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p866951224116"><a name="en-us_topic_0283137115_p866951224116"></a><a name="en-us_topic_0283137115_p866951224116"></a>bitle</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p46690121416"><a name="en-us_topic_0283137115_p46690121416"></a><a name="en-us_topic_0283137115_p46690121416"></a>bitlt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p06691312194115"><a name="en-us_topic_0283137115_p06691312194115"></a><a name="en-us_topic_0283137115_p06691312194115"></a>bitne</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p8669512164110"><a name="en-us_topic_0283137115_p8669512164110"></a><a name="en-us_topic_0283137115_p8669512164110"></a>bitnot</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row4669212124111"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p7669912114113"><a name="en-us_topic_0283137115_p7669912114113"></a><a name="en-us_topic_0283137115_p7669912114113"></a>bitor</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p16691912164111"><a name="en-us_topic_0283137115_p16691912164111"></a><a name="en-us_topic_0283137115_p16691912164111"></a>bitshiftleft</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p12669191264115"><a name="en-us_topic_0283137115_p12669191264115"></a><a name="en-us_topic_0283137115_p12669191264115"></a>bitshiftright</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p2669131204114"><a name="en-us_topic_0283137115_p2669131204114"></a><a name="en-us_topic_0283137115_p2669131204114"></a>bittypmodin</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p5669161264114"><a name="en-us_topic_0283137115_p5669161264114"></a><a name="en-us_topic_0283137115_p5669161264114"></a>bittypmodout</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p16691212154117"><a name="en-us_topic_0283137115_p16691212154117"></a><a name="en-us_topic_0283137115_p16691212154117"></a>bitxor</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1666941254114"><a name="en-us_topic_0283137115_p1666941254114"></a><a name="en-us_topic_0283137115_p1666941254114"></a>bool</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row86691112204120"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p466991214119"><a name="en-us_topic_0283137115_p466991214119"></a><a name="en-us_topic_0283137115_p466991214119"></a>bool_and</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p96699125416"><a name="en-us_topic_0283137115_p96699125416"></a><a name="en-us_topic_0283137115_p96699125416"></a>bool_or</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p166951244118"><a name="en-us_topic_0283137115_p166951244118"></a><a name="en-us_topic_0283137115_p166951244118"></a>booland_statefunc</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p06693121418"><a name="en-us_topic_0283137115_p06693121418"></a><a name="en-us_topic_0283137115_p06693121418"></a>booleq</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1366914121415"><a name="en-us_topic_0283137115_p1366914121415"></a><a name="en-us_topic_0283137115_p1366914121415"></a>boolge</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p7669912184114"><a name="en-us_topic_0283137115_p7669912184114"></a><a name="en-us_topic_0283137115_p7669912184114"></a>boolgt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p7670151274114"><a name="en-us_topic_0283137115_p7670151274114"></a><a name="en-us_topic_0283137115_p7670151274114"></a>boolin</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row567001217412"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p116701912164114"><a name="en-us_topic_0283137115_p116701912164114"></a><a name="en-us_topic_0283137115_p116701912164114"></a>boolle</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p14670191216412"><a name="en-us_topic_0283137115_p14670191216412"></a><a name="en-us_topic_0283137115_p14670191216412"></a>boollt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1867011123417"><a name="en-us_topic_0283137115_p1867011123417"></a><a name="en-us_topic_0283137115_p1867011123417"></a>boolne</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p267041224113"><a name="en-us_topic_0283137115_p267041224113"></a><a name="en-us_topic_0283137115_p267041224113"></a>boolor_statefunc</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p76705124418"><a name="en-us_topic_0283137115_p76705124418"></a><a name="en-us_topic_0283137115_p76705124418"></a>boolout</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p2067061211416"><a name="en-us_topic_0283137115_p2067061211416"></a><a name="en-us_topic_0283137115_p2067061211416"></a>boolrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p186706121418"><a name="en-us_topic_0283137115_p186706121418"></a><a name="en-us_topic_0283137115_p186706121418"></a>boolsend</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row19670191214111"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p3670181212415"><a name="en-us_topic_0283137115_p3670181212415"></a><a name="en-us_topic_0283137115_p3670181212415"></a>box</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p567041224118"><a name="en-us_topic_0283137115_p567041224118"></a><a name="en-us_topic_0283137115_p567041224118"></a>box_above</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p96701122419"><a name="en-us_topic_0283137115_p96701122419"></a><a name="en-us_topic_0283137115_p96701122419"></a>box_above_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p14670151234114"><a name="en-us_topic_0283137115_p14670151234114"></a><a name="en-us_topic_0283137115_p14670151234114"></a>box_add</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p12670012184118"><a name="en-us_topic_0283137115_p12670012184118"></a><a name="en-us_topic_0283137115_p12670012184118"></a>box_below</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p10670111214119"><a name="en-us_topic_0283137115_p10670111214119"></a><a name="en-us_topic_0283137115_p10670111214119"></a>box_below_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p18670412114114"><a name="en-us_topic_0283137115_p18670412114114"></a><a name="en-us_topic_0283137115_p18670412114114"></a>box_center</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row9670191216416"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p4670612154112"><a name="en-us_topic_0283137115_p4670612154112"></a><a name="en-us_topic_0283137115_p4670612154112"></a>box_contain</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1670171204119"><a name="en-us_topic_0283137115_p1670171204119"></a><a name="en-us_topic_0283137115_p1670171204119"></a>box_contain_pt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p66701121415"><a name="en-us_topic_0283137115_p66701121415"></a><a name="en-us_topic_0283137115_p66701121415"></a>box_contained</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p867011125415"><a name="en-us_topic_0283137115_p867011125415"></a><a name="en-us_topic_0283137115_p867011125415"></a>box_distance</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1167021214113"><a name="en-us_topic_0283137115_p1167021214113"></a><a name="en-us_topic_0283137115_p1167021214113"></a>box_div</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p20670712164116"><a name="en-us_topic_0283137115_p20670712164116"></a><a name="en-us_topic_0283137115_p20670712164116"></a>box_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1867051234113"><a name="en-us_topic_0283137115_p1867051234113"></a><a name="en-us_topic_0283137115_p1867051234113"></a>box_ge</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row11670312164113"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1567041215416"><a name="en-us_topic_0283137115_p1567041215416"></a><a name="en-us_topic_0283137115_p1567041215416"></a>box_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p11671181210419"><a name="en-us_topic_0283137115_p11671181210419"></a><a name="en-us_topic_0283137115_p11671181210419"></a>box_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p767171284116"><a name="en-us_topic_0283137115_p767171284116"></a><a name="en-us_topic_0283137115_p767171284116"></a>box_intersect</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1367181284111"><a name="en-us_topic_0283137115_p1367181284111"></a><a name="en-us_topic_0283137115_p1367181284111"></a>box_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p26711112154113"><a name="en-us_topic_0283137115_p26711112154113"></a><a name="en-us_topic_0283137115_p26711112154113"></a>box_left</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p18671181254111"><a name="en-us_topic_0283137115_p18671181254111"></a><a name="en-us_topic_0283137115_p18671181254111"></a>box_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p467191210415"><a name="en-us_topic_0283137115_p467191210415"></a><a name="en-us_topic_0283137115_p467191210415"></a>box_mul</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row06711212174111"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p18671171213419"><a name="en-us_topic_0283137115_p18671171213419"></a><a name="en-us_topic_0283137115_p18671171213419"></a>box_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p3671101219411"><a name="en-us_topic_0283137115_p3671101219411"></a><a name="en-us_topic_0283137115_p3671101219411"></a>box_overabove</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1267171214119"><a name="en-us_topic_0283137115_p1267171214119"></a><a name="en-us_topic_0283137115_p1267171214119"></a>box_overbelow</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1067131218417"><a name="en-us_topic_0283137115_p1067131218417"></a><a name="en-us_topic_0283137115_p1067131218417"></a>box_overlap</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p66711612124117"><a name="en-us_topic_0283137115_p66711612124117"></a><a name="en-us_topic_0283137115_p66711612124117"></a>box_overleft</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p10671212164117"><a name="en-us_topic_0283137115_p10671212164117"></a><a name="en-us_topic_0283137115_p10671212164117"></a>box_overright</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1667161244114"><a name="en-us_topic_0283137115_p1667161244114"></a><a name="en-us_topic_0283137115_p1667161244114"></a>box_recv</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row867121210417"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p18671121244110"><a name="en-us_topic_0283137115_p18671121244110"></a><a name="en-us_topic_0283137115_p18671121244110"></a>box_right</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1671101210417"><a name="en-us_topic_0283137115_p1671101210417"></a><a name="en-us_topic_0283137115_p1671101210417"></a>box_same</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p667161274117"><a name="en-us_topic_0283137115_p667161274117"></a><a name="en-us_topic_0283137115_p667161274117"></a>box_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p367161234116"><a name="en-us_topic_0283137115_p367161234116"></a><a name="en-us_topic_0283137115_p367161234116"></a>box_sub</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p7671312114110"><a name="en-us_topic_0283137115_p7671312114110"></a><a name="en-us_topic_0283137115_p7671312114110"></a>bpchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p126711112144119"><a name="en-us_topic_0283137115_p126711112144119"></a><a name="en-us_topic_0283137115_p126711112144119"></a>bpchar_larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p4671141210415"><a name="en-us_topic_0283137115_p4671141210415"></a><a name="en-us_topic_0283137115_p4671141210415"></a>bpchar_pattern_ge</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row16671161214411"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p166711012174118"><a name="en-us_topic_0283137115_p166711012174118"></a><a name="en-us_topic_0283137115_p166711012174118"></a>bpchar_pattern_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p12671181216412"><a name="en-us_topic_0283137115_p12671181216412"></a><a name="en-us_topic_0283137115_p12671181216412"></a>bpchar_pattern_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p14671712174115"><a name="en-us_topic_0283137115_p14671712174115"></a><a name="en-us_topic_0283137115_p14671712174115"></a>bpchar_pattern_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1267215125412"><a name="en-us_topic_0283137115_p1267215125412"></a><a name="en-us_topic_0283137115_p1267215125412"></a>bpchar_smaller</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p10672181217412"><a name="en-us_topic_0283137115_p10672181217412"></a><a name="en-us_topic_0283137115_p10672181217412"></a>bpchar_sortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p6672612174117"><a name="en-us_topic_0283137115_p6672612174117"></a><a name="en-us_topic_0283137115_p6672612174117"></a>bpcharcmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p76721112194111"><a name="en-us_topic_0283137115_p76721112194111"></a><a name="en-us_topic_0283137115_p76721112194111"></a>bpchareq</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row76721112114119"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p16721129411"><a name="en-us_topic_0283137115_p16721129411"></a><a name="en-us_topic_0283137115_p16721129411"></a>bpcharge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p166721712144116"><a name="en-us_topic_0283137115_p166721712144116"></a><a name="en-us_topic_0283137115_p166721712144116"></a>bpchargt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p13672812154113"><a name="en-us_topic_0283137115_p13672812154113"></a><a name="en-us_topic_0283137115_p13672812154113"></a>bpchariclike</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p15672101294119"><a name="en-us_topic_0283137115_p15672101294119"></a><a name="en-us_topic_0283137115_p15672101294119"></a>bpcharicnlike</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p11672912184110"><a name="en-us_topic_0283137115_p11672912184110"></a><a name="en-us_topic_0283137115_p11672912184110"></a>bpcharicregexeq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p7672171294112"><a name="en-us_topic_0283137115_p7672171294112"></a><a name="en-us_topic_0283137115_p7672171294112"></a>bpcharicregexne</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p18672151264114"><a name="en-us_topic_0283137115_p18672151264114"></a><a name="en-us_topic_0283137115_p18672151264114"></a>bpcharin</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row867211122412"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p15672131216413"><a name="en-us_topic_0283137115_p15672131216413"></a><a name="en-us_topic_0283137115_p15672131216413"></a>bpcharle</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1674171210415"><a name="en-us_topic_0283137115_p1674171210415"></a><a name="en-us_topic_0283137115_p1674171210415"></a>bpcharlike</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p06741412114117"><a name="en-us_topic_0283137115_p06741412114117"></a><a name="en-us_topic_0283137115_p06741412114117"></a>bpcharlt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p9674212154114"><a name="en-us_topic_0283137115_p9674212154114"></a><a name="en-us_topic_0283137115_p9674212154114"></a>bpcharne</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1167441218418"><a name="en-us_topic_0283137115_p1167441218418"></a><a name="en-us_topic_0283137115_p1167441218418"></a>bpcharnlike</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p146741912134119"><a name="en-us_topic_0283137115_p146741912134119"></a><a name="en-us_topic_0283137115_p146741912134119"></a>bpcharout</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p11674151219416"><a name="en-us_topic_0283137115_p11674151219416"></a><a name="en-us_topic_0283137115_p11674151219416"></a>bpcharrecv</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row26741412164117"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p196741912114115"><a name="en-us_topic_0283137115_p196741912114115"></a><a name="en-us_topic_0283137115_p196741912114115"></a>bpcharregexeq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p176746123412"><a name="en-us_topic_0283137115_p176746123412"></a><a name="en-us_topic_0283137115_p176746123412"></a>bpcharregexne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p867491219415"><a name="en-us_topic_0283137115_p867491219415"></a><a name="en-us_topic_0283137115_p867491219415"></a>bpcharsend</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p186748126413"><a name="en-us_topic_0283137115_p186748126413"></a><a name="en-us_topic_0283137115_p186748126413"></a>bpchartypmodin</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p167419121412"><a name="en-us_topic_0283137115_p167419121412"></a><a name="en-us_topic_0283137115_p167419121412"></a>bpchartypmodout</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p12674101213413"><a name="en-us_topic_0283137115_p12674101213413"></a><a name="en-us_topic_0283137115_p12674101213413"></a>broadcast</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p156741122410"><a name="en-us_topic_0283137115_p156741122410"></a><a name="en-us_topic_0283137115_p156741122410"></a>btabstimecmp</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row176741312124113"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p967481213414"><a name="en-us_topic_0283137115_p967481213414"></a><a name="en-us_topic_0283137115_p967481213414"></a>btarraycmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p106744120414"><a name="en-us_topic_0283137115_p106744120414"></a><a name="en-us_topic_0283137115_p106744120414"></a>btbeginscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p8674161214415"><a name="en-us_topic_0283137115_p8674161214415"></a><a name="en-us_topic_0283137115_p8674161214415"></a>btboolcmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p206758121412"><a name="en-us_topic_0283137115_p206758121412"></a><a name="en-us_topic_0283137115_p206758121412"></a>btbpchar_pattern_cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1067571234114"><a name="en-us_topic_0283137115_p1067571234114"></a><a name="en-us_topic_0283137115_p1067571234114"></a>btbuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p667510120419"><a name="en-us_topic_0283137115_p667510120419"></a><a name="en-us_topic_0283137115_p667510120419"></a>btbuildempty</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p10675912104117"><a name="en-us_topic_0283137115_p10675912104117"></a><a name="en-us_topic_0283137115_p10675912104117"></a>btbulkdelete</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row16675212194116"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p18675121210419"><a name="en-us_topic_0283137115_p18675121210419"></a><a name="en-us_topic_0283137115_p18675121210419"></a>btcanreturn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p467531294118"><a name="en-us_topic_0283137115_p467531294118"></a><a name="en-us_topic_0283137115_p467531294118"></a>btcharcmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p16675312194113"><a name="en-us_topic_0283137115_p16675312194113"></a><a name="en-us_topic_0283137115_p16675312194113"></a>btcostestimate</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p867521214117"><a name="en-us_topic_0283137115_p867521214117"></a><a name="en-us_topic_0283137115_p867521214117"></a>btendscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p767581218410"><a name="en-us_topic_0283137115_p767581218410"></a><a name="en-us_topic_0283137115_p767581218410"></a>btfloat48cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p867514125411"><a name="en-us_topic_0283137115_p867514125411"></a><a name="en-us_topic_0283137115_p867514125411"></a>btfloat4cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p56751012154114"><a name="en-us_topic_0283137115_p56751012154114"></a><a name="en-us_topic_0283137115_p56751012154114"></a>btfloat4sortsupport</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1967513120411"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p14675111213413"><a name="en-us_topic_0283137115_p14675111213413"></a><a name="en-us_topic_0283137115_p14675111213413"></a>btfloat84cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p9675141220417"><a name="en-us_topic_0283137115_p9675141220417"></a><a name="en-us_topic_0283137115_p9675141220417"></a>btfloat8cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1267513126416"><a name="en-us_topic_0283137115_p1267513126416"></a><a name="en-us_topic_0283137115_p1267513126416"></a>btfloat8sortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1967581284110"><a name="en-us_topic_0283137115_p1967581284110"></a><a name="en-us_topic_0283137115_p1967581284110"></a>btgetbitmap</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p146756126410"><a name="en-us_topic_0283137115_p146756126410"></a><a name="en-us_topic_0283137115_p146756126410"></a>btgettuple</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p16751712204113"><a name="en-us_topic_0283137115_p16751712204113"></a><a name="en-us_topic_0283137115_p16751712204113"></a>btinsert</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p146758122411"><a name="en-us_topic_0283137115_p146758122411"></a><a name="en-us_topic_0283137115_p146758122411"></a>btint24cmp</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row10675131214416"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1667591244119"><a name="en-us_topic_0283137115_p1667591244119"></a><a name="en-us_topic_0283137115_p1667591244119"></a>btint28cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p16753126413"><a name="en-us_topic_0283137115_p16753126413"></a><a name="en-us_topic_0283137115_p16753126413"></a>btint2cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p2675151210415"><a name="en-us_topic_0283137115_p2675151210415"></a><a name="en-us_topic_0283137115_p2675151210415"></a>btint2sortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p18675131254114"><a name="en-us_topic_0283137115_p18675131254114"></a><a name="en-us_topic_0283137115_p18675131254114"></a>btint42cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p14675212124113"><a name="en-us_topic_0283137115_p14675212124113"></a><a name="en-us_topic_0283137115_p14675212124113"></a>btint48cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p14676191220414"><a name="en-us_topic_0283137115_p14676191220414"></a><a name="en-us_topic_0283137115_p14676191220414"></a>btint4cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1067611244110"><a name="en-us_topic_0283137115_p1067611244110"></a><a name="en-us_topic_0283137115_p1067611244110"></a>btint4sortsupport</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row56761212134120"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p17676191214110"><a name="en-us_topic_0283137115_p17676191214110"></a><a name="en-us_topic_0283137115_p17676191214110"></a>btint82cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p19676161294114"><a name="en-us_topic_0283137115_p19676161294114"></a><a name="en-us_topic_0283137115_p19676161294114"></a>btint84cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p067611214412"><a name="en-us_topic_0283137115_p067611214412"></a><a name="en-us_topic_0283137115_p067611214412"></a>btint8cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p16676111217418"><a name="en-us_topic_0283137115_p16676111217418"></a><a name="en-us_topic_0283137115_p16676111217418"></a>btint8sortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p367621214414"><a name="en-us_topic_0283137115_p367621214414"></a><a name="en-us_topic_0283137115_p367621214414"></a>btmarkpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p2067691284120"><a name="en-us_topic_0283137115_p2067691284120"></a><a name="en-us_topic_0283137115_p2067691284120"></a>btnamecmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1467614122414"><a name="en-us_topic_0283137115_p1467614122414"></a><a name="en-us_topic_0283137115_p1467614122414"></a>btnamesortsupport</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row867691214415"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p196761612144113"><a name="en-us_topic_0283137115_p196761612144113"></a><a name="en-us_topic_0283137115_p196761612144113"></a>btoidcmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p9676131218417"><a name="en-us_topic_0283137115_p9676131218417"></a><a name="en-us_topic_0283137115_p9676131218417"></a>btoidsortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p17676171218419"><a name="en-us_topic_0283137115_p17676171218419"></a><a name="en-us_topic_0283137115_p17676171218419"></a>btoidvectorcmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p14676312154118"><a name="en-us_topic_0283137115_p14676312154118"></a><a name="en-us_topic_0283137115_p14676312154118"></a>btoptions</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p967641294114"><a name="en-us_topic_0283137115_p967641294114"></a><a name="en-us_topic_0283137115_p967641294114"></a>btrecordcmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p16676151224118"><a name="en-us_topic_0283137115_p16676151224118"></a><a name="en-us_topic_0283137115_p16676151224118"></a>btreltimecmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p17676512104111"><a name="en-us_topic_0283137115_p17676512104111"></a><a name="en-us_topic_0283137115_p17676512104111"></a>btrescan</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row20676812194117"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p116761125411"><a name="en-us_topic_0283137115_p116761125411"></a><a name="en-us_topic_0283137115_p116761125411"></a>btrestrpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1967681220414"><a name="en-us_topic_0283137115_p1967681220414"></a><a name="en-us_topic_0283137115_p1967681220414"></a>btrim</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1967691213413"><a name="en-us_topic_0283137115_p1967691213413"></a><a name="en-us_topic_0283137115_p1967691213413"></a>bttext_pattern_cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p66761112114116"><a name="en-us_topic_0283137115_p66761112114116"></a><a name="en-us_topic_0283137115_p66761112114116"></a>bttextcmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1167615126419"><a name="en-us_topic_0283137115_p1167615126419"></a><a name="en-us_topic_0283137115_p1167615126419"></a>bttextsortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p16676112114112"><a name="en-us_topic_0283137115_p16676112114112"></a><a name="en-us_topic_0283137115_p16676112114112"></a>bttidcmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p14676412184113"><a name="en-us_topic_0283137115_p14676412184113"></a><a name="en-us_topic_0283137115_p14676412184113"></a>bttintervalcmp</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row4676512104114"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p7677121213413"><a name="en-us_topic_0283137115_p7677121213413"></a><a name="en-us_topic_0283137115_p7677121213413"></a>btvacuumcleanup</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p196771212194113"><a name="en-us_topic_0283137115_p196771212194113"></a><a name="en-us_topic_0283137115_p196771212194113"></a>bytea_sortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p106771012124114"><a name="en-us_topic_0283137115_p106771012124114"></a><a name="en-us_topic_0283137115_p106771012124114"></a>bytea_string_agg_finalfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p5677212184118"><a name="en-us_topic_0283137115_p5677212184118"></a><a name="en-us_topic_0283137115_p5677212184118"></a>bytea_string_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p11677111244115"><a name="en-us_topic_0283137115_p11677111244115"></a><a name="en-us_topic_0283137115_p11677111244115"></a>byteacat</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p20677141294117"><a name="en-us_topic_0283137115_p20677141294117"></a><a name="en-us_topic_0283137115_p20677141294117"></a>byteacmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p867713125417"><a name="en-us_topic_0283137115_p867713125417"></a><a name="en-us_topic_0283137115_p867713125417"></a>byteaeq</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row26779122419"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p116771012154119"><a name="en-us_topic_0283137115_p116771012154119"></a><a name="en-us_topic_0283137115_p116771012154119"></a>byteage</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p56771312154111"><a name="en-us_topic_0283137115_p56771312154111"></a><a name="en-us_topic_0283137115_p56771312154111"></a>byteagt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p267710126419"><a name="en-us_topic_0283137115_p267710126419"></a><a name="en-us_topic_0283137115_p267710126419"></a>byteain</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p20677161244117"><a name="en-us_topic_0283137115_p20677161244117"></a><a name="en-us_topic_0283137115_p20677161244117"></a>byteale</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p176773121415"><a name="en-us_topic_0283137115_p176773121415"></a><a name="en-us_topic_0283137115_p176773121415"></a>bytealike</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p66771412204111"><a name="en-us_topic_0283137115_p66771412204111"></a><a name="en-us_topic_0283137115_p66771412204111"></a>bytealt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p267761224110"><a name="en-us_topic_0283137115_p267761224110"></a><a name="en-us_topic_0283137115_p267761224110"></a>byteane</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1367701264113"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p12677171264110"><a name="en-us_topic_0283137115_p12677171264110"></a><a name="en-us_topic_0283137115_p12677171264110"></a>byteanlike</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p186775126415"><a name="en-us_topic_0283137115_p186775126415"></a><a name="en-us_topic_0283137115_p186775126415"></a>byteaout</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p10677312104113"><a name="en-us_topic_0283137115_p10677312104113"></a><a name="en-us_topic_0283137115_p10677312104113"></a>bytearecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p4677181274116"><a name="en-us_topic_0283137115_p4677181274116"></a><a name="en-us_topic_0283137115_p4677181274116"></a>byteasend</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p14677131294115"><a name="en-us_topic_0283137115_p14677131294115"></a><a name="en-us_topic_0283137115_p14677131294115"></a>cash_cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p15677912104119"><a name="en-us_topic_0283137115_p15677912104119"></a><a name="en-us_topic_0283137115_p15677912104119"></a>cash_div_cash</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p86771612144119"><a name="en-us_topic_0283137115_p86771612144119"></a><a name="en-us_topic_0283137115_p86771612144119"></a>cash_div_flt4</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1677141218415"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p86771312174119"><a name="en-us_topic_0283137115_p86771312174119"></a><a name="en-us_topic_0283137115_p86771312174119"></a>cash_div_flt8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p18677181212415"><a name="en-us_topic_0283137115_p18677181212415"></a><a name="en-us_topic_0283137115_p18677181212415"></a>cash_div_int2</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p15677191264113"><a name="en-us_topic_0283137115_p15677191264113"></a><a name="en-us_topic_0283137115_p15677191264113"></a>cash_div_int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p867817125415"><a name="en-us_topic_0283137115_p867817125415"></a><a name="en-us_topic_0283137115_p867817125415"></a>cash_div_int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p19678111244117"><a name="en-us_topic_0283137115_p19678111244117"></a><a name="en-us_topic_0283137115_p19678111244117"></a>cash_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1867801264115"><a name="en-us_topic_0283137115_p1867801264115"></a><a name="en-us_topic_0283137115_p1867801264115"></a>cash_ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p067821294120"><a name="en-us_topic_0283137115_p067821294120"></a><a name="en-us_topic_0283137115_p067821294120"></a>cash_gt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row567818128416"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p2067851215411"><a name="en-us_topic_0283137115_p2067851215411"></a><a name="en-us_topic_0283137115_p2067851215411"></a>cash_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p2067814129416"><a name="en-us_topic_0283137115_p2067814129416"></a><a name="en-us_topic_0283137115_p2067814129416"></a>cash_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p56781612154116"><a name="en-us_topic_0283137115_p56781612154116"></a><a name="en-us_topic_0283137115_p56781612154116"></a>cash_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1467851204110"><a name="en-us_topic_0283137115_p1467851204110"></a><a name="en-us_topic_0283137115_p1467851204110"></a>cash_mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1067891215414"><a name="en-us_topic_0283137115_p1067891215414"></a><a name="en-us_topic_0283137115_p1067891215414"></a>cash_mul_flt4</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1767881294110"><a name="en-us_topic_0283137115_p1767881294110"></a><a name="en-us_topic_0283137115_p1767881294110"></a>cash_mul_flt8</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p2067811234117"><a name="en-us_topic_0283137115_p2067811234117"></a><a name="en-us_topic_0283137115_p2067811234117"></a>cash_mul_int2</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row867861264117"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p18678121214418"><a name="en-us_topic_0283137115_p18678121214418"></a><a name="en-us_topic_0283137115_p18678121214418"></a>cash_mul_int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p146789120416"><a name="en-us_topic_0283137115_p146789120416"></a><a name="en-us_topic_0283137115_p146789120416"></a>cash_mul_int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p867831215419"><a name="en-us_topic_0283137115_p867831215419"></a><a name="en-us_topic_0283137115_p867831215419"></a>cash_ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p16678191244113"><a name="en-us_topic_0283137115_p16678191244113"></a><a name="en-us_topic_0283137115_p16678191244113"></a>cash_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p2067831212412"><a name="en-us_topic_0283137115_p2067831212412"></a><a name="en-us_topic_0283137115_p2067831212412"></a>cash_pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p967811254119"><a name="en-us_topic_0283137115_p967811254119"></a><a name="en-us_topic_0283137115_p967811254119"></a>cash_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1067815129415"><a name="en-us_topic_0283137115_p1067815129415"></a><a name="en-us_topic_0283137115_p1067815129415"></a>cash_send</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row967851212419"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p56787128419"><a name="en-us_topic_0283137115_p56787128419"></a><a name="en-us_topic_0283137115_p56787128419"></a>cashlarger</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p19678412104118"><a name="en-us_topic_0283137115_p19678412104118"></a><a name="en-us_topic_0283137115_p19678412104118"></a>cashsmaller</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p167861220413"><a name="en-us_topic_0283137115_p167861220413"></a><a name="en-us_topic_0283137115_p167861220413"></a>cbrt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1867801294117"><a name="en-us_topic_0283137115_p1867801294117"></a><a name="en-us_topic_0283137115_p1867801294117"></a>ceil</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p106791512184116"><a name="en-us_topic_0283137115_p106791512184116"></a><a name="en-us_topic_0283137115_p106791512184116"></a>ceiling</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p167991211416"><a name="en-us_topic_0283137115_p167991211416"></a><a name="en-us_topic_0283137115_p167991211416"></a>center</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p206798124417"><a name="en-us_topic_0283137115_p206798124417"></a><a name="en-us_topic_0283137115_p206798124417"></a>char</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1267921224112"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p8679101234112"><a name="en-us_topic_0283137115_p8679101234112"></a><a name="en-us_topic_0283137115_p8679101234112"></a>char_length</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p16679131264110"><a name="en-us_topic_0283137115_p16679131264110"></a><a name="en-us_topic_0283137115_p16679131264110"></a>character_length</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1667951264120"><a name="en-us_topic_0283137115_p1667951264120"></a><a name="en-us_topic_0283137115_p1667951264120"></a>chareq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p5679171216419"><a name="en-us_topic_0283137115_p5679171216419"></a><a name="en-us_topic_0283137115_p5679171216419"></a>charge</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p14679212134118"><a name="en-us_topic_0283137115_p14679212134118"></a><a name="en-us_topic_0283137115_p14679212134118"></a>chargt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p56799129416"><a name="en-us_topic_0283137115_p56799129416"></a><a name="en-us_topic_0283137115_p56799129416"></a>charin</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p66795129416"><a name="en-us_topic_0283137115_p66795129416"></a><a name="en-us_topic_0283137115_p66795129416"></a>charle</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row86794129416"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p19679181244110"><a name="en-us_topic_0283137115_p19679181244110"></a><a name="en-us_topic_0283137115_p19679181244110"></a>charlt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p567931219413"><a name="en-us_topic_0283137115_p567931219413"></a><a name="en-us_topic_0283137115_p567931219413"></a>charne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p16679121212415"><a name="en-us_topic_0283137115_p16679121212415"></a><a name="en-us_topic_0283137115_p16679121212415"></a>charout</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p76792122412"><a name="en-us_topic_0283137115_p76792122412"></a><a name="en-us_topic_0283137115_p76792122412"></a>charrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p267981219413"><a name="en-us_topic_0283137115_p267981219413"></a><a name="en-us_topic_0283137115_p267981219413"></a>charsend</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p36791212184114"><a name="en-us_topic_0283137115_p36791212184114"></a><a name="en-us_topic_0283137115_p36791212184114"></a>chr</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p2679812164112"><a name="en-us_topic_0283137115_p2679812164112"></a><a name="en-us_topic_0283137115_p2679812164112"></a>cideq</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row467916124411"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1167991224116"><a name="en-us_topic_0283137115_p1167991224116"></a><a name="en-us_topic_0283137115_p1167991224116"></a>cidin</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p3679212184119"><a name="en-us_topic_0283137115_p3679212184119"></a><a name="en-us_topic_0283137115_p3679212184119"></a>cidout</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p36796123414"><a name="en-us_topic_0283137115_p36796123414"></a><a name="en-us_topic_0283137115_p36796123414"></a>cidr</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p9679712174119"><a name="en-us_topic_0283137115_p9679712174119"></a><a name="en-us_topic_0283137115_p9679712174119"></a>cidr_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p26791812154120"><a name="en-us_topic_0283137115_p26791812154120"></a><a name="en-us_topic_0283137115_p26791812154120"></a>cidr_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1167931214412"><a name="en-us_topic_0283137115_p1167931214412"></a><a name="en-us_topic_0283137115_p1167931214412"></a>cidr_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p368071220418"><a name="en-us_topic_0283137115_p368071220418"></a><a name="en-us_topic_0283137115_p368071220418"></a>cidr_send</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row968031216418"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1468041204119"><a name="en-us_topic_0283137115_p1468041204119"></a><a name="en-us_topic_0283137115_p1468041204119"></a>cidrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p16809128410"><a name="en-us_topic_0283137115_p16809128410"></a><a name="en-us_topic_0283137115_p16809128410"></a>cidsend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1468017122413"><a name="en-us_topic_0283137115_p1468017122413"></a><a name="en-us_topic_0283137115_p1468017122413"></a>circle</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p168019121419"><a name="en-us_topic_0283137115_p168019121419"></a><a name="en-us_topic_0283137115_p168019121419"></a>circle_above</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p3680612174117"><a name="en-us_topic_0283137115_p3680612174117"></a><a name="en-us_topic_0283137115_p3680612174117"></a>circle_add_pt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1968010121418"><a name="en-us_topic_0283137115_p1968010121418"></a><a name="en-us_topic_0283137115_p1968010121418"></a>circle_below</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p116801412144111"><a name="en-us_topic_0283137115_p116801412144111"></a><a name="en-us_topic_0283137115_p116801412144111"></a>circle_center</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row18680161254114"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p768071216418"><a name="en-us_topic_0283137115_p768071216418"></a><a name="en-us_topic_0283137115_p768071216418"></a>circle_contain</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1468010127418"><a name="en-us_topic_0283137115_p1468010127418"></a><a name="en-us_topic_0283137115_p1468010127418"></a>circle_contain_pt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p4680151211413"><a name="en-us_topic_0283137115_p4680151211413"></a><a name="en-us_topic_0283137115_p4680151211413"></a>circle_contained</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1768031214415"><a name="en-us_topic_0283137115_p1768031214415"></a><a name="en-us_topic_0283137115_p1768031214415"></a>circle_distance</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p96801612104117"><a name="en-us_topic_0283137115_p96801612104117"></a><a name="en-us_topic_0283137115_p96801612104117"></a>circle_div_pt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1068011127417"><a name="en-us_topic_0283137115_p1068011127417"></a><a name="en-us_topic_0283137115_p1068011127417"></a>circle_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p10680812124119"><a name="en-us_topic_0283137115_p10680812124119"></a><a name="en-us_topic_0283137115_p10680812124119"></a>circle_ge</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row86805128411"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p0680212144110"><a name="en-us_topic_0283137115_p0680212144110"></a><a name="en-us_topic_0283137115_p0680212144110"></a>circle_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p76803126417"><a name="en-us_topic_0283137115_p76803126417"></a><a name="en-us_topic_0283137115_p76803126417"></a>circle_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p14680151244116"><a name="en-us_topic_0283137115_p14680151244116"></a><a name="en-us_topic_0283137115_p14680151244116"></a>circle_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p16803127419"><a name="en-us_topic_0283137115_p16803127419"></a><a name="en-us_topic_0283137115_p16803127419"></a>circle_left</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p13680141264119"><a name="en-us_topic_0283137115_p13680141264119"></a><a name="en-us_topic_0283137115_p13680141264119"></a>circle_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1668018125416"><a name="en-us_topic_0283137115_p1668018125416"></a><a name="en-us_topic_0283137115_p1668018125416"></a>circle_mul_pt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p146801412104113"><a name="en-us_topic_0283137115_p146801412104113"></a><a name="en-us_topic_0283137115_p146801412104113"></a>circle_ne</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row17680141214416"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p3680121216413"><a name="en-us_topic_0283137115_p3680121216413"></a><a name="en-us_topic_0283137115_p3680121216413"></a>circle_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1968121212413"><a name="en-us_topic_0283137115_p1968121212413"></a><a name="en-us_topic_0283137115_p1968121212413"></a>circle_overabove</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p176811612174111"><a name="en-us_topic_0283137115_p176811612174111"></a><a name="en-us_topic_0283137115_p176811612174111"></a>circle_overbelow</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p4681612124114"><a name="en-us_topic_0283137115_p4681612124114"></a><a name="en-us_topic_0283137115_p4681612124114"></a>circle_overlap</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p0681171212410"><a name="en-us_topic_0283137115_p0681171212410"></a><a name="en-us_topic_0283137115_p0681171212410"></a>circle_overleft</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p18681141224118"><a name="en-us_topic_0283137115_p18681141224118"></a><a name="en-us_topic_0283137115_p18681141224118"></a>circle_overright</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p3681212134120"><a name="en-us_topic_0283137115_p3681212134120"></a><a name="en-us_topic_0283137115_p3681212134120"></a>circle_recv</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row668110129416"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1368161294118"><a name="en-us_topic_0283137115_p1368161294118"></a><a name="en-us_topic_0283137115_p1368161294118"></a>circle_right</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p66811912124110"><a name="en-us_topic_0283137115_p66811912124110"></a><a name="en-us_topic_0283137115_p66811912124110"></a>circle_same</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p106815121418"><a name="en-us_topic_0283137115_p106815121418"></a><a name="en-us_topic_0283137115_p106815121418"></a>circle_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1268171214419"><a name="en-us_topic_0283137115_p1268171214419"></a><a name="en-us_topic_0283137115_p1268171214419"></a>circle_sub_pt</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p17681512154117"><a name="en-us_topic_0283137115_p17681512154117"></a><a name="en-us_topic_0283137115_p17681512154117"></a>clock_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1468113123415"><a name="en-us_topic_0283137115_p1468113123415"></a><a name="en-us_topic_0283137115_p1468113123415"></a>close_lb</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p168110128418"><a name="en-us_topic_0283137115_p168110128418"></a><a name="en-us_topic_0283137115_p168110128418"></a>close_ls</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row15681912134120"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p166811412194114"><a name="en-us_topic_0283137115_p166811412194114"></a><a name="en-us_topic_0283137115_p166811412194114"></a>close_lseg</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p17681512104110"><a name="en-us_topic_0283137115_p17681512104110"></a><a name="en-us_topic_0283137115_p17681512104110"></a>close_pb</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p11681141274110"><a name="en-us_topic_0283137115_p11681141274110"></a><a name="en-us_topic_0283137115_p11681141274110"></a>close_pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p7681112184116"><a name="en-us_topic_0283137115_p7681112184116"></a><a name="en-us_topic_0283137115_p7681112184116"></a>close_ps</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p168131216411"><a name="en-us_topic_0283137115_p168131216411"></a><a name="en-us_topic_0283137115_p168131216411"></a>close_sb</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p11681111224114"><a name="en-us_topic_0283137115_p11681111224114"></a><a name="en-us_topic_0283137115_p11681111224114"></a>close_sl</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p14681712114117"><a name="en-us_topic_0283137115_p14681712114117"></a><a name="en-us_topic_0283137115_p14681712114117"></a>col_description</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1468115122416"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p268181218418"><a name="en-us_topic_0283137115_p268181218418"></a><a name="en-us_topic_0283137115_p268181218418"></a>concat</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p116818122412"><a name="en-us_topic_0283137115_p116818122412"></a><a name="en-us_topic_0283137115_p116818122412"></a>concat_ws</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p268117127414"><a name="en-us_topic_0283137115_p268117127414"></a><a name="en-us_topic_0283137115_p268117127414"></a>contjoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p19682171217412"><a name="en-us_topic_0283137115_p19682171217412"></a><a name="en-us_topic_0283137115_p19682171217412"></a>contsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p166821212164116"><a name="en-us_topic_0283137115_p166821212164116"></a><a name="en-us_topic_0283137115_p166821212164116"></a>convert</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p6682121216416"><a name="en-us_topic_0283137115_p6682121216416"></a><a name="en-us_topic_0283137115_p6682121216416"></a>convert_from</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p19682912134113"><a name="en-us_topic_0283137115_p19682912134113"></a><a name="en-us_topic_0283137115_p19682912134113"></a>convert_to</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row8682181211416"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p268261284119"><a name="en-us_topic_0283137115_p268261284119"></a><a name="en-us_topic_0283137115_p268261284119"></a>corr</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1868215123417"><a name="en-us_topic_0283137115_p1868215123417"></a><a name="en-us_topic_0283137115_p1868215123417"></a>cos</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p16682161220418"><a name="en-us_topic_0283137115_p16682161220418"></a><a name="en-us_topic_0283137115_p16682161220418"></a>cot</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p96826128411"><a name="en-us_topic_0283137115_p96826128411"></a><a name="en-us_topic_0283137115_p96826128411"></a>count</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1168251218417"><a name="en-us_topic_0283137115_p1168251218417"></a><a name="en-us_topic_0283137115_p1168251218417"></a>covar_pop</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1568211215410"><a name="en-us_topic_0283137115_p1568211215410"></a><a name="en-us_topic_0283137115_p1568211215410"></a>covar_samp</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p17682121212413"><a name="en-us_topic_0283137115_p17682121212413"></a><a name="en-us_topic_0283137115_p17682121212413"></a>cstring_in</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row15682512144111"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p18682131284114"><a name="en-us_topic_0283137115_p18682131284114"></a><a name="en-us_topic_0283137115_p18682131284114"></a>cstring_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p76823123411"><a name="en-us_topic_0283137115_p76823123411"></a><a name="en-us_topic_0283137115_p76823123411"></a>cstring_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p12682612174113"><a name="en-us_topic_0283137115_p12682612174113"></a><a name="en-us_topic_0283137115_p12682612174113"></a>cstring_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p166826125419"><a name="en-us_topic_0283137115_p166826125419"></a><a name="en-us_topic_0283137115_p166826125419"></a>cume_dist</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1468212126418"><a name="en-us_topic_0283137115_p1468212126418"></a><a name="en-us_topic_0283137115_p1468212126418"></a>current_database</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p46821112154114"><a name="en-us_topic_0283137115_p46821112154114"></a><a name="en-us_topic_0283137115_p46821112154114"></a>current_query</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p11682141244115"><a name="en-us_topic_0283137115_p11682141244115"></a><a name="en-us_topic_0283137115_p11682141244115"></a>current_schema</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row3682212164112"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p17682512174111"><a name="en-us_topic_0283137115_p17682512174111"></a><a name="en-us_topic_0283137115_p17682512174111"></a>xpath_exists</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p19682512184116"><a name="en-us_topic_0283137115_p19682512184116"></a><a name="en-us_topic_0283137115_p19682512184116"></a>current_setting</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p10682512194111"><a name="en-us_topic_0283137115_p10682512194111"></a><a name="en-us_topic_0283137115_p10682512194111"></a>current_user</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p0682111244111"><a name="en-us_topic_0283137115_p0682111244111"></a><a name="en-us_topic_0283137115_p0682111244111"></a>currtid</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p16682812144111"><a name="en-us_topic_0283137115_p16682812144111"></a><a name="en-us_topic_0283137115_p16682812144111"></a>currtid2</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p36837128416"><a name="en-us_topic_0283137115_p36837128416"></a><a name="en-us_topic_0283137115_p36837128416"></a>currval</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1168321234110"><a name="en-us_topic_0283137115_p1168321234110"></a><a name="en-us_topic_0283137115_p1168321234110"></a>cursor_to_xml</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row568341212415"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p18683131219411"><a name="en-us_topic_0283137115_p18683131219411"></a><a name="en-us_topic_0283137115_p18683131219411"></a>cursor_to_xmlschema</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1683101214118"><a name="en-us_topic_0283137115_p1683101214118"></a><a name="en-us_topic_0283137115_p1683101214118"></a>database_to_xml</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p9683161294111"><a name="en-us_topic_0283137115_p9683161294111"></a><a name="en-us_topic_0283137115_p9683161294111"></a>database_to_xml_and_xmlschema</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p3683151215411"><a name="en-us_topic_0283137115_p3683151215411"></a><a name="en-us_topic_0283137115_p3683151215411"></a>database_to_xmlschema</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p15683101216419"><a name="en-us_topic_0283137115_p15683101216419"></a><a name="en-us_topic_0283137115_p15683101216419"></a>date</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p13683161216419"><a name="en-us_topic_0283137115_p13683161216419"></a><a name="en-us_topic_0283137115_p13683161216419"></a>date_cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1368314129418"><a name="en-us_topic_0283137115_p1368314129418"></a><a name="en-us_topic_0283137115_p1368314129418"></a>date_cmp_timestamp</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row10683141224115"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p6683141224112"><a name="en-us_topic_0283137115_p6683141224112"></a><a name="en-us_topic_0283137115_p6683141224112"></a>date_cmp_timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p968318120419"><a name="en-us_topic_0283137115_p968318120419"></a><a name="en-us_topic_0283137115_p968318120419"></a>date_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1268301214118"><a name="en-us_topic_0283137115_p1268301214118"></a><a name="en-us_topic_0283137115_p1268301214118"></a>date_eq_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p12683181219415"><a name="en-us_topic_0283137115_p12683181219415"></a><a name="en-us_topic_0283137115_p12683181219415"></a>date_eq_timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p15683181294116"><a name="en-us_topic_0283137115_p15683181294116"></a><a name="en-us_topic_0283137115_p15683181294116"></a>date_ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p4683161218417"><a name="en-us_topic_0283137115_p4683161218417"></a><a name="en-us_topic_0283137115_p4683161218417"></a>date_ge_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p3683201215418"><a name="en-us_topic_0283137115_p3683201215418"></a><a name="en-us_topic_0283137115_p3683201215418"></a>date_ge_timestamptz</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row46834127416"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p17683112124118"><a name="en-us_topic_0283137115_p17683112124118"></a><a name="en-us_topic_0283137115_p17683112124118"></a>date_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p968331210412"><a name="en-us_topic_0283137115_p968331210412"></a><a name="en-us_topic_0283137115_p968331210412"></a>date_gt_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1268381210416"><a name="en-us_topic_0283137115_p1268381210416"></a><a name="en-us_topic_0283137115_p1268381210416"></a>date_gt_timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p6683141219415"><a name="en-us_topic_0283137115_p6683141219415"></a><a name="en-us_topic_0283137115_p6683141219415"></a>date_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p968319128412"><a name="en-us_topic_0283137115_p968319128412"></a><a name="en-us_topic_0283137115_p968319128412"></a>date_larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p18683141254112"><a name="en-us_topic_0283137115_p18683141254112"></a><a name="en-us_topic_0283137115_p18683141254112"></a>date_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1868361264119"><a name="en-us_topic_0283137115_p1868361264119"></a><a name="en-us_topic_0283137115_p1868361264119"></a>date_le_timestamp</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row3683151284112"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p368451215419"><a name="en-us_topic_0283137115_p368451215419"></a><a name="en-us_topic_0283137115_p368451215419"></a>date_le_timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p6684131215412"><a name="en-us_topic_0283137115_p6684131215412"></a><a name="en-us_topic_0283137115_p6684131215412"></a>date_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1468481234120"><a name="en-us_topic_0283137115_p1468481234120"></a><a name="en-us_topic_0283137115_p1468481234120"></a>date_lt_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1168421234115"><a name="en-us_topic_0283137115_p1168421234115"></a><a name="en-us_topic_0283137115_p1168421234115"></a>date_lt_timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p4684112104117"><a name="en-us_topic_0283137115_p4684112104117"></a><a name="en-us_topic_0283137115_p4684112104117"></a>date_mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p186849129415"><a name="en-us_topic_0283137115_p186849129415"></a><a name="en-us_topic_0283137115_p186849129415"></a>date_mi_interval</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p3684161274115"><a name="en-us_topic_0283137115_p3684161274115"></a><a name="en-us_topic_0283137115_p3684161274115"></a>date_mii</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row17684161244112"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p3684181210414"><a name="en-us_topic_0283137115_p3684181210414"></a><a name="en-us_topic_0283137115_p3684181210414"></a>date_ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p168421211416"><a name="en-us_topic_0283137115_p168421211416"></a><a name="en-us_topic_0283137115_p168421211416"></a>date_ne_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p106846129415"><a name="en-us_topic_0283137115_p106846129415"></a><a name="en-us_topic_0283137115_p106846129415"></a>date_ne_timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1684111264117"><a name="en-us_topic_0283137115_p1684111264117"></a><a name="en-us_topic_0283137115_p1684111264117"></a>date_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p18684112144113"><a name="en-us_topic_0283137115_p18684112144113"></a><a name="en-us_topic_0283137115_p18684112144113"></a>date_pl_interval</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p36844122417"><a name="en-us_topic_0283137115_p36844122417"></a><a name="en-us_topic_0283137115_p36844122417"></a>date_pli</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p568461274111"><a name="en-us_topic_0283137115_p568461274111"></a><a name="en-us_topic_0283137115_p568461274111"></a>date_recv</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1684201215411"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p11684812154116"><a name="en-us_topic_0283137115_p11684812154116"></a><a name="en-us_topic_0283137115_p11684812154116"></a>date_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p968410120413"><a name="en-us_topic_0283137115_p968410120413"></a><a name="en-us_topic_0283137115_p968410120413"></a>date_smaller</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p16684181204118"><a name="en-us_topic_0283137115_p16684181204118"></a><a name="en-us_topic_0283137115_p16684181204118"></a>date_sortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1768411210416"><a name="en-us_topic_0283137115_p1768411210416"></a><a name="en-us_topic_0283137115_p1768411210416"></a>daterange_canonical</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1168491213412"><a name="en-us_topic_0283137115_p1168491213412"></a><a name="en-us_topic_0283137115_p1168491213412"></a>daterange_subdiff</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p116847126413"><a name="en-us_topic_0283137115_p116847126413"></a><a name="en-us_topic_0283137115_p116847126413"></a>datetime_pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p11684151204117"><a name="en-us_topic_0283137115_p11684151204117"></a><a name="en-us_topic_0283137115_p11684151204117"></a>datetimetz_pl</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row17684712174112"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p568461274113"><a name="en-us_topic_0283137115_p568461274113"></a><a name="en-us_topic_0283137115_p568461274113"></a>dcbrt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p15684171213411"><a name="en-us_topic_0283137115_p15684171213411"></a><a name="en-us_topic_0283137115_p15684171213411"></a>decode</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p268518121411"><a name="en-us_topic_0283137115_p268518121411"></a><a name="en-us_topic_0283137115_p268518121411"></a>defined</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p16685912204111"><a name="en-us_topic_0283137115_p16685912204111"></a><a name="en-us_topic_0283137115_p16685912204111"></a>degrees</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p6685712154118"><a name="en-us_topic_0283137115_p6685712154118"></a><a name="en-us_topic_0283137115_p6685712154118"></a>delete</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p46851812164110"><a name="en-us_topic_0283137115_p46851812164110"></a><a name="en-us_topic_0283137115_p46851812164110"></a>dense_rank</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1685512184112"><a name="en-us_topic_0283137115_p1685512184112"></a><a name="en-us_topic_0283137115_p1685512184112"></a>dexp</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row10685131216417"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p176851612104113"><a name="en-us_topic_0283137115_p176851612104113"></a><a name="en-us_topic_0283137115_p176851612104113"></a>diagonal</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p868515127414"><a name="en-us_topic_0283137115_p868515127414"></a><a name="en-us_topic_0283137115_p868515127414"></a>diameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p176851412164117"><a name="en-us_topic_0283137115_p176851412164117"></a><a name="en-us_topic_0283137115_p176851412164117"></a>dispell_init</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1068531210418"><a name="en-us_topic_0283137115_p1068531210418"></a><a name="en-us_topic_0283137115_p1068531210418"></a>dispell_lexize</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p868519127419"><a name="en-us_topic_0283137115_p868519127419"></a><a name="en-us_topic_0283137115_p868519127419"></a>dist_cpoly</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p96851812144118"><a name="en-us_topic_0283137115_p96851812144118"></a><a name="en-us_topic_0283137115_p96851812144118"></a>dist_lb</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p568519126414"><a name="en-us_topic_0283137115_p568519126414"></a><a name="en-us_topic_0283137115_p568519126414"></a>dist_pb</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row368551214117"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p156855125416"><a name="en-us_topic_0283137115_p156855125416"></a><a name="en-us_topic_0283137115_p156855125416"></a>dist_pc</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p186851112144116"><a name="en-us_topic_0283137115_p186851112144116"></a><a name="en-us_topic_0283137115_p186851112144116"></a>dist_pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p17685181214412"><a name="en-us_topic_0283137115_p17685181214412"></a><a name="en-us_topic_0283137115_p17685181214412"></a>dist_ppath</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p10685171294113"><a name="en-us_topic_0283137115_p10685171294113"></a><a name="en-us_topic_0283137115_p10685171294113"></a>dist_ps</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p146851712204119"><a name="en-us_topic_0283137115_p146851712204119"></a><a name="en-us_topic_0283137115_p146851712204119"></a>dist_sb</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p768551219418"><a name="en-us_topic_0283137115_p768551219418"></a><a name="en-us_topic_0283137115_p768551219418"></a>dist_sl</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p136851012124115"><a name="en-us_topic_0283137115_p136851012124115"></a><a name="en-us_topic_0283137115_p136851012124115"></a>div</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1968517128416"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p2685171264115"><a name="en-us_topic_0283137115_p2685171264115"></a><a name="en-us_topic_0283137115_p2685171264115"></a>dlog1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p7685191218414"><a name="en-us_topic_0283137115_p7685191218414"></a><a name="en-us_topic_0283137115_p7685191218414"></a>dlog10</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1868591217415"><a name="en-us_topic_0283137115_p1868591217415"></a><a name="en-us_topic_0283137115_p1868591217415"></a>domain_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1068511284116"><a name="en-us_topic_0283137115_p1068511284116"></a><a name="en-us_topic_0283137115_p1068511284116"></a>domain_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p46862012154111"><a name="en-us_topic_0283137115_p46862012154111"></a><a name="en-us_topic_0283137115_p46862012154111"></a>dpow</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p468631217417"><a name="en-us_topic_0283137115_p468631217417"></a><a name="en-us_topic_0283137115_p468631217417"></a>dround</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p76863128418"><a name="en-us_topic_0283137115_p76863128418"></a><a name="en-us_topic_0283137115_p76863128418"></a>dsimple_init</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row568619124410"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p14686191213418"><a name="en-us_topic_0283137115_p14686191213418"></a><a name="en-us_topic_0283137115_p14686191213418"></a>dsimple_lexize</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1868616127416"><a name="en-us_topic_0283137115_p1868616127416"></a><a name="en-us_topic_0283137115_p1868616127416"></a>dsnowball_init</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1668621234112"><a name="en-us_topic_0283137115_p1668621234112"></a><a name="en-us_topic_0283137115_p1668621234112"></a>dsnowball_lexize</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p16686151204118"><a name="en-us_topic_0283137115_p16686151204118"></a><a name="en-us_topic_0283137115_p16686151204118"></a>dsqrt</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p14686101254113"><a name="en-us_topic_0283137115_p14686101254113"></a><a name="en-us_topic_0283137115_p14686101254113"></a>dsynonym_init</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1168661218414"><a name="en-us_topic_0283137115_p1168661218414"></a><a name="en-us_topic_0283137115_p1168661218414"></a>dsynonym_lexize</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p7686312154110"><a name="en-us_topic_0283137115_p7686312154110"></a><a name="en-us_topic_0283137115_p7686312154110"></a>dtrunc</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row46861412104115"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p186863128415"><a name="en-us_topic_0283137115_p186863128415"></a><a name="en-us_topic_0283137115_p186863128415"></a>each</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1868610129418"><a name="en-us_topic_0283137115_p1868610129418"></a><a name="en-us_topic_0283137115_p1868610129418"></a>enum_ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p176861112204110"><a name="en-us_topic_0283137115_p176861112204110"></a><a name="en-us_topic_0283137115_p176861112204110"></a>enum_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1068651219417"><a name="en-us_topic_0283137115_p1068651219417"></a><a name="en-us_topic_0283137115_p1068651219417"></a>enum_range</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p10686312114119"><a name="en-us_topic_0283137115_p10686312114119"></a><a name="en-us_topic_0283137115_p10686312114119"></a>enum_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p168612124417"><a name="en-us_topic_0283137115_p168612124417"></a><a name="en-us_topic_0283137115_p168612124417"></a>enum_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p206862012174110"><a name="en-us_topic_0283137115_p206862012174110"></a><a name="en-us_topic_0283137115_p206862012174110"></a>enum_smaller</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row56865126416"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p768612124410"><a name="en-us_topic_0283137115_p768612124410"></a><a name="en-us_topic_0283137115_p768612124410"></a>eqjoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p12686151234113"><a name="en-us_topic_0283137115_p12686151234113"></a><a name="en-us_topic_0283137115_p12686151234113"></a>eqsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p0686612174115"><a name="en-us_topic_0283137115_p0686612174115"></a><a name="en-us_topic_0283137115_p0686612174115"></a>euc_cn_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1268601294116"><a name="en-us_topic_0283137115_p1268601294116"></a><a name="en-us_topic_0283137115_p1268601294116"></a>euc_cn_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p166861812114115"><a name="en-us_topic_0283137115_p166861812114115"></a><a name="en-us_topic_0283137115_p166861812114115"></a>euc_jis_2004_to_shift_jis_2004</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p176865121418"><a name="en-us_topic_0283137115_p176865121418"></a><a name="en-us_topic_0283137115_p176865121418"></a>euc_jis_2004_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1068718129419"><a name="en-us_topic_0283137115_p1068718129419"></a><a name="en-us_topic_0283137115_p1068718129419"></a>euc_jp_to_mic</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row8687191215416"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p14687141224113"><a name="en-us_topic_0283137115_p14687141224113"></a><a name="en-us_topic_0283137115_p14687141224113"></a>euc_jp_to_sjis</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p17687412114119"><a name="en-us_topic_0283137115_p17687412114119"></a><a name="en-us_topic_0283137115_p17687412114119"></a>euc_jp_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p3687181218418"><a name="en-us_topic_0283137115_p3687181218418"></a><a name="en-us_topic_0283137115_p3687181218418"></a>euc_kr_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1968741213416"><a name="en-us_topic_0283137115_p1968741213416"></a><a name="en-us_topic_0283137115_p1968741213416"></a>euc_kr_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p9687612174119"><a name="en-us_topic_0283137115_p9687612174119"></a><a name="en-us_topic_0283137115_p9687612174119"></a>euc_tw_to_big5</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p968781274110"><a name="en-us_topic_0283137115_p968781274110"></a><a name="en-us_topic_0283137115_p968781274110"></a>euc_tw_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1468716127413"><a name="en-us_topic_0283137115_p1468716127413"></a><a name="en-us_topic_0283137115_p1468716127413"></a>euc_tw_to_utf8</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row126876128417"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p10687212164112"><a name="en-us_topic_0283137115_p10687212164112"></a><a name="en-us_topic_0283137115_p10687212164112"></a>every</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p3687151294114"><a name="en-us_topic_0283137115_p3687151294114"></a><a name="en-us_topic_0283137115_p3687151294114"></a>exist</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p10687512194112"><a name="en-us_topic_0283137115_p10687512194112"></a><a name="en-us_topic_0283137115_p10687512194112"></a>exists_all</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1468761211417"><a name="en-us_topic_0283137115_p1468761211417"></a><a name="en-us_topic_0283137115_p1468761211417"></a>exists_any</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1687712134115"><a name="en-us_topic_0283137115_p1687712134115"></a><a name="en-us_topic_0283137115_p1687712134115"></a>exp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p5687111294119"><a name="en-us_topic_0283137115_p5687111294119"></a><a name="en-us_topic_0283137115_p5687111294119"></a>factorial</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p10687101214419"><a name="en-us_topic_0283137115_p10687101214419"></a><a name="en-us_topic_0283137115_p10687101214419"></a>family</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row146871512154115"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p2687171217419"><a name="en-us_topic_0283137115_p2687171217419"></a><a name="en-us_topic_0283137115_p2687171217419"></a>fdw_handler_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p15687121254110"><a name="en-us_topic_0283137115_p15687121254110"></a><a name="en-us_topic_0283137115_p15687121254110"></a>fdw_handler_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1768771214419"><a name="en-us_topic_0283137115_p1768771214419"></a><a name="en-us_topic_0283137115_p1768771214419"></a>fetchval</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p6687181224115"><a name="en-us_topic_0283137115_p6687181224115"></a><a name="en-us_topic_0283137115_p6687181224115"></a>first_value</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p186871612144118"><a name="en-us_topic_0283137115_p186871612144118"></a><a name="en-us_topic_0283137115_p186871612144118"></a>float4</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p5687181219410"><a name="en-us_topic_0283137115_p5687181219410"></a><a name="en-us_topic_0283137115_p5687181219410"></a>float4_accum</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p176879127411"><a name="en-us_topic_0283137115_p176879127411"></a><a name="en-us_topic_0283137115_p176879127411"></a>float48div</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row06874122417"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p166871212154115"><a name="en-us_topic_0283137115_p166871212154115"></a><a name="en-us_topic_0283137115_p166871212154115"></a>float48eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1668871234113"><a name="en-us_topic_0283137115_p1668871234113"></a><a name="en-us_topic_0283137115_p1668871234113"></a>float48ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p106881512184119"><a name="en-us_topic_0283137115_p106881512184119"></a><a name="en-us_topic_0283137115_p106881512184119"></a>float48gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p168813126416"><a name="en-us_topic_0283137115_p168813126416"></a><a name="en-us_topic_0283137115_p168813126416"></a>float48le</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p136881912124110"><a name="en-us_topic_0283137115_p136881912124110"></a><a name="en-us_topic_0283137115_p136881912124110"></a>float48lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p968811234110"><a name="en-us_topic_0283137115_p968811234110"></a><a name="en-us_topic_0283137115_p968811234110"></a>float48mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1268821212418"><a name="en-us_topic_0283137115_p1268821212418"></a><a name="en-us_topic_0283137115_p1268821212418"></a>float48mul</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row166887123411"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p13688512194119"><a name="en-us_topic_0283137115_p13688512194119"></a><a name="en-us_topic_0283137115_p13688512194119"></a>float48ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p136883129416"><a name="en-us_topic_0283137115_p136883129416"></a><a name="en-us_topic_0283137115_p136883129416"></a>float48pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p20688181219412"><a name="en-us_topic_0283137115_p20688181219412"></a><a name="en-us_topic_0283137115_p20688181219412"></a>float4abs</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p11688101264115"><a name="en-us_topic_0283137115_p11688101264115"></a><a name="en-us_topic_0283137115_p11688101264115"></a>float4div</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p2688111212417"><a name="en-us_topic_0283137115_p2688111212417"></a><a name="en-us_topic_0283137115_p2688111212417"></a>float4eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p96881512104113"><a name="en-us_topic_0283137115_p96881512104113"></a><a name="en-us_topic_0283137115_p96881512104113"></a>float4ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p568814129415"><a name="en-us_topic_0283137115_p568814129415"></a><a name="en-us_topic_0283137115_p568814129415"></a>float4gt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row3688101244120"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p86883129411"><a name="en-us_topic_0283137115_p86883129411"></a><a name="en-us_topic_0283137115_p86883129411"></a>float4in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p10688161204117"><a name="en-us_topic_0283137115_p10688161204117"></a><a name="en-us_topic_0283137115_p10688161204117"></a>float4larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p5688161274115"><a name="en-us_topic_0283137115_p5688161274115"></a><a name="en-us_topic_0283137115_p5688161274115"></a>float4le</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p868815121417"><a name="en-us_topic_0283137115_p868815121417"></a><a name="en-us_topic_0283137115_p868815121417"></a>float4lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p168811129415"><a name="en-us_topic_0283137115_p168811129415"></a><a name="en-us_topic_0283137115_p168811129415"></a>float4mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p9688212204111"><a name="en-us_topic_0283137115_p9688212204111"></a><a name="en-us_topic_0283137115_p9688212204111"></a>float4mul</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p106881112144119"><a name="en-us_topic_0283137115_p106881112144119"></a><a name="en-us_topic_0283137115_p106881112144119"></a>float4ne</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1568831214414"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p6688151211418"><a name="en-us_topic_0283137115_p6688151211418"></a><a name="en-us_topic_0283137115_p6688151211418"></a>float4out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p6688101204113"><a name="en-us_topic_0283137115_p6688101204113"></a><a name="en-us_topic_0283137115_p6688101204113"></a>float4pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p11688131234116"><a name="en-us_topic_0283137115_p11688131234116"></a><a name="en-us_topic_0283137115_p11688131234116"></a>float4recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1689712124111"><a name="en-us_topic_0283137115_p1689712124111"></a><a name="en-us_topic_0283137115_p1689712124111"></a>float4send</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p36891212124119"><a name="en-us_topic_0283137115_p36891212124119"></a><a name="en-us_topic_0283137115_p36891212124119"></a>float4smaller</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1968941294118"><a name="en-us_topic_0283137115_p1968941294118"></a><a name="en-us_topic_0283137115_p1968941294118"></a>float4um</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1168901217415"><a name="en-us_topic_0283137115_p1168901217415"></a><a name="en-us_topic_0283137115_p1168901217415"></a>float4up</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row368951274116"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p17689181219416"><a name="en-us_topic_0283137115_p17689181219416"></a><a name="en-us_topic_0283137115_p17689181219416"></a>float8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p66891512174111"><a name="en-us_topic_0283137115_p66891512174111"></a><a name="en-us_topic_0283137115_p66891512174111"></a>float8_accum</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1468919127415"><a name="en-us_topic_0283137115_p1468919127415"></a><a name="en-us_topic_0283137115_p1468919127415"></a>float8_avg</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p11689121254118"><a name="en-us_topic_0283137115_p11689121254118"></a><a name="en-us_topic_0283137115_p11689121254118"></a>float8_collect</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p106891812144111"><a name="en-us_topic_0283137115_p106891812144111"></a><a name="en-us_topic_0283137115_p106891812144111"></a>float8_corr</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p17689412194113"><a name="en-us_topic_0283137115_p17689412194113"></a><a name="en-us_topic_0283137115_p17689412194113"></a>float8_covar_pop</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p168911274113"><a name="en-us_topic_0283137115_p168911274113"></a><a name="en-us_topic_0283137115_p168911274113"></a>float8_covar_samp</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1368921211419"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p9689712124110"><a name="en-us_topic_0283137115_p9689712124110"></a><a name="en-us_topic_0283137115_p9689712124110"></a>float8_regr_accum</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p5689121204114"><a name="en-us_topic_0283137115_p5689121204114"></a><a name="en-us_topic_0283137115_p5689121204114"></a>float8_regr_avgx</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p5689131213411"><a name="en-us_topic_0283137115_p5689131213411"></a><a name="en-us_topic_0283137115_p5689131213411"></a>float8_regr_avgy</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p106895126415"><a name="en-us_topic_0283137115_p106895126415"></a><a name="en-us_topic_0283137115_p106895126415"></a>float8_regr_collect</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1168920125415"><a name="en-us_topic_0283137115_p1168920125415"></a><a name="en-us_topic_0283137115_p1168920125415"></a>float8_regr_intercept</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p468951217414"><a name="en-us_topic_0283137115_p468951217414"></a><a name="en-us_topic_0283137115_p468951217414"></a>float8_regr_r2</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p668931214112"><a name="en-us_topic_0283137115_p668931214112"></a><a name="en-us_topic_0283137115_p668931214112"></a>float8_regr_slope</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1668971220419"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p19689412124120"><a name="en-us_topic_0283137115_p19689412124120"></a><a name="en-us_topic_0283137115_p19689412124120"></a>float8_regr_sxx</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1568911204114"><a name="en-us_topic_0283137115_p1568911204114"></a><a name="en-us_topic_0283137115_p1568911204114"></a>float8_regr_sxy</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p06891312104119"><a name="en-us_topic_0283137115_p06891312104119"></a><a name="en-us_topic_0283137115_p06891312104119"></a>float8_regr_syy</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p868918124412"><a name="en-us_topic_0283137115_p868918124412"></a><a name="en-us_topic_0283137115_p868918124412"></a>float8_stddev_pop</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p9689212184110"><a name="en-us_topic_0283137115_p9689212184110"></a><a name="en-us_topic_0283137115_p9689212184110"></a>float8_stddev_samp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p56909124414"><a name="en-us_topic_0283137115_p56909124414"></a><a name="en-us_topic_0283137115_p56909124414"></a>float8_var_pop</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1069021219418"><a name="en-us_topic_0283137115_p1069021219418"></a><a name="en-us_topic_0283137115_p1069021219418"></a>float8_var_samp</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row106905128413"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p10690191217419"><a name="en-us_topic_0283137115_p10690191217419"></a><a name="en-us_topic_0283137115_p10690191217419"></a>float84div</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p14690312174116"><a name="en-us_topic_0283137115_p14690312174116"></a><a name="en-us_topic_0283137115_p14690312174116"></a>float84eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p11690161219414"><a name="en-us_topic_0283137115_p11690161219414"></a><a name="en-us_topic_0283137115_p11690161219414"></a>float84ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p18690121244113"><a name="en-us_topic_0283137115_p18690121244113"></a><a name="en-us_topic_0283137115_p18690121244113"></a>float84gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p9690151264119"><a name="en-us_topic_0283137115_p9690151264119"></a><a name="en-us_topic_0283137115_p9690151264119"></a>float84le</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p146901012124111"><a name="en-us_topic_0283137115_p146901012124111"></a><a name="en-us_topic_0283137115_p146901012124111"></a>float84lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p069061254112"><a name="en-us_topic_0283137115_p069061254112"></a><a name="en-us_topic_0283137115_p069061254112"></a>float84mi</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row2069019124415"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p669091219411"><a name="en-us_topic_0283137115_p669091219411"></a><a name="en-us_topic_0283137115_p669091219411"></a>float84mul</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p369061215415"><a name="en-us_topic_0283137115_p369061215415"></a><a name="en-us_topic_0283137115_p369061215415"></a>float84ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1169014121414"><a name="en-us_topic_0283137115_p1169014121414"></a><a name="en-us_topic_0283137115_p1169014121414"></a>float84pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p869018122417"><a name="en-us_topic_0283137115_p869018122417"></a><a name="en-us_topic_0283137115_p869018122417"></a>float8abs</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p26901412174112"><a name="en-us_topic_0283137115_p26901412174112"></a><a name="en-us_topic_0283137115_p26901412174112"></a>float8div</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p2690712144114"><a name="en-us_topic_0283137115_p2690712144114"></a><a name="en-us_topic_0283137115_p2690712144114"></a>float8eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p269001212410"><a name="en-us_topic_0283137115_p269001212410"></a><a name="en-us_topic_0283137115_p269001212410"></a>float8ge</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row46901123419"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p2690151212414"><a name="en-us_topic_0283137115_p2690151212414"></a><a name="en-us_topic_0283137115_p2690151212414"></a>float8gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1869071214111"><a name="en-us_topic_0283137115_p1869071214111"></a><a name="en-us_topic_0283137115_p1869071214111"></a>float8in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p06901412154114"><a name="en-us_topic_0283137115_p06901412154114"></a><a name="en-us_topic_0283137115_p06901412154114"></a>float8larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p16690121218415"><a name="en-us_topic_0283137115_p16690121218415"></a><a name="en-us_topic_0283137115_p16690121218415"></a>float8le</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p9690512174116"><a name="en-us_topic_0283137115_p9690512174116"></a><a name="en-us_topic_0283137115_p9690512174116"></a>float8lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p469061211412"><a name="en-us_topic_0283137115_p469061211412"></a><a name="en-us_topic_0283137115_p469061211412"></a>float8mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p3690121284112"><a name="en-us_topic_0283137115_p3690121284112"></a><a name="en-us_topic_0283137115_p3690121284112"></a>float8mul</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row13691131213411"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p16913127417"><a name="en-us_topic_0283137115_p16913127417"></a><a name="en-us_topic_0283137115_p16913127417"></a>float8ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1069116121410"><a name="en-us_topic_0283137115_p1069116121410"></a><a name="en-us_topic_0283137115_p1069116121410"></a>float8out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p2691101294117"><a name="en-us_topic_0283137115_p2691101294117"></a><a name="en-us_topic_0283137115_p2691101294117"></a>float8pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p069181224117"><a name="en-us_topic_0283137115_p069181224117"></a><a name="en-us_topic_0283137115_p069181224117"></a>float8recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p136911127419"><a name="en-us_topic_0283137115_p136911127419"></a><a name="en-us_topic_0283137115_p136911127419"></a>float8send</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1569111294117"><a name="en-us_topic_0283137115_p1569111294117"></a><a name="en-us_topic_0283137115_p1569111294117"></a>float8smaller</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1669141216412"><a name="en-us_topic_0283137115_p1669141216412"></a><a name="en-us_topic_0283137115_p1669141216412"></a>float8um</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row146912012184120"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p9691121219413"><a name="en-us_topic_0283137115_p9691121219413"></a><a name="en-us_topic_0283137115_p9691121219413"></a>float8up</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p66911212184118"><a name="en-us_topic_0283137115_p66911212184118"></a><a name="en-us_topic_0283137115_p66911212184118"></a>floor</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p15691161224114"><a name="en-us_topic_0283137115_p15691161224114"></a><a name="en-us_topic_0283137115_p15691161224114"></a>flt4_mul_cash</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p206919125419"><a name="en-us_topic_0283137115_p206919125419"></a><a name="en-us_topic_0283137115_p206919125419"></a>flt8_mul_cash</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p8691151234113"><a name="en-us_topic_0283137115_p8691151234113"></a><a name="en-us_topic_0283137115_p8691151234113"></a>fmgr_c_validator</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p26919121412"><a name="en-us_topic_0283137115_p26919121412"></a><a name="en-us_topic_0283137115_p26919121412"></a>fmgr_internal_validator</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1269131219418"><a name="en-us_topic_0283137115_p1269131219418"></a><a name="en-us_topic_0283137115_p1269131219418"></a>fmgr_sql_validator</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1769121212419"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1269141254117"><a name="en-us_topic_0283137115_p1269141254117"></a><a name="en-us_topic_0283137115_p1269141254117"></a>format</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p5691111214418"><a name="en-us_topic_0283137115_p5691111214418"></a><a name="en-us_topic_0283137115_p5691111214418"></a>format_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p86916128412"><a name="en-us_topic_0283137115_p86916128412"></a><a name="en-us_topic_0283137115_p86916128412"></a>gb18030_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p76911412184115"><a name="en-us_topic_0283137115_p76911412184115"></a><a name="en-us_topic_0283137115_p76911412184115"></a>gbk_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p19691171218414"><a name="en-us_topic_0283137115_p19691171218414"></a><a name="en-us_topic_0283137115_p19691171218414"></a>generate_series</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p16691131217414"><a name="en-us_topic_0283137115_p16691131217414"></a><a name="en-us_topic_0283137115_p16691131217414"></a>generate_subscripts</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1691151217412"><a name="en-us_topic_0283137115_p1691151217412"></a><a name="en-us_topic_0283137115_p1691151217412"></a>get_bit</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row12692191264117"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p169251274116"><a name="en-us_topic_0283137115_p169251274116"></a><a name="en-us_topic_0283137115_p169251274116"></a>get_byte</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1669281216412"><a name="en-us_topic_0283137115_p1669281216412"></a><a name="en-us_topic_0283137115_p1669281216412"></a>get_current_ts_config</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1692111274110"><a name="en-us_topic_0283137115_p1692111274110"></a><a name="en-us_topic_0283137115_p1692111274110"></a>get_global_gs_asp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p5692121224110"><a name="en-us_topic_0283137115_p5692121224110"></a><a name="en-us_topic_0283137115_p5692121224110"></a>get_large_table_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p769221217415"><a name="en-us_topic_0283137115_p769221217415"></a><a name="en-us_topic_0283137115_p769221217415"></a>gin_clean_pending_list</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p19692212154120"><a name="en-us_topic_0283137115_p19692212154120"></a><a name="en-us_topic_0283137115_p19692212154120"></a>gin_cmp_prefix</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p156921112114113"><a name="en-us_topic_0283137115_p156921112114113"></a><a name="en-us_topic_0283137115_p156921112114113"></a>gin_cmp_tslexeme</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row116921122413"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p869251284115"><a name="en-us_topic_0283137115_p869251284115"></a><a name="en-us_topic_0283137115_p869251284115"></a>gin_extract_tsquery</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1569221284111"><a name="en-us_topic_0283137115_p1569221284111"></a><a name="en-us_topic_0283137115_p1569221284111"></a>gin_extract_tsvector</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1169251213412"><a name="en-us_topic_0283137115_p1169251213412"></a><a name="en-us_topic_0283137115_p1169251213412"></a>gin_tsquery_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p19692612114116"><a name="en-us_topic_0283137115_p19692612114116"></a><a name="en-us_topic_0283137115_p19692612114116"></a>gin_tsquery_triconsistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p569211234113"><a name="en-us_topic_0283137115_p569211234113"></a><a name="en-us_topic_0283137115_p569211234113"></a>ginarrayconsistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p20692312144116"><a name="en-us_topic_0283137115_p20692312144116"></a><a name="en-us_topic_0283137115_p20692312144116"></a>ginarrayextract</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p369217127412"><a name="en-us_topic_0283137115_p369217127412"></a><a name="en-us_topic_0283137115_p369217127412"></a>ginarraytriconsistent</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1669215122412"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p126921112114119"><a name="en-us_topic_0283137115_p126921112114119"></a><a name="en-us_topic_0283137115_p126921112114119"></a>ginbeginscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p10692912144113"><a name="en-us_topic_0283137115_p10692912144113"></a><a name="en-us_topic_0283137115_p10692912144113"></a>ginbuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p18692181216410"><a name="en-us_topic_0283137115_p18692181216410"></a><a name="en-us_topic_0283137115_p18692181216410"></a>ginbuildempty</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p8692512104112"><a name="en-us_topic_0283137115_p8692512104112"></a><a name="en-us_topic_0283137115_p8692512104112"></a>ginbulkdelete</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p126922122411"><a name="en-us_topic_0283137115_p126922122411"></a><a name="en-us_topic_0283137115_p126922122411"></a>gincostestimate</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1969241294115"><a name="en-us_topic_0283137115_p1969241294115"></a><a name="en-us_topic_0283137115_p1969241294115"></a>ginendscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1269221254116"><a name="en-us_topic_0283137115_p1269221254116"></a><a name="en-us_topic_0283137115_p1269221254116"></a>gingetbitmap</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row146922126415"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p8692112164120"><a name="en-us_topic_0283137115_p8692112164120"></a><a name="en-us_topic_0283137115_p8692112164120"></a>gininsert</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p20693121214117"><a name="en-us_topic_0283137115_p20693121214117"></a><a name="en-us_topic_0283137115_p20693121214117"></a>ginmarkpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p11693131210417"><a name="en-us_topic_0283137115_p11693131210417"></a><a name="en-us_topic_0283137115_p11693131210417"></a>ginoptions</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p16931212144110"><a name="en-us_topic_0283137115_p16931212144110"></a><a name="en-us_topic_0283137115_p16931212144110"></a>ginqueryarrayextract</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p176934120418"><a name="en-us_topic_0283137115_p176934120418"></a><a name="en-us_topic_0283137115_p176934120418"></a>ginrescan</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p4693712194113"><a name="en-us_topic_0283137115_p4693712194113"></a><a name="en-us_topic_0283137115_p4693712194113"></a>ginrestrpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1469351218418"><a name="en-us_topic_0283137115_p1469351218418"></a><a name="en-us_topic_0283137115_p1469351218418"></a>ginvacuumcleanup</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1469314128416"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p14693181294111"><a name="en-us_topic_0283137115_p14693181294111"></a><a name="en-us_topic_0283137115_p14693181294111"></a>gist_box_compress</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p206931122419"><a name="en-us_topic_0283137115_p206931122419"></a><a name="en-us_topic_0283137115_p206931122419"></a>gist_box_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p2693161218419"><a name="en-us_topic_0283137115_p2693161218419"></a><a name="en-us_topic_0283137115_p2693161218419"></a>gist_box_decompress</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1669315124412"><a name="en-us_topic_0283137115_p1669315124412"></a><a name="en-us_topic_0283137115_p1669315124412"></a>gist_box_penalty</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p4693141294120"><a name="en-us_topic_0283137115_p4693141294120"></a><a name="en-us_topic_0283137115_p4693141294120"></a>gist_box_picksplit</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p06938124412"><a name="en-us_topic_0283137115_p06938124412"></a><a name="en-us_topic_0283137115_p06938124412"></a>gist_box_same</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1369381244118"><a name="en-us_topic_0283137115_p1369381244118"></a><a name="en-us_topic_0283137115_p1369381244118"></a>gist_box_union</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row8693111213417"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p116930121412"><a name="en-us_topic_0283137115_p116930121412"></a><a name="en-us_topic_0283137115_p116930121412"></a>gist_circle_compress</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p18693191213416"><a name="en-us_topic_0283137115_p18693191213416"></a><a name="en-us_topic_0283137115_p18693191213416"></a>gist_circle_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1869361254113"><a name="en-us_topic_0283137115_p1869361254113"></a><a name="en-us_topic_0283137115_p1869361254113"></a>gist_point_compress</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1969319122416"><a name="en-us_topic_0283137115_p1969319122416"></a><a name="en-us_topic_0283137115_p1969319122416"></a>gist_point_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p5693512194112"><a name="en-us_topic_0283137115_p5693512194112"></a><a name="en-us_topic_0283137115_p5693512194112"></a>gist_point_distance</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p12693712104112"><a name="en-us_topic_0283137115_p12693712104112"></a><a name="en-us_topic_0283137115_p12693712104112"></a>gist_poly_compress</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p14693191294113"><a name="en-us_topic_0283137115_p14693191294113"></a><a name="en-us_topic_0283137115_p14693191294113"></a>gist_poly_consistent</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row18693111244115"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1469320127414"><a name="en-us_topic_0283137115_p1469320127414"></a><a name="en-us_topic_0283137115_p1469320127414"></a>gistbeginscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p116931912204110"><a name="en-us_topic_0283137115_p116931912204110"></a><a name="en-us_topic_0283137115_p116931912204110"></a>gistbuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p26931912164111"><a name="en-us_topic_0283137115_p26931912164111"></a><a name="en-us_topic_0283137115_p26931912164111"></a>gistbuildempty</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p46931412114119"><a name="en-us_topic_0283137115_p46931412114119"></a><a name="en-us_topic_0283137115_p46931412114119"></a>gistbulkdelete</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1069419120412"><a name="en-us_topic_0283137115_p1069419120412"></a><a name="en-us_topic_0283137115_p1069419120412"></a>gistcostestimate</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p13694112174116"><a name="en-us_topic_0283137115_p13694112174116"></a><a name="en-us_topic_0283137115_p13694112174116"></a>gistendscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p969481244111"><a name="en-us_topic_0283137115_p969481244111"></a><a name="en-us_topic_0283137115_p969481244111"></a>gistgetbitmap</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row36949129411"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p10694171216414"><a name="en-us_topic_0283137115_p10694171216414"></a><a name="en-us_topic_0283137115_p10694171216414"></a>gistgettuple</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p176941312154118"><a name="en-us_topic_0283137115_p176941312154118"></a><a name="en-us_topic_0283137115_p176941312154118"></a>gistinsert</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1969431215413"><a name="en-us_topic_0283137115_p1969431215413"></a><a name="en-us_topic_0283137115_p1969431215413"></a>gistmarkpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p469401244111"><a name="en-us_topic_0283137115_p469401244111"></a><a name="en-us_topic_0283137115_p469401244111"></a>gistoptions</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1669451264116"><a name="en-us_topic_0283137115_p1669451264116"></a><a name="en-us_topic_0283137115_p1669451264116"></a>gistrescan</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p569461214413"><a name="en-us_topic_0283137115_p569461214413"></a><a name="en-us_topic_0283137115_p569461214413"></a>gistrestrpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p106941412174112"><a name="en-us_topic_0283137115_p106941412174112"></a><a name="en-us_topic_0283137115_p106941412174112"></a>gistvacuumcleanup</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row4694141220412"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p4694812164117"><a name="en-us_topic_0283137115_p4694812164117"></a><a name="en-us_topic_0283137115_p4694812164117"></a>gtsquery_compress</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p969481224117"><a name="en-us_topic_0283137115_p969481224117"></a><a name="en-us_topic_0283137115_p969481224117"></a>gtsquery_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p86941612194118"><a name="en-us_topic_0283137115_p86941612194118"></a><a name="en-us_topic_0283137115_p86941612194118"></a>gtsquery_decompress</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1469441244119"><a name="en-us_topic_0283137115_p1469441244119"></a><a name="en-us_topic_0283137115_p1469441244119"></a>gtsquery_penalty</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p4694121212411"><a name="en-us_topic_0283137115_p4694121212411"></a><a name="en-us_topic_0283137115_p4694121212411"></a>gtsquery_picksplit</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1469441218416"><a name="en-us_topic_0283137115_p1469441218416"></a><a name="en-us_topic_0283137115_p1469441218416"></a>gtsquery_same</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p069471219418"><a name="en-us_topic_0283137115_p069471219418"></a><a name="en-us_topic_0283137115_p069471219418"></a>gtsquery_union</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1769419120410"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p769410128411"><a name="en-us_topic_0283137115_p769410128411"></a><a name="en-us_topic_0283137115_p769410128411"></a>gtsvector_compress</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1869481214416"><a name="en-us_topic_0283137115_p1869481214416"></a><a name="en-us_topic_0283137115_p1869481214416"></a>gtsvector_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p2694111234118"><a name="en-us_topic_0283137115_p2694111234118"></a><a name="en-us_topic_0283137115_p2694111234118"></a>gtsvector_decompress</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p176941112144116"><a name="en-us_topic_0283137115_p176941112144116"></a><a name="en-us_topic_0283137115_p176941112144116"></a>gtsvector_penalty</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p10694121264119"><a name="en-us_topic_0283137115_p10694121264119"></a><a name="en-us_topic_0283137115_p10694121264119"></a>gtsvector_picksplit</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1669418129419"><a name="en-us_topic_0283137115_p1669418129419"></a><a name="en-us_topic_0283137115_p1669418129419"></a>gtsvector_same</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p469571234117"><a name="en-us_topic_0283137115_p469571234117"></a><a name="en-us_topic_0283137115_p469571234117"></a>gtsvector_union</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1669518127415"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p5695612194115"><a name="en-us_topic_0283137115_p5695612194115"></a><a name="en-us_topic_0283137115_p5695612194115"></a>gtsvectorin</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p96951122418"><a name="en-us_topic_0283137115_p96951122418"></a><a name="en-us_topic_0283137115_p96951122418"></a>gtsvectorout</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p669520129418"><a name="en-us_topic_0283137115_p669520129418"></a><a name="en-us_topic_0283137115_p669520129418"></a>has_tablespace_privilege</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p169512124410"><a name="en-us_topic_0283137115_p169512124410"></a><a name="en-us_topic_0283137115_p169512124410"></a>has_type_privilege</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1869521220412"><a name="en-us_topic_0283137115_p1869521220412"></a><a name="en-us_topic_0283137115_p1869521220412"></a>hash_aclitem</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p3695201215417"><a name="en-us_topic_0283137115_p3695201215417"></a><a name="en-us_topic_0283137115_p3695201215417"></a>hashbeginscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1695191217415"><a name="en-us_topic_0283137115_p1695191217415"></a><a name="en-us_topic_0283137115_p1695191217415"></a>hashbuild</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1695912174112"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p9695112124116"><a name="en-us_topic_0283137115_p9695112124116"></a><a name="en-us_topic_0283137115_p9695112124116"></a>hashbuildempty</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p869521214111"><a name="en-us_topic_0283137115_p869521214111"></a><a name="en-us_topic_0283137115_p869521214111"></a>hashbulkdelete</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1369591224112"><a name="en-us_topic_0283137115_p1369591224112"></a><a name="en-us_topic_0283137115_p1369591224112"></a>hashcostestimate</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p069511264117"><a name="en-us_topic_0283137115_p069511264117"></a><a name="en-us_topic_0283137115_p069511264117"></a>hashendscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p196951112184112"><a name="en-us_topic_0283137115_p196951112184112"></a><a name="en-us_topic_0283137115_p196951112184112"></a>hashgetbitmap</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1969551217411"><a name="en-us_topic_0283137115_p1969551217411"></a><a name="en-us_topic_0283137115_p1969551217411"></a>hashgettuple</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p19695151214419"><a name="en-us_topic_0283137115_p19695151214419"></a><a name="en-us_topic_0283137115_p19695151214419"></a>hashinsert</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1695112184113"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p16695812124117"><a name="en-us_topic_0283137115_p16695812124117"></a><a name="en-us_topic_0283137115_p16695812124117"></a>hashint2vector</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p8695171212412"><a name="en-us_topic_0283137115_p8695171212412"></a><a name="en-us_topic_0283137115_p8695171212412"></a>hashint4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p569521264111"><a name="en-us_topic_0283137115_p569521264111"></a><a name="en-us_topic_0283137115_p569521264111"></a>hashint8</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p106951512164115"><a name="en-us_topic_0283137115_p106951512164115"></a><a name="en-us_topic_0283137115_p106951512164115"></a>hashmacaddr</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p4695612184117"><a name="en-us_topic_0283137115_p4695612184117"></a><a name="en-us_topic_0283137115_p4695612184117"></a>hashmarkpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p269513122411"><a name="en-us_topic_0283137115_p269513122411"></a><a name="en-us_topic_0283137115_p269513122411"></a>hashname</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p669521212413"><a name="en-us_topic_0283137115_p669521212413"></a><a name="en-us_topic_0283137115_p669521212413"></a>hashoid</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row7695131214413"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p8695151234112"><a name="en-us_topic_0283137115_p8695151234112"></a><a name="en-us_topic_0283137115_p8695151234112"></a>hashoidvector</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p569691294115"><a name="en-us_topic_0283137115_p569691294115"></a><a name="en-us_topic_0283137115_p569691294115"></a>hashoptions</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p469641214119"><a name="en-us_topic_0283137115_p469641214119"></a><a name="en-us_topic_0283137115_p469641214119"></a>hashrescan</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p9696512134118"><a name="en-us_topic_0283137115_p9696512134118"></a><a name="en-us_topic_0283137115_p9696512134118"></a>hashrestrpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1869631274112"><a name="en-us_topic_0283137115_p1869631274112"></a><a name="en-us_topic_0283137115_p1869631274112"></a>hashtext</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p136969122417"><a name="en-us_topic_0283137115_p136969122417"></a><a name="en-us_topic_0283137115_p136969122417"></a>hashvacuumcleanup</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p7696612124112"><a name="en-us_topic_0283137115_p7696612124112"></a><a name="en-us_topic_0283137115_p7696612124112"></a>hashvarlena</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row2696201294117"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p14696101211414"><a name="en-us_topic_0283137115_p14696101211414"></a><a name="en-us_topic_0283137115_p14696101211414"></a>host</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1869681212415"><a name="en-us_topic_0283137115_p1869681212415"></a><a name="en-us_topic_0283137115_p1869681212415"></a>hostmask</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p8696191218417"><a name="en-us_topic_0283137115_p8696191218417"></a><a name="en-us_topic_0283137115_p8696191218417"></a>iclikejoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1696151264115"><a name="en-us_topic_0283137115_p1696151264115"></a><a name="en-us_topic_0283137115_p1696151264115"></a>iclikesel</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p269620127412"><a name="en-us_topic_0283137115_p269620127412"></a><a name="en-us_topic_0283137115_p269620127412"></a>icnlikejoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1269617120416"><a name="en-us_topic_0283137115_p1269617120416"></a><a name="en-us_topic_0283137115_p1269617120416"></a>icnlikesel</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1069601213411"><a name="en-us_topic_0283137115_p1069601213411"></a><a name="en-us_topic_0283137115_p1069601213411"></a>icregexeqjoinsel</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row569601210417"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p36966124412"><a name="en-us_topic_0283137115_p36966124412"></a><a name="en-us_topic_0283137115_p36966124412"></a>icregexeqsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p176965122413"><a name="en-us_topic_0283137115_p176965122413"></a><a name="en-us_topic_0283137115_p176965122413"></a>icregexnejoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1669611213413"><a name="en-us_topic_0283137115_p1669611213413"></a><a name="en-us_topic_0283137115_p1669611213413"></a>icregexnesel</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p13696111219413"><a name="en-us_topic_0283137115_p13696111219413"></a><a name="en-us_topic_0283137115_p13696111219413"></a>inet_client_addr</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p15696151220410"><a name="en-us_topic_0283137115_p15696151220410"></a><a name="en-us_topic_0283137115_p15696151220410"></a>inet_client_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p19696012184112"><a name="en-us_topic_0283137115_p19696012184112"></a><a name="en-us_topic_0283137115_p19696012184112"></a>inet_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p26961512184110"><a name="en-us_topic_0283137115_p26961512184110"></a><a name="en-us_topic_0283137115_p26961512184110"></a>inet_out</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row12696201216413"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p19696181254118"><a name="en-us_topic_0283137115_p19696181254118"></a><a name="en-us_topic_0283137115_p19696181254118"></a>inet_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p16696812174115"><a name="en-us_topic_0283137115_p16696812174115"></a><a name="en-us_topic_0283137115_p16696812174115"></a>inet_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p269661214110"><a name="en-us_topic_0283137115_p269661214110"></a><a name="en-us_topic_0283137115_p269661214110"></a>inet_server_addr</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p86974129415"><a name="en-us_topic_0283137115_p86974129415"></a><a name="en-us_topic_0283137115_p86974129415"></a>inet_server_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p14697191274113"><a name="en-us_topic_0283137115_p14697191274113"></a><a name="en-us_topic_0283137115_p14697191274113"></a>inetand</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p269701210417"><a name="en-us_topic_0283137115_p269701210417"></a><a name="en-us_topic_0283137115_p269701210417"></a>inetmi</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p11697121220413"><a name="en-us_topic_0283137115_p11697121220413"></a><a name="en-us_topic_0283137115_p11697121220413"></a>inetmi_int8</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1369714122419"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1169712128415"><a name="en-us_topic_0283137115_p1169712128415"></a><a name="en-us_topic_0283137115_p1169712128415"></a>inetnot</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p12697151219417"><a name="en-us_topic_0283137115_p12697151219417"></a><a name="en-us_topic_0283137115_p12697151219417"></a>inetor</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p0697112124113"><a name="en-us_topic_0283137115_p0697112124113"></a><a name="en-us_topic_0283137115_p0697112124113"></a>inetpl</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p17697712204110"><a name="en-us_topic_0283137115_p17697712204110"></a><a name="en-us_topic_0283137115_p17697712204110"></a>initcap</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1469719127419"><a name="en-us_topic_0283137115_p1469719127419"></a><a name="en-us_topic_0283137115_p1469719127419"></a>int2_accum</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p196971212114119"><a name="en-us_topic_0283137115_p196971212114119"></a><a name="en-us_topic_0283137115_p196971212114119"></a>int2_avg_accum</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1869731219413"><a name="en-us_topic_0283137115_p1869731219413"></a><a name="en-us_topic_0283137115_p1869731219413"></a>int2_mul_cash</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row16971412124114"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p169741254110"><a name="en-us_topic_0283137115_p169741254110"></a><a name="en-us_topic_0283137115_p169741254110"></a>int2_sum</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p4697161216416"><a name="en-us_topic_0283137115_p4697161216416"></a><a name="en-us_topic_0283137115_p4697161216416"></a>int24div</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1369771254114"><a name="en-us_topic_0283137115_p1369771254114"></a><a name="en-us_topic_0283137115_p1369771254114"></a>int24eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p7697412134116"><a name="en-us_topic_0283137115_p7697412134116"></a><a name="en-us_topic_0283137115_p7697412134116"></a>int24ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p11697141211412"><a name="en-us_topic_0283137115_p11697141211412"></a><a name="en-us_topic_0283137115_p11697141211412"></a>int24gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p169741224118"><a name="en-us_topic_0283137115_p169741224118"></a><a name="en-us_topic_0283137115_p169741224118"></a>int24le</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p769720123419"><a name="en-us_topic_0283137115_p769720123419"></a><a name="en-us_topic_0283137115_p769720123419"></a>int24lt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row8697181217414"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p2069715123415"><a name="en-us_topic_0283137115_p2069715123415"></a><a name="en-us_topic_0283137115_p2069715123415"></a>int24mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p156979125413"><a name="en-us_topic_0283137115_p156979125413"></a><a name="en-us_topic_0283137115_p156979125413"></a>int24mul</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p56975125411"><a name="en-us_topic_0283137115_p56975125411"></a><a name="en-us_topic_0283137115_p56975125411"></a>int24ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p176971124416"><a name="en-us_topic_0283137115_p176971124416"></a><a name="en-us_topic_0283137115_p176971124416"></a>int24pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p106978126410"><a name="en-us_topic_0283137115_p106978126410"></a><a name="en-us_topic_0283137115_p106978126410"></a>int28div</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p3698131210412"><a name="en-us_topic_0283137115_p3698131210412"></a><a name="en-us_topic_0283137115_p3698131210412"></a>int28eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1698171234112"><a name="en-us_topic_0283137115_p1698171234112"></a><a name="en-us_topic_0283137115_p1698171234112"></a>int28ge</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row469820124417"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p96981112144116"><a name="en-us_topic_0283137115_p96981112144116"></a><a name="en-us_topic_0283137115_p96981112144116"></a>int28gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p5698191294118"><a name="en-us_topic_0283137115_p5698191294118"></a><a name="en-us_topic_0283137115_p5698191294118"></a>int28le</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p166981012154111"><a name="en-us_topic_0283137115_p166981012154111"></a><a name="en-us_topic_0283137115_p166981012154111"></a>int28lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p469818125417"><a name="en-us_topic_0283137115_p469818125417"></a><a name="en-us_topic_0283137115_p469818125417"></a>int28mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p19698121218413"><a name="en-us_topic_0283137115_p19698121218413"></a><a name="en-us_topic_0283137115_p19698121218413"></a>int28mul</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p13698712144119"><a name="en-us_topic_0283137115_p13698712144119"></a><a name="en-us_topic_0283137115_p13698712144119"></a>int28ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p15698171218412"><a name="en-us_topic_0283137115_p15698171218412"></a><a name="en-us_topic_0283137115_p15698171218412"></a>int28pl</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row196981712164113"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p369817122419"><a name="en-us_topic_0283137115_p369817122419"></a><a name="en-us_topic_0283137115_p369817122419"></a>int2abs</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1369851224110"><a name="en-us_topic_0283137115_p1369851224110"></a><a name="en-us_topic_0283137115_p1369851224110"></a>int2and</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p16698712164114"><a name="en-us_topic_0283137115_p16698712164114"></a><a name="en-us_topic_0283137115_p16698712164114"></a>int2div</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1469814123418"><a name="en-us_topic_0283137115_p1469814123418"></a><a name="en-us_topic_0283137115_p1469814123418"></a>int2eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p969810128419"><a name="en-us_topic_0283137115_p969810128419"></a><a name="en-us_topic_0283137115_p969810128419"></a>int2ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1169816129412"><a name="en-us_topic_0283137115_p1169816129412"></a><a name="en-us_topic_0283137115_p1169816129412"></a>int2gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p469891284114"><a name="en-us_topic_0283137115_p469891284114"></a><a name="en-us_topic_0283137115_p469891284114"></a>int2in</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row176981012104119"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p86982121412"><a name="en-us_topic_0283137115_p86982121412"></a><a name="en-us_topic_0283137115_p86982121412"></a>int2larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p06989127414"><a name="en-us_topic_0283137115_p06989127414"></a><a name="en-us_topic_0283137115_p06989127414"></a>int2le</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p196981312164118"><a name="en-us_topic_0283137115_p196981312164118"></a><a name="en-us_topic_0283137115_p196981312164118"></a>int2lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p116981012184119"><a name="en-us_topic_0283137115_p116981012184119"></a><a name="en-us_topic_0283137115_p116981012184119"></a>int2mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p2698141211413"><a name="en-us_topic_0283137115_p2698141211413"></a><a name="en-us_topic_0283137115_p2698141211413"></a>int2mod</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p19698412184119"><a name="en-us_topic_0283137115_p19698412184119"></a><a name="en-us_topic_0283137115_p19698412184119"></a>int2mul</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p186982012114120"><a name="en-us_topic_0283137115_p186982012114120"></a><a name="en-us_topic_0283137115_p186982012114120"></a>int2ne</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row26982127413"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p169931204113"><a name="en-us_topic_0283137115_p169931204113"></a><a name="en-us_topic_0283137115_p169931204113"></a>int2not</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p669961211412"><a name="en-us_topic_0283137115_p669961211412"></a><a name="en-us_topic_0283137115_p669961211412"></a>int2or</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p156991812194115"><a name="en-us_topic_0283137115_p156991812194115"></a><a name="en-us_topic_0283137115_p156991812194115"></a>int2out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1699212104120"><a name="en-us_topic_0283137115_p1699212104120"></a><a name="en-us_topic_0283137115_p1699212104120"></a>int2pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p66991129414"><a name="en-us_topic_0283137115_p66991129414"></a><a name="en-us_topic_0283137115_p66991129414"></a>int2recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p66992012134112"><a name="en-us_topic_0283137115_p66992012134112"></a><a name="en-us_topic_0283137115_p66992012134112"></a>int2send</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p14699151211416"><a name="en-us_topic_0283137115_p14699151211416"></a><a name="en-us_topic_0283137115_p14699151211416"></a>int2shl</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row20699131224119"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1069911274114"><a name="en-us_topic_0283137115_p1069911274114"></a><a name="en-us_topic_0283137115_p1069911274114"></a>int2shr</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p4699191244116"><a name="en-us_topic_0283137115_p4699191244116"></a><a name="en-us_topic_0283137115_p4699191244116"></a>int2smaller</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1969917123414"><a name="en-us_topic_0283137115_p1969917123414"></a><a name="en-us_topic_0283137115_p1969917123414"></a>int2um</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p136999125419"><a name="en-us_topic_0283137115_p136999125419"></a><a name="en-us_topic_0283137115_p136999125419"></a>int2up</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p869910126416"><a name="en-us_topic_0283137115_p869910126416"></a><a name="en-us_topic_0283137115_p869910126416"></a>int2vectoreq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p969911218416"><a name="en-us_topic_0283137115_p969911218416"></a><a name="en-us_topic_0283137115_p969911218416"></a>int2vectorin</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p12699141284112"><a name="en-us_topic_0283137115_p12699141284112"></a><a name="en-us_topic_0283137115_p12699141284112"></a>int2vectorout</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1769921224119"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p96994122414"><a name="en-us_topic_0283137115_p96994122414"></a><a name="en-us_topic_0283137115_p96994122414"></a>int2vectorrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p17699111215416"><a name="en-us_topic_0283137115_p17699111215416"></a><a name="en-us_topic_0283137115_p17699111215416"></a>int2vectorsend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p12699141211416"><a name="en-us_topic_0283137115_p12699141211416"></a><a name="en-us_topic_0283137115_p12699141211416"></a>int2xor</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p6699191216413"><a name="en-us_topic_0283137115_p6699191216413"></a><a name="en-us_topic_0283137115_p6699191216413"></a>int4_accum</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p13699161219416"><a name="en-us_topic_0283137115_p13699161219416"></a><a name="en-us_topic_0283137115_p13699161219416"></a>int4_avg_accum</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p96991912184116"><a name="en-us_topic_0283137115_p96991912184116"></a><a name="en-us_topic_0283137115_p96991912184116"></a>int4_mul_cash</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p18699141274113"><a name="en-us_topic_0283137115_p18699141274113"></a><a name="en-us_topic_0283137115_p18699141274113"></a>int4_sum</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row2699161274113"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p469941210416"><a name="en-us_topic_0283137115_p469941210416"></a><a name="en-us_topic_0283137115_p469941210416"></a>int42div</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1769912127411"><a name="en-us_topic_0283137115_p1769912127411"></a><a name="en-us_topic_0283137115_p1769912127411"></a>int42eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p11699151214412"><a name="en-us_topic_0283137115_p11699151214412"></a><a name="en-us_topic_0283137115_p11699151214412"></a>int42ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p12700101274118"><a name="en-us_topic_0283137115_p12700101274118"></a><a name="en-us_topic_0283137115_p12700101274118"></a>int42gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p6700312124116"><a name="en-us_topic_0283137115_p6700312124116"></a><a name="en-us_topic_0283137115_p6700312124116"></a>int42le</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1970021212413"><a name="en-us_topic_0283137115_p1970021212413"></a><a name="en-us_topic_0283137115_p1970021212413"></a>int42lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p3700112164115"><a name="en-us_topic_0283137115_p3700112164115"></a><a name="en-us_topic_0283137115_p3700112164115"></a>int42mi</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1170019127412"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p19700191217414"><a name="en-us_topic_0283137115_p19700191217414"></a><a name="en-us_topic_0283137115_p19700191217414"></a>int42mul</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p14700131219415"><a name="en-us_topic_0283137115_p14700131219415"></a><a name="en-us_topic_0283137115_p14700131219415"></a>int42ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p18700171254110"><a name="en-us_topic_0283137115_p18700171254110"></a><a name="en-us_topic_0283137115_p18700171254110"></a>int42pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p770021211417"><a name="en-us_topic_0283137115_p770021211417"></a><a name="en-us_topic_0283137115_p770021211417"></a>int48div</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p3700131234115"><a name="en-us_topic_0283137115_p3700131234115"></a><a name="en-us_topic_0283137115_p3700131234115"></a>int48eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p10700121234119"><a name="en-us_topic_0283137115_p10700121234119"></a><a name="en-us_topic_0283137115_p10700121234119"></a>int48ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p7700171219415"><a name="en-us_topic_0283137115_p7700171219415"></a><a name="en-us_topic_0283137115_p7700171219415"></a>int48gt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row570061212415"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p0700912174119"><a name="en-us_topic_0283137115_p0700912174119"></a><a name="en-us_topic_0283137115_p0700912174119"></a>int48le</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p127003129419"><a name="en-us_topic_0283137115_p127003129419"></a><a name="en-us_topic_0283137115_p127003129419"></a>int48lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p117001412134112"><a name="en-us_topic_0283137115_p117001412134112"></a><a name="en-us_topic_0283137115_p117001412134112"></a>int48mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1470010126412"><a name="en-us_topic_0283137115_p1470010126412"></a><a name="en-us_topic_0283137115_p1470010126412"></a>int48mul</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p9700121213418"><a name="en-us_topic_0283137115_p9700121213418"></a><a name="en-us_topic_0283137115_p9700121213418"></a>int48ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p137007124415"><a name="en-us_topic_0283137115_p137007124415"></a><a name="en-us_topic_0283137115_p137007124415"></a>int48pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p19700111214116"><a name="en-us_topic_0283137115_p19700111214116"></a><a name="en-us_topic_0283137115_p19700111214116"></a>int4abs</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row18700181264116"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p9700161211410"><a name="en-us_topic_0283137115_p9700161211410"></a><a name="en-us_topic_0283137115_p9700161211410"></a>int4and</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p170081284116"><a name="en-us_topic_0283137115_p170081284116"></a><a name="en-us_topic_0283137115_p170081284116"></a>int4div</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p15700512104117"><a name="en-us_topic_0283137115_p15700512104117"></a><a name="en-us_topic_0283137115_p15700512104117"></a>int4eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1970012121419"><a name="en-us_topic_0283137115_p1970012121419"></a><a name="en-us_topic_0283137115_p1970012121419"></a>int4ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p9700191224119"><a name="en-us_topic_0283137115_p9700191224119"></a><a name="en-us_topic_0283137115_p9700191224119"></a>int4gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p2070141264116"><a name="en-us_topic_0283137115_p2070141264116"></a><a name="en-us_topic_0283137115_p2070141264116"></a>int4in</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p770121215417"><a name="en-us_topic_0283137115_p770121215417"></a><a name="en-us_topic_0283137115_p770121215417"></a>int4inc</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1270161254115"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p147011312184119"><a name="en-us_topic_0283137115_p147011312184119"></a><a name="en-us_topic_0283137115_p147011312184119"></a>int4larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1670181214113"><a name="en-us_topic_0283137115_p1670181214113"></a><a name="en-us_topic_0283137115_p1670181214113"></a>int4le</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p207015125414"><a name="en-us_topic_0283137115_p207015125414"></a><a name="en-us_topic_0283137115_p207015125414"></a>int4lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p8701812104113"><a name="en-us_topic_0283137115_p8701812104113"></a><a name="en-us_topic_0283137115_p8701812104113"></a>int4mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p8701131214417"><a name="en-us_topic_0283137115_p8701131214417"></a><a name="en-us_topic_0283137115_p8701131214417"></a>int4mod</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p14701101212414"><a name="en-us_topic_0283137115_p14701101212414"></a><a name="en-us_topic_0283137115_p14701101212414"></a>int4mul</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1170111212417"><a name="en-us_topic_0283137115_p1170111212417"></a><a name="en-us_topic_0283137115_p1170111212417"></a>int4ne</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row12701191213413"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p117013124412"><a name="en-us_topic_0283137115_p117013124412"></a><a name="en-us_topic_0283137115_p117013124412"></a>int4not</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p87011121412"><a name="en-us_topic_0283137115_p87011121412"></a><a name="en-us_topic_0283137115_p87011121412"></a>int4or</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p11701712134118"><a name="en-us_topic_0283137115_p11701712134118"></a><a name="en-us_topic_0283137115_p11701712134118"></a>int4out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1670110121416"><a name="en-us_topic_0283137115_p1670110121416"></a><a name="en-us_topic_0283137115_p1670110121416"></a>int4pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p87016121414"><a name="en-us_topic_0283137115_p87016121414"></a><a name="en-us_topic_0283137115_p87016121414"></a>int4range</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p570161217414"><a name="en-us_topic_0283137115_p570161217414"></a><a name="en-us_topic_0283137115_p570161217414"></a>int4range_canonical</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1270141214115"><a name="en-us_topic_0283137115_p1270141214115"></a><a name="en-us_topic_0283137115_p1270141214115"></a>int4range_subdiff</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row0701312184117"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p6701171211416"><a name="en-us_topic_0283137115_p6701171211416"></a><a name="en-us_topic_0283137115_p6701171211416"></a>int4recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p370116128412"><a name="en-us_topic_0283137115_p370116128412"></a><a name="en-us_topic_0283137115_p370116128412"></a>int4send</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p6701181264115"><a name="en-us_topic_0283137115_p6701181264115"></a><a name="en-us_topic_0283137115_p6701181264115"></a>int4shl</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1670114127412"><a name="en-us_topic_0283137115_p1670114127412"></a><a name="en-us_topic_0283137115_p1670114127412"></a>int4shr</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1270118125417"><a name="en-us_topic_0283137115_p1270118125417"></a><a name="en-us_topic_0283137115_p1270118125417"></a>int4smaller</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p137016122414"><a name="en-us_topic_0283137115_p137016122414"></a><a name="en-us_topic_0283137115_p137016122414"></a>int4um</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p18701151234112"><a name="en-us_topic_0283137115_p18701151234112"></a><a name="en-us_topic_0283137115_p18701151234112"></a>int4up</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1070161204118"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p570251244117"><a name="en-us_topic_0283137115_p570251244117"></a><a name="en-us_topic_0283137115_p570251244117"></a>int4xor</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1170219121413"><a name="en-us_topic_0283137115_p1170219121413"></a><a name="en-us_topic_0283137115_p1170219121413"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p207021312194118"><a name="en-us_topic_0283137115_p207021312194118"></a><a name="en-us_topic_0283137115_p207021312194118"></a>int8_avg</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p5702712154115"><a name="en-us_topic_0283137115_p5702712154115"></a><a name="en-us_topic_0283137115_p5702712154115"></a>int8_avg_accum</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p107022129413"><a name="en-us_topic_0283137115_p107022129413"></a><a name="en-us_topic_0283137115_p107022129413"></a>int8_avg_collect</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p67021012144120"><a name="en-us_topic_0283137115_p67021012144120"></a><a name="en-us_topic_0283137115_p67021012144120"></a>int8_mul_cash</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p147021812124113"><a name="en-us_topic_0283137115_p147021812124113"></a><a name="en-us_topic_0283137115_p147021812124113"></a>int8_sum</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row197021129415"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p4702121215416"><a name="en-us_topic_0283137115_p4702121215416"></a><a name="en-us_topic_0283137115_p4702121215416"></a>int8_sum_to_int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p207021912204110"><a name="en-us_topic_0283137115_p207021912204110"></a><a name="en-us_topic_0283137115_p207021912204110"></a>int8+1635:1668_accum</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p5702212104113"><a name="en-us_topic_0283137115_p5702212104113"></a><a name="en-us_topic_0283137115_p5702212104113"></a>int82div</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p2702191264119"><a name="en-us_topic_0283137115_p2702191264119"></a><a name="en-us_topic_0283137115_p2702191264119"></a>int82eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p12702412154112"><a name="en-us_topic_0283137115_p12702412154112"></a><a name="en-us_topic_0283137115_p12702412154112"></a>int82ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p77021812114118"><a name="en-us_topic_0283137115_p77021812114118"></a><a name="en-us_topic_0283137115_p77021812114118"></a>int82gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p470231215417"><a name="en-us_topic_0283137115_p470231215417"></a><a name="en-us_topic_0283137115_p470231215417"></a>int82le</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row13702131211411"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p37021512124116"><a name="en-us_topic_0283137115_p37021512124116"></a><a name="en-us_topic_0283137115_p37021512124116"></a>int82lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p6702012144114"><a name="en-us_topic_0283137115_p6702012144114"></a><a name="en-us_topic_0283137115_p6702012144114"></a>int82mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p19702612144118"><a name="en-us_topic_0283137115_p19702612144118"></a><a name="en-us_topic_0283137115_p19702612144118"></a>int82mul</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p16702151284112"><a name="en-us_topic_0283137115_p16702151284112"></a><a name="en-us_topic_0283137115_p16702151284112"></a>int82ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p27021412154119"><a name="en-us_topic_0283137115_p27021412154119"></a><a name="en-us_topic_0283137115_p27021412154119"></a>int82pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1470261220410"><a name="en-us_topic_0283137115_p1470261220410"></a><a name="en-us_topic_0283137115_p1470261220410"></a>int84div</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p15702912134117"><a name="en-us_topic_0283137115_p15702912134117"></a><a name="en-us_topic_0283137115_p15702912134117"></a>int84eq</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row17025123417"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1702512104118"><a name="en-us_topic_0283137115_p1702512104118"></a><a name="en-us_topic_0283137115_p1702512104118"></a>int84ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1570218127413"><a name="en-us_topic_0283137115_p1570218127413"></a><a name="en-us_topic_0283137115_p1570218127413"></a>int84gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p670221213418"><a name="en-us_topic_0283137115_p670221213418"></a><a name="en-us_topic_0283137115_p670221213418"></a>int84le</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p177031512134116"><a name="en-us_topic_0283137115_p177031512134116"></a><a name="en-us_topic_0283137115_p177031512134116"></a>int84lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p19703112114116"><a name="en-us_topic_0283137115_p19703112114116"></a><a name="en-us_topic_0283137115_p19703112114116"></a>int84mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1270319128411"><a name="en-us_topic_0283137115_p1270319128411"></a><a name="en-us_topic_0283137115_p1270319128411"></a>int84mul</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p10703312164116"><a name="en-us_topic_0283137115_p10703312164116"></a><a name="en-us_topic_0283137115_p10703312164116"></a>int84ne</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row5703612144118"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p470321219412"><a name="en-us_topic_0283137115_p470321219412"></a><a name="en-us_topic_0283137115_p470321219412"></a>int84pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p157035121413"><a name="en-us_topic_0283137115_p157035121413"></a><a name="en-us_topic_0283137115_p157035121413"></a>int8abs</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1070371224113"><a name="en-us_topic_0283137115_p1070371224113"></a><a name="en-us_topic_0283137115_p1070371224113"></a>int8and</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p37031712204118"><a name="en-us_topic_0283137115_p37031712204118"></a><a name="en-us_topic_0283137115_p37031712204118"></a>int8div</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p2070331204118"><a name="en-us_topic_0283137115_p2070331204118"></a><a name="en-us_topic_0283137115_p2070331204118"></a>int8eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p5703112164115"><a name="en-us_topic_0283137115_p5703112164115"></a><a name="en-us_topic_0283137115_p5703112164115"></a>int8ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1470351213414"><a name="en-us_topic_0283137115_p1470351213414"></a><a name="en-us_topic_0283137115_p1470351213414"></a>int8gt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1470316123411"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p5703912164113"><a name="en-us_topic_0283137115_p5703912164113"></a><a name="en-us_topic_0283137115_p5703912164113"></a>int8in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p157031912134115"><a name="en-us_topic_0283137115_p157031912134115"></a><a name="en-us_topic_0283137115_p157031912134115"></a>int8inc</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p197031312134112"><a name="en-us_topic_0283137115_p197031312134112"></a><a name="en-us_topic_0283137115_p197031312134112"></a>int8inc_any</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p15703612124114"><a name="en-us_topic_0283137115_p15703612124114"></a><a name="en-us_topic_0283137115_p15703612124114"></a>int8inc_float8_float8</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p970341294115"><a name="en-us_topic_0283137115_p970341294115"></a><a name="en-us_topic_0283137115_p970341294115"></a>int8larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p12704131216418"><a name="en-us_topic_0283137115_p12704131216418"></a><a name="en-us_topic_0283137115_p12704131216418"></a>int8le</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p7704312124115"><a name="en-us_topic_0283137115_p7704312124115"></a><a name="en-us_topic_0283137115_p7704312124115"></a>int8lt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row12704161217411"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p16704201211417"><a name="en-us_topic_0283137115_p16704201211417"></a><a name="en-us_topic_0283137115_p16704201211417"></a>int8mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p0704712144114"><a name="en-us_topic_0283137115_p0704712144114"></a><a name="en-us_topic_0283137115_p0704712144114"></a>int8mod</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1870418121414"><a name="en-us_topic_0283137115_p1870418121414"></a><a name="en-us_topic_0283137115_p1870418121414"></a>int8mul</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1070451217412"><a name="en-us_topic_0283137115_p1070451217412"></a><a name="en-us_topic_0283137115_p1070451217412"></a>int8ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p9704131220412"><a name="en-us_topic_0283137115_p9704131220412"></a><a name="en-us_topic_0283137115_p9704131220412"></a>int8not</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p47041212174111"><a name="en-us_topic_0283137115_p47041212174111"></a><a name="en-us_topic_0283137115_p47041212174111"></a>int8or</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p87049125416"><a name="en-us_topic_0283137115_p87049125416"></a><a name="en-us_topic_0283137115_p87049125416"></a>int8out</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1970415127414"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p570421214110"><a name="en-us_topic_0283137115_p570421214110"></a><a name="en-us_topic_0283137115_p570421214110"></a>int8pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p13704181217411"><a name="en-us_topic_0283137115_p13704181217411"></a><a name="en-us_topic_0283137115_p13704181217411"></a>int8pl_inet</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p670491212415"><a name="en-us_topic_0283137115_p670491212415"></a><a name="en-us_topic_0283137115_p670491212415"></a>int8range</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1670471214417"><a name="en-us_topic_0283137115_p1670471214417"></a><a name="en-us_topic_0283137115_p1670471214417"></a>int8range_canonical</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p197041612124111"><a name="en-us_topic_0283137115_p197041612124111"></a><a name="en-us_topic_0283137115_p197041612124111"></a>int8range_subdiff</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p107041125412"><a name="en-us_topic_0283137115_p107041125412"></a><a name="en-us_topic_0283137115_p107041125412"></a>int8recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p5704171254110"><a name="en-us_topic_0283137115_p5704171254110"></a><a name="en-us_topic_0283137115_p5704171254110"></a>int8send</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row10704141234110"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p12705151214414"><a name="en-us_topic_0283137115_p12705151214414"></a><a name="en-us_topic_0283137115_p12705151214414"></a>int8shl</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1070519126417"><a name="en-us_topic_0283137115_p1070519126417"></a><a name="en-us_topic_0283137115_p1070519126417"></a>int8shr</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p107051012154111"><a name="en-us_topic_0283137115_p107051012154111"></a><a name="en-us_topic_0283137115_p107051012154111"></a>int8smaller</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p57051012164110"><a name="en-us_topic_0283137115_p57051012164110"></a><a name="en-us_topic_0283137115_p57051012164110"></a>int8um</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p117051412164115"><a name="en-us_topic_0283137115_p117051412164115"></a><a name="en-us_topic_0283137115_p117051412164115"></a>int8up</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p20705111274114"><a name="en-us_topic_0283137115_p20705111274114"></a><a name="en-us_topic_0283137115_p20705111274114"></a>int8xor</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p18705412144110"><a name="en-us_topic_0283137115_p18705412144110"></a><a name="en-us_topic_0283137115_p18705412144110"></a>integer_pl_date</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row117056126417"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p97051512124115"><a name="en-us_topic_0283137115_p97051512124115"></a><a name="en-us_topic_0283137115_p97051512124115"></a>inter_lb</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p270541224110"><a name="en-us_topic_0283137115_p270541224110"></a><a name="en-us_topic_0283137115_p270541224110"></a>inter_sb</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p13705161284117"><a name="en-us_topic_0283137115_p13705161284117"></a><a name="en-us_topic_0283137115_p13705161284117"></a>inter_sl</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p8705101264114"><a name="en-us_topic_0283137115_p8705101264114"></a><a name="en-us_topic_0283137115_p8705101264114"></a>internal_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p167052012114119"><a name="en-us_topic_0283137115_p167052012114119"></a><a name="en-us_topic_0283137115_p167052012114119"></a>internal_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p47051612144120"><a name="en-us_topic_0283137115_p47051612144120"></a><a name="en-us_topic_0283137115_p47051612144120"></a>interval</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p19705161220419"><a name="en-us_topic_0283137115_p19705161220419"></a><a name="en-us_topic_0283137115_p19705161220419"></a>interval_accum</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1470571212415"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p207051112204114"><a name="en-us_topic_0283137115_p207051112204114"></a><a name="en-us_topic_0283137115_p207051112204114"></a>interval_avg</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p137051512204117"><a name="en-us_topic_0283137115_p137051512204117"></a><a name="en-us_topic_0283137115_p137051512204117"></a>interval_cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p19705121212414"><a name="en-us_topic_0283137115_p19705121212414"></a><a name="en-us_topic_0283137115_p19705121212414"></a>interval_collect</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p187051012104111"><a name="en-us_topic_0283137115_p187051012104111"></a><a name="en-us_topic_0283137115_p187051012104111"></a>interval_div</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1370531264119"><a name="en-us_topic_0283137115_p1370531264119"></a><a name="en-us_topic_0283137115_p1370531264119"></a>interval_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p770571284114"><a name="en-us_topic_0283137115_p770571284114"></a><a name="en-us_topic_0283137115_p770571284114"></a>interval_ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1706191214116"><a name="en-us_topic_0283137115_p1706191214116"></a><a name="en-us_topic_0283137115_p1706191214116"></a>interval_gt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row170611217414"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p12706201214418"><a name="en-us_topic_0283137115_p12706201214418"></a><a name="en-us_topic_0283137115_p12706201214418"></a>interval_hash</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1270611122416"><a name="en-us_topic_0283137115_p1270611122416"></a><a name="en-us_topic_0283137115_p1270611122416"></a>interval_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p4706151214111"><a name="en-us_topic_0283137115_p4706151214111"></a><a name="en-us_topic_0283137115_p4706151214111"></a>interval_larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p7706112114116"><a name="en-us_topic_0283137115_p7706112114116"></a><a name="en-us_topic_0283137115_p7706112114116"></a>interval_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p18706131214110"><a name="en-us_topic_0283137115_p18706131214110"></a><a name="en-us_topic_0283137115_p18706131214110"></a>interval_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p177062012174113"><a name="en-us_topic_0283137115_p177062012174113"></a><a name="en-us_topic_0283137115_p177062012174113"></a>interval_mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p170615127411"><a name="en-us_topic_0283137115_p170615127411"></a><a name="en-us_topic_0283137115_p170615127411"></a>interval_mul</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row37063126417"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p3706201210413"><a name="en-us_topic_0283137115_p3706201210413"></a><a name="en-us_topic_0283137115_p3706201210413"></a>interval_ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p8706101244112"><a name="en-us_topic_0283137115_p8706101244112"></a><a name="en-us_topic_0283137115_p8706101244112"></a>interval_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1706151215412"><a name="en-us_topic_0283137115_p1706151215412"></a><a name="en-us_topic_0283137115_p1706151215412"></a>interval_pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p270691254117"><a name="en-us_topic_0283137115_p270691254117"></a><a name="en-us_topic_0283137115_p270691254117"></a>interval_pl_date</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1770661244117"><a name="en-us_topic_0283137115_p1770661244117"></a><a name="en-us_topic_0283137115_p1770661244117"></a>interval_pl_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p67060121419"><a name="en-us_topic_0283137115_p67060121419"></a><a name="en-us_topic_0283137115_p67060121419"></a>interval_pl_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1706181294115"><a name="en-us_topic_0283137115_p1706181294115"></a><a name="en-us_topic_0283137115_p1706181294115"></a>interval_pl_timestamptz</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row147061212134118"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p15706812194120"><a name="en-us_topic_0283137115_p15706812194120"></a><a name="en-us_topic_0283137115_p15706812194120"></a>interval_pl_timetz</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p470611220411"><a name="en-us_topic_0283137115_p470611220411"></a><a name="en-us_topic_0283137115_p470611220411"></a>interval_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p370651224114"><a name="en-us_topic_0283137115_p370651224114"></a><a name="en-us_topic_0283137115_p370651224114"></a>interval_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p8706201264117"><a name="en-us_topic_0283137115_p8706201264117"></a><a name="en-us_topic_0283137115_p8706201264117"></a>interval_smaller</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p170741218414"><a name="en-us_topic_0283137115_p170741218414"></a><a name="en-us_topic_0283137115_p170741218414"></a>interval_transform</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p47072126411"><a name="en-us_topic_0283137115_p47072126411"></a><a name="en-us_topic_0283137115_p47072126411"></a>interval_um</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1970710123417"><a name="en-us_topic_0283137115_p1970710123417"></a><a name="en-us_topic_0283137115_p1970710123417"></a>intervaltypmodin</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row17707161210417"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p16707712194114"><a name="en-us_topic_0283137115_p16707712194114"></a><a name="en-us_topic_0283137115_p16707712194114"></a>intervaltypmodout</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1270710128416"><a name="en-us_topic_0283137115_p1270710128416"></a><a name="en-us_topic_0283137115_p1270710128416"></a>intinterval</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1470751214413"><a name="en-us_topic_0283137115_p1470751214413"></a><a name="en-us_topic_0283137115_p1470751214413"></a>isexists</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1070771211417"><a name="en-us_topic_0283137115_p1070771211417"></a><a name="en-us_topic_0283137115_p1070771211417"></a>ishorizontal</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p187071612104118"><a name="en-us_topic_0283137115_p187071612104118"></a><a name="en-us_topic_0283137115_p187071612104118"></a>iso_to_koi8r</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p15707912104118"><a name="en-us_topic_0283137115_p15707912104118"></a><a name="en-us_topic_0283137115_p15707912104118"></a>iso_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p970713126411"><a name="en-us_topic_0283137115_p970713126411"></a><a name="en-us_topic_0283137115_p970713126411"></a>iso_to_win1251</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row6707212124118"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p9707141294116"><a name="en-us_topic_0283137115_p9707141294116"></a><a name="en-us_topic_0283137115_p9707141294116"></a>iso_to_win866</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p37071012134111"><a name="en-us_topic_0283137115_p37071012134111"></a><a name="en-us_topic_0283137115_p37071012134111"></a>iso8859_1_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p470711212416"><a name="en-us_topic_0283137115_p470711212416"></a><a name="en-us_topic_0283137115_p470711212416"></a>iso8859_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p57073129417"><a name="en-us_topic_0283137115_p57073129417"></a><a name="en-us_topic_0283137115_p57073129417"></a>isparallel</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p570712124417"><a name="en-us_topic_0283137115_p570712124417"></a><a name="en-us_topic_0283137115_p570712124417"></a>isperp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p127071212124113"><a name="en-us_topic_0283137115_p127071212124113"></a><a name="en-us_topic_0283137115_p127071212124113"></a>isvertical</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p16707151215411"><a name="en-us_topic_0283137115_p16707151215411"></a><a name="en-us_topic_0283137115_p16707151215411"></a>johab_to_utf8</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row4707212164120"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p870771234114"><a name="en-us_topic_0283137115_p870771234114"></a><a name="en-us_topic_0283137115_p870771234114"></a>json_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p14707712154110"><a name="en-us_topic_0283137115_p14707712154110"></a><a name="en-us_topic_0283137115_p14707712154110"></a>json_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1170720123415"><a name="en-us_topic_0283137115_p1170720123415"></a><a name="en-us_topic_0283137115_p1170720123415"></a>json_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p16707512144118"><a name="en-us_topic_0283137115_p16707512144118"></a><a name="en-us_topic_0283137115_p16707512144118"></a>json_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p10707161204120"><a name="en-us_topic_0283137115_p10707161204120"></a><a name="en-us_topic_0283137115_p10707161204120"></a>justify_days</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p970711213412"><a name="en-us_topic_0283137115_p970711213412"></a><a name="en-us_topic_0283137115_p970711213412"></a>justify_hours</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p670812122411"><a name="en-us_topic_0283137115_p670812122411"></a><a name="en-us_topic_0283137115_p670812122411"></a>justify_interval</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row2070815128416"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p167083121415"><a name="en-us_topic_0283137115_p167083121415"></a><a name="en-us_topic_0283137115_p167083121415"></a>koi8r_to_iso</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p207089126415"><a name="en-us_topic_0283137115_p207089126415"></a><a name="en-us_topic_0283137115_p207089126415"></a>koi8r_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p2708191264111"><a name="en-us_topic_0283137115_p2708191264111"></a><a name="en-us_topic_0283137115_p2708191264111"></a>koi8r_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p270814126416"><a name="en-us_topic_0283137115_p270814126416"></a><a name="en-us_topic_0283137115_p270814126416"></a>koi8r_to_win1251</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p15708181294110"><a name="en-us_topic_0283137115_p15708181294110"></a><a name="en-us_topic_0283137115_p15708181294110"></a>koi8r_to_win866</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p37081212174113"><a name="en-us_topic_0283137115_p37081212174113"></a><a name="en-us_topic_0283137115_p37081212174113"></a>koi8u_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p070818122417"><a name="en-us_topic_0283137115_p070818122417"></a><a name="en-us_topic_0283137115_p070818122417"></a>language_handler_in</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1470871284114"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p17082012164116"><a name="en-us_topic_0283137115_p17082012164116"></a><a name="en-us_topic_0283137115_p17082012164116"></a>language_handler_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1670851214416"><a name="en-us_topic_0283137115_p1670851214416"></a><a name="en-us_topic_0283137115_p1670851214416"></a>latin1_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p770816125412"><a name="en-us_topic_0283137115_p770816125412"></a><a name="en-us_topic_0283137115_p770816125412"></a>latin2_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p970881212419"><a name="en-us_topic_0283137115_p970881212419"></a><a name="en-us_topic_0283137115_p970881212419"></a>latin2_to_win1250</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p770821218413"><a name="en-us_topic_0283137115_p770821218413"></a><a name="en-us_topic_0283137115_p770821218413"></a>latin3_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p770816122414"><a name="en-us_topic_0283137115_p770816122414"></a><a name="en-us_topic_0283137115_p770816122414"></a>latin4_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p16708412194112"><a name="en-us_topic_0283137115_p16708412194112"></a><a name="en-us_topic_0283137115_p16708412194112"></a>like_escape</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row97087120414"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p870818126418"><a name="en-us_topic_0283137115_p870818126418"></a><a name="en-us_topic_0283137115_p870818126418"></a>likejoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p270851218416"><a name="en-us_topic_0283137115_p270851218416"></a><a name="en-us_topic_0283137115_p270851218416"></a>likesel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p15708121284120"><a name="en-us_topic_0283137115_p15708121284120"></a><a name="en-us_topic_0283137115_p15708121284120"></a>line</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p17708012204110"><a name="en-us_topic_0283137115_p17708012204110"></a><a name="en-us_topic_0283137115_p17708012204110"></a>line_distance</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p770881217419"><a name="en-us_topic_0283137115_p770881217419"></a><a name="en-us_topic_0283137115_p770881217419"></a>line_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1708121244115"><a name="en-us_topic_0283137115_p1708121244115"></a><a name="en-us_topic_0283137115_p1708121244115"></a>line_horizontal</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p127087125414"><a name="en-us_topic_0283137115_p127087125414"></a><a name="en-us_topic_0283137115_p127087125414"></a>line_in</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row107087122410"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p5708141219418"><a name="en-us_topic_0283137115_p5708141219418"></a><a name="en-us_topic_0283137115_p5708141219418"></a>line_interpt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p0709412134114"><a name="en-us_topic_0283137115_p0709412134114"></a><a name="en-us_topic_0283137115_p0709412134114"></a>line_intersect</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p157091612134118"><a name="en-us_topic_0283137115_p157091612134118"></a><a name="en-us_topic_0283137115_p157091612134118"></a>line_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p157092012124118"><a name="en-us_topic_0283137115_p157092012124118"></a><a name="en-us_topic_0283137115_p157092012124118"></a>line_parallel</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1870931212417"><a name="en-us_topic_0283137115_p1870931212417"></a><a name="en-us_topic_0283137115_p1870931212417"></a>line_perp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1970911121417"><a name="en-us_topic_0283137115_p1970911121417"></a><a name="en-us_topic_0283137115_p1970911121417"></a>line_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p57091412184116"><a name="en-us_topic_0283137115_p57091412184116"></a><a name="en-us_topic_0283137115_p57091412184116"></a>line_send</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row14709161274112"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p6709141284118"><a name="en-us_topic_0283137115_p6709141284118"></a><a name="en-us_topic_0283137115_p6709141284118"></a>line_vertical</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p170921220415"><a name="en-us_topic_0283137115_p170921220415"></a><a name="en-us_topic_0283137115_p170921220415"></a>ln</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p16709111284116"><a name="en-us_topic_0283137115_p16709111284116"></a><a name="en-us_topic_0283137115_p16709111284116"></a>lo_close</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p18709151224116"><a name="en-us_topic_0283137115_p18709151224116"></a><a name="en-us_topic_0283137115_p18709151224116"></a>lo_creat</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p13709131210412"><a name="en-us_topic_0283137115_p13709131210412"></a><a name="en-us_topic_0283137115_p13709131210412"></a>lo_create</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p11709171220419"><a name="en-us_topic_0283137115_p11709171220419"></a><a name="en-us_topic_0283137115_p11709171220419"></a>lo_export</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p8709171254113"><a name="en-us_topic_0283137115_p8709171254113"></a><a name="en-us_topic_0283137115_p8709171254113"></a>lo_import</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row2070911214418"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p67091512174116"><a name="en-us_topic_0283137115_p67091512174116"></a><a name="en-us_topic_0283137115_p67091512174116"></a>lo_lseek</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p87092124415"><a name="en-us_topic_0283137115_p87092124415"></a><a name="en-us_topic_0283137115_p87092124415"></a>lo_open</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p5709012184119"><a name="en-us_topic_0283137115_p5709012184119"></a><a name="en-us_topic_0283137115_p5709012184119"></a>lo_tell</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p3709191264115"><a name="en-us_topic_0283137115_p3709191264115"></a><a name="en-us_topic_0283137115_p3709191264115"></a>lo_truncate</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p19709512184115"><a name="en-us_topic_0283137115_p19709512184115"></a><a name="en-us_topic_0283137115_p19709512184115"></a>lo_unlink</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p77096127411"><a name="en-us_topic_0283137115_p77096127411"></a><a name="en-us_topic_0283137115_p77096127411"></a>log</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1570911224116"><a name="en-us_topic_0283137115_p1570911224116"></a><a name="en-us_topic_0283137115_p1570911224116"></a>loread</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1370931220410"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1870917128417"><a name="en-us_topic_0283137115_p1870917128417"></a><a name="en-us_topic_0283137115_p1870917128417"></a>lower</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1770914121410"><a name="en-us_topic_0283137115_p1770914121410"></a><a name="en-us_topic_0283137115_p1770914121410"></a>lower_inc</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p3709201214118"><a name="en-us_topic_0283137115_p3709201214118"></a><a name="en-us_topic_0283137115_p3709201214118"></a>lower_inf</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p177101612204115"><a name="en-us_topic_0283137115_p177101612204115"></a><a name="en-us_topic_0283137115_p177101612204115"></a>lowrite</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1771031216417"><a name="en-us_topic_0283137115_p1771031216417"></a><a name="en-us_topic_0283137115_p1771031216417"></a>lpad</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p87105129410"><a name="en-us_topic_0283137115_p87105129410"></a><a name="en-us_topic_0283137115_p87105129410"></a>lseg</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1671081217411"><a name="en-us_topic_0283137115_p1671081217411"></a><a name="en-us_topic_0283137115_p1671081217411"></a>lseg_center</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1271021218418"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1371017123418"><a name="en-us_topic_0283137115_p1371017123418"></a><a name="en-us_topic_0283137115_p1371017123418"></a>lseg_distance</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1710141215413"><a name="en-us_topic_0283137115_p1710141215413"></a><a name="en-us_topic_0283137115_p1710141215413"></a>lseg_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1671031220413"><a name="en-us_topic_0283137115_p1671031220413"></a><a name="en-us_topic_0283137115_p1671031220413"></a>lseg_ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p147101912114113"><a name="en-us_topic_0283137115_p147101912114113"></a><a name="en-us_topic_0283137115_p147101912114113"></a>lseg_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1371041294119"><a name="en-us_topic_0283137115_p1371041294119"></a><a name="en-us_topic_0283137115_p1371041294119"></a>lseg_horizontal</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1171011204118"><a name="en-us_topic_0283137115_p1171011204118"></a><a name="en-us_topic_0283137115_p1171011204118"></a>lseg_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p2710181215416"><a name="en-us_topic_0283137115_p2710181215416"></a><a name="en-us_topic_0283137115_p2710181215416"></a>lseg_interpt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row16710212144114"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p20710181234114"><a name="en-us_topic_0283137115_p20710181234114"></a><a name="en-us_topic_0283137115_p20710181234114"></a>lseg_intersect</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p9710101274117"><a name="en-us_topic_0283137115_p9710101274117"></a><a name="en-us_topic_0283137115_p9710101274117"></a>lseg_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p171041215416"><a name="en-us_topic_0283137115_p171041215416"></a><a name="en-us_topic_0283137115_p171041215416"></a>lseg_length</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p8710191264118"><a name="en-us_topic_0283137115_p8710191264118"></a><a name="en-us_topic_0283137115_p8710191264118"></a>lseg_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p47101612154112"><a name="en-us_topic_0283137115_p47101612154112"></a><a name="en-us_topic_0283137115_p47101612154112"></a>lseg_ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1071014129417"><a name="en-us_topic_0283137115_p1071014129417"></a><a name="en-us_topic_0283137115_p1071014129417"></a>lseg_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1971091224116"><a name="en-us_topic_0283137115_p1971091224116"></a><a name="en-us_topic_0283137115_p1971091224116"></a>lseg_parallel</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row13710912204111"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p19710171234120"><a name="en-us_topic_0283137115_p19710171234120"></a><a name="en-us_topic_0283137115_p19710171234120"></a>lseg_perp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p471081214411"><a name="en-us_topic_0283137115_p471081214411"></a><a name="en-us_topic_0283137115_p471081214411"></a>lseg_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p13710512164112"><a name="en-us_topic_0283137115_p13710512164112"></a><a name="en-us_topic_0283137115_p13710512164112"></a>lseg_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1071021218417"><a name="en-us_topic_0283137115_p1071021218417"></a><a name="en-us_topic_0283137115_p1071021218417"></a>lseg_vertical</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1971031211417"><a name="en-us_topic_0283137115_p1971031211417"></a><a name="en-us_topic_0283137115_p1971031211417"></a>ltrim</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p7710191213410"><a name="en-us_topic_0283137115_p7710191213410"></a><a name="en-us_topic_0283137115_p7710191213410"></a>macaddr_and</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p471141214118"><a name="en-us_topic_0283137115_p471141214118"></a><a name="en-us_topic_0283137115_p471141214118"></a>macaddr_cmp</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row471115120417"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p14711121216412"><a name="en-us_topic_0283137115_p14711121216412"></a><a name="en-us_topic_0283137115_p14711121216412"></a>macaddr_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p127111812164117"><a name="en-us_topic_0283137115_p127111812164117"></a><a name="en-us_topic_0283137115_p127111812164117"></a>macaddr_ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p137119127413"><a name="en-us_topic_0283137115_p137119127413"></a><a name="en-us_topic_0283137115_p137119127413"></a>macaddr_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p77112125419"><a name="en-us_topic_0283137115_p77112125419"></a><a name="en-us_topic_0283137115_p77112125419"></a>macaddr_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p17711141216412"><a name="en-us_topic_0283137115_p17711141216412"></a><a name="en-us_topic_0283137115_p17711141216412"></a>macaddr_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p57111129412"><a name="en-us_topic_0283137115_p57111129412"></a><a name="en-us_topic_0283137115_p57111129412"></a>macaddr_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1771110125419"><a name="en-us_topic_0283137115_p1771110125419"></a><a name="en-us_topic_0283137115_p1771110125419"></a>macaddr_ne</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row2711312114111"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p177118121411"><a name="en-us_topic_0283137115_p177118121411"></a><a name="en-us_topic_0283137115_p177118121411"></a>macaddr_not</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1871171234117"><a name="en-us_topic_0283137115_p1871171234117"></a><a name="en-us_topic_0283137115_p1871171234117"></a>macaddr_or</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p127111212194115"><a name="en-us_topic_0283137115_p127111212194115"></a><a name="en-us_topic_0283137115_p127111212194115"></a>macaddr_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1711412154112"><a name="en-us_topic_0283137115_p1711412154112"></a><a name="en-us_topic_0283137115_p1711412154112"></a>macaddr_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p671113127414"><a name="en-us_topic_0283137115_p671113127414"></a><a name="en-us_topic_0283137115_p671113127414"></a>macaddr_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1971171264111"><a name="en-us_topic_0283137115_p1971171264111"></a><a name="en-us_topic_0283137115_p1971171264111"></a>makeaclitem</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1471191216412"><a name="en-us_topic_0283137115_p1471191216412"></a><a name="en-us_topic_0283137115_p1471191216412"></a>masklen</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row5711111284111"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p171151274119"><a name="en-us_topic_0283137115_p171151274119"></a><a name="en-us_topic_0283137115_p171151274119"></a>max</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p17711612154116"><a name="en-us_topic_0283137115_p17711612154116"></a><a name="en-us_topic_0283137115_p17711612154116"></a>md5</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p14711312104113"><a name="en-us_topic_0283137115_p14711312104113"></a><a name="en-us_topic_0283137115_p14711312104113"></a>mic_to_big5</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1871151244118"><a name="en-us_topic_0283137115_p1871151244118"></a><a name="en-us_topic_0283137115_p1871151244118"></a>mic_to_euc_cn</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p187112012124120"><a name="en-us_topic_0283137115_p187112012124120"></a><a name="en-us_topic_0283137115_p187112012124120"></a>mic_to_euc_jp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p14711912164119"><a name="en-us_topic_0283137115_p14711912164119"></a><a name="en-us_topic_0283137115_p14711912164119"></a>mic_to_euc_kr</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1771112128413"><a name="en-us_topic_0283137115_p1771112128413"></a><a name="en-us_topic_0283137115_p1771112128413"></a>mic_to_euc_tw</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row47113121410"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p3712312154119"><a name="en-us_topic_0283137115_p3712312154119"></a><a name="en-us_topic_0283137115_p3712312154119"></a>mic_to_iso</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1971201254118"><a name="en-us_topic_0283137115_p1971201254118"></a><a name="en-us_topic_0283137115_p1971201254118"></a>mic_to_koi8r</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p18712181254115"><a name="en-us_topic_0283137115_p18712181254115"></a><a name="en-us_topic_0283137115_p18712181254115"></a>mic_to_latin1</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p187121412114120"><a name="en-us_topic_0283137115_p187121412114120"></a><a name="en-us_topic_0283137115_p187121412114120"></a>mic_to_latin2</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p15712112174112"><a name="en-us_topic_0283137115_p15712112174112"></a><a name="en-us_topic_0283137115_p15712112174112"></a>mic_to_latin3</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1871261214415"><a name="en-us_topic_0283137115_p1871261214415"></a><a name="en-us_topic_0283137115_p1871261214415"></a>mic_to_latin4</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1771251254119"><a name="en-us_topic_0283137115_p1771251254119"></a><a name="en-us_topic_0283137115_p1771251254119"></a>mic_to_sjis</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row18712141214411"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p167120126418"><a name="en-us_topic_0283137115_p167120126418"></a><a name="en-us_topic_0283137115_p167120126418"></a>mic_to_win1250</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1371211254111"><a name="en-us_topic_0283137115_p1371211254111"></a><a name="en-us_topic_0283137115_p1371211254111"></a>mic_to_win1251</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p3712141204119"><a name="en-us_topic_0283137115_p3712141204119"></a><a name="en-us_topic_0283137115_p3712141204119"></a>mic_to_win866</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p6712101213417"><a name="en-us_topic_0283137115_p6712101213417"></a><a name="en-us_topic_0283137115_p6712101213417"></a>min</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p13712101220415"><a name="en-us_topic_0283137115_p13712101220415"></a><a name="en-us_topic_0283137115_p13712101220415"></a>mktinterval</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p167122012104112"><a name="en-us_topic_0283137115_p167122012104112"></a><a name="en-us_topic_0283137115_p167122012104112"></a>money</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1771261211413"><a name="en-us_topic_0283137115_p1771261211413"></a><a name="en-us_topic_0283137115_p1771261211413"></a>mul_d_interval</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row117121128412"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p10712512124110"><a name="en-us_topic_0283137115_p10712512124110"></a><a name="en-us_topic_0283137115_p10712512124110"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p187126123410"><a name="en-us_topic_0283137115_p187126123410"></a><a name="en-us_topic_0283137115_p187126123410"></a>nameeq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p371215128419"><a name="en-us_topic_0283137115_p371215128419"></a><a name="en-us_topic_0283137115_p371215128419"></a>namege</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p7712101284117"><a name="en-us_topic_0283137115_p7712101284117"></a><a name="en-us_topic_0283137115_p7712101284117"></a>namegt</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1171251213411"><a name="en-us_topic_0283137115_p1171251213411"></a><a name="en-us_topic_0283137115_p1171251213411"></a>nameiclike</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p571261219419"><a name="en-us_topic_0283137115_p571261219419"></a><a name="en-us_topic_0283137115_p571261219419"></a>nameicnlike</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p9712912194111"><a name="en-us_topic_0283137115_p9712912194111"></a><a name="en-us_topic_0283137115_p9712912194111"></a>nameicregexeq</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row127129126418"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p11712171204112"><a name="en-us_topic_0283137115_p11712171204112"></a><a name="en-us_topic_0283137115_p11712171204112"></a>nameicregexne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p37121412134111"><a name="en-us_topic_0283137115_p37121412134111"></a><a name="en-us_topic_0283137115_p37121412134111"></a>namein</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p11712612194114"><a name="en-us_topic_0283137115_p11712612194114"></a><a name="en-us_topic_0283137115_p11712612194114"></a>namele</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1371319123414"><a name="en-us_topic_0283137115_p1371319123414"></a><a name="en-us_topic_0283137115_p1371319123414"></a>namelike</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p187137127413"><a name="en-us_topic_0283137115_p187137127413"></a><a name="en-us_topic_0283137115_p187137127413"></a>namelt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p9713812134115"><a name="en-us_topic_0283137115_p9713812134115"></a><a name="en-us_topic_0283137115_p9713812134115"></a>namene</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p7713101216417"><a name="en-us_topic_0283137115_p7713101216417"></a><a name="en-us_topic_0283137115_p7713101216417"></a>namenlike</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row9713111214419"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p771313121410"><a name="en-us_topic_0283137115_p771313121410"></a><a name="en-us_topic_0283137115_p771313121410"></a>nameout</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p5713912124118"><a name="en-us_topic_0283137115_p5713912124118"></a><a name="en-us_topic_0283137115_p5713912124118"></a>namerecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p13713101215410"><a name="en-us_topic_0283137115_p13713101215410"></a><a name="en-us_topic_0283137115_p13713101215410"></a>nameregexeq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1713141214414"><a name="en-us_topic_0283137115_p1713141214414"></a><a name="en-us_topic_0283137115_p1713141214414"></a>nameregexne</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p12713141214113"><a name="en-us_topic_0283137115_p12713141214113"></a><a name="en-us_topic_0283137115_p12713141214113"></a>namesend</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1471391234118"><a name="en-us_topic_0283137115_p1471391234118"></a><a name="en-us_topic_0283137115_p1471391234118"></a>neqjoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p16713161213419"><a name="en-us_topic_0283137115_p16713161213419"></a><a name="en-us_topic_0283137115_p16713161213419"></a>neqsel</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row871310129411"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1171312128412"><a name="en-us_topic_0283137115_p1171312128412"></a><a name="en-us_topic_0283137115_p1171312128412"></a>network_cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1671391210413"><a name="en-us_topic_0283137115_p1671391210413"></a><a name="en-us_topic_0283137115_p1671391210413"></a>network_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p8713151212416"><a name="en-us_topic_0283137115_p8713151212416"></a><a name="en-us_topic_0283137115_p8713151212416"></a>network_ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p127131812104112"><a name="en-us_topic_0283137115_p127131812104112"></a><a name="en-us_topic_0283137115_p127131812104112"></a>network_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p271311284110"><a name="en-us_topic_0283137115_p271311284110"></a><a name="en-us_topic_0283137115_p271311284110"></a>network_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p2713161274118"><a name="en-us_topic_0283137115_p2713161274118"></a><a name="en-us_topic_0283137115_p2713161274118"></a>network_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1471381217418"><a name="en-us_topic_0283137115_p1471381217418"></a><a name="en-us_topic_0283137115_p1471381217418"></a>network_ne</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1271301219419"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p47131412124110"><a name="en-us_topic_0283137115_p47131412124110"></a><a name="en-us_topic_0283137115_p47131412124110"></a>network_sub</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p5713111220414"><a name="en-us_topic_0283137115_p5713111220414"></a><a name="en-us_topic_0283137115_p5713111220414"></a>network_subeq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p171331204118"><a name="en-us_topic_0283137115_p171331204118"></a><a name="en-us_topic_0283137115_p171331204118"></a>network_sup</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p137131012184112"><a name="en-us_topic_0283137115_p137131012184112"></a><a name="en-us_topic_0283137115_p137131012184112"></a>network_supeq</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p10713712174112"><a name="en-us_topic_0283137115_p10713712174112"></a><a name="en-us_topic_0283137115_p10713712174112"></a>nlikejoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p17714412164111"><a name="en-us_topic_0283137115_p17714412164111"></a><a name="en-us_topic_0283137115_p17714412164111"></a>nlikesel</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p17714131264115"><a name="en-us_topic_0283137115_p17714131264115"></a><a name="en-us_topic_0283137115_p17714131264115"></a>numeric</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row77141612144110"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1771491224110"><a name="en-us_topic_0283137115_p1771491224110"></a><a name="en-us_topic_0283137115_p1771491224110"></a>numeric_abs</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p571415127417"><a name="en-us_topic_0283137115_p571415127417"></a><a name="en-us_topic_0283137115_p571415127417"></a>numeric_accum</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p16714101212417"><a name="en-us_topic_0283137115_p16714101212417"></a><a name="en-us_topic_0283137115_p16714101212417"></a>numeric_add</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p177144128417"><a name="en-us_topic_0283137115_p177144128417"></a><a name="en-us_topic_0283137115_p177144128417"></a>numeric_avg</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1071411127418"><a name="en-us_topic_0283137115_p1071411127418"></a><a name="en-us_topic_0283137115_p1071411127418"></a>numeric_avg_accum</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p147141612194114"><a name="en-us_topic_0283137115_p147141612194114"></a><a name="en-us_topic_0283137115_p147141612194114"></a>numeric_avg_collect</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p17714191219415"><a name="en-us_topic_0283137115_p17714191219415"></a><a name="en-us_topic_0283137115_p17714191219415"></a>numeric_cmp</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row2071411127418"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p271461284118"><a name="en-us_topic_0283137115_p271461284118"></a><a name="en-us_topic_0283137115_p271461284118"></a>numeric_collect</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p2714141294119"><a name="en-us_topic_0283137115_p2714141294119"></a><a name="en-us_topic_0283137115_p2714141294119"></a>numeric_div</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p071414124419"><a name="en-us_topic_0283137115_p071414124419"></a><a name="en-us_topic_0283137115_p071414124419"></a>numeric_div_trunc</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p57141912134112"><a name="en-us_topic_0283137115_p57141912134112"></a><a name="en-us_topic_0283137115_p57141912134112"></a>numeric_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1271471212416"><a name="en-us_topic_0283137115_p1271471212416"></a><a name="en-us_topic_0283137115_p1271471212416"></a>numeric_exp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p67149127417"><a name="en-us_topic_0283137115_p67149127417"></a><a name="en-us_topic_0283137115_p67149127417"></a>numeric_fac</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p107141812174118"><a name="en-us_topic_0283137115_p107141812174118"></a><a name="en-us_topic_0283137115_p107141812174118"></a>numeric_ge</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row6714812104111"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p167141712134114"><a name="en-us_topic_0283137115_p167141712134114"></a><a name="en-us_topic_0283137115_p167141712134114"></a>numeric_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p147149127410"><a name="en-us_topic_0283137115_p147149127410"></a><a name="en-us_topic_0283137115_p147149127410"></a>numeric_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p2071491204119"><a name="en-us_topic_0283137115_p2071491204119"></a><a name="en-us_topic_0283137115_p2071491204119"></a>numeric_inc</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p12714312174115"><a name="en-us_topic_0283137115_p12714312174115"></a><a name="en-us_topic_0283137115_p12714312174115"></a>numeric_larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p67141012194117"><a name="en-us_topic_0283137115_p67141012194117"></a><a name="en-us_topic_0283137115_p67141012194117"></a>numeric_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p271461234111"><a name="en-us_topic_0283137115_p271461234111"></a><a name="en-us_topic_0283137115_p271461234111"></a>numeric_ln</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1671451234115"><a name="en-us_topic_0283137115_p1671451234115"></a><a name="en-us_topic_0283137115_p1671451234115"></a>numeric_log</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row17714012144117"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p57151312154118"><a name="en-us_topic_0283137115_p57151312154118"></a><a name="en-us_topic_0283137115_p57151312154118"></a>numeric_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p2071531215417"><a name="en-us_topic_0283137115_p2071531215417"></a><a name="en-us_topic_0283137115_p2071531215417"></a>numeric_mod</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p271571204111"><a name="en-us_topic_0283137115_p271571204111"></a><a name="en-us_topic_0283137115_p271571204111"></a>numeric_mul</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p0715151219419"><a name="en-us_topic_0283137115_p0715151219419"></a><a name="en-us_topic_0283137115_p0715151219419"></a>numeric_ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p2715012194117"><a name="en-us_topic_0283137115_p2715012194117"></a><a name="en-us_topic_0283137115_p2715012194117"></a>numeric_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p187151112164113"><a name="en-us_topic_0283137115_p187151112164113"></a><a name="en-us_topic_0283137115_p187151112164113"></a>numeric_power</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1371521274119"><a name="en-us_topic_0283137115_p1371521274119"></a><a name="en-us_topic_0283137115_p1371521274119"></a>numeric_recv</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1471581274116"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p971531214112"><a name="en-us_topic_0283137115_p971531214112"></a><a name="en-us_topic_0283137115_p971531214112"></a>numeric_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p87155124416"><a name="en-us_topic_0283137115_p87155124416"></a><a name="en-us_topic_0283137115_p87155124416"></a>numeric_smaller</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p771591215413"><a name="en-us_topic_0283137115_p771591215413"></a><a name="en-us_topic_0283137115_p771591215413"></a>numeric_sortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p147153124415"><a name="en-us_topic_0283137115_p147153124415"></a><a name="en-us_topic_0283137115_p147153124415"></a>numeric_sqrt</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p071521234118"><a name="en-us_topic_0283137115_p071521234118"></a><a name="en-us_topic_0283137115_p071521234118"></a>numeric_stddev_pop</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p471521214116"><a name="en-us_topic_0283137115_p471521214116"></a><a name="en-us_topic_0283137115_p471521214116"></a>numeric_stddev_samp</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p771510121412"><a name="en-us_topic_0283137115_p771510121412"></a><a name="en-us_topic_0283137115_p771510121412"></a>numeric_sub</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row10715171244113"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p197151312114110"><a name="en-us_topic_0283137115_p197151312114110"></a><a name="en-us_topic_0283137115_p197151312114110"></a>numeric_transform</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p171531214418"><a name="en-us_topic_0283137115_p171531214418"></a><a name="en-us_topic_0283137115_p171531214418"></a>numeric_uminus</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p147151212194116"><a name="en-us_topic_0283137115_p147151212194116"></a><a name="en-us_topic_0283137115_p147151212194116"></a>numeric_uplus</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1071517121418"><a name="en-us_topic_0283137115_p1071517121418"></a><a name="en-us_topic_0283137115_p1071517121418"></a>numeric_var_pop</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p14715312164116"><a name="en-us_topic_0283137115_p14715312164116"></a><a name="en-us_topic_0283137115_p14715312164116"></a>numeric_var_samp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p371541214114"><a name="en-us_topic_0283137115_p371541214114"></a><a name="en-us_topic_0283137115_p371541214114"></a>numerictypmodin</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p4715151218417"><a name="en-us_topic_0283137115_p4715151218417"></a><a name="en-us_topic_0283137115_p4715151218417"></a>numerictypmodout</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row11715181218412"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1571591219416"><a name="en-us_topic_0283137115_p1571591219416"></a><a name="en-us_topic_0283137115_p1571591219416"></a>numrange_subdiff</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p0716111234116"><a name="en-us_topic_0283137115_p0716111234116"></a><a name="en-us_topic_0283137115_p0716111234116"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1471651212413"><a name="en-us_topic_0283137115_p1471651212413"></a><a name="en-us_topic_0283137115_p1471651212413"></a>oideq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p771612125414"><a name="en-us_topic_0283137115_p771612125414"></a><a name="en-us_topic_0283137115_p771612125414"></a>oidge</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p5716112134111"><a name="en-us_topic_0283137115_p5716112134111"></a><a name="en-us_topic_0283137115_p5716112134111"></a>oidgt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p4716201211418"><a name="en-us_topic_0283137115_p4716201211418"></a><a name="en-us_topic_0283137115_p4716201211418"></a>oidin</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p77161912114118"><a name="en-us_topic_0283137115_p77161912114118"></a><a name="en-us_topic_0283137115_p77161912114118"></a>oidlarger</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row15716181294112"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p10716612104119"><a name="en-us_topic_0283137115_p10716612104119"></a><a name="en-us_topic_0283137115_p10716612104119"></a>oidle</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1716612104112"><a name="en-us_topic_0283137115_p1716612104112"></a><a name="en-us_topic_0283137115_p1716612104112"></a>oidlt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p11716012134117"><a name="en-us_topic_0283137115_p11716012134117"></a><a name="en-us_topic_0283137115_p11716012134117"></a>oidne</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p15716101264113"><a name="en-us_topic_0283137115_p15716101264113"></a><a name="en-us_topic_0283137115_p15716101264113"></a>oidout</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p3716012184113"><a name="en-us_topic_0283137115_p3716012184113"></a><a name="en-us_topic_0283137115_p3716012184113"></a>oidrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p8716151217417"><a name="en-us_topic_0283137115_p8716151217417"></a><a name="en-us_topic_0283137115_p8716151217417"></a>oidsend</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p471621219413"><a name="en-us_topic_0283137115_p471621219413"></a><a name="en-us_topic_0283137115_p471621219413"></a>oidsmaller</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1871617127413"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p197161812174115"><a name="en-us_topic_0283137115_p197161812174115"></a><a name="en-us_topic_0283137115_p197161812174115"></a>oidvectoreq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p167161912104112"><a name="en-us_topic_0283137115_p167161912104112"></a><a name="en-us_topic_0283137115_p167161912104112"></a>oidvectorge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1271610122412"><a name="en-us_topic_0283137115_p1271610122412"></a><a name="en-us_topic_0283137115_p1271610122412"></a>oidvectorgt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p10716121254115"><a name="en-us_topic_0283137115_p10716121254115"></a><a name="en-us_topic_0283137115_p10716121254115"></a>oidvectorin</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p371661220419"><a name="en-us_topic_0283137115_p371661220419"></a><a name="en-us_topic_0283137115_p371661220419"></a>oidvectorle</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p771616126418"><a name="en-us_topic_0283137115_p771616126418"></a><a name="en-us_topic_0283137115_p771616126418"></a>oidvectorlt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p971681211413"><a name="en-us_topic_0283137115_p971681211413"></a><a name="en-us_topic_0283137115_p971681211413"></a>oidvectorne</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row371651274111"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p871641274113"><a name="en-us_topic_0283137115_p871641274113"></a><a name="en-us_topic_0283137115_p871641274113"></a>oidvectorout</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p4716201224115"><a name="en-us_topic_0283137115_p4716201224115"></a><a name="en-us_topic_0283137115_p4716201224115"></a>oidvectorrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p4716131224113"><a name="en-us_topic_0283137115_p4716131224113"></a><a name="en-us_topic_0283137115_p4716131224113"></a>oidvectorsend</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p17162012194110"><a name="en-us_topic_0283137115_p17162012194110"></a><a name="en-us_topic_0283137115_p17162012194110"></a>oidvectortypes</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p0717161214413"><a name="en-us_topic_0283137115_p0717161214413"></a><a name="en-us_topic_0283137115_p0717161214413"></a>on_pb</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1671761244115"><a name="en-us_topic_0283137115_p1671761244115"></a><a name="en-us_topic_0283137115_p1671761244115"></a>on_pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p18717171284118"><a name="en-us_topic_0283137115_p18717171284118"></a><a name="en-us_topic_0283137115_p18717171284118"></a>on_ppath</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1371771254113"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p97171012174111"><a name="en-us_topic_0283137115_p97171012174111"></a><a name="en-us_topic_0283137115_p97171012174111"></a>on_ps</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p47171112174111"><a name="en-us_topic_0283137115_p47171112174111"></a><a name="en-us_topic_0283137115_p47171112174111"></a>on_sb</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p0717121212414"><a name="en-us_topic_0283137115_p0717121212414"></a><a name="en-us_topic_0283137115_p0717121212414"></a>on_sl</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1471791216411"><a name="en-us_topic_0283137115_p1471791216411"></a><a name="en-us_topic_0283137115_p1471791216411"></a>opaque_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1271791254110"><a name="en-us_topic_0283137115_p1271791254110"></a><a name="en-us_topic_0283137115_p1271791254110"></a>opaque_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p37175126418"><a name="en-us_topic_0283137115_p37175126418"></a><a name="en-us_topic_0283137115_p37175126418"></a>ordered_set_transition</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p12717181264115"><a name="en-us_topic_0283137115_p12717181264115"></a><a name="en-us_topic_0283137115_p12717181264115"></a>overlaps</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row471751254115"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p107173125417"><a name="en-us_topic_0283137115_p107173125417"></a><a name="en-us_topic_0283137115_p107173125417"></a>overlay</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p3717612164111"><a name="en-us_topic_0283137115_p3717612164111"></a><a name="en-us_topic_0283137115_p3717612164111"></a>path</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p57172129418"><a name="en-us_topic_0283137115_p57172129418"></a><a name="en-us_topic_0283137115_p57172129418"></a>path_add</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1717012114112"><a name="en-us_topic_0283137115_p1717012114112"></a><a name="en-us_topic_0283137115_p1717012114112"></a>path_add_pt</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p10717111204114"><a name="en-us_topic_0283137115_p10717111204114"></a><a name="en-us_topic_0283137115_p10717111204114"></a>path_center</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p147172123416"><a name="en-us_topic_0283137115_p147172123416"></a><a name="en-us_topic_0283137115_p147172123416"></a>path_contain_pt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p13717121213419"><a name="en-us_topic_0283137115_p13717121213419"></a><a name="en-us_topic_0283137115_p13717121213419"></a>path_distance</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row6717181204115"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p87171912124113"><a name="en-us_topic_0283137115_p87171912124113"></a><a name="en-us_topic_0283137115_p87171912124113"></a>path_div_pt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p57171512124117"><a name="en-us_topic_0283137115_p57171512124117"></a><a name="en-us_topic_0283137115_p57171512124117"></a>path_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1571791244117"><a name="en-us_topic_0283137115_p1571791244117"></a><a name="en-us_topic_0283137115_p1571791244117"></a>path_inter</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p197170126413"><a name="en-us_topic_0283137115_p197170126413"></a><a name="en-us_topic_0283137115_p197170126413"></a>path_length</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p871841213411"><a name="en-us_topic_0283137115_p871841213411"></a><a name="en-us_topic_0283137115_p871841213411"></a>path_mul_pt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p18718812184113"><a name="en-us_topic_0283137115_p18718812184113"></a><a name="en-us_topic_0283137115_p18718812184113"></a>path_n_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p271817129410"><a name="en-us_topic_0283137115_p271817129410"></a><a name="en-us_topic_0283137115_p271817129410"></a>path_n_ge</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row137181612104118"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p6718171254116"><a name="en-us_topic_0283137115_p6718171254116"></a><a name="en-us_topic_0283137115_p6718171254116"></a>path_n_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p137181126419"><a name="en-us_topic_0283137115_p137181126419"></a><a name="en-us_topic_0283137115_p137181126419"></a>path_n_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p6718171210414"><a name="en-us_topic_0283137115_p6718171210414"></a><a name="en-us_topic_0283137115_p6718171210414"></a>path_n_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p17718151254116"><a name="en-us_topic_0283137115_p17718151254116"></a><a name="en-us_topic_0283137115_p17718151254116"></a>path_npoints</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1671851274112"><a name="en-us_topic_0283137115_p1671851274112"></a><a name="en-us_topic_0283137115_p1671851274112"></a>path_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p071821220419"><a name="en-us_topic_0283137115_p071821220419"></a><a name="en-us_topic_0283137115_p071821220419"></a>path_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p7719131220413"><a name="en-us_topic_0283137115_p7719131220413"></a><a name="en-us_topic_0283137115_p7719131220413"></a>path_send</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row127191112144117"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p12719412184113"><a name="en-us_topic_0283137115_p12719412184113"></a><a name="en-us_topic_0283137115_p12719412184113"></a>path_sub_pt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p13719111254113"><a name="en-us_topic_0283137115_p13719111254113"></a><a name="en-us_topic_0283137115_p13719111254113"></a>percentile_cont</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p57191312154111"><a name="en-us_topic_0283137115_p57191312154111"></a><a name="en-us_topic_0283137115_p57191312154111"></a>percentile_cont_float8_final</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p2719131224110"><a name="en-us_topic_0283137115_p2719131224110"></a><a name="en-us_topic_0283137115_p2719131224110"></a>percentile_cont_interval_final</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1471911274118"><a name="en-us_topic_0283137115_p1471911274118"></a><a name="en-us_topic_0283137115_p1471911274118"></a>pg_char_to_encoding</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p9719212114114"><a name="en-us_topic_0283137115_p9719212114114"></a><a name="en-us_topic_0283137115_p9719212114114"></a>pg_cursor</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1371951224118"><a name="en-us_topic_0283137115_p1371951224118"></a><a name="en-us_topic_0283137115_p1371951224118"></a>pg_encoding_max_length</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row19719161294118"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p77195127419"><a name="en-us_topic_0283137115_p77195127419"></a><a name="en-us_topic_0283137115_p77195127419"></a>pg_encoding_to_char</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p27191512184111"><a name="en-us_topic_0283137115_p27191512184111"></a><a name="en-us_topic_0283137115_p27191512184111"></a>pg_extension_config_dump</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p87191512134115"><a name="en-us_topic_0283137115_p87191512134115"></a><a name="en-us_topic_0283137115_p87191512134115"></a>pg_logical_slot_get_binary_changes</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p57191712104120"><a name="en-us_topic_0283137115_p57191712104120"></a><a name="en-us_topic_0283137115_p57191712104120"></a>pg_logical_slot_peek_binary_changes</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p13719181254111"><a name="en-us_topic_0283137115_p13719181254111"></a><a name="en-us_topic_0283137115_p13719181254111"></a>pg_node_tree_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1771971234112"><a name="en-us_topic_0283137115_p1771971234112"></a><a name="en-us_topic_0283137115_p1771971234112"></a>pg_node_tree_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p207191812124113"><a name="en-us_topic_0283137115_p207191812124113"></a><a name="en-us_topic_0283137115_p207191812124113"></a>pg_node_tree_recv</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1871920121414"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p271912123414"><a name="en-us_topic_0283137115_p271912123414"></a><a name="en-us_topic_0283137115_p271912123414"></a>pg_node_tree_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1771921215410"><a name="en-us_topic_0283137115_p1771921215410"></a><a name="en-us_topic_0283137115_p1771921215410"></a>pg_prepared_statement</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p7719312154112"><a name="en-us_topic_0283137115_p7719312154112"></a><a name="en-us_topic_0283137115_p7719312154112"></a>pg_prepared_xact</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p15719121224119"><a name="en-us_topic_0283137115_p15719121224119"></a><a name="en-us_topic_0283137115_p15719121224119"></a>pg_read_binary_file_all</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1719171215416"><a name="en-us_topic_0283137115_p1719171215416"></a><a name="en-us_topic_0283137115_p1719171215416"></a>pg_read_file_all</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p17719112174113"><a name="en-us_topic_0283137115_p17719112174113"></a><a name="en-us_topic_0283137115_p17719112174113"></a>pg_show_all_settings</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1719121284119"><a name="en-us_topic_0283137115_p1719121284119"></a><a name="en-us_topic_0283137115_p1719121284119"></a>pg_stat_get_bgwriter_stat_reset_time</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row571915129414"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1772071211412"><a name="en-us_topic_0283137115_p1772071211412"></a><a name="en-us_topic_0283137115_p1772071211412"></a>pg_stat_get_buf_fsync_backend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1972081224114"><a name="en-us_topic_0283137115_p1972081224114"></a><a name="en-us_topic_0283137115_p1972081224114"></a>pg_stat_get_checkpoint_sync_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p5720121294112"><a name="en-us_topic_0283137115_p5720121294112"></a><a name="en-us_topic_0283137115_p5720121294112"></a>pg_stat_get_checkpoint_write_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p072021213414"><a name="en-us_topic_0283137115_p072021213414"></a><a name="en-us_topic_0283137115_p072021213414"></a>pg_stat_get_db_blk_read_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p117208127416"><a name="en-us_topic_0283137115_p117208127416"></a><a name="en-us_topic_0283137115_p117208127416"></a>pg_stat_get_db_blk_write_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p13720212134119"><a name="en-us_topic_0283137115_p13720212134119"></a><a name="en-us_topic_0283137115_p13720212134119"></a>pg_stat_get_db_conflict_all</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1172015129412"><a name="en-us_topic_0283137115_p1172015129412"></a><a name="en-us_topic_0283137115_p1172015129412"></a>pg_stat_get_db_conflict_bufferpin</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row37201212194111"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1472021217416"><a name="en-us_topic_0283137115_p1472021217416"></a><a name="en-us_topic_0283137115_p1472021217416"></a>pg_stat_get_db_conflict_snapshot</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p672081274118"><a name="en-us_topic_0283137115_p672081274118"></a><a name="en-us_topic_0283137115_p672081274118"></a>pg_stat_get_db_conflict_startup_deadlock</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p57203123415"><a name="en-us_topic_0283137115_p57203123415"></a><a name="en-us_topic_0283137115_p57203123415"></a>pg_switch_xlog</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1472051204115"><a name="en-us_topic_0283137115_p1472051204115"></a><a name="en-us_topic_0283137115_p1472051204115"></a>xpath</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p7720181216417"><a name="en-us_topic_0283137115_p7720181216417"></a><a name="en-us_topic_0283137115_p7720181216417"></a>pg_timezone_abbrevs</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p187207124413"><a name="en-us_topic_0283137115_p187207124413"></a><a name="en-us_topic_0283137115_p187207124413"></a>pg_timezone_names</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p372051216419"><a name="en-us_topic_0283137115_p372051216419"></a><a name="en-us_topic_0283137115_p372051216419"></a>pgxc_node_str</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row17208127411"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p4720612124120"><a name="en-us_topic_0283137115_p4720612124120"></a><a name="en-us_topic_0283137115_p4720612124120"></a>plpgsql_call_handler</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p15720512144110"><a name="en-us_topic_0283137115_p15720512144110"></a><a name="en-us_topic_0283137115_p15720512144110"></a>plpgsql_inline_handler</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p177201812184112"><a name="en-us_topic_0283137115_p177201812184112"></a><a name="en-us_topic_0283137115_p177201812184112"></a>plpgsql_validator</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p12720191264113"><a name="en-us_topic_0283137115_p12720191264113"></a><a name="en-us_topic_0283137115_p12720191264113"></a>point_above</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p187201712144113"><a name="en-us_topic_0283137115_p187201712144113"></a><a name="en-us_topic_0283137115_p187201712144113"></a>point_add</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p15720111216418"><a name="en-us_topic_0283137115_p15720111216418"></a><a name="en-us_topic_0283137115_p15720111216418"></a>point_below</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p972011128418"><a name="en-us_topic_0283137115_p972011128418"></a><a name="en-us_topic_0283137115_p972011128418"></a>point_distance</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1972014127412"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p2072110122419"><a name="en-us_topic_0283137115_p2072110122419"></a><a name="en-us_topic_0283137115_p2072110122419"></a>point_div</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p10721151217416"><a name="en-us_topic_0283137115_p10721151217416"></a><a name="en-us_topic_0283137115_p10721151217416"></a>point_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1172161210410"><a name="en-us_topic_0283137115_p1172161210410"></a><a name="en-us_topic_0283137115_p1172161210410"></a>point_horiz</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p072117121419"><a name="en-us_topic_0283137115_p072117121419"></a><a name="en-us_topic_0283137115_p072117121419"></a>point_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p8721171214418"><a name="en-us_topic_0283137115_p8721171214418"></a><a name="en-us_topic_0283137115_p8721171214418"></a>point_left</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1572121211411"><a name="en-us_topic_0283137115_p1572121211411"></a><a name="en-us_topic_0283137115_p1572121211411"></a>point_mul</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p672118128416"><a name="en-us_topic_0283137115_p672118128416"></a><a name="en-us_topic_0283137115_p672118128416"></a>point_ne</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row972131244116"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p972161212417"><a name="en-us_topic_0283137115_p972161212417"></a><a name="en-us_topic_0283137115_p972161212417"></a>point_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p372116128419"><a name="en-us_topic_0283137115_p372116128419"></a><a name="en-us_topic_0283137115_p372116128419"></a>point_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p6721161254115"><a name="en-us_topic_0283137115_p6721161254115"></a><a name="en-us_topic_0283137115_p6721161254115"></a>point_right</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p147211112174113"><a name="en-us_topic_0283137115_p147211112174113"></a><a name="en-us_topic_0283137115_p147211112174113"></a>point_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1872131294118"><a name="en-us_topic_0283137115_p1872131294118"></a><a name="en-us_topic_0283137115_p1872131294118"></a>point_sub</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1772171215415"><a name="en-us_topic_0283137115_p1772171215415"></a><a name="en-us_topic_0283137115_p1772171215415"></a>point_vert</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p4721131204112"><a name="en-us_topic_0283137115_p4721131204112"></a><a name="en-us_topic_0283137115_p4721131204112"></a>poly_above</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row772171274111"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1572281244112"><a name="en-us_topic_0283137115_p1572281244112"></a><a name="en-us_topic_0283137115_p1572281244112"></a>poly_below</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p772210123415"><a name="en-us_topic_0283137115_p772210123415"></a><a name="en-us_topic_0283137115_p772210123415"></a>poly_center</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p15722181211411"><a name="en-us_topic_0283137115_p15722181211411"></a><a name="en-us_topic_0283137115_p15722181211411"></a>poly_contain</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1572271294111"><a name="en-us_topic_0283137115_p1572271294111"></a><a name="en-us_topic_0283137115_p1572271294111"></a>poly_contain_pt</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p207222129417"><a name="en-us_topic_0283137115_p207222129417"></a><a name="en-us_topic_0283137115_p207222129417"></a>poly_contained</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1272221217414"><a name="en-us_topic_0283137115_p1272221217414"></a><a name="en-us_topic_0283137115_p1272221217414"></a>poly_distance</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p14722812164114"><a name="en-us_topic_0283137115_p14722812164114"></a><a name="en-us_topic_0283137115_p14722812164114"></a>poly_in</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row137221312184110"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p8722181274110"><a name="en-us_topic_0283137115_p8722181274110"></a><a name="en-us_topic_0283137115_p8722181274110"></a>poly_left</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p127221126411"><a name="en-us_topic_0283137115_p127221126411"></a><a name="en-us_topic_0283137115_p127221126411"></a>poly_npoints</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p372261234111"><a name="en-us_topic_0283137115_p372261234111"></a><a name="en-us_topic_0283137115_p372261234111"></a>poly_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p14722101217415"><a name="en-us_topic_0283137115_p14722101217415"></a><a name="en-us_topic_0283137115_p14722101217415"></a>poly_overabove</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p12722112154111"><a name="en-us_topic_0283137115_p12722112154111"></a><a name="en-us_topic_0283137115_p12722112154111"></a>poly_overbelow</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1472261212411"><a name="en-us_topic_0283137115_p1472261212411"></a><a name="en-us_topic_0283137115_p1472261212411"></a>poly_overlap</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p87221512104112"><a name="en-us_topic_0283137115_p87221512104112"></a><a name="en-us_topic_0283137115_p87221512104112"></a>poly_overleft</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1172301274120"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p372381244113"><a name="en-us_topic_0283137115_p372381244113"></a><a name="en-us_topic_0283137115_p372381244113"></a>poly_overright</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p15723161217411"><a name="en-us_topic_0283137115_p15723161217411"></a><a name="en-us_topic_0283137115_p15723161217411"></a>poly_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p16723012184119"><a name="en-us_topic_0283137115_p16723012184119"></a><a name="en-us_topic_0283137115_p16723012184119"></a>poly_right</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p127231512144116"><a name="en-us_topic_0283137115_p127231512144116"></a><a name="en-us_topic_0283137115_p127231512144116"></a>poly_same</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1572311284110"><a name="en-us_topic_0283137115_p1572311284110"></a><a name="en-us_topic_0283137115_p1572311284110"></a>poly_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p7723111214410"><a name="en-us_topic_0283137115_p7723111214410"></a><a name="en-us_topic_0283137115_p7723111214410"></a>polygon</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p11723312124111"><a name="en-us_topic_0283137115_p11723312124111"></a><a name="en-us_topic_0283137115_p11723312124111"></a>position</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row8723181218415"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p157231412104116"><a name="en-us_topic_0283137115_p157231412104116"></a><a name="en-us_topic_0283137115_p157231412104116"></a>positionjoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p472341218418"><a name="en-us_topic_0283137115_p472341218418"></a><a name="en-us_topic_0283137115_p472341218418"></a>positionsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p3723191234119"><a name="en-us_topic_0283137115_p3723191234119"></a><a name="en-us_topic_0283137115_p3723191234119"></a>postgresql_fdw_validator</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p37231912194119"><a name="en-us_topic_0283137115_p37231912194119"></a><a name="en-us_topic_0283137115_p37231912194119"></a>pow</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1723151224114"><a name="en-us_topic_0283137115_p1723151224114"></a><a name="en-us_topic_0283137115_p1723151224114"></a>power</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p9723131212419"><a name="en-us_topic_0283137115_p9723131212419"></a><a name="en-us_topic_0283137115_p9723131212419"></a>prsd_end</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p6723712134116"><a name="en-us_topic_0283137115_p6723712134116"></a><a name="en-us_topic_0283137115_p6723712134116"></a>prsd_headline</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1972321284120"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p9723201294112"><a name="en-us_topic_0283137115_p9723201294112"></a><a name="en-us_topic_0283137115_p9723201294112"></a>prsd_lextype</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p2072341215418"><a name="en-us_topic_0283137115_p2072341215418"></a><a name="en-us_topic_0283137115_p2072341215418"></a>prsd_nexttoken</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p272314125412"><a name="en-us_topic_0283137115_p272314125412"></a><a name="en-us_topic_0283137115_p272314125412"></a>prsd_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p3723201244120"><a name="en-us_topic_0283137115_p3723201244120"></a><a name="en-us_topic_0283137115_p3723201244120"></a>pt_contained_circle</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p14723312134110"><a name="en-us_topic_0283137115_p14723312134110"></a><a name="en-us_topic_0283137115_p14723312134110"></a>pt_contained_poly</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p13723111224115"><a name="en-us_topic_0283137115_p13723111224115"></a><a name="en-us_topic_0283137115_p13723111224115"></a>query_to_xml</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p207231712104116"><a name="en-us_topic_0283137115_p207231712104116"></a><a name="en-us_topic_0283137115_p207231712104116"></a>query_to_xml_and_xmlschema</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1772315122412"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p172412126416"><a name="en-us_topic_0283137115_p172412126416"></a><a name="en-us_topic_0283137115_p172412126416"></a>query_to_xmlschema</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p972451254113"><a name="en-us_topic_0283137115_p972451254113"></a><a name="en-us_topic_0283137115_p972451254113"></a>quote_ident</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p37241212154117"><a name="en-us_topic_0283137115_p37241212154117"></a><a name="en-us_topic_0283137115_p37241212154117"></a>quote_literal</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p47240122415"><a name="en-us_topic_0283137115_p47240122415"></a><a name="en-us_topic_0283137115_p47240122415"></a>quote_nullable</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p117241312174114"><a name="en-us_topic_0283137115_p117241312174114"></a><a name="en-us_topic_0283137115_p117241312174114"></a>radians</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p14724912124114"><a name="en-us_topic_0283137115_p14724912124114"></a><a name="en-us_topic_0283137115_p14724912124114"></a>radius</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1772461234118"><a name="en-us_topic_0283137115_p1772461234118"></a><a name="en-us_topic_0283137115_p1772461234118"></a>random</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1972441220412"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p4724151211418"><a name="en-us_topic_0283137115_p4724151211418"></a><a name="en-us_topic_0283137115_p4724151211418"></a>range_adjacent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p872419128413"><a name="en-us_topic_0283137115_p872419128413"></a><a name="en-us_topic_0283137115_p872419128413"></a>range_after</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1672416120414"><a name="en-us_topic_0283137115_p1672416120414"></a><a name="en-us_topic_0283137115_p1672416120414"></a>range_before</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p187241012124118"><a name="en-us_topic_0283137115_p187241012124118"></a><a name="en-us_topic_0283137115_p187241012124118"></a>range_cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p147243128411"><a name="en-us_topic_0283137115_p147243128411"></a><a name="en-us_topic_0283137115_p147243128411"></a>range_contained_by</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p2724112164115"><a name="en-us_topic_0283137115_p2724112164115"></a><a name="en-us_topic_0283137115_p2724112164115"></a>range_contains</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p87242127411"><a name="en-us_topic_0283137115_p87242127411"></a><a name="en-us_topic_0283137115_p87242127411"></a>range_contains_elem</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row207249121419"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1472416125414"><a name="en-us_topic_0283137115_p1472416125414"></a><a name="en-us_topic_0283137115_p1472416125414"></a>range_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p37241612154113"><a name="en-us_topic_0283137115_p37241612154113"></a><a name="en-us_topic_0283137115_p37241612154113"></a>range_ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p572401264118"><a name="en-us_topic_0283137115_p572401264118"></a><a name="en-us_topic_0283137115_p572401264118"></a>range_gist_compress</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p10724101212414"><a name="en-us_topic_0283137115_p10724101212414"></a><a name="en-us_topic_0283137115_p10724101212414"></a>range_gist_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1724161213414"><a name="en-us_topic_0283137115_p1724161213414"></a><a name="en-us_topic_0283137115_p1724161213414"></a>range_gist_decompress</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p11724912114116"><a name="en-us_topic_0283137115_p11724912114116"></a><a name="en-us_topic_0283137115_p11724912114116"></a>range_gist_penalty</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1672420124416"><a name="en-us_topic_0283137115_p1672420124416"></a><a name="en-us_topic_0283137115_p1672420124416"></a>range_gist_picksplit</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row2724171244115"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p17724512164119"><a name="en-us_topic_0283137115_p17724512164119"></a><a name="en-us_topic_0283137115_p17724512164119"></a>range_gist_same</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p6724112204111"><a name="en-us_topic_0283137115_p6724112204111"></a><a name="en-us_topic_0283137115_p6724112204111"></a>range_gist_union</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p8725612174113"><a name="en-us_topic_0283137115_p8725612174113"></a><a name="en-us_topic_0283137115_p8725612174113"></a>range_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p17725412184118"><a name="en-us_topic_0283137115_p17725412184118"></a><a name="en-us_topic_0283137115_p17725412184118"></a>range_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1272581234111"><a name="en-us_topic_0283137115_p1272581234111"></a><a name="en-us_topic_0283137115_p1272581234111"></a>range_intersect</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p8725181214114"><a name="en-us_topic_0283137115_p8725181214114"></a><a name="en-us_topic_0283137115_p8725181214114"></a>range_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p172561218411"><a name="en-us_topic_0283137115_p172561218411"></a><a name="en-us_topic_0283137115_p172561218411"></a>range_lt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row3725171224115"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p7725912184113"><a name="en-us_topic_0283137115_p7725912184113"></a><a name="en-us_topic_0283137115_p7725912184113"></a>range_minus</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p10725121254118"><a name="en-us_topic_0283137115_p10725121254118"></a><a name="en-us_topic_0283137115_p10725121254118"></a>range_ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p16725312104112"><a name="en-us_topic_0283137115_p16725312104112"></a><a name="en-us_topic_0283137115_p16725312104112"></a>range_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p67251412144115"><a name="en-us_topic_0283137115_p67251412144115"></a><a name="en-us_topic_0283137115_p67251412144115"></a>range_overlaps</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p16725131218410"><a name="en-us_topic_0283137115_p16725131218410"></a><a name="en-us_topic_0283137115_p16725131218410"></a>range_overleft</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p16725121214111"><a name="en-us_topic_0283137115_p16725121214111"></a><a name="en-us_topic_0283137115_p16725121214111"></a>range_overright</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p6725412194114"><a name="en-us_topic_0283137115_p6725412194114"></a><a name="en-us_topic_0283137115_p6725412194114"></a>range_recv</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row167256128412"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p17251812124112"><a name="en-us_topic_0283137115_p17251812124112"></a><a name="en-us_topic_0283137115_p17251812124112"></a>range_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p167250125412"><a name="en-us_topic_0283137115_p167250125412"></a><a name="en-us_topic_0283137115_p167250125412"></a>range_typanalyze</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p272513120411"><a name="en-us_topic_0283137115_p272513120411"></a><a name="en-us_topic_0283137115_p272513120411"></a>range_union</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p172551274112"><a name="en-us_topic_0283137115_p172551274112"></a><a name="en-us_topic_0283137115_p172551274112"></a>rank</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1372541224115"><a name="en-us_topic_0283137115_p1372541224115"></a><a name="en-us_topic_0283137115_p1372541224115"></a>record_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1972501294113"><a name="en-us_topic_0283137115_p1972501294113"></a><a name="en-us_topic_0283137115_p1972501294113"></a>record_ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p7725161264119"><a name="en-us_topic_0283137115_p7725161264119"></a><a name="en-us_topic_0283137115_p7725161264119"></a>record_gt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row107252126419"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p8725191211414"><a name="en-us_topic_0283137115_p8725191211414"></a><a name="en-us_topic_0283137115_p8725191211414"></a>record_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1672515127415"><a name="en-us_topic_0283137115_p1672515127415"></a><a name="en-us_topic_0283137115_p1672515127415"></a>record_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p072591218413"><a name="en-us_topic_0283137115_p072591218413"></a><a name="en-us_topic_0283137115_p072591218413"></a>record_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p9726171217412"><a name="en-us_topic_0283137115_p9726171217412"></a><a name="en-us_topic_0283137115_p9726171217412"></a>record_ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p20726612104119"><a name="en-us_topic_0283137115_p20726612104119"></a><a name="en-us_topic_0283137115_p20726612104119"></a>record_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p472611216419"><a name="en-us_topic_0283137115_p472611216419"></a><a name="en-us_topic_0283137115_p472611216419"></a>record_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p107261812164118"><a name="en-us_topic_0283137115_p107261812164118"></a><a name="en-us_topic_0283137115_p107261812164118"></a>record_send</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row972691244111"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p6726101214413"><a name="en-us_topic_0283137115_p6726101214413"></a><a name="en-us_topic_0283137115_p6726101214413"></a>regclass</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p157262121415"><a name="en-us_topic_0283137115_p157262121415"></a><a name="en-us_topic_0283137115_p157262121415"></a>regclassin</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p15726312144117"><a name="en-us_topic_0283137115_p15726312144117"></a><a name="en-us_topic_0283137115_p15726312144117"></a>regclassout</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1172661284117"><a name="en-us_topic_0283137115_p1172661284117"></a><a name="en-us_topic_0283137115_p1172661284117"></a>regclassrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p187261512194112"><a name="en-us_topic_0283137115_p187261512194112"></a><a name="en-us_topic_0283137115_p187261512194112"></a>regclasssend</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p9726912174118"><a name="en-us_topic_0283137115_p9726912174118"></a><a name="en-us_topic_0283137115_p9726912174118"></a>regconfigin</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p177261112174117"><a name="en-us_topic_0283137115_p177261112174117"></a><a name="en-us_topic_0283137115_p177261112174117"></a>regconfigout</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1072631224120"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1072617128411"><a name="en-us_topic_0283137115_p1072617128411"></a><a name="en-us_topic_0283137115_p1072617128411"></a>regconfigrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p137261612134110"><a name="en-us_topic_0283137115_p137261612134110"></a><a name="en-us_topic_0283137115_p137261612134110"></a>regconfigsend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1726181224117"><a name="en-us_topic_0283137115_p1726181224117"></a><a name="en-us_topic_0283137115_p1726181224117"></a>regdictionaryin</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1972618124410"><a name="en-us_topic_0283137115_p1972618124410"></a><a name="en-us_topic_0283137115_p1972618124410"></a>regdictionaryout</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p107265126414"><a name="en-us_topic_0283137115_p107265126414"></a><a name="en-us_topic_0283137115_p107265126414"></a>regdictionaryrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p14726131215418"><a name="en-us_topic_0283137115_p14726131215418"></a><a name="en-us_topic_0283137115_p14726131215418"></a>regdictionarysend</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p5726171294113"><a name="en-us_topic_0283137115_p5726171294113"></a><a name="en-us_topic_0283137115_p5726171294113"></a>regexeqjoinsel</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row0726512174119"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1272641234110"><a name="en-us_topic_0283137115_p1272641234110"></a><a name="en-us_topic_0283137115_p1272641234110"></a>regexeqsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p57261126419"><a name="en-us_topic_0283137115_p57261126419"></a><a name="en-us_topic_0283137115_p57261126419"></a>regexnejoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p972615125416"><a name="en-us_topic_0283137115_p972615125416"></a><a name="en-us_topic_0283137115_p972615125416"></a>regexnesel</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p18726151216416"><a name="en-us_topic_0283137115_p18726151216416"></a><a name="en-us_topic_0283137115_p18726151216416"></a>regexp_matches</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p18726181294117"><a name="en-us_topic_0283137115_p18726181294117"></a><a name="en-us_topic_0283137115_p18726181294117"></a>regexp_replace</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p5726201214415"><a name="en-us_topic_0283137115_p5726201214415"></a><a name="en-us_topic_0283137115_p5726201214415"></a>regexp_split_to_array</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p197272012134115"><a name="en-us_topic_0283137115_p197272012134115"></a><a name="en-us_topic_0283137115_p197272012134115"></a>regexp_split_to_table</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row187271212124112"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1372721264111"><a name="en-us_topic_0283137115_p1372721264111"></a><a name="en-us_topic_0283137115_p1372721264111"></a>regoperatorin</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p972741213413"><a name="en-us_topic_0283137115_p972741213413"></a><a name="en-us_topic_0283137115_p972741213413"></a>regoperatorout</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p10727181210415"><a name="en-us_topic_0283137115_p10727181210415"></a><a name="en-us_topic_0283137115_p10727181210415"></a>regoperatorrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p8727141218412"><a name="en-us_topic_0283137115_p8727141218412"></a><a name="en-us_topic_0283137115_p8727141218412"></a>regoperatorsend</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p472741234114"><a name="en-us_topic_0283137115_p472741234114"></a><a name="en-us_topic_0283137115_p472741234114"></a>regoperin</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p372712128419"><a name="en-us_topic_0283137115_p372712128419"></a><a name="en-us_topic_0283137115_p372712128419"></a>regoperout</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p11727171219417"><a name="en-us_topic_0283137115_p11727171219417"></a><a name="en-us_topic_0283137115_p11727171219417"></a>regoperrecv</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1272713128414"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p5727181214410"><a name="en-us_topic_0283137115_p5727181214410"></a><a name="en-us_topic_0283137115_p5727181214410"></a>regopersend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p14727101254116"><a name="en-us_topic_0283137115_p14727101254116"></a><a name="en-us_topic_0283137115_p14727101254116"></a>regprocedurein</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p9727161219416"><a name="en-us_topic_0283137115_p9727161219416"></a><a name="en-us_topic_0283137115_p9727161219416"></a>regprocedureout</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p20727812164116"><a name="en-us_topic_0283137115_p20727812164116"></a><a name="en-us_topic_0283137115_p20727812164116"></a>regprocedurerecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p19727312204110"><a name="en-us_topic_0283137115_p19727312204110"></a><a name="en-us_topic_0283137115_p19727312204110"></a>regproceduresend</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p10727212194115"><a name="en-us_topic_0283137115_p10727212194115"></a><a name="en-us_topic_0283137115_p10727212194115"></a>regprocin</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p972741215414"><a name="en-us_topic_0283137115_p972741215414"></a><a name="en-us_topic_0283137115_p972741215414"></a>regprocout</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row117272012134111"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p57274122418"><a name="en-us_topic_0283137115_p57274122418"></a><a name="en-us_topic_0283137115_p57274122418"></a>regprocrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p18727512194115"><a name="en-us_topic_0283137115_p18727512194115"></a><a name="en-us_topic_0283137115_p18727512194115"></a>regprocsend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p14727812194117"><a name="en-us_topic_0283137115_p14727812194117"></a><a name="en-us_topic_0283137115_p14727812194117"></a>regr_avgx</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p15727111213412"><a name="en-us_topic_0283137115_p15727111213412"></a><a name="en-us_topic_0283137115_p15727111213412"></a>regr_avgy</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p12727912154115"><a name="en-us_topic_0283137115_p12727912154115"></a><a name="en-us_topic_0283137115_p12727912154115"></a>regr_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p0727812124110"><a name="en-us_topic_0283137115_p0727812124110"></a><a name="en-us_topic_0283137115_p0727812124110"></a>regr_intercept</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p97271112114118"><a name="en-us_topic_0283137115_p97271112114118"></a><a name="en-us_topic_0283137115_p97271112114118"></a>regr_r2</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row187281124414"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p7728412174120"><a name="en-us_topic_0283137115_p7728412174120"></a><a name="en-us_topic_0283137115_p7728412174120"></a>regr_slope</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p672841210412"><a name="en-us_topic_0283137115_p672841210412"></a><a name="en-us_topic_0283137115_p672841210412"></a>regr_sxx</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1972831224110"><a name="en-us_topic_0283137115_p1972831224110"></a><a name="en-us_topic_0283137115_p1972831224110"></a>regr_sxy</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p772871215416"><a name="en-us_topic_0283137115_p772871215416"></a><a name="en-us_topic_0283137115_p772871215416"></a>regr_syy</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p972815123413"><a name="en-us_topic_0283137115_p972815123413"></a><a name="en-us_topic_0283137115_p972815123413"></a>regtypein</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p67281812164118"><a name="en-us_topic_0283137115_p67281812164118"></a><a name="en-us_topic_0283137115_p67281812164118"></a>regtypeout</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p0728181294114"><a name="en-us_topic_0283137115_p0728181294114"></a><a name="en-us_topic_0283137115_p0728181294114"></a>regtyperecv</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row5728612114113"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p672821224120"><a name="en-us_topic_0283137115_p672821224120"></a><a name="en-us_topic_0283137115_p672821224120"></a>regtypesend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p5728171264115"><a name="en-us_topic_0283137115_p5728171264115"></a><a name="en-us_topic_0283137115_p5728171264115"></a>reltime</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p117281512194110"><a name="en-us_topic_0283137115_p117281512194110"></a><a name="en-us_topic_0283137115_p117281512194110"></a>reltimeeq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p772811124410"><a name="en-us_topic_0283137115_p772811124410"></a><a name="en-us_topic_0283137115_p772811124410"></a>reltimege</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p57281812194116"><a name="en-us_topic_0283137115_p57281812194116"></a><a name="en-us_topic_0283137115_p57281812194116"></a>reltimegt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p372811294110"><a name="en-us_topic_0283137115_p372811294110"></a><a name="en-us_topic_0283137115_p372811294110"></a>reltimein</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p20728812134116"><a name="en-us_topic_0283137115_p20728812134116"></a><a name="en-us_topic_0283137115_p20728812134116"></a>reltimele</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row572861204117"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p4728111214118"><a name="en-us_topic_0283137115_p4728111214118"></a><a name="en-us_topic_0283137115_p4728111214118"></a>reltimelt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p15728111264114"><a name="en-us_topic_0283137115_p15728111264114"></a><a name="en-us_topic_0283137115_p15728111264114"></a>reltimene</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p672861219416"><a name="en-us_topic_0283137115_p672861219416"></a><a name="en-us_topic_0283137115_p672861219416"></a>reltimeout</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1872841264113"><a name="en-us_topic_0283137115_p1872841264113"></a><a name="en-us_topic_0283137115_p1872841264113"></a>reltimerecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p872881254112"><a name="en-us_topic_0283137115_p872881254112"></a><a name="en-us_topic_0283137115_p872881254112"></a>reltimesend</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p12728171214418"><a name="en-us_topic_0283137115_p12728171214418"></a><a name="en-us_topic_0283137115_p12728171214418"></a>repeat</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p472881214112"><a name="en-us_topic_0283137115_p472881214112"></a><a name="en-us_topic_0283137115_p472881214112"></a>replace</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row9728712114117"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p7728512194111"><a name="en-us_topic_0283137115_p7728512194111"></a><a name="en-us_topic_0283137115_p7728512194111"></a>reverse</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p372919128412"><a name="en-us_topic_0283137115_p372919128412"></a><a name="en-us_topic_0283137115_p372919128412"></a>RI_FKey_cascade_del</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p5729171214118"><a name="en-us_topic_0283137115_p5729171214118"></a><a name="en-us_topic_0283137115_p5729171214118"></a>RI_FKey_cascade_upd</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p11729131214119"><a name="en-us_topic_0283137115_p11729131214119"></a><a name="en-us_topic_0283137115_p11729131214119"></a>RI_FKey_check_ins</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p6729141284114"><a name="en-us_topic_0283137115_p6729141284114"></a><a name="en-us_topic_0283137115_p6729141284114"></a>RI_FKey_check_upd</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p3729131234114"><a name="en-us_topic_0283137115_p3729131234114"></a><a name="en-us_topic_0283137115_p3729131234114"></a>RI_FKey_noaction_del</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p272910128416"><a name="en-us_topic_0283137115_p272910128416"></a><a name="en-us_topic_0283137115_p272910128416"></a>RI_FKey_noaction_upd</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row8729612144115"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p177291412164118"><a name="en-us_topic_0283137115_p177291412164118"></a><a name="en-us_topic_0283137115_p177291412164118"></a>RI_FKey_restrict_del</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1672971284112"><a name="en-us_topic_0283137115_p1672971284112"></a><a name="en-us_topic_0283137115_p1672971284112"></a>RI_FKey_restrict_upd</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p5729912184115"><a name="en-us_topic_0283137115_p5729912184115"></a><a name="en-us_topic_0283137115_p5729912184115"></a>RI_FKey_setdefault_del</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p4729151284116"><a name="en-us_topic_0283137115_p4729151284116"></a><a name="en-us_topic_0283137115_p4729151284116"></a>RI_FKey_setdefault_upd</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p177291122413"><a name="en-us_topic_0283137115_p177291122413"></a><a name="en-us_topic_0283137115_p177291122413"></a>RI_FKey_setnull_del</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p13729212194115"><a name="en-us_topic_0283137115_p13729212194115"></a><a name="en-us_topic_0283137115_p13729212194115"></a>RI_FKey_setnull_upd</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p11729112154115"><a name="en-us_topic_0283137115_p11729112154115"></a><a name="en-us_topic_0283137115_p11729112154115"></a>right</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row117298129417"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p13729141274112"><a name="en-us_topic_0283137115_p13729141274112"></a><a name="en-us_topic_0283137115_p13729141274112"></a>round</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1372971224110"><a name="en-us_topic_0283137115_p1372971224110"></a><a name="en-us_topic_0283137115_p1372971224110"></a>row_number</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p7729151219411"><a name="en-us_topic_0283137115_p7729151219411"></a><a name="en-us_topic_0283137115_p7729151219411"></a>row_to_json</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p13729191294112"><a name="en-us_topic_0283137115_p13729191294112"></a><a name="en-us_topic_0283137115_p13729191294112"></a>rpad</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p57298125417"><a name="en-us_topic_0283137115_p57298125417"></a><a name="en-us_topic_0283137115_p57298125417"></a>rtrim</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p172913129410"><a name="en-us_topic_0283137115_p172913129410"></a><a name="en-us_topic_0283137115_p172913129410"></a>scalargtjoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1172971217411"><a name="en-us_topic_0283137115_p1172971217411"></a><a name="en-us_topic_0283137115_p1172971217411"></a>scalargtsel</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1272951212417"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p87291128413"><a name="en-us_topic_0283137115_p87291128413"></a><a name="en-us_topic_0283137115_p87291128413"></a>scalarltjoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1472961210412"><a name="en-us_topic_0283137115_p1472961210412"></a><a name="en-us_topic_0283137115_p1472961210412"></a>scalarltsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p773091211419"><a name="en-us_topic_0283137115_p773091211419"></a><a name="en-us_topic_0283137115_p773091211419"></a>schema_to_xml</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1473012124410"><a name="en-us_topic_0283137115_p1473012124410"></a><a name="en-us_topic_0283137115_p1473012124410"></a>schema_to_xml_and_xmlschema</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p57301812174119"><a name="en-us_topic_0283137115_p57301812174119"></a><a name="en-us_topic_0283137115_p57301812174119"></a>schema_to_xmlschema</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p8730151274111"><a name="en-us_topic_0283137115_p8730151274111"></a><a name="en-us_topic_0283137115_p8730151274111"></a>session_user</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1373011218413"><a name="en-us_topic_0283137115_p1373011218413"></a><a name="en-us_topic_0283137115_p1373011218413"></a>set_bit</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row5730312124116"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p10730712144112"><a name="en-us_topic_0283137115_p10730712144112"></a><a name="en-us_topic_0283137115_p10730712144112"></a>set_byte</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p177305123416"><a name="en-us_topic_0283137115_p177305123416"></a><a name="en-us_topic_0283137115_p177305123416"></a>set_config</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p17730712174116"><a name="en-us_topic_0283137115_p17730712174116"></a><a name="en-us_topic_0283137115_p17730712174116"></a>set_masklen</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p37301012184113"><a name="en-us_topic_0283137115_p37301012184113"></a><a name="en-us_topic_0283137115_p37301012184113"></a>shift_jis_2004_to_euc_jis_2004</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p3730712124119"><a name="en-us_topic_0283137115_p3730712124119"></a><a name="en-us_topic_0283137115_p3730712124119"></a>shift_jis_2004_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p12730111234117"><a name="en-us_topic_0283137115_p12730111234117"></a><a name="en-us_topic_0283137115_p12730111234117"></a>sjis_to_euc_jp</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p273091254116"><a name="en-us_topic_0283137115_p273091254116"></a><a name="en-us_topic_0283137115_p273091254116"></a>sjis_to_mic</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1773031284112"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p373016129418"><a name="en-us_topic_0283137115_p373016129418"></a><a name="en-us_topic_0283137115_p373016129418"></a>sjis_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p18730101212413"><a name="en-us_topic_0283137115_p18730101212413"></a><a name="en-us_topic_0283137115_p18730101212413"></a>smgrin</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p137301612174114"><a name="en-us_topic_0283137115_p137301612174114"></a><a name="en-us_topic_0283137115_p137301612174114"></a>smgrout</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p57301612154110"><a name="en-us_topic_0283137115_p57301612154110"></a><a name="en-us_topic_0283137115_p57301612154110"></a>spg_kd_choose</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p67301312164119"><a name="en-us_topic_0283137115_p67301312164119"></a><a name="en-us_topic_0283137115_p67301312164119"></a>spg_kd_config</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1773017121411"><a name="en-us_topic_0283137115_p1773017121411"></a><a name="en-us_topic_0283137115_p1773017121411"></a>spg_kd_inner_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p7730612144112"><a name="en-us_topic_0283137115_p7730612144112"></a><a name="en-us_topic_0283137115_p7730612144112"></a>spg_kd_picksplit</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1773081254117"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p273011234116"><a name="en-us_topic_0283137115_p273011234116"></a><a name="en-us_topic_0283137115_p273011234116"></a>spg_quad_choose</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p19730912134114"><a name="en-us_topic_0283137115_p19730912134114"></a><a name="en-us_topic_0283137115_p19730912134114"></a>spg_quad_config</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1873011121413"><a name="en-us_topic_0283137115_p1873011121413"></a><a name="en-us_topic_0283137115_p1873011121413"></a>spg_quad_inner_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p7730412164114"><a name="en-us_topic_0283137115_p7730412164114"></a><a name="en-us_topic_0283137115_p7730412164114"></a>spg_quad_leaf_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p12731912164118"><a name="en-us_topic_0283137115_p12731912164118"></a><a name="en-us_topic_0283137115_p12731912164118"></a>spg_quad_picksplit</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p177311212174114"><a name="en-us_topic_0283137115_p177311212174114"></a><a name="en-us_topic_0283137115_p177311212174114"></a>spg_text_choose</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p10731191294118"><a name="en-us_topic_0283137115_p10731191294118"></a><a name="en-us_topic_0283137115_p10731191294118"></a>spg_text_config</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row2731141224117"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p16731121217419"><a name="en-us_topic_0283137115_p16731121217419"></a><a name="en-us_topic_0283137115_p16731121217419"></a>spg_text_inner_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p17731181218413"><a name="en-us_topic_0283137115_p17731181218413"></a><a name="en-us_topic_0283137115_p17731181218413"></a>spg_text_leaf_consistent</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p273120121419"><a name="en-us_topic_0283137115_p273120121419"></a><a name="en-us_topic_0283137115_p273120121419"></a>spg_text_picksplit</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p473131244117"><a name="en-us_topic_0283137115_p473131244117"></a><a name="en-us_topic_0283137115_p473131244117"></a>spgbeginscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p8731912164111"><a name="en-us_topic_0283137115_p8731912164111"></a><a name="en-us_topic_0283137115_p8731912164111"></a>spgbuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p12731201214416"><a name="en-us_topic_0283137115_p12731201214416"></a><a name="en-us_topic_0283137115_p12731201214416"></a>spgbuildempty</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p6731151210412"><a name="en-us_topic_0283137115_p6731151210412"></a><a name="en-us_topic_0283137115_p6731151210412"></a>spgbulkdelete</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row273131204116"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p14731812194114"><a name="en-us_topic_0283137115_p14731812194114"></a><a name="en-us_topic_0283137115_p14731812194114"></a>spgcanreturn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p47318127412"><a name="en-us_topic_0283137115_p47318127412"></a><a name="en-us_topic_0283137115_p47318127412"></a>spgcostestimate</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1373131254110"><a name="en-us_topic_0283137115_p1373131254110"></a><a name="en-us_topic_0283137115_p1373131254110"></a>spgendscan</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p14731191204110"><a name="en-us_topic_0283137115_p14731191204110"></a><a name="en-us_topic_0283137115_p14731191204110"></a>spggetbitmap</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p973114127415"><a name="en-us_topic_0283137115_p973114127415"></a><a name="en-us_topic_0283137115_p973114127415"></a>spggettuple</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p147313124413"><a name="en-us_topic_0283137115_p147313124413"></a><a name="en-us_topic_0283137115_p147313124413"></a>spginsert</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1673131254111"><a name="en-us_topic_0283137115_p1673131254111"></a><a name="en-us_topic_0283137115_p1673131254111"></a>spgmarkpos</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row12731171244116"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1673141284119"><a name="en-us_topic_0283137115_p1673141284119"></a><a name="en-us_topic_0283137115_p1673141284119"></a>spgoptions</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p3731141264117"><a name="en-us_topic_0283137115_p3731141264117"></a><a name="en-us_topic_0283137115_p3731141264117"></a>spgrescan</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p57311812184114"><a name="en-us_topic_0283137115_p57311812184114"></a><a name="en-us_topic_0283137115_p57311812184114"></a>spgrestrpos</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p18731151213414"><a name="en-us_topic_0283137115_p18731151213414"></a><a name="en-us_topic_0283137115_p18731151213414"></a>spgvacuumcleanup</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p773191219419"><a name="en-us_topic_0283137115_p773191219419"></a><a name="en-us_topic_0283137115_p773191219419"></a>stddev</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p2073121213413"><a name="en-us_topic_0283137115_p2073121213413"></a><a name="en-us_topic_0283137115_p2073121213413"></a>stddev_pop</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p10731612114118"><a name="en-us_topic_0283137115_p10731612114118"></a><a name="en-us_topic_0283137115_p10731612114118"></a>stddev_samp</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1273291234116"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p073231294119"><a name="en-us_topic_0283137115_p073231294119"></a><a name="en-us_topic_0283137115_p073231294119"></a>string_agg</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p97327128412"><a name="en-us_topic_0283137115_p97327128412"></a><a name="en-us_topic_0283137115_p97327128412"></a>string_agg_finalfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p107321912204116"><a name="en-us_topic_0283137115_p107321912204116"></a><a name="en-us_topic_0283137115_p107321912204116"></a>string_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p157321312144113"><a name="en-us_topic_0283137115_p157321312144113"></a><a name="en-us_topic_0283137115_p157321312144113"></a>strip</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p137321812204114"><a name="en-us_topic_0283137115_p137321812204114"></a><a name="en-us_topic_0283137115_p137321812204114"></a>sum</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p10732121214113"><a name="en-us_topic_0283137115_p10732121214113"></a><a name="en-us_topic_0283137115_p10732121214113"></a>suppress_redundant_updates_trigger</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p77321812194111"><a name="en-us_topic_0283137115_p77321812194111"></a><a name="en-us_topic_0283137115_p77321812194111"></a>table_to_xml</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row4732121216416"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p19732131244114"><a name="en-us_topic_0283137115_p19732131244114"></a><a name="en-us_topic_0283137115_p19732131244114"></a>table_to_xml_and_xmlschema</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p137323122411"><a name="en-us_topic_0283137115_p137323122411"></a><a name="en-us_topic_0283137115_p137323122411"></a>table_to_xmlschema</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p773213128410"><a name="en-us_topic_0283137115_p773213128410"></a><a name="en-us_topic_0283137115_p773213128410"></a>tan</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1073211234114"><a name="en-us_topic_0283137115_p1073211234114"></a><a name="en-us_topic_0283137115_p1073211234114"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1873261294119"><a name="en-us_topic_0283137115_p1873261294119"></a><a name="en-us_topic_0283137115_p1873261294119"></a>text_ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p19732412154118"><a name="en-us_topic_0283137115_p19732412154118"></a><a name="en-us_topic_0283137115_p19732412154118"></a>text_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p177325129412"><a name="en-us_topic_0283137115_p177325129412"></a><a name="en-us_topic_0283137115_p177325129412"></a>text_larger</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row97327121413"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1732101218411"><a name="en-us_topic_0283137115_p1732101218411"></a><a name="en-us_topic_0283137115_p1732101218411"></a>text_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p9732111234114"><a name="en-us_topic_0283137115_p9732111234114"></a><a name="en-us_topic_0283137115_p9732111234114"></a>text_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p8732171234116"><a name="en-us_topic_0283137115_p8732171234116"></a><a name="en-us_topic_0283137115_p8732171234116"></a>text_pattern_ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p67321512194118"><a name="en-us_topic_0283137115_p67321512194118"></a><a name="en-us_topic_0283137115_p67321512194118"></a>text_pattern_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p2732161204117"><a name="en-us_topic_0283137115_p2732161204117"></a><a name="en-us_topic_0283137115_p2732161204117"></a>text_pattern_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p19732312124117"><a name="en-us_topic_0283137115_p19732312124117"></a><a name="en-us_topic_0283137115_p19732312124117"></a>text_pattern_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1073281218417"><a name="en-us_topic_0283137115_p1073281218417"></a><a name="en-us_topic_0283137115_p1073281218417"></a>text_smaller</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1873201224115"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1473211219414"><a name="en-us_topic_0283137115_p1473211219414"></a><a name="en-us_topic_0283137115_p1473211219414"></a>textanycat</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1073241214419"><a name="en-us_topic_0283137115_p1073241214419"></a><a name="en-us_topic_0283137115_p1073241214419"></a>textcat</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p4733151220417"><a name="en-us_topic_0283137115_p4733151220417"></a><a name="en-us_topic_0283137115_p4733151220417"></a>texteq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p973301244112"><a name="en-us_topic_0283137115_p973301244112"></a><a name="en-us_topic_0283137115_p973301244112"></a>texticlike</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1473301234118"><a name="en-us_topic_0283137115_p1473301234118"></a><a name="en-us_topic_0283137115_p1473301234118"></a>texticnlike</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p773371234113"><a name="en-us_topic_0283137115_p773371234113"></a><a name="en-us_topic_0283137115_p773371234113"></a>texticregexeq</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p20733712184117"><a name="en-us_topic_0283137115_p20733712184117"></a><a name="en-us_topic_0283137115_p20733712184117"></a>texticregexne</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row5733111211411"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p773381214416"><a name="en-us_topic_0283137115_p773381214416"></a><a name="en-us_topic_0283137115_p773381214416"></a>textin</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p573301214418"><a name="en-us_topic_0283137115_p573301214418"></a><a name="en-us_topic_0283137115_p573301214418"></a>textlike</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1573391214110"><a name="en-us_topic_0283137115_p1573391214110"></a><a name="en-us_topic_0283137115_p1573391214110"></a>textne</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p173311215410"><a name="en-us_topic_0283137115_p173311215410"></a><a name="en-us_topic_0283137115_p173311215410"></a>textnlike</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p167331412184117"><a name="en-us_topic_0283137115_p167331412184117"></a><a name="en-us_topic_0283137115_p167331412184117"></a>textout</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p27331121416"><a name="en-us_topic_0283137115_p27331121416"></a><a name="en-us_topic_0283137115_p27331121416"></a>textrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p773301215416"><a name="en-us_topic_0283137115_p773301215416"></a><a name="en-us_topic_0283137115_p773301215416"></a>textregexeq</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row17331012104111"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p10733161215414"><a name="en-us_topic_0283137115_p10733161215414"></a><a name="en-us_topic_0283137115_p10733161215414"></a>textregexne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1973315121411"><a name="en-us_topic_0283137115_p1973315121411"></a><a name="en-us_topic_0283137115_p1973315121411"></a>textsend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p873321264113"><a name="en-us_topic_0283137115_p873321264113"></a><a name="en-us_topic_0283137115_p873321264113"></a>thesaurus_init</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1673371214418"><a name="en-us_topic_0283137115_p1673371214418"></a><a name="en-us_topic_0283137115_p1673371214418"></a>thesaurus_lexize</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p17733111213412"><a name="en-us_topic_0283137115_p17733111213412"></a><a name="en-us_topic_0283137115_p17733111213412"></a>tideq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p157331512104114"><a name="en-us_topic_0283137115_p157331512104114"></a><a name="en-us_topic_0283137115_p157331512104114"></a>tidge</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1273313127417"><a name="en-us_topic_0283137115_p1273313127417"></a><a name="en-us_topic_0283137115_p1273313127417"></a>tidgt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row67331312184117"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1273341211414"><a name="en-us_topic_0283137115_p1273341211414"></a><a name="en-us_topic_0283137115_p1273341211414"></a>tidin</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p9733191211414"><a name="en-us_topic_0283137115_p9733191211414"></a><a name="en-us_topic_0283137115_p9733191211414"></a>tidlarger</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p177331712134116"><a name="en-us_topic_0283137115_p177331712134116"></a><a name="en-us_topic_0283137115_p177331712134116"></a>tidle</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1573351294116"><a name="en-us_topic_0283137115_p1573351294116"></a><a name="en-us_topic_0283137115_p1573351294116"></a>tidlt</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p12734171214419"><a name="en-us_topic_0283137115_p12734171214419"></a><a name="en-us_topic_0283137115_p12734171214419"></a>tidne</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p473471217413"><a name="en-us_topic_0283137115_p473471217413"></a><a name="en-us_topic_0283137115_p473471217413"></a>tidout</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p8734012164110"><a name="en-us_topic_0283137115_p8734012164110"></a><a name="en-us_topic_0283137115_p8734012164110"></a>tidrecv</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1773410126419"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p87341012114110"><a name="en-us_topic_0283137115_p87341012114110"></a><a name="en-us_topic_0283137115_p87341012114110"></a>tidsend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p973414123415"><a name="en-us_topic_0283137115_p973414123415"></a><a name="en-us_topic_0283137115_p973414123415"></a>tidsmaller</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p2734161244118"><a name="en-us_topic_0283137115_p2734161244118"></a><a name="en-us_topic_0283137115_p2734161244118"></a>time</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1734111214112"><a name="en-us_topic_0283137115_p1734111214112"></a><a name="en-us_topic_0283137115_p1734111214112"></a>time_cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p17734312184116"><a name="en-us_topic_0283137115_p17734312184116"></a><a name="en-us_topic_0283137115_p17734312184116"></a>time_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1073417121412"><a name="en-us_topic_0283137115_p1073417121412"></a><a name="en-us_topic_0283137115_p1073417121412"></a>time_ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p15734612104114"><a name="en-us_topic_0283137115_p15734612104114"></a><a name="en-us_topic_0283137115_p15734612104114"></a>time_gt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row11734812104114"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1673481294117"><a name="en-us_topic_0283137115_p1673481294117"></a><a name="en-us_topic_0283137115_p1673481294117"></a>time_hash</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1873401264116"><a name="en-us_topic_0283137115_p1873401264116"></a><a name="en-us_topic_0283137115_p1873401264116"></a>time_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p16734121214414"><a name="en-us_topic_0283137115_p16734121214414"></a><a name="en-us_topic_0283137115_p16734121214414"></a>time_larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p177341012104113"><a name="en-us_topic_0283137115_p177341012104113"></a><a name="en-us_topic_0283137115_p177341012104113"></a>time_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p4734131219416"><a name="en-us_topic_0283137115_p4734131219416"></a><a name="en-us_topic_0283137115_p4734131219416"></a>time_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p19734151216411"><a name="en-us_topic_0283137115_p19734151216411"></a><a name="en-us_topic_0283137115_p19734151216411"></a>time_mi_interval</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p973461214111"><a name="en-us_topic_0283137115_p973461214111"></a><a name="en-us_topic_0283137115_p973461214111"></a>time_mi_time</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row6734612174114"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1273461284112"><a name="en-us_topic_0283137115_p1273461284112"></a><a name="en-us_topic_0283137115_p1273461284112"></a>time_ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p117349127419"><a name="en-us_topic_0283137115_p117349127419"></a><a name="en-us_topic_0283137115_p117349127419"></a>time_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p07343122416"><a name="en-us_topic_0283137115_p07343122416"></a><a name="en-us_topic_0283137115_p07343122416"></a>time_pl_interval</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p573419120416"><a name="en-us_topic_0283137115_p573419120416"></a><a name="en-us_topic_0283137115_p573419120416"></a>time_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1473461218419"><a name="en-us_topic_0283137115_p1473461218419"></a><a name="en-us_topic_0283137115_p1473461218419"></a>time_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1373481210416"><a name="en-us_topic_0283137115_p1373481210416"></a><a name="en-us_topic_0283137115_p1373481210416"></a>time_smaller</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p473515124419"><a name="en-us_topic_0283137115_p473515124419"></a><a name="en-us_topic_0283137115_p473515124419"></a>time_transform</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row073531284113"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p4735712124114"><a name="en-us_topic_0283137115_p4735712124114"></a><a name="en-us_topic_0283137115_p4735712124114"></a>timedate_pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p20735201219418"><a name="en-us_topic_0283137115_p20735201219418"></a><a name="en-us_topic_0283137115_p20735201219418"></a>timemi</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p17357128413"><a name="en-us_topic_0283137115_p17357128413"></a><a name="en-us_topic_0283137115_p17357128413"></a>timepl</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1973591274120"><a name="en-us_topic_0283137115_p1973591274120"></a><a name="en-us_topic_0283137115_p1973591274120"></a>timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1673581217418"><a name="en-us_topic_0283137115_p1673581217418"></a><a name="en-us_topic_0283137115_p1673581217418"></a>timestamp_cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p5735181216417"><a name="en-us_topic_0283137115_p5735181216417"></a><a name="en-us_topic_0283137115_p5735181216417"></a>timestamp_cmp_date</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p177351212184119"><a name="en-us_topic_0283137115_p177351212184119"></a><a name="en-us_topic_0283137115_p177351212184119"></a>timestamp_cmp_timestamptz</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1973521211417"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p15735171210412"><a name="en-us_topic_0283137115_p15735171210412"></a><a name="en-us_topic_0283137115_p15735171210412"></a>timestamp_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p973516126415"><a name="en-us_topic_0283137115_p973516126415"></a><a name="en-us_topic_0283137115_p973516126415"></a>timestamp_eq_date</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p573561211417"><a name="en-us_topic_0283137115_p573561211417"></a><a name="en-us_topic_0283137115_p573561211417"></a>timestamp_eq_timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p15735191214418"><a name="en-us_topic_0283137115_p15735191214418"></a><a name="en-us_topic_0283137115_p15735191214418"></a>timestamp_ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p173519120419"><a name="en-us_topic_0283137115_p173519120419"></a><a name="en-us_topic_0283137115_p173519120419"></a>timestamp_ge_date</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p07354125419"><a name="en-us_topic_0283137115_p07354125419"></a><a name="en-us_topic_0283137115_p07354125419"></a>timestamp_ge_timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1373531213413"><a name="en-us_topic_0283137115_p1373531213413"></a><a name="en-us_topic_0283137115_p1373531213413"></a>timestamp_gt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row6735912194116"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p173561217415"><a name="en-us_topic_0283137115_p173561217415"></a><a name="en-us_topic_0283137115_p173561217415"></a>timestamp_gt_date</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p10735112204115"><a name="en-us_topic_0283137115_p10735112204115"></a><a name="en-us_topic_0283137115_p10735112204115"></a>timestamp_gt_timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p15735151254120"><a name="en-us_topic_0283137115_p15735151254120"></a><a name="en-us_topic_0283137115_p15735151254120"></a>timestamp_hash</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p57355123417"><a name="en-us_topic_0283137115_p57355123417"></a><a name="en-us_topic_0283137115_p57355123417"></a>timestamp_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p8735512114111"><a name="en-us_topic_0283137115_p8735512114111"></a><a name="en-us_topic_0283137115_p8735512114111"></a>timestamp_larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p373511129415"><a name="en-us_topic_0283137115_p373511129415"></a><a name="en-us_topic_0283137115_p373511129415"></a>timestamp_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p37351412164116"><a name="en-us_topic_0283137115_p37351412164116"></a><a name="en-us_topic_0283137115_p37351412164116"></a>timestamp_le_date</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1073515120414"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p6735812114115"><a name="en-us_topic_0283137115_p6735812114115"></a><a name="en-us_topic_0283137115_p6735812114115"></a>timestamp_le_timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p27361912114114"><a name="en-us_topic_0283137115_p27361912114114"></a><a name="en-us_topic_0283137115_p27361912114114"></a>timestamp_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1373618121419"><a name="en-us_topic_0283137115_p1373618121419"></a><a name="en-us_topic_0283137115_p1373618121419"></a>timestamp_lt_date</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p773621220411"><a name="en-us_topic_0283137115_p773621220411"></a><a name="en-us_topic_0283137115_p773621220411"></a>timestamp_lt_timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p373617128411"><a name="en-us_topic_0283137115_p373617128411"></a><a name="en-us_topic_0283137115_p373617128411"></a>timestamp_mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p47361912144118"><a name="en-us_topic_0283137115_p47361912144118"></a><a name="en-us_topic_0283137115_p47361912144118"></a>timestamp_mi_interval</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p10736111211416"><a name="en-us_topic_0283137115_p10736111211416"></a><a name="en-us_topic_0283137115_p10736111211416"></a>timestamp_ne</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row207361412164113"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p8736131216417"><a name="en-us_topic_0283137115_p8736131216417"></a><a name="en-us_topic_0283137115_p8736131216417"></a>timestamp_ne_date</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1373671214418"><a name="en-us_topic_0283137115_p1373671214418"></a><a name="en-us_topic_0283137115_p1373671214418"></a>timestamp_ne_timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p19736141215418"><a name="en-us_topic_0283137115_p19736141215418"></a><a name="en-us_topic_0283137115_p19736141215418"></a>timestamp_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p77369121415"><a name="en-us_topic_0283137115_p77369121415"></a><a name="en-us_topic_0283137115_p77369121415"></a>timestamp_pl_interval</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1473612121411"><a name="en-us_topic_0283137115_p1473612121411"></a><a name="en-us_topic_0283137115_p1473612121411"></a>timestamp_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p573613125418"><a name="en-us_topic_0283137115_p573613125418"></a><a name="en-us_topic_0283137115_p573613125418"></a>timestamp_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p87362012144116"><a name="en-us_topic_0283137115_p87362012144116"></a><a name="en-us_topic_0283137115_p87362012144116"></a>timestamp_smaller</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row0736191213411"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p107361512114118"><a name="en-us_topic_0283137115_p107361512114118"></a><a name="en-us_topic_0283137115_p107361512114118"></a>timestamp_sortsupport</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p6736141284111"><a name="en-us_topic_0283137115_p6736141284111"></a><a name="en-us_topic_0283137115_p6736141284111"></a>timestamp_transform</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p2073610124417"><a name="en-us_topic_0283137115_p2073610124417"></a><a name="en-us_topic_0283137115_p2073610124417"></a>timestamptypmodin</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p137361012144120"><a name="en-us_topic_0283137115_p137361012144120"></a><a name="en-us_topic_0283137115_p137361012144120"></a>timestamptypmodout</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1373621219414"><a name="en-us_topic_0283137115_p1373621219414"></a><a name="en-us_topic_0283137115_p1373621219414"></a>timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p127363120417"><a name="en-us_topic_0283137115_p127363120417"></a><a name="en-us_topic_0283137115_p127363120417"></a>timestamptz_cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p2736612124114"><a name="en-us_topic_0283137115_p2736612124114"></a><a name="en-us_topic_0283137115_p2736612124114"></a>timestamptz_cmp_date</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row173651215418"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p673661216416"><a name="en-us_topic_0283137115_p673661216416"></a><a name="en-us_topic_0283137115_p673661216416"></a>timestamptz_cmp_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1873601219413"><a name="en-us_topic_0283137115_p1873601219413"></a><a name="en-us_topic_0283137115_p1873601219413"></a>timestamptz_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p12736121215418"><a name="en-us_topic_0283137115_p12736121215418"></a><a name="en-us_topic_0283137115_p12736121215418"></a>timestamptz_eq_date</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p773712120413"><a name="en-us_topic_0283137115_p773712120413"></a><a name="en-us_topic_0283137115_p773712120413"></a>timestamptz_eq_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p873713122416"><a name="en-us_topic_0283137115_p873713122416"></a><a name="en-us_topic_0283137115_p873713122416"></a>timestamptz_ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p773761219410"><a name="en-us_topic_0283137115_p773761219410"></a><a name="en-us_topic_0283137115_p773761219410"></a>timestamptz_ge_date</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p127372129410"><a name="en-us_topic_0283137115_p127372129410"></a><a name="en-us_topic_0283137115_p127372129410"></a>timestamptz_ge_timestamp</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row57371712164114"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1873761216415"><a name="en-us_topic_0283137115_p1873761216415"></a><a name="en-us_topic_0283137115_p1873761216415"></a>timestamptz_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p473721214419"><a name="en-us_topic_0283137115_p473721214419"></a><a name="en-us_topic_0283137115_p473721214419"></a>timestamptz_gt_date</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p47371912114115"><a name="en-us_topic_0283137115_p47371912114115"></a><a name="en-us_topic_0283137115_p47371912114115"></a>timestamptz_gt_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p14737111214114"><a name="en-us_topic_0283137115_p14737111214114"></a><a name="en-us_topic_0283137115_p14737111214114"></a>timestamptz_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1737612144111"><a name="en-us_topic_0283137115_p1737612144111"></a><a name="en-us_topic_0283137115_p1737612144111"></a>timestamptz_larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p473751213412"><a name="en-us_topic_0283137115_p473751213412"></a><a name="en-us_topic_0283137115_p473751213412"></a>timestamptz_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p7737212144110"><a name="en-us_topic_0283137115_p7737212144110"></a><a name="en-us_topic_0283137115_p7737212144110"></a>timestamptz_le_date</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row77379128419"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1073771212410"><a name="en-us_topic_0283137115_p1073771212410"></a><a name="en-us_topic_0283137115_p1073771212410"></a>timestamptz_le_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p8737191234113"><a name="en-us_topic_0283137115_p8737191234113"></a><a name="en-us_topic_0283137115_p8737191234113"></a>timestamptz_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1973781294115"><a name="en-us_topic_0283137115_p1973781294115"></a><a name="en-us_topic_0283137115_p1973781294115"></a>timestamptz_lt_date</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p16737712104112"><a name="en-us_topic_0283137115_p16737712104112"></a><a name="en-us_topic_0283137115_p16737712104112"></a>timestamptz_lt_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p173711122415"><a name="en-us_topic_0283137115_p173711122415"></a><a name="en-us_topic_0283137115_p173711122415"></a>timestamptz_mi</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p18737151210418"><a name="en-us_topic_0283137115_p18737151210418"></a><a name="en-us_topic_0283137115_p18737151210418"></a>timestamptz_mi_interval</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p973791213413"><a name="en-us_topic_0283137115_p973791213413"></a><a name="en-us_topic_0283137115_p973791213413"></a>timestamptz_ne</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row117377122413"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p18737812134110"><a name="en-us_topic_0283137115_p18737812134110"></a><a name="en-us_topic_0283137115_p18737812134110"></a>timestamptz_ne_date</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p17737712174113"><a name="en-us_topic_0283137115_p17737712174113"></a><a name="en-us_topic_0283137115_p17737712174113"></a>timestamptz_ne_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p14737191274117"><a name="en-us_topic_0283137115_p14737191274117"></a><a name="en-us_topic_0283137115_p14737191274117"></a>timestamptz_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p77371212154111"><a name="en-us_topic_0283137115_p77371212154111"></a><a name="en-us_topic_0283137115_p77371212154111"></a>timestamptz_pl_interval</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p6737151213412"><a name="en-us_topic_0283137115_p6737151213412"></a><a name="en-us_topic_0283137115_p6737151213412"></a>timestamptz_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p15738131215419"><a name="en-us_topic_0283137115_p15738131215419"></a><a name="en-us_topic_0283137115_p15738131215419"></a>timestamptz_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1873821214119"><a name="en-us_topic_0283137115_p1873821214119"></a><a name="en-us_topic_0283137115_p1873821214119"></a>timestamptz_smaller</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row47387121419"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p167381412174112"><a name="en-us_topic_0283137115_p167381412174112"></a><a name="en-us_topic_0283137115_p167381412174112"></a>timestamptztypmodin</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1673841218412"><a name="en-us_topic_0283137115_p1673841218412"></a><a name="en-us_topic_0283137115_p1673841218412"></a>timestamptztypmodout</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p273801217416"><a name="en-us_topic_0283137115_p273801217416"></a><a name="en-us_topic_0283137115_p273801217416"></a>timetypmodin</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p97381512154110"><a name="en-us_topic_0283137115_p97381512154110"></a><a name="en-us_topic_0283137115_p97381512154110"></a>timetypmodout</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p27381812154110"><a name="en-us_topic_0283137115_p27381812154110"></a><a name="en-us_topic_0283137115_p27381812154110"></a>timetz</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p67381012124110"><a name="en-us_topic_0283137115_p67381012124110"></a><a name="en-us_topic_0283137115_p67381012124110"></a>timetz_cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1738912194116"><a name="en-us_topic_0283137115_p1738912194116"></a><a name="en-us_topic_0283137115_p1738912194116"></a>timetz_eq</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1738171224119"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p773871218410"><a name="en-us_topic_0283137115_p773871218410"></a><a name="en-us_topic_0283137115_p773871218410"></a>timetz_ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p12738912184118"><a name="en-us_topic_0283137115_p12738912184118"></a><a name="en-us_topic_0283137115_p12738912184118"></a>timetz_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p073816124419"><a name="en-us_topic_0283137115_p073816124419"></a><a name="en-us_topic_0283137115_p073816124419"></a>timetz_hash</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p473819127416"><a name="en-us_topic_0283137115_p473819127416"></a><a name="en-us_topic_0283137115_p473819127416"></a>timetz_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p573811284115"><a name="en-us_topic_0283137115_p573811284115"></a><a name="en-us_topic_0283137115_p573811284115"></a>timetz_larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p10738112134113"><a name="en-us_topic_0283137115_p10738112134113"></a><a name="en-us_topic_0283137115_p10738112134113"></a>timetz_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p177381212104118"><a name="en-us_topic_0283137115_p177381212104118"></a><a name="en-us_topic_0283137115_p177381212104118"></a>timetz_lt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row0738812174113"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p13738121218417"><a name="en-us_topic_0283137115_p13738121218417"></a><a name="en-us_topic_0283137115_p13738121218417"></a>timetz_mi_interval</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p673811244111"><a name="en-us_topic_0283137115_p673811244111"></a><a name="en-us_topic_0283137115_p673811244111"></a>timetz_ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p12738412124113"><a name="en-us_topic_0283137115_p12738412124113"></a><a name="en-us_topic_0283137115_p12738412124113"></a>timetz_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1373861213413"><a name="en-us_topic_0283137115_p1373861213413"></a><a name="en-us_topic_0283137115_p1373861213413"></a>timetz_pl_interval</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p0738101214111"><a name="en-us_topic_0283137115_p0738101214111"></a><a name="en-us_topic_0283137115_p0738101214111"></a>timetz_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p77381012164112"><a name="en-us_topic_0283137115_p77381012164112"></a><a name="en-us_topic_0283137115_p77381012164112"></a>timetz_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1973871220416"><a name="en-us_topic_0283137115_p1973871220416"></a><a name="en-us_topic_0283137115_p1973871220416"></a>timetz_smaller</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1373861211417"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p473917127412"><a name="en-us_topic_0283137115_p473917127412"></a><a name="en-us_topic_0283137115_p473917127412"></a>timetzdate_pl</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p177391112154113"><a name="en-us_topic_0283137115_p177391112154113"></a><a name="en-us_topic_0283137115_p177391112154113"></a>timetztypmodin</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p773941210415"><a name="en-us_topic_0283137115_p773941210415"></a><a name="en-us_topic_0283137115_p773941210415"></a>timetztypmodout</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p97391112184112"><a name="en-us_topic_0283137115_p97391112184112"></a><a name="en-us_topic_0283137115_p97391112184112"></a>timezone (2069)</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p127390122412"><a name="en-us_topic_0283137115_p127390122412"></a><a name="en-us_topic_0283137115_p127390122412"></a>timezone (1159)</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p16739111244117"><a name="en-us_topic_0283137115_p16739111244117"></a><a name="en-us_topic_0283137115_p16739111244117"></a>timezone (2037)</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p17739141274117"><a name="en-us_topic_0283137115_p17739141274117"></a><a name="en-us_topic_0283137115_p17739141274117"></a>timezone (2070)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row273981224120"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p8739161213414"><a name="en-us_topic_0283137115_p8739161213414"></a><a name="en-us_topic_0283137115_p8739161213414"></a>timezone (1026)</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1473921284117"><a name="en-us_topic_0283137115_p1473921284117"></a><a name="en-us_topic_0283137115_p1473921284117"></a>timezone (2038)</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p13739171214410"><a name="en-us_topic_0283137115_p13739171214410"></a><a name="en-us_topic_0283137115_p13739171214410"></a>tintervalct</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p14739141216410"><a name="en-us_topic_0283137115_p14739141216410"></a><a name="en-us_topic_0283137115_p14739141216410"></a>tintervaleq</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p9739101264112"><a name="en-us_topic_0283137115_p9739101264112"></a><a name="en-us_topic_0283137115_p9739101264112"></a>tintervalge</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p2073911122418"><a name="en-us_topic_0283137115_p2073911122418"></a><a name="en-us_topic_0283137115_p2073911122418"></a>tintervalgt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p117391512164118"><a name="en-us_topic_0283137115_p117391512164118"></a><a name="en-us_topic_0283137115_p117391512164118"></a>tintervalin</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row5739101210411"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p4739312124113"><a name="en-us_topic_0283137115_p4739312124113"></a><a name="en-us_topic_0283137115_p4739312124113"></a>tintervalle</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p173910127418"><a name="en-us_topic_0283137115_p173910127418"></a><a name="en-us_topic_0283137115_p173910127418"></a>tintervalleneq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p15739111210417"><a name="en-us_topic_0283137115_p15739111210417"></a><a name="en-us_topic_0283137115_p15739111210417"></a>tintervallenge</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p207391123419"><a name="en-us_topic_0283137115_p207391123419"></a><a name="en-us_topic_0283137115_p207391123419"></a>tintervallengt</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p173920125415"><a name="en-us_topic_0283137115_p173920125415"></a><a name="en-us_topic_0283137115_p173920125415"></a>tintervallenle</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p2739121254116"><a name="en-us_topic_0283137115_p2739121254116"></a><a name="en-us_topic_0283137115_p2739121254116"></a>tintervallenlt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p673911219411"><a name="en-us_topic_0283137115_p673911219411"></a><a name="en-us_topic_0283137115_p673911219411"></a>tintervallenne</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row11739151212412"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p14739412104118"><a name="en-us_topic_0283137115_p14739412104118"></a><a name="en-us_topic_0283137115_p14739412104118"></a>tintervallt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p8739312184118"><a name="en-us_topic_0283137115_p8739312184118"></a><a name="en-us_topic_0283137115_p8739312184118"></a>tintervalne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p574031274111"><a name="en-us_topic_0283137115_p574031274111"></a><a name="en-us_topic_0283137115_p574031274111"></a>tintervalout</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p15740191224117"><a name="en-us_topic_0283137115_p15740191224117"></a><a name="en-us_topic_0283137115_p15740191224117"></a>tintervalov</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p13740201214412"><a name="en-us_topic_0283137115_p13740201214412"></a><a name="en-us_topic_0283137115_p13740201214412"></a>tintervalrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p127401712134118"><a name="en-us_topic_0283137115_p127401712134118"></a><a name="en-us_topic_0283137115_p127401712134118"></a>tintervalsame</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p157401012134110"><a name="en-us_topic_0283137115_p157401012134110"></a><a name="en-us_topic_0283137115_p157401012134110"></a>tintervalsend</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row3740912134116"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p187409129414"><a name="en-us_topic_0283137115_p187409129414"></a><a name="en-us_topic_0283137115_p187409129414"></a>tintervalstart</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p17740141294110"><a name="en-us_topic_0283137115_p17740141294110"></a><a name="en-us_topic_0283137115_p17740141294110"></a>to_ascii (1845)</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p207409122410"><a name="en-us_topic_0283137115_p207409122410"></a><a name="en-us_topic_0283137115_p207409122410"></a>to_ascii (1847)</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p207401412174113"><a name="en-us_topic_0283137115_p207401412174113"></a><a name="en-us_topic_0283137115_p207401412174113"></a>to_ascii (1846)</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p187401912174113"><a name="en-us_topic_0283137115_p187401912174113"></a><a name="en-us_topic_0283137115_p187401912174113"></a>trigger_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p15740912104119"><a name="en-us_topic_0283137115_p15740912104119"></a><a name="en-us_topic_0283137115_p15740912104119"></a>trigger_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p12740101244118"><a name="en-us_topic_0283137115_p12740101244118"></a><a name="en-us_topic_0283137115_p12740101244118"></a>ts_match_qv</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row57401112184112"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p16740161294113"><a name="en-us_topic_0283137115_p16740161294113"></a><a name="en-us_topic_0283137115_p16740161294113"></a>ts_match_tq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p18740712184112"><a name="en-us_topic_0283137115_p18740712184112"></a><a name="en-us_topic_0283137115_p18740712184112"></a>ts_match_tt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p57401712134118"><a name="en-us_topic_0283137115_p57401712134118"></a><a name="en-us_topic_0283137115_p57401712134118"></a>ts_match_vq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p2740212104114"><a name="en-us_topic_0283137115_p2740212104114"></a><a name="en-us_topic_0283137115_p2740212104114"></a>ts_rank</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p14740171224113"><a name="en-us_topic_0283137115_p14740171224113"></a><a name="en-us_topic_0283137115_p14740171224113"></a>ts_rank_cd</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p11740512164119"><a name="en-us_topic_0283137115_p11740512164119"></a><a name="en-us_topic_0283137115_p11740512164119"></a>ts_rewrite</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p374031219419"><a name="en-us_topic_0283137115_p374031219419"></a><a name="en-us_topic_0283137115_p374031219419"></a>ts_stat</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1074051210413"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p13740101211412"><a name="en-us_topic_0283137115_p13740101211412"></a><a name="en-us_topic_0283137115_p13740101211412"></a>ts_token_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p574021211411"><a name="en-us_topic_0283137115_p574021211411"></a><a name="en-us_topic_0283137115_p574021211411"></a>ts_typanalyze</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p774041214111"><a name="en-us_topic_0283137115_p774041214111"></a><a name="en-us_topic_0283137115_p774041214111"></a>tsmatchjoinsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p174051212412"><a name="en-us_topic_0283137115_p174051212412"></a><a name="en-us_topic_0283137115_p174051212412"></a>tsmatchsel</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p7741141214415"><a name="en-us_topic_0283137115_p7741141214415"></a><a name="en-us_topic_0283137115_p7741141214415"></a>tsq_mcontained</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p10741612104117"><a name="en-us_topic_0283137115_p10741612104117"></a><a name="en-us_topic_0283137115_p10741612104117"></a>tsq_mcontains</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p177411128418"><a name="en-us_topic_0283137115_p177411128418"></a><a name="en-us_topic_0283137115_p177411128418"></a>tsquery_and</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row11741512194110"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p17741912184110"><a name="en-us_topic_0283137115_p17741912184110"></a><a name="en-us_topic_0283137115_p17741912184110"></a>tsquery_cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p10741121274111"><a name="en-us_topic_0283137115_p10741121274111"></a><a name="en-us_topic_0283137115_p10741121274111"></a>tsquery_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p37410121417"><a name="en-us_topic_0283137115_p37410121417"></a><a name="en-us_topic_0283137115_p37410121417"></a>tsquery_ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p177411412114117"><a name="en-us_topic_0283137115_p177411412114117"></a><a name="en-us_topic_0283137115_p177411412114117"></a>tsquery_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p27412124419"><a name="en-us_topic_0283137115_p27412124419"></a><a name="en-us_topic_0283137115_p27412124419"></a>tsquery_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p107411412174117"><a name="en-us_topic_0283137115_p107411412174117"></a><a name="en-us_topic_0283137115_p107411412174117"></a>tsquery_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p8741171204120"><a name="en-us_topic_0283137115_p8741171204120"></a><a name="en-us_topic_0283137115_p8741171204120"></a>tsquery_ne</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row17741812124111"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p974112124411"><a name="en-us_topic_0283137115_p974112124411"></a><a name="en-us_topic_0283137115_p974112124411"></a>tsquery_not</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1874118121418"><a name="en-us_topic_0283137115_p1874118121418"></a><a name="en-us_topic_0283137115_p1874118121418"></a>tsquery_or</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p67411612154112"><a name="en-us_topic_0283137115_p67411612154112"></a><a name="en-us_topic_0283137115_p67411612154112"></a>tsqueryin</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p574121213415"><a name="en-us_topic_0283137115_p574121213415"></a><a name="en-us_topic_0283137115_p574121213415"></a>tsqueryout</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p474118126412"><a name="en-us_topic_0283137115_p474118126412"></a><a name="en-us_topic_0283137115_p474118126412"></a>tsqueryrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p14741111219419"><a name="en-us_topic_0283137115_p14741111219419"></a><a name="en-us_topic_0283137115_p14741111219419"></a>tsquerysend</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p474114126412"><a name="en-us_topic_0283137115_p474114126412"></a><a name="en-us_topic_0283137115_p474114126412"></a>tsrange</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row2741712164115"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p11741912194111"><a name="en-us_topic_0283137115_p11741912194111"></a><a name="en-us_topic_0283137115_p11741912194111"></a>tsrange_subdiff</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p8741712154111"><a name="en-us_topic_0283137115_p8741712154111"></a><a name="en-us_topic_0283137115_p8741712154111"></a>tstzrange</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p874111214412"><a name="en-us_topic_0283137115_p874111214412"></a><a name="en-us_topic_0283137115_p874111214412"></a>tstzrange_subdiff</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p14741111213419"><a name="en-us_topic_0283137115_p14741111213419"></a><a name="en-us_topic_0283137115_p14741111213419"></a>tsvector_cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p19741181264112"><a name="en-us_topic_0283137115_p19741181264112"></a><a name="en-us_topic_0283137115_p19741181264112"></a>tsvector_concat</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1274141220419"><a name="en-us_topic_0283137115_p1274141220419"></a><a name="en-us_topic_0283137115_p1274141220419"></a>tsvector_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1974213124412"><a name="en-us_topic_0283137115_p1974213124412"></a><a name="en-us_topic_0283137115_p1974213124412"></a>tsvector_ge</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row117421212124116"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1874271224118"><a name="en-us_topic_0283137115_p1874271224118"></a><a name="en-us_topic_0283137115_p1874271224118"></a>tsvector_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p14742131214117"><a name="en-us_topic_0283137115_p14742131214117"></a><a name="en-us_topic_0283137115_p14742131214117"></a>tsvector_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p574218122416"><a name="en-us_topic_0283137115_p574218122416"></a><a name="en-us_topic_0283137115_p574218122416"></a>tsvector_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p3742111214417"><a name="en-us_topic_0283137115_p3742111214417"></a><a name="en-us_topic_0283137115_p3742111214417"></a>tsvector_ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1074217125416"><a name="en-us_topic_0283137115_p1074217125416"></a><a name="en-us_topic_0283137115_p1074217125416"></a>tsvector_update_trigger</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p127421412174111"><a name="en-us_topic_0283137115_p127421412174111"></a><a name="en-us_topic_0283137115_p127421412174111"></a>tsvector_update_trigger_column</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p19742131218417"><a name="en-us_topic_0283137115_p19742131218417"></a><a name="en-us_topic_0283137115_p19742131218417"></a>tsvectorin</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row774212127415"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p974217123418"><a name="en-us_topic_0283137115_p974217123418"></a><a name="en-us_topic_0283137115_p974217123418"></a>tsvectorout</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p17742101224111"><a name="en-us_topic_0283137115_p17742101224111"></a><a name="en-us_topic_0283137115_p17742101224111"></a>tsvectorrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1742812124111"><a name="en-us_topic_0283137115_p1742812124111"></a><a name="en-us_topic_0283137115_p1742812124111"></a>tsvectorsend</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p2742151210412"><a name="en-us_topic_0283137115_p2742151210412"></a><a name="en-us_topic_0283137115_p2742151210412"></a>txid_current</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p7742131244114"><a name="en-us_topic_0283137115_p7742131244114"></a><a name="en-us_topic_0283137115_p7742131244114"></a>txid_current_snapshot</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1674211214419"><a name="en-us_topic_0283137115_p1674211214419"></a><a name="en-us_topic_0283137115_p1674211214419"></a>txid_snapshot_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p177421122419"><a name="en-us_topic_0283137115_p177421122419"></a><a name="en-us_topic_0283137115_p177421122419"></a>txid_snapshot_out</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row16742141244112"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p16742121214415"><a name="en-us_topic_0283137115_p16742121214415"></a><a name="en-us_topic_0283137115_p16742121214415"></a>txid_snapshot_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p4742101211417"><a name="en-us_topic_0283137115_p4742101211417"></a><a name="en-us_topic_0283137115_p4742101211417"></a>txid_snapshot_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1974221254119"><a name="en-us_topic_0283137115_p1974221254119"></a><a name="en-us_topic_0283137115_p1974221254119"></a>txid_snapshot_xip</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p19742312104117"><a name="en-us_topic_0283137115_p19742312104117"></a><a name="en-us_topic_0283137115_p19742312104117"></a>txid_snapshot_xmax</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p15742412204113"><a name="en-us_topic_0283137115_p15742412204113"></a><a name="en-us_topic_0283137115_p15742412204113"></a>txid_snapshot_xmin</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p107422129410"><a name="en-us_topic_0283137115_p107422129410"></a><a name="en-us_topic_0283137115_p107422129410"></a>txid_visible_in_snapshot</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1174231217413"><a name="en-us_topic_0283137115_p1174231217413"></a><a name="en-us_topic_0283137115_p1174231217413"></a>uhc_to_utf8</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row18742161220414"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p0742612184118"><a name="en-us_topic_0283137115_p0742612184118"></a><a name="en-us_topic_0283137115_p0742612184118"></a>unique_key_recheck</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1274313126417"><a name="en-us_topic_0283137115_p1274313126417"></a><a name="en-us_topic_0283137115_p1274313126417"></a>unknownin</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p20743151214412"><a name="en-us_topic_0283137115_p20743151214412"></a><a name="en-us_topic_0283137115_p20743151214412"></a>unknownout</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p13743512174115"><a name="en-us_topic_0283137115_p13743512174115"></a><a name="en-us_topic_0283137115_p13743512174115"></a>unknownrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p117431012144119"><a name="en-us_topic_0283137115_p117431012144119"></a><a name="en-us_topic_0283137115_p117431012144119"></a>unknownsend</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1074351214411"><a name="en-us_topic_0283137115_p1074351214411"></a><a name="en-us_topic_0283137115_p1074351214411"></a>unnest</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p87431012134120"><a name="en-us_topic_0283137115_p87431012134120"></a><a name="en-us_topic_0283137115_p87431012134120"></a>utf8_to_big5</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row18743101214115"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1574371214113"><a name="en-us_topic_0283137115_p1574371214113"></a><a name="en-us_topic_0283137115_p1574371214113"></a>utf8_to_euc_cn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p12743012134111"><a name="en-us_topic_0283137115_p12743012134111"></a><a name="en-us_topic_0283137115_p12743012134111"></a>utf8_to_euc_jis_2004</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p074341294112"><a name="en-us_topic_0283137115_p074341294112"></a><a name="en-us_topic_0283137115_p074341294112"></a>utf8_to_euc_jp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1274319122417"><a name="en-us_topic_0283137115_p1274319122417"></a><a name="en-us_topic_0283137115_p1274319122417"></a>utf8_to_euc_kr</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1674319122418"><a name="en-us_topic_0283137115_p1674319122418"></a><a name="en-us_topic_0283137115_p1674319122418"></a>utf8_to_euc_tw</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1774316125416"><a name="en-us_topic_0283137115_p1774316125416"></a><a name="en-us_topic_0283137115_p1774316125416"></a>utf8_to_gb18030</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p2743191234112"><a name="en-us_topic_0283137115_p2743191234112"></a><a name="en-us_topic_0283137115_p2743191234112"></a>utf8_to_gbk</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row27431812124111"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p13743812204120"><a name="en-us_topic_0283137115_p13743812204120"></a><a name="en-us_topic_0283137115_p13743812204120"></a>utf8_to_iso8859</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p2743121214115"><a name="en-us_topic_0283137115_p2743121214115"></a><a name="en-us_topic_0283137115_p2743121214115"></a>utf8_to_iso8859_1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1674381217415"><a name="en-us_topic_0283137115_p1674381217415"></a><a name="en-us_topic_0283137115_p1674381217415"></a>utf8_to_johab</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p474361274119"><a name="en-us_topic_0283137115_p474361274119"></a><a name="en-us_topic_0283137115_p474361274119"></a>utf8_to_koi8r</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p47432012154111"><a name="en-us_topic_0283137115_p47432012154111"></a><a name="en-us_topic_0283137115_p47432012154111"></a>utf8_to_koi8u</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p18743312144117"><a name="en-us_topic_0283137115_p18743312144117"></a><a name="en-us_topic_0283137115_p18743312144117"></a>utf8_to_shift_jis_2004</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p13743812154114"><a name="en-us_topic_0283137115_p13743812154114"></a><a name="en-us_topic_0283137115_p13743812154114"></a>utf8_to_sjis</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row7743141215412"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p117431712134112"><a name="en-us_topic_0283137115_p117431712134112"></a><a name="en-us_topic_0283137115_p117431712134112"></a>utf8_to_uhc</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1374314123417"><a name="en-us_topic_0283137115_p1374314123417"></a><a name="en-us_topic_0283137115_p1374314123417"></a>utf8_to_win</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1674361294119"><a name="en-us_topic_0283137115_p1674361294119"></a><a name="en-us_topic_0283137115_p1674361294119"></a>uuid_cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1674401254114"><a name="en-us_topic_0283137115_p1674401254114"></a><a name="en-us_topic_0283137115_p1674401254114"></a>uuid_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p16744201215418"><a name="en-us_topic_0283137115_p16744201215418"></a><a name="en-us_topic_0283137115_p16744201215418"></a>uuid_ge</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p47441412124115"><a name="en-us_topic_0283137115_p47441412124115"></a><a name="en-us_topic_0283137115_p47441412124115"></a>uuid_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p11744141217411"><a name="en-us_topic_0283137115_p11744141217411"></a><a name="en-us_topic_0283137115_p11744141217411"></a>uuid_hash</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row3744191216418"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p167441012144120"><a name="en-us_topic_0283137115_p167441012144120"></a><a name="en-us_topic_0283137115_p167441012144120"></a>uuid_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p10744141214117"><a name="en-us_topic_0283137115_p10744141214117"></a><a name="en-us_topic_0283137115_p10744141214117"></a>uuid_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p157447121414"><a name="en-us_topic_0283137115_p157447121414"></a><a name="en-us_topic_0283137115_p157447121414"></a>uuid_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p8744161254111"><a name="en-us_topic_0283137115_p8744161254111"></a><a name="en-us_topic_0283137115_p8744161254111"></a>uuid_ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p11744171215413"><a name="en-us_topic_0283137115_p11744171215413"></a><a name="en-us_topic_0283137115_p11744171215413"></a>uuid_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p13744201224119"><a name="en-us_topic_0283137115_p13744201224119"></a><a name="en-us_topic_0283137115_p13744201224119"></a>uuid_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p5744512144113"><a name="en-us_topic_0283137115_p5744512144113"></a><a name="en-us_topic_0283137115_p5744512144113"></a>uuid_send</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row87441712174113"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p127441212134110"><a name="en-us_topic_0283137115_p127441212134110"></a><a name="en-us_topic_0283137115_p127441212134110"></a>var_pop</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p8744412134113"><a name="en-us_topic_0283137115_p8744412134113"></a><a name="en-us_topic_0283137115_p8744412134113"></a>var_samp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p127446121411"><a name="en-us_topic_0283137115_p127446121411"></a><a name="en-us_topic_0283137115_p127446121411"></a>varbit</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p9744101219414"><a name="en-us_topic_0283137115_p9744101219414"></a><a name="en-us_topic_0283137115_p9744101219414"></a>varbit_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p18744412114116"><a name="en-us_topic_0283137115_p18744412114116"></a><a name="en-us_topic_0283137115_p18744412114116"></a>varbit_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p16744212184115"><a name="en-us_topic_0283137115_p16744212184115"></a><a name="en-us_topic_0283137115_p16744212184115"></a>varbit_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p17447127418"><a name="en-us_topic_0283137115_p17447127418"></a><a name="en-us_topic_0283137115_p17447127418"></a>varbit_send</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row127441512134110"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p147441112134117"><a name="en-us_topic_0283137115_p147441112134117"></a><a name="en-us_topic_0283137115_p147441112134117"></a>varbit_transform</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p6744151254116"><a name="en-us_topic_0283137115_p6744151254116"></a><a name="en-us_topic_0283137115_p6744151254116"></a>varbitcmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p27441812134119"><a name="en-us_topic_0283137115_p27441812134119"></a><a name="en-us_topic_0283137115_p27441812134119"></a>varbiteq</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1374461213414"><a name="en-us_topic_0283137115_p1374461213414"></a><a name="en-us_topic_0283137115_p1374461213414"></a>varbitge</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p15744512124111"><a name="en-us_topic_0283137115_p15744512124111"></a><a name="en-us_topic_0283137115_p15744512124111"></a>varbitgt</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p17441412184113"><a name="en-us_topic_0283137115_p17441412184113"></a><a name="en-us_topic_0283137115_p17441412184113"></a>varbitle</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p07452129414"><a name="en-us_topic_0283137115_p07452129414"></a><a name="en-us_topic_0283137115_p07452129414"></a>varbitlt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row147452120417"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p5745151254117"><a name="en-us_topic_0283137115_p5745151254117"></a><a name="en-us_topic_0283137115_p5745151254117"></a>varbitne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p47451912164116"><a name="en-us_topic_0283137115_p47451912164116"></a><a name="en-us_topic_0283137115_p47451912164116"></a>varbittypmodin</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p11745191214415"><a name="en-us_topic_0283137115_p11745191214415"></a><a name="en-us_topic_0283137115_p11745191214415"></a>varbittypmodout</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p7745512134111"><a name="en-us_topic_0283137115_p7745512134111"></a><a name="en-us_topic_0283137115_p7745512134111"></a>varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p12745151234110"><a name="en-us_topic_0283137115_p12745151234110"></a><a name="en-us_topic_0283137115_p12745151234110"></a>varchar_transform</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p3745121224118"><a name="en-us_topic_0283137115_p3745121224118"></a><a name="en-us_topic_0283137115_p3745121224118"></a>varcharin</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p074520127418"><a name="en-us_topic_0283137115_p074520127418"></a><a name="en-us_topic_0283137115_p074520127418"></a>varcharout</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row374551294117"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1874517123413"><a name="en-us_topic_0283137115_p1874517123413"></a><a name="en-us_topic_0283137115_p1874517123413"></a>varcharrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p97453124411"><a name="en-us_topic_0283137115_p97453124411"></a><a name="en-us_topic_0283137115_p97453124411"></a>varcharsend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1374521213416"><a name="en-us_topic_0283137115_p1374521213416"></a><a name="en-us_topic_0283137115_p1374521213416"></a>varchartypmodin</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p14745201213410"><a name="en-us_topic_0283137115_p14745201213410"></a><a name="en-us_topic_0283137115_p14745201213410"></a>varchartypmodout</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p87451612174114"><a name="en-us_topic_0283137115_p87451612174114"></a><a name="en-us_topic_0283137115_p87451612174114"></a>variance</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p9745131211417"><a name="en-us_topic_0283137115_p9745131211417"></a><a name="en-us_topic_0283137115_p9745131211417"></a>void_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p13745101217411"><a name="en-us_topic_0283137115_p13745101217411"></a><a name="en-us_topic_0283137115_p13745101217411"></a>void_out</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1174517128415"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p8745101204110"><a name="en-us_topic_0283137115_p8745101204110"></a><a name="en-us_topic_0283137115_p8745101204110"></a>void_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1274561218413"><a name="en-us_topic_0283137115_p1274561218413"></a><a name="en-us_topic_0283137115_p1274561218413"></a>void_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p157452128414"><a name="en-us_topic_0283137115_p157452128414"></a><a name="en-us_topic_0283137115_p157452128414"></a>win_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p167456128412"><a name="en-us_topic_0283137115_p167456128412"></a><a name="en-us_topic_0283137115_p167456128412"></a>win1250_to_latin2</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p117455129412"><a name="en-us_topic_0283137115_p117455129412"></a><a name="en-us_topic_0283137115_p117455129412"></a>win1250_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p197451312174115"><a name="en-us_topic_0283137115_p197451312174115"></a><a name="en-us_topic_0283137115_p197451312174115"></a>win1251_to_iso</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p174515126416"><a name="en-us_topic_0283137115_p174515126416"></a><a name="en-us_topic_0283137115_p174515126416"></a>win1251_to_koi8r</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row2745181214413"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p16745161218413"><a name="en-us_topic_0283137115_p16745161218413"></a><a name="en-us_topic_0283137115_p16745161218413"></a>win1251_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p1674681214117"><a name="en-us_topic_0283137115_p1674681214117"></a><a name="en-us_topic_0283137115_p1674681214117"></a>win1251_to_win866</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p874616121416"><a name="en-us_topic_0283137115_p874616121416"></a><a name="en-us_topic_0283137115_p874616121416"></a>win866_to_iso</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1274618129417"><a name="en-us_topic_0283137115_p1274618129417"></a><a name="en-us_topic_0283137115_p1274618129417"></a>win866_to_koi8r</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p157461912134115"><a name="en-us_topic_0283137115_p157461912134115"></a><a name="en-us_topic_0283137115_p157461912134115"></a>win866_to_mic</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p774641219413"><a name="en-us_topic_0283137115_p774641219413"></a><a name="en-us_topic_0283137115_p774641219413"></a>win866_to_win1251</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p374641212419"><a name="en-us_topic_0283137115_p374641212419"></a><a name="en-us_topic_0283137115_p374641212419"></a>xideq</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row274691215413"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p1074613121411"><a name="en-us_topic_0283137115_p1074613121411"></a><a name="en-us_topic_0283137115_p1074613121411"></a>xideqint4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p20746161220419"><a name="en-us_topic_0283137115_p20746161220419"></a><a name="en-us_topic_0283137115_p20746161220419"></a>xidin</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1274651234116"><a name="en-us_topic_0283137115_p1274651234116"></a><a name="en-us_topic_0283137115_p1274651234116"></a>xidout</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p47461612194114"><a name="en-us_topic_0283137115_p47461612194114"></a><a name="en-us_topic_0283137115_p47461612194114"></a>xidrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p1074641218414"><a name="en-us_topic_0283137115_p1074641218414"></a><a name="en-us_topic_0283137115_p1074641218414"></a>xidsend</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1274651215418"><a name="en-us_topic_0283137115_p1274651215418"></a><a name="en-us_topic_0283137115_p1274651215418"></a>xml</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p1674611204119"><a name="en-us_topic_0283137115_p1674611204119"></a><a name="en-us_topic_0283137115_p1674611204119"></a>xml_in</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1874619124410"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p10746141216412"><a name="en-us_topic_0283137115_p10746141216412"></a><a name="en-us_topic_0283137115_p10746141216412"></a>xml_is_well_formed</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p874616121417"><a name="en-us_topic_0283137115_p874616121417"></a><a name="en-us_topic_0283137115_p874616121417"></a>xml_is_well_formed_content</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p207461122414"><a name="en-us_topic_0283137115_p207461122414"></a><a name="en-us_topic_0283137115_p207461122414"></a>xml_is_well_formed_document</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p1974619121418"><a name="en-us_topic_0283137115_p1974619121418"></a><a name="en-us_topic_0283137115_p1974619121418"></a>xml_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p174631212415"><a name="en-us_topic_0283137115_p174631212415"></a><a name="en-us_topic_0283137115_p174631212415"></a>xml_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p3746201216412"><a name="en-us_topic_0283137115_p3746201216412"></a><a name="en-us_topic_0283137115_p3746201216412"></a>xml_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p17746151214412"><a name="en-us_topic_0283137115_p17746151214412"></a><a name="en-us_topic_0283137115_p17746151214412"></a>xmlagg</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row18746512204113"><td class="cellrowborder" valign="top" width="17.73%"><p id="en-us_topic_0283137115_p574641219419"><a name="en-us_topic_0283137115_p574641219419"></a><a name="en-us_topic_0283137115_p574641219419"></a>xmlcomment</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.08%"><p id="en-us_topic_0283137115_p187469123410"><a name="en-us_topic_0283137115_p187469123410"></a><a name="en-us_topic_0283137115_p187469123410"></a>xmlconcat2</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.59%"><p id="en-us_topic_0283137115_p1274641294110"><a name="en-us_topic_0283137115_p1274641294110"></a><a name="en-us_topic_0283137115_p1274641294110"></a>xmlexists</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.73%"><p id="en-us_topic_0283137115_p3747111218417"><a name="en-us_topic_0283137115_p3747111218417"></a><a name="en-us_topic_0283137115_p3747111218417"></a>xmlvalidate</p>
    </td>
    <td class="cellrowborder" valign="top" width="12.889999999999999%"><p id="en-us_topic_0283137115_p151020517328"><a name="en-us_topic_0283137115_p151020517328"></a><a name="en-us_topic_0283137115_p151020517328"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="11.1%"><p id="en-us_topic_0283137115_p1846618553211"><a name="en-us_topic_0283137115_p1846618553211"></a><a name="en-us_topic_0283137115_p1846618553211"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="17.88%"><p id="en-us_topic_0283137115_p07471612184111"><a name="en-us_topic_0283137115_p07471612184111"></a><a name="en-us_topic_0283137115_p07471612184111"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>

-   The following table lists the functions used to implement internal system functions. You are not advised to use them.

    <a name="en-us_topic_0283137115_table15121828114712"></a>
    <table><tbody><tr id="en-us_topic_0283137115_row16131028104719"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p16131028194719"><a name="en-us_topic_0283137115_p16131028194719"></a><a name="en-us_topic_0283137115_p16131028194719"></a>_pg_keysequal</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p91352810473"><a name="en-us_topic_0283137115_p91352810473"></a><a name="en-us_topic_0283137115_p91352810473"></a>abstime_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1914172854714"><a name="en-us_topic_0283137115_p1914172854714"></a><a name="en-us_topic_0283137115_p1914172854714"></a>abstime_to_smalldatetime</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p111432834715"><a name="en-us_topic_0283137115_p111432834715"></a><a name="en-us_topic_0283137115_p111432834715"></a>add_job_class_depend</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p181402874719"><a name="en-us_topic_0283137115_p181402874719"></a><a name="en-us_topic_0283137115_p181402874719"></a>alldigitsmasking</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p2014142854711"><a name="en-us_topic_0283137115_p2014142854711"></a><a name="en-us_topic_0283137115_p2014142854711"></a>array_extend</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p015028164715"><a name="en-us_topic_0283137115_p015028164715"></a><a name="en-us_topic_0283137115_p015028164715"></a>ascii_to_mic</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row171512834718"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p91552810472"><a name="en-us_topic_0283137115_p91552810472"></a><a name="en-us_topic_0283137115_p91552810472"></a>ascii_to_utf8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p1215132834717"><a name="en-us_topic_0283137115_p1215132834717"></a><a name="en-us_topic_0283137115_p1215132834717"></a>bigint_tid</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p141520282470"><a name="en-us_topic_0283137115_p141520282470"></a><a name="en-us_topic_0283137115_p141520282470"></a>bind_variable</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p17160284472"><a name="en-us_topic_0283137115_p17160284472"></a><a name="en-us_topic_0283137115_p17160284472"></a>lob_append</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p016328154712"><a name="en-us_topic_0283137115_p016328154712"></a><a name="en-us_topic_0283137115_p016328154712"></a>lob_compare</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p121662804716"><a name="en-us_topic_0283137115_p121662804716"></a><a name="en-us_topic_0283137115_p121662804716"></a>bool_int1</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p1171428184712"><a name="en-us_topic_0283137115_p1171428184712"></a><a name="en-us_topic_0283137115_p1171428184712"></a>bool_int2</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1517142874711"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p19171289474"><a name="en-us_topic_0283137115_p19171289474"></a><a name="en-us_topic_0283137115_p19171289474"></a>bool_int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p418228164713"><a name="en-us_topic_0283137115_p418228164713"></a><a name="en-us_topic_0283137115_p418228164713"></a>bpchar_date</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p11882814715"><a name="en-us_topic_0283137115_p11882814715"></a><a name="en-us_topic_0283137115_p11882814715"></a>bpchar_float4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p618928134715"><a name="en-us_topic_0283137115_p618928134715"></a><a name="en-us_topic_0283137115_p618928134715"></a>bpchar_float8</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p91872812472"><a name="en-us_topic_0283137115_p91872812472"></a><a name="en-us_topic_0283137115_p91872812472"></a>bpchar_int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p181972884718"><a name="en-us_topic_0283137115_p181972884718"></a><a name="en-us_topic_0283137115_p181972884718"></a>bpchar_int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p1119132814479"><a name="en-us_topic_0283137115_p1119132814479"></a><a name="en-us_topic_0283137115_p1119132814479"></a>bpchar_numeric</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row119122864714"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p1119728104716"><a name="en-us_topic_0283137115_p1119728104716"></a><a name="en-us_topic_0283137115_p1119728104716"></a>bpchar_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p219172864714"><a name="en-us_topic_0283137115_p219172864714"></a><a name="en-us_topic_0283137115_p219172864714"></a>bpchar_to_smalldatetime</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p120162894717"><a name="en-us_topic_0283137115_p120162894717"></a><a name="en-us_topic_0283137115_p120162894717"></a>btmerge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p62010289474"><a name="en-us_topic_0283137115_p62010289474"></a><a name="en-us_topic_0283137115_p62010289474"></a>bucketchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p52042834720"><a name="en-us_topic_0283137115_p52042834720"></a><a name="en-us_topic_0283137115_p52042834720"></a>bucketdate</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p520102814719"><a name="en-us_topic_0283137115_p520102814719"></a><a name="en-us_topic_0283137115_p520102814719"></a>bucketfloat4</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p0212283472"><a name="en-us_topic_0283137115_p0212283472"></a><a name="en-us_topic_0283137115_p0212283472"></a>bucketfloat8</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row121162814710"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p12211128174712"><a name="en-us_topic_0283137115_p12211128174712"></a><a name="en-us_topic_0283137115_p12211128174712"></a>bucketint1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p32152813477"><a name="en-us_topic_0283137115_p32152813477"></a><a name="en-us_topic_0283137115_p32152813477"></a>bucketint2</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p14214289475"><a name="en-us_topic_0283137115_p14214289475"></a><a name="en-us_topic_0283137115_p14214289475"></a>bucketint2vector</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p12212844711"><a name="en-us_topic_0283137115_p12212844711"></a><a name="en-us_topic_0283137115_p12212844711"></a>bucketint4</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p322122834716"><a name="en-us_topic_0283137115_p322122834716"></a><a name="en-us_topic_0283137115_p322122834716"></a>bucketint8</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p192342811477"><a name="en-us_topic_0283137115_p192342811477"></a><a name="en-us_topic_0283137115_p192342811477"></a>bucketinterval</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p82362874718"><a name="en-us_topic_0283137115_p82362874718"></a><a name="en-us_topic_0283137115_p82362874718"></a>bucketname</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row423122810475"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p152362844716"><a name="en-us_topic_0283137115_p152362844716"></a><a name="en-us_topic_0283137115_p152362844716"></a>bucketnumeric</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p22382818471"><a name="en-us_topic_0283137115_p22382818471"></a><a name="en-us_topic_0283137115_p22382818471"></a>bucketnvarchar2</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p424202824715"><a name="en-us_topic_0283137115_p424202824715"></a><a name="en-us_topic_0283137115_p424202824715"></a>bucketoid</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p3243284476"><a name="en-us_topic_0283137115_p3243284476"></a><a name="en-us_topic_0283137115_p3243284476"></a>bucketoidvector</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p10241828144714"><a name="en-us_topic_0283137115_p10241828144714"></a><a name="en-us_topic_0283137115_p10241828144714"></a>bucketraw</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p102411283470"><a name="en-us_topic_0283137115_p102411283470"></a><a name="en-us_topic_0283137115_p102411283470"></a>bucketreltime</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p142502810474"><a name="en-us_topic_0283137115_p142502810474"></a><a name="en-us_topic_0283137115_p142502810474"></a>bucketsmalldatetime</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1425172812479"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p925182818475"><a name="en-us_topic_0283137115_p925182818475"></a><a name="en-us_topic_0283137115_p925182818475"></a>buckettext</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p125102816479"><a name="en-us_topic_0283137115_p125102816479"></a><a name="en-us_topic_0283137115_p125102816479"></a>buckettime</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p152542864715"><a name="en-us_topic_0283137115_p152542864715"></a><a name="en-us_topic_0283137115_p152542864715"></a>buckettimestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p7261528184719"><a name="en-us_topic_0283137115_p7261528184719"></a><a name="en-us_topic_0283137115_p7261528184719"></a>buckettimestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p19261628154719"><a name="en-us_topic_0283137115_p19261628154719"></a><a name="en-us_topic_0283137115_p19261628154719"></a>buckettimetz</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p92613281476"><a name="en-us_topic_0283137115_p92613281476"></a><a name="en-us_topic_0283137115_p92613281476"></a>bucketuuid</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p126728134711"><a name="en-us_topic_0283137115_p126728134711"></a><a name="en-us_topic_0283137115_p126728134711"></a>bucketvarchar</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row72732819472"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p22722874711"><a name="en-us_topic_0283137115_p22722874711"></a><a name="en-us_topic_0283137115_p22722874711"></a>cancel</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p327102834710"><a name="en-us_topic_0283137115_p327102834710"></a><a name="en-us_topic_0283137115_p327102834710"></a>cash_div_int1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1528328144713"><a name="en-us_topic_0283137115_p1528328144713"></a><a name="en-us_topic_0283137115_p1528328144713"></a>cash_mul_int1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p5281628184710"><a name="en-us_topic_0283137115_p5281628184710"></a><a name="en-us_topic_0283137115_p5281628184710"></a>cbtreebuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p19281528134718"><a name="en-us_topic_0283137115_p19281528134718"></a><a name="en-us_topic_0283137115_p19281528134718"></a>cbtreecanreturn</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p32818285476"><a name="en-us_topic_0283137115_p32818285476"></a><a name="en-us_topic_0283137115_p32818285476"></a>cbtreecostestimate</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p13298283473"><a name="en-us_topic_0283137115_p13298283473"></a><a name="en-us_topic_0283137115_p13298283473"></a>cbtreegetbitmap</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row62992884710"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p429728154718"><a name="en-us_topic_0283137115_p429728154718"></a><a name="en-us_topic_0283137115_p429728154718"></a>cbtreegettuple</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p1429142804713"><a name="en-us_topic_0283137115_p1429142804713"></a><a name="en-us_topic_0283137115_p1429142804713"></a>cbtreeoptions</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p15303282476"><a name="en-us_topic_0283137115_p15303282476"></a><a name="en-us_topic_0283137115_p15303282476"></a>cginbuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p63018280472"><a name="en-us_topic_0283137115_p63018280472"></a><a name="en-us_topic_0283137115_p63018280472"></a>cgingetbitmap</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p1630112819473"><a name="en-us_topic_0283137115_p1630112819473"></a><a name="en-us_topic_0283137115_p1630112819473"></a>checksum</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p133013284472"><a name="en-us_topic_0283137115_p133013284472"></a><a name="en-us_topic_0283137115_p133013284472"></a>checksumtext_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p5319289478"><a name="en-us_topic_0283137115_p5319289478"></a><a name="en-us_topic_0283137115_p5319289478"></a>comm_check_connection_status</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row133182814472"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p17316280477"><a name="en-us_topic_0283137115_p17316280477"></a><a name="en-us_topic_0283137115_p17316280477"></a>complex_array_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p193112820472"><a name="en-us_topic_0283137115_p193112820472"></a><a name="en-us_topic_0283137115_p193112820472"></a>create_wlm_instance_statistics_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1032192816470"><a name="en-us_topic_0283137115_p1032192816470"></a><a name="en-us_topic_0283137115_p1032192816470"></a>creditcardmasking</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p123219284473"><a name="en-us_topic_0283137115_p123219284473"></a><a name="en-us_topic_0283137115_p123219284473"></a>cstore_tid_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p532102818479"><a name="en-us_topic_0283137115_p532102818479"></a><a name="en-us_topic_0283137115_p532102818479"></a>cupointer_bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p13321728164715"><a name="en-us_topic_0283137115_p13321728164715"></a><a name="en-us_topic_0283137115_p13321728164715"></a>date_bpchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p233328204717"><a name="en-us_topic_0283137115_p233328204717"></a><a name="en-us_topic_0283137115_p233328204717"></a>date_list_agg_noarg2_transfn</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row83312287479"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p14331128144716"><a name="en-us_topic_0283137115_p14331128144716"></a><a name="en-us_topic_0283137115_p14331128144716"></a>date_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p1234328164719"><a name="en-us_topic_0283137115_p1234328164719"></a><a name="en-us_topic_0283137115_p1234328164719"></a>date_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1834202815473"><a name="en-us_topic_0283137115_p1834202815473"></a><a name="en-us_topic_0283137115_p1834202815473"></a>date_varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p634142854716"><a name="en-us_topic_0283137115_p634142854716"></a><a name="en-us_topic_0283137115_p634142854716"></a>delta</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p19342028184711"><a name="en-us_topic_0283137115_p19342028184711"></a><a name="en-us_topic_0283137115_p19342028184711"></a>delta_final</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p103518285472"><a name="en-us_topic_0283137115_p103518285472"></a><a name="en-us_topic_0283137115_p103518285472"></a>delta_internal</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p1835172811470"><a name="en-us_topic_0283137115_p1835172811470"></a><a name="en-us_topic_0283137115_p1835172811470"></a>disable_conn</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row235182834711"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p1035172816473"><a name="en-us_topic_0283137115_p1035172816473"></a><a name="en-us_topic_0283137115_p1035172816473"></a>dist_fdw_handler</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p43532834718"><a name="en-us_topic_0283137115_p43532834718"></a><a name="en-us_topic_0283137115_p43532834718"></a>dist_fdw_validator</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p9361128144714"><a name="en-us_topic_0283137115_p9361128144714"></a><a name="en-us_topic_0283137115_p9361128144714"></a>distributed_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p93612286477"><a name="en-us_topic_0283137115_p93612286477"></a><a name="en-us_topic_0283137115_p93612286477"></a>enum_cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p4365281473"><a name="en-us_topic_0283137115_p4365281473"></a><a name="en-us_topic_0283137115_p4365281473"></a>enum_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p636128144713"><a name="en-us_topic_0283137115_p636128144713"></a><a name="en-us_topic_0283137115_p636128144713"></a>enum_first</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p133842818476"><a name="en-us_topic_0283137115_p133842818476"></a><a name="en-us_topic_0283137115_p133842818476"></a>enum_ge</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1438028124713"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p143913283474"><a name="en-us_topic_0283137115_p143913283474"></a><a name="en-us_topic_0283137115_p143913283474"></a>enum_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p2394286477"><a name="en-us_topic_0283137115_p2394286477"></a><a name="en-us_topic_0283137115_p2394286477"></a>enum_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p739112834710"><a name="en-us_topic_0283137115_p739112834710"></a><a name="en-us_topic_0283137115_p739112834710"></a>enum_larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p239162814477"><a name="en-us_topic_0283137115_p239162814477"></a><a name="en-us_topic_0283137115_p239162814477"></a>enum_last</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p240202816478"><a name="en-us_topic_0283137115_p240202816478"></a><a name="en-us_topic_0283137115_p240202816478"></a>enum_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p184062817475"><a name="en-us_topic_0283137115_p184062817475"></a><a name="en-us_topic_0283137115_p184062817475"></a>enum_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p134012288479"><a name="en-us_topic_0283137115_p134012288479"></a><a name="en-us_topic_0283137115_p134012288479"></a>f4toi1</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1640102814715"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p9411628114718"><a name="en-us_topic_0283137115_p9411628114718"></a><a name="en-us_topic_0283137115_p9411628114718"></a>f8toi1</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p14411128164715"><a name="en-us_topic_0283137115_p14411128164715"></a><a name="en-us_topic_0283137115_p14411128164715"></a>file_fdw_handler</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1941122864713"><a name="en-us_topic_0283137115_p1941122864713"></a><a name="en-us_topic_0283137115_p1941122864713"></a>file_fdw_validator</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p11411528164717"><a name="en-us_topic_0283137115_p11411528164717"></a><a name="en-us_topic_0283137115_p11411528164717"></a>fill</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p164115285477"><a name="en-us_topic_0283137115_p164115285477"></a><a name="en-us_topic_0283137115_p164115285477"></a>float4_bpchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p342028164717"><a name="en-us_topic_0283137115_p342028164717"></a><a name="en-us_topic_0283137115_p342028164717"></a>float4_list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p34222844715"><a name="en-us_topic_0283137115_p34222844715"></a><a name="en-us_topic_0283137115_p34222844715"></a>float4_list_agg_transfn</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row142728174714"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p64252874713"><a name="en-us_topic_0283137115_p64252874713"></a><a name="en-us_topic_0283137115_p64252874713"></a>float4_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p443122844719"><a name="en-us_topic_0283137115_p443122844719"></a><a name="en-us_topic_0283137115_p443122844719"></a>float4_varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1343132812475"><a name="en-us_topic_0283137115_p1343132812475"></a><a name="en-us_topic_0283137115_p1343132812475"></a>float8_bpchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p184322819473"><a name="en-us_topic_0283137115_p184322819473"></a><a name="en-us_topic_0283137115_p184322819473"></a>float8_interval</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p2043182820473"><a name="en-us_topic_0283137115_p2043182820473"></a><a name="en-us_topic_0283137115_p2043182820473"></a>float8_list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p643122812474"><a name="en-us_topic_0283137115_p643122812474"></a><a name="en-us_topic_0283137115_p643122812474"></a>float8_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p344112864718"><a name="en-us_topic_0283137115_p344112864718"></a><a name="en-us_topic_0283137115_p344112864718"></a>float8_text</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row184462874713"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p174472854717"><a name="en-us_topic_0283137115_p174472854717"></a><a name="en-us_topic_0283137115_p174472854717"></a>float8_varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p1944628114713"><a name="en-us_topic_0283137115_p1944628114713"></a><a name="en-us_topic_0283137115_p1944628114713"></a>flush</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p14552894717"><a name="en-us_topic_0283137115_p14552894717"></a><a name="en-us_topic_0283137115_p14552894717"></a>format_write</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p94518287477"><a name="en-us_topic_0283137115_p94518287477"></a><a name="en-us_topic_0283137115_p94518287477"></a>fullemailmasking</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p24517281472"><a name="en-us_topic_0283137115_p24517281472"></a><a name="en-us_topic_0283137115_p24517281472"></a>gap_fill_internal</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p13457286478"><a name="en-us_topic_0283137115_p13457286478"></a><a name="en-us_topic_0283137115_p13457286478"></a>gc_fdw_handler</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p845228114715"><a name="en-us_topic_0283137115_p845228114715"></a><a name="en-us_topic_0283137115_p845228114715"></a>gc_fdw_validator</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row17469289476"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p44662854720"><a name="en-us_topic_0283137115_p44662854720"></a><a name="en-us_topic_0283137115_p44662854720"></a>zhprs_end</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p146152816472"><a name="en-us_topic_0283137115_p146152816472"></a><a name="en-us_topic_0283137115_p146152816472"></a>get_attr</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p3461628124717"><a name="en-us_topic_0283137115_p3461628124717"></a><a name="en-us_topic_0283137115_p3461628124717"></a>get_datanode_active_session</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p13472286478"><a name="en-us_topic_0283137115_p13472286478"></a><a name="en-us_topic_0283137115_p13472286478"></a>get_datanode_active_session_hist</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p104762812479"><a name="en-us_topic_0283137115_p104762812479"></a><a name="en-us_topic_0283137115_p104762812479"></a>get_db_source_datasize</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p64782812474"><a name="en-us_topic_0283137115_p64782812474"></a><a name="en-us_topic_0283137115_p64782812474"></a>get_delta_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p24872816477"><a name="en-us_topic_0283137115_p24872816477"></a><a name="en-us_topic_0283137115_p24872816477"></a>get_local_prepared_xact</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row16482028144711"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p194822894714"><a name="en-us_topic_0283137115_p194822894714"></a><a name="en-us_topic_0283137115_p194822894714"></a>get_prepared_pending_xid</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p15480286471"><a name="en-us_topic_0283137115_p15480286471"></a><a name="en-us_topic_0283137115_p15480286471"></a>get_remote_prepared_xacts</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p74812288471"><a name="en-us_topic_0283137115_p74812288471"></a><a name="en-us_topic_0283137115_p74812288471"></a>ginmerge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p6493284476"><a name="en-us_topic_0283137115_p6493284476"></a><a name="en-us_topic_0283137115_p6493284476"></a>gistmerge</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p1449132812479"><a name="en-us_topic_0283137115_p1449132812479"></a><a name="en-us_topic_0283137115_p1449132812479"></a>global_clean_prepared_xacts</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1049128144714"><a name="en-us_topic_0283137115_p1049128144714"></a><a name="en-us_topic_0283137115_p1049128144714"></a>gs_fault_inject</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p10501628164711"><a name="en-us_topic_0283137115_p10501628164711"></a><a name="en-us_topic_0283137115_p10501628164711"></a>gs_get_table_distribution</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row150172844713"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p450192874712"><a name="en-us_topic_0283137115_p450192874712"></a><a name="en-us_topic_0283137115_p450192874712"></a>gs_wlm_get_session_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p125122812473"><a name="en-us_topic_0283137115_p125122812473"></a><a name="en-us_topic_0283137115_p125122812473"></a>gs_wlm_get_user_session_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p175102814477"><a name="en-us_topic_0283137115_p175102814477"></a><a name="en-us_topic_0283137115_p175102814477"></a>gs_wlm_node_recover</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p13511728134710"><a name="en-us_topic_0283137115_p13511728134710"></a><a name="en-us_topic_0283137115_p13511728134710"></a>gs_wlm_persistent_user_resource_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p195210283471"><a name="en-us_topic_0283137115_p195210283471"></a><a name="en-us_topic_0283137115_p195210283471"></a>hashmerge</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1552132844719"><a name="en-us_topic_0283137115_p1552132844719"></a><a name="en-us_topic_0283137115_p1552132844719"></a>hextoraw</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p85322815470"><a name="en-us_topic_0283137115_p85322815470"></a><a name="en-us_topic_0283137115_p85322815470"></a>hll</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row35312804715"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p8539285477"><a name="en-us_topic_0283137115_p8539285477"></a><a name="en-us_topic_0283137115_p8539285477"></a>hll_add</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p5535280475"><a name="en-us_topic_0283137115_p5535280475"></a><a name="en-us_topic_0283137115_p5535280475"></a>hll_add_agg</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p954142814715"><a name="en-us_topic_0283137115_p954142814715"></a><a name="en-us_topic_0283137115_p954142814715"></a>hll_add_rev</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p1354202864713"><a name="en-us_topic_0283137115_p1354202864713"></a><a name="en-us_topic_0283137115_p1354202864713"></a>hll_add_trans0</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p115512814714"><a name="en-us_topic_0283137115_p115512814714"></a><a name="en-us_topic_0283137115_p115512814714"></a>hll_add_trans1</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p45572864720"><a name="en-us_topic_0283137115_p45572864720"></a><a name="en-us_topic_0283137115_p45572864720"></a>hll_add_trans2</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p8559282474"><a name="en-us_topic_0283137115_p8559282474"></a><a name="en-us_topic_0283137115_p8559282474"></a>hll_add_trans3</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1256132824714"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p1356112818471"><a name="en-us_topic_0283137115_p1356112818471"></a><a name="en-us_topic_0283137115_p1356112818471"></a>hll_add_trans4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p0567284478"><a name="en-us_topic_0283137115_p0567284478"></a><a name="en-us_topic_0283137115_p0567284478"></a>hll_cardinality</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p95762874713"><a name="en-us_topic_0283137115_p95762874713"></a><a name="en-us_topic_0283137115_p95762874713"></a>hll_hashval_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p55782894717"><a name="en-us_topic_0283137115_p55782894717"></a><a name="en-us_topic_0283137115_p55782894717"></a>hll_hashval_int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p95882894718"><a name="en-us_topic_0283137115_p95882894718"></a><a name="en-us_topic_0283137115_p95882894718"></a>hll_hashval_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p195819285478"><a name="en-us_topic_0283137115_p195819285478"></a><a name="en-us_topic_0283137115_p195819285478"></a>hll_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p158152854712"><a name="en-us_topic_0283137115_p158152854712"></a><a name="en-us_topic_0283137115_p158152854712"></a>hll_out</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row559182884711"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p155916286473"><a name="en-us_topic_0283137115_p155916286473"></a><a name="en-us_topic_0283137115_p155916286473"></a>hll_pack</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p1059132854712"><a name="en-us_topic_0283137115_p1059132854712"></a><a name="en-us_topic_0283137115_p1059132854712"></a>hll_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p460182813476"><a name="en-us_topic_0283137115_p460182813476"></a><a name="en-us_topic_0283137115_p460182813476"></a>hs_concat</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p36052864714"><a name="en-us_topic_0283137115_p36052864714"></a><a name="en-us_topic_0283137115_p36052864714"></a>hs_contained</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p061182844714"><a name="en-us_topic_0283137115_p061182844714"></a><a name="en-us_topic_0283137115_p061182844714"></a>hs_contains</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1861728204710"><a name="en-us_topic_0283137115_p1861728204710"></a><a name="en-us_topic_0283137115_p1861728204710"></a>hstore</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p56215283472"><a name="en-us_topic_0283137115_p56215283472"></a><a name="en-us_topic_0283137115_p56215283472"></a>hstore_in</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row46242811473"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p136220289473"><a name="en-us_topic_0283137115_p136220289473"></a><a name="en-us_topic_0283137115_p136220289473"></a>hstore_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p863728164712"><a name="en-us_topic_0283137115_p863728164712"></a><a name="en-us_topic_0283137115_p863728164712"></a>hstore_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1163142817472"><a name="en-us_topic_0283137115_p1163142817472"></a><a name="en-us_topic_0283137115_p1163142817472"></a>hstore_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p156332819479"><a name="en-us_topic_0283137115_p156332819479"></a><a name="en-us_topic_0283137115_p156332819479"></a>hstore_to_array</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p76316283475"><a name="en-us_topic_0283137115_p76316283475"></a><a name="en-us_topic_0283137115_p76316283475"></a>hstore_to_matrix</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p14641328134718"><a name="en-us_topic_0283137115_p14641328134718"></a><a name="en-us_topic_0283137115_p14641328134718"></a>hstore_version_diag</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p1642028124710"><a name="en-us_topic_0283137115_p1642028124710"></a><a name="en-us_topic_0283137115_p1642028124710"></a>i1tof4</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row064172854714"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p116418287478"><a name="en-us_topic_0283137115_p116418287478"></a><a name="en-us_topic_0283137115_p116418287478"></a>i1tof8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p15656289472"><a name="en-us_topic_0283137115_p15656289472"></a><a name="en-us_topic_0283137115_p15656289472"></a>i1toi2</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1654286474"><a name="en-us_topic_0283137115_p1654286474"></a><a name="en-us_topic_0283137115_p1654286474"></a>i1toi4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p765202864712"><a name="en-us_topic_0283137115_p765202864712"></a><a name="en-us_topic_0283137115_p765202864712"></a>i1toi8</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p665152844715"><a name="en-us_topic_0283137115_p665152844715"></a><a name="en-us_topic_0283137115_p665152844715"></a>i2toi1</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1661328104717"><a name="en-us_topic_0283137115_p1661328104717"></a><a name="en-us_topic_0283137115_p1661328104717"></a>i4toi1</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p966122820471"><a name="en-us_topic_0283137115_p966122820471"></a><a name="en-us_topic_0283137115_p966122820471"></a>i8toi1</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row0661028164710"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p16612810476"><a name="en-us_topic_0283137115_p16612810476"></a><a name="en-us_topic_0283137115_p16612810476"></a>int1_avg_accum</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p26752810477"><a name="en-us_topic_0283137115_p26752810477"></a><a name="en-us_topic_0283137115_p26752810477"></a>int1_bool</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p7671728174713"><a name="en-us_topic_0283137115_p7671728174713"></a><a name="en-us_topic_0283137115_p7671728174713"></a>int1_bpchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p11671728144711"><a name="en-us_topic_0283137115_p11671728144711"></a><a name="en-us_topic_0283137115_p11671728144711"></a>int1_mul_cash</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p267328174718"><a name="en-us_topic_0283137115_p267328174718"></a><a name="en-us_topic_0283137115_p267328174718"></a>int1_numeric</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p76892844716"><a name="en-us_topic_0283137115_p76892844716"></a><a name="en-us_topic_0283137115_p76892844716"></a>int1_nvarchar2</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p196811287474"><a name="en-us_topic_0283137115_p196811287474"></a><a name="en-us_topic_0283137115_p196811287474"></a>int1_text</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row136892844716"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p068132884711"><a name="en-us_topic_0283137115_p068132884711"></a><a name="en-us_topic_0283137115_p068132884711"></a>int1_varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p10691328144717"><a name="en-us_topic_0283137115_p10691328144717"></a><a name="en-us_topic_0283137115_p10691328144717"></a>int1abs</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p0699285471"><a name="en-us_topic_0283137115_p0699285471"></a><a name="en-us_topic_0283137115_p0699285471"></a>int1and</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p1569122819470"><a name="en-us_topic_0283137115_p1569122819470"></a><a name="en-us_topic_0283137115_p1569122819470"></a>int1cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p136912281476"><a name="en-us_topic_0283137115_p136912281476"></a><a name="en-us_topic_0283137115_p136912281476"></a>int1div</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1970142864713"><a name="en-us_topic_0283137115_p1970142864713"></a><a name="en-us_topic_0283137115_p1970142864713"></a>int1eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p167011282478"><a name="en-us_topic_0283137115_p167011282478"></a><a name="en-us_topic_0283137115_p167011282478"></a>int1ge</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1270162894712"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p1970182854716"><a name="en-us_topic_0283137115_p1970182854716"></a><a name="en-us_topic_0283137115_p1970182854716"></a>int1gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p1470428134712"><a name="en-us_topic_0283137115_p1470428134712"></a><a name="en-us_topic_0283137115_p1470428134712"></a>int1in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p571162816472"><a name="en-us_topic_0283137115_p571162816472"></a><a name="en-us_topic_0283137115_p571162816472"></a>int1inc</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p371122884712"><a name="en-us_topic_0283137115_p371122884712"></a><a name="en-us_topic_0283137115_p371122884712"></a>int1larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p27114287474"><a name="en-us_topic_0283137115_p27114287474"></a><a name="en-us_topic_0283137115_p27114287474"></a>int1le</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p17142817476"><a name="en-us_topic_0283137115_p17142817476"></a><a name="en-us_topic_0283137115_p17142817476"></a>int1lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p107214284471"><a name="en-us_topic_0283137115_p107214284471"></a><a name="en-us_topic_0283137115_p107214284471"></a>int1mi</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row672928154715"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p772112813474"><a name="en-us_topic_0283137115_p772112813474"></a><a name="en-us_topic_0283137115_p772112813474"></a>int1mod</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p1772142854716"><a name="en-us_topic_0283137115_p1772142854716"></a><a name="en-us_topic_0283137115_p1772142854716"></a>int1mul</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p8732028124715"><a name="en-us_topic_0283137115_p8732028124715"></a><a name="en-us_topic_0283137115_p8732028124715"></a>int1ne</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p97311287472"><a name="en-us_topic_0283137115_p97311287472"></a><a name="en-us_topic_0283137115_p97311287472"></a>int1not</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p673102810477"><a name="en-us_topic_0283137115_p673102810477"></a><a name="en-us_topic_0283137115_p673102810477"></a>int1or</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p37332854715"><a name="en-us_topic_0283137115_p37332854715"></a><a name="en-us_topic_0283137115_p37332854715"></a>int1out</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p197422864717"><a name="en-us_topic_0283137115_p197422864717"></a><a name="en-us_topic_0283137115_p197422864717"></a>int1pl</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row6743286474"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p37442814720"><a name="en-us_topic_0283137115_p37442814720"></a><a name="en-us_topic_0283137115_p37442814720"></a>int1recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p117411286476"><a name="en-us_topic_0283137115_p117411286476"></a><a name="en-us_topic_0283137115_p117411286476"></a>int1send</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1675192804710"><a name="en-us_topic_0283137115_p1675192804710"></a><a name="en-us_topic_0283137115_p1675192804710"></a>int1shl</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p137513281477"><a name="en-us_topic_0283137115_p137513281477"></a><a name="en-us_topic_0283137115_p137513281477"></a>int1shr</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p77520285476"><a name="en-us_topic_0283137115_p77520285476"></a><a name="en-us_topic_0283137115_p77520285476"></a>int1smaller</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p675112814710"><a name="en-us_topic_0283137115_p675112814710"></a><a name="en-us_topic_0283137115_p675112814710"></a>int1um</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p1576328204717"><a name="en-us_topic_0283137115_p1576328204717"></a><a name="en-us_topic_0283137115_p1576328204717"></a>int1up</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row476172813475"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p576112874716"><a name="en-us_topic_0283137115_p576112874716"></a><a name="en-us_topic_0283137115_p576112874716"></a>int1xor</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p107619289477"><a name="en-us_topic_0283137115_p107619289477"></a><a name="en-us_topic_0283137115_p107619289477"></a>int2_bool</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p187632820478"><a name="en-us_topic_0283137115_p187632820478"></a><a name="en-us_topic_0283137115_p187632820478"></a>int2_bpchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p37752811472"><a name="en-us_topic_0283137115_p37752811472"></a><a name="en-us_topic_0283137115_p37752811472"></a>int2_list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p777202874718"><a name="en-us_topic_0283137115_p777202874718"></a><a name="en-us_topic_0283137115_p777202874718"></a>int2_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p8771128194711"><a name="en-us_topic_0283137115_p8771128194711"></a><a name="en-us_topic_0283137115_p8771128194711"></a>int2_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p077182811470"><a name="en-us_topic_0283137115_p077182811470"></a><a name="en-us_topic_0283137115_p077182811470"></a>int2_varchar</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row57812287478"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p1778152894719"><a name="en-us_topic_0283137115_p1778152894719"></a><a name="en-us_topic_0283137115_p1778152894719"></a>int4_bpchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p197815282476"><a name="en-us_topic_0283137115_p197815282476"></a><a name="en-us_topic_0283137115_p197815282476"></a>int4_list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p117812815475"><a name="en-us_topic_0283137115_p117812815475"></a><a name="en-us_topic_0283137115_p117812815475"></a>int4_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p1479132813478"><a name="en-us_topic_0283137115_p1479132813478"></a><a name="en-us_topic_0283137115_p1479132813478"></a>int4_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p2791528154715"><a name="en-us_topic_0283137115_p2791528154715"></a><a name="en-us_topic_0283137115_p2791528154715"></a>int4_varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p197962818478"><a name="en-us_topic_0283137115_p197962818478"></a><a name="en-us_topic_0283137115_p197962818478"></a>int8_bool</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p77942818471"><a name="en-us_topic_0283137115_p77942818471"></a><a name="en-us_topic_0283137115_p77942818471"></a>int8_bpchar</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row680162817477"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p1880122854718"><a name="en-us_topic_0283137115_p1880122854718"></a><a name="en-us_topic_0283137115_p1880122854718"></a>int8_list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p2080162814717"><a name="en-us_topic_0283137115_p2080162814717"></a><a name="en-us_topic_0283137115_p2080162814717"></a>int8_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p180528194711"><a name="en-us_topic_0283137115_p180528194711"></a><a name="en-us_topic_0283137115_p180528194711"></a>int8_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p081162844714"><a name="en-us_topic_0283137115_p081162844714"></a><a name="en-us_topic_0283137115_p081162844714"></a>int8_varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p681628164711"><a name="en-us_topic_0283137115_p681628164711"></a><a name="en-us_topic_0283137115_p681628164711"></a>interval_list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1781162812473"><a name="en-us_topic_0283137115_p1781162812473"></a><a name="en-us_topic_0283137115_p1781162812473"></a>interval_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p13812280472"><a name="en-us_topic_0283137115_p13812280472"></a><a name="en-us_topic_0283137115_p13812280472"></a>intervaltonum</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row481192824717"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p158213289477"><a name="en-us_topic_0283137115_p158213289477"></a><a name="en-us_topic_0283137115_p158213289477"></a>is_contain_namespace</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p682128194720"><a name="en-us_topic_0283137115_p682128194720"></a><a name="en-us_topic_0283137115_p682128194720"></a>is_oid_in_group_members</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p682112834710"><a name="en-us_topic_0283137115_p682112834710"></a><a name="en-us_topic_0283137115_p682112834710"></a>zhprs_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p98272834711"><a name="en-us_topic_0283137115_p98272834711"></a><a name="en-us_topic_0283137115_p98272834711"></a>isdefined</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p883132824711"><a name="en-us_topic_0283137115_p883132824711"></a><a name="en-us_topic_0283137115_p883132824711"></a>isubmit_on_nodes_internal</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p6831328154715"><a name="en-us_topic_0283137115_p6831328154715"></a><a name="en-us_topic_0283137115_p6831328154715"></a>smgreq(a smgr, b smgr)</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p19831228164714"><a name="en-us_topic_0283137115_p19831228164714"></a><a name="en-us_topic_0283137115_p19831228164714"></a>list_agg_finalfn</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row7841928124711"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p198482824716"><a name="en-us_topic_0283137115_p198482824716"></a><a name="en-us_topic_0283137115_p198482824716"></a>list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p4842289475"><a name="en-us_topic_0283137115_p4842289475"></a><a name="en-us_topic_0283137115_p4842289475"></a>list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1584328104713"><a name="en-us_topic_0283137115_p1584328104713"></a><a name="en-us_topic_0283137115_p1584328104713"></a>listagg</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p15851728144712"><a name="en-us_topic_0283137115_p15851728144712"></a><a name="en-us_topic_0283137115_p15851728144712"></a>log_fdw_handler</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p18532864719"><a name="en-us_topic_0283137115_p18532864719"></a><a name="en-us_topic_0283137115_p18532864719"></a>log_fdw_validator</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p158592844711"><a name="en-us_topic_0283137115_p158592844711"></a><a name="en-us_topic_0283137115_p158592844711"></a>mic_to_ascii</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p118572817471"><a name="en-us_topic_0283137115_p118572817471"></a><a name="en-us_topic_0283137115_p118572817471"></a>ngram_end</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row286828164719"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p88615289476"><a name="en-us_topic_0283137115_p88615289476"></a><a name="en-us_topic_0283137115_p88615289476"></a>ngram_lextype</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p10862028174714"><a name="en-us_topic_0283137115_p10862028174714"></a><a name="en-us_topic_0283137115_p10862028174714"></a>ngram_nexttoken</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p108614287474"><a name="en-us_topic_0283137115_p108614287474"></a><a name="en-us_topic_0283137115_p108614287474"></a>ngram_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p586172804718"><a name="en-us_topic_0283137115_p586172804718"></a><a name="en-us_topic_0283137115_p586172804718"></a>node_oid_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p148717289470"><a name="en-us_topic_0283137115_p148717289470"></a><a name="en-us_topic_0283137115_p148717289470"></a>numeric_bpchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1387182813471"><a name="en-us_topic_0283137115_p1387182813471"></a><a name="en-us_topic_0283137115_p1387182813471"></a>numeric_int1</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p10871428134716"><a name="en-us_topic_0283137115_p10871428134716"></a><a name="en-us_topic_0283137115_p10871428134716"></a>numeric_list_agg_noarg2_transfn</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row687728194720"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p1288928164716"><a name="en-us_topic_0283137115_p1288928164716"></a><a name="en-us_topic_0283137115_p1288928164716"></a>numeric_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p68822884712"><a name="en-us_topic_0283137115_p68822884712"></a><a name="en-us_topic_0283137115_p68822884712"></a>numeric_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p78862814718"><a name="en-us_topic_0283137115_p78862814718"></a><a name="en-us_topic_0283137115_p78862814718"></a>numeric_varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p1788192819472"><a name="en-us_topic_0283137115_p1788192819472"></a><a name="en-us_topic_0283137115_p1788192819472"></a>numtoday</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p1489152816471"><a name="en-us_topic_0283137115_p1489152816471"></a><a name="en-us_topic_0283137115_p1489152816471"></a>nvarchar2</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p13890281475"><a name="en-us_topic_0283137115_p13890281475"></a><a name="en-us_topic_0283137115_p13890281475"></a>nvarchar2in</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p98912864712"><a name="en-us_topic_0283137115_p98912864712"></a><a name="en-us_topic_0283137115_p98912864712"></a>nvarchar2out</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row15891828194717"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p889102844710"><a name="en-us_topic_0283137115_p889102844710"></a><a name="en-us_topic_0283137115_p889102844710"></a>nvarchar2recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p1690182819472"><a name="en-us_topic_0283137115_p1690182819472"></a><a name="en-us_topic_0283137115_p1690182819472"></a>nvarchar2send</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p119002864717"><a name="en-us_topic_0283137115_p119002864717"></a><a name="en-us_topic_0283137115_p119002864717"></a>nvarchar2typmodin</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p139062818473"><a name="en-us_topic_0283137115_p139062818473"></a><a name="en-us_topic_0283137115_p139062818473"></a>nvarchar2typmodout</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p790172811474"><a name="en-us_topic_0283137115_p790172811474"></a><a name="en-us_topic_0283137115_p790172811474"></a>oidvectorin_extend</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1391122844715"><a name="en-us_topic_0283137115_p1391122844715"></a><a name="en-us_topic_0283137115_p1391122844715"></a>oidvectorout_extend</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p991172844711"><a name="en-us_topic_0283137115_p991172844711"></a><a name="en-us_topic_0283137115_p991172844711"></a>oidvectorrecv_extend</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row10911928104710"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p291728134714"><a name="en-us_topic_0283137115_p291728134714"></a><a name="en-us_topic_0283137115_p291728134714"></a>oidvectorsend_extend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p892192815476"><a name="en-us_topic_0283137115_p892192815476"></a><a name="en-us_topic_0283137115_p892192815476"></a>pg_autovac_coordinator</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1692172824718"><a name="en-us_topic_0283137115_p1692172824718"></a><a name="en-us_topic_0283137115_p1692172824718"></a>pg_buffercache_pages</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p1892228114714"><a name="en-us_topic_0283137115_p1892228114714"></a><a name="en-us_topic_0283137115_p1892228114714"></a>pg_check_xidlimit</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p99214286475"><a name="en-us_topic_0283137115_p99214286475"></a><a name="en-us_topic_0283137115_p99214286475"></a>pg_clean_region_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p59315285477"><a name="en-us_topic_0283137115_p59315285477"></a><a name="en-us_topic_0283137115_p59315285477"></a>pg_get_delta_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p1193172854716"><a name="en-us_topic_0283137115_p1193172854716"></a><a name="en-us_topic_0283137115_p1193172854716"></a>pg_get_replication_slot_name</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row9941228124713"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p1394182864713"><a name="en-us_topic_0283137115_p1394182864713"></a><a name="en-us_topic_0283137115_p1394182864713"></a>pg_get_running_xacts</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p169422864714"><a name="en-us_topic_0283137115_p169422864714"></a><a name="en-us_topic_0283137115_p169422864714"></a>pg_get_variable_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p595152874714"><a name="en-us_topic_0283137115_p595152874714"></a><a name="en-us_topic_0283137115_p595152874714"></a>pg_get_xidlimit</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p195528184715"><a name="en-us_topic_0283137115_p195528184715"></a><a name="en-us_topic_0283137115_p195528184715"></a>pg_log_comm_status</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p159616285476"><a name="en-us_topic_0283137115_p159616285476"></a><a name="en-us_topic_0283137115_p159616285476"></a>pg_nodes_memmon</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1696128204711"><a name="en-us_topic_0283137115_p1696128204711"></a><a name="en-us_topic_0283137115_p1696128204711"></a>pg_parse_clog</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p129692815472"><a name="en-us_topic_0283137115_p129692815472"></a><a name="en-us_topic_0283137115_p129692815472"></a>pg_pool_ping</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1496102816473"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p397628124718"><a name="en-us_topic_0283137115_p397628124718"></a><a name="en-us_topic_0283137115_p397628124718"></a>pg_pool_validate</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p19712816470"><a name="en-us_topic_0283137115_p19712816470"></a><a name="en-us_topic_0283137115_p19712816470"></a>pg_relation_compression_ratio</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p10979284472"><a name="en-us_topic_0283137115_p10979284472"></a><a name="en-us_topic_0283137115_p10979284472"></a>pg_relation_with_compression</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p12971028114719"><a name="en-us_topic_0283137115_p12971028114719"></a><a name="en-us_topic_0283137115_p12971028114719"></a>pg_resume_bkp_flag</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p12981728104711"><a name="en-us_topic_0283137115_p12981728104711"></a><a name="en-us_topic_0283137115_p12981728104711"></a>pg_shared_memory_detail</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p49802812478"><a name="en-us_topic_0283137115_p49802812478"></a><a name="en-us_topic_0283137115_p49802812478"></a>pg_stat_file_recursive</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p598328194715"><a name="en-us_topic_0283137115_p598328194715"></a><a name="en-us_topic_0283137115_p598328194715"></a>pg_stat_get_activity_for_temptable</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row89813284474"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p7991828104715"><a name="en-us_topic_0283137115_p7991828104715"></a><a name="en-us_topic_0283137115_p7991828104715"></a>pg_stat_get_activity_ng</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p159922818472"><a name="en-us_topic_0283137115_p159922818472"></a><a name="en-us_topic_0283137115_p159922818472"></a>pg_stat_get_cgroup_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p099142818475"><a name="en-us_topic_0283137115_p099142818475"></a><a name="en-us_topic_0283137115_p099142818475"></a>pg_stat_get_realtime_info_internal</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p12993281479"><a name="en-us_topic_0283137115_p12993281479"></a><a name="en-us_topic_0283137115_p12993281479"></a>pg_stat_get_session_wlmstat</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p18100428194713"><a name="en-us_topic_0283137115_p18100428194713"></a><a name="en-us_topic_0283137115_p18100428194713"></a>pg_stat_get_wlm_ec_operator_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1510016288475"><a name="en-us_topic_0283137115_p1510016288475"></a><a name="en-us_topic_0283137115_p1510016288475"></a>pg_stat_get_wlm_instance_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p181001128174712"><a name="en-us_topic_0283137115_p181001128174712"></a><a name="en-us_topic_0283137115_p181001128174712"></a>pg_stat_get_wlm_instance_info_with_cleanup</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row14100112811474"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p410118281471"><a name="en-us_topic_0283137115_p410118281471"></a><a name="en-us_topic_0283137115_p410118281471"></a>pg_stat_get_wlm_node_resource_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p4101192816479"><a name="en-us_topic_0283137115_p4101192816479"></a><a name="en-us_topic_0283137115_p4101192816479"></a>pg_stat_get_wlm_operator_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p01011528144716"><a name="en-us_topic_0283137115_p01011528144716"></a><a name="en-us_topic_0283137115_p01011528144716"></a>pg_stat_get_wlm_realtime_ec_operator_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p91016281479"><a name="en-us_topic_0283137115_p91016281479"></a><a name="en-us_topic_0283137115_p91016281479"></a>pg_stat_get_wlm_realtime_operator_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p1910292804710"><a name="en-us_topic_0283137115_p1910292804710"></a><a name="en-us_topic_0283137115_p1910292804710"></a>pg_stat_get_wlm_realtime_session_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p10102112811472"><a name="en-us_topic_0283137115_p10102112811472"></a><a name="en-us_topic_0283137115_p10102112811472"></a>pg_stat_get_wlm_session_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p12102928194711"><a name="en-us_topic_0283137115_p12102928194711"></a><a name="en-us_topic_0283137115_p12102928194711"></a>pg_stat_get_wlm_session_info_internal</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row15102182814713"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p01031628124715"><a name="en-us_topic_0283137115_p01031628124715"></a><a name="en-us_topic_0283137115_p01031628124715"></a>pg_stat_get_wlm_session_iostat_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p710442820471"><a name="en-us_topic_0283137115_p710442820471"></a><a name="en-us_topic_0283137115_p710442820471"></a>pg_stat_get_wlm_statistics</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p14104628204714"><a name="en-us_topic_0283137115_p14104628204714"></a><a name="en-us_topic_0283137115_p14104628204714"></a>pg_stat_get_workload_struct_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p510592819479"><a name="en-us_topic_0283137115_p510592819479"></a><a name="en-us_topic_0283137115_p510592819479"></a>pg_tde_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p31052028194717"><a name="en-us_topic_0283137115_p31052028194717"></a><a name="en-us_topic_0283137115_p31052028194717"></a>pg_test_err_contain_err</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p61051628164710"><a name="en-us_topic_0283137115_p61051628164710"></a><a name="en-us_topic_0283137115_p61051628164710"></a>pgxc_cgroup_map_ng_conf</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p18105102812474"><a name="en-us_topic_0283137115_p18105102812474"></a><a name="en-us_topic_0283137115_p18105102812474"></a>pgxc_comm_delay</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1010619282474"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p8106228164713"><a name="en-us_topic_0283137115_p8106228164713"></a><a name="en-us_topic_0283137115_p8106228164713"></a>pgxc_comm_recv_stream</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p1410692834717"><a name="en-us_topic_0283137115_p1410692834717"></a><a name="en-us_topic_0283137115_p1410692834717"></a>pgxc_comm_send_stream</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p91061128144716"><a name="en-us_topic_0283137115_p91061128144716"></a><a name="en-us_topic_0283137115_p91061128144716"></a>pgxc_comm_status</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p14107928114711"><a name="en-us_topic_0283137115_p14107928114711"></a><a name="en-us_topic_0283137115_p14107928114711"></a>pgxc_fenced_udf_process</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p8107182864717"><a name="en-us_topic_0283137115_p8107182864717"></a><a name="en-us_topic_0283137115_p8107182864717"></a>pgxc_get_csn</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p121071728114717"><a name="en-us_topic_0283137115_p121071728114717"></a><a name="en-us_topic_0283137115_p121071728114717"></a>pgxc_get_delta_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p410772844716"><a name="en-us_topic_0283137115_p410772844716"></a><a name="en-us_topic_0283137115_p410772844716"></a>pgxc_get_running_xacts</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row13108828124718"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p14108728154712"><a name="en-us_topic_0283137115_p14108728154712"></a><a name="en-us_topic_0283137115_p14108728154712"></a>pgxc_get_searchlet_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p121081228194717"><a name="en-us_topic_0283137115_p121081228194717"></a><a name="en-us_topic_0283137115_p121081228194717"></a>pgxc_get_searchlet_table_attr_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p12108192814719"><a name="en-us_topic_0283137115_p12108192814719"></a><a name="en-us_topic_0283137115_p12108192814719"></a>pgxc_get_sql_count</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p210915281478"><a name="en-us_topic_0283137115_p210915281478"></a><a name="en-us_topic_0283137115_p210915281478"></a>pgxc_get_stat_dirty_tables</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p10109928194715"><a name="en-us_topic_0283137115_p10109928194715"></a><a name="en-us_topic_0283137115_p10109928194715"></a>pgxc_get_thread_wait_status</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p11109228204714"><a name="en-us_topic_0283137115_p11109228204714"></a><a name="en-us_topic_0283137115_p11109228204714"></a>pgxc_get_variable_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p12109142817473"><a name="en-us_topic_0283137115_p12109142817473"></a><a name="en-us_topic_0283137115_p12109142817473"></a>pgxc_get_wlm_current_instance_info</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row6110828144713"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p21101728134712"><a name="en-us_topic_0283137115_p21101728134712"></a><a name="en-us_topic_0283137115_p21101728134712"></a>pgxc_get_wlm_history_instance_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p81109289472"><a name="en-us_topic_0283137115_p81109289472"></a><a name="en-us_topic_0283137115_p81109289472"></a>pgxc_gtm_snapshot_status</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1111142854718"><a name="en-us_topic_0283137115_p1111142854718"></a><a name="en-us_topic_0283137115_p1111142854718"></a>pgxc_lock_for_sp_database</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p19111192810478"><a name="en-us_topic_0283137115_p19111192810478"></a><a name="en-us_topic_0283137115_p19111192810478"></a>pgxc_lock_for_transfer</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p6111172884719"><a name="en-us_topic_0283137115_p6111172884719"></a><a name="en-us_topic_0283137115_p6111172884719"></a>pgxc_log_comm_status</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p111121128124713"><a name="en-us_topic_0283137115_p111121128124713"></a><a name="en-us_topic_0283137115_p111121128124713"></a>pgxc_parse_clog</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p01121828164715"><a name="en-us_topic_0283137115_p01121828164715"></a><a name="en-us_topic_0283137115_p01121828164715"></a>pgxc_pool_connection_status</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row11121628174711"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p11123289473"><a name="en-us_topic_0283137115_p11123289473"></a><a name="en-us_topic_0283137115_p11123289473"></a>pgxc_prepared_xact</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p2113122884710"><a name="en-us_topic_0283137115_p2113122884710"></a><a name="en-us_topic_0283137115_p2113122884710"></a>pgxc_snapshot_status</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p811314286471"><a name="en-us_topic_0283137115_p811314286471"></a><a name="en-us_topic_0283137115_p811314286471"></a>pgxc_stat_activity</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p151131128164716"><a name="en-us_topic_0283137115_p151131128164716"></a><a name="en-us_topic_0283137115_p151131128164716"></a>zhprs_getlexeme</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p151146284476"><a name="en-us_topic_0283137115_p151146284476"></a><a name="en-us_topic_0283137115_p151146284476"></a>pgxc_stat_all_tables</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1311413284476"><a name="en-us_topic_0283137115_p1311413284476"></a><a name="en-us_topic_0283137115_p1311413284476"></a>pgxc_stat_dirty_tables</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p211422812477"><a name="en-us_topic_0283137115_p211422812477"></a><a name="en-us_topic_0283137115_p211422812477"></a>pgxc_total_memory_detail</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row111412287472"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p211552810471"><a name="en-us_topic_0283137115_p211552810471"></a><a name="en-us_topic_0283137115_p211552810471"></a>pgxc_unlock_for_sp_database</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p1311542834712"><a name="en-us_topic_0283137115_p1311542834712"></a><a name="en-us_topic_0283137115_p1311542834712"></a>pgxc_unlock_for_transfer</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p11115228184712"><a name="en-us_topic_0283137115_p11115228184712"></a><a name="en-us_topic_0283137115_p11115228184712"></a>plan_seed</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p13115192811474"><a name="en-us_topic_0283137115_p13115192811474"></a><a name="en-us_topic_0283137115_p13115192811474"></a>plancache_clean</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p411652854717"><a name="en-us_topic_0283137115_p411652854717"></a><a name="en-us_topic_0283137115_p411652854717"></a>plancache_status</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p61161228134717"><a name="en-us_topic_0283137115_p61161228134717"></a><a name="en-us_topic_0283137115_p61161228134717"></a>pound_end</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p11116928184719"><a name="en-us_topic_0283137115_p11116928184719"></a><a name="en-us_topic_0283137115_p11116928184719"></a>pound_lextype</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1811672813474"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p711622884715"><a name="en-us_topic_0283137115_p711622884715"></a><a name="en-us_topic_0283137115_p711622884715"></a>pound_nexttoken</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p311713280479"><a name="en-us_topic_0283137115_p311713280479"></a><a name="en-us_topic_0283137115_p311713280479"></a>pound_start</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1011722844715"><a name="en-us_topic_0283137115_p1011722844715"></a><a name="en-us_topic_0283137115_p1011722844715"></a>prepare_statement_status</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p1911702813478"><a name="en-us_topic_0283137115_p1911702813478"></a><a name="en-us_topic_0283137115_p1911702813478"></a>proc_add_depend</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p1911842874718"><a name="en-us_topic_0283137115_p1911842874718"></a><a name="en-us_topic_0283137115_p1911842874718"></a>proc_add_partition</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1411816288476"><a name="en-us_topic_0283137115_p1411816288476"></a><a name="en-us_topic_0283137115_p1411816288476"></a>proc_add_partition_by_boundary</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p7118202874714"><a name="en-us_topic_0283137115_p7118202874714"></a><a name="en-us_topic_0283137115_p7118202874714"></a>proc_call_check_job</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row191186287472"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p10119928154717"><a name="en-us_topic_0283137115_p10119928154717"></a><a name="en-us_topic_0283137115_p10119928154717"></a>proc_drop_partition</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p16119152894715"><a name="en-us_topic_0283137115_p16119152894715"></a><a name="en-us_topic_0283137115_p16119152894715"></a>proc_pgjob_rename_byid</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1119728204714"><a name="en-us_topic_0283137115_p1119728204714"></a><a name="en-us_topic_0283137115_p1119728204714"></a>proc_pgjob_rename_byname</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p811910285471"><a name="en-us_topic_0283137115_p811910285471"></a><a name="en-us_topic_0283137115_p811910285471"></a>psortbuild</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p512042812472"><a name="en-us_topic_0283137115_p512042812472"></a><a name="en-us_topic_0283137115_p512042812472"></a>psortcanreturn</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p19120828174717"><a name="en-us_topic_0283137115_p19120828174717"></a><a name="en-us_topic_0283137115_p19120828174717"></a>psortcostestimate</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p1112082814479"><a name="en-us_topic_0283137115_p1112082814479"></a><a name="en-us_topic_0283137115_p1112082814479"></a>psortgetbitmap</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row2120122814477"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p91211628154714"><a name="en-us_topic_0283137115_p91211628154714"></a><a name="en-us_topic_0283137115_p91211628154714"></a>psortgettuple</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p15121142894713"><a name="en-us_topic_0283137115_p15121142894713"></a><a name="en-us_topic_0283137115_p15121142894713"></a>psortoptions</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p5121528164714"><a name="en-us_topic_0283137115_p5121528164714"></a><a name="en-us_topic_0283137115_p5121528164714"></a>pv_builtin_functions</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p912118284473"><a name="en-us_topic_0283137115_p912118284473"></a><a name="en-us_topic_0283137115_p912118284473"></a>pv_os_run_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p14122172854713"><a name="en-us_topic_0283137115_p14122172854713"></a><a name="en-us_topic_0283137115_p14122172854713"></a>smgrne(a smgr, b smgr)</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p71221628124718"><a name="en-us_topic_0283137115_p71221628124718"></a><a name="en-us_topic_0283137115_p71221628124718"></a>pv_session_memory_detail</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p712313288470"><a name="en-us_topic_0283137115_p712313288470"></a><a name="en-us_topic_0283137115_p712313288470"></a>pv_session_memory_detail_tp</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1012312813477"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p19123428124718"><a name="en-us_topic_0283137115_p19123428124718"></a><a name="en-us_topic_0283137115_p19123428124718"></a>pv_thread_memory_detail</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p1712312815478"><a name="en-us_topic_0283137115_p1712312815478"></a><a name="en-us_topic_0283137115_p1712312815478"></a>zhprs_lextype</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1612352844719"><a name="en-us_topic_0283137115_p1612352844719"></a><a name="en-us_topic_0283137115_p1612352844719"></a>randommasking</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p6124928124713"><a name="en-us_topic_0283137115_p6124928124713"></a><a name="en-us_topic_0283137115_p6124928124713"></a>rawcmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p1212422844718"><a name="en-us_topic_0283137115_p1212422844718"></a><a name="en-us_topic_0283137115_p1212422844718"></a>raweq</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1412416288476"><a name="en-us_topic_0283137115_p1412416288476"></a><a name="en-us_topic_0283137115_p1412416288476"></a>rawge</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p14125228154715"><a name="en-us_topic_0283137115_p14125228154715"></a><a name="en-us_topic_0283137115_p14125228154715"></a>rawgt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row15125928164712"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p151251628144713"><a name="en-us_topic_0283137115_p151251628144713"></a><a name="en-us_topic_0283137115_p151251628144713"></a>rawin</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p512517281473"><a name="en-us_topic_0283137115_p512517281473"></a><a name="en-us_topic_0283137115_p512517281473"></a>rawle</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1812692810473"><a name="en-us_topic_0283137115_p1812692810473"></a><a name="en-us_topic_0283137115_p1812692810473"></a>rawlike</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p18126192819479"><a name="en-us_topic_0283137115_p18126192819479"></a><a name="en-us_topic_0283137115_p18126192819479"></a>rawlt</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p1812612819471"><a name="en-us_topic_0283137115_p1812612819471"></a><a name="en-us_topic_0283137115_p1812612819471"></a>rawne</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1812642811474"><a name="en-us_topic_0283137115_p1812642811474"></a><a name="en-us_topic_0283137115_p1812642811474"></a>rawnlike</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p4127192824712"><a name="en-us_topic_0283137115_p4127192824712"></a><a name="en-us_topic_0283137115_p4127192824712"></a>rawout</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row0127328154719"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p1112710284479"><a name="en-us_topic_0283137115_p1112710284479"></a><a name="en-us_topic_0283137115_p1112710284479"></a>rawrecv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p41271228104715"><a name="en-us_topic_0283137115_p41271228104715"></a><a name="en-us_topic_0283137115_p41271228104715"></a>rawsend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1612819284471"><a name="en-us_topic_0283137115_p1612819284471"></a><a name="en-us_topic_0283137115_p1612819284471"></a>rawtohex</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p21281528184715"><a name="en-us_topic_0283137115_p21281528184715"></a><a name="en-us_topic_0283137115_p21281528184715"></a>read_disable_conn_file</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p21280289477"><a name="en-us_topic_0283137115_p21280289477"></a><a name="en-us_topic_0283137115_p21280289477"></a>regex_like_m</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1312872824715"><a name="en-us_topic_0283137115_p1312872824715"></a><a name="en-us_topic_0283137115_p1312872824715"></a>reltime_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p15129228174711"><a name="en-us_topic_0283137115_p15129228174711"></a><a name="en-us_topic_0283137115_p15129228174711"></a>remove_create_partition_policy</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row111295288474"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p7129142819475"><a name="en-us_topic_0283137115_p7129142819475"></a><a name="en-us_topic_0283137115_p7129142819475"></a>remove_drop_partition_policy</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p413013287475"><a name="en-us_topic_0283137115_p413013287475"></a><a name="en-us_topic_0283137115_p413013287475"></a>remove_job_class_depend</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p111302282471"><a name="en-us_topic_0283137115_p111302282471"></a><a name="en-us_topic_0283137115_p111302282471"></a>roach_handler</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p21305285474"><a name="en-us_topic_0283137115_p21305285474"></a><a name="en-us_topic_0283137115_p21305285474"></a>set_hashbucket_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p1813032834714"><a name="en-us_topic_0283137115_p1813032834714"></a><a name="en-us_topic_0283137115_p1813032834714"></a>smalldatetime_cmp</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p8131132894714"><a name="en-us_topic_0283137115_p8131132894714"></a><a name="en-us_topic_0283137115_p8131132894714"></a>smalldatetime_eq</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p1213122864710"><a name="en-us_topic_0283137115_p1213122864710"></a><a name="en-us_topic_0283137115_p1213122864710"></a>smalldatetime_ge</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row5131128154712"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p1313162884719"><a name="en-us_topic_0283137115_p1313162884719"></a><a name="en-us_topic_0283137115_p1313162884719"></a>smalldatetime_gt</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p01329285477"><a name="en-us_topic_0283137115_p01329285477"></a><a name="en-us_topic_0283137115_p01329285477"></a>smalldatetime_hash</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p15132152894710"><a name="en-us_topic_0283137115_p15132152894710"></a><a name="en-us_topic_0283137115_p15132152894710"></a>smalldatetime_in</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p21320284479"><a name="en-us_topic_0283137115_p21320284479"></a><a name="en-us_topic_0283137115_p21320284479"></a>smalldatetime_larger</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p1113202816473"><a name="en-us_topic_0283137115_p1113202816473"></a><a name="en-us_topic_0283137115_p1113202816473"></a>smalldatetime_le</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p8133182814477"><a name="en-us_topic_0283137115_p8133182814477"></a><a name="en-us_topic_0283137115_p8133182814477"></a>smalldatetime_lt</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p81335286476"><a name="en-us_topic_0283137115_p81335286476"></a><a name="en-us_topic_0283137115_p81335286476"></a>smalldatetime_ne</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row13133152817470"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p413318281478"><a name="en-us_topic_0283137115_p413318281478"></a><a name="en-us_topic_0283137115_p413318281478"></a>smalldatetime_out</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p20133102874716"><a name="en-us_topic_0283137115_p20133102874716"></a><a name="en-us_topic_0283137115_p20133102874716"></a>smalldatetime_recv</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p61341428114720"><a name="en-us_topic_0283137115_p61341428114720"></a><a name="en-us_topic_0283137115_p61341428114720"></a>smalldatetime_send</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p4134328164710"><a name="en-us_topic_0283137115_p4134328164710"></a><a name="en-us_topic_0283137115_p4134328164710"></a>smalldatetime_smaller</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p14134132812471"><a name="en-us_topic_0283137115_p14134132812471"></a><a name="en-us_topic_0283137115_p14134132812471"></a>smalldatetime_to_abstime</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1013532844713"><a name="en-us_topic_0283137115_p1013532844713"></a><a name="en-us_topic_0283137115_p1013532844713"></a>smalldatetime_to_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p19135328144715"><a name="en-us_topic_0283137115_p19135328144715"></a><a name="en-us_topic_0283137115_p19135328144715"></a>smalldatetime_to_timestamp</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row513512812473"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p6135728124716"><a name="en-us_topic_0283137115_p6135728124716"></a><a name="en-us_topic_0283137115_p6135728124716"></a>smalldatetime_to_timestamptz</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p413572834715"><a name="en-us_topic_0283137115_p413572834715"></a><a name="en-us_topic_0283137115_p413572834715"></a>smalldatetime_to_varchar2</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p9136102818471"><a name="en-us_topic_0283137115_p9136102818471"></a><a name="en-us_topic_0283137115_p9136102818471"></a>spgmerge</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p2013692810475"><a name="en-us_topic_0283137115_p2013692810475"></a><a name="en-us_topic_0283137115_p2013692810475"></a>spread</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p121363282470"><a name="en-us_topic_0283137115_p121363282470"></a><a name="en-us_topic_0283137115_p121363282470"></a>spread_collect</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p81371128164712"><a name="en-us_topic_0283137115_p81371128164712"></a><a name="en-us_topic_0283137115_p81371128164712"></a>spread_final</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p2013792874712"><a name="en-us_topic_0283137115_p2013792874712"></a><a name="en-us_topic_0283137115_p2013792874712"></a>spread_internal</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row713702864718"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p11137112834715"><a name="en-us_topic_0283137115_p11137112834715"></a><a name="en-us_topic_0283137115_p11137112834715"></a>streaming_fdw_handler</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p81386289475"><a name="en-us_topic_0283137115_p81386289475"></a><a name="en-us_topic_0283137115_p81386289475"></a>text_date</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1513822874715"><a name="en-us_topic_0283137115_p1513822874715"></a><a name="en-us_topic_0283137115_p1513822874715"></a>text_float4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p181381728184714"><a name="en-us_topic_0283137115_p181381728184714"></a><a name="en-us_topic_0283137115_p181381728184714"></a>text_float8</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p1113942834713"><a name="en-us_topic_0283137115_p1113942834713"></a><a name="en-us_topic_0283137115_p1113942834713"></a>text_int1</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p191391328194713"><a name="en-us_topic_0283137115_p191391328194713"></a><a name="en-us_topic_0283137115_p191391328194713"></a>text_int2</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p1139428104712"><a name="en-us_topic_0283137115_p1139428104712"></a><a name="en-us_topic_0283137115_p1139428104712"></a>text_int4</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row7140228114712"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p11140182864712"><a name="en-us_topic_0283137115_p11140182864712"></a><a name="en-us_topic_0283137115_p11140182864712"></a>text_int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p11140172813476"><a name="en-us_topic_0283137115_p11140172813476"></a><a name="en-us_topic_0283137115_p11140172813476"></a>text_numeric</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p9141192814474"><a name="en-us_topic_0283137115_p9141192814474"></a><a name="en-us_topic_0283137115_p9141192814474"></a>text_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p914122818477"><a name="en-us_topic_0283137115_p914122818477"></a><a name="en-us_topic_0283137115_p914122818477"></a>time_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p161411281476"><a name="en-us_topic_0283137115_p161411281476"></a><a name="en-us_topic_0283137115_p161411281476"></a>timestamp_list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1514202811472"><a name="en-us_topic_0283137115_p1514202811472"></a><a name="en-us_topic_0283137115_p1514202811472"></a>timestamp_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p9142228154718"><a name="en-us_topic_0283137115_p9142228154718"></a><a name="en-us_topic_0283137115_p9142228154718"></a>timestamp_text</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row4142132844719"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p514232811470"><a name="en-us_topic_0283137115_p514232811470"></a><a name="en-us_topic_0283137115_p514232811470"></a>timestamp_to_smalldatetime</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p914315289471"><a name="en-us_topic_0283137115_p914315289471"></a><a name="en-us_topic_0283137115_p914315289471"></a>timestamp_varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p7143828184715"><a name="en-us_topic_0283137115_p7143828184715"></a><a name="en-us_topic_0283137115_p7143828184715"></a>timestamptz_list_agg_noarg2_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p2014382854710"><a name="en-us_topic_0283137115_p2014382854710"></a><a name="en-us_topic_0283137115_p2014382854710"></a>timestamptz_list_agg_transfn</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p19143202817471"><a name="en-us_topic_0283137115_p19143202817471"></a><a name="en-us_topic_0283137115_p19143202817471"></a>timestamptz_to_smalldatetime</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p414418286479"><a name="en-us_topic_0283137115_p414418286479"></a><a name="en-us_topic_0283137115_p414418286479"></a>timestampzone_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p17144428144716"><a name="en-us_topic_0283137115_p17144428144716"></a><a name="en-us_topic_0283137115_p17144428144716"></a>timetz_text</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row161441228164719"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p2144162816472"><a name="en-us_topic_0283137115_p2144162816472"></a><a name="en-us_topic_0283137115_p2144162816472"></a>to_integer</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p1214511288479"><a name="en-us_topic_0283137115_p1214511288479"></a><a name="en-us_topic_0283137115_p1214511288479"></a>to_interval</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p131458287476"><a name="en-us_topic_0283137115_p131458287476"></a><a name="en-us_topic_0283137115_p131458287476"></a>to_numeric</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p19145122874711"><a name="en-us_topic_0283137115_p19145122874711"></a><a name="en-us_topic_0283137115_p19145122874711"></a>to_nvarchar2</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p3146152819477"><a name="en-us_topic_0283137115_p3146152819477"></a><a name="en-us_topic_0283137115_p3146152819477"></a>to_text</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1146122834714"><a name="en-us_topic_0283137115_p1146122834714"></a><a name="en-us_topic_0283137115_p1146122834714"></a>to_ts</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p1146122864712"><a name="en-us_topic_0283137115_p1146122864712"></a><a name="en-us_topic_0283137115_p1146122864712"></a>to_varchar2</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row1914682814712"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p51471228144719"><a name="en-us_topic_0283137115_p51471228144719"></a><a name="en-us_topic_0283137115_p51471228144719"></a>update_pgjob</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p13147102817472"><a name="en-us_topic_0283137115_p13147102817472"></a><a name="en-us_topic_0283137115_p13147102817472"></a>utf8_to_ascii</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p31474285474"><a name="en-us_topic_0283137115_p31474285474"></a><a name="en-us_topic_0283137115_p31474285474"></a>varchar_date</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p9147122894715"><a name="en-us_topic_0283137115_p9147122894715"></a><a name="en-us_topic_0283137115_p9147122894715"></a>varchar_float4</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p1914814282475"><a name="en-us_topic_0283137115_p1914814282475"></a><a name="en-us_topic_0283137115_p1914814282475"></a>varchar_float8</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p2014882894716"><a name="en-us_topic_0283137115_p2014882894716"></a><a name="en-us_topic_0283137115_p2014882894716"></a>varchar_int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p614802820475"><a name="en-us_topic_0283137115_p614802820475"></a><a name="en-us_topic_0283137115_p614802820475"></a>varchar_int8</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row9148182812474"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p91497283476"><a name="en-us_topic_0283137115_p91497283476"></a><a name="en-us_topic_0283137115_p91497283476"></a>varchar_numeric</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p12149192884712"><a name="en-us_topic_0283137115_p12149192884712"></a><a name="en-us_topic_0283137115_p12149192884712"></a>varchar_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p19149102812470"><a name="en-us_topic_0283137115_p19149102812470"></a><a name="en-us_topic_0283137115_p19149102812470"></a>varchar2_to_smlldatetime</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p814918287474"><a name="en-us_topic_0283137115_p814918287474"></a><a name="en-us_topic_0283137115_p814918287474"></a>xideq4</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p1115012816478"><a name="en-us_topic_0283137115_p1115012816478"></a><a name="en-us_topic_0283137115_p1115012816478"></a>xideqint8</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p015017288474"><a name="en-us_topic_0283137115_p015017288474"></a><a name="en-us_topic_0283137115_p015017288474"></a>xidin4</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p12150172814711"><a name="en-us_topic_0283137115_p12150172814711"></a><a name="en-us_topic_0283137115_p12150172814711"></a>xidlt</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137115_row12151182864716"><td class="cellrowborder" valign="top" width="13.020000000000001%"><p id="en-us_topic_0283137115_p111511528114713"><a name="en-us_topic_0283137115_p111511528114713"></a><a name="en-us_topic_0283137115_p111511528114713"></a>xidlt4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.069999999999999%"><p id="en-us_topic_0283137115_p20151202824710"><a name="en-us_topic_0283137115_p20151202824710"></a><a name="en-us_topic_0283137115_p20151202824710"></a>xidout4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.26%"><p id="en-us_topic_0283137115_p1151728144716"><a name="en-us_topic_0283137115_p1151728144716"></a><a name="en-us_topic_0283137115_p1151728144716"></a>xidrecv4</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.64%"><p id="en-us_topic_0283137115_p15152122874714"><a name="en-us_topic_0283137115_p15152122874714"></a><a name="en-us_topic_0283137115_p15152122874714"></a>xidsend4</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.62%"><p id="en-us_topic_0283137115_p1815222814479"><a name="en-us_topic_0283137115_p1815222814479"></a><a name="en-us_topic_0283137115_p1815222814479"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="13.450000000000001%"><p id="en-us_topic_0283137115_p1415215285478"><a name="en-us_topic_0283137115_p1415215285478"></a><a name="en-us_topic_0283137115_p1415215285478"></a>-</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.939999999999998%"><p id="en-us_topic_0283137115_p11531028164717"><a name="en-us_topic_0283137115_p11531028164717"></a><a name="en-us_topic_0283137115_p11531028164717"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>


