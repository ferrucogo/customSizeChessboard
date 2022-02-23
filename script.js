// function generateChessBoard(size) {//debugger
// let contLine= 1;
//     let chessboard = document.getElementsByClassName('chessboard')[0]

//     for (let i = 0; i < size * size; i++) {
//         let chessBox = document.createElement('div');
//         chessBox.className = 'chess-box';
//         if (i % 2 === 0) {

//             chessBox.style.backgroundColor = 'white';
//         } else {
//             chessBox.style.backgroundColor = 'black';

//         }
//         if (size*(contLine) === i+1) {
//              chessboard.appendChild(chessBox);
//              chessboard.appendChild(document.createElement('br'));
//              contLine++;
//         } else{
//             chessboard.appendChild(chessBox);

//         }


//     }
// }
let cells = [];
function generateChessBoard(size = 6) {
    let maxValue;
    if (size <= 100 && size >= 3) {
        let dimension = 40;
        let chessboard = document.getElementsByClassName('chessboard')[0]
        chessboard.innerHTML = '';
        cells = [];
        for (let i = 0; i < size; i++) {
            let lineContainer = document.createElement('div');
            for (let j = 0; j < size; j++) {
                let chessBox = document.createElement('div');
                chessBox.className = 'chess-box';
                chessBox.style.width = dimension / size + 'vw';
                chessBox.style.height = dimension / size + 'vw';

                chessBox.style.zIndex = (i + j) % 2 === 0 ? '0' : '1';

                lineContainer.style.height = dimension / size + 'vw';
                if ((i + j) % 2 === 0) {
                    chessBox.style.backgroundColor = 'white';
                } else {
                    chessBox.style.backgroundColor = 'black';
                }
                cells.push(chessBox)
                lineContainer.appendChild(chessBox);
            }
            chessboard.appendChild(lineContainer);
            chessboard.appendChild(document.createElement('br'));
            
        }
        //requestAnimationFrame(() => animate(0))
        //requestAnimationFrame(() => animateGradientColor(0));
        //requestAnimationFrame(() => animateGradientOpacity(0));
        requestAnimationFrame(() => rotateCells(0));
        
    } else if (size > 100 || size < 3) {
        alert("Non puoi generare una scacchiera con dimensione " + size + "x" + size + "\nLa dimensione deve essere compresa tra 3 e 100\nNe verrà creata una per la sua dimensione massima accettata (100x100)");
        document.getElementById('amount').value = 100;
        generateChessBoard(100);
    }


}


function animate(time) {

    realtime = time / 60

    let index = Math.floor(realtime) % cells.length;

    // if (cells[index - 1]) {
    //     cells[index - 1].style.backgroundColor = '';
    // } else {
    //     cells[cells.length - 1].style.backgroundColor = '';
    // }

    // if (cells[index].style.backgroundColor === 'white') {
    //     cells[index].style.backgroundColor = 'black';
    // } else if (cells[index].style.backgroundColor === 'black') {
    //     cells[index].style.backgroundColor = 'white'
    // }
    // cells[index].style.backgroundColor = (index + 1) % 2 === 0 ? 'black' : 'white';


    
    cells[index].style.backgroundColor = index + row % 2 ? 'black' : 'white';
    
    rowNumber++;
    requestAnimationFrame(() => animate(time + 1))
}

function animateGradientColor(time) {
    let index = time % cells.length;
    let colorStep = 255 / cells.length;
    let red = colorStep * (index + 1);
    cells[index].style.backgroundColor = 'rgb(' + red +',0,0)';
    requestAnimationFrame(() => animateGradientColor(time + 1));
}

function animateGradientOpacity(time) {
    let index = time % cells.length;
    let opacity = 1 / cells.length;
    cells[index].style.backgroundColor = 'rgb(255,0,0,' + opacity * index + ')';
    requestAnimationFrame(() => animateGradientOpacity(time + 1));
}

function rotateCells(time) {
    realtime = time / 10;
    let angle = 360 / 10;

    for (const cell of cells) {
        cell.style.transform = 'rotate(' + (angle * realtime) + 'deg)';
    }
    
    requestAnimationFrame(() => rotateCells(time + 1));
}