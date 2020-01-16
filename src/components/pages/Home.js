import React, { useContext, useEffect } from "react";
import NoteForm from "../notes/NoteForm";
import Notes from "../notes/Notes";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loaduser();
    //eslint-disable-next-line
  }, []);
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
};

export default Home;
