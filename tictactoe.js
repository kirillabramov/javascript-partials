const arrayToCheck = [
 [1, 2, 1],
 [1, 2, 2],
 [2, 1, 1],
];

const winningConditionsIndexes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const gameStates = {
  GAME_IS_NOT_FINISHED: -1,
  GAME_DRAW: 0,
};

function ticTacToe(input) {
    const arr = input.flat();
    let a, b, c;

    for (const [firstVal, secondVal, thirdVal] of winningConditionsIndexes) {
        a = arr[firstVal];
        b = arr[secondVal];
        c = arr[thirdVal];

        const isWinnerExist = a !== 0 && a === b && b === c;
              
        if (isWinnerExist) {
            return a;
        }
    }

    return (a === 0 || b === 0 || c === 0) ? gameStates.GAME_IS_NOT_FINISHED : gameStates.GAME_DRAW;
}
