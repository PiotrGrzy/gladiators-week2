import React from 'react';

function Login() {
  return (
    <div>
      <p>You must be signed in to view this content</p>
      <form action="" className="form">
        <input type="text" placeholder="Login" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default Login;
