import React, {Suspense} from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader/loader.jsx';
import {connect} from 'react-redux';
import { getIsfetching } from '../../../selectors/data.js';

export const ComponentLoader = (props) => {
  const {children, isFetching} = props;
  return (
    <>
      {isFetching ? <Loader /> : children}
    </>
  );
};

export default connect(
    (state) => ({
      isFetching: getIsfetching(state)
    })
)(ComponentLoader);

ComponentLoader.propTypes = {
  isFetching: PropTypes.bool,
  children: PropTypes.node
};
