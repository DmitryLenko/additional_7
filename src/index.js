module.exports = function solveSudoku(matrix) {
    for(let row = 0; row<matrix.length; row++) {
      for(let col = 0; col < matrix[row].length; col++) {
        if(matrix[row][col] === 0) {
          for (let number = 1; number <= 9; number++) {
            if (checkInRow(number, row, matrix)  &&  checkInColumn(number, col, matrix)  &&  CheckInBox(matrix , col, row, number)) {
              matrix[row][col] = number;
              if(solveSudoku(matrix)) {
                return matrix;
              } else {
                matrix[row][col] = 0;
              }
            }
          }  
          return false;   
        };
      };
    };
    return true;
};

function checkInRow(number, row, matrix) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[row][i] === number) {
      return false;
    }
  }
  return true;
}

function checkInColumn(number, col, matrix) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][col] === number) {
      return false;
    }
  }
  return true;
}

function CheckInBox(matrix , col, row, number) {
  var r = row - row % 3;
  var c = col - col % 3;
  for (let i = r; i < r + 3; i++) {
    for (let j = c; j < c + 3; j++) {
      if (matrix[i][j] === number) {
        return false;
      }
    }
  }
  return true;	
}