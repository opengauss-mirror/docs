# Adding Monitoring Parameters<a name="EN-US_TOPIC_0303986185"></a>

## Compiling the API for Obtaining Metric Data<a name="section5892154973918"></a>

The following uses  **io\_read **as an example to describe how to compile the  **io\_read **metric obtaining function in  **metric\_task.py**  under the  **task**  directory:

```
def io_read():
     child1 = subprocess.Popen(['pidstat', '-d'], stdout=subprocess.PIPE, shell=False)
     child2 = subprocess.Popen(['grep', 'gaussd[b]'], stdin=child1.stdout, stdout=subprocess.PIPE, shell=False)
     result = child2.communicate()
     if not result[0]:
         return 0.0
     else:
         return result[0].split()[3].decode('utf-8')
```

## Adding Metric Monitoring Parameters<a name="section1945041517195"></a>

Add the io\_read section to  **metric\_task.conf**  under the  **task**  directory.

```
[io_read]
minimum = 30
maximum = 100
data_period = 1H
forecast_interval = 2H
forecast_period = 30M
```

## Restarting Services<a name="section13907125892019"></a>

Command reference:  [Obtaining Help Information](obtaining-help-information-9.md)

```
Restart the agent:
    Local server:
        python main.py start --role agent
        python main.py stop --role agent
    Remote server:
        python main.py start --user USER --host HOST --project-path PROJECT_PATH --role agent    
        python main.py stop --user USER --host HOST --project-path PROJECT_PATH --role agent    
Restart the server:
    Local server:
        python main.py start --role server
        python main.py stop --role server
    Remote server:
        python main.py start --user USER --host HOST --project-path PROJECT_PATH --role server
        python main.py stop --user USER --host HOST --project-path PROJECT_PATH --role server
Restarts the monitor:
    Local server:
        python main.py start --role monitor
        python main.py stop --role monitor
    Remote server:
        python main.py start --user USER --host HOST --project-path PROJECT_PATH --role monitor
        python main.py stop --user USER --host HOST --project-path PROJECT_PATH --role monitor
```

