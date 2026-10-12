# Delaying Entry into Maximum Availability Mode

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-14T08:03:54.763Z -->

## Availability<a name="section118411122194813"></a>

This feature has been available since openGauss 3.0.0.

## Introduction<a name="section13375160194919"></a>

This feature supports delaying the primary node's entry into Maximum Availability mode.

## Customer Value<a name="section19340161511499"></a>

When network instability between the primary and synchronous standby nodes—or other issues—causes the primary to detect standby disconnection, and the Maximum Availability mode is enabled, the primary remains in Maximum Protection mode within a configured time window. It only switches to Maximum Availability mode once this window expires.

This prevents frequent oscillations between Maximum Protection and Maximum Availability modes caused by transient network jitter or process flapping.

## Feature Description<a name="section54601932194912"></a>

When the `most_available_sync` parameter is set to `on`, in a primary-standby deployment, if a synchronous standby fails causing the cluster to lose the required number of synchronous standbys (refer to `synchronous_standby_names` for details), the system enforces a grace period defined by the `keep_sync_window` parameter. Within this window, the primary retains Maximum Protection mode—meaning transaction commits on the primary are blocked—thereby delaying entry into Maximum Availability mode.

If the synchronous standby recovers and the required number of synchronous standbys is restored before the keep_sync_window expires, transaction blocking ceases, and the system returns to normal operation.

## Feature Enhancements<a name="section1658716245019"></a>

None.

## Feature Constraints<a name="section13118121915014"></a>

- This feature takes effect only when the Maximum Availability mode is enabled.

- Enabling this feature may impact RPO. If the primary node fails within the configured timeout window, transactions commit only locally and are not synchronized to the failed synchronous standby.

- This feature does not apply to cascaded standbys.

## Dependencies<a name="section24082349505"></a>

This feature depends on the Maximum Availability mode.