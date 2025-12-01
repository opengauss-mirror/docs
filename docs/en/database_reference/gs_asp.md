# GS\_ASP<a name="EN-US_TOPIC_0000001158569987"></a>

**GS\_ASP**  displays the persistent ACTIVE SESSION PROFILE samples.This table can only be queried in the system library, and there is no data in the user library.

**Table  1**  GS\_ASP columns

<a name="en-us_topic_0059778133_tc25f02433de2419f8da4d0a8c2c8e562"></a>
<table><thead align="left"><tr id="en-us_topic_0059778133_rea54060e599a49eb9c70be97cf91d9a0"><th class="cellrowborder" valign="top" width="23.75%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"><a name="en-us_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a><a name="en-us_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="31.3%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"><a name="en-us_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a><a name="en-us_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="44.95%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"><a name="en-us_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a><a name="en-us_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row757161654315"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p15571161614431"><a name="p15571161614431"></a><a name="p15571161614431"></a>sampleid</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p1457191694314"><a name="p1457191694314"></a><a name="p1457191694314"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p14572111616430"><a name="p14572111616430"></a><a name="p14572111616430"></a>Sample ID</p>
</td>
</tr>
<tr id="row4331121184412"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p0332611449"><a name="p0332611449"></a><a name="p0332611449"></a>sample_time</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p183326113441"><a name="p183326113441"></a><a name="p183326113441"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p1933218118445"><a name="p1933218118445"></a><a name="p1933218118445"></a>Sampling time</p>
</td>
</tr>
<tr id="en-us_topic_0059778133_r70b979ea9a8c44088f169a2ed862a5e8"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778133_a189be4244ba24464883ea28942896966"><a name="en-us_topic_0059778133_a189be4244ba24464883ea28942896966"></a><a name="en-us_topic_0059778133_a189be4244ba24464883ea28942896966"></a>need_flush_sample</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778133_ab01485ca1bd84a359dfeeb153ad699f9"><a name="en-us_topic_0059778133_ab01485ca1bd84a359dfeeb153ad699f9"></a><a name="en-us_topic_0059778133_ab01485ca1bd84a359dfeeb153ad699f9"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"><a name="en-us_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a><a name="en-us_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a>Specifies whether the sample needs to be flushed to disks.</p>
<a name="ul63914331062"></a><a name="ul63914331062"></a><ul id="ul63914331062"><li><strong id="b85048285449"><a name="b85048285449"></a><a name="b85048285449"></a>t</strong> (true): yes</li><li><strong id="b1763873444418"><a name="b1763873444418"></a><a name="b1763873444418"></a>f</strong> (false): no</li></ul>
</td>
</tr>
<tr id="en-us_topic_0059778133_r04a260d93f86474d8a270ecddee95749"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778133_aba8c43466535431da7394bc8cb15abe7"><a name="en-us_topic_0059778133_aba8c43466535431da7394bc8cb15abe7"></a><a name="en-us_topic_0059778133_aba8c43466535431da7394bc8cb15abe7"></a>databaseid</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"><a name="en-us_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a><a name="en-us_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p45053389546"><a name="p45053389546"></a><a name="p45053389546"></a>Database ID</p>
</td>
</tr>
<tr id="en-us_topic_0059778133_r34e57b3cec1d444992a50a171f8473cc"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778133_aba9e0733d47e4984bfd06d56f1098390"><a name="en-us_topic_0059778133_aba9e0733d47e4984bfd06d56f1098390"></a><a name="en-us_topic_0059778133_aba9e0733d47e4984bfd06d56f1098390"></a>thread_id</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778133_aa36bd62dac9d4647b36218100312733d"><a name="en-us_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a><a name="en-us_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778133_a8392d26664af4197b11ac091cba47b60"><a name="en-us_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a><a name="en-us_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a>Thread ID</p>
</td>
</tr>
<tr id="en-us_topic_0059778133_re2b1e3c100874445ae8b9f6672fd44b8"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p1137210312557"><a name="p1137210312557"></a><a name="p1137210312557"></a>sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778133_a803006a96b544501aff6c7f8a7ad99a2"><a name="en-us_topic_0059778133_a803006a96b544501aff6c7f8a7ad99a2"></a><a name="en-us_topic_0059778133_a803006a96b544501aff6c7f8a7ad99a2"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"><a name="en-us_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a><a name="en-us_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a>Session ID</p>
</td>
</tr>
<tr id="en-us_topic_0059778133_r79a8e626edca446ea25954f708ff34f9"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0059778133_a09d44b7cf3954f4e8b9f58be950ef387"><a name="en-us_topic_0059778133_a09d44b7cf3954f4e8b9f58be950ef387"></a><a name="en-us_topic_0059778133_a09d44b7cf3954f4e8b9f58be950ef387"></a>start_time</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0059778133_a94df0dd59ab747a58c88656c53f0768c"><a name="en-us_topic_0059778133_a94df0dd59ab747a58c88656c53f0768c"></a><a name="en-us_topic_0059778133_a94df0dd59ab747a58c88656c53f0768c"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p1413913226567"><a name="p1413913226567"></a><a name="p1413913226567"></a>Start time of a session</p>
</td>
</tr>
<tr id="row3782804579"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p107830075715"><a name="p107830075715"></a><a name="p107830075715"></a>event</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p278316012579"><a name="p278316012579"></a><a name="p278316012579"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p197839012575"><a name="p197839012575"></a><a name="p197839012575"></a>Event name</p>
</td>
</tr>
<tr id="row1077825155714"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p18778451574"><a name="p18778451574"></a><a name="p18778451574"></a>lwtid</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p157783514577"><a name="p157783514577"></a><a name="p157783514577"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p77782056573"><a name="p77782056573"></a><a name="p77782056573"></a>Lightweight thread ID of the current thread</p>
</td>
</tr>
<tr id="row10543815576"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p4541585579"><a name="p4541585579"></a><a name="p4541585579"></a>psessionid</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p85413818578"><a name="p85413818578"></a><a name="p85413818578"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p195468175711"><a name="p195468175711"></a><a name="p195468175711"></a>Parent thread of the streaming thread</p>
</td>
</tr>
<tr id="row1533921055710"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p73405109574"><a name="p73405109574"></a><a name="p73405109574"></a>tlevel</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p1734012106579"><a name="p1734012106579"></a><a name="p1734012106579"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p10340010125712"><a name="p10340010125712"></a><a name="p10340010125712"></a>Level of the streaming thread, which corresponds to the level (<strong id="b79331849133417"><a name="b79331849133417"></a><a name="b79331849133417"></a>id</strong>) of the execution plan</p>
</td>
</tr>
<tr id="row1643918120570"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p3439612145717"><a name="p3439612145717"></a><a name="p3439612145717"></a>smpid</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p7439181295711"><a name="p7439181295711"></a><a name="p7439181295711"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p4439712115715"><a name="p4439712115715"></a><a name="p4439712115715"></a>Concurrent thread ID in SMP execution mode</p>
</td>
</tr>
<tr id="row1732631411571"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p18326141495717"><a name="p18326141495717"></a><a name="p18326141495717"></a>userid</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p113271314145718"><a name="p113271314145718"></a><a name="p113271314145718"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p6327614115710"><a name="p6327614115710"></a><a name="p6327614115710"></a>ID of a session user</p>
</td>
</tr>
<tr id="row18554121616579"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p6554131635716"><a name="p6554131635716"></a><a name="p6554131635716"></a>application_name</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p1255491610573"><a name="p1255491610573"></a><a name="p1255491610573"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p1055421610577"><a name="p1055421610577"></a><a name="p1055421610577"></a>Name of an application</p>
</td>
</tr>
<tr id="row10112199576"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p311319145712"><a name="p311319145712"></a><a name="p311319145712"></a>client_addr</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p6119193574"><a name="p6119193574"></a><a name="p6119193574"></a>inet</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p91118191577"><a name="p91118191577"></a><a name="p91118191577"></a>IP address of a client</p>
</td>
</tr>
<tr id="row1992663815811"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p692733835813"><a name="p692733835813"></a><a name="p692733835813"></a>client_hostname</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p99271838125816"><a name="p99271838125816"></a><a name="p99271838125816"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p4927838105814"><a name="p4927838105814"></a><a name="p4927838105814"></a>Name of a client</p>
</td>
</tr>
<tr id="row9465194110583"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p1346516419580"><a name="p1346516419580"></a><a name="p1346516419580"></a>client_port</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p114655418583"><a name="p114655418583"></a><a name="p114655418583"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p10465241205814"><a name="p10465241205814"></a><a name="p10465241205814"></a>TCP port number used by a client to communicate with the backend</p>
</td>
</tr>
<tr id="row566511439589"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p566514436584"><a name="p566514436584"></a><a name="p566514436584"></a>query_id</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p4665843135816"><a name="p4665843135816"></a><a name="p4665843135816"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p5665204325817"><a name="p5665204325817"></a><a name="p5665204325817"></a>Debug query ID</p>
</td>
</tr>
<tr id="row356618128591"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p1456661215593"><a name="p1456661215593"></a><a name="p1456661215593"></a>unique_query_id</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p19566131255918"><a name="p19566131255918"></a><a name="p19566131255918"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p1856681215599"><a name="p1856681215599"></a><a name="p1856681215599"></a>Unique query ID</p>
</td>
</tr>
<tr id="row5915141714591"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p1191513176599"><a name="p1191513176599"></a><a name="p1191513176599"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p89159173594"><a name="p89159173594"></a><a name="p89159173594"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p13915217185914"><a name="p13915217185914"></a><a name="p13915217185914"></a>User ID in the key of the unique query</p>
</td>
</tr>
<tr id="row113461020205914"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p17346920155913"><a name="p17346920155913"></a><a name="p17346920155913"></a>cn_id</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p3347152055918"><a name="p3347152055918"></a><a name="p3347152055918"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p103471520155911"><a name="p103471520155911"></a><a name="p103471520155911"></a>ID of the node that delivers the unique SQL statement. <strong id="b144341914164620"><a name="b144341914164620"></a><a name="b144341914164620"></a>cn_id</strong> is in the key of the unique query.</p>
</td>
</tr>
<tr id="row767672275912"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p1767642218599"><a name="p1767642218599"></a><a name="p1767642218599"></a>unique_query</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p76765228590"><a name="p76765228590"></a><a name="p76765228590"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p146761422105910"><a name="p146761422105910"></a><a name="p146761422105910"></a>Standardized UniqueSQL text string</p>
</td>
</tr>
<tr id="row14560137125713"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p1156013379578"><a name="p1156013379578"></a><a name="p1156013379578"></a>locktag</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p2056023725710"><a name="p2056023725710"></a><a name="p2056023725710"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p12561103795711"><a name="p12561103795711"></a><a name="p12561103795711"></a>Information of a lock that the session waits for, which can be parsed using <strong id="b14848163117463"><a name="b14848163117463"></a><a name="b14848163117463"></a>locktag_decode</strong>.</p>
</td>
</tr>
<tr id="row8559145845811"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p55593582587"><a name="p55593582587"></a><a name="p55593582587"></a>lockmode</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p2559158105812"><a name="p2559158105812"></a><a name="p2559158105812"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p37961323171"><a name="p37961323171"></a><a name="p37961323171"></a>Mode of a lock that the session waits for</p>
<a name="ul142111285816"></a><a name="ul142111285816"></a><ul id="ul142111285816"><li><strong id="b717913517161"><a name="b717913517161"></a><a name="b717913517161"></a>LW_EXCLUSIVE</strong>: exclusive lock</li><li><strong id="b11225185219463"><a name="b11225185219463"></a><a name="b11225185219463"></a>LW_SHARED</strong>: shared lock</li><li><strong id="b16119562462"><a name="b16119562462"></a><a name="b16119562462"></a>LW_WAIT_UNTIL_FREE</strong>: waits for the <strong id="b1867105615467"><a name="b1867105615467"></a><a name="b1867105615467"></a>LW_EXCLUSIVE</strong> to be available</li></ul>
</td>
</tr>
<tr id="row16507411201"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p125081517015"><a name="p125081517015"></a><a name="p125081517015"></a>block_sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p6508191409"><a name="p6508191409"></a><a name="p6508191409"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p135081311704"><a name="p135081311704"></a><a name="p135081311704"></a>Blocks a session from obtaining the session ID of a lock if the session is waiting for the lock.</p>
</td>
</tr>
<tr id="row11052222011"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p410610224110"><a name="p410610224110"></a><a name="p410610224110"></a>wait_status</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p141061422117"><a name="p141061422117"></a><a name="p141061422117"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p21064228110"><a name="p21064228110"></a><a name="p21064228110"></a>Provides more details about an event column.</p>
</td>
</tr>
<tr id="row14216135515325"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p2021795513216"><a name="p2021795513216"></a><a name="p2021795513216"></a>global_sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="31.3%" headers="mcps1.2.4.1.2 "><p id="p1121717555323"><a name="p1121717555323"></a><a name="p1121717555323"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="44.95%" headers="mcps1.2.4.1.3 "><p id="p1121735523214"><a name="p1121735523214"></a><a name="p1121735523214"></a>Global session ID</p>
</td>
</tr>
</tbody>
</table>

