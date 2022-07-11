#!/usr/bin/env node
let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");
let helpObj = require("./commands/help"); 
let help = require("./commands/help");
let uO = require("./utility");
// console.log(inputArr);
// node main.js tree "dirPath"
// node main.js organize "dirPath"
// node main.js help
types = {
    Media: ["mp4", "mkv"],
    Archives: ["zip", "rar"],
    Documents: ["txt", "docx", "xlsx", "pptx", "pdf"],
    Pictures: ["jpg", "png", "jpeg"]
}
let command = inputArr[0];
let dirPath = inputArr[1];
switch (command) {
    case "tree":
        treeObj.treeKey(dirPath);
        break;
    case "organize":
        organizeObj.organizeKey(dirPath);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please enter a valid command!");
        break;
}
