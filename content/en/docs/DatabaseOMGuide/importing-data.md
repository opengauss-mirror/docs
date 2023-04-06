# Importing Data<a name="EN-US_TOPIC_0242370266"></a>

-   **[Running the INSERT Statement to Insert Data](running-the-insert-statement-to-insert-data.md)**  

-   **[Running the COPY FROM STDIN Statement to Import Data](running-the-copy-from-stdin-statement-to-import-data.md)**  

-   **[Using a gsql Meta-Command to Import Data](using-a-gsql-meta-command-to-import-data.md)**  

-   **[Using gs\_restore to Import Data](using-gs_restore-to-import-data.md)**  

-   **[Updating Data in a Table](updating-data-in-a-table-4.md)**  

-   **[Deep Copy](deep-copy.md)**  

-   **[ANALYZE Table](analyze-table.md)**  

-   **[Doing VACUUM to a Table](doing-vacuum-to-a-table.md)**  

-   **[Managing Concurrent Write Operations](managing-concurrent-write-operations.md)** 

You can use  **INSERT**,  **COPY**, or  **\\copy**  \(a  **gsql**  meta-command\) to import data to the openGauss database. The methods have different characteristics. For details, see  [Table 1](#en-us_topic_0237121116_table59418455192145).

**Table  1**  Import modes

<a name="en-us_topic_0237121116_table59418455192145"></a>
<table><thead align="left"><tr id="en-us_topic_0237121116_row65511553192145"><th class="cellrowborder" valign="top" width="19%" id="mcps1.2.3.1.1"><p id="en-us_topic_0237121116_p55849518179"><a name="en-us_topic_0237121116_p55849518179"></a><a name="en-us_topic_0237121116_p55849518179"></a>Mode</p>
</th>
<th class="cellrowborder" valign="top" width="81%" id="mcps1.2.3.1.2"><p id="en-us_topic_0237121116_p10554162961812"><a name="en-us_topic_0237121116_p10554162961812"></a><a name="en-us_topic_0237121116_p10554162961812"></a>Characteristics</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237121116_row1725813531883"><td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121116_p1965033598"><a name="en-us_topic_0237121116_p1965033598"></a><a name="en-us_topic_0237121116_p1965033598"></a>INSERT</p>
</td>
<td class="cellrowborder" valign="top" width="81%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121116_p2650031891"><a name="en-us_topic_0237121116_p2650031891"></a><a name="en-us_topic_0237121116_p2650031891"></a>Insert one or more rows of data, or insert data from a specified table.</p>
</td>
</tr>
<tr id="en-us_topic_0237121116_row12836736192145"><td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121116_p203049192145"><a name="en-us_topic_0237121116_p203049192145"></a><a name="en-us_topic_0237121116_p203049192145"></a>COPY</p>
</td>
<td class="cellrowborder" valign="top" width="81%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121116_p4146204433610"><a name="en-us_topic_0237121116_p4146204433610"></a><a name="en-us_topic_0237121116_p4146204433610"></a>Run the <strong id="b12242164619120"><a name="b12242164619120"></a><a name="b12242164619120"></a>COPY FROM STDIN</strong> statement to write data into the <span id="en-us_topic_0237121116_text1436195834811"><a name="en-us_topic_0237121116_text1436195834811"></a><a name="en-us_topic_0237121116_text1436195834811"></a><span id="text456891014142"><a name="text456891014142"></a><a name="text456891014142"></a>openGauss</span></span> database.</p>
<p id="en-us_topic_0237121116_p18554132911815"><a name="en-us_topic_0237121116_p18554132911815"></a><a name="en-us_topic_0237121116_p18554132911815"></a>Service data does not need to be stored in files when it is written from other databases to the <span id="en-us_topic_0237121116_text192235599483"><a name="en-us_topic_0237121116_text192235599483"></a><a name="en-us_topic_0237121116_text192235599483"></a><span id="text1618212129145"><a name="text1618212129145"></a><a name="text1618212129145"></a>openGauss</span></span> database through the CopyManager interface driven by JDBC.</p>
</td>
</tr>
<tr id="en-us_topic_0237121116_row49640788202357"><td class="cellrowborder" valign="top" width="19%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0237121116_p16457304202357"><a name="en-us_topic_0237121116_p16457304202357"></a><a name="en-us_topic_0237121116_p16457304202357"></a><strong id="b162132161126"><a name="b162132161126"></a><a name="b162132161126"></a>\copy</strong>, a <strong id="b132199161723"><a name="b132199161723"></a><a name="b132199161723"></a>gsql</strong> meta-command</p>
</td>
<td class="cellrowborder" valign="top" width="81%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0237121116_p155541529111817"><a name="en-us_topic_0237121116_p155541529111817"></a><a name="en-us_topic_0237121116_p155541529111817"></a>Different from the SQL <strong id="b91491718322"><a name="b91491718322"></a><a name="b91491718322"></a>COPY</strong> statement, the <strong id="b1015311818211"><a name="b1015311818211"></a><a name="b1015311818211"></a>\copy</strong> command can read data from or write data into only local files on a <strong id="b215617186215"><a name="b215617186215"></a><a name="b215617186215"></a>gsql</strong> client.</p>
<div class="note" id="en-us_topic_0237121116_note1924115273417"><a name="en-us_topic_0237121116_note1924115273417"></a><a name="en-us_topic_0237121116_note1924115273417"></a><span class="notetitle"> NOTE: </span><div class="notebody"><p id="en-us_topic_0237121116_p54222394915"><a name="en-us_topic_0237121116_p54222394915"></a><a name="en-us_topic_0237121116_p54222394915"></a><strong id="b09484203214"><a name="b09484203214"></a><a name="b09484203214"></a>\copy</strong> applies only to small-scale data import in good format. It does not preprocess invalid characters or provide error tolerance. Therefore, <strong id="b995113201028"><a name="b995113201028"></a><a name="b995113201028"></a>\copy</strong> cannot be used in scenarios where abnormal data exists. <strong id="b22431524521"><a name="b22431524521"></a><a name="b22431524521"></a>COPY</strong> is preferred for data import.</p>
</div></div>
</td>
</tr>
</tbody>
</table>