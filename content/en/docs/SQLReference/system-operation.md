# System Operation<a name="EN-US_TOPIC_0289900756"></a>

openGauss text runs SQL statements to perform different system operations, such as setting variables, displaying the execution plan, and collecting garbage data.

## Setting Variables<a name="en-us_topic_0283137188_en-us_topic_0237122047_en-us_topic_0059778982_s996115c71b8847e3a40822daef622a2a"></a>

For details about how to set various parameters for a session or transaction, see  [SET](set-48.md).

## Displaying the Execution Plan<a name="en-us_topic_0283137188_en-us_topic_0237122047_en-us_topic_0059778982_s3e28880506ff4cc8a003199eb5d71864"></a>

For details about how to display the execution plan that openGauss makes for SQL statements, see  [EXPLAIN](explain.md).

## Specifying a Checkpoint in Transaction Logs<a name="en-us_topic_0283137188_en-us_topic_0237122047_en-us_topic_0059778982_s8e74a18e37e74e838ef937d766f9a03c"></a>

By default, WALs periodically specify checkpoints in a transaction log.  **CHECKPOINT**  forces an immediate checkpoint when the related command is issued, without waiting for a regular checkpoint scheduled by the system. For details, see  [CHECKPOINT](checkpoint.md).

## Collecting Unnecessary Data<a name="en-us_topic_0283137188_en-us_topic_0237122047_en-us_topic_0059778982_sb2796f883f6540b78c6f924507e045eb"></a>

For details about how to collect garbage data and analyze a database as required, see [VACUUM](vacuum.md).

## Collecting Statistics<a name="en-us_topic_0283137188_en-us_topic_0237122047_en-us_topic_0059778982_sf12fd2f7c9d147f3a9e644d39257f4e6"></a>

For details about how to collect statistics on tables in databases, see [ANALYZE | ANALYSE](analyze-analyse.md).

## Setting the Constraint Check Mode for the Current Transaction<a name="en-us_topic_0283137188_en-us_topic_0237122047_en-us_topic_0059778982_s894e1a6eba424cba9ac24a5f19b5d511"></a>

For details about how to set the constraint check mode for the current transaction, see [SET CONSTRAINTS](set-constraints.md).

## Shutting Down The Current Database Node<a name="en-us_topic_0283137188_section1661915568326"></a>

For details about shutting down the current database node, see  [SHUTDOWN](shutdown.md).
