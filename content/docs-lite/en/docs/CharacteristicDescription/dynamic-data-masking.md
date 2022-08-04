# Dynamic Data Masking<a name="EN-US_TOPIC_0000001152275229"></a>

## Availability<a name="section17746747"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section25503003"></a>

Data masking is an effective database privacy protection solution, which can prevent attackers from snooping on private data. The dynamic data masking mechanism is a technology that protects privacy data by customizing masking policies. It can effectively prevent unauthorized users from accessing sensitive information while retaining original data. After the administrator specifies the object to be anonymized and customizes a data masking policy, if the database resources queried by a user are associated with a masking policy, data is anonymized based on the user identity and masking policy to restrict attackers' access to privacy data.

## Benefits<a name="section28200442"></a>

Data privacy protection is one of the required database security capabilities. It can restrict attackers' access to privacy data, ensuring privacy data security. The dynamic data masking mechanism can protect the privacy of specified database resources by configuring masking policies. In addition, the masking policy configuration is flexible and can implement targeted privacy protection in specific user scenarios.

## Description<a name="section3730161075314"></a>

The dynamic data masking mechanism customizes masking policies based on resource labels. It can select masking modes based on the site requirements or customize masking policies for specific users. The SQL syntax for creating a complete masking policy is as follows:

```
CREATE RESOURCE LABEL label_for_creditcard ADD COLUMN(user1.table1.creditcard);
CREATE RESOURCE LABEL label_for_name ADD COLUMN(user1.table1.name);
CREATE MASKING POLICY msk_creditcard creditcardmasking ON LABEL(label_for_creditcard);
CREATE MASKING POLICY msk_name randommasking ON LABEL(label_for_name) FILTER ON IP(local), ROLES(dev);
```

**label\_for\_creditcard**  and  **msk\_name**  are the resource labels for masking, and each label is allocated to two column objects.  **creditcardmasking**  and  **randommasking**  are preset masking functions.  **msk\_creditcard**  specifies that the masking policy  **creditcardmasking**  will be applied when any user accesses resources with  **label\_for\_creditcard**, regardless of the access source.  **msk\_name**  specifies that the masking policy  **randommasking**  will be applied when local user  **dev**  accesses resources with  **label\_for\_name**. If  **FILTER**  is not specified, the setting takes effect for all users. Otherwise, the setting takes effect only for specified users.

The following table shows the preset masking functions:

