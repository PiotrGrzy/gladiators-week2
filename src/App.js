import React, { useContext } from 'react';
import { store } from './context/store';
import SelectBox from './components/SelectBox/SelectBox';
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
            AUTHORIZED
          </button>
          <button onClick={() => dispatch({ type: 'LOGOUT_USER' })}>
            UNAUTHORIZED
          </button>
          <button onClick={() => dispatch({ type: 'INVALID_STORE' })}>
            INVALID STORE DATA
          </button>
        </div>
        <fieldset className="output">
          <legend>Output</legend>
          <AuthorizedComponent />
        </fieldset>
      </div>
      <div className="result">
        <h3> Custom Select Component wrapped in onOutsideClick HOC:</h3>
        <OutsideClickComponent />
      </div>
    </div>
  );
}

export default App;
