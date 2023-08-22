const grid = document.querySelector('#container');
grid.setAttribute("class", "grid");
    
for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const row = document.createElement('div');
        row.setAttribute("class", "cellStyle");

        grid.append(row);
    }
}
    
