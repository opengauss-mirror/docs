# cm\_persit<a name="EN-US_TOPIC_0000001322542352"></a>

## Function<a name="section125419154813"></a>

The cm\_persist tool is used to preempt the disk lock on the shared storage device. This tool is an internal tool automatically invoked by CM Server. You are not advised to use it.

## Prerequisites<a name="section14602518109"></a>

-   The storage device supports the SCSI-3 and CAW protocols.
-   The cm\_persist tool has the CAP\_SYS\_RAWIO permission. Otherwise, the cm\_persist tool cannot invoke the ioctl system function to operate the shared storage device.

## Syntax<a name="section554725769"></a>

-   Run the **cm\_persist** command.

    ```
    cm_persist [DEVICEPATH] [INSTANCE_ID] [OFFSET]
    ```

-   Display the help information.

    ```
    cm_persist -? | --help
    ```


## Parameter Description<a name="section187851955142614"></a>

-   DEVICEPATH

    Specifies the path to the shared storage device.

-   INSTANCE\_ID

    Specifies the ID of the CM Server instance. You can run the **cm\_ctl query -Cv** command to query the ID.

-   OFFSET

    Preempts the disk lock at the specified disk offset address.

-   -?,--help

    Prints help information.
