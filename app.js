const row = document.createElement('div');
const column = document.createElement('div');
const container = document.querySelector('.container');

row.classList.add('row');
column.classList.add('column');

row.textContent = 'row';
column.textContent = 'column';

// Create a 16 by 16 grid of divs inside the container div

for(let i = 0; i < 16; i++) {
    row.appendChild(column.cloneNode(true));
}
for(let j = 0; j < 16; j++) {
    container.appendChild(row.cloneNode(true));
}

