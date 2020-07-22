import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <Link to={`/login`} >
          <img src="../img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </Link>
      </div>
    </div>
  );
};

export default Login;
