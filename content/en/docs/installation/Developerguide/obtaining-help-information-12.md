# Obtaining Help Information<a name="EN-US_TOPIC_0253059674"></a>

Before using the SQLdiag tool, run the following command to obtain help information:

```
cd src
python main.py --help
```

The command output is as follows:

```
usage: main.py [-h] [--train TRAIN] [--model MODEL] [--predict PREDICT]
               [--ratio RATIO]
               {all,train,predict}

Slow SQL Diagnose

positional arguments:
  {all,train,predict}  Execution style

optional arguments:
  -h, --help           show this help message and exit
  --train TRAIN        History Log Data Directory
  --model MODEL        Output data directory
  --predict PREDICT    To-be-predicted workload data directory
  --ratio RATIO        Ratio threshold for retrain recommend
```

You can also obtain more detailed help information from the  **Readme**  file in the tool.

