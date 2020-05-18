import React, { createContext } from 'react';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
  isAuthed: false,
};

const store = createContext(INITIAL_STATE);
export const { Provider } = store;
export default store;
