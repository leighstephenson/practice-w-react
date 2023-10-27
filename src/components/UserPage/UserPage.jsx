import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  //! Hooks and store
  const dispatch = useDispatch();
  const notes = useSelector(store => store.notes);

  //! Fetch list of notes
  useEffect(() => {
    dispatch({ type: 'FETCH_NOTES' });
  }, []);

  //! Selects note
  const noteSelection = (note) => {
    dispatch({ type: 'SET_SELECTED_NOTE', payload: note})
    console.log(`You selected the note with this title: ${note.notetitle}`);
  };

  //! What displays
  return (
    <center>
      <div className="container">

        <Typography variant="h5"> Welcome, {user.username}! </Typography>
        <br />

        <Typography variant="h3" className='openingMessage'> Let's get coding!</Typography>

        <Typography sx={{ margin: 4, }}> Your ID is: {user.id} </Typography>

        <LogOutButton className="btn" />
        <br /> <br />


      </div>

      <div className='notesList'>
        <Typography variant="h6"> Current notes: </Typography>

        <br/> <br/>
        
        {notes.map(note => {
          return (
            <Card key={note.id} sx={{ marginBottom: 6, textAlign: 'center', boxShadow: 7, maxWidth: 750, minWidth: 50}}
              onClick={() => noteSelection(note)} >

              <h4> Title: {note.notetitle} </h4>

              <p>Date Added: {note.dateadded} </p>

              <p> Note: {note.notecontent}</p>
            </Card>
          );
        })
        }

      </div>
    </center>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
