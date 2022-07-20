let fontFamilyBtn = document.querySelector(".font-family-prop");
let fontSizeBtn = document.querySelector(".font-size-prop");
let boldBtn = document.querySelector(".bold");
let italicBtn = document.querySelector(".italic");
let underlineBtn = document.querySelector(".underline");
let alignment = document.querySelectorAll(".alignment");
let leftAlignBtn = alignment[0];
let centerAlignBtn = alignment[1];
let rightAlignBtn = alignment[2];
let justifyAlignBtn = alignment[3];
let fontColorBtn = document.querySelector(".font-color");
let bgColorBtn = document.querySelector(".cell-color");
let allCells = document.querySelectorAll(".grid-cell");

let activeColorProp = "#d1d8e0";
let inactiveColorProp = "#ecf0f1";

/**
 * ! Logic is same for all the Menu Bar buttons
 * todo Logic : 1. When we click on fontFamilyBtn we want to change the font-family of the selected cell.
 * todo Logic : 2. So we add an event-listener on fontfamiltBtn with "change".
 * todo Logic : 3. We fetch the address of the selected cell from the address bar.
 * todo Logic : 4. Then we fetch the active cell & its cell-properties (from DB) using the fn activeCellAndCellProp which takes an input parameter address.
 * todo Logic : 5. First we make changes in the DataBase for the cell-property.
 * todo Logic : 6. Then we make changes in the UI : 
 * todo Logic :             6.1 -> In cell             
 * todo Logic :             6.1 -> In the fontfamilyBtn              
 */
fontFamilyBtn.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activeCellAndCellProp(address);

    cellProp.fontFamily = fontFamilyBtn.value;      // DB change
    cell.style.fontFamily = cellProp.fontFamily;    // UI change in cell
    fontFamilyBtn.value = cellProp.fontFamily;      // UI change in btn
})

fontSizeBtn.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activeCellAndCellProp(address);

    cellProp.fontSize = fontSizeBtn.value;              // DB change
    cell.style.fontSize = cellProp.fontSize + "px";     // UI change in cell
    fontSizeBtn.value = cellProp.fontSize;              // UI change in btn
})

