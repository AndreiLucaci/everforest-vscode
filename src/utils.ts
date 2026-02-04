import * as fs from "fs";
import { join } from "path";
import { ConfigurationChangeEvent, workspace, window, commands } from "vscode";
import { Configuration } from "./interface";
import { getWorkbench } from "./workbench";
import { getSyntax } from "./syntax";
import { getSemantic } from "./semantic";

export default class Utils {
  detectConfigChanges(
    event: ConfigurationChangeEvent,
    onConfigChange: () => void
  ): void {
    if (event.affectsConfiguration("everforestPro")) {
      onConfigChange();
    }
  }
  getConfiguration(): Configuration {
    const workspaceConfiguration = workspace.getConfiguration("everforestPro");
    return {
      darkContrast: workspaceConfiguration.get<string>("theme.darkContrast"),
      lightContrast: workspaceConfiguration.get<string>("theme.lightContrast"),
      darkWorkbench: workspaceConfiguration.get<string>("theme.darkWorkbench"),
      lightWorkbench: workspaceConfiguration.get<string>(
        "theme.lightWorkbench"
      ),
      darkSelection: workspaceConfiguration.get<string>("theme.darkSelection"),
      lightSelection: workspaceConfiguration.get<string>(
        "theme.lightSelection"
      ),
      darkCursor: workspaceConfiguration.get<string>("theme.darkCursor"),
      lightCursor: workspaceConfiguration.get<string>("theme.lightCursor"),
      italicKeywords: workspaceConfiguration.get<boolean>(
        "theme.italicKeywords"
      ),
      italicComments: workspaceConfiguration.get<boolean>(
        "theme.italicComments"
      ),
      diagnosticTextBackgroundOpacity: workspaceConfiguration.get<string>(
        "theme.diagnosticTextBackgroundOpacity"
      ),
      highContrast: workspaceConfiguration.get<boolean>("theme.highContrast"),
      autoSwitch: workspaceConfiguration.get<boolean>("autoSwitch.enabled"),
      lightThemeTime: workspaceConfiguration.get<string>(
        "autoSwitch.lightThemeTime"
      ),
      darkThemeTime: workspaceConfiguration.get<string>(
        "autoSwitch.darkThemeTime"
      ),
    };
  }
  isDefaultConfiguration(configuration: Configuration): boolean {
    return (
      configuration.italicKeywords === false &&
      configuration.italicComments === true &&
      configuration.lightWorkbench === "material" &&
      configuration.darkWorkbench === "material" &&
      configuration.lightContrast === "medium" &&
      configuration.darkContrast === "medium" &&
      configuration.darkCursor === "white" &&
      configuration.lightCursor === "black" &&
      configuration.darkSelection === "grey" &&
      configuration.lightSelection === "grey" &&
      configuration.diagnosticTextBackgroundOpacity === "0%" &&
      configuration.highContrast === false
    );
  }
  getThemeData(configuration: Configuration) {
    return {
      dark: {
        name: "Everforest Pro Dark",
        type: "dark",
        semanticHighlighting: true,
        semanticTokenColors: getSemantic(configuration, "dark"),
        colors: getWorkbench(configuration, "dark"),
        tokenColors: getSyntax(configuration, "dark"),
      },
      light: {
        name: "Everforest Pro Light",
        type: "light",
        semanticHighlighting: true,
        semanticTokenColors: getSemantic(configuration, "light"),
        colors: getWorkbench(configuration, "light"),
        tokenColors: getSyntax(configuration, "light"),
      },
    };
  }
  isNewlyInstalled(): boolean {
    const flagPath = join(__dirname, "..", ".flag");
    if (!fs.existsSync(flagPath)) {
      this.writeFile(flagPath, "");
      return true;
    } else {
      return false;
    }
  }
  private async writeFile(path: string, data: unknown) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, JSON.stringify(data, null, 2), (err) =>
        err ? reject(err) : resolve("Success")
      );
    });
  }
  private promptToReload() {
    const action = "Reload";
    window
      .showInformationMessage("Reload required.", action)
      .then((selectedAction) => {
        if (selectedAction === action) {
          commands.executeCommand("workbench.action.reloadWindow");
        }
      });
  }
  async generate(darkPath: string, lightPath: string, data: any) {
    this.writeFile(darkPath, data.dark).then(this.promptToReload);
    this.writeFile(lightPath, data.light);
  }
}
