
// redux/reducer.js
const initialState = {
  board: [
    ['b', null, 'b', null, 'b', null, 'b', null], // 1. satırda siyah taşlar
    [null, 'b', null, 'b', null, 'b', null, 'b'], // 2. satırda siyah taşlar
    ['b', null, 'b', null, 'b', null, 'b', null], // 3. satırda siyah taşlar
    [null, null, null, null, null, null, null, null], // 4. satır boş
    [null, null, null, null, null, null, null, null], // 5. satır boş
    ['w', null, 'w', null, 'w', null, 'w', null], // 6. satırda beyaz taşlar
    [null, 'w', null, 'w', null, 'w', null, 'w'], // 7. satırda beyaz taşlar
    ['w', null, 'w', null, 'w', null, 'w', null], // 8. satırda beyaz taşlar
  ],
  currentPlayer: 'w', // Beyaz taşla başlasın
  winner: null,
  moveHistory: [],
};

  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case 'MAKE_MOVE':
        const { row, col } = action.payload;
        const newBoard = state.board.map((r) => r.slice());
        newBoard[row][col] = state.currentPlayer;
  
        return {
          ...state,
          board: newBoard,
          currentPlayer: state.currentPlayer === 'w' ? 'b' : 'w',
          moveHistory: [...state.moveHistory, action.payload],
        };
  
      case 'RESET_GAME':
        return { ...initialState };
  
      default:
        return state;
    }
  }
  
  export default reducer;
  