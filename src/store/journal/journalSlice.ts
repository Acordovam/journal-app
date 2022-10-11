import {createSlice} from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
        messageSaved: '',
        notes: [],
        active: null
        /*{
            id: 'abc1234',
            title: '',
            body: '',
            date: 0,
            imageUrls: []
        },*/
    },
    reducers: {
        addNewEmptyNote: (state, action) => {
        },
        setActiveNote: (state, action) => {
        },
        setNotes: (state, action) => {
        },
        setSaving: (state) => {
        },
        updateNote: (state, action) => {
        },
        deleteNoteById: (state, action) => {
        },
    }
});

export const {
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById
} = journalSlice.actions;