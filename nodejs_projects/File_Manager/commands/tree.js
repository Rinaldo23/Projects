let fs = require("fs");
let path = require("path");

function treeFn(dirPath) {
    // console.log("Tree command has been implemented ", dirPath);
    let destPath;
    // 1. Check if directory path given or not.
    if (dirPath == undefined) {
        // console.log("Please enter a directory path!");
        treeHelperFn(process.cwd(), "");
    } else {
        // 2. Check if the given directory path exists or not.
        let dirExists = fs.existsSync(dirPath);
        // 3. Create an Organized folder if directory path exits.
        if (dirExists) {
            treeHelperFn(dirPath, "");
        } else {
            console.log("Please enter a directory path!");
            return;
        }
    }
}

function treeHelperFn(dirPath, indent){
    // 1. Check if File or Folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile){
        let fileName = path.basename(dirPath);
        console.log(indent + "├──" + fileName);
    }else{
        let dirName = path.basename(dirPath);
        console.log(indent + "└──" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for(let i = 0 ; i < childrens.length ; i++){
            let childPath = path.join(dirPath, childrens[i]);
            treeHelperFn(childPath, indent + "\t");
        }
    }
}

module.exports = {
    treeKey : treeFn
}