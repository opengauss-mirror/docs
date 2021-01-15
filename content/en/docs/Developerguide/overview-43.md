# Overview<a name="EN-US_TOPIC_0303986161"></a>

anomaly\_detection is an AI tool integrated into openGauss and can be used to collect and predict database metrics, as well as monitor and diagnose exceptions. It is a component in the dbmind suite. The following information can be collected: IO\_Read, IO\_Write, CPU\_Usage, Memory\_Usage, and disk space occupied by the database. anomaly\_detection can monitor multiple metrics at the same time and predict the change trend of each metric. When detecting that a metric exceeds the manually set threshold in a certain period or at a certain moment in the future, the tool generates an alarm through logs.

anomaly\_detection consists of agent and detector.

The agent and openGauss database are deployed on the same server. The agent module provides the following functions: periodically collects database metric data and stores the collected data in the buffer queue; periodically sends the data in the buffer queue to the detector.

The detector module communicates with the agent module based on HTTP or HTTPS. Therefore, the detector module can be deployed on any server that can communicate with the agent module. The detector module has the following functions: receives the data sent by the agent and caches the collected data locally; predicts the future change trend of the metric and reports alarms based on the collected database metric data.

