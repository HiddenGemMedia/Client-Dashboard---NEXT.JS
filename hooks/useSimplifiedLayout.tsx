"use client";

/**
 * Trimmed-down report layout (October 2026 revisions): drops the Follower
 * Growth, Traffic Trend, Total vs Direct Revenue and Direct Booking Split
 * charts on the Performance dashboard, and the Portfolio Snapshot, the
 * per-campaign charts and the Campaign Efficiency panel on Meta Ads; shows
 * current-month figures, labels and ("current:YYYY-MM") takeaways.
 *
 * Reviewed on admin first, then rolled out to clients on 2026-10-16. Return
 * false here to bring back the previous 3-month layout for everyone.
 */
export function useSimplifiedLayout(): boolean {
  return true;
}
