// src/components/GameBoard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeMove } from '../redux/actions';

const GameBoard = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const currentPlayer = useSelector((state) => state.currentPlayer);

  const handleCellClick = (row, col) => {
    // Hamle yapılacak hücre boşsa, taş yerleştir
    if (board[row][col] === null) {
      dispatch(makeMove(row, col));
    }
  };

  return (
    <div className="game-board-container">
      <div className="game-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => {
              // Karelerin siyah mı beyaz mı olduğunu belirleme
              const isBlackCell = (rowIndex + colIndex) % 2 !== 0;
              return (
                <div
                  key={colIndex}
                  className={`cell ${isBlackCell ? 'black' : 'white'}`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                >
                  {cell && (
                    <span className={`stone ${cell === 'w' ? 'white' : 'black'}`}>
                      {cell === 'w' ? '⚪' : '⚫'}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="current-player">Current Player: {currentPlayer === 'w' ? 'White' : 'Black'}</div>
    </div>
  );
};

export default GameBoard;
