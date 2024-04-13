const container = document.querySelector(".container");
const btn = document.querySelector(".btn");


function createGrid(question) {
  
  
  for(let y = 1; y <= question; y++) {
    
    let newDivY = document.createElement("div");
    newDivY.className = "divY";

    newDivY.style.cssText = 'display: flex; flex-grow: 1; justify-content: center; background-color: yellow;  ';
    container.appendChild(newDivY);

    for(let x = 1; x <= question; x++) {
      let newDivX = document.createElement("div");
      newDivX.className = "divX";

      newDivX.style.cssText =
      'display:flex; flex-grow: 1;  background-color:red;';
      
      
      newDivX.addEventListener('mouseover', () => {
          newDivX.style.backgroundColor = "pink";
        });

        newDivY.appendChild(newDivX);
      }
    }
  }
  
  createGrid(16);
  
  
  
  btn.addEventListener('click', () => {
    let question = prompt('How many squeres per side would you like your grid to be?');
    question = question.toUpperCase();
  
    if(question <= 0 || question > 100) {
      alert('You entered too small or too big value! Try again with numbers from 1 to 100.');
    } else {
      container.textContent = "";
      createGrid(question);
    }
  
  })
  
  