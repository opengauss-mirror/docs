# Upgrade Process<a name="EN-US_TOPIC_0305491444"></a>

This section describes the process for upgrade from an earlier version to the target version.

**Figure  1**  Upgrade flowchart<a name="fig1492165721411"></a>  
![](figures/upgrade-flowchart.png "upgrade-flowchart")

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The time required for each procedure is an estimate and for reference only.

**Table  1**  Estimated time required for each procedure

<a name="toc218487219"></a>
<table><thead align="left"><tr id="row39004066"><th class="cellrowborder" valign="top" width="25.477452254774523%" id="mcps1.2.6.1.1"><p id="p5212777"><a name="p5212777"></a><a name="p5212777"></a>Procedure</p>
</th>
<th class="cellrowborder" valign="top" width="16.95830416958304%" id="mcps1.2.6.1.2"><p id="p19581784"><a name="p19581784"></a><a name="p19581784"></a>Recommended Start Time</p>
</th>
<th class="cellrowborder" valign="top" width="24.937506249375062%" id="mcps1.2.6.1.3"><p id="p42620696"><a name="p42620696"></a><a name="p42620696"></a>Required Time</p>
</th>
<th class="cellrowborder" valign="top" width="19.408059194080593%" id="mcps1.2.6.1.4"><p id="p2555950173311"><a name="p2555950173311"></a><a name="p2555950173311"></a>Service Interruption Duration</p>
</th>
<th class="cellrowborder" valign="top" width="13.218678132186781%" id="mcps1.2.6.1.5"><p id="p29724369"><a name="p29724369"></a><a name="p29724369"></a>Remarks</p>
</th>
</tr>
</thead>
<tbody><tr id="row11609170133510"><td class="cellrowborder" valign="top" width="25.477452254774523%" headers="mcps1.2.6.1.1 "><p id="p760372118397"><a name="p760372118397"></a><a name="p760372118397"></a>Preparing for and Checking the Upgrade</p>
</td>
<td class="cellrowborder" valign="top" width="16.95830416958304%" headers="mcps1.2.6.1.2 "><p id="p1377213012205"><a name="p1377213012205"></a><a name="p1377213012205"></a>One day before the upgrade</p>
</td>
<td class="cellrowborder" valign="top" width="24.937506249375062%" headers="mcps1.2.6.1.3 "><p id="p1772193042017"><a name="p1772193042017"></a><a name="p1772193042017"></a>About two to three hours.</p>
</td>
<td class="cellrowborder" valign="top" width="19.408059194080593%" headers="mcps1.2.6.1.4 "><p id="p1846295453213"><a name="p1846295453213"></a><a name="p1846295453213"></a>No impact on services.</p>
</td>
<td class="cellrowborder" valign="top" width="13.218678132186781%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0059783606_p40357438145645"><a name="en-us_topic_0059783606_p40357438145645"></a><a name="en-us_topic_0059783606_p40357438145645"></a>Check and back up data and verify software packages before the upgrade.</p>
</td>
</tr>
<tr id="row1335165713413"><td class="cellrowborder" valign="top" width="25.477452254774523%" headers="mcps1.2.6.1.1 "><p id="p5668190164016"><a name="p5668190164016"></a><a name="p5668190164016"></a>Perform the upgrade.</p>
</td>
<td class="cellrowborder" valign="top" width="16.95830416958304%" headers="mcps1.2.6.1.2 "><p id="p7772163012012"><a name="p7772163012012"></a><a name="p7772163012012"></a>Service idle hours</p>
</td>
<td class="cellrowborder" valign="top" width="24.937506249375062%" headers="mcps1.2.6.1.3 "><p id="p3772163015202"><a name="p3772163015202"></a><a name="p3772163015202"></a>The time is mainly spent in starting and stopping the database and modifying the system catalog of each database. Generally, the upgrade takes no more than 30 minutes.</p>
</td>
<td class="cellrowborder" valign="top" width="19.408059194080593%" headers="mcps1.2.6.1.4 "><p id="p1946215493216"><a name="p1946215493216"></a><a name="p1946215493216"></a>The duration is the same as the operation duration. Generally, the duration does not exceed 30 minutes.</p>
</td>
<td class="cellrowborder" valign="top" width="13.218678132186781%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0059783606_p7684821145645"><a name="en-us_topic_0059783606_p7684821145645"></a><a name="en-us_topic_0059783606_p7684821145645"></a>Start the upgrade according to the upgrade guide.</p>
</td>
</tr>
<tr id="row786055223420"><td class="cellrowborder" valign="top" width="25.477452254774523%" headers="mcps1.2.6.1.1 "><p id="p744624011202"><a name="p744624011202"></a><a name="p744624011202"></a>Verify the upgrade.</p>
</td>
<td class="cellrowborder" valign="top" width="16.95830416958304%" headers="mcps1.2.6.1.2 "><p id="p187730309208"><a name="p187730309208"></a><a name="p187730309208"></a>Service idle hours</p>
</td>
<td class="cellrowborder" valign="top" width="24.937506249375062%" headers="mcps1.2.6.1.3 "><p id="p7773163020208"><a name="p7773163020208"></a><a name="p7773163020208"></a>About 30 minutes.</p>
</td>
<td class="cellrowborder" valign="top" width="19.408059194080593%" headers="mcps1.2.6.1.4 "><p id="p134621754163213"><a name="p134621754163213"></a><a name="p134621754163213"></a>The duration is the same as the operation duration, which is about 30 minutes.</p>
</td>
<td class="cellrowborder" valign="top" width="13.218678132186781%" headers="mcps1.2.6.1.5 "><p id="p1388215313512"><a name="p1388215313512"></a><a name="p1388215313512"></a>-</p>
</td>
</tr>
<tr id="row1657334683411"><td class="cellrowborder" valign="top" width="25.477452254774523%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059783606_p32199356145645"><a name="en-us_topic_0059783606_p32199356145645"></a><a name="en-us_topic_0059783606_p32199356145645"></a>Committing the Upgrade Task</p>
</td>
<td class="cellrowborder" valign="top" width="16.95830416958304%" headers="mcps1.2.6.1.2 "><p id="p1077323018209"><a name="p1077323018209"></a><a name="p1077323018209"></a>Service idle hours</p>
</td>
<td class="cellrowborder" valign="top" width="24.937506249375062%" headers="mcps1.2.6.1.3 "><p id="p67739300203"><a name="p67739300203"></a><a name="p67739300203"></a>The upgrade commit takes no more than 10 minutes.</p>
</td>
<td class="cellrowborder" valign="top" width="19.408059194080593%" headers="mcps1.2.6.1.4 "><p id="p1246216544325"><a name="p1246216544325"></a><a name="p1246216544325"></a>The duration is the same as the operation duration. Generally, the duration does not exceed 10 minutes.</p>
</td>
<td class="cellrowborder" valign="top" width="13.218678132186781%" headers="mcps1.2.6.1.5 "><p id="p1877303017202"><a name="p1877303017202"></a><a name="p1877303017202"></a>-</p>
</td>
</tr>
<tr id="row198573237207"><td class="cellrowborder" valign="top" width="25.477452254774523%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0059783606_p56729805145645"><a name="en-us_topic_0059783606_p56729805145645"></a><a name="en-us_topic_0059783606_p56729805145645"></a>Rolling Back the Upgrade Version</p>
</td>
<td class="cellrowborder" valign="top" width="16.95830416958304%" headers="mcps1.2.6.1.2 "><p id="p177731930112014"><a name="p177731930112014"></a><a name="p177731930112014"></a>Service idle hours</p>
</td>
<td class="cellrowborder" valign="top" width="24.937506249375062%" headers="mcps1.2.6.1.3 "><p id="p577333052014"><a name="p577333052014"></a><a name="p577333052014"></a>Generally, the version rollback takes no more than 30 minutes.</p>
</td>
<td class="cellrowborder" valign="top" width="19.408059194080593%" headers="mcps1.2.6.1.4 "><p id="p8463195443215"><a name="p8463195443215"></a><a name="p8463195443215"></a>The duration is the same as the operation duration. Generally, the duration does not exceed 30 minutes.</p>
</td>
<td class="cellrowborder" valign="top" width="13.218678132186781%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0059783606_p46680835145645"><a name="en-us_topic_0059783606_p46680835145645"></a><a name="en-us_topic_0059783606_p46680835145645"></a>-</p>
</td>
</tr>
</tbody>
</table>

