# Undo<a name="EN-US_TOPIC_0000001129789643"></a>

## undo\_space\_limit\_size<a name="section13674152315117"></a>

**Parameter description**: Specifies the undo forcible reclamation threshold. If 80% of the threshold is reached, forcible reclamation is triggered.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 800 MB to 32 TB

**Default value**:  **32 GB**

## undo\_limit\_size\_per\_transaction<a name="section5346124411546"></a>

**Parameter description**: Specifies the undo space threshold of a single transaction. If the threshold is reached, the transaction is rolled back due to an error.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 100 MB to 32 TB

**Default value**:  **32 GB**

## undo\_zone\_count<a name="section172423491244"></a>

**Parameter description**: Specifies the number of undo zones that can be allocated in the memory. If the number reaches the threshold or the value set this time is less than the value set last time, an error is reported. After a proper value is set based on the rule, the number of undo zones becomes normal. If this parameter is set to  **0**, the undo function is disabled and Ustore tables cannot be created.

This parameter is a POSTMASTER parameter. Set it based on instructions provided in  [Table 1](resetting-parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).

**Value range**: an integer ranging from 0 to 1048576

Value constraint:

1. The value set this time must be greater than or equal to the value set last time. If the value is incorrect, the database cannot be restored. You need to reset the value and restart the database to restore the database.

2. The value of  **undo\_zone\_count**  needs to be adjusted based on the value of  **max\_connections**. After changing the value of  **max\_connections**, you need to change the value of  **undo\_zone\_count**, which must be four times that of  **max\_connections**.

**Default value**:  **0**

