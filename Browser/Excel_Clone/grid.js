let leftColCont = document.querySelector(".left-col-cont");
let topRowCont = document.querySelector(".top-row-cont");
let cellGridCont = document.querySelector(".cell-grid-cont");
let addressBar = document.querySelector(".address_bar");

let rows = 100;
let cols = 26;

for (let i = 0; i < rows; i++) {
  let colCell = document.createElement("div");
  colCell.setAttribute("class", "col-cell");
  colCell.innerText = i + 1;
  leftColCont.appendChild(colCell);
}

for (let i = 0; i < cols; i++) {
  let rowCell = document.createElement("div");
  rowCell.setAttribute("class", "row-cell");
  rowCell.innerText = String.fromCharCode(65 + i);
  topRowCont.appendChild(rowCell);
}

for (let i = 0; i < rows; i++) {
  let rowCont = document.createElement("div");
  rowCont.setAttribute("class", "row-cont");
  for (let j = 0; j < cols; j++) {
    let gridCell = document.createElement("div");
    gridCell.setAttribute("class", "grid-cell");
    gridCell.setAttribute("contenteditable", "true");
    gridCell.setAttribute("rid", i);
    gridCell.setAttribute("cid", j);
    gridCell.setAttribute("spellcheck", "false");
    rowCont.appendChild(gridCell);
    getCellAddress(gridCell, i, j);
  }
  cellGridCont.appendChild(rowCont);
}

// addressBar Implementation
function getCellAddress(cell, row, col) {
  cell.addEventListener("click", function (e) {
    rowID = row + 1;
    colID = String.fromCharCode(65 + col);
    addressBar.value = `${colID}${rowID}`;
  });
}


// let firstCellAddress = document.querySelector(".grid-cell");
// firstCellAddress.click();
