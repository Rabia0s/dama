
export const makeMove = (row, col) => ({
    type: 'MAKE_MOVE',
    payload: { row, col },
  });
  
  export const resetGame = () => ({
    type: 'RESET_GAME',
  });
  