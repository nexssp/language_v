let languageConfig = Object.assign({}, require(`./v.win32.nexss.config.js`));

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
