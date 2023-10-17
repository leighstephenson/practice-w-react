
// Will be used to select and edit a note
const selectedNote = (state = {}, action) => {
    if (action.type === 'SET_SELECTED_NOTE') {
        return action.payload
    } else if (action.type === 'CLEAR_SELECTED_NOTE') {
        return {}
    }
    return state
};

export default selectedNote;