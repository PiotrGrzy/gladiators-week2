// stwórz HOCa onlyWithAuthedUser, który korzysta z mockedStore
import React from 'react';
import Login from './Login';

const mockedStore = {
  user: {
    email: '',
    password: '',
  },
  isAuthed: true,
};
const onlyWithAuthedUser = (Component, store) => (props) => {
  return <div>{store.isAuthed ? <Component /> : <Login />}</div>;
};
export default onlyWithAuthedUser;
// Przetestuj poniższe test casy:
// jeśli w mockedStore użytkownik ma pusty email i password
// i nie jest zalogowany (isAuthed === false) to HOC ma pokazać komponent Login gdzie jakoś wyświetli dane {email, password}

// jeśli jest zalogowany (isAuthed === true) to HOC pokaże Component
// jeśli store nie ma poprawnego formatu, pokaże komponent Error z odpowiednią informacją, że store na komponencie Component.name się zepsuł
