const row = document.createElement('div');
const box = document.createElement('div');
const container = document.querySelector('.container');
row.classList.add('row');
box.classList.add('box');

function addBoxListeners(){
    boxes.forEach(box => {
        box.addEventListener('mouseover', ()=> {
            box.classList.add('changeColour');
        }) 
    });
}

function setCanvas(){
    const size = prompt("Enter the size of the canvas");
    if(size > 100){
        size = 100;
    }
    // Remove all current boxes from container
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    // Create new boxes
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            // box.style.width = `${100/size}%`;
            // box.style.height = `${100/size}%`;
            row.appendChild(box.cloneNode(true));
        }
        container.appendChild(row.cloneNode(true));
    }

    addBoxListeners();
}



// Create a 16 by 16 grid of divs inside the container div
function createInitCanvas(){
    for(let i = 0; i < 16; i++) {
        row.appendChild(box.cloneNode(true));
    }
    for(let j = 0; j < 16; j++) {
        container.appendChild(row.cloneNode(true));
    }
}


addBoxListeners();
