import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';

function NotesPage() {
    //! Hooks
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(store => store.user);
    const [notification, setNotification] = useState(null);
    const [noteTitle, setNoteTitle] = useState('');
    const [dateadded, setDateAdded] = useState('');
    const [note, setNote] = useState('');

    //! States
    let [newNote, setNewNote] = useState({ noteTitle: '', dateAdded: '', noteContent: '' })

    // use history push to redirect

    // //! Refresh
    // const refreshPage = () => {
    //     setTimeout(() => {
    //         window.location.reload(false);
    //     }, 10);
    // }

    //! Add/Submit
    const addNewNote = (event) => {
        event.preventDefault();
        console.log('in add/submit')
        dispatch({ type: 'ADD_NEW_NOTE', payload: newNote, setNewNote: setNewNote });
        setNewNote({ noteTitle: '', dateAdded: '', noteContent: '' });
    }

    // const addNewNote = (event) => {
    //     if (!user || !user.id) {
    //         console.error("User is not defined or does not have an ID!");
    //         return;
    //     }

    //     if (!user || !user.id) {
    //         setNotification("User information is missing. Please log in again or contact support.");
    //         return;
    //     }
    //     const noteData = {
    //         userId: user.id,
    //         noteTitle,
    //         dateadded,
    //         note
    //     };

    //     console.log('in addNewNote on NotesPage', noteData);

    //     dispatch({
    //         type: 'ADD_NOTE',
    //         payload: noteData,
    //     });
    //     setNotification("Note added successfully!");
    // };

    //! Handle changes
    // Title
    const handleTitleChange = (event) => {
        setNewNote({ ...newNote, noteTitle: event.target.value });
    }

    // Date added
    const handleDateChange = (event) => {
        setNewNote({ ...newNote, dateAdded: event.target.value });
    }

    //Note content
    const handleNoteContentChange = (event) => {
        setNewNote({ ...newNote, noteContent: event.target.value });
    }

    return (
        <>
            <center>
                <Typography> Jot down some notes! Express your thoughts here. </Typography>

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
                        required
                        onChange={handleNoteContentChange}
                        rows="5" multiline 
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