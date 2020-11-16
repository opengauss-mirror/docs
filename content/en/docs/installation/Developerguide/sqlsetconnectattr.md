# SQLSetConnectAttr<a name="EN-US_TOPIC_0242371455"></a>

## Function<a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_se8dc3eed91144d248bfd9c9d9b144b15"></a>

SQLSetConnectAttr is used to set connection attributes.

## Prototype<a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_s2c4e3a37799b4f07a9b22c05f4166f27"></a>

```
SQLRETURN SQLSetConnectAttr(SQLHDBC       ConnectionHandle
                            SQLINTEGER    Attribute,    
                            SQLPOINTER    ValuePtr,     
                            SQLINTEGER    StringLength);
```

## Parameter<a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_s7729ce590d3c4eef9cbc62b3973d4feb"></a>

**Table  1**  SQLSetConnectAttr parameters

<a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_tade40e51081242c39ed6b9052dd71671"></a>
<table><thead align="left"><tr id="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_r7eb093ebfd84455ca7313d34669fee99"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a667e7535363842138b12773dfea3acd1"><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a667e7535363842138b12773dfea3acd1"></a><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a667e7535363842138b12773dfea3acd1"></a><strong id="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a98aaed01fefa44009722a371ea43cd72"><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a98aaed01fefa44009722a371ea43cd72"></a><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a98aaed01fefa44009722a371ea43cd72"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_af54cf2cf0e134631b3bfc82100d783c3"><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_af54cf2cf0e134631b3bfc82100d783c3"></a><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_af54cf2cf0e134631b3bfc82100d783c3"></a><strong id="en-us_topic_0238272901_b1149022797"><a name="en-us_topic_0238272901_b1149022797"></a><a name="en-us_topic_0238272901_b1149022797"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_rcbcb561bbde04c1abab3653b06f8af6f"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_ae791a6b139fd429687444e6b313a8376"><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_ae791a6b139fd429687444e6b313a8376"></a><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_ae791a6b139fd429687444e6b313a8376"></a>ConnectionHandle</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a46c8fea3a3e248f7b927fdcd54246daa"><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a46c8fea3a3e248f7b927fdcd54246daa"></a><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a46c8fea3a3e248f7b927fdcd54246daa"></a>Connection handle.</p>
</td>
</tr>
<tr id="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_ref5fb95e1c1e4c70bdca3be2865ea6f6"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a35e34c8507cf49f1b8cf924d11a89ade"><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a35e34c8507cf49f1b8cf924d11a89ade"></a><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a35e34c8507cf49f1b8cf924d11a89ade"></a>Attribute</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a9ae74af514a5475eaf5ed65ed75043f0"><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a9ae74af514a5475eaf5ed65ed75043f0"></a><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a9ae74af514a5475eaf5ed65ed75043f0"></a>Attribute to set.</p>
</td>
</tr>
<tr id="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_r10e9ba39ddc74bbe97828a9fe966fbda"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_afec09da615ce49e9b3e7c0d84e1c55ac"><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_afec09da615ce49e9b3e7c0d84e1c55ac"></a><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_afec09da615ce49e9b3e7c0d84e1c55ac"></a>ValuePtr</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_af02e14e5cd344e1da182edd3ec08a228"><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_af02e14e5cd344e1da182edd3ec08a228"></a><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_af02e14e5cd344e1da182edd3ec08a228"></a>Pointer to the <strong id="en-us_topic_0238272901_b38981173913"><a name="en-us_topic_0238272901_b38981173913"></a><a name="en-us_topic_0238272901_b38981173913"></a>Attribute</strong> value. <strong id="en-us_topic_0238272901_b842352706153959"><a name="en-us_topic_0238272901_b842352706153959"></a><a name="en-us_topic_0238272901_b842352706153959"></a>ValuePtr</strong> depends on the <strong id="en-us_topic_0238272901_b1691763217912"><a name="en-us_topic_0238272901_b1691763217912"></a><a name="en-us_topic_0238272901_b1691763217912"></a>Attribute</strong> value, and can be a 32-bit unsigned integer value or a null-terminated string. If the <strong id="en-us_topic_0238272901_b8965142619104"><a name="en-us_topic_0238272901_b8965142619104"></a><a name="en-us_topic_0238272901_b8965142619104"></a>ValuePtr</strong> parameter is a driver-specific value, it may be a signed integer.</p>
</td>
</tr>
<tr id="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_r3de5904d75fd4cfa9accc0752197579a"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_af423e7625e0341eaaba023ac05edec20"><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_af423e7625e0341eaaba023ac05edec20"></a><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_af423e7625e0341eaaba023ac05edec20"></a>StringLength</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a0582ff9af622483fa0dcebb56c6187cf"><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a0582ff9af622483fa0dcebb56c6187cf"></a><a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_a0582ff9af622483fa0dcebb56c6187cf"></a>If <strong id="en-us_topic_0238272901_b84235270615534"><a name="en-us_topic_0238272901_b84235270615534"></a><a name="en-us_topic_0238272901_b84235270615534"></a>ValuePtr</strong> points to a string or a binary buffer, <strong id="en-us_topic_0238272901_b48371111124219"><a name="en-us_topic_0238272901_b48371111124219"></a><a name="en-us_topic_0238272901_b48371111124219"></a>StringLength</strong> is the length of <strong id="en-us_topic_0238272901_b84235270615538"><a name="en-us_topic_0238272901_b84235270615538"></a><a name="en-us_topic_0238272901_b84235270615538"></a>*ValuePtr</strong>. If <strong id="en-us_topic_0238272901_b842352706155312"><a name="en-us_topic_0238272901_b842352706155312"></a><a name="en-us_topic_0238272901_b842352706155312"></a>ValuePtr</strong> points to an integer, <strong id="en-us_topic_0238272901_b842352706155314"><a name="en-us_topic_0238272901_b842352706155314"></a><a name="en-us_topic_0238272901_b842352706155314"></a>StringLength</strong> is ignored.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_s12ee56593ac441249a9f5f184e227202"></a>

-   **SQL\_SUCCESS**  indicates that the call succeeded.
-   **SQL\_SUCCESS\_WITH\_INFO**  indicates that some warning information is displayed.
-   **SQL\_ERROR**  indicates major errors, such as memory allocation and connection failures.
-   **SQL\_INVALID\_HANDLE**  indicates that invalid handles were called. This value may also be returned by other APIs.

## Precautions<a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_s78fe87e5aec14489b395f28b33ec0876"></a>

If SQLSetConnectAttr returns  **SQL\_ERROR**  or  **SQL\_SUCCESS\_WITH\_INFO**, the application can call  [SQLGetDiagRec](sqlgetdiagrec.md), with  **HandleType**  and  **Handle**  set to  **SQL\_HANDLE\_DBC**  and  **ConnectionHandle**, respectively, to obtain the  **SQLSTATE**  value. The  **SQLSTATE**  value provides the detailed function calling information.

## Example<a name="en-us_topic_0238272901_en-us_topic_0237120431_en-us_topic_0059777827_s25786d32524c458786d43445baa48941"></a>

See  [Examples](examples.md).

