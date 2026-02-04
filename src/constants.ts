export type ThemeVariant = "dark" | "light";

export const THEME_VARIANT = {
  DARK: "dark" as ThemeVariant,
  LIGHT: "light" as ThemeVariant,
} as const;

export const THEME_NAMES = {
  DARK: "Everforest Pro Dark",
  LIGHT: "Everforest Pro Light",
} as const;

export const DEFAULT_TIMES = {
  LIGHT_THEME: "07:00",
  DARK_THEME: "19:00",
} as const;

export const CONFIG_KEYS = {
  AUTO_SWITCH: "autoSwitch.enabled",
  LIGHT_THEME_TIME: "autoSwitch.lightThemeTime",
  DARK_THEME_TIME: "autoSwitch.darkThemeTime",
} as const;

export const INTERVALS = {
  SCHEDULE_CHECK: 60000, // 1 minute
} as const;
