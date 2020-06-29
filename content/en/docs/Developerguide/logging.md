# Logging<a name="EN-US_TOPIC_0257867413"></a>

MOT records statistics and error messages in the same log file as openGauss. MOT commits a log record of the transaction changes as each transaction ends, as described in the  [Logging](en-us_topic_0257713267.md#logging_1)  section.

-   For an overview of MOT logging and general persistence features, see the  [Logging](en-us_topic_0257713267.md#logging_1)  section.
-   For more information about MOT Statistics, see the  [MOT Statistics](mot-statistics.md#EN-US_TOPIC_0257867407)__section.
-   For more information about MOT error messages, see the  [MOT Error Messages](mot-error-messages.md#EN-US_TOPIC_0257867409)__section. 

**Note**  – In addition to logs, MOT manages checkpoints which periodically writes a snapshot of all the data in memory to disk. For more information about MOT checkpoints, see the  [Checkpoints](checkpoints.md#EN-US_TOPIC_0257867402)__section.

