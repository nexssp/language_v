let languageConfig = Object.assign({}, require(`./v.win32.nexss.config.js`));
const sudo = process.sudo;
const version = "2021.17";
// https://github.com/vlang/v/releases/download/weekly.2021.17/v_linux.zip
const foldername = `weekly.${version}`;
const filename = `${foldername}/v_linux.zip`;
const newFilename = `${foldername}_v_linux.zip`;

languageConfig.compilers = {
  v: {
    // shell: "Powershell",
    install: process.replacePMByDistro(`${sudo}apt install -y wget jq unzip gcc gcc-c++ make
if [ ! -d "${process.env.NEXSS_APPS_PATH}/vlang${version}${process.platform}" ]; then mkdir ${process.env.NEXSS_APPS_PATH}/vlang${version}${process.platform} ; fi
if [ ! -f ${process.env.NEXSS_APPS_PATH}/vlang${version}${process.platform}/${newFilename} ];then wget https://github.com/vlang/v/releases/download/${filename} -O ${process.env.NEXSS_APPS_PATH}/vlang${version}${process.platform}/${newFilename}; fi
cd ${process.env.NEXSS_APPS_PATH}/vlang${version}${process.platform}
echo Unpacking ${newFilename} .. Please wait..
unzip -qo ${newFilename}
${sudo}ln -sf ${process.env.NEXSS_APPS_PATH}/vlang${version}${process.platform}/v/v /usr/bin/v
${sudo}ln -sf ${process.env.NEXSS_APPS_PATH}/vlang${version}${process.platform}/v/v /usr/bin/v${version}`),
    command: "v",
    args: "run <file>",
    help: ``,
  },
};

switch (process.distro) {
  case process.distros.UBUNTU:
    languageConfig.compilers.v.install = languageConfig.compilers.v.install.replace(
      "gcc-c++ ",
      ""
    );
    break;

  default:
    break;
}

module.exports = languageConfig;
