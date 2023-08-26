function setGrid(num){
    const grid = document.querySelector('#container');
    grid.setAttribute("class", "grid");

    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            const cell = document.createElement('div');
            cell.setAttribute("class", "cellStyle");
            cell.addEventListener('mouseover', function(){
                this.style.backgroundColor  = "red";
            });

            grid.append(cell);
        }
    }
}

setGrid(16);

