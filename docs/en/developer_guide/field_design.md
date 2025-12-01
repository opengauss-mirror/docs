# Field Design<a name="EN-US_TOPIC_0000001102708106"></a>

## Selecting a Data Type<a name="section52674274151022"></a>

To improve query efficiency, comply with the following rules when designing columns:

-   \[Proposal\] Use the most efficient data types allowed.

    If all of the following number types provide the required service precision, they are recommended in descending order of priority: integer, floating point, and numeric.

-   \[Proposal\] In tables that are logically related, columns having the same meaning should use the same data type.
-   \[Proposal\] For string data, you are advised to use variable-length strings and specify the maximum length. To avoid truncation, ensure that the specified maximum length is greater than the maximum number of characters to be stored. You are not advised to use CHAR\(n\), BPCHAR\(n\), NCHAR\(n\), or CHARACTER\(n\), unless you know that the string length is fixed.

    For details about string types, see  [Common String Types](#section290310115932).


## Common String Types<a name="section290310115932"></a>

Every column requires a data type suitable for its data characteristics. The following table lists common string types in openGauss.

**Table  1**  Common string types

<a name="table50547859"></a>
<table><thead align="left"><tr id="row888699"><th class="cellrowborder" valign="top" width="26.567343265673433%" id="mcps1.2.4.1.1"><p id="p4875833"><a name="p4875833"></a><a name="p4875833"></a><strong id="b43882502"><a name="b43882502"></a><a name="b43882502"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="46.865313468653135%" id="mcps1.2.4.1.2"><p id="p64821786"><a name="p64821786"></a><a name="p64821786"></a><strong id="b5748555236"><a name="b5748555236"></a><a name="b5748555236"></a>Description</strong></p>
</th>
<th class="cellrowborder" valign="top" width="26.567343265673433%" id="mcps1.2.4.1.3"><p id="p10441773"><a name="p10441773"></a><a name="p10441773"></a><strong id="b26867098"><a name="b26867098"></a><a name="b26867098"></a>Max. Storage Capacity</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row28751319"><td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.1 "><p id="p47155484"><a name="p47155484"></a><a name="p47155484"></a>CHAR(n)</p>
</td>
<td class="cellrowborder" valign="top" width="46.865313468653135%" headers="mcps1.2.4.1.2 "><p id="p61497874"><a name="p61497874"></a><a name="p61497874"></a>Fixed-length string, where <em id="i19141549102317"><a name="i19141549102317"></a><a name="i19141549102317"></a>n</em> indicates the stored bytes. If the length of an input string is smaller than <em id="i181481249102318"><a name="i181481249102318"></a><a name="i181481249102318"></a>n</em>, the string is automatically padded to <em id="i121483492234"><a name="i121483492234"></a><a name="i121483492234"></a>n</em> bytes using NULL characters.</p>
</td>
<td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.3 "><p id="p15271904"><a name="p15271904"></a><a name="p15271904"></a>10 MB</p>
</td>
</tr>
<tr id="row3229416"><td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.1 "><p id="p60256175"><a name="p60256175"></a><a name="p60256175"></a>CHARACTER(n)</p>
</td>
<td class="cellrowborder" valign="top" width="46.865313468653135%" headers="mcps1.2.4.1.2 "><p id="p48911969"><a name="p48911969"></a><a name="p48911969"></a>Fixed-length string, where <em id="i7122105517236"><a name="i7122105517236"></a><a name="i7122105517236"></a>n</em> indicates the stored bytes. If the length of an input string is smaller than <em id="i1112315582314"><a name="i1112315582314"></a><a name="i1112315582314"></a>n</em>, the string is automatically padded to <em id="i1712313555235"><a name="i1712313555235"></a><a name="i1712313555235"></a>n</em> bytes using NULL characters.</p>
</td>
<td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.3 "><p id="p2446568"><a name="p2446568"></a><a name="p2446568"></a>10 MB</p>
</td>
</tr>
<tr id="row22019119"><td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.1 "><p id="p38718224"><a name="p38718224"></a><a name="p38718224"></a>NCHAR(n)</p>
</td>
<td class="cellrowborder" valign="top" width="46.865313468653135%" headers="mcps1.2.4.1.2 "><p id="p49168441"><a name="p49168441"></a><a name="p49168441"></a>Fixed-length string, where <em id="i191474512416"><a name="i191474512416"></a><a name="i191474512416"></a>n</em> indicates the stored bytes. If the length of an input string is smaller than <em id="i41477514243"><a name="i41477514243"></a><a name="i41477514243"></a>n</em>, the string is automatically padded to <em id="i13147145162418"><a name="i13147145162418"></a><a name="i13147145162418"></a>n</em> bytes using NULL characters.</p>
</td>
<td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.3 "><p id="p23220819"><a name="p23220819"></a><a name="p23220819"></a>10 MB</p>
</td>
</tr>
<tr id="row7660786"><td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.1 "><p id="p16543928"><a name="p16543928"></a><a name="p16543928"></a>BPCHAR(n)</p>
</td>
<td class="cellrowborder" valign="top" width="46.865313468653135%" headers="mcps1.2.4.1.2 "><p id="p64989762"><a name="p64989762"></a><a name="p64989762"></a>Fixed-length string, where <em id="i20150155122412"><a name="i20150155122412"></a><a name="i20150155122412"></a>n</em> indicates the stored bytes. If the length of an input string is smaller than <em id="i81512516246"><a name="i81512516246"></a><a name="i81512516246"></a>n</em>, the string is automatically padded to <em id="i10151958244"><a name="i10151958244"></a><a name="i10151958244"></a>n</em> bytes using NULL characters.</p>
</td>
<td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.3 "><p id="p29679352"><a name="p29679352"></a><a name="p29679352"></a>10 MB</p>
</td>
</tr>
<tr id="row65787584"><td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.1 "><p id="p27194084"><a name="p27194084"></a><a name="p27194084"></a>VARCHAR(n)</p>
</td>
<td class="cellrowborder" valign="top" width="46.865313468653135%" headers="mcps1.2.4.1.2 "><p id="p55237225"><a name="p55237225"></a><a name="p55237225"></a>Variable-length string, where <em id="i842352697152210"><a name="i842352697152210"></a><a name="i842352697152210"></a>n</em> indicates the maximum number of bytes that can be stored.</p>
</td>
<td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.3 "><p id="p45030263"><a name="p45030263"></a><a name="p45030263"></a>10 MB</p>
</td>
</tr>
<tr id="row2619184"><td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.1 "><p id="p10827357"><a name="p10827357"></a><a name="p10827357"></a>CHARACTER VARYING(n)</p>
</td>
<td class="cellrowborder" valign="top" width="46.865313468653135%" headers="mcps1.2.4.1.2 "><p id="p4600743"><a name="p4600743"></a><a name="p4600743"></a>Variable-length string, where <em id="i23167165249"><a name="i23167165249"></a><a name="i23167165249"></a>n</em> indicates the maximum number of bytes that can be stored. This data type and VARCHAR(n) are different representations of the same data type.</p>
</td>
<td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.3 "><p id="p37115893"><a name="p37115893"></a><a name="p37115893"></a>10 MB</p>
</td>
</tr>
<tr id="row65607585"><td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.1 "><p id="p12614193"><a name="p12614193"></a><a name="p12614193"></a>VARCHAR2(n)</p>
</td>
<td class="cellrowborder" valign="top" width="46.865313468653135%" headers="mcps1.2.4.1.2 "><p id="p15116730"><a name="p15116730"></a><a name="p15116730"></a>Variable-length string, where <em id="i155421522102412"><a name="i155421522102412"></a><a name="i155421522102412"></a>n</em> indicates the maximum number of bytes that can be stored. This data type is added to be compatible with the Oracle database, and its behavior is the same as that of VARCHAR(n).</p>
</td>
<td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.3 "><p id="p16495587"><a name="p16495587"></a><a name="p16495587"></a>10 MB</p>
</td>
</tr>
<tr id="row14242555"><td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.1 "><p id="p12796279"><a name="p12796279"></a><a name="p12796279"></a>NVARCHAR2(n)</p>
</td>
<td class="cellrowborder" valign="top" width="46.865313468653135%" headers="mcps1.2.4.1.2 "><p id="p29865704"><a name="p29865704"></a><a name="p29865704"></a>Variable-length string, where <em id="i193660272249"><a name="i193660272249"></a><a name="i193660272249"></a>n</em> indicates the maximum number of bytes that can be stored.</p>
</td>
<td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.3 "><p id="p28826987"><a name="p28826987"></a><a name="p28826987"></a>10 MB</p>
</td>
</tr>
<tr id="row58116296"><td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.1 "><p id="p9799559"><a name="p9799559"></a><a name="p9799559"></a>TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="46.865313468653135%" headers="mcps1.2.4.1.2 "><p id="p55566810"><a name="p55566810"></a><a name="p55566810"></a>Variable-length string. Its maximum length is 1 GB minus 8203 bytes.</p>
</td>
<td class="cellrowborder" valign="top" width="26.567343265673433%" headers="mcps1.2.4.1.3 "><p id="p4617770"><a name="p4617770"></a><a name="p4617770"></a>1 GB minus 8203 bytes</p>
</td>
</tr>
</tbody>
</table>

