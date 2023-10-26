import Board from './components/Board';
import UpcomingBlocks from './components/UpcomingBlocks';
import { useTetris } from './hooks/useTetris';

function App() {
  const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris();

  return (
    <div className="app">
      <Board currentBoard={board} />
      <div className="controls">
        <h1>Tetris</h1>
        <h2>Score: {score}</h2>
        {isPlaying ? (
          <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
        ) : (
          <button onClick={startGame}>New Game</button>
        )}
      </div>
    </div>
  );
}

export default App;
