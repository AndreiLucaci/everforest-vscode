import * as fs from "fs";
import { join } from "path";
import { Configuration } from "../interface";
import { getWorkbench } from "../workbench";
import { getSyntax } from "../syntax";
import { getSemantic } from "../semantic";

class Utils {
  async writeFile(path: string, data: unknown) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, JSON.stringify(data, null, 2), (err) =>
        err ? reject(err) : resolve("Success")
      );
    });
  }

  getThemeData(name: string, variant: string, configuration: Configuration) {
    return {
      name: name,
      type: variant,
      semanticHighlighting: true,
      semanticTokenColors: getSemantic(configuration, variant),
      colors: getWorkbench(configuration, variant),
      tokenColors: getSyntax(configuration, variant),
    };
  }
}

const utils = new Utils();
const themesDir = join(__dirname, "..", "..", "themes");

// Base configuration for all themes
const baseConfig = {
  darkWorkbench: "material",
  lightWorkbench: "material",
  darkSelection: "grey",
  lightSelection: "grey",
  darkCursor: "white",
  lightCursor: "black",
  italicKeywords: false,
  italicComments: true,
  diagnosticTextBackgroundOpacity: "0%",
  highContrast: false,
};

// Generate Dark themes
const darkMediumConfig: Configuration = {
  ...baseConfig,
  darkContrast: "medium",
  lightContrast: "medium",
};

const darkCozyConfig: Configuration = {
  ...baseConfig,
  darkContrast: "soft",
  lightContrast: "medium",
};

const darkVibrantConfig: Configuration = {
  ...baseConfig,
  darkContrast: "hard",
  lightContrast: "medium",
};

// Generate Light themes
const lightMediumConfig: Configuration = {
  ...baseConfig,
  darkContrast: "medium",
  lightContrast: "medium",
};

const lightCozyConfig: Configuration = {
  ...baseConfig,
  darkContrast: "medium",
  lightContrast: "soft",
};

const lightVibrantConfig: Configuration = {
  ...baseConfig,
  darkContrast: "medium",
  lightContrast: "hard",
};

// Generate all theme files
utils.writeFile(
  join(themesDir, "everforest-dark.json"),
  utils.getThemeData("Everforest Pro Dark", "dark", darkMediumConfig)
);

utils.writeFile(
  join(themesDir, "everforest-dark-cozy.json"),
  utils.getThemeData("Everforest Pro Dark Cozy", "dark", darkCozyConfig)
);

utils.writeFile(
  join(themesDir, "everforest-dark-vibrant.json"),
  utils.getThemeData("Everforest Pro Dark Vibrant", "dark", darkVibrantConfig)
);

utils.writeFile(
  join(themesDir, "everforest-light.json"),
  utils.getThemeData("Everforest Pro Light", "light", lightMediumConfig)
);

utils.writeFile(
  join(themesDir, "everforest-light-cozy.json"),
  utils.getThemeData("Everforest Pro Light Cozy", "light", lightCozyConfig)
);

utils.writeFile(
  join(themesDir, "everforest-light-vibrant.json"),
  utils.getThemeData(
    "Everforest Pro Light Vibrant",
    "light",
    lightVibrantConfig
  )
);
