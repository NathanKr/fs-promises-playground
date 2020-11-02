const fileName = "a.txt";
const chalk = require('chalk')
const { readFile } = require("fs").promises;
(async () =>{
    const data = await readFile(fileName, { encoding: "utf8" });
    console.log(chalk.red(`The content of the file : ${fileName}`));
    console.log(data);
})()
