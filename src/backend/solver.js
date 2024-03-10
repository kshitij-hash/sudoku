const isValid = (board, r, c, k) => {
    // Check horizontals
    for(let i = 0; i < 9; i++)
    {
        if(board[r][i] === k) return false;
    }

    // Check vertical
    for(let i = 0; i < 9; i++)
    {
        if(board[i][c] === k) return false;
    }

    // Check subgrids
    for(let i = Math.floor(r/3) * 3; i < Math.floor(r/3)*3 + 3; i += 1) {
        for(let j = Math.floor(c/3)*3; j < Math.floor(c/3)*3 + 3; j += 1) {
            if(board[i][j] === k) return false;
        }
    }
    return true;
}

const solveSudokuHelper = (board, r = 0, c = 0) => {
    // Sudoku is a 9x9 array containing pre-filled numbers
    if(r === 9) {
        return true;
    }
    else if(c === 9) {
        return solveSudokuHelper(board, r+1, 0);
    }
    else if(board[r][c] != 0) {
        return solveSudokuHelper(board, r, c+1);
    }
    else {
        for(let i = 1; i <= 9; i += 1) {
            if(isValid(board, r, c, i)) {
                board[r][c] = i;
                if(solveSudokuHelper(board, r, c+1)) {
                    return true;
                }
                board[r][c] = 0;
            }
        }
    }
}

const solveSudoku = board => {
    solveSudokuHelper(board);
    return board;
}

export default solveSudoku;