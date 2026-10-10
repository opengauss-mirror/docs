# PG_STATISTIC_LOCK

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-03T11:49:22.606Z -->

The PG_STATISTIC_LOCK table records the lock status of operations on statistics information.

**Table 1** PG_STATISTIC_LOCK columns

<a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_t409d019781a1464fa35a78496efe5128"></a>

<table>
    <thead align="left">
     <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9fa959080f464cda84d3e370c739001">
         <th class="cellrowborder" valign="top" width="18.25%" id="mcps1.2.4.1.1">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e002">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e003"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e004"></a>Name
                </p>
         </th>
            <th class="cellrowborder" valign="top" width="18.25%" id="mcps1.2.4.1.1">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e005">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e006"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e007"></a>Type
                </p>
         </th>
            <th class="cellrowborder" valign="top" width="18.25%" id="mcps1.2.4.1.1">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e008">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e009"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a9eeabae9f57146a3b582196fd912e010"></a>Description
                </p>
         </th>
        </tr>
    </thead>
    <tbody>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9df1702564f0488285e85b6175f2f011">
         <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb012">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb013"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb014"></a>namespaceid
                </p>
            </td>
         <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb015">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb016"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb017"></a>oid
                </p>
            </td>
            <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb015">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb016"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb017"></a>OID of the schema on which the lock operation is performed
                </p>
            </td>
        </tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9df1702564f0488285e85b6175f2f018">
         <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb019">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb020"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb021"></a>stalocktype
                </p>
            </td>
         <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb022">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb023"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb024"></a>char
                </p>
            </td>
            <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb025">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb026"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb027"></a>Lock operation flag type
                </p>
                <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_u91e07d873c3e4ee1a23ac5f114368028"></a>
                <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_u91e07d873c3e4ee1a23ac5f114368029"></a>
                <ul>
                    <li>s: Specifies the current lock object type as schema.</li>
                    <li>t: Specifies the current lock object type as table.</li>
                    <li>p: Specifies the current lock object type as partition.</li>
                </ul>
            </td>
        </tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9df1702564f0488285e85b6175f2f030">
         <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb031">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb032"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb033"></a>relid
                </p>
            </td>
         <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb034">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb035"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb036"></a>oid
                </p>
            </td>
            <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb037">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb038"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb039"></a>OID of the table on which the lock operation is performed
                </p>
            </td>
        </tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9df1702564f0488285e85b6175f2f040">
         <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb041">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb042"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb043"></a>partid
                </p>
            </td>
         <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb044">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb045"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb046"></a>oid
                </p>
            </td>
            <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb047">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb048"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb049"></a>OID of the partition on which the lock operation is performed
                </p>
            </td>
        </tr>
        <tr id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_r9df1702564f0488285e85b6175f2f050">
         <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb051">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb052"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb053"></a>lock
                </p>
            </td>
         <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb054">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb055"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb056"></a>bool
                </p>
            </td>
            <td class="cellrowborder" valign="top" width="18.25%" headers="mcps1.2.4.1.1 ">             <p id="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb057">
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb058"></a>
                    <a name="zh-cn_topic_0283137732_zh-cn_topic_0237122317_zh-cn_topic_0059778435_a955ddb3e3046481f85d60457555bb059"></a>Indicates whether the current object is locked.
                </p>
            </td>
        </tr>
    </tbody>
</table>
