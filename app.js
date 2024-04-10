const container = document.querySelector(".container");


function createDivs() {
  for(let newDiv = 0; newDiv <= 16; newDiv++) {
    let newDiv = document.createElement("div");
    newDiv.style.borderColor = 'black';
    container.appendChild(newDiv);

  }
}

createDivs();


