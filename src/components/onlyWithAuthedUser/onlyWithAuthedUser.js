// stwórz HOCa onlyWithAuthedUser, który korzysta z mockedStore
import React from 'react';
import Login from './Login';

const onlyWithAuthedUser = (Component, store) => (props) => {
  const checkStoreStructure = () => {
    if (
      store.hasOwnProperty('user') &&
      store.hasOwnProperty('isAuthed') &&
      store.user.hasOwnProperty('email') &&
      store.user.hasOwnProperty('password')
    ) {
      return true;
    }
    return false;
  };

  if (!checkStoreStructure())
    return <div>Invalid store data format in component: {Component.name}</div>;

  return <div>{store.isAuthed ? <Component {...props} /> : <Login />}</div>;
};
export default onlyWithAuthedUser;
// Przetestuj poniższe test casy:
// jeśli w mockedStore użytkownik ma pusty email i password
// i nie jest zalogowany (isAuthed === false) to HOC ma pokazać komponent Login gdzie jakoś wyświetli dane {email, password}

// jeśli jest zalogowany (isAuthed === true) to HOC pokaże Component
// jeśli store nie ma poprawnego formatu, pokaże komponent Error z odpowiednią informacją, że store na komponencie Component.name się zepsuł
