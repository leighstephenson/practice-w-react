import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

//! Add new note
function* addNewNote(action) {
    try {        
        yield axios.post('/api/notes', action.payload);
        yield put({ type: 'FETCH_NOTES' });
    } catch (error) {
        console.log(`Error in addNewNote in saga`, error);
    }
}

//! Get all notes from the DB
function* fetchAllNotes() {
    try {
        const notes = yield axios.get('/api/notes');
        yield put({ type: 'SET_NOTES', payload: notes.data });
    } catch (error) {
        console.log('Error in fetchAllNotes in note.saga',  error);
    }
}

//! Delete note
//TODO running into error here, not getting id of note to delete
function* deleteNote(action) {
    try {
        yield axios.delete(`/api/notes/${action.payload}`)
        yield put ({ type: 'FETCH_NOTES'});
    } catch (error) {
        console.log(`Error in deleteNote in saga ${error}`);
    }
}

function* noteSaga() {
    yield takeEvery('FETCH_NOTES', fetchAllNotes);
    yield takeEvery('ADD_NEW_NOTE', addNewNote);
    yield takeEvery ('DELETE_NOTE', deleteNote)
}; //End kitSaga()

export default noteSaga;