import { AppBar } from './AppBar';
import { Game } from './Game';
import { HoveredData } from './HoveredData';
import { Level } from './Level';

export const App = () => {
  return (
    <div className="container">
      <div>
        <AppBar />
        <Level />
        <Game />
      </div>
      <HoveredData />
    </div>
  );
};
