let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);
languageConfig.title = "V";
languageConfig.description =
  "Simple, fast, safe, compiled language for developing maintainable software.";
languageConfig.url = "https://vlang.io";
languageConfig.founders = ["Alexander Medvednikov"];
languageConfig.developers = [""];
languageConfig.years = ["2019"];
languageConfig.extensions = [".v"];
languageConfig.executeCommandLine = "v";
languageConfig.printCommandLine = ""; //no console.log() needed to display result eg node -p "4+6"
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "v";
languageConfig.builders = {};
languageConfig.compilers = {
  v: {
    // shell: "Powershell",
    install: `nexss Install/vlang.nexss`,
    command: "v",
    args: "run <file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.v.errors");
languageConfig.languagePackageManagers = {
  v: {},
};

module.exports = languageConfig;