<a name="table1851759894"></a>
<table><tbody><tr id="row168961759693"><td class="cellrowborder" valign="top" width="19%"><p id="p16896145916917"><a name="p16896145916917"></a><a name="p16896145916917"></a><strong id="b498842117291"><a name="b498842117291"></a><a name="b498842117291"></a>Masking Function</strong></p>
</td>
<td class="cellrowborder" valign="top" width="81%"><p id="p1589610591090"><a name="p1589610591090"></a><a name="p1589610591090"></a><strong id="b7153192414290"><a name="b7153192414290"></a><a name="b7153192414290"></a>Example</strong></p>
</td>
</tr>
<tr id="row28961959397"><td class="cellrowborder" valign="top" width="19%"><p id="p13704144521913"><a name="p13704144521913"></a><a name="p13704144521913"></a>creditcardmasking</p>
</td>
<td class="cellrowborder" valign="top" width="81%"><p id="p1089617591999"><a name="p1089617591999"></a><a name="p1089617591999"></a>'4880-9898-4545-2525' will be anonymized as 'xxxx-xxxx-xxxx-2525'. This function anonymizes digits except the last four digits.</p>
</td>
</tr>
<tr id="row108961159196"><td class="cellrowborder" valign="top" width="19%"><p id="p3251248151913"><a name="p3251248151913"></a><a name="p3251248151913"></a>basicemailmasking</p>
</td>
<td class="cellrowborder" valign="top" width="81%"><p id="p177651545122212"><a name="p177651545122212"></a><a name="p177651545122212"></a>'abcd@gmail.com' will be anonymized as 'xxxx@gmail.com'. This function anonymizes text before the first @.</p>
</td>
</tr>
<tr id="row148517596195"><td class="cellrowborder" valign="top" width="19%"><p id="p13485115912195"><a name="p13485115912195"></a><a name="p13485115912195"></a>fullemailmasking</p>
</td>
<td class="cellrowborder" valign="top" width="81%"><p id="p55559472011"><a name="p55559472011"></a><a name="p55559472011"></a>'abcd@gmail.com' will be anonymized as 'xxxx@xxxxx.com'. This function anonymizes text before the first dot (.) (except @).</p>
</td>
</tr>
<tr id="row1955514414203"><td class="cellrowborder" valign="top" width="19%"><p id="p1155518412201"><a name="p1155518412201"></a><a name="p1155518412201"></a>alldigitsmasking</p>
</td>
<td class="cellrowborder" valign="top" width="81%"><p id="p18422141092013"><a name="p18422141092013"></a><a name="p18422141092013"></a>'alex123alex' will be anonymized as 'alex000alex'. This function anonymizes only digits in the text.</p>
</td>
</tr>
<tr id="row042211052019"><td class="cellrowborder" valign="top" width="19%"><p id="p164227109208"><a name="p164227109208"></a><a name="p164227109208"></a>shufflemasking</p>
</td>
<td class="cellrowborder" valign="top" width="81%"><p id="p14175205311224"><a name="p14175205311224"></a><a name="p14175205311224"></a>'hello word' will be anonymized as 'hlwoeor dl'. This weak masking function is implemented through character dislocation. You are not advised to use this function to anonymize strings with strong semantics.</p>
</td>
</tr>
<tr id="row99959120201"><td class="cellrowborder" valign="top" width="19%"><p id="p5995813202"><a name="p5995813202"></a><a name="p5995813202"></a>randommasking</p>
</td>
<td class="cellrowborder" valign="top" width="81%"><p id="p2995013206"><a name="p2995013206"></a><a name="p2995013206"></a>'hello word' will be anonymized as 'ad5f5ghdf5'. This function randomly anonymizes text by character.</p>
</td>
</tr>
<tr id="row15509448171810"><td class="cellrowborder" valign="top" width="19%"><p id="p34678156210"><a name="p34678156210"></a><a name="p34678156210"></a>regexpmasking</p>
</td>
<td class="cellrowborder" valign="top" width="81%"><p id="p0467181518218"><a name="p0467181518218"></a><a name="p0467181518218"></a>You need to enter four parameters in sequence. <strong>reg</strong> indicates the character string to be replaced, <strong>replace_text</strong> indicates the character string after replacement, <strong>pos</strong> indicates the position where the target character string starts to be replaced, and <strong>reg_len</strong> indicates the replacement length. Both <strong>pos</strong> and <strong>reg_len</strong> are of the integer type. <strong>reg</strong> and <strong>replace_text</strong> can be expressed by regular expressions. If <strong>pos</strong> is not specified, the default value is <strong>0</strong>. If <strong>reg_len</strong> is not specified, the default value is <strong>–1</strong>, indicating that all character strings after <strong>pos</strong> will be replaced.</p>
<pre class="screen" id="screen891651113102"><a name="screen891651113102"></a><a name="screen891651113102"></a>CREATE MASKING POLICY msk_creditcard regexpmasking('[\d+]', 'x', 5, 9 )  ON LABEL(label_for_creditcard);</pre>
<p id="p163831411142211"><a name="p163831411142211"></a><a name="p163831411142211"></a>'4880-9898-4545-2525' will be anonymized as '4880-xxxx-xxxx-2525'.</p>
</td>
</tr>
<tr id="row1240725551911"><td class="cellrowborder" valign="top" width="19%"><p id="p54071155191916"><a name="p54071155191916"></a><a name="p54071155191916"></a>maskall</p>
</td>
<td class="cellrowborder" valign="top" width="81%"><p id="p6407175531915"><a name="p6407175531915"></a><a name="p6407175531915"></a>'4880-9898-4545-2525' will be anonymized as 'xxxxxxxxxxxxxxxxxxx'.</p>
</td>
</tr>
</tbody>
</table>

The data types supported by each masking function are as follows:

