let leftColCont = document.querySelector(".left-col-cont");
let topRowCont = document.querySelector(".top-row-cont");
let cellGridCont = document.querySelector(".cell-grid-cont");

let rows = 100;
let cols = 26;

for( let i = 0 ; i < rows ; i++){
    let colCell = document.createElement("div");
    colCell.setAttribute("class", "col-cell");
    colCell.innerText = i + 1;
    leftColCont.appendChild(colCell);
}

for( let i = 0 ; i < cols ; i++){
    let rowCell = document.createElement("div");
    rowCell.setAttribute("class", "row-cell");
    rowCell.innerText = String.fromCharCode(65 + i);
    topRowCont.appendChild(rowCell);
}


for( let i = 0 ; i < rows ; i++){
    let rowCont = document.createElement("div");
    rowCont.setAttribute("class", "row-cont");
    for( let j = 0 ; j < cols ; j++){
        let gridCell = document.createElement("div");
        gridCell.setAttribute("class", "grid-cell");
        gridCell.setAttribute("contenteditable", "true");
        rowCont.appendChild(gridCell);
        // getCellAddress(cell, i, j);
    }
    cellGridCont.appendChild(rowCont);
}

