[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Homework : Sudoku Validator

## Setup

Before you begin, please fork this repo to your GitHub account, and then clone
that fork somewhere on your local machine.
Then, navigate to the root directory of the repository and run `npm install` --
this will download any dependencies that have been specified for this assignment
to a directory called `node_modules`.

As you work through this assignment, you should make commits regularly,
following our [commit guidelines](./commit-guidelines) as well as you can.
In particular, since there are automated tests built into this assignment, we
recommend that you make a commit every time that you pass a new test, in
addition to any other time you feel might be appropriate (e.g. just before
trying out something new).

## Instructions

Complete the definition `isValidSudoku`, a function found in `index.js` which
returns `true` or `false` based on whether or not a Sudoku board is valid.

![Sudoku Board](https://cloud.githubusercontent.com/assets/3653013/17795126/ad47fddc-6583-11e6-878f-0e24230d93cd.png)

In this context 'valid' means that in every row, column, and subsquare
(the nine 3x3 boxes that make up the entire board)
the numbers 1 through 9 each appear no more than once.

`isValidSudoku` must take one argument -- a 9x9 two dimensional
array representing a Sudoku board. An example is
shown below. '0' represents an empty square.

e.g.

```javascript
[
  [ 4, 3, 5, 2, 6, 9, 7, 8, 1 ],
  [ 6, 8, 2, 5, 7, 1, 4, 9, 3 ],
  [ 1, 9, 7, 8, 3, 4, 5, 6, 2 ],
  [ 8, 2, 6, 1, 9, 5, 3, 4, 7 ],
  [ 3, 7, 4, 6, 8, 2, 9, 1, 5 ],
  [ 9, 5, 1, 7, 4, 3, 6, 2, 8 ],
  [ 0, 0, 0, 3, 2, 6, 8, 7, 4 ],  // In this example, the lower-left subsquare
  [ 0, 0, 0, 9, 5, 7, 1, 3, 6 ],  // is completely empty, while the rest of the
  [ 0, 0, 0, 4, 1, 8, 2, 5, 9 ]   // board is filled in.
];
```

Assume for simplicity's sake that all Sudoku boards will have acceptable values
(i.e. numbers from 0 to 9) in each cell, and not any other kind of value.

> HINT: Try breaking up this problem into smaller problems. Are there any
> 'helper' functions we could create to make things easier?

Once you finish `isValidSudoku`, fill in the second function given in
`index.js`, `isSolved`. This function takes a board as an argument (in the
same way that `isValidSudoku` does), and returns `true` or `false` based on
whether or not the board is

-   valid, and
-   completely filled-in (i.e. no zeroes)

### Testing Your Work

A set of automated tests, written in the [Mocha.js](https://mochajs.org/)
testing framework, has been provided for you with this assignment.
To run these tests, type `npm test` into the console from the root directory
of this repo. Test your work regularly, and read the feedback from the tests
carefully -- it may give you a clue about what to do next.

### Reach Target

> NOTE: Do not attempt until every other objective is met.

Suppose that we wanted to write a variation of this function to use in the
context of an interactive Sudoku browser game. Re-testing the entire board
after every move is kind of wasteful, so let's instead test the validity of
each move as it's made. `isValidSudokuMove` should take four arguments: the
board,the row and column of the cell that the player wants to fill, and the
value that the player is trying to place there. As before, this function
should return either `true` or `false`. Do not allow the player to fill a
cell that has already been filled -- that is also an invalid move. Assume
that the player can only input values that are numbers between 1 and 9.

Tests have also been written for this reach target. To run them, use the
command `mocha test/reach.js`.

## Submitting Your Work

When you're ready to submit your work, push the code to your fork on GitHub.
Then, create an issue on the `wdi-remote-...` repo using the same convention
as before: "YourGitHubUsername -- Week XX Day XX". Be sure to add a link that
points to your fork to the issue!
