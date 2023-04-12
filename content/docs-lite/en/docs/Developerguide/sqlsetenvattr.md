# SQLSetEnvAttr<a name="EN-US_TOPIC_0242371456"></a>

## Function<a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_s93fc7574cf154704b8cff271a57b9601"></a>

SQLSetEnvAttr is used to set environment attributes.

## Prototype<a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_sfbbc7fe8e3e34b51af9d3a43dab859fc"></a>

```
SQLRETURN SQLSetEnvAttr(SQLHENV       EnvironmentHandle
                        SQLINTEGER    Attribute,    
                        SQLPOINTER    ValuePtr,     
                        SQLINTEGER    StringLength);
```

## Parameter<a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  SQLSetEnvAttr parameters

<a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a78fd62134c834d6ab90eace249f90f74"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a51048b44452847fabe05c8633f0220cf"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a5b881394ab5445c89e8b7a9cf6d8c93a"><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a5b881394ab5445c89e8b7a9cf6d8c93a"></a><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a5b881394ab5445c89e8b7a9cf6d8c93a"></a>EnvironmentHandle</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"></a><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_ae9e04af441044a6581179c8dac3884f3"></a>Environment handle.</p>
</td>
</tr>
<tr id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_r2088b45aa8374f988b5b381a7e85ae5b"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_ace1e0a1bd94f482798c38666d51a57a7"><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_ace1e0a1bd94f482798c38666d51a57a7"></a><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_ace1e0a1bd94f482798c38666d51a57a7"></a>Attribute</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a5713dfef98384960a3106a2b7c9aa751"><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a5713dfef98384960a3106a2b7c9aa751"></a><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a5713dfef98384960a3106a2b7c9aa751"></a>Environment attribute to be set. The value must be one of the following:</p>
<a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_uefc416b07b1941be81ff69fc135a3a7f"></a><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_uefc416b07b1941be81ff69fc135a3a7f"></a><ul id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_uefc416b07b1941be81ff69fc135a3a7f"><li><strong id="en-us_topic_0238272902_b842352706155147"><a name="en-us_topic_0238272902_b842352706155147"></a><a name="en-us_topic_0238272902_b842352706155147"></a>SQL_ATTR_ODBC_VERSION</strong>: ODBC version</li><li><strong id="en-us_topic_0238272902_b842352706155150"><a name="en-us_topic_0238272902_b842352706155150"></a><a name="en-us_topic_0238272902_b842352706155150"></a>SQL_CONNECTION_POOLING</strong>: connection pool attribute</li><li><strong id="en-us_topic_0238272902_b842352706155155"><a name="en-us_topic_0238272902_b842352706155155"></a><a name="en-us_topic_0238272902_b842352706155155"></a>SQL_OUTPUT_NTS</strong>: string type returned by the driver</li></ul>
</td>
</tr>
<tr id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_re3c53307a0b8488f86edbf902499dcd5"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_afaeaa8d63c164853a2b3aee69d5c4dda"><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_afaeaa8d63c164853a2b3aee69d5c4dda"></a><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_afaeaa8d63c164853a2b3aee69d5c4dda"></a>ValuePtr</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_af32d5845d0bc4860ae768bce9257560e"><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_af32d5845d0bc4860ae768bce9257560e"></a><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_af32d5845d0bc4860ae768bce9257560e"></a>Pointer to the <strong id="en-us_topic_0238272902_b133111267488"><a name="en-us_topic_0238272902_b133111267488"></a><a name="en-us_topic_0238272902_b133111267488"></a>Attribute</strong> value. <strong id="en-us_topic_0238272902_b842352706155133"><a name="en-us_topic_0238272902_b842352706155133"></a><a name="en-us_topic_0238272902_b842352706155133"></a>ValuePtr</strong> depends on the <strong id="en-us_topic_0238272902_b318523404818"><a name="en-us_topic_0238272902_b318523404818"></a><a name="en-us_topic_0238272902_b318523404818"></a>Attribute</strong> value, and can be a 32-bit integer value or a null-terminated string.</p>
</td>
</tr>
<tr id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_rc78d71a78a944585b1a9275d30efa604"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a3b5e927cb76544a6b2b78ab3c7fcccd7"><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a3b5e927cb76544a6b2b78ab3c7fcccd7"></a><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a3b5e927cb76544a6b2b78ab3c7fcccd7"></a>StringLength</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a99d1997f52594ef2b2b236b459350ccd"><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a99d1997f52594ef2b2b236b459350ccd"></a><a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_a99d1997f52594ef2b2b236b459350ccd"></a>If <strong id="en-us_topic_0238272902_b84235270615534"><a name="en-us_topic_0238272902_b84235270615534"></a><a name="en-us_topic_0238272902_b84235270615534"></a>ValuePtr</strong> points to a string or a binary buffer, <strong id="en-us_topic_0238272902_b253655611486"><a name="en-us_topic_0238272902_b253655611486"></a><a name="en-us_topic_0238272902_b253655611486"></a>StringLength</strong> is the length of <strong id="en-us_topic_0238272902_b84235270615538"><a name="en-us_topic_0238272902_b84235270615538"></a><a name="en-us_topic_0238272902_b84235270615538"></a>*ValuePtr</strong>. If <strong id="en-us_topic_0238272902_b842352706155312"><a name="en-us_topic_0238272902_b842352706155312"></a><a name="en-us_topic_0238272902_b842352706155312"></a>ValuePtr</strong> points to an integer, <strong id="en-us_topic_0238272902_b842352706155314"><a name="en-us_topic_0238272902_b842352706155314"></a><a name="en-us_topic_0238272902_b842352706155314"></a>StringLength</strong> is ignored.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_sd43c3bb519574fb68eae3b53fb1b652f"></a>

-   **SQL\_SUCCESS**  indicates that the call succeeded.
-   **SQL\_SUCCESS\_WITH\_INFO**  indicates that some warning information is displayed.
-   **SQL\_ERROR**  indicates major errors, such as memory allocation and connection failures.
-   **SQL\_INVALID\_HANDLE**  indicates that invalid handles were called. This value may also be returned by other APIs.

## Precautions<a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_s3f23b16e09954cc0b1f5bdb1063fee16"></a>

If SQLSetEnvAttr returns  **SQL\_ERROR**  or  **SQL\_SUCCESS\_WITH\_INFO**, the application can call  [SQLGetDiagRec](sqlgetdiagrec.md), set  **HandleType**  and  **Handle**  to  **SQL\_HANDLE\_ENV**  and  **EnvironmentHandle**, and obtain the  **SQLSTATE**  value. The  **SQLSTATE**  value provides the detailed function calling information.

## Example<a name="en-us_topic_0238272902_en-us_topic_0237120432_en-us_topic_0059778852_s54d045c03fcc414bab03c37ea6e4da08"></a>

See  [Examples](examples.md).