<a name="table3119163316"></a>
<table><tbody><tr id="row611413337"><td class="cellrowborder" valign="top" width="19.06%"><p id="p9112183314"><a name="p9112183314"></a><a name="p9112183314"></a><strong id="b6845640152320"><a name="b6845640152320"></a><a name="b6845640152320"></a>Masking Function</strong></p>
</td>
<td class="cellrowborder" valign="top" width="80.94%"><p id="p141113116337"><a name="p141113116337"></a><a name="p141113116337"></a><strong id="b59588157242"><a name="b59588157242"></a><a name="b59588157242"></a>Supported Data Types</strong></p>
</td>
</tr>
<tr id="row111191203311"><td class="cellrowborder" valign="top" width="19.06%"><p id="p1116173317"><a name="p1116173317"></a><a name="p1116173317"></a>creditcardmasking</p>
</td>
<td class="cellrowborder" valign="top" width="80.94%"><p id="p71219133315"><a name="p71219133315"></a><a name="p71219133315"></a>BPCHAR, VARCHAR, NVARCHAR, TEXT (character data in credit card format only)</p>
</td>
</tr>
<tr id="row1712713331"><td class="cellrowborder" valign="top" width="19.06%"><p id="p1120111335"><a name="p1120111335"></a><a name="p1120111335"></a>basicemailmasking</p>
</td>
<td class="cellrowborder" valign="top" width="80.94%"><p id="p3754105014349"><a name="p3754105014349"></a><a name="p3754105014349"></a>BPCHAR, VARCHAR, NVARCHAR, TEXT (character data in email format only)</p>
</td>
</tr>
<tr id="row14121315331"><td class="cellrowborder" valign="top" width="19.06%"><p id="p1512817336"><a name="p1512817336"></a><a name="p1512817336"></a>fullemailmasking</p>
</td>
<td class="cellrowborder" valign="top" width="80.94%"><p id="p186511852163418"><a name="p186511852163418"></a><a name="p186511852163418"></a>BPCHAR, VARCHAR, NVARCHAR, TEXT (character data in email format only)</p>
</td>
</tr>
<tr id="row312131113314"><td class="cellrowborder" valign="top" width="19.06%"><p id="p101211193316"><a name="p101211193316"></a><a name="p101211193316"></a>alldigitsmasking</p>
</td>
<td class="cellrowborder" valign="top" width="80.94%"><p id="p39761126163513"><a name="p39761126163513"></a><a name="p39761126163513"></a>BPCHAR, VARCHAR, NVARCHAR, TEXT (character data containing digits only)</p>
</td>
</tr>
<tr id="row19128117335"><td class="cellrowborder" valign="top" width="19.06%"><p id="p1812101123314"><a name="p1812101123314"></a><a name="p1812101123314"></a>shufflemasking</p>
</td>
<td class="cellrowborder" valign="top" width="80.94%"><p id="p10186163712356"><a name="p10186163712356"></a><a name="p10186163712356"></a>BPCHAR, VARCHAR, NVARCHAR, TEXT (text data only)</p>
</td>
</tr>
<tr id="row101218113311"><td class="cellrowborder" valign="top" width="19.06%"><p id="p181291113313"><a name="p181291113313"></a><a name="p181291113313"></a>randommasking</p>
</td>
<td class="cellrowborder" valign="top" width="80.94%"><p id="p161533391359"><a name="p161533391359"></a><a name="p161533391359"></a>BPCHAR, VARCHAR, NVARCHAR, TEXT (text data only)</p>
</td>
</tr>
<tr id="row1112816338"><td class="cellrowborder" valign="top" width="19.06%"><p id="p1121810338"><a name="p1121810338"></a><a name="p1121810338"></a>maskall</p>
</td>
<td class="cellrowborder" valign="top" width="80.94%"><p id="p151216118335"><a name="p151216118335"></a><a name="p151216118335"></a>BOOL, RELTIME, TIME, TIMETZ, INTERVAL, TIMESTAMP, TIMESTAMPTZ, SMALLDATETIME, ABSTIME,</p>
<p id="p9852191203719"><a name="p9852191203719"></a><a name="p9852191203719"></a>TEXT, BPCHAR, VARCHAR, NVARCHAR2, NAME, INT8, INT4, INT2, INT1, NUMRIC, FLOAT4, FLOAT8, CASH</p>
</td>
</tr>
</tbody>
</table>

For unsupported data types, the  **maskall**  function is used for data masking by default. The data of the BOOL type is masked as  **'0'**. The RELTIME type is masked as  **'1970'**. The TIME, TIMETZ, and INTERVAL types are masked as  **'00:00:00.0000+00'**. The TIMESTAMP, TIMESTAMPTZ, SMALLDATETIME, and ABSTIME types are masked as  **'1970-01-01 00:00:00.0000'**. The TEXT, CHAR, BPCHAR, VARCHAR, NVARCHAR2, and NAME type are masked as  **'x'**. The INT8, INT4, INT2, INT1, NUMERIC, FLOAT4, FLOAT8 types are masked as  **'0'**. If the data type is not supported by  **maskall**, the masking policy cannot be created. If implicit conversion is involved in the masking column, the data type after implicit conversion is used for masking. In addition, if the masking policy is applied to a data column and takes effect, operations on the data in the column are performed based on the masking result.

