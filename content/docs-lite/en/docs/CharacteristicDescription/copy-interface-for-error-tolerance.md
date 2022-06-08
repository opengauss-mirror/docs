# Copy Interface for Error Tolerance<a name="EN-US_TOPIC_0000001105395254"></a>

## Availability<a name="section56086982"></a>

This feature is available since openGauss 1.0.0.

## Introduction<a name="section35020791"></a>

Certain errors that occur during the copy process are imported to a specified error table without interrupting the process.

## Benefits<a name="section46751668"></a>

Refine the copy function and improve the tolerance and robustness to common errors such as invalid formats.

## Description<a name="section18111828"></a>

openGauss provides the encapsulated copy error tables for creating functions and allows users to specify error tolerance options when using the  **Copy From**  statement. In this way, errors related to parsing, data format, and character set during the execution of the  **Copy From**  statement are recorded in the error table instead of being reported and interrupted. Even if a small amount of data in the target file of  **Copy From**  is incorrect, the data can be imported to the database. You can locate and rectify the fault in the error table later.

## Enhancements<a name="section28788730"></a>

None

## Constraints<a name="section06531946143616"></a>

For details, see "Importing Data \> Running the COPY FROM STDIN Statement to Import Data \> Handling Import Errors" in the  _Developer Guide_.

## Dependencies<a name="section57771982"></a>

None

