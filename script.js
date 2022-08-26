const drawingArea=document.querySelector('.drawingArea');

//generates the grid of the drawing area with an intial size of 16X16 and then based on the user input
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

//generates a new grid if the user selects the "Grid size" button, according to the number the user entered
function reloadGrid(){
    const gridElements=document.querySelectorAll('.gridElement');
    gridElements.forEach((gridElement)=> drawingArea.removeChild(gridElement));
    const size=prompt("Write the number of squares per side. Max:100");
    if (size<=100)createGrid(size);
       else alert("The value you entered is not valid");
    colorPreviewRainbow.style.borderColor="black";
    colorPreviewBlack.style.borderColor="black";
}

const gridSizeBtn=document.querySelector('#gridSizeBtn');
gridSizeBtn.addEventListener('click', ()=> reloadGrid());

//colors the grid elements black when the mouse goes over them, if the user selects the "Pen" or "color preview black" button
function colorGrid(){
    colorPreviewBlack.style.borderColor="yellow";
    colorPreviewRainbow.style.borderColor="black";
    const gridElements=document.querySelectorAll('.gridElement');
    gridElements.forEach((gridElement)=> {gridElement.addEventListener('mouseover', ()=>gridElement.style.backgroundColor='rgb(43, 42, 42)')});
}

const penBtn=document.querySelector('#penBtn');
penBtn.addEventListener('click', () => colorGrid());

const colorPreviewBlack=document.querySelector('.colorPreviewBlack');
colorPreviewBlack.addEventListener('click', () => colorGrid());

//colors the grid elements a different random color when the mouse goes over them, if the user selects the "color preview rainbow" button
function randomColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}

function colorGridRainbow(){
    colorPreviewRainbow.style.borderColor="yellow";
    colorPreviewBlack.style.borderColor="black";
    const gridElements=document.querySelectorAll('.gridElement');
    gridElements.forEach((gridElement)=> {gridElement.addEventListener('mouseover', ()=> gridElement.style.backgroundColor=`#${randomColor()}`)});
}

const colorPreviewRainbow=document.querySelector('.colorPreviewRainbow');
colorPreviewRainbow.addEventListener('click', () => colorGridRainbow());

//when the user selects the "Clear" button, the drawing area becomes white again
function clear(){
    const gridElements=document.querySelectorAll('.gridElement');
    gridElements.forEach((gridElement)=> gridElement.style.backgroundColor='antiquewhite')
}

const clearBtn=document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => clear());

//when the user selects the "Eraser" button, the mouseover event will make the grid element white
function eraser(){
    colorPreviewRainbow.style.borderColor="black";
    colorPreviewBlack.style.borderColor="black";
    const gridElements=document.querySelectorAll('.gridElement');
    gridElements.forEach((gridElement)=> {gridElement.addEventListener('mouseover', ()=> gridElement.style.backgroundColor='antiquewhite')});
    }

const eraserBtn=document.querySelector('#eraserBtn');
eraserBtn.addEventListener('click', () => eraser());