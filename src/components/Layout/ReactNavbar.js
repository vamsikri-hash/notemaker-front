import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ReactNavbar = ({ title, icon }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>{title}</h1>

      <ul>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
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
