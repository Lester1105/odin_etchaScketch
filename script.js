const container=document.querySelector(".container");

function size(size){
size=prompt("choose a size and reset(minimum=4,maximum=100)");
container.style.gridTemplateColumns=`repeat(${size},1fr)`;
container.style.gridTemplateRows=`repeat(${size},1fr)`;

let gridSize=size*size;
for(let i=0;i<gridSize;i++){
    const box=document.createElement('div');
    box.classList.add('box');
    container.insertAdjacentElement('beforeend',box);
}

return container;
}