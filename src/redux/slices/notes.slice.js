import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, text: "Перша нотатка" },
    { id: 2, text: "Друга нотатка" },
  ],
  status: "idle",
  error: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.items = state.items.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      const index = state.items.findIndex(
        (note) => note.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;
export default notesSlice.reducer;
