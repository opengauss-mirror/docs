# Network Address Types<a name="EN-US_TOPIC_0289899944"></a>

openGauss offers data types to store IPv4, IPv6, and MAC addresses.

It is better to use these types instead of plain text types to store network addresses, because these types offer input error checking and specialized operators and functions \(see  [Network Address Functions and Operators](network-address-functions-and-operators.md)\).

**Table  1**  Network address types

<a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_t58583ff88b65497e8f497ade623ef455"></a>
<table><thead align="left"><tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_r96f7ad27888848aba363fb5842538012"><th class="cellrowborder" valign="top" width="25.247475252474754%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_aa26c74ff4b1946a8b5cd468148d6771c"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_aa26c74ff4b1946a8b5cd468148d6771c"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_aa26c74ff4b1946a8b5cd468148d6771c"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="32.966703329667034%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_acd8a4f7edb2245efbd75e00295abfb63"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_acd8a4f7edb2245efbd75e00295abfb63"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_acd8a4f7edb2245efbd75e00295abfb63"></a>Storage Space</p>
</th>
<th class="cellrowborder" valign="top" width="41.785821417858216%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a691c8af605b34391a6b79d37284447bd"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a691c8af605b34391a6b79d37284447bd"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a691c8af605b34391a6b79d37284447bd"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_r7400d873e85f4605a6e075768bece5f5"><td class="cellrowborder" valign="top" width="25.247475252474754%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ac52d8f4dbc1b4dc59148c1c5ff2fbd39"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ac52d8f4dbc1b4dc59148c1c5ff2fbd39"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ac52d8f4dbc1b4dc59148c1c5ff2fbd39"></a>cidr</p>
</td>
<td class="cellrowborder" valign="top" width="32.966703329667034%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a121af03ded2f40ac9ebe710147d0401c"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a121af03ded2f40ac9ebe710147d0401c"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a121af03ded2f40ac9ebe710147d0401c"></a>7 or 19 bytes</p>
</td>
<td class="cellrowborder" valign="top" width="41.785821417858216%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a2fb1653fae5a4943a4b68d31b7effafa"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a2fb1653fae5a4943a4b68d31b7effafa"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a2fb1653fae5a4943a4b68d31b7effafa"></a>IPv4 or IPv6 networks</p>
</td>
</tr>
<tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_rb93c8e9e95de443d915aa2e902921815"><td class="cellrowborder" valign="top" width="25.247475252474754%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a9178c6f205a646d49102f5ef6d008edb"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a9178c6f205a646d49102f5ef6d008edb"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a9178c6f205a646d49102f5ef6d008edb"></a>inet</p>
</td>
<td class="cellrowborder" valign="top" width="32.966703329667034%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a6b4511c63f154179bbf6a404d3c1cb82"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a6b4511c63f154179bbf6a404d3c1cb82"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a6b4511c63f154179bbf6a404d3c1cb82"></a>7 or 19 bytes</p>
</td>
<td class="cellrowborder" valign="top" width="41.785821417858216%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a5b87f96ff6234db6a48cf675c3ebb198"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a5b87f96ff6234db6a48cf675c3ebb198"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a5b87f96ff6234db6a48cf675c3ebb198"></a>IPv4 or IPv6 hosts and networks</p>
</td>
</tr>
<tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_r0d3368a8d7ba4f119c4f314d43ab3fd0"><td class="cellrowborder" valign="top" width="25.247475252474754%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a14b4a7e95c9a4c08bea643c08fa9b174"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a14b4a7e95c9a4c08bea643c08fa9b174"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a14b4a7e95c9a4c08bea643c08fa9b174"></a>macaddr</p>
</td>
<td class="cellrowborder" valign="top" width="32.966703329667034%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_abf9e4465ef3f4e84bdf96c9c72be3f84"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_abf9e4465ef3f4e84bdf96c9c72be3f84"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_abf9e4465ef3f4e84bdf96c9c72be3f84"></a>6 bytes</p>
</td>
<td class="cellrowborder" valign="top" width="41.785821417858216%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a9060b84605f840d69f508100a3689bac"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a9060b84605f840d69f508100a3689bac"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a9060b84605f840d69f508100a3689bac"></a>MAC address</p>
</td>
</tr>
</tbody>
</table>

