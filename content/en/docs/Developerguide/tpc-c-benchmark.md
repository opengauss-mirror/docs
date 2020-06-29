# TPC-C Benchmark<a name="EN-US_TOPIC_0257867415"></a>

## TPC-C Introduction<a name="en-us_topic_0257713269_section1045818272350"></a>

The TPC-C Benchmark is an industry standard benchmark for measuring the performance of Online Transaction Processing \(OLTP\) systems. It is based on a complex database and a number of different transaction types that are executed on it. TPC-C is both a hardware‑independent and a software-independent benchmark and can thus be run on every test platform. An official overview of the benchmark model can be found at the tpc.org website here –  [http://www.tpc.org/tpcc/detail.asp](http://www.tpc.org/tpcc/detail.asp).

The database consists of nine tables of various structures and thus also nine types of data records. The size and quantity of the data records varies per table. A mix of five concurrent transactions of varying types and complexities is executed on the database – largely online or in part queued for deferred batch processing. Because these tables compete for limited system resources, many system components are stressed and data changes are executed in a variety of ways.

**Table  1**  TPC-C Database Structure – 1

<a name="en-us_topic_0257713269_table19819572"></a>
<table><thead align="left"><tr id="en-us_topic_0257713269_row36238473"><th class="cellrowborder" valign="top" width="25.25%" id="mcps1.2.3.1.1"><p id="en-us_topic_0257713269_p49635175"><a name="en-us_topic_0257713269_p49635175"></a><a name="en-us_topic_0257713269_p49635175"></a>Table</p>
</th>
<th class="cellrowborder" valign="top" width="74.75%" id="mcps1.2.3.1.2"><p id="en-us_topic_0257713269_p61026205"><a name="en-us_topic_0257713269_p61026205"></a><a name="en-us_topic_0257713269_p61026205"></a>Number of Entries</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0257713269_row44175572"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713269_p21451571"><a name="en-us_topic_0257713269_p21451571"></a><a name="en-us_topic_0257713269_p21451571"></a>Warehouse</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713269_p59855715"><a name="en-us_topic_0257713269_p59855715"></a><a name="en-us_topic_0257713269_p59855715"></a>n</p>
</td>
</tr>
<tr id="en-us_topic_0257713269_row1830529"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713269_p14055149"><a name="en-us_topic_0257713269_p14055149"></a><a name="en-us_topic_0257713269_p14055149"></a>Item</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713269_p64725245"><a name="en-us_topic_0257713269_p64725245"></a><a name="en-us_topic_0257713269_p64725245"></a>100,000</p>
</td>
</tr>
<tr id="en-us_topic_0257713269_row45656294"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713269_p7172328"><a name="en-us_topic_0257713269_p7172328"></a><a name="en-us_topic_0257713269_p7172328"></a>Stock</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713269_p44087682"><a name="en-us_topic_0257713269_p44087682"></a><a name="en-us_topic_0257713269_p44087682"></a>n x 100,000</p>
</td>
</tr>
<tr id="en-us_topic_0257713269_row61244824"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713269_p61883722"><a name="en-us_topic_0257713269_p61883722"></a><a name="en-us_topic_0257713269_p61883722"></a>District</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713269_p46525609"><a name="en-us_topic_0257713269_p46525609"></a><a name="en-us_topic_0257713269_p46525609"></a>n x 10</p>
</td>
</tr>
<tr id="en-us_topic_0257713269_row16077300"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713269_p27192961"><a name="en-us_topic_0257713269_p27192961"></a><a name="en-us_topic_0257713269_p27192961"></a>Customer</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713269_p55146222"><a name="en-us_topic_0257713269_p55146222"></a><a name="en-us_topic_0257713269_p55146222"></a>3,000 per district, 30,000 per warehouse</p>
</td>
</tr>
<tr id="en-us_topic_0257713269_row26553952"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713269_p3386497"><a name="en-us_topic_0257713269_p3386497"></a><a name="en-us_topic_0257713269_p3386497"></a>Order</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713269_p5870806"><a name="en-us_topic_0257713269_p5870806"></a><a name="en-us_topic_0257713269_p5870806"></a>Number of customers (initial value)</p>
</td>
</tr>
<tr id="en-us_topic_0257713269_row52837255"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713269_p51959302"><a name="en-us_topic_0257713269_p51959302"></a><a name="en-us_topic_0257713269_p51959302"></a>New order</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713269_p47953966"><a name="en-us_topic_0257713269_p47953966"></a><a name="en-us_topic_0257713269_p47953966"></a>30% of the orders (initial value)</p>
</td>
</tr>
<tr id="en-us_topic_0257713269_row28932512"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713269_p61832151"><a name="en-us_topic_0257713269_p61832151"></a><a name="en-us_topic_0257713269_p61832151"></a>Order line</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713269_p42348363"><a name="en-us_topic_0257713269_p42348363"></a><a name="en-us_topic_0257713269_p42348363"></a>~ 10 per order</p>
</td>
</tr>
<tr id="en-us_topic_0257713269_row45590951"><td class="cellrowborder" valign="top" width="25.25%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713269_p1879552"><a name="en-us_topic_0257713269_p1879552"></a><a name="en-us_topic_0257713269_p1879552"></a>History</p>
</td>
<td class="cellrowborder" valign="top" width="74.75%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713269_p18026058"><a name="en-us_topic_0257713269_p18026058"></a><a name="en-us_topic_0257713269_p18026058"></a>Number of customers (initial value)</p>
</td>
</tr>
</tbody>
</table>

The transaction mix represents the complete business processing of an order – from its entry through to its delivery. More specifically, the provided mix is designed to produce an equal number of new-order transactions and payment transactions and to produce a single delivery transaction, a single order-status transaction and a single stock-level transaction for every ten new-order transactions.

**Table  2**  TPC-C Database Structure – 2

<a name="en-us_topic_0257713269_table20062571"></a>
<table><thead align="left"><tr id="en-us_topic_0257713269_row7055953"><th class="cellrowborder" valign="top" width="35.35%" id="mcps1.2.3.1.1"><p id="en-us_topic_0257713269_p34661303"><a name="en-us_topic_0257713269_p34661303"></a><a name="en-us_topic_0257713269_p34661303"></a>Transaction Level ≥ 4%</p>
</th>
<th class="cellrowborder" valign="top" width="64.64999999999999%" id="mcps1.2.3.1.2"><p id="en-us_topic_0257713269_p56102195"><a name="en-us_topic_0257713269_p56102195"></a><a name="en-us_topic_0257713269_p56102195"></a>Share of All Transactions</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0257713269_row47983914"><td class="cellrowborder" valign="top" width="35.35%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713269_p61491846"><a name="en-us_topic_0257713269_p61491846"></a><a name="en-us_topic_0257713269_p61491846"></a>New order</p>
</td>
<td class="cellrowborder" valign="top" width="64.64999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713269_p14783663"><a name="en-us_topic_0257713269_p14783663"></a><a name="en-us_topic_0257713269_p14783663"></a>≤ 45%</p>
</td>
</tr>
<tr id="en-us_topic_0257713269_row65944108"><td class="cellrowborder" valign="top" width="35.35%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713269_p39872498"><a name="en-us_topic_0257713269_p39872498"></a><a name="en-us_topic_0257713269_p39872498"></a>Payment</p>
</td>
<td class="cellrowborder" valign="top" width="64.64999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713269_p8446905"><a name="en-us_topic_0257713269_p8446905"></a><a name="en-us_topic_0257713269_p8446905"></a>≥ 43%</p>
</td>
</tr>
<tr id="en-us_topic_0257713269_row8913284"><td class="cellrowborder" valign="top" width="35.35%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713269_p50887407"><a name="en-us_topic_0257713269_p50887407"></a><a name="en-us_topic_0257713269_p50887407"></a>Order status</p>
</td>
<td class="cellrowborder" valign="top" width="64.64999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713269_p28239278"><a name="en-us_topic_0257713269_p28239278"></a><a name="en-us_topic_0257713269_p28239278"></a>≥ 4%</p>
</td>
</tr>
<tr id="en-us_topic_0257713269_row52826913"><td class="cellrowborder" valign="top" width="35.35%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713269_p51121530"><a name="en-us_topic_0257713269_p51121530"></a><a name="en-us_topic_0257713269_p51121530"></a>Delivery</p>
</td>
<td class="cellrowborder" valign="top" width="64.64999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713269_p47203227"><a name="en-us_topic_0257713269_p47203227"></a><a name="en-us_topic_0257713269_p47203227"></a>≥ 4% (batch)</p>
</td>
</tr>
<tr id="en-us_topic_0257713269_row22175862"><td class="cellrowborder" valign="top" width="35.35%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713269_p51414423"><a name="en-us_topic_0257713269_p51414423"></a><a name="en-us_topic_0257713269_p51414423"></a>Stock level</p>
</td>
<td class="cellrowborder" valign="top" width="64.64999999999999%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713269_p3818773"><a name="en-us_topic_0257713269_p3818773"></a><a name="en-us_topic_0257713269_p3818773"></a>≥ 4%</p>
</td>
</tr>
</tbody>
</table>

There are two ways to execute the transactions –  **as stored procedures**  \(which allow higher throughput\) and in  **standard interactive SQL mode**.

