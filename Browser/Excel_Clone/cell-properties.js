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

let activeColorProp = "#d1d8e0";
let inactiveColorProp = "#ecf0f1";

let boldBtn = document.querySelector(".bold");
let italicBtn = document.querySelector(".italic");
let underlineBtn = document.querySelector(".underline");
let fontFamilyBtn = document.querySelector(".font-family-prop");
let fontSizeBtn = document.querySelector(".font-size-prop");

boldBtn.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activeCellAndCellProp(address);

    // Arun Sir - using ternary operator
    cellProp.bold = !cellProp.bold; // Data change
    cell.style.fontWeight = cellProp.bold ? "bold" : "normal"; // UI change (1)
    boldBtn.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp; // UI change (2)
    
    // Jasbir Sir - using if else
    // isSelected = boldBtn.classList[2];
    // if(isSelected == "Selected"){
    //     boldBtn.classList.remove("Selected");
    //     cell.style.fontWeight = "normal";
    //     cellProp.bold = "false";
    //     boldBtn.style.backgroundColor = inactiveColor;
    // }else{
    //     boldBtn.classList.add("Selected");
    //     cell.style.fontWeight = "bold";
    //     cellProp.bold = "true";
    //     boldBtn.style.backgroundColor = activeColor;
    // }
})

italicBtn.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activeCellAndCellProp(address);

    cellProp.italic = !cellProp.italic; // Data change
    cell.style.fontStyle = cellProp.italic ? "italic" : "normal"; // UI change (1)
    italicBtn.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp; // UI change (2)   
})

underlineBtn.addEventListener("click", function() {
    let address = addressBar.value;
    let [cell, cellProp] = activeCellAndCellProp(address);

    cellProp.underline = !cellProp.underline; // Data change
    cell.style.textDecoration = cellProp.underline ? "underline" : "none"; // UI change (1)
    underlineBtn.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp; // UI change (2)
})

/***************************  Helper Funtions ************************/
function activeCellAndCellProp(address){
    let [rid, cid] = getRidCidfromAddressBar(address);
    let cell = document.querySelector(`.grid-cell[rid="${rid}"][cid="${cid}"]`);
    let cellProp = SheetDB[rid][cid];
    return [cell, cellProp];
}

function getRidCidfromAddressBar(address){
    // address -> A1
    let rowId = address.slice(1);
    let colId = address.charCodeAt(0);
    let rid = Number(rowId) - 1;
    let cid = Number(colId) - 65;
    return [rid, cid];
}