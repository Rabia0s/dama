
import React from 'react';
import { useDispatch } from 'react-redux';
import { resetGame } from '../redux/actions';

const GameControls = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetGame());
  };

  return (
    <div className="game-controls">
      <button onClick={handleReset}>Reset Game</button>
    </div>
  );
};

export default GameControls;
