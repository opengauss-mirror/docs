# Psycopg-Based Development<a name="EN-US_TOPIC_0000001079921480"></a>

Psycopg is a Python API used to execute SQL statements and provides a unified access API for PostgreSQL and GaussDB. Applications can perform data operations based on psycopg. Psycopg2 is an encapsulation of libpq and is implemented using the C language, which is efficient and secure. It provides cursors on both clients and servers, asynchronous communication and notification, and the COPY TO and COPY FROM functions. Psycopg2 supports multiple types of Python out-of-the-box and adapts to PostgreSQL data types. Through the flexible object adaptation system, you can extend and customize the adaptation. Psycopg2 is compatible with Unicode and Python 3.

openGauss supports the psycopg2 feature and allows psycopg2 to be connected in SSL mode.

**Table  1**  Platforms supported by Psycopg

<a name="en-us_topic_0059778944_tcc3bf62098e14505b94680dffaa5940d"></a>
<table><thead align="left"><tr id="en-us_topic_0059778944_re1a7b791067f4bac9743d0de9f2ae8b6"><th class="cellrowborder" valign="top" width="78.64%" id="mcps1.2.3.1.1"><p id="en-us_topic_0059778944_aa56cbe2a342d43b59dfc4501d2fc6172"><a name="en-us_topic_0059778944_aa56cbe2a342d43b59dfc4501d2fc6172"></a><a name="en-us_topic_0059778944_aa56cbe2a342d43b59dfc4501d2fc6172"></a>OS</p>
</th>
<th class="cellrowborder" valign="top" width="21.36%" id="mcps1.2.3.1.2"><p id="en-us_topic_0059778944_a645fcd4314514ac5b4409e804145c94b"><a name="en-us_topic_0059778944_a645fcd4314514ac5b4409e804145c94b"></a><a name="en-us_topic_0059778944_a645fcd4314514ac5b4409e804145c94b"></a>Platform</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0059778944_row1915312215011"><td class="cellrowborder" valign="top" width="78.64%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0059778944_p826525664919"><a name="en-us_topic_0059778944_p826525664919"></a><a name="en-us_topic_0059778944_p826525664919"></a>EulerOS 2.5</p>
</td>
<td class="cellrowborder" align="left" valign="top" width="21.36%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0059778944_p93583610509"><a name="en-us_topic_0059778944_p93583610509"></a><a name="en-us_topic_0059778944_p93583610509"></a>x86_64</p>
</td>
</tr>
<tr id="row1728515110349"><td class="cellrowborder" valign="top" width="78.64%" headers="mcps1.2.3.1.1 "><p id="p1028612118342"><a name="p1028612118342"></a><a name="p1028612118342"></a>EulerOS 2.8</p>
</td>
<td class="cellrowborder" valign="top" width="21.36%" headers="mcps1.2.3.1.2 "><p id="p162863113411"><a name="p162863113411"></a><a name="p162863113411"></a>ARM64</p>
</td>
</tr>
</tbody>
</table>

-   **[Psycopg Package](psycopg-package.md)**  

-   **[Development Process](development-process-psycopg.md)**  

-   **[Loading a Driver](loading-a-driver.md)**  

-   **[Connecting to the Database](connecting-to-a-database-psycopg.md)**  

-   **[Executing SQL Statements](executing-sql-statements.md)**  

-   **[Processing the Result Set](processing-the-result-set.md)**  

-   **[Closing the Connection](closing-the-connection.md)**  

-   **[Connecting to the Database \(Using SSL\)](connecting-to-the-database-using-ssl-psycopg.md)**  

-   **[Example: Common Operations](example-common-operations-psycopg.md)**  

-   **[Psycopg API Reference](psycopg-api-reference.md)**  


