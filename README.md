<div align="center">

# 🌲 Everforest Pro

### _A warm, eye-friendly color theme that brings the forest to your code_

### ☀️ Light Theme

![Everforest Pro Light](./src/images/everforest-pro-light.png)

### 🌙 Dark Theme

![Everforest Pro Dark](./src/images/everforest-pro-dark.png)

[![Visual Studio Marketplace](https://img.shields.io/badge/vscode-marketplace-blue)](https://marketplace.visualstudio.com/items?itemName=AndreiLucaci.everforest-pro)
[![GitHub](https://img.shields.io/badge/github-repository-blueviolet)](https://github.com/AndreiLucaci/everforest-vscode)
[![Preview Dark](https://img.shields.io/badge/🌙_preview-dark-darkblue)](https://vscode.dev/theme/AndreiLucaci.everforest-pro/Everforest%20Pro%20Dark)
[![Preview Light](https://img.shields.io/badge/☀️_preview-light-yellow)](https://vscode.dev/theme/AndreiLucaci.everforest-pro/Everforest%20Pro%20Light)

</div>

---

## ✨ Why Everforest Pro?

**Your eyes deserve better.** If you're spending hours staring at code, you need a theme that doesn't just look good—it _protects_ your vision.

Everforest Pro is meticulously crafted with **warm, nature-inspired tones** and **carefully balanced contrast** to reduce eye strain during those marathon coding sessions. Whether you're reviewing PRs in the morning or deep in a debugging session late at night, this theme adapts to your needs with both light and dark variants.

### 🎯 Key Benefits

- **🛡️ Eye Protection First** - Soft, warm colors with optimized contrast reduce eye fatigue
- **🌿 Nature-Inspired Palette** - Green-based tones proven to be easier on the eyes
- **🌓 Light & Dark Modes** - Seamlessly switch based on time of day or preference
- **🎨 Highly Customizable** - Adjust contrast, background hardness, and workbench style
- **💡 Works All Day & Night** - Perfect harmony with blue light filters like f.lux and Redshift
- **🎯 Semantic Highlighting** - Intelligent syntax coloring that makes code easier to parse
- **📚 Rich Language Support** - Optimized for 40+ programming languages and frameworks
- **✍️ Optional Italic Support** - Elegant cursive keywords for supported fonts

---

## 🚀 Quick Start

### Installation

1. Open **Extensions** in VS Code (`Ctrl+Shift+X` or `Cmd+Shift+X`)
2. Search for `Everforest Pro`
3. Click **Install**
4. Click **Reload** to refresh your editor

### Activation

1. Open the **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P`)
2. Type `Color Theme`
3. Select your preferred variant:
   - **Everforest Pro Dark** - Balanced contrast (default)
   - **Everforest Pro Dark Cozy** - Softer, gentler on the eyes
   - **Everforest Pro Dark Vibrant** - Higher contrast, crisper
   - **Everforest Pro Light** - Balanced contrast (default)
   - **Everforest Pro Light Cozy** - Softer, gentler on the eyes
   - **Everforest Pro Light Vibrant** - Higher contrast, crisper

That's it! Your eyes will thank you. 🌟

---

## ⚙️ Customization

Everforest Pro offers **6 beautiful theme variants** and extensive customization options:

### 🎨 Theme Variants

Choose from **6 pre-configured themes** optimized for different preferences:

**Dark Themes:**

- **Everforest Pro Dark** - Balanced contrast, perfect for most users
- **Everforest Pro Dark Cozy** - Softer backgrounds, easier on the eyes for long sessions
- **Everforest Pro Dark Vibrant** - Higher contrast for those who prefer crispness

**Light Themes:**

- **Everforest Pro Light** - Balanced contrast, perfect for most users
- **Everforest Pro Light Cozy** - Softer backgrounds, gentler on the eyes
- **Everforest Pro Light Vibrant** - Higher contrast for enhanced readability

Simply pick your variant from the VS Code theme selector - no configuration needed!

### Available Settings

- **Background Contrast** - Choose from `hard`, `medium`, or `soft`
- **Workbench Style** - Select `flat`, `material`, or `high-contrast`
- **Italic Keywords** - Enable cursive italics for keywords
- **Italic Comments** - Toggle italic styling for comments
- **Custom Palette** - Fine-tune individual colors
- **🌅 Auto Theme Switching** - Automatically switch between any theme variants on a flexible schedule

### 🌅 Auto Theme Switching (Pro Feature)

Let Everforest Pro automatically switch between themes based on your custom schedule!

**Flexible Time-Based Schedule:**

```json
"everforestPro.autoSwitch.enabled": true,
"everforestPro.autoSwitch.schedule": [
  { "time": "07:00", "theme": "Everforest Pro Light" },
  { "time": "19:00", "theme": "Everforest Pro Dark" }
]
```

You can mix and match any variants throughout your day:

```json
"everforestPro.autoSwitch.schedule": [
  { "time": "06:00", "theme": "Everforest Pro Light Cozy" },
  { "time": "12:00", "theme": "Everforest Pro Light Vibrant" },
  { "time": "18:00", "theme": "Everforest Pro Dark Cozy" },
  { "time": "22:00", "theme": "Everforest Pro Dark Vibrant" }
]
```

Perfect for protecting your eyes and matching your workflow throughout the day!

> **Note:** Settings are now organized into groups (`theme.*` and `autoSwitch.*`) for better organization. See the [migration guide](#-migration-from-v1x-to-v20) if upgrading from v1.x.

### How to Customize

1. Open **Settings** (`Ctrl+,` or `Cmd+,`)
2. Search for `Everforest Pro`
3. Adjust settings to your liking

---

## 💬 FAQ

**Q: How do I enable auto-switching themes?**

**A:** Enable scheduled theme switching in settings (JSON):

1. Set `everforestPro.autoSwitch.enabled` to `true`
2. Define your schedule with time and theme pairs:

```json
"everforestPro.autoSwitch.schedule": [
  { "time": "07:00", "theme": "Everforest Pro Light" },
  { "time": "19:00", "theme": "Everforest Pro Dark" }
]
```

You can add as many schedule entries as you want!

**Q: How do I enable italic keywords?**

**A:** To use cursive italic keywords:

1. Install a font with cursive italic support (e.g., [JetBrains Mono](https://www.jetbrains.com/lp/mono/), [Fira Code](https://github.com/tonsky/FiraCode))
2. Enable `everforestPro.italicKeywords` in settings
3. Optionally disable `everforestPro.italicComments` for better contrast

**Q: Can I use this theme at night?**

**A:** Absolutely! Switch to **Everforest Pro Dark** for nighttime coding, or enable auto-switching to do it automatically. Both variants are designed with the same eye-friendly principles.

**Q: Does this work with blue light filters?**

**A:** Yes! Everforest Pro is specifically designed to work harmoniously with tools like f.lux and Redshift.

---

## 🤝 Contributing

Found a bug or want to suggest an improvement? Contributions are welcome!

- **Report Issues:** [GitHub Issues](https://github.com/AndreiLucaci/everforest-vscode/issues)
- **Submit PRs:** [GitHub Repository](https://github.com/AndreiLucaci/everforest-vscode)

---

## 📄 License

[MIT License](./LICENSE)

---

## � Migration from v1.x to v2.0

Version 2.0 introduces a breaking change in settings structure for better organization.

### What Changed?

Settings are now grouped:

- **Theme settings:** `everforestPro.theme.*`
- **Auto-switch settings:** `everforestPro.autoSwitch.*`

### Quick Migration

Open your settings (JSON) and update:

```json
// OLD (v1.x)
"everforestPro.darkContrast": "medium",
"everforestPro.italicComments": true,
"everforestPro.autoSwitch": true,
"everforestPro.lightThemeTime": "07:00",
"everforestPro.darkThemeTime": "19:00"

// NEW (v2.0)
"everforestPro.theme.darkContrast": "medium",
"everforestPro.theme.italicComments": true,
"everforestPro.autoSwitch.enabled": true,
"everforestPro.autoSwitch.schedule": [
  { "time": "07:00", "theme": "Everforest Pro Light" },
  { "time": "19:00", "theme": "Everforest Pro Dark" }
]
```

### Complete Mapping

| Old Setting                       | New Setting                             |
| --------------------------------- | --------------------------------------- |
| `darkContrast`                    | `theme.darkContrast`                    |
| `lightContrast`                   | `theme.lightContrast`                   |
| `darkWorkbench`                   | `theme.darkWorkbench`                   |
| `lightWorkbench`                  | `theme.lightWorkbench`                  |
| `darkCursor`                      | `theme.darkCursor`                      |
| `lightCursor`                     | `theme.lightCursor`                     |
| `darkSelection`                   | `theme.darkSelection`                   |
| `lightSelection`                  | `theme.lightSelection`                  |
| `italicKeywords`                  | `theme.italicKeywords`                  |
| `italicComments`                  | `theme.italicComments`                  |
| `diagnosticTextBackgroundOpacity` | `theme.diagnosticTextBackgroundOpacity` |
| `highContrast`                    | `theme.highContrast`                    |
| `autoSwitch`                      | `autoSwitch.enabled`                    |
| ~~`lightThemeTime`~~              | _(use `autoSwitch.schedule` array)_     |
| ~~`darkThemeTime`~~               | _(use `autoSwitch.schedule` array)_     |
| ~~`autoSwitchMode`~~              | _(removed)_                             |

---

## �🙏 Credits

This theme is based on the excellent [Everforest](https://github.com/sainnhe/everforest-vscode) color scheme by [sainnhe](https://github.com/sainnhe) (which is sadly archived now).
