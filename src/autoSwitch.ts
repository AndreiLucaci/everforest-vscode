import { workspace } from "vscode";
import {
  THEME_NAMES,
  THEME_VARIANT,
  DEFAULT_TIMES,
  CONFIG_KEYS,
  INTERVALS,
  ThemeVariant,
} from "./constants";

export class AutoSwitcher {
  private scheduleTimer: NodeJS.Timeout | undefined;
  private lastTheme: ThemeVariant | undefined;
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

    const lightTime =
      config.get<string>(CONFIG_KEYS.LIGHT_THEME_TIME) ||
      DEFAULT_TIMES.LIGHT_THEME;
    const darkTime =
      config.get<string>(CONFIG_KEYS.DARK_THEME_TIME) ||
      DEFAULT_TIMES.DARK_THEME;

    const lightMinutes = this.parseTime(lightTime);
    const darkMinutes = this.parseTime(darkTime);

    // Validate times
    if (lightMinutes === null || darkMinutes === null) {
      console.error(
        `[Everforest Pro] Invalid time format. Light: ${lightTime}, Dark: ${darkTime}`
      );
      return;
    }

    // If times are identical, don't switch
    if (lightMinutes === darkMinutes) {
      return;
    }

    let targetTheme: ThemeVariant;

    if (lightMinutes < darkMinutes) {
      // Normal case: light time is before dark time (e.g., 7:00 to 19:00)
      targetTheme =
        currentMinutes >= lightMinutes && currentMinutes < darkMinutes
          ? THEME_VARIANT.LIGHT
          : THEME_VARIANT.DARK;
    } else {
      // Wrap-around case: dark time is before light time (e.g., 19:00 to 7:00 next day)
      targetTheme =
        currentMinutes >= darkMinutes && currentMinutes < lightMinutes
          ? THEME_VARIANT.DARK
          : THEME_VARIANT.LIGHT;
    }

    if (this.lastTheme !== targetTheme) {
      this.switchTheme(targetTheme);
      this.lastTheme = targetTheme;
    }
  }

  private async switchTheme(theme: ThemeVariant) {
    const themeName =
      theme === THEME_VARIANT.DARK ? THEME_NAMES.DARK : THEME_NAMES.LIGHT;
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
