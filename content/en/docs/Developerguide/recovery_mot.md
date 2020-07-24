# RECOVERY \(MOT\)<a name="EN-US_TOPIC_0260488233"></a>

checkpoint\_recovery\_workers = 3

Specifies the number of workers \(threads\) to use during checkpoint data recovery. Each MOT engine worker runs on its own core and can process a different table in parallel by reading it into memory. For example, while the default is three-course, you might prefer to set this parameter to them number of cores that are available for processing. After recovery these threads are stopped and killed. See Administrator Recovery for more details.

