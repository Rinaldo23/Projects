let fontFamilyBtn = document.querySelector(".font-family-prop");
let fontSizeBtn = document.querySelector(".font-size-prop");
let boldBtn = document.querySelector(".bold");
let italicBtn = document.querySelector(".italic");
let underlineBtn = document.querySelector(".underline");
let alignment = document.querySelectorAll(".alignment");
let leftAlign = alignment[0];
let centerAlign = alignment[1];
let rightAlign = alignment[2];
let fontColorBtn = document.querySelector(".font-color");
let bgColorBtn = document.querySelector(".cell-color");

let activeColorProp = "#d1d8e0";
let inactiveColorProp = "#ecf0f1";

fontFamilyBtn.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activeCellAndCellProp(address);

    cellProp.fontFamily = fontFamilyBtn.value; // DB change
    cell.style.fontFamily = cellProp.fontFamily;
    fontFamilyBtn.value = cellProp.fontFamily;
})

fontSizeBtn.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activeCellAndCellProp(address);

    cellProp.fontSize = fontSizeBtn.value; // DB change
    cell.style.fontSize = cellProp.fontSize + "px";
    fontSizeBtn.value = cellProp.fontSize;
})

boldBtn.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activeCellAndCellProp(address);

    // Jasbir Sir - using if else
    isSelected = boldBtn.classList[2];
    if(isSelected == "Selected"){
        boldBtn.classList.remove("Selected");
        cell.style.fontWeight = "normal";
        cellProp.bold = "false";
        boldBtn.style.backgroundColor = inactiveColorProp;
    }else{
        boldBtn.classList.add("Selected");
        cell.style.fontWeight = "bold";
        cellProp.bold = "true";
        boldBtn.style.backgroundColor = activeColorProp;
    }

    // Arun Sir - using ternary operator
    // cellProp.bold = !cellProp.bold; // Data change
    // cell.style.fontWeight = cellProp.bold ? "bold" : "normal"; // UI change (1)
    // boldBtn.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp; // UI change (2)
    
})

italicBtn.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activeCellAndCellProp(address);

    isSelected = italicBtn.classList[2];
    if(isSelected == "Selected"){
        italicBtn.classList.remove("Selected");
        cell.style.fontStyle = "normal";
        cellProp.italic = "false";
        italicBtn.style.backgroundColor = inactiveColorProp;
    }else{
        italicBtn.classList.add("Selected");
        cell.style.fontStyle = "italic";
        cellProp.italic = "true";
        italicBtn.style.backgroundColor = activeColorProp;
    }

    // cellProp.italic = !cellProp.italic; // Data change
    // cell.style.fontStyle = cellProp.italic ? "italic" : "normal"; // UI change (1)
    // italicBtn.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp; // UI change (2)   
})

underlineBtn.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activeCellAndCellProp(address);

    isSelected = underlineBtn.classList[2];
    if(isSelected == "Selected"){
        underlineBtn.classList.remove("Selected");
        cell.style.textDecoration = "none";
        cellProp.underline = "false";
        underlineBtn.style.backgroundColor = inactiveColorProp;
    }else{
        underlineBtn.classList.add("Selected");
        cell.style.textDecoration = "underline";
        cellProp.underline = "true";
        underlineBtn.style.backgroundColor = activeColorProp;
    }

    // cellProp.underline = !cellProp.underline; // Data change
    // cell.style.textDecoration = cellProp.underline ? "underline" : "none"; // UI change (1)
    // underlineBtn.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp; // UI change (2)
})

fontColorBtn.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activeCellAndCellProp(address);

    cellProp.fontColor = fontColorBtn.value; // DB Change
    cell.style.color = cellProp.fontColor; // Cell change
    fontColorBtn.value = cellProp.fontColor; // cell property btn change
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