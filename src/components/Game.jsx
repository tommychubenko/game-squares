import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHovered, setUnHovered } from 'redux/slice';
import { nanoid } from 'nanoid';

export const Game = ({ newLevel }) => {
  const [boxes, setBoxes] = useState([]);

  let dispatch = useDispatch();
  const level = useSelector(state => state.level);

  useEffect(() => {
    level !== '' && markupGame(level);
  }, [level]);

  const markupGame = number => {
    setBoxes([]);
    for (let r = 1; r <= number; r += 1) {
      for (let c = 1; c <= number; c += 1) {
        setBoxes(prevState => [
          ...prevState,
          { id: nanoid(4), row: r, col: c },
        ]);
      }
    }
  };

  return (
    <div>
      <div
        className="box_field"
        style={{
          gridTemplateColumns: `repeat(${level}, 1fr)`,
          width: `${level * 25}px`,
        }}
      >
        {boxes &&
          boxes.map(box => {
            return (
              <div
                className="play_box"
                key={nanoid(4)}
                name="box"
                onMouseEnter={e => {
                  e.currentTarget.classList.toggle('play_box--hovered');

                  e.currentTarget.classList.value ===
                  'play_box play_box--hovered'
                    ? dispatch(
                        setHovered({ id: box.id, row: box.row, col: box.col })
                      )
                    : dispatch(setUnHovered(box.id));
                }}
              ></div>
            );
          })}
      </div>
    </div>
  );
};
