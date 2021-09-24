# PG\_GET\_SENDERS\_CATCHUP\_TIME<a name="EN-US_TOPIC_0289900894"></a>

**PG\_GET\_SENDERS\_CATCHUP\_TIME**  provides catchup information of the currently active primary/standby instance sender thread on the database node.

**Table  1**  PG\_GET\_SENDERS\_CATCHUP\_TIME columns

<a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_tda83a1604dd64f2388f88b90fa94d41d"></a>
<table><thead align="left"><tr id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_r0f40bf1eb54b4e54bfdac65c0c0d1402"><th class="cellrowborder" valign="top" width="25.77%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_af58c7092203b40c9b015e4acb1f3715b"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_af58c7092203b40c9b015e4acb1f3715b"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_af58c7092203b40c9b015e4acb1f3715b"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.73%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_abace03a3e7c9482eadcefc55e2ffc284"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_abace03a3e7c9482eadcefc55e2ffc284"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_abace03a3e7c9482eadcefc55e2ffc284"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="57.49999999999999%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a939cf13b70714c599b547a12e7126fa3"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a939cf13b70714c599b547a12e7126fa3"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a939cf13b70714c599b547a12e7126fa3"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_rc9bd38a512044ad4a301161af774fed7"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a95e4f8005a0546a7b10cc26b284f8562"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a95e4f8005a0546a7b10cc26b284f8562"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a95e4f8005a0546a7b10cc26b284f8562"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_ad3b7626d46af4bb0bdbfd34bc6bccfa1"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_ad3b7626d46af4bb0bdbfd34bc6bccfa1"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_ad3b7626d46af4bb0bdbfd34bc6bccfa1"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_aceeb149185ed4852b1fbc2a67a5a5cee"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_aceeb149185ed4852b1fbc2a67a5a5cee"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_aceeb149185ed4852b1fbc2a67a5a5cee"></a>Current sender thread ID</p>
</td>
</tr>
<tr id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_rf86f18a0a281423cacdfe6b106ce2f74"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_ad5f3b88677ae4ce9b97c8661aeb4485f"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_ad5f3b88677ae4ce9b97c8661aeb4485f"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_ad5f3b88677ae4ce9b97c8661aeb4485f"></a>lwpid</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a701c1b15f14a429dab9a94a868687051"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a701c1b15f14a429dab9a94a868687051"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a701c1b15f14a429dab9a94a868687051"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a087b4a26386f403482fa472f23c038c3"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a087b4a26386f403482fa472f23c038c3"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a087b4a26386f403482fa472f23c038c3"></a>Current sender lwpid</p>
</td>
</tr>
<tr id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_r14052f9ffc1e4c1aba841f7b94cbf4a8"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_aca4ac2f32e6c47d285c6711562c69581"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_aca4ac2f32e6c47d285c6711562c69581"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_aca4ac2f32e6c47d285c6711562c69581"></a>local_role</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a4870f681e61d4e2b998e1dd99c494630"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a4870f681e61d4e2b998e1dd99c494630"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a4870f681e61d4e2b998e1dd99c494630"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_af6e15e29b93f4015b4c21b68a5f367fd"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_af6e15e29b93f4015b4c21b68a5f367fd"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_af6e15e29b93f4015b4c21b68a5f367fd"></a>Local role</p>
</td>
</tr>
<tr id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_r75e897fdac6a4b3fb81b26e3478981a8"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_ad4f1cc017fed4d258790f0a06f163dd9"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_ad4f1cc017fed4d258790f0a06f163dd9"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_ad4f1cc017fed4d258790f0a06f163dd9"></a>peer_role</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a99a6dc5a5cc0420285ab147cbdd3e173"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a99a6dc5a5cc0420285ab147cbdd3e173"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a99a6dc5a5cc0420285ab147cbdd3e173"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a1f25092081234bc4a27dfe36655d68e6"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a1f25092081234bc4a27dfe36655d68e6"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a1f25092081234bc4a27dfe36655d68e6"></a>Peer role</p>
</td>
</tr>
<tr id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_r00389e95d6b64b39b009a6a7c0f6d3b8"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a1c63405a54f44a86a7990964d96c91fc"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a1c63405a54f44a86a7990964d96c91fc"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a1c63405a54f44a86a7990964d96c91fc"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a63861dc22d1e445ea3c20de573b2c39c"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a63861dc22d1e445ea3c20de573b2c39c"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a63861dc22d1e445ea3c20de573b2c39c"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a237b8db77e6f41f3a0a1c7eec05f8e7c"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a237b8db77e6f41f3a0a1c7eec05f8e7c"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a237b8db77e6f41f3a0a1c7eec05f8e7c"></a>Current sender's replication status</p>
</td>
</tr>
<tr id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_r82bcf8dcb20e46d9ad69a5a871078082"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a2fbd60889b2941c5a7df8a9188b5ca55"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a2fbd60889b2941c5a7df8a9188b5ca55"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a2fbd60889b2941c5a7df8a9188b5ca55"></a>type</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_aff8340b074324293b9649b17cfb4cc44"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_aff8340b074324293b9649b17cfb4cc44"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_aff8340b074324293b9649b17cfb4cc44"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_abd56452fca5d405b96f714e54ca80a41"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_abd56452fca5d405b96f714e54ca80a41"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_abd56452fca5d405b96f714e54ca80a41"></a>Current sender type</p>
</td>
</tr>
<tr id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_rceaa9104ae274fe6bc79701e8829d996"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_ae0103b5c32e548faadb258d2f1eec1f6"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_ae0103b5c32e548faadb258d2f1eec1f6"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_ae0103b5c32e548faadb258d2f1eec1f6"></a>catchup_start</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a4603dc0bfecc40d08bb0fdb066c46ce9"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a4603dc0bfecc40d08bb0fdb066c46ce9"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a4603dc0bfecc40d08bb0fdb066c46ce9"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a095d8cf328ea429f875177630b3e0681"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a095d8cf328ea429f875177630b3e0681"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a095d8cf328ea429f875177630b3e0681"></a>Startup time of a catchup task</p>
</td>
</tr>
<tr id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_rdd769064fc8a47f3a643d54b247990c8"><td class="cellrowborder" valign="top" width="25.77%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a55e7ddcabccd4e09ab33d1467dc6d373"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a55e7ddcabccd4e09ab33d1467dc6d373"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a55e7ddcabccd4e09ab33d1467dc6d373"></a>catchup_end</p>
</td>
<td class="cellrowborder" valign="top" width="16.73%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a583bfb13bebd4abeb5ca9ed4d89af1b0"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a583bfb13bebd4abeb5ca9ed4d89af1b0"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_a583bfb13bebd4abeb5ca9ed4d89af1b0"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="57.49999999999999%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_abf65d39419e845399f964e5beafe7100"><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_abf65d39419e845399f964e5beafe7100"></a><a name="en-us_topic_0283137372_en-us_topic_0237122418_en-us_topic_0059778855_abf65d39419e845399f964e5beafe7100"></a>End time of a catchup task</p>
</td>
</tr>
</tbody>
</table>

