# Default MOT.conf<a name="EN-US_TOPIC_0260488070"></a>

The minimum settings and configuration specify to point the  **Postgresql.conf**  file to the location of the  **MOT.conf**  file.

```
Postgresql.conf 
mot_config_file = '/tmp/gauss/ MOT.conf'
```

Ensure that the value of the max\_process\_memory setting is sufficient to include the global \(data and index\) and local \(sessions\) memory of MOT tables.

The default content of** MOT.conf **is sufficient to get started. The settings can be optimized later.

