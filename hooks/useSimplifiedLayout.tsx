"use client";

import { useDashboardState } from "@/hooks/useDashboardState";

/**
 * Trimmed-down report layout (October 2026 revisions): drops the Follower
 * Growth, Traffic Trend, Total vs Direct Revenue and Direct Booking Split
 * charts on the Performance dashboard, and the Portfolio Snapshot, the
 * per-campaign charts and the Campaign Efficiency panel on Meta Ads.
 *
 * Admin-only for now so it can be reviewed before clients see it. To roll it
 * out to clients, return true here.
 */
export function useSimplifiedLayout(): boolean {
  const { isAdmin } = useDashboardState();
  return isAdmin;
}
