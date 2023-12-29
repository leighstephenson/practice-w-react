import { Button, Typography, Card } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import './NotesPage.css'

//TODO Would be nice to push users to a SUCCESS page after submitting a new note
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
        history.push('/user')
    }

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

    //! What displays
    return (
        <>
            <center>
                <p className="noteIntro"> You can express your thoughts here.<br />
                    Jot down some notes! </p>

                <br /> <br />

                <Card sx={{
                    maxWidth: '65%',
                    boxShadow: 5,
                    padding: 4,
                }}>
                    <Typography variant="h4"> Add New Note </Typography>

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
                            type="Date"
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
                        <button type="submit" className="btn">
                            Save
                        </button>

                    </form>
                </Card>

            </center>

        </>)

}

export default NotesPage;