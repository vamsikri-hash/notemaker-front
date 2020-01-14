import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";

const ReactNavbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };
  const authlinks = (
    <Fragment>
      <li>hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='/'>
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guestlinks = (
    <Fragment>
      <li>
        <Link to='/signup'>Signup</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>{title}</h1>

      <ul>{isAuthenticated ? authlinks : guestlinks}</ul>
    </div>
  );
};

ReactNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

ReactNavbar.defaultProps = {
  title: "NoteMaker",
  icon: ""
};
export default ReactNavbar;
