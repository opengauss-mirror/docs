# Verifying the Upgrade<a name="EN-US_TOPIC_0305491432"></a>

This section describes how to verify the upgrade, including the test cases and detailed operation procedure.

-   **[Verification Checklist](#verification-checklist)**  

-   **[Querying the Version After Upgrade](#querying-the-version-after-upgrade)**  

-   **[Checking the Status of the Database for Upgrade](#checking the status of the database for upgrade)**  

## Verification Checklist

**Table  1**  Verification checklist

<a name="toc218487221"></a>

<table><tbody><tr id="row35302572"><td class="cellrowborder" valign="top" width="11.219999999999999%"><p id="p40936059"><a name="p40936059"></a><a name="p40936059"></a>No.</p>
</td>
<td class="cellrowborder" valign="top" width="20.41%"><p id="p27486471"><a name="p27486471"></a><a name="p27486471"></a>Item</p>
</td>
<td class="cellrowborder" valign="top" width="48.980000000000004%"><p id="p11811639"><a name="p11811639"></a><a name="p11811639"></a>Criteria</p>
</td>
<td class="cellrowborder" valign="top" width="19.39%"><p id="p17218675"><a name="p17218675"></a><a name="p17218675"></a>Check Result</p>
</td>
</tr>
<tr id="row20750354"><td class="cellrowborder" valign="top" width="11.219999999999999%"><p id="p3057100"><a name="p3057100"></a><a name="p3057100"></a>1</p>
</td>
<td class="cellrowborder" valign="top" width="20.41%"><p id="p530184212110"><a name="p530184212110"></a><a name="p530184212110"></a>Query the version.</p>
</td>
<td class="cellrowborder" valign="top" width="48.980000000000004%"><p id="p83018421413"><a name="p83018421413"></a><a name="p83018421413"></a>Check whether the source version has been upgraded to the target version.</p>
</td>
<td class="cellrowborder" valign="top" width="19.39%"><p id="p30183838"><a name="p30183838"></a><a name="p30183838"></a>-</p>
</td>
</tr>
<tr id="row3219094"><td class="cellrowborder" valign="top" width="11.219999999999999%"><p id="p59420070"><a name="p59420070"></a><a name="p59420070"></a>2</p>
</td>
<td class="cellrowborder" valign="top" width="20.41%"><p id="p43016423117"><a name="p43016423117"></a><a name="p43016423117"></a>Check the OS health status.</p>
</td>
<td class="cellrowborder" valign="top" width="48.980000000000004%"><p id="p1680714524343"><a name="p1680714524343"></a><a name="p1680714524343"></a>Use the <strong id="b17567124616382"><a name="b17567124616382"></a><a name="b17567124616382"></a>gs_checkos</strong> tool to check the OS status.</p>
</td>
<td class="cellrowborder" valign="top" width="19.39%"><p id="p51381840"><a name="p51381840"></a><a name="p51381840"></a>-</p>
</td>
</tr>
<tr id="row59783377"><td class="cellrowborder" valign="top" width="11.219999999999999%"><p id="p10615408"><a name="p10615408"></a><a name="p10615408"></a>3</p>
</td>
<td class="cellrowborder" valign="top" width="20.41%"><p id="p54541752"><a name="p54541752"></a><a name="p54541752"></a>Check the database status.</p>
</td>
<td class="cellrowborder" valign="top" width="48.980000000000004%"><p id="p345815107386"><a name="p345815107386"></a><a name="p345815107386"></a>Use the <strong id="b1476675153816"><a name="b1476675153816"></a><a name="b1476675153816"></a>gs_om </strong>tool to check the database status.</p>
</td>
<td class="cellrowborder" valign="top" width="19.39%"><p id="p23973984"><a name="p23973984"></a><a name="p23973984"></a>-</p>
</td>
</tr>
</tbody>
</table>

## Querying the Version After Upgrade

This section describes how to query the version.

### Procedure<a name="section117172026191017"></a>

1. Log in to the node as the database user \(for example,  **omm**\) and run the  **source**  command to set the environment variables.

2. Run the following command to check the version information of all nodes:

   ```
   gs_ssh -c "gsql -V"
   ```

## Checking the Status of the Database for Upgrade

This section describes how to query the database status.

### Procedure<a name="section117172026191017"></a>

1. Log in to the node as a database user \(for example,  **omm**\).

2. Run the following command to check the database status:

   ```
   gs_om -t status
   ```

   If the value of  **cluster\_state**  is  **Normal**  in the command output, the database is normal.

