# Anomaly-detection: Database Indicator Collection, Forecasting, and Exception Monitoring<a name="EN-US_TOPIC_0000001091892904"></a>

## Availability<a name="section1394818443613"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section36382403357"></a>

Anomaly\_detection is an AI tool integrated into openGauss and can be used to collect and predict database indicators, as well as monitor and diagnose exceptions. It is a component in the dbmind suite. The following information can be collected: IO\_Read, IO\_Write, CPU\_Usage, Memory\_Usage, and disk space occupied by the database. Anomaly\_detection can monitor multiple indicators at the same time and predict the change trend of each indicator. When detecting that an indicator exceeds the manually set threshold in a certain period or at a certain moment in the future, the tool generates an alarm through logs.

## Benefits<a name="section5621105733410"></a>

-   This greatly simplifies the work of O&M personnel, releases a large number of labor resources, and reduces costs for the company.
-   This feature helps users detect exceptions in advance and prevent database exceptions from causing greater loss.

## Description<a name="section117712392341"></a>

Anomaly\_detection consists of agent and detector. The agent and openGauss database are deployed on the same server. The agent module provides the following functions: Periodically collect database indicator data and store the collected data in the buffer queue. Periodically send the data in the buffer queue to the detector.

The detector module communicates with the agent module based on HTTP or HTTPS. Therefore, the detector module can be deployed on any server that can communicate with the agent module. The detector module has the following functions: Receive the data sent by the agent and cache the collected data locally. Predict the future change trend of the indicator and report alarms based on the collected database indicator data.

## Enhancements<a name="section144513469345"></a>

None

## Constraints<a name="section1613131119346"></a>

-   The database is normal, and the data directory has been written into environment variables and named  **PGDATA**.
-   If you log in to the database host as a Linux user, add  *$GAUSSHOME***/bin**  to the  *PATH _environment variable so that you can directly run database O&M tools, such as gsql, gs\*guc, and gs\_ctl.
-   The recommended Python version is Python 3.6 or later. The required dependency has been installed in the operating environment, and the optimization program can be started properly.
-   This tool consists of the agent and detector. Data is transmitted between the agent and detector in HTTP or HTTPS mode. Therefore, ensure that the agent server can communicate with the detector server properly.
-   Detector module runs the server and monitor services, which need to be started separately.
-   If HTTPS is used for communication, you need to prepare the CA certificate, and certificates and keys of the agent and detector, and save them to  **ca**,  **agent**, and  **server**  in the  **root**  directory of the project, respectively. In addition, you need to save the key encryption password to  **pwf**  of the certificate, and set the permission to  **600**  to prevent other users from performing read and write operations. You can also use the script in the  **share**  directory to generate certificates and keys.

## Dependencies<a name="section4228145683310"></a>

None
