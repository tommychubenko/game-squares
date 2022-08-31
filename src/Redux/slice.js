import { createSlice } from '@reduxjs/toolkit';

const selectLevel = createSlice({
  name: 'levels',
  initialState: { level: 5, boxes: [] },
  reducers: {
    setHovered(state, action) {
      return { level: state.level, boxes: [...state.boxes, action.payload] };
    },
    setUnHovered(state, action) {
      const index = state.boxes.indexOf(
        state.boxes.find(contact => contact.id === action.payload)
      );
      state.boxes.splice(index, 1);
    },
    setNewLevel(state, action) {
      return { level: action.payload, boxes: [] };
    },
  },
  extraReducers: {},
});

export default selectLevel.reducer;

export const { setHovered, setUnHovered, setNewLevel } = selectLevel.actions;
