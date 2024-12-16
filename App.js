// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import GameBoard from './components/GameBoard';
import GameControls from './components/GameControls';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Türk Daması</h1>
        <GameBoard />
        <GameControls />
      </div>
    </Provider>
  );
}

export default App;
