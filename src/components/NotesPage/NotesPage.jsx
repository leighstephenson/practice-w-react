import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';

function NotesPage() {
    //! Hooks
    const dispatch = useDispatch();
    const history = useHistory();

    //! States
    let [newNote, setNewNote] = useState({ noteTitle: '', dateAdded: '', note: '' })

    // use history push to redirect
    //! Add/Submit
    const addNewNote = (event) => {
        event.preventDefault();
        dispatchEvent({ type: 'ADD_NEW_NOTE', payload: newNote, setNewNote: setNewNote });
        setNewNote({ noteTitle: '', dateAdded: '', note: '' });
    }

    //! Handle changes
    // Title
    const handleTitleChange = (event) => {
        setNewNote({ ...newNote, noteTitle: event.target.value });
    }

    // Date
    const handleDateChange = (event) => {
        setNewNote({ ...newNote, noteDate: event.target.value });
    }

    //Note
    const handleNoteContentChange = (event) => {
        setNewNote({ ...newNote, noteContent: event.target.value });
    }

    return (
        <>
            <center>
                <Typography> Let's make this a notes page. I'll add a field to create a new note to jot down any thoughts and ideas,
                    and have them display on a different page maybe?
                    Need to finish setting up the server side and dispatch </Typography>

                <br /> <br />

                <Typography variant="h4"> Add New Note</Typography>

                <br />

                <form onSubmit={addNewNote} autoComplete="off">

                    {/*//! Name Input */}
                    <TextField
                        label="Title"
                        onChange={handleTitleChange}
                        required
                        sx={{
                            width: 250,
                        }}
                    />
                    <br /> <br />

                    {/*//! Date Input */}
                    <TextField
                        type="date"
                        onChange={handleDateChange}
                        required
                        sx={{
                            width: 250,
                        }}
                    />
                    <br /> <br />

                    {/*//! Note Content Input */}
                    <TextField
                        label="Note"
                        type="text"
                        onChange={handleNoteContentChange}
                        rows="5" multiline required
                        sx={{
                            width: 250,
                        }}
                    />
                    <br /> <br />

                    {/*//! Submit Button */}
                    <Button type="submit" variant="contained">
                        Save
                    </Button>

                </form>
            </center>

        </>)



}

export default NotesPage;