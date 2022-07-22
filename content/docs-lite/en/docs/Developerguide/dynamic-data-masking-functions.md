# Dynamic Data Masking Functions<a name="EN-US_TOPIC_0000001151866048"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>This function is an internal function. For details, see "Database Security \> Dynamic Data Anonymization" in  *Feature Description*.

-   creditcardmasking\(col text, letter char default 'x'\)

    Description: Replaces the digits before the last four bits following the col string with letters.

    Parameter: Character string to be replaced or character string used for replacement

    Return type: text

-   basicmailmasking\(col text, letter char default 'x'\)

    Description: Replaces the characters before the first at sign \(@\) in the col string with letters.

    Parameter: Character string to be replaced or character string used for replacement

    Return type: text

-   fullmailmasking\(col text, letter char default 'x'\)

    Description: Replaces the characters \(except  **@**\) before the last period \(.\) in the col string with letters.

    Parameter: Character string to be replaced or character string used for replacement

    Return type: text

-   alldigitsmasking\(col text, letter char default '0'\)

    Description: Replaces the digits in the col string with letters.

    Parameter: Character string to be replaced or character string used for replacement

    Return type: text

-   shufflemasking\(col text\)

    Description: Sorts the characters in the col string out of order.

    Parameter: Character string to be replaced or character string used for replacement

    Return type: text

-   randommasking\(col text\)

    Description: Randomizes the characters in the col string.

    Parameter: Character string to be replaced or character string used for replacement

    Return type: text

- regexpmasking

  Description: Specifies the internal function of the masking policy, which is used to replace characters using a regular expression.

  Parameter: col text, reg text, replace\_text text, pos INTEGER default 0, reg\_len INTEGER default -1

  Return type: text
