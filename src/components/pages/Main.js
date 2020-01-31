import React from "react";
import { Jumbotron } from "reactstrap";

const Main = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Jumbotron>
        <h1 className='display-3'>Make A Note</h1>
        <p className='lead'>
          This is a simple Note Making App Built on react. It uses Rails Api as
          its Backend!
        </p>
      </Jumbotron>
    </div>
  );
};

export default Main;
