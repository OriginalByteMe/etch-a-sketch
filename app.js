const row = document.createElement('div');
const box = document.createElement('div');
const container = document.querySelector('.container');
row.classList.add('row');
box.classList.add('box');

function addBoxListeners(){
    const boxes = document.querySelectorAll('.box');
    
    
    boxes.forEach(box => {
        box.addEventListener('mouseover', ()=> {
            const color = randomColor();
            let brightness = 100;
            if(!box.classList.contains('passed')){
                box.setAttribute('style', `background-color: ${color}`);
                box.classList.add('passed');
            }else{
                brightness = brightness - 10;
                box.setAttribute('style', `background-color: ${color}; filter: brightness(${reduceBrightness(brightness)}%);`);
            }
        }) 
    });
}

function setCanvas(){
    const size = prompt("Enter the size of the canvas");
    console.log("size", size);
    if(size > 100){
        size = 100;
    }

    console.log("Size after check", size);
    // Remove all current boxes from container
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    // Create new boxes

    for(let i = 0; i < size; i++) {
        row.appendChild(box.cloneNode(true));
    }
    for(let j = 0; j < size; j++) {
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

function randomColor(){
    return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
}

function reduceBrightness(brightness){
    return brightness >0 ? brightness - 10 : 0;
}

createInitCanvas();
addBoxListeners();