When sorting  **inet**  or  **cidr**  data types, IPv4 addresses will always sort before IPv6 addresses, including IPv4 addresses encapsulated or mapped to IPv6 addresses, such as ::10.2.3.4 or ::ffff:10.4.3.2.

## cidr<a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_s24af8326768c40a48f6404a4ecd58134"></a>

The  **cidr**  type \(Classless Inter-Domain Routing\) holds an IPv4 or IPv6 network address. The format for specifying networks is  **address/y**  where  **address**  is the network represented as an IPv4 or IPv6 address, and  **y**  is the number of bits in the netmask. If  **y**  is omitted, it is calculated using assumptions from the older classful network numbering system, except it will be at least large enough to include all of the octets written in the input.

**Table  2**  cidr type input examples

<a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_t71bc547e2fff46859fd1da8ff5555e23"></a>
<table><thead align="left"><tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_rf14eced257ca43fa984ade97d666971d"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_af93a21001efb4153a058929892553c26"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_af93a21001efb4153a058929892553c26"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_af93a21001efb4153a058929892553c26"></a>cidr Input</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ac4d767bf1ad249be8a486689a1cdd4b8"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ac4d767bf1ad249be8a486689a1cdd4b8"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ac4d767bf1ad249be8a486689a1cdd4b8"></a>cidr Output</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ad1ccb0139c654df4b081d96c11333e2f"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ad1ccb0139c654df4b081d96c11333e2f"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ad1ccb0139c654df4b081d96c11333e2f"></a>abbrev(cidr)</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_r5e945b07e3224f7e9c4daef48f4a6d8e"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a28c88fdb04f4472e8038112107e3dc46"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a28c88fdb04f4472e8038112107e3dc46"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a28c88fdb04f4472e8038112107e3dc46"></a>192.168.100.128/25</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a833b2de5700649098f0db6ed27453a76"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a833b2de5700649098f0db6ed27453a76"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a833b2de5700649098f0db6ed27453a76"></a>192.168.100.128/25</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_en-us_topic_0058966055_p794101142243"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_en-us_topic_0058966055_p794101142243"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_en-us_topic_0058966055_p794101142243"></a>192.168.100.128/25</p>
</td>
</tr>
<tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ra8b500280ce94b5d9f27b38ff1d26795"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_aa987c97ffa0849a5bb6e4587f577570e"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_aa987c97ffa0849a5bb6e4587f577570e"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_aa987c97ffa0849a5bb6e4587f577570e"></a>192.168/24</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_affee7f68c6674c1eb1bbca0a705aba42"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_affee7f68c6674c1eb1bbca0a705aba42"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_affee7f68c6674c1eb1bbca0a705aba42"></a>192.168.0.0/24</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a1ec42e61911140c4a2c3bc36d8e4b0c9"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a1ec42e61911140c4a2c3bc36d8e4b0c9"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a1ec42e61911140c4a2c3bc36d8e4b0c9"></a>192.168.0/24</p>
</td>
</tr>
<tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_r5bb32b4dbed847dfa204c99ef3b05673"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ac4ddcc1e22cf4d6587434a7f783ac920"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ac4ddcc1e22cf4d6587434a7f783ac920"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ac4ddcc1e22cf4d6587434a7f783ac920"></a>192.168/25</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a5f46b39c63bc4ca895389e723a7b0009"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a5f46b39c63bc4ca895389e723a7b0009"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a5f46b39c63bc4ca895389e723a7b0009"></a>192.168.0.0/25</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a183f023cb9754ad0b2948492b5e60685"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a183f023cb9754ad0b2948492b5e60685"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a183f023cb9754ad0b2948492b5e60685"></a>192.168.0.0/25</p>
</td>
</tr>
<tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_rb2566bad09c847c2af61f1b4c170e1a4"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a0cfaf40eba6a46ccafa8309370439e56"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a0cfaf40eba6a46ccafa8309370439e56"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a0cfaf40eba6a46ccafa8309370439e56"></a>192.168.1</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ae5a4c716f0ba442282fba80bd136ecdf"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ae5a4c716f0ba442282fba80bd136ecdf"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ae5a4c716f0ba442282fba80bd136ecdf"></a>192.168.1.0/24</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a5e236063bf4f4ec0aef98d6add787b06"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a5e236063bf4f4ec0aef98d6add787b06"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a5e236063bf4f4ec0aef98d6add787b06"></a>192.168.1/24</p>
</td>
</tr>
<tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_r02683f337f4e4d22abc24bad8a9edb59"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a8cd17dd200b5455aaf79d07619a72a75"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a8cd17dd200b5455aaf79d07619a72a75"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a8cd17dd200b5455aaf79d07619a72a75"></a>192.168</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a65f167ea0b4c44bc9e084fa21ca1449e"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a65f167ea0b4c44bc9e084fa21ca1449e"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a65f167ea0b4c44bc9e084fa21ca1449e"></a>192.168.0.0/24</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a2afda173a564420b80ba966217198354"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a2afda173a564420b80ba966217198354"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a2afda173a564420b80ba966217198354"></a>192.168.0/24</p>
</td>
</tr>
<tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_r6c72932f281f4a95a12fa79301e72cc2"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a528ddf29155a48cc8586058d84f85a85"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a528ddf29155a48cc8586058d84f85a85"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a528ddf29155a48cc8586058d84f85a85"></a>10.1.2</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a89d315421165453ca3e101fdff3fe97c"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a89d315421165453ca3e101fdff3fe97c"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a89d315421165453ca3e101fdff3fe97c"></a>10.1.2.0/24</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a201d6fe344bc4fb5b814f7302c1cff7f"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a201d6fe344bc4fb5b814f7302c1cff7f"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a201d6fe344bc4fb5b814f7302c1cff7f"></a>10.1.2/24</p>
</td>
</tr>
<tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_r31c0d482ecaa42ae8f3bb93d292fd6a1"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a8da2fcc3df774c668f1592f608f75757"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a8da2fcc3df774c668f1592f608f75757"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a8da2fcc3df774c668f1592f608f75757"></a>10.1</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a2a2fb470a3964c97ac29e95a185b4d6c"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a2a2fb470a3964c97ac29e95a185b4d6c"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a2a2fb470a3964c97ac29e95a185b4d6c"></a>10.1.0.0/16</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_aa2cd84003ade44ceb2bcb815b96ecc7c"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_aa2cd84003ade44ceb2bcb815b96ecc7c"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_aa2cd84003ade44ceb2bcb815b96ecc7c"></a>10.1/16</p>
</td>
</tr>
<tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_r5085adb5e7de410fbce986c2370effae"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a633a7faaa0514bb485c0f14fb2382707"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a633a7faaa0514bb485c0f14fb2382707"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a633a7faaa0514bb485c0f14fb2382707"></a>10</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a41389b5f4ec7419e81067236d9ea6747"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a41389b5f4ec7419e81067236d9ea6747"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a41389b5f4ec7419e81067236d9ea6747"></a>10.0.0.0/8</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a0e938af5c31d4cb2b4dc420acea7469a"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a0e938af5c31d4cb2b4dc420acea7469a"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a0e938af5c31d4cb2b4dc420acea7469a"></a>10/8</p>
</td>
</tr>
<tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_r3bedcb2e3fb14e6ab06d0c92e2bb6c22"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a6a6a36520ac6432791b546b7442d1069"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a6a6a36520ac6432791b546b7442d1069"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a6a6a36520ac6432791b546b7442d1069"></a>10.1.2.3/32</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a57afbc9be4b449ceaabccfb79425993e"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a57afbc9be4b449ceaabccfb79425993e"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a57afbc9be4b449ceaabccfb79425993e"></a>10.1.2.3/32</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ad6c80cbc066c40538c4ec54708b1641c"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ad6c80cbc066c40538c4ec54708b1641c"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ad6c80cbc066c40538c4ec54708b1641c"></a>10.1.2.3/32</p>
</td>
</tr>
<tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_r92aacf8a10484abaaa8ec164fcb67815"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a79feb7516fbc443ab8d14ad847f161f7"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a79feb7516fbc443ab8d14ad847f161f7"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a79feb7516fbc443ab8d14ad847f161f7"></a>2001:4f8:3:ba::/64</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ad044c85f890645e6accac02a31181d9e"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ad044c85f890645e6accac02a31181d9e"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_ad044c85f890645e6accac02a31181d9e"></a>2001:4f8:3:ba::/64</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a8a800752441141a9a43a6d2a0db1b771"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a8a800752441141a9a43a6d2a0db1b771"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a8a800752441141a9a43a6d2a0db1b771"></a>2001:4f8:3:ba::/64</p>
</td>
</tr>
<tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_rff18382d167f40959c6181b9156aa514"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a4ef074e00ff2456c90a16ac1e8b88f96"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a4ef074e00ff2456c90a16ac1e8b88f96"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a4ef074e00ff2456c90a16ac1e8b88f96"></a>2001:4f8:3:ba:2e0:81ff:fe22:d1f1/128</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a7ebcf03148fe49e5b66b6e89d15e0bab"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a7ebcf03148fe49e5b66b6e89d15e0bab"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a7ebcf03148fe49e5b66b6e89d15e0bab"></a>2001:4f8:3:ba:2e0:81ff:fe22:d1f1/128</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a9ecd75543df24f948fad9b498803abd9"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a9ecd75543df24f948fad9b498803abd9"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a9ecd75543df24f948fad9b498803abd9"></a>2001:4f8:3:ba:2e0:81ff:fe22:d1f1</p>
</td>
</tr>
<tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_r45b11d6732aa4c48a3a14cfc1fc5d641"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a4f9a5108d6d445769f3275cd2e7ac19d"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a4f9a5108d6d445769f3275cd2e7ac19d"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a4f9a5108d6d445769f3275cd2e7ac19d"></a>::ffff:1.2.3.0/120</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a29a5d6841bd74258b5518e6be3954b52"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a29a5d6841bd74258b5518e6be3954b52"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a29a5d6841bd74258b5518e6be3954b52"></a>::ffff:1.2.3.0/120</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a0ab33f96881748b695f94cea7cb5c889"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a0ab33f96881748b695f94cea7cb5c889"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a0ab33f96881748b695f94cea7cb5c889"></a>::ffff:1.2.3/120</p>
</td>
</tr>
<tr id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_rbbbef9b57a6d4ec9bb47494c03c06296"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a2ceb20a62ad743c087863b5d33bfe6ae"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a2ceb20a62ad743c087863b5d33bfe6ae"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a2ceb20a62ad743c087863b5d33bfe6ae"></a>::ffff:1.2.3.0/128</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a1aa983f3536a4213bc8782641d3fdb45"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a1aa983f3536a4213bc8782641d3fdb45"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_a1aa983f3536a4213bc8782641d3fdb45"></a>::ffff:1.2.3.0/128</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_afdac954968454fd9b3415c06cd18d087"><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_afdac954968454fd9b3415c06cd18d087"></a><a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_afdac954968454fd9b3415c06cd18d087"></a>::ffff:1.2.3.0/128</p>
</td>
</tr>
</tbody>
</table>

