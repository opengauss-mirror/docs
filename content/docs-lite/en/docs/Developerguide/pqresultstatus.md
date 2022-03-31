# PQresultStatus<a name="EN-US_TOPIC_0289900879"></a>

## Function<a name="en-us_topic_0283137678_en-us_topic_0241735621_section17608142135118"></a>

PQresultStatus is used to return the result status of a command.

## Prototype<a name="en-us_topic_0283137678_en-us_topic_0241735621_section1647192312546"></a>

```
ExecStatusType PQresultStatus(const PGresult *res);
```

## Parameter<a name="en-us_topic_0283137678_en-us_topic_0241735621_en-us_topic_0237120432_en-us_topic_0059778852_s1c9b27937d964eaba00ae77fe1cd2c71"></a>

**Table  1**  PQresultStatus parameter

<a name="en-us_topic_0283137678_en-us_topic_0241735621_en-us_topic_0237120432_en-us_topic_0059778852_t82b61d38241342ffa2c83b3e50393841"></a>
<table><thead align="left"><tr id="en-us_topic_0283137678_en-us_topic_0241735621_en-us_topic_0237120432_en-us_topic_0059778852_r3ec068cec36347ccb83a7f18cf131215"><th class="cellrowborder" valign="top" width="23.27%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137678_en-us_topic_0241735621_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"><a name="en-us_topic_0283137678_en-us_topic_0241735621_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><a name="en-us_topic_0283137678_en-us_topic_0241735621_en-us_topic_0237120432_en-us_topic_0059778852_a44a45da69b324aa4b5c1187191ec5c77"></a><strong id="en-us_topic_0283137678_en-us_topic_0241735621_b10552162945817"><a name="en-us_topic_0283137678_en-us_topic_0241735621_b10552162945817"></a><a name="en-us_topic_0283137678_en-us_topic_0241735621_b10552162945817"></a>Keyword</strong></p>
</th>
<th class="cellrowborder" valign="top" width="76.73%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137678_en-us_topic_0241735621_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"><a name="en-us_topic_0283137678_en-us_topic_0241735621_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><a name="en-us_topic_0283137678_en-us_topic_0241735621_en-us_topic_0237120432_en-us_topic_0059778852_aee2bc08a3b8f47bf81fb032ef089ba6d"></a><strong id="en-us_topic_0283137678_en-us_topic_0241735621_b159454316583"><a name="en-us_topic_0283137678_en-us_topic_0241735621_b159454316583"></a><a name="en-us_topic_0283137678_en-us_topic_0241735621_b159454316583"></a>Parameter Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137678_en-us_topic_0241735621_en-us_topic_0237120432_en-us_topic_0059778852_r89c7807f135840058d4a248137b3ca08"><td class="cellrowborder" valign="top" width="23.27%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137678_en-us_topic_0241735621_p23111054217"><a name="en-us_topic_0283137678_en-us_topic_0241735621_p23111054217"></a><a name="en-us_topic_0283137678_en-us_topic_0241735621_p23111054217"></a>res</p>
</td>
<td class="cellrowborder" valign="top" width="76.73%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137678_en-us_topic_0241735621_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p0"><a name="en-us_topic_0283137678_en-us_topic_0241735621_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p0"></a><a name="en-us_topic_0283137678_en-us_topic_0241735621_en-us_topic_0237120432_en-us_topic_0059778852_li1646671519399p0"></a>Object pointer that contains the query result.</p>
</td>
</tr>
</tbody>
</table>

## Return Value<a name="en-us_topic_0283137678_en-us_topic_0241735621_en-us_topic_0237120432_en-us_topic_0059778852_sd43c3bb519574fb68eae3b53fb1b652f"></a>

**PQresultStatus**  indicates the command execution status. The enumerated values are as follows:

```
PQresultStatus can return one of the following values:
PGRES_EMPTY_QUERY
The string sent to the server was empty.

PGRES_COMMAND_OK
A command that does not return data was successfully executed.

PGRES_TUPLES_OK
A query (such as SELECT or SHOW) that returns data was successfully executed.

PGRES_COPY_OUT
Copy Out (from the server) data transfer started.

PGRES_COPY_IN
Copy In (to the server) data transfer started.

PGRES_BAD_RESPONSE
The response from the server cannot be understood.

PGRES_NONFATAL_ERROR
A non-fatal error (notification or warning) occurred.

PGRES_FATAL_ERROR
A fatal error occurred.

PGRES_COPY_BOTH
Copy In/Out (to and from the server) data transfer started. This state occurs only in streaming replication.

PGRES_SINGLE_TUPLE
PGresult contains a result tuple from the current command. This state occurs in a single-row query.
```

## Precautions<a name="en-us_topic_0283137678_en-us_topic_0241735621_en-us_topic_0237120433_en-us_topic_0059777949_sb1b6942996a64e589fdfdfb1c00fa519"></a>

-   Note that the SELECT command that happens to retrieve zero rows still returns  **PGRES\_TUPLES\_OK**.  **PGRES\_COMMAND\_OK**  is used for commands that can never return rows \(such as INSERT or UPDATE, without return clauses\). The result status  **PGRES\_EMPTY\_QUERY**  might indicate a bug in the client software.

-   The result status  **PGRES\_NONFATAL\_ERROR**  will never be returned directly by PQexec or other query execution functions. Instead, such results will be passed to the notice processor.

## Example<a name="en-us_topic_0283137678_en-us_topic_0241735621_section4472558185413"></a>

For details, see  [Example](example.md).

