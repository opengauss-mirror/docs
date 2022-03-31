# Operating Environment<a name="EN-US_TOPIC_0289896513"></a>

## Hardware<a name="en-us_topic_0283136535_en-us_topic_0237080615_en-us_topic_0231763749_en-us_topic_0059777704_se9be325cd0b04ac59d1bed4ff50dc00a"></a>

openGauss supports:

-   Kunpeng server and x86\_64-based universal PC server
-   SATA, SAS, and SSD local storage
-   1-gigabit and 10-gigabit Ethernet

## Supported OSs<a name="en-us_topic_0231763749_en-us_topic_0059777704_sa3cc6a5214094aa9b46a22b25ba77c20"></a>

**Table  1**  Software requirements

<a name="en-us_topic_0085434629_en-us_topic_0059782022_tfb195a8129b24c709d238b091e57405a"></a>
<table><thead align="left"><tr id="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_rbb0bb8c17c0c49fc9666f58bdd5487bb"><th class="cellrowborder" valign="top" width="25.2%" id="mcps1.2.3.1.1"><p id="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a177f29c592264a53a346a3b6c33a3ea0"><a name="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a177f29c592264a53a346a3b6c33a3ea0"></a><a name="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a177f29c592264a53a346a3b6c33a3ea0"></a>Software</p>
</th>
<th class="cellrowborder" valign="top" width="74.8%" id="mcps1.2.3.1.2"><p id="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a39384e588fc744db804eb3f5beecaa53"><a name="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a39384e588fc744db804eb3f5beecaa53"></a><a name="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a39384e588fc744db804eb3f5beecaa53"></a>Configuration Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_rd18980a861d444ad8e87a077e7785e40"><td class="cellrowborder" valign="top" width="25.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a6036b745c87c44ab85a2f6cec7c4e5da"><a name="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a6036b745c87c44ab85a2f6cec7c4e5da"></a><a name="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a6036b745c87c44ab85a2f6cec7c4e5da"></a>OS</p>
</td>
<td class="cellrowborder" valign="top" width="74.8%" headers="mcps1.2.3.1.2 "><a name="en-us_concept_0283139016_ul2800840102316"></a><a name="en-us_concept_0283139016_ul2800840102316"></a><ul id="en-us_concept_0283139016_ul2800840102316"><li>Arm:<a name="en-us_concept_0283139016_ul177759349286"></a><a name="en-us_concept_0283139016_ul177759349286"></a><ul id="en-us_concept_0283139016_ul177759349286"><li>EulerOS V2.0SP10</li></ul>
</li><li>x86:<a name="en-us_concept_0283139016_ul851564911283"></a><a name="en-us_concept_0283139016_ul851564911283"></a><ul id="en-us_concept_0283139016_ul851564911283"><li>EulerOS V2.0SP10</li><li>SUSE 12.5</li></ul>
</li></ul>
</td>
</tr>
<tr id="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_rf52ebb45df8e4f57882a97bef3b36ca6"><td class="cellrowborder" valign="top" width="25.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a6f023000ee654c70b98c163f8c9b5d99"><a name="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a6f023000ee654c70b98c163f8c9b5d99"></a><a name="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a6f023000ee654c70b98c163f8c9b5d99"></a>File system</p>
</td>
<td class="cellrowborder" valign="top" width="74.8%" headers="mcps1.2.3.1.2 "><p id="en-us_concept_0283139016_en-us_concept_0238164429_p58701820272"><a name="en-us_concept_0283139016_en-us_concept_0238164429_p58701820272"></a><a name="en-us_concept_0283139016_en-us_concept_0238164429_p58701820272"></a>The ext4 file system is recommended for EulerOS.</p>
<p id="en-us_concept_0283139016_en-us_concept_0238164429_p143519215717"><a name="en-us_concept_0283139016_en-us_concept_0238164429_p143519215717"></a><a name="en-us_concept_0283139016_en-us_concept_0238164429_p143519215717"></a>It is recommended that the number of remaining inodes be greater than 1.5 billion.</p>
</td>
</tr>
<tr id="row20231240144014"><td class="cellrowborder" valign="top" width="25.2%" headers="mcps1.2.3.1.1 "><p id="p1623244064014"><a name="p1623244064014"></a><a name="p1623244064014"></a>Python</p>
</td>
<td class="cellrowborder" valign="top" width="74.8%" headers="mcps1.2.3.1.2 "><a name="ul1516434614146"></a><a name="ul1516434614146"></a><ul id="ul1516434614146"><li>EulerOS: supports Python 3.7.X.</li><li>SUSE: supports Python 3.7.X.</li></ul>
</td>
</tr>
<tr id="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_r1f5aefa904854b5bbf1f82931d9fc9b5"><td class="cellrowborder" valign="top" width="25.2%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a9b2d673c90f94bd49a7d4bfdb277e3fb"><a name="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a9b2d673c90f94bd49a7d4bfdb277e3fb"></a><a name="en-us_topic_0241802565_en-us_topic_0085434629_en-us_topic_0059782022_a9b2d673c90f94bd49a7d4bfdb277e3fb"></a>Tool</p>
</td>
<td class="cellrowborder" valign="top" width="74.8%" headers="mcps1.2.3.1.2 "><p id="p10544645104114"><a name="p10544645104114"></a><a name="p10544645104114"></a>bzip2</p>
</td>
</tr>
</tbody>
</table>

