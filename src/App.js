import React, { useContext } from 'react';
import store from './context/store';
import onlyWithAuthedUser from './components/onlyWithAuthedUser/onlyWithAuthedUser';

const TestComponent = () => {
  return <div>TEst</div>;
};

function App() {
  const state = useContext(store);
  console.log(state);

  const AuthorizedComponent = onlyWithAuthedUser(TestComponent, state);
  return (
    <div className="App">
      App
      <AuthorizedComponent />
    </div>
  );
}

export default App;
