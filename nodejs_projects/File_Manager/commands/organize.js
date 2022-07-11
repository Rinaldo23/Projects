let fs = require("fs");
let path = require("path");
let utilityObj = require("../utility");

function organizeFn(dirPath) {
    // console.log("Organize command has been implemented ", dirPath);
    let destPath;
    // 1. Check if directory path given or not.
    if (dirPath == undefined) {
        // console.log("Please enter a directory path!");
        destPath = process.cwd();
    } else {
        // 2. Check if the given directory path exists or not.
        let dirExists = fs.existsSync(dirPath);
        // 3. Create an Organized folder if directory path exits.
        if (dirExists) {
            destPath = path.join(dirPath, "Organized_Files");
            // 4. Check if the Organized folder already exists.
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath); // Creates a folder 
            }
        } else {
            console.log("Please enter a directory path!");
            return;
        }
    }
    organizeHelper(dirPath, destPath);
}
function organizeHelper(src, dest) {
    // 1. Read the directory 
    let allFiles = fs.readdirSync(src);
    // console.log(allFiles);

    // 2. Get the address of each file
    for (let i = 0; i < allFiles.length; i++) {
        let filePath = path.join(src, allFiles[i]);
        // console.log(filePath);
        let isFile = fs.lstatSync(filePath).isFile();
        if (isFile) {
            // console.log(allFiles[i]);
            let categoryType = getCategoryFn(filePath);
            // console.log(categoryType)
            sendFilesFn(filePath, dest, categoryType);
        }
    }
    // 3. Check if it is file or folder

}
function getCategoryFn(filePath) {
    // 1. Get the extension of file
    let ext = path.extname(filePath);
    ext = ext.slice(1);
    // console.log(ext);
    for (let type in utilityObj.utility) {
        let typeArr = utilityObj.utility[type];
        for (let i = 0; i < typeArr.length; i++) {
            if (typeArr[i] == ext) {
                return type;
            }
        }
    }
    return "Others";
}
function sendFilesFn(srcFilePath, destPath, category) {
    let categoryPath = path.join(destPath, category);
    if (fs.existsSync(categoryPath) == false){
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath,fileName);
    fs.copyFileSync(srcFilePath,destFilePath);
    fs.unlinkSync(srcFilePath);

}

module.exports = {
    organizeKey : organizeFn
}