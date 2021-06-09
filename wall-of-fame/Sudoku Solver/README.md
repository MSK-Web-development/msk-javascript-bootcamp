# Sudoku-Solver
## Introduction
This is a simple **JavaScript** Project which generates a random Sudoku Grid and solves it.

The project is hosted at:https://rishikaghosh.github.io/Sudoku-Solver/
## Main Idea
- <h3>The Setup of Sudoku</h3>
  1. i.In a classic Sudoku game, there is a 9 x 9 grid, with nine 9 x 9 subgrids.
  
  2. Some of the cells in the subgrid will be filled.
  
- <h3>The Task</h3>
     The task of the game is to complete the grid with digits 1 to 9 such that no number should not repeat in the:
     
       1. same row
       2. same column and 
       3. same sub-grid
 The main intention of this project is to solve a **randomly generated grid** under these restrictions using the concept of **Backtracking Algorithms**.
        


## Screenshots

![Screenshot (44)](https://user-images.githubusercontent.com/58912231/106581330-bf92b880-6568-11eb-885a-90a726d220ff.png)

![Screenshot (45)](https://user-images.githubusercontent.com/58912231/106581832-4f386700-6569-11eb-92e6-ee40e39719d8.png)

## Logic
 1. First we find an empty cell in the matrix.
 2. We place a _safe number_ in that cell.
 3. Then we make a _recursive call_ on the subproblem.
 4. For the sub-problem, we create a helper function to check whether _safe number_ satisfies the rules of Sudoku or not. The helper function is as follows:
 ``` javascript
 //checking if the safe number repeats in the same row or column
 function isPossible(board, sr, sc, val) {
    for (var row = 0; row < 9; row++) {
        if (board[row][sc] == val||board[sr][row]==val) {
            return false;
        }
    }


// finding the starting point of a subgrid
    var r = sr - sr % 3;
    var c = sc - sc % 3;
// checking whether the safe number repeats in the sub-grid or not  
    for (var cr = r; cr < r + 3; cr++) {
        for (var cc = c; cc < c + 3; cc++) {
            if (board[cr][cc] == val) {
                return false;
            }
        }
    }
    return true;

}
```
5. If the conditon is satisfied, the function returns true. Else, it backtracks and checks with another value.
## Conclusion
This project was a fun way to understand how backtracking works.
I hope you all like it!
