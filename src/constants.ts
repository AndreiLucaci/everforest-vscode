export type ThemeVariant = "dark" | "light";

export const THEME_VARIANT = {
  DARK: "dark" as ThemeVariant,
  LIGHT: "light" as ThemeVariant,
} as const;

export const THEME_NAMES = {
  DARK: "Everforest Pro Dark",
  DARK_COZY: "Everforest Pro Dark Cozy",
  DARK_VIBRANT: "Everforest Pro Dark Vibrant",
  LIGHT: "Everforest Pro Light",
  LIGHT_COZY: "Everforest Pro Light Cozy",
  LIGHT_VIBRANT: "Everforest Pro Light Vibrant",
} as const;

export const THEME_PAIRS = [
  { dark: THEME_NAMES.DARK, light: THEME_NAMES.LIGHT },
  { dark: THEME_NAMES.DARK_COZY, light: THEME_NAMES.LIGHT_COZY },
  { dark: THEME_NAMES.DARK_VIBRANT, light: THEME_NAMES.LIGHT_VIBRANT },
] as const;

export const DEFAULT_TIMES = {
  LIGHT_THEME: "07:00",
  DARK_THEME: "19:00",
} as const;

export const DEFAULT_SCHEDULE = [
  { time: "07:00", theme: THEME_NAMES.LIGHT },
  { time: "19:00", theme: THEME_NAMES.DARK },
] as const;

export const CONFIG_KEYS = {
  AUTO_SWITCH: "autoSwitch.enabled",
  SCHEDULE: "autoSwitch.schedule",
} as const;

export const INTERVALS = {
  SCHEDULE_CHECK: 60000, // 1 minute
} as const;
