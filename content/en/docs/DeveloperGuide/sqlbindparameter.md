# SQLBindParameter<a name="EN-US_TOPIC_0242371441"></a>

## Function<a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_s9699227cd3d64b43b542e3e3b9a52f37"></a>

SQLBindParameter is used to bind parameter markers in an SQL statement to a buffer.

## Prototype<a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_s76c0a779ab1c478c810142eb2525b643"></a>

```
SQLRETURN SQLBindParameter(SQLHSTMT       StatementHandle,    
                           SQLUSMALLINT   ParameterNumber,     
                           SQLSMALLINT    InputOutputType,
                           SQLSMALLINT    ValuetType,
                           SQLSMALLINT    ParameterType,
                           SQLULEN    ColumnSize,
                           SQLSMALLINT    DecimalDigits,
                           SQLPOINTER     ParameterValuePtr,
                           SQLLEN     BufferLength,
                           SQLLEN     *StrLen_or_IndPtr);
```

## Parameters<a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_s162b61a3e0d64b3286e3070aee689350"></a>

**Table  1**  SQLBindParameter

<a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_t166b5c8088984234b84efa5befc8b9ff"></a>
<table><thead align="left"><tr id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_r91d6d73f70244428914a6ac0142e6fab"><th class="cellrowborder" valign="top" width="24.5%" id="mcps1.2.3.1.1"><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ab99afd2345e74b028bde2115983e0575"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ab99afd2345e74b028bde2115983e0575"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ab99afd2345e74b028bde2115983e0575"></a><strong id="b271734614125"><a name="b271734614125"></a><a name="b271734614125"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="75.5%" id="mcps1.2.3.1.2"><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a8f9bf322b61b4803b2a35c920f19f664"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a8f9bf322b61b4803b2a35c920f19f664"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a8f9bf322b61b4803b2a35c920f19f664"></a><strong id="b438693901217"><a name="b438693901217"></a><a name="b438693901217"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_r80a5189869914c0084cfe86e534f96e9"><td class="cellrowborder" valign="top" width="24.5%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_aba9fe70a94744ea59b0d184e2e7567c8"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_aba9fe70a94744ea59b0d184e2e7567c8"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_aba9fe70a94744ea59b0d184e2e7567c8"></a>StatementHandle</p>
</td>
<td class="cellrowborder" valign="top" width="75.5%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a2a735c4a026b49b89f4adf01293ca3c8"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a2a735c4a026b49b89f4adf01293ca3c8"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a2a735c4a026b49b89f4adf01293ca3c8"></a>Statement handle.</p>
</td>
</tr>
<tr id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_rbfc5f8db132f4590a645ebdec17aea87"><td class="cellrowborder" valign="top" width="24.5%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ae97a93d555d54e49b1b149309f52aebb"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ae97a93d555d54e49b1b149309f52aebb"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ae97a93d555d54e49b1b149309f52aebb"></a>ParameterNumber</p>
</td>
<td class="cellrowborder" valign="top" width="75.5%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a38c7f3bf2112431197c7d37f193063b3"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a38c7f3bf2112431197c7d37f193063b3"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a38c7f3bf2112431197c7d37f193063b3"></a>Parameter marker number, starting with 1 and increasing in ascending order.</p>
</td>
</tr>
<tr id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_re0aa5f8a651546acad800610a3c864d2"><td class="cellrowborder" valign="top" width="24.5%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a542ace8688914a71aa9660b9a63a4175"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a542ace8688914a71aa9660b9a63a4175"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a542ace8688914a71aa9660b9a63a4175"></a>InputOutputType</p>
</td>
<td class="cellrowborder" valign="top" width="75.5%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a67d55944cdf147b7abf45df54771b275"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a67d55944cdf147b7abf45df54771b275"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a67d55944cdf147b7abf45df54771b275"></a>Input/output type of the parameter.</p>
</td>
</tr>
<tr id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_r332073e3d0f043b4abebf6b649aa38e8"><td class="cellrowborder" valign="top" width="24.5%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ac3e0b43615114ea18bb09d92c11adf6c"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ac3e0b43615114ea18bb09d92c11adf6c"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ac3e0b43615114ea18bb09d92c11adf6c"></a>ValueType</p>
</td>
<td class="cellrowborder" valign="top" width="75.5%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ae42673fcd8a54f449f37875df76b0ebf"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ae42673fcd8a54f449f37875df76b0ebf"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ae42673fcd8a54f449f37875df76b0ebf"></a>C data type of the parameter.</p>
</td>
</tr>
<tr id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ra23f8475a1184092a403292abdee5ece"><td class="cellrowborder" valign="top" width="24.5%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ab9fe2bd9b3a0439c8c8a9852d543df24"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ab9fe2bd9b3a0439c8c8a9852d543df24"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ab9fe2bd9b3a0439c8c8a9852d543df24"></a>ParameterType</p>
</td>
<td class="cellrowborder" valign="top" width="75.5%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a40ece0f98d3445e0ac05fce8b19e2e2d"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a40ece0f98d3445e0ac05fce8b19e2e2d"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a40ece0f98d3445e0ac05fce8b19e2e2d"></a>SQL data type of the parameter.</p>
</td>
</tr>
<tr id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_reec698a0759b4b91b1a4bf2ed956d042"><td class="cellrowborder" valign="top" width="24.5%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a92c4984ebdb349bd995ed0f66e10425e"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a92c4984ebdb349bd995ed0f66e10425e"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a92c4984ebdb349bd995ed0f66e10425e"></a>ColumnSize</p>
</td>
<td class="cellrowborder" valign="top" width="75.5%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a5e0d64700aa940ee804879dd6768b0f9"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a5e0d64700aa940ee804879dd6768b0f9"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a5e0d64700aa940ee804879dd6768b0f9"></a>Size of the column or expression of the corresponding parameter marker.</p>
</td>
</tr>
<tr id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_re2a37f4b1bb8448ba74b9064a3a05c9f"><td class="cellrowborder" valign="top" width="24.5%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_aefdadd300b494ce0a5512fead99fb5e0"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_aefdadd300b494ce0a5512fead99fb5e0"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_aefdadd300b494ce0a5512fead99fb5e0"></a>DecimalDigits</p>
</td>
<td class="cellrowborder" valign="top" width="75.5%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a379515ac9fd74567b157544739ab88ba"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a379515ac9fd74567b157544739ab88ba"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a379515ac9fd74567b157544739ab88ba"></a>Decimal digit of the column or the expression of the corresponding parameter marker.</p>
</td>
</tr>
<tr id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ra28cbb7708ff43208021481712908d30"><td class="cellrowborder" valign="top" width="24.5%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ae87365429a5045a3908e618122f0163f"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ae87365429a5045a3908e618122f0163f"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ae87365429a5045a3908e618122f0163f"></a>ParameterValuePtr</p>
</td>
<td class="cellrowborder" valign="top" width="75.5%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a388c85fcf1d54f499c48bdd7bd7456ce"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a388c85fcf1d54f499c48bdd7bd7456ce"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a388c85fcf1d54f499c48bdd7bd7456ce"></a>Pointer to the storage parameter buffer.</p>
</td>
</tr>
<tr id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_re149a134df7043bba456a4e5fb646e69"><td class="cellrowborder" valign="top" width="24.5%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a021f3639580d41fa8b5f1f455f228b3b"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a021f3639580d41fa8b5f1f455f228b3b"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a021f3639580d41fa8b5f1f455f228b3b"></a>BufferLength</p>
</td>
<td class="cellrowborder" valign="top" width="75.5%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ac1a88ae8528240a589d326bd7af4db80"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ac1a88ae8528240a589d326bd7af4db80"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_ac1a88ae8528240a589d326bd7af4db80"></a>Length of the <strong id="b42422586114"><a name="b42422586114"></a><a name="b42422586114"></a>ParameterValuePtr</strong> buffer in bytes.</p>
</td>
</tr>
<tr id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_r939b4149143c407e8127be7c1f123b0e"><td class="cellrowborder" valign="top" width="24.5%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a367c93b4bf5a4677bb987328966c3fe5"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a367c93b4bf5a4677bb987328966c3fe5"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a367c93b4bf5a4677bb987328966c3fe5"></a>StrLen_or_IndPtr</p>
</td>
<td class="cellrowborder" valign="top" width="75.5%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a5d04fd9a5a6548588ddc1f87ea874a8e"><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a5d04fd9a5a6548588ddc1f87ea874a8e"></a><a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_a5d04fd9a5a6548588ddc1f87ea874a8e"></a>Pointer to the length or indicator of the buffer. If <strong id="b8501611185013"><a name="b8501611185013"></a><a name="b8501611185013"></a>StrLen_or_IndPtr</strong> is null, no length or indicator is used.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_sf9532352851949c9964aaeead0bbc405"></a>

-   **SQL\_SUCCESS**  indicates that the call succeeded.
-   **SQL\_SUCCESS\_WITH\_INFO**  indicates that some warning information is displayed.
-   **SQL\_ERROR**  indicates major errors, such as memory allocation and connection failures.
-   **SQL\_INVALID\_HANDLE**  indicates that invalid handles were called. This value may also be returned by other APIs.

## Precautions<a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_sfacc96eeb1b648f49f9dc26fd0a1366c"></a>

If SQLBindParameter returns  **SQL\_ERROR**  or  **SQL\_SUCCESS\_WITH\_INFO**, the application can call  [SQLGetDiagRec](sqlgetdiagrec.md), with  **HandleType**  and  **Handle**  set to  **SQL\_HANDLE\_STMT**  and  **StatementHandle**, respectively, to obtain the  **SQLSTATE**  value. The  **SQLSTATE**  value provides the detailed function calling information.

## Example<a name="en-us_topic_0238272887_en-us_topic_0237120417_en-us_topic_0059778788_sb33a1598a85f4ab581fd17d40e3db274"></a>

See  [Examples](examples.md).

