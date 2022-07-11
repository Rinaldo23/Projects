#!/usr/bin/env node
let inputArr = process.argv.slice(2);
let fs = require("fs");
// console.log(inputArr);

let optionsArr = [];
let filesArr = [];
for (let i = 0; i < inputArr.length; i++) {
    let firstChar = inputArr[i].charAt(0);
    if (firstChar == "-") {
        optionsArr.push(inputArr[i]);
    } else {
        filesArr.push(inputArr[i]);
    }
}

let isBothPresent = optionsArr.includes("-n") && optionsArr.includes("-b");
if(isBothPresent == true){
    console.log("Please enter either -n or -b");
    return;
}

for(let i = 0 ; i < filesArr.length ; i++){
    let fileExists = fs.existsSync(filesArr[i]);
    if(fileExists == false){
        console.log(`File ${ filesArr[i] } does not Exits!`);
        return;
    }
}

let content = "";
for (let i = 0; i < filesArr.length; i++) {
    let buffercontent = fs.readFileSync(filesArr[i]);
    content += buffercontent + "\r\n";
}
// console.log(content);

let contentArr = content.split("\r\n");
// console.log(contentArr)
let isSPresent = optionsArr.includes("-s");
if (isSPresent == true) {
    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;
        } else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }
    // console.log(contentArr)
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != null) {
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr;
    // contentArr = contentArr.join("\n");
    // console.log(contentArr)
}

let isNPresent = optionsArr.includes("-n");
if(isNPresent==true){
    for(let i = 0 ; i < contentArr.length ; i++){
        contentArr[i] = `${ i+1 } ${ contentArr[i] }`;
    }
}
// console.log(contentArr.join("\n"));

let isBPresent = optionsArr.includes("-b");
if(isBPresent==true){
    let counter = 1;
    for(let i = 0 ; i < contentArr.length ; i++){
        if(contentArr[i] != ""){
            contentArr[i] = `${ counter } ${ contentArr[i] }`;
            counter++;
        }
    }
}
console.log(contentArr.join("\n"));