# Performance Logs<a name="EN-US_TOPIC_0242215144"></a>

Performance logs focus on the access performance of external resources. Performance logs are used to record the status of physical resources and the performance of access to external resources \(such as disks, OBS and Hadoop clusters\). When a performance issue occurs, you can locate the cause using performance logs, which greatly improves troubleshooting efficiency.

## Log Storage Directory<a name="en-us_topic_0237088901_en-us_topic_0059777928_s6002f6eef4ee47bfa6e4831c5aa2da00"></a>

The performance logs of CNs and DNs are stored in the directories under  _$GAUSSLOG_**/gs\_profile**.

## Log Naming Rules<a name="en-us_topic_0237088901_en-us_topic_0059777928_sce7addc2e4fe4a2eaadfa3477806c78b"></a>

The name format of CN and DN performance logs is:

**postgresql-**_creation time_**.prf**

By default, a new log file is generated at 0:00 every day, or when the latest log file exceeds 20 MB or a database instance \(CN or DN\) is restarted.

## Log Content Description<a name="en-us_topic_0237088901_en-us_topic_0059777928_sa55562f0bbe84cbeb6f3106dd265c59a"></a>

Content of a line in a CN or DN log:

_Host name_+_Date_+_Time_+_Instance name_+_Thread number_+_Log content_

