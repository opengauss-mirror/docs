# Overview<a name="EN-US_TOPIC_0000001240671135"></a>

The trend prediction module predicts the future time series change trend based on historical time series data. The framework of this module has been decoupled to flexibly change prediction algorithms. This module can automatically select algorithms for different feature time series. The LR regression algorithm for linear feature time series prediction and the ARIMA algorithm for non-linear feature prediction are supported. At present, this module can cover the accurate prediction of linear time series, non-linear time series and periodic time series.

