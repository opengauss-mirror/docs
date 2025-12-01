# DeepSQL: AI Algorithm in the Library<a name="EN-US_TOPIC_0000001138595127"></a>

## Availability<a name="section76684290441"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section106701152184410"></a>

The database DeepSQL feature implements the DB4AI function, that is, the AI algorithm is implemented in the database to better support quick analysis and computing of big data. A complete set of SQL-based machine learning, data mining, and statistics algorithms is provided. Users can directly use SQL statements to perform machine learning. DeepSQL can abstract the end-to-end R&D process from data to models. With the bottom-layer engine and automatic optimization, technical personnel with basic SQL knowledge can complete most machine learning model training and prediction tasks. The entire analysis and processing are running in the database engine. Users can directly analyze and process data in the database without transferring data between the database and other platforms. This avoids unnecessary data movement between multiple environments.

## Benefits<a name="section1741452074516"></a>

Users can directly use AI algorithms in the database to avoid extra costs caused by migration of a large amount of data. In addition, models can be centrally managed by the database, which is easy to use.

## Description<a name="section1680916180471"></a>

DeepSQL is an enhancement to openGauss DB4AI. DeepSQL encapsulates common machine learning algorithms into UDF and supports more than 60 general algorithms, including regression algorithms \(such as linear regression, logistic regression, and random forest\), classification algorithms \(such as KNN\), and clustering algorithms \(such as K-means\). In addition to basic machine learning algorithms, graph-related algorithms are also included, such as algorithms about the shortest path and graph diameter. Also, it supports data processing \(such as PCA\), sparse vectors, common statistical algorithms \(such as covariance and Pearson coefficient calculation\), training set and test set segmentation, and cross validation.

## Enhancements<a name="section1715553994720"></a>

None

## Constraints<a name="section11980155994711"></a>

-   Python 2.7.12 or later has been installed.
-   The database supports the PL/Python stored procedure.
-   You have the administrator permission to install the algorithm library.

## Dependencies<a name="section850692718486"></a>

None

