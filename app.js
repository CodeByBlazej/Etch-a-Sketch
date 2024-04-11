const container = document.querySelector(".container");


function createDivs() {
  for(let y = 1; y <= 16; y++) {
    
    let newDivX = document.createElement("div");
    newDivX.className = "divX";

    newDivX.style.cssText = 'display: flex; background-color: yellow; gap: 20px;';
    container.appendChild(newDivX);

    for(let newDiv = 1; newDiv <= 16; newDiv++) {
      let newDiv = document.createElement("div");
      newDiv.style.cssText =
        'display:flex; flex-direction: column; height: 10px; width: 10px; background-color:red; gap: 20px;';
      newDivX.appendChild(newDiv);
    }
  }
}

createDivs();


