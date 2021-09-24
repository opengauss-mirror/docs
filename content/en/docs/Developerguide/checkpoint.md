# CHECKPOINT<a name="EN-US_TOPIC_0289900495"></a>

## Function<a name="en-us_topic_0283137558_en-us_topic_0237122089_en-us_topic_0059778147_s45168794daa74bc2a308ea3c943e0a93"></a>

A checkpoint is a point in the transaction log sequence at which all data files have been updated to reflect the information in the log. All data files will be flushed to a disk.

**CHECKPOINT**  forces a transaction log checkpoint. By default, WALs periodically specify checkpoints in a transaction log. You may use  **gs\_guc**  to specify run-time parameters  **checkpoint\_segments**,  **checkpoint\_timeout**, and  **incremental\_checkpoint\_timeout**  to adjust the atomized checkpoint intervals.

## Precautions<a name="en-us_topic_0283137558_en-us_topic_0237122089_en-us_topic_0059778147_s86cf086bf81043cba0f2133b169b333d"></a>

-   Only the system administrator and O&M administrator can invoke  **CHECKPOINT**.
-   **CHECKPOINT**  forces an immediate checkpoint when the related command is issued, without waiting for a regular checkpoint scheduled by the system.

## Syntax<a name="en-us_topic_0283137558_en-us_topic_0237122089_en-us_topic_0059778147_s9089f4a8029c4cdaaf4f52fc3153da03"></a>

```
CHECKPOINT;
```

## Parameter Description<a name="en-us_topic_0283137558_en-us_topic_0237122089_en-us_topic_0059778147_sf5626489e88940cda9697ac4b596920d"></a>

None

## Examples<a name="en-us_topic_0283137558_en-us_topic_0237122089_en-us_topic_0059778147_s09b9f59580a44f179986ca468bb6eb57"></a>

```
-- Set a checkpoint.
openGauss=# CHECKPOINT;
```