Dynamic data masking applies to scenarios closely related to actual services. It provides users with proper masking query APIs and error handling logic based on service requirements to prevent raw data from being obtained through credential stuffing.

## Enhancements<a name="section2534498"></a>

None.

## Constraints<a name="section06531946143616"></a>

-   The dynamic data masking policy must be created by a user with the  **POLADMIN**  or  **SYSADMIN**  attribute, or by the initial user. Common users do not have the permission to access the security policy system catalog and system view.
-   Dynamic data masking takes effect only on data tables for which masking policies are configured. Audit logs are not within the effective scope of the masking policies.
-   In a masking policy, only one masking mode can be specified for a resource label.
-   Multiple masking policies cannot be used to anonymize the same resource label, except when  **FILTER**  is used to specify user scenarios where the policies take effect and there is no intersection between user scenarios of different masking policies that contain the same resource label. In this case, you can identify the policy that a resource label is anonymized by based on the user scenario.
-   It is recommended that  **APP**  in  **FILTER**  be set to applications in the same trusted domain. Since a client may be forged, a security mechanism must be formed on the client when  **APP**  is used to reduce misuse risks. Generally, you are not advised to set  **APP**. If it is set, pay attention to the risk of client spoofing.
-   For INSERT or MERGE INTO operations with the query clause, if the source table contains anonymized columns, the inserted or updated result in the preceding two operations is the anonymized value and cannot be restored.
-   When the built-in security policy is enabled, the ALTER TABLE EXCHANGE PARTITION statement fails to be executed if the source table is in the anonymized column.
-   If a dynamic data masking policy is configured for a table, grant the trigger permission of the table to other users with caution to prevent other users from using the trigger to bypass the masking policy.
-   A maximum of 98 dynamic data masking policies can be created.
-   Only the preceding seven preset masking policies can be used.
-   Only data with the resource labels containing the  **COLUMN**  attribute can be anonymized.
-   Only columns in base tables can be anonymized.
-   Only the data queried using  **SELECT**  can be anonymized.
-   Taking an IPv4 address as an example, the following formats are supported:

    <a name="table7313162864616"></a>
    <table><tbody><tr id="row17313728174619"><td class="cellrowborder" valign="top" width="19%"><p id="p1631315285461"><a name="p1631315285461"></a><a name="p1631315285461"></a>IP Address Format</p>
    </td>
    <td class="cellrowborder" valign="top" width="81%"><p id="p2031382844611"><a name="p2031382844611"></a><a name="p2031382844611"></a>Example</p>
    </td>
    </tr>
    <tr id="row9313728154613"><td class="cellrowborder" valign="top" width="19%"><p id="p9607159482"><a name="p9607159482"></a><a name="p9607159482"></a>Single IP address</p>
    </td>
    <td class="cellrowborder" valign="top" width="81%"><p id="p595719466464"><a name="p595719466464"></a><a name="p595719466464"></a>127.0.0.1</p>
    </td>
    </tr>
    <tr id="row1131322814614"><td class="cellrowborder" valign="top" width="19%"><p id="p1861151584818"><a name="p1861151584818"></a><a name="p1861151584818"></a>IP address with mask</p>
    </td>
    <td class="cellrowborder" valign="top" width="81%"><p id="p345013294714"><a name="p345013294714"></a><a name="p345013294714"></a>127.0.0.1|255.255.255.0</p>
    </td>
    </tr>
    <tr id="row156113154489"><td class="cellrowborder" valign="top" width="19%"><p id="p136161513482"><a name="p136161513482"></a><a name="p136161513482"></a>CIDR IP address</p>
    </td>
    <td class="cellrowborder" valign="top" width="81%"><p id="p15618157482"><a name="p15618157482"></a><a name="p15618157482"></a>127.0.0.1/24</p>
    </td>
    </tr>
    <tr id="row10611015144813"><td class="cellrowborder" valign="top" width="19%"><p id="p19611215184811"><a name="p19611215184811"></a><a name="p19611215184811"></a>IP address segment</p>
    </td>
    <td class="cellrowborder" valign="top" width="81%"><p id="p13493154714715"><a name="p13493154714715"></a><a name="p13493154714715"></a>127.0.0.1-127.0.0.5</p>
    </td>
    </tr>
    </tbody>
    </table>


## Dependencies<a name="section22810484"></a>

None.

