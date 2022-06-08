# Foreign Key Lock Enhancement<a name="EN-US_TOPIC_0000001220343488"></a>

## Availability<a name="section1076382216287"></a>

This feature is available since openGauss 3.0.0.

## Introduction<a name="section732915401281"></a>

Two types of row locks are added, which are extended from share and update locks to key share, share, no key update, and update locks. A non-primary key update obtains a no key update lock, and a row lock obtained by a foreign key trigger is a key share lock. The two types of locks do not conflict with each other, thereby improving concurrency of foreign key locks.

## Benefits<a name="section103921852122817"></a>

Most table update operations are non-primary key updates. This feature effectively reduces the blocking of concurrent updates in scenarios with foreign key constraints and improves efficiency.

## Description<a name="section811017719290"></a>

When the non-primary key column of a tuple in the parent table is updated, the no key update lock is obtained. When the corresponding tuple in the child table is updated or inserted, the foreign key trigger is triggered to obtain the key share lock of the tuple in the parent table. They do not block each other.

Because row locks that do not conflict with each other are added, multiple transactions are not composed of only share locks. Instead, there are multiple combinations of different row locks according to the following conflict table.

<a name="simpletable14592221592"></a>
<table id="simpletable14592221592"><tr id="strow114590221295"><td valign="top" id="stentry2459172215912"><p id="p84601122999"><a name="p84601122999"></a><a name="p84601122999"></a>Lock Mode</p>
</td>
<td valign="top" id="stentry174608221495"><p id="p94606227911"><a name="p94606227911"></a><a name="p94606227911"></a>key share</p>
</td>
<td valign="top" id="stentry1460122198"><p id="p144604226920"><a name="p144604226920"></a><a name="p144604226920"></a>share</p>
</td>
<td valign="top" id="stentry134602221916"><p id="p7460522593"><a name="p7460522593"></a><a name="p7460522593"></a>no key update</p>
</td>
<td valign="top" id="stentry846092219913"><p id="p12460142219918"><a name="p12460142219918"></a><a name="p12460142219918"></a>update</p>
</td>
</tr>
<tr id="strow94603222912"><td valign="top" id="stentry154601221098"><p id="p1046015221095"><a name="p1046015221095"></a><a name="p1046015221095"></a>key share</p>
</td>
<td valign="top" id="stentry114606221295">&nbsp;&nbsp;</td>
<td valign="top" id="stentry1246011227917">&nbsp;&nbsp;</td>
<td valign="top" id="stentry94601122890">&nbsp;&nbsp;</td>
<td valign="top" id="stentry146010221892"><p id="p114601229912"><a name="p114601229912"></a><a name="p114601229912"></a>X</p>
</td>
</tr>
<tr id="strow14608223913"><td valign="top" id="stentry1446016227910"><p id="p164608229914"><a name="p164608229914"></a><a name="p164608229914"></a>share</p>
</td>
<td valign="top" id="stentry74609228915">&nbsp;&nbsp;</td>
<td valign="top" id="stentry94601522491">&nbsp;&nbsp;</td>
<td valign="top" id="stentry146042215913"><p id="p104602221915"><a name="p104602221915"></a><a name="p104602221915"></a>X</p>
</td>
<td valign="top" id="stentry1946013221194"><p id="p34600222093"><a name="p34600222093"></a><a name="p34600222093"></a>X</p>
</td>
</tr>
<tr id="strow64604224917"><td valign="top" id="stentry144602228914"><p id="p1746002215915"><a name="p1746002215915"></a><a name="p1746002215915"></a>no key update</p>
</td>
<td valign="top" id="stentry44609227917">&nbsp;&nbsp;</td>
<td valign="top" id="stentry16460822397"><p id="p144601022391"><a name="p144601022391"></a><a name="p144601022391"></a>X</p>
</td>
<td valign="top" id="stentry13460822499"><p id="p144604221493"><a name="p144604221493"></a><a name="p144604221493"></a>X</p>
</td>
<td valign="top" id="stentry1546002213914"><p id="p4460132212916"><a name="p4460132212916"></a><a name="p4460132212916"></a>X</p>
</td>
</tr>
<tr id="strow746082212913"><td valign="top" id="stentry246014221915"><p id="p04600224917"><a name="p04600224917"></a><a name="p04600224917"></a>update</p>
</td>
<td valign="top" id="stentry184601722092"><p id="p16460222493"><a name="p16460222493"></a><a name="p16460222493"></a>X</p>
</td>
<td valign="top" id="stentry17460182213914"><p id="p3460182217915"><a name="p3460182217915"></a><a name="p3460182217915"></a>X</p>
</td>
<td valign="top" id="stentry246019228911"><p id="p846019224916"><a name="p846019224916"></a><a name="p846019224916"></a>X</p>
</td>
<td valign="top" id="stentry194606221592"><p id="p144607221093"><a name="p144607221093"></a><a name="p144607221093"></a>X</p>
</td>
</tr>
</table>

## Enhancements<a name="section1359382119297"></a>

None.

## Constraints<a name="section13355203802911"></a>

-   The new row lock does not support the Ustore table.

## Dependencies<a name="section101449415302"></a>

None

