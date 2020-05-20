import React from 'react';

export function requireAuthentication(Component) {
  return class AuthenticatedComponent extends React.Component {
    render() {
      const loginErrorMessage = (
        <div>
          Please <a href="/login">login</a> in order to view this part of the
          application.
        </div>
      );

      return (
        <div>
          {this.props.isAuthenticated === true ? (
            <Component {...this.props} />
          ) : (
            loginErrorMessage
          )}
        </div>
      );
    }
  };
}

export default requireAuthentication;
