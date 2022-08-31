import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNewLevel } from 'redux/slice';
import { getInfo } from './api';
import { nanoid } from 'nanoid';

export const Level = () => {
  const [allLevels, setAllLevels] = useState('');
  let dispatch = useDispatch();

  useEffect(() => {
    getInfo().then(r => setAllLevels(r));
  }, []);

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(setNewLevel(e.currentTarget[0].value));
  };

  return (
    <div className="select_thumb">
      <form
        onSubmit={e => {
          onFormSubmit(e);
        }}
      >
        {allLevels !== '' && (
          <select className="select_level">
            {allLevels.map(level => {
              return (
                <option value={level.field} key={nanoid(4)}>
                  {level.name}
                </option>
              );
            })}
          </select>
        )}
        <button type="submit" className="select_btn">
          Select
        </button>
      </form>
    </div>
  );
};
