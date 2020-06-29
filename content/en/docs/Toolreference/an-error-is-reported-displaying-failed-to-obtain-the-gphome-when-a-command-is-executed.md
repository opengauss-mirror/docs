# An Error Is Reported Displaying "Failed to obtain the GPHOME" When a Command Is Executed<a name="EN-US_TOPIC_0249632274"></a>

## Symptom<a name="en-us_topic_0237152452_en-us_topic_0059779180_s9068f5a3fa2545e483455c23e895c088"></a>

The following information is displayed if user  **root**  runs a command.

```
Failed to obtain the GPHOME.
```

## Possible Cause<a name="en-us_topic_0237152452_en-us_topic_0059779180_s1f781026f255460893d4a31199a5aa3d"></a>

The  _GPHOME_  environment variable is not correctly configured. You need to check whether the  _GPHOME_  environment variable contains  **gaussdbToolPath**  in the XML file of the cluster.

## Procedure<a name="en-us_topic_0237152452_en-us_topic_0059779180_s14e2709c0b7440f1a11c5c0d58d05885"></a>

Check the  _$GPHOME_  path.

```
echo $GPHOME
```

Modify the  _$GPHOME_  path in the configuration file if it is not the default installation path.

```
vim /etc/profile
```

