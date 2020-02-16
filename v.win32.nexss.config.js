let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "V";
languageConfig.description =
  "Simple, fast, safe, compiled language for developing maintainable software.";
languageConfig.url = "https://vlang.io/";
languageConfig.extensions = [".v"];
languageConfig.executeCommandLine = "v";
languageConfig.printCommandLine = ""; //no console.log() needed to display result eg node -p "4+6"
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "v";
languageConfig.builders = {};
languageConfig.compilers = {
  node: {
    install: `git clone https://github.com/vlang/v ${process.env.NEXSS_APPS_PATH}/vlang && cd ${process.env.NEXSS_APPS_PATH}/vlang && ./make.bat && nexss System/Env/EnsurePath --EnvPathAdd=${process.env.NEXSS_APPS_PATH}/vlang`,
    command: "v",
    args: "run <file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.v.errors");
languageConfig.languagePackageManagers = {
  v: {}
};

module.exports = languageConfig;
