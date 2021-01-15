# Obtaining Help Information<a name="EN-US_TOPIC_0289900462"></a>

Before starting the tuning program, run the following command to obtain help information:

```
python main.py --help
```

The command output is as follows:

```
usage: main.py [-h] [-m {train,tune}] [-f CONFIG_FILE] [--db-name DB_NAME]                
[--db-user DB_USER] [--port PORT] [--host HOST]                
[--host-user HOST_USER] [--host-ssh-port HOST_SSH_PORT]                
[--scenario {ap,tp,htap}] [--benchmark BENCHMARK]                
[--model-path MODEL_PATH] [-v]  

X-Tuner: a self-tuning toolkit for openGauss.  

optional arguments:   
-h, --help            show this help message and exit   
-m {train,tune}, --mode {train,tune}                         
train a reinforcement learning model or tune by your                         
trained model.   
-f CONFIG_FILE, --config-file CONFIG_FILE                         
you can pass a config file path or you should manually                         
set database information.   
--db-name DB_NAME     database name.   
--db-user DB_USER     database user name.   
--port PORT           database connection port.   
--host HOST           where did your database install on?   
--host-user HOST_USER                         
user name of the host where your database installed                         
on.   
--host-ssh-port HOST_SSH_PORT                         
host ssh port.   
--scenario {ap,tp,htap}   
--benchmark BENCHMARK   
--model-path MODEL_PATH                         
the place where you want to save model weights to or                         
load model weights from.   
-v, --version         
show version.
```

