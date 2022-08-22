const drawingArea=document.querySelector('.drawingArea');


function createGrid(size=16){
    drawingArea.style.gridTemplateColumns=`repeat( ${size}, ${size}fr)`;
    drawingArea.style.gridTemplateRows=`repeat(${size}, ${size}fr)`;
    for(let i=1; i<=size; i++){
         for (let j=1; j<=size;j++){
             const drawingAreaDiv=document.createElement('div');
             drawingAreaDiv.classList.add('gridElement');
             drawingArea.appendChild(drawingAreaDiv);
}}}

createGrid();

function colorGrid(){
const gridElements=document.querySelectorAll('.gridElement');
gridElements.forEach((gridElement)=> {gridElement.addEventListener('mouseover', ()=>gridElement.classList.add('colour'))});
}

colorGrid();

function reloadGrid(){
    const gridSizeBtn=document.querySelector('#gridSizeBtn');
    gridSizeBtn.addEventListener('click', ()=>{
        const gridElements=document.querySelectorAll('.gridElement');
        gridElements.forEach((gridElement)=> drawingArea.removeChild(gridElement));
        const size=prompt("Write a numeric value. Max:100");
        createGrid(size);
        colorGrid();
})}


reloadGrid();


