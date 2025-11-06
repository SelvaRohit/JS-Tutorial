var cells=document.querySelectorAll(".board")
// console.log(cells)
function userClicked(event){
console.log(event.target)
event.target.textContent="X"
}
function Restart(){
    cells.forEach(cell => { cell.textContent=""
        
    });
}
cells.forEach(cell => { cell.addEventListener('click',userClicked)
    
});