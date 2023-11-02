const container=document.querySelector(".container");
const message=document.querySelector(".message");

let color='black';
function getSize(){
    container.innerHTML='';
    
    let input=prompt("choose a size and reset(minimum=1,maximum=100)");
    if(input==""){
message.innerHTML="Please input a number";
    }else if(input < 0 || input > 100){
        message.innerHTML="Please input a number between 1 to 100 only";
    }else{
        message.innerHTML="Now you can play";
    }
    size(input);
}

function size(size){
container.style.gridTemplateColumns=`repeat(${size},1fr)`;
container.style.gridTemplateRows=`repeat(${size},1fr)`;
let gridSize=size*size;
for(let i=0;i<gridSize;i++){
    const box=document.createElement('div');
    box.classList.add('box');
    box.addEventListener('mouseover',function colorDiv(){
       
        if(color=='rainbow'){
            box.style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`;
        }else if(color=='black'){
            box.style.backgroundColor='black';
        }else{
            box.style.backgroundColor='white';
        }
    });
    container.insertAdjacentElement('beforeend',box);
}

return container;
}

function setColor(chooseColor){
    color=chooseColor;
 };