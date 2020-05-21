import React, { useContext } from 'react';
import { store } from './context/store';
import SelectBox from './components/onOutsideClickHOC/SelectBox';
import onlyWithAuthedUser from './components/onlyWithAuthedUser/onlyWithAuthedUser';
import onOutsideClickHOC from './components/onOutsideClickHOC/onOutsideClickHOC';

const TestComponent = () => {
  return <div>Private Component Content</div>;
};

function App() {
  const { state, dispatch } = useContext(store);

  const AuthorizedComponent = onlyWithAuthedUser(TestComponent, state);
  const OutsideClickComponent = onOutsideClickHOC(SelectBox);

  return (
    <div className="App">
      <div className="result">
        <h3> Private Component wrapped in onlyWithAuthedUser HOC:</h3>
        <div className="options">
          <span>Store options: </span>
          <button onClick={() => dispatch({ type: 'LOGIN_USER' })}>
            LOGIN USER
          </button>
          <button onClick={() => dispatch({ type: 'LOGOUT_USER' })}>
            LOGOUT USER
          </button>
          <button onClick={() => dispatch({ type: 'INVALID_STORE' })}>
            SET INVALID STORE
          </button>
        </div>
        <div className="output">
          <AuthorizedComponent />
        </div>
      </div>
      <div className="result">
        <h3> Custom Select Component wrapped in onOutsideClick HOC:</h3>
        <OutsideClickComponent />
      </div>
    </div>
  );
}

export default App;
