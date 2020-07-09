# TPC-C Introduction<a name="EN-US_TOPIC_0260488128"></a>

The TPC-C Benchmark is an industry standard benchmark for measuring the performance of Online Transaction Processing \(OLTP\) systems. It is based on a complex database and a number of different transaction types that are executed on it. TPC-C is both a hardware‑independent and a software-independent benchmark and can thus be run on every test platform. An official overview of the benchmark model can be found at the tpc.org website here  [http://www.tpc.org/tpcc/detail.asp](http://www.tpc.org/tpcc/detail.asp).

The database consists of nine tables of various structures and thus also nine types of data records. The size and quantity of the data records varies per table. A mix of five concurrent transactions of varying types and complexities is executed on the database, which are largely online or in part queued for deferred batch processing. Because these tables compete for limited system resources, many system components are stressed and data changes are executed in a variety of ways.

**Table  1**  TPC-C Database Structure

<a name="table20330141"></a>
<table><thead align="left"><tr id="row52802361"><th class="cellrowborder" valign="top" width="25.25%" id="mcps1.2.3.1.1"><p id="p49132852"><a name="p49132852"></a><a name="p49132852"></a>Table</p>
</th>
<th class="cellrowborder" valign="top" width="74.75%" id="mcps1.2.3.1.2"><p id="p20338051"><a name="p20338051"></a><a name="p20338051"></a>Number of Entries</p>
</th>
</tr>
</thead>
<tbody><tr id="row36769423"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="p25533247"><a name="p25533247"></a><a name="p25533247"></a>Warehouse</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="p54927099"><a name="p54927099"></a><a name="p54927099"></a>n</p>
</td>
</tr>
<tr id="row24581850"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="p44972820"><a name="p44972820"></a><a name="p44972820"></a>Item</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="p18919823"><a name="p18919823"></a><a name="p18919823"></a>100,000</p>
</td>
</tr>
<tr id="row36060684"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="p35234315"><a name="p35234315"></a><a name="p35234315"></a>Stock</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="p35407262"><a name="p35407262"></a><a name="p35407262"></a>n x 100,000</p>
</td>
</tr>
<tr id="row50229907"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="p42090656"><a name="p42090656"></a><a name="p42090656"></a>District</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="p53899957"><a name="p53899957"></a><a name="p53899957"></a>n x 10</p>
</td>
</tr>
<tr id="row15337571"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="p34383704"><a name="p34383704"></a><a name="p34383704"></a>Customer</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="p33616617"><a name="p33616617"></a><a name="p33616617"></a>3,000 per district, 30,000 per warehouse</p>
</td>
</tr>
<tr id="row34114104"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="p11779072"><a name="p11779072"></a><a name="p11779072"></a>Order</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="p14580760"><a name="p14580760"></a><a name="p14580760"></a>Number of customers (initial value)</p>
</td>
</tr>
<tr id="row64117977"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="p26173677"><a name="p26173677"></a><a name="p26173677"></a>New order</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="p39693093"><a name="p39693093"></a><a name="p39693093"></a>30% of the orders (initial value)</p>
</td>
</tr>
<tr id="row21693522"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="p12344892"><a name="p12344892"></a><a name="p12344892"></a>Order line</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="p60412223"><a name="p60412223"></a><a name="p60412223"></a>~ 10 per order</p>
</td>
</tr>
<tr id="row6839097"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="p17095955"><a name="p17095955"></a><a name="p17095955"></a>History</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="p42595097"><a name="p42595097"></a><a name="p42595097"></a>Number of customers (initial value)</p>
</td>
</tr>
</tbody>
</table>

The transaction mix represents the complete business processing of an order – from its entry through to its delivery. More specifically, the provided mix is designed to produce an equal number of new-order transactions and payment transactions and to produce a single delivery transaction, a single order-status transaction and a single stock-level transaction for every ten new-order transactions.

**Table  2**  TPC-C Transactions Ratio

<a name="table56722812"></a>
<table><thead align="left"><tr id="row24824370"><th class="cellrowborder" valign="top" width="35.35%" id="mcps1.2.3.1.1"><p id="p64616976"><a name="p64616976"></a><a name="p64616976"></a>Transaction Level ≥ 4%</p>
</th>
<th class="cellrowborder" valign="top" width="64.64999999999999%" id="mcps1.2.3.1.2"><p id="p66592542"><a name="p66592542"></a><a name="p66592542"></a>Share of All Transactions</p>
</th>
</tr>
</thead>
<tbody><tr id="row25286788"><td class="cellrowborder" valign="top" width="35.35%" headers="mcps1.2.3.1.1 "><p id="p34963947"><a name="p34963947"></a><a name="p34963947"></a>New order</p>
</td>
<td class="cellrowborder" valign="top" width="64.64999999999999%" headers="mcps1.2.3.1.2 "><p id="p13507450"><a name="p13507450"></a><a name="p13507450"></a>≤ 45%</p>
</td>
</tr>
<tr id="row54458193"><td class="cellrowborder" valign="top" width="35.35%" headers="mcps1.2.3.1.1 "><p id="p49037488"><a name="p49037488"></a><a name="p49037488"></a>Payment</p>
</td>
<td class="cellrowborder" valign="top" width="64.64999999999999%" headers="mcps1.2.3.1.2 "><p id="p12613580"><a name="p12613580"></a><a name="p12613580"></a>≥ 43%</p>
</td>
</tr>
<tr id="row46413356"><td class="cellrowborder" valign="top" width="35.35%" headers="mcps1.2.3.1.1 "><p id="p1385453"><a name="p1385453"></a><a name="p1385453"></a>Order status</p>
</td>
<td class="cellrowborder" valign="top" width="64.64999999999999%" headers="mcps1.2.3.1.2 "><p id="p45112863"><a name="p45112863"></a><a name="p45112863"></a>≥ 4%</p>
</td>
</tr>
<tr id="row3362585"><td class="cellrowborder" valign="top" width="35.35%" headers="mcps1.2.3.1.1 "><p id="p3934007"><a name="p3934007"></a><a name="p3934007"></a>Delivery</p>
</td>
<td class="cellrowborder" valign="top" width="64.64999999999999%" headers="mcps1.2.3.1.2 "><p id="p50219161"><a name="p50219161"></a><a name="p50219161"></a>≥ 4% (batch)</p>
</td>
</tr>
<tr id="row49319272"><td class="cellrowborder" valign="top" width="35.35%" headers="mcps1.2.3.1.1 "><p id="p35438059"><a name="p35438059"></a><a name="p35438059"></a>Stock level</p>
</td>
<td class="cellrowborder" valign="top" width="64.64999999999999%" headers="mcps1.2.3.1.2 "><p id="p51910568"><a name="p51910568"></a><a name="p51910568"></a>≥ 4%</p>
</td>
</tr>
</tbody>
</table>

There are two ways to execute the transactions –  **as stored procedures**  \(which allow higher throughput\) and in  **standard interactive SQL mode**.

-   Performance Metric – tpm-C

The tpm-C metric is the number of new-order transactions executed per minute. Given the required mix and a wide range of complexity and types among the transactions, this metric most closely simulates a comprehensive business activity, not just one or two transactions or computer operations. For this reason, the tpm-C metric is considered to be a measure of business throughput.

The tpm-C unit of measure is expressed as transactions-per-minute-C, whereas "C" stands for TPC-C specific benchmark.

>![](public_sys-resources/icon-note.gif) **NOTE:**   
>The official TPC-C Benchmark specification can be accessed at –  [http://www.tpc.org/tpc\_documents\_current\_versions/pdf/tpc-c\_v5.11.0.pdf](http://www.tpc.org/tpc_documents_current_versions/pdf/tpc-c_v5.11.0.pdf). Some of the rules of this specification are generally not fulfilled in the industry, because they are too strict for industry reality. For example, Scaling rules – \(a\) tpm-C / Warehouse must be \>9 and <12.86 \(implying that a very high warehouses rate is required in order to achieve a high tpm-C rate, which also means that an extremely large database and memory capacity are required\); and \(b\) 10x terminals x Warehouses \(implying a huge quantity of simulated clients\).  

