"use strict";

// 'require' external code //
const assert = require('assert');
const isValidSudoku = require('../index.js').isValidSudoku;
const isSolved = require('../index.js').isSolved;

// Test fixtures //
const validBoard = [
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
const zeroes = validBoard.map(row => row.map(val => 0));

// Tests //
describe('isValidSudoku(board)', function() {
  it('should return true if the board is a valid Sudoku solution', function(){
    assert.equal(isValidSudoku(validBoard), true);
    assert.equal(isValidSudoku(zeroes), true);
  })
  it('should return false if there are duplicate (non-zero) values in a row', function(){
    let badVals = [1, 2, 3, 1, 4, 5, 0, 7, 8];
    for (let row = 0; row < 9; row++) {
      [validBoard, zeroes].forEach((testCase)=>{
        testCase = testCase.map(row => row.slice());
        testCase[row] = badVals;
        assert.equal(isValidSudoku(testCase), false);
      })
    }
  });
  it('should return false if there are duplicate (non-zero) values in a column', function(){
      let badVals = [1, 2, 3, 1, 4, 5, 0, 7, 8];
      for (let col = 0; col < 9; col++) {
        [validBoard, zeroes].forEach((testCase)=>{
          testCase = testCase.map(row => row.slice());
          badVals.forEach((value, index)=> testCase[index][col] = value)
          assert.equal(isValidSudoku(testCase), false);
        });
      }
  });
  it('should return false if there are duplicate (non-zero) values in a subsquare', function() {
    for (let sq = 0; sq < 9; sq++) {
      let startingRow = 3*(Math.floor(sq/3));
      let startingCol = 3*(sq%3);
      let badSquare = [[1,2,3],[1,4,5],[0,7,8]];
      [validBoard, zeroes].forEach((testCase)=>{
        testCase = testCase.map(row => row.slice());
        for (let i = 0; i < 3; i++){
          for (let j = 0; j < 3; j++){
            testCase[startingRow + i][startingCol + j] = badSquare[i][j];
          }
        }
        assert.equal(isValidSudoku(testCase), false);
      });
    }
  });
});

describe('isSolved(board)', function(){
  it('should return true if the board is both valid and complete (no zeros)', function(){
    assert.equal(isSolved(validBoard), true);
  });
  it('should return false if the board is invalid', function(){
    let testCase = validBoard.map(row => row.slice());
    let badSquare = [[1,2,3],[1,4,5],[6,7,8]];
    let startingRow = 3;
    let startingCol = 3;
    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++){
        testCase[startingRow + i][startingCol + j] = badSquare[i][j];
      }
    }
    assert.equal(isSolved(testCase), false);
  });
  it('should return false if the board is valid but incomplete', function(){
    let testCase = zeroes.map(row => row.slice());
    assert.equal(isSolved(testCase), false);
  });
  it('should return false if the board is both invalid and incomplete', function(){
    let testCase = validBoard.map(row => row.slice());
    let badSquare = [[1,2,3],[1,4,5],[0,0,0]];
    let startingRow = 3;
    let startingCol = 3;
    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++){
        testCase[startingRow + i][startingCol + j] = badSquare[i][j];
      }
    }
    assert.equal(isSolved(testCase), false);
  });
});
