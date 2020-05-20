import React, { createContext, useReducer } from 'react';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
  isAuthed: true,
};

const store = createContext(INITIAL_STATE);
const { Provider } = store;

const UserStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return {
          user: {
            email: 'joe@doe.com',
            password: '123abc',
          },
          isAuthed: true,
        };
      case 'LOGOUT_USER':
        return {
          user: {
            email: '',
            password: '',
          },
          isAuthed: false,
        };
      case 'INVALID_STORE':
        return {
          user: {
            email: 'joe@doe.com',
          },
          isAuthed: true,
        };

      default:
        return state;
    }
  }, INITIAL_STATE);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, UserStateProvider };
