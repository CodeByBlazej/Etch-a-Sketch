const container = document.querySelector(".container");


function createButton() {
  let btn = document.createElement("button");
  
  let parentDiv = container.parentNode;
  parentDiv.insertBefore(btn, container)
  btn.textContent = 'Choose the grid!';
  btn.style.cssText = 'margin: 20px; background-color: lightblue;'
}


createButton();


function createDivs() {


  for(let y = 1; y <= 16; y++) {
    
    let newDivY = document.createElement("div");
    newDivY.className = "divY";

    newDivY.style.cssText = 'display: flex; background-color: yellow; gap: 20px ';
    container.appendChild(newDivY);

    for(let x = 1; x <= 16; x++) {
      let newDivX = document.createElement("div");
      newDivX.className = "divX";

      newDivX.style.cssText =
        'display:flex; height: 20px; width: 20px; background-color:red;';
      
      
      newDivX.addEventListener('mouseover', () => {
          newDivX.style.backgroundColor = "pink";
        });

      newDivY.appendChild(newDivX);
    }
  }
}

createDivs();


  
