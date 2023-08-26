function size(){
    let num = prompt("Please enter the number of cells per side (between 1 and 100)");
    const grid = document.querySelector('#container');
    grid.innerHTML = '';
    setGrid(num);
}

function setGrid(num){
    const grid = document.querySelector('#container');
    grid.setAttribute("class", "grid");
    
    let x = (960/num) - 2;

    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            const cell = document.createElement('div');
            cell.setAttribute("class", "cellStyle");
            cell.style.width = x + "px";
            cell.style.height = x + "px";
            cell.addEventListener('mouseover', function(){
                this.style.backgroundColor  = "red";
            });

            grid.append(cell);
        }
    }
    
    
}

setGrid(16);

