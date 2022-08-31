import { configureStore } from '@reduxjs/toolkit';

import selectLevel from './slice';

const store = configureStore({ reducer: selectLevel });

export default store;
