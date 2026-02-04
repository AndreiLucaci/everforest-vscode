import { workspace } from "vscode";
import { CONFIG_KEYS, INTERVALS, DEFAULT_SCHEDULE } from "./constants";

interface ScheduleEntry {
  time: string;
  theme: string;
}

export class AutoSwitcher {
  private scheduleTimer: NodeJS.Timeout | undefined;
  private lastTheme: string | undefined;
  private lastCheckMinute = -1;

  start() {
    // Stop any existing timer first
    this.stop();

    const config = workspace.getConfiguration("everforestPro");
    const autoSwitch = config.get<boolean>(CONFIG_KEYS.AUTO_SWITCH);

    if (!autoSwitch) {
      return;
    }

    this.setupScheduleSync();
  }

  stop() {
    if (this.scheduleTimer) {
      clearInterval(this.scheduleTimer);
      this.scheduleTimer = undefined;
    }
    this.lastTheme = undefined;
    this.lastCheckMinute = -1;
  }

  private setupScheduleSync() {
    // Initial check
    this.switchBasedOnSchedule();

    // Check every minute
    this.scheduleTimer = setInterval(() => {
      this.switchBasedOnSchedule();
    }, INTERVALS.SCHEDULE_CHECK);
  }

  private parseTime(timeStr: string): number | null {
    const match = timeStr.match(/^(\d{1,2}):(\d{2})$/);
    if (!match) return null;

    const hour = parseInt(match[1], 10);
    const min = parseInt(match[2], 10);

    if (hour < 0 || hour > 23 || min < 0 || min > 59) {
      return null;
    }

    return hour * 60 + min;
  }

  private switchBasedOnSchedule() {
    // Check if feature is still enabled
    const config = workspace.getConfiguration("everforestPro");
    const autoSwitch = config.get<boolean>(CONFIG_KEYS.AUTO_SWITCH);

    if (!autoSwitch) {
      this.stop();
      return;
    }

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    // Skip if we already processed this minute
    if (currentMinutes === this.lastCheckMinute) {
      return;
    }
    this.lastCheckMinute = currentMinutes;

    const schedule =
      config.get<ScheduleEntry[]>(CONFIG_KEYS.SCHEDULE) || DEFAULT_SCHEDULE;

    if (!Array.isArray(schedule) || schedule.length === 0) {
      console.error("[Everforest Pro] Invalid or empty schedule");
      return;
    }

    // Parse and sort schedule entries by time
    const parsedSchedule = schedule
      .map((entry) => ({
        minutes: this.parseTime(entry.time),
        theme: entry.theme,
        original: entry,
      }))
      .filter((entry) => entry.minutes !== null)
      .sort((a, b) => a.minutes! - b.minutes!);

    if (parsedSchedule.length === 0) {
      console.error("[Everforest Pro] No valid schedule entries");
      return;
    }

    // Find the active theme based on current time
    let activeTheme: string | undefined;

    // Find the last schedule entry that has passed
    for (let i = parsedSchedule.length - 1; i >= 0; i--) {
      if (currentMinutes >= parsedSchedule[i].minutes!) {
        activeTheme = parsedSchedule[i].theme;
        break;
      }
    }

    // If no entry has passed yet today, use the last entry from "yesterday"
    if (!activeTheme) {
      activeTheme = parsedSchedule[parsedSchedule.length - 1].theme;
    }

    if (this.lastTheme !== activeTheme) {
      this.switchTheme(activeTheme);
      this.lastTheme = activeTheme;
    }
  }

  private async switchTheme(themeName: string) {
    const currentTheme = workspace
      .getConfiguration("workbench")
      .get<string>("colorTheme");

    // Only switch if not already using the target theme
    if (currentTheme !== themeName) {
      await workspace
        .getConfiguration("workbench")
        .update("colorTheme", themeName, true);
    }
  }
}
