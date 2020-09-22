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

const {
  replaceCommandByDist,
} = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);

languageConfig.compilers.v.install = replaceCommandByDist(
  languageConfig.compilers.v.install
);

module.exports = languageConfig;
