# Locale and Formatting<a name="EN-US_TOPIC_0289900528"></a>

This section describes parameters related to the time format setting.

## DateStyle<a name="en-us_topic_0283136798_en-us_topic_0237124733_en-us_topic_0059778109_s6464b29eb2274134845cea28f39d915e"></a>

**Parameter description**: Specifies the display format for date and time values, as well as the rules for interpreting ambiguous date input values.

This variable contains two independent components: the output format specifications \(ISO, Postgres, SQL, or German\) and the input/output order of year/month/day \(DMY, MDY, or YMD\). The two components can be set separately or together. The keywords Euro and European are synonyms for DMY. The keywords US, NonEuro, and NonEuropean are synonyms for MDY.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: a string

**Default value**:  **ISO, MDY**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>**gs\_initdb**  will initialize this parameter so that its value is the same as that of  [lc\_time](#en-us_topic_0283136798_en-us_topic_0237124733_en-us_topic_0059778109_scbb410b3c5c94682a3eec218c7ff0220).

**Setting Suggestions**: The ISO format is recommended. Postgres, SQL, and German use abbreviations for time zones, such as  **EST**,  **WST**, and  **CST**. These abbreviations can be ambiguous. For example,  **CST**  can represent Central Standard Time \(USA\) UT-6:00, Central Standard Time \(Australia\) UT+9:30, and China Standard Time UT+8:00. This may lead to incorrect time zone conversion and cause errors.

## IntervalStyle<a name="en-us_topic_0283136798_en-us_topic_0237124733_en-us_topic_0059778109_s89302a8dcd7f46ecb7167574d6397dc0"></a>

**Parameter description**: Specifies the display format for interval values.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: enumerated values

-   **sql\_standard**  indicates that output matching SQL standards will be generated.
-   **postgres**  indicates that output matching PostgreSQL 8.4 will be generated when the  [DateStyle](#en-us_topic_0283136798_en-us_topic_0237124733_en-us_topic_0059778109_s6464b29eb2274134845cea28f39d915e)  parameter is set to  **ISO**.
-   **postgres\_verbose**  indicates that output matching PostgreSQL 8.4 will be generated when the  [DateStyle](#en-us_topic_0283136798_en-us_topic_0237124733_en-us_topic_0059778109_s6464b29eb2274134845cea28f39d915e)  parameter is set to  **non\_ISO**.
-   **iso\_8601**  indicates that output matching the time interval "format with designators" defined in ISO 8601 will be generated.
-   **a**  indicates the output result that matches the numtodsinterval function. For details, see  [numtodsinterval](en-us_topic_0289900496.md#en-us_topic_0283136846_en-us_topic_0237121972_en-us_topic_0059779084_lf9dae2de082b41c094177f70cf798433).

>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>The  **IntervalStyle**  parameter also affects the interpretation of ambiguous interval input.

**Default value**:  **postgres**

## TimeZone<a name="en-us_topic_0283136798_en-us_topic_0237124733_en-us_topic_0059778109_sa60c5d71347646c2ad97ccb7541c6f12"></a>

**Parameter description**: Specifies the time zone for displaying and interpreting timestamps.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: a string. You can obtain it by querying the  [PG\_TIMEZONE\_NAMES](en-us_topic_0289900200.md)  view.

Default value:  GMT

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>**gs\_initdb**  will set a time zone value that is consistent with the system environment.

## timezone\_abbreviations<a name="en-us_topic_0283136798_en-us_topic_0237124733_en-us_topic_0059778109_sfe98cbd0139a47a6af08665f2ef22d45"></a>

**Parameter description**: Specifies the time zone abbreviations that will be accepted by the server.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: a string. You can obtain it by querying the  **pg\_timezone\_names**  view.

**Default value**:  **Default**

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>**Default**  indicates an abbreviation that works in most of the world, which is applicable to most cases. There are also other abbreviations, such as  **Australia**  and  **India**  that can be defined for a particular installation. For other time zone abbreviations, you need to set them in the corresponding configuration files before creating the database.

## extra\_float\_digits<a name="en-us_topic_0283136798_en-us_topic_0237124733_en-us_topic_0059778109_saf497a16490b45439e96d11918794fe5"></a>

**Parameter description**: Adjusts the number of digits displayed for floating-point values, including float4, float8, and geometric data types. The parameter value is added to the standard number of digits \(FLT\_DIG or DBL\_DIG as appropriate\).

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range:**  an integer ranging from –15 to 3

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   This parameter can be set to  **3**  to include partially-significant digits. It is especially useful for dumping float data that needs to be restored exactly.
>-   This parameter can also be set to a negative value to suppress unwanted digits.

**Default value**:  **0**

## client\_encoding<a name="en-us_topic_0283136798_en-us_topic_0237124733_en-us_topic_0059778109_sfd35b29b745f4d5b9544f07b9ef676a6"></a>

**Parameter description**: Specifies the client-side encoding \(character set\).

Set this parameter based on the situation of the front-end services. Try to keep the encoding consistent on the client and server to improve efficiency.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: encoding compatible with PostgreSQL.  **UTF8**  indicates that the database encoding is used.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   You can run the  **locale -a**  command to check the system-supported locales and the corresponding encodings, and select one as required.
>-   By default,  **gs\_initdb**  will initialize the setting of this parameter based on the current system environment. You can also run the  **locale**  command to check the current configuration environment.
>-   To use consistent encoding for communication within openGauss, you are advised to retain the default value of  **client\_encoding**. Modification to this parameter in the  **postgresql.conf**  file \(by using the  **gs\_guc**  tool, for example\) does not take effect.

**Default value**:  **UTF8**

**Recommended value**:  **SQL\_ASCII**  or  **UTF8**

## lc\_messages<a name="en-us_topic_0283136798_en-us_topic_0237124733_en-us_topic_0059778109_sc2e4d661a45045f4baaf609bf8a33fa7"></a>

**Parameter description**: Specifies the language in which messages are displayed.

-   Acceptable values are system-related.
-   On some systems, this locale category does not exist. Setting this variable will still work, but there will be no effect. In addition, translated messages for the desired language may not exist. In this case, you can still see the English messages.

    This parameter is a SUSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).


**Value range**: a string

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   You can run the  **locale -a**  command to check the system-supported locales and the corresponding encodings, and select one as required.
>-   By default,  **gs\_initdb**  will initialize the setting of this parameter based on the current system environment. You can also run the  **locale**  command to check the current configuration environment.

**Default value**:  **C**

## lc\_monetary<a name="en-us_topic_0283136798_en-us_topic_0237124733_en-us_topic_0059778109_s5d710486ba2a4e93a63c2ee6549425ba"></a>

**Parameter description**: Specifies the display format of monetary values. It affects the output of functions such as  **to\_char**. Acceptable values are system-related.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: a string

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   You can run the  **locale -a**  command to check the system-supported locales and the corresponding encodings, and select one as required.
>-   By default,  **gs\_initdb**  will initialize the setting of this parameter based on the current system environment. You can also run the  **locale**  command to check the current configuration environment.

**Default value**:  **C**

## lc\_numeric<a name="en-us_topic_0283136798_en-us_topic_0237124733_en-us_topic_0059778109_se1783cf2a55b4cc0ab0b08279db90ff8"></a>

**Parameter description**: Specifies the display format of numbers. It affects the output of functions such as  **to\_char**. Acceptable values are system-related.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: a string

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   You can run the  **locale -a**  command to check the system-supported locales and the corresponding encodings, and select one as required.
>-   By default,  **gs\_initdb**  will initialize the setting of this parameter based on the current system environment. You can also run the  **locale**  command to check the current configuration environment.

**Default value**:  **C**

## lc\_time<a name="en-us_topic_0283136798_en-us_topic_0237124733_en-us_topic_0059778109_scbb410b3c5c94682a3eec218c7ff0220"></a>

**Parameter description**: Specifies the display format of time and locale. It affects the output of functions such as  **to\_char**. Acceptable values are system-related.

This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).

**Value range**: a string

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   You can run the  **locale -a**  command to check the system-supported locales and the corresponding encodings, and select one as required.
>-   By default,  **gs\_initdb**  will initialize the setting of this parameter based on the current system environment. You can also run the  **locale**  command to check the current configuration environment.

**Default value**:  **C**

## default\_text\_search\_config<a name="en-us_topic_0283136798_en-us_topic_0237124733_en-us_topic_0059778109_sd9a07d429cd4498383931c621742b816"></a>

**Parameter description**: Specifies the text search configuration.

If the specified text search configuration does not exist, an error will be reported. If the specified text search configuration is deleted, set  **default\_text\_search\_config**  again. Otherwise, an error will be reported, indicating incorrect configuration.

-   The text search configuration is used by text search functions that do not have an explicit argument specifying the configuration.
-   When a configuration file matching the environment is determined,  **gs\_initdb**  will initialize the configuration file with a setting that corresponds to the environment.

    This parameter is a USERSET parameter. Set it based on instructions provided in  [Table 2](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t290c8f15953843db8d8e53d867cd893d).


**Value range**: a string

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>openGauss supports the following two configurations:  **pg\_catalog.english**  and  **pg\_catalog.simple**.

**Default value**:  **pg\_catalog.english**

