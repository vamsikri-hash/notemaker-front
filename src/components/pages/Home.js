import React, { useContext, useEffect } from "react";
import NoteForm from "../notes/NoteForm";
import Notes from "../notes/Notes";
import AuthContext from "../../context/auth/authContext";
import Spinner from "../Layout/Spinner";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loading } = authContext;
  console.log(loading);
  useEffect(() => {
    authContext.loaduser();
    //eslint-disable-next-line
  }, []);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='grid-2'>
        <div>
          <NoteForm />
        </div>
        <div>
          <Notes />
        </div>
      </div>
    );
  }
};

export default Home;
