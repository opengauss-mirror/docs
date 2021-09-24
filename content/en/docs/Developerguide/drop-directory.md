# DROP DIRECTORY<a name="EN-US_TOPIC_0289900633"></a>

## Function<a name="en-us_topic_0283137028_en-us_topic_0237122136_en-us_topic_0059779050_s7810bb02b5b247fd92d22d7e328c870f"></a>

**DROP Directory**  deletes a synonym.

## Precautions<a name="en-us_topic_0283137028_en-us_topic_0237122136_en-us_topic_0059779050_sd775e695334845048410c46ecc8adaea"></a>

By default, only the initial user can perform the drop operation. When  **enable\_access\_server\_directory**  \([enable\_access\_server\_directory](en-us_topic_0289900107.md#en-us_topic_0283136929_en-us_topic_0237124747_section4279164545515)\), users with the  **sysadmin**  permission can also perform the drop operation.

## Syntax<a name="en-us_topic_0283137028_en-us_topic_0237122136_en-us_topic_0059779050_s6d36dd755c5a47d086e5b767a88f208b"></a>

```
DROP DIRECTORY [ IF EXISTS ] directory_name;
```

## Parameter Description<a name="en-us_topic_0283137028_en-us_topic_0237122136_section1185722174518"></a>

-   **directory\_name**

    Specifies the name of the directory to be deleted.

    Value range: an existing directory name


## Examples<a name="en-us_topic_0283137028_en-us_topic_0237122136_section54683394512"></a>

```
-- Create a directory.
openGauss=# CREATE OR REPLACE DIRECTORY  dir  as '/tmp/';

-- Delete a directory.
openGauss=# DROP DIRECTORY dir;
```

## Helpful Links<a name="en-us_topic_0283137028_en-us_topic_0237122136_section14134121715454"></a>

[CREATE DIRECTORY](create-directory.md)  and  [ALTER DIRECTORY](alter-directory.md)

