# Index Recommendation<a name="EN-US_TOPIC_0000001105075482"></a>

## Availability<a name="section17365142913365"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section168782058113611"></a>

This feature serves as an intelligent database index recommendation tool that covers multiple task levels and application scenarios. It provides the single-query index recommendation function, virtual index function, and workload-level index recommendation function to provide reliable index recommendations for users.

## Benefits<a name="section11716103034018"></a>

This feature provides the quick and reliable index recommendation function, greatly simplifying the work of O&M personnel.

## Description<a name="section611314434114"></a>

The single-query index recommendation function allows users to directly perform operations in the database. This feature generates recommended indexes for a single query statement entered by users based on the semantic information of the query statement and the statistics of the database. The virtual index function allows users to directly perform operations in the database. This feature simulates the creation of a real index to avoid the time and space overhead required for creating a real index. Based on the virtual index, users can evaluate the impact of the index on the specified query statement by using the optimizer. The workload-level index recommendation can be used by running scripts outside the database. This feature uses the workload of multiple DML statements as the input to generate a batch of indexes that can optimize the overall workload execution performance.

## Enhancements<a name="section65821918104310"></a>

None.

## Constraints<a name="section163509419432"></a>

The database is normal, and the client can be connected properly.

The gsql tool has been installed by the current user, and the tool path has been added to the  _PATH _environment variable.

An environment running Python 3.6 or later is available.

## Dependencies<a name="section10471835443"></a>

None.

