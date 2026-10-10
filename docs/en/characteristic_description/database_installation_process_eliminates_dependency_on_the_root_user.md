# Installation Without Root User Dependency

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:05:48.304Z pushedAt=2026-09-22T11:12:32.609Z -->

## Availability<a name="section56086982"></a>

This feature has been available since openGauss 6.0.0-RC1. It was enhanced in openGauss 6.0.0 LTS.

## Feature Overview<a name="section35020791"></a>

The database installation process no longer depends on the root user. The processes involved this time include pre-installation, installation, upgrade, expansion, and verification. All these processes allow users to operate directly as an ordinary user without using the root user.

Because the three tools for pre-installation, verification, and expansion all require the root user, while the other tools are already executed by ordinary users, the tools involved this time are: gs_preinstall, gs_checkos, and gs_expansion.

In openGauss 6.0.0-RC1, the three tools for pre-installation, verification, and expansion are adapted to ensure that the database can be operated by an ordinary user.

In openGauss 6.0.0 LTS, the prerequisite operations previously required for pre-installation are optimized.

## Customer Benefits<a name="section46751668"></a>

In the openGauss installation process, the root user is used during pre-installation, while a sub-user is used during installation. This makes operations very cumbersome and error-prone for users; some users cannot even obtain root user privileges. This database installation process removes the dependency on the root user, so that users no longer need to use the root user for the corresponding operations and can perform them directly with an ordinary user.

## Feature Description<a name="section18111828"></a>

The database installation process no longer depends on the root user. The processes involved this time include pre-installation, installation, upgrade, expansion, and verification. All these processes allow users to perform operations without using the root user. They can be performed directly by an ordinary user.

Since the three tools for pre-installation, verification, and expansion all run as the root user, while other tools are already executed by ordinary users, the tools involved this time are gs_preinstall, gs_checkos, and gs_expansion.

openGauss 6.0.0-RC1 adapts the three tools for pre-installation, verification, and expansion to ensure that the database can be operated by an ordinary user.

openGauss 6.0.0 LTS optimizes some prerequisite operations that were previously required for pre-installation. For example: 1. The operation of establishing trust using root is removed; 2. The operation of setting the kernel semaphore size using root is removed; 3. The operation of granting scheduled task privileges to ordinary users is removed.

## Feature Enhancements<a name="section28788730"></a>

Since openGauss 6.0.0-RC1, an ordinary user can install, verify, and expand the database, which to some extent solves the problem of a lack of root user privileges. Of course, the previous root-based operations are also retained.

The tools involved in openGauss 6.0.0-RC1 adaptation are gs_preinstall, gs_checkos, and gs_expansion.

The tool involved in openGauss 6.0.0 LTS adaptation is gs_preinstall.

## Feature Constraints<a name="section06531946143616"></a>

Note the following feature constraints:

1. Some operations still cannot be performed by an ordinary user and must be executed by the root user in advance. For details, see the following document.

    <a href="../installation_guide/installation_overview.md">Prerequisites</a>

2. If the machine restarts or all processes of the ordinary user are lost, the database loses trust. In this case, manually start the trust process first, and then start the database.

The command for starting the trust process must be executed on all nodes separately.

```
source ENVFILE && python3 ${GPHOME}/script/local/CheckSshAgent.py
```

The command for starting the database is executed on the host.

```
source ENVFILE && gs_om -t start or gs_om -t restart
```

## Dependencies<a name="section57771982"></a>

None.

## References<a name="section57771982"></a>

Open-source community address: <https://gitcode.com/opengauss/openGauss-OM>

gs_checkos documentation: <a href="../tool_and_commandreference/gs_checkos.md">Check</a>

gs_preisntall documentation: <a href="../tool_and_commandreference/gs_preinstall.md">Preinstallation</a>

gs_expansion documentation: <a href="../tool_and_commandreference/gs_expansion.md">Expansion</a>
