const matrix = document.querySelector('.matrix');
let flag = true;

for(let i=0; i<81; i++){
    const button = document.createElement('button')
    button.classList.add(`box${i}`)
    matrix.appendChild(button)
}

matrix.addEventListener('click',(e) => {
    const buttonClass = e.target.classList[0];
    e.target.innerText = 'Q'
    getIndex(buttonClass.slice(3));
    
})

function getIndex(n){
    n=parseInt(n);
    console.log(n);
    for(let i=0,c=0; i<9; i++){
        for(let j=0; j<9; j++, c++){
            if(c==n){
                queen(i,j);
                return;
            }
        }
    }
}

function queen(row,col){
    let n=9;
    let board = new Array(n).fill().map(() => new Array(n).fill(false));
    let cols = new Array(n).fill(false);
    let ndiag = new Array(2*n-1).fill(false);
    let rdiag = new Array(2*n-1).fill(false);
    board[row][col]=true;
    cols[col]=true;
    ndiag[row+col]=true;
    rdiag[row-col+board.length-1]=true; 
	solve(board,cols,ndiag,rdiag,0,row,col);
}

function solve(board,cols,ndiag,rdiag,row,i,j){
    console.log(row)
    if(row==board.length-1){
       if(flag==true) display(board,i);
        return;
    }
    for(let col=0; col<board.length; col++){
        if(board[row][col]==false && cols[col]==false && ndiag[row+col]==false && rdiag[row-col+board.length-1]==false){
            board[row][col]=true;
            cols[col]=true;
            ndiag[row+col]=true;
            rdiag[row-col+board.length-1]=true;
            solve(board,cols,ndiag,rdiag,row+1,i,j);
            if(true){
            board[row][col]=false;
            cols[col]=false;
            ndiag[row+col]=false;
            rdiag[row-col+board.length-1]=false;
            }
        }
    }
}

function display(board,row){
    for(let i=0, c=0; i<9; i++){
        for(let j=0; j<9; j++,c++){
            if(board[i][j]==true && i!=row){
                console.log(`box${c}`)
                const box = document.querySelector(`.box${c}`)
                box.innerText='Q'
            }
        }
    }
	
    flag = false;
}
