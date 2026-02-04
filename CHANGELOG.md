# Change Log

All notable changes to the "everforest-pro" extension will be documented in this file.

## 2.0.0

### 🎨 New Theme Variants

**6 Theme Options Available!** Choose from pre-configured variants without any settings:

**Dark Themes:**

- **Everforest Pro Dark** - Balanced contrast (default, medium)
- **Everforest Pro Dark Cozy** - Softer backgrounds (soft contrast)
- **Everforest Pro Dark Vibrant** - Higher contrast (hard contrast)

**Light Themes:**

- **Everforest Pro Light** - Balanced contrast (default, medium)
- **Everforest Pro Light Cozy** - Softer backgrounds (soft contrast)
- **Everforest Pro Light Vibrant** - Higher contrast (hard contrast)

Simply select your preferred variant from the theme picker - no configuration required!

### 🚨 Breaking Changes

**Settings Reorganization** - All settings have been restructured into logical groups:

**Old → New:**

- `everforestPro.darkContrast` → `everforestPro.theme.darkContrast`
- `everforestPro.lightContrast` → `everforestPro.theme.lightContrast`
- `everforestPro.darkWorkbench` → `everforestPro.theme.darkWorkbench`
- `everforestPro.lightWorkbench` → `everforestPro.theme.lightWorkbench`
- `everforestPro.darkCursor` → `everforestPro.theme.darkCursor`
- `everforestPro.lightCursor` → `everforestPro.theme.lightCursor`
- `everforestPro.darkSelection` → `everforestPro.theme.darkSelection`
- `everforestPro.lightSelection` → `everforestPro.theme.lightSelection`
- `everforestPro.italicKeywords` → `everforestPro.theme.italicKeywords`
- `everforestPro.italicComments` → `everforestPro.theme.italicComments`
- `everforestPro.diagnosticTextBackgroundOpacity` → `everforestPro.theme.diagnosticTextBackgroundOpacity`
- `everforestPro.highContrast` → `everforestPro.theme.highContrast`
- `everforestPro.autoSwitch` → `everforestPro.autoSwitch.enabled`
- `everforestPro.lightThemeTime` → `everforestPro.autoSwitch.lightThemeTime`
- `everforestPro.darkThemeTime` → `everforestPro.autoSwitch.darkThemeTime`

**Removed:**

- `everforestPro.autoSwitchMode` - OS theme following has been removed due to reliability issues. Only scheduled theme switching is now supported.

### ✨ New Features

- **Flexible Auto-Switch Schedule** - Define custom schedules with any theme at any time. No longer limited to just light/dark - mix Cozy, Vibrant, and standard themes throughout your day!
- **Improved Settings Organization** - Settings are now grouped into `theme` and `autoSwitch` sections for better discoverability
- **Better Auto-Switch Implementation** - More reliable and efficient theme switching with proper cleanup and validation
- **Enhanced Timer Logic** - Prevents duplicate work, validates inputs, and auto-disables when not needed
- **Proper Extension Lifecycle** - Timer cleanup on deactivation prevents memory leaks

### 🐛 Bug Fixes

- Fixed timer not stopping when auto-switch is disabled mid-session
- Fixed potential crashes from malformed time inputs
- Fixed edge cases when light and dark times are identical
- Fixed memory leak from timer not being cleaned up on extension deactivation

### 📚 Migration Guide (v1.x → v2.0)

**Automatic Migration:** Your old settings will stop working. You need to manually update them.

1. Open VS Code Settings (JSON) - `Ctrl+Shift+P` → "Preferences: Open User Settings (JSON)"
2. Find all `everforestPro.*` settings
3. Update them according to the mapping above:
   - Add `.theme.` prefix to all theme-related settings
   - Add `.autoSwitch.` prefix to auto-switch settings
   - Change `autoSwitch` to `autoSwitch.enabled`
   - Remove `autoSwitchMode` setting entirely

**Example:**

```json
// Before (v1.x)
{
  "everforestPro.darkContrast": "medium",
  "everforestPro.italicComments": true,
  "everforestPro.autoSwitch": true,
  "everforestPro.autoSwitchMode": "schedule",
  "everforestPro.lightThemeTime": "07:00",
  "everforestPro.darkThemeTime": "19:00"
}

// After (v2.0)
{
  "everforestPro.theme.darkContrast": "medium",
  "everforestPro.theme.italicComments": true,
  "everforestPro.autoSwitch.enabled": true,
  "everforestPro.autoSwitch.lightThemeTime": "07:00",
  "everforestPro.autoSwitch.darkThemeTime": "19:00"
}
```

## 1.0.4

- Added preview links in readme for both the dark and the light version of the theme

## 1.0.3

- Remove broken OpenVsix link from readme

## 1.0.2

- Rework the README
- Added new screenshots
- Reworked the icon for the theme

## 1.0.1

- Added icon for theme

## 1.0.0

- Rebranded to Everforest Pro
- Changed maintainers from original sainnhe to AndreiLucaci

## 0.3.0

- Change `activationEvents`.
- Update colors.

## 0.2.1

- Add badge.

## 0.2.0

- Enable this extension in vscode web.

## 0.1.6

- Add new option `everforest.highContrast`.
- Add some new theme tokens.

## 0.1.5

- Bigger icon size.
- Optimize diffEditor colors.
- Adjust grey.
- Support for native bracket colorization

## 0.1.4

- Support remote development by specifying extensionKind.

## 0.1.3

- `tab.lastPinnedBorder`
- Optimize button colors.
- Optimize extension `eamodio.gitlens`.
- Optimize extension `github.vscode-pull-request-github`.
- Optimize extension `matklad.rust-analyzer`.

## 0.1.2

- Use green as border color.

## 0.1.1

- Improve flat workbench style.
- Improve high-contrast workbench style.

## 0.1.0

- Initial release
