# File and Directory Security

## Ensure Database Installation Directory Permission Minimization

### Description

`${GAUSSHOME}` is the installation directory of openGauss. To prevent files in the installation directory from being maliciously tampered with or damaged, restrict access to non-database installation users. Proper permission settings ensure the security of the database system.

### Implementation

**Check Method:**

Execute the following shell command. If any file or directory under `${GAUSSHOME}` is returned, the check fails.

```bash
find -L ${GAUSSHOME} -prune \( ! -user ${GAUSSUSER} -o ! -group ${GAUSSGROUP} -o -perm /g=rwx,o=rwx \)
```

Configure the environment variables `${GAUSSUSER}` and `${GAUSSGROUP}` as the database installation user and user group.

**Fix Method:**

Use the `chmod` command to set permissions on `${GAUSSHOME}` so that only the database installation user (the owner) can read, write, and execute files. Other users and groups have no write permission.

```bash
chmod 0700 ${GAUSSHOME}
```

## Ensure Shared Directory Permission Minimization

### Description

The `${GAUSSHOME}/share` directory contains shared openGauss components. To prevent these components from being maliciously tampered with or damaged, restrict access to non-database installation users.

### Implementation

**Check Method:**

Execute the following shell command. If the `${GAUSSHOME}/share` directory is returned, the check fails.

```bash
find ${GAUSSHOME}/share -prune -perm /g=rwx,o=rwx
```

**Fix Method:**

```bash
chmod 0700 ${GAUSSHOME}/share
```

## Ensure Binary File Directory Permission Minimization

### Description

The `${GAUSSHOME}/bin` directory contains database binary files. To prevent binaries from being maliciously tampered with—which threatens information security—restrict access to non-database installation users.

### Implementation

**Check Method:**

Execute the following shell command. If the `${GAUSSHOME}/bin` directory is returned, the check fails.

```bash
find ${GAUSSHOME}/bin -prune -perm /g=rwx,o=rwx
```

**Fix Method:**

```bash
chmod 0700 ${GAUSSHOME}/bin
```

## Ensure Data Directory Permission Minimization

### Description

The data directory contains user data files. To prevent data files from being maliciously tampered with—which threatens customer data security—restrict access to non-database installation users.

### Implementation

**Check Method:**

Execute the following shell command. If the data directory is returned, the check fails.

```bash
find ${GAUSSDATA} -prune \( ! -user ${GAUSSUSER} -o ! -group ${GAUSSGROUP} -o -perm /g=rwx,o=rwx \)
```

Here, `${GAUSSDATA}` is the DN data directory. Query this directory using the GUC parameter `data_directory`. Configure `${GAUSSUSER}` and `${GAUSSGROUP}` as the database installation user and user group.

**Fix Method:**

```bash
chmod 0700 ${GAUSSDATA}
```

Where `${GAUSSDATA}` is the DN data directory.

## Ensure Log Archive Directory Permission Minimization

### Description

The `${GAUSSHOME}/archive` directory stores archived logs. When `wal_level` is set to `archive`, set directory permissions to `0700` to ensure access only by the database installation and runtime user.

### Implementation

**Check Method:**

Execute the following shell command. If the `${GAUSSHOME}/archive` directory is returned, the check fails. If this directory does not exist, skip this check.

```bash
find ${GAUSSHOME}/archive -prune \( ! -user ${GAUSSUSER} -o ! -group ${GAUSSGROUP} -o -perm /g=rwx,o=rwx \)
```

Configure `${GAUSSUSER}` and `${GAUSSGROUP}` as the database installation user and user group.

**Fix Method:**

```bash
chmod 0700 ${GAUSSHOME}/archive
```

## Ensure File Permission Minimization for postgresql.conf

### Description

The `postgresql.conf` file contains database runtime configuration parameters. To prevent malicious tampering, restrict access to the database installation user only.

### Implementation

**Check Method:**

Execute the following shell command. If the `postgresql.conf` file path is returned, the check fails.

```bash
find ${GAUSSDATA}/postgresql.conf \( ! -user ${GAUSSUSER} -o ! -group ${GAUSSGROUP} -o -perm /u=x,g=rwx,o=rwx \)
```

Here, `${GAUSSDATA}` is the DN data directory. Query this directory using the GUC parameter `data_directory`. Configure `${GAUSSUSER}` and `${GAUSSGROUP}` as the database installation user and user group.

**Fix Method:**

```bash
chmod 0600 ${GAUSSDATA}/postgresql.conf
```

Here, `${GAUSSDATA}` is the DN data directory.

## Ensure File Permission Minimization for pg_hba.conf

### Description

The `pg_hba.conf` file contains client connection configurations, including authentication methods. To prevent malicious tampering, restrict access to the database installation user only.

### Implementation

**Check Method:**

Execute the following shell command. If the `pg_hba.conf` file path is returned, the check fails.

```bash
find ${GAUSSDATA}/pg_hba.conf \( ! -user ${GAUSSUSER} -o ! -group ${GAUSSGROUP} -o -perm /u=x,g=rwx,o=rwx \)
```

Here, `${GAUSSDATA}` is the DN data directory. Query this directory using the GUC parameter `data_directory`. Configure `${GAUSSUSER}` and `${GAUSSGROUP}` as the database installation user and user group.

**Fix Method:**

```bash
chmod 0600 ${GAUSSDATA}/pg_hba.conf
```

Here, `${GAUSSDATA}` is the DN data directory.

## Ensure Log Directory Permission Minimization

### Description

`${GAUSSLOG}` is the database log directory. Log files contain extensive runtime information. To prevent malicious tampering or damage—which threatens data and information security—restrict access to non-database installation users.

### Implementation

**Check Method:**

Execute the following shell command. If the `${GAUSSLOG}` directory is returned, the check fails.

```bash
find ${GAUSSLOG} -prune \( ! -user ${GAUSSUSER} -o ! -group ${GAUSSGROUP} -o -perm /g=rwx,o=rwx \)
```

Configure `${GAUSSUSER}` and `${GAUSSGROUP}` as the database installation user and user group.

**Fix Method:**

```bash
chmod 0700 ${GAUSSLOG}
```