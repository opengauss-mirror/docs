# PG\_OPFAMILY<a name="EN-US_TOPIC_0289900724"></a>

**PG\_OPFAMILY**  defines operator families.

Each operator family is a collection of operators and associated support routines that implement semantics specified for a particular index access method. Furthermore, the operators in a family are all compatible, in a way that is specified by the access method. The operator family allows cross-data-type operators to be used with indexes and to be reasoned about using knowledge of access method semantics. 

**Table  1**  PG\_OPFAMILY columns

<a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_t260df90c3c004f98b7c6ff5952483c38"></a>
<table><thead align="left"><tr id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_rbc8135bf47e846d88333f51b9114cd83"><th class="cellrowborder" valign="top" width="20.110000000000003%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_ab5fb4ab7bd194303b46cc4ad3aec52fe"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_ab5fb4ab7bd194303b46cc4ad3aec52fe"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_ab5fb4ab7bd194303b46cc4ad3aec52fe"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="12.970000000000004%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a234e6e64e7314a79aad3345d9e769d97"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a234e6e64e7314a79aad3345d9e769d97"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a234e6e64e7314a79aad3345d9e769d97"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="29.51%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a8d16db01ed684f43911c6c356929955a"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a8d16db01ed684f43911c6c356929955a"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a8d16db01ed684f43911c6c356929955a"></a>Reference</p>
</th>
<th class="cellrowborder" valign="top" width="37.410000000000004%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a732d4012ff0741f882ceaceb52c9d3ee"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a732d4012ff0741f882ceaceb52c9d3ee"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a732d4012ff0741f882ceaceb52c9d3ee"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_raa07dd2d84854bad947e5e086e3c3928"><td class="cellrowborder" valign="top" width="20.110000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a7c18523519fe457da07cf1005e123b33"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a7c18523519fe457da07cf1005e123b33"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a7c18523519fe457da07cf1005e123b33"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="12.970000000000004%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a115caf4bf490430b9a6c6217a45da098"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a115caf4bf490430b9a6c6217a45da098"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a115caf4bf490430b9a6c6217a45da098"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="29.51%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a0f865ac1d22944e782474a43b39baa72"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a0f865ac1d22944e782474a43b39baa72"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a0f865ac1d22944e782474a43b39baa72"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="37.410000000000004%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a58217a7101f2406db7f9ba4826772c24"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a58217a7101f2406db7f9ba4826772c24"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a58217a7101f2406db7f9ba4826772c24"></a>Row identifier (hidden attribute, which must be specified)</p>
</td>
</tr>
<tr id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_rfd57d97bbf734bbb82d0ce87e4a37228"><td class="cellrowborder" valign="top" width="20.110000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_af80d41b65553486a87f9ff3e35571128"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_af80d41b65553486a87f9ff3e35571128"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_af80d41b65553486a87f9ff3e35571128"></a>opfmethod</p>
</td>
<td class="cellrowborder" valign="top" width="12.970000000000004%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_afec23dd9fbdb4d2e8b19489549372904"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_afec23dd9fbdb4d2e8b19489549372904"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_afec23dd9fbdb4d2e8b19489549372904"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="29.51%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a853cb94076cd4a7f87e5f15ca12956fa"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a853cb94076cd4a7f87e5f15ca12956fa"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a853cb94076cd4a7f87e5f15ca12956fa"></a><a href="pg_am.md">PG_AM</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="37.410000000000004%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a46177262616b478fa2e9bd38dffccea7"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a46177262616b478fa2e9bd38dffccea7"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a46177262616b478fa2e9bd38dffccea7"></a>Index access method used by an operator family</p>
</td>
</tr>
<tr id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_rf897d9754fd54aab83824d3cfe0c33cf"><td class="cellrowborder" valign="top" width="20.110000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_aa80c02144149474596c5909de9136f02"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_aa80c02144149474596c5909de9136f02"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_aa80c02144149474596c5909de9136f02"></a>opfname</p>
</td>
<td class="cellrowborder" valign="top" width="12.970000000000004%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a2126d2bd2be946ad9b3e9f4cbea0e292"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a2126d2bd2be946ad9b3e9f4cbea0e292"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a2126d2bd2be946ad9b3e9f4cbea0e292"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="29.51%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a8a0bf91fc6a3481183b3e3c70114aeb9"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a8a0bf91fc6a3481183b3e3c70114aeb9"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a8a0bf91fc6a3481183b3e3c70114aeb9"></a>-</p>
</td>
<td class="cellrowborder" valign="top" width="37.410000000000004%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a06cded55178148a5bacb7bc5bc00417d"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a06cded55178148a5bacb7bc5bc00417d"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a06cded55178148a5bacb7bc5bc00417d"></a>Name of the operator family</p>
</td>
</tr>
<tr id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_rd5de3158cf2440b2a8030604dbfd9292"><td class="cellrowborder" valign="top" width="20.110000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_aa4d8d8229e2f4e8d88e3ca8b75c2a0c4"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_aa4d8d8229e2f4e8d88e3ca8b75c2a0c4"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_aa4d8d8229e2f4e8d88e3ca8b75c2a0c4"></a>opfnamespace</p>
</td>
<td class="cellrowborder" valign="top" width="12.970000000000004%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_af2551a225a4f4670ab853d3aea684924"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_af2551a225a4f4670ab853d3aea684924"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_af2551a225a4f4670ab853d3aea684924"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="29.51%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a1503c46c598440c1a0c27651e03c3deb"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a1503c46c598440c1a0c27651e03c3deb"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a1503c46c598440c1a0c27651e03c3deb"></a><a href="pg_namespace.md">PG_NAMESPACE</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="37.410000000000004%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a50400062ab4548b48392794dece28b9c"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a50400062ab4548b48392794dece28b9c"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a50400062ab4548b48392794dece28b9c"></a>Namespace of the operator family</p>
</td>
</tr>
<tr id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_rccd470d52d7e495fb7020b8394d7ce63"><td class="cellrowborder" valign="top" width="20.110000000000003%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a6a23191be88c4b4eafb51eb5e9eb2b33"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a6a23191be88c4b4eafb51eb5e9eb2b33"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a6a23191be88c4b4eafb51eb5e9eb2b33"></a>opfowner</p>
</td>
<td class="cellrowborder" valign="top" width="12.970000000000004%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a27c52d89bfc24bce81514dafe5b44866"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a27c52d89bfc24bce81514dafe5b44866"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a27c52d89bfc24bce81514dafe5b44866"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="29.51%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_ad6f2ccd7e8274417ac3bd8bed32933b2"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_ad6f2ccd7e8274417ac3bd8bed32933b2"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_ad6f2ccd7e8274417ac3bd8bed32933b2"></a><a href="pg_authid.md">PG_AUTHID</a>.oid</p>
</td>
<td class="cellrowborder" valign="top" width="37.410000000000004%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a510f0f908cf94461b08c3d5dfa680404"><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a510f0f908cf94461b08c3d5dfa680404"></a><a name="en-us_topic_0283137129_en-us_topic_0237122305_en-us_topic_0059779065_a510f0f908cf94461b08c3d5dfa680404"></a>Owner of the operator family</p>
</td>
</tr>
</tbody>
</table>

The majority of the information defining an operator family is not in its  **PG\_OPFAMILY**  row, but in the associated rows in  [PG\_AMOP](pg_amop.md),  [PG\_AMPROC](pg_amproc.md), and  [PG\_OPCLASS](pg_opclass.md).

