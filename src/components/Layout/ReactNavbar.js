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
      <li className=' m-2' style={{ paddingRight: "500px" }}>
        <span className='x-large'>Hello {user && user.name}</span>
      </li>

      <li>
        <a onClick={onLogout} href='/' className='large'>
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guestlinks = (
    <Fragment>
      <li>
        <Link to='/' className='large'>
          Home
        </Link>
      </li>
      <li>
        <Link to='/signup' className='large'>
          Signup
        </Link>
      </li>
      <li>
        <Link to='/login' className='large'>
          Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary text-center'>
      <h1 className='m-2 '>{title}</h1>

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
