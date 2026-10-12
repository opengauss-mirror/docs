# Operating Environment Configuration

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T08:05:10.892Z -->

## Ensure File Permission Mask Is Configured Correctly

### Description

In a Linux runtime environment, the default permissions for newly created files are determined by the file permission mask (umask). To prevent database files from being accessed or tampered with by other users, ensure that the umask is set to 0077. This setting restricts file access exclusively to the database runtime user. The umask value is typically configured in `/etc/bashrc`, `/etc/profile`, `$HOME/.bash_profile`, or `$HOME/.bashrc`.

### Implementation

**Check Method:**

Run the `umask` command to query the configured value.

```bash
$ umask
0077
```

**Fix Method:**

Step 1: Take the `$HOME/.bashrc` file as an example. Use the vi command to edit the file and set `umask` to `0077`.

```bash
umask 0077
```

Step 2: Run `source $HOME/.bashrc` to apply the environment variable changes.

```bash
source $HOME/.bashrc
```

## Ensure Process Information Is Hidden from Other Users

### Description

To prevent non-database runtime users from collecting runtime process information using OS commands such as `ps` and `top`, it is recommended to use the `hidepid` mount option to hide processes from other users. This configuration ensures that only the root user can view all processes, while regular users can only see their own processes. This mitigates the risk of process information leakage and enhances the security of the database runtime environment.

### Implementation

**Check Method:**

Run the following command to check whether the `hidepid` option is configured for `/proc`. If `hidepid=2` is configured, the check passes; otherwise, it fails.

```bash
# mount | grep "proc on /proc" | grep hidepid
proc on /proc type proc (rw,nosuid,nodev,noexec,relatime,hidepid=2)
```

**Fix Method:**

Run the following `mount` command as the root user to add the `hidepid=2` option to `/proc`.

```bash
# mount -o remount,rw,nosuid,nodev,noexec,relatime,hidepid=2 /proc
```

Edit the `/etc/fstab` file and add or modify the configuration as follows to enable automatic protection at system boot.

```bash
proc /proc proc defaults,nosuid,nodev,noexec,relatime,hidepid=2 0 0
```

## Ensure NTP Clock Synchronization Is Enabled

### Description

Network Time Protocol (NTP) is a protocol used to synchronize the clocks of computers across a network. Configuring NTP synchronizes the system clocks of hosts in the database service to Universal Time Coordinated (UTC). Unsynchronized system clocks or significant time discrepancies among hosts can lead to abnormal database operation.

### Implementation

**Check Method:**

Run the following shell command to check whether the ntpd service is active. If the `Active` field returns "active (running)", the check passes. If it returns "inactive (dead)", the check fails.

```bash
# service ntpd status 2>&1 | grep Active
   Active: inactive (dead)
```

**Fix Method:**

Configure an appropriate NTP server in the `/etc/ntp.conf` file, and then run the following command to restart the ntpd service:

```bash
# service ntpd restart
```