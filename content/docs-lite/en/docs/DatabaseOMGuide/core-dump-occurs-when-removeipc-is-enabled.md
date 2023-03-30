# Core Dump Occurs when RemoveIPC Is Enabled<a name="EN-US_TOPIC_0289900135"></a>

## Symptom<a name="en-us_topic_0283136554_section54529241124"></a>

The  **RemoveIPC**  parameter in the OS configuration is set to  **yes**. The database breaks down during running, and the following log information is displayed:

```
FATAL: semctl(1463124609, 3, SETVAL, 0) failed: Invalid argument
```

## Cause Analysis<a name="en-us_topic_0283136554_section444545621213"></a>

If  **RemoveIPC**  is set to  **yes**, the OS deletes the IPC resources \(shared memory and semaphore\) when the corresponding user exits. As a result, the IPC resources used by the openGauss server are cleared, causing the database to break down.

## Procedure<a name="en-us_topic_0283136554_section10754612151312"></a>

Set  **RemoveIPC**  to  **no**. For details, see  **Preparing for Installation**  \>  **Preparing the Software and Hardware Installation Environment**  \>  **Modifying OS Configuration**  in  _Installation Guide_.

