
const chalk = require("chalk"); //用于字体加色
const ora = require("ora"); //进度显示
const symbols = require("log-symbols"); //信息前面加✔或✖
const process = require("child_process");
const fs = require("fs");
let compile = null;

// 执行 npm run build 命令
function toCmd(cmd,success,fail) {
    compile = ora('编译中，时间可能比较长请耐心等待...').start();
    process.exec(cmd, (error, stdout, stderr) => {
        // console.log(error,stdout,stderr)
        compile.stop();
        compile.clear();
        if (!error) {
            // 成功
            success()
            console.log();
            // console.log(symbols.success, chalk.green("编译成功！"));
        } else {
            // 失败
            fail()
            console.log();
            console.log(symbols.error, chalk.red("编译失败！"));
            console.error(error,stdout,stderr)
        }
    });
}


function toZip() {
    // const pack = ora('打包中...').start();
    const path = require("path");
    const compressing = require("compressing");
    const dayjs = require("dayjs");
    const dirname = "."

    const resolve = dir => path.join(dirname, dir);
    const zipName = (() => `/rnApp_${dayjs().format("YYYYMMDD_HHmmss")}.zip`)();

    compressing.zip
        .compressDir(resolve("/dist/"), resolve(zipName), {ignoreBase:true})
        .then(() => {
            compile.stop();
            compile.clear();
            console.log(symbols.success, chalk.green(`Tip: 文件压缩成功，已压缩至根目录下【${resolve(zipName)}】`));
        })
        .catch(err => {
            compile.stop();
            compile.clear();
            console.log(symbols.error, chalk.red("Tip: 压缩报错"));
            console.error(err);
        });
}

const url = "";
const platform = "android";
const dev = "false";
const entry = url + "index.js";
const output = url + "./dist/index.android.bundle";
const assetsDest = url + "./dist";
const config = url + './metro.config.js';
const sourcemap = url + './dist/groups.map';

if (!fs.existsSync(assetsDest)) {
    fs.mkdirSync(assetsDest);
}
toCmd(`npx react-native bundle --platform ${platform} --dev ${dev} --entry-file ${entry} --bundle-output ${output} --assets-dest ${assetsDest} --config ${config}`,() => {
    toZip()
},() => {
    console.log(symbols.error, chalk.red("打包失败！"));
})
