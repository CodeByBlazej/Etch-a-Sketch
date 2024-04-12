const container = document.querySelector(".container");


function createDivs() {
  for(let y = 1; y <= 16; y++) {
    
    let newDivX = document.createElement("div");
    newDivX.className = "divX";

    newDivX.style.cssText = 'display: flex; background-color: yellow; gap: 20px ';
    container.appendChild(newDivX);

    for(let newDiv = 1; newDiv <= 16; newDiv++) {
      let newDiv = document.createElement("div");
      newDiv.style.cssText =
        'display:flex; height: 20px; width: 20px; background-color:red;';
      newDivX.appendChild(newDiv);
    }
  }
}

createDivs();


