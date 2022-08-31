import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';

export const HoveredData = () => {
  useEffect(() => {}, []);

  const boxes = useSelector(state => state.boxes);
  console.log(boxes);

  return (
    <div className="hovered_thumb--main">
      {boxes.length !== 0 && (
        <div className="hovered_thumb">
          {boxes.map(({ col, row }) => (
            <div className="hovered_item" key={nanoid(4)}>
              Col {col}, Row {row}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
