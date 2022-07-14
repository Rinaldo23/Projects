// Create SheetDB
let SheetDB = [];

for( let i = 0 ; i < rows ; i++){
    let rowArr = [];
    for( let j = 0 ; j < cols ; j++){
        let cellObj = {
            fontFamily : "monospace",
            fontSize : "14",
            bold : "false",
            italic : "false",
            underline : "false",
            alignment : "left",
            fontColor : "#000000",
            BgColor : "#000000"
        }
        rowArr.push(cellObj);
    }
    SheetDB.push(rowArr);
}