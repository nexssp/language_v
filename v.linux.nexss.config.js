let languageConfig = Object.assign({}, require(`./v.win32.nexss.config.js`));

languageConfig.compilers = {
  v: {
    // shell: "Powershell",
    install: `apt install -y jq && nexss Install/vlang.nexss`,
    command: "v",
    args: "run <file>",
    help: ``,
  },
};

languageConfig.compilers.v.install = process.replacePMByDistro(
  languageConfig.compilers.v.install
);

module.exports = languageConfig;
