import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Logo} from '../logo/logo.jsx';
import {ActionCreator} from '../../reducers/index.js';


const SignIn = (props) => {
  const handleInputChange = (e) => {
    const {updateFieldValue} = props;
    const field = e.currentTarget.type;
    const value = e.currentTarget.value;
    updateFieldValue(field, value);
  };

  const handleSubmit = (e) => {
    const {submitForm} = props;
    e.preventDefault();
    submitForm();
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                onChange={handleInputChange}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                onChange={handleInputChange}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};


SignIn.propTypes = {
  updateFieldValue: PropTypes.func,
  submitForm: PropTypes.func,
};


export default connect(
    null,
    (dispatch) => ({
      updateFieldValue: (field, value) => dispatch(ActionCreator.updateFieldValue(field, value)),
      submitForm: () => dispatch(ActionCreator.submitLoginForm()),
    })
)(SignIn);
