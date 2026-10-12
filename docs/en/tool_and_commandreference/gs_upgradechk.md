# gs_upgradechk

## Background

`gs_upgradechk` is a metadata integrity checking tool used after an upgrade. Written in Python 3, it verifies metadata after a database upgrade to check whether any metadata corruption occurred during the upgrade process. Currently, it only supports checking built-in and initdb metadata. User-created tables and other objects are not checked at this time.

Main features:

- **Export**: Generate a metadata verification map based on a specified database.
- **Check**: Verify the database metadata against a metadata verification map and generate a report.

## Constraints

- By default, only databases with A compatibility are supported unless a parameter is specified to indicate otherwise.

## How to Use

On a system where openGauss is installed, run the following command to use this tool:

```angular2html
python3 gs_upgradechk [ action [ config-params, ... ] ]
```

The `action` parameter supports the following options:

```angular2html
export                     Export
check | verify             Check/Verify
help | -h | -? | --help    Help

The default value is help. Case-insensitive.
```

The `config-params` parameter supports the following options and default values:

```config
-p  | --port : 16666
-F  | --report-format : md
-M  | --report-mode : summary
-v  | --vmap : ''
-d  | --debug
-D  | --database
```

- **port**: Database port number.
- **debug**: Prints more logs for troubleshooting the tool. Takes no argument. Off by default; enabled when specified.
- **report-format**: Verification report format. Currently, only Markdown is supported.
- **report-mode**: Level of detail in the verification report. Supports `summary` and `detail` modes. The default is `summary`. This option only affects the level of detail in the generated report and does not affect the scope of verification. `detail` organizes and outputs all verification rules regardless of whether they pass or fail, which takes more time to compile. `summary` only organizes and outputs items with errors.
- **vmap**: Specifies the metadata verification map. If specified, the tool uses the specified vmap during verification. Otherwise, it automatically detects the target database version and downloads and uses a pre-generated vmap from the network.
- **database**: Specifies the database to use for export or verification. Allows specifying a non-A database.

The default standard vmap download URL is:

```angular2html
https://opengauss.obs.cn-south-1.myhuaweicloud.com/upgrade_checker/standard_meta_verify_map_XX_X.X.X.vmap
```

Where `XX` represents the tool version and `X.X.X` represents the openGauss version.

## Tool Structure

```dir introduce
| OM/scripts
    |d-- upgrade-checker                Main tool code and resources
        |d-- utils                          Tool code - Common utilities
        |d-- style                          Tool code - Report styles
        |d-- rules                          Tool code - Rule components
        |f-- project.py                     Tool code
        |f-- ..                             Tool code
        |d-- dev                            Developer convenience scripts
        |d-- workspace                      Default tool working directory[1]
            |d-- vmaps                        - Location for baseline verification maps
            |d-- project_name-workspace       - Working directory for a single check run
                |f-- run.log                    - Runtime log
        |d-- results                        Default tool results directory[2]
            |f- user-created-vmap            - User-generated verification map
            |f- report                       - Report for a single check run
    |f-- gs_upgradechk                  Tool entry script
```

Note: [1] Tool working directory and [2] tool results directory use the OM log paths when the OM environment variables are correctly configured.

## Verification Principle

Database metadata essentially consists of system tables and their data, as well as some data hard-coded in the openGauss binary program. During an upgrade, after switching the binaries, the hard-coded content is also switched. Therefore, for metadata verification, it is only necessary to verify the system tables and their data.

The most straightforward way to verify system tables and data is through query statements. Therefore, this tool is essentially a utility that executes a series of query statements, analyzes whether the results meet expectations, and compiles a report.

The three key elements in the above definition—query statements, expected results, and reports—are defined as follows:

- **Rule**: A query statement used to verify a specific item. The query result of this statement must be organized as key-value pairs, where the key helps clearly identify each column of the result for easier analysis and compilation. For example: `select oid as key, relname as val from pg_class where oid < 10000`. Additionally, it distinguishes built-in, initdb, and user data as much as possible.
- **Metadata Verification Map (VerifyMap)**: A collection of rules and their expected outputs.
- **Report**: A summary of the comparative analysis between rule execution results and expected results.
