"use strict";

// 'require' external code //
const assert = require('assert');
const isValidSudokuMove = require('../index.js').isValidSudokuMove;
const solveSudoku = require('../index.js').solveSudoku;

// Test fixtures //
const validSolvedBoard = [
  [1,2,3,4,5,6,7,8,9],
  [4,5,6,7,8,9,1,2,3],
  [7,8,9,1,2,3,4,5,6],
  [2,3,1,5,6,4,8,9,7],
  [5,6,4,8,9,7,2,3,1],
  [8,9,7,2,3,1,5,6,4],
  [3,1,2,6,4,5,9,7,8],
  [6,4,5,9,7,8,3,1,2],
  [9,7,8,3,1,2,6,4,5]
];
const zeroes = validSolvedBoard.map(row => row.map(val => 0));

describe('isValidSudokuMove(board, row, col, val)', function(){
  it('should return true when a legal Sudoku move is made', function(){
    let board = validSolvedBoard.map(row => row.slice());
    for (let row = 4; row < 9; row++){
      for (let col = 0; col < 9; col++){
        let value = board[row][col];
        board[row][col] = 0;
        assert.equal(isValidSudokuMove(board, row, col, value), true)
      }
    }
  });
  it('should return false if the move would produce an invalid board', function(){
    let board = validSolvedBoard.map(row => row.slice());
    for (let row = 0; row < 9; row++){
      for (let col = 0; col < 9; col++){
        let badValues = [0,1,2,3,4,5,6,7,8,9].filter(val => val !== board[row][col]);
        assert.equal(isValidSudokuMove(board, row, col, badValues[Math.floor(Math.random()*8)]), false)
      }
    }
  });
  it('should return false if the cell is already filled, even if it would otherwise be valid', function(){
    let board = validSolvedBoard.map(row => row.slice());
    for (let row = 0; row < 9; row++){
      for (let col = 0; col < 9; col++){
        let value = board[row][col];
        assert.equal(isValidSudokuMove(board, row, col, value), false)
      }
    }
  });
});

describe('solveSudoku(board)', function(){
  it('should return a solved Sudoku board when given a board that is solvable', function(){
    for (let row = 0; row < 9; row++){
      let board = validSolvedBoard.map(row => row.slice());
      board[row] = [0,0,0,0,0,0,0,0,0];
      assert.deepEqual(solveSudoku(board),validSolvedBoard);
    }
  });
  it('should return null when given a board that is not solvable.');
});
