# Errors Written the Log File<a name="EN-US_TOPIC_0257867410"></a>

All errors are logged in the database server log file. The following lists the errors that are written to the database server log file and are  **not**  returned to the user. The log is located in the data folder and named  **postgresql-DATE-TIME.log**.

**Table  1**  Errors Written Only to the Log File

<a name="en-us_topic_0257713264_table10216818"></a>
<table><thead align="left"><tr id="en-us_topic_0257713264_row28694013"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="en-us_topic_0257713264_p42513748"><a name="en-us_topic_0257713264_p42513748"></a><a name="en-us_topic_0257713264_p42513748"></a>Message in the Log</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="en-us_topic_0257713264_p21061526"><a name="en-us_topic_0257713264_p21061526"></a><a name="en-us_topic_0257713264_p21061526"></a>Error Internal Code</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0257713264_row28262061"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713264_p7525633"><a name="en-us_topic_0257713264_p7525633"></a><a name="en-us_topic_0257713264_p7525633"></a>Error code denoting success</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713264_p5596537"><a name="en-us_topic_0257713264_p5596537"></a><a name="en-us_topic_0257713264_p5596537"></a>MOT_NO_ERROR 0</p>
</td>
</tr>
<tr id="en-us_topic_0257713264_row50368838"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713264_p53344112"><a name="en-us_topic_0257713264_p53344112"></a><a name="en-us_topic_0257713264_p53344112"></a>Out of memory</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713264_p25905843"><a name="en-us_topic_0257713264_p25905843"></a><a name="en-us_topic_0257713264_p25905843"></a>MOT_ERROR_OOM 1</p>
</td>
</tr>
<tr id="en-us_topic_0257713264_row31825997"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713264_p27768935"><a name="en-us_topic_0257713264_p27768935"></a><a name="en-us_topic_0257713264_p27768935"></a>Invalid configuration</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713264_p34691245"><a name="en-us_topic_0257713264_p34691245"></a><a name="en-us_topic_0257713264_p34691245"></a>MOT_ERROR_INVALID_CFG 2</p>
</td>
</tr>
<tr id="en-us_topic_0257713264_row43785757"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713264_p56985425"><a name="en-us_topic_0257713264_p56985425"></a><a name="en-us_topic_0257713264_p56985425"></a>Invalid argument passed to function</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713264_p52416742"><a name="en-us_topic_0257713264_p52416742"></a><a name="en-us_topic_0257713264_p52416742"></a>MOT_ERROR_INVALID_ARG 3</p>
</td>
</tr>
<tr id="en-us_topic_0257713264_row1988636"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713264_p26861861"><a name="en-us_topic_0257713264_p26861861"></a><a name="en-us_topic_0257713264_p26861861"></a>System call failed</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713264_p28327138"><a name="en-us_topic_0257713264_p28327138"></a><a name="en-us_topic_0257713264_p28327138"></a>MOT_ERROR_SYSTEM_FAILURE 4</p>
</td>
</tr>
<tr id="en-us_topic_0257713264_row53617656"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713264_p48062879"><a name="en-us_topic_0257713264_p48062879"></a><a name="en-us_topic_0257713264_p48062879"></a>Resource limit reached</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713264_p779118"><a name="en-us_topic_0257713264_p779118"></a><a name="en-us_topic_0257713264_p779118"></a>MOT_ERROR_RESOURCE_LIMIT 5</p>
</td>
</tr>
<tr id="en-us_topic_0257713264_row7012069"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713264_p31106692"><a name="en-us_topic_0257713264_p31106692"></a><a name="en-us_topic_0257713264_p31106692"></a>Internal logic error</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713264_p36614112"><a name="en-us_topic_0257713264_p36614112"></a><a name="en-us_topic_0257713264_p36614112"></a>MOT_ERROR_INTERNAL 6</p>
</td>
</tr>
<tr id="en-us_topic_0257713264_row61091552"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713264_p49468641"><a name="en-us_topic_0257713264_p49468641"></a><a name="en-us_topic_0257713264_p49468641"></a>Resource unavailable</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713264_p47536979"><a name="en-us_topic_0257713264_p47536979"></a><a name="en-us_topic_0257713264_p47536979"></a>MOT_ERROR_RESOURCE_UNAVAILABLE 7</p>
</td>
</tr>
<tr id="en-us_topic_0257713264_row25179629"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713264_p26284107"><a name="en-us_topic_0257713264_p26284107"></a><a name="en-us_topic_0257713264_p26284107"></a>Unique violation</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713264_p48637933"><a name="en-us_topic_0257713264_p48637933"></a><a name="en-us_topic_0257713264_p48637933"></a>MOT_ERROR_UNIQUE_VIOLATION 8</p>
</td>
</tr>
<tr id="en-us_topic_0257713264_row35088220"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713264_p23573535"><a name="en-us_topic_0257713264_p23573535"></a><a name="en-us_topic_0257713264_p23573535"></a>Invalid memory allocation size</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713264_p30408220"><a name="en-us_topic_0257713264_p30408220"></a><a name="en-us_topic_0257713264_p30408220"></a>MOT_ERROR_INVALID_MEMORY_SIZE 9</p>
</td>
</tr>
<tr id="en-us_topic_0257713264_row5238527"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713264_p21667523"><a name="en-us_topic_0257713264_p21667523"></a><a name="en-us_topic_0257713264_p21667523"></a>Index out of range</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713264_p10238932"><a name="en-us_topic_0257713264_p10238932"></a><a name="en-us_topic_0257713264_p10238932"></a>MOT_ERROR_INDEX_OUT_OF_RANGE 10</p>
</td>
</tr>
<tr id="en-us_topic_0257713264_row25041524"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713264_p15097570"><a name="en-us_topic_0257713264_p15097570"></a><a name="en-us_topic_0257713264_p15097570"></a>Error code unknown</p>
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713264_p14943697"><a name="en-us_topic_0257713264_p14943697"></a><a name="en-us_topic_0257713264_p14943697"></a>MOT_ERROR_INVALID_STATE 11</p>
</td>
</tr>
</tbody>
</table>

