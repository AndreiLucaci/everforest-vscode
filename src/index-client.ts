import { workspace } from "vscode";
import { join } from "path";
import Utils from "./utils";
import { AutoSwitcher } from "./autoSwitch";

let autoSwitcher: AutoSwitcher | undefined;

export function activate() {
  const utils = new Utils();
  autoSwitcher = new AutoSwitcher();

  // Start auto-switching if enabled
  autoSwitcher.start();

  // Regenerate theme files when user configuration changes.
  workspace.onDidChangeConfiguration((event) => {
    utils.detectConfigChanges(event, () => {
      utils.generate(
        join(__dirname, "..", "themes", "everforest-dark.json"),
        join(__dirname, "..", "themes", "everforest-light.json"),
        utils.getThemeData(utils.getConfiguration())
      );

      // Restart auto-switcher when settings change
      autoSwitcher?.start();
    });
  });

  // Regenerate theme files if it's newly installed but the user settings are not the default.
  if (
    utils.isNewlyInstalled() &&
    !utils.isDefaultConfiguration(utils.getConfiguration())
  ) {
    utils.generate(
      join(__dirname, "..", "themes", "everforest-dark.json"),
      join(__dirname, "..", "themes", "everforest-light.json"),
      utils.getThemeData(utils.getConfiguration())
    );
  }
}

export function deactivate() {
  // Clean up timer on extension deactivation
  autoSwitcher?.stop();
  autoSwitcher = undefined;
}
