# Obtaining Help Information<a name="EN-US_TOPIC_0303986186"></a>

Before starting the tuning program, run the following command to obtain help information:

```
Source code mode: python main.py --help
```

The command output is as follows:

```
usage:
        python main.py start [--role {{agent,server,monitor}}]
        # start local service.
        python main.py stop [--role {{agent,server,monitor}}]
        # stop local service.
        python main.py start [--user USER] [--host HOST] [--project-path PROJECT_PATH] [--role {{agent,server,monitor}}]
        # start the remote service.
        python main.py stop [--user USER] [--host HOST] [--project-path PROJECT_PATH] [--role {{agent,server,monitor}}]
        # stop the remote service.
        python main.py deploy [--user USER] [--host HOST] [--project-path PROJECT_PATH]
        # deploy project in remote host.
        python main.py show_metrics
        # display all monitored metrics(can only be executed on 'detector' machine).
        python main.py forecast [--metric-name METRIC_NAME] [--forecast-periods FORECAST_PERIODS] [--forecast-method {{auto_arima, fbprophet}}] [--save-path SAVE_PATH]
        # forecast future trend of metric(can only be executed on 'detector' machine).


abnomaly_detection: a timeseries forecast and anomaly detection tool.

positional arguments:
  {start,stop,deploy,show_metrics,forecast}

optional arguments:
  -h, --help            show this help message and exit
  --user USER           User of remote server.
  --host HOST           IP of remote server.
  --project-path PROJECT_PATH
                        Project location in remote server.
  --role {agent,server,monitor}
                        Run as 'agent', 'server', 'monitor'. notes: ensure the
                        normal operation of the openGauss in agent.
  --metric-name METRIC_NAME
                        Metric name to be predicted, if this parameter is not
                        provided, all metric in database will be predicted.
  --forecast-periods FORECAST_PERIODS
                        Forecast periods of metric, it should be integer plus
                        time unit format such as '1S', '2H', '10D'; now we
                        support time unit: S: Second, M: Minute, H: Hour, D:
                        Day, W: Week. notes: the specific value should be
                        determined to the trainnig data.if this parameter is
                        not provided, the default value '100S' will be used.
  --forecast-method FORECAST_METHOD
                        Forecast method, default method is 'auto_arima',if
                        want to use 'fbprophet', you should install fbprophet
                        first.
  --save-path SAVE_PATH
                        Save the results to this path using csv format, if
                        this parameter is not provided,, the result wil not be
                        saved.
  -v, --version         show program's version number and exit

epilog:
     the 'a-detection.conf' and 'metric_task.conf' will be read when the program is running,
     the location of them is:
     a-detection.conf: xxx/a-detection.conf.
     metric_config: xxx/metric_task.conf.
```

