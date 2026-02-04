import { workspace, window } from "vscode";

export function activate() {
  workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration("everforestPro")) {
      window.showInformationMessage(
        "Configuration options are currently not available in vscode web."
      );
    }
  });
}

export function deactivate() {}