## inet<a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_s47f5763df86c4f32809b41b779c6aefb"></a>

The  **inet**  type holds an IPv4 or IPv6 host address, and optionally its subnet, all in one field. The subnet is represented by the number of network address bits present in the host address \(the "netmask"\). If the netmask is 32 and the address is an IPv4 address, then the value does not indicate a subnet, only a single host. In IPv6, because the address length is 128 bits, 128 bits specify a unique host address.

The input format for this type is  **address/y**  where  **address**  is an IPv4 or IPv6 address and  **y**  is the number of bits in the netmask. If the  **/y**  portion is omitted, the netmask is 32 for an IPv4 address and 128 for an IPv6 address, and the value represents just a single host. On display, the  **/y**  portion is suppressed if the netmask specifies a single host.

The essential difference between the  **inet**  and  **cidr**  data types is that  **inet**  accepts values with nonzero bits to the right of the netmask, whereas  **cidr**  does not.

## macaddr<a name="en-us_topic_0283136821_en-us_topic_0237121954_en-us_topic_0059778276_s386b81cb35594949a2af2833c61bd49b"></a>

The  **macaddr**  type stores MAC addresses, known for example from Ethernet card hardware addresses \(although MAC addresses are used for other purposes as well\). Input is accepted in the following formats:

```
'08:00:2b:01:02:03'
'08-00-2b-01-02-03'
'08002b:010203'
'08002b-010203'
'0800.2b01.0203'
'08002b010203'
```

These examples would all specify the same address. Upper and lower cases are accepted for the digits a through f. Output is always in the first of the forms shown.

