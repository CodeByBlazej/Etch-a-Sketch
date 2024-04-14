const container = document.querySelector(".container");
const btn = document.querySelector(".btn");


function createGrid(size) {
  
  
  for(let y = 1; y <= size; y++) {
    
    let newDivY = document.createElement("div");
    newDivY.className = "divY";
    container.appendChild(newDivY);

    for(let x = 1; x <= size; x++) {
      let newDivX = document.createElement("div");
      newDivX.className = "divX";
      
      
      newDivY.appendChild(newDivX);
      newDivX.addEventListener('mouseover', () => {
        newDivX.style.backgroundColor = "hotpink";
        let currentOpacity = newDivX.style.opacity;
        if(currentOpacity) {
          newDivX.style.opacity = Number(currentOpacity) + 0.1;
        } else {
          newDivX.style.opacity = 0.1;
        }
      });
    }
  }
}
  
  createGrid(16);
    
  btn.addEventListener('click', () => {
    let size = prompt('How many squeres per side would you like your grid to be?');
  
    if (size === null || size === '') {
      container.textContent = "";
      createGrid(16);
    } else if (size > 0 && size <= 100) {
      container.textContent = "";
      createGrid(size);
    } else {
      alert("You need to enter value from 1 to 100")
    }    
  });