boldBtn.addEventListener("click", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activeCellAndCellProp(address);

    // Jasbir Sir - using if else
    /** 
     * todo Logic : 1 -> .classList will fetch all the classes present in bold btn.
     * todo Logic : 2 -> .classList[2] will check if bold btn has "Selected" class.
     * todo Logic : 3 -> If class is not present we will add it...vice versa.
     * todo Logic : 4 -> Based on the presence or absence of "Selected" class we will make changes in UI and DB.
     */
    isSelected = boldBtn.classList[2];
    if (isSelected == "Selected") {
        boldBtn.classList.remove("Selected");
        cell.style.fontWeight = "normal";
        cellProp.bold = "false";
        boldBtn.style.backgroundColor = inactiveColorProp;
    } else {
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
    if (isSelected == "Selected") {
        italicBtn.classList.remove("Selected");
        cell.style.fontStyle = "normal";
        cellProp.italic = "false";
        italicBtn.style.backgroundColor = inactiveColorProp;
    } else {
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
    if (isSelected == "Selected") {
        underlineBtn.classList.remove("Selected");
        cell.style.textDecoration = "none";
        cellProp.underline = "false";
        underlineBtn.style.backgroundColor = inactiveColorProp;
    } else {
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

bgColorBtn.addEventListener("change", (e) => {
    let address = addressBar.value;
    let [cell, cellProp] = activeCellAndCellProp(address);

    cellProp.BgColor = bgColorBtn.value; // DB Change
    cell.style.backgroundColor = cellProp.BgColor; // Cell change
    bgColorBtn.value = cellProp.BgColor; // cell property btn change
})

for (let i = 0; i < alignment.length; i++) {
    let element = alignment[i];
    element.addEventListener("click", alignFn);
}
function alignFn(e) {
    let address = addressBar.value;
    let [cell, cellProp] = activeCellAndCellProp(address);

    let clickedAlignBtn = e.target;
    let alignValue = clickedAlignBtn.classList[2];
    cellProp.alignment = alignValue; // Data change
    cell.style.textAlign = cellProp.alignment; // UI change (1) -> In cells

    // We can use switch case also instead of loop
    // UI change (2) -> Cell property bar 
    if (alignValue == "left") {
        // UI change (2)
        leftAlignBtn.style.backgroundColor = activeColorProp;
        centerAlignBtn.style.backgroundColor = inactiveColorProp;
        rightAlignBtn.style.backgroundColor = inactiveColorProp;
        justifyAlignBtn.style.backgroundColor = inactiveColorProp;
    } else if (alignValue == "center") {
        leftAlignBtn.style.backgroundColor = inactiveColorProp;
        centerAlignBtn.style.backgroundColor = activeColorProp;
        rightAlignBtn.style.backgroundColor = inactiveColorProp;
        justifyAlignBtn.style.backgroundColor = inactiveColorProp;
    } else if (alignValue == "right") {
        leftAlignBtn.style.backgroundColor = inactiveColorProp;
        centerAlignBtn.style.backgroundColor = inactiveColorProp;
        rightAlignBtn.style.backgroundColor = activeColorProp;
        justifyAlignBtn.style.backgroundColor = inactiveColorProp;
    } else {
        leftAlignBtn.style.backgroundColor = inactiveColorProp;
        centerAlignBtn.style.backgroundColor = inactiveColorProp;
        rightAlignBtn.style.backgroundColor = inactiveColorProp;
        justifyAlignBtn.style.backgroundColor = activeColorProp;
    }
}

/**
 * ! Applying default values to each cell
 * todo Logic : 1. Iterarting through all the cells.
 * todo Logic : 2. Calling the fn for applying default values from database.
 * todo Logic : 3. Fn takes in a paramter "cell".
 */
for (let i = 0; i < allCells.length; i++) {
    let cell = allCells[i];
    addDefaultCellPropsFromDB(cell);
    // cell.addEventListener("click", cellFn); --> Line not working 
}
function addDefaultCellPropsFromDB(cell) {
    cell.addEventListener("click", (e) => {
        // let address = addressBar.value;
        // let [rid, cid] = getRidCidfromAddressBar(address);

        let rid = cell.getAttribute("rid");
        let cid = cell.getAttribute("cid");
        let cellProp = SheetDB[rid][cid];

        // UI change (1) -> In cells
        cell.style.fontFamily = cellProp.fontFamily;
        cell.style.fontSize = cellProp.fontSize + "px";
        cell.style.fontWeight = cellProp.bold ? "bold" : "normal";
        cell.style.fontStyle = cellProp.italic ? "italic" : "normal";
        cell.style.textDecoration = cellProp.underline ? "underline" : "none";
        cell.style.color = cellProp.fontColor;
        cell.style.backgroundColor = cellProp.BgColor;
        cell.style.textAlign = cellProp.alignment;

        // UI change (2) -> In cell prop menu
        fontFamilyBtn.value = cellProp.fontFamily;
        fontSizeBtn.value = cellProp.fontSize;
        boldBtn.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp;
        italicBtn.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp;
        underlineBtn.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp;
        fontColorBtn.value = cellProp.fontColor;
        bgColorBtn.value = cellProp.BgColor;
        if (cellProp.alignment == "left") {
            // UI change (2)
            leftAlignBtn.style.backgroundColor = activeColorProp;
            centerAlignBtn.style.backgroundColor = inactiveColorProp;
            rightAlignBtn.style.backgroundColor = inactiveColorProp;
            justifyAlignBtn.style.backgroundColor = inactiveColorProp;
        } else if (cellProp.alignment == "center") {
            leftAlignBtn.style.backgroundColor = inactiveColorProp;
            centerAlignBtn.style.backgroundColor = activeColorProp;
            rightAlignBtn.style.backgroundColor = inactiveColorProp;
            justifyAlignBtn.style.backgroundColor = inactiveColorProp;
        } else if (cellProp.alignment == "right") {
            leftAlignBtn.style.backgroundColor = inactiveColorProp;
            centerAlignBtn.style.backgroundColor = inactiveColorProp;
            rightAlignBtn.style.backgroundColor = activeColorProp;
            justifyAlignBtn.style.backgroundColor = inactiveColorProp;
        } else {
            leftAlignBtn.style.backgroundColor = inactiveColorProp;
            centerAlignBtn.style.backgroundColor = inactiveColorProp;
            rightAlignBtn.style.backgroundColor = inactiveColorProp;
            justifyAlignBtn.style.backgroundColor = activeColorProp;
        }
    })
}

/**************************************** Helper Funtions *********************************************/
/** 
 * todo :=> Fn takes a paramter address (A1) in string format.
 * todo :=> returns the active cell and its cell-properties from DB. 
 */
function activeCellAndCellProp(address) {
    let [rid, cid] = getRidCidfromAddressBar(address);
    let cell = document.querySelector(`.grid-cell[rid="${rid}"][cid="${cid}"]`);
    let cellProp = SheetDB[rid][cid];
    return [cell, cellProp];
}

/** 
 * todo :=> Fn takes a paramter address (A1) in string format.
 * todo :=> returns the row-ID and column-ID. 
 */
function getRidCidfromAddressBar(address) {
    // address -> A1
    let rowId = address.slice(1);
    let colId = address.charCodeAt(0);
    let rid = Number(rowId) - 1;
    let cid = Number(colId) - 65;
    return [rid, cid];
}