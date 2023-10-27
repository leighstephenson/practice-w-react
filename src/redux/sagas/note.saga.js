import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

//TODO getting stuck at internal server error here
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

function* noteSaga() {
    yield takeEvery('FETCH_NOTES', fetchAllNotes);
    yield takeEvery('ADD_NEW_NOTE', addNewNote)
}; //End kitSaga()

export default noteSaga;