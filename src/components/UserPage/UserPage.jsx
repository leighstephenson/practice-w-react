import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { useParams } from 'react-router-dom';
import './UserPage.css';


function UserPage() {
  const user = useSelector((store) => store.user);

  //! Hooks and store
  const dispatch = useDispatch();
  const notes = useSelector(store => store.notes);
  let { id } = useParams();

  //! Fetch list of notes
  useEffect(() => {
    dispatch({ type: 'FETCH_NOTES' });
  }, []);

  //! Selects note
  const noteSelection = (note) => {
    dispatch({ type: 'SET_SELECTED_NOTE', payload: note })
    console.log(`You selected the note with this title: ${note.notetitle}`);
  };

  //! Delete note from db 
  const deleteNote = () => {
    if (window.confirm("Warning: This note will be deleted")) {
      dispatch({ type: 'DELETE_NOTE', payload: id });
    }
  }

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

      <hr />

      <div className='notesList'>
        <Typography variant="h6"> Current notes: </Typography>

        <br /> <br />

        {notes.map(note => {
          return (
            <Card key={note.id} className="noteCards"
              onClick={() => noteSelection(note)}
              sx={{
                marginBottom: 6,
                textAlign: 'center',
                boxShadow: 7,
                width: '85%',
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 2,
                paddingRight: 2,
                maxWidth: 750,
                minWidth: '25%',
              }}
            >

              <h2 className='noteDescriptors'> Title:  </h2>

              <Typography variant="h5">{note.notetitle} </Typography>

              <br />

              <h2 className='noteDescriptors'> Note: </h2>
              <p>{note.notecontent} </p>

              <Typography variant="h7"> Date Added: {note.dateadded}</Typography>
              
              <br /> <br />

              <button className="btn" onClick={deleteNote}> DELETE </button>
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
