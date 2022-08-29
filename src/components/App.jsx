import { Game } from './Game';
import { HoveredData } from './HoveredData';
import { Level } from './Level';

export const App = () => {
  return (
    <div className="container">
      <div>
        <Level />
        <Game />
      </div>
      <HoveredData />
    </div>
  );
};
